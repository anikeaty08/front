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
                        'space-navy': '#0B1426',
                        'space-gray': '#1E2A3A',
                        'cosmic-blue': '#4A9EFF',
                        'pale-gold': '#FFD700'
                    }
                }
            }
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
      

<div className="fixed inset-0 z-0">
<div className="star-particle" style={{top: `10%`, left: `15%`, animationDelay: `0s`}}></div>
<div className="star-particle" style={{top: `20%`, left: `80%`, animationDelay: `1s`}}></div>
<div className="star-particle" style={{top: `35%`, left: `25%`, animationDelay: `2s`}}></div>
<div className="star-particle" style={{top: `60%`, left: `90%`, animationDelay: `1.5s`}}></div>
<div className="star-particle" style={{top: `75%`, left: `10%`, animationDelay: `0.5s`}}></div>
<div className="star-particle" style={{top: `85%`, left: `70%`, animationDelay: `2.5s`}}></div>
</div>

<svg className="fixed inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
<line className="constellation-line" style={{animationDelay: `1s`}} x1="15%" x2="25%" y1="10%" y2="35%"></line>
<line className="constellation-line" style={{animationDelay: `1.5s`}} x1="25%" x2="80%" y1="35%" y2="20%"></line>
<line className="constellation-line" style={{animationDelay: `2s`}} x1="80%" x2="90%" y1="20%" y2="60%"></line>
<line className="constellation-line" style={{animationDelay: `2.5s`}} x1="10%" x2="70%" y1="75%" y2="85%"></line>
</svg>

<div className="fixed top-20 right-20 w-32 h-32 orbital-ring z-0"></div>
<div className="fixed bottom-20 left-20 w-24 h-24 orbital-ring z-0" style={{animationDuration: `15s`, animationDirection: `reverse`}}></div>

<header className="relative z-20 container mx-auto px-6 py-8">
<nav className="flex justify-between items-center">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-cosmic-blue rounded-full flex items-center justify-center">
<div className="w-4 h-4 bg-pale-gold rounded-full"></div>
</div>
<span className="text-2xl font-bold">ASTRO</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="hover:text-cosmic-blue transition-colors" href="#">MISSION</a>
<a className="hover:text-cosmic-blue transition-colors" href="#">TECHNOLOGY</a>
<a className="hover:text-cosmic-blue transition-colors" href="#">EXPLORATION</a>
<a className="hover:text-cosmic-blue transition-colors" href="#">CONTACT</a>
</div>
</nav>
</header>

<section className="relative z-10 container mx-auto px-6 py-16 text-center">
<div className="opacity-0" style={{animation: `feature-reveal 1s ease-out forwards`, animationDelay: `0.5s`}}>
<p className="text-cosmic-blue uppercase tracking-wider text-sm mb-4">NEXT-GENERATION SPACE TECHNOLOGY</p>
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                EXPLORE THE
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue to-pale-gold">INFINITE</span>
</h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Advanced propulsion systems, AI-driven navigation, and cutting-edge space exploration technologies for the next era of interstellar discovery.
            </p>
</div>
</section>

