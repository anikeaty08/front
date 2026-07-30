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



    tailwind.config = {
      theme: {
        extend: {
          boxShadow: {
            'elegant': '0px 0px 0px 1px rgba(0,0,0,0.06),0px 1px 1px -0.5px rgba(0,0,0,0.06),0px 3px 3px -1.5px rgba(0,0,0,0.06),0px 6px 6px -3px rgba(0,0,0,0.06),0px 12px 12px -6px rgba(0,0,0,0.06),0px 24px 24px -12px rgba(0,0,0,0.06)'
          }
        }
      }
    }
  


    document.addEventListener("DOMContentLoaded", () => {
      const c = [0,1,2,3].map(i => document.getElementById(`c${i}`));
      const colorBoxes = [0,1,2,3].map(i => document.getElementById(`colorBox${i}`));
      const x = [0,1,2,3].map(i => document.getElementById(`x${i}`));
      const y = [0,1,2,3].map(i => document.getElementById(`y${i}`));
      const s = [0,1,2,3].map(i => document.getElementById(`s${i}`));
      const xValues = [0,1,2,3].map(i => document.getElementById(`x${i}Value`));
      const yValues = [0,1,2,3].map(i => document.getElementById(`y${i}Value`));
      const sValues = [0,1,2,3].map(i => document.getElementById(`s${i}Value`));
      
      const bg = document.getElementById("bg");
      const bgColor = document.getElementById("bgColor");
      const bgColorBox = document.getElementById("bgColorBox");
      const bgColorValue = document.getElementById("bgColorValue");
      const globalCircleSize = document.getElementById("globalCircleSize");
      const globalCircleSizeValue = document.getElementById("globalCircleSizeValue");
      const globalBlur = document.getElementById("globalBlur");
      const globalBlurValue = document.getElementById("globalBlurValue");
      
      function updateBgColorDisplay() {
        bgColorValue.textContent = bgColor.value;
        bgColorBox.style.backgroundColor = bgColor.value;
      }
      
      function updateColorBoxes() {
        c.forEach((input, i) => {
          colorBoxes[i].style.backgroundColor = input.value;
        });
      }
      
      function update() {
        const circleSize = globalCircleSize.value;
        globalCircleSizeValue.value = circleSize;
        
        const blurValue = globalBlur.value;
        globalBlurValue.value = blurValue;
        
        // Set the background color first
        bg.style.backgroundColor = bgColor.value;
        
        // Apply blur filter if needed
        if (blurValue > 0) {
          bg.style.filter = `blur(${blurValue}px)`;
        } else {
          bg.style.filter = 'none';
        }
        
        // Then add the gradients on top
        bg.style.background = [0,1,2,3].map(i => 
          `radial-gradient(circle at ${x[i].value}% ${y[i].value}%, ${c[i].value} ${s[i].value}%, transparent ${circleSize}%)`
        ).join(",") + `, ${bgColor.value}`;
      }
      
      function randomizeColors() {
        c.forEach(input => {
          input.value = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        });
        bgColor.value = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        updateBgColorDisplay();
        updateColorBoxes();
        update();
      }
      
      function randomizeSizes() {
        s.forEach((input, i) => {
          const value = Math.floor(Math.random() * 61) + 10;
          input.value = value;
          sValues[i].value = value;
        });
        const globalSize = Math.floor(Math.random() * 41) + 60; // 60-100
        globalCircleSize.value = globalSize;
        globalCircleSizeValue.value = globalSize;
        update();
      }
      
      function randomizePositions() {
        x.forEach((input, i) => {
          const value = Math.floor(Math.random() * 101);
          input.value = value;
          xValues[i].value = value;
        });
        y.forEach((input, i) => {
          const value = Math.floor(Math.random() * 101);
          input.value = value;
          yValues[i].value = value;
        });
        update();
      }
      
      function randomizeAll() {
        randomizeColors();
        randomizeSizes();
        randomizePositions();
        
        // Also randomize blur
        const blurValue = Math.floor(Math.random() * 21); // 0-20
        globalBlur.value = blurValue;
        globalBlurValue.value = blurValue;
        
        update();
      }
      
      // Color picker click handlers
      bgColorBox.addEventListener("click", () => {
        bgColor.click();
      });
      
      colorBoxes.forEach((box, i) => {
        box.addEventListener("click", () => {
          c[i].click();
        });
      });
      
      // Sync color inputs with color boxes
      c.forEach((input, i) => {
        input.addEventListener("input", () => {
          colorBoxes[i].style.backgroundColor = input.value;
          update();
        });
      });
      
      // Sync range sliders with number inputs
      x.forEach((input, i) => {
        input.addEventListener("input", () => {
          xValues[i].value = input.value;
          update();
        });
        xValues[i].addEventListener("input", () => {
          input.value = xValues[i].value;
          update();
        });
      });
      
      y.forEach((input, i) => {
        input.addEventListener("input", () => {
          yValues[i].value = input.value;
          update();
        });
        yValues[i].addEventListener("input", () => {
          input.value = yValues[i].value;
          update();
        });
      });
      
      s.forEach((input, i) => {
        input.addEventListener("input", () => {
          sValues[i].value = input.value;
          update();
        });
        sValues[i].addEventListener("input", () => {
          input.value = sValues[i].value;
          update();
        });
      });
      
      // Global circle size sync
      globalCircleSize.addEventListener("input", () => {
        globalCircleSizeValue.value = globalCircleSize.value;
        update();
      });
      
      globalCircleSizeValue.addEventListener("input", () => {
        globalCircleSize.value = globalCircleSizeValue.value;
        update();
      });
      
      // Global blur sync
      globalBlur.addEventListener("input", () => {
        globalBlurValue.value = globalBlur.value;
        update();
      });
      
      globalBlurValue.addEventListener("input", () => {
        globalBlur.value = globalBlurValue.value;
        update();
      });
      
      // Background color
      bgColor.addEventListener("input", () => {
        updateBgColorDisplay();
        update();
      });
      
      document.getElementById("randomColors").addEventListener("click", randomizeColors);
      document.getElementById("randomSizes").addEventListener("click", randomizeSizes);
      document.getElementById("randomPositions").addEventListener("click", randomizePositions);
      document.getElementById("randomAll").addEventListener("click", randomizeAll);
      
      document.getElementById("downloadBtn").addEventListener("click", () => {
        const card = document.querySelector('.card-9-16');
        
        // Create a temporary canvas to render the gradient
        const canvas = document.createElement('canvas');
        canvas.width = 562.5;
        canvas.height = 1000;
        const ctx = canvas.getContext('2d');
        
        // Create a temporary div with the gradient
        const tempDiv = document.createElement('div');
        tempDiv.style.width = '562.5px';
        tempDiv.style.height = '1000px';
        tempDiv.style.background = bg.style.background;
        tempDiv.style.filter = bg.style.filter;
        document.body.appendChild(tempDiv);
        
        // Use html2canvas to capture the gradient
        const script = document.createElement('script');
        script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
        script.onload = function() {
          html2canvas(tempDiv).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            link.download = 'mesh-gradient.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Remove the temporary div
            document.body.removeChild(tempDiv);
          });
        };
        document.head.appendChild(script);
      });
      
      // Initial update
      updateBgColorDisplay();
      updateColorBoxes();
      update();
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
      
