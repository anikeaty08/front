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
                    fontFamily: {
                        'mono': ['Space Mono', 'monospace']
                    },
                    colors: {
                        olive: '#4A5D23',
                        'olive-dark': '#2C3516',
                        steel: '#5A6C7D',
                        'steel-light': '#8A9CB0',
                        sand: '#C7B299',
                        'sand-light': '#D4C4A8'
                    }
                }
            }
        }
    


        // Enhanced radar sweep
        function initializeTacticalSystems() {
            const radarSweep = document.querySelector('line[style*="radar-sweep"]');
            if (radarSweep) {
                radarSweep.style.filter = 'drop-shadow(0 0 5px #4A5D23)';
            }
        }

        // Tactical hover effects
        document.querySelectorAll('.tactical-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.boxShadow = '0 0 20px rgba(74, 93, 35, 0.5)';
                icon.style.borderColor = '#C7B299';
            });
            icon.addEventListener('mouseleave', () => {
                icon.style.boxShadow = 'none';
                icon.style.borderColor = '#5A6C7D';
            });
        });

        // Initialize systems
        window.addEventListener('load', () => {
            setTimeout(initializeTacticalSystems, 1000);
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
      

<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="tactical-grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(74, 93, 35, 0.15)" strokeWidth="0.5"></path>
</pattern>
<pattern height="80" id="crosshair" patternunits="userSpaceOnUse" width="80">
<circle cx="40" cy="40" fill="none" r="15" stroke="rgba(199, 178, 153, 0.1)" strokeWidth="1"></circle>
<line stroke="rgba(199, 178, 153, 0.1)" strokeWidth="1" x1="25" x2="55" y1="40" y2="40"></line>
<line stroke="rgba(199, 178, 153, 0.1)" strokeWidth="1" x1="40" x2="40" y1="25" y2="55"></line>
</pattern>
</defs>
<rect fill="url(#tactical-grid)" height="100%" width="100%"></rect>
<rect fill="url(#crosshair)" height="100%" opacity="0.3" width="100%"></rect>

<line className="radar-line" style={{animationDelay: '0.5s'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="radar-line" style={{animationDelay: '1s'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="radar-line" style={{animationDelay: '1.5s'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="radar-line" style={{animationDelay: '2s'}} x1="75%" x2="75%" y1="0" y2="100%"></line>

<circle className="target-dot" cx="25%" cy="25%" r="3" style={{animationDelay: '2.5s'}}></circle>
<circle className="target-dot" cx="75%" cy="25%" r="3" style={{animationDelay: '2.7s'}}></circle>
<circle className="target-dot" cx="25%" cy="75%" r="3" style={{animationDelay: '2.9s'}}></circle>
<circle className="target-dot" cx="75%" cy="75%" r="3" style={{animationDelay: '3.1s'}}></circle>

<g transform="translate(50%, 50%)">
<line opacity="0.4" stroke="#4A5D23" strokeWidth="2" style={{transformOrigin: '0 0', animation: 'radar-sweep 4s linear infinite'}} x1="0" x2="200" y1="0" y2="0"></line>
</g>
</svg>

<nav className="fixed left-0 top-0 h-full w-80 bg-olive-dark/95 backdrop-blur-sm border-r-2 border-steel z-20 p-6">
<div className="military-text mb-8" style={{animationDelay: '0.2s'}}>
<h2 className="text-2xl font-bold text-sand-light">TACTICAL.SYS</h2>
<div className="w-12 h-px bg-steel mt-2"></div>
<p className="text-xs text-steel-light mt-2">CLASSIFIED ACCESS</p>
</div>
<div className="space-y-6">
<div className="military-text" style={{animationDelay: '0.4s'}}>
<div className="tactical-icon w-12 h-12 flex items-center justify-center mb-2">
<div className="w-6 h-6 border-2 border-sand"></div>
</div>
<a className="block text-sm font-bold text-steel-light hover:text-sand transition-colors" href="#">DEFENSE SYSTEMS</a>
</div>
<div className="military-text" style={{animationDelay: '0.6s'}}>
<div className="tactical-icon w-12 h-12 flex items-center justify-center mb-2">
<div className="w-6 h-6 border-2 border-sand rotate-45"></div>
</div>
<a className="block text-sm font-bold text-steel-light hover:text-sand transition-colors" href="#">DRONE OPERATIONS</a>
</div>
<div className="military-text" style={{animationDelay: '0.8s'}}>
<div className="tactical-icon w-12 h-12 flex items-center justify-center mb-2">
<div className="w-6 h-6 border-2 border-sand">
<div className="w-2 h-2 bg-sand mx-auto mt-1"></div>
</div>
</div>
<a className="block text-sm font-bold text-steel-light hover:text-sand transition-colors" href="#">SURVEILLANCE</a>
</div>
<div className="military-text" style={{animationDelay: '1s'}}>
<div className="tactical-icon w-12 h-12 flex items-center justify-center mb-2">
<div className="w-6 h-6 border-2 border-sand flex flex-wrap">
<div className="w-1 h-1 bg-sand m-0.5"></div>
<div className="w-1 h-1 bg-sand m-0.5"></div>
<div className="w-1 h-1 bg-sand m-0.5"></div>
<div className="w-1 h-1 bg-sand m-0.5"></div>
</div>
</div>
<a className="block text-sm font-bold text-steel-light hover:text-sand transition-colors" href="#">INFRASTRUCTURE</a>
</div>
</div>
<div className="absolute bottom-6 left-6 military-text" style={{animationDelay: '1.2s'}}>
<div className="text-xs text-steel">
<p className="font-bold">STATUS: OPERATIONAL</p>
<p>CLEARANCE: LEVEL 7</p>
<p>BUILD: 2024.11.15</p>
</div>
</div>
</nav>

<div className="data-line" style={{top: '20%', animationDelay: '1s'}}></div>
<div className="data-line" style={{top: '40%', animationDelay: '3s'}}></div>
<div className="data-line" style={{top: '60%', animationDelay: '5s'}}></div>
<div className="data-line" style={{top: '80%', animationDelay: '7s'}}></div>

<div className="relative z-10 min-h-screen ml-80 flex flex-col justify-center items-center px-12 py-16">
<div className="text-center max-w-5xl mx-auto">

<div className="mb-12">
<div className="military-text flex items-center justify-center mb-6" style={{animationDelay: '0.5s'}}>
<div className="w-8 h-px bg-olive"></div>
<h2 className="text-xs font-bold text-olive mx-4 tracking-[0.3em]">MISSION CRITICAL</h2>
<div className="w-8 h-px bg-olive"></div>
</div>

<div className="military-text border-2 border-steel bg-olive-dark/20 p-6 mb-8" style={{animationDelay: '1s'}}>
<h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-wider mb-6">
<div className="text-sand-light mb-2">TACTICAL</div>
<div className="text-sand mb-2">ADVANTAGE</div>
<div className="text-2xl lg:text-3xl font-normal text-steel-light">SECURED</div>
</h1>
</div>
</div>

<div className="military-text mb-12" style={{animationDelay: '1.5s'}}>
<p className="text-lg leading-relaxed text-steel-light max-w-3xl mx-auto">
                    Advanced defense technology and secure infrastructure solutions. 
                    Precision-engineered systems for modern tactical operations 
                    and strategic superiority.
                </p>
</div>

<div className="military-text grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" style={{animationDelay: '2s'}}>
<button className="tactical-icon p-6 hover:bg-olive/20 transition-all duration-300 group">
<div className="w-8 h-8 border-2 border-sand mx-auto mb-3 group-hover:scale-110 transition-transform"></div>
<div className="text-sm font-bold text-steel-light">DEPLOY</div>
</button>
<button className="tactical-icon p-6 hover:bg-olive/20 transition-all duration-300 group">
<div className="w-8 h-8 border-2 border-sand mx-auto mb-3 rotate-45 group-hover:scale-110 transition-transform"></div>
<div className="text-sm font-bold text-steel-light">ANALYZE</div>
</button>
<button className="tactical-icon p-6 hover:bg-olive/20 transition-all duration-300 group">
<div className="w-8 h-8 border-2 border-sand mx-auto mb-3 group-hover:scale-110 transition-transform">
<div className="w-4 h-4 bg-sand mx-auto mt-1"></div>
</div>
<div className="text-sm font-bold text-steel-light">EXECUTE</div>
</button>
</div>

<div className="military-text flex flex-col sm:flex-row gap-6 justify-center items-center" style={{animationDelay: '2.5s'}}>
<button className="px-10 py-4 bg-olive text-sand-light font-bold text-lg border-2 border-olive hover:bg-olive-dark transition-all duration-300 transform hover:scale-105">
                    INITIATE PROTOCOL
                </button>
<button className="px-10 py-4 border-2 border-steel text-steel-light font-bold text-lg hover:bg-steel hover:text-black transition-all duration-300 transform hover:scale-105">
                    ACCESS BRIEFING
                </button>
</div>

<div className="military-text mt-12 text-xs text-steel" style={{animationDelay: '3s'}}>
<div className="flex justify-center items-center space-x-6">
<span>● SYSTEMS ONLINE</span>
<span>● SECURITY LEVEL: MAX</span>
<span>● READY FOR DEPLOYMENT</span>
</div>
</div>
</div>
</div>


    </>
  );
}
