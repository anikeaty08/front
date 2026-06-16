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
                    float n = noise(uv * 200.0 + iTime * 1.5) * 0.03;
                    float dist = length(uv - 0.5);
                    float vignette = 1.0 - smoothstep(0.3, 1.0, dist);
                    
                    vec3 color = vec3(0.08, 0.1, 0.25);
                    
                    // Aurora waves
                    float wave1 = sin(iTime * 0.5 + uv.x * 3.0 + uv.y * 2.0) * 0.5 + 0.5;
                    float wave2 = sin(iTime * 0.3 + uv.x * 2.0 - uv.y * 3.0) * 0.5 + 0.5;
                    
                    color += vec3(0.2, 0.1, 0.4) * wave1 * 0.3;
                    color += vec3(0.1, 0.3, 0.6) * wave2 * 0.2;
                    color += vec3(0.4, 0.2, 0.6) * (sin(iTime * 0.2 + uv.y * 4.0) * 0.3 + 0.3) * 0.2;
                    
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
<div className="text-white font-medium text-lg font-heading">BookEase Pro</div>
<div className="hidden md:flex space-x-8 text-white/80 text-sm">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="md:hidden text-white">
<i className="fas fa-bars"></i>
</button>
</div>
</nav>

<div className="relative z-10 min-h-screen flex items-center justify-center px-6">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center">

<div className="text-center lg:text-left space-y-8 lg:pr-8">
<div className="space-y-6">
<h1 className="font-heading hero-text leading-tight">
                        Seamless
                        <span className="block aurora-text">Booking System</span>
                        Experience
                    </h1>
<p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                        Streamline appointments with AI-powered scheduling, 
                        automated confirmations, and intelligent calendar management.
                    </p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 text-gray-300 text-base">
<div className="w-3 h-3 bg-indigo-400 rounded-full pulse-dot"></div>
<span>Smart calendar integration</span>
</div>
<div className="flex items-center gap-3 text-gray-300 text-base">
<div className="w-3 h-3 bg-violet-400 rounded-full pulse-dot"></div>
<span>Automated notifications</span>
</div>
<div className="flex items-center gap-3 text-gray-300 text-base">
<div className="w-3 h-3 bg-cyan-400 rounded-full pulse-dot"></div>
<span>Real-time availability</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 aurora-glow">
<i className="fas fa-calendar-plus"></i>
                        Start Booking
                    </button>
<button className="border border-indigo-400/30 text-white hover:bg-indigo-500/10 px-8 py-4 rounded-full text-base font-medium transition-colors flex items-center justify-center gap-2">
<i className="fas fa-play"></i>
                        Watch Demo
                    </button>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-400/20">
<div className="text-center">
<div className="text-3xl font-heading text-white">99.9%</div>
<div className="text-sm text-gray-400">Uptime</div>
</div>
<div className="text-center">
<div className="text-3xl font-heading text-white">10K+</div>
<div className="text-sm text-gray-400">Businesses</div>
</div>
<div className="text-center">
<div className="text-3xl font-heading text-white">1M+</div>
<div className="text-sm text-gray-400">Bookings</div>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-start lg:pl-8">
<div className="phone-float">
<div className="aurora-border aurora-glow">
<div className="w-[320px] h-[640px] relative overflow-hidden">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[12px] z-50"></div>

<div className="w-full h-full relative">

<div className="pt-8 pb-4 px-6 border-b border-indigo-400/20">
<div className="flex justify-between items-center mb-4">
<h2 className="text-white font-heading text-xl">Book Appointment</h2>
<div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center">
<i className="fas fa-user text-white text-xs"></i>
</div>
</div>
<div className="text-gray-300 text-base">Select your preferred time</div>
</div>

<div className="p-6">
<div className="booking-card rounded-2xl p-4 mb-4">
<div className="text-white text-base mb-3 font-heading">March 2024</div>
<div className="grid grid-cols-7 gap-2">
<div className="text-gray-400 text-sm text-center py-1">S</div>
<div className="text-gray-400 text-sm text-center py-1">M</div>
<div className="text-gray-400 text-sm text-center py-1">T</div>
<div className="text-gray-400 text-sm text-center py-1">W</div>
<div className="text-gray-400 text-sm text-center py-1">T</div>
<div className="text-gray-400 text-sm text-center py-1">F</div>
<div className="text-gray-400 text-sm text-center py-1">S</div>
<div className="text-gray-500 text-sm text-center py-2">26</div>
<div className="text-gray-500 text-sm text-center py-2">27</div>
<div className="text-gray-500 text-sm text-center py-2">28</div>
<div className="text-gray-500 text-sm text-center py-2">29</div>
<div className="text-white text-sm text-center py-2">1</div>
<div className="text-white text-sm text-center py-2">2</div>
<div className="text-white text-sm text-center py-2">3</div>
<div className="text-white text-sm text-center py-2">4</div>
<div className="text-white text-sm text-center py-2">5</div>
<div className="text-white text-sm text-center py-2">6</div>
<div className="text-white text-sm text-center py-2">7</div>
<div className="text-white text-sm text-center py-2">8</div>
<div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm text-center py-2 rounded-lg">15</div>
<div className="text-white text-sm text-center py-2">10</div>
</div>
</div>

<div className="space-y-3 mb-6">
<div className="text-white text-base font-heading">Available Times</div>
<div className="grid grid-cols-2 gap-2">
<button className="booking-card rounded-lg py-3 px-3 text-white text-sm hover:bg-indigo-500/20 transition-colors">
                                                9:00 AM
                                            </button>
<button className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg py-3 px-3 text-white text-sm">
                                                10:30 AM
                                            </button>
<button className="booking-card rounded-lg py-3 px-3 text-white text-sm hover:bg-indigo-500/20 transition-colors">
                                                2:00 PM
                                            </button>
<button className="booking-card rounded-lg py-3 px-3 text-white text-sm hover:bg-indigo-500/20 transition-colors">
                                                4:30 PM
                                            </button>
</div>
</div>

<div className="booking-card rounded-2xl p-4 mb-6">
<div className="text-white text-base mb-3 font-heading">Selected Service</div>
<div className="flex items-center justify-between">
<div>
<div className="text-white text-sm">Consultation</div>
<div className="text-gray-400 text-sm">60 minutes</div>
</div>
<div className="text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-lg font-medium">$150</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<button className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 text-white py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2 float-icon">
<i className="fas fa-check"></i>
                                        Confirm Booking
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
