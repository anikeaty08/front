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
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
cream: '#e0dcd1',
surface: '#e2dcd0',
dark: '#1d1d1c',
moss: '#4f5343',
sand: '#cebfa9',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          gsap.registerPlugin(ScrollTrigger);

          // 1. Hero Animations
          gsap.from(".gsap-hero-el", {
              y: 30,
              opacity: 0,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
              delay: 0.2
          });

          // 2. Section Fade Ups
          gsap.utils.toArray('.gsap-fade-up').forEach(section => {
              gsap.from(section, {
                  scrollTrigger: {
                      trigger: section,
                      start: "top 80%",
                  },
                  y: 40,
                  opacity: 0,
                  duration: 1,
                  ease: "power3.out"
              });
          });

          // 3. Image Scale Reveal
          gsap.utils.toArray('.gsap-scale-up').forEach(img => {
              gsap.from(img, {
                  scrollTrigger: {
                      trigger: img,
                      start: "top 85%",
                  },
                  scale: 0.9,
                  opacity: 0,
                  duration: 1.2,
                  ease: "expo.out"
              });
          });

          // 4. Premium Product Card Animation (adapted from source)
          const cardTl = gsap.timeline({
              scrollTrigger: {
                  trigger: ".gsap-product-card",
                  start: "top 75%",
              },
              defaults: { ease: "power3.out" }
          });

          cardTl.fromTo(".gsap-product-card",
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }
          )
          .fromTo(".gsap-card-image-wrapper",
              { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
              { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5, ease: "power4.inOut" },
              "-=0.8"
          )
          .fromTo("#card-main-image",
              { scale: 1.15 },
              { scale: 1, duration: 2, ease: "power2.out" },
              "-=1.5"
          );

          gsap.to("#card-main-image", {
              scale: 1.03,
              duration: 15,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
          });

          // 5. Magnetic Buttons (Awwwards Style)
          const magneticElements = document.querySelectorAll('.magnetic-wrap');

          magneticElements.forEach((el) => {
              const target = el.children[0];

              el.addEventListener('mousemove', (e) => {
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;

                  gsap.to(target, {
                      x: x * 0.4,
                      y: y * 0.4,
                      duration: 0.4,
                      ease: "power2.out"
                  });
              });

              el.addEventListener('mouseleave', () => {
                  gsap.to(target, {
                      x: 0,
                      y: 0,
                      duration: 0.7,
                      ease: "elastic.out(1, 0.3)"
                  });
              });
          });
      });

      // WebGL Ambient Background (Maintained from source)
      const initWebGL = () => {
          const canvas = document.querySelector('#webgl-bg');
          if(!canvas) return;

          const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

          const scene = new THREE.Scene();
          const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          const geometry = new THREE.PlaneGeometry(2, 2);

          const material = new THREE.ShaderMaterial({
              uniforms: {
                  u_time: { value: 0.0 },
                  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
              },
              vertexShader: `
                  varying vec2 vUv;
                  void main() {
                      vUv = uv;
                      gl_Position = vec4(position, 1.0);
                  }
              `,
              fragmentShader: `
                  uniform float u_time;
                  uniform vec2 u_resolution;
                  varying vec2 vUv;

                  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

                  float cnoise(vec2 P) {
                      vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
                      vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
                      Pi = mod289(Pi);
                      vec4 ix = Pi.xzxz;
                      vec4 iy = Pi.yyww;
                      vec4 fx = Pf.xzxz;
                      vec4 fy = Pf.yyww;
                      vec4 i = permute(permute(ix) + iy);
                      vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
                      vec4 gy = abs(gx) - 0.5 ;
                      vec4 tx = floor(gx + 0.5);
                      gx = gx - tx;
                      vec2 g00 = vec2(gx.x,gy.x);
                      vec2 g10 = vec2(gx.y,gy.y);
                      vec2 g01 = vec2(gx.z,gy.z);
                      vec2 g11 = vec2(gx.w,gy.w);
                      vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
                      g00 *= norm.x;  g01 *= norm.y;  g10 *= norm.z;  g11 *= norm.w;
                      float n00 = dot(g00, vec2(fx.x, fy.x));
                      float n10 = dot(g10, vec2(fx.y, fy.y));
                      float n01 = dot(g01, vec2(fx.z, fy.z));
                      float n11 = dot(g11, vec2(fx.w, fy.w));
                      vec2 fade_xy = Pf.xy * Pf.xy * (3.0 - 2.0 * Pf.xy);
                      vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
                      float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
                      return 2.3 * n_xy;
                  }

                  void main() {
                      vec2 st = gl_FragCoord.xy/u_resolution.xy;
                      st.x *= u_resolution.x/u_resolution.y;

                      vec2 pos = vec2(st * 1.5);
                      float n = cnoise(pos + u_time * 0.1);
                      n += cnoise(pos * 2.0 - u_time * 0.15) * 0.5;

                      vec3 color1 = vec3(0.92, 0.90, 0.86);
                      vec3 color2 = vec3(0.85, 0.83, 0.78);

                      vec3 finalColor = mix(color1, color2, (n + 1.0) * 0.5);
                      float dist = distance(vUv, vec2(0.5));
                      finalColor = mix(finalColor, color2 * 0.9, smoothstep(0.4, 1.2, dist));

                      gl_FragColor = vec4(finalColor, 1.0);
                  }
              `
          });

          const mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);

          let time = 0;
          const animate = () => {
              requestAnimationFrame(animate);
              time += 0.01;
              material.uniforms.u_time.value = time;
              renderer.render(scene, camera);
          };

          animate();

          window.addEventListener('resize', () => {
              renderer.setSize(window.innerWidth, window.innerHeight);
              material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
          });
      };

      initWebGL();
    
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
      

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60" id="webgl-bg"></canvas>

<nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center bg-transparent text-surface py-4 border-b border-white/10">
<div className="font-serif text-2xl tracking-tighter uppercase font-medium">
        CØFF
      </div>
<div className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
<a className="transition-colors hover:text-white" href="#story">
          Notre Histoire
        </a>
<a className="transition-colors hover:text-white" href="#experience">
          L'Expérience
        </a>
<a className="transition-colors hover:text-white" href="#shop">Boutique</a>
</div>
<button className="magnetic-wrap w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-white/20 hover:bg-white/10">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center bg-dark">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none" src="https://cdn.midjourney.com/e796b010-1fed-4709-bd1b-cc165351ee03/0_0.png"/>
<div className="gsap-hero-el font-mono text-xs tracking-widest uppercase mb-8 relative z-10 text-surface/80">
        Torréfaction Artisanale &amp; Extraction Douce
      </div>
<h1 className="gsap-hero-el font-serif text-6xl lg:text-8xl xl:text-9xl tracking-tight leading-none mb-8 max-w-5xl relative z-10 text-surface">
        L'Art de
        <br className="hidden lg:block"/>
        l'Extraction.
      </h1>
<p className="gsap-hero-el font-sans text-base lg:text-lg max-w-xl font-light mb-12 relative z-10 text-surface/80">
        Réveillez vos sens avec un café de spécialité sourcé avec éthique,
        torréfié avec passion et servi dans un refuge urbain pensé pour
        l'inspiration.
      </p>
<div className="gsap-hero-el flex flex-col sm:flex-row items-center gap-6 relative z-10">
<div className="magnetic-wrap">
<a className="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full transition-all duration-300 shadow-xl group bg-surface text-dark hover:bg-white" href="#shop">
<span className="font-mono text-xs tracking-widest uppercase">
              Découvrir nos grains
            </span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<a className="font-mono text-xs tracking-widest uppercase border-b pb-1 transition-colors text-surface border-surface/30 hover:border-surface" href="#experience">
          Réserver une table
        </a>
</div>
</section>

<section className="relative z-10 py-32 px-6 lg:px-12 bg-dark text-surface rounded-t-[44px] lg:rounded-t-[80px] overflow-hidden" id="story">
<div className="absolute inset-0 matte-noise"></div>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="gsap-fade-up">
<div className="w-16 h-16 rounded-full border border-surface/20 flex items-center justify-center mb-12">
<iconify-icon icon="solar:cup-hot-linear" width="28"></iconify-icon>
</div>
<h2 className="font-serif text-4xl lg:text-6xl tracking-tight leading-tight mb-8">
            De la ferme
            <br/>
            à la tasse.
          </h2>
<p className="text-surface/70 text-base font-light mb-6 leading-relaxed">
            Nous parcourons les hautes altitudes d'Éthiopie, de Colombie et du
            Costa Rica pour dénicher des lots d'exception. Une traçabilité
            absolue garantit non seulement une qualité en tasse irréprochable,
            mais aussi le respect du terroir et des producteurs.
          </p>
<p className="text-surface/70 text-base font-light mb-12 leading-relaxed">
            Notre atelier torréfie chaque semaine en petites quantités, révélant
            la clarté, les notes florales et la sucrosité naturelle de chaque
            grain.
          </p>
<div className="grid grid-cols-2 gap-8 border-t border-surface/10 pt-8">
<div>
<div className="font-serif text-3xl mb-2">15+</div>
<div className="font-mono text-xs tracking-widest uppercase text-surface/50">
                Fermes partenaires
              </div>
</div>
<div>
<div className="font-serif text-3xl mb-2">90+</div>
<div className="font-mono text-xs tracking-widest uppercase text-surface/50">
                Score SCA moyen
              </div>
