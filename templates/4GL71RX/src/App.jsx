import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
            const containers = document.querySelectorAll('.shader-container');
            
            containers.forEach((container, index) => {
                const colors = [
                    [1, 0.5, 0.8],    // Pink-purple
                    [0.3, 0.8, 1],    // Cyan-blue  
                    [0.8, 1, 0.4],    // Green-yellow
                ];
                
                new IridescenceShader(container, {
                    color: colors[index % colors.length],
                    speed: 0.8 + index * 0.3,
                    amplitude: 0.1 + index * 0.05
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full h-screen">

<div className="shader-container absolute inset-0"></div>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
<div className="text-center space-y-8 px-4">
<h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    Iridescent
                </h1>
<p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                    Move your mouse to interact with the flowing colors and watch the mesmerizing patterns dance across the screen
                </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
<div className="group">
<div className="shader-container w-full h-48 rounded-xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105"></div>
<p className="mt-3 text-sm text-gray-400">Aurora Waves</p>
</div>
<div className="group">
<div className="shader-container w-full h-48 rounded-xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105"></div>
<p className="mt-3 text-sm text-gray-400">Ocean Flow</p>
</div>
<div className="group">
<div className="shader-container w-full h-48 rounded-xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105"></div>
<p className="mt-3 text-sm text-gray-400">Electric Dreams</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 z-20">
<a className="text-xs text-gray-400 hover:text-white transition-colors duration-200 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50" href="https://www.reactbits.dev/backgrounds/iridescence" rel="noopener noreferrer" target="_blank">
                Shader by ReactBits.dev
            </a>
</div>
</div>

    </>
  );
}
