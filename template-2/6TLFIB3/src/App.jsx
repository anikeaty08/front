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
          color *= vec3(0.2, 0.5, 0.9-v.y*v.x);
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

<div className="w-full max-w-5xl mx-auto text-center mb-12">
<h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
        Let's Set Up Your Learning Path
      </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
        Complete these four steps to create a personalized learning experience tailored to your goals and interests.
      </p>
</div>

<div className="flex justify-center items-center w-full max-w-3xl mb-12">
<div className="flex flex-col md:flex-row justify-between w-full gap-2 md:gap-4">

<div className="flex flex-1 items-center">
<div className="step-active w-10 h-10 rounded-full border flex items-center justify-center text-blue-400">
<i className="fas fa-star"></i>
</div>
<div className="h-1 flex-grow hidden md:block bg-gradient-to-r from-blue-500/50 to-white/10"></div>
</div>

<div className="flex flex-1 items-center">
<div className="step-inactive w-10 h-10 rounded-full border flex items-center justify-center text-white/50">
<i className="fas fa-flag"></i>
</div>
<div className="h-1 flex-grow hidden md:block bg-white/10"></div>
</div>

<div className="flex flex-1 items-center">
<div className="step-inactive w-10 h-10 rounded-full border flex items-center justify-center text-white/50">
<i className="fas fa-sliders"></i>
</div>
<div className="h-1 flex-grow hidden md:block bg-white/10"></div>
</div>

<div className="flex items-center">
<div className="step-inactive w-10 h-10 rounded-full border flex items-center justify-center text-white/50">
<i className="fas fa-route"></i>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between w-full max-w-3xl mb-8 gap-2 md:gap-0">
<div className="text-center">
<p className="text-blue-400 font-medium">Step 1</p>
<p className="text-white text-sm">Choose Your Interests</p>
</div>
<div className="text-center">
<p className="text-white/50 font-medium">Step 2</p>
<p className="text-white/50 text-sm">Set Learning Goal</p>
</div>
<div className="text-center">
<p className="text-white/50 font-medium">Step 3</p>
<p className="text-white/50 text-sm">Customize Experience</p>
</div>
<div className="text-center">
<p className="text-white/50 font-medium">Step 4</p>
<p className="text-white/50 text-sm">Build First Path</p>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/15 to-white/5 border border-white/15 rounded-2xl shadow-xl p-8 w-full max-w-3xl">

<div className="step-content" id="step1">
<div className="flex items-center mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
<i className="fas fa-star text-blue-400"></i>
</div>
<h3 className="ml-4 text-2xl text-white">Choose Your Interests</h3>
</div>
<p className="text-white/70 mb-8">Select topics that interest you the most. We'll use these to recommend courses and learning paths that match your preferences.</p>

<div className="flex flex-wrap gap-3 mb-8">
<div className="interest-tag">
<input className="hidden" id="programming" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="programming">
<i className="fas fa-code mr-2"></i> Programming
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="data-science" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="data-science">
<i className="fas fa-chart-line mr-2"></i> Data Science
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="ai" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="ai">
<i className="fas fa-robot mr-2"></i> Artificial Intelligence
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="design" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="design">
<i className="fas fa-paint-brush mr-2"></i> Design
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="business" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="business">
<i className="fas fa-briefcase mr-2"></i> Business
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="marketing" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="marketing">
<i className="fas fa-bullhorn mr-2"></i> Marketing
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="language" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="language">
<i className="fas fa-language mr-2"></i> Languages
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="science" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="science">
<i className="fas fa-flask mr-2"></i> Science
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="health" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="health">
<i className="fas fa-heartbeat mr-2"></i> Health
            </label>
</div>
<div className="interest-tag">
<input className="hidden" id="photography" type="checkbox" />
<label className="cursor-pointer px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-colors flex items-center" htmlFor="photography">
<i className="fas fa-camera mr-2"></i> Photography
            </label>
</div>
</div>

<div className="mb-8">
<h4 className="text-white/80 text-sm mb-3">Suggested for you based on your profile:</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="glass-effect p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
<div className="flex items-center">
<i className="fas fa-laptop-code text-blue-400 mr-3"></i>
<div>
<p className="text-white text-sm font-medium">Web Development</p>
<p className="text-white/60 text-xs">Front-end, back-end, and full stack</p>
</div>
</div>
</div>
<div className="glass-effect p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
<div className="flex items-center">
<i className="fas fa-project-diagram text-blue-400 mr-3"></i>
<div>
<p className="text-white text-sm font-medium">Project Management</p>
<p className="text-white/60 text-xs">Agile, Scrum, and leadership</p>
</div>
</div>
</div>
</div>
</div>
<div className="card-divider w-full my-8"></div>

<div className="flex justify-between">
<button className="px-6 py-2 rounded-lg bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 transition-colors">
            Skip
          </button>
<button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors">
            Continue <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
</div>

<div className="mt-12 w-full max-w-3xl">
<div className="flex items-start gap-4 glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
<i className="fas fa-lightbulb text-yellow-300 text-sm"></i>
</div>
</div>
<div>
<h4 className="text-white text-lg mb-1">Pro Tip</h4>
<p className="text-white/70 text-sm">Choose at least 3-5 interests for the best learning recommendations. You can always update your interests later from your profile settings.</p>
</div>
</div>
</div>
</div>

    </>
  );
}
