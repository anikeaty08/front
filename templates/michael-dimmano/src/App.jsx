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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- WebGL Background Integration ---
      const vertexShader = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `;

      const fragmentShader = `
      precision highp float;

      uniform float uTime, uAttenuation, uLineThickness;
      uniform float uBaseRadius, uRadiusStep, uScaleRate;
      uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
      uniform float uFadeIn, uFadeOut;
      uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
      uniform vec2 uResolution, uMouse;
      uniform vec3 uColor, uColorTwo;
      uniform int uRingCount;

      const float HP = 1.5707963;
      const float CYCLE = 4.0;

      float fade(float t) {
        return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
      }

      float ring(vec2 p, float ri, float cut, float t0, float px) {
        float t = mod(uTime + t0, CYCLE);
        float r = ri + t / CYCLE * uScaleRate;
        float d = abs(length(p) - r);
        float a = atan(abs(p.y), abs(p.x)) / HP;
        float th = max(1.0 - a, 0.5) * px * uLineThickness;
        float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
        d += pow(cut * a, 3.0) * r;
        return h * exp(-uAttenuation * d) * fade(t);
      }

      void main() {
        float px = 1.0 / min(uResolution.x, uResolution.y);
        vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;

        // Asymmetrical offset for the layout
        p.x -= 0.15;

        float cr = cos(uRotation), sr = sin(uRotation);
        p = mat2(cr, -sr, sr, cr) * p;
        p -= uMouse * uMouseInfluence;
        float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.4;
        p /= sc;
        vec3 c = vec3(0.0);
        float rcf = max(float(uRingCount) - 1.0, 1.0);
        for (int i = 0; i < 10; i++) {
          if (i >= uRingCount) break;
          float fi = float(i);
          vec2 pr = p - fi * uParallax * uMouse;
          vec3 rc = mix(uColor, uColorTwo, fi / rcf);
          c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 3.1 * fi, px)));
        }
        c *= 1.0 + uBurst * 2.5;
        float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
        c += (n - 0.5) * uNoiseAmount;
        gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
      }
      `;

      document.addEventListener('DOMContentLoaded', () => {
          const mount = document.getElementById('magic-rings-mount');
          if (!mount || !window.THREE) return;

          let renderer;
          try {
              renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          } catch {
              console.error("WebGL not supported");
              return;
          }

          renderer.setClearColor(0x000000, 0);
          mount.appendChild(renderer.domElement);

          const scene = new THREE.Scene();
          const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
          camera.position.z = 1;

          const props = {
              color: '#1d4ed8',
              colorTwo: '#0ea5e9',
              speed: 0.7,
              ringCount: 9,
              attenuation: 14,
              lineThickness: 4.0,
              baseRadius: 0.28,
              radiusStep: 0.16,
              scaleRate: 0.07,
              opacity: 0.85,
              noiseAmount: 0.15,
              rotation: -15,
              ringGap: 1.8,
              fadeIn: 0.8,
              fadeOut: 0.6,
              followMouse: true,
              mouseInfluence: 0.15,
              hoverScale: 1.03,
              parallax: 0.03,
              clickBurst: true
          };

          const uniforms = {
              uTime: { value: 0 },
              uAttenuation: { value: props.attenuation },
              uResolution: { value: new THREE.Vector2() },
              uColor: { value: new THREE.Color(props.color) },
              uColorTwo: { value: new THREE.Color(props.colorTwo) },
              uLineThickness: { value: props.lineThickness },
              uBaseRadius: { value: props.baseRadius },
              uRadiusStep: { value: props.radiusStep },
              uScaleRate: { value: props.scaleRate },
              uRingCount: { value: props.ringCount },
              uOpacity: { value: props.opacity },
              uNoiseAmount: { value: props.noiseAmount },
              uRotation: { value: (props.rotation * Math.PI) / 180 },
              uRingGap: { value: props.ringGap },
              uFadeIn: { value: props.fadeIn },
              uFadeOut: { value: props.fadeOut },
              uMouse: { value: new THREE.Vector2(0, 0) },
              uMouseInfluence: { value: props.followMouse ? props.mouseInfluence : 0 },
              uHoverAmount: { value: 0 },
              uHoverScale: { value: props.hoverScale },
              uParallax: { value: props.parallax },
              uBurst: { value: 0 },
          };

          const material = new THREE.ShaderMaterial({
              vertexShader,
              fragmentShader,
              uniforms,
              transparent: true,
              depthWrite: false,
              blending: THREE.AdditiveBlending
          });
          const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
          scene.add(quad);

          const resize = () => {
              const w = mount.clientWidth;
              const h = mount.clientHeight;
              const dpr = Math.min(window.devicePixelRatio, 2);
              renderer.setSize(w, h);
              renderer.setPixelRatio(dpr);
              uniforms.uResolution.value.set(w * dpr, h * dpr);
          };
          resize();
          window.addEventListener('resize', resize);

          let targetMouse = [0, 0];
          let currentMouse = [0, 0];
          let targetHover = 0;
          let currentHover = 0;
          let currentBurst = 0;

          const onMouseMove = (e) => {
              const rect = mount.getBoundingClientRect();
              targetMouse[0] = (e.clientX - rect.left) / rect.width - 0.5;
              targetMouse[1] = -((e.clientY - rect.top) / rect.height - 0.5);
          };

          document.body.addEventListener('mousemove', onMouseMove);

          let frameId;
          const animate = (t) => {
              frameId = requestAnimationFrame(animate);

              currentMouse[0] += (targetMouse[0] - currentMouse[0]) * 0.05;
              currentMouse[1] += (targetMouse[1] - currentMouse[1]) * 0.05;
              currentHover += (targetHover - currentHover) * 0.08;
              currentBurst *= 0.93;
              if (currentBurst < 0.001) currentBurst = 0;

              uniforms.uTime.value = t * 0.001 * props.speed;
              uniforms.uMouse.value.set(currentMouse[0], currentMouse[1]);
              uniforms.uHoverAmount.value = currentHover;
              uniforms.uBurst.value = currentBurst;

              renderer.render(scene, camera);
          };
          frameId = requestAnimationFrame(animate);

          // --- GSAP Masked Reveal Implementation ---
          gsap.registerPlugin(ScrollTrigger);

          function wrapWords(selector) {
              const el = document.querySelector(selector);
              if (!el) return;
              const text = el.innerText;
              const words = text.trim().split(/\s+/);
              el.innerHTML = '';

              words.forEach((word) => {
                  const maskSpan = document.createElement('span');
                  maskSpan.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: top; padding-right: 0.25em; padding-bottom: 0.1em;';

                  const innerSpan = document.createElement('span');
                  innerSpan.style.cssText = 'display: inline-block; transform: translateY(110%); transform-origin: top left;';
                  innerSpan.innerText = word;
                  innerSpan.className = 'reveal-word';

                  maskSpan.appendChild(innerSpan);
                  el.appendChild(maskSpan);
              });
          }

          wrapWords('#reveal-text');

          const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: "#reveal-text",
                  start: "top 85%",
                  toggleActions: "play none none reverse"
              }
          });

          tl.to('#fade-badge', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
          })
          .to('.reveal-word', {
              y: "0%",
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.03
          }, "-=0.4")
          .to('#fade-subtext', {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out"
          }, "-=0.8")
          .to('#fade-ctas', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
          }, "-=0.6")
          .fromTo('#fade-card',
              { opacity: 0, x: 40, y: 20 },
              { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out" },
              "-=1.2"
          )
          .fromTo(['#pain-card-1', '#pain-card-2', '#pain-card-3'],
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" },
              "-=0.8"
          );

      });
    
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
      

<div className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<section className="relative min-h-screen w-full flex items-center overflow-hidden pt-36 pb-16 lg:pt-48 lg:pb-20">

<div className="absolute inset-0 w-full h-full z-10 cursor-default" id="magic-rings-mount"></div>

<div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 items-center pointer-events-none flex flex-col justify-center">

<div className="flex flex-col w-full items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 opacity-0" id="fade-badge">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-blue-300/90 tracking-wide uppercase">
              State Approved Carve-Out
            </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] max-w-6xl text-center mx-auto font-medium" id="reveal-text">
            1 Of Only 70 State-Approved Programs That Locks Your Rate For 3
            Years, Saves 50-80% On Claims Or You Don't Pay
          </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-400 font-light max-w-3xl opacity-0 leading-relaxed text-center mx-auto" id="fade-subtext">
            Stop accepting high premiums and climbing ex-mods. Access the legal
            carve-out most California employers have never been offered.
          </p>
<div className="w-full max-w-xl mt-8 rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-xl shadow-black/50 overflow-hidden relative mx-auto">
<div className="relative w-full" style={{paddingTop: '56.25%'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 bg-[#121214]/80 backdrop-blur-md">
<iconify-icon className="mb-3 text-blue-500/50" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-zinc-400">
                  VSL Video Placeholder
                </span>
</div>
</div>
</div>

<div className="mt-10 flex flex-wrap items-center gap-4 opacity-0 pointer-events-auto justify-center w-full" id="fade-ctas">
<div className="inline-block pointer-events-auto">
<a className="inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center gap-2 cursor-pointer" href="#booking">
<span className="relative">
                  Request Your Estimated Savings — Free
                </span>
<iconify-icon className="relative" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>

</div>
</section>

<section className="relative z-20 w-full py-8 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 text-center">
<span className="text-sm font-medium text-zinc-400">
          1 of only 70 California-approved carve-out organizations
        </span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
<span className="text-sm font-medium text-zinc-400">
          The ONLY one able to extend it to other businesses
        </span>
<span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
<span className="text-sm font-medium text-zinc-400">
          4 consecutive years on the Inc. 5000
        </span>
<span className="hidden xl:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
<span className="text-sm font-medium text-zinc-400">
          Powered by TUB Insurance: License #0167525
        </span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
<span className="text-sm font-medium text-zinc-400">
          Serving California employers &amp; staffing agencies statewide
        </span>
</div>
</section>

<section className="relative z-20 w-full py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative w-full group opacity-0" id="pain-card-1">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 group-hover:opacity-100"></div>

<div className="relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)]" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<div className="relative p-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-blue-400" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Climbing Ex-Mod &amp; Premium
                </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                  No structural way to lower costs only a new policy at a higher
                  rate.
                </p>
</div>
</div>
</div>

<div className="relative w-full group opacity-0" id="pain-card-2">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 group-hover:opacity-100"></div>

<div className="relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)]" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<div className="relative p-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-blue-400" icon="solar:user-cross-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Paying for Litigation
                </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                  Claims sit open for years while attorneys run the meter at
                  your expense.
                </p>
</div>
</div>
</div>

<div className="relative w-full group opacity-0" id="pain-card-3">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 group-hover:opacity-100"></div>

<div className="relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)]" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<div className="relative p-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-blue-400" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  Brokers Can't Fix It
                </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                  The problem is the litigation system every standard policy
                  leaves you trapped inside.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-16 bg-[#0a0a0c]">
<div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
<iconify-icon className="text-white/20 mb-8" icon="solar:scale-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<p className="text-xl text-zinc-300 font-light leading-relaxed text-center mb-12">
          Samuel Hale replaces the standard litigation-heavy system with a
          state-approved Alternative Dispute Resolution (ADR) carve-out.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8 max-w-3xl mx-auto">
<div className="flex gap-4">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:shield-warning-linear" width="28"></iconify-icon>
<div className="">
<h4 className="text-white font-medium mb-1">Not Another Broker</h4>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Direct access to a State of California carve-out most employers
                never see.
              </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:gavel-linear" width="28"></iconify-icon>
<div className="">
<h4 className="text-white font-medium mb-1">Zero Litigation</h4>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Disputes are resolved directly with employees through ADR,
                removing attorneys.
              </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:chart-square-linear" width="28"></iconify-icon>
<div>
<h4 className="text-white font-medium mb-1">Structural Savings</h4>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Savings are built-in and permanent, not a one-time discount that
                evaporates.
              </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<div>
<h4 className="text-white font-medium mb-1">Complete Program</h4>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Includes protection, administration, and an assigned Safety
                Manager.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative w-full rounded-2xl border border-white/10 bg-[#121214]/60 backdrop-blur-xl p-8 flex flex-col justify-between">
<iconify-icon className="text-blue-500/50 mb-4" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-zinc-300 font-light leading-relaxed mb-8 flex-grow">
              "One of the greatest changes I've seen over the last three years
              is how our ex-mod rating has dropped. I know this is because of
              your ADR program, and how quickly you handle claims."
            </p>
<div className="pt-6 border-t border-white/5">
<div className="text-sm font-medium text-white tracking-wide">
                Scott Sanchez
              </div>
<div className="text-xs font-light text-zinc-500 mt-1">
                CEO, S&amp;S Directional Drilling
              </div>
</div>
</div>

<div className="relative w-full rounded-2xl border border-white/10 bg-[#121214]/60 backdrop-blur-xl p-8 flex flex-col justify-between">
<iconify-icon className="text-blue-500/50 mb-4" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-zinc-300 font-light leading-relaxed mb-8 flex-grow">
              "Our relationship with Samuel Hale has been phenomenal and has
              assisted us in decreasing W/C costs dramatically."
            </p>
<div className="pt-6 border-t border-white/5">
<div className="text-sm font-medium text-white tracking-wide">
                Pamela Lamberth
              </div>
<div className="text-xs font-light text-zinc-500 mt-1">
                CEO, Bright Futures Academy
              </div>
</div>
</div>

<div className="relative w-full rounded-2xl border border-white/10 bg-[#121214]/60 backdrop-blur-xl p-8 flex flex-col justify-between">
<iconify-icon className="text-blue-500/50 mb-4" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-zinc-300 font-light leading-relaxed mb-8 flex-grow">
              "Never before has a company felt like a partner to my business.
              It's comforting to know that someone personally cares that my
              company thrives."
            </p>
<div className="pt-6 border-t border-white/5">
<div className="text-sm font-medium text-white tracking-wide">
                Tom Lee
              </div>
<div className="text-xs font-light text-zinc-500 mt-1">
                Owner, Hi-Tech Iron Works
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-24 bg-white/[0.01] border-y border-white/5">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="space-y-6">

<div className="flex items-start gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center font-medium font-mono text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              1
            </div>
<div className="pt-3">
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Request Analysis
                </h4>
<p className="text-zinc-400 font-light">
                  Share your current premium, ex-mod, and claims situation.
                </p>
</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center font-medium font-mono text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              2
            </div>
<div className="pt-3">
<div className="">
<h4 className="text-lg font-medium text-white mb-1">
                  Get Insights
                </h4>
<p className="text-zinc-400 font-light">
                  Receive a savings analysis built around your specific payroll
                  and history.
                </p>
</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center font-medium font-mono text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              3
            </div>
<div className="pt-3">
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Lock in Rates
                </h4>
<p className="text-zinc-400 font-light">
                  Qualify for the carve-out and lock in your new program
                  structure.
                </p>
</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center font-medium font-mono text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              4
            </div>
<div className="pt-3">
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Improve Safety
                </h4>
<p className="text-zinc-400 font-light">
                  Get an assigned Safety Manager for audits, OSHA prep, and
                  return-to-work.
                </p>
</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center font-medium font-mono text-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              5
            </div>
<div className="pt-3">
<div className="">
<h4 className="text-lg font-medium text-white mb-1">
                  Resolve &amp; Track
                </h4>
<p className="text-zinc-400 font-light">
                  Resolve claims through ADR and receive monthly AI-powered
                  performance reports.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-24">
<div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative w-full">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

<div className="relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)] p-8" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-80"></div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-8">
              Employers
              <span className="text-zinc-500 font-light">("The Patriot")</span>
</h3>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Carve-out access &amp; ADR administration
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Ex-mod relief &amp; 3-year rate lock
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Dedicated Safety Manager &amp; OSHA prep
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Full payroll &amp; compliance administration
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Monthly AI video claims reports
                </span>
</li>
</ul>
<div className="pt-6 border-t border-white/5">
<div className="text-sm font-medium text-blue-400 tracking-wide uppercase">
                Pricing
              </div>
<div className="text-zinc-400 font-mono text-sm mt-1">
                [placeholder — confirm with Mike]
              </div>
</div>
</div>
</div>

<div className="group relative w-full">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

<div className="relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)] p-8" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-80"></div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-8">
              Staffing Agencies
              <span className="text-zinc-500 font-light">("SHE")</span>
</h3>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Workers' comp &amp; ADR administration
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Contingent-workforce risk mitigation
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Safety management for placed workers
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Digital payroll &amp; compliance platform
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-zinc-300 font-light">
                  Worker benefits (healthcare, instant-pay)
                </span>
</li>
</ul>
<div className="pt-6 border-t border-white/5">
<div className="text-sm font-medium text-blue-400 tracking-wide uppercase">
                Pricing
              </div>
<div className="text-zinc-400 font-mono text-sm mt-1">
                [placeholder — confirm with Mike]
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-block">
<a className="inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center gap-2 cursor-pointer" href="#booking">
<span className="relative">
              See Exactly How Much Your Ex-Mod Is Costing You
            </span>
</a>
</div>
</div>
</section>

<section className="relative z-20 w-full py-24 border-y border-white/5 bg-[#0a0a0c]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="">
<div className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-3">
              0%
            </div>
<div className="text-xs font-light text-zinc-500 tracking-wide uppercase">
              Of claims reach the WCAB
            </div>
</div>
<div className="">
<div className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-3">
              Up to 80%
            </div>
<div className="text-xs font-light text-zinc-500 tracking-wide uppercase">
              Saved on cost of claims
            </div>
</div>
<div className="">
<div className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-3">
              6
            </div>
<div className="text-xs font-light text-zinc-500 tracking-wide uppercase">
              Straight years, no rate increase
            </div>
</div>
<div className="">
<div className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-3">
              10,000+
            </div>
<div className="text-xs font-light text-zinc-500 tracking-wide uppercase">
              Workers in The PACT
            </div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-16 bg-[#02040e]" id="savings-form-section">
<div className="max-w-4xl mx-auto px-6">

<div className="relative w-full group">

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-blue-500/40 via-slate-600/50 to-blue-900/40"></div>

<div className="relative rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%)'}}>
<h2 className="text-3xl md:text-4xl font-normal text-white text-center mb-10 tracking-tight">
              Request Your Estimated Savings
            </h2>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you for requesting your savings analysis! Our team will get back to you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                    Name
                    <span className="text-red-500">*</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="John Doe" required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                    Company name
                    <span className="text-red-500">*</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="Acme Corp" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone number
                    <span className="text-red-500">*</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="(555) 000-0000" required="" type="tel"/>
</div>

<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                    Email
                    <span className="text-red-500">*</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="john@company.com" required="" type="email"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                  Company Industry
                  <span className="text-red-500">*</span>
</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none" required="">
<option className="bg-[#0f172a]" disabled="" selected="" value="">
                      Please Select
                    </option>
<option className="bg-[#0f172a]" value="staffing">
                      Staffing Agency
                    </option>
<option className="bg-[#0f172a]" value="construction">
                      Construction
                    </option>
<option className="bg-[#0f172a]" value="manufacturing">
                      Manufacturing
                    </option>
<option className="bg-[#0f172a]" value="healthcare">
                      Healthcare / Care Facilities
                    </option>
<option className="bg-[#0f172a]" value="agriculture">
                      Agriculture
                    </option>
<option className="bg-[#0f172a]" value="other">
                      Other Business / Industry
                    </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-end pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" type="submit">
                  Request Estimated Savings
                </button>
</div>
</form>
</div>
</div>
</div>
</section>
<section className="relative z-20 w-full py-24">
<div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 aspect-[4/5] overflow-hidden bg-[#1a1a1a] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b8aa9c3-b370-4ae7-9aa9-1283a501f98d_1600w.png)] bg-cover bg-center border-white/10 border rounded-2xl relative shadow-2xl">

</div>
<div className="md:col-span-7">
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
            Michael DiManno built Samuel Hale to give California employers a way
            out of a broken system. With 30+ years in staffing and insurance, he
            didn't build another brokerage he built a state-approved structure
            that shares its advantage directly with businesses.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
<div className="">
<div className="text-blue-400 mb-2">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">30+ Years</div>
<div className="text-xs text-zinc-500 mt-1">
                Staffing &amp; Insurance
              </div>
</div>
<div className="">
<div className="text-blue-400 mb-2">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Expert Witness</div>
<div className="text-xs text-zinc-500 mt-1">Dept of Insurance</div>
</div>
<div className="">
<div className="text-blue-400 mb-2">
<iconify-icon className="" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Honoree</div>
<div className="text-xs text-zinc-500 mt-1">SBJ 40 Under 40</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 space-y-3">
<div className="text-zinc-400 font-light flex items-center gap-3">
<iconify-icon className="text-white/40" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              (855) 726-4253
            </div>
<div className="text-zinc-400 font-light flex items-center gap-3">
<iconify-icon className="text-white/40" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              samuelhale.com
            </div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-24 bg-white/[0.01] border-y border-white/5">
<div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-4">
<div className="group relative w-full">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
<details className="group relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)] [&amp;_summary::-webkit-details-marker]:hidden" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white tracking-wide">
              Will I still generate an ex-mod rating?
              <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 pt-0 leading-relaxed">
              Yes — your payroll and claims are still reported to the WCIRB
              under your company. The difference is what happens to a claim once
              it's filed, which is where the ADR carve-out lowers your costs
              over time.
            </div>
</details>
</div>
<details className="group rounded-2xl border border-white/10 bg-[#121214]/60 backdrop-blur-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white tracking-wide">
            Is this just a PEO with a different name?
            <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 pt-0 leading-relaxed">
            Samuel Hale uses a co-employment model styled after a PEO, but the
            carve-out is what sets it apart. No standard PEO has the State
            approval to resolve workers' comp disputes through ADR instead of
            the WCAB.
          </div>
</details>
<div className="group relative w-full">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
<details className="group relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)] [&amp;_summary::-webkit-details-marker]:hidden" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white tracking-wide">
              Is this just a PEO with a different name?
              <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 pt-0 leading-relaxed">
              Samuel Hale uses a co-employment model styled after a PEO, but the
              carve-out is what sets it apart. No standard PEO has the State
              approval to resolve workers' comp disputes through ADR instead of
              the WCAB.
            </div>
</details>
</div>
<details className="group rounded-2xl border border-white/10 bg-[#121214]/60 backdrop-blur-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white tracking-wide">
            How exactly does a claim get resolved without going to court?
            <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 pt-0 leading-relaxed">
            Through an Ombudsman, mediation, and arbitration under Labor Code
            3201.7 — a judicial process for settling disputes without
            litigation. It approves legitimate care faster and gets employees
            back to work sooner, without attorneys driving up the cost.
          </div>
</details>
<div className="group relative w-full">

<div className="absolute inset-0 rounded-2xl overflow-hidden">
<div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60 animate-spin [animation-duration:8s]"></div>
<div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent blur-2xl opacity-40 animate-spin [animation-duration:16s] [animation-direction:reverse]"></div>
</div>

<div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-cyan-300/50 via-slate-600/80 to-blue-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
<details className="group relative rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-cyan-400/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)] [&amp;_summary::-webkit-details-marker]:hidden" style={{backgroundColor: 'hsl(222, 47%, 11%)', backgroundImage: 'radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)'}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white tracking-wide">
              What happens to my current coverage and broker relationship?
              <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 pt-0 leading-relaxed">
              The estimated-savings analysis isn't about ripping anything out —
              it's about showing whether the carve-out structure would beat what
              you have today. Many operators only discover the gap once someone
              who knows the California system actually runs their numbers.
            </div>
</details>
</div>
</div>
</section>

<section className="relative z-20 w-full py-32" id="booking">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-lg text-zinc-300 font-light mb-10">
          Free estimated-savings analysis. You will be talking to the Samuel
          Hale team.
        </p>
<div className="w-full min-h-[600px] rounded-2xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center shadow-2xl shadow-black/80">
<div className="flex flex-col items-center justify-center text-center w-full h-full py-24">
<iconify-icon className="text-blue-500/50 mb-4" icon="solar:calendar-add-linear" width="48"></iconify-icon>
<span className="text-zinc-300 font-medium text-lg">
              Calendly Booking Placeholder
            </span>
<span className="text-zinc-500 text-sm mt-2">
              Inline embed widget goes here
            </span>
</div>
</div>
</div>
</section>



    </>
  );
}
