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
      const meteorCanvas = document.getElementById('meteor-canvas');
      const meteorCount = 25;
      
      for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        
        const delay = Math.random() * 5;
        const duration = Math.random() * 6 + 3;
        const leftPosition = Math.floor(Math.random() * 300) - 300;
        const size = Math.random() * 0.5 + 0.5;
        
        meteor.style.left = `${leftPosition}px`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;
        meteor.style.animation = `meteor ${duration}s linear ${delay}s infinite`;
        meteor.style.width = `${size}px`;
        meteor.style.height = `${size}px`;
        
        if (i % 3 === 0) {
          meteor.style.background = 'rgba(167, 139, 250, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(167, 139, 250, 0.3)';
        } else if (i % 4 === 0) {
          meteor.style.background = 'rgba(96, 165, 250, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(96, 165, 250, 0.3)';
        }
        
        meteorCanvas.appendChild(meteor);
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
      
<div className="max-w-xs w-full bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800">

<div className="relative">

<div className="absolute inset-0 bg-gray-950 overflow-hidden" id="meteor-canvas"></div>

<div className="relative z-10 p-5">
<div className="mb-4">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 inline-block">COSMIC NETWORK</span>
</div>
<h2 className="text-xl font-bold text-white mb-2">Stellar Connection</h2>
<div className="h-1 w-12 bg-gray-400 mb-4 rounded-full"></div>
<p className="text-gray-400 text-sm mb-5 leading-relaxed">Our stellar network connects distant points across the cosmos, ensuring reliable transmission through challenging environments.</p>
<div className="space-y-3 mb-5">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">UPTIME</span>
<span className="text-gray-400 text-xs">99.8%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: '99.8%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">NODES</span>
<span className="text-gray-400 text-xs">12</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-800">
<div className="flex justify-between text-sm">
<button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition flex items-center text-xs">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
<path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill-rule="evenodd"></path>
</svg>
              Details
            </button>
<button className="px-4 py-2 bg-black hover:bg-gray-800 text-gray-300 rounded-lg transition flex items-center text-xs">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" fill-rule="evenodd"></path>
</svg>
              Status
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
