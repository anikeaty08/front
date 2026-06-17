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
  


    // Starfield shader
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

    // Carousel Controls
    const carousel = document.getElementById('carousel');
    const dots = document.querySelectorAll('#carousel-dots button');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const itemCount = carousel.children.length;
    let currentIndex = 0;

    function scrollToIndex(idx) {
      const card = carousel.children[idx];
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        updateDots(idx);
      }
    }
    function updateDots(idx) {
      dots.forEach((dot, i) => {
        if (i === idx) {
          dot.classList.remove("bg-gray-500", "opacity-40");
          dot.classList.add("bg-indigo-400", "opacity-80");
        } else {
          dot.classList.remove("bg-indigo-400", "opacity-80");
          dot.classList.add("bg-gray-500", "opacity-40");
        }
      });
    }
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        currentIndex = idx;
        scrollToIndex(currentIndex);
      });
    });
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        scrollToIndex(currentIndex);
      });
      nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(itemCount - 1, currentIndex + 1);
        scrollToIndex(currentIndex);
      });
    }
    // Show controls only if enough slides
    if (itemCount > 2) {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
    }
    // Snap to first on load
    window.addEventListener('DOMContentLoaded', () => {
      scrollToIndex(0);
    });
    // Update currentIndex on scroll (for dots)
    carousel.addEventListener('scroll', () => {
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i < itemCount; i++) {
        const rect = carousel.children[i].getBoundingClientRect();
        const diff = Math.abs(rect.left + rect.right - window.innerWidth) / 2;
        if (diff < minDiff) {
          minDiff = diff;
          idx = i;
        }
      }
      currentIndex = idx;
      updateDots(currentIndex);
    });
  
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
<a className="hover:text-white transition-colors" href="#">Gallery</a>
<a className="hover:text-white transition-colors" href="#">Horoscopes</a>
<a className="hover:text-white transition-colors" href="#">Zodiac</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">Sign in</button>
</div>
</div>
</div>
</nav>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-black z-0"></div>
<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">

<div className="max-w-2xl mx-auto text-center mb-14">
<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Celestial Gallery
        </h1>
<p className="text-gray-300 text-xl mb-8 font-light">
          Explore our cosmic moments, illustrations, and app features.
        </p>
</div>

<div className="relative">

<button aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 transition rounded-full p-3 z-10 shadow-lg hidden sm:flex" id="carousel-prev">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 transition rounded-full p-3 z-10 shadow-lg hidden sm:flex" id="carousel-next">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="hide-scrollbar flex overflow-x-auto gap-8 py-4 px-1 snap-x snap-mandatory scroll-smooth" id="carousel" style={{scrollbarWidth: 'none'}} tabindex="0">

<div className="min-w-[300px] md:min-w-[400px] max-w-xs snap-center bg-gradient-to-br from-indigo-900/40 to-black border border-indigo-800/30 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
<img alt="Night sky" className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h3 className="text-lg font-semibold mb-2">Stargazing</h3>
<p className="text-gray-400 text-sm mb-2">Witness the Milky Way from the world’s quietest places.</p>
<span className="bg-indigo-400/10 text-indigo-300 px-2 py-0.5 rounded-full text-xs">Astrophotography</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] max-w-xs snap-center bg-gradient-to-br from-purple-900/40 to-black border border-purple-800/30 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
<img alt="Celestial chart" className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h3 className="text-lg font-semibold mb-2">Birth Chart Art</h3>
<p className="text-gray-400 text-sm mb-2">Visualize your astrological identity in vibrant color.</p>
<span className="bg-purple-400/10 text-purple-300 px-2 py-0.5 rounded-full text-xs">Illustration</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] max-w-xs snap-center bg-gradient-to-br from-pink-900/40 to-black border border-pink-800/30 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
<img alt="Zodiac wheel" className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h3 className="text-lg font-semibold mb-2">Zodiac Wheel</h3>
<p className="text-gray-400 text-sm mb-2">All 12 signs, their symbols, and ruling elements.</p>
<span className="bg-pink-400/10 text-pink-300 px-2 py-0.5 rounded-full text-xs">Astrology</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] max-w-xs snap-center bg-gradient-to-br from-green-900/40 to-black border border-green-800/30 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
<img alt="App demo" className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h3 className="text-lg font-semibold mb-2">Mobile Experience</h3>
<p className="text-gray-400 text-sm mb-2">Celestia app in action—charts, compatibility, and more.</p>
<span className="bg-green-400/10 text-green-300 px-2 py-0.5 rounded-full text-xs">App UI</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] max-w-xs snap-center bg-gradient-to-br from-yellow-900/40 to-black border border-yellow-800/30 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
<img alt="Constellation art" className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h3 className="text-lg font-semibold mb-2">Constellation Art</h3>
<p className="text-gray-400 text-sm mb-2">Imaginative takes on classic constellations.</p>
<span className="bg-yellow-400/10 text-yellow-300 px-2 py-0.5 rounded-full text-xs">Digital Art</span>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-6" id="carousel-dots">
<button aria-label="Go to slide 1" className="w-2 h-2 rounded-full bg-indigo-400 opacity-80"></button>
<button aria-label="Go to slide 2" className="w-2 h-2 rounded-full bg-gray-500 opacity-40"></button>
<button aria-label="Go to slide 3" className="w-2 h-2 rounded-full bg-gray-500 opacity-40"></button>
<button aria-label="Go to slide 4" className="w-2 h-2 rounded-full bg-gray-500 opacity-40"></button>
<button aria-label="Go to slide 5" className="w-2 h-2 rounded-full bg-gray-500 opacity-40"></button>
</div>
</div>

<div className="text-center mt-20">
<h2 className="text-3xl md:text-4xl font-light mb-6">
          Want to share your sky?
        </h2>
<p className="text-gray-400 font-extralight max-w-2xl mx-auto mb-8">
          Submit your own astronomy art or screenshots to be featured in our gallery.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">
            Submit your work
          </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
            See all artworks
          </button>
</div>
</div>
</div>
</div>




    </>
  );
}
