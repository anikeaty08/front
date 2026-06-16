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
                    float n = noise(uv * 200.0 + iTime * 2.0) * 0.02;
                    float dist = length(uv - 0.5);
                    float vignette = 1.0 - smoothstep(0.4, 1.0, dist);
                    vec3 color = vec3(0.05, 0.08, 0.15);
                    color += vec3(0.1, 0.2, 0.4) * (sin(iTime * 0.3 + uv.x * 2.0) * 0.3 + 0.3);
                    color += n;
                    color *= vignette;
                    gl_FragColor = vec4(color, 1.0);
                }
            `;
            function compileShader(type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }
            const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
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

<nav className="relative z-50 px-6 py-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-white font-medium text-lg font-heading">FocusLens_Pro</div>
<div className="hidden md:flex space-x-8 text-white/80 text-sm">
<a className="hover:text-white transition-colors" href="#">features</a>
<a className="hover:text-white transition-colors" href="#">gallery</a>
<a className="hover:text-white transition-colors" href="#">reviews</a>
<a className="hover:text-white transition-colors" href="#">download</a>
</div>
<button className="md:hidden text-white">
<i className="fas fa-bars"></i>
</button>
</div>
</nav>

<div className="relative z-10 min-h-screen flex items-center justify-center px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left space-y-8">
<div className="space-y-6">
<h1 className="text-5xl lg:text-6xl font-heading hero-text leading-tight">
                        professional
                        <span className="block text-blue-500">camera_app</span>
                        experience
                    </h1>
<p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        capture_stunning_moments with advanced ai-powered camera controls, 
                        professional-grade editing tools, and intuitive interface design.
                    </p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 text-gray-300 text-sm">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span>professional_manual_controls</span>
</div>
<div className="flex items-center gap-3 text-gray-300 text-sm">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span>ai_powered_auto_focus_system</span>
</div>
<div className="flex items-center gap-3 text-gray-300 text-sm">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span>real_time_editing_capabilities</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="fas fa-download"></i>
                        download_now
                    </button>
<button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="fas fa-play"></i>
                        watch_demo
                    </button>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
<div className="text-center">
<div className="text-2xl font-heading text-white">4.9</div>
<div className="text-xs text-gray-400">app_rating</div>
</div>
<div className="text-center">
<div className="text-2xl font-heading text-white">2M+</div>
<div className="text-xs text-gray-400">downloads</div>
</div>
<div className="text-center">
<div className="text-2xl font-heading text-white">50K+</div>
<div className="text-xs text-gray-400">reviews</div>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-end">
<div className="camera-float">
<div className="rounded-[54px] shadow-[0_50px_100px_-20px_rgba(59,130,246,0.3),0_30px_60px_-30px_rgba(0,0,0,0.8)] bg-[#1a1a1a] p-2 w-[320px] h-[640px] relative border border-blue-500/20">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[12px] z-50"></div>
<div className="bg-black rounded-[42px] w-full h-full overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-cyan-900/20">
<div className="absolute inset-0 viewfinder-grid"></div>
</div>

<div className="absolute top-0 left-0 right-0 z-40 pt-8 pb-4 px-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-2 py-1">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full recording-dot"></div>
<span className="text-white text-xs">REC</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white float-icon">
<i className="fas fa-bolt text-xs text-cyan-400"></i>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
<div className="w-16 h-16 rounded-full focus-ring"></div>
</div>

<div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
<div className="bg-blue-600/80 backdrop-blur-md rounded-full px-2 py-1 text-white text-xs font-medium">
                                    ISO_400
                                </div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-40 pb-6 px-4">
<div className="bg-black/50 backdrop-blur-md rounded-full mb-4 flex justify-center">
<div className="flex items-center gap-4 px-4 py-2 rounded-full">
<span className="text-white/60 text-xs">VIDEO</span>
<span className="text-white font-medium text-xs">PHOTO</span>
<span className="text-white/60 text-xs">PORTRAIT</span>
</div>
</div>
<div className="flex items-center justify-between">
<button className="w-8 h-8 rounded-lg bg-gray-600 border border-white/30">
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg"></div>
</button>
<button className="shutter-button w-14 h-14 rounded-full shadow-xl relative">
<div className="absolute inset-1.5 rounded-full bg-white"></div>
</button>
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="fas fa-redo text-sm"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
