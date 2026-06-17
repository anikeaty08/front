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
                    
                    float n = noise(uv * 100.0 + iTime * 0.1) * 0.02;
                    
                    vec3 color = vec3(0.05, 0.07, 0.09);
                    color += vec3(0.36, 0.42, 0.82) * grid * 0.1;
                    color += n;
                    
                    // Subtle gradient
                    color += vec3(0.36, 0.42, 0.82) * (1.0 - length(uv - 0.5)) * 0.05;
                    
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

<div className="rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.6),inset_0_-2px_6px_0_rgba(0,0,0,0.3)] bg-[#161b22] p-2 w-[375px] h-[812px] relative border border-[#30363d]/50">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[28px] bg-black rounded-b-[14px] z-10"></div>

<div className="bg-[#0d1117] rounded-[42px] w-full h-full overflow-hidden relative border border-[#21262d]">

<div className="flex justify-between items-center px-6 pt-9 pb-2 text-[#f0f6fc]">
<div className="text-sm font-medium">9:41</div>
<div className="flex items-center gap-1 text-xs">
<div className="flex gap-1">
<div className="w-1 h-3 bg-[#f0f6fc] rounded-full"></div>
<div className="w-1 h-3 bg-[#f0f6fc] rounded-full opacity-75"></div>
<div className="w-1 h-3 bg-[#f0f6fc] rounded-full opacity-50"></div>
<div className="w-1 h-3 bg-[#f0f6fc] rounded-full opacity-25"></div>
</div>
<div className="ml-2 w-6 h-3 border border-[#f0f6fc] rounded-sm">
<div className="w-4 h-1.5 bg-[#f0f6fc] rounded-sm m-0.5"></div>
</div>
</div>
</div>

<div className="absolute inset-0 aura-grid"></div>

<div className="px-8 py-4 flex flex-col h-full relative z-10">

<div className="flex-1 flex items-center justify-center mb-8">
<div className="relative">

<div className="absolute inset-0 w-48 h-48 rounded-full border border-[#5e6ad2]/20 pulse-ring"></div>
<div className="absolute inset-4 w-40 h-40 rounded-full border border-[#5e6ad2]/30 pulse-ring" style={{animationDelay: '0.5s'}}></div>

<div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#5e6ad2]/10 to-[#5e6ad2]/5 border border-[#5e6ad2]/20 flex items-center justify-center float-animation">
<div className="w-24 h-24 rounded-full bg-[#5e6ad2] flex items-center justify-center relative">
<svg fill="none" height="40" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="m8 12 8 0"></path>
<path d="m12 8 0 8"></path>
</svg>
<div className="absolute inset-0 rounded-full bg-[#5e6ad2] opacity-50 animate-ping"></div>
</div>
</div>
</div>
</div>

<div className="text-center mb-8">
<h1 className="text-2xl font-semibold text-[#f0f6fc] mb-3 tracking-tight">
                            Welcome to Aura
                        </h1>
<p className="text-[#8b949e] text-sm leading-relaxed px-2">
                            Aura helps thousands of teams build great products. Streamline issues, projects, and product roadmaps.
                        </p>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-[#f0f6fc] text-xs">
<div className="w-5 h-5 rounded-full bg-[#5e6ad2] flex items-center justify-center">
<i className="fas fa-check text-xs text-white"></i>
</div>
<span>Built for speed with keyboard shortcuts</span>
</div>
<div className="flex items-center gap-3 text-[#f0f6fc] text-xs">
<div className="w-5 h-5 rounded-full bg-[#5e6ad2] flex items-center justify-center">
<i className="fas fa-check text-xs text-white"></i>
</div>
<span>Streamlined for focus and clarity</span>
</div>
<div className="flex items-center gap-3 text-[#f0f6fc] text-xs">
<div className="w-5 h-5 rounded-full bg-[#5e6ad2] flex items-center justify-center">
<i className="fas fa-check text-xs text-white"></i>
</div>
<span>Powerful workflows and automations</span>
</div>
</div>

<div className="flex justify-center gap-2 mb-8">
<div className="step-indicator active"></div>
<div className="step-indicator"></div>
<div className="step-indicator"></div>
</div>

<div className="space-y-3 mb-6">
<button className="w-full py-3 rounded-lg bg-[#5e6ad2] text-white font-medium text-sm hover:bg-[#6366f1] transition-colors">
                            Continue with Email
                        </button>
<button className="w-full py-3 rounded-lg border border-[#30363d] text-[#f0f6fc] font-medium text-sm hover:bg-[#21262d] transition-colors">
                            Sign in with GitHub
                        </button>
</div>

<div className="text-center">
<button className="text-[#8b949e] text-sm hover:text-[#f0f6fc] transition-colors">
                            Skip for now
                        </button>
</div>

<div className="flex justify-center mt-4">
<div className="w-32 h-1 bg-[#30363d] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
