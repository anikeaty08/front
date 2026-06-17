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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const reveals = document.querySelectorAll(".reveal");
      const textReveals = document.querySelectorAll(
        "main section :is(h1, h2, h3, h4, p, li), footer :is(h2, h3, h4, p, li)"
      );
      const animatedElements = [...new Set([...reveals, ...textReveals])];

      animatedElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.transition = "opacity 900ms ease-out, transform 900ms ease-out";
        el.style.willChange = "opacity, transform";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = animatedElements.indexOf(entry.target);
              entry.target.style.transitionDelay = `${Math.min(index % 5, 4) * 75}ms`;
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
              entry.target.style.willChange = "auto";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      animatedElements.forEach((el) => observer.observe(el));

      const heroObject = document.getElementById("heroObject");
      const floatingPanels = document.querySelectorAll(".floating-panel");

      let pointerX = 0;
      let pointerY = 0;
      let scrollY = 0;

      function animateHero() {
        const time = Date.now() * 0.00035;
        const float = Math.sin(time) * 10;
        const rotateX = pointerY * -4;
        const rotateY = pointerX * 5;
        const scrollFloat = Math.min(scrollY * 0.04, 34);

        if (heroObject) {
          heroObject.style.transform = `translateY(${float - scrollFloat}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        floatingPanels.forEach((panel) => {
          panel.style.boxShadow = `0 28px 90px rgba(0, 0, 0, 0.48), 0 0 42px rgba(165, 243, 252, ${0.025 + Math.abs(Math.sin(time)) * 0.025})`;
        });

        requestAnimationFrame(animateHero);
      }

      window.addEventListener("mousemove", (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      });

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
      });

      animateHero();
    


      import * as THREE from 'three';
      import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
      import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
      import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
      import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
      import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
      import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
      let scene, camera, renderer, composer, bloomPass, blurPass, smaaPass, outputPass;
      let clock = new THREE.Clock();
      let globalTime = 0;
      let floorMesh;
      const trailObjects = [];
      const trailMaterials = [];
      let canvas, container;
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
        color0: '#080c14',
        color1: '#0ea5e9',
        color2: '#22d3ee',
        color3: '#ffffff',
        color4: '#0b1220'
      };
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
      function getWidth() { return container.clientWidth; }
      function getHeight() { return container.clientHeight; }
      function init() {
        canvas = document.querySelector('#webgl-canvas');
        if (!canvas) return;
        container = canvas.parentElement;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        camera = new THREE.PerspectiveCamera(55, getWidth() / getHeight(), 1, 2000);
        camera.position.set(0, 20, 140);
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: "high-performance" });
        renderer.setSize(getWidth(), getHeight());
        renderer.setPixelRatio(config.dpr);
        renderer.toneMapping = THREE.LinearToneMapping;
        renderer.toneMappingExposure = config.exposure;
        camera.lookAt(0, 20, -50);
        const renderTarget = new THREE.WebGLRenderTarget(
          getWidth() * config.dpr,
          getHeight() * config.dpr,
          { type: THREE.HalfFloatType, format: THREE.RGBAFormat }
        );
        const renderScene = new RenderPass(scene, camera);
        smaaPass = new SMAAPass( getWidth() * config.dpr, getHeight() * config.dpr );
        bloomPass = new UnrealBloomPass(new THREE.Vector2(getWidth(), getHeight()), config.bloomStrength, config.bloomRadius, config.bloomThreshold);
        const foregroundBlurShader = {
          uniforms: {
            'tDiffuse': { value: null },
            'resolution': { value: new THREE.Vector2(getWidth() * config.dpr, getHeight() * config.dpr) },
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
        if(!camera || !renderer || !composer) return;
        camera.aspect = getWidth() / getHeight();
        camera.updateProjectionMatrix();
        renderer.setSize(getWidth(), getHeight());
        composer.setSize(getWidth(), getHeight());
        if (smaaPass) smaaPass.setSize(getWidth() * config.dpr, getHeight() * config.dpr);
        if (blurPass && blurPass.uniforms && blurPass.uniforms.resolution) {
          blurPass.uniforms.resolution.value.set(getWidth() * config.dpr, getHeight() * config.dpr);
        }
      }
      function animate() {
        requestAnimationFrame(animate);
        if(!composer) return;
        globalTime += clock.getDelta() * config.speedMultiplier;
        trailMaterials.forEach(m => m.uTime.value = globalTime);
        composer.render();
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
      
<div className="pointer-events-none fixed inset-0 -z-50" style={{background: 'radial-gradient(circle at 50% -10%, rgba(88, 166, 255, 0.16), transparent 36%), radial-gradient(circle at 82% 18%, rgba(103, 232, 249, 0.08), transparent 28%), linear-gradient(180deg, #0b1020 0%, #080c14 42%, #0a0d13 100%)'}}></div>
<div className="pointer-events-none fixed inset-0 -z-40 opacity-[0.035]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="mx-auto min-h-screen w-full max-w-[1360px] border-x border-white/[0.06]">
<div className="pointer-events-none fixed left-1/2 top-0 -z-30 hidden h-full w-full max-w-[1360px] -translate-x-1/2 grid-cols-4 md:grid">
<div className="border-r border-white/[0.045]"></div>
<div className="border-r border-white/[0.045]"></div>
<div className="border-r border-white/[0.045]"></div>
<div></div>
</div>
<header className="sticky border-white/[0.06] [animation:animationIn_0.8s_ease-out_0.1s_both] z-50 bg-[#080c14]/70 border-b top-0 backdrop-blur-2xl">
<nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
<a className="group flex items-center gap-3" href="#">
<span className="text-base font-semibold text-white tracking-[-0.035em] font-geist">
              Pulsedesk
            </span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="relative text-sm text-slate-400 transition duration-300 ease-out hover:text-white font-geist" href="#problem">
              Problem
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-200/70 transition-all duration-300 ease-out hover:w-full"></span>
</a>
<a className="relative text-sm text-slate-400 transition duration-300 ease-out hover:text-white font-geist" href="#how">
              How it works
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-200/70 transition-all duration-300 ease-out hover:w-full"></span>
</a>
<a className="relative text-sm text-slate-400 transition duration-300 ease-out hover:text-white font-geist" href="#reviews">
              Reviews
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-200/70 transition-all duration-300 ease-out hover:w-full"></span>
</a>
<a className="relative text-sm text-slate-400 transition duration-300 ease-out hover:text-white font-geist" href="#pricing">
              Pricing
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-200/70 transition-all duration-300 ease-out hover:w-full"></span>
</a>
</div>
<a className="hidden rounded-full border border-cyan-200/20 bg-cyan-100 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-950/20 transition duration-300 ease-out hover:scale-[1.03] hover:border-cyan-200/35 hover:bg-cyan-50 hover:shadow-cyan-900/25 sm:inline-flex font-geist" href="#pricing">
            Start free trial
          </a>
<button aria-label="Open menu" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 md:hidden">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</nav>
</header>
<main className="">
<section className="overflow-hidden sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pt-24 lg:pb-24 pt-20 pr-5 pb-24 pl-5 relative" id="blueprint">
<canvas className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen w-full h-full" id="webgl-canvas"></canvas>
<div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl"></div>
<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 w-full max-w-[1280px] mr-auto ml-auto gap-x-14 gap-y-14 items-center">

<div className="reveal [animation:animationIn_0.8s_ease-out_0.1s_both] z-10 relative" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 shadow-2xl shadow-black/20 backdrop-blur-xl font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-lg shadow-cyan-200/40"></span>
                Task management for small teams that want clarity fast
              </div>
<h1 className="sm:text-6xl lg:text-7xl text-5xl font-medium text-white tracking-tighter font-jakarta max-w-4xl" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                Task management without the overwhelm.
              </h1>
<p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                Pulsedesk helps small teams, startups, and freelancers organize
                tasks, track deadlines, and keep work in one calm workspace
                without complex setup or a learning curve.
              </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 shadow-cyan-950/30 transition duration-300 ease-out hover:scale-[1.03] hover:bg-cyan-50 hover:shadow-cyan-300/10 text-sm font-semibold text-slate-950 bg-cyan-100 rounded-full pt-3 pr-5 pb-3 pl-5 shadow-2xl font-geist" href="#pricing">
                  Start free trial
                  <iconify-icon className="transition duration-300 ease-out group-hover:translate-x-0.5" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 ease-out hover:scale-[1.02] hover:border-white/[0.18] hover:bg-white/[0.07] font-geist" href="#how">
                  See how it works
                  <iconify-icon className="" height="18" icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="reveal transition-all duration-700 ease-out lg:h-[43rem] group [animation:animationIn_0.8s_ease-out_0.1s_both] w-full h-[34rem] max-w-[42rem] mr-auto ml-auto relative" id="heroObject" style={{perspective: '1200px'}}>

<div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/[0.12]"></div>
<div aria-hidden="true" className="absolute left-[62%] top-[22%] h-44 w-44 -translate-x-1/2 rounded-full bg-emerald-400/[0.06] blur-[80px]"></div>
<div aria-hidden="true" className="absolute left-1/2 top-[68%] h-48 w-[88%] -translate-x-1/2 rounded-full bg-black/60 blur-3xl"></div>

<div aria-hidden="true" className="absolute left-1/2 top-[69%] h-28 w-[78%] -translate-x-1/2 rounded-full bg-cyan-950/30 blur-2xl transition-all duration-700 group-hover:w-[82%]" style={{transformStyle: 'preserve-3d'}}></div>

<div className="absolute left-1/2 top-1/2 w-[98%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out" style={{transformStyle: 'preserve-3d'}}>


<div className="animate-float-3d floating-panel rounded-[2rem] border border-white/[0.15] bg-slate-950/70 p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-3xl transition duration-500 ease-out hover:border-cyan-200/30" style={{boxShadow: 'rgba(0, 0, 0, 0.48) 0px 28px 90px, rgba(165, 243, 252, 0.027) 0px 0px 42px'}}>
<div className="overflow-hidden rounded-[1.55rem] border border-white/[0.08] bg-[#0b1220]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">

<div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-5 py-4">
<div className="flex items-center gap-3">
<div className="">
<p className="text-xs text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                            Pulsedesk workspace
                          </p>
<p className="mt-0.5 text-sm font-medium text-slate-100 font-geist" style={{transition: 'opacity 900ms ease-out 150ms, transform 900ms ease-out', willChange: 'auto'}}>
                            Launch plan dashboard
                          </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 sm:flex transition-colors hover:bg-white/[0.08] font-geist">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          Live
                        </div>
<div className="flex -space-x-2 transition-transform hover:-space-x-1">
<span className="h-7 w-7 rounded-full border-2 border-[#0b1220] bg-cyan-200 shadow-sm"></span>
<span className="h-7 w-7 rounded-full border-2 border-[#0b1220] bg-slate-300 shadow-sm"></span>
<span className="h-7 w-7 rounded-full border-2 border-[#0b1220] bg-emerald-300 shadow-sm"></span>
</div>
</div>
</div>
<div className="grid grid-cols-[0.28fr_1fr]">

<aside className="hidden border-r border-white/[0.07] bg-white/[0.01] p-4 sm:block">
<div className="space-y-1">
<div className="flex items-center gap-2 rounded-xl bg-cyan-400/[0.1] px-3 py-2.5 text-xs font-medium text-cyan-200 cursor-pointer transition-colors hover:bg-cyan-400/[0.15] font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"></span>
                            Overview
                          </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-slate-400 cursor-pointer transition-colors hover:bg-white/[0.05] hover:text-slate-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                            Tasks
                          </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-slate-400 cursor-pointer transition-colors hover:bg-white/[0.05] hover:text-slate-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                            Calendar
                          </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-slate-400 cursor-pointer transition-colors hover:bg-white/[0.05] hover:text-slate-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                            Reports
                          </div>
</div>
<div className="mt-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 backdrop-blur-sm">
<p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-semibold font-geist" style={{transition: 'opacity 900ms ease-out 225ms, transform 900ms ease-out', willChange: 'auto'}}>
                            Team focus
                          </p>
<div className="mt-4 space-y-3">
<div className="group/progress">
<div className="mb-1.5 flex justify-between text-[10px] text-slate-400 group-hover/progress:text-slate-300 transition-colors">
<span className="font-geist">Design</span>
<span className="text-cyan-200 font-geist">
                                  68%
                                </span>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
<div className="h-full w-2/3 rounded-full bg-cyan-300/70 transition-all duration-1000 group-hover/progress:bg-cyan-300"></div>
</div>
</div>
<div className="group/progress">
<div className="mb-1.5 flex justify-between text-[10px] text-slate-400 group-hover/progress:text-slate-300 transition-colors">
<span className="font-geist">Build</span>
<span className="text-emerald-200 font-geist">
                                  82%
                                </span>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
<div className="h-full w-5/6 rounded-full bg-emerald-300/60 transition-all duration-1000 group-hover/progress:bg-emerald-300"></div>
</div>
</div>
</div>
</div>
</aside>

<main className="p-5">

<div className="grid gap-3 sm:grid-cols-3">
<div className="group/stat rounded-2xl border border-cyan-200/20 bg-cyan-400/[0.05] p-4 transition-all hover:bg-cyan-400/[0.08] hover:border-cyan-200/30 cursor-pointer">
<p className="text-[10px] uppercase tracking-[0.16em] text-cyan-200/80 font-semibold font-geist" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                              Open tasks
                            </p>
<p className="mt-2 text-2xl text-white tracking-tighter transition-transform group-hover/stat:-translate-y-0.5 font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                              24
                            </p>
<p className="mt-1 text-xs text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                              6 due soon
                            </p>
</div>
<div className="group/stat rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] cursor-pointer">
<p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-semibold font-geist" style={{transition: 'opacity 900ms ease-out 150ms, transform 900ms ease-out', willChange: 'auto'}}>
                              Completed
                            </p>
<p className="mt-2 text-2xl text-white tracking-tighter transition-transform group-hover/stat:-translate-y-0.5 font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out 225ms, transform 900ms ease-out', willChange: 'auto'}}>
                              38
                            </p>
<p className="mt-1 text-xs text-emerald-300/80 font-geist" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                              +12 this week
                            </p>
</div>
<div className="group/stat rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] cursor-pointer">
<p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-semibold font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                              Progress
                            </p>
<p className="mt-2 text-2xl text-white tracking-tighter transition-transform group-hover/stat:-translate-y-0.5 font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                              74%
                            </p>
<p className="mt-1 text-xs text-cyan-200/80 font-geist" style={{transition: 'opacity 900ms ease-out 150ms, transform 900ms ease-out', willChange: 'auto'}}>
                              On track
                            </p>
</div>
</div>

<div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.42fr]">
<div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
<div className="mb-4 flex items-center justify-between">
<div className="">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out 225ms, transform 900ms ease-out', willChange: 'auto'}}>
                                  Today’s priorities
                                </p>
<p className="mt-1 text-[11px] text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                                  Tasks that need attention first
                                </p>
</div>
<span className="rounded-full bg-white/[0.08] px-2.5 py-1 text-[10px] text-slate-300 font-medium font-geist">
                                4 tasks
                              </span>
</div>
<div className="space-y-2.5">
<div className="group/task rounded-xl border border-cyan-200/15 bg-cyan-400/[0.05] p-3 transition-colors hover:bg-cyan-400/[0.08] cursor-pointer">
<div className="flex items-center justify-between gap-3">
<div className="">
<p className="text-xs font-medium text-white group-hover/task:text-cyan-100 transition-colors font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                                      Finalize onboarding flow
                                    </p>
<p className="mt-1 text-[10px] text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                                      Design review · Today
                                    </p>
</div>
<span className="rounded-full bg-cyan-400/[0.15] px-2 py-1 text-[10px] font-semibold text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.15)] font-geist">
                                    High
                                  </span>
</div>
</div>
<div className="group/task rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06] cursor-pointer">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-200 group-hover/task:text-white transition-colors font-geist" style={{transition: 'opacity 900ms ease-out 150ms, transform 900ms ease-out', willChange: 'auto'}}>
                                      Update dashboard cards
                                    </p>
<p className="mt-1 text-[10px] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out 225ms, transform 900ms ease-out', willChange: 'auto'}}>
                                      Product · Tomorrow
                                    </p>
</div>
<span className="rounded-full bg-white/[0.08] px-2 py-1 text-[10px] text-slate-300 font-geist">
                                    Normal
                                  </span>
</div>
</div>
<div className="group/task rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06] cursor-pointer">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-200 group-hover/task:text-white transition-colors font-geist" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                                      Prepare launch checklist
                                    </p>
<p className="mt-1 text-[10px] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                                      Marketing · Friday
                                    </p>
</div>
<span className="rounded-full bg-emerald-400/[0.12] px-2 py-1 text-[10px] font-semibold text-emerald-300 font-geist">
                                    Ready
                                  </span>
</div>
</div>
</div>
</div>
<div className="hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 lg:flex lg:flex-col lg:justify-between">
<div>
<div className="mb-4 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                                  Sprint health
                                </p>
<p className="text-xs font-semibold text-cyan-300 font-geist" style={{transition: 'opacity 900ms ease-out 150ms, transform 900ms ease-out', willChange: 'auto'}}>
                                  74%
                                </p>
</div>
<div className="flex h-24 items-end gap-1.5">
<span className="h-8 flex-1 rounded-t-md bg-cyan-400/20 transition-all hover:bg-cyan-400/40 cursor-crosshair"></span>
<span className="h-12 flex-1 rounded-t-md bg-cyan-400/30 transition-all hover:bg-cyan-400/50 cursor-crosshair"></span>
<span className="h-10 flex-1 rounded-t-md bg-cyan-400/25 transition-all hover:bg-cyan-400/45 cursor-crosshair"></span>
<span className="h-16 flex-1 rounded-t-md bg-cyan-400/50 transition-all hover:bg-cyan-400/70 cursor-crosshair shadow-[0_0_15px_rgba(34,211,238,0.2)]"></span>
<span className="h-14 flex-1 rounded-t-md bg-emerald-400/40 transition-all hover:bg-emerald-400/60 cursor-crosshair"></span>
<span className="h-20 flex-1 rounded-t-md bg-cyan-400/60 transition-all hover:bg-cyan-400/80 cursor-crosshair"></span>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="font-geist">Planning</span>
<span className="font-geist">Done</span>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
<div className="h-full w-3/4 rounded-full bg-cyan-300/80"></div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<div className="animate-float-3d absolute right-[2%] top-[10%] hidden w-44 rounded-2xl border border-cyan-200/20 bg-[#0b1220]/80 p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:block transition-transform hover:-translate-y-2 cursor-pointer" style={{animationDelay: '-1s'}}>
<div className="flex items-center justify-between">
<p className="text-[10px] font-medium uppercase tracking-[0.16em] text-cyan-200/80 font-geist" style={{transition: 'opacity 900ms ease-out 225ms, transform 900ms ease-out', willChange: 'auto'}}>
                      Focus
                    </p>
<span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)] animate-pulse"></span>
</div>
<p className="mt-3 text-2xl tracking-tighter text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out 300ms, transform 900ms ease-out', willChange: 'auto'}}>
                    92%
                  </p>
<div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
<div className="h-full w-11/12 rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(103,232,249,0.5)]"></div>
</div>
</div>
<div className="animate-float-3d absolute left-[-2%] bottom-[10%] hidden w-52 rounded-2xl border border-emerald-300/20 bg-[#0b1220]/80 p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl md:block transition-transform hover:-translate-y-2 cursor-pointer" style={{animationDelay: '-3s'}}>
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/[0.1] text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
<svg fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<div>
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'auto'}}>
                        Launch checklist
                      </p>
<p className="mt-0.5 text-[10px] text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out 75ms, transform 900ms ease-out', willChange: 'auto'}}>
                        3 tasks completed
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-white/[0.06] sm:px-8 lg:px-10 border-t pt-24 pr-5 pb-24 pl-5" id="problem">
<div className="w-full max-w-[1280px] mr-auto ml-auto">
<div className="reveal grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end w-full max-w-[1280px] gap-x-8 gap-y-8" style={{perspective: '90rem'}}>

<div className="max-w-3xl">
<p className="text-sm font-medium text-cyan-100 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  01 · Product preview
                </p>
<h2 className="mt-4 text-4xl text-white sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Preview every project, task, and deadline in one calm
                  workspace.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-base leading-7 text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  See how Pulsedesk brings priorities, owners, timelines, and
                  progress together so your team can understand what is
                  happening at a glance and move work forward with confidence.
                </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center transition hover:bg-cyan-50 text-sm font-medium text-slate-950 font-geist bg-cyan-100 h-11 rounded-full px-5 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)]" href="#">
                    View product
                  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                    Learn more
                  </a>
</div>
</div>
</div>
<div className="w-full h-auto pt-12 pb-12 relative" style={{perspective: '90rem'}}>
<div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl"></div>
<div className="absolute bottom-10 left-1/2 h-40 w-[84%] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
<div className="relative origin-center rounded-[2rem] border border-cyan-100/20 bg-slate-950/65 p-3 shadow-2xl shadow-black/60 backdrop-blur-2xl transition duration-500 hover:border-cyan-200/30" style={{boxShadow: 'rgba(0, 0, 0, 0.55) 0 2rem 6rem, rgba(34, 211, 238, 0.12) 0 0 4rem'}}>
<div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08111f]/95">
<div className="grid grid-cols-1 sm:grid-cols-[0.23fr_1fr]">
<aside className="hidden border-r border-white/10 bg-white/[0.025] p-4 sm:block">
<div className="mb-6 flex items-center gap-2">
<span className="text-sm font-medium text-white font-geist">
                          Pulsedesk
                        </span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 rounded-xl bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                          Overview
                        </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-400 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
                          My tasks
                        </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-400 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-10 6L2 7"></path>
</svg>
                          Inbox
                        </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-400 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                          Calendar
                        </div>
<div className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-400 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
                          Reports
                        </div>
</div>
<div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          Upgrade plan
                        </p>
<p className="mt-1 text-xs leading-5 text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          Unlock advanced features and insights.
                        </p>
</div>
</aside>
<div className="overflow-hidden p-5">
<div className="mb-5 flex items-start justify-between gap-5">
<div className="">
<h2 className="text-xl text-white tracking-tighter font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Welcome back, Alex 👋
                          </h2>
<p className="mt-1 text-xs text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Here’s what’s happening with your projects today.
                          </p>
</div>
<div className="hidden items-center gap-3 md:flex">
<div className="flex w-48 items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-500 font-geist">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
                            Search...
                          </div>
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<p className="text-xs font-medium uppercase tracking-[0.14rem] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Total tasks
                          </p>
<p className="mt-2 text-2xl text-white tracking-tighter font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            128
                          </p>
<p className="mt-1 text-xs text-emerald-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            +12% vs last week
                          </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<p className="text-xs font-medium uppercase tracking-[0.14rem] text-blue-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            In progress
                          </p>
<p className="mt-2 text-2xl text-white tracking-tighter font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            42
                          </p>
<p className="mt-1 text-xs text-emerald-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            +8% vs last week
                          </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<p className="text-xs font-medium uppercase tracking-[0.14rem] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Completed
                          </p>
<p className="mt-2 text-2xl text-white tracking-tighter font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            86
                          </p>
<p className="mt-1 text-xs text-emerald-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            +18% vs last week
                          </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<p className="text-xs font-medium uppercase tracking-[0.14rem] text-rose-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Overdue
                          </p>
<p className="mt-2 text-2xl text-white tracking-tighter font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            7
                          </p>
<p className="mt-1 text-xs text-rose-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            -5% vs last week
                          </p>
</div>
</div>
<div className="mt-3 grid gap-3 xl:grid-cols-[1fr_0.33fr]">
<div className="grid gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                To do
                              </p>
<span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-400 font-geist">
                                24
                              </span>
</div>
<div className="space-y-2">
<div className="rounded-xl bg-white/[0.05] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Design system refactor
                                </p>
<div className="mt-3 flex items-center justify-between">
<span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200 font-geist">
                                    UI/UX
                                  </span>
<span className="text-xs text-rose-300 font-geist">
                                    High
                                  </span>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Onboarding flow improvements
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-amber-200/40"></div>
</div>
<div className="rounded-xl bg-white/[0.035] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Fix calendar integration bug
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-emerald-200/35"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-3">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-cyan-100 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                In progress
                              </p>
<span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-100 font-geist">
                                8
                              </span>
</div>
<div className="space-y-2">
<div className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.055] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Build analytics dashboard
                                </p>
<div className="mt-3 flex items-center gap-1">
<span className="h-5 w-5 rounded-full bg-cyan-300/70"></span>
<span className="h-5 w-5 rounded-full bg-white/20"></span>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  API rate limiting implementation
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-rose-300/35"></div>
</div>
<div className="rounded-xl bg-white/[0.035] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Mobile app performance audit
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-amber-200/35"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                In review
                              </p>
<span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-400 font-geist">
                                5
                              </span>
</div>
<div className="space-y-2">
<div className="rounded-xl bg-white/[0.05] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Marketing site redesign
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-amber-200/35"></div>
</div>
<div className="rounded-xl bg-white/[0.04] p-3">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  User role &amp; permissions
                                </p>
<div className="mt-3 h-1.5 rounded-full bg-rose-300/35"></div>
</div>
<div className="rounded-xl bg-white/[0.035] p-3">
<div className="h-2 w-20 rounded-full bg-white/15"></div>
<div className="mt-3 h-2 w-14 rounded-full bg-white/10"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                Done
                              </p>
<span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-400 font-geist">
                                18
                              </span>
</div>
<div className="space-y-2">
<div className="rounded-xl bg-white/[0.05] p-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                    Fix notification issues
                                  </p>
<span className="text-emerald-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] p-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                    Update privacy policy
                                  </p>
<span className="text-emerald-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
</div>
</div>
<div className="rounded-xl bg-white/[0.035] p-3">
<div className="h-2 w-24 rounded-full bg-white/15"></div>
<div className="mt-3 h-2 w-16 rounded-full bg-emerald-200/35"></div>
</div>
</div>
</div>
</div>
<div className="hidden space-y-3 xl:block">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<p className="mb-4 text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              Team workload
                            </p>
<div className="flex h-24 items-end gap-2">
<span className="h-12 flex-1 rounded-t-lg bg-sky-400/80"></span>
<span className="h-20 flex-1 rounded-t-lg bg-sky-400"></span>
<span className="h-14 flex-1 rounded-t-lg bg-sky-400/70"></span>
<span className="h-20 flex-1 rounded-t-lg bg-sky-400/90"></span>
<span className="h-[3.25rem] flex-1 rounded-t-lg bg-sky-400/60"></span>
<span className="h-16 flex-1 rounded-t-lg bg-sky-400/70"></span>
</div>
<div className="mt-3 flex justify-between text-xs text-slate-500">
<span className="font-geist">M</span>
<span className="font-geist">T</span>
<span className="font-geist">W</span>
<span className="font-geist">T</span>
<span className="font-geist">F</span>
<span className="font-geist">S</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<p className="mb-3 text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              Recent activity
                            </p>
<div className="space-y-3">
<div className="flex gap-2">
<span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
<p className="text-xs leading-5 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Design system refactor updated
                                </p>
</div>
<div className="flex gap-2">
<span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>
<p className="text-xs leading-5 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  API rate limiting implemented
                                </p>
</div>
<div className="flex gap-2">
<span className="mt-1 h-2 w-2 rounded-full bg-amber-200"></span>
<p className="text-xs leading-5 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                                  Marketing redesign completed
                                </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 grid gap-3 md:grid-cols-[0.35fr_0.65fr]">
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<style>
                            @keyframes progress-shimmer {
                              0% { transform: translateX(-100%); }
                              100% { transform: translateX(100%); }
                            }
                          </style>
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              Project progress
                            </p>
<p className="text-xs text-cyan-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              78%
                            </p>
</div>
<div className="space-y-3">
<div className="">
<div className="mb-1 flex justify-between text-xs text-slate-400">
<span className="font-geist">Website Redesign</span>
<span className="font-geist">78%</span>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[78%] rounded-full bg-cyan-300 relative overflow-hidden">
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{animation: 'progress-shimmer 2s infinite linear'}}></div>
</div>
</div>
</div>
<div className="">
<div className="mb-1 flex justify-between text-xs text-slate-400">
<span className="font-geist">Mobile App v2.0</span>
<span className="font-geist">62%</span>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[62%] rounded-full bg-blue-400 relative overflow-hidden">
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{animation: 'progress-shimmer 2s infinite linear 1s'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<p className="mb-5 text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Milestone timeline
                          </p>
<div className="relative flex items-center justify-between">
<div className="absolute left-4 right-4 top-3 h-px bg-white/15"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<span className="h-6 w-6 rounded-full border-2 border-emerald-300 bg-[#08111f]"></span>
<span className="text-xs text-slate-400 font-geist">
                                Planning
                              </span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<span className="h-6 w-6 rounded-full border-2 border-emerald-300 bg-[#08111f]"></span>
<span className="text-xs text-slate-400 font-geist">
                                Design
                              </span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<span className="h-6 w-6 rounded-full border-2 border-emerald-200 bg-emerald-200 shadow-lg shadow-emerald-300/30"></span>
<span className="text-xs text-slate-400 font-geist">
                                Develop
                              </span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<span className="h-6 w-6 rounded-full border-2 border-slate-600 bg-[#08111f]"></span>
<span className="text-xs text-slate-400 font-geist">
                                Testing
                              </span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<span className="h-6 w-6 rounded-full border-2 border-slate-600 bg-[#08111f]"></span>
<span className="text-xs text-slate-400 font-geist">
                                Launch
                              </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-white/[0.06] sm:px-8 lg:px-10 border-t pt-24 pr-5 pb-24 pl-5 relative" id="problem">

<div className="pointer-events-none absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 50% 12%, rgba(56, 189, 248, 0.1), transparent 34%), linear-gradient(180deg, rgba(8, 12, 20, 0.16), rgba(8, 12, 20, 0.56))'}}></div>
<div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30rem_30rem]"></div>
<div className="w-full max-w-[1280px] mr-auto ml-auto">

<div className="reveal grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end w-full max-w-[1280px] gap-x-8 gap-y-8" style={{perspective: '90rem'}}>

<div className="max-w-4xl">
<p className="text-base font-medium text-cyan-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  02 · The problem
                </p>
<h2 className="mt-5 text-5xl text-white sm:text-6xl tracking-tighter leading-tight font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Most project tools make simple work feel heavy.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-lg leading-8 text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Small teams do not need endless configuration, crowded
                  dashboards, or a week of onboarding. They need a clear place
                  to see what matters and move work forward.
                </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-medium text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-cyan-50 font-geist" href="#">
                    See the solution
                  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                    Learn more
                  </a>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3 mt-12 gap-x-6 gap-y-6">

<article className="group reveal relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 shadow-2xl shadow-black/50 backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative z-10 h-64 overflow-hidden rounded-2xl border border-cyan-100/10 bg-[#071323]/90 p-4 shadow-inner">
<div className="absolute -bottom-12 left-1/2 h-32 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>

<div className="relative flex h-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#0b1626] shadow-xl shadow-black/30">

<div className="flex w-10 flex-col items-center gap-3 border-r border-white/[0.06] bg-white/[0.025] py-3">
<span className="flex h-6 w-6 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</span>
<span className="h-6 w-6 rounded-lg bg-white/[0.04]"></span>
<span className="h-6 w-6 rounded-lg bg-white/[0.04]"></span>
<span className="h-6 w-6 rounded-lg bg-white/[0.04]"></span>
<span className="h-6 w-6 rounded-lg bg-white/[0.04]"></span>
</div>

<div className="relative flex-1 bg-[#0b1626]">

<div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.015] px-3 py-2">
<div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-black/15 px-2 py-1">
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<span className="text-[9px] text-slate-500 font-geist">
                            Search...
                          </span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-cyan-300/70"></span>
</div>
</div>

<div className="absolute left-3 top-11 z-10 w-36 rounded-xl border border-white/[0.08] bg-[#121e31]/95 p-2.5 shadow-lg shadow-black/25">
<div className="mb-2 flex items-center justify-between">
<span className="text-[9px] font-semibold text-slate-200 font-geist">
                            Timeline
                          </span>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70"></span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<div className="h-1.5 w-20 rounded-full bg-cyan-400/35"></div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<div className="h-1.5 w-14 rounded-full bg-slate-600"></div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<div className="h-1.5 w-24 rounded-full bg-slate-700"></div>
</div>
</div>
</div>


<div className="absolute right-3 top-10 z-30 w-24 rounded-xl border border-white/[0.08] bg-[#121e31]/95 p-2.5 shadow-lg shadow-black/25">
<span className="mb-2 block text-[9px] font-semibold text-slate-200 font-geist">
                          Filters
                        </span>
<div className="space-y-1.5 text-[8px] text-slate-400">
<div className="flex items-center gap-1.5 font-geist">
<span className="h-2 w-2 rounded bg-cyan-400"></span>
                            Priority
                          </div>
<div className="flex items-center gap-1.5 font-geist">
<span className="h-2 w-2 rounded border border-slate-600"></span>
                            Status
                          </div>
<div className="flex items-center gap-1.5 font-geist">
<span className="h-2 w-2 rounded border border-slate-600"></span>
                            Assignee
                          </div>
</div>
</div>

<div className="absolute left-4 top-[7.8rem] z-30 w-32 rounded-xl border border-white/[0.08] bg-[#121e31]/95 p-2.5 shadow-lg shadow-black/25">
<span className="mb-2 block text-[9px] font-semibold text-slate-200 font-geist">
                          Reports
                        </span>
<svg className="h-10 w-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 30 L20 25 L40 33 L60 16 L80 20 L100 8" fill="none" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="20" cy="25" fill="#38bdf8" r="1.6"></circle>
<circle cx="40" cy="33" fill="#38bdf8" r="1.6"></circle>
<circle cx="60" cy="16" fill="#38bdf8" r="1.6"></circle>
<circle cx="80" cy="20" fill="#38bdf8" r="1.6"></circle>
</svg>
</div>

<div className="absolute left-[7.4rem] top-[6.7rem] z-50 w-32 rounded-xl border border-cyan-400/20 bg-[#16253c]/95 p-2.5 shadow-lg shadow-black/25">
<span className="mb-2 block text-[9px] font-semibold text-slate-100 font-geist">
                          Automations
                        </span>
<div className="space-y-1.5 text-[8px]">
<div className="flex items-center gap-1">
<span className="font-medium text-cyan-300 font-geist">
                              If
                            </span>
<span className="rounded-md border border-white/[0.06] bg-white/[0.05] px-1.5 py-0.5 text-slate-300 font-geist">
                              Status
                            </span>
</div>
<div className="flex items-center gap-1">
<span className="font-medium text-cyan-300 font-geist">
                              Then
                            </span>
<span className="rounded-md border border-white/[0.06] bg-white/[0.05] px-1.5 py-0.5 text-slate-300 font-geist">
                              Assign
                            </span>
</div>
</div>
</div>

<div className="absolute left-[10.5rem] top-[9.5rem] z-20 w-20 rounded-xl border border-white/[0.08] bg-[#121e31]/95 p-2.5 shadow-lg shadow-black/25">
<span className="mb-1.5 block text-[9px] font-semibold text-slate-200 font-geist">
                          Fields
                        </span>
<div className="space-y-1 text-[8px] text-slate-400">
<div className="rounded-md bg-white/[0.04] px-1.5 py-0.5 font-geist">
                            Text
                          </div>
<div className="rounded-md bg-cyan-400/10 px-1.5 py-0.5 text-cyan-300 font-geist">
                            Select
                          </div>
</div>
</div>

<div className="absolute right-4 top-[8.3rem] z-40 w-28 rounded-xl border border-white/[0.08] bg-[#121e31]/95 p-2.5 shadow-lg shadow-black/25">
<span className="mb-2 block text-[9px] font-semibold text-slate-200 font-geist">
                          Notifications
                        </span>
<div className="space-y-1.5 text-[8px]">
<div className="flex items-center gap-1.5 text-slate-300 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                            23 new
                          </div>
<div className="flex items-center gap-1.5 text-slate-400 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-red-400/80"></span>
                            8 overdue
                          </div>
</div>
</div>
</div>
</div>
</div>
<h3 className="relative z-10 mt-8 text-2xl text-white tracking-tight font-jakarta font-medium" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  Too many features
                </h3>
<p className="relative z-10 mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  Complex tools bury simple tasks under views, settings, and
                  workflows your team never asked for.
                </p>
</article>

<article className="group reveal relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 shadow-2xl shadow-black/50 backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative z-10 h-64 overflow-hidden rounded-2xl border border-cyan-100/10 bg-[#071323]/90 p-4 shadow-inner">
<div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="relative flex h-full items-center rounded-xl border border-white/5 bg-[#0b1626]/80 p-3 shadow-lg">

<div className="w-28 space-y-2">
<div className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 py-1.5 shadow-sm">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400 text-[9px] font-bold text-slate-900 font-geist">
                          1
                        </span>
<span className="text-[10px] font-medium text-cyan-200 font-geist">
                          Invite team
                        </span>
</div>
<div className="flex items-center gap-2 px-2 py-1">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[9px] font-medium text-slate-400 font-geist">
                          2
                        </span>
<span className="text-[10px] text-slate-400 font-geist">
                          Connect tools
                        </span>
</div>
<div className="flex items-center gap-2 px-2 py-1">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[9px] font-medium text-slate-400 font-geist">
                          3
                        </span>
<span className="text-[10px] text-slate-400 font-geist">
                          Import data
                        </span>
</div>
<div className="flex items-center gap-2 px-2 py-1">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[9px] font-medium text-slate-400 font-geist">
                          4
                        </span>
<span className="text-[10px] text-slate-400 font-geist">
                          Set permissions
                        </span>
</div>
<div className="flex items-center gap-2 px-2 py-1">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[9px] font-medium text-slate-400 font-geist">
                          5
                        </span>
<span className="text-[10px] text-slate-400 font-geist">
                          Create project
                        </span>
</div>
</div>

<div className="relative -ml-2 flex-1 rounded-2xl border border-white/10 bg-[#121f33] p-5 shadow-2xl shadow-black/80 z-10">
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/5 to-transparent"></div>
<div className="relative flex flex-col items-center text-center">
<h4 className="text-sm font-medium text-white font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                          Welcome to your workspace
                        </h4>
<div className="mt-4 flex items-center justify-center">

<div className="h-8 w-8 rounded-full border-2 border-[#121f33] bg-gradient-to-br from-slate-300 to-slate-500 shadow-sm"></div>
<div className="-ml-2 h-8 w-8 rounded-full border-2 border-[#121f33] bg-gradient-to-br from-amber-200 to-orange-400 shadow-sm"></div>
<div className="-ml-2 h-8 w-8 rounded-full border-2 border-[#121f33] bg-gradient-to-br from-emerald-200 to-teal-500 shadow-sm"></div>
<div className="-ml-2 h-8 w-8 rounded-full border-2 border-[#121f33] bg-gradient-to-br from-rose-200 to-red-400 shadow-sm"></div>
<div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#121f33] bg-slate-800 text-slate-300 shadow-sm">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-50 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition hover:bg-cyan-400/20 font-geist">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-slate-900">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l10.42-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z"></path>
</svg>
</span>
                          Start walkthrough
                        </button>
</div>
</div>

<div className="ml-3 w-28 rounded-xl border border-white/5 bg-[#0f1b2d] p-3 shadow-xl">
<div className="mb-3 flex items-center justify-between">
<span className="text-[9px] font-medium text-white font-geist">
                          Getting started
                        </span>
<span className="text-[9px] text-slate-500 font-geist">
                          1/5
                        </span>
</div>
<div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-1/5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></div>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-2">
<div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-cyan-400 text-slate-900">
<svg className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="h-1.5 w-14 rounded-full bg-slate-700"></div>
</div>
<div className="flex items-center gap-2">
<div className="h-3.5 w-3.5 rounded-full border border-slate-600"></div>
<div className="h-1.5 w-16 rounded-full bg-slate-700"></div>
</div>
<div className="flex items-center gap-2">
<div className="h-3.5 w-3.5 rounded-full border border-slate-600"></div>
<div className="h-1.5 w-12 rounded-full bg-slate-700"></div>
</div>
<div className="flex items-center gap-2">
<div className="h-3.5 w-3.5 rounded-full border border-slate-600"></div>
<div className="h-1.5 w-14 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
</div>
</div>
<h3 className="relative z-10 mt-8 text-2xl text-white tracking-tight font-jakarta font-medium" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  Hard to onboard
                </h3>
<p className="relative z-10 mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  New collaborators should understand the workspace instantly,
                  not wait for training or documentation.
                </p>
</article>

<article className="group reveal relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 shadow-2xl shadow-black/50 backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative z-10 h-64 overflow-hidden rounded-2xl border border-cyan-100/10 bg-[#071323]/90 p-4 shadow-inner">
<div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

<svg className="absolute inset-0 h-full w-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 350 220">

<path d="M70 60 Q 120 100 175 110" fill="none" opacity="0.6" stroke="#38bdf8" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>
<circle className="shadow-[0_0_10px_#38bdf8]" cx="175" cy="110" fill="#38bdf8" r="3"></circle>

<path d="M280 60 Q 230 80 175 110" fill="none" opacity="0.6" stroke="#38bdf8" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M70 160 Q 120 130 175 110" fill="none" opacity="0.6" stroke="#38bdf8" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M280 160 Q 230 140 175 110" fill="none" opacity="0.6" stroke="#38bdf8" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>

<circle cx="70" cy="60" fill="#38bdf8" r="3"></circle>
<circle cx="280" cy="60" fill="#38bdf8" r="3"></circle>
<circle cx="70" cy="160" fill="#38bdf8" r="3"></circle>
<circle cx="280" cy="160" fill="#38bdf8" r="3"></circle>
</svg>


<div className="absolute left-2 top-2 w-28 rounded-xl border border-white/10 bg-[#121f33]/95 p-3 shadow-xl z-10">
<p className="text-[10px] font-medium text-slate-200 mb-2 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                      Email
                    </p>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="space-y-1.5 flex-1">
<div className="h-1.5 w-full rounded-full bg-slate-700"></div>
<div className="h-1.5 w-2/3 rounded-full bg-slate-700"></div>
</div>
</div>
</div>

<div className="absolute right-2 top-2 w-32 rounded-xl border border-white/10 bg-[#121f33]/95 p-3 shadow-xl z-10">
<div className="flex justify-between items-center mb-2">
<p className="text-[10px] font-medium text-slate-200 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                        Chat
                      </p>
<p className="text-[8px] text-slate-500 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                        1/5
                      </p>
</div>
<p className="text-[8px] text-slate-400 mb-2 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                      # project
                    </p>
<div className="space-y-2">
<div className="flex items-center gap-1.5">
<div className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-200 to-orange-400"></div>
<div className="h-1 w-12 rounded-full bg-slate-700"></div>
<div className="ml-auto h-3 w-3 rounded-full bg-amber-500/20 text-[6px] text-amber-300 flex items-center justify-center font-geist">
                          12
                        </div>
</div>
<div className="flex items-center gap-1.5">
<div className="h-4 w-4 rounded-full bg-gradient-to-br from-emerald-200 to-teal-400"></div>
<div className="h-1 w-16 rounded-full bg-slate-700"></div>
</div>
</div>
</div>

<div className="absolute left-2 bottom-4 w-28 rounded-xl border border-white/10 bg-[#121f33]/95 p-3 shadow-xl z-10">
<p className="text-[10px] font-medium text-slate-200 mb-2 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                      Docs
                    </p>
<div className="flex gap-2">
<svg className="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="space-y-1.5 flex-1 mt-1">
<div className="h-1 w-full rounded-full bg-slate-700"></div>
<div className="h-1 w-4/5 rounded-full bg-slate-700"></div>
<div className="h-1 w-3/5 rounded-full bg-slate-700"></div>
</div>
</div>
</div>

<div className="absolute right-2 bottom-4 w-32 rounded-xl border border-white/10 bg-[#121f33]/95 p-3 shadow-xl z-10">
<p className="text-[10px] font-medium text-slate-200 mb-2 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                      Spreadsheets
                    </p>
<div className="grid grid-cols-4 gap-1">
<div className="h-1.5 rounded-sm bg-slate-600"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-600"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-600"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-600"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
<div className="h-1.5 rounded-sm bg-slate-600"></div>
<div className="h-1.5 rounded-sm bg-slate-700"></div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-400/20 bg-[#16263f]/95 p-3 shadow-[0_0_30px_rgba(0,0,0,0.6)] z-20">
<p className="text-xs font-semibold text-white mb-3 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                      Tasks
                    </p>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-sm border border-slate-500"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-700"></div>
<span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[8px] font-medium text-rose-300 font-geist">
                          High
                        </span>
</div>
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-sm border border-slate-500"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-700"></div>
<span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[8px] font-medium text-amber-300 font-geist">
                          Medium
                        </span>
</div>
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-sm border border-slate-500"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-700"></div>
<span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-medium text-emerald-300 font-geist">
                          Low
                        </span>
</div>
</div>
</div>
</div>
<h3 className="relative z-10 mt-8 text-2xl text-white tracking-tight font-jakarta font-medium" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  Work is scattered
                </h3>
<p className="relative z-10 mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-geist" style={{willChange: 'opacity, transform', transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
                  Tasks, deadlines, updates, and decisions get split across too
                  many tabs and conversations.
                </p>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden border-t border-white/[0.06] px-5 pt-24 pb-24 sm:px-8 lg:px-10" id="how">
<div className="mx-auto w-full max-w-[1280px]">

<div className="reveal grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>

<div className="max-w-3xl">
<p className="text-sm font-medium text-cyan-100 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  03 · How it works
                </p>
<h2 className="mt-4 max-w-2xl text-4xl tracking-tighter text-white sm:text-5xl lg:text-6xl font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Add tasks, set deadlines, track progress.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-base leading-7 text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Pulsedesk keeps the core workflow obvious. Create the work,
                  assign the owner, choose a date, and see every project move
                  from To Do to Done.
                </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-medium text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-cyan-50 font-geist" href="#">
                    Explore workflow
                  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                    Learn more
                  </a>
</div>
</div>
</div>

<div className="reveal mt-14 p-0" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">

<div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-blue-300/20 bg-white/[0.035] p-5 shadow-[0_0_0_1px_rgba(147,197,253,0.08),0_18px_55px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(147,197,253,0.18),0_0_46px_rgba(59,130,246,0.16),0_22px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
<div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"></div>
<div className="relative z-10 flex h-full flex-col">
<p className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-blue-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Step 01
                    </p>
<h3 className="mt-5 text-lg font-semibold text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Capture the task
                    </h3>
<p className="mt-2 text-sm leading-6 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Add tasks quickly with only the details your team actually
                      needs.
                    </p>
<div className="mt-auto rounded-2xl border border-white/[0.08] bg-[#070d18]/70 p-3 shadow-xl shadow-black/30">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          New task
                        </p>
<span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]"></span>
</div>
<div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2">
<p className="text-xs text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          Update pricing page
                        </p>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex h-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04]">
<svg className="h-4 w-4 text-slate-400" fill="none" viewbox="0 0 24 24">
<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex h-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04]">
<svg className="h-4 w-4 text-slate-400" fill="none" viewbox="0 0 24 24">
<path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M8 8h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex h-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04]">
<svg className="h-4 w-4 text-slate-400" fill="none" viewbox="0 0 24 24">
<path d="M7 7h10M7 12h10M7 17h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<button className="mt-3 flex w-full items-center justify-between rounded-xl bg-blue-500 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-blue-500/20 font-geist">
                        Add task
                        <span className="text-base leading-none font-geist">+</span>
</button>
</div>
</div>
</div>

<div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-blue-300/20 bg-white/[0.035] p-5 shadow-[0_0_0_1px_rgba(147,197,253,0.08),0_18px_55px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(147,197,253,0.18),0_0_46px_rgba(59,130,246,0.16),0_22px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
<div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"></div>
<div className="relative z-10 flex h-full flex-col">
<p className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-blue-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Step 02
                    </p>
<h3 className="mt-5 text-lg font-semibold text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Set the deadline
                    </h3>
<p className="mt-2 text-sm leading-6 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Due dates and priority markers make the next move clear.
                    </p>
<div className="mt-auto rounded-2xl border border-white/[0.08] bg-[#070d18]/70 p-3 shadow-xl shadow-black/30">
<div className="mb-3 flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          May 2025
                        </p>
<div className="flex gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-[0.62rem] text-slate-500 font-geist">
<span className="font-geist">M</span>
<span className="font-geist">T</span>
<span className="font-geist">W</span>
<span className="font-geist">T</span>
<span className="font-geist">F</span>
<span className="font-geist">S</span>
<span className="font-geist">S</span>
<span className="py-1 font-geist">12</span>
<span className="py-1 font-geist">13</span>
<span className="py-1 font-geist">14</span>
<span className="rounded-full bg-blue-500 py-1 text-white shadow-lg shadow-blue-500/30 font-geist">
                          15
                        </span>
<span className="py-1 text-slate-300 font-geist">16</span>
<span className="py-1 font-geist">17</span>
<span className="py-1 font-geist">18</span>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<p className="text-xs text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            High priority
                          </p>
</div>
<svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-blue-300/20 bg-white/[0.035] p-5 shadow-[0_0_0_1px_rgba(147,197,253,0.08),0_18px_55px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(147,197,253,0.18),0_0_46px_rgba(59,130,246,0.16),0_22px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
<div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"></div>
<div className="relative z-10 flex h-full flex-col">
<p className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-blue-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Step 03
                    </p>
<h3 className="mt-5 text-lg font-semibold text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Move the status
                    </h3>
<p className="mt-2 text-sm leading-6 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Use simple columns: To Do, In Progress, and Done.
                    </p>
<div className="mt-auto grid grid-cols-3 gap-2 rounded-2xl border border-white/[0.08] bg-[#070d18]/70 p-3 shadow-xl shadow-black/30">
<div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-2">
<p className="mb-2 text-[0.55rem] font-semibold uppercase tracking-wide text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          To do
                        </p>
<div className="space-y-2">
<div className="h-8 rounded-lg bg-white/[0.06] p-2">
<div className="h-1.5 w-12 rounded-full bg-slate-600"></div>
</div>
<div className="h-8 rounded-lg bg-white/[0.04] p-2">
<div className="h-1.5 w-9 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
<div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.06] p-2">
<p className="mb-2 text-[0.55rem] font-semibold uppercase tracking-wide text-blue-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          Progress
                        </p>
<div className="space-y-2">
<div className="h-8 rounded-lg border border-blue-400/20 bg-blue-500/10 p-2">
<div className="h-1.5 w-10 rounded-full bg-blue-300"></div>
</div>
<div className="h-8 rounded-lg bg-white/[0.04] p-2">
<div className="h-1.5 w-8 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-2">
<p className="mb-2 text-[0.55rem] font-semibold uppercase tracking-wide text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                          Done
                        </p>
<div className="space-y-2">
<div className="h-8 rounded-lg bg-white/[0.05] p-2">
<div className="h-1.5 w-11 rounded-full bg-emerald-400/70"></div>
</div>
<div className="h-8 rounded-lg bg-white/[0.035] p-2">
<div className="h-1.5 w-7 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-blue-300/20 bg-white/[0.035] p-5 shadow-[0_0_0_1px_rgba(147,197,253,0.08),0_18px_55px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(147,197,253,0.18),0_0_46px_rgba(59,130,246,0.16),0_22px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
<div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"></div>
<div className="relative z-10 flex h-full flex-col">
<p className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-blue-200 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Step 04
                    </p>
<h3 className="mt-5 text-lg font-semibold text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Keep updates together
                    </h3>
<p className="mt-2 text-sm leading-6 text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Assign owners and add lightweight comments without extra
                      setup.
                    </p>
<div className="mt-auto rounded-2xl border border-white/[0.08] bg-[#070d18]/70 p-3 shadow-xl shadow-black/30">
<div className="mb-3 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border-2 border-[#070d18] bg-gradient-to-br from-blue-300 to-indigo-500"></div>
<div className="h-7 w-7 rounded-full border-2 border-[#070d18] bg-gradient-to-br from-amber-300 to-rose-500"></div>
<div className="h-7 w-7 rounded-full border-2 border-[#070d18] bg-gradient-to-br from-emerald-300 to-cyan-500"></div>
</div>
<div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] text-sm text-slate-300 font-geist">
                          +
                        </div>
</div>
<div className="space-y-2">
<div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              Alex
                            </p>
<p className="text-[0.65rem] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              2m ago
                            </p>
</div>
<p className="mt-1 text-xs leading-5 text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Updated the copy on the homepage.
                          </p>
</div>
<div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              Priya
                            </p>
<p className="text-[0.65rem] text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                              5m ago
                            </p>
</div>
<p className="mt-1 text-xs leading-5 text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                            Looks good. Let’s ship it.
                          </p>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>
<section className="border-white/[0.06] overflow-hidden sm:px-8 lg:px-10 font-sans border-t pt-24 pr-5 pb-24 pl-5 relative" id="benefits">

<div className="relative mx-auto w-full max-w-[1280px] z-10">

<div className="reveal grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end" style={{transition: 'opacity 900ms ease-out 90ms, transform 900ms ease-out'}}>

<div className="max-w-3xl">
<p className="text-[13px] font-medium text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  04 · Key benefits
                </p>
<h2 className="mt-4 text-4xl text-white sm:text-[56px] leading-[1.1] tracking-tight font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Everything teams need,
                  <br/>
                  nothing they have to fight.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-[17px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Pulsedesk is built for quick understanding, fast daily use,
                  and calm project visibility.
                </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-medium text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-cyan-50 font-geist" href="#">
                    See benefits
                  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                    Learn more
                  </a>
</div>
</div>
</div>

<div className="mt-16 grid gap-6 lg:grid-cols-4">

<div className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">

<div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="relative h-40 w-full mb-8 flex items-center justify-center">
<div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
<svg className="relative z-10" fill="none" height="120" viewbox="0 0 120 120" width="120" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="140%" id="glowClarity" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M60 30 C60 50, 50 60, 30 60 C50 60, 60 70, 60 90 C60 70, 70 60, 90 60 C70 60, 60 50, 60 30 Z" fill="#93C5FD" filter="url(#glowClarity)"></path>
<path d="M60 35 C60 50, 52 60, 35 60 C52 60, 60 70, 60 85 C60 70, 68 60, 85 60 C68 60, 60 50, 60 35 Z" fill="#FFFFFF"></path>

<path d="M85 40 C85 45, 82 48, 77 48 C82 48, 85 51, 85 56 C85 51, 88 48, 93 48 C88 48, 85 45, 85 40 Z" fill="#E0F2FE" filter="url(#glowClarity)"></path>

<path d="M35 75 C35 78, 33 80, 30 80 C33 80, 35 82, 35 85 C35 82, 37 80, 40 80 C37 80, 35 78, 35 75 Z" fill="#BAE6FD" filter="url(#glowClarity)"></path>

<path d="M20 70 A 45 45 0 0 0 90 40" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 4" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase font-geist">
                  Clarity
                </span>
<h3 className="mt-3 text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  No learning curve
                </h3>
<p className="mt-3 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  A simple workspace your team can understand in minutes.
                </p>
</div>

<div className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="relative h-40 w-full mb-8 flex items-center justify-center">
<div className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<svg className="relative z-10" fill="none" height="120" viewbox="0 0 140 120" width="140" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="gradSpeed" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#1E3A8A"></stop>
<stop offset="100%" stop-color="#0F172A"></stop>
</lineargradient>
<filter id="glowSpeed">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<line stroke="rgba(147, 197, 253, 0.5)" strokeLinecap="round" strokeWidth="2" x1="20" x2="70" y1="50" y2="50"></line>
<line filter="url(#glowSpeed)" stroke="rgba(147, 197, 253, 0.8)" strokeLinecap="round" strokeWidth="2" x1="30" x2="65" y1="60" y2="60"></line>
<line stroke="rgba(147, 197, 253, 0.3)" strokeLinecap="round" strokeWidth="2" x1="10" x2="75" y1="70" y2="70"></line>

<circle cx="90" cy="60" fill="url(#gradSpeed)" r="24" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="2"></circle>
<circle cx="90" cy="60" fill="none" filter="url(#glowSpeed)" opacity="0.5" r="24" stroke="#93C5FD" strokeWidth="1"></circle>

<path d="M92 45 L82 62 L89 62 L87 75 L98 57 L91 57 Z" fill="#E0F2FE" filter="url(#glowSpeed)"></path>

<circle cx="50" cy="45" fill="#93C5FD" filter="url(#glowSpeed)" r="1.5"></circle>
<circle cx="40" cy="75" fill="#93C5FD" r="1"></circle>
</svg>
</div>
<span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase font-geist">
                  Speed
                </span>
<h3 className="mt-3 text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Lightweight by default
                </h3>
<p className="mt-3 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Create, update, and review work without slow, heavy workflows.
                </p>
</div>

<div className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="relative h-40 w-full mb-8 flex items-center justify-center">
<div className="absolute w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
<svg className="relative z-10" fill="none" height="120" viewbox="0 0 120 120" width="120" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="glowFocus">
<fegaussianblur result="blur" stddeviation="2.5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<circle cx="60" cy="60" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></circle>
<circle cx="60" cy="60" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></circle>
<circle cx="60" cy="60" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></circle>

<circle cx="60" cy="60" fill="#93C5FD" filter="url(#glowFocus)" r="8"></circle>
<circle cx="60" cy="60" fill="#FFFFFF" r="4"></circle>

<circle cx="82" cy="38" fill="#BAE6FD" filter="url(#glowFocus)" r="3"></circle>
<circle cx="28" cy="60" fill="#E0F2FE" r="2"></circle>
<circle cx="75" cy="99" fill="#93C5FD" r="1.5"></circle>
</svg>
</div>
<span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase font-geist">
                  Focus
                </span>
<h3 className="mt-3 text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  One shared place
                </h3>
<p className="mt-3 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Tasks, projects, deadlines, and updates stay connected.
                </p>
</div>

<div className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="relative h-40 w-full mb-8 flex items-center justify-center">
<div className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<svg className="relative z-10" fill="none" height="120" viewbox="0 0 120 120" width="120" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="shieldGrad" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#1E293B" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#0F172A" stop-opacity="0.9"></stop>
</lineargradient>
<filter id="glowTrust">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<ellipse cx="60" cy="95" fill="none" rx="35" ry="10" stroke="rgba(147, 197, 253, 0.2)" strokeWidth="1.5"></ellipse>
<ellipse cx="60" cy="95" fill="rgba(147, 197, 253, 0.1)" filter="url(#glowTrust)" rx="25" ry="6"></ellipse>

<path className="" d="M20 20 L100 20 M20 40 L100 40 M20 60 L100 60 M20 80 L100 80" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M30 10 L30 90 M50 10 L50 90 M70 10 L70 90 M90 10 L90 90" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>

<path d="M60 25 L35 35 V55 C35 75 50 90 60 95 C70 90 85 75 85 55 V35 L60 25 Z" fill="url(#shieldGrad)" filter="url(#glowTrust)" stroke="#60A5FA" strokeLinejoin="round" strokeWidth="2"></path>

<path d="M60 30 L40 38 V55 C40 70 52 83 60 88 C68 83 80 70 80 55 V38 L60 30 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path d="M50 58 L57 65 L70 50" filter="url(#glowTrust)" stroke="#BAE6FD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase font-geist">
                  Trust
                </span>
<h3 className="mt-3 text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Clear ownership
                </h3>
<p className="mt-3 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Everyone knows what they own and what needs attention next.
                </p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-white/[0.06] sm:px-8 lg:px-10 font-sans border-t pt-24 pr-5 pb-24 pl-5 relative" id="reviews">

<div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

<div className="reveal lg:mt-10" style={{transition: 'opacity 900ms ease-out 180ms, transform 900ms ease-out'}}>
<p className="text-[13px] font-medium text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                05 · Social proof
              </p>
<h2 className="mt-4 text-4xl text-white sm:text-[56px] leading-[1.1] tracking-tight font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Built for teams
                <br/>
                that want work to
                <br/>
                feel obvious.
              </h2>
<p className="mt-6 text-[17px] leading-relaxed text-slate-400 max-w-[400px] font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Pulsedesk gives growing teams a calmer way to coordinate
                projects without adopting a heavyweight operating system.
              </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-medium text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-cyan-50 font-geist" href="#">
                  Read stories
                </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                  Get started
                </a>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="group relative flex flex-col sm:flex-row gap-6 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8 border border-white/10">

<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-blue-200 shadow-[inset_0_0_20px_rgba(147,197,253,0.05)]">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    1,200+ small teams
                  </h3>
<p className="mt-2 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    Use Pulsedesk to keep tasks, owners, and deadlines visible
                    without overcomplicating the process.
                  </p>

<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#12161f] object-cover relative z-[4]" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#12161f] object-cover relative z-[3]" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#12161f] object-cover relative z-[2]" src="https://i.pravatar.cc/100?img=3"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#12161f] object-cover relative z-[1]" src="https://i.pravatar.cc/100?img=4"/>
<div className="w-8 h-8 rounded-full border-2 border-[#12161f] bg-[#1e293b] text-[#93c5fd] text-[10px] font-medium flex items-center justify-center relative z-[0] font-geist">
                        +1.2K
                      </div>
</div>

<div className="h-[2px] flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjIiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDE0NywgMTk3LCAyNTMsIDAuMykiLz48L3N2Zz4=')] bg-repeat-x opacity-50"></div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8 border border-white/10 overflow-hidden">

<div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<svg className="absolute bottom-0 right-0 w-full h-full object-cover" viewbox="0 0 200 100">
<path d="M0,100 C50,80 100,120 200,40 L200,100 Z" fill="none" stroke="#3b82f6" stroke-dasharray="2 4" strokeWidth="0.5"></path>
<path d="M0,100 C60,70 120,110 200,20 L200,100 Z" fill="none" stroke="#3b82f6" stroke-dasharray="2 4" strokeWidth="0.5"></path>
<path d="M0,100 C70,60 140,100 200,0 L200,100 Z" fill="none" stroke="#3b82f6" stroke-dasharray="2 4" strokeWidth="0.5"></path>
</svg>
</div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="flex flex-col items-center gap-2 shrink-0">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] shadow-[inset_0_0_20px_rgba(147,197,253,0.05)]">
<svg className="text-blue-400" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
</div>
<img alt="Maya Chen" className="w-10 h-10 rounded-full border border-white/10 object-cover mt-2" src="https://i.pravatar.cc/100?img=5"/>
</div>
<div className="flex-1 relative z-10 pt-2">
<h3 className="text-[22px] text-white leading-tight font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    “Our whole team understood it on day one.”
                  </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="text-blue-400 font-medium font-geist">
                      Maya Chen
                    </span>
                    , Studio Lead — a lightweight workspace replaced three
                    scattered tools.
                  </p>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8 border border-white/10">
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-blue-200 shadow-[inset_0_0_20px_rgba(147,197,253,0.05)]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-[320px]">
<h3 className="text-[22px] text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Less time managing the tool
                    </h3>
<p className="mt-2 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Teams spend more time doing the work and less time
                      maintaining complicated boards.
                    </p>
</div>

<div className="relative w-[140px] h-[60px] shrink-0 self-start md:self-auto mt-4 md:mt-0">

<div className="absolute -top-10 left-4 rounded-lg border border-white/10 bg-[#1e293b]/80 backdrop-blur-sm px-2.5 py-1.5 flex flex-col items-start shadow-xl">
<span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 font-geist">
                        ↑ 32%
                      </span>
<span className="text-[9px] text-slate-400 font-geist">
                        Time saved
                      </span>
</div>

<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0,35 L20,30 L40,32 L60,18 L80,22 L100,5" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M0,35 L20,30 L40,32 L60,18 L80,22 L100,5 L100,40 L0,40 Z" fill="url(#chartGradient)" opacity="0.3"></path>

<circle className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" cx="100" cy="5" fill="#60a5fa" r="3"></circle>
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-white/[0.06] overflow-hidden sm:px-8 lg:px-10 font-sans border-t pt-24 pr-5 pb-24 pl-5 relative" id="pricing">
<div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28rem 28rem'}}></div>
<div className="z-10 w-full max-w-[1280px] mr-auto ml-auto relative">
<div className="reveal grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end" style={{transition: 'opacity 900ms ease-out 90ms, transform 900ms ease-out'}}>

<div className="max-w-3xl">
<p className="text-[13px] font-medium text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  06 · Pricing
                </p>
<h2 className="mt-4 text-4xl leading-[1.1] tracking-tight text-white sm:text-[56px] font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Simple plans for teams that want clarity.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-[17px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Start free, upgrade when your team needs more projects,
                  reporting, and collaboration controls.
                </p>
<div className="mt-7 inline-flex rounded-full border border-white/[0.12] bg-white/[0.04] p-1 backdrop-blur-xl">
<button className="h-10 rounded-full bg-cyan-100 px-5 text-sm font-medium text-slate-950 shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition font-geist">
                    Monthly
                  </button>
<button className="h-10 rounded-full px-5 text-sm font-medium text-slate-300 transition hover:text-white font-geist">
                    Yearly
                  </button>
</div>
</div>
</div>
<div className="mt-16 grid gap-6 lg:grid-cols-3">
<article className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="flex items-start justify-between gap-6">
<div className="">
<p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Starter
                    </p>
<h3 className="mt-3 text-[24px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      For getting organized
                    </h3>
</div>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400 font-geist">
                    Free
                  </span>
</div>
<div className="mt-8">
<div className="flex items-end gap-2">
<span className="text-5xl tracking-tight text-white font-jakarta font-medium">
                      $0
                    </span>
<span className="pb-2 text-sm text-slate-500 font-geist">
                      / month
                    </span>
</div>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    A calm workspace for individuals and small teams starting
                    their first projects.
                  </p>
</div>
<a className="mt-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 ease-out hover:border-white/20 hover:bg-white/[0.07] font-geist" href="#cta">
                  Start free
                </a>
<div className="mt-8 h-px w-full bg-white/[0.08]"></div>
<ul className="mt-8 space-y-4 text-[15px] leading-6 text-slate-400">
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Up to 3 projects
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Simple task boards
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Due dates and owners
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Weekly activity summary
                  </li>
</ul>
</article>
<article className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-blue-500/[0.16] via-white/[0.06] to-transparent p-8 shadow-2xl shadow-blue-950/20 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-blue-300/30 transition-colors group-hover:border-blue-200/40"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent"></div>
<div className="flex items-start justify-between gap-6">
<div className="">
<p className="text-[11px] font-semibold uppercase tracking-widest text-blue-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Pro
                    </p>
<h3 className="mt-3 text-[24px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      For focused teams
                    </h3>
</div>
<span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200 font-geist">
                    Popular
                  </span>
</div>
<div className="mt-8">
<div className="flex items-end gap-2">
<span className="text-5xl tracking-tight text-white font-jakarta font-medium">
                      $12
                    </span>
<span className="pb-2 text-sm text-slate-400 font-geist">
                      / user / month
                    </span>
</div>
<p className="mt-4 text-[15px] leading-relaxed text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    Everything small teams need to plan work, stay aligned, and
                    ship consistently.
                  </p>
</div>
<a className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-950/20 transition duration-300 ease-out hover:bg-cyan-50 font-geist" href="#cta">
                  Start 14-day trial
                </a>
<div className="mt-8 h-px w-full bg-blue-200/15"></div>
<ul className="mt-8 space-y-4 text-[15px] leading-6 text-slate-300">
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-300/15 text-blue-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Unlimited projects
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-300/15 text-blue-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Timeline and calendar views
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-300/15 text-blue-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Priority labels and filters
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-300/15 text-blue-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Team comments and mentions
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-300/15 text-blue-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Progress reports
                  </li>
</ul>
</article>
<article className="group relative flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="flex items-start justify-between gap-6">
<div>
<p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Business
                    </p>
<h3 className="mt-3 text-[24px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      For growing teams
                    </h3>
</div>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400 font-geist">
                    Scale
                  </span>
</div>
<div className="mt-8">
<div className="flex items-end gap-2">
<span className="text-5xl tracking-tight text-white font-jakarta font-medium">
                      $29
                    </span>
<span className="pb-2 text-sm text-slate-500 font-geist">
                      / user / month
                    </span>
</div>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    Advanced controls and visibility for teams coordinating
                    multiple projects.
                  </p>
</div>
<a className="mt-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 ease-out hover:border-white/20 hover:bg-white/[0.07] font-geist" href="#cta">
                  Contact sales
                </a>
<div className="mt-8 h-px w-full bg-white/[0.08]"></div>
<ul className="mt-8 space-y-4 text-[15px] leading-6 text-slate-400">
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Everything in Pro
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Admin permissions
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Portfolio reporting
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Priority support
                  </li>
<li className="flex gap-3 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                    Custom onboarding
                  </li>
</ul>
</article>
</div>
<div className="text-center border-white/10 border rounded-[2rem] mt-10 pt-6 pr-6 pb-6 pl-6">
<p className="text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                All plans include secure workspaces, unlimited tasks, and a calm
                interface your team can learn in minutes.
              </p>
</div>
</div>
</section>
<section className="border-white/[0.06] overflow-hidden sm:px-8 lg:px-10 font-sans border-t pt-24 pr-5 pb-24 pl-5 relative" id="faq">
<div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28rem 28rem'}}></div>
<div className="relative z-10 mx-auto w-full max-w-[1280px]">
<div className="reveal grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end" style={{transition: 'opacity 900ms ease-out 90ms, transform 900ms ease-out'}}>

<div className="max-w-3xl">
<p className="text-[13px] font-medium text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  06 · FAQ
                </p>
<h2 className="mt-4 text-4xl leading-[1.1] tracking-tight text-white sm:text-[56px] font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Questions teams ask before getting started.
                </h2>
</div>

<div className="lg:ml-auto lg:max-w-md">
<p className="text-[17px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Everything you need to know about setting up Pulsedesk,
                  inviting your team, and keeping projects organized.
                </p>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-cyan-50 font-geist" href="#">
                    View FAQ
                  </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08] font-geist" href="#">
                    Contact us
                  </a>
</div>
</div>
</div>
<div className="mt-16 grid gap-6 lg:grid-cols-2">
<article className="group relative rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 2.25-3 4"></path>
<path d="M12 17h.01"></path>
</svg>
</span>
<div className="">
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      How quickly can my team start using Pulsedesk?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Most teams create their first workspace, add a project,
                      and invite collaborators in just a few minutes. The
                      workflow is intentionally simple, so there is no long
                      setup process.
                    </p>
</div>
</div>
</article>
<article className="group relative rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</span>
<div className="">
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Is Pulsedesk built for individuals or teams?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Both. Freelancers can use it to manage personal client
                      work, while teams can coordinate tasks, owners, deadlines,
                      comments, and project progress in one shared place.
                    </p>
</div>
</div>
</article>
<article className="group relative rounded-[2rem] bg-gradient-to-b from-blue-500/[0.12] via-white/[0.05] to-transparent p-8 shadow-2xl shadow-blue-950/20 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-blue-300/25 transition-colors group-hover:border-blue-200/40"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-300/15 text-blue-100">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</span>
<div>
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Can we customize projects and workflows?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Yes. You can organize work with projects, task statuses,
                      owners, priorities, due dates, and notes without turning
                      the workspace into a complicated system.
                    </p>
</div>
</div>
</article>
<article className="group relative rounded-[2rem] bg-gradient-to-b from-blue-500/[0.12] via-white/[0.05] to-transparent p-8 shadow-2xl shadow-blue-950/20 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-blue-300/25 transition-colors group-hover:border-blue-200/40"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-300/15 text-blue-100">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16"></path>
<path d="M4 12h10"></path>
<path d="M4 17h7"></path>
</svg>
</span>
<div className="">
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Can Pulsedesk replace spreadsheets and scattered notes?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-300 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      For task tracking and project coordination, yes. Pulsedesk
                      keeps responsibilities, timelines, updates, and progress
                      visible so teams do not need to chase information across
                      tabs.
                    </p>
</div>
</div>
</article>
<article className="group relative rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</span>
<div className="">
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Is our workspace secure?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      Pulsedesk is designed around secure workspaces and clear
                      access for your team. You control who is invited and what
                      projects they collaborate on.
                    </p>
</div>
</div>
</article>
<article className="group relative rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-300 ease-out hover:-translate-y-1">
<div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="relative flex gap-5">
<span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</span>
<div className="">
<h3 className="text-[22px] tracking-tight text-white font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      What happens if we need more capacity later?
                    </h3>
<p className="mt-4 text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                      You can start small and expand when your team needs more
                      projects, reporting, collaboration controls, or support.
                      Pulsedesk is built to scale without adding clutter.
                    </p>
</div>
</div>
</article>
</div>
<div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center">
<p className="text-[15px] leading-relaxed text-slate-400 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Still have questions? Start a free trial or contact the team to
                see how Pulsedesk fits your workflow.
              </p>
</div>
</div>
</section>
<section className="sm:px-8 lg:px-10 lg:pt-24 pt-24 pr-5 pb-24 pl-5" id="cta">
<div className="reveal overflow-hidden border-white/[0.08] shadow-cyan-950/20 sm:px-10 sm:py-10 lg:px-12 lg:py-12 bg-[#0d1422]/70 w-full max-w-[1280px] border rounded-[2rem] mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 relative shadow-2xl backdrop-blur-2xl" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out'}}>

<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-28 left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-100/10 bg-cyan-100/[0.04] px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-200"></span>
<p className="text-xs font-medium tracking-wide text-cyan-100 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                    Start in minutes
                  </p>
</div>
<h2 className="mt-5 text-3xl tracking-tighter text-white sm:text-4xl lg:text-5xl font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  Give your team one clear place to manage work.
                </h2>
<p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                  No credit card required. Create your first project, invite
                  your team, and see every deadline in one calm workspace.
                </p>
</div>
<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-950/30 transition duration-300 ease-out hover:scale-[1.03] hover:bg-cyan-50 font-geist" href="#pricing">
                  Start free trial
                  <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition duration-300 ease-out hover:bg-white/[0.06] hover:text-white font-geist" href="#how">
                  See how it works
                </a>
</div>
</div>
</div>
</section>
</main>
<footer className="overflow-hidden border-white/[0.06] sm:px-8 sm:py-16 lg:pl-10 lg:pr-10 lg:pt-20 lg:pb-10 border-t pt-20 pr-10 pb-10 pl-10 relative">

<div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/20 to-transparent"></div>
<div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"></div>
<div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="relative mx-auto w-full max-w-[1280px]">

<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
<div className="">
<p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100/10 bg-cyan-100/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-cyan-100 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-200"></span>
                Start in minutes
              </p>
<h2 className="max-w-5xl text-6xl leading-none tracking-tighter text-white sm:text-7xl lg:text-8xl font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Let’s get work under control.
              </h2>
</div>
<div className="max-w-xl lg:justify-self-end">
<p className="text-2xl leading-tight tracking-tight text-slate-400 sm:text-3xl font-jakarta font-medium" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                One calm workspace for tasks, deadlines, and team focus.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-100 px-6 py-4 text-base font-medium text-slate-950 shadow-2xl shadow-cyan-950/30 transition duration-300 ease-out hover:scale-[1.03] hover:bg-cyan-50 font-geist" href="#pricing">
                  Start free trial
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-base font-medium text-slate-200 transition duration-300 ease-out hover:bg-white/[0.06] hover:text-white font-geist" href="#how">
                  See product
                </a>
</div>
</div>
</div>

<div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-12 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.6fr] lg:gap-16">
<div className="max-w-sm">
<a className="inline-flex items-center gap-3" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-100/10 bg-cyan-100/[0.06] text-cyan-100">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16"></path>
<path d="M4 12h10"></path>
<path d="M4 17h7"></path>
</svg>
</span>
<span className="text-xl tracking-tight text-white font-jakarta font-medium">
                  Pulsedesk
                </span>
</a>
<p className="mt-5 text-sm leading-6 text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                A simple project workspace for small teams, startups, and
                freelancers who want less clutter and more clarity.
              </p>
</div>
<div>
<p className="text-sm font-medium text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Pages
              </p>
<nav className="mt-5 flex flex-col gap-3">
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#how">
                  Product
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#pricing">
                  Pricing
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#reviews">
                  Customers
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#problem">
                  About
                </a>
</nav>
</div>
<div className="">
<p className="text-sm font-medium text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Resources
              </p>
<nav className="mt-5 flex flex-col gap-3">
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Help center
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Privacy
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Terms
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Contact
                </a>
</nav>
</div>
<div>
<p className="text-sm font-medium text-slate-500 font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
                Socials
              </p>
<nav className="mt-5 flex flex-col gap-3">
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Twitter (X)
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Instagram
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  LinkedIn
                </a>
<a className="text-sm text-slate-300 transition hover:text-cyan-100 font-geist" href="#">
                  Dribbble
                </a>
</nav>
</div>
</div>

<div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.06] pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
<p className="font-geist" style={{transition: 'opacity 900ms ease-out, transform 900ms ease-out', willChange: 'opacity, transform'}}>
              © 2026 Pulsedesk. All rights reserved.
            </p>
<div className="flex flex-wrap gap-x-4 gap-y-2 font-geist">
<a className="transition hover:text-slate-300 font-geist" href="#how">
                Built for focused teams
              </a>
<a className="transition hover:text-slate-300 font-geist" href="#pricing">
                Start free
              </a>
<a className="transition hover:text-slate-300 font-geist" href="#">
                Privacy
              </a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
