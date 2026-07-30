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
      // Elements
      const gradientPreview = document.getElementById('gradientPreview');
      const cssOutput = document.getElementById('cssOutput');
      const linearBtn = document.getElementById('linearBtn');
      const radialBtn = document.getElementById('radialBtn');
      const conicBtn = document.getElementById('conicBtn');
      const directionControl = document.getElementById('directionControl');
      const positionControl = document.getElementById('positionControl');
      const direction = document.getElementById('direction');
      const xPosition = document.getElementById('xPosition');
      const yPosition = document.getElementById('yPosition');
      const xPositionValue = document.getElementById('xPositionValue');
      const yPositionValue = document.getElementById('yPositionValue');
      const addColorBtn = document.getElementById('addColorBtn');
      const colorStopsContainer = document.getElementById('colorStopsContainer');
      const copyBtn = document.getElementById('copyBtn');
      const randomizeBtn = document.getElementById('randomizeBtn');
      const resetBtn = document.getElementById('resetBtn');
      
      let gradientType = 'linear';
      
      // Initialize
      updateGradient();
      
      // Event Listeners
      linearBtn.addEventListener('click', () => {
        gradientType = 'linear';
        updateButtonStates();
        directionControl.classList.remove('hidden');
        positionControl.classList.add('hidden');
        updateGradient();
      });
      
      radialBtn.addEventListener('click', () => {
        gradientType = 'radial';
        updateButtonStates();
        directionControl.classList.add('hidden');
        positionControl.classList.remove('hidden');
        updateGradient();
      });
      
      conicBtn.addEventListener('click', () => {
        gradientType = 'conic';
        updateButtonStates();
        directionControl.classList.add('hidden');
        positionControl.classList.remove('hidden');
        updateGradient();
      });
      
      direction.addEventListener('change', updateGradient);
      
      xPosition.addEventListener('input', () => {
        xPositionValue.textContent = xPosition.value + '%';
        updateGradient();
      });
      
      yPosition.addEventListener('input', () => {
        yPositionValue.textContent = yPosition.value + '%';
        updateGradient();
      });
      
      // Handle color stop events
      colorStopsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('color-picker') || e.target.classList.contains('color-position')) {
          const colorStop = e.target.closest('.color-stop');
          if (e.target.classList.contains('color-position')) {
            const positionValue = colorStop.querySelector('.position-value');
            positionValue.textContent = e.target.value;
          }
          updateGradient();
        }
      });
      
      // Add color stop
      addColorBtn.addEventListener('click', () => {
        const newColor = getRandomColor();
        const newPosition = 50;
        
        const newColorStop = document.createElement('div');
        newColorStop.className = 'color-stop flex items-center space-x-2';
        newColorStop.innerHTML = `
          <input type="color" value="${newColor}" class="color-picker h-6 w-6 rounded cursor-pointer">
          <input type="range" min="0" max="100" value="${newPosition}" class="color-position flex-1">
          <div class="text-xs w-6 text-right"><span class="position-value">${newPosition}</span>%</div>
          <button class="remove-color px-1 text-red-500 text-xs">×</button>
        `;
        
        colorStopsContainer.appendChild(newColorStop);
        updateRemoveButtons();
        updateGradient();
        
        // Add event listener for remove button
        const removeBtn = newColorStop.querySelector('.remove-color');
        removeBtn.addEventListener('click', () => {
          colorStopsContainer.removeChild(newColorStop);
          updateRemoveButtons();
          updateGradient();
        });
      });
      
      // Copy CSS
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cssOutput.textContent);
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      });
      
      // Randomize
      randomizeBtn.addEventListener('click', () => {
        const colorStops = document.querySelectorAll('.color-stop');
        
        colorStops.forEach(stop => {
          const colorPicker = stop.querySelector('.color-picker');
          const position = stop.querySelector('.color-position');
          const positionValue = stop.querySelector('.position-value');
          
          const newColor = getRandomColor();
          const newPosition = Math.floor(Math.random() * 101);
          
          colorPicker.value = newColor;
          position.value = newPosition;
          positionValue.textContent = newPosition;
        });
        
        const types = ['linear', 'radial', 'conic'];
        gradientType = types[Math.floor(Math.random() * types.length)];
        
        if (gradientType === 'linear') {
          direction.selectedIndex = Math.floor(Math.random() * direction.options.length);
        } else {
          xPosition.value = Math.floor(Math.random() * 101);
          yPosition.value = Math.floor(Math.random() * 101);
          xPositionValue.textContent = xPosition.value + '%';
          yPositionValue.textContent = yPosition.value + '%';
        }
        
        updateButtonStates();
        directionControl.classList.toggle('hidden', gradientType !== 'linear');
        positionControl.classList.toggle('hidden', gradientType === 'linear');
        
        updateGradient();
      });
      
      // Reset
      resetBtn.addEventListener('click', () => {
        while (colorStopsContainer.children.length > 2) {
          colorStopsContainer.removeChild(colorStopsContainer.lastChild);
        }
        
        const colorStops = document.querySelectorAll('.color-stop');
        
        const firstStop = colorStops[0];
        firstStop.querySelector('.color-picker').value = '#3B82F6';
        firstStop.querySelector('.color-position').value = 0;
        firstStop.querySelector('.position-value').textContent = '0';
        
        const secondStop = colorStops[1];
        secondStop.querySelector('.color-picker').value = '#8B5CF6';
        secondStop.querySelector('.color-position').value = 100;
        secondStop.querySelector('.position-value').textContent = '100';
        
        gradientType = 'linear';
        direction.selectedIndex = 0;
        xPosition.value = 50;
        yPosition.value = 50;
        xPositionValue.textContent = '50%';
        yPositionValue.textContent = '50%';
        
        updateButtonStates();
        directionControl.classList.remove('hidden');
        positionControl.classList.add('hidden');
        
        updateRemoveButtons();
        updateGradient();
      });
      
      // Helper Functions
      function updateButtonStates() {
        linearBtn.className = gradientType === 'linear' 
          ? 'px-2 py-1 bg-blue-500 text-white rounded flex-1 text-xs' 
          : 'px-2 py-1 bg-gray-200 text-gray-700 rounded flex-1 text-xs';
        
        radialBtn.className = gradientType === 'radial' 
          ? 'px-2 py-1 bg-blue-500 text-white rounded flex-1 text-xs' 
          : 'px-2 py-1 bg-gray-200 text-gray-700 rounded flex-1 text-xs';
        
        conicBtn.className = gradientType === 'conic' 
          ? 'px-2 py-1 bg-blue-500 text-white rounded flex-1 text-xs' 
          : 'px-2 py-1 bg-gray-200 text-gray-700 rounded flex-1 text-xs';
      }
      
      function updateRemoveButtons() {
        const removeButtons = document.querySelectorAll('.remove-color');
        removeButtons.forEach(btn => btn.disabled = removeButtons.length <= 2);
      }
      
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      function updateGradient() {
        const colorStops = document.querySelectorAll('.color-stop');
        
        // Sort color stops by position
        const stops = Array.from(colorStops).map(stop => {
          const color = stop.querySelector('.color-picker').value;
          const position = stop.querySelector('.color-position').value;
          return { color, position };
        }).sort((a, b) => a.position - b.position);
        
        const colorStopsString = stops.map(stop => `${stop.color} ${stop.position}%`).join(', ');
        
        let gradientString = '';
        if (gradientType === 'linear') {
          gradientString = `linear-gradient(${direction.value}, ${colorStopsString})`;
        } else if (gradientType === 'radial') {
          gradientString = `radial-gradient(circle at ${xPosition.value}% ${yPosition.value}%, ${colorStopsString})`;
        } else if (gradientType === 'conic') {
          gradientString = `conic-gradient(from 0deg at ${xPosition.value}% ${yPosition.value}%, ${colorStopsString})`;
        }
        
        gradientPreview.style.background = gradientString;
        cssOutput.textContent = `background: ${gradientString};`;
      }
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
      
