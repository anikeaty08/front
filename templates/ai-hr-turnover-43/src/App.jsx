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
      

<div bis_size='{"x":0,"y":0,"w":1192,"h":490,"abs_x":480,"abs_y":43}' className="fixed inset-0 pointer-events-none z-0 bg-grid h-[60vh]"></div>

<div bis_size='{"x":0,"y":0,"w":1192,"h":83,"abs_x":480,"abs_y":43}' className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 animate-nav">

<nav bis_size='{"x":76,"y":24,"w":1040,"h":59,"abs_x":556,"abs_y":67}' className="flex w-full max-w-[1040px] rounded-full pl-6 pr-2 py-2 items-center justify-between bg-[#F4F4F5]">

<a bis_size='{"x":100,"y":38,"w":92,"h":30,"abs_x":580,"abs_y":81}' className="flex items-center gap-2.5 group mr-8" href="#">
<div bis_size='{"x":100,"y":39,"w":28,"h":28,"abs_x":580,"abs_y":82}' className="w-7 h-7 flex items-center justify-center text-[#1a1a1a]">

<svg bis_size='{"x":97,"y":37,"w":33,"h":33,"abs_x":577,"abs_y":80}' className="transform -rotate-12 w-[28px] h-[28px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '28px', height: '28px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":103,"y":46,"w":16,"h":6,"abs_x":583,"abs_y":89}' className="" d="M4 8C6 6 9 6 11 8C13 10 16 10 18 8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path bis_size='{"x":104,"y":51,"w":16,"h":6,"abs_x":584,"abs_y":94}' d="M4 13C6 11 9 11 11 13C13 15 16 15 18 13" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path bis_size='{"x":105,"y":57,"w":16,"h":6,"abs_x":585,"abs_y":100}' className="" d="M4 18C6 16 9 16 11 18C13 20 16 20 18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div bis_size='{"x":138,"y":38,"w":54,"h":30,"abs_x":618,"abs_y":81}' className="text-xl tracking-tight text-black flex items-baseline">
<span bis_size='{"x":138,"y":38,"w":32,"h":28,"abs_x":618,"abs_y":81}' className="font-bold text-gray-900 tracking-tight font-sans" style={{}}>Omnivert</span>
</div>
</a>


<div bis_size='{"x":905,"y":32,"w":202,"h":43,"abs_x":1385,"abs_y":75}' className="flex items-center gap-5 ml-auto">
<a bis_size='{"x":905,"y":44,"w":38,"h":19,"abs_x":1385,"abs_y":87}' className="hidden sm:block text-[13px] font-medium text-gray-900 hover:text-black transition-colors" href="#">Log In</a>

<a bis_size='{"x":963,"y":32,"w":144,"h":43,"abs_x":1443,"abs_y":75}' className="relative group" href="#">
<div bis_size='{"x":963,"y":32,"w":144,"h":43,"abs_x":1443,"abs_y":75}' className="btn-nav-create text-white text-[13px] font-medium px-6 py-3 rounded-full flex items-center justify-center transition-transform active:scale-[0.98]">
<span bis_size='{"x":987,"y":44,"w":96,"h":19,"abs_x":1467,"abs_y":87}'>Create Account</span>
</div>
</a>
</div>
</nav>
</div>

<main bis_size='{"x":0,"y":0,"w":1192,"h":1226,"abs_x":480,"abs_y":43}' className="flex flex-col text-center z-10 pt-32 pr-4 pb-20 pl-4 relative items-center">

<div bis_size='{"x":483,"y":128,"w":225,"h":25,"abs_x":963,"abs_y":171}' className="mb-8 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
<span bis_size='{"x":483,"y":128,"w":225,"h":25,"abs_x":963,"abs_y":171}' className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-[10px] uppercase tracking-widest font-semibold text-gray-500 shadow-sm">
<iconify-icon bis_size='{"x":496,"y":134,"w":12,"h":12,"abs_x":976,"abs_y":177}' className="text-indigo-600" height="12" icon="solar:stars-minimalistic-linear" width="12"></iconify-icon>
                AI-Powered HR Intelligence
            </span>
