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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
cyan: '#4adede',
mint: '#60f1ad',
dark: '#030712'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function initWebGL() {
          const container = document.getElementById('webgl-container');
          const scene = new THREE.Scene();

          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 30;
          camera.position.y = 10;

          const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          container.appendChild(renderer.domElement);

          const vertexShader = `
              varying vec2 vUv;
              varying float vElevation;
              uniform float uTime;

              void main() {
                  vUv = uv;
                  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

                  float elevation = sin(modelPosition.x * 0.1 + uTime * 0.5) * 4.0;
                  elevation += sin(modelPosition.z * 0.15 - uTime * 0.3) * 3.0;
                  elevation += sin(modelPosition.x * 0.3 + modelPosition.z * 0.2 + uTime) * 1.5;

                  modelPosition.y += elevation;
                  vElevation = elevation;

                  vec4 viewPosition = viewMatrix * modelPosition;
                  vec4 projectedPosition = projectionMatrix * viewPosition;
                  gl_Position = projectedPosition;
              }
          `;

          const fragmentShader = `
              varying vec2 vUv;
              varying float vElevation;

              void main() {
                  float mixStrength = (vElevation + 8.5) / 17.0;
                  mixStrength = clamp(mixStrength, 0.0, 1.0);

                  vec3 colorDark = vec3(0.01, 0.03, 0.08);
                  vec3 colorCyan = vec3(0.29, 0.87, 0.87);
                  vec3 colorMint = vec3(0.37, 0.94, 0.67);

                  vec3 mixedColor = mix(colorDark, colorCyan, mixStrength * 1.5);
                  mixedColor = mix(mixedColor, colorMint, smoothstep(0.6, 1.0, mixStrength));

                  float alpha = smoothstep(-2.0, 5.0, vElevation) * 0.4;
                  float edgeAlpha = sin(vUv.x * 3.1415) * sin(vUv.y * 3.1415);

                  gl_FragColor = vec4(mixedColor, alpha * edgeAlpha);
              }
          `;

          const geometry = new THREE.PlaneGeometry(150, 100, 150, 150);
          geometry.rotateX(-Math.PI * 0.5);

          const material = new THREE.ShaderMaterial({
              vertexShader: vertexShader,
              fragmentShader: fragmentShader,
              uniforms: {
                  uTime: { value: 0 }
              },
              transparent: true,
              blending: THREE.AdditiveBlending,
              side: THREE.DoubleSide,
              wireframe: true
          });

          const plane = new THREE.Mesh(geometry, material);
          plane.position.y = -15;
          plane.position.z = -10;
          scene.add(plane);

          // Particles system representing autonomous sensory tracking points
          const particlesGeometry = new THREE.BufferGeometry();
          const particlesCount = 500;
          const posArray = new Float32Array(particlesCount * 3);

          for(let i = 0; i < particlesCount * 3; i++) {
              posArray[i] = (Math.random() - 0.5) * 120;
          }
          particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

          const particlesMaterial = new THREE.PointsMaterial({
              size: 0.12,
              color: 0x4adede,
              transparent: true,
              opacity: 0.3,
              blending: THREE.AdditiveBlending
          });

          const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
          scene.add(particlesMesh);

          const clock = new THREE.Clock();

          function animate() {
              requestAnimationFrame(animate);
              const elapsedTime = clock.getElapsedTime();

              material.uniforms.uTime.value = elapsedTime;
              particlesMesh.rotation.y = elapsedTime * 0.01;
              particlesMesh.rotation.x = elapsedTime * 0.005;

              camera.position.x = Math.sin(elapsedTime * 0.1) * 1.5;
              camera.lookAt(scene.position);

              renderer.render(scene, camera);
          }

          animate();

          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          });
      }

      document.addEventListener("DOMContentLoaded", initWebGL);
    
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
      

<div id="webgl-container"></div>

<header className="fixed top-6 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 mix-blend-difference">
<a className="text-lg md:text-xl font-medium tracking-tighter uppercase text-white hover:opacity-80 transition-opacity" href="#">
        NEXAR
      </a>
