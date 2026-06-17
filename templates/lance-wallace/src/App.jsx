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

        // Centered configuration for clean presentation
        p.x -= 0.0;

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
              color: '#10b981',     // Emerald
              colorTwo: '#0ea5e9',  // Sky Blue
              speed: 0.6,
              ringCount: 8,
              attenuation: 16,
              lineThickness: 3.5,
              baseRadius: 0.26,
              radiusStep: 0.14,
              scaleRate: 0.06,
              opacity: 0.75,
              noiseAmount: 0.12,
              rotation: -12,
              ringGap: 1.6,
              fadeIn: 0.8,
              fadeOut: 0.6,
              followMouse: true,
              mouseInfluence: 0.12,
              hoverScale: 1.02,
              parallax: 0.02,
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
              const lines = text.trim().split('\n');
              el.innerHTML = '';

              lines.forEach((line) => {
                  const lineSpan = document.createElement('span');
                  lineSpan.className = 'block overflow-hidden pb-1';

                  const innerSpan = document.createElement('span');
                  innerSpan.style.cssText = 'display: inline-block; transform: translateY(110%);';
                  innerSpan.innerText = line;
                  innerSpan.className = 'reveal-line';

                  lineSpan.appendChild(innerSpan);
                  el.appendChild(lineSpan);
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
              duration: 0.6,
              ease: "power2.out"
          })
          .to('.reveal-line', {
              y: "0%",
              duration: 1.0,
              ease: "power4.out",
              stagger: 0.08
          }, "-=0.2")
          .to('#fade-subtext', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
          }, "-=0.6")
          .to('#vsl-placeholder', {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power3.out"
          }, "-=0.6")
          .to('#fade-ctas', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
          }, "-=0.6");
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
      

<header className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12">
<nav className="flex items-center justify-between py-4 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md rounded-2xl px-6">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter text-white">
            AALL
          </span>
<span className="text-sm bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/10">
            Est. 1983
          </span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="tel:6022333333">
<iconify-icon className="text-emerald-400" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            (602) 233-3333
          </a>
<a className="inline-flex transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 rounded-full px-4 py-2 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center" href="#calendly">
            Book Free Quote
          </a>
</div>
</nav>
</header>
<main className="relative w-full flex flex-col overflow-hidden">
<div className="absolute top-0 inset-x-0 h-[1100px] -z-10 pointer-events-none overflow-hidden" id="magic-rings-mount"></div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>


<section className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-20 text-center pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-8 opacity-0" id="fade-badge">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-emerald-300/90 tracking-wider uppercase">
            Arizona Family Owned &amp; Operated
          </span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto text-center" id="reveal-text">
<span className="block overflow-hidden pb-1">
<span className="reveal-line" style={{display: 'inline-block'}}>
              You Could Be Overpaying for Insurance.
            </span>
</span>
<span className="block overflow-hidden pb-1">
<span className="reveal-line" style={{display: 'inline-block'}}>
              Arizona's Most-Referred Brokerage
            </span>
</span>
<span className="block overflow-hidden pb-1">
<span className="reveal-line" style={{display: 'inline-block'}}>
              Will Find Out for Free.
            </span>
</span>
</h1>

<p className="mt-6 text-base md:text-lg text-zinc-400 font-light max-w-xl mx-auto text-center leading-relaxed opacity-0" id="fade-subtext">
          One quick conversation. Every major carrier compared for you.
          <br/>
          No call centers, no pressure, just a local family that's done this for
          40 years.
        </p>

<div className="mt-10 w-full max-w-2xl mx-auto aspect-video bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden pointer-events-auto opacity-0" id="vsl-placeholder">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
<iconify-icon className="text-zinc-600 animate-pulse" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-zinc-500">
              AALL VSL PLAYER PLACEHOLDER
            </span>
</div>
</div>

<div className="mt-10 flex justify-center opacity-0 pointer-events-auto" id="fade-ctas">
<a className="inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-base font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center gap-2 cursor-pointer" href="#calendly">
            See How Much You Could Save
          </a>
</div>
</section>

<section className="relative z-20 w-full border-y border-white/5 bg-[#08080a]/80 backdrop-blur-md py-6">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left items-center justify-between">
<div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-400" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-zinc-400 font-medium tracking-wide">
                Most-referred brokerage in AZ
              </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-400" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-zinc-400 font-medium tracking-wide">
                Family owned since 1983
              </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start col-span-2 md:col-span-1">
<iconify-icon className="text-emerald-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-zinc-400 font-medium tracking-wide">
                30+ Arizona locations
              </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-400" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-zinc-400 font-medium tracking-wide">
                Independent &amp; unbiased
              </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-400" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-zinc-400 font-medium tracking-wide">
                English &amp; Spanish agents
              </span>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
            The Reality of Insurance
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
            Why shopping around feels impossible
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-red-400" icon="solar:bill-list-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                You're probably overpaying and you know it.
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                But comparing carriers yourself eats a whole weekend, so the
                renewal just auto-charges again.
              </p>
