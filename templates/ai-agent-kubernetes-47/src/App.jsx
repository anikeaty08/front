import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
'inter': ['Inter', 'sans-serif'],
},
colors: {
fire: {
500: '#ef4444',
900: '#7f1d1d',
}
}
}
}
}



        // Shader background
        const shaderCanvas = document.getElementById('shaderCanvas');
        const gl = shaderCanvas.getContext('webgl');
        
        function resizeCanvas() {
            shaderCanvas.width = window.innerWidth;
            shaderCanvas.height = window.innerHeight;
            gl.viewport(0, 0, shaderCanvas.width, shaderCanvas.height);
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;
            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;
            const int POINTS = 16;
            const float WAVE_OFFSET = 12000.0;
            const float SPEED = 1.0 / 16.0; 
            const float COLOR_SPEED = 1.0 / 10.0;
            uniform float BRIGHTNESS;

            // Voronoi noise logic
            void voronoi(vec2 uv, inout vec3 col) {
                vec3 voronoi = vec3(0.0);
                float time = (iTime + WAVE_OFFSET) * SPEED;
                float bestDistance = 999.0;
                float lastBestDistance = bestDistance;
                for (int i = 0; i < POINTS; i++) {
                    float fi = float(i);
                    // Add organic movement
                    vec2 p = vec2(mod(fi, 1.0) * 0.1 + sin(fi), -0.05 + 0.15 * float(i / 10) + cos(fi + time * cos(uv.x * 0.025)));
                    p.x += 0.01 * sin(iMouse.x / iResolution.x * 3.14);
                    p.y += 0.01 * cos(iMouse.y / iResolution.y * 3.14);
                    float d = distance(uv, p);
                    if (d < bestDistance) {
                        lastBestDistance = bestDistance;
                        bestDistance = d;
                        voronoi.x = p.x;
                        voronoi.yz = vec2(p.x * 0.4 + p.y, p.y) * vec2(0.9, 0.87);
                    }
                }
                // Darken cells logic - deeper contrast for magma
                col *= 0.5 + 0.4 * voronoi;
                
                // Add glowing edges (magma cracks) - Crimson/Orange
                float edge = 1.0 - abs(bestDistance - lastBestDistance);
                // Intense Orange Core
                col += vec3(0.95, 0.3, 0.05) * smoothstep(0.985, 1.02, edge) * 0.6;
                // Red Glow
                col += vec3(0.8, 0.1, 0.0) * smoothstep(0.94, 1.0, edge) * 0.2;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy/iResolution.xy;
                
                // --- Background Fire/Magma Gradient ---
                float t = iTime * COLOR_SPEED;
                
                // Base colors: Darkened for Crimson look
                vec3 deepCrimson = vec3(0.08, 0.0, 0.0); // Very dark red/black
                vec3 fireRed = vec3(0.6, 0.05, 0.0);     // Crimson
                vec3 emberOrange = vec3(0.8, 0.25, 0.0); // Orange
                
                // Create a slow moving smoke/fire gradient
                float noise = sin(uv.x * 2.0 + t) * cos(uv.y * 3.0 - t * 0.5);
                
                // Mix towards darker red
                vec3 baseCol = mix(deepCrimson, fireRed, 0.5 + 0.5 * noise);
                
                // Add ember highlights
                baseCol = mix(baseCol, emberOrange, smoothstep(0.6, 1.0, noise) * 0.4);
                
                // Add subtle vertical gradient (darker at bottom)
                baseCol *= smoothstep(-0.4, 1.1, uv.y);

                // Apply Voronoi texture
                voronoi(uv * 4.0 - 1.0, baseCol);
                
                // Final color grading
                gl_FragColor = vec4(baseCol, 1.0) * BRIGHTNESS;
            }
        `;

        function compileShader(source, type) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const positionAttribLocation = gl.getAttribLocation(program, 'a_position');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'iResolution');
        const timeUniformLocation = gl.getUniformLocation(program, 'iTime');
        const mouseUniformLocation = gl.getUniformLocation(program, 'iMouse');
        const brightnessUniformLocation = gl.getUniformLocation(program, 'BRIGHTNESS');

        gl.enableVertexAttribArray(positionAttribLocation);
        gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, false, 0, 0);

        let startTime = Date.now();
        let brightness = 0.85; // slightly lower brightness for darker mood
        let mouseX = shaderCanvas.width / 2;
        let mouseY = shaderCanvas.height / 2;

        shaderCanvas.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function render() {
            requestAnimationFrame(render);
            const elapsedTime = (Date.now() - startTime) / 1000;
            gl.useProgram(program);
            gl.uniform2f(resolutionUniformLocation, shaderCanvas.width, shaderCanvas.height);
            gl.uniform1f(timeUniformLocation, elapsedTime);
            gl.uniform2f(mouseUniformLocation, mouseX, mouseY);
            gl.uniform1f(brightnessUniformLocation, brightness);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        
        requestAnimationFrame(render);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="shaderCanvas"></canvas>

<nav className="container mx-auto px-6 py-6 relative z-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-red-500 flex items-center justify-center">
<iconify-icon height="32" icon="solar:bonfire-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xl font-jakarta font-semibold tracking-tight">Ignite</span>
</div>
<div className="hidden md:flex space-x-10 text-base font-inter text-gray-300">
<a className="hover:text-red-400 transition-colors" href="#">Platform</a>
<a className="hover:text-red-400 transition-colors" href="#">Solutions</a>
<a className="hover:text-red-400 transition-colors" href="#">Developers</a>
<a className="hover:text-red-400 transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm font-inter glass rounded-md px-4 py-2 hover:bg-red-900/20 hover:border-red-500/30 text-gray-200 transition-all flex items-center gap-2">
<span>Login</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>
<div className="h-px glass-divider relative z-10"></div>
<div className="relative overflow-hidden">

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col items-center text-center">

<div className="max-w-4xl mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-red-500/20 mb-8">
<span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
<span className="text-xs font-medium text-red-200 uppercase tracking-wider">v2.0 Now Available</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-jakarta font-semibold tracking-tight mb-6 leading-tight">
<span className="fire-gradient-text">Ignite</span>
                        your creative potential
                    </h1>
<p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-inter font-light tracking-normal leading-relaxed">
                        Scale your infrastructure with a platform forged for speed. Experience the heat of real-time performance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-red-700 to-orange-600 text-white font-inter font-medium text-base rounded-md px-8 py-4 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
<iconify-icon height="20" icon="solar:rocket-linear" width="20"></iconify-icon>
                            Start Building
                        </button>
<button className="glass font-inter text-base rounded-md px-8 py-4 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Live Demo
                        </button>
</div>
</div>
</div>
<div className="h-px glass-divider my-16 opacity-50"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="glass rounded-lg p-6 text-center group hover:border-red-500/30 transition-colors">
<div className="mb-3 flex justify-center text-red-400">
<iconify-icon height="32" icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<p className="text-3xl font-jakarta font-semibold mb-1 tracking-tight text-white">100ms</p>
<p className="text-gray-400 font-inter text-sm font-light">Latency</p>
</div>
<div className="glass rounded-lg p-6 text-center group hover:border-red-500/30 transition-colors">
<div className="mb-3 flex justify-center text-red-400">
<iconify-icon height="32" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<p className="text-3xl font-jakarta font-semibold mb-1 tracking-tight text-white">50k+</p>
<p className="text-gray-400 font-inter text-sm font-light">Active Teams</p>
</div>
<div className="glass rounded-lg p-6 text-center group hover:border-red-500/30 transition-colors">
<div className="mb-3 flex justify-center text-red-400">
<iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<p className="text-3xl font-jakarta font-semibold mb-1 tracking-tight text-white">Secure</p>
<p className="text-gray-400 font-inter text-sm font-light">End-to-End</p>
</div>
<div className="glass rounded-lg p-6 text-center group hover:border-red-500/30 transition-colors">
<div className="mb-3 flex justify-center text-red-400">
<iconify-icon height="32" icon="solar:globe-linear" width="32"></iconify-icon>
</div>
<p className="text-3xl font-jakarta font-semibold mb-1 tracking-tight text-white">Global</p>
<p className="text-gray-400 font-inter text-sm font-light">Availability</p>
</div>
</div>
</div>
</div>


    </>
  );
}
