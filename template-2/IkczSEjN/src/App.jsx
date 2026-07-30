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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

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
      if (!gl) alert("WebGL is not supported by your browser.");

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
      
<canvas id="neuro"></canvas>
<div className="relative z-10 w-full min-h-screen">

<div className="w-full max-w-6xl mx-auto text-center py-16 px-4">
<h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400">
        Flexible AI Solutions
      </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-purple-200/70 max-w-2xl mx-auto">
        Choose the plan that works for your workflow. All plans include core features with flexible scaling options.
      </p>
</div>

<div className="w-full max-w-7xl mx-auto px-4 pb-24">

<div className="flex flex-col md:flex-row gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
<div className="icon-circle mb-4">
<i className="fas fa-brain text-fuchsia-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Advanced AI Models</h3>
<p className="text-purple-200/70">Access state-of-the-art language models trained on diverse datasets for optimal performance.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10 flex flex-col md:flex-row items-center">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Multi-modal Capabilities</h3>
<p className="text-purple-200/70">Process and generate content across text, images, and structured data with a single unified API.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Natural language processing</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Image generation and analysis</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Structured data extraction</span>
</li>
</ul>
</div>
<div className="w-full md:w-64 h-48 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
<i className="fas fa-diagram-project text-5xl text-purple-300/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
<div className="icon-circle mb-4">
<i className="fas fa-shield-alt text-violet-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Enterprise Security</h3>
<p className="text-purple-200/70">End-to-end encryption, compliance certifications, and secure data handling for sensitive applications.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10 flex flex-col md:flex-row items-center">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Customizable Training</h3>
<p className="text-purple-200/70">Fine-tune models on your proprietary data to create domain-specific AI solutions that match your exact needs.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="bg-purple-900/20 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">10x</div>
<div className="text-xs text-purple-200/60 mt-1">Performance</div>
</div>
<div className="bg-purple-900/20 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">95%</div>
<div className="text-xs text-purple-200/60 mt-1">Accuracy</div>
</div>
</div>
</div>
<div className="w-full md:w-64 h-48 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center">
<i className="fas fa-sliders text-5xl text-purple-300/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6">

<div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
<div className="icon-circle mb-4">
<i className="fas fa-bolt text-fuchsia-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Lightning Fast</h3>
<p className="text-purple-200/70">High-performance infrastructure with global edge deployment for minimal latency responses.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10">
<h3 className="text-2xl text-white mb-3">Seamless Integration</h3>
<p className="text-purple-200/70 mb-6">Connect with your existing tools and workflows through our comprehensive API and SDK ecosystem.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-python text-2xl text-purple-200/70 mb-2"></i>
<span className="text-sm text-purple-200/60">Python</span>
</div>
<div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-js text-2xl text-purple-200/70 mb-2"></i>
<span className="text-sm text-purple-200/60">JavaScript</span>
</div>
<div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-java text-2xl text-purple-200/70 mb-2"></i>
<span className="text-sm text-purple-200/60">Java</span>
</div>
<div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
<i className="fas fa-code text-2xl text-purple-200/70 mb-2"></i>
<span className="text-sm text-purple-200/60">REST API</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 pb-24">
<h2 className="text-3xl md:text-4xl text-white text-center mb-12">Choose Your Plan</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-effect bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-500/20 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-rocket text-fuchsia-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Starter</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$19</span>
<span className="text-sm text-purple-200/60 ml-2">/month</span>
</div>
<p className="text-purple-200/60 text-sm mt-1">Perfect for individuals and small projects</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>1 million tokens/month</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>5 custom AI models</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Basic API access</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Email support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-purple-800/30 hover:bg-purple-700/40 text-white text-sm font-medium transition-all duration-200 border border-purple-500/20">
              Start Free Trial
            </button>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-purple-800/30 to-purple-900/20 border border-fuchsia-500/30 rounded-2xl shadow-xl p-6 flex flex-col h-full relative z-10 transform scale-105">

<div className="pricing-badge bg-fuchsia-600/90">MOST POPULAR</div>

<div className="flex items-center mb-4">
<div className="icon-circle bg-fuchsia-500/20 border-fuchsia-400/30">
<i className="fas fa-bolt text-fuchsia-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Professional</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$49</span>
<span className="text-sm text-purple-200/60 ml-2">/month</span>
</div>
<p className="text-purple-200/60 text-sm mt-1">For teams with advanced AI needs</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>10 million tokens/month</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>20 custom AI models</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Advanced API access</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Priority support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm font-medium transition-all duration-200">
              Get Started
            </button>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-500/20 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-building text-violet-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Enterprise</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$199</span>
<span className="text-sm text-purple-200/60 ml-2">/month</span>
</div>
<p className="text-purple-200/60 text-sm mt-1">For organizations with advanced requirements</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Unlimited tokens</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Unlimited custom AI models</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>Full API ecosystem</span>
</li>
<li className="flex items-center text-purple-200/80 text-sm">
<i className="fas fa-check text-fuchsia-400 mr-3 w-4"></i>
<span>24/7 dedicated support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-purple-800/30 hover:bg-purple-700/40 text-white text-sm font-medium transition-all duration-200 border border-purple-500/20">
              Contact Sales
            </button>
</div>
</div>
</div>
</div>
</div>
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

      // Purple/fuchsia/violet palette
      color = vec3(0.5, 0.15, 0.65); // Base purple
      color += vec3(0.3, 0.0, 0.25) * sin(3.0 * u_scroll_progress + 1.5); // Fuchsia variation

      color = color * noise;

      gl_FragColor = vec4(color, noise);
    }
  `
}} />


    </>
  );
}