</div>
</div>

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-red-400" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                Your "insurance company" is a 1-800 number.
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                When something goes wrong, there's no local person who actually
                knows you or your family.
              </p>
</div>
</div>

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-red-400" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                One carrier only ever shows you one price.
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                A captive agent can't shop the market so you never see the
                better quote sitting next door.
              </p>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-4xl mx-auto px-6 py-16 bg-[#08080a] border border-white/5 rounded-3xl mb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-5">
<span className="text-sm font-mono tracking-widest text-emerald-400 uppercase">
              The AALL Advantage
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
              How we work for you
            </h2>
</div>
<div className="md:col-span-7 space-y-4">
<p className="text-sm text-zinc-300 leading-relaxed font-light">
              AALL is an independent brokerage, so instead of selling you one
              company's policy, we compare many carriers and bring you the best
              fit.
            </p>
<p className="text-sm text-zinc-300 leading-relaxed font-light">
              We're family owned and operated since 1983 when you call, you
              reach a local Arizonan, not a national call center.
            </p>
<p className="text-sm text-zinc-300 leading-relaxed font-light">
              Every agent works in both English and Spanish, so the whole
              conversation happens in your language. We don't convince you to
              buy; we give you the facts and let you decide.
            </p>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12">
<div className="relative overflow-hidden bg-[#0a120e]/80 border border-emerald-500/20 rounded-3xl backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)]">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>

<div className="text-center mb-8 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
              Your perfect policy, effortlessly found.
            </h2>
<p className="text-sm text-emerald-400/80 font-light">
              Enter your zipcode and see how much you could save
            </p>
</div>
<div className="relative z-10">

<div className="space-y-4">
<input className="w-full bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" placeholder="Zip Code" type="text"/>
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)]">
<iconify-icon icon="solar:car-bold" width="20"></iconify-icon>
                Auto
              </button>
</div>

<div className="relative flex py-8 items-center">
<div className="flex-grow border-t border-zinc-800/60"></div>
<span className="flex-shrink mx-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Looking for different types of insurance?
              </span>
<div className="flex-grow border-t border-zinc-800/60"></div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
<div className="flex flex-col items-center justify-center p-4 bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 group cursor-pointer text-center">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 mb-2" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                  Home
                </span>
</div>
<div className="flex flex-col items-center justify-center p-4 bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 group cursor-pointer text-center">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 mb-2" icon="solar:city-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                  Renters
                </span>
</div>
<div className="flex flex-col items-center justify-center p-4 bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 group cursor-pointer text-center">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 mb-2" icon="solar:motorbike-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                  Motorcycle
                </span>
</div>
<div className="flex flex-col items-center justify-center p-4 bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 group cursor-pointer text-center">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 mb-2" icon="solar:delivery-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                  Commercial
                </span>
</div>
<div className="flex flex-col items-center justify-center p-4 bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 group cursor-pointer text-center col-span-2 sm:col-span-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 mb-2" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                  Mexico
                </span>
</div>
</div>

<div className="relative flex py-8 items-center">
<div className="flex-grow border-t border-zinc-800/60"></div>
<span className="flex-shrink mx-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Returning User? Retrieve your quote
              </span>
<div className="flex-grow border-t border-zinc-800/60"></div>
</div>

<div className="space-y-4">
<input className="w-full bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" placeholder="Quote Number" type="text"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl pl-5 pr-11 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" placeholder="Date of Birth (MM/DD/YYYY)" type="text"/>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" placeholder="Last Name" type="text"/>
</div>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3.5 rounded-xl transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
                Retrieve Quote
              </button>
</div>
</div>
</div>
</section>
<section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16">
<div className="text-center mb-16">
<span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
            Local Trust
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
            Verified Arizona Reviews
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl flex flex-col justify-between">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full relative z-10 w-full">
<div>
<div className="flex gap-1 mb-4 text-emerald-400">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light italic group-hover:text-slate-200 transition-colors duration-300">
                  "AALL makes searching for your insurance needs so easy for
                  you. The staff is very nice and professional. I would
                  recommend them to anyone that wants to save time and money on
                  insurance."
                </p>
</div>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-sm font-medium text-white group-hover:text-emerald-50 transition-colors duration-300">
                  Kimberly S.
                </span>
</div>
</div>
</div>

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl flex flex-col justify-between">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full relative z-10 w-full">
<div>
<div className="flex gap-1 mb-4 text-emerald-400">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light italic group-hover:text-slate-200 transition-colors duration-300">
                  "Excellent customer service! Made my experience quick &amp;
                  easy. Would definitely recommend. Thank you Candy for the
                  help!"
                </p>
