import React, { useEffect } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'https://cdn.skypack.dev/ogl';

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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

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
        this.amplitude = options.amplitude || .15;
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
      
<div className="fixed inset-0 w-1/2 h-full z-0">
<div className="shader-bg absolute inset-0"></div>
<div className="iridescent-glow"></div>
</div>
<div className="relative z-10 min-h-screen flex items-center justify-end">
<div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row bg-transparent md:bg-white/5 md:rounded-3xl md:shadow-xl md:backdrop-blur-lg overflow-hidden border border-white/10">

<div className="hidden md:flex flex-col items-center justify-center w-1/2 p-10 relative z-10">
<div className="relative text-center">
<span className="inline-block h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-lime-200 shadow-xl mb-4"></span>
<h2 className="text-3xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-sky-200 text-transparent mb-3">Welcome!</h2>
<p className="text-md text-white/80 font-medium">Complete your profile to get the most of Aura.</p>
</div>
</div>

<div className="w-full md:w-1/2 md:bg-white/80/90 md:p-10 flex flex-col justify-center bg-white/10 pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl">

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-fuchsia-400">STEP</span>
<span className="text-sm font-semibold text-white/80">1 of 3</span>
</div>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
<span className="w-2 h-2 bg-slate-300/30 rounded-full"></span>
<span className="w-2 h-2 bg-slate-300/30 rounded-full"></span>
</div>
</div>
<form className="flex flex-col gap-5">

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-black/90 dark:text-black/90 mb-1" htmlFor="username">Choose a Username</label>
<input className="placeholder:text-gray-500 focus:ring-2 focus:ring-fuchsia-300 outline-none transition font-normal text-black bg-white/70 border-black/20 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="username" placeholder="e.g. aurora_star" type="text" />
</div>

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-black/90 dark:text-black/90 mb-1" htmlFor="email">Email Address</label>
<input className="placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none transition font-normal text-black bg-white/70 border-black/20 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="email" placeholder="e.g. you@email.com" type="email" />
</div>
</form>
</div>
<div className="flex flex-col gap-6">
<button className="w-full hover:from-fuchsia-300 hover:to-lime-100 hover:scale-105 transition-all duration-200 ring-2 ring-white/30 ring-inset text-lg font-bold text-slate-950 bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-lime-200 rounded-xl pt-3 pr-7 pb-3 pl-7 shadow-lg">
            Next
          </button>
<button className="w-full text-black/80 font-semibold px-6 py-2 rounded-xl border border-fuchsia-300/20 mt-1 hover:bg-fuchsia-100/30 hover:text-black transition-all duration-150">
            Skip for Now
          </button>
</div>
<div className="mt-7 text-xs text-center text-black/60 tracking-wide">
          Progress is saved automatically ✦
        </div>
</div>
</div>
</div>

    </>
  );
}
