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



          document.addEventListener("DOMContentLoaded", () => {
              if (typeof gsap === 'undefined') return;
              const tl = gsap.timeline({
                  scrollTrigger: {
                      trigger: "[data-element-id='aura-emp142k0y3vjwegs']",
                      start: "top 60%"
                  }
              });

              // Setup path lengths for line drawing animation
              const connectorLines = document.querySelectorAll('.connector-line');
              connectorLines.forEach(line => {
                  const length = line.getTotalLength();
                  line.style.strokeDasharray = length;
                  line.style.strokeDashoffset = length;
              });

              // 1. Enter structural layers from center compression
              tl.fromTo(".exploded-layer",
                  { y: 50, scale: 0.95, opacity: 0 },
                  { y: 0, scale: 1, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power3.out" }
              );

              // 2. Draw vertical struts
              tl.fromTo(".struts line, .struts rect",
                  { opacity: 0, scaleY: 0, transformOrigin: "bottom center" },
                  { opacity: 1, scaleY: 1, duration: 1, stagger: 0.05, ease: "power2.out" },
                  "-=1"
              );

              // 3. Reveal Annotations group and draw lines out
              tl.to("#annotations-group", { opacity: 1, duration: 0.1 }, "-=0.5");
              tl.to(".connector-line",
                  { strokeDashoffset: 0, duration: 1.2, stagger: 0.1, ease: "power2.inOut" },
                  "-=0.5"
              );

              // 4. Fade in annotation text and markers
              tl.fromTo(".annotation text, .annotation circle, .annotation rect",
                  { opacity: 0, x: (i, el) => el.getAttribute('text-anchor') === 'start' ? -5 : 5 },
                  { opacity: 1, x: 0, duration: 0.8, stagger: 0.05, ease: "power2.out" },
                  "-=0.8"
              );

              // 5. Continuous slow drift of the exploded layers
              gsap.to(".exploded-layer:nth-child(1)", { y: -4, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });
              gsap.to(".exploded-layer:nth-child(3)", { y: -2, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.5 });
              gsap.to(".exploded-layer:nth-child(5)", { y: 2, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.2 });
          });
        


      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.fromTo(".section-header > *", 
              { y: 30, opacity: 0 },
              { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.8, 
                  stagger: 0.15, 
                  ease: "power3.out", 
                  scrollTrigger: { 
                      trigger: ".section-header", 
                      start: "top 85%" 
                  }
              }
          );

          gsap.fromTo(".grid-line", 
              { 
                  scaleX: (i, el) => el.offsetWidth > el.offsetHeight ? 0 : 1,
                  scaleY: (i, el) => el.offsetHeight > el.offsetWidth ? 0 : 1,
                  opacity: 0 
              },
              { 
                  scaleX: 1, 
                  scaleY: 1, 
                  opacity: 1, 
                  duration: 1.5, 
                  ease: "expo.inOut", 
                  stagger: 0.1, 
                  transformOrigin: "center center",
                  scrollTrigger: { 
                      trigger: ".tech-grid-wrapper", 
                      start: "top 80%" 
                  }
              }
          );

          gsap.fromTo(".tech-card", 
              { y: 50, opacity: 0 },
              { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.8, 
                  stagger: 0.2, 
                  ease: "power2.out", 
                  scrollTrigger: { 
                      trigger: ".tech-grid-wrapper", 
                      start: "top 75%" 
                  }
              }
          );
      }
  


      document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(ScrollTrigger);

          const tl = gsap.timeline();
          tl.from(".gs-fade-down", { y: -20, opacity: 0, duration: 1, ease: "power3.out" })
            .from(".gs-hero-item", { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.6")
            .from(".gs-hero-img", { scale: 0.95, opacity: 0, rotationY: 10, duration: 1.5, ease: "power3.out" }, "-=0.8");

          gsap.utils.toArray('.gs-section').forEach(section => {
              gsap.from(section, {
                  scrollTrigger: {
                      trigger: section,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  },
                  y: 40,
                  opacity: 0,
                  duration: 1,
                  ease: "power3.out"
              });
          });

          gsap.from("#infinity-svg path", {
              scrollTrigger: {
                  trigger: "#infinity-svg",
                  start: "top 75%"
              },
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              duration: 2.5,
              ease: "power2.inOut",
              stagger: 0.3
          });

          gsap.utils.toArray('.tech-node').forEach((node, i) => {
              gsap.to(node, {
                  y: -10,
                  duration: 2.5 + (i % 2),
                  yoyo: true,
                  repeat: -1,
                  ease: "sine.inOut",
                  delay: i * 0.2
              });
          });

          gsap.utils.toArray('.tech-float-1').forEach(item => { gsap.to(item, { y: -8, rotation: "+=1", duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut" }); });
          gsap.utils.toArray('.tech-float-2').forEach(item => { gsap.to(item, { y: 12, rotation: "-=1", duration: 4.5, yoyo: true, repeat: -1, ease: "sine.inOut" }); });
          gsap.utils.toArray('.tech-float-3').forEach(item => { gsap.to(item, { x: 8, y: -4, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" }); });
      });

      const canvas = document.getElementById('webgl-bg');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xf6ecdf, 0.04);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 15;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const particleCount = 2500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 60;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
          scales[i] = Math.random();
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

      const vertexShader = `
          attribute float aScale;
          varying float vAlpha;
          uniform float uTime;
          void main() {
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              float pulse = sin(position.y * 0.3 + uTime) * 0.5 + 0.5;
              gl_PointSize = (2.0 + aScale * 2.0) * (30.0 / -mvPosition.z) * (0.6 + pulse * 0.4);
              vAlpha = (0.1 + pulse * 0.3) * (1.0 - smoothstep(0.0, 25.0, -mvPosition.z));
              gl_Position = projectionMatrix * mvPosition;
          }
      `;

      const fragmentShader = `
          varying float vAlpha;
          void main() {
              float r = distance(gl_PointCoord, vec2(0.5));
              if(r > 0.5) discard;
              vec3 color = vec3(0.94, 0.45, 0.15);
              gl_FragColor = vec4(color, vAlpha);
          }
      `;

      const material = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 } },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const beamGeometry = new THREE.PlaneGeometry(3, 50);
      const beamMaterial = new THREE.MeshBasicMaterial({
          color: 0xea580c,
          transparent: true,
          opacity: 0.03,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide
      });
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.position.z = -5;
      scene.add(beam);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      document.addEventListener('mousemove', (event) => {
          mouseX = (event.clientX - windowHalfX) * 0.002;
          mouseY = (event.clientY - windowHalfY) * 0.002;
      });

      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);
          const elapsedTime = clock.getElapsedTime();

          material.uniforms.uTime.value = elapsedTime;

          targetX = mouseX * 3;
          targetY = mouseY * 3;
          camera.position.x += (targetX - camera.position.x) * 0.02;
          camera.position.y += (-targetY - camera.position.y) * 0.02;
          camera.lookAt(scene.position);

          particles.rotation.y = elapsedTime * 0.015;

          beam.scale.x = 1.0 + Math.sin(elapsedTime * 1.5) * 0.3;
          beam.material.opacity = 0.01 + Math.sin(elapsedTime * 1.0) * 0.02;

          renderer.render(scene, camera);
      }

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" height="2042" id="webgl-bg" style={{width: '1568px', height: '1021px'}} width="3136"></canvas>

<div className="z-10 border-x min-h-screen w-full max-w-[1400px] border-orange-900/10 mr-auto ml-auto relative">

<div className="absolute inset-0 pointer-events-none flex justify-between -z-10">
<div className="w-px h-full bg-orange-900/5 absolute left-1/4"></div>
<div className="w-px h-full bg-orange-900/5 absolute left-1/2"></div>
<div className="w-px h-full bg-orange-900/5 absolute left-3/4"></div>
</div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/50"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500/50"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500/50"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/50"></div>

<header className="px-6 py-8 flex justify-between items-center gs-fade-down border-b border-orange-900/10 relative">
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="flex items-center gap-2">
<div className="text-2xl font-medium tracking-tight text-stone-950 flex items-center">
            NEX
            <span className="text-orange-600 ml-0.5">A</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-normal text-stone-500 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-orange-600 transition-colors" href="#">Library</a>
<a className="hover:text-orange-600 transition-colors" href="#">
            Features
          </a>
<a className="hover:text-orange-600 transition-colors" href="#">
            Technology
          </a>
<a className="hover:text-orange-600 transition-colors" href="#">
            Contact
          </a>
</nav>
<div className="text-xs uppercase tracking-widest text-stone-500 font-normal hidden sm:block">
          STORY_ENGINE // V.2.0.4
        </div>
</header>

<section className="grid lg:grid-cols-2 gap-12 border-orange-900/10 border-b pt-24 pr-6 pb-32 pl-6 relative gap-x-12 gap-y-12 items-center" style={{backgroundSize: '64px 64px', backgroundImage: 'linear-gradient(to right, rgba(234, 88, 12, 0.06) 1px, transparent 1px), linear-gradient(rgba(234, 88, 12, 0.06) 1px, transparent 1px)'}}>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="z-10 relative">
<p className="text-xs font-normal tracking-widest text-orange-600 uppercase mb-6 gs-hero-item">
            AI-Powered Storytelling
          </p>
<h1 className="text-5xl lg:text-7xl xl:text-8xl leading-none font-medium tracking-tight mb-8 gs-hero-item bg-gradient-to-b from-stone-900 to-stone-500 bg-clip-text text-transparent">
            MAGIC IN
            <br/>
            EVERY PAGE
          </h1>
<p className="text-stone-600 text-sm max-w-md mb-12 gs-hero-item font-light leading-relaxed">
            Crafting personalized digital storybooks through advanced AI and beautiful generative art. We build infinite, immersive adventures adapted to your child's imagination.
          </p>
<div className="flex flex-wrap items-center gap-4 mb-12 gs-hero-item">
<button className="bg-gradient-to-b from-stone-50/90 to-orange-50/80 border border-orange-300/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(139,91,47,0.05)] text-stone-600 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-orange-100/50 transition-colors text-xs font-normal uppercase tracking-widest">
<div className="w-6 h-6 rounded-full bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 flex items-center justify-center text-orange-600">
<iconify-icon className="text-xs" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
              Listen
            </button>
<button className="bg-gradient-to-b from-stone-50/90 to-orange-50/80 border border-orange-300/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(139,91,47,0.05)] text-stone-600 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-orange-100/50 transition-colors text-xs font-normal uppercase tracking-widest">
<div className="w-6 h-6 rounded-full bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 flex items-center justify-center text-orange-600">
<iconify-icon className="text-xs" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
              Library
            </button>
</div>
<div className="gs-hero-item">
<a className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 shadow-[0_1rem_2rem_rgba(234,88,12,0.22),inset_0_1px_0_rgba(255,255,255,0.4)] border border-orange-600/40 text-white transition-all duration-300 hover:border-orange-600/80 hover:shadow-[0_1rem_2.5rem_rgba(234,88,12,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-px font-normal uppercase tracking-widest px-8 py-4 rounded-full inline-block text-xs" href="#">
              Start Creating
            </a>
</div>
</div>

<div className="hidden lg:block gs-hero-img w-full h-[500px] relative" style={{perspective: '1200px', transformStyle: 'preserve-3d'}}>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="overflow-hidden flex z-10 bg-white/70 w-full h-[500px] max-w-[850px] border-white/50 border rounded-[24px] relative shadow-[0_20px_40px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

<div className="hidden md:flex flex-col bg-stone-50/50 w-60 border-stone-200/50 border-r pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="">
<div className="flex items-center gap-2 px-2 mb-8">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-inner text-white">
<i className="w-4 h-4" data-lucide="book-open"></i>
</div>
<span className="font-normal text-stone-900 tracking-tight text-sm">StoryForge OS</span>
</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 bg-white rounded-xl shadow-sm border border-stone-200/50 text-stone-900 text-xs font-light transition-all">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="book-open"></i>
            My Library
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-500 text-xs font-light hover:bg-stone-100/50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
            Generate
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-500 text-xs font-light hover:bg-stone-100/50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="headphones"></i>
            Audiobooks
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-500 text-xs font-light hover:bg-stone-100/50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="settings"></i>
            Settings
          </button>
</div>
</div>
<div className="px-3 py-4 bg-orange-50/50 rounded-xl border border-orange-100">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-normal uppercase tracking-wider text-orange-600">Tokens</span>
<span className="text-[10px] font-light text-stone-500">1,204 left</span>
</div>
<div className="w-full bg-orange-200/50 h-1.5 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[45%] rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col p-6 md:p-8 h-full overflow-y-auto">

<div className="flex justify-between items-center mb-8">
<h2 className="text-xl md:text-2xl font-normal tracking-tight text-stone-900">Recent Masterpieces</h2>
<div className="flex items-center gap-4">
<button className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="search"></i>
</button>
<button className="bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-light hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-sm shadow-stone-900/20">
<i className="w-3 h-3" data-lucide="plus"></i>
            New Story
          </button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative shadow-sm border border-stone-100 bg-stone-100">
<img alt="Book cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f57b778-d3ec-430a-84cd-522800217b57_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-colors ml-auto border border-white/20">
<i className="w-3.5 h-3.5 ml-0.5" data-lucide="play"></i>
</button>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-normal uppercase tracking-wider text-stone-600 shadow-sm border border-white/50">
              Fantasy
            </div>
</div>
<h3 className="text-sm font-normal text-stone-900 truncate">The Whispering Woods</h3>
<p className="text-[11px] text-stone-500 mt-0.5 font-light">8 pages • Generated 2h ago</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative shadow-sm border border-stone-100 bg-stone-100">
<img alt="Book cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9c6bdc-d2e7-4897-bc51-905cb8c0257c_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-colors ml-auto border border-white/20">
<i className="w-3.5 h-3.5 ml-0.5" data-lucide="play"></i>
</button>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-normal uppercase tracking-wider text-orange-600 shadow-sm border border-orange-100/50">
              Audiobook
            </div>
</div>
<h3 className="text-sm font-normal text-stone-900 truncate">Elara's Stardust</h3>
<p className="text-[11px] text-stone-500 mt-0.5 font-light">12 pages • Yesterday</p>
</div>

<div className="group cursor-pointer hidden sm:block">
<div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative shadow-sm border border-stone-100 bg-stone-100">
<img alt="Book cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01e03aad-6c6c-4c37-8f2e-539467e631dd_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-colors ml-auto border border-white/20">
<i className="w-3.5 h-3.5 ml-0.5" data-lucide="play"></i>
</button>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-normal uppercase tracking-wider text-stone-600 shadow-sm border border-white/50">
              Adventure
            </div>
</div>
<h3 className="text-sm font-normal text-stone-900 truncate">The Clockwork Kingdom</h3>
<p className="text-[11px] text-stone-500 mt-0.5 font-light">10 pages • 3 days ago</p>
</div>
</div>
</div>
</div>

<div className="z-20 transform tech-float-1 text-stone-900 bg-gradient-to-br from-stone-50/90 to-orange-100/80 w-28 h-36 border-orange-300/30 border rounded-[20px] pt-2 pr-2 pb-2 pl-2 absolute top-10 right-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.10)] backdrop-blur-2xl -rotate-[15deg]">
<div className="flex flex-col gap-3 bg-stone-50/70 w-full h-full border-orange-300/30 border rounded-[12px] shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-3xl text-orange-500" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-1/2 h-1 bg-orange-200 rounded-full"></div>
<div className="w-1/3 h-1 bg-orange-200 rounded-full"></div>
</div>
</div>
<div className="z-20 transform tech-float-2 flex flex-col text-stone-900 bg-gradient-to-br from-stone-50/90 to-orange-100/80 w-44 h-20 border-orange-300/30 border rounded-[16px] pt-4 pr-4 pb-4 pl-4 absolute top-40 left-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.10)] backdrop-blur-2xl -rotate-[5deg] gap-x-3 gap-y-3 justify-center">
<div className="text-xs text-stone-500 uppercase tracking-widest mb-1">
    AI Status
  </div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></div>
<div className="text-stone-900 text-sm font-normal tracking-tight">
      Generating...
    </div>
</div>
</div>
<div className="absolute -top-10 left-32 w-48 h-48 border-[1px] border-dashed border-orange-400/40 rounded-full bg-transparent shadow-xl z-0 tech-float-3 pointer-events-none"></div>
<div className="absolute -bottom-8 right-24 w-12 h-12 bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.10)] border border-orange-400/40 backdrop-blur-2xl rounded-full z-20 tech-float-2 flex items-center justify-center">
<div className="w-4 h-4 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="min-h-[800px] lg:h-screen lg:max-h-[1200px] overflow-hidden select-none antialiased text-stone-900 font-sans bg-transparent w-full border-orange-900/10 border-b relative" style={{scrollbarWidth: 'none'}}>

<div className="absolute inset-0 pointer-events-none z-0 opacity-40" style={{backgroundImage: 'radial-gradient(circle, rgba(234, 88, 12, 0.4) 0.5px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="absolute inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(234, 88, 12, 0.3) 1px, transparent 1px), linear-gradient(rgba(234, 88, 12, 0.3) 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>
<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<header className="absolute top-0 left-0 right-0 z-30 p-8 lg:p-10 flex flex-col lg:flex-row justify-between items-start pointer-events-none gap-6 lg:gap-0">
<div className="flex flex-col gap-1.5 pointer-events-auto">
<div className="flex items-center gap-2 text-orange-600">
<svg className="lucide lucide-server" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
<span className="text-xs font-normal tracking-widest uppercase">
                Story.Engine_v2.0
              </span>
</div>
<h1 className="text-xl font-medium tracking-tight text-stone-900 uppercase">
              Story Architecture
            </h1>
</div>
<div className="hidden md:flex gap-6 lg:gap-12 text-stone-500 text-xs uppercase tracking-widest font-normal pointer-events-auto">
<div className="flex items-center gap-2 hover:text-orange-600 cursor-pointer transition-colors duration-300">
<span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span>
<span>Plot</span>
</div>
<div className="flex items-center gap-2 text-orange-600">
<span className="w-1.5 h-1.5 rounded-full bg-orange-600 shadow-[0_0_8px_#ea580c]"></span>
<span className="">Art</span>
</div>
<div className="flex items-center gap-2 hover:text-orange-600 cursor-pointer transition-colors duration-300">
<span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span>
<span className="">Audio</span>
</div>
</div>
<div className="hidden sm:flex flex-col items-end gap-2 pointer-events-auto">
<div className="flex gap-1.5">
<div className="w-6 h-1 bg-orange-500 rounded-full shadow-[0_0_8px_#ea580c]"></div>
<div className="w-2 h-1 bg-orange-200 rounded-full"></div>
<div className="w-2 h-1 bg-orange-200 rounded-full"></div>
</div>
<span className="text-xs font-normal tracking-widest text-stone-500 uppercase">
              System Nominal
            </span>
</div>
</header>


<aside className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-12 w-52 pointer-events-none">
<div className="flex flex-col gap-4 pointer-events-auto bg-stone-50/70 p-5 rounded-2xl border border-orange-300/30 shadow-[0_10px_30px_rgba(139,91,47,0.15),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-xl">
<h2 className="text-xs font-normal tracking-widest text-stone-500 uppercase border-b border-orange-200 pb-2">
              Story Nodes
            </h2>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-xs">
<span className="font-normal text-stone-600">Text</span>
<span className="font-mono text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded shadow-sm border border-orange-200 text-[10px]">
                  ACTIVE
                </span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-normal text-stone-600">Art</span>
<span className="font-mono text-stone-500 text-[10px]">SYNC</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-normal text-stone-400">Voice</span>
<span className="font-mono text-stone-400 text-[10px]">IDLE</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4 pointer-events-auto bg-stone-50/70 p-5 rounded-2xl border border-orange-300/30 shadow-[0_10px_30px_rgba(139,91,47,0.15),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-xl">
<h2 className="text-xs font-normal tracking-widest text-stone-500 uppercase border-b border-orange-200 pb-2">
              Engine Status
            </h2>
<div className="flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-[10px] font-normal uppercase tracking-widest text-stone-600">
<span className="">Logic</span>
<span className="text-stone-900 font-medium">78%</span>
</div>
<div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden shadow-inner border border-orange-200/50">
<div className="h-full bg-orange-500 w-[78%]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-[10px] font-normal uppercase tracking-widest text-stone-600">
<span className="">Context</span>
<span className="text-stone-900 font-medium">42%</span>
</div>
<div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden shadow-inner border border-orange-200/50">
<div className="h-full bg-orange-400 w-[42%]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-[10px] font-normal uppercase tracking-widest text-stone-600">
<span className="">Creativity</span>
<span className="text-stone-900 font-medium">12%</span>
</div>
<div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden shadow-inner border border-orange-200/50">
<div className="h-full bg-orange-300 w-[12%]"></div>
</div>
</div>
</div>
</div>
</aside>

<aside className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 w-64 pointer-events-none">
<div className="bg-stone-50/70 p-5 rounded-2xl border border-orange-300/30 shadow-[0_10px_30px_rgba(139,91,47,0.15),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-xl pointer-events-auto">
<h2 className="text-xs font-normal tracking-widest text-stone-500 uppercase border-b border-orange-200 pb-2 text-right mb-4">
              Generation Log
            </h2>
<div className="flex flex-col gap-2.5 text-[10px] font-mono tracking-wider text-right">
<div className="text-stone-400">
                T-04:12
                <span className="text-orange-500/80 ml-2">PROMPT_RECEIVED</span>
</div>
<div className="text-stone-400">
                T-04:13
                <span className="text-orange-500/80 ml-2">DRAFTING_PLOT</span>
</div>
<div className="text-stone-400">
                T-04:13
                <span className="text-orange-500/80 ml-2">CHECKING_SAFETY</span>
</div>
<div className="text-stone-900 flex justify-end items-center mt-1 mb-1">
                T-04:14
                <span className="text-orange-700 ml-2 border border-orange-300 px-1.5 py-0.5 bg-orange-100 rounded shadow-sm">
                  GENERATING_ART
                </span>
</div>
<div className="text-stone-400">
                T-04:15
                <span className="text-stone-400 ml-2">STORY_READY</span>
</div>
</div>
</div>
</aside>

<main className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none pt-20 lg:pt-0 pb-32 lg:pb-0">
<div className="relative w-full max-w-[1200px] h-[80%] flex items-center justify-center">
<svg className="w-full h-full overflow-visible" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 800">
<defs>
<pattern height="20" id="grid-pattern-orange" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fed7aa" strokeWidth="0.5"></path>
</pattern>
</defs>

<line stroke="#fdba74" stroke-dasharray="4 8" strokeWidth="1" x1="500" x2="500" y1="100" y2="720"></line>

<g id="wireframe-group">

<g className="exploded-layer" data-svg-origin="180 612.8913999078213" data-y="0" transform="matrix(1,0,0,1,0,-1.5046)">
<ellipse cx="500" cy="650" fill="none" rx="320" ry="100" stroke="#fb923c" strokeWidth="1.5"></ellipse>
<ellipse cx="500" cy="650" fill="none" rx="290" ry="90" stroke="#fdba74" stroke-dasharray="2 4" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="650" fill="none" rx="150" ry="45" stroke="#fed7aa" strokeWidth="1"></ellipse>

<path d="M 180 650 Q 500 750 820 650" fill="none" stroke="#fed7aa" strokeWidth="1"></path>
<path d="M 210 650 Q 500 720 790 650" fill="none" stroke="#fed7aa" strokeWidth="1"></path>
<path d="M 350 650 Q 500 680 650 650" fill="none" stroke="#fed7aa" strokeWidth="1"></path>

<line stroke="#fdba74" strokeWidth="0.5" x1="180" x2="820" y1="650" y2="650"></line>
<line stroke="#fdba74" strokeWidth="0.5" x1="500" x2="500" y1="550" y2="750"></line>
</g>

<g className="struts">
<line data-svg-origin="220 650" stroke="#fdba74" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00003)" x1="260" x2="180" y1="500" y2="650"></line>
<line data-svg-origin="780 650" stroke="#fdba74" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00001)" x1="740" x2="820" y1="500" y2="650"></line>
<line data-svg-origin="320 650" stroke="#fed7aa" stroke-dasharray="2 4" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00004)" x1="350" x2="290" y1="500" y2="650"></line>
<line data-svg-origin="680 650" stroke="#fed7aa" stroke-dasharray="2 4" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,-0.00004)" x1="650" x2="710" y1="500" y2="650"></line>
</g>

<g className="exploded-layer" data-svg-origin="260 458.4003003326943" data-y="0" transform="matrix(1,0,0,1,0,-0.4373)">
<ellipse cx="500" cy="500" fill="rgba(255,253,248,0.85)" rx="240" ry="80" stroke="#f97316" strokeWidth="1.5"></ellipse>
<ellipse cx="500" cy="500" fill="none" rx="200" ry="66" stroke="#fb923c" stroke-dasharray="4 4" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="500" fill="none" rx="100" ry="33" stroke="#fdba74" strokeWidth="1"></ellipse>

<line stroke="#fdba74" strokeWidth="1" x1="260" x2="740" y1="500" y2="500"></line>
<line stroke="#fdba74" strokeWidth="0.5" x1="330" x2="670" y1="443" y2="557"></line>
<line stroke="#fdba74" strokeWidth="0.5" x1="330" x2="670" y1="557" y2="443"></line>
</g>

<g className="struts">
<line data-svg-origin="290 500" stroke="#fb923c" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,-0.00001)" x1="320" x2="260" y1="350" y2="500"></line>
<line data-svg-origin="710 500" stroke="#fb923c" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,-0.00003)" x1="680" x2="740" y1="350" y2="500"></line>
</g>

<g className="exploded-layer" data-svg-origin="320.0000053090696 252.14209790340672" data-y="0" transform="matrix(1,0,0,1,-0.00001,0.0015)">
<ellipse cx="500" cy="350" fill="rgba(255,253,248,0.9)" rx="180" ry="60" stroke="#ea580c" strokeWidth="1.5"></ellipse>
<ellipse cx="500" cy="350" fill="none" rx="150" ry="50" stroke="#f97316" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="350" fill="none" rx="120" ry="40" stroke="#fb923c" stroke-dasharray="2 4" strokeWidth="1"></ellipse>

<path d="M 320 350 A 180 60 0 0 0 680 350" fill="none" stroke="#fb923c" strokeWidth="1"></path>
<line stroke="#fb923c" strokeWidth="1" x1="320" x2="680" y1="350" y2="350"></line>
</g>

<g className="struts">
<line data-svg-origin="350 350" stroke="#ea580c" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00002)" x1="380" x2="320" y1="200" y2="350"></line>
<line data-svg-origin="650 350" stroke="#ea580c" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00002)" x1="620" x2="680" y1="200" y2="350"></line>
<rect data-svg-origin="500 350" fill="none" height="150" stroke="#fdba74" stroke-dasharray="2 4" strokeWidth="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0.00003)" width="40" x="480" y="200"></rect>
</g>

