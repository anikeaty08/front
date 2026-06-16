import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Configure Tailwind to include our custom 3D transform utilities
    tailwind.config = {
      theme: {
        extend: {
          // Add any custom theme extensions here if needed
        }
      },
      plugins: [
        function({ addUtilities }) {
          const rotateXUtilities = {};
          const rotateYUtilities = {};
          const rotateZUtilities = {};

          const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
          
          // Generate rotate-x utilities
          rotateValues.forEach((value) => {
            rotateXUtilities[`.rotate-x-${value}`] = {
              '--tw-rotate-x': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateXUtilities[`.-rotate-x-${value}`] = {
                '--tw-rotate-x': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Generate rotate-y utilities
          rotateValues.forEach((value) => {
            rotateYUtilities[`.rotate-y-${value}`] = {
              '--tw-rotate-y': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateYUtilities[`.-rotate-y-${value}`] = {
                '--tw-rotate-y': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Generate rotate-z utilities
          rotateValues.forEach((value) => {
            rotateZUtilities[`.rotate-z-${value}`] = {
              '--tw-rotate-z': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateZUtilities[`.-rotate-z-${value}`] = {
                '--tw-rotate-z': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Perspective utilities
          const perspectiveUtilities = {
            ".perspective-none": { perspective: "none" },
            ".perspective-dramatic": { perspective: "100px" },
            ".perspective-near": { perspective: "300px" },
            ".perspective-normal": { perspective: "500px" },
            ".perspective-midrange": { perspective: "800px" },
            ".perspective-distant": { perspective: "1200px" },
          };

          // Transform style utilities
          const transformStyleUtilities = {
            ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
            ".transform-style-flat": { "transform-style": "flat" },
          };

          addUtilities({
            ...rotateXUtilities,
            ...rotateYUtilities,
            ...rotateZUtilities,
            ...perspectiveUtilities,
            ...transformStyleUtilities,
          });
        }
      ]
    };
    


        // Enhanced weather-themed shader animation
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
                
                // Create weather-themed gradient
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, `hsl(${220 + Math.sin(time) * 8}, 60%, ${12 + Math.sin(time * 0.5) * 4}%)`);
                gradient.addColorStop(0.5, `hsl(${210 + Math.cos(time * 0.7) * 12}, 70%, ${18 + Math.cos(time * 0.3) * 6}%)`);
                gradient.addColorStop(1, `hsl(${200 + Math.sin(time * 1.2) * 15}, 65%, ${25 + Math.sin(time * 0.8) * 8}%)`);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                requestAnimationFrame(animate);
            }
            animate();
        };

        // Initialize Particles.js for rain effect
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 400
                        }
                    },
                    "color": {
                        "value": "#93c5fd"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.6,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 8,
                        "direction": "bottom",
                        "random": false,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": true
                    }
                },
                "retina_detect": true
            });

            // Add slide-up animation delays
            const elements = document.querySelectorAll('.slide-up');
            elements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas height="1032" id="shader-canvas" width="1195"></canvas>
<div className="relative z-10 w-full min-h-screen flex items-center justify-center bg-gradient-to-tl from-slate-900 to-slate-700 px-4 py-4">

<div className="phone-shadow w-[375px] h-[812px] relative bg-gradient-to-b from-gray-800 via-gray-900 to-black border-gray-700 border rounded-[3rem] px-2 py-2 rotate-x-20 rotate-y-15 -rotate-z-15">

<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[126px] h-[30px] z-50 bg-black rounded-full mt-7"></div>

<div className="bg-black rounded-[2.5rem] w-full h-full overflow-hidden relative">

<div className="min-h-full flex flex-col relative">

<div className="absolute inset-0 opacity-20">
<div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full"></div>
<div className="absolute top-40 right-8 w-12 h-12 border border-cyan-400/30 rounded-full"></div>
<div className="absolute bottom-40 left-6 w-16 h-16 border border-sky-400/30 rounded-full"></div>
</div>


<div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-0">

<div className="weather-preview w-64 h-64 relative slide-up overflow-hidden rounded-3xl mb-8" style={{animationDelay: '0s'}}>

<div className="absolute bottom-6 left-4 right-4 weather-card rounded-2xl p-4">

<div className="" id="particles-js"></div>

<div className="weather-card-content">
<div className="flex items-center justify-between mb-2">
<div>
<p className="text-white text-xs opacity-80">San Francisco</p>
<p className="text-white text-lg font-bold temp-display">68°</p>
</div>
<div className="weather-icon text-gray-300 text-2xl">
</div>
</div>
<div className="flex justify-between text-white text-xs opacity-70">
<span>H: 72°</span>
<span>L: 61°</span>
</div>
<div className="mt-2 text-white text-xs opacity-60">
                                        Light Rain
                                    </div>
</div>
</div>

<div className="absolute top-3 left-3 right-3 flex justify-between items-center">
<div className="flex items-center gap-2 bg-black/30 rounded-full px-2 py-1 backdrop-blur-md">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
</div>
<div className="w-6 h-6 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center">
</div>
</div>
</div>

<div className="text-center slide-up max-w-xs" style={{animationDelay: '0.2s'}}>
<h1 className="text-4xl font-light text-white mb-3">Welcome to WeatherVibe</h1>
<p className="leading-relaxed text-base text-white/70 mb-6">
                                Get accurate weather forecasts with beautiful visualizations and real-time updates.
                            </p>

<div className="flex justify-center gap-4 mb-6">
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 flex items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2 ml-5">
</div>
<span className="text-white/60 text-xs">Live Weather</span>
</div>
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-2 ml-5">
</div>
<span className="text-white/60 text-xs">7-Day Forecast</span>
</div>
<div className="feature-icon text-center">
<div className="w-10 h-10 bg-white/10 flex items-center justify-center bg-gradient-to-bl from-amber-400 to-red-500 rounded-full mb-2 ml-3">
</div>
<span className="text-white/60 text-xs">Smart Alerts</span>
</div>
</div>
</div>
</div>

<div className="p-6 space-y-3 relative z-10">
<button className="hero-gradient w-full pulse-button text-base font-semibold text-white rounded-2xl py-4">
                            Enable Location
                        </button>
<button className="w-full py-3 rounded-2xl text-white/70 font-medium border border-white/20 text-base">
                            Maybe Later
                        </button>
</div>

<div className="flex justify-center pb-2">
<div className="w-32 h-1 bg-white/30 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-20 -left-1 w-1 h-12 bg-gray-600 rounded-full"></div>
<div className="absolute top-36 -left-1 w-1 h-16 bg-gray-600 rounded-full"></div>
<div className="absolute top-36 -right-1 w-1 h-20 bg-gray-600 rounded-full"></div>
</div>
</div>


    </>
  );
}