<nav className="hidden md:block">
<ul className="flex items-center gap-10 text-xs text-gray-400 font-normal uppercase tracking-wider">
<li>
<a className="hover:text-white transition-colors" href="#why-us">
              Why Nexar
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#proof">
              Validation
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#audiences">
              Solutions
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#metrics">
              Scale
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</li>
</ul>
</nav>
<a className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-xs font-semibold text-white bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 rounded-full py-2 px-5 shadow-[0_4px_15px_rgba(0,123,255,0.4)]" href="#calendly">
        Book Demo
        <iconify-icon className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</header>

<main className="relative z-10 flex flex-col items-center justify-center px-4 text-center pb-16 pt-32 max-w-4xl mx-auto">

<div className="flex flex-col items-center gap-1 mb-6">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
          Your Autonomy Stack Is Only
          <br/>
<span className="gradient-text font-serif italic">
            as Smart as the Reality It's Seen.
          </span>
<br/>
          We Have the Most of It.
        </h1>
</div>

<p className="text-gray-400 text-xs font-normal max-w-xl mb-10 leading-relaxed md:text-lg">
        BADAS 2.0 predicts collisions at 99.4% precision trained on real roads,
        not simulation.
        <br/>
        The same real-world data engine is now open for your models.
      </p>

<div className="w-full max-w-2xl mx-auto mb-10">
<div className="relative w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl" style={{paddingTop: '56.25%', backgroundColor: '#1a1a1a'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30">
<iconify-icon className="text-3xl animate-pulse" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-mono">
              VSL PLACEHOLDER
            </span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 fade-up-element">
<a className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full sm:w-auto rounded-full py-3.5 px-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)]" href="#calendly">
          Schedule a Call
          <iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</main>

<section className="z-10 border-y text-lg bg-black/40 border-white/5 px-4 py-8 relative backdrop-blur-md">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
<div className="flex flex-col items-center justify-center p-2">
<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-1">
              Trusted By
            </span>
<span className="text-white text-xs font-medium">
              NVIDIA, Waymo, Lyft &amp; Motional
            </span>
</div>
<div className="flex flex-col items-center justify-center p-2 border-l border-white/5">
<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-1">
              Scale
            </span>
<span className="text-white text-xs font-medium">
              World's largest open video dataset
            </span>
</div>
<div className="flex flex-col items-center justify-center p-2 border-l border-white/5">
<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-1">
              Leadership
            </span>
<span className="text-white text-xs font-medium">
              Yann LeCun on Board of Directors
            </span>
</div>
<div className="flex flex-col items-center justify-center p-2 border-l border-white/5">
<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-1">
              Performance
            </span>
<span className="text-white text-xs font-medium">
              Beat NVIDIA Cosmos at 91x fewer params
            </span>
</div>
<div className="flex flex-col items-center justify-center p-2 border-l border-white/5">
<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-1">
              Map Ecosystem
            </span>
<span className="text-white text-xs font-medium">
              TomTom · Mapbox · NextBillion AI
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight text-white md:text-4xl">
          The Real-World Gap
        </h2>
<p className="text-lg text-gray-400 mt-2">
          Why pure simulation leaves your stack vulnerable
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-950/60 backdrop-blur-sm border border-white/10 rounded-lg p-6">
<div className="text-brand-cyan mb-4">
<iconify-icon className="text-2xl" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
            Simulation can't show your model the long tail
          </h3>
<p className="leading-relaxed text-base text-gray-400">
            The rare, messy, unstageable moments that break autonomy never
            appear in synthetic data.
          </p>
</div>

<div className="bg-zinc-950/60 backdrop-blur-sm border border-white/10 rounded-lg p-6">
<div className="text-brand-mint mb-4">
<iconify-icon className="text-2xl" icon="solar:map-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
            Static maps go stale the moment the road changes
          </h3>
<p className="leading-relaxed text-base text-gray-400">Work zones shift and hazards appear weekly your stack is navigating a world that no longer exists.</p>
</div>

<div className="bg-zinc-950/60 backdrop-blur-sm border border-white/10 rounded-lg p-6">
<div className="text-brand-cyan mb-4">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
            You can't prove real-world readiness with a benchmark
          </h3>
