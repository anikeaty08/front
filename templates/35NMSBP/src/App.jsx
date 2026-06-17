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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<canvas id="shader-canvas"></canvas>
<div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">

<div className="w-full max-w-5xl mx-auto text-center mb-16">
<h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
        Flexible AI Solutions
      </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
        Choose the plan that works for your workflow. All plans include core features with flexible scaling options.
      </p>
</div>

<div className="mb-10 flex items-center justify-center gap-4">
<span className="text-white/70 text-sm">Monthly</span>
<div className="relative inline-block w-14 h-7 bg-white/10 rounded-full cursor-pointer">
<div className="absolute left-1 top-1 w-5 h-5 bg-blue-500 rounded-full transition-transform"></div>
</div>
<span className="text-white text-sm">Annual <span className="text-blue-400 text-xs">Save 20%</span></span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-rocket text-blue-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Starter</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$19</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">Perfect for individuals and small projects</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>1 million tokens/month</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>5 custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Basic API access</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Email support</span>
</li>
<li className="flex items-center text-white/50 text-sm">
<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
<span>No custom training</span>
</li>
<li className="flex items-center text-white/50 text-sm">
<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
<span>No dedicated resources</span>
</li>
</ul>

<div className="grid grid-cols-2 gap-4 my-6">
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">99.9%</div>
<div className="text-xs text-white/60 mt-1">Uptime</div>
</div>
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">120ms</div>
<div className="text-xs text-white/60 mt-1">Latency</div>
</div>
</div>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
            Start Free Trial
          </button>
<p className="text-white/50 text-xs text-center mt-3">No credit card required</p>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/15 to-white/5 border border-blue-500/30 rounded-2xl shadow-xl p-6 flex flex-col h-full relative z-10 transform scale-105">

<div className="pricing-badge">MOST POPULAR</div>

<div className="flex items-center mb-4">
<div className="icon-circle bg-blue-500/20 border-blue-400/30">
<i className="fas fa-bolt text-blue-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Professional</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$49</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">For teams with advanced AI needs</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>10 million tokens/month</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>20 custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Advanced API access</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Priority support</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Basic custom training</span>
</li>
<li className="flex items-center text-white/50 text-sm">
<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
<span>No dedicated resources</span>
</li>
</ul>

<div className="grid grid-cols-2 gap-4 my-6">
<div className="bg-blue-500/10 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">99.95%</div>
<div className="text-xs text-white/60 mt-1">Uptime</div>
</div>
<div className="bg-blue-500/10 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">80ms</div>
<div className="text-xs text-white/60 mt-1">Latency</div>
</div>
</div>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200">
            Get Started
          </button>
<p className="text-white/50 text-xs text-center mt-3">14-day free trial included</p>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-building text-indigo-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Enterprise</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$199</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">For organizations with advanced requirements</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Unlimited tokens</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Unlimited custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Full API ecosystem</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>24/7 dedicated support</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Advanced custom training</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Dedicated resources</span>
</li>
</ul>

<div className="grid grid-cols-2 gap-4 my-6">
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">99.99%</div>
<div className="text-xs text-white/60 mt-1">Uptime</div>
</div>
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-2xl font-[300] text-white">50ms</div>
<div className="text-xs text-white/60 mt-1">Latency</div>
</div>
</div>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
            Contact Sales
          </button>
<p className="text-white/50 text-xs text-center mt-3">Custom pricing available</p>
</div>
</div>
</div>

<div className="mt-16 text-center max-w-2xl">
<p className="text-white/50 text-sm">All plans include core features: Standard AI models, REST API, 99.9% uptime SLA, Standard encryption, and Community access.</p>
<div className="flex flex-wrap justify-center gap-4 mt-6">
<span className="text-[12px] text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10">GDPR COMPLIANT</span>
<span className="text-[12px] text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10">SOC 2 CERTIFIED</span>
<span className="text-[12px] text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10">HIPAA READY</span>
<span className="text-[12px] text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10">ISO 27001</span>
</div>
</div>
</div>

    </>
  );
}
