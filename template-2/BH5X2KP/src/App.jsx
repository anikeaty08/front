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

        const canvasEl = document.querySelector("canvas#neuro");
        const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        let uniforms;
        const gl = initShader();
        setupEvents();
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        render();

        function initShader() {
            const vsSource = document.getElementById("vertShader").innerHTML;
            const fsSource = document.getElementById("fragShader").innerHTML;
            const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");
            if (!gl) console.error("WebGL not supported by your browser.");

            function createShader(gl, sourceCode, type) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, sourceCode);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error("Shader error: " + gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

            function createShaderProgram(gl, vertexShader, fragmentShader) {
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error("Shader link error: " + gl.getProgramInfoLog(program));
                    return null;
                }
                return program;
            }

            const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
            uniforms = getUniforms(shaderProgram);

            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }

            const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.useProgram(shaderProgram);
            const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            return gl;
        }

        function render() {
            const currentTime = performance.now();
            pointer.x += (pointer.tX - pointer.x) * .2;
            pointer.y += (pointer.tY - pointer.y) * .2;
            gl.uniform1f(uniforms.u_time, currentTime);
            gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
            gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        function resizeCanvas() {
            canvasEl.width = window.innerWidth * devicePixelRatio;
            canvasEl.height = window.innerHeight * devicePixelRatio;
            gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
            gl.viewport(0, 0, canvasEl.width, canvasEl.height);
        }

        function setupEvents() {
            window.addEventListener("pointermove", e => updateMousePosition(e.clientX, e.clientY));
            window.addEventListener("touchmove", e => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
            window.addEventListener("click", e => updateMousePosition(e.clientX, e.clientY));
            function updateMousePosition(eX, eY) {
                pointer.tX = eX;
                pointer.tY = eY;
            }
        }
    
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
      
<canvas height="1490" id="neuro" width="1920"></canvas>

<nav className="relative z-10 w-full py-5 px-4 md:px-8 fade-in">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mr-3 border border-white/10">
<i className="fas fa-brain text-white"></i>
</div>
<span className="text-white text-xl font-semibold">Neural<span className="text-white/80">AI</span></span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white/80 hover:text-white transition-colors" href="#">Products</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Documentation</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors hidden md:block" href="#">Sign in</a>
<a className="py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors" href="#">Get Started</a>
<button className="md:hidden text-white">
</button>
</div>
</div>
</nav>

<section className="relative z-10 min-h-[90vh] flex items-center pt-10 pb-20 px-4 md:px-8">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-left">
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl text-slate-50 tracking-tight text-left mb-6">Command Attention.        Attract Customers.<br /></h1>
<p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl text-left fade-in fade-in-delay-2">
                    Our advanced neural networks enable you to build, deploy, and scale AI solutions that adapt to your unique business challenges.
                </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3">
<a className="py-4 px-8 rounded-xl bg-white text-gray-900 font-medium text-center transition-all hover:bg-white/90" href="#">
                        Start Building Free
                    </a>
<a className="py-4 px-8 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-center border border-white/10 transition-all" href="#">
                        
                        Watch Demo
                    </a>
</div>
<div className="mt-10 flex items-center gap-2 fade-in fade-in-delay-3">
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/44.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/men/86.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/63.jpg" />
</div>
<div className="text-white/70 text-sm">
                        Trusted by <span className="text-white font-medium">10,000+</span> developers worldwide
                    </div>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center">

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-80 h-80 absolute transform rotate-6 floating-delay">
<div className="absolute top-6 left-6 right-6 bottom-6 flex flex-col">
<div className="flex items-center mb-4">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
</div>
<span className="text-lg text-white ml-3">Website Design</span>
</div>
<div className="flex-1 bg-white/5 rounded-lg p-4 flex items-center justify-center">
<div className="w-full h-full flex bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md items-center justify-center">
</div>
</div>
<div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-white rounded-full"></div>
</div>
<div className="mt-2 text-xs text-white/70 text-right">Active: 75%</div>
</div>
</div>

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-64 h-44 absolute -bottom-4 -left-4 transform -rotate-12 floating">
<div className="p-4">
<div className="flex justify-between items-center mb-3">
<span className="text-sm text-white">Digital Marketing</span>
</div>
<div className="h-20 flex items-end justify-between gap-1 mb-2">
<div className="w-1/6 h-[30%] bg-white/40 rounded-sm"></div>
<div className="w-1/6 h-[45%] bg-white/50 rounded-sm"></div>
<div className="w-1/6 h-[65%] bg-white/60 rounded-sm"></div>
<div className="w-1/6 h-[80%] bg-white/70 rounded-sm"></div>
<div className="w-1/6 h-[95%] bg-white/80 rounded-sm"></div>
<div className="w-1/6 h-[75%] bg-white/90 rounded-sm"></div>
</div>
<div className="flex justify-between text-xs text-white/70">
<span>Jan</span>
<span>Jun</span>
</div>
</div>
</div>
<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-48 h-48 absolute top-0 right-0 transform rotate-12 floating">
<div className="p-4 h-full flex flex-col">
<div className="text-sm text-white mb-2">SEO</div>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
<div className="absolute inset-0 border-t-transparent transform border-white/80 border-4 rounded-full rotate-45"></div>
<span className="text-2xl text-white font-medium">97%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<script id="vertShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `
}} />
<script id="fragShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);
            float t = .001 * u_time;
            vec3 color = vec3(0.);
            float noise = neuro_shape(uv, t, p);
            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));
            color = vec3(0.5, 0.15, 0.65);
            color += vec3(0.3, 0.0, 0.25) * sin(3.0 * u_scroll_progress + 1.5);
            color = color * noise;
            gl_FragColor = vec4(color, noise);
        }
    `
}} />


    </>
  );
}
