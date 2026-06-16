import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      color = vec3(0.0, 0.5, 0.6);
      color += vec3(0.0, 0.2, 0.3) * sin(3.0 * u_scroll_progress + 1.5);
      color = color * noise;
      gl_FragColor = vec4(color, noise);
    }
  


    document.addEventListener("DOMContentLoaded", function() {
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
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="neuro"></canvas>
<nav className="relative z-10 w-full py-5 px-4 md:px-8 animate-slide">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mr-3 border border-white/10">
<i className="fas fa-brain text-white"></i>
</div>
<span className="text-white text-xl font-semibold">Neural<span className="text-white/80">AI</span></span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white/80 hover:text-white transition-colors" href="#">Products</a>
<a className="text-white transition-colors border-b-2 border-white" href="#">Solutions</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Documentation</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors hidden md:block" href="#">Sign in</a>
<a className="py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors" href="#">Get Started</a>
<button className="md:hidden text-white"><i className="fas fa-bars"></i></button>
</div>
</div>
</nav>
<header className="relative z-10 pt-10 pb-16 px-4 md:px-8 animate-slide delay-1">
<div className="max-w-7xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">AI Solutions for Every Industry</h1>
<p className="text-lg text-white/80 max-w-2xl mx-auto">
        Discover how our AI technology can transform your industry with tailored solutions for your specific challenges.
      </p>
</div>
</header>
<section className="relative z-10 px-4 md:px-8 pb-16 animate-slide delay-2">
<div className="max-w-7xl mx-auto glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl text-white mb-4">Industry-Specific AI Solutions</h2>
<p className="text-white/80 mb-6">
            Our neural networks adapt to the unique requirements of different industries, providing targeted solutions that address specific pain points and create measurable value.
          </p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Healthcare</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Finance</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Manufacturing</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">Retail</span>
</div>
<a className="py-3 px-6 rounded-xl bg-white text-gray-900 font-medium inline-block" href="#">
            Book a Consultation
          </a>
</div>
<div className="relative h-64 md:h-80">
<div className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden">
<div className="orbit-container">
<div className="orbit-center">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/15 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
<div className="orbit-icon-1">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<i className="fas fa-heartbeat text-white"></i>
</div>
</div>
<div className="orbit-icon-2">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<i className="fas fa-chart-line text-white"></i>
</div>
</div>
<div className="orbit-icon-3">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<i className="fas fa-industry text-white"></i>
</div>
</div>
<div className="orbit-icon-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<i className="fas fa-shopping-cart text-white"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 px-4 md:px-8 pb-20">
<div className="max-w-7xl mx-auto">
<div className="mb-16 animate-slide delay-3">
<div className="flex items-center mb-6">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4">
<i className="fas fa-heartbeat text-white"></i>
</div>
<h2 className="text-2xl md:text-3xl text-white">Healthcare Solutions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6">
<h3 className="text-xl text-white mb-3">Diagnostic Assistance</h3>
<p className="text-white/70 mb-4">
              AI-powered image analysis to assist radiologists in detecting abnormalities in medical scans with higher accuracy.
            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-start text-white/80 text-sm">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>95% accuracy in early detection</span>
</li>
<li className="flex items-start text-white/80 text-sm">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>Reduces diagnostic time by 60%</span>
</li>
</ul>
<a className="text-white hover:text-white/80 flex items-center text-sm" href="#">
<span>Learn more</span>
<i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>
<div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6">
<h3 className="text-xl text-white mb-3">Patient Monitoring</h3>
<p className="text-white/70 mb-4">
              Real-time analysis of patient vital signs to predict potential health issues before they become critical.
            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-start text-white/80 text-sm">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>24/7 automated monitoring</span>
</li>
<li className="flex items-start text-white/80 text-sm">
<i className="fas fa-check text-white mt-1 mr-3 w-4"></i>
<span>Early warning system reduces ICU admissions by 30%</span>
</li>
</ul>
<a className="text-white hover:text-white/80 flex items-center text-sm" href="#">
<span>Learn more</span>
<i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>
</div>
</div>
<div className="glass-effect bg-white/10 border border-white/15 rounded-2xl p-8 text-center animate-slide delay-4">
<h2 className="text-2xl md:text-3xl text-white mb-4">Success Stories</h2>
<p className="text-white/80 mb-8 max-w-2xl mx-auto">
          See how leading organizations have transformed their operations with our AI solutions.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 rounded-xl p-5 animate-slide delay-4">
<img alt="Memorial Healthcare" className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
<h3 className="text-lg text-white mb-2">Memorial Healthcare</h3>
<p className="text-white/70 text-sm">Reduced diagnostic errors by 45% and improved patient outcomes with our AI imaging solution.</p>
</div>
<div className="bg-white/5 rounded-xl p-5 animate-slide delay-4">
<img alt="Global Financial" className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
<h3 className="text-lg text-white mb-2">Global Financial</h3>
<p className="text-white/70 text-sm">Prevented $15M in fraud losses in the first year after implementing our AI security system.</p>
</div>
<div className="bg-white/5 rounded-xl p-5 animate-slide delay-5">
<img alt="TechManufacturing" className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover" src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
<h3 className="text-lg text-white mb-2">TechManufacturing</h3>
<p className="text-white/70 text-sm">Increased production efficiency by 32% while reducing quality control issues by 60%.</p>
</div>
</div>
<a className="mt-8 py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium inline-block border border-white/10 transition-all animate-slide delay-5" href="#">
          View All Case Studies
        </a>
</div>
</div>
</section>




    </>
  );
}