<section className="relative z-10 container mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `1s`}}>
<div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 border-2 border-cosmic-blue rounded-full"></div>
</div>
<h3 className="text-xl font-bold mb-4">QUANTUM PROPULSION</h3>
<p className="text-gray-300 mb-6">Revolutionary quantum drive technology enabling faster-than-light travel with zero-point energy extraction.</p>
<div className="text-pale-gold text-sm font-mono">STATUS: OPERATIONAL</div>
</div>

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `1.2s`}}>
<div className="w-12 h-12 bg-pale-gold/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 bg-pale-gold rounded-sm"></div>
</div>
<h3 className="text-xl font-bold mb-4">AI NAVIGATION</h3>
<p className="text-gray-300 mb-6">Neural network-based autonomous navigation systems for precise interplanetary trajectory calculations.</p>
<div className="text-cosmic-blue text-sm font-mono">STATUS: ACTIVE</div>
</div>

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `1.4s`}}>
<div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 border border-cosmic-blue"></div>
</div>
<h3 className="text-xl font-bold mb-4">HABITAT MODULES</h3>
<p className="text-gray-300 mb-6">Self-sustaining life support systems with advanced atmospheric processing and resource recycling.</p>
<div className="text-pale-gold text-sm font-mono">STATUS: DEPLOYED</div>
</div>

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `1.6s`}}>
<div className="w-12 h-12 bg-pale-gold/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 border-2 border-pale-gold rounded-full relative">
<div className="w-2 h-2 bg-pale-gold rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
<h3 className="text-xl font-bold mb-4">STELLAR MAPPING</h3>
<p className="text-gray-300 mb-6">Real-time galactic cartography with deep space scanning and exoplanet discovery capabilities.</p>
<div className="text-cosmic-blue text-sm font-mono">STATUS: SCANNING</div>
</div>

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `1.8s`}}>
<div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 border border-cosmic-blue transform rotate-45"></div>
</div>
<h3 className="text-xl font-bold mb-4">ENERGY SHIELDS</h3>
<p className="text-gray-300 mb-6">Electromagnetic field generators providing protection against cosmic radiation and debris impacts.</p>
<div className="text-pale-gold text-sm font-mono">STATUS: PROTECTED</div>
</div>

<div className="feature-card bg-space-gray/40 p-8 rounded-lg hover:bg-space-gray/60 transition-all duration-300" style={{animationDelay: `2s`}}>
<div className="w-12 h-12 bg-pale-gold/20 rounded-lg flex items-center justify-center mb-6">
<div className="w-6 h-6 bg-gradient-to-br from-cosmic-blue to-pale-gold rounded"></div>
</div>
<h3 className="text-xl font-bold mb-4">COMMUNICATION</h3>
<p className="text-gray-300 mb-6">Instantaneous quantum entanglement communication networks spanning across star systems.</p>
<div className="text-cosmic-blue text-sm font-mono">STATUS: CONNECTED</div>
</div>
</div>
</section>

<section className="relative z-10 container mx-auto px-6 py-20">
<div className="grid md:grid-cols-4 gap-8 text-center">
<div className="feature-card bg-space-gray/30 p-6 rounded-lg" style={{animationDelay: `2.2s`}}>
<div className="text-3xl font-bold text-cosmic-blue mb-2">47</div>
<div className="text-sm text-gray-300">MISSIONS COMPLETED</div>
</div>
<div className="feature-card bg-space-gray/30 p-6 rounded-lg" style={{animationDelay: `2.4s`}}>
<div className="text-3xl font-bold text-pale-gold mb-2">12</div>
<div className="text-sm text-gray-300">STAR SYSTEMS</div>
</div>
<div className="feature-card bg-space-gray/30 p-6 rounded-lg" style={{animationDelay: `2.6s`}}>
<div className="text-3xl font-bold text-cosmic-blue mb-2">156</div>
<div className="text-sm text-gray-300">EXOPLANETS MAPPED</div>
</div>
<div className="feature-card bg-space-gray/30 p-6 rounded-lg" style={{animationDelay: `2.8s`}}>
<div className="text-3xl font-bold text-pale-gold mb-2">∞</div>
<div className="text-sm text-gray-300">POSSIBILITIES</div>
</div>
</div>
</section>

<section className="relative z-10 container mx-auto px-6 py-20 text-center">
<div className="feature-card bg-gradient-to-r from-cosmic-blue/20 to-pale-gold/20 p-12 rounded-2xl max-w-4xl mx-auto" style={{animationDelay: `3s`}}>
<h2 className="text-4xl font-bold mb-6">JOIN THE MISSION</h2>
<p className="text-xl text-gray-300 mb-8">Be part of humanity's greatest adventure into the cosmos.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-cosmic-blue text-white font-bold rounded-lg hover:bg-cosmic-blue/80 transition-all duration-300">
                    START EXPLORATION
                </button>
<button className="px-8 py-4 border border-pale-gold text-pale-gold font-bold rounded-lg hover:bg-pale-gold hover:text-space-navy transition-all duration-300">
                    VIEW MISSIONS
                </button>
</div>
</div>
</section>

    </>
  );
}
