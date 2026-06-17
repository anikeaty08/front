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
      
        lucide.createIcons();

        let currentPillowColor = '#ffffff';
        let currentPillowLight = '#ffffff';
        let currentBlanketColor = '#2563eb';
        let currentBlanketDark = '#1d4ed8';

        // Update pillow count and arrangement
        function updatePillows() {
            const count = document.getElementById('pillows').value;
            const style = document.getElementById('pillow-style').value;
            document.getElementById('pillow-count').textContent = count;
            
            const container = document.getElementById('pillows-container');
            container.innerHTML = '';
            
            if (count == 0) return;
            
            // Calculate pillow size and arrangement based on count
            let pillowWidth, pillowHeight, arrangement;
            if (count <= 2) {
                pillowWidth = 32; pillowHeight = 20; // Larger for fewer pillows
                arrangement = 'side-by-side';
            } else if (count <= 4) {
                pillowWidth = 28; pillowHeight = 18;
                arrangement = 'side-by-side';
            } else {
                pillowWidth = 24; pillowHeight = 16; // Smaller for many pillows
                arrangement = 'stacked';
            }
            
            for (let i = 0; i < count; i++) {
                const pillow = document.createElement('div');
                pillow.className = 'pillow animate-pillow-bounce';
                pillow.style.width = pillowWidth + 'px';
                pillow.style.height = pillowHeight + 'px';
                pillow.style.setProperty('--pillow-color', currentPillowColor);
                pillow.style.setProperty('--pillow-light', currentPillowLight);
                pillow.style.animationDelay = (i * 0.1) + 's';
                
                // Add stacking effect for multiple pillows
                if (arrangement === 'stacked' && i > 0 && i % 2 === 1) {
                    pillow.classList.add('pillow-stack');
                    pillow.style.marginLeft = '-12px';
                }
                
                // Adjust pillow fluffiness based on style
                if (style === 'fluffy') {
                    pillow.style.transform = 'perspective(100px) rotateX(10deg) scaleY(1.2)';
                    pillow.style.filter = 'blur(0.5px)';
                } else if (style === 'firm') {
                    pillow.style.transform = 'perspective(100px) rotateX(20deg) scaleY(0.8)';
                    pillow.style.borderRadius = '25%';
                }
                
                container.appendChild(pillow);
            }
            updateStats();
        }

        // Update bed size
        function updateBedSize() {
            const size = document.querySelector('input[name="size"]:checked').value;
            const bedFrame = document.getElementById('bed-frame');
            const container = document.getElementById('bed-container');
            
            let width, height, scale;
            switch (size) {
                case 'twin':
                    width = 200; height = 160; scale = 0.9;
                    break;
                case 'queen':
                    width = 280; height = 200; scale = 1;
                    break;
                case 'king':
                    width = 320; height = 220; scale = 1.1;
                    break;
            }
            
            bedFrame.style.width = width + 'px';
            bedFrame.style.height = height + 'px';
            container.style.transform = `scale(${scale})`;
            updatePillows(); // Recalculate pillow arrangement
            updateStats();
        }

        // Update pillow color
        function updatePillowColor(color, light) {
            currentPillowColor = color;
            currentPillowLight = light;
            document.querySelectorAll('.pillow-color').forEach(btn => {
                btn.classList.remove('border-2', 'border-blue-600');
            });
            event.target.classList.add('border-2', 'border-blue-600');
            updatePillows();
        }

        // Update blanket
        function updateBlanket() {
            const blanket = document.getElementById('blanket');
            blanket.style.setProperty('--blanket-color', currentBlanketColor);
            blanket.style.setProperty('--blanket-dark', currentBlanketDark);
            updateStats();
        }

        // Update lighting
        function updateLighting() {
            const brightness = document.getElementById('brightness').value;
            document.getElementById('brightness-value').textContent = brightness + '%';
            
            const roomBg = document.getElementById('room-bg');
            const opacity = brightness / 100;
            const lightness = 95 - (brightness * 0.2);
            
            roomBg.style.background = `linear-gradient(135deg, hsl(210, 40%, ${lightness}%) 0%, hsl(215, 25%, ${lightness - 10}%) 100%)`;
            updateStats();
        }

        // Update stats based on current configuration
        function updateStats() {
            const pillowCount = parseInt(document.getElementById('pillows').value);
            const brightness = parseInt(document.getElementById('brightness').value);
            const size = document.querySelector('input[name="size"]:checked').value;
            const pillowStyle = document.getElementById('pillow-style').value;
            
            // Calculate comfort score
            let comfort = 60;
            comfort += Math.min(pillowCount * 8, 32);
            comfort += size === 'king' ? 15 : size === 'queen' ? 10 : 5;
            comfort += brightness > 30 && brightness < 70 ? 10 : 0;
            comfort += pillowStyle === 'fluffy' ? 5 : pillowStyle === 'firm' ? -2 : 0;
            
            document.getElementById('comfort-score').textContent = Math.min(comfort, 100);
            
            // Update other stats
            const quality = comfort > 85 ? 'Excellent' : comfort > 70 ? 'Good' : comfort > 50 ? 'Fair' : 'Poor';
            document.getElementById('sleep-quality').textContent = quality;
            
            const temp = 68 + Math.floor(brightness * 0.08);
            document.getElementById('room-temp').textContent = temp + '°F';
            
            const coziness = pillowCount > 4 ? 'Very High' : pillowCount > 2 ? 'High' : pillowCount > 0 ? 'Medium' : 'Low';
            document.getElementById('coziness').textContent = coziness;
        }

        // Event listeners
        document.getElementById('pillows').addEventListener('input', updatePillows);
        document.getElementById('pillow-style').addEventListener('change', updatePillows);
        document.getElementById('brightness').addEventListener('input', updateLighting);
        document.querySelectorAll('input[name="size"]').forEach(radio => {
            radio.addEventListener('change', updateBedSize);
        });
        document.querySelectorAll('.pillow-color').forEach(btn => {
            btn.addEventListener('click', (e) => updatePillowColor(e.target.dataset.color, e.target.dataset.light));
        });
        document.querySelectorAll('.blanket-color').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentBlanketColor = e.target.dataset.color;
                currentBlanketDark = e.target.dataset.dark;
                document.querySelectorAll('.blanket-color').forEach(b => b.classList.remove('ring-2', 'ring-offset-2', 'ring-gray-400'));
                e.target.classList.add('ring-2', 'ring-offset-2', 'ring-gray-400');
                updateBlanket();
            });
        });

        // Initialize
        updatePillows();
        updateBedSize();
        updateLighting();
        updateBlanket();
    
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
      