</div>

<h1 bis_size='{"x":217,"y":185,"w":757,"h":153,"abs_x":697,"abs_y":228}' className="max-w-3xl mx-auto text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.1] mb-8 animate-[fadeIn_0.6s_ease-out_0.3s_both]">
            Predict turnover before <br bis_size='{"x":974,"y":177,"w":0,"h":87,"abs_x":1454,"abs_y":220}' className="hidden sm:block"/>
<span bis_size='{"x":324,"y":266,"w":543,"h":72,"abs_x":804,"abs_y":309}' className="font-serif-italic text-gray-400">it actually happens.</span>
</h1>

<p bis_size='{"x":308,"y":370,"w":576,"h":58,"abs_x":788,"abs_y":413}' className="max-w-xl mx-auto text-lg text-gray-500 leading-relaxed mb-10 animate-[fadeIn_0.7s_ease-out_0.4s_both] font-light">
            Keep your best talent. IQPilot analyzes engagement signals to give you actionable retention insights in real-time.
        </p>

<div bis_size='{"x":407,"y":468,"w":377,"h":48,"abs_x":887,"abs_y":511}' className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-[fadeIn_0.8s_ease-out_0.5s_both]">
<button bis_size='{"x":407,"y":468,"w":193,"h":48,"abs_x":887,"abs_y":511}' className="btn-primary h-12 px-8 rounded-full text-white font-medium text-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
<iconify-icon bis_size='{"x":439,"y":483,"w":18,"h":18,"abs_x":919,"abs_y":526}' height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                Start Prediction
            </button>
<button bis_size='{"x":616,"y":468,"w":168,"h":48,"abs_x":1096,"abs_y":511}' className="btn-secondary h-12 px-8 rounded-full text-gray-800 border border-gray-200 font-medium text-sm flex items-center gap-2 transition-all hover:bg-gray-50 active:scale-[0.98]">
<iconify-icon bis_size='{"x":649,"y":483,"w":18,"h":18,"abs_x":1129,"abs_y":526}' className="text-gray-400" height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                View Demo
            </button>
</div>

<div bis_size='{"x":84,"y":596,"w":1024,"h":550,"abs_x":564,"abs_y":639}' className="w-full max-w-5xl animate-[fadeIn_1s_ease-out_0.6s_both] perspective-[1200px]">
<div bis_size='{"x":84,"y":596,"w":1024,"h":550,"abs_x":564,"abs_y":639}' className="relative rounded-xl border border-gray-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden">

<div bis_size='{"x":85,"y":597,"w":1022,"h":48,"abs_x":565,"abs_y":640}' className="h-12 border-b border-gray-100 flex items-center px-4 gap-4 bg-white">
<div bis_size='{"x":101,"y":616,"w":42,"h":10,"abs_x":581,"abs_y":659}' className="flex gap-1.5">
<div bis_size='{"x":101,"y":616,"w":10,"h":10,"abs_x":581,"abs_y":659}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div bis_size='{"x":117,"y":616,"w":10,"h":10,"abs_x":597,"abs_y":659}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div bis_size='{"x":133,"y":616,"w":10,"h":10,"abs_x":613,"abs_y":659}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
<div bis_size='{"x":159,"y":609,"w":256,"h":24,"abs_x":639,"abs_y":652}' className="h-6 w-64 bg-gray-50 rounded-md border border-gray-100 flex items-center px-2">
<iconify-icon bis_size='{"x":168,"y":616,"w":10,"h":10,"abs_x":648,"abs_y":659}' className="text-gray-300" height="10" icon="solar:lock-keyhole-minimalistic-linear" width="10"></iconify-icon>
<span bis_size='{"x":186,"y":613,"w":151,"h":15,"abs_x":666,"abs_y":656}' className="ml-2 text-[10px] text-gray-400">iqpilot.com/dashboard/retention</span>
</div>
</div>