<g className="exploded-layer" data-svg-origin="379.99998248871105 159.2575784040036" data-y="0" transform="matrix(1,0,0,1,0.00001,0)">
<ellipse cx="500" cy="200" fill="rgba(255,253,248,0.95)" rx="120" ry="40" stroke="#c2410c" strokeWidth="2"></ellipse>
<ellipse cx="500" cy="200" fill="none" rx="100" ry="33" stroke="#ea580c" strokeWidth="1"></ellipse>
<circle cx="500" cy="200" fill="none" r="15" stroke="#ea580c" strokeWidth="1.5"></circle>
<circle cx="500" cy="200" fill="#ea580c" r="5"></circle>
<line stroke="#f97316" strokeWidth="1" x1="380" x2="620" y1="200" y2="200"></line>
<line stroke="#f97316" strokeWidth="1" x1="500" x2="500" y1="160" y2="240"></line>
</g>
</g>

<g className="opacity-0" id="annotations-group">

<g className="annotation">
<path className="connector-line" d="M 440 180 L 300 110 L 180 110" fill="none" stroke="#ea580c" strokeWidth="1.5" style={{strokeDasharray: '276.525', strokeDashoffset: '0'}}></path>
<circle cx="440" cy="180" data-svg-origin="423 178" fill="#ea580c" r="3.5" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)"></circle>
<rect data-svg-origin="165 108" fill="#ea580c" height="8" rx="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)" width="8" x="176" y="106"></rect>
<text className="text-xs font-medium tracking-widest uppercase fill-stone-900" data-svg-origin="25.750629425048828 93.23529052734375" style={{transformOrigin: '0px 0px'}} text-anchor="end" transform="matrix(1,0,0,1,0,0)" x="160" y="105">
                    Narrative Engine
                  </text>