<p className="leading-relaxed text-base text-gray-400">
            Abstract simulation scores don't tell a regulator, or you, whether
            the stack is actually safe.
          </p>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 max-w-4xl mx-auto border-t border-white/5" id="why-us">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-5">
<span className="text-brand-cyan text-xs uppercase tracking-widest font-semibold">
            The Engine
          </span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mt-2 leading-tight">
            No simulation, only reality.
          </h2>
</div>
<div className="md:col-span-7 text-gray-400 text-xs md:text-sm space-y-4 leading-relaxed">
<p className="">Nexar runs a network of 350K+ connected edge cameras that capture real driving as it happens not staged, not simulated.</p>
<p className="">
            On-device edge AI filters the noise and surfaces only the critical
            events, which our data engine structures and enriches into AI-ready
            datasets.
          </p>
<p className="">
            You can target the exact edge cases you need by geography, weather,
            or behavior, and get them delivered annotated.
          </p>
<p className="">
            It's the difference between training on a model of the world and
            training on the world itself.
          </p>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 bg-black/20 border-t border-white/5" id="proof">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-8">
<span className="text-brand-mint text-xs uppercase tracking-widest font-semibold">
            Validation Proof
          </span>
<h2 className="text-2xl font-medium tracking-tight text-white mt-1">
            The teams building autonomy run on Nexar's reality
          </h2>
</div>

<div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center items-center justify-center py-6 mb-10 border-b border-white/5">
<span className="text-white font-medium text-xs tracking-tighter">
            NVIDIA
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            WAYMO
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            LYFT
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            MOTIONAL
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            TOMTOM
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            MAPBOX
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            NEXTBILLION
          </span>
<span className="text-white font-medium text-xs tracking-tighter">
            VGM
          </span>
</div>

<div className="md:p-8 flex flex-col md:flex-row gap-6 bg-gradient-to-br from-zinc-900 to-black border-white/10 border rounded-lg pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="">
<span className="text-brand-cyan uppercase text-lg font-semibold tracking-wider font-mono">
              Flagship Model benchmark
            </span>
<h3 className="text-xl font-semibold text-white mt-1">
              BADAS 2.0 vs NVIDIA Cosmos
            </h3>
<p className="text-base text-gray-400 mt-1">
              Outperformed Cosmos on identical dataset parameters with 91x fewer
              parameters.
            </p>
</div>
<div className="bg-black/40 border border-brand-mint/20 rounded px-6 py-4 text-center min-w-[200px]">
<span className="text-brand-mint text-2xl font-semibold block">
              91x Smaller
            </span>
<span className="text-[10px] uppercase block text-base text-gray-500 font-mono mt-1">
              Not a benchmark. A deployment.
            </span>
</div>
</div>

<div className="text-center mt-8">
<span className="text-lg italic text-gray-500">[placeholder: Owen to supply an approved partner quote + name/company]</span>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 max-w-6xl mx-auto border-t border-white/5">
<div className="text-center mb-12">
<span className="text-brand-cyan text-xs uppercase tracking-widest font-semibold">
          The Pipeline
        </span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mt-1">
          How We Feed Your Stack
        </h2>
</div>
<div className="grid md:grid-cols-5 gap-6">
<div className="relative bg-zinc-950/40 p-5 rounded-lg border border-white/5">
<span className="text-xs font-mono text-brand-cyan block mb-2">01</span>
<h4 className="text-xl font-semibold text-white mb-1">
            Define Edge Cases
          </h4>
<p className="text-[11px] leading-relaxed text-xl text-gray-400">
            Book a call, tell us the scenarios your stack struggles with.
          </p>
</div>
<div className="relative bg-zinc-950/40 p-5 rounded-lg border border-white/5">
<span className="text-xs font-mono text-brand-cyan block mb-2">02</span>
<h4 className="text-xl font-semibold text-white mb-1">
            Target On Demand
          </h4>
<p className="text-[11px] leading-relaxed text-xl text-gray-400">
            We target real-world data on demand by geography, weather, and
            behavior.
          </p>