</div>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-sm font-medium text-white group-hover:text-emerald-50 transition-colors duration-300">
                  Cesar Contreras
                </span>
</div>
</div>
</div>

<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl flex flex-col justify-between">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full relative z-10 w-full">
<div className="">
<div className="flex gap-1 mb-4 text-emerald-400">
<iconify-icon className="" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light italic group-hover:text-slate-200 transition-colors duration-300">
                  "Wonderful experiences working with family businesses. Service
                  is personal, professional, and genuinely locally minded."
                </p>
</div>
<div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between">
<span className="text-sm font-medium text-white group-hover:text-emerald-50 transition-colors duration-300">
                  [Review Pending: Lance]
                </span>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                  Verified Client
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
<div className="text-center mb-16">
<span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
            Simple Workflow
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
            Five Steps to Better Rates
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<span className="text-4xl font-semibold text-emerald-500/20 block mb-4 group-hover:text-emerald-400/30 transition-colors duration-300">
                01
              </span>
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                Tell us about you
              </h3>
<p className="text-xs text-zinc-400 font-light group-hover:text-slate-200 transition-colors duration-300">
                A quick call or your zip code to get started.
              </p>
</div>
</div>
<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<span className="text-4xl font-semibold text-emerald-500/20 block mb-4 group-hover:text-emerald-400/30 transition-colors duration-300">
                02
              </span>
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                We compare quotes
              </h3>
<p className="text-xs text-zinc-400 font-light group-hover:text-slate-200 transition-colors duration-300">
                We check across our many premium carriers for you.
              </p>
</div>
</div>
<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<span className="text-4xl font-semibold text-emerald-500/20 block mb-4 group-hover:text-emerald-400/30 transition-colors duration-300">
                03
              </span>
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                Best price options
              </h3>
<p className="text-xs text-zinc-400 font-light group-hover:text-slate-200 transition-colors duration-300">
                We bring you the absolute lowest rates clearly explained.
              </p>
</div>
</div>
<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<span className="text-4xl font-semibold text-emerald-500/20 block mb-4 group-hover:text-emerald-400/30 transition-colors duration-300">
                04
              </span>
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                You decide
              </h3>
<p className="text-xs text-zinc-400 font-light group-hover:text-slate-200 transition-colors duration-300">
                Zero pressure, zero obligation, entirely your call.
              </p>
</div>
</div>
<div className="relative overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer bg-black/40 border-emerald-400/30 border rounded-3xl backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 relative z-10">
<span className="text-4xl font-semibold text-emerald-500/20 block mb-4 group-hover:text-emerald-400/30 transition-colors duration-300">
                05
              </span>
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors duration-300">
                Local support
              </h3>
<p className="text-xs text-zinc-400 font-light group-hover:text-slate-200 transition-colors duration-300">
                We stay local for claims, renewals, and lifetime help.
              </p>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-emerald-400" icon="solar:home-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-white">
                Individuals &amp; Families
              </h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Auto insurance policies tailored to Arizona rates</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Home &amp; renters protecting what matters most</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  Motorcycle insurance and recreational vehicle coverage
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  Mexico travel insurance for hassle-free border crossings
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  Tax &amp; legal document prep services at selected locations
                </span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-xs font-mono text-zinc-500 uppercase">
                Pricing Status
              </span>
<span className="text-sm text-emerald-400 font-semibold uppercase tracking-wider">
                Free quote on call
              </span>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-sky-400" icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-white">
                Business &amp; Commercial
              </h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="">
                  Commercial liability for Arizona business owners
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  Commercial vehicle &amp; multi-vehicle fleet protection
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  Multi-location coverage and customized carrier routing
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Bilingual operational support for your entire crew</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>
                  On-site Arizona presence across 30+ physical offices
                </span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-xs font-mono text-zinc-500 uppercase">
                Pricing Status
              </span>
<span className="text-sm text-sky-400 font-semibold uppercase tracking-wider">
                Free quote on call
              </span>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-12 flex justify-center">
<a className="inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-base font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center gap-2 cursor-pointer" href="#calendly">
          Get My Free Quote: See If You're Overpaying, No Obligation
        </a>
</section>

<section className="relative z-20 w-full border-y border-white/5 bg-[#08080a]/50 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              $817
            </span>
<p className="text-xs text-zinc-500 font-light mt-2">
              Average yearly customer savings
            </p>
</div>
<div className="text-center">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              99%
            </span>
<p className="text-xs text-zinc-500 font-light mt-2">
              Satisfaction across 6,000+ surveys
            </p>
</div>
<div className="text-center">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              1,000,000+
            </span>