<text className="text-[9px] font-mono tracking-widest uppercase fill-stone-500" data-svg-origin="59.505226135253906 111.66666412353516" style={{transformOrigin: '0px 0px'}} text-anchor="end" transform="matrix(1,0,0,1,0,0)" x="160" y="122">
                    0.04s DRAFTING
                  </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 660 330 L 750 260 L 850 260" fill="none" stroke="#f97316" strokeWidth="1.5" style={{strokeDasharray: '214.018', strokeDashoffset: '0'}}></path>
<circle cx="660" cy="330" data-svg-origin="643 328" fill="#f97316" r="3.5" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)"></circle>
<rect data-svg-origin="831 258" fill="#f97316" height="8" rx="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)" width="8" x="846" y="256"></rect>
<text className="text-xs font-medium tracking-widest uppercase fill-stone-900" data-svg-origin="880 243.2353057861328" style={{transformOrigin: '0px 0px'}} text-anchor="start" transform="matrix(1,0,0,1,0,0)" x="865" y="255">
                    Vocabulary Ring
                  </text>
<text className="text-[9px] font-mono tracking-widest uppercase fill-stone-500" data-svg-origin="880 261.6666564941406" style={{transformOrigin: '0px 0px'}} text-anchor="start" transform="matrix(1,0,0,1,0,0)" x="865" y="272">
                    AGE: 4-8 YEARS
                  </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 280 480 L 180 430 L 100 430" fill="none" stroke="#fb923c" strokeWidth="1.5" style={{strokeDasharray: '191.803', strokeDashoffset: '0'}}></path>