<div bis_size='{"x":85,"y":645,"w":1022,"h":500,"abs_x":565,"abs_y":688}' className="flex h-[500px] bg-[#fafafa]">

<div bis_size='{"x":85,"y":645,"w":240,"h":500,"abs_x":565,"abs_y":688}' className="w-60 border-r border-gray-100 bg-white flex flex-col p-4 hidden md:flex">
<div bis_size='{"x":101,"y":661,"w":207,"h":142,"abs_x":581,"abs_y":704}' className="space-y-1">
<div bis_size='{"x":101,"y":661,"w":207,"h":34,"abs_x":581,"abs_y":704}' className="flex items-center gap-3 px-3 py-2 bg-gray-50 text-black text-xs font-medium rounded-lg border border-gray-100">
<iconify-icon bis_size='{"x":114,"y":670,"w":16,"h":16,"abs_x":594,"abs_y":713}' icon="solar:home-smile-linear" width="16"></iconify-icon>
                                Dashboard
                            </div>
<div bis_size='{"x":101,"y":699,"w":207,"h":32,"abs_x":581,"abs_y":742}' className="flex items-center gap-3 px-3 py-2 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon bis_size='{"x":113,"y":707,"w":16,"h":16,"abs_x":593,"abs_y":750}' icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                                Employees
                            </div>
<div bis_size='{"x":101,"y":735,"w":207,"h":32,"abs_x":581,"abs_y":778}' className="flex items-center gap-3 px-3 py-2 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon bis_size='{"x":113,"y":743,"w":16,"h":16,"abs_x":593,"abs_y":786}' icon="solar:chart-2-linear" width="16"></iconify-icon>
                                Analytics
                            </div>
<div bis_size='{"x":101,"y":771,"w":207,"h":32,"abs_x":581,"abs_y":814}' className="flex items-center gap-3 px-3 py-2 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon bis_size='{"x":113,"y":779,"w":16,"h":16,"abs_x":593,"abs_y":822}' icon="solar:document-text-linear" width="16"></iconify-icon>
                                Reports
                            </div>
</div>
<div bis_size='{"x":101,"y":988,"w":207,"h":141,"abs_x":581,"abs_y":1031}' className="mt-auto">
<div bis_size='{"x":101,"y":988,"w":207,"h":93,"abs_x":581,"abs_y":1031}' className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
<div bis_size='{"x":114,"y":1001,"w":181,"h":32,"abs_x":594,"abs_y":1044}' className="flex items-center gap-2 mb-2">
<div bis_size='{"x":114,"y":1001,"w":22,"h":32,"abs_x":594,"abs_y":1044}' className="p-1 bg-white rounded-md shadow-sm text-indigo-600">
<iconify-icon bis_size='{"x":118,"y":1008,"w":14,"h":14,"abs_x":598,"abs_y":1051}' icon="solar:lightning-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":144,"y":1009,"w":45,"h":15,"abs_x":624,"abs_y":1052}' className="text-[10px] font-semibold text-indigo-900">AI Insight</span>
</div>
<p bis_size='{"x":114,"y":1041,"w":181,"h":27,"abs_x":594,"abs_y":1084}' className="text-[10px] text-indigo-700 leading-snug">Risk detected in Engineering team. Retention probability dropped by 4%.</p>
</div>
<div bis_size='{"x":101,"y":1097,"w":207,"h":32,"abs_x":581,"abs_y":1140}' className="flex items-center gap-3 px-3 py-2 mt-4 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon bis_size='{"x":113,"y":1105,"w":16,"h":16,"abs_x":593,"abs_y":1148}' icon="solar:settings-linear" width="16"></iconify-icon>
                                Settings
                            </div>
</div>
</div>

