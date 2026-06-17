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



    // UI Elements
    const canvas = document.getElementById('flower');
    const ctx = canvas.getContext('2d');
    const controls = {
      petals: document.getElementById('petals'),
      size: document.getElementById('size'),
      innerColor: document.getElementById('innerColor'),
      outerColor: document.getElementById('outerColor'),
      rotation: document.getElementById('rotation')
    };

    function drawFlower(petals, size, innerColor, outerColor, rotation) {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(rotation * Math.PI/180);

      // Petal gradient
      for (let i = 0; i < petals; i++) {
        ctx.save();
        ctx.rotate((2 * Math.PI * i) / petals);

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.bezierCurveTo(
          size*0.3, -size*0.2,
          size*0.7, -size*0.5,
          0, -size
        );
        ctx.bezierCurveTo(
          -size*0.7, -size*0.5,
          -size*0.3, -size*0.2,
          0,0
        );
        ctx.closePath();

        // Gradient fill
        const grad = ctx.createLinearGradient(0, -size*0.7, 0, 0);
        grad.addColorStop(0, outerColor);
        grad.addColorStop(1, innerColor);
        ctx.fillStyle = grad;
        ctx.shadowColor = outerColor + '55';
        ctx.shadowBlur = 10;
        ctx.fill();

        ctx.restore();
      }

      // Center "core" gradient
      const coreGrad = ctx.createRadialGradient(0,0,0,0,0,size*0.23);
      coreGrad.addColorStop(0, innerColor);
      coreGrad.addColorStop(1, outerColor+'ee');
      ctx.beginPath();
      ctx.arc(0,0, size*0.23, 0, 2*Math.PI);
      ctx.closePath();
      ctx.shadowColor = outerColor + '33';
      ctx.shadowBlur = 22;
      ctx.fillStyle = coreGrad;
      ctx.fill();

      ctx.restore();
    }

    function updateFlower() {
      drawFlower(
        parseInt(controls.petals.value),
        parseInt(controls.size.value),
        controls.innerColor.value,
        controls.outerColor.value,
        parseInt(controls.rotation.value)
      );
    }

    Object.values(controls).forEach(input => {
      input.addEventListener('input', updateFlower);
    });

    updateFlower();

    // Download PNG
    document.getElementById('download-png').addEventListener('click', e => {
      e.preventDefault();
      const link = document.createElement('a');
      link.download = 'gradient-flower.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });

    // SVG Export logic
    function generateSVG(petals, size, innerColor, outerColor, rotation) {
      const cx = 160, cy = 160;
      let petalPath = '';
      let petalGradDefs = '';
      for (let i = 0; i < petals; i++) {
        const angle = (360 / petals) * i + rotation;
        const rad = angle * Math.PI / 180;
        // Petal coordinates
        // Move to center
        let d = `M${cx},${cy}`;
        // First control
        let x1 = cx + Math.cos(rad - 0.15) * (size * 0.3);
        let y1 = cy + Math.sin(rad - 0.15) * (size * 0.3);
        // Second control
        let x2 = cx + Math.cos(rad - 0.3) * (size * 0.7);
        let y2 = cy + Math.sin(rad - 0.3) * (size * 0.7);
        // Tip
        let x3 = cx + Math.cos(rad) * size;
        let y3 = cy + Math.sin(rad) * size;
        // Third control
        let x4 = cx + Math.cos(rad + 0.3) * (size * 0.7);
        let y4 = cy + Math.sin(rad + 0.3) * (size * 0.7);
        // Fourth control
        let x5 = cx + Math.cos(rad + 0.15) * (size * 0.3);
        let y5 = cy + Math.sin(rad + 0.15) * (size * 0.3);

        // Petal gradient id
        const gradId = `petal-grad-${i}`;
        petalGradDefs += `
        <linearGradient id="${gradId}" x1="${cx}" y1="${cy}" x2="${x3}" y2="${y3}">
          <stop offset="0%" stop-color="${innerColor}"/>
          <stop offset="100%" stop-color="${outerColor}"/>
        </linearGradient>
        `;
        d += ` C${x1},${y1} ${x2},${y2} ${x3},${y3}`;
        d += ` C${x4},${y4} ${x5},${y5} ${cx},${cy}`;
        petalPath += `<path d="${d}" fill="url(#${gradId})" fill-opacity="1"/>`;
      }
      // Center circle gradient
      const r = size * 0.23;
      const coreGradId = 'core-grad';
      const coreGradDef = `
        <radialGradient id="${coreGradId}" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="${innerColor}" />
          <stop offset="100%" stop-color="${outerColor}" />
        </radialGradient>
      `;
      // SVG code
      return `<svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${petalGradDefs}
    ${coreGradDef}
  </defs>
  ${petalPath}
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${coreGradId})"/>
</svg>`;
    }

    // Modal logic
    const modalBg = document.getElementById('modal-bg');
    const showCodeBtn = document.getElementById('show-code');
    const closeModalBtn = document.getElementById('close-modal');
    const svgCodeTextarea = document.getElementById('svg-code');
    const copyBtn = document.getElementById('copy-code');
    const copyFeedback = document.getElementById('copy-feedback');

    function updateSVGCode() {
      const petals = parseInt(controls.petals.value),
            size = parseInt(controls.size.value),
            innerColor = controls.innerColor.value,
            outerColor = controls.outerColor.value,
            rotation = parseInt(controls.rotation.value);
      const svg = generateSVG(petals, size, innerColor, outerColor, rotation);
      svgCodeTextarea.value = svg.trim();
    }

    showCodeBtn.addEventListener('click', () => {
      updateSVGCode();
      modalBg.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });

    closeModalBtn.addEventListener('click', () => {
      modalBg.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      copyFeedback.classList.add('hidden');
    });

    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) {
        modalBg.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        copyFeedback.classList.add('hidden');
      }
    });

    copyBtn.addEventListener('click', () => {
      svgCodeTextarea.select();
      document.execCommand('copy');
      copyFeedback.classList.remove('hidden');
      setTimeout(() => copyFeedback.classList.add('hidden'), 1500);
    });

    // Keep SVG up to date when controls change and modal is open
    Object.values(controls).forEach(input => {
      input.addEventListener('input', () => {
        if (!modalBg.classList.contains('hidden')) updateSVGCode();
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
      
<div className="relative z-10 max-w-md w-full mx-auto p-8 rounded-2xl shadow-xl bg-gradient-to-br from-[#191922] to-[#24243e] border border-white/10">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold text-white tracking-tight">Gradient Flower Builder</h2>
</div>
<div className="flex flex-col items-center">
<canvas className="flower-canvas rounded-xl shadow-lg mb-6" height="320" id="flower" width="320"></canvas>
<form className="w-full space-y-10 text-white/90" id="controls">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold mb-1" htmlFor="petals">Petals</label>
<input className="custom-slider" id="petals" max="24" min="4" type="range" value="10"/>
<div className="text-xs text-slate-300 mt-1 flex justify-between">
<span>4</span><span>24</span>
</div>
</div>
<div>
<label className="block text-xs font-semibold mb-1" htmlFor="size">Petal Size</label>
<input className="custom-slider" id="size" max="140" min="70" type="range" value="100"/>
<div className="text-xs text-slate-300 mt-1 flex justify-between">
<span>70</span><span>140</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold mb-1" htmlFor="innerColor">Inner Color</label>
<input className="w-full h-9 rounded-xl border-2 border-slate-600 bg-transparent cursor-pointer transition-all hover:border-indigo-400 p-0" id="innerColor" type="color" value="#6366f1"/>
</div>
<div>
<label className="block text-xs font-semibold mb-1" htmlFor="outerColor">Outer Color</label>
<input className="w-full h-9 rounded-xl border-2 border-slate-600 bg-transparent cursor-pointer transition-all hover:border-pink-400 p-0" id="outerColor" type="color" value="#ec4899"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold mb-1" htmlFor="rotation">Rotation</label>
<input className="custom-slider" id="rotation" max="360" min="0" type="range" value="0"/>
<div className="text-xs text-slate-300 mt-1 flex justify-between">
<span>0°</span><span>360°</span>
</div>
</div>
</form>
</div>
<div className="mt-8 text-xs text-center text-slate-500 flex items-center flex-col gap-2">
<span>
        Made with <span className="text-pink-400">♥</span> by AI · 
        <a className="underline hover:text-indigo-400" href="#" id="download-png">Download PNG</a>
</span>
<button className="mt-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium text-xs shadow transition" id="show-code">
        Show Code
      </button>
</div>

<div className="fixed inset-0 z-50 bg-black/60 hidden items-center justify-center" id="modal-bg">
<div className="bg-[#23233a] rounded-xl shadow-2xl p-6 max-w-lg w-full mx-2 relative">
<button className="absolute top-2 right-3 text-white/60 hover:text-pink-400 text-2xl leading-none" id="close-modal">×</button>
<h3 className="text-lg font-semibold mb-4 text-indigo-200">Export SVG Code</h3>
<textarea className="w-full h-52 rounded-lg bg-[#1b1b2b] text-pink-200 p-3 font-mono text-xs resize-none border border-indigo-700 focus:outline-none" id="svg-code" readonly=""></textarea>
<button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-white font-semibold text-sm transition flex items-center gap-2" id="copy-code">
<svg className="h-4 w-4 inline-block" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 16h8M8 12h8m-7 8h6a2 2 0 002-2V8a2 2 0 00-2-2h-6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          Copy to Clipboard
        </button>
<p className="mt-2 text-xs text-green-400 hidden" id="copy-feedback">Copied!</p>
</div>
</div>
</div>


    </>
  );
}
