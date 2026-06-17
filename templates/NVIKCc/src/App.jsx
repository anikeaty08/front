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



    let N = 440, R = 140, LINE_LENGTH = 10, LINE_WIDTH = 0.5, BASE_COLOR = "#cccccc", ACTIVE_COLOR = "#ffffff", BREATHING_SPEED = 1.2, ROTATION_SPEED = 0.44, BREATHING_AMP = 0.7;
    const globe = document.getElementById('globe');
    const pointsCountSlider = document.getElementById('pointsCount');
    const radiusSlider = document.getElementById('radius');
    const lineLengthSlider = document.getElementById('lineLength');
    const lineWidthSlider = document.getElementById('lineWidth');
    const baseColorInput = document.getElementById('baseColor');
    const activeColorInput = document.getElementById('activeColor');
    const breathingSpeedSlider = document.getElementById('breathingSpeed');
    const rotSpeedSlider = document.getElementById('rotSpeed');
    const breathingAmpSlider = document.getElementById('breathingAmp');
    let lines = [], positions = [], baseRotations = [], start, randomActiveTimer;
    function createGlobe() {
      globe.innerHTML = "";
      lines = []; positions = []; baseRotations = [];
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = Math.PI * (3 - Math.sqrt(5)) * i;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        positions.push({x, y, z});
        const tangentAngle = Math.atan2(z, x) * 180 / Math.PI;
        baseRotations.push(tangentAngle + 45);
        const line = document.createElement('div');
        line.className = 'line';
        line.style.width = LINE_LENGTH + 'px';
        line.style.height = LINE_WIDTH + 'px';
        line.style.background = BASE_COLOR;
        globe.appendChild(line);
        lines.push(line);
      }
    }
    createGlobe();
    function randomBreathing() {
      lines.forEach(line => line.classList.remove('active'));
      const n = Math.floor(N / 5 + Math.random() * N / 8);
      const indices = Array.from({length: N}, (_, i) => i);
      for (let i = 0; i < n; ++i) {
        const idx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
        lines[idx].classList.add('active');
      }
      for(let i=0; i<N; i++) {
        lines[i].style.background = lines[i].classList.contains('active') ? ACTIVE_COLOR : BASE_COLOR;
      }
    }
    randomBreathing();
    if(randomActiveTimer) clearInterval(randomActiveTimer);
    randomActiveTimer = setInterval(randomBreathing, 1400);
    function animate(ts) {
      if (!start) start = ts;
      const t = (ts - start) / 1400;
      const ry = t * ROTATION_SPEED;
      const rx = Math.sin(t * 0.35) * 0.28;
      const sinRy = Math.sin(ry), cosRy = Math.cos(ry);
      const sinRx = Math.sin(rx), cosRx = Math.cos(rx);
      const syncAngle = 90 * Math.sin(ts * 0.00085);
      const lineScale = 1 + BREATHING_AMP * Math.abs(Math.sin(ts * 0.001 * BREATHING_SPEED));
      for (let i = 0; i < N; i++) {
        let {x, y, z} = positions[i];
        let x1 = cosRy * x - sinRy * z;
        let z1 = sinRy * x + cosRy * z;
        let y1 = cosRx * y - sinRx * z1;
        let z2 = sinRx * y + cosRx * z1;
        const persp = 350 / (350 + z2 * R);
        const px = x1 * R * persp, py = y1 * R * persp;
        let scale = 1;
        if (lines[i].classList.contains('active')) {
          scale = 1.6 + 0.10 * Math.sin(ts / 420 + i);
        }
        const angle = baseRotations[i] + syncAngle;
        lines[i].style.transform =
          `translate(-50%,-50%) translate(${px}px,${py}px) scale(${lineScale},${scale}) rotate(${angle}deg)`;
        lines[i].style.width = LINE_LENGTH + 'px';
        lines[i].style.height = LINE_WIDTH + 'px';
        lines[i].style.zIndex = 100 + Math.round(z2 * 100);
      }
      requestAnimationFrame(animate);
    }
    animate();
    pointsCountSlider.addEventListener("input", function() {
      N = parseInt(this.value); createGlobe(); randomBreathing();
      clearInterval(randomActiveTimer); randomActiveTimer = setInterval(randomBreathing, 1400);
    });
    radiusSlider.addEventListener("input", function() { R = parseInt(this.value); });
    lineLengthSlider.addEventListener("input", function() { LINE_LENGTH = parseInt(this.value); });
    lineWidthSlider.addEventListener("input", function() { LINE_WIDTH = parseFloat(this.value); });
    baseColorInput.addEventListener("input", function() {
      BASE_COLOR = this.value;
      for (let i=0; i<N; i++) if(!lines[i].classList.contains('active')) lines[i].style.background = BASE_COLOR;
    });
    activeColorInput.addEventListener("input", function() {
      ACTIVE_COLOR = this.value;
      for (let i=0; i<N; i++) if(lines[i].classList.contains('active')) lines[i].style.background = ACTIVE_COLOR;
    });
    breathingSpeedSlider.addEventListener("input", function() { BREATHING_SPEED = parseFloat(this.value); });
    rotSpeedSlider.addEventListener("input", function() { ROTATION_SPEED = parseFloat(this.value); });
    breathingAmpSlider.addEventListener("input", function() { BREATHING_AMP = parseFloat(this.value); });
  
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
      
<div className="flex items-center justify-center w-full min-h-screen">
<div className="globe-container mr-8" id="globe"></div>
<div className="bg-[#15151a]/90 rounded-md border border-[#232329] p-5 min-w-[200px] max-w-[210px] flex flex-col gap-4 shadow-lg">
<div className="text-neutral-300 text-xs font-semibold mb-1">Globe Options</div>
<div className="flex flex-col gap-4">
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Points
          <input className="slider" id="pointsCount" max="800" min="180" step="10" type="range" value="440"/>
</label>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Radius
          <input className="slider" id="radius" max="170" min="80" step="1" type="range" value="140"/>
</label>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Line Length
          <input className="slider" id="lineLength" max="26" min="6" step="1" type="range" value="10"/>
</label>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Line Width
          <input className="slider" id="lineWidth" max="2.2" min="0.5" step="0.1" type="range" value="0.5"/>
</label>
<div className="flex items-center space-x-2 text-[11px] text-neutral-400">
<span>Base</span>
<input className="bg-black w-5 h-5 rounded border border-[#232329] p-0 m-0" id="baseColor" type="color" value="#cccccc"/>
<span className="ml-3">Active</span>
<input className="bg-black w-5 h-5 rounded border border-[#232329] p-0 m-0" id="activeColor" type="color" value="#ffffff"/>
</div>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Breathing
          <input className="slider" id="breathingSpeed" max="2.5" min="0.5" step="0.01" type="range" value="1.2" />
</input></label>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Rotation
          <input className="slider" id="rotSpeed" max="0.85" min="0.1" step="0.01" type="range" value="0.44" />
</input></label>
<label className="flex flex-col gap-1 text-[11px] text-neutral-400">
          Amplitude
          <input className="slider" id="breathingAmp" max="1.5" min="0.1" step="0.01" type="range" value="0.7"/>
</label>
</div>
</div>
</div>


    </>
  );
}
