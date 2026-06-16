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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      // Simple initialization log
      console.log("Outpilot landing page initialized.");
      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Outpilot - Automate Your Workflow</title>

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>




<style>
      body {
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      }
      .font-display {
      font-family: 'Space Grotesk', sans-serif;
      }
      @keyframes fade-in-up {
      0% {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(5px);
      }
      100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
      }
      }
      .animate-fade-up {
      animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      opacity: 0;
      }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; }
    </style>

<div className="fixed inset-0 -z-20 h-full w-full bg-[#1DB2B0]/5 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 opacity-70" data-us-project="x6cbPWi9roeeiZ8cuBu3" style={{filter: 'hue-rotate(-45deg) saturate(1.4)'}}></div>
</div>



<header className="fixed top-6 z-50 w-full px-4 sm:px-6 flex justify-center animate-fade-up">
<nav className="flex transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-white/80 w-full max-w-4xl border-gray-200/60 border rounded-2xl pt-2.5 pr-1.5 pb-2.5 pl-4 shadow-sm backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="flex group-hover:shadow-md transition-all duration-300 bg-gradient-to-b from-[#1DB2B0] to-[#158f8d] w-8 h-8 rounded-lg relative shadow-sm items-center justify-center">
<svg className="translate-x-0.5 translate-y-0.5 -rotate-45 w-[16px] h-[16px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
</svg>
</div>
<span className="group-hover:text-[#158f8d] transition-colors text-xl font-bold text-gray-900 tracking-tight font-display">
            Outpilot
          </span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="hover:text-gray-900 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-[#1DB2B0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-base font-medium bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 pt-1 pb-1 relative" href="#">
            Features
          </a>
<a className="hover:text-gray-900 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-[#1DB2B0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-base font-medium bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 pt-1 pb-1 relative" href="#">
            Case Studies
          </a>
<a className="hover:text-gray-900 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-[#1DB2B0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-base font-medium bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 pt-1 pb-1 relative" href="#">
            Benefits
          </a>
<a className="hover:text-gray-900 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-[#1DB2B0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-base font-medium bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 pt-1 pb-1 relative" href="#">
            FAQs
          </a>
</div>

<div className="">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
              Book a call
              <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
              .button {
                cursor: pointer;
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                transition: all 0.25s ease;
                background: radial-gradient(65.28% 65.28% at 50% 100%,
                    rgba(255, 255, 255, 0.6) 0%,
                    rgba(255, 255, 255, 0) 100%),
                  linear-gradient(0deg, #1DB2B0, #1DB2B0);
                border-radius: 0.6rem;
                border: none;
                outline: none;
                padding: 8px 16px;
                min-height: 40px;
                min-width: 90px;
              }

              .button::before,
              .button::after {
                content: "";
                position: absolute;
                transition: all 0.5s ease-in-out;
                z-index: 0;
              }

              .button::before {
                inset: 1px;
                background: linear-gradient(177.95deg,
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(255, 255, 255, 0) 100%);
                border-radius: calc(0.6rem - 1px);
              }

              .button::after {
                inset: 2px;
                background: radial-gradient(65.28% 65.28% at 50% 100%,
                    rgba(255, 255, 255, 0.6) 0%,
                    rgba(255, 255, 255, 0) 100%),
                  linear-gradient(0deg, #1DB2B0, #1DB2B0);
                border-radius: calc(0.6rem - 2px);
              }

              .button:active {
                transform: scale(0.95);
              }

              .points_wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                pointer-events: none;
                position: absolute;
                z-index: 1;
              }

              .points_wrapper .point {
                bottom: -10px;
                position: absolute;
                animation: floating-points infinite ease-in-out;
                pointer-events: none;
                width: 2px;
                height: 2px;
                background-color: #fff;
                border-radius: 9999px;
              }

              @keyframes floating-points {
                0% { transform: translateY(0); }
                85% { opacity: 0; }
                100% { transform: translateY(-55px); opacity: 0; }
              }

              .points_wrapper .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
              .points_wrapper .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
              .points_wrapper .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
              .points_wrapper .point:nth-child(4) { left: 44%; opacity: 0.9; animation-duration: 2.05s; animation-delay: 0.3s; }
              .points_wrapper .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; animation-delay: 0.4s; }
              .points_wrapper .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.2s; }
              .points_wrapper .point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.7s; }
              .points_wrapper .point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.6s; }
              .points_wrapper .point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.2s; }
              .points_wrapper .point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.3s; }

              .inner {
                z-index: 2;
                gap: 6px;
                position: relative;
                margin: 0;
                color: #fff;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.5;
                display: flex;
                align-items: center;
              }

              .inner .icon {
                width: 16px;
                height: 16px;
                transition: transform 0.3s;
              }

              .button:hover .icon {
                transform: translateX(3px);
              }
            </style>
</button>
</div>
</nav>
</header>

<main className="flex-grow sm:px-6 flex flex-col z-0 text-center w-full max-w-7xl mr-auto ml-auto pt-48 pr-4 pb-16 pl-4 items-center">

<div className="animate-fade-up opacity-0" style={{animationDelay: '100ms'}}></div>

<h1 className="animate-fade-up delay-200 sm:text-5xl md:text-6xl leading-[1.15] text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk opacity-0 max-w-4xl mb-6">
        The world’s first sponsorship engine for
        <br/>
        modern sport.
      </h1>

<p className="animate-fade-up delay-300 sm:text-xl leading-relaxed text-lg text-gray-600 opacity-0 max-w-2xl mb-10">
        Outpilot gives sports organisations the ability to research, qualify and
        speak to the right decision-makers with more speed, accuracy and
        credibility than any manual process.
      </p>

