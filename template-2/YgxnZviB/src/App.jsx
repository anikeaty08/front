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

    let phi = 0
    let rotationSpeed = 0.005
    let canvas = document.getElementById("cobe")
    
    // Default settings
    let settings = {
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1]
    }
    
    // Color presets
    const colors = {
      white: [1, 1, 1],
      blue: [0.3, 0.5, 1],
      green: [0.2, 0.8, 0.3],
      purple: [0.7, 0.3, 0.9]
    }
    
    const markerColors = {
      pink: [1, 0.5, 1],
      orange: [1, 0.6, 0.3],
      cyan: [0.3, 0.8, 1],
      yellow: [1, 0.9, 0.3]
    }
    
    const glowColors = {
      white: [1, 1, 1],
      blue: [0.5, 0.7, 1],
      green: [0.6, 1, 0.6],
      purple: [0.8, 0.6, 1]
    }
    
    // Initialize globe
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: settings.phi,
      theta: settings.theta,
      dark: settings.dark,
      diffuse: settings.diffuse,
      scale: settings.scale,
      mapSamples: settings.mapSamples,
      mapBrightness: settings.mapBrightness,
      baseColor: settings.baseColor,
      markerColor: settings.markerColor,
      glowColor: settings.glowColor,
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += rotationSpeed
      },
    })
    
    // Update UI with current values
    function updateUI() {
      document.getElementById('phiValue').textContent = settings.phi.toFixed(1)
      document.getElementById('thetaValue').textContent = settings.theta.toFixed(1)
      document.getElementById('scaleValue').textContent = settings.scale.toFixed(1)
      document.getElementById('diffuseValue').textContent = settings.diffuse.toFixed(1)
      document.getElementById('brightnessValue').textContent = settings.mapBrightness.toFixed(1)
    }
    
    // Event listeners for range controls
    document.getElementById('phi').addEventListener('input', function(e) {
      settings.phi = parseFloat(e.target.value)
      phi = settings.phi
      updateUI()
    })
    
    document.getElementById('theta').addEventListener('input', function(e) {
      settings.theta = parseFloat(e.target.value)
      globe.theta = settings.theta
      updateUI()
    })
    
    document.getElementById('scale').addEventListener('input', function(e) {
      settings.scale = parseFloat(e.target.value)
      globe.scale = settings.scale
      updateUI()
    })
    
    document.getElementById('diffuse').addEventListener('input', function(e) {
      settings.diffuse = parseFloat(e.target.value)
      globe.diffuse = settings.diffuse
      updateUI()
    })
    
    document.getElementById('mapBrightness').addEventListener('input', function(e) {
      settings.mapBrightness = parseFloat(e.target.value)
      globe.mapBrightness = settings.mapBrightness
      updateUI()
    })
    
    // Base color buttons
    document.querySelectorAll('[data-color]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-color')
        settings.baseColor = colors[colorName]
        globe.baseColor = settings.baseColor
        
        document.querySelectorAll('[data-color]').forEach(btn => {
          btn.style.borderColor = '#d1d5db'
          btn.style.borderWidth = '1px'
        })
        this.style.borderColor = '#3b82f6'
        this.style.borderWidth = '2px'
      })
    })
    
    // Marker color buttons
    document.querySelectorAll('[data-marker]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-marker')
        settings.markerColor = markerColors[colorName]
        globe.markerColor = settings.markerColor
        
        document.querySelectorAll('[data-marker]').forEach(btn => {
          btn.style.borderColor = '#d1d5db'
          btn.style.borderWidth = '1px'
        })
        this.style.borderColor = '#3b82f6'
        this.style.borderWidth = '2px'
      })
    })
    
    // Glow color buttons
    document.querySelectorAll('[data-glow]').forEach(button => {
      button.addEventListener('click', function() {
        const colorName = this.getAttribute('data-glow')
        settings.glowColor = glowColors[colorName]
        globe.glowColor = settings.glowColor
        
        document.querySelectorAll('[data-glow]').forEach(btn => {
          btn.style.borderColor = '#d1d5db'
          btn.style.borderWidth = '1px'
        })
        this.style.borderColor = '#3b82f6'
        this.style.borderWidth = '2px'
      })
    })
    
    // Set initial selected colors
    document.querySelector('[data-color="white"]').style.borderColor = '#3b82f6'
    document.querySelector('[data-color="white"]').style.borderWidth = '2px'
    document.querySelector('[data-marker="pink"]').style.borderColor = '#3b82f6'
    document.querySelector('[data-marker="pink"]').style.borderWidth = '2px'
    document.querySelector('[data-glow="white"]').style.borderColor = '#3b82f6'
    document.querySelector('[data-glow="white"]').style.borderWidth = '2px'
    
    // Dark/Light mode toggle
    document.getElementById('lightMode').addEventListener('click', function() {
      settings.dark = 0
      globe.dark = 0
      this.classList.remove('bg-gray-100', 'text-gray-600')
      this.classList.add('bg-white', 'text-gray-800', 'font-medium')
      document.getElementById('darkMode').classList.remove('bg-gray-800', 'text-white', 'font-medium')
      document.getElementById('darkMode').classList.add('bg-gray-100', 'text-gray-600')
    })
    
    document.getElementById('darkMode').addEventListener('click', function() {
      settings.dark = 1
      globe.dark = 1
      this.classList.remove('bg-gray-100', 'text-gray-600')
      this.classList.add('bg-gray-800', 'text-white', 'font-medium')
      document.getElementById('lightMode').classList.remove('bg-white', 'text-gray-800', 'font-medium')
      document.getElementById('lightMode').classList.add('bg-gray-100', 'text-gray-600')
    })
    
    // Reset button
    document.getElementById('reset').addEventListener('click', function() {
      settings = {
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.5, 1],
        glowColor: [1, 1, 1]
      }
      
      document.getElementById('phi').value = settings.phi
      document.getElementById('theta').value = settings.theta
      document.getElementById('scale').value = settings.scale
      document.getElementById('diffuse').value = settings.diffuse
      document.getElementById('mapBrightness').value = settings.mapBrightness
      
      globe.phi = settings.phi
      globe.theta = settings.theta
      globe.scale = settings.scale
      globe.diffuse = settings.diffuse
      globe.dark = settings.dark
      globe.mapBrightness = settings.mapBrightness
      globe.baseColor = settings.baseColor
      globe.markerColor = settings.markerColor
      globe.glowColor = settings.glowColor
      
      updateUI()
      
      // Reset color selections
      document.querySelectorAll('[data-color], [data-marker], [data-glow]').forEach(btn => {
        btn.style.borderColor = '#d1d5db'
        btn.style.borderWidth = '1px'
      })
      document.querySelector('[data-color="white"]').style.borderColor = '#3b82f6'
      document.querySelector('[data-color="white"]').style.borderWidth = '2px'
      document.querySelector('[data-marker="pink"]').style.borderColor = '#3b82f6'
      document.querySelector('[data-marker="pink"]').style.borderWidth = '2px'
      document.querySelector('[data-glow="white"]').style.borderColor = '#3b82f6'
      document.querySelector('[data-glow="white"]').style.borderWidth = '2px'
      
      // Reset dark/light mode UI
      document.getElementById('lightMode').classList.remove('bg-gray-100', 'text-gray-600')
      document.getElementById('lightMode').classList.add('bg-white', 'text-gray-800', 'font-medium')
      document.getElementById('darkMode').classList.remove('bg-gray-800', 'text-white', 'font-medium')
      document.getElementById('darkMode').classList.add('bg-gray-100', 'text-gray-600')
    })
    
    // Initial UI update
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
      
