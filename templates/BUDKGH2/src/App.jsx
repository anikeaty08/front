import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    // Initialize particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#06b6d4", "#0284c7", "#0369a1", "#ffffff"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#06b6d4",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.5
            }
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
  }, []);

  return (
    <>
      

<div id="particles-js"></div>
<main className="relative z-10 max-w-md w-full bg-slate-800/80 backdrop-blur-xl border-white/20 border rounded-3xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 drop-shadow-2xl">

<div className="text-center mb-16">
<h1 className="bg-clip-text text-4xl font-medium text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
        Aura
      </h1>
<p className="text-lg font-light text-gray-300">Premium Cloud Experience</p>
</div>

<div className="flex items-center justify-center gap-3 bg-gray-900/40 border-gray-700/50 border rounded-2xl mb-12 pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="p-2 rounded-full bg-cyan-500/20">
<svg className="lucide lucide-cloud-check w-6 h-6 text-cyan-400" data-lucide="cloud-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 15-5.5 5.5L9 18"></path><path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742"></path></svg>
</div>
<div className="">
<span className="text-xl font-normal">Unlimited Storage</span>
<p className="text-sm font-thin text-gray-300">Never run out of space again</p>
</div>
</div>

<div className="flex items-center w-full mb-12">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
<span className="text-sm font-light text-gray-200 bg-gray-950/0 pr-6 pl-6">30 DAYS FREE</span>
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
</div>

<div className="text-center mb-8">
<button className="btn-gradient w-full transition-all duration-300 ease-out text-xl font-medium text-white rounded-2xl pt-5 pr-8 pb-5 pl-8">
        Subscribe Now
      </button>
</div>

<div className="space-y-3 mb-12">
<div className="flex items-center gap-3 text-sm text-gray-200">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-light">Unlimited cloud storage</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-200">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-light">Advanced security &amp; encryption</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-200">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-light">24/7 priority support</span>
</div>
</div>

<div className="text-center">
<div className="flex items-center justify-center gap-2 text-sm text-gray-300">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-light">Money-back guarantee</span>
</div>
</div>
</main>


    </>
  );
}
