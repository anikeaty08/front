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



        document.addEventListener('DOMContentLoaded', () => {
            
            // Grid Toggle logic
            const gridBtn = document.getElementById('toggle-grid-btn');
            const gridOverlay = document.getElementById('canvas-grid');
            let isGridVisible = true;

            gridBtn.addEventListener('click', () => {
                isGridVisible = !isGridVisible;
                if (isGridVisible) {
                    gridOverlay.classList.remove('opacity-0');
                    gridOverlay.classList.add('opacity-[0.6]');
                    gridBtn.classList.add('bg-neutral-100', 'text-neutral-900');
                    gridBtn.classList.remove('bg-white', 'text-neutral-700', 'hover:bg-neutral-50');
                } else {
                    gridOverlay.classList.remove('opacity-[0.6]');
                    gridOverlay.classList.add('opacity-0');
                    gridBtn.classList.remove('bg-neutral-100', 'text-neutral-900');
                    gridBtn.classList.add('bg-white', 'text-neutral-700', 'hover:bg-neutral-50');
                }
            });

            // Layers (Object Tree) Toggle logic
            const layersBtn = document.getElementById('toggle-layers-btn');
            const layersPanel = document.getElementById('layers-panel');
            let isLayersVisible = true; // Default state

            layersBtn.addEventListener('click', () => {
                isLayersVisible = !isLayersVisible;
                
                if (isLayersVisible) {
                    // Show Panel
                    layersPanel.classList.remove('w-0', 'border-0', 'opacity-0');
                    layersPanel.classList.add('w-[240px]', 'border-r', 'opacity-100');
                    
                    // Button Active State
                    layersBtn.classList.add('bg-neutral-100', 'text-neutral-900');
                    layersBtn.classList.remove('bg-white', 'text-neutral-700', 'hover:bg-neutral-50');
                } else {
                    // Hide Panel
                    layersPanel.classList.remove('w-[240px]', 'border-r', 'opacity-100');
                    layersPanel.classList.add('w-0', 'border-0', 'opacity-0');
                    
                    // Button Inactive State
                    layersBtn.classList.remove('bg-neutral-100', 'text-neutral-900');
                    layersBtn.classList.add('bg-white', 'text-neutral-700', 'hover:bg-neutral-50');
                }
            });
            
            // Initialize button state to match default visible panel
            layersBtn.classList.add('bg-neutral-100', 'text-neutral-900');
            layersBtn.classList.remove('bg-white', 'text-neutral-700');
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
      

<header className="min-h-[56px] flex bg-white h-14 z-50 border-neutral-200 border-b pr-4 pl-4 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)] items-center justify-between">
<div className="flex items-center gap-1">

<button className="p-2 mr-1 text-neutral-400 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100/80">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="h-5 w-px bg-neutral-200 mx-2"></div>

<div className="flex items-center gap-0.5">
<button className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100 focus:bg-neutral-100" title="Undo">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:undo-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 14L4 9l5-5m0 0v5a9 9 0 0 1 6.36 14.85" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100 focus:bg-neutral-100" title="Redo">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:redo-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15 14l5-5l-5-5m0 0v5a9 9 0 0 0-6.36 14.85" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="h-5 w-px bg-neutral-200 mx-2"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all border border-transparent hover:border-neutral-200/60 active:bg-neutral-200/50">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:store" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
<span className="">Add Stall</span>
</button>
<div className="h-5 w-px bg-neutral-200 mx-2"></div>
<div className="flex items-center gap-0.5 p-1 bg-neutral-50 border border-neutral-200 rounded-lg">
<button className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-white hover:shadow-sm transition-all focus:ring-1 focus:ring-neutral-200" title="Square">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect className="" fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-white hover:shadow-sm transition-all focus:ring-1 focus:ring-neutral-200" title="Triangle">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-white hover:shadow-sm transition-all focus:ring-1 focus:ring-neutral-200" title="Circle">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</button>
<button className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-white hover:shadow-sm transition-all focus:ring-1 focus:ring-neutral-200" title="Line">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="18" height="18" role="img" style={{transform: 'rotate(-45deg)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="h-5 w-px bg-neutral-200 mx-2"></div>

<div className="flex items-center gap-0.5">
<button className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100 focus:bg-neutral-100" title="Bring to Front">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bring-to-front" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="8" y="8"></rect><path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></path><path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></path></g></svg>
</button>
<button className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100 focus:bg-neutral-100" title="Send to Back">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send-to-back" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="14" y="14"></rect><path d="M2 10l6-6l6 6"></path><path d="M8 4v8"></path><path d="M20 14V4a2 2 0 0 0-2-2h-4"></path><path d="M10 20v-4a2 2 0 0 0-2-2H4"></path></g></svg>
</button>
</div>
<div className="h-5 w-px bg-neutral-200 mx-2"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all border border-transparent hover:border-neutral-200/60">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:type" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">Text</span>
</button>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 text-sm text-neutral-400 select-none">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mouse-pointer-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">Editing Map V2</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-neutral-100 text-neutral-900 border border-transparent hover:bg-neutral-200/60 transition-all active:bg-neutral-200" id="toggle-grid-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
<span className="">Grid</span>
</button>
<div className="h-4 w-px bg-neutral-200"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm active:bg-neutral-100 bg-neutral-100 text-neutral-900" id="toggle-layers-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12.83 2.18l-10 10a1 1 0 0 0 0 1.42l10 10a1 1 0 0 0 1.41 0l10-10a1 1 0 0 0 0-1.42l-10-10a1 1 0 0 0-1.41 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 12h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 2v20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">Objects</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm active:bg-neutral-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
<span className="">Map Settings</span>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden relative">

<aside className="w-[240px] bg-white border-r border-neutral-200 flex flex-col z-20 shadow-[1px_0_10px_rgba(0,0,0,0.02)] h-full transition-all duration-300 ease-in-out" id="layers-panel">

<div className="h-10 min-h-[40px] border-b border-neutral-100 flex items-center px-4 justify-between bg-white sticky top-0 z-10">
<h2 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Objects</h2>
<div className="flex items-center gap-1">
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-all" title="Search">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" fill="none" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="m21 21l-4.3-4.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-4">

<div className="space-y-1">
<div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-neutral-900/60 uppercase tracking-tight select-none cursor-pointer hover:text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Stalls</span>
<span className="ml-auto text-[10px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-full">3</span>
</div>
<div className="space-y-0.5 pl-2">

<div className="group flex items-center gap-2 px-2 py-1.5 rounded bg-blue-50/60 text-blue-700 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide" data-icon="lucide:store" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m2 7l4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 7h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium truncate">Stall A-101</span>
<div className="ml-auto opacity-100 flex items-center gap-1">
<button className="text-blue-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-600 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 group-hover:text-neutral-500 iconify--lucide" data-icon="lucide:store" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m2 7l4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 7h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium truncate">Stall B-102</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="text-neutral-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-500 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 iconify--lucide" data-icon="lucide:store" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m2 7l4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 7h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium truncate">Premium Stall L-1</span>
<div className="ml-auto flex items-center gap-1">
<button className="text-neutral-400 hover:text-neutral-700"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="11" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
</div>
</div>
<div className="h-px bg-neutral-100 mx-2"></div>

<div className="space-y-1">
<div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-neutral-900/60 uppercase tracking-tight select-none cursor-pointer hover:text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Shapes</span>
<span className="ml-auto text-[10px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-full">4</span>
</div>
<div className="space-y-0.5 pl-2">

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-600 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 group-hover:text-neutral-500 iconify--lucide" data-icon="lucide:square" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
<span className="text-xs font-medium truncate">Entrance Area</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="text-neutral-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-600 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 group-hover:text-neutral-500 iconify--lucide" data-icon="lucide:circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="text-xs font-medium truncate">Fountain Zone</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="text-neutral-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-600 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 group-hover:text-neutral-500 iconify--lucide" data-icon="lucide:type" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium truncate">"Main Hall" Label</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="text-neutral-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 text-neutral-600 cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 text-neutral-400 group-hover:text-neutral-500 iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" style={{transform: 'rotate(-45deg)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium truncate">Pathway Divider</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="text-neutral-400 hover:text-red-600" title="Delete"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-neutral-50/30 relative overflow-hidden cursor-grab active:cursor-grabbing group z-0">

<div className="z-0 opacity-[0.6] absolute top-0 right-0 bottom-0 left-0 bg-grid-canvas transition-opacity duration-200" id="canvas-grid"></div>
<div className="absolute bottom-6 left-6 flex items-center gap-1 bg-white p-1 rounded-lg border border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-10">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-xs font-medium w-10 text-center text-neutral-600 tabular-nums">100%</span>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</main>

<aside className="w-[320px] bg-white border-l border-neutral-200 flex flex-col z-20 shadow-[-1px_0_10px_rgba(0,0,0,0.02)] h-full">

<div className="h-10 min-h-[40px] border-b border-neutral-100 flex items-center px-4 justify-between bg-white sticky top-0 z-10">
<h2 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Properties</h2>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-5">

<div className="space-y-3">
<div className="space-y-1">
<label className="text-[11px] uppercase font-medium text-neutral-500 tracking-wide">Version Name</label>
<input className="w-full px-2.5 h-8 bg-white border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all placeholder:text-neutral-400 shadow-sm hover:border-neutral-300" type="text" value="V2"/>
</div>
<div className="space-y-1">
<label className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">Background</label>
<button className="w-full flex items-center justify-center gap-2 h-8 px-2.5 bg-white border border-neutral-200 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm group">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-neutral-600 iconify--lucide" data-icon="lucide:image" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
                            Change background
                        </button>
</div>
</div>
<div className="h-px bg-neutral-100 w-full"></div>

<div className="space-y-3">

<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">Font Size</label>
<div className="relative group">
<input className="w-full pl-2.5 pr-6 h-8 bg-white border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all shadow-sm group-hover:border-neutral-300" type="number" value="14"/>
<span className="absolute right-2 top-2 text-[10px] text-neutral-400 pointer-events-none">px</span>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">Color</label>
<div className="flex items-center gap-2 h-8">
<div className="cursor-pointer hover:scale-105 transition-transform shrink-0 bg-black w-8 h-8 border-neutral-200 border rounded-md shadow-sm"></div>
<input className="w-full px-2 h-8 bg-white border border-neutral-200 rounded-md text-xs text-neutral-900 font-mono focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all uppercase shadow-sm" type="text" value="#000"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-[11px] uppercase font-medium text-neutral-500 tracking-wide">Assigned Stall Background Color</label>
<div className="flex items-center gap-3 mb-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="peer hidden" name="stall_style" type="radio"/>
<div className="w-3.5 h-3.5 rounded-full border border-neutral-300 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 flex items-center justify-center transition-colors">
<div className="w-1 h-1 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<span className="peer-checked:text-neutral-900 peer-checked:font-medium text-xs text-neutral-600">Select Colour</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer hidden" name="stall_style" type="radio"/>
<div className="w-3.5 h-3.5 rounded-full border border-neutral-300 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 flex items-center justify-center transition-colors">
<div className="w-1 h-1 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<span className="text-xs text-neutral-600 peer-checked:text-neutral-900 peer-checked:font-medium">Border</span>
</label>
</div>

<div className="flex items-center gap-2 h-8">
<div className="cursor-pointer hover:scale-105 transition-transform shrink-0 bg-[#e5e7eb] w-8 h-8 border-neutral-200 border rounded-md shadow-sm"></div>
<input className="w-full px-2 h-8 bg-white border border-neutral-200 rounded-md text-xs text-neutral-900 font-mono focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all uppercase shadow-sm" type="text" value="#E5E7EB"/>
</div>
</div>

<div className="space-y-1 pt-1">
<label className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">Assigned Stall Border Colour</label>
<div className="flex items-center gap-2 h-8">
<div className="cursor-pointer hover:scale-105 transition-transform shrink-0 bg-[#3b82f6] w-8 h-8 border-neutral-200 border rounded-md shadow-sm"></div>
<input className="w-full px-2 h-8 bg-white border border-neutral-200 rounded-md text-xs text-neutral-900 font-mono focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all uppercase shadow-sm" type="text" value="#3B82F6"/>
</div>
</div>

<div className="flex items-center justify-between py-1 mt-2">
<span className="text-xs font-medium text-neutral-700">Display Company Name Inside Stall</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="company_toggle">
<input checked="" className="sr-only peer" id="company_toggle" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-900"></div>
</label>
</div>
</div>
<div className="h-px bg-neutral-100 w-full"></div>

<div className="space-y-1">
<label className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">Status</label>
<div className="flex items-center gap-4 py-1">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="peer hidden" name="status" type="radio"/>
<span className="w-3.5 h-3.5 flex items-center justify-center border border-neutral-300 rounded-full peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all">
<span className="w-1 h-1 bg-white rounded-full opacity-0 peer-checked:opacity-100"></span>
</span>
<span className="text-xs text-neutral-900 font-medium">Draft</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer hidden" name="status" type="radio"/>
<span className="w-3.5 h-3.5 flex items-center justify-center border border-neutral-300 rounded-full peer-checked:border-green-600 peer-checked:bg-green-600 transition-all">
<span className="w-1 h-1 bg-white rounded-full opacity-0 peer-checked:opacity-100"></span>
</span>
<span className="text-xs text-neutral-600 peer-checked:text-neutral-900 peer-checked:font-medium">Published</span>
</label>
</div>
</div>
</div>

<div className="p-4 border-t border-neutral-200 bg-neutral-50/50 mt-auto">
<button className="w-full h-9 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-md shadow-md shadow-neutral-900/10 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:save" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"></path></g></svg>
                    Save Changes
                </button>
</div>
</aside>
</div>



    </>
  );
}