<circle cx="280" cy="480" data-svg-origin="263 478" fill="#fb923c" r="3.5" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)"></circle>
<rect data-svg-origin="85 428" fill="#fb923c" height="8" rx="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)" width="8" x="96" y="426"></rect>
<text className="text-xs font-medium tracking-widest uppercase fill-stone-900" data-svg-origin="-67.11703872680664 413.23529052734375" style={{transformOrigin: '0px 0px'}} text-anchor="end" transform="matrix(1,0,0,1,0,0)" x="80" y="425">
                    Imagination Core
                  </text>
<text className="text-[9px] font-mono tracking-widest uppercase fill-stone-500" data-svg-origin="-65.73836135864258 431.6666564941406" style={{transformOrigin: '0px 0px'}} text-anchor="end" transform="matrix(1,0,0,1,0,0)" x="80" y="442">
                    CREATIVITY: HIGH
                  </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 760 620 L 820 580 L 900 580" fill="none" stroke="#fdba74" strokeWidth="1.5" style={{strokeDasharray: '152.111', strokeDashoffset: '0'}}></path>
<circle cx="760" cy="620" data-svg-origin="743 618" fill="#fdba74" r="3.5" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)"></circle>
<rect data-svg-origin="881 578" fill="#fdba74" height="8" rx="1" style={{transformOrigin: '0px 0px'}} transform="matrix(1,0,0,1,0,0)" width="8" x="896" y="576"></rect>
<text className="text-xs font-medium tracking-widest uppercase fill-stone-900" data-svg-origin="930 563.2352905273438" style={{transformOrigin: '0px 0px'}} text-anchor="start" transform="matrix(1,0,0,1,0,0)" x="915" y="575">
                    Moral Framework
                  </text>