<div className="max-w-6xl mx-auto">

<div className="text-center mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-2">Bed Simulator</h1>
<p className="text-gray-600">Design your perfect sleeping environment</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 space-y-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-medium text-gray-900 mb-4 flex items-center">
<i className="w-5 h-5 mr-2 text-gray-500" data-lucide="move" style={{strokeWidth: '1.5'}}></i>
                        Bed Size
                    </h3>
<div className="space-y-3">
<label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
<input className="mr-3" name="size" type="radio" value="twin"/>
<span className="text-sm font-medium text-gray-700">Twin</span>
</label>
<label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
<input checked="" className="mr-3" name="size" type="radio" value="queen"/>
<span className="text-sm font-medium text-gray-700">Queen</span>
</label>
<label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
<input className="mr-3" name="size" type="radio" value="king"/>
<span className="text-sm font-medium text-gray-700">King</span>
</label>
</div>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-medium text-gray-900 mb-4 flex items-center">
<i className="w-5 h-5 mr-2 text-gray-500" data-lucide="circle" style={{strokeWidth: '1.5'}}></i>
                        Pillows
                    </h3>
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-700">Count</span>
<span className="text-sm text-gray-600" id="pillow-count">2</span>
</div>
<input className="w-full accent-blue-600" id="pillows" max="6" min="0" type="range" value="2"/>
<div className="mt-4">
<label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
<div className="flex gap-2">
<button className="pillow-color w-8 h-8 rounded-full border-2 border-blue-600 transition-all hover:scale-110" data-color="#ffffff" data-light="#ffffff" style={{background: 'linear-gradient(145deg, #ffffff, #f8fafc)'}}></button>
<button className="pillow-color w-8 h-8 rounded-full transition-all hover:scale-110" data-color="#dbeafe" data-light="#eff6ff" style={{background: 'linear-gradient(145deg, #dbeafe, #bfdbfe)'}}></button>
<button className="pillow-color w-8 h-8 rounded-full transition-all hover:scale-110" data-color="#fce7f3" data-light="#fdf2f8" style={{background: 'linear-gradient(145deg, #fce7f3, #f9a8d4)'}}></button>
<button className="pillow-color w-8 h-8 rounded-full transition-all hover:scale-110" data-color="#fef3c7" data-light="#fffbeb" style={{background: 'linear-gradient(145deg, #fef3c7, #fbbf24)'}}></button>
<button className="pillow-color w-8 h-8 rounded-full transition-all hover:scale-110" data-color="#d1fae5" data-light="#f0fdf4" style={{background: 'linear-gradient(145deg, #d1fae5, #86efac)'}}></button>
<button className="pillow-color w-8 h-8 rounded-full transition-all hover:scale-110" data-color="#e0e7ff" data-light="#f0f4ff" style={{background: 'linear-gradient(145deg, #e0e7ff, #c7d2fe)'}}></button>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
<select className="w-full p-2 border border-gray-300 rounded-md text-sm" id="pillow-style">
<option value="standard">Standard</option>
<option value="fluffy">Extra Fluffy</option>
<option value="firm">Firm</option>
</select>
</div>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-medium text-gray-900 mb-4 flex items-center">
<i className="w-5 h-5 mr-2 text-gray-500" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
                        Blanket
                    </h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
