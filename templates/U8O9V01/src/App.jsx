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



    let isAnnual = true;
    
    function togglePricing() {
      isAnnual = !isAnnual;
      const toggle = document.getElementById('toggle-switch');
      const prices = document.querySelectorAll('.price');
      const periods = document.querySelectorAll('.period');
      
      if (isAnnual) {
        toggle.classList.add('annual');
        prices[0].textContent = '$15';
        prices[1].textContent = '$39';
        prices[2].textContent = '$159';
        periods.forEach(p => p.textContent = '/month');
      } else {
        toggle.classList.remove('annual');
        prices[0].textContent = '$19';
        prices[1].textContent = '$49';
        prices[2].textContent = '$199';
        periods.forEach(p => p.textContent = '/month');
      }
    }
    
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
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
          vec2 diff = center-uv;
          float len = length(diff);
          len += variation(diff, vec2(0.0, 1.0), 5.0, 2.0);
          len -= variation(diff, vec2(1.0, 0.0), 5.0, 2.0);
          float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
          float angle = atan(diff.y, diff.x) / (2.0 * 3.14159) + 0.5;
          float hue = mod(angle + iTime * 0.1, 1.0);
          vec3 rainbow = hsv2rgb(vec3(hue, 0.8, 1.0));
          return vec3(circle) * rainbow;
        }
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          uv.x *= 1.5;
          uv.x -= 0.25;
          vec3 color = vec3(0.98);
          float radius = 0.35;
          vec2 center = vec2(0.5);
          vec3 accent = paintCircle(uv, center, radius, 0.035);
          accent += paintCircle(uv, center, radius - 0.018, 0.01);
          accent += paintCircle(uv, center, radius + 0.018, 0.005);
          accent += paintCircle(uv, center, radius, 0.003);
          color = mix(color, color - accent * 0.15, length(accent));
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

<div className="mb-10 flex items-center justify-center gap-4">
<span className="text-gray-500 text-sm">Monthly</span>
<div className="relative inline-block w-14 h-7 bg-gray-200 rounded-full cursor-pointer" onclick="togglePricing()">
<div className="toggle-switch annual absolute left-1 top-1 w-5 h-5 bg-blue-500 rounded-full" id="toggle-switch"></div>
</div>
<span className="text-gray-800 text-sm">Annual <span className="text-blue-500 text-xs">Save 20%</span></span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

<div className="glass-effect bg-white/40 border border-gray-200/40 rounded-2xl shadow-lg p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-rocket text-blue-500 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-gray-800">Starter</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="price text-4xl font-[200] text-gray-800">$15</span>
<span className="period text-sm text-gray-500 ml-2">/month</span>
</div>
<p className="text-gray-500 text-sm mt-1">Perfect for individuals and small projects</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>1 million tokens/month</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>5 custom AI models</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Basic API access</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Email support</span>
</li>
<li className="flex items-center text-gray-400 text-sm">
<i className="fas fa-minus text-gray-300 mr-3 w-4"></i>
<span>No custom training</span>
</li>
<li className="flex items-center text-gray-400 text-sm">
<i className="fas fa-minus text-gray-300 mr-3 w-4"></i>
<span>No dedicated resources</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/50 hover:bg-white/70 text-gray-800 text-sm font-medium transition-all duration-200 border border-gray-200/50">
            Start Free Trial
          </button>
<p className="text-gray-400 text-xs text-center mt-3">No credit card required</p>
</div>
</div>

<div className="glass-effect bg-white/50 border border-blue-300/60 rounded-2xl shadow-xl p-6 flex flex-col h-full relative z-10 transform scale-105">

<div className="pricing-badge">MOST POPULAR</div>

<div className="flex items-center mb-4">
<div className="icon-circle bg-blue-100 border-blue-300">
<i className="fas fa-bolt text-blue-600 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-gray-800">Professional</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="price text-4xl font-[200] text-gray-800">$39</span>
<span className="period text-sm text-gray-500 ml-2">/month</span>
</div>
<p className="text-gray-500 text-sm mt-1">For teams with advanced AI needs</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>10 million tokens/month</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>20 custom AI models</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Advanced API access</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Priority support</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Basic custom training</span>
</li>
<li className="flex items-center text-gray-400 text-sm">
<i className="fas fa-minus text-gray-300 mr-3 w-4"></i>
<span>No dedicated resources</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200">
            Get Started
          </button>
<p className="text-gray-400 text-xs text-center mt-3">14-day free trial included</p>
</div>
</div>

<div className="glass-effect bg-white/40 border border-gray-200/40 rounded-2xl shadow-lg p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-building text-indigo-500 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-gray-800">Enterprise</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="price text-4xl font-[200] text-gray-800">$159</span>
<span className="period text-sm text-gray-500 ml-2">/month</span>
</div>
<p className="text-gray-500 text-sm mt-1">For organizations with advanced requirements</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Unlimited tokens</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Unlimited custom AI models</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Full API ecosystem</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>24/7 dedicated support</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Advanced custom training</span>
</li>
<li className="flex items-center text-gray-700 text-sm">
<i className="fas fa-check text-blue-500 mr-3 w-4"></i>
<span>Dedicated resources</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/50 hover:bg-white/70 text-gray-800 text-sm font-medium transition-all duration-200 border border-gray-200/50">
            Contact Sales
          </button>
<p className="text-gray-400 text-xs text-center mt-3">Custom pricing available</p>
</div>
</div>
</div>

<div className="mt-16 text-center max-w-2xl">
<p className="text-gray-500 text-sm">All plans include core features: Standard AI models, REST API, 99.9% uptime SLA, Standard encryption, and Community access.</p>
<div className="flex flex-wrap justify-center gap-4 mt-6">
<span className="text-[12px] text-gray-600 px-3 py-1 rounded-full bg-white/40 border border-gray-200/40">GDPR COMPLIANT</span>
<span className="text-[12px] text-gray-600 px-3 py-1 rounded-full bg-white/40 border border-gray-200/40">SOC 2 CERTIFIED</span>
<span className="text-[12px] text-gray-600 px-3 py-1 rounded-full bg-white/40 border border-gray-200/40">HIPAA READY</span>
<span className="text-[12px] text-gray-600 px-3 py-1 rounded-full bg-white/40 border border-gray-200/40">ISO 27001</span>
</div>
</div>
</div>

    </>
  );
}