<text className="text-[9px] font-mono tracking-widest uppercase fill-stone-500" data-svg-origin="930 581.6666259765625" style={{transformOrigin: '0px 0px'}} text-anchor="start" transform="matrix(1,0,0,1,0,0)" x="915" y="592">
                    LESSON: KINDNESS
                  </text>
</g>
</g>
</svg>
</div>
</main>

<footer className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 z-30 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0 pointer-events-none">

<div className="flex items-center gap-2 pointer-events-auto">
<button className="w-10 h-10 border border-orange-300/50 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:border-orange-400 transition-colors bg-stone-50/50 backdrop-blur-md rounded-xl shadow-sm">
<svg className="lucide lucide-rewind" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="11 19 2 12 11 5 11 19"></polygon>
<polygon className="" points="22 19 13 12 22 5 22 19"></polygon>
</svg>
</button>
<button className="w-10 h-10 border border-orange-500 flex items-center justify-center text-white bg-orange-500 backdrop-blur-md transition-colors rounded-xl shadow-lg shadow-orange-500/20">
<svg className="lucide lucide-pause" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" width="4" x="6" y="4"></rect>
<rect height="16" width="4" x="14" y="4"></rect>
</svg>
</button>
<button className="w-10 h-10 border border-orange-300/50 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:border-orange-400 transition-colors bg-stone-50/50 backdrop-blur-md rounded-xl shadow-sm">
<svg className="lucide lucide-fast-forward w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="13 19 22 12 13 5 13 19"></polygon>
<polygon points="2 19 11 12 2 5 2 19"></polygon>
</svg>
</button>
<div className="ml-4 pl-4 border-l border-orange-200 flex flex-col justify-center h-10">
<span className="text-[9px] font-mono text-stone-500">PLAYBACK</span>
<span className="text-xs font-normal tracking-wider text-stone-900 uppercase">
                Step 04.12
              </span>
</div>
</div>

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-xs lg:max-w-md flex-col gap-2 items-center">
<div className="flex justify-between w-full text-[9px] font-mono text-stone-500 px-1">
<span>0.0s</span>
<span className="text-orange-600 font-bold">1.2s</span>
<span>2.4s</span>
<span>3.6s</span>
</div>
<div className="w-full flex items-center gap-1">
<div className="h-[1px] flex-1 bg-orange-200"></div>
<div className="h-[1px] w-8 bg-orange-400"></div>
<div className="h-[2px] w-16 bg-orange-500 relative shadow-[0_0_8px_#ea580c]">
<div className="absolute -top-1 left-full w-2 h-2 border-2 border-orange-500 bg-white rounded-full transform -translate-x-1/2 shadow-sm"></div>
</div>
<div className="h-[1px] w-12 bg-orange-300"></div>
<div className="h-[1px] flex-1 bg-orange-200"></div>
</div>
</div>

<div className="flex gap-4 pointer-events-auto">
<div className="hidden sm:flex flex-col items-end gap-1.5">
<span className="text-[9px] font-normal tracking-widest text-stone-500 uppercase">
                Output Node
              </span>
<div className="border border-orange-200 px-4 py-2 flex items-center gap-3 text-xs text-stone-600 bg-stone-50/70 rounded-lg backdrop-blur-md hover:border-orange-400 hover:text-orange-600 cursor-pointer transition-colors shadow-sm">
<span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_4px_#ea580c]"></span>
<span className="tracking-wider uppercase font-medium">
                  Create Book
                </span>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-[9px] font-normal tracking-widest text-stone-500 uppercase">
                Render Mode
              </span>
<div className="border border-orange-200 px-4 py-2 flex items-center gap-3 text-xs text-stone-600 bg-stone-50/70 rounded-lg backdrop-blur-md hover:border-orange-400 hover:text-orange-600 cursor-pointer transition-colors shadow-sm">
<svg className="lucide lucide-maximize" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
<path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
<path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
<path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
</svg>
<span className="tracking-wider uppercase font-medium">
                  Read Aloud
                </span>
</div>
</div>
</div>
</footer>


</section>

