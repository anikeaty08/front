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



        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#8b5cf6", "#06b6d4", "#3b82f6"]
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#8b5cf6",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
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
      

<div className="absolute inset-0 z-0" id="particles-js"></div>

<div className="relative z-10 max-w-sm mx-auto bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-600/70 transition-all duration-300 shadow-2xl">

<div className="relative h-32 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

<div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full animate-pulse"></div>
<div className="absolute top-8 right-8 w-8 h-8 border border-white/40 rounded-full animate-ping"></div>

<div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 via-transparent to-blue-400/20"></div>
</div>

<div className="p-6">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-gray-300 uppercase tracking-wide">In Progress</span>
</div>
<span className="text-xs text-gray-500">#LIN-1247</span>
</div>

<h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                Redesign navigation components
            </h3>

<p className="text-sm text-gray-300 leading-relaxed mb-4">
                Update the primary navigation to improve user experience and align with the new design system guidelines.
            </p>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">

<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center ring-2 ring-violet-400/30">
<span className="text-xs font-medium text-white">JD</span>
</div>
<span className="text-xs text-gray-400">John Doe</span>
</div>
</div>

<div className="flex items-center space-x-1">
<div className="w-3 h-3 bg-orange-400 rounded-sm shadow-lg shadow-orange-400/30"></div>
<span className="text-xs text-gray-400">High</span>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30 backdrop-blur-sm">
                    Frontend
                </span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                    Design System
                </span>
</div>

<div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
<div className="flex items-center space-x-1 text-gray-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Due in 3 days</span>
</div>
<button className="flex items-center space-x-1 text-xs text-gray-400 hover:text-gray-200 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>2 comments</span>
</button>
</div>
</div>
</div>


    </>
  );
}
