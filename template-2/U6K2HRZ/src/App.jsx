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
      
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Lucide icons
      lucide.createIcons();
      
      const gridSize = 32;
      const grid = document.getElementById('pixel-grid');
      const colorPicker = document.getElementById('color-picker');
      const colorDisplay = document.getElementById('color-display');
      const clearBtn = document.getElementById('clear-btn');
      const bucketBtn = document.getElementById('bucket-btn');
      const eraseBtn = document.getElementById('erase-btn');
      const drawBtn = document.getElementById('draw-btn');
      const undoBtn = document.getElementById('undo-btn');
      const redoBtn = document.getElementById('redo-btn');
      const downloadBtn = document.getElementById('download-btn');
      
      let isDrawing = false;
      let currentColor = colorPicker.value;
      let mode = 'draw';
      let pixelColors = {}; // Store colors by pixel index

      // Undo/Redo Stacks
      let undoStack = [];
      let redoStack = [];

      // Create grid
      for(let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'cursor-pointer transition-colors duration-75 hover:ring-1 hover:ring-gray-300';
        pixel.style.backgroundColor = '#ffffff';
        pixel.dataset.idx = i;
        pixelColors[i] = '#ffffff'; // Initialize color tracking
        grid.appendChild(pixel);
      }

      // Color picker updates
      colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        colorDisplay.textContent = currentColor.toUpperCase();
      });

      // Helper to get all pixel colors as an array
      function getGridState() {
        return {...pixelColors};
      }

      function setGridState(state) {
        pixelColors = {...state};
        Array.from(grid.children).forEach((pixel, i) => {
          pixel.style.backgroundColor = pixelColors[i];
        });
      }

      // Save current state to undo stack, clear redo stack
      function pushUndoState() {
        undoStack.push(getGridState());
        if (undoStack.length > 50) undoStack.shift();
        redoStack = [];
        updateUndoRedoButtons();
      }

      function updateUndoRedoButtons() {
        const undoDisabled = undoStack.length === 0;
        const redoDisabled = redoStack.length === 0;
        
        undoBtn.disabled = undoDisabled;
        undoBtn.classList.toggle('opacity-50', undoDisabled);
        undoBtn.classList.toggle('cursor-not-allowed', undoDisabled);
        
        redoBtn.disabled = redoDisabled;
        redoBtn.classList.toggle('opacity-50', redoDisabled);
        redoBtn.classList.toggle('cursor-not-allowed', redoDisabled);
      }

      undoBtn.addEventListener('click', () => {
        if (undoStack.length === 0) return;
        redoStack.push(getGridState());
        const prevState = undoStack.pop();
        setGridState(prevState);
        updateUndoRedoButtons();
      });

      redoBtn.addEventListener('click', () => {
        if (redoStack.length === 0) return;
        undoStack.push(getGridState());
        const nextState = redoStack.pop();
        setGridState(nextState);
        updateUndoRedoButtons();
      });

      // Download functionality - Fixed
      downloadBtn.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size for high resolution
        const scale = 16;
        canvas.width = gridSize * scale;
        canvas.height = gridSize * scale;
        
        // Disable antialiasing for crisp pixels
        ctx.imageSmoothingEnabled = false;
        
        // Fill with white background for JPEG
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw each pixel using our color tracking
        for(let i = 0; i < gridSize * gridSize; i++) {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          const color = pixelColors[i] || '#ffffff';
          
          ctx.fillStyle = color;
          ctx.fillRect(col * scale, row * scale, scale, scale);
        }
        
        // Create download link
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `pixel-art-${Date.now()}.jpg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 'image/jpeg', 0.95);
      });

      // Tool button handlers
      function setMode(newMode) {
        mode = newMode;
        
        // Reset all buttons
        [drawBtn, eraseBtn, bucketBtn].forEach(btn => {
          btn.classList.remove('bg-blue-50', 'border-blue-200', 'text-blue-700');
          btn.classList.add('text-gray-700');
        });
        
        // Activate selected button
        const activeBtn = newMode === 'draw' ? drawBtn : newMode === 'erase' ? eraseBtn : bucketBtn;
        activeBtn.classList.add('bg-blue-50', 'border-blue-200', 'text-blue-700');
        activeBtn.classList.remove('text-gray-700');

        // Handle color picker state
        colorPicker.disabled = (mode === 'erase');
        colorPicker.classList.toggle('opacity-50', mode === 'erase');
        colorPicker.classList.toggle('cursor-not-allowed', mode === 'erase');
      }

      drawBtn.addEventListener('click', () => setMode('draw'));
      eraseBtn.addEventListener('click', () => setMode('erase'));
      bucketBtn.addEventListener('click', () => setMode('bucket'));

      function colorPixel(pixel) {
        if(pixel) {
          const idx = parseInt(pixel.dataset.idx);
          if(mode === 'draw') {
            if(pixelColors[idx] !== currentColor) {
              pixel.style.backgroundColor = currentColor;
              pixelColors[idx] = currentColor;
            }
          } else if(mode === 'erase') {
            if(pixelColors[idx] !== '#ffffff') {
              pixel.style.backgroundColor = '#ffffff';
              pixelColors[idx] = '#ffffff';
            }
          }
        }
      }

      // For tracking if the drag changes anything
      let dragChanged = false;

      grid.addEventListener('mousedown', e => {
        if(e.target !== grid) {
          pushUndoState();
          dragChanged = false;
          if(mode === 'bucket') {
            fillBucket(e.target);
            dragChanged = true;
          } else {
            isDrawing = true;
            colorPixel(e.target);
            dragChanged = true;
          }
        }
      });

      grid.addEventListener('mouseover', e => {
        if((mode === 'draw' || mode === 'erase') && isDrawing && e.target !== grid) {
          colorPixel(e.target);
          dragChanged = true;
        }
      });

      document.addEventListener('mouseup', () => {
        isDrawing = false;
        dragChanged = false;
      });

      clearBtn.addEventListener('click', () => {
        pushUndoState();
        Array.from(grid.children).forEach((pixel, i) => {
          pixel.style.backgroundColor = '#ffffff';
          pixelColors[i] = '#ffffff';
        });
      });

      // Flood Fill (Bucket Tool)
      function fillBucket(startPixel) {
        const idx = parseInt(startPixel.dataset.idx);
        let fillColor = (mode === 'erase') ? '#ffffff' : currentColor;
        const targetColor = pixelColors[idx];
        if (targetColor === fillColor) return;

        const stack = [idx];
        const visited = new Set();

        while (stack.length) {
          const current = stack.pop();
          if (visited.has(current)) continue;
          visited.add(current);

          if (pixelColors[current] !== targetColor) continue;

          const pixel = grid.children[current];
          pixel.style.backgroundColor = fillColor;
          pixelColors[current] = fillColor;

          // neighbors: left, right, up, down
          const row = Math.floor(current / gridSize);
          const col = current % gridSize;
          if (col > 0) stack.push(current - 1);           // left
          if (col < gridSize - 1) stack.push(current + 1); // right
          if (row > 0) stack.push(current - gridSize);     // up
          if (row < gridSize - 1) stack.push(current + gridSize); // down
        }
      }

      // Initialize
      setMode('draw');
      updateUndoRedoButtons();
      colorDisplay.textContent = currentColor.toUpperCase();
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
      
<div className="container mx-auto px-4 py-8">

<div className="text-center mb-8">
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Pixel Art Studio</h1>
<p className="text-gray-600">Create beautiful pixel art with our intuitive drawing tools</p>
</div>

<div className="flex flex-col lg:flex-row gap-8 items-start justify-center">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full lg:w-80">
<h2 className="text-lg font-medium text-gray-900 mb-4">Tools</h2>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
<div className="flex items-center gap-3">
<div className="relative">
<input className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer" id="color-picker" style={{appearance: `none`, webkitAppearance: `none`}} type="color" value="#000000" />
</div>
<div className="flex-1">
<div className="text-sm font-mono text-gray-600" id="color-display">#000000</div>
</div>
</div>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Drawing Mode</label>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors bg-blue-50 border-blue-200 text-blue-700" id="draw-btn">
<i className="w-4 h-4" data-lucide="pencil"></i>
<span className="font-medium">Draw</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700" id="erase-btn">
<i className="w-4 h-4" data-lucide="eraser"></i>
<span className="font-medium">Eraser</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700" id="bucket-btn">
<i className="w-4 h-4" data-lucide="paint-bucket"></i>
<span className="font-medium">Fill</span>
</button>
</div>
</div>

<div className="space-y-3">
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700" id="undo-btn">
<i className="w-4 h-4" data-lucide="undo"></i>
<span className="font-medium">Undo</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700" id="redo-btn">
<i className="w-4 h-4" data-lucide="redo"></i>
<span className="font-medium">Redo</span>
</button>
</div>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors text-white font-medium" id="download-btn">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Download JPEG</span>
</button>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white font-medium" id="clear-btn">
<i className="w-4 h-4" data-lucide="trash-2"></i>
<span>Clear Canvas</span>
</button>
</div>
</div>

<div className="flex-1 max-w-2xl">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-gray-900">Canvas</h2>
<div className="text-sm text-gray-500">32×32 pixels</div>
</div>
<div className="flex justify-center">
<div className="bg-gray-100 p-1 rounded-lg border border-gray-200" id="pixel-grid" style={{display: `grid`, gridTemplateColumns: `repeat(32, 1fr)`, gridTemplateRows: `repeat(32, 1fr)`, width: `512px`, height: `512px`, touchAction: `none`}}>

</div>
</div>
<div className="mt-4 text-center text-sm text-gray-500">
            Click and drag to draw • Use tools to switch between drawing modes
          </div>
</div>
</div>
</div>
</div>


    </>
  );
}
