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



    document.addEventListener('DOMContentLoaded', () => {
      const color1Input = document.getElementById('color1');
      const color2Input = document.getElementById('color2');
      const color1Text = document.getElementById('color1Text');
      const color2Text = document.getElementById('color2Text');
      const x1Input = document.getElementById('x1');
      const y1Input = document.getElementById('y1');
      const x2Input = document.getElementById('x2');
      const y2Input = document.getElementById('y2');
      const blurInput = document.getElementById('blur');
      const opacityInput = document.getElementById('opacity');
      const gradientPreview = document.getElementById('gradientPreview');
      const background = document.getElementById('background');
      const cssCode = document.getElementById('cssCode');
      const randomizeBtn = document.getElementById('randomize');
      const copyCSSBtn = document.getElementById('copyCSS');
      const applyToPageBtn = document.getElementById('applyToPage');
      
      const x1Value = document.getElementById('x1Value');
      const y1Value = document.getElementById('y1Value');
      const x2Value = document.getElementById('x2Value');
      const y2Value = document.getElementById('y2Value');
      const blurValue = document.getElementById('blurValue');
      const opacityValue = document.getElementById('opacityValue');
      
      color1Input.addEventListener('input', () => {
        color1Text.value = color1Input.value.toUpperCase();
        updateGradient();
      });
      
      color2Input.addEventListener('input', () => {
        color2Text.value = color2Input.value.toUpperCase();
        updateGradient();
      });
      
      color1Text.addEventListener('input', () => {
        if (isValidHex(color1Text.value)) {
          color1Input.value = color1Text.value;
          updateGradient();
        }
      });
      
      color2Text.addEventListener('input', () => {
        if (isValidHex(color2Text.value)) {
          color2Input.value = color2Text.value;
          updateGradient();
        }
      });
      
      function isValidHex(hex) {
        return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
      }
      
      x1Input.addEventListener('input', () => {
        x1Value.textContent = x1Input.value;
        updateGradient();
      });
      
      y1Input.addEventListener('input', () => {
        y1Value.textContent = y1Input.value;
        updateGradient();
      });
      
      x2Input.addEventListener('input', () => {
        x2Value.textContent = x2Input.value;
        updateGradient();
      });
      
      y2Input.addEventListener('input', () => {
        y2Value.textContent = y2Input.value;
        updateGradient();
      });
      
      blurInput.addEventListener('input', () => {
        blurValue.textContent = blurInput.value + '%';
        updateGradient();
      });
      
      opacityInput.addEventListener('input', () => {
        const opacity = (opacityInput.value / 100).toFixed(1);
        opacityValue.textContent = opacity;
        updateGradient();
      });
      
      randomizeBtn.addEventListener('click', () => {
        const randomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };
        
        color1Input.value = randomColor();
        color2Input.value = randomColor();
        color1Text.value = color1Input.value;
        color2Text.value = color2Input.value;
        
        x1Input.value = Math.floor(Math.random() * 100);
        y1Input.value = Math.floor(Math.random() * 100);
        x2Input.value = Math.floor(Math.random() * 100);
        y2Input.value = Math.floor(Math.random() * 100);
        blurInput.value = Math.floor(Math.random() * 60) + 20;
        opacityInput.value = Math.floor(Math.random() * 60) + 40;
        
        x1Value.textContent = x1Input.value;
        y1Value.textContent = y1Input.value;
        x2Value.textContent = x2Input.value;
        y2Value.textContent = y2Input.value;
        blurValue.textContent = blurInput.value + '%';
        opacityValue.textContent = (opacityInput.value / 100).toFixed(1);
        
        updateGradient();
      });
      
      applyToPageBtn.addEventListener('click', () => {
        background.style.background = gradientPreview.style.background;
      });
      
      copyCSSBtn.addEventListener('click', () => {
        const textToCopy = cssCode.textContent;
        navigator.clipboard.writeText(textToCopy);
        
        copyCSSBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyCSSBtn.textContent = 'Copy';
        }, 2000);
      });
      
      function updateGradient() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const x1 = x1Input.value;
        const y1 = y1Input.value;
        const x2 = x2Input.value;
        const y2 = y2Input.value;
        const blur = blurInput.value;
        const opacity = opacityInput.value / 100;
        
        const color1WithOpacity = hexToRgba(color1, opacity);
        const color2WithOpacity = hexToRgba(color2, opacity);
        
        const radialGradient1 = `radial-gradient(circle at ${x1}% ${y1}%, ${color1WithOpacity} 0%, transparent ${blur}%)`;
        const radialGradient2 = `radial-gradient(circle at ${x2}% ${y2}%, ${color2WithOpacity} 0%, transparent ${blur}%)`;
        
        const backgroundValue = `${radialGradient1}, ${radialGradient2}`;
        gradientPreview.style.background = backgroundValue;
        
        cssCode.textContent = `.mesh-gradient {\n  background: ${backgroundValue};\n}`;
      }
      
      function hexToRgba(hex, opacity) {
        hex = hex.replace('#', '');
        
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
      
      updateGradient();
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
      
<div className="absolute inset-0 -z-10" id="background"></div>
<div className="min-h-screen flex flex-col">
<header className="py-6 px-4 md:px-8">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">MeshFlow</div>
<nav className="hidden md:flex space-x-8">
<a className="text-white hover:text-indigo-300 transition" href="#">Home</a>
<a className="text-gray-400 hover:text-white transition" href="#">Gallery</a>
<a className="text-gray-400 hover:text-white transition" href="#">Docs</a>
</nav>
</div>
</header>
<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
<div className="text-center max-w-3xl mb-12">
<h1 className="text-4xl md:text-5xl font-bold mb-4">
          Create Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Mesh Gradients</span>
</h1>
<p className="text-xl text-gray-300">
          Design stunning backgrounds with our intuitive gradient generator
        </p>
</div>
<div className="w-full max-w-4xl" style={{backgroundColor: '#1D1D1F', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '4rem'}}>
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<h2 className="font-medium">Gradient Generator</h2>
<div className="flex space-x-2">
<button className="px-3 py-1 text-sm bg-zinc-900 rounded hover:bg-zinc-800 transition border border-white/10" id="randomize">
              Randomize
            </button>
<button className="px-3 py-1 text-sm bg-indigo-600 rounded hover:bg-indigo-500 transition" id="applyToPage">
              Apply
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
<div className="md:col-span-3">
<div className="w-full aspect-video rounded-lg bg-white/10 mb-4" id="gradientPreview"></div>
<div className="relative">
<pre className="bg-zinc-900 p-3 rounded text-xs leading-relaxed overflow-x-auto text-gray-300 border border-white/10" id="cssCode"></pre>
<button className="absolute top-2 right-2 px-2 py-1 text-xs bg-zinc-800 rounded hover:bg-zinc-700 transition" id="copyCSS">
                Copy
              </button>
</div>
</div>
<div className="space-y-4 md:col-span-2">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm text-gray-400 mb-1">Color 1</label>
<div className="flex items-center space-x-2">
<input className="h-8 w-8 rounded cursor-pointer bg-transparent" id="color1" type="color" value="#4f46e5"/>
<input className="w-full px-2 py-1 bg-zinc-900 border border-white/10 rounded text-sm" id="color1Text" type="text" value="#4f46e5"/>
</div>
</div>
<div>
<label className="block text-sm text-gray-400 mb-1">Color 2</label>
<div className="flex items-center space-x-2">
<input className="h-8 w-8 rounded cursor-pointer bg-transparent" id="color2" type="color" value="#06b6d4"/>
<input className="w-full px-2 py-1 bg-zinc-900 border border-white/10 rounded text-sm" id="color2Text" type="text" value="#06b6d4"/>
</div>
</div>
</div>
<div>
<label className="block text-sm text-gray-400 mb-1">Position 1</label>
<div className="grid grid-cols-2 gap-2">
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>X: <span id="x1Value">15</span>%</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="x1" max="100" min="0" type="range" value="15"/>
</div>
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Y: <span id="y1Value">20</span>%</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="y1" max="100" min="0" type="range" value="20"/>
</div>
</div>
</div>
<div>
<label className="block text-sm text-gray-400 mb-1">Position 2</label>
<div className="grid grid-cols-2 gap-2">
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>X: <span id="x2Value">85</span>%</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="x2" max="100" min="0" type="range" value="85"/>
</div>
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Y: <span id="y2Value">80</span>%</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="y2" max="100" min="0" type="range" value="80"/>
</div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<label className="text-sm text-gray-400">Blur</label>
<span className="text-xs text-gray-500" id="blurValue">40%</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="blur" max="100" min="0" type="range" value="40"/>
</div>
<div>
<div className="flex justify-between mb-1">
<label className="text-sm text-gray-400">Opacity</label>
<span className="text-xs text-gray-500" id="opacityValue">0.6</span>
</div>
<input className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer" id="opacity" max="100" min="0" type="range" value="60"/>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
