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

          // Main thin line
          color += paintCircle(uv, center, radius, 0.035);

          // First super thin overlapping line (slightly smaller)
          color += paintCircle(uv, center, radius - 0.018, 0.01);

          // Second super thin overlapping line (slightly larger)
          color += paintCircle(uv, center, radius + 0.018, 0.005);

          // Colorize with gradient
          vec2 v = rotate2d(iTime) * uv;
          color *= vec3(v.x, v.y, 0.7-v.y*v.x);

          // Paint white circle (now even thinner for highlight)
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

      // Fullscreen quad
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
      
      // Add animation for testimonials
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonial-blur');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.testimonial-card').forEach(card => 
        observer.observe(card)
      );
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
<section className="py-24 min-h-screen relative overflow-hidden flex items-center">
<div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-light mb-4 testimonial-card testimonial-delay-1" style={{letterSpacing: '-0.02em'}}>
<span className="bg-gradient-to-br from-blue-300 to-indigo-500 bg-clip-text text-transparent">
            What Our Clients Say
          </span>
</h2>
<p className="text-blue-200 text-lg md:text-xl max-w-xl mx-auto testimonial-card testimonial-delay-2">Real feedback from our valued customers worldwide</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-1">
<img alt="Emily R." className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 shadow-lg" src="https://randomuser.me/api/portraits/women/54.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            "Absolutely stunning platform—easy to use, powerful, and the support team is always available when I need them."
          </p>
<div className="mt-2 text-left">
<span className="block text-blue-300 font-semibold">Emily R.</span>
<span className="block text-gray-400 text-sm">Product Manager, Delicate Labs</span>
</div>
</div>

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-2">
<img alt="Michael B." className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 shadow-lg" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            "The customizable themes and seamless integration have transformed the way our team collaborates—can't recommend enough!"
          </p>
<div className="mt-2 text-left">
<span className="block text-blue-300 font-semibold">Michael B.</span>
<span className="block text-gray-400 text-sm">CTO, CreativeFlow</span>
</div>
</div>

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-3">
<img alt="Sara A." className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 shadow-lg" src="https://randomuser.me/api/portraits/women/67.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            "The analytics dashboard is a true game-changer. Insightful and intuitive—our decision making has never been more data-driven."
          </p>
<div className="mt-2 text-left">
<span className="block text-blue-300 font-semibold">Sara A.</span>
<span className="block text-gray-400 text-sm">CEO, Visionary Inc.</span>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
