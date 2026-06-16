import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const canvas = document.getElementById('aurora-canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      console.error('WebGL not supported');
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
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
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      vec3 aurora(vec2 uv, float time) {
        vec2 p = uv - 0.5;
        p.y += 0.3;
        float wave1 = sin(p.x * 3.0 + time * 0.5) * 0.08;
        float wave2 = sin(p.x * 5.0 + time * 0.7 + sin(time * 0.3) * 2.0) * 0.04;
        float wave3 = sin(p.x * 7.0 + time * 1.1 + cos(time * 0.4) * 1.5) * 0.025;
        float wave4 = sin(p.x * 2.0 + time * 0.3 + sin(time * 0.6) * 3.0) * 0.06;
        float y = p.y - wave1 - wave2 - wave3 - wave4;
        float intensity1 = exp(-abs(y) * 16.0) * 0.375;
        float intensity2 = exp(-abs(y) * 8.0) * 0.2;
        
        vec3 color1 = vec3(0.3, 0.8, 1.0) * intensity1;
        vec3 color2 = vec3(0.8, 0.4, 1.0) * intensity2;
        vec3 color3 = vec3(0.1, 1.0, 0.6) * exp(-abs(y + 0.1) * 20.0) * 0.25;
        
        return color1 + color2 + color3;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec3 color = vec3(0.0);
        
        color += aurora(uv, u_time);
        color += aurora(uv + vec2(0.3, -0.2), u_time * 1.2) * 0.6;
        color += aurora(uv - vec2(0.1, 0.15), u_time * 0.8) * 0.4;
        
        color *= smoothstep(0.0, 0.5, uv.y);
        color *= 1.0 - smoothstep(0.8, 1.0, uv.y);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error linking program:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    function render(time) {
      time *= 0.001;
      
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.useProgram(program);
      
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
      
      gl.uniform1f(timeUniformLocation, time);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      
      requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="745" id="aurora-canvas" width="960"></canvas>

<nav className="w-full flex items-center justify-between px-10 py-6 bg-black/80 fixed top-0 left-0 z-40 border-b border-gray-900 backdrop-blur-lg">
<div className="flex items-center space-x-4">
<span className="manrope text-2xl font-light tracking-tight">awe</span>
</div>
<div className="flex space-x-8 text-base">
<a className="hover:text-white transition font-light text-gray-200 tracking-tight" href="#">Features</a>
<a className="text-gray-200 hover:text-white font-medium transition" href="#">Pricing</a>
<a className="text-gray-200 hover:text-white font-medium transition" href="#">Docs</a>
<a className="text-gray-200 hover:text-white font-medium transition" href="#">Contact</a>
</div>
<div className="flex space-x-3">
<a className="transition hover:bg-gray-100 font-medium text-black bg-white rounded-md pt-2 pr-5 pb-2 pl-5" href="#">Book Consultation</a>
</div>
</nav>

<section className="w-full min-h-screen flex flex-col items-center justify-center px-6 bg-transparent relative pt-36 pb-10">
<div className="max-w-3xl w-full text-center flex flex-col items-center">
<h1 className="manrope text-[64px] sm:text-[72px] md:text-[80px] leading-none z-10 font-light tracking-tight mb-6">Command Attention. Attract Customers.</h1>
<h2 className="manrope md:text-2xl z-10 text-xl font-light text-gray-300 tracking-tight font-geist mb-6">
        Seamless task management for teams and individuals.
      </h2>
<p className="sm:text-lg max-w-xl z-10 text-base text-gray-400 font-geist mr-auto mb-10 ml-auto">
        TaskFlow empowers you to focus on what matters most — track your work, collaborate effortlessly, and achieve your project goals with clarity.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 z-10">
<a className="bg-white text-black px-8 py-3 rounded-md font-medium text-base sm:text-lg transition hover:bg-gray-100" href="#">
          Get Started
        </a>
<a className="border border-gray-700 text-white px-8 py-3 rounded-md font-medium text-base sm:text-lg transition hover:bg-gray-800" href="#">
          Learn More
        </a>
</div>
</div>


</section>



    </>
  );
}
