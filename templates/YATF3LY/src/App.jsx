import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    window.onload = function() {
      const canvas = document.getElementById('shader-canvas');
      const gl = canvas.getContext('webgl');
      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      resize();
      window.addEventListener('resize', resize);

      const vertexShaderSource = `
        attribute vec2 aPosition;
        void main() {
          gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `;
      const fragmentShaderSource = `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        mat2 rotate2d(float angle){
          float c = cos(angle), s = sin(angle);
          return mat2(c, -s, s, c);
        }
        float variation(vec2 v1, vec2 v2, float strength, float speed) {
          return sin(
              dot(normalize(v1), normalize(v2)) * strength + iTime * speed
          ) / 100.0;
        }
        vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
          vec2 diff = center-uv;
          float len = length(diff);
          len += variation(diff, vec2(0.0, 1.0), 5.0, 2.0);
          len -= variation(diff, vec2(1.0, 0.0), 5.0, 2.0);
          float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
          return vec3(circle);
        }
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          uv.x *= 1.5;
          uv.x -= 0.25;
          vec3 color = vec3(0.0);
          float radius = 0.35;
          vec2 center = vec2(0.5);
          color += paintCircle(uv, center, radius, 0.035);
          color += paintCircle(uv, center, radius - 0.018, 0.01);
          color += paintCircle(uv, center, radius + 0.018, 0.005);
          vec2 v = rotate2d(iTime) * uv;
          color *= vec3(v.x, v.y, 0.7-v.y*v.x);
          color += paintCircle(uv, center, radius, 0.003);
          gl_FragColor = vec4(color, 1.0);
        }
      `;
      function compileShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw new Error(gl.getShaderInfoLog(shader));
        }
        return shader;
      }
      const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program));
      }
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]), gl.STATIC_DRAW);
      const aPosition = gl.getAttribLocation(program, 'aPosition');
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      const iTimeLoc = gl.getUniformLocation(program, 'iTime');
      const iResLoc = gl.getUniformLocation(program, 'iResolution');
      function render(time) {
        gl.uniform1f(iTimeLoc, time * 0.001);
        gl.uniform2f(iResLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    };
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="shader-canvas"></canvas>

<nav className="relative z-20 glass-effect bg-white/5 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="logo-circle mr-3"></div>
<span className="text-white font-semibold text-lg">Aura</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white/70 hover:text-white text-sm transition-colors" href="#">Features</a>
<a className="text-white/70 hover:text-white text-sm transition-colors" href="#">Pricing</a>
<a className="text-white/70 hover:text-white text-sm transition-colors" href="#">Docs</a>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors">
            Get Started
          </button>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-screen flex items-center justify-center px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">

<h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400 mb-6">
<span className="title-bold">The Future of AI</span>
<br/>
<span className="text-4xl md:text-6xl lg:text-7xl title-bold">is Here</span>
</h1>

<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          Transform your business with our cutting-edge AI platform. From natural language processing to computer vision, 
          unlock the power of artificial intelligence with simple, scalable solutions.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 pulse-glow">
            Start Building Now
          </button>
<button className="px-8 py-4 glass-effect bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl transition-all duration-200 border border-white/10">
<i className="fas fa-play mr-2"></i>
            Watch Demo
          </button>
</div>

<div className="flex flex-wrap justify-center gap-6 mb-16">
<span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10">
<i className="fas fa-shield-alt mr-2"></i>SOC 2 Certified
          </span>
<span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10">
<i className="fas fa-lock mr-2"></i>GDPR Compliant
          </span>
<span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10">
<i className="fas fa-chart-line mr-2"></i>99.9% Uptime
          </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 floating-animation">
<div className="feature-icon mb-4">
<i className="fas fa-brain text-blue-400"></i>
</div>
<h3 className="text-xl text-white mb-3">Advanced NLP</h3>
<p className="text-white/70 text-sm leading-relaxed">
            Process and understand human language with state-of-the-art models trained on billions of parameters.
          </p>
<div className="mt-4 flex items-center text-blue-400 text-sm">
<span>Learn more</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 floating-animation" style={{animationDelay: '-2s'}}>
<div className="feature-icon mb-4">
<i className="fas fa-eye text-indigo-400"></i>
</div>
<h3 className="text-xl text-white mb-3">Computer Vision</h3>
<p className="text-white/70 text-sm leading-relaxed">
            Analyze images and videos with precision. Detect objects, recognize faces, and extract insights automatically.
          </p>
<div className="mt-4 flex items-center text-indigo-400 text-sm">
<span>Learn more</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 floating-animation" style={{animationDelay: '-4s'}}>
<div className="feature-icon mb-4">
<i className="fas fa-chart-area text-purple-400"></i>
</div>
<h3 className="text-xl text-white mb-3">Predictive Analytics</h3>
<p className="text-white/70 text-sm leading-relaxed">
            Forecast trends and make data-driven decisions with our machine learning algorithms and predictive models.
          </p>
<div className="mt-4 flex items-center text-purple-400 text-sm">
<span>Learn more</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
<div className="text-center">
<div className="text-3xl md:text-4xl font-[200] text-white mb-2">10M+</div>
<div className="text-sm text-white/60">API Calls Daily</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-[200] text-white mb-2">50ms</div>
<div className="text-sm text-white/60">Average Latency</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-[200] text-white mb-2">99.9%</div>
<div className="text-sm text-white/60">Uptime SLA</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-[200] text-white mb-2">500+</div>
<div className="text-sm text-white/60">Enterprise Clients</div>
</div>
</div>
</div>
</div>

    </>
  );
}
