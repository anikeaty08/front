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



  // State
  let settings = {
    numShapes: 1,
    size: 200,
    blur: 24,
    radius: 50,
    direction: "120deg",
    gradientType: "linear",
    speed: 6,
    color1: "#2aa6ff",
    color2: "#e240f8",
    color3: "#f7b731",
    color4: "#33ffb8",
    alpha1: 1,
    alpha2: 1,
    alpha3: 1,
    alpha4: 1
  };

  // DOM
  const orbContainer = document.getElementById('orbContainer');
  const sizeInput = document.getElementById('size');
  const blurInput = document.getElementById('blur');
  const radiusInput = document.getElementById('radius');
  const directionInput = document.getElementById('direction');
  const gradientTypeInput = document.getElementById('gradientType');
  const speedInput = document.getElementById('speed');
  const color1Input = document.getElementById('color1');
  const color2Input = document.getElementById('color2');
  const color3Input = document.getElementById('color3');
  const color4Input = document.getElementById('color4');
  const alpha1Input = document.getElementById('alpha1');
  const alpha2Input = document.getElementById('alpha2');
  const alpha3Input = document.getElementById('alpha3');
  const alpha4Input = document.getElementById('alpha4');
  const resetBtn = document.getElementById('resetBtn');
  const sizeVal = document.getElementById('sizeVal');
  const blurVal = document.getElementById('blurVal');
  const radiusVal = document.getElementById('radiusVal');
  const speedVal = document.getElementById('speedVal');
  const numShapesInput = document.getElementById('numShapes');
  const numShapesVal = document.getElementById('numShapesVal');
  const codeBlock = document.getElementById('codeBlock');
  const copyMsg = document.getElementById('copyMsg');
  const directionRow = document.getElementById('directionRow');

  // Helpers
  function hexToRgba(hex, alpha) {
    if (alpha == 0) return 'transparent';
    let c = hex.replace('#','');
    if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
    return `rgba(${parseInt(c.substr(0,2),16)},${parseInt(c.substr(2,2),16)},${parseInt(c.substr(4,2),16)},${alpha})`;
  }
  function getColorStops() {
    let stops = [];
    [[settings.color1,settings.alpha1],
     [settings.color2,settings.alpha2],
     [settings.color3,settings.alpha3],
     [settings.color4,settings.alpha4]].forEach((pair,i) => {
      if (pair[1]==0) stops.push('transparent');
      else stops.push(hexToRgba(pair[0],pair[1]));
    });
    // Remove trailing transparent stops for cleaner output
    while(stops.length>2 && stops[stops.length-1]=='transparent') stops.pop();
    return stops;
  }
  function getGradientStr() {
    const stops = getColorStops();
    switch (settings.gradientType) {
      case "linear":
        return `linear-gradient(${settings.direction}, ${stops.join(", ")})`;
      case "radial":
        return `radial-gradient(circle at 50% 50%, ${stops.join(", ")})`;
      case "diamond":
        // Diamond gradients are supported in most modern browsers.
        // Syntax: radial-gradient(ellipse farthest-corner at 50% 50%, ...)
        return `conic-gradient(from 45deg at 50% 50%, ${stops.join(", ")})`;
      case "conic":
        return `conic-gradient(at 50% 50%, ${stops.join(", ")})`;
      default:
        return `linear-gradient(${settings.direction}, ${stops.join(", ")})`;
    }
  }
  function orbStyle(i, total) {
    let baseSize = settings.size;
    let baseBlur = settings.blur;
    let nudge = (total>1) ? (i - (total-1)/2) : 0;
    let angle = 2*Math.PI*i/total;
    let dx = Math.round(22 * Math.cos(angle));
    let dy = Math.round(22 * Math.sin(angle));
    let size = baseSize - (total>1 ? Math.abs(nudge)*12 : 0);
    let blur = baseBlur + (total>1 ? Math.abs(nudge)*4 : 0);
    let animDelay = (total>1 ? nudge*0.4 : 0);
    return {
      '--size': size+'px',
      '--blur': blur+'px',
      '--speed': settings.speed+'s',
      '--gradient': getGradientStr(),
      'border-radius': settings.radius+'%',
      'animation-delay': animDelay+'s',
      'top': `calc(50% + ${dy}px)`,
      'left': `calc(50% + ${dx}px)`,
      'z-index': 10-i
    };
  }
  function styleObjToStr(obj) {
    return Object.entries(obj).map(([k,v])=>{
      if(k.startsWith('--')) return `${k}:${v}`;
      return `${k}:${v}`;
    }).join(';');
  }

  // --- Live Preview ---
  function updateOrbs() {
    orbContainer.innerHTML = '';
    let n = settings.numShapes;
    for(let i=0;i<n;i++) {
      let orb = document.createElement('div');
      orb.className = 'orb';
      let style = orbStyle(i,n);
      for (let k in style) orb.style.setProperty(k, style[k]);
      orbContainer.appendChild(orb);
    }
    sizeVal.textContent = settings.size;
    blurVal.textContent = settings.blur;
    radiusVal.textContent = settings.radius + "%";
    speedVal.textContent = settings.speed + "s";
    numShapesVal.textContent = settings.numShapes;
  }

  // --- Controls events ---
  numShapesInput.addEventListener('input', e => {
    settings.numShapes = parseInt(e.target.value);
    updateOrbs(); updateCode();
  });
  sizeInput.addEventListener('input', e => {
    settings.size = parseInt(e.target.value);
    updateOrbs(); updateCode();
  });
  blurInput.addEventListener('input', e => {
    settings.blur = parseInt(e.target.value);
    updateOrbs(); updateCode();
  });
  radiusInput.addEventListener('input', e => {
    settings.radius = parseInt(e.target.value);
    updateOrbs(); updateCode();
  });
  directionInput.addEventListener('change', e => {
    settings.direction = e.target.value;
    updateOrbs(); updateCode();
  });
  gradientTypeInput.addEventListener('change', e => {
    settings.gradientType = e.target.value;
    // Hide direction selector for non-linear gradients
    if (settings.gradientType === "linear") {
      directionRow.style.display = "";
    } else {
      directionRow.style.display = "none";
    }
    updateOrbs(); updateCode();
  });
  speedInput.addEventListener('input', e => {
    settings.speed = parseFloat(e.target.value);
    updateOrbs(); updateCode();
  });
  color1Input.addEventListener('input', e => {
    settings.color1 = e.target.value;
    updateOrbs(); updateCode();
  });
  color2Input.addEventListener('input', e => {
    settings.color2 = e.target.value;
    updateOrbs(); updateCode();
  });
  color3Input.addEventListener('input', e => {
    settings.color3 = e.target.value;
    updateOrbs(); updateCode();
  });
  color4Input.addEventListener('input', e => {
    settings.color4 = e.target.value;
    updateOrbs(); updateCode();
  });
  alpha1Input.addEventListener('change', e => {
    settings.alpha1 = Number(e.target.value);
    updateOrbs(); updateCode();
  });
  alpha2Input.addEventListener('change', e => {
    settings.alpha2 = Number(e.target.value);
    updateOrbs(); updateCode();
  });
  alpha3Input.addEventListener('change', e => {
    settings.alpha3 = Number(e.target.value);
    updateOrbs(); updateCode();
  });
  alpha4Input.addEventListener('change', e => {
    settings.alpha4 = Number(e.target.value);
    updateOrbs(); updateCode();
  });
  resetBtn.addEventListener('click', () => {
    settings = {
      numShapes: 1,
      size: 200,
      blur: 24,
      radius: 50,
      direction: "120deg",
      gradientType: "linear",
      speed: 6,
      color1: "#2aa6ff",
      color2: "#e240f8",
      color3: "#f7b731",
      color4: "#33ffb8",
      alpha1: 1,
      alpha2: 1,
      alpha3: 1,
      alpha4: 1
    };
    numShapesInput.value = settings.numShapes;
    sizeInput.value = settings.size;
    blurInput.value = settings.blur;
    radiusInput.value = settings.radius;
    directionInput.value = settings.direction;
    gradientTypeInput.value = settings.gradientType;
    speedInput.value = settings.speed;
    color1Input.value = settings.color1;
    color2Input.value = settings.color2;
    color3Input.value = settings.color3;
    color4Input.value = settings.color4;
    alpha1Input.value = settings.alpha1;
    alpha2Input.value = settings.alpha2;
    alpha3Input.value = settings.alpha3;
    alpha4Input.value = settings.alpha4;
    directionRow.style.display = "";
    updateOrbs(); updateCode();
  });

  // --- Code Export ---
  const codeTemplates = {
    html: () => {
      let orbs = '';
      for(let i=0;i<settings.numShapes;i++) {
        let style = styleObjToStr(orbStyle(i,settings.numShapes));
        orbs += `<div class="orb" style="${style}"></div>\n`;
      }
      return `<div class="orb-preview" style="position:relative;width:360px;height:360px;background:#18181b;border-radius:1.5rem;overflow:hidden;">
${orbs.trim()}
</div>`;
    },
    css: () => `.orb {
  position: absolute;
  border-radius: ${settings.radius}%;
  box-shadow: 0 0 80px 0 #fff3;
  filter: blur(var(--blur, 24px));
  transition: all .3s, background 0.5s;
  animation: orb-move var(--speed,6s) ease-in-out infinite alternate;
  background: var(--gradient);
  width: var(--size,200px);
  height: var(--size,200px);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.93;
}
@keyframes orb-move {
  0% { transform: translate(-50%,-50%) scale(1);}
  15% { transform: translate(-60%,-42%) scale(1.08);}
  30% { transform: translate(-40%,-58%) scale(1.06);}
  50% { transform: translate(-65%,-45%) scale(1.12);}
  70% { transform: translate(-37%,-62%) scale(1.07);}
  100% { transform: translate(-50%,-50%) scale(1);}
}`,
    js: () => `// No JavaScript needed for animation, only for dynamic builder UI.`
  };

  function updateCode(type = 'html') {
    codeBlock.textContent = codeTemplates[type]();
  }

  let currentCodeType = 'html';
  function copyCode(type) {
    updateCode(type);
    currentCodeType = type;
    navigator.clipboard.writeText(codeBlock.textContent);
    copyMsg.style.opacity = "1";
    setTimeout(() => { copyMsg.style.opacity = "0"; }, 1200);
  }

  // Show initial values and preview
  updateOrbs();
  updateCode();

  // Hide direction for non-linear by default if not linear
  if(settings.gradientType !== "linear") directionRow.style.display = "none";

  // Listen for export button events
  document.querySelectorAll('button[onclick^="copyCode"]').forEach(btn => {
    btn.addEventListener('click', e => {
      const type = btn.textContent.trim().toLowerCase();
      updateCode(type);
      copyCode(type);
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
      
<div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center mt-8">

<div className="flex flex-col items-center">
<div className="text-white text-lg font-semibold mb-3">Live Preview</div>
<div className="orb-preview relative" id="orbContainer"></div>
</div>

<div className="flex flex-col gap-6 w-full max-w-md">
<h2 className="text-xl font-semibold text-white mb-2">Gradient Orbs Controls</h2>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32"># of Shapes</label>
<input className="w-36 accent-blue-400" id="numShapes" max="10" min="1" step="1" type="range" value="1" />
<span className="text-white text-xs w-12 text-center" id="numShapesVal">1</span>
</div>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32">Size (px)</label>
<input className="w-36 accent-blue-400" id="size" max="320" min="60" step="1" type="range" value="200" />
<span className="text-white text-xs w-12 text-center" id="sizeVal">200</span>
</div>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32">Blur (px)</label>
<input className="w-36 accent-blue-400" id="blur" max="80" min="0" step="1" type="range" value="24" />
<span className="text-white text-xs w-12 text-center" id="blurVal">24</span>
</div>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32">Border Radius</label>
<input className="w-36 accent-blue-400" id="radius" max="100" min="0" step="1" type="range" value="50" />
<span className="text-white text-xs w-12 text-center" id="radiusVal">50%</span>
</div>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32">Gradient Type</label>
<select className="w-24 bg-neutral-900 text-white rounded px-2 py-1 border border-neutral-800" id="gradientType">
<option value="linear">Linear</option>
<option value="radial">Radial</option>
<option value="diamond">Diamond</option>
<option value="conic">Angular</option>
</select>
</div>
<div className="flex gap-4 items-center" id="directionRow">
<label className="text-sm text-neutral-400 w-32">Gradient Dir.</label>
<select className="w-24 bg-neutral-900 text-white rounded px-2 py-1 border border-neutral-800" id="direction">
<option value="120deg">120°</option>
<option value="45deg">45°</option>
<option value="90deg">90°</option>
<option value="180deg">180°</option>
<option value="225deg">225°</option>
</select>
</div>
<div className="flex gap-4 items-center">
<label className="text-sm text-neutral-400 w-32">Animation Speed</label>
<input className="w-32 accent-blue-400" id="speed" max="12" min="1" step="0.1" type="range" value="6" />
<span className="text-white text-xs w-12 text-center" id="speedVal">6s</span>
</div>
<div className="flex flex-wrap gap-4 items-center">
<label className="text-sm text-neutral-400">Color 1</label>
<input className="w-8 h-8 rounded-full ring-2 ring-white/30 bg-transparent border-0 cursor-pointer" id="color1" type="color" value="#2aa6ff" />
<select className="bg-neutral-900 text-white rounded px-1 py-0.5 border border-neutral-800 text-xs" id="alpha1">
<option value="1">Opaque</option>
<option value="0">Transparent</option>
</select>
<label className="text-sm text-neutral-400">Color 2</label>
<input className="w-8 h-8 rounded-full ring-2 ring-white/30 bg-transparent border-0 cursor-pointer" id="color2" type="color" value="#e240f8" />
<select className="bg-neutral-900 text-white rounded px-1 py-0.5 border border-neutral-800 text-xs" id="alpha2">
<option value="1">Opaque</option>
<option value="0">Transparent</option>
</select>
</div>
<div className="flex flex-wrap gap-4 items-center">
<label className="text-sm text-neutral-400">Color 3</label>
<input className="w-8 h-8 rounded-full ring-2 ring-white/30 bg-transparent border-0 cursor-pointer" id="color3" type="color" value="#f7b731" />
<select className="bg-neutral-900 text-white rounded px-1 py-0.5 border border-neutral-800 text-xs" id="alpha3">
<option value="1">Opaque</option>
<option value="0">Transparent</option>
</select>
<label className="text-sm text-neutral-400">Color 4</label>
<input className="w-8 h-8 rounded-full ring-2 ring-white/30 bg-transparent border-0 cursor-pointer" id="color4" type="color" value="#33ffb8" />
<select className="bg-neutral-900 text-white rounded px-1 py-0.5 border border-neutral-800 text-xs" id="alpha4">
<option value="1">Opaque</option>
<option value="0">Transparent</option>
</select>
</div>
<div className="flex justify-end">
<button className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg shadow border border-neutral-800 transition" id="resetBtn">Reset</button>
</div>
</div>
</div>

<div className="w-full max-w-5xl mt-12">
<h2 className="text-xl font-semibold text-white mb-2">Copy Code</h2>
<div className="flex gap-2 mb-3">
<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1 rounded text-sm" onClick={(e) => { copyCode('html') }}>HTML</button>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1 rounded text-sm" onClick={(e) => { copyCode('css') }}>CSS</button>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1 rounded text-sm" onClick={(e) => { copyCode('js') }}>JS</button>
<span className="text-green-400 text-xs ml-2 opacity-0 transition-opacity duration-300" id="copyMsg">Copied!</span>
</div>
<div>
<pre className="bg-neutral-900 text-white rounded-lg p-4 overflow-auto text-xs mb-2" id="codeBlock" style={{minHeight: `120px`}}></pre>
</div>
</div>


    </>
  );
}
