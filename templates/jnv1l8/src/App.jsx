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
      const x = [0,1,2,3].map(i => document.getElementById(`x${i}`));
      const y = [0,1,2,3].map(i => document.getElementById(`y${i}`));
      const s = [0,1,2,3].map(i => document.getElementById(`s${i}`));
      const bg = document.getElementById("bg");
      
      function update() {
        bg.style.background = [0,1,2,3].map(i => 
          `radial-gradient(circle at ${x[i].value}% ${y[i].value}%, ${c[i].value} ${s[i].value}%, transparent 70%)`
        ).join(",");
      }
      
      function randomizeColors() {
        c.forEach(input => {
          input.value = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        });
        update();
      }
      
      function randomizeAll() {
        randomizeColors();
        x.forEach(input => {
          input.value = Math.floor(Math.random() * 101);
        });
        y.forEach(input => {
          input.value = Math.floor(Math.random() * 101);
        });
        s.forEach(input => {
          input.value = Math.floor(Math.random() * 61) + 10;
        });
        update();
      }
      
      document.getElementById("randomColors").addEventListener("click", randomizeColors);
      document.getElementById("randomAll").addEventListener("click", randomizeAll);
      
      [...c, ...x, ...y, ...s].forEach(el => el.addEventListener("input", update));
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
      
<div className="fixed inset-0 -z-10" id="bg"></div>
<div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-elegant max-w-xs">
<div className="grid gap-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">1</span>
<input className="w-7 h-7 p-0 border-0 rounded-full overflow-hidden" id="c0" type="color" value="#80deea"/>
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<input className="w-14" id="x0" max="100" min="0" type="range" value="0"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<input className="w-14" id="y0" max="100" min="0" type="range" value="0"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<input className="w-14" id="s0" max="70" min="10" type="range" value="25"/>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">2</span>
<input className="w-7 h-7 p-0 border-0 rounded-full overflow-hidden" id="c1" type="color" value="#ffab91"/>
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<input className="w-14" id="x1" max="100" min="0" type="range" value="0"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<input className="w-14" id="y1" max="100" min="0" type="range" value="100"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<input className="w-14" id="s1" max="70" min="10" type="range" value="25"/>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">3</span>
<input className="w-7 h-7 p-0 border-0 rounded-full overflow-hidden" id="c2" type="color" value="#8cdbbf"/>
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<input className="w-14" id="x2" max="100" min="0" type="range" value="50"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<input className="w-14" id="y2" max="100" min="0" type="range" value="0"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<input className="w-14" id="s2" max="70" min="10" type="range" value="25"/>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium w-4 text-center text-gray-500">4</span>
<input className="w-7 h-7 p-0 border-0 rounded-full overflow-hidden" id="c3" type="color" value="#b4d195"/>
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">X</span>
<input className="w-14" id="x3" max="100" min="0" type="range" value="50"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Y</span>
<input className="w-14" id="y3" max="100" min="0" type="range" value="100"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-gray-400 mb-1 font-medium">Size</span>
<input className="w-14" id="s3" max="70" min="10" type="range" value="25"/>
</div>
</div>
</div>
<div className="flex gap-2 mt-1">
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg flex-1 transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomColors">
          Random Colors
        </button>
<button className="bg-white text-gray-700 text-xs py-2 px-3 rounded-lg flex-1 transition-colors shadow-elegant hover:bg-gray-50 font-medium" id="randomAll">
          Random All
        </button>
</div>
</div>
</div>

    </>
  );
}
