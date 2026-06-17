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



    import { Renderer, Program, Mesh, Color, Triangle } from 'https://cdn.skypack.dev/ogl';
    const vertexShader = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }`;
    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uColor;
      uniform vec3 uResolution;
      uniform vec2 uMouse;
      uniform float uAmplitude;
      uniform float uSpeed;
      varying vec2 vUv;
      void main() {
        float mr = min(uResolution.x, uResolution.y);
        vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
        uv += (uMouse - vec2(0.5)) * uAmplitude;
        float d = -uTime * 0.5 * uSpeed;
        float a = 0.0;
        for (float i = 0.0; i < 8.0; ++i) {
          a += cos(i - d - a * uv.x);
          d += sin(uv.y * i + a);
        }
        d += uTime * 0.5 * uSpeed;
        vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
        col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
        gl_FragColor = vec4(col, 1.0);
      }`;
    class IridescenceShader {
      constructor(container, options = {}) {
        this.container = container;
        this.color = options.color || [1, 0.8, 0.9];
        this.speed = options.speed || 1.0;
        this.amplitude = options.amplitude || 0.15;
        this.mouseReact = options.mouseReact !== false;
        this.mousePos = { x: 0.5, y: 0.5 };
        this.init();
      }
      init() {
        this.renderer = new Renderer();
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 1);
        this.setupGeometry();
        this.setupEventListeners();
        this.resize();
        this.animate();
        this.container.appendChild(this.gl.canvas);
      }
      setupGeometry() {
        const geometry = new Triangle(this.gl);
        this.program = new Program(this.gl, {
          vertex: vertexShader,
          fragment: fragmentShader,
          uniforms: {
            uTime: { value: 0 },
            uColor: { value: new Color(...this.color) },
            uResolution: { value: new Color(1, 1, 1) },
            uMouse: { value: new Float32Array([0.5, 0.5]) },
            uAmplitude: { value: this.amplitude },
            uSpeed: { value: this.speed },
          },
        });
        this.mesh = new Mesh(this.gl, { geometry, program: this.program });
      }
      setupEventListeners() {
        this.handleResize = this.resize.bind(this);
        this.handleMouseMove = this.onMouseMove.bind(this);
        window.addEventListener('resize', this.handleResize);
        if (this.mouseReact) {
          this.container.addEventListener('mousemove', this.handleMouseMove);
        }
      }
      resize() {
        const rect = this.container.getBoundingClientRect();
        this.renderer.setSize(rect.width, rect.height);
        if (this.program) {
          this.program.uniforms.uResolution.value = new Color(
            this.gl.canvas.width,
            this.gl.canvas.height,
            this.gl.canvas.width / this.gl.canvas.height
          );
        }
      }
      onMouseMove(e) {
        const rect = this.container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        this.mousePos = { x, y };
        this.program.uniforms.uMouse.value[0] = x;
        this.program.uniforms.uMouse.value[1] = y;
      }
      animate(t = 0) {
        this.animationId = requestAnimationFrame(this.animate.bind(this));
        this.program.uniforms.uTime.value = t * 0.001;
        this.renderer.render({ scene: this.mesh });
      }
      destroy() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        window.removeEventListener('resize', this.handleResize);
        if (this.mouseReact) {
          this.container.removeEventListener('mousemove', this.handleMouseMove);
        }
        if (this.gl.canvas.parentNode) {
          this.gl.canvas.parentNode.removeChild(this.gl.canvas);
        }
        this.gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.shader-bg');
      new IridescenceShader(container, {
        color: [0.95, 0.65, 1.0],
        speed: 0.82,
        amplitude: 0.15,
        mouseReact: true
      });
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
      

<div className="shader-bg absolute inset-0"></div>

<div className="iridescent-glow"></div>

<nav className="relative z-30 w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
<div className="flex items-center gap-2">
<span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-lime-200 shadow-lg"></span>
<span className="text-2xl font-extrabold text-white tracking-tight">Aura</span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-white/80 hover:text-white font-medium transition" href="#">Home</a>
<a className="text-white/80 hover:text-white font-medium transition" href="#features">Features</a>
<a className="text-white/80 hover:text-white font-medium transition" href="#docs">Docs</a>
<a className="text-white/80 hover:text-white font-medium transition" href="#contact">Contact</a>
</div>
<div className="md:hidden">
<button aria-label="Open menu" className="text-white/80 hover:text-white focus:outline-none">
<svg fill="none" height="28" viewbox="0 0 24 24" width="28"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
<div className="text-center px-4 mt-8">
<h1 className="sm:text-7xl md:text-8xl bg-clip-text transition-all duration-300 text-5xl font-extrabold text-transparent tracking-tight bg-gradient-to-r from-white via-fuchsia-200 to-sky-200 py-4 drop-shadow-2xl">
        Iridescent Light
      </h1>
<p className="mt-6 max-w-xl mx-auto text-lg sm:text-2xl text-gray-200/90 font-medium drop-shadow-lg">
        An interactive hero background that shimmers with color and responds to your touch.<br className="hidden sm:block"/>
        Move your mouse and explore the glowing beauty of iridescent light.
      </p>
<div className="mt-10 flex justify-center">
<div className="backdrop-blur-md bg-white/10 border border-white/15 shadow-2xl rounded-2xl px-8 py-8 flex flex-col gap-5 items-center w-full max-w-sm transition-all duration-300 hover:bg-white/20 hover:shadow-3xl">
<div className="">
<h2 className="text-2xl font-semibold text-white mb-1 pb-2">Get Started Instantly</h2>
<p className="text-base text-white/70 mb-2 py-2">Enjoy these features right out of the box:</p>
<ul className="text-left text-white/80 space-y-2 mb-3">
<li className="flex items-center gap-2 text-sm">
<span className="text-lime-300">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
                Interactive iridescent background
              </li>
<li className="flex items-center gap-2 text-sm">
<span className="text-cyan-300">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
                Responsive hero section
              </li>
<li className="flex items-center gap-2 text-sm">
<span className="text-fuchsia-300">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
                Modern, accessible design
              </li>
</ul>
</div>
<a className="w-full inline-block bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-lime-200 text-black font-bold text-lg px-7 py-3 rounded-xl shadow-lg hover:from-fuchsia-300 hover:to-lime-100 hover:scale-105 transition-all duration-200 ring-2 ring-white/30 ring-inset text-center" href="#get-started">
            Get Started
          </a>
<a className="w-full inline-block text-white/90 font-semibold px-6 py-2 rounded-xl border border-white/20 mt-1 hover:bg-white/20 transition-all duration-150 text-center" href="#learn-more">
            Learn More
          </a>
<span className="text-xs text-white/70 tracking-wide">
            No install needed • Just move your mouse ✦
          </span>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
</div>
</main>

    </>
  );
}
