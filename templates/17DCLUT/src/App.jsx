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



<div className="relative z-10 py-20 px-4">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Traveler <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Stories</span> from Around the Globe
      </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
        Real journeys. Real memories. See how the world inspired our explorers!
      </p>
</div>

<div className="relative mb-12">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
<div className="overflow-hidden">
<div className="scroll-container mask-gradient perspective">
<div className="flex space-x-8 auto-scroll w-max">


<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Alex Chen</h4>
<p className="text-indigo-400 text-sm">@alextravels</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Hiking through the Andes was a dream come true. The beauty of Machu Picchu at sunrise left me speechless. Can't wait for my next adventure!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Sarah Johnson</h4>
<p className="text-indigo-400 text-sm">@sarah_in_wonderland</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Exploring the markets of Marrakech was a sensory delight! The colors, the spices, and the people made it an unforgettable cultural experience."
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(0deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Mike Rodriguez</h4>
<p className="text-indigo-400 text-sm">@miketheexplorer</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Camping under the northern lights in Iceland was magical. I’ve never witnessed anything so awe-inspiring. Highly recommend to every traveler!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Emma Davis</h4>
<p className="text-indigo-400 text-sm">@emmaonthego</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Sailing through the Greek Isles was paradise. Each island had its own charm, and the sunsets were pure magic every evening."
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">David Kim</h4>
<p className="text-indigo-400 text-sm">@davidworldwide</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Safari in Kenya was thrilling! Watching elephants and lions in their natural habitat was a lifelong dream realized. Already planning my return."
              </p>
</div>


<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Alex Chen</h4>
<p className="text-indigo-400 text-sm">@alextravels</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Hiking through the Andes was a dream come true. The beauty of Machu Picchu at sunrise left me speechless. Can't wait for my next adventure!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Sarah Johnson</h4>
<p className="text-indigo-400 text-sm">@sarah_in_wonderland</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Exploring the markets of Marrakech was a sensory delight! The colors, the spices, and the people made it an unforgettable cultural experience."
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(0deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Mike Rodriguez</h4>
<p className="text-indigo-400 text-sm">@miketheexplorer</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Camping under the northern lights in Iceland was magical. I’ve never witnessed anything so awe-inspiring. Highly recommend to every traveler!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Emma Davis</h4>
<p className="text-indigo-400 text-sm">@emmaonthego</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Sailing through the Greek Isles was paradise. Each island had its own charm, and the sunsets were pure magic every evening."
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-indigo-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">David Kim</h4>
<p className="text-indigo-400 text-sm">@davidworldwide</p>
</div>
</div>
<p className="text-indigo-200 leading-relaxed">
                "Safari in Kenya was thrilling! Watching elephants and lions in their natural habitat was a lifelong dream realized. Already planning my return."
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
<div className="overflow-hidden">
<div className="scroll-container mask-gradient perspective">
<div className="flex space-x-8 auto-scroll-reverse w-max">


<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Priya Singh</h4>
<p className="text-pink-400 text-sm">@priyawanders</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "The cherry blossoms in Kyoto were breathtaking. I felt like I was walking through a fairytale. Japan is magical in springtime!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Luca Bianchi</h4>
<p className="text-pink-400 text-sm">@lucavoyager</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Tasting authentic pizza in Naples was a highlight of my Italian journey. The food, the history, the people – Italy has my heart!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(0deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Samantha Lee</h4>
<p className="text-pink-400 text-sm">@samonthemove</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Snorkeling in Australia's Great Barrier Reef was like entering another world. The colors and marine life were mesmerizing!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Tom Müller</h4>
<p className="text-pink-400 text-sm">@tomexplores</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Climbing the Swiss Alps was challenging, but the views from the summit were absolutely worth every step. Bucket list: checked!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Isabella Garcia</h4>
<p className="text-pink-400 text-sm">@isabellaworld</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Dancing at Rio Carnival was pure joy! The music, the costumes, and the energy of Brazil are unforgettable. Highly recommend!"
              </p>
</div>


<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Priya Singh</h4>
<p className="text-pink-400 text-sm">@priyawanders</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "The cherry blossoms in Kyoto were breathtaking. I felt like I was walking through a fairytale. Japan is magical in springtime!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Luca Bianchi</h4>
<p className="text-pink-400 text-sm">@lucavoyager</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Tasting authentic pizza in Naples was a highlight of my Italian journey. The food, the history, the people – Italy has my heart!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(0deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Samantha Lee</h4>
<p className="text-pink-400 text-sm">@samonthemove</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Snorkeling in Australia's Great Barrier Reef was like entering another world. The colors and marine life were mesmerizing!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-7deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Tom Müller</h4>
<p className="text-pink-400 text-sm">@tomexplores</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Climbing the Swiss Alps was challenging, but the views from the summit were absolutely worth every step. Bucket list: checked!"
              </p>
</div>

<div className="flex-shrink-0 w-80 h-64 border-2 border-pink-400 rounded-2xl p-6 relative bg-black/60 backdrop-blur" style={{transform: 'rotateY(-12deg)'}}>
<div className="flex items-center mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-pink-400" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="text-white font-semibold">Isabella Garcia</h4>
<p className="text-pink-400 text-sm">@isabellaworld</p>
</div>
</div>
<p className="text-pink-200 leading-relaxed">
                "Dancing at Rio Carnival was pure joy! The music, the costumes, and the energy of Brazil are unforgettable. Highly recommend!"
              </p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
