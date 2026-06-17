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



    // WebGL Background
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');
    if (!gl) {
      alert('WebGL not supported in your browser');
    }
    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
          gl_Position = aVertexPosition;
      }
    `;
    const fsSource = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      const float overallSpeed = 0.2;
      const float gridSmoothWidth = 0.015;
      const float axisWidth = 0.05;
      const float majorLineWidth = 0.025;
      const float minorLineWidth = 0.0125;
      const float majorLineFrequency = 5.0;
      const float minorLineFrequency = 1.0;
      const vec4 gridColor = vec4(0.5);
      const float scale = 5.0;
      const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
      const float minLineWidth = 0.01;
      const float maxLineWidth = 0.2;
      const float lineSpeed = 1.0 * overallSpeed;
      const float lineAmplitude = 1.0;
      const float lineFrequency = 0.2;
      const float warpSpeed = 0.2 * overallSpeed;
      const float warpFrequency = 0.5;
      const float warpAmplitude = 1.0;
      const float offsetFrequency = 0.5;
      const float offsetSpeed = 1.33 * overallSpeed;
      const float minOffsetSpread = 0.6;
      const float maxOffsetSpread = 2.0;
      const int linesPerGroup = 16;
      #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
      #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
      #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
      #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))
      float drawGridLines(float axis) {
          return drawCrispLine(0.0, axisWidth, axis)
                + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
                + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
      }
      float drawGrid(vec2 space) {
          return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
      }
      float random(float t) {
          return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;   
      }
      float getPlasmaY(float x, float horizontalFade, float offset) {
          return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
      }
      void main() {
          vec2 fragCoord = gl_FragCoord.xy;
          vec4 fragColor;
          vec2 uv = fragCoord.xy / iResolution.xy;
          vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
          float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
          float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
          // Wind/turbulence effect
          space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
          space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
          vec4 lines = vec4(0.0);
          vec4 bgColor1 = vec4(0.05, 0.05, 0.05, 0.3); // very dark, 30% opacity
          vec4 bgColor2 = vec4(0.1, 0.08, 0.16, 0.3);
          for(int l = 0; l < linesPerGroup; l++) {
              float normalizedLineIndex = float(l) / float(linesPerGroup);
              float offsetTime = iTime * offsetSpeed;
              float offsetPosition = float(l) + space.x * offsetFrequency;
              float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
              float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
              float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
              float linePosition = getPlasmaY(space.x, horizontalFade, offset);
              float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);
              float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
              vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
              float circle = drawCircle(circlePosition, 0.01, space) * 4.0;
              line = line + circle;
              lines += line * lineColor * rand;
          }
          fragColor = mix(bgColor1, bgColor2, uv.x);
          fragColor *= verticalFade;
          fragColor.a = 0.3;
          fragColor += lines;
          gl_FragColor = fragColor;
      }
    `;
    function initShaderProgram(gl, vsSource, fsSource) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
      }
      return shaderProgram;
    }
    function loadShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
        time: gl.getUniformLocation(shaderProgram, 'iTime'),
      },
    };
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000;
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(programInfo.program);
      gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
      gl.uniform1f(programInfo.uniformLocations.time, currentTime);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2, gl.FLOAT, false, 0, 0
      );
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Card Navigation Script
    const container = document.getElementById('cards-container');
    const cards = document.querySelectorAll('article');
    const dots = document.querySelectorAll('.pagination button');
    let activeCardId = 1;

    cards.forEach(card => {
      let startX;
      let currentX;
      let isDragging = false;
      card.addEventListener('mousedown', startDrag);
      card.addEventListener('touchstart', e => {
        e.preventDefault();
        startDrag(e.touches[0]);
      }, { passive: false });

      function startDrag(e) {
        if (card.dataset.cardId != activeCardId) return;
        isDragging = true;
        startX = e.clientX;
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', e => drag(e.touches[0]), { passive: true });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
      }
      function drag(e) {
        if (!isDragging) return;
        currentX = e.clientX;
        const diff = currentX - startX;
        if (diff > 6) {
          card.classList.add('dragging-right');
          card.classList.remove('dragging-left');
        } else if (diff < -6) {
          card.classList.add('dragging-left');
          card.classList.remove('dragging-right');
        } else {
          card.classList.remove('dragging-left', 'dragging-right');
        }
      }
      function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        if (card.classList.contains('dragging-right')) {
          navigateToCard(activeCardId === 1 ? 3 : activeCardId - 1);
        } else if (card.classList.contains('dragging-left')) {
          navigateToCard(activeCardId === 3 ? 1 : activeCardId + 1);
        }
        card.classList.remove('dragging-left', 'dragging-right');
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const cardId = dot.id.split('-')[1];
        navigateToCard(parseInt(cardId));
      });
    });

    function navigateToCard(cardId) {
      activeCardId = cardId;
      container.className = `card-${cardId}-active`;
      dots.forEach(dot => {
        const dotId = dot.id.split('-')[1];
        if (parseInt(dotId) === cardId) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
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
      
<canvas id="canvas"></canvas>
<section className="card-1-active" id="cards-container">

<article data-card-id="1" id="card-1">
<header>
<h2>Music Fundamentals</h2>
<div className="drag-indicator"><span></span><span></span><span></span></div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-music"></i>
</div>
<div className="lesson-content">
<p>
            Start your musical journey! Learn about notes, rhythm, scales, and how music is built from the ground up.
          </p>
<p>
<b>What you'll learn:</b> <br/>
<span className="text-red-400">•</span> Understanding notes and pitch<br/>
<span className="text-red-400">•</span> Counting rhythm and time signatures<br/>
<span className="text-red-400">•</span> Introduction to scales and keys<br/>
<span className="text-red-400">•</span> Listening and identifying basic elements
          </p>
<p>
<span className="italic text-rose-300">Tip:</span> Listen to your favorite song and try to tap along with the beat!
          </p>
</div>
</div>
</article>

<article data-card-id="2" id="card-2">
<header>
<h2>Instruments &amp; Performance</h2>
<div className="drag-indicator"><span></span><span></span><span></span></div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-guitar"></i>
</div>
<div className="lesson-content">
<p>
            Explore popular instruments and performance techniques. Get hands-on with digital tools and play your first tune.
          </p>
<p>
<b>Module highlights:</b><br/>
<span className="text-purple-400">•</span> Keyboard, guitar, and vocal basics<br/>
<span className="text-purple-400">•</span> How to read tablature and chord charts<br/>
<span className="text-purple-400">•</span> Practice routines and warm-ups<br/>
<span className="text-purple-400">•</span> Recording with simple software
          </p>
<p>
<span className="italic text-purple-200">Challenge:</span> Record yourself playing a simple melody and share it!
          </p>
</div>
</div>
</article>

<article data-card-id="3" id="card-3">
<header>
<h2>Songwriting &amp; Production</h2>
<div className="drag-indicator"><span></span><span></span><span></span></div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-headphones"></i>
</div>
<div className="lesson-content">
<p>
            Create your own music! Dive into songwriting, arranging, and producing tracks with modern tools.
          </p>
<p>
<b>In this module:</b><br/>
<span className="text-emerald-400">•</span> Writing catchy melodies and lyrics<br/>
<span className="text-emerald-400">•</span> Basic harmony and song structure<br/>
<span className="text-emerald-400">•</span> Digital Audio Workstations (DAWs) intro<br/>
<span className="text-emerald-400">•</span> Mixing and sharing your music online
          </p>
<p>
<span className="italic text-green-300">Celebrate:</span> Publish your first original song and share it with the world!
          </p>
</div>
</div>
</article>
<div className="pagination">
<button className="active" id="dot-1"></button>
<button id="dot-2"></button>
<button id="dot-3"></button>
</div>
<div className="swipe-hint">
<i className="fa-solid fa-arrows-left-right"></i> Drag cards to navigate modules
    </div>
</section>


    </>
  );
}
