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
      

<div className="mac-window w-full h-full max-w-screen max-h-screen">

<div className="mac-titlebar">
<div className="traffic-lights">
<div className="traffic-light close"></div>
<div className="traffic-light minimize"></div>
<div className="traffic-light maximize"></div>
</div>
<div className="flex-1 text-center">
<span className="text-white text-sm font-medium">DesignForge Studio — Untitled Project</span>
</div>
<div className="w-60"></div>
</div>

<div className="mac-toolbar">
<div className="toolbar-segment">
<button className="mac-button">
<i className="fas fa-file mr-1"></i>New
                </button>
<button className="mac-button">
<i className="fas fa-folder-open mr-1"></i>Open
                </button>
<button className="mac-button primary">
<i className="fas fa-save mr-1"></i>Save
                </button>
</div>
<div className="toolbar-divider"></div>
<div className="toolbar-segment">
<button className="mac-button">
<i className="fas fa-undo"></i>
</button>
<button className="mac-button">
<i className="fas fa-redo"></i>
</button>
</div>
<div className="toolbar-divider"></div>
<div className="toolbar-segment">
<button className="mac-button">
<i className="fas fa-copy mr-1"></i>Copy
                </button>
<button className="mac-button">
<i className="fas fa-paste mr-1"></i>Paste
                </button>
</div>
<div className="flex-1"></div>
<div className="toolbar-segment">
<span className="text-white text-sm">100%</span>
<button className="mac-button">
<i className="fas fa-search-plus"></i>
</button>
<button className="mac-button">
<i className="fas fa-search-minus"></i>
</button>
</div>
</div>

<div className="flex h-full">

<div className="sidebar-mac flex flex-col py-4">
<div className="text-center mb-4">
<div className="text-white text-lg font-bold">DF</div>
</div>
<div className="sidebar-tool active">
<i className="fas fa-mouse-pointer"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-square"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-circle"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-font"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-paint-brush"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-vector-square"></i>
</div>
<div className="flex-1"></div>
<div className="sidebar-tool">
<i className="fas fa-layer-group"></i>
</div>
<div className="sidebar-tool">
<i className="fas fa-cog"></i>
</div>
</div>

<div className="flex-1 p-6 bg-gray-800">
<div className="canvas-area-mac w-full h-full relative overflow-hidden">

<div className="absolute inset-0 grid-overlay"></div>

<div className="absolute top-16 left-16 w-32 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg"></div>
<div className="absolute top-32 right-24 w-48 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white font-medium">
                        Sample Text Element
                    </div>
<div className="absolute bottom-24 left-1/3 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg"></div>

<div className="absolute top-32 right-24 w-48 h-16 selection-ring rounded-lg pointer-events-none"></div>
</div>
</div>

<div className="properties-panel">
<div className="panel-section">
<h3 className="text-white font-medium text-sm mb-3">Transform</h3>
<div className="space-y-3">
<div>
<label className="text-gray-300 text-xs block mb-1">Position</label>
<div className="flex gap-2">
<input className="mac-input text-xs" placeholder="X: 120"/>
<input className="mac-input text-xs" placeholder="Y: 80"/>
</div>
</div>
<div>
<label className="text-gray-300 text-xs block mb-1">Size</label>
<div className="flex gap-2">
<input className="mac-input text-xs" placeholder="W: 200"/>
<input className="mac-input text-xs" placeholder="H: 150"/>
</div>
</div>
</div>
</div>
<div className="panel-section">
<h3 className="text-white font-medium text-sm mb-3">Appearance</h3>
<div className="space-y-3">
<div>
<label className="text-gray-300 text-xs block mb-1">Fill</label>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded border border-gray-600"></div>
<span className="text-white text-xs">Gradient</span>
</div>
</div>
<div>
<label className="text-gray-300 text-xs block mb-1">Opacity</label>
<input className="w-full" max="100" min="0" type="range" value="100"/>
</div>
</div>
</div>
<div className="panel-section flex-1">
<h3 className="text-white font-medium text-sm mb-3">Layers</h3>
<div className="space-y-1">
<div className="bg-gray-700/50 rounded p-2 flex items-center gap-2 text-xs">
<i className="fas fa-eye text-blue-400 w-3"></i>
<span className="text-white flex-1">Rectangle</span>
<i className="fas fa-lock text-gray-500 w-3"></i>
</div>
<div className="bg-blue-600/30 border border-blue-500 rounded p-2 flex items-center gap-2 text-xs">
<i className="fas fa-eye text-blue-400 w-3"></i>
<span className="text-white flex-1">Text Layer</span>
</div>
<div className="bg-gray-700/50 rounded p-2 flex items-center gap-2 text-xs">
<i className="fas fa-eye text-blue-400 w-3"></i>
<span className="text-white flex-1">Circle</span>
</div>
</div>
</div>
</div>
</div>

<div className="status-bar">
<span>Canvas: 1920×1080px</span>
<span className="mx-2">•</span>
<span>Selection: Text Layer</span>
<div className="flex-1"></div>
<span>Ready</span>
</div>
</div>

    </>
  );
}
