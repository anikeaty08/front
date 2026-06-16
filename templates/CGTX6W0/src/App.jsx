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
                
                float noise(vec2 p) {
                    return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
                }
                
                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    // Simulate camera sensor noise
                    float n = noise(uv * 200.0 + iTime * 2.0) * 0.03;
                    
                    // Vignette effect
                    float dist = length(uv - 0.5);
                    float vignette = 1.0 - smoothstep(0.3, 0.8, dist);
                    
                    // Dynamic scene colors
                    vec3 color = vec3(0.1, 0.15, 0.3);
                    color += vec3(0.2, 0.4, 0.6) * (sin(iTime * 0.5 + uv.x * 3.14) * 0.5 + 0.5);
                    color += vec3(0.8, 0.6, 0.3) * (sin(iTime * 0.3 + uv.y * 2.0) * 0.3 + 0.3);
                    color += n;
                    color *= vignette;
                    
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
  }, []);

  return (
    <>
      
<canvas id="shader-canvas"></canvas>
<div className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">

<div className="rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_30px_60px_-30px_rgba(0,0,0,0.6)] bg-[#1a1a1a] p-2 w-[375px] h-[812px] relative border border-[#333]">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[28px] bg-black rounded-b-[14px] z-50"></div>

<div className="bg-black rounded-[42px] w-full h-full overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20">

<div className="absolute inset-0 viewfinder-grid"></div>

<div className="absolute inset-0 camera-overlay"></div>
</div>

<div className="absolute top-0 left-0 right-0 z-40 pt-12 pb-4 px-6">
<div className="flex justify-between items-center">

<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-times text-sm"></i>
</button>
<div className="flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1">
<div className="w-2 h-2 bg-red-500 rounded-full recording-dot"></div>
<span className="text-white text-xs font-medium">REC</span>
</div>
</div>

<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white float-icon">
<i className="fas fa-bolt text-sm text-yellow-400"></i>
</button>
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-cog text-sm"></i>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
<div className="w-24 h-24 rounded-full focus-ring"></div>
</div>

<div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30">
<div className="exposure-indicator rounded-full px-3 py-2 text-white text-xs font-medium">
                        ISO 400
                    </div>
<div className="exposure-indicator rounded-full px-3 py-2 text-white text-xs font-medium mt-2">
                        1/60s
                    </div>
</div>

<div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
<button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-sync-alt text-sm"></i>
</button>
<button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-adjust text-sm"></i>
</button>
<button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-palette text-sm"></i>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 z-40 pb-8 px-6">

<div className="mode-selector rounded-full mb-6 flex justify-center">
<div className="flex items-center gap-6 px-6 py-3 rounded-full">
<span className="text-white/60 text-sm">VIDEO</span>
<span className="text-white font-medium text-sm">PHOTO</span>
<span className="text-white/60 text-sm">PORTRAIT</span>
</div>
</div>

<div className="flex items-center justify-between">

<button className="w-12 h-12 rounded-xl bg-gray-600 border-2 border-white/30 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
</button>

<button className="shutter-button w-20 h-20 rounded-full shadow-xl relative">
<div className="absolute inset-2 rounded-full bg-white"></div>
</button>

<button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-redo text-lg"></i>
</button>
</div>

<div className="flex justify-center mt-4">
<div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3">
<span className="text-white/60 text-xs">0.5×</span>
<span className="text-white font-medium text-sm">1×</span>
<span className="text-white/60 text-xs">2×</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