</div>
</div>
</div>
<div className="relative h-[600px] w-full rounded-[32px] overflow-hidden gsap-scale-up">
<img alt="Torréfaction de café" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 rounded-[32px] gradient-border-inset z-10"></div>
</div>
</div>
</section>

<section className="relative z-10 py-32 flex justify-center bg-cream w-full" id="shop">

<main className="gsap-product-card relative w-full max-w-[1050px] bg-[#1d1d1c] matte-noise rounded-[32px] lg:rounded-[44px] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-white/5 mx-4 lg:mx-12">

<div className="relative w-full lg:w-[46%] h-[400px] lg:h-auto min-h-[550px] p-4 lg:p-0">
<button className="magnetic-wrap absolute top-8 left-8 z-20">
<div className="w-12 h-12 bg-[#31312d]/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#e2dcd0] hover:bg-[#4f5343] transition-colors border border-white/10 gradient-border-inset">
<iconify-icon icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</button>

<div className="gsap-card-image-wrapper absolute inset-0 lg:custom-curve overflow-hidden">
<img alt="Sachet de café de spécialité" className="w-full h-full object-cover transform scale-105 origin-center" id="card-main-image" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
</div>

<div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Client 1" className="w-10 h-10 rounded-full border-2 border-[#d3cdc0] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="w-10 h-10 rounded-full border-2 border-[#d3cdc0] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="w-10 h-10 rounded-full border-2 border-[#d3cdc0] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full bg-[#e8e4d9] border-2 border-[#d3cdc0] flex items-center justify-center text-[#1d1d1c]">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</div>
<div className="text-[#f5f1e8] font-light text-xs tracking-wide leading-tight drop-shadow-md lg:drop-shadow-none">
              42 torréfiés
              <br/>
              cette semaine
            </div>
</div>
</div>

<div className="relative w-full lg:w-[54%] flex flex-col justify-between pt-10 lg:pt-14 pb-0 pl-8 pr-8 lg:pl-12 lg:pr-0 z-10">
<button className="absolute top-8 right-8 w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-[#e2dcd0] hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:menu-dots-circle-linear" width="24"></iconify-icon>
</button>

<div className="flex flex-col lg:flex-row w-full lg:pr-10 h-full">

<div className="flex-1 pr-0 lg:pr-6 pt-4 relative z-20">
<div className="inline-block bg-[#4d5240] text-[#ded9cc] text-xs tracking-widest font-medium uppercase px-4 py-2 rounded-full mb-6 lg:mb-8 gradient-border-inset">
                Micro-Lot
              </div>
<h3 className="font-serif text-5xl lg:text-7xl text-[#f3eee2] leading-[1.05] tracking-tight mb-6">
                Finca
                <br/>
                El Paraiso
              </h3>

<div className="flex items-center gap-4 mb-6 opacity-60">
<div className="h-[1px] bg-[#4d5240] flex-1"></div>
<div className="w-2.5 h-2.5 bg-[#f3eee2] rotate-45 transform origin-center"></div>
<div className="h-[1px] bg-[#4d5240] w-16"></div>
</div>
<p className="text-[#a8a7a2] text-sm lg:text-base font-light leading-relaxed max-w-[280px] mb-10 lg:mb-0">
                Un traitement anaérobique exceptionnel offrant des notes
                éclatantes de litchi, rose et pêche blanche. Idéal en filtre.
              </p>
</div>

<div className="w-full lg:w-[150px] bg-[#4f5343] rounded-[32px] p-6 flex flex-row lg:flex-col items-center justify-between lg:justify-start gap-0 lg:gap-6 mt-6 lg:mt-0 shadow-lg gradient-border-inset relative z-20">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#e2dcd0] shrink-0 mb-0 lg:mb-2">
<iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<div className="flex flex-col items-start lg:items-center w-full">
<span className="text-[#b1b2a9] text-xs tracking-widest uppercase font-medium mb-1">
                  Origine
                </span>
<span className="text-[#e2dcd0] text-sm font-light text-center">
                  Colombie
                </span>
</div>
<div className="hidden lg:block w-full h-[1px] bg-white/10"></div>
<div className="flex flex-col items-start lg:items-center w-full border-l lg:border-l-0 border-white/10 pl-4 lg:pl-0">
<span className="text-[#b1b2a9] text-xs tracking-widest uppercase font-medium mb-1">
                  Process
                </span>
<span className="text-[#e2dcd0] text-sm font-light text-center">
                  Lavé
                  <br/>
                  Anaérobique
                </span>
</div>
<div className="hidden lg:block w-full h-[1px] bg-white/10"></div>
<div className="flex flex-col items-start lg:items-center w-full border-l lg:border-l-0 border-white/10 pl-4 lg:pl-0">
<span className="text-[#b1b2a9] text-xs tracking-widest uppercase font-medium mb-2">
                  Profil
                </span>
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-[#e8a598] ring-1 ring-white/30 ring-offset-1 ring-offset-[#4f5343]" title="Floral / Fruité"></div>
<div className="w-4 h-4 rounded-full bg-[#d4c19c] border border-white/20" title="Sucré"></div>
</div>
</div>
</div>
</div>

<div className="relative w-auto lg:w-[calc(100%+3rem)] bg-[#eae5d9] mt-10 lg:mt-auto ml-[-2rem] lg:ml-[-3rem] pl-8 lg:pl-12 pr-6 py-6 lg:py-8 rounded-tr-[32px] rounded-br-[32px] lg:rounded-tr-none lg:rounded-tl-[44px] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] z-30">

<div className="flex flex-row lg:flex-col items-center lg:items-start justify-between w-full lg:w-auto pr-6 lg:pr-10 lg:border-r border-[#cfcabf]">
<div className="font-serif text-4xl lg:text-5xl text-[#222222] tracking-tight mb-0 lg:mb-2">
                24.00€
              </div>
<div className="flex items-center gap-2 text-[#4f5343] font-medium text-xs tracking-widest uppercase">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                250g
              </div>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end pl-0 lg:pl-6">

<div className="flex items-center gap-4 bg-[#1f1e1d] text-[#e2dcd0] px-4 py-3 rounded-full h-[52px]">
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:minus-linear" width="18"></iconify-icon>
</button>
<span className="font-light text-sm w-4 text-center">1</span>
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>

<div className="magnetic-wrap">
<button className="group flex items-center justify-between gap-6 bg-[#4f5343] text-[#e2dcd0] pl-6 pr-2 py-2 rounded-full h-[52px] hover:bg-[#3a3d31] transition-all duration-300 gradient-border-inset">
<span className="text-xs tracking-widest font-medium uppercase mt-[2px]">
                    Au panier
                  </span>
<div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
</div>
</div>
</main>
</section>

<section className="relative z-10 py-24 px-6 border-y border-dark/10 bg-cream/80 backdrop-blur-sm">
<div className="max-w-5xl mx-auto text-center">
<iconify-icon className="text-moss/30 mb-8" icon="solar:quote-left-linear" width="48"></iconify-icon>
<p className="font-serif text-2xl lg:text-4xl text-dark leading-snug mb-8">
          "Un refuge urbain où chaque tasse raconte une histoire. L'attention
          portée à l'extraction révèle des profils aromatiques d'une clarté
          absolue. Mon incontournable pour le télétravail ou un V60 du
          dimanche."
        </p>
<div className="flex flex-col items-center">
<div className="font-mono text-xs tracking-widest uppercase text-dark font-medium">
            Marc L.
          </div>
<div className="text-dark/50 text-xs mt-1">
            Avis certifié • Guide des Cafés Indépendants
          </div>
</div>
</div>
</section>

<footer className="relative z-10 bg-dark text-surface pt-24 pb-12 px-6 lg:px-12 rounded-t-[44px] lg:rounded-t-[80px] overflow-hidden">
<div className="absolute inset-0 matte-noise"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
<div className="col-span-1 lg:col-span-2">
<div className="font-serif text-4xl tracking-tighter uppercase font-medium mb-6">
              CØFF
            </div>
<p className="text-surface/60 font-light max-w-sm mb-8 leading-relaxed">
              Torréfacteur indépendant et bar à café de spécialité. Nous
              cultivons l'art de l'hospitalité et l'excellence en tasse.
            </p>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:bg-surface hover:text-dark transition-all">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:bg-surface hover:text-dark transition-all">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<h4 className="font-mono text-xs tracking-widest uppercase text-surface/50 mb-6">
              Explorer
            </h4>
<ul className="space-y-4 font-light">
<li>
<a className="hover:text-sand transition-colors" href="#">
                  Notre Carte
                </a>
</li>
<li>
<a className="hover:text-sand transition-colors" href="#">
                  La Torréfaction
                </a>
</li>
<li>
<a className="hover:text-sand transition-colors" href="#">
                  Abonnement Grains
                </a>
</li>
<li>
<a className="hover:text-sand transition-colors" href="#">
                  Masterclass Barista
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs tracking-widest uppercase text-surface/50 mb-6">
              Le Bar
            </h4>
<ul className="space-y-4 font-light text-surface/80">
<li>
                14 Rue des Arômes,
                <br/>
                75011 Paris
              </li>
<li className="pt-2">
                Lun - Ven : 8h - 18h
                <br/>
                Sam - Dim : 9h - 19h
              </li>
</ul>
</div>
</div>
<div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-surface/10 text-xs font-mono tracking-widest uppercase text-surface/40">
<p>© 2024 CØFF Roasters. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 lg:mt-0">
<a className="hover:text-surface transition-colors" href="#">Légal</a>
<a className="hover:text-surface transition-colors" href="#">
              Confidentialité
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
