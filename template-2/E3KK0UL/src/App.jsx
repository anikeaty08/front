import React, { useEffect } from 'react';
import createGlobe from 'https://cdn.skypack.dev/cobe'

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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    let canvas = document.getElementById("cobe")
    
    // Globe state - these variables control the globe
    let globeConfig = {
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1],
      rotationSpeed: 0.005,
      autoRotate: true
    }
    
    // Color presets
    const colors = {
      white: [1, 1, 1],
      blue: [0.3, 0.5, 1],
      green: [0.2, 0.8, 0.3],
      purple: [0.7, 0.3, 0.9],
      red: [1, 0.2, 0.2],
      indigo: [0.4, 0.2, 0.8],
      teal: [0.2, 0.7, 0.7]
    }
    
    const markerColors = {
      pink: [1, 0.5, 1],
      orange: [1, 0.6, 0.3],
      cyan: [0.3, 0.8, 1],
      yellow: [1, 0.9, 0.3],
      lime: [0.5, 1, 0.2],
      violet: [0.8, 0.4, 1],
      rose: [1, 0.4, 0.6]
    }
    
    const glowColors = {
      white: [1, 1, 1],
      blue: [0.5, 0.7, 1],
      green: [0.6, 1, 0.6],
      purple: [0.8, 0.6, 1],
      amber: [1, 0.9, 0.5],
      emerald: [0.4, 1, 0.7],
      sky: [0.5, 0.8, 1]
    }
    
    // Helper function to convert hex to RGB array
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ] : [1, 1, 1]
    }
    
    // Initialize globe
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: globeConfig.phi,
      theta: globeConfig.theta,
      dark: globeConfig.dark,
      diffuse: globeConfig.diffuse,
      scale: globeConfig.scale,
      mapSamples: globeConfig.mapSamples,
      mapBrightness: globeConfig.mapBrightness,
      baseColor: globeConfig.baseColor,
      markerColor: globeConfig.markerColor,
      glowColor: globeConfig.glowColor,
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
      ],
      onRender: (state) => {
        if (globeConfig.autoRotate) {
          globeConfig.phi += globeConfig.rotationSpeed
        }
        state.phi = globeConfig.phi
        state.theta = globeConfig.theta
        state.dark = globeConfig.dark
        state.diffuse = globeConfig.diffuse
        state.scale = globeConfig.scale
        state.mapBrightness = globeConfig.mapBrightness
        state.baseColor = globeConfig.baseColor
        state.markerColor = globeConfig.markerColor
        state.glowColor = globeConfig.glowColor
      },
    })
    
    // Update UI display values
    function updateUI() {
      document.getElementById('phiValue').textContent = globeConfig.phi.toFixed(1)
      document.getElementById('thetaValue').textContent = globeConfig.theta.toFixed(1)
      document.getElementById('scaleValue').textContent = globeConfig.scale.toFixed(1)
      document.getElementById('diffuseValue').textContent = globeConfig.diffuse.toFixed(1)
      document.getElementById('brightnessValue').textContent = globeConfig.mapBrightness.toFixed(1)
    }
    
    // Control event listeners
    document.getElementById('phi').addEventListener('input', function(e) {
      globeConfig.phi = parseFloat(e.target.value)
      globeConfig.autoRotate = false
      updateUI()
    })
    
    document.getElementById('theta').addEventListener('input', function(e) {
      globeConfig.theta = parseFloat(e.target.value)
      updateUI()
    })
    
    document.getElementById('scale').addEventListener('input', function(e) {
      globeConfig.scale = parseFloat(e.target.value)
      updateUI()
    })
    
    document.getElementById('diffuse').addEventListener('input', function(e) {
      globeConfig.diffuse = parseFloat(e.target.value)
      updateUI()
    })
    
    document.getElementById('mapBrightness').addEventListener('input', function(e) {
      globeConfig.mapBrightness = parseFloat(e.target.value)
      updateUI()
    })
    
    // Color control functions
    function updateColorButtons(type, selected) {
      document.querySelectorAll(`[data-${type}]`).forEach(btn => {
        btn.style.borderColor = btn.getAttribute(`data-${type}`) === selected ? '#3b82f6' : '#4b5563'
        btn.style.borderWidth = btn.getAttribute(`data-${type}`) === selected ? '3px' : '2px'
      })
    }
    
    // Color button event listeners
    document.querySelectorAll('[data-color]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-color')
        globeConfig.baseColor = colors[colorName]
        updateColorButtons('color', colorName)
      })
    })
    
    document.querySelectorAll('[data-marker]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-marker')
        globeConfig.markerColor = markerColors[colorName]
        updateColorButtons('marker', colorName)
      })
    })
    
    document.querySelectorAll('[data-glow]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-glow')
        globeConfig.glowColor = glowColors[colorName]
        updateColorButtons('glow', colorName)
      })
    })
    
    // Custom color inputs
    document.getElementById('customBaseColor').addEventListener('input', function(e) {
      globeConfig.baseColor = hexToRgb(e.target.value)
      document.querySelectorAll('[data-color]').forEach(btn => {
        btn.style.borderColor = '#4b5563'
        btn.style.borderWidth = '2px'
      })
    })
    
    document.getElementById('customMarkerColor').addEventListener('input', function(e) {
      globeConfig.markerColor = hexToRgb(e.target.value)
      document.querySelectorAll('[data-marker]').forEach(btn => {
        btn.style.borderColor = '#4b5563'
        btn.style.borderWidth = '2px'
      })
    })
    
    document.getElementById('customGlowColor').addEventListener('input', function(e) {
      globeConfig.glowColor = hexToRgb(e.target.value)
      document.querySelectorAll('[data-glow]').forEach(btn => {
        btn.style.borderColor = '#4b5563'
        btn.style.borderWidth = '2px'
      })
    })
    
    // Mode toggle buttons
    document.getElementById('lightMode').addEventListener('click', function() {
      globeConfig.dark = 0
      this.classList.add('bg-blue-600', 'border-blue-500', 'text-white')
      this.classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300')
      document.getElementById('darkMode').classList.remove('bg-blue-600', 'border-blue-500', 'text-white')
      document.getElementById('darkMode').classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300')
    })
    
    document.getElementById('darkMode').addEventListener('click', function() {
      globeConfig.dark = 1
      this.classList.add('bg-blue-600', 'border-blue-500', 'text-white')
      this.classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300')
      document.getElementById('lightMode').classList.remove('bg-blue-600', 'border-blue-500', 'text-white')
      document.getElementById('lightMode').classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300')
    })
    
    // Reset functionality
    document.getElementById('reset').addEventListener('click', function() {
      globeConfig = {
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.5, 1],
        glowColor: [1, 1, 1],
        rotationSpeed: 0.005,
        autoRotate: true
      }
      
      document.getElementById('phi').value = globeConfig.phi
      document.getElementById('theta').value = globeConfig.theta
      document.getElementById('scale').value = globeConfig.scale
      document.getElementById('diffuse').value = globeConfig.diffuse
      document.getElementById('mapBrightness').value = globeConfig.mapBrightness
      
      updateColorButtons('color', 'white')
      updateColorButtons('marker', 'pink')
      updateColorButtons('glow', 'white')
      
      document.getElementById('darkMode').classList.add('bg-blue-600', 'border-blue-500', 'text-white')
      document.getElementById('darkMode').classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300')
      document.getElementById('lightMode').classList.remove('bg-blue-600', 'border-blue-500', 'text-white')
      document.getElementById('lightMode').classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300')
      
      updateUI()
    })
    
    // Initialize UI
    updateColorButtons('color', 'white')
    updateColorButtons('marker', 'pink')
    updateColorButtons('glow', 'white')
    updateUI()
  
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
      
