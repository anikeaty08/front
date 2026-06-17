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



    // ===== SETTINGS LOGIC =====
    const defaultSettings = {
      trailLength: 40,
      headSize: 16,
      trailSize: 22,
      glow: 64,
      rgbSpeed: 10
    };
    let settings = {...defaultSettings};

    function updateSettingsFromUI() {
      settings.trailLength = +document.getElementById('trailLength').value;
      settings.headSize   = +document.getElementById('headSize').value;
      settings.trailSize  = +document.getElementById('trailSize').value;
      settings.glow       = +document.getElementById('glow').value;
      settings.rgbSpeed   = +document.getElementById('rgbSpeed').value;
    }

    function updateUIFromSettings() {
      document.getElementById('trailLength').value = settings.trailLength;
      document.getElementById('headSize').value = settings.headSize;
      document.getElementById('trailSize').value = settings.trailSize;
      document.getElementById('glow').value = settings.glow;
      document.getElementById('rgbSpeed').value = settings.rgbSpeed;

      document.getElementById('trailLengthValue').innerText = settings.trailLength;
      document.getElementById('headSizeValue').innerText = settings.headSize;
      document.getElementById('trailSizeValue').innerText = settings.trailSize;
      document.getElementById('glowValue').innerText = settings.glow;
      document.getElementById('rgbSpeedValue').innerText = settings.rgbSpeed;
    }

    function setupSettingsPanel() {
      const fields = ['trailLength', 'headSize', 'trailSize', 'glow', 'rgbSpeed'];
      fields.forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
          updateSettingsFromUI();
          updateUIFromSettings();
          updateTrailLength();
        });
      });
      updateUIFromSettings();
    }

    // ===== DRAGGABLE PANEL =====
    (() => {
      const panel = document.getElementById('settings-panel');
      const header = document.getElementById('settings-header');
      let isDragging = false;
      let offset = {x:0, y:0};
      let start = {x:0, y:0};
      let panelRect;
      function onPointerDown(e) {
        isDragging = true;
        panel.classList.add('dragging');
        panelRect = panel.getBoundingClientRect();
        start.x = (e.touches ? e.touches[0].clientX : e.clientX);
        start.y = (e.touches ? e.touches[0].clientY : e.clientY);
        offset.x = start.x - panelRect.left;
        offset.y = start.y - panelRect.top;
        e.preventDefault();
      }
      function onPointerMove(e) {
        if (!isDragging) return;
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - offset.x;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - offset.y;
        panel.style.left = x + "px";
        panel.style.top = y + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      }
      function onPointerUp() {
        isDragging = false;
        panel.classList.remove('dragging');
      }
      header.addEventListener('mousedown', onPointerDown);
      header.addEventListener('touchstart', onPointerDown, {passive:false});
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('touchmove', onPointerMove, {passive:false});
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);

      // Close button
      document.getElementById('close-panel').addEventListener('click', () => {
        panel.style.display = 'none';
      });
    })();

    // ===== TRAIL PARTICLES =====
    const canvas = document.getElementById('trail-canvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    let mouse = { x: width/2, y: height/2 };
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('touchstart', e => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, {passive: false});
    window.addEventListener('touchmove', e => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, {passive: false});

    let trail = [];
    function updateTrailLength() {
      let len = settings.trailLength;
      while (trail.length < len)
        trail.push({x: mouse.x, y: mouse.y});
      while (trail.length > len)
        trail.pop();
    }
    function initializeTrail() {
      trail = [];
      for (let i = 0; i < settings.trailLength; i++) {
        trail.push({ x: mouse.x, y: mouse.y });
      }
    }
    initializeTrail();

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.16)';
      ctx.fillRect(0,0,width,height);
      // Update trail positions
      if (!trail.length) initializeTrail();
      trail[0].x = lerp(trail[0].x, mouse.x, 0.25);
      trail[0].y = lerp(trail[0].y, mouse.y, 0.25);
      for (let i = 1; i < trail.length; i++) {
        trail[i].x = lerp(trail[i].x, trail[i-1].x, 0.28);
        trail[i].y = lerp(trail[i].y, trail[i-1].y, 0.28);
      }
      // Draw trail
      for (let i = trail.length-1; i >= 0; i--) {
        const p = trail[i];
        const t = i / trail.length;
        let radius = lerp(settings.trailSize, 4, t);
        let alpha = lerp(1, 0.15, t);
        let color;
        if (i === 0) {
          color = `rgba(255,255,255,1)`;
        } else {
          let hue = (t * 240 + performance.now()/settings.rgbSpeed) % 360;
          color = `hsla(${hue},100%,60%,${alpha})`;
        }
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = settings.glow * (1-t);
        ctx.fill();
      }
      // Leading bright white head
      ctx.beginPath();
      ctx.arc(trail[0].x, trail[0].y, settings.headSize, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,255,255,0.98)';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = settings.glow;
      ctx.fill();

      requestAnimationFrame(draw);
    }

    setupSettingsPanel();
    draw();
  
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
      
<canvas id="trail-canvas"></canvas>

<div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-gray-900/95 rounded-xl shadow-lg border border-gray-700 p-5 text-gray-100 draggable select-none transition duration-200" id="settings-panel">
<div className="flex items-center mb-3 cursor-move draggable" id="settings-header">
<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="font-semibold text-lg">Trail Settings</span>
<button className="ml-auto p-1 -mr-1 hover:bg-gray-700 rounded transition" id="close-panel" title="Close">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-gray-400 mb-0.5" htmlFor="trailLength">Trail Length</label>
<input className="w-full accent-blue-400" id="trailLength" max="100" min="10" type="range" value="40"/>
<div className="text-right text-xs text-gray-400" id="trailLengthValue">40</div>
</div>
<div>
<label className="block text-xs text-gray-400 mb-0.5" htmlFor="headSize">Head Size</label>
<input className="w-full accent-pink-400" id="headSize" max="48" min="8" type="range" value="16"/>
<div className="text-right text-xs text-gray-400" id="headSizeValue">16</div>
</div>
<div>
<label className="block text-xs text-gray-400 mb-0.5" htmlFor="trailSize">Trail Size</label>
<input className="w-full accent-purple-400" id="trailSize" max="32" min="2" type="range" value="22"/>
<div className="text-right text-xs text-gray-400" id="trailSizeValue">22</div>
</div>
<div>
<label className="block text-xs text-gray-400 mb-0.5" htmlFor="glow">Glow Intensity</label>
<input className="w-full accent-yellow-400" id="glow" max="128" min="0" type="range" value="64"/>
<div className="text-right text-xs text-gray-400" id="glowValue">64</div>
</div>
<div>
<label className="block text-xs text-gray-400 mb-0.5" htmlFor="rgbSpeed">RGB Trail Speed</label>
<input className="w-full accent-green-400" id="rgbSpeed" max="50" min="1" type="range" value="10"/>
<div className="text-right text-xs text-gray-400" id="rgbSpeedValue">10</div>
</div>
</div>
</div>


    </>
  );
}
