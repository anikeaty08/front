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
<div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
<div className="w-full max-w-5xl mx-auto text-center mb-14">
<h1 className="text-[48px] md:text-[64px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-cyan-300 to-blue-400" style={{fontFamily: `'Manrope',sans-serif`}}>
        Simple, transparent pricing
      </h1>
<p className="mt-3 text-[16px] md:text-[20px] text-white/80 max-w-2xl mx-auto" style={{fontFamily: `'Inter',sans-serif`}}>
        Choose a plan that fits your needs. Upgrade or downgrade anytime. No hidden fees, ever.
      </p>
</div>
<div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl">

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col">
<div className="mb-3">
<h2 className="text-[48px] font-[200] tracking-[-0.03em] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>
            Starter
          </h2>
<p className="text-[16px] text-white/70 mt-1" style={{fontFamily: `'Inter',sans-serif`}}>
            All the basics to get started for individuals.
          </p>
</div>
<div className="my-6 flex items-baseline gap-2">
<span className="text-[48px] font-[200] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>$9</span>
<span className="text-[14px] text-white/70" style={{fontFamily: `'Inter',sans-serif`}}>/mo</span>
</div>
<div className="card-divider w-full mb-5"></div>
<ul className="flex flex-col gap-2 text-[14px] text-white/90 mb-6" style={{fontFamily: `'Inter',sans-serif`}}>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 1 Project</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 5GB Storage</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> Community Support</li>
</ul>
<button className="mt-auto w-full py-2.5 rounded-xl bg-cyan-400/80 hover:bg-cyan-300 text-slate-900 font-semibold text-[14px] transition" style={{fontFamily: `'Inter',sans-serif`}}>
          Start Free
        </button>
</div>

<div className="glass-effect bg-gradient-to-br from-white/20 to-white/10 border border-cyan-400/30 rounded-2xl shadow-2xl flex-1 max-w-xs px-7 py-8 flex flex-col scale-105 relative ring-2 ring-cyan-400/20">
<div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-cyan-400 text-slate-900 shadow" style={{fontFamily: `'Inter',sans-serif`}}>
          Most Popular
        </div>
<div className="mb-3">
<h2 className="text-[48px] font-[200] tracking-[-0.03em] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>
            Pro
          </h2>
<p className="text-[16px] text-white/70 mt-1" style={{fontFamily: `'Inter',sans-serif`}}>
            For professionals scaling their operations.
          </p>
</div>
<div className="my-6 flex items-baseline gap-2">
<span className="text-[48px] font-[200] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>$29</span>
<span className="text-[14px] text-white/70" style={{fontFamily: `'Inter',sans-serif`}}>/mo</span>
</div>
<div className="card-divider w-full mb-5"></div>
<ul className="flex flex-col gap-2 text-[14px] text-white/90 mb-6" style={{fontFamily: `'Inter',sans-serif`}}>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 10 Projects</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 50GB Storage</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> Priority Support</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> Team Collaboration</li>
</ul>
<button className="mt-auto w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold text-[14px] transition" style={{fontFamily: `'Inter',sans-serif`}}>
          Try Pro
        </button>
</div>

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col">
<div className="mb-3">
<h2 className="text-[48px] font-[200] tracking-[-0.03em] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>
            Enterprise
          </h2>
<p className="text-[16px] text-white/70 mt-1" style={{fontFamily: `'Inter',sans-serif`}}>
            Custom solutions for growing teams.
          </p>
</div>
<div className="my-6 flex items-baseline gap-2">
<span className="text-[48px] font-[200] text-white" style={{fontFamily: `'Manrope',sans-serif`}}>$99</span>
<span className="text-[14px] text-white/70" style={{fontFamily: `'Inter',sans-serif`}}>/mo</span>
</div>
<div className="card-divider w-full mb-5"></div>
<ul className="flex flex-col gap-2 text-[14px] text-white/90 mb-6" style={{fontFamily: `'Inter',sans-serif`}}>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> Unlimited Projects</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 1TB Storage</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> 24/7 Support</li>
<li className="flex items-center gap-2"><i className="fa fa-check text-cyan-400"></i> Dedicated Manager</li>
</ul>
<button className="mt-auto w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-[14px] border border-white/20 transition" style={{fontFamily: `'Inter',sans-serif`}}>
          Contact Sales
        </button>
</div>
</div>
</div>

    </>
  );
}
