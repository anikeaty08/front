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
    


    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('phone-container');
      const elements = document.querySelectorAll('.perspective-element');
      
      document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const rotateX = (clientY / innerHeight - 0.5) * -10;
        const rotateY = (clientX / innerWidth - 0.5) * 10;
        
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        elements.forEach((el, index) => {
          const depth = 0.5 + (index * 0.1);
          el.style.transform = `translateZ(${10 * depth}px) rotateX(${rotateX * 0.2}deg) rotateY(${rotateY * 0.2}deg)`;
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="perspective-container relative w-[375px] h-[812px] transition-transform duration-200 ease-out" id="phone-container">

<div className="relative w-full h-full bg-gray-900 rounded-[54px] overflow-hidden shadow-2xl border-8 border-gray-800">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-20"></div>

<div className="pt-2 px-6 flex justify-between items-center text-sm h-[34px]">
<div className="text-white font-medium">9:41</div>
<div className="flex space-x-2 items-center">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

<div className="relative flex items-center">
<div className="w-6 h-3 border border-white rounded-sm bg-gray-900 relative">
<div className="absolute inset-0.5 bg-white rounded-sm w-4/5"></div>
</div>
<div className="w-0.5 h-1.5 bg-white rounded-r-sm ml-0.5"></div>
</div>
</div>
</div>

<div className="px-6 pt-6">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-semibold text-white">SkyBook</h1>
<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
<svg className="h-5 w-5 text-gray-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>
</div>

<div className="mt-8 relative perspective-element transform transition-transform duration-200 ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl"></div>
<div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700">
<div className="text-xs font-medium text-sky-400 mb-1">FEATURED DEAL</div>
<h2 className="text-xl font-medium text-white mb-2">NYC → London</h2>
<p className="text-sm text-gray-300 mb-4">Round-trip flights starting from $299. Premium airlines with flexible booking options.</p>
<div className="flex items-center justify-between">
<button className="bg-sky-600 text-white py-2 px-4 rounded-full text-sm font-medium">Book Flight</button>
<div className="text-right">
<div className="text-sm text-gray-400">From</div>
<div className="text-lg font-semibold text-white">$299</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-white">Quick Book</h3>
<button className="text-sm text-sky-400 font-medium">See All</button>
</div>
<div className="flex space-x-4 overflow-x-auto pb-2 -mx-1 px-1 perspective-element transform transition-transform duration-200 ease-out">
<div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-2xl flex flex-col items-center justify-center border border-gray-700">
<div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center mb-2">
<svg className="h-5 w-5 text-sky-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-200">Flights</div>
</div>
<div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-2xl flex flex-col items-center justify-center border border-gray-700">
<div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mb-2">
<svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-200">Hotels</div>
</div>
<div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-2xl flex flex-col items-center justify-center border border-gray-700">
<div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
<svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-200">Multi-City</div>
</div>
<div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-2xl flex flex-col items-center justify-center border border-gray-700">
<div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-2">
<svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-xs font-medium text-gray-200">Deals</div>
</div>
</div>
</div>

<div className="mt-8 mb-20 perspective-element transform transition-transform duration-200 ease-out">
<h3 className="text-lg font-medium text-white mb-4">Recent Flights</h3>
<div className="space-y-3">
<div className="bg-gray-800 rounded-xl p-3 border border-gray-700 flex items-center">
<div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4">
<svg className="h-6 w-6 text-sky-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center space-x-2 mb-1">
<span className="text-sm font-medium text-white">LAX</span>
<svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-medium text-white">JFK</span>
</div>
<div className="text-xs text-gray-400">Dec 15 • United Airlines • 6h 25m</div>
</div>
<div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
<svg className="h-4 w-4 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<div className="bg-gray-800 rounded-xl p-3 border border-gray-700 flex items-center">
<div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
<svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center space-x-2 mb-1">
<span className="text-sm font-medium text-white">SFO</span>
<svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-medium text-white">SEA</span>
</div>
<div className="text-xs text-gray-400">Nov 28 • Alaska Airlines • Completed</div>
</div>
<div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
<svg className="h-4 w-4 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-800 border-t border-gray-700 flex items-center justify-around px-6">
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-sky-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
<span className="text-xs font-medium text-sky-400 mt-1">Home</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium text-gray-500 mt-1">Flights</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 11-4 0V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium text-gray-500 mt-1">Tickets</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium text-gray-500 mt-1">Profile</span>
</div>
</div>
</div>
</div>
<style>
    .perspective-container {
      perspective: 1000px;
      transform-style: preserve-3d;
    }
  </style>


    </>
  );
}