<div className="max-w-3xl w-full bg-white rounded-lg shadow-sm overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="h-full min-h-[200px] md:min-h-[300px]" id="gradientPreview"></div>

<div className="p-5 space-y-4">

<div className="flex space-x-1.5 text-xs">
<button className="px-2 py-1 bg-blue-500 text-white rounded flex-1" id="linearBtn">Linear</button>
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded flex-1" id="radialBtn">Radial</button>
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded flex-1" id="conicBtn">Conic</button>
</div>

<div id="directionControl">
<select className="w-full p-1.5 text-xs border border-gray-200 rounded bg-gray-50" id="direction">
<option value="to right">→ Right</option>
<option value="to left">← Left</option>
<option value="to bottom">↓ Bottom</option>
<option value="to top">↑ Top</option>
<option value="to bottom right">↘ Bottom Right</option>
<option value="to bottom left">↙ Bottom Left</option>
<option value="to top right">↗ Top Right</option>
<option value="to top left">↖ Top Left</option>
</select>
</div>
<div className="hidden space-y-2" id="positionControl">
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>X Position</span>
<span id="xPositionValue">50%</span>
</div>
<input className="w-full" id="xPosition" max="100" min="0" type="range" value="50" />
</div>
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Y Position</span>
<span id="yPositionValue">50%</span>
</div>
<input className="w-full" id="yPosition" max="100" min="0" type="range" value="50" />
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">Colors</span>
<button className="px-1.5 py-0.5 bg-blue-500 text-white text-xs rounded" id="addColorBtn">+</button>
</div>
<div className="space-y-2.5" id="colorStopsContainer">
<div className="color-stop flex items-center space-x-2">
<input className="color-picker h-6 w-6 rounded cursor-pointer" type="color" value="#3B82F6" />
<input className="color-position flex-1" max="100" min="0" type="range" value="0" />
<div className="text-xs w-6 text-right"><span className="position-value">0</span>%</div>
<button className="remove-color px-1 text-red-500 text-xs" disabled>×</button>
</div>
<div className="color-stop flex items-center space-x-2">
<input className="color-picker h-6 w-6 rounded cursor-pointer" type="color" value="#8B5CF6" />
<input className="color-position flex-1" max="100" min="0" type="range" value="100" />
<div className="text-xs w-6 text-right"><span className="position-value">100</span>%</div>
<button className="remove-color px-1 text-red-500 text-xs" disabled>×</button>
</div>
</div>
</div>

<div className="pt-2 border-t border-gray-100">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-500">CSS</span>
<button className="px-1.5 py-0.5 bg-gray-100 text-xs rounded" id="copyBtn">Copy</button>
</div>
<pre className="p-2 bg-gray-50 rounded text-xs overflow-x-auto" id="cssOutput"></pre>
</div>

<div className="flex space-x-2 pt-1">
<button className="px-2 py-1 bg-purple-500 text-white rounded text-xs flex-1" id="randomizeBtn">Randomize</button>
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs flex-1" id="resetBtn">Reset</button>
</div>
</div>
</div>
</div>


    </>
  );
}
