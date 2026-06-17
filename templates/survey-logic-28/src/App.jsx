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



        lucide.createIcons();

        let zoomLevel = 0.55;
        const zoomStep = 0.1;
        const canvas = document.getElementById('visual-canvas-content');
        const zoomText = document.getElementById('zoom-text');
        
        // Initial Zoom application
        canvas.style.transform = `scale(${zoomLevel})`;
        
        function setZoom(direction) {
            if (direction === 'in') {
                zoomLevel += zoomStep;
            } else if (direction === 'out') {
                zoomLevel -= zoomStep;
            }
            
            // Constrain
            if (zoomLevel < 0.2) zoomLevel = 0.2;
            if (zoomLevel > 1.2) zoomLevel = 1.2;

            const percentage = Math.round(zoomLevel * 100);
            zoomText.innerText = `${percentage}%`;
            canvas.style.transform = `scale(${zoomLevel})`;
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
      

<header className="h-14 border-b border-zinc-200 flex items-center justify-between px-5 bg-white shrink-0 z-20 relative">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span className="font-medium tracking-tight">Flows</span>
</div>
<span className="text-zinc-300">/</span>
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-zinc-900">Thriving Assessment</span>
<span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-500">v2.4</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-zinc-100 p-0.5 rounded-lg border border-zinc-200/50">
<button className="px-3 py-1.5 rounded-md bg-white text-zinc-900 shadow-sm border border-zinc-200 text-xs font-medium transition-all">Build</button>
<button className="px-3 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 text-xs font-medium transition-all">Design</button>
<button className="px-3 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 text-xs font-medium transition-all">Analyze</button>
</div>
<div className="w-px h-4 bg-zinc-200 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md text-xs font-medium transition-colors">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                Preview
            </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-72 border-r border-zinc-200 flex flex-col bg-zinc-50/50 shrink-0 hidden md:flex">
<div className="p-4 border-b border-zinc-200 flex items-center justify-between sticky top-0 bg-zinc-50/50 backdrop-blur-sm z-10">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nodes</span>
<div className="flex gap-2">
<button className="p-1 hover:bg-zinc-200 rounded text-zinc-400 hover:text-zinc-700 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
</button>
<button className="p-1 hover:bg-zinc-200 rounded text-zinc-400 hover:text-zinc-700 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-4">

<div className="group">
<div className="flex items-center gap-2 px-2 py-1.5 text-zinc-900 font-medium text-xs mb-1">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="git-commit"></i>
                        Start
                    </div>
<div className="space-y-0.5 ml-2 border-l border-zinc-200 pl-2">
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<div className="flex justify-between items-start gap-2">
<span className="text-xs text-zinc-600 leading-snug">2. Imagine Thriving...</span>
<span className="shrink-0 text-[10px] text-zinc-400 bg-zinc-50 px-1.5 rounded border border-zinc-100">Start</span>
</div>
</div>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 px-2 py-1.5 text-zinc-900 font-medium text-xs mb-1">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="git-branch"></i>
                        Branches
                    </div>
<div className="space-y-0.5 ml-2 border-l border-zinc-200 pl-2">
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<span className="text-xs text-zinc-600 leading-snug">3. Great! A couple...</span>
</div>
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<span className="text-xs text-zinc-600 leading-snug">4. Great! Just a...</span>
</div>
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<span className="text-xs text-zinc-600 leading-snug">5. Great! Here's a...</span>
</div>
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<span className="text-xs text-zinc-600 leading-snug">6. Great! One...</span>
</div>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 px-2 py-1.5 text-zinc-900 font-medium text-xs mb-1">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="git-merge"></i>
                        Convergence
                    </div>
<div className="space-y-0.5 ml-2 border-l border-zinc-200 pl-2">
<div className="flex flex-col p-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
<span className="text-xs text-zinc-600 leading-snug">7. What gifts do you...</span>
<div className="flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-[10px] text-zinc-400">Target</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<div className="h-12 border-b border-zinc-200 flex items-center justify-between px-6 bg-white shrink-0 z-10">
<div className="flex items-center gap-4">
<h2 className="font-semibold text-zinc-900 tracking-tight text-sm">Logic Flow</h2>
<div className="h-4 w-px bg-zinc-200"></div>
<div className="flex items-center bg-zinc-100 rounded-md p-0.5">
<button className="bg-white text-zinc-900 shadow-sm border border-zinc-200 px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all">
<i className="w-3.5 h-3.5" data-lucide="workflow"></i>
                            Map
                        </button>
<button className="px-3 py-1 text-zinc-500 hover:text-zinc-900 rounded text-xs font-medium flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
                            List
                        </button>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">Auto-save on</span>
<i className="w-3.5 h-3.5 text-zinc-300" data-lucide="check-circle-2"></i>
</div>
</div>

<div className="flex-1 bg-zinc-50 relative overflow-hidden bg-grid-pattern cursor-grab active:cursor-grabbing" id="view-visual">

<div className="w-full h-full absolute top-0 left-0 transition-transform duration-200 ease-out origin-top-left" id="visual-canvas-content">


<svg className="absolute inset-0 w-[2400px] h-[1000px] pointer-events-none z-0">
<defs>
<marker id="arrowhead-gray" markerheight="4" markerwidth="6" orient="auto" refx="5" refy="2">
<polygon fill="#cbd5e1" points="0 0, 6 2, 0 4"></polygon>
</marker>
<marker id="arrowhead-blue" markerheight="4" markerwidth="6" orient="auto" refx="5" refy="2">
<polygon fill="#3b82f6" points="0 0, 6 2, 0 4"></polygon>
</marker>
</defs>



<path d="M 250 350 C 375 350, 375 100, 500 100" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 250 350 C 375 350, 375 250, 500 250" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 250 350 C 375 350, 375 450, 500 450" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 250 350 C 375 350, 375 600, 500 600" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>


<path d="M 700 100 L 800 100" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1000 100 L 1100 100" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1300 100 C 1500 100, 1500 350, 1700 350" fill="none" marker-end="url(#arrowhead-blue)" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="2"></path>


<path d="M 700 250 L 800 250" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1000 250 L 1100 250" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1300 250 C 1500 250, 1500 350, 1700 350" fill="none" marker-end="url(#arrowhead-blue)" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="2"></path>


<path d="M 700 450 L 800 450" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1000 450 L 1100 450" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1300 450 L 1400 450" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1600 450 C 1650 450, 1650 350, 1700 350" fill="none" marker-end="url(#arrowhead-blue)" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="2"></path>


<path d="M 700 600 L 800 600" fill="none" marker-end="url(#arrowhead-gray)" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M 1000 600 C 1500 600, 1500 350, 1700 350" fill="none" marker-end="url(#arrowhead-blue)" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>


<div className="absolute top-[310px] left-[50px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between group hover:border-zinc-400 transition-colors z-10">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-100 text-zinc-500 flex items-center justify-center">
<span className="text-[10px] font-bold">2</span>
</div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Start</span>
</div>
<div className="text-xs font-semibold text-zinc-900 line-clamp-1">Imagine Thriving...</div>
<div className="text-[10px] text-zinc-400 font-mono">2/12</div>
</div>

<div className="absolute top-[60px] left-[500px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><span className="text-[10px] font-bold">3</span></div>
<span className="text-[10px] font-bold text-zinc-400">PATH 1</span>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">Great! A couple...</div>
</div>
<div className="absolute top-[60px] left-[800px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><span className="text-[10px] font-bold">3a</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What compels you...</div>
</div>
<div className="absolute top-[60px] left-[1100px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><span className="text-[10px] font-bold">3b</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">Do you find yourself...</div>
</div>

<div className="absolute top-[210px] left-[500px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><span className="text-[10px] font-bold">4</span></div>
<span className="text-[10px] font-bold text-zinc-400">PATH 2</span>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">Great! Just a couple...</div>
</div>
<div className="absolute top-[210px] left-[800px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><span className="text-[10px] font-bold">4a</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What has happened...</div>
</div>
<div className="absolute top-[210px] left-[1100px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><span className="text-[10px] font-bold">4b</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What support...?</div>
</div>

<div className="absolute top-[410px] left-[500px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-50 text-orange-600 flex items-center justify-center"><span className="text-[10px] font-bold">5</span></div>
<span className="text-[10px] font-bold text-zinc-400">PATH 3</span>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">Great! Here's a few...</div>
</div>
<div className="absolute top-[410px] left-[800px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-50 text-orange-600 flex items-center justify-center"><span className="text-[10px] font-bold">5a</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">As an advisor...</div>
</div>
<div className="absolute top-[410px] left-[1100px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-50 text-orange-600 flex items-center justify-center"><span className="text-[10px] font-bold">5b</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What has happened...</div>
</div>
<div className="absolute top-[410px] left-[1400px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-50 text-orange-600 flex items-center justify-center"><span className="text-[10px] font-bold">5c</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What support...?</div>
</div>

<div className="absolute top-[560px] left-[500px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center"><span className="text-[10px] font-bold">6</span></div>
<span className="text-[10px] font-bold text-zinc-400">PATH 4</span>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">Great! One follow...</div>
</div>
<div className="absolute top-[560px] left-[800px] w-[200px] h-[80px] bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex flex-col justify-between z-10 hover:border-zinc-400 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center"><span className="text-[10px] font-bold">6a</span></div>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">As an advisor...?</div>
</div>

<div className="absolute top-[310px] left-[1700px] w-[200px] h-[80px] bg-white ring-2 ring-blue-500/20 border border-blue-200 shadow-lg shadow-blue-500/5 rounded-xl p-3 flex flex-col justify-between group hover:border-blue-400 transition-colors z-20">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center">
<span className="text-[10px] font-bold">7</span>
</div>
<span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Convergence</span>
</div>
<div className="text-xs font-semibold text-zinc-900 truncate">What gifts do you see...</div>
<div className="text-[10px] text-zinc-400 font-mono">3/12</div>
</div>
</div>

<div className="absolute bottom-6 left-6 flex bg-white border border-zinc-200 rounded-lg shadow-sm p-1 gap-1 z-30">
<button className="p-1.5 hover:bg-zinc-100 rounded text-zinc-500 active:bg-zinc-200 transition-colors" onclick="setZoom('out')"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="text-xs font-medium text-zinc-600 self-center px-1 min-w-[36px] text-center select-none" id="zoom-text">55%</span>
<button className="p-1.5 hover:bg-zinc-100 rounded text-zinc-500 active:bg-zinc-200 transition-colors" onclick="setZoom('in')"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</div>
</main>

<aside className="w-80 bg-white border-l border-zinc-200 flex flex-col hidden xl:flex shrink-0">
<div className="p-4 border-b border-zinc-200 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Properties</span>
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded">ID: 3b</span>
</div>
<div className="p-4 space-y-6 flex-1 overflow-y-auto">

<div className="space-y-3">
<label className="block text-xs font-medium text-zinc-700">Question Text</label>
<textarea className="w-full text-xs rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 p-2 border font-medium text-zinc-900 min-h-[80px]">Do you find yourself...?</textarea>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-zinc-700">Node Type</label>
<select className="w-full text-xs rounded-md border-zinc-300 shadow-sm p-2 border bg-white">
<option>Single Choice</option>
<option>Multiple Choice</option>
<option>Text Input</option>
<option>Rating Scale</option>
</select>
</div>
<hr className="border-zinc-100"/>
<div className="space-y-3">
<span className="text-xs font-medium text-zinc-900">Connections</span>
<div className="flex gap-2 items-start p-2 rounded-md bg-white border border-zinc-200 shadow-sm">
<div className="mt-0.5 text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="arrow-left-circle"></i>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between w-full">
<span className="text-[10px] font-medium text-zinc-500 uppercase">Incoming</span>
</div>
<span className="text-xs text-zinc-900">3a. What compels you...</span>
</div>
</div>
<div className="flex gap-2 items-start p-2 rounded-md bg-blue-50 border border-blue-100 shadow-sm">
<div className="mt-0.5 text-blue-500">
<i className="w-3.5 h-3.5" data-lucide="arrow-right-circle"></i>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between w-full">
<span className="text-[10px] font-medium text-blue-500 uppercase">Outgoing</span>
</div>
<span className="text-xs text-zinc-900">7. What gifts do you...</span>
<div className="flex items-center gap-1 mt-1">
<span className="text-[10px] text-blue-600 bg-blue-100 px-1 rounded">Merge</span>
</div>
</div>
</div>
</div>
<hr className="border-zinc-100"/>
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-900">Analytics</span>
<div className="grid grid-cols-2 gap-2">
<div className="p-2 bg-zinc-50 rounded border border-zinc-100 flex flex-col gap-1">
<span className="text-[10px] text-zinc-500">Views</span>
<span className="text-sm font-semibold text-zinc-900">1,240</span>
</div>
<div className="p-2 bg-zinc-50 rounded border border-zinc-100 flex flex-col gap-1">
<span className="text-[10px] text-zinc-500">Drop-off</span>
<span className="text-sm font-semibold text-red-600">4.2%</span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-200 bg-zinc-50 flex gap-2">
<button className="flex-1 py-2 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 rounded-md text-xs font-medium shadow-sm transition-colors">
                    Duplicate
                </button>
<button className="px-3 py-2 bg-white border border-zinc-200 hover:border-red-200 hover:text-red-600 text-zinc-400 rounded-md text-xs font-medium shadow-sm transition-colors">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
</button>
</div>
</aside>
</div>



    </>
  );
}
