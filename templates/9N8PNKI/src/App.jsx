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



  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  vec3 hash( vec3 p ) {
    p = vec3(
      dot(p,vec3(127.1,311.7, 74.7)),
      dot(p,vec3(269.5,183.3,246.1)),
      dot(p,vec3(113.5,271.9,124.6)));
    return -1.0 + 2.0*fract(sin(p)*43758.5453123);
  }
  float noise( in vec3 p ) {
    vec3 i = floor( p );
    vec3 f = fract( p );
    vec3 u = f*f*(3.0-2.0*f);
    return mix(
      mix(
        mix(dot(hash(i + vec3(0.0,0.0,0.0)), f - vec3(0.0,0.0,0.0)),
            dot(hash(i + vec3(1.0,0.0,0.0)), f - vec3(1.0,0.0,0.0)), u.x),
        mix(dot(hash(i + vec3(0.0,1.0,0.0)), f - vec3(0.0,1.0,0.0)),
            dot(hash(i + vec3(1.0,1.0,0.0)), f - vec3(1.0,1.0,0.0)), u.x), u.y),
      mix(
        mix(dot(hash(i + vec3(0.0,0.0,1.0)), f - vec3(0.0,0.0,1.0)),
            dot(hash(i + vec3(1.0,0.0,1.0)), f - vec3(1.0,0.0,1.0)), u.x),
        mix(dot(hash(i + vec3(0.0,1.0,1.0)), f - vec3(0.0,1.0,1.0)),
            dot(hash(i + vec3(1.0,1.0,1.0)), f - vec3(1.0,1.0,1.0)), u.x), u.y), u.z
    );
  }
  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
    float stars_threshold = 8.0;
    float stars_exposure = 200.0;
    float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
    stars *= mix(0.4, 1.2, noise(stars_direction * 100.0 + vec3(iTime)));
    gl_FragColor = vec4(vec3(stars * 0.85, stars * 0.80, stars),1.0);
  }
  


    const canvas = document.getElementById('shader-canvas');
    const gl = canvas.getContext('webgl');
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    window.addEventListener('resize', resize);
    resize();
    function compileShader(gl, source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader));
      }
      return shader;
    }
    const vertSrc = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;
    const fragSrc = document.getElementById('fragShader').textContent;
    const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);
    const posLoc = gl.getAttribLocation(program, 'position');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    const iResolution = gl.getUniformLocation(program, 'iResolution');
    const iTime = gl.getUniformLocation(program, 'iTime');
    function render(time) {
      gl.uniform2f(iResolution, canvas.width, canvas.height);
      gl.uniform1f(iTime, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  
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

<nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="currentColor" r="10"></circle>
<circle cx="12" cy="12" fill="#0b1023" r="5"></circle>
</svg>
<span className="ml-3 text-xl tracking-tight font-semibold">Celestia<span className="text-indigo-400">.</span></span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Horoscopes</a>
<a className="hover:text-white transition-colors" href="#">Zodiac</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
            Sign in
          </button>
</div>
</div>
</div>
</nav>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-black z-0"></div>
<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20">
<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Unlock the Cosmos
        </h1>
<p className="text-gray-300 text-xl mb-8 font-light">
          Your journey to self-discovery begins here. Explore astrology's most powerful tools—personalized horoscopes, birth charts, and compatibility, all in one place.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 text-sm tracking-wider rounded-md" href="#"> Start Free </a>
<a className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition duration-300 text-sm tracking-wider rounded-md" href="#"> Learn More </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-800/30 rounded-2xl p-8 flex flex-col items-center text-center hover:border-indigo-600/50 transition-all duration-300">
<div className="p-2 bg-indigo-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="h-7 w-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Personalized Horoscopes</h3>
<p className="text-gray-400 font-extralight mb-4">Daily, weekly &amp; monthly astrology tailored for your sign. Get guidance, strengths, and cosmic tips every day.</p>
<span className="inline-block bg-indigo-400/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Updated daily</span>
</div>

<div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-600/50 transition-all duration-300">
<div className="p-2 bg-purple-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="h-7 w-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 12l6-6M12 12V4" stroke="currentColor"></path>
<circle cx="12" cy="12" r="2.5" stroke="currentColor"></circle>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Birth Chart Analysis</h3>
<p className="text-gray-400 font-extralight mb-4">Explore your cosmic blueprint. Interactive natal chart, planets &amp; houses explained with personality insights.</p>
<span className="inline-block bg-purple-400/10 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">Instant &amp; free</span>
</div>

<div className="bg-gradient-to-br from-pink-900/20 to-black border border-pink-800/30 rounded-2xl p-8 flex flex-col items-center text-center hover:border-pink-600/50 transition-all duration-300">
<div className="p-2 bg-pink-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="h-7 w-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.24 3 12.91 3.81 13.87 5.08C14.83 3.81 16.5 3 18.24 3C21.27 3 23.73 5.46 23.73 8.5C23.73 13.5 16 21 16 21H12Z" stroke="currentColor"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Compatibility Reports</h3>
<p className="text-gray-400 font-extralight mb-4">Discover how you connect with friends and partners. Synastry scores &amp; tips for harmony and growth.</p>
<span className="inline-block bg-pink-400/10 text-pink-300 px-3 py-1 rounded-full text-xs font-medium">Try with a friend</span>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>

<div className="text-center">
<h2 className="text-3xl md:text-4xl font-light mb-6">
          Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">read your stars?</span>
</h2>
<p className="text-gray-400 font-extralight max-w-2xl mx-auto mb-8">
          Join thousands finding everyday insights with Celestia.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">
            Get started
          </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
            View demo
          </button>
</div>
</div>
</div>
</div>




    </>
  );
}