<section className="px-6 py-32 gs-section overflow-hidden border-b border-orange-900/10">
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="flex w-full h-[600px] relative items-center justify-center" style={{perspective: '1200px', transformStyle: 'preserve-3d'}}>
<div className="flex flex-col transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:[transform:rotateY(-10deg)_rotateX(5deg)_rotateZ(2deg)_translateY(-10px)] text-stone-900 bg-gradient-to-br from-stone-50/90 to-orange-100/80 w-64 h-[450px] border-orange-300/30 border rounded-[24px] p-4 absolute left-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.10)] backdrop-blur-2xl" style={{transform: 'rotateY(-15deg) rotateX(10deg) rotateZ(5deg)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]"></div>
<span className="text-[10px] font-medium tracking-widest uppercase text-stone-500">Generating</span>
</div>
<div className="w-7 h-7 rounded-full bg-white/60 flex items-center justify-center border border-orange-200/50 shadow-sm">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="sparkles"></i>
</div>
</div>
<div className="w-full h-52 rounded-xl overflow-hidden relative mb-4 shadow-sm border border-orange-200/50">
<img alt="Generated Book Cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c9485e9-1798-404c-9fd5-16a4befefa0d_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-4">
<div className="text-white">
<h4 className="text-base font-medium mb-1">The Cosmic Treehouse</h4>
<p className="text-[10px] text-stone-300 font-light">Age: 4-8 • Theme: Space</p>
</div>
</div>
</div>
<div className="bg-white/50 rounded-xl p-4 border border-orange-100 flex-grow flex flex-col justify-center gap-4">
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-medium uppercase tracking-widest text-stone-600">
<span>Progress</span>
<span className="text-orange-600">85%</span>
</div>
<div className="w-full h-1.5 bg-stone-200/50 rounded-full overflow-hidden shadow-inner">
<div className="h-full w-[85%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2.5 text-[10px] text-stone-600">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
<span className="font-normal">Drafting narrative arc</span>
</div>
<div className="flex items-center gap-2.5 text-[10px] text-stone-600">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check-circle-2"></i>
<span className="font-normal">Synthesizing voices</span>
</div>
<div className="flex items-center gap-2.5 text-[10px] text-stone-500">
<i className="w-3.5 h-3.5 text-orange-400 animate-spin" data-lucide="loader-2"></i>
<span className="font-normal">Rendering illustrations...</span>
</div>
</div>
</div>
</div>
<div className="absolute w-[280px] h-[520px] rounded-[32px] p-2 z-10 right-10 top-5 bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-[0_30px_60px_rgba(139,91,47,0.15),inset_0_1px_0_rgba(255,255,255,0.86)] border border-orange-300/30 backdrop-blur-2xl text-stone-900 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:[transform:rotateY(-10deg)_rotateX(5deg)_rotateZ(2deg)_translateY(-10px)]" style={{transform: 'rotateY(-15deg) rotateX(10deg) rotateZ(5deg)'}}>
<div className="w-full h-full bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-[24px] overflow-hidden relative">
<div className="h-1/2 bg-gradient-to-br from-stone-50/90 to-orange-100/80 p-6 relative border-b border-orange-200 flex flex-col items-center">
<div className="w-16 h-1.5 bg-stone-50/70 border border-orange-100 mx-auto rounded-full mb-10 shadow-inner"></div>
<div className="w-32 h-32 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full shadow-[0_10px_30px_rgba(234,88,12,0.1)] flex items-center justify-center p-2 relative border border-orange-200">
<div className="w-full h-full rounded-full bg-stone-50/70 shadow-[inset_0_5px_15px_rgba(139,91,47,0.08)] flex items-center justify-center relative border border-orange-100">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-stone-50/90 to-orange-100/80 border border-orange-400/40 shadow-[0_5px_15px_rgba(234,88,12,0.1)]"></div>
<div className="absolute w-2 h-2 bg-orange-500 rounded-full top-3 right-4 shadow-[0_0_10px_#f97316]"></div>
</div>
</div>
</div>
<div className="p-8 pt-12 text-center flex flex-col items-center">
<div className="text-xs tracking-widest font-normal uppercase text-stone-500 mb-3">
                    StoryForge OS
                  </div>
<h4 className="text-2xl font-medium tracking-tight text-stone-950 mb-8">
                    TaleCraft
                  </h4>
<div className="w-14 h-14 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full flex items-center justify-center shadow-lg border border-orange-400/30 text-orange-600 hover:border-orange-500/60 transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8 z-10">
<div className="w-16 h-16 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-2xl p-2 relative flex items-center justify-center shadow-[0_10px_30px_rgba(139,91,47,0.15)] border border-orange-300/30">
<div className="w-full h-full bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] rounded-xl flex items-center justify-center border border-orange-300/40">
<iconify-icon className="text-2xl text-orange-600" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="">
<p className="text-xs font-normal tracking-widest text-orange-600 uppercase mb-3">
                Interactive Reader
              </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-stone-950">
                Immersive, AI-driven reading.
              </h2>
</div>
<div className="flex gap-3 text-xs font-normal tracking-widest text-stone-500 uppercase">
<span className="bg-gradient-to-b from-stone-50/90 to-orange-50/80 border border-orange-300/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(139,91,47,0.05)] px-3 py-1.5 rounded-sm">
                Audiobook
              </span>
<span className="bg-gradient-to-b from-stone-50/90 to-orange-50/80 border border-orange-300/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(139,91,47,0.05)] px-3 py-1.5 rounded-sm">
                Visuals
              </span>
<span className="bg-gradient-to-b from-stone-50/90 to-orange-50/80 border border-orange-300/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(139,91,47,0.05)] px-3 py-1.5 rounded-sm">
                Interactive
              </span>
</div>
<p className="text-sm font-light text-stone-600 max-w-md leading-relaxed">
              Custom-tailored stories that adapt to reading levels and interests. Built for curious minds where every interaction brings characters to life.
            </p>
<a className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 shadow-[0_1rem_2rem_rgba(234,88,12,0.22),inset_0_1px_0_rgba(255,255,255,0.4)] border border-orange-600/40 text-white transition-all duration-300 hover:border-orange-600/80 hover:shadow-[0_1rem_2.5rem_rgba(234,88,12,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-px font-normal uppercase tracking-widest px-8 py-4 rounded-full inline-block text-xs mt-2" href="#">
              Read Now
            </a>
</div>
</div>
</section>

<section className="px-6 py-32 gs-section border-b border-orange-900/10 relative" style={{backgroundSize: '64px 64px', backgroundImage: 'linear-gradient(to right, rgba(234, 88, 12, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 88, 12, 0.06) 1px, transparent 1px)'}}>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="text-center mb-16 relative z-10">
<p className="text-xs font-normal tracking-widest text-orange-600 uppercase mb-4">
            Magic &amp; Tech
          </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-stone-950">
            Creative AI Engine
          </h2>
<p className="text-sm font-light text-stone-600 max-w-md mx-auto leading-relaxed">
            Combining advanced language models and generative art to craft infinite bedtime stories instantly.
          </p>
</div>
<div className="flex flex-wrap justify-center gap-8 mb-24 text-xs uppercase tracking-widest font-normal text-stone-500 relative z-10">
<button className="hover:text-stone-900 transition-colors pb-2">
            Characters
          </button>
<button className="text-orange-600 border-b border-orange-600 pb-2">
            Worlds
          </button>
<button className="hover:text-stone-900 transition-colors pb-2">
            Narration
          </button>
<button className="hover:text-stone-900 transition-colors pb-2">
            Safety
          </button>
<button className="hover:text-stone-900 transition-colors pb-2">
            Learning
          </button>
</div>
<div className="relative h-[400px] max-w-3xl mx-auto flex items-center justify-center">
<div className="absolute z-20 flex flex-col items-center gap-5 tech-node">
<div className="w-32 h-32 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full flex items-center justify-center border border-orange-400/40 shadow-[0_0_40px_rgba(234,88,12,0.1)]">
<iconify-icon className="text-5xl text-orange-600 drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]" icon="solar:microphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest font-normal text-stone-900">
              Voice Clone
            </span>
</div>
<div className="absolute top-8 left-12 flex flex-col items-center gap-3 tech-node" style={{animationDelay: '0.2s'}}>
<div className="w-20 h-20 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full flex items-center justify-center border border-orange-300/30">
<iconify-icon className="text-2xl text-orange-500" icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest font-normal text-stone-600">
              Story Logic
            </span>
</div>
<div className="absolute top-16 right-12 flex flex-col items-center gap-3 tech-node" style={{animationDelay: '0.5s'}}>
<div className="w-24 h-24 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full flex items-center justify-center border border-orange-300/30">
<iconify-icon className="text-3xl text-orange-500" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest font-normal text-stone-600">
              Library
            </span>
</div>
<div className="absolute bottom-12 left-32 flex flex-col items-center gap-3 tech-node" style={{animationDelay: '0.8s'}}>
<div className="w-16 h-16 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full flex items-center justify-center">
<div className="w-4 h-4 border border-orange-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
</div>
<span className="text-xs uppercase tracking-widest font-normal text-orange-600">
              Engine
            </span>
</div>
<div className="absolute bottom-20 right-32 flex flex-col items-center gap-3 tech-node" style={{animationDelay: '1.1s'}}>
<div className="w-16 h-16 bg-gradient-to-br from-stone-50/90 to-orange-100/80 rounded-full flex items-center justify-center border border-orange-300/30">
<iconify-icon className="text-xl text-stone-500" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-0 right-1/3 flex flex-col items-center gap-2 tech-node" style={{animationDelay: '1.4s'}}>
<div className="w-12 h-12 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full flex items-center justify-center">
<iconify-icon className="text-lg text-stone-400" icon="solar:atom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute w-[350px] h-[350px] border border-orange-400/20 rounded-full z-0 pointer-events-none border-dashed opacity-50"></div>
<div className="absolute w-[550px] h-[550px] border border-orange-200 rounded-full z-0 pointer-events-none"></div>
</div>
</section><section className="gs-section border-orange-900/10 border-b pt-32 pr-6 pb-32 pl-6 relative" style={{backgroundSize: '64px 64px', backgroundImage: 'linear-gradient(to right, rgba(234, 88, 12, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 88, 12, 0.04) 1px, transparent 1px)'}}>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-20 pl-4 relative section-header">
<div className="absolute top-2 left-0 w-8 h-[2px] bg-orange-500 rounded-full shadow-[0_0_8px_#ea580c]"></div>
<p className="text-xs font-normal tracking-widest text-orange-600 uppercase mb-4 ml-12">Platform Architecture</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-950 mb-6 ml-12">Book Generation</h2>
<p className="text-sm font-light text-stone-600 max-w-xl ml-12 leading-relaxed">
        Discover how our AI safely creates engaging, educational, and personalized stories in seconds for children worldwide.
      </p>
</div>
<div className="relative tech-grid-wrapper rounded-[32px] bg-stone-50/40 backdrop-blur-sm shadow-[0_1rem_3rem_rgba(139,91,47,0.04)] overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-orange-400/40 origin-center grid-line z-20 pointer-events-none" style={{transformOrigin: '50% 50%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-orange-400/40 origin-center grid-line z-20 pointer-events-none" style={{transformOrigin: '50% 50%'}}></div>
<div className="absolute top-0 bottom-0 left-0 w-[1px] bg-orange-400/40 origin-center grid-line z-20 pointer-events-none" style={{transformOrigin: '50% 50%'}}></div>
<div className="absolute top-0 bottom-0 right-0 w-[1px] bg-orange-400/40 origin-center grid-line z-20 pointer-events-none" style={{transformOrigin: '50% 50%'}}></div>

<div className="grid grid-cols-1 lg:grid-cols-3 z-10 relative">

<div className="tech-card flex flex-col group hover:bg-stone-50/60 transition-colors duration-500 lg:border-b-0 text-center border-orange-900/10 border-b pt-10 pr-10 pb-10 pl-10 relative items-center">
<div className="h-48 w-full relative mb-8 flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.2)_0%,transparent_60%)] pointer-events-none"></div>
<svg className="w-48 h-48 absolute transition-transform duration-700 ease-out group-hover:scale-105 z-10" viewbox="0 0 200 200">
<ellipse className="" cx="100" cy="100" fill="none" rx="90" ry="40" stroke="rgba(249,115,22,0.2)" strokeWidth="1" transform="rotate(-20 100 100)"></ellipse>
<ellipse className="animate-[spin_20s_linear_infinite]" cx="100" cy="100" fill="none" rx="80" ry="35" stroke="#f97316" stroke-dasharray="4 8" strokeWidth="1.5" style={{transformOrigin: '100px 100px'}}></ellipse>
<g className="" transform="translate(0, -10)">
<ellipse className="" cx="100" cy="80" fill="none" rx="40" ry="15" stroke="#f97316" strokeWidth="2"></ellipse>
<ellipse className="" cx="100" cy="120" fill="none" rx="40" ry="15" stroke="rgba(249,115,22,0.3)" strokeWidth="1"></ellipse>
<path d="M60 80 L60 120 M140 80 L140 120" stroke="#f97316" stroke-dasharray="2 4" strokeWidth="1"></path>
<path className="" d="M90 70 L90 130 M110 70 L110 130" opacity="0.8" stroke="#fb923c" strokeWidth="2"></path>
<ellipse cx="100" cy="70" fill="#fb923c" rx="10" ry="4"></ellipse>
</g>
<circle className="animate-pulse" cx="30" cy="60" fill="#fb923c" r="2"></circle>
<circle className="animate-pulse" cx="170" cy="140" fill="#f97316" r="1.5"></circle>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-950 mb-4">Language Models</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed mb-8 flex-grow relative z-20">Utilizing safe, fine-tuned AI to generate age-appropriate and educational narratives tailored to your child.</p>
<button className="mt-auto flex items-center justify-center gap-3 text-xs font-normal uppercase tracking-widest text-orange-600 hover:text-stone-900 transition-colors w-full py-3 border border-orange-200/50 rounded-xl bg-stone-50/50 hover:border-orange-400 hover:bg-orange-50/50 group/btn relative z-20">
            Learn More
            <iconify-icon className="text-sm transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-col overflow-hidden border-y lg:border-y-0 lg:border-x transform lg:scale-105 z-10 text-center bg-gradient-to-br from-stone-50/90 to-orange-100/80 border-orange-300/40 pt-10 pr-10 pb-10 pl-10 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.08)] items-center">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.08)_0%,transparent_70%)] pointer-events-none"></div>
<div className="h-48 w-full relative mb-8 flex items-center justify-center" style={{perspective: '1000px'}}>
<div className="relative w-36 h-36 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="absolute w-28 h-28 border border-orange-300 bg-stone-50/50 backdrop-blur-sm rounded-2xl opacity-60"></div>
<div className="absolute w-28 h-28 border border-orange-400/60 bg-gradient-to-br from-stone-50/90 to-orange-100/80 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(234,88,12,0.15)]">
<div className="w-12 h-12 rounded-xl bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] flex items-center justify-center border border-orange-200">
<iconify-icon className="text-xl text-orange-600" icon="solar:box-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-950 mb-4 relative z-20">Generative Art</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed mb-8 flex-grow relative z-20">Real-time generation of vibrant, captivating illustrations that match the story and your child's imagination.</p>
<button className="mt-auto relative z-20 w-full bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 shadow-[0_1rem_2rem_rgba(234,88,12,0.22),inset_0_1px_0_rgba(255,255,255,0.4)] border border-orange-600/40 text-white transition-all hover:border-orange-600/80 hover:shadow-[0_1rem_2.5rem_rgba(234,88,12,0.3)] hover:-translate-y-px font-normal uppercase tracking-widest px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs group">
          Get Started
          <iconify-icon className="text-sm group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="tech-card p-10 flex flex-col items-center text-center group hover:bg-stone-50/60 transition-colors duration-500 relative">
<div className="h-48 w-full relative mb-8 flex items-center justify-center">
<div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<svg className="w-48 h-48 absolute transition-transform duration-700 ease-out group-hover:-translate-y-2 z-10" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="70" stroke="rgba(249,115,22,0.2)" strokeWidth="1"></circle>
<circle className="animate-[spin_25s_linear_infinite_reverse]" cx="100" cy="100" fill="none" r="60" stroke="#f97316" stroke-dasharray="10 20" strokeWidth="2" style={{transformOrigin: '100px 100px'}}></circle>
<g transform="translate(0, 10)">
<ellipse cx="100" cy="60" fill="#fafaf9" rx="40" ry="15" stroke="#f97316" strokeWidth="1.5"></ellipse>
<path d="M60 60 V120 A40 15 0 0 0 140 120 V60" fill="url(#gradOrg)" stroke="rgba(253,186,116,0.5)" strokeWidth="1"></path>
<ellipse cx="100" cy="110" fill="none" opacity="0.5" rx="38" ry="14" stroke="#fb923c" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="120" fill="none" rx="40" ry="15" stroke="#f97316" strokeWidth="1.5"></ellipse>
<g transform="translate(85, 75) scale(0.6)">
<path d="M25 5 C25 5 10 15 10 30 C10 45 25 55 25 55 C25 55 40 45 40 30 C40 15 25 5 25 5 Z" fill="none" stroke="#f97316" strokeWidth="3"></path>
<path d="M25 15 V45" opacity="0.8" stroke="#fb923c" strokeWidth="2"></path>
</g>
</g>
<defs>
<lineargradient id="gradOrg" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#fafaf9', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#ffedd5', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#fafaf9', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-950 mb-4 relative z-20">Content Safety</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed mb-8 flex-grow relative z-20">Strict content filtering and guardrails ensuring a 100% kid-safe reading environment at all times.</p>
<button className="mt-auto flex items-center justify-center gap-3 text-xs font-normal uppercase tracking-widest text-orange-600 hover:text-stone-900 transition-colors w-full py-3 border border-orange-200/50 rounded-xl bg-stone-50/50 hover:border-orange-400 hover:bg-orange-50/50 group/btn relative z-20">
            Learn More
            <iconify-icon className="text-sm transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</section>

<section className="px-6 py-32 gs-section border-b border-orange-900/10 relative">
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-orange-300 bg-[#f6ecdf]"></div>
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 relative z-10">
<p className="text-xs font-normal tracking-widest text-orange-600 uppercase mb-4">
              Platform Metrics
            </p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-stone-950">
              Global Library
            </h2>
<p className="text-sm font-light text-stone-600 max-w-md mx-auto leading-relaxed">
              Statistics from our growing library of AI-generated adventures read by kids everywhere.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.08)] border border-orange-300/30 backdrop-blur-2xl rounded-[24px] p-8 text-center flex flex-col items-center">
<div className="w-16 h-16 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-600" icon="solar:book-linear"></iconify-icon>
</div>
<div className="text-4xl font-medium tracking-tight text-stone-950 mb-2">
                1M+
              </div>
<div className="text-xs font-normal tracking-widest uppercase text-stone-500">
                Stories Read
              </div>
</div>
<div className="bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.08)] border border-orange-300/30 backdrop-blur-2xl rounded-[24px] p-8 text-center flex flex-col items-center">
<div className="w-16 h-16 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-600" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="text-4xl font-medium tracking-tight text-stone-950 mb-2">
                &lt;5s
              </div>
<div className="text-xs font-normal tracking-widest uppercase text-stone-500">
                Generation Time
              </div>
</div>
<div className="bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.08)] border border-orange-300/30 backdrop-blur-2xl rounded-[24px] p-8 text-center flex flex-col items-center">
<div className="w-16 h-16 bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="text-4xl font-medium tracking-tight text-stone-950 mb-2">
                100%
              </div>
<div className="text-xs font-normal tracking-widest uppercase text-stone-500">
                Kid-Safe
              </div>
</div>
</div>
</div>
</section>
<footer className="px-6 pb-12 pt-24 gs-section relative">
<div className="md:p-14 overflow-hidden group text-stone-900 bg-gradient-to-br from-stone-50/90 to-orange-100/80 max-w-5xl border-orange-300/30 border rounded-[24px] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_1.4rem_4rem_rgba(139,91,47,0.08)] backdrop-blur-2xl">
<div className="absolute -right-10 -bottom-16 text-[12rem] font-medium text-stone-900/[0.03] leading-none pointer-events-none select-none tracking-tight">
    TALE
  </div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4 flex flex-col items-start gap-6">
<div className="bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 px-6 py-4 rounded-xl">
<span className="text-xl font-medium text-stone-950 tracking-tight">
          NEX<span className="text-orange-600 ml-0.5">A</span>
</span>
</div>
<p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs">
        Crafting personalized digital storybooks through advanced AI and beautiful generative art. We build infinite, immersive adventures.
      </p>
<div className="flex items-center gap-3 text-xs font-normal text-stone-500 uppercase tracking-widest mt-2">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="map-pin"></i>
<span className="">San Francisco, CA</span>
</div>
<div className="flex items-center gap-3 text-xs font-normal text-stone-500 uppercase tracking-widest">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="mail"></i>
<span className="">hello@nexabooks.com</span>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-4">
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-2">Platform</h3>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Story Engine</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Voice Cloning</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Generative Art</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Library</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-2">Resources</h3>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Documentation</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Blog</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Community</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Help Center</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">API Status</a>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-2">Company</h3>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">About</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Careers</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Press</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Partners</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-2">Legal</h3>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Privacy</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Terms</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Cookie Policy</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Security</a>
<a className="text-sm font-light text-stone-500 hover:text-orange-600 transition-colors" href="#">Compliance</a>
</div>
</div>
</div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-t border-orange-200/60 pt-10">
<div className="flex flex-col md:flex-row items-center gap-5 w-full lg:w-auto">
<span className="text-xs uppercase tracking-widest font-normal text-stone-500">
        Newsletter
      </span>
<div className="flex bg-stone-50/70 shadow-[inset_0_2px_10px_rgba(139,91,47,0.06)] border border-orange-300/30 rounded-md p-1 w-full md:w-[320px]">
<input className="bg-transparent border-none outline-none text-xs px-4 w-full placeholder:text-stone-400 text-stone-900 tracking-widest uppercase" placeholder="YOUR@EMAIL.COM" type="email"/>
<button className="bg-orange-500/10 text-orange-600 text-xs uppercase tracking-widest font-normal px-5 py-2.5 rounded border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all">
          SUBSCRIBE
        </button>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3">
<a className="w-10 h-10 rounded-md bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-sm border border-orange-300/30 text-stone-500 flex items-center justify-center hover:text-orange-600 hover:border-orange-400/50 transition-all" href="#">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="link-outline" height="16" strokeWidth="2" style={{color: 'rgb(234, 88, 12)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z" fill="#ea580c"></path><path d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837" fill="#ea580c"></path></svg>
</a>
<a className="w-10 h-10 rounded-md bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-sm border border-orange-300/30 text-stone-500 flex items-center justify-center hover:text-orange-600 hover:border-orange-400/50 transition-all" href="#">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="camera-minimalistic-outline" height="16" strokeWidth="2" style={{color: 'rgb(234, 88, 12)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M8.75 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1.208 1.75h4.083c1.37 0 2.454 0 3.32.088c.889.09 1.63.28 2.278.713c.518.346.964.792 1.31 1.31c.433.648.622 1.39.713 2.277c.088.867.088 1.952.088 3.322v.082c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088H9.958c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.085c0-1.369 0-2.453.088-3.32c.09-.887.28-1.628.712-2.276a4.8 4.8 0 0 1 1.31-1.31c.65-.433 1.39-.622 2.278-.713c.866-.088 1.951-.088 3.32-.088M6.79 6.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.897c-.241.36-.39.826-.468 1.594c-.08.782-.08 1.79-.08 3.21V13c0 1.42 0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08h4c1.42 0 2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.595a3.3 3.3 0 0 0-.897-.897c-.36-.241-.826-.39-1.595-.467c-.782-.08-1.79-.08-3.21-.08h-4c-1.42 0-2.429 0-3.21.08M12 10.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m8.5-3a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75" fill="#ea580c" fill-rule="evenodd"></path></svg>
</a>
<a className="w-10 h-10 rounded-md bg-gradient-to-br from-stone-50/90 to-orange-100/80 shadow-sm border border-orange-300/30 text-stone-500 flex items-center justify-center hover:text-orange-600 hover:border-orange-400/50 transition-all" href="#">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="share-outline" height="16" strokeWidth="2" style={{color: 'rgb(234, 88, 12)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16.5 2.25a3.25 3.25 0 0 0-3.2 3.824L8.57 9.386l-.068.053a3.25 3.25 0 1 0 0 5.121l.068.054l4.73 3.312q-.05.28-.05.574a3.25 3.25 0 1 0 .667-1.973L9.438 13.39c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1 0 16.5 2.25M14.75 5.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M6.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m10 6.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" fill="#ea580c" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-orange-200/40 text-[11px] text-stone-500 font-light tracking-wider">
<span className="uppercase">© 2024 Nexa Inc. All rights reserved.</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="uppercase">All systems operational</span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
