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
      
    // Minimal animated WebGL background using plain WebGL
    const canvas = document.getElementById('webgl-hero');
    const gl = canvas.getContext('webgl');
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    // Vertex shader program
    const vsSource = `
      attribute vec4 aVertexPosition;
      varying vec2 vUV;
      void main(void) {
        vUV = aVertexPosition.xy * 0.5 + 0.5;
        gl_Position = aVertexPosition;
      }
    `;

    // Fragment shader program: animated multi-gradient waves
    const fsSource = `
      precision mediump float;
      varying vec2 vUV;
      uniform float uTime;
      void main(void) {
        float y = vUV.y + 0.04*sin(8.0*vUV.x+uTime*0.7)
                        + 0.03*sin(16.0*vUV.x-uTime*0.4)
                        + 0.02*sin(32.0*vUV.x+uTime*0.9);
        float mask = smoothstep(0.4,0.5,y) * (1.0-smoothstep(0.5,0.7,y));
        vec3 color1 = mix(vec3(0.6,0.6,1.0), vec3(0.9,0.7,1.0), vUV.x);
        vec3 color2 = mix(vec3(0.7,0.8,1.0), vec3(1.0,0.8,1.0), vUV.y);
        vec3 color = mix(color1, color2, 0.5 + 0.5*sin(uTime*0.1));
        color = mix(color, vec3(1.0), 1.0-mask);
        gl_FragColor = vec4(color, 0.35 + 0.4*mask);
      }
    `;

    function loadShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }
    const vertexShader = loadShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        uTime: gl.getUniformLocation(shaderProgram, 'uTime'),
      },
    };

    const positions = [
      -1, -1,  1, -1,  -1, 1,
      -1,  1,  1, -1,  1, 1,
    ];
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    function render(time) {
      resize();
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(programInfo.program);

      {
        const numComponents = 2;
        const type = gl.FLOAT;
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, false, 0, 0);
      }

      gl.uniform1f(programInfo.uniformLocations.uTime, time * 0.001);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    render();
  
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
      

<nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
<div className="flex items-center gap-2">
<img alt="AI CRM Logo" className="w-8 h-8" src="https://img.icons8.com/fluency/48/artificial-intelligence.png"/>
<span className="text-xl font-bold text-indigo-700">IntelliCRM</span>
</div>
<ul className="hidden md:flex gap-8 text-gray-700 font-medium">
<li><a className="hover:text-indigo-600" href="#features">Features</a></li>
<li><a className="hover:text-indigo-600" href="#pricing">Pricing</a></li>
<li><a className="hover:text-indigo-600" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-indigo-600" href="#faq">FAQ</a></li>
</ul>
<div className="flex gap-4">
<a className="text-indigo-700 hover:text-indigo-900 font-semibold" href="#">Sign In</a>
<a className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2 rounded-lg shadow" href="#">
        Get Started
      </a>
</div>
</nav>

<section className="relative flex flex-col justify-center items-center min-h-[75vh] overflow-hidden">

<canvas className="w-full h-full absolute inset-0" id="webgl-hero"></canvas>

<div className="hero-content max-w-3xl mx-auto text-center py-32">
<h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-transparent bg-clip-text mb-6 leading-tight">
        AI-Powered CRM<br/> That Grows With You
      </h1>
<p className="text-lg md:text-xl text-gray-700 mb-8">
        Supercharge your sales, automate workflows, and build lasting customer relationships with intelligent insights and automation.
      </p>
<form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
<input className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Your business email" required="" type="email"/>
<button className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all" type="submit">
          Get Started Free
        </button>
</form>
<p className="mt-4 text-sm text-gray-500">No credit card required. Free 14-day trial.</p>
</div>
</section>

<div className="max-w-5xl mx-auto py-8 flex flex-wrap justify-center items-center gap-8 opacity-80">
<img alt="Microsoft" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"/>
<img alt="Nike" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"/>
<img alt="Spotify" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_horizontal_black.jpg"/>
<img alt="Apple" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"/>
<img alt="Google" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
</div>

<section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12" id="features">
<div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full p-4 mb-4 shadow">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m4 4V8a4 4 0 10-8 0v8a4 4 0 008 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">AI Sales Insights</h3>
<p className="text-gray-600">Uncover hidden sales opportunities and predict customer needs with our smart AI engine.</p>
</div>
<div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full p-4 mb-4 shadow">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 17v-2a4 4 0 018 0v2M5 8V6a4 4 0 118 0v2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
<p className="text-gray-600">Automate repetitive tasks and free up your team to focus on what matters most.</p>
</div>
<div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
<div className="bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full p-4 mb-4 shadow">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">360° Customer View</h3>
<p className="text-gray-600">All customer data unified in one place, from emails to calls to AI-generated insights.</p>
</div>
</section>

<section className="bg-gradient-to-r from-indigo-600 to-pink-500 py-16 px-6 text-center text-white rounded-2xl shadow-xl max-w-5xl mx-auto mb-20 flex flex-col gap-4 items-center">
<h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to boost your sales with AI?</h2>
<p className="text-lg mb-4">Try IntelliCRM free for 14 days. Cancel anytime.</p>
<a className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-50 transition" href="#">Start Free Trial</a>
</section>

<footer className="bg-white border-t py-8 mt-auto">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
<div className="flex items-center gap-2">
<img alt="AI CRM Logo" className="w-6 h-6" src="https://img.icons8.com/fluency/48/artificial-intelligence.png" />
<span className="font-semibold text-gray-700">IntelliCRM © 2024</span>
</img></div>
<ul className="flex gap-6 text-gray-500 text-sm">
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms</a></li>
<li><a href="#">Support</a></li>
</ul>
<div className="flex gap-2">
<a href="#"><img alt="Twitter" src="https://img.icons8.com/ios-filled/24/000000/twitter.png"/></a>
<a href="#"><img alt="LinkedIn" src="https://img.icons8.com/ios-filled/24/000000/linkedin.png"/></a>
<a href="#"><img alt="GitHub" src="https://img.icons8.com/ios-filled/24/000000/github.png"/></a>
</div>
</div>
</footer>



    </>
  );
}