<div bis_size='{"x":325,"y":645,"w":782,"h":500,"abs_x":805,"abs_y":688}' className="flex-1 p-8 overflow-hidden">
<div bis_size='{"x":357,"y":677,"w":718,"h":48,"abs_x":837,"abs_y":720}' className="flex justify-between items-end mb-8">
<div bis_size='{"x":357,"y":677,"w":235,"h":48,"abs_x":837,"abs_y":720}'>
<h3 bis_size='{"x":357,"y":677,"w":235,"h":28,"abs_x":837,"abs_y":720}' className="text-xl font-semibold text-gray-900 tracking-tight">Retention Overview</h3>
<p bis_size='{"x":357,"y":709,"w":235,"h":16,"abs_x":837,"abs_y":752}' className="text-xs text-gray-500 mt-1">Real-time analysis across all departments</p>
</div>
<div bis_size='{"x":867,"y":693,"w":207,"h":32,"abs_x":1347,"abs_y":736}' className="flex gap-2">
<button bis_size='{"x":867,"y":693,"w":118,"h":32,"abs_x":1347,"abs_y":736}' className="btn-secondary h-8 px-3 rounded-md text-xs font-medium text-gray-600 flex items-center gap-1.5 bg-white">
<iconify-icon bis_size='{"x":879,"y":702,"w":14,"h":14,"abs_x":1359,"abs_y":745}' icon="solar:calendar-linear" width="14"></iconify-icon>
                                    Last 30 Days
                                </button>
<button bis_size='{"x":993,"y":693,"w":81,"h":32,"abs_x":1473,"abs_y":736}' className="btn-primary h-8 px-3 rounded-md text-xs font-medium text-white flex items-center gap-1.5">
<iconify-icon bis_size='{"x":1005,"y":702,"w":14,"h":14,"abs_x":1485,"abs_y":745}' icon="solar:export-linear" width="14"></iconify-icon>
                                    Export
                                </button>
</div>
</div>

<div bis_size='{"x":357,"y":757,"w":718,"h":149,"abs_x":837,"abs_y":800}' className="grid grid-cols-3 gap-6 mb-8">

<div bis_size='{"x":357,"y":757,"w":223,"h":149,"abs_x":837,"abs_y":800}' className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div bis_size='{"x":378,"y":778,"w":181,"h":42,"abs_x":858,"abs_y":821}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":378,"y":778,"w":36,"h":42,"abs_x":858,"abs_y":821}' className="p-2 bg-gray-50 rounded-lg text-gray-900">
<iconify-icon bis_size='{"x":386,"y":786,"w":20,"h":20,"abs_x":866,"abs_y":829}' icon="solar:user-check-linear" width="20"></iconify-icon>
</div>
<span bis_size='{"x":511,"y":778,"w":48,"h":23,"abs_x":991,"abs_y":821}' className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+2.4%</span>
</div>
<div bis_size='{"x":378,"y":837,"w":181,"h":32,"abs_x":858,"abs_y":880}' className="text-2xl font-semibold text-gray-900 tracking-tight">94.2%</div>
<div bis_size='{"x":378,"y":869,"w":181,"h":16,"abs_x":858,"abs_y":912}' className="text-[11px] text-gray-500 font-medium">Retention Rate</div>
</div>

<div bis_size='{"x":604,"y":757,"w":223,"h":149,"abs_x":1084,"abs_y":800}' className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div bis_size='{"x":625,"y":778,"w":181,"h":42,"abs_x":1105,"abs_y":821}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":625,"y":778,"w":36,"h":42,"abs_x":1105,"abs_y":821}' className="p-2 bg-gray-50 rounded-lg text-gray-900">
<iconify-icon bis_size='{"x":633,"y":786,"w":20,"h":20,"abs_x":1113,"abs_y":829}' icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
<span bis_size='{"x":752,"y":778,"w":54,"h":23,"abs_x":1232,"abs_y":821}' className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Medium</span>
</div>
<div bis_size='{"x":625,"y":837,"w":181,"h":32,"abs_x":1105,"abs_y":880}' className="text-2xl font-semibold text-gray-900 tracking-tight">12</div>
<div bis_size='{"x":625,"y":869,"w":181,"h":16,"abs_x":1105,"abs_y":912}' className="text-[11px] text-gray-500 font-medium">At-Risk Employees</div>
</div>

