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

      // Pricing toggle logic
      const toggle = document.getElementById('billing-toggle');
      const labels = document.querySelectorAll('[data-billing-label]');
      const prices = document.querySelectorAll('[data-pricing]');
      toggle.addEventListener('change', function() {
        if(toggle.checked) {
          labels.forEach(l => l.classList.toggle('font-bold', l.textContent.trim() === 'Yearly'));
          labels.forEach(l => l.classList.toggle('text-fuchsia-400', l.textContent.trim() === 'Yearly'));
          prices.forEach(p => p.textContent = p.dataset.yearly);
        } else {
          labels.forEach(l => l.classList.toggle('font-bold', l.textContent.trim() === 'Monthly'));
          labels.forEach(l => l.classList.toggle('text-fuchsia-400', l.textContent.trim() === 'Monthly'));
          prices.forEach(p => p.textContent = p.dataset.monthly);
        }
      });

      // Set initial state
      setTimeout(() => {
        labels.forEach(l => {
          if(l.textContent.trim() === 'Monthly') {
            l.classList.add('font-bold','text-fuchsia-400');
          } else {
            l.classList.remove('font-bold','text-fuchsia-400');
          }
        });
        prices.forEach(p => p.textContent = p.dataset.monthly);
      }, 1);
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
      
<div className="fixed inset-0 w-1/2 h-full z-0">
<div className="shader-bg absolute inset-0"></div>
<div className="iridescent-glow"></div>
</div>
<div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-16 pb-16">

<div className="text-center mb-10">
<span className="inline-block h-14 w-14 rounded-full bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-lime-200 shadow-xl mb-5"></span>
<h1 className="md:text-5xl bg-clip-text text-4xl font-extrabold font-geist bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-300 mb-3">Simple, Flexible Pricing</h1>
<p className="md:text-xl text-lg font-medium text-black/70 font-geist">Find the plan that's right for you.<br className="hidden md:inline"/>Upgrade or downgrade anytime.</p>
</div>

<div className="flex items-center justify-center gap-3 font-geist mb-10">
<span className="transition cursor-pointer select-none font-bold text-slate-950/80 text-fuchsia-400" data-billing-label="">Monthly</span>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="billing-toggle" type="checkbox"/>
<div className="w-12 h-7 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-fuchsia-200 transition-all duration-200 peer-checked:bg-gradient-to-r peer-checked:from-cyan-300 peer-checked:via-fuchsia-400 peer-checked:to-lime-200 relative">
<div className="absolute top-1 left-1 peer-checked:left-5 w-5 h-5 transition-all duration-200 bg-white rounded-full shadow"></div>
</div>
</label>
<span className="transition text-black/80 cursor-pointer select-none" data-billing-label="">Yearly</span>
<span className="hidden md:inline text-xs font-semibold text-gray-500 bg-fuchsia-100/70 border-gray-500 rounded-full ml-2 pt-1 pr-2 pb-1 pl-2">2 months free</span>
</div>

<div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

<div className="relative flex flex-col transition-all hover:scale-105 hover:bg-white/80 text-gray-500 font-geist bg-white/70 border-white/30 border rounded-3xl pt-12 pr-8 pb-8 pl-8 shadow-lg backdrop-blur-xl">
<div className="absolute -top-6 left-1/2 -translate-x-1/2">
</div>
<h3 className="text-xl font-bold text-black/90 mb-2 text-center">Starter</h3>
<div className="flex flex-col items-center text-center mb-4">
<span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-lime-300 bg-clip-text text-transparent">
<span className="text-slate-950/80" data-monthly="$0" data-pricing="" data-yearly="$0">$0</span>
</span>
<span className="text-xs text-black/50 mt-1">Forever</span>
</div>
<ul className="flex-1 flex flex-col gap-3 text-base text-black/80 font-geist mb-6">
<li className="text-gray-500">✔ 1 project</li>
<li className="text-gray-500">✔ Basic analytics</li>
<li className="text-gray-500">✔ Community support</li>
</ul>
<button className="w-full hover:shadow-lg hover:from-fuchsia-200 hover:to-lime-100 transition font-semibold text-fuchsia-700 bg-gradient-to-tr from-fuchsia-100 via-cyan-100 to-lime-100 border-fuchsia-200 border rounded-xl pt-3 pb-3 shadow">Get Started</button>
</div>

<div className="relative flex flex-col z-10 font-geist bg-white/90 border-indigo-500/0 border-2 rounded-3xl pt-12 pr-8 pb-8 pl-8 shadow-xl backdrop-blur-2xl scale-105">
<div className="absolute -top-7 left-1/2 -translate-x-1/2">
</div>
<h3 className="text-xl font-extrabold text-black/90 text-center mb-2">Pro</h3>
<div className="flex flex-col items-center text-center mb-4">
<span className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-300 bg-clip-text text-transparent">
<span className="text-slate-950" data-monthly="$16" data-pricing="" data-yearly="$160">$16</span>
</span>
<span className="text-sm text-black/50 mt-1"><span className="inline md:hidden">per month</span></span>
</div>
<ul className="flex-1 flex flex-col gap-3 text-base text-gray-500/80 font-geist mb-6">
<li className="">✔ 10 projects</li>
<li className="">✔ Advanced analytics</li>
<li className="">✔ Priority support</li>
<li className="">✔ Collaboration tools</li>
</ul>
<button className="w-full rounded-xl py-3 bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-lime-200 text-black font-bold shadow-xl ring-2 ring-fuchsia-200/40 hover:scale-105 hover:from-fuchsia-300 hover:to-lime-100 transition">Start Pro</button>
</div>

<div className="relative flex flex-col transition-all hover:scale-105 hover:bg-white/80 font-geist bg-white/70 border-white/30 border rounded-3xl pt-12 pr-8 pb-8 pl-8 shadow-lg backdrop-blur-xl">
<div className="absolute -top-6 left-1/2 -translate-x-1/2">
</div>
<h3 className="text-xl font-bold text-black/90 mb-2 text-center">Business</h3>
<div className="flex flex-col items-center text-center mb-4">
<span className="text-4xl font-extrabold bg-gradient-to-r from-lime-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
<span className="text-slate-950" data-monthly="$48" data-pricing="" data-yearly="$480">$48</span>
</span>
<span className="text-xs text-black/50 mt-1">per month</span>
</div>
<ul className="flex-1 flex flex-col gap-3 text-base text-gray-500/80 font-geist mb-6">
<li className="">✔ Unlimited projects</li>
<li className="">✔ Team management</li>
<li className="">✔ Dedicated manager</li>
<li className="">✔ Enterprise support</li>
</ul>
<button className="w-full rounded-xl py-3 bg-gradient-to-tr from-fuchsia-100 via-cyan-100 to-lime-100 text-fuchsia-700 font-semibold border border-fuchsia-200 shadow hover:shadow-lg hover:from-fuchsia-200 hover:to-lime-100 transition">Contact Sales</button>
</div>
</div>

<div className="text-sm text-black/60 font-geist text-center mt-12">
      All plans include a 7-day free trial. Cancel anytime.<br/>
<span className="text-xs text-black/40">Prices in USD. Taxes may apply.</span>
</div>
</div>

    </>
  );
}
