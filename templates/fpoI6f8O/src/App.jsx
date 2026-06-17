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



    document.addEventListener('DOMContentLoaded', function() {
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      const brushSizeInput = document.getElementById('brushSize');
      const opacityInput = document.getElementById('opacity');
      const colorPicker = document.getElementById('colorPicker');
      const clearBtn = document.getElementById('clearBtn');
      const downloadBtn = document.getElementById('downloadBtn');
      const colorBtns = document.querySelectorAll('.color-btn');
      
      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;
      let hue = 0;
      
      // Initialize canvas with a transparent background
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = getCoordinates(e);
      }
      
      function stopDrawing() {
        isDrawing = false;
      }
      
      function draw(e) {
        if (!isDrawing) return;
        
        const [currentX, currentY] = getCoordinates(e);
        const brushSize = brushSizeInput.value;
        const opacity = opacityInput.value / 100;
        let color = colorPicker.value;
        
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = brushSize;
        
        if (color === 'rainbow') {
          ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity})`;
          hue = (hue + 1) % 360;
        } else {
          const r = parseInt(color.substr(1, 2), 16);
          const g = parseInt(color.substr(3, 2), 16);
          const b = parseInt(color.substr(5, 2), 16);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        
        [lastX, lastY] = [currentX, currentY];
      }
      
      function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        if (e.type.includes('touch')) {
          return [
            (e.touches[0].clientX - rect.left) * scaleX,
            (e.touches[0].clientY - rect.top) * scaleY
          ];
        }
        
        return [
          (e.clientX - rect.left) * scaleX,
          (e.clientY - rect.top) * scaleY
        ];
      }
      
      function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      function downloadCanvas() {
        const link = document.createElement('a');
        link.download = 'my-artwork.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
      
      // Event listeners
      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseout', stopDrawing);
      
      // Touch support
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startDrawing(e);
      });
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        draw(e);
      });
      canvas.addEventListener('touchend', stopDrawing);
      
      clearBtn.addEventListener('click', clearCanvas);
      downloadBtn.addEventListener('click', downloadCanvas);
      
      // Color buttons
      colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedColor = btn.getAttribute('data-color');
          if (selectedColor === 'rainbow') {
            colorPicker.value = '#ffffff';
            colorPicker.setAttribute('data-rainbow', 'true');
          } else {
            colorPicker.value = selectedColor;
            colorPicker.removeAttribute('data-rainbow');
          }
        });
      });
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
      
<div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
<div className="relative">
<div className="absolute top-3 left-4 z-10">
<h2 className="text-2xl font-bold text-white">Creative Canvas</h2>
<p className="text-white/70 text-sm">Express yourself through art</p>
</div>
<div className="absolute top-3 right-4 z-10 flex space-x-2">
<button className="bg-red-500/80 hover:bg-red-600/80 text-white px-3 py-1 rounded-lg text-sm" id="clearBtn">Clear</button>
<button className="bg-green-500/80 hover:bg-green-600/80 text-white px-3 py-1 rounded-lg text-sm" id="downloadBtn">Download</button>
</div>
<canvas className="w-full h-[400px] bg-white/5 backdrop-blur-sm" height="800" id="drawingCanvas" width="1000"></canvas>
</div>
<div className="p-5 bg-black/40">
<div className="flex flex-wrap gap-3 mb-4">
<div className="flex flex-col items-center">
<label className="text-white/70 text-xs mb-1">Brush Size</label>
<input className="w-32" id="brushSize" max="50" min="1" type="range" value="5"/>
</div>
<div className="flex flex-col items-center">
<label className="text-white/70 text-xs mb-1">Opacity</label>
<input className="w-32" id="opacity" max="100" min="1" type="range" value="100"/>
</div>
<div className="flex flex-col items-center">
<label className="text-white/70 text-xs mb-1">Color</label>
<input className="h-8 w-16 bg-transparent border-0" id="colorPicker" type="color" value="#ffffff"/>
</div>
</div>
<div className="grid grid-cols-6 gap-2 mt-4">
<button className="color-btn w-8 h-8 rounded-full bg-white" data-color="#ffffff"></button>
<button className="color-btn w-8 h-8 rounded-full bg-red-500" data-color="#ef4444"></button>
<button className="color-btn w-8 h-8 rounded-full bg-orange-500" data-color="#f97316"></button>
<button className="color-btn w-8 h-8 rounded-full bg-yellow-400" data-color="#facc15"></button>
<button className="color-btn w-8 h-8 rounded-full bg-green-500" data-color="#22c55e"></button>
<button className="color-btn w-8 h-8 rounded-full bg-blue-500" data-color="#3b82f6"></button>
<button className="color-btn w-8 h-8 rounded-full bg-indigo-500" data-color="#6366f1"></button>
<button className="color-btn w-8 h-8 rounded-full bg-purple-500" data-color="#a855f7"></button>
<button className="color-btn w-8 h-8 rounded-full bg-pink-500" data-color="#ec4899"></button>
<button className="color-btn w-8 h-8 rounded-full bg-gray-500" data-color="#6b7280"></button>
<button className="color-btn w-8 h-8 rounded-full bg-black" data-color="#000000"></button>
<button className="color-btn w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" data-color="rainbow"></button>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="text-white/70 text-sm">Create beautiful artwork with this simple drawing tool. Adjust brush size, opacity, and choose from various colors to express your creativity.</p>
</div>
</div>
</div>


    </>
  );
}
