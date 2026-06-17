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



        // Simplified shader animation
        window.onload = function() {
            const canvas = document.getElementById('shader-canvas');
            const ctx = canvas.getContext('2d');
            
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);
            
            let time = 0;
            function animate() {
                time += 0.01;
                
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, `hsl(${220 + Math.sin(time) * 10}, 70%, ${10 + Math.sin(time * 0.5) * 3}%)`);
                gradient.addColorStop(0.5, `hsl(${210 + Math.cos(time * 0.7) * 15}, 60%, ${15 + Math.cos(time * 0.3) * 5}%)`);
                gradient.addColorStop(1, `hsl(${200 + Math.sin(time * 1.2) * 20}, 80%, ${20 + Math.sin(time * 0.8) * 5}%)`);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                requestAnimationFrame(animate);
            }
            animate();
        };

        // Add interaction animations
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.slide-up');
            elements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
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
      
<canvas id="shader-canvas"></canvas>
<div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4">

<div className="phone-shadow rounded-[3rem] bg-gradient-to-b from-gray-800 via-gray-900 to-black p-2 w-[375px] h-[812px] relative border border-gray-700">

<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[126px] h-[30px] bg-black rounded-full z-50"></div>

<div className="bg-black rounded-[2.5rem] w-full h-full overflow-hidden relative">

<div className="min-h-full flex flex-col relative">

<div className="absolute inset-0 opacity-20">
<div className="absolute top-20 left-10 w-20 h-20 border border-orange-500/30 rounded-full"></div>
<div className="absolute top-40 right-8 w-12 h-12 border border-blue-500/30 rounded-full"></div>
<div className="absolute bottom-40 left-6 w-16 h-16 border border-purple-500/30 rounded-full"></div>
</div>

<div className="flex justify-between items-center p-6 pt-16 relative z-10">
<div className="w-8"></div>
<div className="flex gap-2">
<div className="w-8 h-1 bg-orange-500 rounded-full"></div>
<div className="w-8 h-1 bg-white/30 rounded-full"></div>
<div className="w-8 h-1 bg-white/30 rounded-full"></div>
</div>
<button className="text-white/70 text-sm font-medium">Skip</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-6 pb-8 relative z-10">

<div className="camera-preview w-64 h-64 rounded-3xl mb-8 relative slide-up">
<div className="absolute inset-0 demo-grid rounded-3xl"></div>

<div className="absolute top-3 left-3 right-3 flex justify-between items-center">
<div className="flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-2 py-1">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
<span className="text-white text-xs">AUTO</span>
</div>
<div className="w-6 h-6 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
<i className="fas fa-bolt text-yellow-400 text-xs"></i>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full focus-demo"></div>
</div>

<div className="absolute bottom-3 left-3 right-3 flex justify-center">
<div className="w-12 h-12 rounded-full bg-white border-3 border-orange-500 shadow-xl"></div>
</div>
</div>

<div className="text-center slide-up max-w-xs">
<h1 className="text-white text-2xl font-bold mb-3">Welcome to<br/>FocusLens</h1>
<p className="text-white/70 text-base leading-relaxed mb-6">
                                Professional camera controls with intelligent auto-focus and stunning image quality.
                            </p>

<div className="flex justify-center gap-4 mb-6">
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
<i className="fas fa-crosshairs text-orange-400 text-sm"></i>
</div>
<span className="text-white/60 text-xs">Smart Focus</span>
</div>
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
<i className="fas fa-palette text-orange-400 text-sm"></i>
</div>
<span className="text-white/60 text-xs">Pro Modes</span>
</div>
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
<i className="fas fa-magic text-orange-400 text-sm"></i>
</div>
<span className="text-white/60 text-xs">AI Enhanced</span>
</div>
</div>
</div>
</div>

<div className="p-6 space-y-3 relative z-10">
<button className="hero-gradient w-full py-4 rounded-2xl text-white font-semibold text-base pulse-button">
                            Get Started
                        </button>
<button className="w-full py-3 rounded-2xl text-white/70 font-medium border border-white/20 text-base">
                            Learn More
                        </button>
</div>

<div className="flex justify-center pb-2">
<div className="w-32 h-1 bg-white/30 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -top-1 left-8 w-12 h-1 bg-gray-600 rounded-full"></div>
<div className="absolute -top-1 right-8 w-12 h-1 bg-gray-600 rounded-full"></div>
<div className="absolute top-20 -left-1 w-1 h-12 bg-gray-600 rounded-full"></div>
<div className="absolute top-36 -left-1 w-1 h-16 bg-gray-600 rounded-full"></div>
<div className="absolute top-36 -right-1 w-1 h-20 bg-gray-600 rounded-full"></div>
</div>
</div>


    </>
  );
}
