import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    particlesJS('particles-js', {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'bottom',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="particles-js"></div>
<div className="flex items-center justify-center min-h-screen p-4 relative z-10">
<div className="max-w-sm w-full glass rounded-xl overflow-hidden shadow-2xl">

<div className="px-6 pt-6 pb-4 border-b border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-white animate-shimmer"></div>
<h2 className="text-white font-medium text-sm">Aspen</h2>
</div>
<span className="text-xs text-gray-200">Updated just now</span>
</div>
</div>

<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-white">24°</span>
<span className="ml-1 text-gray-200 text-sm">F</span>
</div>
<p className="text-gray-200 text-sm mt-1">Heavy Snow</p>
</div>

<div className="text-white animate-float">
<svg className="w-14 h-14 animate-rotate-slow" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20M4.22 4.22l15.56 15.56M19.78 4.22L4.22 19.78" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="6" fill="currentColor" r="1"></circle>
<circle cx="12" cy="18" fill="currentColor" r="1"></circle>
<circle cx="6" cy="12" fill="currentColor" r="1"></circle>
<circle cx="18" cy="12" fill="currentColor" r="1"></circle>
<circle cx="7.05" cy="7.05" fill="currentColor" r="1"></circle>
<circle cx="16.95" cy="16.95" fill="currentColor" r="1"></circle>
<circle cx="16.95" cy="7.05" fill="currentColor" r="1"></circle>
<circle cx="7.05" cy="16.95" fill="currentColor" r="1"></circle>
</svg>
</div>
</div>
</div>

<div className="px-6 py-4 bg-white/10 grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-gray-200 uppercase tracking-wide">Humidity</p>
<p className="text-white font-medium mt-1">94%</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-200 uppercase tracking-wide">Wind</p>
<p className="text-white font-medium mt-1">8 mph</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-200 uppercase tracking-wide">Feels like</p>
<p className="text-white font-medium mt-1">18°</p>
</div>
</div>

<div className="px-6 py-4 border-t border-white/20">
<div className="grid grid-cols-5 gap-2">
<div className="text-center">
<p className="text-xs text-gray-200">Mon</p>
<svg className="w-6 h-6 mx-auto my-1 text-white animate-shimmer" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v8M8 8l8-8M16 8L8 16M12 14v8M4 12h8M20 12h-8" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="4" fill="currentColor" r="0.5"></circle>
<circle cx="12" cy="20" fill="currentColor" r="0.5"></circle>
<circle cx="4" cy="12" fill="currentColor" r="0.5"></circle>
<circle cx="20" cy="12" fill="currentColor" r="0.5"></circle>
</svg>
<p className="text-xs font-medium text-white">22°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-200">Tue</p>
<svg className="w-6 h-6 mx-auto my-1 text-white animate-shimmer" fill="none" stroke="currentColor" strokeWidth="1.5" style={{animationDelay: '0.3s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v8M8 8l8-8M16 8L8 16M12 14v8M4 12h8M20 12h-8" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="4" fill="currentColor" r="0.5"></circle>
<circle cx="12" cy="20" fill="currentColor" r="0.5"></circle>
<circle cx="4" cy="12" fill="currentColor" r="0.5"></circle>
<circle cx="20" cy="12" fill="currentColor" r="0.5"></circle>
</svg>
<p className="text-xs font-medium text-white">19°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-200">Wed</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-200 animate-float" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-white">28°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-200">Thu</p>
<svg className="w-6 h-6 mx-auto my-1 text-yellow-300 animate-float" fill="none" stroke="currentColor" strokeWidth="1" style={{animationDelay: '0.2s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-white">35°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-200">Fri</p>
<svg className="w-6 h-6 mx-auto my-1 text-white animate-shimmer" fill="none" stroke="currentColor" strokeWidth="1.5" style={{animationDelay: '0.5s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v8M8 8l8-8M16 8L8 16M12 14v8M4 12h8M20 12h-8" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="4" fill="currentColor" r="0.5"></circle>
<circle cx="12" cy="20" fill="currentColor" r="0.5"></circle>
<circle cx="4" cy="12" fill="currentColor" r="0.5"></circle>
<circle cx="20" cy="12" fill="currentColor" r="0.5"></circle>
</svg>
<p className="text-xs font-medium text-white">26°</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
