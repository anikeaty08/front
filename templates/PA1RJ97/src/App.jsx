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
                
                float noise(vec2 p) {
                    return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
                }
                
                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    float grid = smoothstep(0.0, 0.02, mod(uv.x * 40.0, 1.0)) * 
                                smoothstep(0.0, 0.02, mod(uv.y * 40.0, 1.0));
                    
                    float n = noise(uv * 100.0 + iTime * 0.1) * 0.01;
                    
                    vec3 color = vec3(0.98, 0.98, 0.98);
                    color += vec3(0.545, 0.361, 0.965) * grid * 0.06;
                    color += n;
                    
                    // Subtle gradient
                    color += vec3(0.545, 0.361, 0.965) * (1.0 - length(uv - 0.5)) * 0.03;
                    
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
                -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
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
<div className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">

<div className="rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.1),inset_0_-2px_6px_0_rgba(0,0,0,0.05)] bg-[#f1f5f9] p-2 w-[375px] h-[812px] relative border border-[#e2e8f0]">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[28px] bg-[#1e293b] rounded-b-[14px] z-10"></div>

<div className="bg-white rounded-[42px] w-full h-full overflow-hidden relative border border-[#f1f5f9] shadow-inner">

<div className="flex justify-between items-center px-6 pt-9 pb-2 text-[#1e293b]">
<div className="text-sm font-medium">9:41</div>
<div className="flex items-center gap-1 text-xs">
<div className="flex gap-1">
<div className="w-1 h-3 bg-[#1e293b] rounded-full"></div>
<div className="w-1 h-3 bg-[#1e293b] rounded-full opacity-75"></div>
<div className="w-1 h-3 bg-[#1e293b] rounded-full opacity-50"></div>
<div className="w-1 h-3 bg-[#1e293b] rounded-full opacity-25"></div>
</div>
<div className="ml-2 w-6 h-3 border border-[#1e293b] rounded-sm">
<div className="w-4 h-1.5 bg-[#22c55e] rounded-sm m-0.5"></div>
</div>
</div>
</div>

<div className="absolute inset-0 podcast-grid"></div>

<div className="px-8 py-4 flex flex-col h-full relative z-10">

<div className="flex-1 flex items-center justify-center mb-8">
<div className="relative">

<div className="absolute inset-0 w-48 h-48 rounded-full border border-[#8b5cf6]/15 pulse-ring"></div>
<div className="absolute inset-4 w-40 h-40 rounded-full border border-[#8b5cf6]/25 pulse-ring" style={{animationDelay: '0.5s'}}></div>

<div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#8b5cf6]/8 to-[#8b5cf6]/4 border border-[#8b5cf6]/15 flex items-center justify-center float-animation shadow-lg">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center relative shadow-xl">
<i className="fas fa-microphone text-white text-2xl"></i>
<div className="absolute inset-0 rounded-full bg-[#8b5cf6] opacity-30 animate-ping"></div>
</div>
</div>

<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-end gap-1">
<div className="w-1 bg-[#8b5cf6] rounded soundwave" style={{animationDelay: '0s'}}></div>
<div className="w-1 bg-[#8b5cf6] rounded soundwave" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-[#8b5cf6] rounded soundwave" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-[#8b5cf6] rounded soundwave" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 bg-[#8b5cf6] rounded soundwave" style={{animationDelay: '0.4s'}}></div>
</div>
</div>
</div>

<div className="text-center mb-8">
<h1 className="text-2xl font-semibold text-[#1e293b] mb-3 tracking-tight">
                            Welcome to PodCast
                        </h1>
<p className="text-[#64748b] text-sm leading-relaxed px-2">
                            Discover, listen, and explore millions of podcasts. Your personal audio journey starts here with curated content just for you.
                        </p>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-[#1e293b] text-xs">
<div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-md">
<i className="fas fa-headphones text-xs text-white"></i>
</div>
<span>Millions of podcasts at your fingertips</span>
</div>
<div className="flex items-center gap-3 text-[#1e293b] text-xs">
<div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-md">
<i className="fas fa-download text-xs text-white"></i>
</div>
<span>Download episodes for offline listening</span>
</div>
<div className="flex items-center gap-3 text-[#1e293b] text-xs">
<div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-md">
<i className="fas fa-heart text-xs text-white"></i>
</div>
<span>Personalized recommendations based on your taste</span>
</div>
</div>

<div className="flex justify-center gap-2 mb-8">
<div className="step-indicator active"></div>
<div className="step-indicator"></div>
<div className="step-indicator"></div>
</div>

<div className="space-y-3 mb-6">
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-medium text-sm hover:from-[#7c3aed] hover:to-[#6d28d9] transition-all shadow-lg">
                            Start Listening
                        </button>
<button className="w-full py-3 rounded-lg border border-[#e2e8f0] text-[#1e293b] font-medium text-sm hover:bg-[#f8fafc] transition-colors shadow-sm flex items-center justify-center gap-2">
<i className="fab fa-spotify text-green-500"></i>
                            Continue with Spotify
                        </button>
</div>

<div className="text-center">
<button className="text-[#64748b] text-sm hover:text-[#1e293b] transition-colors">
                            Browse without account
                        </button>
</div>

<div className="flex justify-center mt-4">
<div className="w-32 h-1 bg-[#e2e8f0] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
