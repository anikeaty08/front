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

<div className="relative z-10 py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-heading font-light mb-6 aurora-text">Powerful Features</h2>
<p className="text-lg text-gray-300 max-w-2xl mx-auto">Enhance your booking experience with our suite of intelligent features designed to save time and reduce no-shows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-sync-alt text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Smart Calendar Sync</h3>
<p className="text-gray-300">Seamlessly integrates with Google Calendar, Outlook, and Apple Calendar to prevent double bookings.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-bell text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Auto Reminders</h3>
<p className="text-gray-300">Send automated SMS and email reminders to reduce no-shows by up to 80% with customizable timing.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-globe-americas text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Timezone Detection</h3>
<p className="text-gray-300">Automatically detects clients' timezones and displays available slots in their local time to avoid confusion.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-credit-card text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Secure Payments</h3>
<p className="text-gray-300">Accept deposits and full payments with integrated payment processing supporting all major credit cards and PayPal.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-user-friends text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Group Booking</h3>
<p className="text-gray-300">Schedule classes, workshops or group sessions with customizable attendee limits and waiting lists.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-sliders-h text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Custom Fields</h3>
<p className="text-gray-300">Collect essential information from clients with customizable forms and intake questionnaires.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-chart-line text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Analytics Dashboard</h3>
<p className="text-gray-300">Track booking patterns, popular services, and client retention with detailed visual reports.</p>
</div>

<div className="feature-card bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center">
<div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white">
<i className="fas fa-comments text-2xl"></i>
</div>
<h3 className="text-xl font-heading text-white mb-3">Client Messaging</h3>
<p className="text-gray-300">Built-in messaging system allows for direct communication with clients before and after appointments.</p>
</div>
</div>
<div className="text-center mt-16">
<button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 aurora-glow mx-auto">
<i className="fas fa-list-check"></i> View All Features
        </button>
</div>
</div>
</div>

    </>
  );
}