</div>
<div className="relative bg-zinc-950/40 p-5 rounded-lg border border-white/5">
<span className="text-xs font-mono text-brand-cyan block mb-2">03</span>
<h4 className="text-xl font-semibold text-white mb-1">
            Enrich &amp; Structure
          </h4>
<p className="text-[11px] leading-relaxed text-xl text-gray-400">
            The data engine structures and AI-enriches it into training-ready
            datasets.
          </p>
</div>
<div className="relative bg-zinc-950/40 p-5 rounded-lg border border-white/5">
<span className="text-xs font-mono text-brand-cyan block mb-2">04</span>
<h4 className="text-xl font-semibold text-white mb-1">
            Validate with APEX
          </h4>
<p className="text-[11px] leading-relaxed text-xl text-gray-400">
            Validate your stack against 10B+ miles of ground truth with Nexar
            APEX.
          </p>
</div>
<div className="relative bg-zinc-950/40 p-5 rounded-lg border border-white/5">
<span className="text-xs font-mono text-brand-cyan block mb-2">05</span>
<h4 className="text-xl font-semibold text-white mb-1">
            Deploy Live Feeds
          </h4>
<p className="text-[11px] leading-relaxed text-xl text-gray-400">Deploy with confidence and keep a live feed of the road as it changes.</p>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 bg-zinc-950/40 border-y border-white/5" id="audiences">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<span className="text-brand-mint text-xs uppercase tracking-widest font-semibold">
            Solutions
          </span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mt-1">
            Engineered for Technical Deciders
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-white/10 rounded-lg p-6 bg-black/60">
<h3 className="text-white text-base font-semibold mb-4 pb-2 border-b border-white/5">
              AV &amp; OEM Validation
            </h3>
<ul className="space-y-3 text-xs text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Ground-truth real-world data at scale
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                On-demand edge-case collection
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Validate models with Nexar APEX
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Automated scenario reconstruction in 3D
              </li>
</ul>
</div>

<div className="border border-white/10 rounded-lg p-6 bg-black/60">
<h3 className="text-white text-base font-semibold mb-4 pb-2 border-b border-white/5">
              Public Safety &amp; DOTs
            </h3>
<ul className="space-y-3 text-xs text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-cyan" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Live work-zone &amp; hazard detection
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-cyan" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Dynamic map freshness, near real-time
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-cyan" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                City-scale street-level monitoring
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-cyan" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                CityStream + IBM workzone intelligence
              </li>
</ul>
</div>

<div className="border border-white/10 rounded-lg p-6 bg-black/60">
<h3 className="text-white text-base font-semibold mb-4 pb-2 border-b border-white/5">
              AI &amp; Data Science
            </h3>
<ul className="space-y-3 text-xs text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Labeled, AI-ready video datasets
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Rare events &amp; long-tail at scale
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Cut cost and limits of synthetic data
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-mint" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Collection-on-demand by scenario
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 text-center max-w-4xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">
        Ready to Benchmark Against Reality?
      </h2>
<a className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full sm:w-auto rounded-full py-4 px-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)]" href="#calendly">See What Your Models Could Learn From 10B Real Miles </a>
</section>

<section className="relative z-10 py-16 px-4 bg-black/40 border-t border-white/5" id="metrics">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<span className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight block">
              10B+
            </span>
<span className="text-gray-400 text-xs mt-2 block">
              Miles of real driving
            </span>
</div>
<div className="">
<span className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight block">
              350K+
            </span>
<span className="text-gray-400 text-xs mt-2 block">
              Connected edge cameras
            </span>
</div>
<div className="">
<span className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight block">
              99.4%
            </span>
<span className="text-gray-400 text-xs mt-2 block">
              BADAS collision-prediction precision
            </span>
</div>
<div className="">
<span className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight block">
              60M+
            </span>
<span className="text-gray-400 text-xs mt-2 block">
              Real-world edge cases
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 max-w-4xl mx-auto border-t border-white/5">
<div className="grid md:grid-cols-12 gap-8 items-start">
<div className="md:col-span-4">
<span className="text-brand-cyan text-xs uppercase tracking-widest font-semibold">
            Who We Are
          </span>