<div bis_size='{"x":851,"y":757,"w":223,"h":149,"abs_x":1331,"abs_y":800}' className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div bis_size='{"x":872,"y":778,"w":181,"h":42,"abs_x":1352,"abs_y":821}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":872,"y":778,"w":36,"h":42,"abs_x":1352,"abs_y":821}' className="p-2 bg-gray-50 rounded-lg text-gray-900">
<iconify-icon bis_size='{"x":880,"y":786,"w":20,"h":20,"abs_x":1360,"abs_y":829}' icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<span bis_size='{"x":1007,"y":778,"w":46,"h":23,"abs_x":1487,"abs_y":821}' className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-full">Stable</span>
</div>
<div bis_size='{"x":872,"y":837,"w":181,"h":32,"abs_x":1352,"abs_y":880}' className="text-2xl font-semibold text-gray-900 tracking-tight">7.8</div>
<div bis_size='{"x":872,"y":869,"w":181,"h":16,"abs_x":1352,"abs_y":912}' className="text-[11px] text-gray-500 font-medium">eNPS Score</div>
</div>
</div>

<div bis_size='{"x":357,"y":938,"w":718,"h":256,"abs_x":837,"abs_y":981}' className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-64 flex flex-col">
<div bis_size='{"x":382,"y":963,"w":668,"h":20,"abs_x":862,"abs_y":1006}' className="flex justify-between items-center mb-6">
<h4 bis_size='{"x":382,"y":963,"w":176,"h":20,"abs_x":862,"abs_y":1006}' className="text-sm font-semibold text-gray-900">Turnover Prediction Trend</h4>
<iconify-icon bis_size='{"x":1034,"y":965,"w":16,"h":16,"abs_x":1514,"abs_y":1008}' className="text-gray-400" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<div bis_size='{"x":382,"y":1007,"w":668,"h":131,"abs_x":862,"abs_y":1050}' className="flex-1 flex items-end justify-between gap-4 px-2">

<div bis_size='{"x":390,"y":1099,"w":79,"h":39,"abs_x":870,"abs_y":1142}' className="w-full bg-gray-50 rounded-t-sm h-[30%] relative group">
<div bis_size='{"x":390,"y":1099,"w":79,"h":39,"abs_x":870,"abs_y":1142}' className="absolute inset-x-0 bottom-0 bg-gray-900 opacity-80 h-full rounded-t-sm transition-all group-hover:opacity-100"></div>
</div>
<div bis_size='{"x":485,"y":1079,"w":79,"h":58,"abs_x":965,"abs_y":1122}' className="w-full bg-gray-50 rounded-t-sm h-[45%] relative group">
<div bis_size='{"x":485,"y":1079,"w":79,"h":58,"abs_x":965,"abs_y":1122}' className="absolute inset-x-0 bottom-0 bg-gray-900 opacity-80 h-full rounded-t-sm transition-all group-hover:opacity-100"></div>
</div>
<div bis_size='{"x":580,"y":1092,"w":79,"h":45,"abs_x":1060,"abs_y":1135}' className="w-full bg-gray-50 rounded-t-sm h-[35%] relative group">
<div bis_size='{"x":580,"y":1092,"w":79,"h":45,"abs_x":1060,"abs_y":1135}' className="absolute inset-x-0 bottom-0 bg-gray-900 opacity-80 h-full rounded-t-sm transition-all group-hover:opacity-100"></div>
</div>
<div bis_size='{"x":676,"y":1059,"w":79,"h":78,"abs_x":1156,"abs_y":1102}' className="w-full bg-gray-50 rounded-t-sm h-[60%] relative group">
<div bis_size='{"x":676,"y":1059,"w":79,"h":78,"abs_x":1156,"abs_y":1102}' className="absolute inset-x-0 bottom-0 bg-gray-900 opacity-80 h-full rounded-t-sm transition-all group-hover:opacity-100"></div>
</div>
<div bis_size='{"x":771,"y":1073,"w":79,"h":65,"abs_x":1251,"abs_y":1116}' className="w-full bg-gray-50 rounded-t-sm h-[50%] relative group">
<div bis_size='{"x":771,"y":1073,"w":79,"h":65,"abs_x":1251,"abs_y":1116}' className="absolute inset-x-0 bottom-0 bg-gray-900 opacity-80 h-full rounded-t-sm transition-all group-hover:opacity-100"></div>
</div>
<div bis_size='{"x":867,"y":1040,"w":79,"h":98,"abs_x":1347,"abs_y":1083}' className="w-full bg-gray-50 rounded-t-sm h-[75%] relative group">
<div bis_size='{"x":867,"y":1040,"w":79,"h":98,"abs_x":1347,"abs_y":1083}' className="absolute inset-x-0 bottom-0 bg-indigo-600 h-full rounded-t-sm transition-all group-hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]"></div>
<div bis_size='{"x":875,"y":1008,"w":63,"h":23,"abs_x":1355,"abs_y":1051}' className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        Projection
                                    </div>
