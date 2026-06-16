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



    function switchTab(tabId) {
      for(let i=1; i<=3; i++) {
        let viz = document.getElementById('viz-' + i);
        let tab = document.getElementById('tab-' + i);
        let ind = tab.querySelector('.viz-indicator');
        
        if(i === tabId) {
          // Show viz content
          viz.classList.remove('hidden');
          viz.classList.add('flex', 'animate-viz-fade-in');
          
          // Style active tab
          tab.classList.add('border-indigo-500/30');
          tab.classList.remove('border-white/10');
          
          // Style active indicator
          ind.classList.add('bg-indigo-500', 'shadow-[0_0_15px_rgba(99,102,241,0.5)]');
          ind.classList.remove('bg-slate-800', 'border', 'border-white/20');
        } else {
          // Hide viz content
          viz.classList.add('hidden');
          viz.classList.remove('flex', 'animate-viz-fade-in');
          
          // Style inactive tab
          tab.classList.add('border-white/10');
          tab.classList.remove('border-indigo-500/30');
          
          // Style inactive indicator
          ind.classList.add('bg-slate-800', 'border', 'border-white/20');
          ind.classList.remove('bg-indigo-500', 'shadow-[0_0_15px_rgba(99,102,241,0.5)]');
        }
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  


    (function() {
      const toggle = document.getElementById('billing-toggle');
      const proPrice = document.getElementById('pro-price');
      const studioPrice = document.getElementById('studio-price');
      const proPeriod = document.getElementById('pro-period');
      const studioPeriod = document.getElementById('studio-period');
      const labelMonthly = document.getElementById('label-monthly');
      const labelAnnually = document.getElementById('label-annually');

      if(toggle && proPrice && studioPrice) {
        toggle.addEventListener('change', (e) => {
          
          // Re-trigger animation
          proPrice.classList.remove('price-pop');
          studioPrice.classList.remove('price-pop');
          void proPrice.offsetWidth;
          void studioPrice.offsetWidth;
          proPrice.classList.add('price-pop');
          studioPrice.classList.add('price-pop');

          if (e.target.checked) {
            proPrice.innerHTML = '$39';
            studioPrice.innerHTML = '$159';
            proPeriod.innerHTML = '/mo<br><span class="text-[10px] text-indigo-400 block -mt-1">billed annually</span>';
            studioPeriod.innerHTML = '/mo<br><span class="text-[10px] text-indigo-400 block -mt-1">billed annually</span>';
            
            labelAnnually.classList.add('text-white', 'bg-white/10');
            labelAnnually.classList.remove('text-slate-400');
            labelMonthly.classList.remove('text-white', 'bg-white/10');
            labelMonthly.classList.add('text-slate-400');
          } else {
            proPrice.innerHTML = '$49';
            studioPrice.innerHTML = '$199';
            proPeriod.innerHTML = '/mo';
            studioPeriod.innerHTML = '/mo';

            labelMonthly.classList.add('text-white', 'bg-white/10');
            labelMonthly.classList.remove('text-slate-400');
            labelAnnually.classList.remove('text-white', 'bg-white/10');
            labelAnnually.classList.add('text-slate-400');
          }
        });
      }
    })();
  


    (() => {
      const codeEl = document.querySelector("#typing-code");
      if (!codeEl) return;

      const fullCode = `import { SpatialProvider, GlassPanel } from '@nova/core';

export default function App() {
  return (
    <SpatialProvider engine="webgl2" shadows>
      <div className="relative z-10">
        <GlassPanel 
          thickness={2.5} 
          roughness={0.1}
        >
          <h1>Hello Dimension</h1>
        </GlassPanel>
      </div>
    </SpatialProvider>
  );
}`;

      let index = 0;
      let started = false;

      function escapeHTML(str) {
        return str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

      function highlight(code) {
        return escapeHTML(code)
          .replace(/\b(import|from|export default function|return)\b/g, '<span class="text-pink-400">$1</span>')
          .replace(/('@nova\/core'|"webgl2"|"relative z-10")/g, '<span class="text-emerald-300">$1</span>')
          .replace(/\b(App)\b/g, '<span class="text-indigo-300">$1</span>')
          .replace(/\b(engine|shadows|className|thickness|roughness)\b/g, '<span class="text-indigo-200">$1</span>')
          .replace(/(2\.5|0\.1)/g, '<span class="text-orange-300">$1</span>')
          .replace(/(&lt;\/?[^&]+?&gt;)/g, '<span class="text-blue-300">$1</span>');
      }

      function typeCode() {
        codeEl.innerHTML = highlight(fullCode.slice(0, index));
        index++;

        if (index <= fullCode.length) {
          setTimeout(typeCode, 18);
        }
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            started = true;
            typeCode();
            observer.disconnect();
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(codeEl);
    })();
  


      // --- GSAP ScrollTrigger Animations ---
      gsap.registerPlugin(ScrollTrigger);

      // Hero Word Reveal
      const heroTl = gsap.timeline({
          scrollTrigger: { trigger: '.hero-heading', start: 'top 85%' },
          defaults: { ease: 'power4.out' }
      });

      heroTl.to('.hero-heading .reveal-word', {
          y: '0%', duration: 1.2, stagger: 0.08, delay: 0.2
      })
      .to('.gs-reveal', {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      }, "-=1");

      // Generic Section Fade-ins
      gsap.utils.toArray('.gs-fade').forEach(element => {
          gsap.fromTo(element,
              { opacity: 0, y: 20 },
              {
                  opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                  scrollTrigger: { trigger: element, start: 'top 85%' }
              }
          );
      });

      // --- Three.js Custom Implementation (Preserved from source) ---
      const hexToNormalizedRGB = hex => {
          const clean = hex.replace('#', '');
          const r = parseInt(clean.substring(0, 2), 16);
          const g = parseInt(clean.substring(2, 4), 16);
          const b = parseInt(clean.substring(4, 6), 16);
          return [r / 255, g / 255, b / 255];
      };

      function extendMaterial(BaseMaterial, cfg) {
          const physical = THREE.ShaderLib.physical;
          const baseVert = physical.vertexShader;
          const baseFrag = physical.fragmentShader;
          const baseUniforms = physical.uniforms;
          const baseDefines = physical.defines || {};

          const uniforms = THREE.UniformsUtils.clone(baseUniforms);
          const defaults = new BaseMaterial(cfg.material || {});

          if (defaults.color) uniforms.diffuse.value = defaults.color;
          if ('roughness' in defaults) uniforms.roughness.value = defaults.roughness;
          if ('metalness' in defaults) uniforms.metalness.value = defaults.metalness;

          Object.entries(cfg.uniforms || {}).forEach(([key, u]) => {
              uniforms[key] = u !== null && typeof u === 'object' && 'value' in u ? u : { value: u };
          });

          let vert = `${cfg.header}\n${cfg.vertexHeader || ''}\n${baseVert}`;
          let frag = `${cfg.header}\n${cfg.fragmentHeader || ''}\n${baseFrag}`;

          for (const [inc, code] of Object.entries(cfg.vertex || {})) {
              vert = vert.replace(inc, `${inc}\n${code}`);
          }
          for (const [inc, code] of Object.entries(cfg.fragment || {})) {
              frag = frag.replace(inc, `${inc}\n${code}`);
          }

          return new THREE.ShaderMaterial({
              defines: { ...baseDefines }, uniforms, vertexShader: vert, fragmentShader: frag, lights: true, fog: !!cfg.material?.fog
          });
      }

      const noiseShader = `
          float random (in vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123); }
          float noise (in vec2 st) {
              vec2 i = floor(st); vec2 f = fract(st); float a = random(i); float b = random(i + vec2(1.0, 0.0)); float c = random(i + vec2(0.0, 1.0)); float d = random(i + vec2(1.0, 1.0));
              vec2 u = f * f * (3.0 - 2.0 * f); return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }
          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
          vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
          float cnoise(vec3 P){
              vec3 Pi0 = floor(P); vec3 Pi1 = Pi0 + vec3(1.0); Pi0 = mod(Pi0, 289.0); Pi1 = mod(Pi1, 289.0);
              vec3 Pf0 = fract(P); vec3 Pf1 = Pf0 - vec3(1.0); vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x); vec4 iy = vec4(Pi0.yy, Pi1.yy);
              vec4 iz0 = Pi0.zzzz; vec4 iz1 = Pi1.zzzz; vec4 ixy = permute(permute(ix) + iy); vec4 ixy0 = permute(ixy + iz0); vec4 ixy1 = permute(ixy + iz1);
              vec4 gx0 = ixy0 / 7.0; vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5; gx0 = fract(gx0); vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0); vec4 sz0 = step(gz0, vec4(0.0));
              gx0 -= sz0 * (step(0.0, gx0) - 0.5); gy0 -= sz0 * (step(0.0, gy0) - 0.5); vec4 gx1 = ixy1 / 7.0; vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5; gx1 = fract(gx1);
              vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1); vec4 sz1 = step(gz1, vec4(0.0)); gx1 -= sz1 * (step(0.0, gx1) - 0.5); gy1 -= sz1 * (step(0.0, gy1) - 0.5);
              vec3 g000 = vec3(gx0.x,gy0.x,gz0.x); vec3 g100 = vec3(gx0.y,gy0.y,gz0.y); vec3 g010 = vec3(gx0.z,gy0.z,gz0.z); vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
              vec3 g001 = vec3(gx1.x,gy1.x,gz1.x); vec3 g101 = vec3(gx1.y,gy1.y,gz1.y); vec3 g011 = vec3(gx1.z,gy1.z,gz1.z); vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
              vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110))); g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
              vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111))); g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
              float n000 = dot(g000, Pf0); float n100 = dot(g100, vec3(Pf1.x,Pf0.yz)); float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z)); float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
              float n001 = dot(g001, vec3(Pf0.xy,Pf1.z)); float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z)); float n011 = dot(g011, vec3(Pf0.x,Pf1.yz)); float n111 = dot(g111, Pf1);
              vec3 fade_xyz = fade(Pf0); vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z); vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y); float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
              return 2.2 * n_xyz;
          }
      `;

      function createStackedPlanesBufferGeometry(n, width, height, spacing, heightSegments) {
          const geometry = new THREE.BufferGeometry();
          const numVertices = n * (heightSegments + 1) * 2;
          const numFaces = n * heightSegments * 2;
          const positions = new Float32Array(numVertices * 3);
          const indices = new Uint32Array(numFaces * 3);
          const uvs = new Float32Array(numVertices * 2);

          let vertexOffset = 0, indexOffset = 0, uvOffset = 0;
          const totalWidth = n * width + (n - 1) * spacing;
          const xOffsetBase = -totalWidth / 2;

          for (let i = 0; i < n; i++) {
              const xOffset = xOffsetBase + i * (width + spacing);
              const uvXOffset = Math.random() * 300;
              const uvYOffset = Math.random() * 300;

              for (let j = 0; j <= heightSegments; j++) {
                  const y = height * (j / heightSegments - 0.5);
                  positions.set([xOffset, y, 0, xOffset + width, y, 0], vertexOffset * 3);
                  const uvY = j / heightSegments;
                  uvs.set([uvXOffset, uvY + uvYOffset, uvXOffset + 1, uvY + uvYOffset], uvOffset);

                  if (j < heightSegments) {
                      const a = vertexOffset, b = vertexOffset + 1, c = vertexOffset + 2, d = vertexOffset + 3;
                      indices.set([a, b, c, c, b, d], indexOffset);
                      indexOffset += 6;
                  }
                  vertexOffset += 2; uvOffset += 4;
              }
          }
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
          geometry.setIndex(new THREE.BufferAttribute(indices, 1));
          geometry.computeVertexNormals();
          return geometry;
      }

      const canvas = document.getElementById('bg-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2('#020617', 0.015);
      const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 20);

      scene.add(new THREE.AmbientLight(0xffffff, 1));
      const dirLight = new THREE.DirectionalLight('#a5b4fc', 1.2);
      dirLight.position.set(0, 3, 10);
      scene.add(dirLight);

      const beamProps = { width: 2.5, height: 35, count: 12, speed: 0.8, noiseIntensity: 1.8, scale: 0.15, rotation: 12 };

      const beamMaterial = extendMaterial(THREE.MeshStandardMaterial, {
          header: `varying vec3 vEye; varying float vNoise; varying vec2 vUv; varying vec3 vPosition; uniform float time; uniform float uSpeed; uniform float uNoiseIntensity; uniform float uScale; ${noiseShader}`,
          vertexHeader: `
              float getPos(vec3 pos) { vec3 noisePos = vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale; return cnoise(noisePos); }
              vec3 getCurrentPos(vec3 pos) { vec3 newpos = pos; newpos.z += getPos(pos); return newpos; }
              vec3 getNormal(vec3 pos) { vec3 curpos = getCurrentPos(pos); vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0)); vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0)); vec3 tangentX = normalize(nextposX - curpos); vec3 tangentZ = normalize(nextposZ - curpos); return normalize(cross(tangentZ, tangentX)); }
          `,
          vertex: {
              '#include <begin_vertex>': `transformed.z += getPos(transformed.xyz);`,
              '#include <beginnormal_vertex>': `objectNormal = getNormal(position.xyz);`
          },
          fragment: {
              '#include <dithering_fragment>': `float randomNoise = noise(gl_FragCoord.xy); gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`
          },
          material: { fog: true, transparent: true },
          uniforms: {
              diffuse: { value: new THREE.Color(...hexToNormalizedRGB('#020617')) }, time: { value: 0 }, roughness: { value: 0.3 }, metalness: { value: 0.4 },
              uSpeed: { value: beamProps.speed }, envMapIntensity: { value: 10 }, uNoiseIntensity: { value: beamProps.noiseIntensity }, uScale: { value: beamProps.scale }
          }
      });

      const mesh = new THREE.Mesh(createStackedPlanesBufferGeometry(beamProps.count, beamProps.width, beamProps.height, 0, 120), beamMaterial);
      mesh.rotation.z = THREE.MathUtils.degToRad(beamProps.rotation);
      mesh.position.x = 8;
      mesh.scale.set(1.5, 1.5, 1);
      scene.add(mesh);

      // Pointer Interaction Parallax
      let mouseX = 0; let mouseY = 0;
      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      const clock = new THREE.Clock();
      function animate() {
          requestAnimationFrame(animate);
          const delta = clock.getDelta();
          if (beamMaterial.uniforms.time) beamMaterial.uniforms.time.value += 0.1 * delta;

          // Subtle Camera Parallax
          camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
          camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

          renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });
    


(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }

  function setupVideo(video) {
    if (video.__auraVideoReady === true) return;
    video.__auraVideoReady = true;
    video.removeAttribute("data-aura-video-ready");
    video.removeAttribute("data-aura-video-played");
    video.muted = true;
    video.playsInline = true;

    var preset = video.dataset.auraVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () {
        playVideo(video);
      });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__auraVideoPlayed === true) {
            return;
          }
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__auraVideoPlayed = true;
      }, { once: true });
    }

    observer.observe(video);
  }

  function setupVideos() {
    document
      .querySelectorAll("video[data-aura-video-preset]")
      .forEach(setupVideo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none" height="1636" id="bg-canvas" style={{width: '1512px', height: '818px'}} width="3024"></canvas>

<div className="relative z-10 max-w-[1440px] mx-auto border-x border-white/5 min-h-screen bg-slate-950/40 backdrop-blur-[2px]">

<header className="sticky top-0 z-50 border-b border-white/5 glass-surface">
<div className="px-6 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-xs tracking-tight text-slate-100 uppercase letter-spacing-wider">
              Nova UI
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 tracking-wide uppercase">
<a className="hover:text-slate-100 transition-colors duration-300" href="#platform">
              Platform
            </a>
<a className="hover:text-slate-100 transition-colors duration-300" href="#bento">
              Capabilities
            </a>
<a className="hover:text-slate-100 transition-colors duration-300" href="#pricing">
              Pricing
            </a>
<a className="hover:text-slate-100 transition-colors duration-300" href="#story">
              Story
            </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#">
              Log in
            </a>
<button className="bg-slate-100 text-slate-950 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white transition-all duration-300 active:scale-95">
              Access Beta
            </button>
</div>
</div>
</header>

<section className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center border-b border-white/5">
<div className="corner-mark corner-bl"></div>
<div className="corner-mark corner-br"></div>
<div className="w-full lg:w-3/4 xl:w-2/3">

<div className="gradient-shell rounded-full inline-block mb-8 opacity-0 gs-reveal translate-y-4">
<div className="flex items-center gap-3 px-2 py-1.5 pr-4 rounded-full bg-slate-950/80 backdrop-blur-md cursor-default">
<span className="bg-indigo-500 text-indigo-50 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-widest leading-tight">
                V 2.0
              </span>
<span className="text-xs font-medium text-slate-300 tracking-wide">
                Fluid geometry engine released
              </span>
</div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[84px] font-semibold tracking-tighter text-slate-100 leading-[1.05] mb-8 flex flex-wrap gap-x-[0.2em] gap-y-2 hero-heading">
<span className="inline-block overflow-hidden">
<span className="reveal-word block translate-y-[110%]">Fluid</span>
</span>
<span className="inline-block overflow-hidden">
<span className="reveal-word block translate-y-[110%]">
                dimensions
              </span>
</span>
<span className="w-full hidden md:block h-0"></span>
<span className="inline-block overflow-hidden">
<span className="reveal-word block translate-y-[110%] text-indigo-400">
                for
              </span>
</span>
<span className="inline-block overflow-hidden">
<span className="reveal-word block translate-y-[110%]">modern</span>
</span>
<span className="inline-block overflow-hidden">
<span className="reveal-word block translate-y-[110%]">spaces</span>
</span>
</h1>

<p className="text-base md:text-lg text-slate-400 font-normal max-w-xl mb-12 opacity-0 gs-reveal translate-y-4 leading-relaxed">
            Elevate your interfaces with physically based rendering, dynamic
            lighting, and seamless timeline animations directly out of the box.
            Designed for the agency studio standard.
          </p>

<div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 gs-reveal translate-y-4">
<button className="w-full sm:w-auto bg-slate-100 text-slate-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Initialize Framework
            </button>
<div className="w-full sm:w-auto gradient-shell rounded-full">
<button className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium text-slate-300 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800 hover:text-white transition-colors duration-300 active:scale-95 flex items-center justify-center gap-2 group">
                Explore documentation
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row gap-8 gs-fade border-white/5 border-b py-12 px-6 relative items-center justify-between overflow-hidden">
<style>
          @keyframes scroll-logos {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          .animate-scroll-logos {
              animation: scroll-logos 30s linear infinite;
          }
          .animate-scroll-logos:hover {
              animation-play-state: paused;
          }
        </style>
<div className="shrink-0 z-10 md:mr-4">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Trusted by industry leaders
          </p>
</div>
<div className="flex-1 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
<div className="flex gap-12 md:gap-16 w-max animate-scroll-logos opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center py-2">

<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:spacex"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:nasa"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:uber"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:sony"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:bose"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:dji"></iconify-icon>

<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:spacex"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:nasa"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:uber"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:sony"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:bose"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:dji"></iconify-icon>

<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:spacex"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:nasa"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:uber"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:sony"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:bose"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:dji"></iconify-icon>

<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:spacex"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:nasa"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:uber"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:sony"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:bose"></iconify-icon>
<iconify-icon className="text-3xl text-slate-300 hover:text-white transition-colors" icon="simple-icons:dji"></iconify-icon>
</div>
</div>
</section>

<section className="relative border-b border-white/5 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/5" id="story">

<div className="lg:col-span-4 p-8 md:p-16 relative">
<div className="sticky top-32">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
                Origin
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-100">
              The shift from flat to spatial.
            </h2>
</div>
</div>

<div className="lg:col-span-8 p-8 md:p-16 glass-surface relative gs-fade">
<div className="max-w-2xl space-y-8 text-sm md:text-base text-slate-400 font-normal leading-relaxed">
<p className="">
              For a decade, digital product design optimized for the flat plane.
              We constrained our creativity to two dimensions, focusing on rigid
              grids and static states. But human perception is inherently
              spatial. We understand depth, material, and light implicitly.
            </p>
<p>
              Nova was born from a fundamental question: What if interface
              primitives behaved like physical materials? What if a card wasn't
              just a container, but a pane of glass refracting the environment
              behind it?
            </p>
<div className="w-full aspect-video rounded-xl overflow-hidden relative my-12 gradient-shell">
<video aria-label="Abstract rendering" className="w-full h-full object-cover rounded-[15px] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a69ac26f-ec52-420d-a99c-7cf295fbcb46/1600w.jpg" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1780417012972-460a5621-eeae-41bc-b988-d2ea224c1b83.mp4"></video>
</div>
<p>
              By combining hardware-accelerated WebGL with standard DOM
              elements, we bridge the gap between high-end experiential sites
              and functional product interfaces. It’s not just about aesthetics;
              it’s about providing spatial context to user interactions.
            </p>
</div>
</div>
</section>
<section className="relative border-b border-white/5 py-24 px-6 md:px-12 overflow-hidden bg-slate-950/40" id="architecture">
<style>
    @keyframes globe-spin {
      0% { transform: rotateX(15deg) rotateY(0deg); }
      100% { transform: rotateX(15deg) rotateY(360deg); }
    }
    .animate-globe {
      animation: globe-spin 30s linear infinite;
      transform-style: preserve-3d;
    }
    @keyframes float-up {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float-up 6s ease-in-out infinite;
    }
    @keyframes viz-fade-in {
      from { opacity: 0; transform: scale(0.98) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-viz-fade-in {
      animation: viz-fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    @keyframes dash-move {
      to { stroke-dashoffset: -16; }
    }
    .animate-dash-move {
      animation: dash-move 1s linear infinite;
    }
  </style>
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center gs-fade">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-light text-indigo-400 uppercase tracking-widest">
          Architecture
        </span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-100 mb-6">
        Engineered for depth.
      </h2>
<p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
        Break free from the z-index constraint. Nova’s engine maps HTML
        nodes directly to WebGL contexts, allowing true dimensional
        hierarchy.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">

<div className="space-y-12 gs-fade relative z-10">

<div className="relative pl-8 border-l border-indigo-500/30 cursor-pointer viz-tab group/tab transition-colors duration-300" id="tab-1" onclick="switchTab(1)">
<div className="viz-indicator absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover/tab:scale-110"></div>
<h3 className="text-xl font-light tracking-tight text-slate-100 mb-3 group-hover/tab:text-indigo-300 transition-colors duration-300">
            01. Material Definition
          </h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover/tab:text-slate-300 transition-colors duration-300">
            Declare physically based materials directly in your CSS or
            inline styles. Our parser translates familiar attributes like
            roughness, metalness, and transmission into optimized shader
            code.
          </p>
</div>

<div className="relative pl-8 border-l border-white/10 cursor-pointer viz-tab group/tab transition-colors duration-300" id="tab-2" onclick="switchTab(2)">
<div className="viz-indicator absolute w-3 h-3 bg-slate-800 border border-white/20 rounded-full -left-[6.5px] top-1 transition-all duration-300 group-hover/tab:scale-110"></div>
<h3 className="text-xl font-light tracking-tight text-slate-100 mb-3 group-hover/tab:text-indigo-300 transition-colors duration-300">
            02. Light Transport
          </h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover/tab:text-slate-300 transition-colors duration-300">
            Cast rays natively within the DOM. Shadows and caustics are
            computed in real-time, responding to cursor position and
            scroll velocity without heavy JavaScript overhead.
          </p>
</div>

<div className="relative pl-8 border-l border-white/10 cursor-pointer viz-tab group/tab transition-colors duration-300" id="tab-3" onclick="switchTab(3)">
<div className="viz-indicator absolute w-3 h-3 bg-slate-800 border border-white/20 rounded-full -left-[6.5px] top-1 transition-all duration-300 group-hover/tab:scale-110"></div>
<h3 className="text-xl font-light tracking-tight text-slate-100 mb-3 group-hover/tab:text-indigo-300 transition-colors duration-300">
            03. Post-Processing Pipeline
          </h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover/tab:text-slate-300 transition-colors duration-300">
            Chain bloom, chromatic aberration, and depth of field effects
            using our declarative Node interface. Everything stays
            perfectly synced with your React or Vue component lifecycle.
          </p>
</div>
</div>

<div className="relative aspect-[4/5] lg:aspect-square gradient-shell rounded-3xl p-2 gs-fade delay-100 group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-0"></div>
<div className="glass-surface w-full h-full rounded-[23px] relative overflow-hidden flex items-center justify-center p-4 md:p-8 z-10 border border-white/5 bg-slate-950/60">
<div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">

<div className="viz-content relative w-full h-full flex items-center justify-center scale-90 sm:scale-95 md:scale-100 animate-viz-fade-in" id="viz-1">

<div className="relative w-64 h-64 animate-globe group-hover:scale-105 transition-transform duration-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-500/30 rounded-full [transform:rotateX(90deg)_translateZ(0px)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[222px] h-[222px] border border-indigo-500/20 rounded-full [transform:rotateX(90deg)_translateZ(64px)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[222px] h-[222px] border border-indigo-500/20 rounded-full [transform:rotateX(90deg)_translateZ(-64px)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[169px] h-[169px] border border-indigo-500/10 rounded-full [transform:rotateX(90deg)_translateZ(96px)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[169px] h-[169px] border border-indigo-500/10 rounded-full [transform:rotateX(90deg)_translateZ(-96px)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(0deg)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(30deg)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(60deg)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(90deg)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(120deg)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-400/20 rounded-full [transform:rotateY(150deg)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 border border-white/20 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(165,180,252,0.4)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-indigo-400/30 rounded-full animate-[spin_10s_linear_infinite_reverse] [transform:rotateX(45deg)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)] [transform:rotateY(60deg)_rotateX(30deg)_translateZ(128px)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)] [transform:rotateY(150deg)_rotateX(-45deg)_translateZ(128px)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,1)] [transform:rotateY(240deg)_rotateX(60deg)_translateZ(128px)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] [transform:rotateY(300deg)_rotateX(-15deg)_translateZ(128px)] animate-pulse"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 overflow-visible [transform:rotateX(90deg)_translateZ(20px)]" viewbox="0 0 256 256">
<circle className="animate-[spin_15s_linear_infinite]" cx="128" cy="128" fill="none" r="118" stroke="rgba(99,102,241,0.5)" stroke-dasharray="2 6" strokeWidth="1"></circle>
</svg>
</div>

<div className="absolute top-4 sm:top-8 right-2 sm:right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 w-36 sm:w-44 animate-float z-20 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] sm:text-[11px] font-mono text-indigo-400 uppercase tracking-wider">Node_44</span>
<span className="flex items-center gap-1.5">
<span className="text-[9px] sm:text-[10px] text-emerald-400">Active</span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[78%] rounded-full"></div>
</div>
<div className="text-[9px] sm:text-[10px] text-slate-400 flex justify-between">
<span>Throughput</span>
<span className="text-slate-200 font-mono">9.2 TB/s</span>
</div>
</div>
<div className="absolute bottom-4 sm:bottom-10 left-2 sm:left-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 w-32 sm:w-40 animate-float z-20 group-hover:translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700" style={{animationDelay: '-3s'}}>
<div className="flex items-center gap-2 mb-3">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="activity"></i>
<span className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider">Sync_Rate</span>
</div>
<div className="flex items-end gap-1.5 h-6 sm:h-8">
<div className="w-1.5 sm:w-2 bg-indigo-500/40 rounded-t-sm h-[30%]"></div>
<div className="w-1.5 sm:w-2 bg-indigo-500/60 rounded-t-sm h-[60%]"></div>
<div className="w-1.5 sm:w-2 bg-indigo-500/40 rounded-t-sm h-[45%]"></div>
<div className="w-1.5 sm:w-2 bg-indigo-400 rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
<div className="w-1.5 sm:w-2 bg-indigo-500/80 rounded-t-sm h-[75%]"></div>
<div className="w-1.5 sm:w-2 bg-indigo-500/40 rounded-t-sm h-[50%]"></div>
</div>
</div>
</div>

<div className="viz-content hidden relative w-full h-full items-center justify-center scale-90 sm:scale-95 md:scale-100" id="viz-2">
<div className="relative w-64 h-64 [perspective:1000px] flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-56 border border-indigo-400/20 bg-indigo-500/5 backdrop-blur-sm [transform:rotateX(70deg)_rotateZ(45deg)] rounded-2xl shadow-[inset_0_0_30px_rgba(99,102,241,0.1)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem] rounded-2xl"></div>
</div>

<div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-200 rounded-full shadow-[0_0_30px_rgba(253,224,71,1)] animate-pulse">
<div className="absolute inset-0 rounded-full border border-yellow-100 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>

<div className="absolute inset-0 overflow-visible">
<svg className="w-full h-full" viewbox="0 0 256 256">
<defs>
<lineargradient id="beam-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(253,224,71,0.6)"></stop>
<stop offset="100%" stop-color="rgba(253,224,71,0)"></stop>
</lineargradient>
</defs>

<polygon fill="url(#beam-grad)" opacity="0.5" points="128,40 100,180 156,180"></polygon>

<line className="animate-dash-move" stroke="rgba(253,224,71,0.8)" stroke-dasharray="4 4" strokeWidth="1.5" x1="128" x2="128" y1="40" y2="180"></line>
<line stroke="rgba(253,224,71,0.4)" strokeWidth="1" x1="128" x2="90" y1="40" y2="160"></line>
<line stroke="rgba(253,224,71,0.4)" strokeWidth="1" x1="128" x2="166" y1="40" y2="160"></line>

<line className="animate-dash-move" stroke="rgba(165,180,252,0.6)" stroke-dasharray="3 3" strokeWidth="1" x1="128" x2="60" y1="180" y2="100"></line>
<line className="animate-dash-move" stroke="rgba(165,180,252,0.6)" stroke-dasharray="3 3" strokeWidth="1" style={{animationDirection: 'reverse'}} x1="128" x2="196" y1="180" y2="100"></line>
</svg>
</div>

<div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-16 h-8 bg-yellow-400/40 rounded-full blur-xl [transform:rotateX(70deg)]"></div>
<div className="absolute top-[176px] left-1/2 -translate-x-1/2 w-6 h-3 bg-white/60 rounded-full blur-sm [transform:rotateX(70deg)]"></div>
</div>

<div className="absolute top-4 sm:top-8 left-2 sm:left-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 w-36 sm:w-44 animate-float z-20 group-hover:-translate-y-1 transition-all duration-700">
<div className="flex items-center gap-2 mb-3">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="sun"></i>
<span className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider">Ray_Count</span>
</div>
<div className="flex items-end justify-between">
<div className="text-xl font-light text-slate-100">2.4M</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 mb-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12%
                  </div>
</div>
</div>
<div className="absolute bottom-4 sm:bottom-10 right-2 sm:right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 w-32 sm:w-40 animate-float z-20 group-hover:translate-y-1 transition-all duration-700" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-2 mb-3">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="zap"></i>
<span className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider">Bounces</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-gradient-to-r from-indigo-500 to-yellow-400 rounded-full"></div>
</div>
<div className="text-[10px] text-slate-400 mt-2 text-right font-mono">Max: 8</div>
</div>
</div>

<div className="viz-content hidden relative w-full h-full items-center justify-center scale-90 sm:scale-95 md:scale-100" id="viz-3">
<div className="relative w-64 h-64 flex flex-col items-center justify-center [perspective:1000px] group-hover:scale-105 transition-transform duration-1000">

<div className="absolute w-[2px] h-[100px] bg-gradient-to-b from-cyan-400/50 via-pink-400/50 to-indigo-400/50 z-[-1] opacity-50 group-hover:h-[160px] transition-all duration-700"></div>

<div className="absolute w-44 h-44 border border-white/10 bg-slate-800/60 rounded-xl [transform:rotateX(60deg)_rotateZ(45deg)_translateZ(-50px)] flex items-center justify-center group-hover:[transform:rotateX(60deg)_rotateZ(45deg)_translateZ(-80px)] transition-all duration-700 shadow-xl">
<div className="w-20 h-20 bg-indigo-500 rounded-full opacity-80"></div>
<span className="text-[10px] font-mono text-slate-400 absolute bottom-2 right-2 [transform:rotateZ(-45deg)] uppercase tracking-wider">Albedo</span>
</div>

<div className="absolute w-44 h-44 border border-pink-500/30 bg-pink-500/10 rounded-xl [transform:rotateX(60deg)_rotateZ(45deg)_translateZ(0px)] flex items-center justify-center transition-all duration-700 backdrop-blur-sm shadow-[0_0_30px_rgba(236,72,153,0.15)]">
<div className="w-24 h-24 bg-pink-500/40 rounded-full blur-xl"></div>
<span className="text-[10px] font-mono text-pink-400 absolute bottom-2 right-2 [transform:rotateZ(-45deg)] uppercase tracking-wider">Bloom</span>
</div>

<div className="absolute w-44 h-44 border border-cyan-500/40 bg-cyan-500/10 rounded-xl [transform:rotateX(60deg)_rotateZ(45deg)_translateZ(50px)] flex items-center justify-center group-hover:[transform:rotateX(60deg)_rotateZ(45deg)_translateZ(80px)] transition-all duration-700 backdrop-blur-md">
<div className="w-20 h-20 border-2 border-cyan-300 rounded-full [transform:rotateX(-60deg)] animate-[spin_4s_linear_infinite]"></div>
<div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
<span className="text-[10px] font-mono text-cyan-400 absolute bottom-2 right-2 [transform:rotateZ(-45deg)] uppercase tracking-wider">Composite</span>
</div>
</div>

<div className="absolute top-4 sm:top-8 right-2 sm:right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 w-36 sm:w-44 animate-float z-20 group-hover:-translate-y-1 transition-all duration-700">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-pink-400" data-lucide="layers"></i>
<span className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider">Passes</span>
</div>
<span className="text-[9px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Sync</span>
</div>
<div className="space-y-2.5">
<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400">Bloom</span>
<span className="text-slate-200 font-mono">1.2ms</span>
</div>
<div className="h-[1px] w-full bg-white/5"></div>
<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400">DOF</span>
<span className="text-slate-200 font-mono">2.4ms</span>
</div>
<div className="h-[1px] w-full bg-white/5"></div>
<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400">Color</span>
<span className="text-slate-200 font-mono">0.8ms</span>
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

<section className="relative p-6 md:p-12 border-b border-white/5 bg-slate-950/20" id="bento">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 gs-fade">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-100 mb-4">
              Modular capabilities.
            </h2>
<p className="text-slate-400 text-base max-w-md">
              Everything you need to construct premium, responsive spatial
              interfaces.
            </p>
</div>
<button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-2 uppercase tracking-widest transition-colors">
            View all features
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="lg:col-span-2 gradient-shell rounded-2xl group gs-fade">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-white/5 mb-8">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">
                  Hardware Accelerated
                </h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  Leverage the full power of native GPU rendering. Our pipeline
                  is optimized to deliver buttery smooth 120fps experiences even
                  on mobile devices, ensuring your spatial UI never drops a
                  frame.
                </p>
</div>
</div>
</div>

<div className="gradient-shell rounded-2xl group gs-fade delay-100">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-white/5 mb-8">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">
                  Infinite Shaders
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Exposed primitive hooks give you total control over materials,
                  shading, and post-processing nodes.
                </p>
</div>
</div>
</div>

<div className="gradient-shell rounded-2xl group gs-fade">
<div className="glass-surface p-2 rounded-[15px] h-full relative overflow-hidden flex items-center justify-center">
<video aria-label="Interface" className="w-full h-full object-cover rounded-[11px] opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3e1e91d-3090-466e-a38c-e5a88ca445a5_1600w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1780419848299-85b2695e-6b67-4666-bc26-eca29afc4086.mp4"></video>
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>

<div className="gradient-shell rounded-2xl group gs-fade delay-100">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-white/5 mb-8">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">
                  Type-Safe Core
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Built ground-up with rigid typings ensuring your graphical
                  logic remains predictable.
                </p>
</div>
</div>
</div>

<div className="gradient-shell rounded-2xl group gs-fade delay-200">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-white/5 mb-8">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">
                  DOM Syncing
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Automatically map WebGL coordinates to DOM elements for
                  seamless overlay interactions.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative p-6 md:p-12 border-b border-white/5 bg-slate-950/40 overflow-hidden" id="ecosystem">
<style>
    @keyframes marqueeLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes marqueeRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    .animate-marquee-left {
      animation: marqueeLeft 30s linear infinite;
    }

    .animate-marquee-right {
      animation: marqueeRight 30s linear infinite;
    }

    @keyframes dashMove {
      to { stroke-dashoffset: -16; }
    }

    .animate-dash {
      animation: dashMove 1s linear infinite;
    }

    @keyframes pulseGlow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.12);
      }

      50% {
        opacity: 0.8;
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
      }
    }

    .animate-pulse-glow {
      animation: pulseGlow 2s ease-in-out infinite;
    }

    @keyframes float1 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(2deg); }
    }

    .animate-float-1 {
      animation: float1 4s ease-in-out infinite;
    }

    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-6px) rotate(-2deg); }
    }

    .animate-float-2 {
      animation: float2 5s ease-in-out infinite;
    }

    @keyframes typingText {
      0%, 20% {
        width: 0;
        opacity: 1;
      }

      50%, 80% {
        width: 100%;
        opacity: 1;
      }

      100% {
        width: 0;
        opacity: 1;
      }
    }

    .animate-typing {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      animation: typingText 6s steps(40, end) infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .animate-blink {
      animation: blink 1s step-end infinite;
    }

    @keyframes drawChart {
      0%, 20% { stroke-dashoffset: 400; }
      80%, 100% { stroke-dashoffset: 0; }
    }

    .animate-draw-chart {
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      animation: drawChart 6s ease-in-out infinite;
    }

    @keyframes fadeChart {
      0%, 20% { opacity: 0; }
      80%, 100% { opacity: 1; }
    }

    .animate-fade-chart {
      animation: fadeChart 6s ease-in-out infinite;
    }

    @keyframes countUp {
      0% { content: "0"; }
      10% { content: "1,204"; }
      20% { content: "8,432"; }
      30% { content: "24,591"; }
      40% { content: "53,820"; }
      50% { content: "94,103"; }
      60% { content: "142,884"; }
      70% { content: "189,402"; }
      80%, 100% { content: "200,000+"; }
    }

    .animate-counter::after {
      content: "0";
      animation: countUp 6s ease-in-out infinite;
    }
  </style>
<div className="max-w-[1560px] mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 gs-fade">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-normal text-indigo-400 uppercase tracking-widest">
            Ecosystem
          </span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-slate-100 mb-4">
          A complete spatial toolkit.
        </h2>
<p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Stop rebuilding the foundation. Nova ships a cohesive suite of
          surfaces, motion primitives, and integration utilities—optimized
          for depth, light, and performance.
        </p>
</div>
<a className="text-xs font-normal text-indigo-400 hover:text-indigo-300 flex items-center gap-2 uppercase tracking-widest transition-colors" href="#integration">
        See integration
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<article className="lg:col-span-7 gradient-shell rounded-3xl group gs-fade">
<div className="glass-surface rounded-[23px] h-full flex flex-col overflow-hidden relative border border-white/5">
<div className="relative h-[260px] flex items-center justify-center border-b border-white/5 overflow-hidden bg-slate-950/40">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-center gap-4 py-8" style={{transform: 'rotate(-4deg) scale(1.08)', maskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)'}}>
<div className="nova-marquee flex gap-4 w-max items-center animate-marquee-left">
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="layers"></i>
                  Glass Surfaces
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="star"></i>
                  Material Presets
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
                  Scroll Triggers
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Timelines
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="code"></i>
                  Code Blocks
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="image"></i>
                  Media Frames
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="layers"></i>
                  Glass Surfaces
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="star"></i>
                  Material Presets
                </div>
</div>
<div className="nova-marquee-reverse flex gap-4 w-max items-center animate-marquee-right">
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="palette"></i>
                  Theme Tokens
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="cpu"></i>
                  WebGL Mapping
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                  Type-Safe Core
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
                  Controls
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="palette"></i>
                  Theme Tokens
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="cpu"></i>
                  WebGL Mapping
                </div>
</div>
<div className="nova-marquee flex gap-4 w-max items-center animate-marquee-left">
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="atom"></i>
                  Particles
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="zap"></i>
                  Motion Effects
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="folder"></i>
                  motion/
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-100 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="file-text"></i>
                  GlassPanel.tsx
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="folder"></i>
                  webgl/
                </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="atom"></i>
                  Particles
                </div>
</div>
</div>
</div>
<div className="p-8 flex flex-col justify-end flex-1">
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-2">
              Predictable structure
            </h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Logical modules and clear naming make it effortless to locate the
              right surface, utility, or layout primitive.
            </p>
</div>
</div>
</article>

<article className="lg:col-span-5 gradient-shell rounded-3xl group gs-fade delay-100">
<div className="glass-surface rounded-[23px] h-full flex flex-col overflow-hidden relative border border-white/5">
<div className="relative h-[260px] flex items-center justify-center border-b border-white/5 p-8 overflow-hidden">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
<div className="relative w-full max-w-[360px] h-full flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-white/[0.08]" viewbox="0 0 300 240">
<path className="nova-dash animate-dash" d="M150 120 L80 60" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="nova-dash animate-dash" d="M150 120 L220 60" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="nova-dash animate-dash" d="M150 120 L80 180" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="nova-dash animate-dash" d="M150 120 L220 180" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>
<div className="absolute z-10 w-14 h-14 rounded-2xl bg-slate-950/40 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.12)] nova-pulse animate-pulse-glow">
<i className="text-slate-100 w-7 h-7" data-lucide="code"></i>
</div>
<div className="absolute top-[40px] left-[20px] px-4 py-2 rounded-lg bg-slate-950/40 border border-white/10 text-[11px] font-mono text-slate-400 nova-float-1 animate-float-1">
                React
              </div>
<div className="absolute top-[40px] right-[20px] px-4 py-2 rounded-lg bg-slate-950/40 border border-white/10 text-[11px] font-mono text-slate-400 nova-float-2 animate-float-2">
                Vue
              </div>
<div className="absolute bottom-[40px] left-[20px] px-4 py-2 rounded-lg bg-slate-950/40 border border-white/10 text-[11px] font-mono text-slate-400 nova-float-2 animate-float-2">
                Tailwind
              </div>
<div className="absolute bottom-[40px] right-[20px] px-4 py-2 rounded-lg bg-slate-950/40 border border-white/10 text-[11px] font-mono text-slate-400 nova-float-1 animate-float-1">
                Vanilla
              </div>
</div>
</div>
<div className="p-8 flex flex-col justify-end flex-1">
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-2">
              Framework agnostic
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Wrap existing components in a Spatial Provider, or drop down to
              raw HTML/CSS. Nova adapts to your stack—not the other way around.
            </p>
</div>
</div>
</article>

<article className="lg:col-span-7 gradient-shell rounded-3xl group gs-fade delay-200">
<div className="glass-surface rounded-[23px] h-full flex flex-col overflow-hidden relative border border-white/5">
<div className="relative h-[260px] flex items-center justify-center border-b border-white/5 p-6 md:p-8 overflow-hidden">
<div className="w-full max-w-[520px] rounded-xl border border-white/10 bg-slate-950/40 shadow-2xl overflow-hidden flex flex-col h-[160px]">
<div className="h-8 border-b border-white/5 bg-slate-950/60 flex items-center px-4 gap-2">
<i className="text-white/40 w-3 h-3" data-lucide="wand-2"></i>
<span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  Prompt
                </span>
</div>
<div className="p-4 flex flex-col gap-3 font-mono text-[11px] h-full relative">
<div className="text-slate-500 flex gap-2">
<span className="text-white/20">User</span>
<span className="text-slate-300">
                    Compose a glass panel with staged reveal and scroll sync
                  </span>
</div>
<div className="text-slate-500 flex gap-2">
<span className="text-white/20">AI</span>
<span className="text-emerald-300 nova-ai-typewriter animate-typing">&lt;GlassPanel stagedReveal syncScroll /&gt;</span>
<span className="w-1.5 h-3.5 bg-white/60 ml-0.5 inline-block nova-cursor-blink animate-blink"></span>
</div>
</div>
</div>
</div>
<div className="p-8 flex flex-col justify-end flex-1">
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-2">
              LLM-friendly primitives
            </h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Predictable props and semantic structure help tools like Copilot
              or Cursor compose advanced spatial interfaces from your design intent.
            </p>
</div>
</div>
</article>

<article className="lg:col-span-5 gradient-shell rounded-3xl group gs-fade delay-200" id="ecosystem-growth">
<div className="glass-surface rounded-[23px] h-full flex flex-col overflow-hidden relative border border-white/5">
<div className="relative h-[260px] flex flex-col justify-center border-b border-white/5 overflow-hidden pt-8">
<div className="px-8 z-10 flex flex-col gap-1">
<div className="flex items-center gap-2 text-slate-500 text-[11px] font-mono uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="star"></i>
                Adoption
              </div>
<div className="text-[44px] font-normal tracking-tight text-slate-100" id="ecosystem-counter">
<span className="animate-counter"></span>
</div>
</div>
<svg className="absolute bottom-0 left-0 w-full h-[120px]" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="ecosystem-chart-fill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(99,102,241,0.20)"></stop>
<stop offset="100%" stop-color="rgba(99,102,241,0)"></stop>
</lineargradient>
</defs>
<path className="ecosystem-chart-area opacity-0 animate-fade-chart" d="M0,100 L0,80 Q50,75 100,50 T200,10 L200,100 Z" fill="url(#ecosystem-chart-fill)">
</path>
<path className="ecosystem-chart-stroke animate-draw-chart" d="M0,80 Q50,75 100,50 T200,10" fill="none" stroke="rgba(165,180,252,0.55)" strokeLinecap="round" strokeWidth="1.5">
</path>
</svg>
</div>
<div className="p-8 flex flex-col justify-end flex-1">
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-2">
              Accelerating adoption
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Teams standardize on Nova to ship spatial prototypes and
              production builds with the same engine.
            </p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative border-b border-white/5 flex flex-col lg:flex-row">
<div className="lg:w-1/3 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 glass-surface gs-fade">
<h2 className="text-3xl font-medium tracking-tight text-slate-100 mb-6">
            Built by specialists.
          </h2>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
            A collective of creative technologists, former game engine
            developers, and product designers obsessed with the intersection of
            performance and aesthetics.
          </p>
<a className="text-xs font-medium text-slate-100 underline decoration-white/20 underline-offset-4 hover:decoration-white transition-colors" href="#">
            Meet the full team
          </a>
</div>
<div className="lg:w-2/3 p-8 md:p-16 grid grid-cols-2 md:grid-cols-3 gap-6 gs-fade">

<div className="group relative cursor-pointer">
<div className="aspect-square rounded-full overflow-hidden border border-white/10 mb-4 p-1">
<img alt="Team member" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_800w.webp"/>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-100">Elena Rostova</p>
<p className="text-xs text-slate-500">Graphics Lead</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-square rounded-full overflow-hidden border border-white/10 mb-4 p-1">
<img alt="Team member" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fc26ef9-ae15-4f56-ac63-077c7659dafa_800w.png"/>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-100">Marcus Chen</p>
<p className="text-xs text-slate-500">Systems Architect</p>
</div>
</div>

<div className="group relative cursor-pointer hidden md:block">
<div className="aspect-square rounded-full overflow-hidden border border-white/10 mb-4 p-1">
<img alt="Team member" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65695f80-23f9-46ee-8487-cbb6c93cc48b_800w.webp"/>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-100">Sarah Jenkins</p>
<p className="text-xs text-slate-500">UX Engineering</p>
</div>
</div>
</div>
</section>

<section className="relative p-6 md:p-12 border-b border-white/5 bg-slate-950/40">
<div className="text-center mb-16 gs-fade">
<h2 className="text-3xl font-medium tracking-tight text-slate-100 mb-4">
            Studio standard.
          </h2>
<p className="text-slate-400 text-sm">
            Adopted by top-tier agencies for production-grade deliverables.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gradient-shell rounded-2xl gs-fade">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                "Nova completely changed how we pitch concepts. We no longer
                show static mockups; we send live, performant spatial prototypes
                that look exactly like the final build."
              </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8434c85-a821-467d-8899-e9f0d5e32184_320w.webp"/>
<div className="">
<p className="text-xs font-medium text-slate-100">David K.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    Creative Dir, Ominous
                  </p>
</div>
</div>
</div>
</div>

<div className="gradient-shell rounded-2xl gs-fade delay-100">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                "The type-safe core and DOM syncing features saved us weeks of
                painful integration logic. It just works out of the box with our
                existing React stack."
              </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dd5462d-f090-44eb-9c08-2056c6d4df7f_320w.webp"/>
<div>
<p className="text-xs font-medium text-slate-100">Lisa M.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    Lead Eng, Vektor
                  </p>
</div>
</div>
</div>
</div>

<div className="gradient-shell rounded-2xl gs-fade delay-200">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                "Finally, a framework that understands the nuances of physical
                materials in UI design. The glass refraction primitives alone
                are worth it."
              </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b5d747ab-b9b0-4379-9347-fd0661e8f119/320w.png"/>
<div>
<p className="text-xs font-medium text-slate-100">James T.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    Founder, Studio X
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative p-6 md:p-12 lg:p-24 border-b border-white/5 bg-slate-950 overflow-hidden" id="pricing">
<style>
    .price-pop {
      animation: price-pop-anim 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes price-pop-anim {
      0% { opacity: 0; transform: translateY(8px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  </style>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px]"></div>
<div className="absolute top-[60%] -right-[10%] w-[50%] h-[60%] rounded-full bg-fuchsia-500/10 blur-[120px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_10%,black_100%)]"></div>
</div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-slate-100 mb-6">
        Simple, scalable access.
      </h2>

<div className="mt-10 inline-flex items-center justify-center p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
<span className="text-sm font-normal text-white px-4 py-2 bg-white/10 rounded-full transition-all duration-300" id="label-monthly">Monthly</span>
<div className="mx-3 relative flex items-center justify-center">
<input className="peer sr-only" id="billing-toggle" type="checkbox"/>
<label className="relative w-12 h-6 bg-slate-800/80 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 cursor-pointer hover:border-white/30" htmlFor="billing-toggle"></label>
</div>
<span className="text-sm font-normal text-slate-400 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5" id="label-annually">
          Annually
          <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded-md">-20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

<div className="group relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50"></div>
<div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col hover:bg-slate-900/60 hover:border-white/20 transition-all duration-500">
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-3">
            Pro License
          </h3>
<p className="text-sm text-slate-400 mb-8 min-h-[40px]">
            For independent developers and small studios.
          </p>
<div className="mb-10 flex items-end gap-2">
<span className="text-5xl font-normal tracking-tight text-white price-pop" id="pro-price">
              $49
            </span>
<span className="text-sm text-slate-500 mb-1" id="pro-period">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-indigo-400 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Unlimited commercial projects
            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-indigo-400 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Core spatial primitives
            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-indigo-400 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Community discord access
            </li>
</ul>
<button className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl text-sm font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-[0.98]">
            Subscribe Pro
          </button>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 rounded-[2rem] blur-xl transition-all duration-500 group-hover:blur-2xl opacity-70"></div>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
<div className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 p-[1px] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]">
<span className="block bg-slate-950 text-white px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap">
              Enterprise Standard
            </span>
</div>
</div>
<div className="relative h-full bg-slate-900/60 backdrop-blur-2xl border border-indigo-500/30 p-8 md:p-10 rounded-[2rem] flex flex-col hover:bg-slate-900/80 hover:border-indigo-400/50 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none mix-blend-screen group-hover:opacity-40 transition-opacity duration-500">
<div className="w-32 h-32 rounded-full bg-indigo-400 blur-[80px]"></div>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-100 mb-3 relative z-10">
            Studio License
          </h3>
<p className="text-sm text-slate-400 mb-8 min-h-[40px] relative z-10">
            For agencies requiring advanced rendering and premium support.
          </p>
<div className="mb-10 flex items-end gap-2 relative z-10">
<span className="text-5xl font-normal tracking-tight text-white price-pop" id="studio-price">
              $199
            </span>
<span className="text-sm text-slate-500 mb-1" id="studio-period">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow relative z-10">
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-white shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Everything in Pro
            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-white shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Advanced post-processing nodes
            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-white shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Dedicated Slack channel
            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<svg className="text-white shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Custom shader requests
            </li>
</ul>
<button className="relative z-10 w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-6 py-4 rounded-xl text-sm font-normal hover:from-indigo-400 hover:to-fuchsia-400 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.2)] active:scale-[0.98]">
            Subscribe Studio
          </button>
</div>
</div>
</div>
</div>

</section>
<section className="relative border-b border-white/5 py-24 px-6 md:px-12 bg-slate-950/20" id="integration">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gs-fade">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-100 mb-6">
          Seamless integration.
        </h2>
<p className="text-slate-400 text-base leading-relaxed">
          Nova doesn't force you to rewrite your app. Wrap your existing
          components in our Spatial Provider and watch them gain physical
          properties instantly.
        </p>
</div>
<div className="mt-8 md:mt-0">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Supported</span>
<iconify-icon className="text-2xl text-slate-300 hover:text-[#61DAFB] transition-colors" icon="simple-icons:react"></iconify-icon>
<iconify-icon className="text-2xl text-slate-300 hover:text-[#4FC08D] transition-colors" icon="simple-icons:vuedotjs"></iconify-icon>
<iconify-icon className="text-2xl text-slate-300 hover:text-[#FF3E00] transition-colors" icon="simple-icons:svelte"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
<div className="lg:col-span-2 gradient-shell rounded-2xl gs-fade">
<div className="bg-slate-900/90 backdrop-blur-xl rounded-[15px] h-full flex flex-col overflow-hidden border border-white/5">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-slate-950/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<span className="ml-4 text-xs text-slate-500 font-mono">App.tsx</span>
</div>
<div className="p-6 overflow-x-auto text-sm font-mono leading-loose text-slate-300 h-full flex items-center">
<pre><code id="typing-code"></code><span className="inline-block w-[8px] h-[1.1em] bg-slate-300 ml-1 animate-pulse align-middle"></span></pre>
</div>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="gradient-shell rounded-2xl flex-1 gs-fade delay-100">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-center">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">Bundle Size</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight text-white">12</span>
<span className="text-lg text-indigo-400 font-medium">kb</span>
</div>
<p className="text-sm text-slate-500 mt-4">
              Gzipped and minified. Zero external dependencies required.
            </p>
</div>
</div>
<div className="gradient-shell rounded-2xl flex-1 gs-fade delay-200">
<div className="glass-surface p-8 rounded-[15px] h-full flex flex-col justify-center">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">Performance</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight text-white">120</span>
<span className="text-lg text-indigo-400 font-medium">fps</span>
</div>
<p className="text-sm text-slate-500 mt-4">
              Maintains target framerate on mobile devices.
            </p>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="relative border-b border-white/5 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
<div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center gs-fade">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-100 mb-6">
            Initiate contact.
          </h2>
<p className="text-sm text-slate-400 mb-12 max-w-sm">
            Have specific enterprise requirements or need custom integration
            help? Our lead engineers are available to discuss your architecture.
          </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-sm text-slate-300">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
              systems@nova.ui
            </div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
              San Francisco, CA
            </div>
</div>
</div>
<div className="p-8 md:p-16 glass-surface gs-fade">
<form className="space-y-6 max-w-md mx-auto lg:mx-0">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                Identifier
              </label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                Transmission Channel
              </label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                Payload
              </label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Describe your architectural needs..." rows="4"></textarea>
</div>
<button className="w-full gradient-shell rounded-lg p-[1px] group" type="button">
<div className="w-full bg-slate-900 rounded-[7px] px-4 py-3 text-sm font-medium text-slate-100 group-hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Transmit Data
                <iconify-icon className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</div>
</button>
</form>
</div>
</section>

<footer className="relative p-8 md:p-16 border-b border-white/5 bg-[#020617]">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-sm tracking-tight text-slate-100 uppercase">
                Nova UI
              </span>
</a>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              The spatial interface framework for the modern web. Merging WebGL
              primitives with standard DOM architecture.
            </p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-100 mb-4 uppercase tracking-widest">
              Framework
            </h4>
<ul className="space-y-3 text-xs text-slate-500">
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Components
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Hooks API
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-100 mb-4 uppercase tracking-widest">
              Company
            </h4>
<ul className="space-y-3 text-xs text-slate-500">
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-100 mb-4 uppercase tracking-widest">
              Legal
            </h4>
<ul className="space-y-3 text-xs text-slate-500">
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  License
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">
            © 2024 Nova UI Systems. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="simple-icons:x"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="simple-icons:github"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="simple-icons:discord"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
