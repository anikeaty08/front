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



    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
      vUv = .5 * (a_position + 1.);
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  


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

      // Aqua palette
      color = vec3(0.0, 0.5, 0.6); // Base aqua
      color += vec3(0.0, 0.2, 0.3) * sin(3.0 * u_scroll_progress + 1.5); // Aqua variation

      color = color * noise;

      gl_FragColor = vec4(color, noise);
    }
  


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
      
<canvas id="neuro"></canvas>

<nav className="relative z-10 w-full py-5 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mr-3 border border-white/10">
<i className="fas fa-brain text-white"></i>
</div>
<span className="text-white text-xl font-semibold">Neural<span className="text-white/80">AI</span></span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white transition-colors border-b-2 border-white" href="#">Products</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Documentation</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors hidden md:block" href="#">Sign in</a>
<a className="py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors" href="#">Get Started</a>
<button className="md:hidden text-white">
<i className="fas fa-bars"></i>
</button>
</div>
</div>
</nav>

<header className="relative z-10 pt-10 pb-16 px-4 md:px-8">
<div className="max-w-7xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Our Products</h1>
<p className="text-lg text-white/80 max-w-2xl mx-auto">
        Discover our comprehensive suite of AI-powered tools designed to transform your business operations and unlock new possibilities.
      </p>
</div>
</header>

<section className="relative z-10 px-4 md:px-8 pb-20">
<div className="max-w-7xl mx-auto">

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
<div className="flex flex-col lg:flex-row gap-8 items-center">
<div className="w-full lg:w-1/2">
<div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm mb-4">NEW RELEASE</div>
<h2 className="text-3xl md:text-4xl text-white mb-4">NeuralCore™ Engine</h2>
<p className="text-white/80 mb-6">
              Our flagship AI processing engine that powers all our solutions. Built with advanced deep learning algorithms and optimized for enterprise-scale deployment.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-white/80">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>99.9% uptime with distributed architecture</span>
</li>
<li className="flex items-start text-white/80">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>Process over 10,000 requests per second</span>
</li>
<li className="flex items-start text-white/80">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>Seamless integration with existing systems</span>
</li>
</ul>
<div className="flex flex-wrap gap-4">
<a className="py-3 px-6 rounded-xl bg-white text-gray-900 font-medium transition-all" href="#">
                Learn More
              </a>
<a className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 transition-all" href="#">
                Request Demo
              </a>
</div>
</div>
<div className="w-full lg:w-1/2 bg-white/5 rounded-xl p-6 h-80 flex items-center justify-center">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
<div className="absolute w-60 h-60 border border-white/20 rounded-full"></div>
<div className="absolute w-80 h-80 border border-white/10 rounded-full"></div>
<i className="fas fa-microchip text-white text-6xl"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
<i className="fas fa-comments text-white"></i>
</div>
<h3 className="text-xl text-white mb-3">Conversational AI</h3>
<p className="text-white/70 mb-6">
            Build intelligent chatbots and virtual assistants that understand natural language and provide contextual responses.
          </p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Natural Language</span>
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Customer Support</span>
</div>
<a className="mt-6 text-white hover:text-white/80 flex items-center" href="#">
<span>View Details</span>
<i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
<i className="fas fa-chart-line text-white"></i>
</div>
<h3 className="text-xl text-white mb-3">Predictive Analytics</h3>
<p className="text-white/70 mb-6">
            Forecast trends and make data-driven decisions with our advanced predictive modeling system.
          </p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Forecasting</span>
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Business Intelligence</span>
</div>
<a className="mt-6 text-white hover:text-white/80 flex items-center" href="#">
<span>View Details</span>
<i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>

<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
<i className="fas fa-eye text-white"></i>
</div>
<h3 className="text-xl text-white mb-3">Computer Vision</h3>
<p className="text-white/70 mb-6">
            Analyze and interpret visual data with our state-of-the-art image recognition technology.
          </p>
<div className="mt-auto flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Object Detection</span>
<span className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs">Image Analysis</span>
</div>
<a className="mt-6 text-white hover:text-white/80 flex items-center" href="#">
<span>View Details</span>
<i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>
</div>
</div>
</section>




    </>
  );
}