<p className="text-xs text-zinc-500 font-light mt-2">
              Arizonans served
            </p>
</div>
<div className="text-center">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              40+
            </span>
<p className="text-xs text-zinc-500 font-light mt-2">
              Years serving Arizona
            </p>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-5xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">

<div className="aspect-square w-full rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center p-8 relative overflow-hidden">
<div className="bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47908f83-8965-4fd5-ae5c-2b646dfd304c_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-emerald-400 mb-4" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<span className="text-base font-semibold text-white tracking-tight">
                Lance Wallace
              </span>
<span className="text-xs font-mono text-zinc-500 mt-1 uppercase">
                CEO, AALL Insurance
              </span>
</div>
</div>
<div className="md:col-span-7">
<span className="text-sm font-mono tracking-widest text-emerald-400 uppercase">
              The Legacy
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2 mb-6">
              40 Years of Arizona Commitment
            </h2>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
              AALL Insurance started in 1983 in South Phoenix with one idea:
              affordable, quality insurance for everyone, treated like family.
              Forty years later it's still family owned and operated, now led by
              Lance Wallace and it's grown into the most-referred brokerage in
              Arizona on the strength of that same promise.
            </p>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-8">
              The mission hasn't changed: empower you to make an informed
              decision, never pressure you into one.
            </p>
<div className="flex flex-col sm:flex-row gap-6 border-t border-white/5 pt-6">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase block">
                  Local Phone
                </span>
<a className="text-sm font-medium text-white hover:text-emerald-400 transition-colors" href="tel:6022333333">
                  (602) 233-3333
                </a>
</div>
<div>
<span className="text-xs font-mono text-zinc-500 uppercase block">
                  Official Website
                </span>
<a className="text-sm font-medium text-white hover:text-emerald-400 transition-colors" href="https://aall.net" rel="noopener" target="_blank">
                  aall.net
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-4xl mx-auto px-6 py-16 border-t border-white/5">
<div className="text-center mb-16">
<span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
            Clear Answers
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2">
            Doubt Removal
          </h2>
</div>
<div className="space-y-4">

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer">
<h4 className="text-sm md:text-base font-medium text-white">
                Does getting a quote cost anything or lock me in?
              </h4>
<span className="transition-transform group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              No. The quote is free and there's no obligation. You only switch
              if the price and coverage are actually better for you.
            </p>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer">
<h4 className="text-sm md:text-base font-medium text-white">
                I already have insurance is switching a hassle?
              </h4>
<span className="transition-transform group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              Not with us. Because we're independent, we handle the comparison
              and the paperwork; you just choose whether the better option is
              worth it.
            </p>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer">
<h4 className="text-sm md:text-base font-medium text-white">
                Can I do everything in Spanish?
              </h4>
<span className="transition-transform group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              Yes. 100% of our agents speak English and Spanish, so the entire
              process happens in the language you're most comfortable with.
            </p>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer">
<h4 className="text-sm md:text-base font-medium text-white">
                Is there a real office near me, or is this all online?
              </h4>
<span className="transition-transform group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              We have 30+ locations across Arizona — Phoenix, Mesa, Tempe,
              Tucson and more — so there's a local agent you can actually sit
              down with.
            </p>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer">
<h4 className="text-sm md:text-base font-medium text-white">
                What happens after I book?
              </h4>
<span className="transition-transform group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              A local agent reviews your needs, compares carriers, and walks you
              through your real options — quick, clear, and pressure-free.
            </p>
</details>
</div>
</section>

<section className="relative z-20 w-full border-t border-white/5 bg-[#08080a] py-24 scroll-mt-6" id="calendly">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-sm font-mono tracking-widest text-emerald-400 uppercase block mb-3">
            Conversion Point
          </span>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">
            BOOK A CALL NOW
          </h3>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto mb-10">
            Select an appointment slot below to speak directly with an
            independent expert.
          </p>

<div className="w-full bg-zinc-950 rounded-2xl border border-white/10 p-8 min-h-[450px] flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
<iconify-icon className="text-zinc-600 mb-3 animate-pulse" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<span className="text-sm font-mono text-zinc-400 tracking-wider uppercase mb-2">
              [Lance to supply Calendly scheduling link]
            </span>
<p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
              This block will render your direct interactive scheduling panel
              inside your live dashboard setup.
            </p>
</div>
</div>
</section>
</main>

<footer className="relative z-20 border-t border-white/5 bg-[#050507] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-base font-semibold tracking-tighter text-white">
          AALL
        </span>
<span className="text-xs text-zinc-500 font-light">
          © 2026 AALL Insurance &amp; Taxes. All rights reserved. Servicing
          Arizona communities since 1983.
        </span>
</div>
</footer>


    </>
  );
}