<h3 className="text-xl font-medium text-white mt-1">Our Conviction</h3>
</div>
<div className="md:col-span-8 text-xs text-gray-400 leading-relaxed space-y-4">
<p className="">Nexar exists on one conviction: true autonomy will be trained on reality, not simulation. We operate the world's largest open video driving dataset, built from a live network of edge cameras on real roads capturing the long-tail moments other systems never see.</p>
<p className="">
            That foundation is why partners like NVIDIA, Waymo, and Motional
            build on Nexar, and why Yann LeCun joined our board of directors.
            Nexar is the infrastructure layer turning the real-world edge into
            deployable intelligence.
          </p>
<div className="pt-2">
<span className="text-white block font-semibold font-mono">
              nexar-ai.com
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 max-w-4xl mx-auto border-t border-white/5" id="faq">
<div className="text-center mb-10">
<span className="text-brand-mint text-xs uppercase tracking-widest font-semibold">
          FAQ
        </span>
<h2 className="text-2xl font-medium tracking-tight text-white mt-1">
          Doubt Removal
        </h2>
</div>
<div className="space-y-6">
<div className="border-b border-white/5 pb-4">
<h4 className="text-white text-sm font-semibold mb-2">
            How is this different from synthetic or simulated data?
          </h4>
<p className="text-gray-400 text-xs leading-relaxed">Our data is captured from real roads by a live sensor network the unstageable long-tail events simulators can't reproduce. Simulation is a training tool; reality is the proving ground.</p>
</div>
<div className="border-b border-white/5 pb-4">
<h4 className="text-white text-sm font-semibold mb-2">
            Can I get the specific edge cases my stack struggles with?
          </h4>
<p className="text-gray-400 text-xs leading-relaxed">
            Yes. Collection-on-demand lets you define scenarios by geography,
            weather, and behavior, and we proactively target and deliver that
            data, annotated and AI-ready.
          </p>
</div>
<div className="border-b border-white/5 pb-4">
<h4 className="text-white text-sm font-semibold mb-2">
            How do I know your models actually outperform what we have?
          </h4>
<p className="text-gray-400 text-xs leading-relaxed">
            BADAS 2.0 beat NVIDIA's Cosmos on the same data at 91x fewer
            parameters, at 99.4% precision. We invite partners to review the
            methodology and benchmark against their own stack.
          </p>
</div>
<div className="border-b border-white/5 pb-4">
<h4 className="text-white text-sm font-semibold mb-2">
            What format does the data come in, and is it labeled?
          </h4>
<p className="text-gray-400 text-xs leading-relaxed">
            Structured, high-fidelity video and metadata, AI-enriched into
            context-rich annotated datasets usable directly for model training
            and simulation input.
          </p>
</div>
<div className="pb-4">
<h4 className="text-white text-sm font-semibold mb-2">
            What happens on the first call?
          </h4>
<p className="text-gray-400 text-xs leading-relaxed">A technical conversation about your use case and the data or validation you need no pitch deck. You leave knowing exactly how Nexar's data engine or APEX would fit your stack.</p>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-4 bg-zinc-950 border-t border-white/10" id="calendly">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">
          Book a Technical Call
        </h2>
<p className="text-gray-400 text-xs mb-8">
          Talk data and deployment with the Nexar team.
        </p>

<div className="bg-black border border-white/5 rounded-lg p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
<iconify-icon className="text-4xl text-brand-cyan/60 mb-3" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white text-sm font-semibold">
            Calendly Booking Interface
          </span>
<p className="text-gray-500 text-xs mt-1 max-w-sm mx-auto">[placeholder Owen to supply Calendly scheduling link]</p>
<div className="mt-6 border-t border-white/5 pt-4 w-full max-w-xs text-[10px] text-gray-500 font-mono">
            Direct integration mapping configured
          </div>
</div>
</div>
</section>

<footer className="relative z-10 py-8 px-4 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest font-mono">
      © 2026 Nexar Inc. All rights reserved.
    </footer>



    </>
  );
}