<div className="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">

<div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
<canvas height="1000" id="cobe" style={{width: `100%`, height: `100%`}} width="1000"></canvas>
</div>

<div className="w-full md:w-1/2 p-6 overflow-y-auto">
<h2 className="text-xl font-medium text-gray-800 mb-4">Globe Controls</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-600">Phi (Rotation)</label>
<span className="text-gray-800" id="phiValue">0</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="phi" max="6.28" min="0" step="0.1" type="range" value="0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-600">Theta (Tilt)</label>
<span className="text-gray-800" id="thetaValue">0</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="theta" max="1.57" min="-1.57" step="0.1" type="range" value="0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-600">Scale</label>
<span className="text-gray-800" id="scaleValue">1.0</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="scale" max="2.0" min="0.5" step="0.1" type="range" value="1.0" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-600">Diffuse</label>
<span className="text-gray-800" id="diffuseValue">1.2</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="diffuse" max="2.5" min="0.5" step="0.1" type="range" value="1.2" />
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<label className="text-gray-600">Map Brightness</label>
<span className="text-gray-800" id="brightnessValue">6</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="mapBrightness" max="10" min="1" step="0.5" type="range" value="6" />
</div>
<div className="pt-4 border-t border-gray-200">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Base Color</span>
<div className="flex space-x-2">
<button className="w-5 h-5 rounded-full bg-white border border-gray-300" data-color="white"></button>
<button className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300" data-color="blue"></button>
<button className="w-5 h-5 rounded-full bg-green-500 border border-gray-300" data-color="green"></button>
<button className="w-5 h-5 rounded-full bg-purple-500 border border-gray-300" data-color="purple"></button>
</div>
</div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Marker Color</span>
<div className="flex space-x-2">
<button className="w-5 h-5 rounded-full bg-pink-500 border border-gray-300" data-marker="pink"></button>
<button className="w-5 h-5 rounded-full bg-orange-500 border border-gray-300" data-marker="orange"></button>
<button className="w-5 h-5 rounded-full bg-cyan-500 border border-gray-300" data-marker="cyan"></button>
<button className="w-5 h-5 rounded-full bg-yellow-500 border border-gray-300" data-marker="yellow"></button>
</div>
</div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Glow Color</span>
<div className="flex space-x-2">
<button className="w-5 h-5 rounded-full bg-white border border-gray-300" data-glow="white"></button>
<button className="w-5 h-5 rounded-full bg-blue-300 border border-gray-300" data-glow="blue"></button>
<button className="w-5 h-5 rounded-full bg-green-300 border border-gray-300" data-glow="green"></button>
<button className="w-5 h-5 rounded-full bg-purple-300 border border-gray-300" data-glow="purple"></button>
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-200 flex justify-between">
<div className="flex space-x-2">
<button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600" id="lightMode">Light</button>
<button className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white" id="darkMode">Dark</button>
</div>
<button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200" id="reset">Reset</button>
</div>
</div>
</div>
</div>


    </>
  );
}