<select className="w-full p-2 border border-gray-300 rounded-md text-sm" id="blanket-style">
<option value="solid">Solid</option>
<option value="pattern">Pattern</option>
<option value="gradient">Gradient</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
<div className="flex gap-2 flex-wrap">
<button className="blanket-color w-8 h-8 rounded bg-blue-600 border-2 border-blue-800 transition-all hover:scale-110" data-color="#2563eb" data-dark="#1d4ed8"></button>
<button className="blanket-color w-8 h-8 rounded bg-red-600 transition-all hover:scale-110" data-color="#dc2626" data-dark="#b91c1c"></button>
<button className="blanket-color w-8 h-8 rounded bg-green-600 transition-all hover:scale-110" data-color="#16a34a" data-dark="#15803d"></button>
<button className="blanket-color w-8 h-8 rounded bg-purple-600 transition-all hover:scale-110" data-color="#9333ea" data-dark="#7c3aed"></button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-medium text-gray-900 mb-4 flex items-center">
<i className="w-5 h-5 mr-2 text-gray-500" data-lucide="sun" style={{strokeWidth: '1.5'}}></i>
                        Lighting
                    </h3>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-700">Brightness</span>
<span className="text-sm text-gray-600" id="brightness-value">50%</span>
</div>
<input className="w-full accent-yellow-500" id="brightness" max="100" min="0" type="range" value="50"/>
</div>
</div>

<div className="lg:col-span-2 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="bg-white rounded-lg p-8 border border-gray-200 min-h-[600px] flex items-center justify-center">
<div className="relative transform transition-all duration-500" id="bed-container">

<div className="absolute inset-0 -m-20 rounded-lg transition-all duration-500" id="room-bg" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}></div>

<div className="bed-frame relative transition-all duration-500" id="bed-frame" style={{width: '280px', height: '200px'}}>

<div className="absolute -top-8 left-0 right-0 h-12 bed-frame rounded-t-lg"></div>

<div className="mattress absolute top-2 left-2 right-2 h-8"></div>

<div className="absolute -top-4 left-6 right-6 h-12 flex justify-center items-end gap-2" id="pillows-container" style={{zIndex: '10'}}>

</div>

<div className="blanket absolute top-10 left-2 right-2 bottom-2 transition-all duration-500" id="blanket" style={{'--blanket-color': '#2563eb', '--blanket-dark': '#1d4ed8'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
<div className="text-2xl font-semibold text-blue-600" id="comfort-score">85</div>
<div className="text-sm text-gray-600">Comfort Score</div>
</div>
<div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
<div className="text-2xl font-semibold text-green-600" id="sleep-quality">Good</div>
<div className="text-sm text-gray-600">Sleep Quality</div>
</div>
<div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
<div className="text-2xl font-semibold text-purple-600" id="room-temp">72°F</div>
<div className="text-sm text-gray-600">Room Temp</div>
</div>
<div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
<div className="text-2xl font-semibold text-orange-600" id="coziness">High</div>
<div className="text-sm text-gray-600">Coziness</div>
</div>
</div>
</div>


    </>
  );
}