<div className="max-w-5xl w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">

<div className="w-full md:w-1/2 relative flex items-center justify-center" style={{minHeight: `500px`}}>
<canvas height="1000" id="cobe" style={{width: `100%`, height: `100%`, maxWidth: `500px`, maxHeight: `500px`}} width="1000"></canvas>
</div>

<div className="w-full md:w-1/2 p-6 overflow-y-auto bg-gray-800 text-white">
<h2 className="text-xl font-medium text-white mb-4">Globe Controls</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-300">Phi (Rotation)</label>
<span className="text-white" id="phiValue">0</span>
</div>
<input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" id="phi" max="6.28" min="0" step="0.1" type="range" value="0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-300">Theta (Tilt)</label>
<span className="text-white" id="thetaValue">0</span>
</div>
<input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" id="theta" max="1.57" min="-1.57" step="0.1" type="range" value="0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-300">Scale</label>
<span className="text-white" id="scaleValue">1.0</span>
</div>
<input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" id="scale" max="2.0" min="0.5" step="0.1" type="range" value="1.0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-300">Diffuse</label>
<span className="text-white" id="diffuseValue">1.2</span>
</div>
<input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" id="diffuse" max="2.5" min="0.5" step="0.1" type="range" value="1.2" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-300">Map Brightness</label>
<span className="text-white" id="brightnessValue">6</span>
</div>
<input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" id="mapBrightness" max="10" min="1" step="0.5" type="range" value="6" />
</div>
<div className="pt-4 border-t border-gray-600">
<div className="mb-3">
<span className="text-sm text-gray-300 block mb-2">Base Color</span>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-white border-2 border-gray-600" data-color="white"></button>
<button className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-600" data-color="blue"></button>
<button className="w-6 h-6 rounded-full bg-green-500 border-2 border-gray-600" data-color="green"></button>
<button className="w-6 h-6 rounded-full bg-purple-500 border-2 border-gray-600" data-color="purple"></button>
<button className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-600" data-color="red"></button>
<button className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-gray-600" data-color="indigo"></button>
<button className="w-6 h-6 rounded-full bg-teal-500 border-2 border-gray-600" data-color="teal"></button>
<input className="w-6 h-6 rounded-full border-2 border-gray-600 cursor-pointer" id="customBaseColor" title="Custom Color" type="color" value="#ffffff" />
</div>
</div>
<div className="mb-3">
<span className="text-sm text-gray-300 block mb-2">Marker Color</span>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-pink-500 border-2 border-gray-600" data-marker="pink"></button>
<button className="w-6 h-6 rounded-full bg-orange-500 border-2 border-gray-600" data-marker="orange"></button>
<button className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-gray-600" data-marker="cyan"></button>
<button className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-gray-600" data-marker="yellow"></button>
<button className="w-6 h-6 rounded-full bg-lime-500 border-2 border-gray-600" data-marker="lime"></button>
<button className="w-6 h-6 rounded-full bg-violet-500 border-2 border-gray-600" data-marker="violet"></button>
<button className="w-6 h-6 rounded-full bg-rose-500 border-2 border-gray-600" data-marker="rose"></button>
<input className="w-6 h-6 rounded-full border-2 border-gray-600 cursor-pointer" id="customMarkerColor" title="Custom Color" type="color" value="#ff80ff" />
</div>
</div>
<div className="mb-3">
<span className="text-sm text-gray-300 block mb-2">Glow Color</span>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-white border-2 border-gray-600" data-glow="white"></button>
<button className="w-6 h-6 rounded-full bg-blue-300 border-2 border-gray-600" data-glow="blue"></button>
<button className="w-6 h-6 rounded-full bg-green-300 border-2 border-gray-600" data-glow="green"></button>
<button className="w-6 h-6 rounded-full bg-purple-300 border-2 border-gray-600" data-glow="purple"></button>
<button className="w-6 h-6 rounded-full bg-amber-300 border-2 border-gray-600" data-glow="amber"></button>
<button className="w-6 h-6 rounded-full bg-emerald-300 border-2 border-gray-600" data-glow="emerald"></button>
<button className="w-6 h-6 rounded-full bg-sky-300 border-2 border-gray-600" data-glow="sky"></button>
<input className="w-6 h-6 rounded-full border-2 border-gray-600 cursor-pointer" id="customGlowColor" title="Custom Color" type="color" value="#ffffff" />
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-600 flex justify-between items-center">
<div className="flex space-x-2">
<button className="p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-600" id="lightMode" title="Light Mode">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
</button>
<button className="p-2 bg-blue-600 border border-blue-500 rounded-md text-white" id="darkMode" title="Dark Mode">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</button>
</div>
<button className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-600" id="reset">Reset</button>
</div>
</div>
</div>
</div>


    </>
  );
}
