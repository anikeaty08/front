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
      {

    const container = document.getElementById('bg');

    // Scene & renderer
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Uniforms
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
    };

    // Material & mesh
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation control
    let rafId = null;
    let paused = false;
    const startTime = performance.now();

    function renderFrame(now) {
      uniforms.u_time.value = (now - startTime) * 0.001;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(renderFrame);
    }

    // Start
    rafId = requestAnimationFrame(renderFrame);

    // Resize handling
    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.u_resolution.value.set(w, h);
    }
    window.addEventListener('resize', onResize);

    // Pause/Resume UI
    const pauseBtn = document.getElementById('pauseBtn');
    const pauseLabel = document.getElementById('pauseLabel');
    const pauseIcon = document.getElementById('pauseIcon');
    const playIcon = document.getElementById('playIcon');

    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      if (paused) {
        cancelAnimationFrame(rafId);
        rafId = null;
        pauseLabel.textContent = 'Resume';
        pauseIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
      } else {
        pauseLabel.textContent = 'Pause';
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
        rafId = requestAnimationFrame(renderFrame);
      }
    });

    // Initial resize to ensure correct DPR sizing
    onResize();
  
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
      

<div className="absolute inset-0 -z-10" id="bg"></div>

<div className="pointer-events-none absolute inset-0" style={{background: `radial-gradient(1200px 600px at 50% 60%, rgba(255,255,255,0.08), rgba(0,0,0,0) 60%), radial-gradient(900px 500px at 0% 0%, rgba(0,180,255,0.10), rgba(0,0,0,0) 50%), radial-gradient(900px 500px at 100% 0%, rgba(128,0,255,0.10), rgba(0,0,0,0) 50%)`}}>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<span className="text-white tracking-tight text-lg font-semibold leading-none">GR</span>
</div>
<div className="hidden sm:block">
<p className="text-sm text-white/70">Glowing Rays</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="pauseBtn">
<svg className="opacity-90 group-hover:opacity-100 transition" fill="none" height="18" id="pauseIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="1" width="4"></rect>
<rect height="16" rx="1" width="4"></rect>
</svg>
<svg className="hidden opacity-90 group-hover:opacity-100 transition" fill="none" height="18" id="playIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
<span className="tracking-tight" id="pauseLabel">Pause</span>
</button>
</div>
</div>
</div>
</header>

<main className="relative z-10">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
<div className="max-w-2xl">
<h1 className="text-3xl md:text-5xl tracking-tight font-semibold text-white/95">
          Real-time shader background
        </h1>
<p className="mt-3 md:mt-4 text-base md:text-lg text-white/70">
          A radial rayfield with time-driven glow. Resize-safe, crisp on high-DPI, and optimized with a full-screen fragment shader.
        </p>
<div className="mt-6 flex items-center gap-3 text-xs text-white/60">
<div className="h-5 w-px bg-white/15"></div>
<div className="inline-flex items-center gap-2">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><circle cx="17" cy="17"></circle><circle cx="7" cy="7"></circle>
</svg>
<span>Cosine ray bands</span>
</div>
<div className="inline-flex items-center gap-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path>
</svg>
<span>Exponential glow</span>
</div>
<div className="inline-flex items-center gap-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20"></rect><path></path>
</svg>
<span>High-DPI aware</span>
</div>
</div>
</div>
</section>
</main>

<footer className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between border-t border-white/10 py-4">
<p className="text-xs text-white/50">Shader runs on a full-screen quad. Toggle motion if needed.</p>
<p className="text-xs text-white/40">© GR Studio</p>
</div>
</div>
</footer>



<script id="fragmentShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
    precision highp float;

    uniform float u_time;
    uniform vec2 u_resolution;

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      uv = uv * 2.0 - 1.0; // normalize to -1..1

      float angle = atan(uv.y, uv.x);
      float radius = length(uv);

      float rays = cos(angle * 10.0 + u_time * 0.5) * 0.5 + 0.5;
      float glow = exp(-radius * 2.5);

      vec3 color = mix(vec3(0.1, 0.0, 0.3), vec3(0.0, 0.8, 1.0), rays * glow);

      gl_FragColor = vec4(color, 1.0);
    }
  `
}} />
<script id="vertexShader" type="x-shader/x-vertex" dangerouslySetInnerHTML={{
  __html: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `
}} />



    </>
  );
}
