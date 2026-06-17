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
  p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec3 p ) {
  vec3 i = floor( p );
  vec3 f = fract( p );
  vec3 u = f*f*(3.0-2.0*f);
  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                      dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                      dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
            mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                      dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                      dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
  float stars_threshold = 8.0;
  float stars_exposure = 200.0;
  float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
  stars *= mix(0.4, 1.4, noise(stars_direction * 100.0 + vec3(iTime)));
  gl_FragColor = vec4(vec3(stars),1.0);
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
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
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
  -1, -1, 1, -1, -1, 1,
  -1, 1, 1, -1, 1, 1,
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
  


    const phrases = [
      "Speed of Thought",
      "Pace of Innovation",
      "Flow of Creativity",
      "Power of Imagination",
      "Edge of AI"
    ];
    const phraseGradients = [
      "phrase-gradient-0",
      "phrase-gradient-1",
      "phrase-gradient-2",
      "phrase-gradient-3",
      "phrase-gradient-4"
    ];
    let idx = 1; // Start at 1 to match initial phrase and gradient
    const phraseCurrent = document.getElementById("phrase-current");
    const phraseNext = document.getElementById("phrase-next");
    let isAnimating = false;
    let scrollDuration = 500; // ms
    let visibleDuration = 1200; // ms

    // Initial phrase and gradient
    phraseCurrent.textContent = phrases[idx];
    phraseCurrent.className = `scroll-phrase animate-in ${phraseGradients[idx]}`;
    phraseCurrent.style.webkitTextFillColor = 'transparent';

    function scrollToNextPhrase() {
      if (isAnimating) return;
      isAnimating = true;
      let nextIdx = (idx + 1) % phrases.length;
      phraseNext.textContent = phrases[nextIdx];
      phraseNext.className = `scroll-phrase next animate-from-below ${phraseGradients[nextIdx]}`;
      phraseNext.style.webkitTextFillColor = 'transparent';

      setTimeout(() => {
        phraseCurrent.classList.remove("animate-in");
        phraseCurrent.classList.add("animate-up");
        phraseNext.classList.remove("animate-from-below");
        phraseNext.classList.add("animate-in");
      }, 10);

      setTimeout(() => {
        phraseCurrent.textContent = phrases[nextIdx];
        phraseCurrent.className = `scroll-phrase animate-in ${phraseGradients[nextIdx]}`;
        phraseCurrent.style.webkitTextFillColor = 'transparent';
        phraseNext.textContent = "";
        phraseNext.className = "scroll-phrase next";
        idx = nextIdx;
        isAnimating = false;
      }, scrollDuration);
    }

    setInterval(scrollToNextPhrase, scrollDuration + visibleDuration);
  
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



<div className="flex h-screen relative z-10">

<div className="w-24 flex flex-col items-center space-y-8 bg-black/80 border-indigo-500/20 border-r pt-8 pr-4 pb-8 pl-4 backdrop-blur-sm">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-xl flex items-center justify-center">
<span className="select-none text-xl font-extrabold text-white tracking-widest font-mono">NF</span>
</div>
<nav className="flex flex-col space-y-6 flex-1 mt-8">

<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">
<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">

<svg ="none"="" className="w-6 h-6 text-indigo-400" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12L12 3l9 9" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 21V9h6v12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Home</span>
</div>
<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">

<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Dashboard</span>
</div>
<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">

<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Projects</span>
</div>
<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">

<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="1" width="7" x="3" y="3"></rect><rect height="18" rx="1" width="7" x="14" y="3"></rect>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Library</span>
</div>
<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">

<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Layers</span>
</div>
</nav>
<div className="flex flex-col items-center gap-4 mt-auto">
<div className="flex flex-col items-center group cursor-pointer sidebar-btn rounded-xl">

<div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 border border-indigo-400/30 rounded-xl">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle><path className="" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</div>
<span className="mt-2 text-xs text-indigo-300 font-medium">Settings</span>
</div>
<div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center cursor-pointer sidebar-avatar transition-transform">
<img alt="User" className="w-10 h-10 object-cover rounded-lg" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=1080&amp;q=80"/>
</div>
</div>
</div>

<div className="flex-1 flex items-center px-16 py-20">
<div className="max-w-4xl">

<div className="mb-8">
<div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full mb-6">
<div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
<span className="text-sm text-indigo-300 font-manrope">AI-Powered Design Platform</span>
</div>
<h1 className="title-font text-6xl md:text-7xl font-bold text-white mb-6 leading-tight flex flex-wrap items-baseline gap-x-4">
<span className="font-montserrat">Design at the</span>
<span className="scroll-phrase-wrapper align-baseline font-montserrat ml-0">
<span className="scroll-phrase animate-in phrase-gradient-3" id="phrase-current" style={{WebkitTextFillColor: 'transparent'}}>Power of Imagination</span>
<span className="scroll-phrase next" id="phrase-next" style={{WebkitTextFillColor: 'transparent'}}></span>
</span>
</h1>
<p className="max-w-2xl leading-relaxed secondary-font text-xl text-zinc-300 font-manrope mb-8">
            Transform your creative workflow with intelligent design systems. Generate, iterate, and deploy beautiful interfaces powered by advanced AI technology.
          </p>
<div className="flex items-center space-x-4">
<button className="btn-hero hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-indigo-500/25 secondary-font text-lg font-semibold text-white font-manrope bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full pt-2 pr-8 pb-2 pl-8 shadow-lg">
              Create with AI
            </button>
<button className="btn-outline-hero hover:bg-indigo-500/10 transition-all duration-300 secondary-font text-lg font-semibold text-indigo-300 font-manrope border-indigo-400/30 border rounded-full pt-2 pr-8 pb-2 pl-8">
              See It in Action
            </button>
</div>

<div className="flex items-center space-x-8 mt-12">
<div className="">
<div className="bg-clip-text secondary-font text-3xl font-bold text-transparent font-manrope bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 drop-shadow-lg">1M+</div>
<div className="text-sm text-zinc-400 font-manrope">Designs Generated</div>
</div>
<div className="">
<div className="bg-clip-text secondary-font text-3xl font-bold text-transparent font-manrope bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-600 drop-shadow-lg">200K+</div>
<div className="text-sm text-zinc-400 font-manrope">Active Creators</div>
</div>
<div className="">
<div className="bg-clip-text secondary-font text-3xl font-bold text-transparent font-manrope bg-gradient-to-r from-green-400 via-cyan-400 to-teal-400 drop-shadow-lg">99.9%</div>
<div className="text-sm text-zinc-400 font-manrope">Uptime</div>
</div>
</div>
</div>
</div>

</div>
</div>



    </>
  );
}
