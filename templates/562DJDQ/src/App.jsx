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
        }

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.shader-container');
            new IridescenceShader(container, {
                color: [0.8, 0.4, 1],
                speed: 0.6,
                amplitude: 0.12
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
      

<nav className="absolute top-0 w-full z-30 p-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-xl font-bold text-white">Aura</div>
<div className="hidden md:flex space-x-8 text-white/80">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="md:hidden text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<section className="relative min-h-screen overflow-hidden">

<div className="shader-container absolute inset-0"></div>

<div className="absolute inset-0 bg-black/20"></div>

<div className="relative z-20 flex items-center justify-center min-h-screen px-6">
<div className="max-w-5xl mx-auto text-center">

<div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 mb-8">
<span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Now in Beta
                </div>

<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-bold text-white tracking-tighter mb-6 py-0">
                    The Future of
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 pb-2">
                        Digital Experience
                    </span>
</h1>

<p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Immerse yourself in a world where technology meets artistry. Create, collaborate, and innovate with tools that adapt to your vision.
                </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<button className="hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-violet-500/25 font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg px-8 py-4 shadow-lg">
                        Start Free Trial
                    </button>
<button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                        Watch Demo
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
<p className="text-white/70 text-sm">Experience unprecedented speed with our optimized infrastructure.</p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg mb-4 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Secure &amp; Reliable</h3>
<p className="text-white/70 text-sm">Built with enterprise-grade security and 99.9% uptime guarantee.</p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold text-lg mb-2">User Focused</h3>
<p className="text-white/70 text-sm">Designed with intuitive interfaces that users love to interact with.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
<div className="flex flex-col items-center text-white/60">
<span className="text-sm mb-2">Scroll to explore</span>
<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
<div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
</div>
</div>
</div>
</section>

    </>
  );
}