</div>
<div bis_size='{"x":962,"y":1053,"w":79,"h":85,"abs_x":1442,"abs_y":1096}' className="w-full bg-gray-50 rounded-t-sm h-[65%] relative group border-t-2 border-dashed border-gray-300">
</div>
</div>
<div bis_size='{"x":382,"y":1154,"w":668,"h":15,"abs_x":862,"abs_y":1197}' className="flex justify-between mt-4 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
<span bis_size='{"x":382,"y":1154,"w":25,"h":15,"abs_x":862,"abs_y":1197}'>Mon</span>
<span bis_size='{"x":493,"y":1154,"w":20,"h":15,"abs_x":973,"abs_y":1197}'>Tue</span>
<span bis_size='{"x":600,"y":1154,"w":24,"h":15,"abs_x":1080,"abs_y":1197}'>Wed</span>
<span bis_size='{"x":710,"y":1154,"w":22,"h":15,"abs_x":1190,"abs_y":1197}'>Thu</span>
<span bis_size='{"x":819,"y":1154,"w":15,"h":15,"abs_x":1299,"abs_y":1197}'>Fri</span>
<span bis_size='{"x":921,"y":1154,"w":19,"h":15,"abs_x":1401,"abs_y":1197}'>Sat</span>
<span bis_size='{"x":1027,"y":1154,"w":22,"h":15,"abs_x":1507,"abs_y":1197}'>Sun</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer bis_size='{"x":0,"y":1226,"w":1192,"h":115,"abs_x":480,"abs_y":1269}' className="border-t border-gray-100 bg-white">
<div bis_size='{"x":0,"y":1227,"w":1192,"h":114,"abs_x":480,"abs_y":1270}' className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div bis_size='{"x":24,"y":1275,"w":111,"h":18,"abs_x":504,"abs_y":1318}' className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon bis_size='{"x":24,"y":1275,"w":18,"h":18,"abs_x":504,"abs_y":1318}' icon="solar:chart-square-linear" width="18"></iconify-icon>
<span bis_size='{"x":50,"y":1276,"w":85,"h":16,"abs_x":530,"abs_y":1319}' className="text-xs font-medium">IQPilot © 2024</span>
</div>
<div bis_size='{"x":805,"y":1276,"w":362,"h":16,"abs_x":1285,"abs_y":1319}' className="flex gap-8 text-xs text-gray-400 font-medium">
<a bis_size='{"x":805,"y":1276,"w":80,"h":16,"abs_x":1285,"abs_y":1319}' className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a bis_size='{"x":918,"y":1276,"w":97,"h":16,"abs_x":1398,"abs_y":1319}' className="hover:text-black transition-colors" href="#">Terms of Service</a>
<a bis_size='{"x":1047,"y":1276,"w":39,"h":16,"abs_x":1527,"abs_y":1319}' className="hover:text-black transition-colors" href="#">Twitter</a>
<a bis_size='{"x":1119,"y":1276,"w":48,"h":16,"abs_x":1599,"abs_y":1319}' className="hover:text-black transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