<div className="card-9-16 relative rounded-xl shadow-elegant overflow-hidden">
<div className="absolute inset-0" id="bg"></div>
</div>
<div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-elegant max-w-md max-h-[calc(100vh-32px)] overflow-y-auto">
<div className="grid gap-3">

<div className="flex items-center gap-2 mb-2 pb-3 border-b border-gray-100">
<span className="text-xs font-medium text-gray-700">Background:</span>
<div className="swatch" id="bgColorBox" style={{backgroundColor: `#ffffff`}}></div>
<input className="hidden" id="bgColor" type="color" value="#ffffff" />
<span className="text-xs font-medium text-gray-500 ml-1" id="bgColorValue">#ffffff</span>
</div>

<div className="flex items-center gap-2 mb-2 pb-3 border-b border-gray-100">
<span className="text-xs font-medium text-gray-700">Global Circle Size:</span>
<input className="flex-1" id="globalCircleSize" max="100" min="30" type="range" value="70" />
<input className="number-input" id="globalCircleSizeValue" max="100" min="30" type="number" value="70" />
<span className="text-xs font-medium text-gray-500">%</span>
</div>
<div className="flex items-center gap-2 mb-2 pb-3 border-b border-gray-100">
<span className="text-xs font-medium text-gray-700">Global Blur:</span>
<input className="flex-1" id="globalBlur" max="50" min="0" type="range" value="0" />
<input className="number-input" id="globalBlurValue" max="50" min="0" type="number" value="0" />
<span className="text-xs font-medium text-gray-500">px</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">1</span>
<div className="swatch" id="colorBox0" style={{backgroundColor: `#80deea`}}></div>
<input className="hidden" id="c0" type="color" value="#80deea" />
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<div className="flex items-center">
<input className="w-14" id="x0" max="100" min="0" type="range" value="20" />
<input className="number-input ml-1" id="x0Value" max="100" min="0" type="number" value="20" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<div className="flex items-center">
<input className="w-14" id="y0" max="100" min="0" type="range" value="30" />
<input className="number-input ml-1" id="y0Value" max="100" min="0" type="number" value="30" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<div className="flex items-center">
<input className="w-14" id="s0" max="70" min="10" type="range" value="40" />
<input className="number-input ml-1" id="s0Value" max="70" min="10" type="number" value="40" />
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">2</span>
<div className="swatch" id="colorBox1" style={{backgroundColor: `#ffab91`}}></div>
<input className="hidden" id="c1" type="color" value="#ffab91" />
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<div className="flex items-center">
<input className="w-14" id="x1" max="100" min="0" type="range" value="80" />
<input className="number-input ml-1" id="x1Value" max="100" min="0" type="number" value="80" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<div className="flex items-center">
<input className="w-14" id="y1" max="100" min="0" type="range" value="70" />
<input className="number-input ml-1" id="y1Value" max="100" min="0" type="number" value="70" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<div className="flex items-center">
<input className="w-14" id="s1" max="70" min="10" type="range" value="30" />
<input className="number-input ml-1" id="s1Value" max="70" min="10" type="number" value="30" />
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">3</span>
<div className="swatch" id="colorBox2" style={{backgroundColor: `#8cdbbf`}}></div>
<input className="hidden" id="c2" type="color" value="#8cdbbf" />
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<div className="flex items-center">
<input className="w-14" id="x2" max="100" min="0" type="range" value="10" />
<input className="number-input ml-1" id="x2Value" max="100" min="0" type="number" value="10" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<div className="flex items-center">
<input className="w-14" id="y2" max="100" min="0" type="range" value="90" />
<input className="number-input ml-1" id="y2Value" max="100" min="0" type="number" value="90" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<div className="flex items-center">
<input className="w-14" id="s2" max="70" min="10" type="range" value="25" />
<input className="number-input ml-1" id="s2Value" max="70" min="10" type="number" value="25" />
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">4</span>
<div className="swatch" id="colorBox3" style={{backgroundColor: `#b4d195`}}></div>
<input className="hidden" id="c3" type="color" value="#b4d195" />
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<div className="flex items-center">
<input className="w-14" id="x3" max="100" min="0" type="range" value="90" />
<input className="number-input ml-1" id="x3Value" max="100" min="0" type="number" value="90" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<div className="flex items-center">
<input className="w-14" id="y3" max="100" min="0" type="range" value="10" />
<input className="number-input ml-1" id="y3Value" max="100" min="0" type="number" value="10" />
</div>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<div className="flex items-center">
<input className="w-14" id="s3" max="70" min="10" type="range" value="35" />
<input className="number-input ml-1" id="s3Value" max="70" min="10" type="number" value="35" />
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomColors">
          Random Colors
        </button>
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomSizes">
          Random Sizes
        </button>
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomPositions">
          Random Positions
        </button>
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomAll">
          Random All
        </button>
</div>
<button className="bg-indigo-500 text-white text-xs py-2 px-3 rounded-lg w-full transition-colors hover:bg-indigo-600 font-medium mt-1" id="downloadBtn">
        Download Gradient
      </button>
</div>
</div>


    </>
  );
}
