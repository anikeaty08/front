import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        {
        "imports": {
          "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
          "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
      }
    


        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        zinc: {
                            850: '#1f1f22',
                            950: '#09090b',
                        }
                    }
                }
            }
        }
    


        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            document.querySelectorAll('.reveal-line').forEach(line => {
                const words = line.innerText.split(' ');
                line.innerHTML = '';
                words.forEach(word => {
                    const outerSpan = document.createElement('span');
                    outerSpan.style.display = 'inline-block';
                    outerSpan.style.overflow = 'hidden';
                    outerSpan.style.verticalAlign = 'top';
                    outerSpan.style.marginRight = '0.25em'; 
                    
                    const innerSpan = document.createElement('span');
                    innerSpan.className = 'word-inner';
                    innerSpan.style.display = 'inline-block';
                    innerSpan.style.transform = 'translateY(110%)';
                    innerSpan.innerText = word;
                    
                    outerSpan.appendChild(innerSpan);
                    line.appendChild(outerSpan);
                });
            });

            gsap.to('.word-inner', {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.04,
                delay: 0.2, 
                scrollTrigger: {
                    trigger: "#hero-title",
                    start: "top 90%",
                }
            });
        });
    


        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
        import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
        import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
        import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'; 

        // --- Core Variables ---
        let scene, camera, renderer, composer, bloomPass, blurPass, smaaPass, outputPass;
        let clock = new THREE.Clock();
        let globalTime = 0;
        
        let floorMesh;
        const trailObjects = []; 
        const trailMaterials = []; 

        // --- Configuration ---
        const config = {
            dpr: Math.min(window.devicePixelRatio, 1.5), 
            exposure: 3.6505, 
            brightness: 4.0131, 
            bloomStrength: 0.2025,
            bloomRadius: 0.294,
            bloomThreshold: 0.0,
            speedMultiplier: 0.1,
            linesCount: 100,
            dotDensity: 70,
            dotSize: 0.25,
            dotSpeed: 1.5,
            blurStrength: 3.5,
            arcRadius: 10.0,
            bendStartZ: -150.0,
            floorLength: 132.75, 
            wallHeight: 200.0,  
            // Topographic matching color palette
            color0: '#0b101d', // Dark base
            color1: '#334155', // Mid-tone slate
            color2: '#429DFE', // Highlight copper
            color3: '#FF91E3', // Highlight white
            color4: '#1f2937'  // Deep volume gray
        };

        // Optimized Custom Curve
        class CycCurve extends THREE.Curve {
            constructor(x, zStart, zBend, radius, yEnd) {
                super();
                this.x = x;
                this.zStart = zStart;
                this.zBend = zBend;
                this.radius = radius;
                this.yEnd = yEnd;
                
                this.L_flat = Math.abs(zStart - (zBend + radius));
                this.L_arc = (Math.PI * radius) * 0.5;
                this.L_up = Math.max(0.1, yEnd - radius);
                this.totalLength = this.L_flat + this.L_arc + this.L_up;
            }
            
            getPoint(t, optionalTarget = new THREE.Vector3()) {
                const d = t * this.totalLength;
                let py = 0, pz = 0;

                if (d <= this.L_flat) {
                    pz = this.zStart - d;
                } else if (d <= this.L_flat + this.L_arc) {
                    const norm = (d - this.L_flat) / this.L_arc;
                    const eased = norm * norm * (3.0 - 2.0 * norm); 
                    const angle = (norm * 0.4 + eased * 0.6) * (Math.PI * 0.5);
                    py = this.radius * (1.0 - Math.cos(angle));
                    pz = (this.zBend + this.radius) - Math.sin(angle) * this.radius;
                } else {
                    py = this.radius + (d - (this.L_flat + this.L_arc));
                    pz = this.zBend;
                }
                return optionalTarget.set(this.x, py, pz);
            }
        }

        init();
        animate();

        function init() {
            const canvas = document.querySelector('#webgl-canvas');
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000); // Black for optimal mix-blend-screen

            camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.set(0, 20, 140);

            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: "high-performance" });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(config.dpr);
            renderer.toneMapping = THREE.LinearToneMapping;
            renderer.toneMappingExposure = config.exposure;

            camera.lookAt(0, 20, -50);

            const renderTarget = new THREE.WebGLRenderTarget(
                window.innerWidth * config.dpr, 
                window.innerHeight * config.dpr, 
                {
                    type: THREE.HalfFloatType,
                    format: THREE.RGBAFormat
                }
            );

            const renderScene = new RenderPass(scene, camera);
            
            smaaPass = new SMAAPass( window.innerWidth * config.dpr, window.innerHeight * config.dpr );

            bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), config.bloomStrength, config.bloomRadius, config.bloomThreshold);

            const foregroundBlurShader = {
                uniforms: {
                    'tDiffuse': { value: null },
                    'resolution': { value: new THREE.Vector2(window.innerWidth * config.dpr, window.innerHeight * config.dpr) },
                    'blurStrength': { value: config.blurStrength }
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
                    uniform vec2 resolution;
                    uniform float blurStrength;
                    varying vec2 vUv;
                    void main() {
                        float mask = 1.0 - smoothstep(0.0, 0.35, vUv.y);
                        float radius = mask * blurStrength;
                        if (radius < 0.1) {
                            gl_FragColor = texture2D(tDiffuse, vUv);
                        } else {
                            vec4 color = vec4(0.0);
                            float total = 0.0;
                            const float GA = 2.3999632; 
                            for (int i = 0; i < 32; i++) { 
                                float f = float(i);
                                float r = sqrt(f) * radius;
                                float theta = f * GA;
                                vec2 offset = vec2(cos(theta), sin(theta)) * (r / resolution);
                                color += texture2D(tDiffuse, vUv + offset);
                                total += 1.0;
                            }
                            gl_FragColor = color / total;
                        }
                    }
                `
            };
            blurPass = new ShaderPass(foregroundBlurShader);
            outputPass = new OutputPass();

            composer = new EffectComposer(renderer, renderTarget);
            composer.setPixelRatio(config.dpr); 
            composer.addPass(renderScene);
            composer.addPass(smaaPass); 
            composer.addPass(bloomPass);
            composer.addPass(blurPass); 
            composer.addPass(outputPass); 

            createFloor();
            generateTrails();
            updateGeometries();

            window.addEventListener('resize', onWindowResize);
        }

        function createFloor() {
            const floorMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide });
            floorMesh = new THREE.Mesh(new THREE.BufferGeometry(), floorMat);
            floorMesh.position.set(0, -0.5, -0.5);
            floorMesh.renderOrder = 1;
            scene.add(floorMesh);
        }

        function generateTrails() {
            const group = new THREE.Group();
            scene.add(group);

            const vertexShader = `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewPosition;
                void main() {
                    vUv = uv;
                    vNormal = normalMatrix * normal;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vViewPosition = -mvPosition.xyz;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `;

            const fragmentShader = `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewPosition;
                uniform float uTime;
                uniform vec3 uColor;
                uniform float uSpeed;
                uniform float uOffset;
                uniform float uTailLength;
                uniform float uIntensityMultiplier;
                uniform float uBendUv;
                uniform float uIsReflection;
                uniform float uDotDensity;
                uniform float uDotSize;
                uniform float uDotSpeed;
                uniform float uBrightness;

                float hash(vec2 p) {
                    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
                }

                void main() {
                    float t = fract(uTime * uSpeed + uOffset);
                    float dist = fract(t - vUv.x + 1.0);
                    
                    float baseAlpha = smoothstep(uTailLength, 0.0, dist);
                    baseAlpha = pow(max(0.0, baseAlpha), 1.2);

                    vec3 viewDir = normalize(vViewPosition);
                    float fresnel = abs(dot(normalize(vNormal), viewDir));
                    
                    float edgeSoftness = smoothstep(0.0, 0.02, fresnel);
                    baseAlpha *= edgeSoftness;

                    float core = pow(max(0.0, baseAlpha), 3.0) * 1.5; 

                    float movingUV = vUv.x - (uTime * uSpeed * uDotSpeed) - uOffset;
                    float signalPos = movingUV * uDotDensity;
                    float dotId = floor(signalPos); 
                    float dotLocal = fract(signalPos);

                    float distToCenter = length(vec2((dotLocal - 0.5) * 2.0, (fract(vUv.y + 0.5) - 0.5) * 6.0)); 
                    float dotShape = 1.0 - smoothstep(0.0, max(0.001, uDotSize), distToCenter);
                    float dotFinal = dotShape * step(0.6, hash(vec2(dotId, uOffset))) * (sin(uTime * 4.0 + hash(vec2(dotId)) * 6.28) * 0.3 + 0.7) * baseAlpha;
                    
                    if (uIsReflection > 0.5) {
                        float refFade = 1.0 - smoothstep(uBendUv - 0.015, uBendUv, vUv.x);
                        
                        baseAlpha *= refFade;
                        core *= refFade;
                        dotFinal *= refFade * 0.1; 
                        baseAlpha = pow(max(0.0, baseAlpha), 0.5) * (0.7 + hash(vUv * 300.0 + uTime * 0.05) * 0.3);
                        core *= 0.3;
                    }

                    vec3 trailColor = uColor * (baseAlpha + core * 1.5) * uIntensityMultiplier * uBrightness;
                    vec3 rgb = trailColor / max(1.0 - clamp(dotFinal * 1.8, 0.0, 0.95), 0.001) + uColor * dotFinal * 2.5 * uIntensityMultiplier * uBrightness;

                    gl_FragColor = vec4(rgb, (baseAlpha + dotFinal) * uIntensityMultiplier);
                }
            `;

            for (let i = 0; i < config.linesCount; i++) {
                const normIdx = (i / (config.linesCount - 1)) * 2 - 1; 
                
                const linearPos = normIdx;
                const expPos = Math.sign(normIdx) * Math.pow(Math.abs(normIdx), 1.2);
                let startX = (linearPos * 0.5 + expPos * 0.5) * 80; 
                
                startX += (Math.random() - 0.5) * 2.0;
                
                const thickness = Math.random() * 0.2 + 0.1;
                const colorIdx = Math.floor(Math.random() * 5);
                
                const uniforms = {
                    uTime: { value: 0 },
                    uColor: { value: new THREE.Color(config[`color${colorIdx}`]) },
                    uColorIndex: { value: colorIdx },
                    uSpeed: { value: Math.random() * 0.5 + 0.2 },
                    uOffset: { value: Math.random() },
                    uTailLength: { value: Math.random() * 0.4 + 0.3 },
                    uIntensityMultiplier: { value: 1.0 },
                    uBendUv: { value: 0.0 }, 
                    uIsReflection: { value: 0.0 }, 
                    uDotDensity: { value: config.dotDensity },
                    uDotSize: { value: config.dotSize },
                    uDotSpeed: { value: config.dotSpeed },
                    uBrightness: { value: config.brightness }
                };

                const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });

                const mesh = new THREE.Mesh(new THREE.BufferGeometry(), material);
                const refMaterial = material.clone();
                refMaterial.uniforms.uIntensityMultiplier.value = 0.4;
                refMaterial.uniforms.uIsReflection.value = 1.0;
                const refMesh = new THREE.Mesh(new THREE.BufferGeometry(), refMaterial);
                refMesh.scale.y = -1; refMesh.position.y = -1.0; 

                group.add(mesh, refMesh);
                trailMaterials.push(material.uniforms, refMaterial.uniforms);
                trailObjects.push({ mesh, refMesh, startX, thickness });
            }
        }

        function updateGeometries() {
            if (floorMesh.geometry) floorMesh.geometry.dispose();
            
            const floorGeo = new THREE.PlaneGeometry(1000, 1000, 1, 1500); 
            floorGeo.rotateX(-Math.PI * 0.5);
            const pos = floorGeo.attributes.position.array;
            
            for (let i = 0; i < pos.length; i += 3) {
                if (pos[i + 2] < config.bendStartZ) {
                    let d = config.bendStartZ - pos[i + 2];
                    let maxA = config.arcRadius * Math.PI * 0.5;
                    if (d < maxA) {
                        let n = d / maxA;
                        let a = (n * 0.4 + (n * n * (3.0 - 2.0 * n)) * 0.6) * (Math.PI * 0.5);
                        pos[i + 1] = config.arcRadius * (1.0 - Math.cos(a));
                        pos[i + 2] = (config.bendStartZ) - Math.sin(a) * config.arcRadius;
                    } else {
                        pos[i + 1] = config.arcRadius + (d - maxA);
                        pos[i + 2] = config.bendStartZ - config.arcRadius;
                    }
                }
            }
            floorGeo.computeVertexNormals();
            floorMesh.geometry = floorGeo;

            const bendUv = Math.abs(config.floorLength - config.bendStartZ) / (Math.abs(config.floorLength - config.bendStartZ) + (Math.PI * config.arcRadius) * 0.5 + Math.max(0.1, config.wallHeight - config.arcRadius));

            trailObjects.forEach(obj => {
                const path = new CycCurve(obj.startX, config.floorLength, config.bendStartZ - config.arcRadius, config.arcRadius, config.wallHeight);
                const geo = new THREE.TubeGeometry(path, 200, obj.thickness, 8, false);
                if (obj.mesh.geometry) obj.mesh.geometry.dispose();
                obj.mesh.geometry = obj.refMesh.geometry = geo;
                obj.mesh.material.uniforms.uBendUv.value = obj.refMesh.material.uniforms.uBendUv.value = bendUv;
            });
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            if (smaaPass) smaaPass.setSize(window.innerWidth * config.dpr, window.innerHeight * config.dpr);
            blurPass.uniforms.resolution.value.set(window.innerWidth * config.dpr, window.innerHeight * config.dpr);
        }

        function animate() {
            requestAnimationFrame(animate);
            globalTime += clock.getDelta() * config.speedMultiplier;
            trailMaterials.forEach(m => m.uTime.value = globalTime);
            composer.render();
        }
    


      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
      });

      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      tl.fromTo(".gs-nav",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(".gs-hero-text",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.5"
      )
      .fromTo(".gs-title-line",
          { y: "100%" },
          { y: "0%", duration: 1, stagger: 0.15, ease: "power4.out" },
          "-=0.8"
      )
      .fromTo(".gs-hero-btn",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.5"
      )
      .fromTo(".gs-hero-img",
          { y: "40%", opacity: 0, scale: 0.95 },
          { y: "20%", opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
          "-=1"
      );

      gsap.to("#hero-img-inner", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
      });

      gsap.utils.toArray('.gs-bg-text').forEach(text => {
          gsap.to(text, {
              y: -100,
              ease: "none",
              scrollTrigger: {
                  trigger: text.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
              }
          });
      });

      gsap.utils.toArray('.gs-fade-up').forEach(element => {
          gsap.fromTo(element,
              { y: 50, opacity: 0 },
              {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                      trigger: element,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  }
              }
          );
      });

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time)=>{
          lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<title className="">CogStream | Optimize Your Focus</title>












<div className="fixed inset-0 z-0 pointer-events-none">
<img alt="Background Portrait" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform origin-center transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aea64b5-bfda-4948-bf88-d4e5d45762fa_3840w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent md:w-3/4"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(-45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 12px)'}}>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-70 mix-blend-screen" data-engine="three.js r160" height="1531" id="webgl-canvas" style={{width: '1568px', height: '1021px'}} width="2352"></canvas>




</div>
<section className="min-h-[130vh] flex flex-col overflow-hidden w-full pt-8 relative items-center" id="hero">
<div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-20">
<h1 className="text-[25vw] leading-[0.8] font-medium tracking-tight text-white/5 uppercase mix-blend-overlay gs-bg-text">
          GLOBAL
        </h1>
<h1 className="text-[25vw] leading-[0.8] font-medium tracking-tight text-white/5 uppercase mix-blend-overlay gs-bg-text">
          NEXUS
        </h1>
</div>
<nav className="w-full max-w-[95%] mx-auto flex justify-between items-center z-20 relative gs-nav">
<div className="text-xl font-medium tracking-tight uppercase">AURALIS.</div>
<div className="hidden md:flex items-center gap-8 bg-[#080808]/80 backdrop-blur-md rounded-full px-6 py-2 border border-[#262626]">
<a className="flex items-center gap-2 text-sm font-light text-[#F97316]" href="#">
<span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
            Retreat
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#">
            Enterprise
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#">
            Syndicate
          </a>
</div>
<a className="bg-white text-[#020617] px-5 py-2 rounded-full text-sm font-normal flex items-center gap-2 hover:bg-[#D4D4D4] transition-colors" href="#">
          Book now
          <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</nav>
<div className="w-full max-w-[90%] mx-auto mt-20 relative z-10 flex flex-col items-center">
<div className="w-full flex justify-between absolute top-[10%] text-xs font-light text-white/50 uppercase tracking-widest hidden lg:flex gs-hero-text">
<div className="max-w-[200px]">
            Auralis Is For Visionaries And Driven Innovators. Anyone That Dares
            To Build The Future From Scratch.
          </div>
<div className="text-right flex flex-col gap-1">
<span>Innovation //</span>
<span>Fluidity //</span>
<span>Sustainability //</span>
</div>
</div>
<div className="text-center relative gs-title mt-12 md:mt-0">
<div className="absolute -left-10 md:-left-32 top-1/2 -translate-y-1/2 gs-hero-btn">
<a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-normal flex items-center gap-2 hover:bg-white/20 transition-all" href="#">
              Reserve Access
              <span className="w-6 h-6 rounded-full text-[#020617] flex items-center justify-center bg-[#F97316]">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
<h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-medium tracking-tight uppercase text-white drop-shadow-2xl z-20 relative">
<span className="block overflow-hidden">
<span className="block gs-title-line">WHERE</span>
</span>
<span className="block overflow-hidden">
<span className="block gs-title-line">VISION</span>
</span>
<span className="block overflow-hidden text-transparent clip-text-image">
<span className="block gs-title-line">MEETS</span>
</span>
</h1>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] w-[90%] md:w-[70%] h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden z-30 gs-hero-img shadow-2xl">
<div className="w-full h-full bg-black/20 absolute inset-0 z-10"></div>
<img alt="Modern Structure" className="w-full h-full object-cover scale-110" id="hero-img-inner" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c69b0daa-dea4-4516-9b14-b46c6f05101c_1600w.webp"/>
</div>
</section>
<section className="md:px-12 text-white z-20 pt-[30vh] pr-6 pb-24 pl-6 relative bg-[#080808]" id="villas">
<div className="absolute bottom-10 right-10 text-[18vw] font-medium tracking-tight text-white/40 uppercase leading-none pointer-events-none gs-fade-up">
        TOKYO.
      </div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center">
<h2 className="text-6xl md:text-[6vw] leading-[0.9] font-medium tracking-tight text-white uppercase gs-fade-up">
            9 STUDIOS
            <br/>
            IN THE
            <br/>
            HEART OF
          </h2>
<div className="mt-12 space-y-4 text-sm font-light gs-fade-up border-l-2 border-white/30 pl-6">
<div className="flex items-center gap-4 text-white">
<span className="text-xs opacity-70 font-mono">// 01</span>
<span className="text-base font-normal">
                Studios In The Heart Of Tokyo
              </span>
</div>
<div className="text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors cursor-pointer">
              Private Pods
            </div>
<div className="text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors cursor-pointer">
              Collaborative Hubs
            </div>
<div className="text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors cursor-pointer">
              2 VR Pods
            </div>
<div className="text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors cursor-pointer">
              Fully Integrated
            </div>
</div>
<div className="mt-12 flex gap-4 gs-fade-up">
<button className="w-16 h-16 rounded-full border border-[#262626] flex items-center justify-center hover:bg-[#F97316] hover:text-[#020617] transition-all">
<iconify-icon className="" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="flex hover:bg-[#F97316] hover:text-[#020617] transition-all text-[#FFFFFF] bg-[#262626] w-16 h-16 rounded-full items-center justify-center">
<iconify-icon className="" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="relative h-[400px] md:h-[600px] w-full lg:w-[120%] lg:-ml-[10%] rounded-3xl overflow-hidden gs-fade-up shadow-2xl">
<img alt="Glass Office" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp"/>
</div>
</div>
</section>
<section className="bg-[#020617] py-24 px-6 md:px-12 relative" id="hotel-intro">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col items-start gs-fade-up">
<div className="px-3 py-1 rounded-full border border-[#262626] text-xs font-light uppercase tracking-wider mb-6">
            Premium Assets
          </div>
<h2 className="text-7xl md:text-[8vw] leading-[0.9] font-medium tracking-tight uppercase mb-8">
            A SANCTUARY
          </h2>
<p className="text-white/50 text-sm font-light max-w-sm mb-12">
            Auralis Is For Visionaries And Driven Innovators. Anyone That Dares
            To Build The Future From Scratch. And It Is For The Bold. Auralis Is
            For Thinkers And Creators. Anyone That Dares To Build.
          </p>
<div className="flex items-center gap-6 text-xs font-light text-white/40 uppercase tracking-widest">
<span className="">// Coordinates</span>
<div className="flex gap-2">
<img className="w-12 h-8 object-cover rounded-sm grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d50f4a31-1a94-4495-b28b-7fb99a6f6730_320w.jpg"/>
<img className="w-12 h-8 object-cover rounded-sm grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_800w.jpg"/>
</div>
</div>
<div className="mt-12 ml-12">
<a className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-normal flex items-center gap-3 hover:bg-white/10 transition-all" href="#">
              Reserve Access
              <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
</a>
</div>
</div>
<div className="flex flex-col gap-6 gs-fade-up lg:mt-24 relative">
<div className="flex justify-between items-end mb-4">
<h3 className="text-xl font-medium uppercase tracking-tight">
              A SANCTUARY
            </h3>
<button className="w-8 h-8 rounded-full text-[#020617] flex items-center justify-center bg-[#F97316]">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="w-full h-[250px] rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d50f4a31-1a94-4495-b28b-7fb99a6f6730_1600w.jpg"/>
</div>
<div className="space-y-4 mt-8 border-t border-white/10 pt-6">
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-sm font-normal uppercase tracking-wider group-hover:text-[#F97316] transition-colors">
                A STAGE FOR KEYNOTES
              </span>
<iconify-icon className="text-white/50 group-hover:text-[#F97316] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-sm font-normal uppercase tracking-wider group-hover:text-[#F97316] transition-colors">
                AN ELITE SYNDICATE
              </span>
<iconify-icon className="text-white/50 group-hover:text-[#F97316] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#020617] py-12 px-6 md:px-12 relative overflow-hidden" id="hotel-grid">
<h2 className="text-[12vw] leading-none font-medium tracking-tight text-white/5 uppercase text-center absolute top-10 left-0 w-full pointer-events-none select-none gs-bg-text">
        THE RETREAT
      </h2>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gs-fade-up">
<p className="text-xs font-light text-white/50 max-w-xs uppercase tracking-widest leading-relaxed">
            Auralis Is For Visionaries And Driven Innovators. Anyone That Dares
            To Build The Future From Scratch. And It Is For The Bold.
          </p>
<a className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-normal flex items-center gap-3 hover:bg-white/10 transition-all mt-6 md:mt-0" href="#">
            Reserve Access
            <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
<div className="h-[200px] rounded-2xl overflow-hidden gs-fade-up hidden md:block">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aff37414-fc5d-452c-8f73-d57ceff4f1c5_800w.webp"/>
</div>
<div className="md:col-span-2 h-[350px] md:h-[450px] rounded-2xl overflow-hidden gs-fade-up">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfef5098-c30f-4cd9-b4ac-04b2673ab943_1600w.jpg"/>
</div>
<div className="h-[200px] rounded-2xl overflow-hidden gs-fade-up">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb6b5223-2641-4ade-9b9d-aae1c300146a_800w.webp"/>
</div>
</div>
</div>
</section>
<section className="bg-[#020617] py-24 relative overflow-hidden" id="corporations">
<div className="max-w-[95%] mx-auto px-6 md:px-12 mb-12 gs-fade-up">
<h2 className="text-sm font-light text-white/50 uppercase tracking-widest mb-4">
          Tailored For
        </h2>
<h1 className="text-5xl md:text-[7vw] leading-[0.85] font-medium tracking-tight uppercase mb-8">
          INNOVATORS
        </h1>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<p className="text-xs font-light text-white/50 max-w-sm uppercase tracking-widest leading-relaxed">
            Auralis Is For Visionaries And Driven Innovators. Anyone That Dares
            To Build The Future From Scratch. And It Is For The Bold Auralis Is
            For Thinkers.
          </p>
<a className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-normal flex items-center gap-3 hover:bg-white/10 transition-all" href="#">
            Reserve Access
            <span className="w-6 h-6 rounded-full text-[#020617] flex items-center justify-center bg-[#F97316]">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="w-full h-[60vh] md:h-[80vh] relative gs-fade-up">
<img className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b853ee7-0035-47f0-a177-608832b1214c_3840w.webp"/>
<div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-none">
<button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-[#262626] text-white flex items-center justify-center pointer-events-auto hover:bg-[#F97316] hover:text-[#020617] transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full text-[#020617] flex items-center justify-center pointer-events-auto hover:bg-white transition-all bg-[#F97316]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute bottom-10 right-10 md:right-[10%] bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs">
<p className="text-xs font-light text-white/70 uppercase tracking-widest mb-2">
            Engineered For
          </p>
<h3 className="text-xl font-medium tracking-tight uppercase">
            Global Networking
          </h3>
</div>
</div>
<div className="border-y border-[#262626] py-4 mt-10 bg-[#020617] marquee-container relative z-10">
<div className="marquee-content text-2xl md:text-3xl font-normal tracking-tight uppercase text-white/20 flex gap-8">
<span className="">INNOVATION • FLUIDITY • SUSTAINABILITY •</span>
<span>INNOVATION • FLUIDITY • SUSTAINABILITY •</span>
<span>INNOVATION • FLUIDITY • SUSTAINABILITY •</span>
<span>INNOVATION • FLUIDITY • SUSTAINABILITY •</span>
</div>
</div>
</section>
<section className="text-white py-24 px-6 md:px-12 bg-[#080808]" id="membership">
<div className="max-w-7xl mx-auto gs-fade-up">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="">
<div className="px-3 py-1 rounded-full border border-[#262626] text-xs font-medium uppercase tracking-wider mb-6 inline-block">
              Unparalleled Tier Value
            </div>
<h2 className="text-[8vw] md:text-7xl leading-[0.9] font-medium tracking-tight text-white uppercase">
              AN
              <br/>
              EXCLUSIVE
              <br/>
              SYNDICATE
            </h2>
</div>
<div className="max-w-md mt-12 md:mt-0 flex flex-col items-end text-right">
<p className="text-sm font-light opacity-80 mb-8 text-left md:text-right">
              Auralis delivers unprecedented access to creative environments
              designed for the bold. We integrate seamless technology with
              stunning aesthetics to foster connections, enabling our members to
              thrive.
            </p>
<a className="bg-white text-[#020617] px-5 py-2 rounded-full text-xs font-medium uppercase flex items-center gap-3 hover:bg-[#D4D4D4] transition-all shadow-sm" href="#">
              Reserve Access
              <span className="w-5 h-5 rounded-full bg-[#020617] text-white flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 border-t border-[#262626]">
<div className="border-r border-[#262626] p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:bed-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                01
              </span>
</div>
<div className="">
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                PRIME
                <br/>
                REST
              </h4>
</div>
</div>
<div className="border-r border-[#262626] p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:cup-hot-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                02
              </span>
</div>
<div className="">
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                ARTISAN
                <br/>
                ROASTS
              </h4>
</div>
</div>
<div className="border-r border-[#262626] p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer hidden md:flex">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:dumbbell-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                03
              </span>
</div>
<div className="">
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                KINETIC
                <br/>
                ZONES
              </h4>
</div>
</div>
<div className="border-r border-[#262626] p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer hidden md:flex">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:camera-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                04
              </span>
</div>
<div>
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                MEDIA
                <br/>
                LABS
              </h4>
</div>
</div>
<div className="border-r border-[#262626] p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer hidden md:flex">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:wineglass-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                05
              </span>
</div>
<div>
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                EVENING
                <br/>
                MIXERS
              </h4>
</div>
</div>
<div className="p-6 flex flex-col gap-8 group hover:bg-[#141414] hover:text-[#F97316] transition-colors cursor-pointer hidden md:flex">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#979797] group-hover:text-[#F97316]" icon="solar:medal-star-linear" width="24"></iconify-icon>
<span className="text-3xl font-extralight opacity-20 group-hover:opacity-100 transition-opacity font-mono">
                06
              </span>
</div>
<div>
<span className="text-xs font-light opacity-50 block mb-1">//</span>
<h4 className="font-medium uppercase text-sm group-hover:text-white">
                ELITE
                <br/>
                ACCESS
              </h4>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-12 text-white pt-12 pb-24 relative bg-[#020617] border-t border-[#262626]" id="who-for">
<div className="gs-fade-up max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="">
<div className="px-3 py-1 rounded-full border border-[#262626] text-xs font-medium uppercase tracking-wider mb-6 inline-block">
              Strategic Entry
            </div>
<h2 className="text-5xl md:text-7xl leading-[0.9] font-medium tracking-tight text-white uppercase">
              WHO IS
              <br/>
              AURALIS
              <br/>
              FOR?
            </h2>
<div className="mt-12 flex items-start gap-4">
<span className="text-xs font-mono opacity-50 mt-1 font-light">
                // 01
              </span>
<div className="">
<h4 className="font-medium uppercase text-sm mb-1">
                  UNPARALLELED
                  <br/>
                  TIER VALUE
                </h4>
</div>
</div>
</div>
<div className="max-w-sm mt-12 md:mt-24">
<p className="text-xs font-light opacity-80 leading-relaxed border-l-2 border-[#262626] pl-4">
              Auralis delivers unprecedented access to creative environments
              designed for the bold. We integrate seamless technology.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-[#080808] border border-[#262626] rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row gap-8 items-end relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 bg-[#141414] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
<div className="w-full md:w-1/2 relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-4xl font-extralight opacity-20 font-mono">
                  01
                </span>
</div>
<div className="h-64 rounded-2xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b26cbcf-e24c-4101-bac1-866062e99f3b_800w.webp"/>
</div>
<h3 className="text-2xl font-medium uppercase tracking-tight leading-none text-[#F97316]">
                I AM A
                <br/>
                DIGITAL
                <br/>
                ARTIST
              </h3>
</div>
<div className="w-full md:w-1/2 pb-2 relative z-10">
<p className="text-xs font-light text-white/50 uppercase tracking-widest leading-relaxed mb-4 border-l border-white/20 pl-3">
                I Am A Digital Artist Who Demands Inspiration
              </p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<a className="text-xs font-medium uppercase tracking-wider flex items-center justify-between group-hover:text-[#F97316] transition-colors" href="#">
                DISCOVER
                <iconify-icon className="group-hover:text-[#F97316]" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="bg-[#080808] border border-[#262626] rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row gap-8 items-end relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 bg-[#141414] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
<div className="w-full md:w-1/2 relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-4xl font-extralight opacity-20 font-mono">
                  02
                </span>
</div>
<div className="h-64 rounded-2xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_800w.webp"/>
</div>
<h3 className="text-2xl font-medium uppercase tracking-tight leading-none text-white group-hover:text-[#F97316] transition-colors">
                I AM A
                <br/>
                TECH FOUNDER
              </h3>
</div>
<div className="w-full md:w-1/2 pb-2 relative z-10">
<p className="text-xs font-light text-white/50 uppercase tracking-widest leading-relaxed mb-4 border-l border-white/20 pl-3">
                I Want To Connect With Forward-Thinking Leaders
              </p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<a className="text-xs font-medium uppercase tracking-wider flex items-center justify-between group-hover:text-[#F97316] transition-colors" href="#">
                DISCOVER
                <iconify-icon className="group-hover:text-[#F97316]" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<footer className="overflow-hidden bg-[#080808] pt-24 pb-8 relative" id="footer">
<div className="md:px-12 z-10 flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<h2 className="text-[10vw] leading-[0.8] font-medium tracking-tight text-white uppercase text-center mb-12 gs-fade-up">
      EXPAND
      <br/>
      YOUR
      <span className="text-transparent" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
        HORIZON
      </span>
</h2>
<div className="w-full h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden mb-16 gs-fade-up relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10"></div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30e3ef4-40d7-42ff-80da-9a2204d74fdb_1600w.webp"/>
<div className="absolute bottom-10 left-10 z-20">
<h3 className="text-3xl font-medium uppercase tracking-tight leading-none max-w-sm">
          WHERE VISIONARY MINDS GATHER.
        </h3>
</div>
</div>
<div className="flex flex-col xl:flex-row w-full border-white/10 border-t pt-12 items-start justify-between gs-fade-up">
<div className="mb-12 xl:mb-0">
<div className="text-2xl font-medium tracking-tight uppercase text-white mb-6">AURALIS.</div>
<p className="text-xs font-light text-white/50 max-w-xs uppercase tracking-widest leading-relaxed">
          Auralis Is For Visionaries And Driven Innovators. Anyone That Dares To Build The Future From Scratch.
        </p>
</div>
<div className="flex flex-wrap gap-12 md:gap-24">
<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">
            CONNECT
          </h4>
<a className="text-sm font-light text-white/70 hover:text-[#F97316] transition-colors block mb-3" href="mailto:hello@auralis.com">
            hello@auralis.com
          </a>
<a className="text-sm font-light text-white/70 hover:text-[#F97316] transition-colors block" href="tel:+8198765432">
            +81 987 654 32
          </a>
</div>
<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">
            AURALIS
          </h4>
<div className="flex gap-12">
<ul className="space-y-3">
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  Retreat
                </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  Enterprise
                </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  Syndicate
                </a>
</li>
</ul>
<ul className="space-y-3">
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">
            SOCIALS
          </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                Instagram
              </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                Twitter
              </a>
</li>
<li>
<a className="text-sm font-light text-white/50 hover:text-white transition-colors" href="#">
                LinkedIn
              </a>
</li>
</ul>
</div>
</div>
</div>
<div className="w-full border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gs-fade-up">
<ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 text-xs font-light text-white/50 uppercase tracking-widest mb-6 md:mb-0">
<li><a className="hover:text-[#F97316] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#F97316] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#F97316] transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-[#F97316] transition-colors" href="#">Legal</a></li>
</ul>
<div className="text-xs font-light text-white/40 uppercase tracking-widest text-center md:text-right">
<p>Copyright © 2025 Auralis. All Rights Reserved.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