<div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-3">
<button className="hover:bg-[#189896] transition-all hover:shadow-[0_6px_20px_rgba(29,178,176,0.23)] hover:-translate-y-0.5 font-medium text-white bg-[#1DB2B0] rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0_4px_14px_0_rgba(29,178,176,0.39)]">
          Book a Call
        </button>
<button className="group flex hover:border-gray-300 hover:bg-gray-50 transition-all font-medium text-gray-700 bg-white border-gray-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
          Explore Features
        </button>
</div>
<p className="animate-fade-up delay-400 text-sm text-gray-600 opacity-0 mb-16">
        (This is not automation. It is commercial infrastructure built for elite
        sport.)
      </p>

<div className="w-full mb-16 animate-fade-up opacity-0 delay-400">
<p className="uppercase text-sm font-medium text-slate-700 tracking-wider mb-8">
          Trusted by modern teams at
        </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-8 flex items-center font-bold text-xl text-gray-800">
<span className="text-[#1DB2B0] mr-1">❖</span>
            ACME
          </div>
<div className="h-8 flex items-center font-bold text-xl text-gray-800">
<span className="text-blue-500 mr-1">●</span>
            Globex
          </div>
<div className="h-8 flex items-center font-bold text-xl text-gray-800">
<span className="text-purple-500 mr-1">▲</span>
            Sudo
          </div>
<div className="h-8 flex items-center font-bold text-xl text-gray-800">
<span className="text-orange-500 mr-1">■</span>
            Umbra
          </div>
</div>
</div>
<div className="animate-fade-up opacity-0 delay-400 w-full max-w-5xl mx-auto group perspective-1000">
<div className="relative transform transition-all duration-700 group-hover:rotate-x-2">

<div className="absolute -inset-1 bg-gradient-to-r from-[#1DB2B0] to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative bg-white/60 border border-gray-200/60 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-900/5 text-left">

<div className="border-b border-gray-200/60 bg-white/80 h-10 px-4 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>

<div className="ml-4 flex-1 max-w-sm h-5 bg-gray-100/80 rounded-md flex items-center px-2">
<div className="w-3 h-3 text-gray-400">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</div>
<div className="ml-2 w-24 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>

<div className="flex h-[400px]">

<div className="w-64 border-r border-gray-100 bg-white/50 hidden md:block p-4 space-y-6">
<div className="flex items-center gap-2 opacity-70">
<div className="w-6 h-6 bg-gray-200 rounded"></div>
<div className="h-3 w-20 bg-gray-200 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-8 w-full bg-[#1DB2B0]/10 rounded-lg flex items-center px-3 border border-[#1DB2B0]/10">
<div className="h-2 w-24 bg-[#1DB2B0]/40 rounded"></div>
</div>
<div className="h-8 w-full rounded-lg flex items-center px-3">
<div className="h-2 w-20 bg-gray-100 rounded"></div>
</div>
<div className="h-8 w-full rounded-lg flex items-center px-3">
<div className="h-2 w-28 bg-gray-100 rounded"></div>
</div>
</div>
<div className="pt-4 border-t border-gray-100 space-y-3">
<div className="h-2 w-16 bg-gray-100 rounded mb-4"></div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="flex-1 space-y-1 py-1">
<div className="h-2 w-full bg-gray-100 rounded"></div>
<div className="h-2 w-2/3 bg-gray-100 rounded"></div>
</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="flex-1 space-y-1 py-1">
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-gray-50/30 p-6 md:p-8 overflow-hidden relative">

<div className="flex justify-between items-center mb-8">
<div>
<div className="h-6 w-48 bg-gray-800/10 rounded mb-2"></div>
<div className="h-3 w-64 bg-gray-400/20 rounded"></div>
</div>
<div className="h-9 w-24 bg-[#1DB2B0] rounded-lg shadow-lg shadow-[#1DB2B0]/20"></div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="h-8 w-8 bg-indigo-50 rounded-lg mb-3 flex items-center justify-center text-indigo-500">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="h-3 w-16 bg-gray-100 rounded mb-1"></div>
<div className="h-6 w-24 bg-gray-800/10 rounded"></div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="h-8 w-8 bg-emerald-50 rounded-lg mb-3 flex items-center justify-center text-emerald-500">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="h-3 w-16 bg-gray-100 rounded mb-1"></div>
<div className="h-6 w-24 bg-gray-800/10 rounded"></div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="h-8 w-8 bg-orange-50 rounded-lg mb-3 flex items-center justify-center text-orange-500">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<div className="h-3 w-16 bg-gray-100 rounded mb-1"></div>
<div className="h-6 w-24 bg-gray-800/10 rounded"></div>
</div>
</div>

<div className="relative w-full h-48 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 opacity-10 p-4">
<div className="col-span-1 row-span-1 bg-gray-400 rounded"></div>
</div>
<div className="flex items-center gap-4">
<div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-xs font-medium text-gray-500 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      Trigger
                    </div>
<div className="w-8 h-[2px] bg-gray-300"></div>
<div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-xs font-medium text-gray-500 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      Action
                    </div>
<div className="w-8 h-[2px] bg-gray-300"></div>
<div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-xs font-medium text-gray-500 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1DB2B0]"></div>
                      Success
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</main>

<footer className="w-full py-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm text-center text-sm text-gray-500">
<p>© 2023 Outpilot Inc. All rights reserved.</p>
</footer>


    </>
  );
}
