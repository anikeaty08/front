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
            const float SPEED = 1.0 / 12.0;
            const float COLOR_SPEED = 1.0 / 4.0;
            uniform float BRIGHTNESS;

            void voronoi(vec2 uv, inout vec3 col) {
                vec3 voronoi = vec3(0.0);
                float time = (iTime + WAVE_OFFSET) * SPEED;
                float bestDistance = 999.0;
                float lastBestDistance = bestDistance;
                for (int i = 0; i < POINTS; i++) {
                    float fi = float(i);
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
                col *= 0.68 + 0.19 * voronoi;
                col += smoothstep(0.99, 1.05, 1.0 - abs(bestDistance - lastBestDistance)) * 0.9;
                col += smoothstep(0.95, 1.01, 1.0 - abs(bestDistance - lastBestDistance)) * 0.1 * col;
                col += (voronoi) * 0.1 * smoothstep(0.5, 1.0, 1.0 - abs(bestDistance - lastBestDistance));
            }

            void main() {
                vec2 uv = gl_FragCoord.xy/iResolution.xy;
                vec3 col = 0.5 + 0.5*cos(iTime*COLOR_SPEED+uv.xyx+vec3(0,2,4));
                voronoi(uv * 4.0 - 1.0, col);
                gl_FragColor = vec4(col, 1.0) * BRIGHTNESS;
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
        let brightness = 0.8;
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
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl font-jakarta font-semibold tracking-tight">Orbital</span>
</div>
<div className="hidden md:flex space-x-10 text-base font-inter text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm font-inter glass rounded-md px-4 py-2 hover:bg-white/10 transition-all">
                    Sign in
                </button>
</div>
</div>
</nav>
<div className="h-px glass-divider relative z-10"></div>
<div className="relative overflow-hidden">

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col items-center text-center">

<div className="max-w-4xl mb-12">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-jakarta font-semibold tracking-tight mb-6 leading-tight">
<span className="contrast-gradient">Connect</span>
                        your world with precision
                    </h1>
<p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-inter font-light tracking-normal">
                        Build, track, and manage your projects with a seamless platform designed for modern teams.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="glass text-white font-inter font-medium text-base rounded-md px-8 py-4 hover:bg-white/15 transition-all">
                            Get started
                        </button>
<button className="glass font-inter text-base rounded-md px-8 py-4 hover:bg-white/10 transition-all">
                            View demo
                        </button>
</div>
</div>
</div>
<div className="h-px glass-divider my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="glass rounded-lg p-6 text-center">
<p className="text-4xl font-jakarta font-semibold mb-2 tracking-tight">93%</p>
<p className="text-gray-400 font-inter text-base font-light">Faster workflow</p>
</div>
<div className="glass rounded-lg p-6 text-center">
<p className="text-4xl font-jakarta font-semibold mb-2 tracking-tight">10k+</p>
<p className="text-gray-400 font-inter text-base font-light">Global users</p>
</div>
<div className="glass rounded-lg p-6 text-center">
<p className="text-4xl font-jakarta font-semibold mb-2 tracking-tight">24/7</p>
<p className="text-gray-400 font-inter text-base font-light">Support available</p>
</div>
<div className="glass rounded-lg p-6 text-center">
<p className="text-4xl font-jakarta font-semibold mb-2 tracking-tight">99.9%</p>
<p className="text-gray-400 font-inter text-base font-light">Uptime guarantee</p>
</div>
</div>
</div>
</div>


    </>
  );
}
