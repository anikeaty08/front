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
      

<div className="flex h-screen">
<aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
<div className="p-6 border-b border-zinc-800">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-blue-500" data-lucide="boxes" strokeWidth="1.5"></i>
<h1 className="text-lg font-semibold tracking-tight">IntegrationHub</h1>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-zinc-800/50 text-white" href="#">
<i className="w-4 h-4" data-lucide="workflow" strokeWidth="1.5"></i>
                    Flows
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30" href="#">
<i className="w-4 h-4" data-lucide="plug" strokeWidth="1.5"></i>
                    Integrations
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30" href="#">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
                    Monitoring
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30" href="#">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
                    Settings
                </a>
</nav>
<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">User</p>
<p className="text-xs text-zinc-500 truncate">user@company.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="border-b border-zinc-800 bg-zinc-950">
<div className="flex items-center justify-between px-8 py-4">
<div>
<h2 className="text-xl font-semibold tracking-tight">Request Flow Builder</h2>
<p className="text-sm text-zinc-400 mt-1">Design and orchestrate your API integration flows</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 rounded-lg hover:bg-zinc-800/30 transition-colors">
<i className="w-4 h-4 inline mr-2" data-lucide="save" strokeWidth="1.5"></i>
                            Save
                        </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
<i className="w-4 h-4 inline mr-2" data-lucide="play" strokeWidth="1.5"></i>
                            Deploy
                        </button>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-zinc-800 bg-zinc-950 overflow-y-auto">
<div className="p-4">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Components</h3>
<div className="space-y-6">
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium">Triggers</p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
<span className="text-sm">Request</span>
</div>
</div>
</div>
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium">Actions</p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<div className="w-4 h-4 rounded-full bg-blue-500"></div>
<span className="text-sm">API Call</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<div className="w-4 h-4 rotate-45 bg-green-600"></div>
<span className="text-sm">Field Mapper</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-500 rotate-90"></div>
<span className="text-sm ml-1">Logic Process</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<div className="w-4 h-4 bg-orange-500 flex items-center justify-center text-[8px] font-bold">OR</div>
<span className="text-sm">Orchestrator</span>
</div>
</div>
</div>
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium">Outputs</p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-move hover:border-zinc-700 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-sm">Response</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 relative overflow-auto bg-black" style={{backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
<div className="absolute inset-0 p-12">

<div className="mb-32">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-zinc-500 mt-2">Request</span>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-32 h-20 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-sm font-medium text-blue-300">API CALL</span>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rotate-45 bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
<span className="text-xs font-medium text-green-300 -rotate-45">FIELD<br/>MAPPER</span>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-zinc-500 mt-2">Request</span>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="relative border-2 border-orange-500 rounded-lg p-6 bg-zinc-950">
<div className="absolute -left-1 top-0 bottom-0 w-6 bg-orange-500 flex items-center justify-center">
<span className="text-[10px] font-bold text-white transform -rotate-90 whitespace-nowrap">ORCHESTRATOR</span>
</div>
<div className="flex items-center gap-4 ml-4">
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
<div className="h-0.5 w-8 bg-zinc-700"></div>
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-zinc-500 mt-2">Request</span>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="relative border-2 border-orange-500 rounded-lg p-6 bg-zinc-950">
<div className="absolute -left-1 top-0 bottom-0 w-6 bg-orange-500 flex items-center justify-center">
<span className="text-[10px] font-bold text-white transform -rotate-90 whitespace-nowrap">ORCHESTRATOR</span>
</div>
<div className="flex items-center gap-4 ml-4">
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
<div className="h-0.5 w-8 bg-zinc-700"></div>
<div className="w-16 h-16 rotate-45 bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
<span className="text-[10px] font-medium text-green-300 -rotate-45">FIELD<br/>MAP</span>
</div>
<div className="h-0.5 w-8 bg-zinc-700"></div>
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rotate-45 bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
<span className="text-[10px] font-medium text-green-300 -rotate-45">FIELD<br/>MAP</span>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-zinc-500 mt-2">Request</span>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="relative border-2 border-orange-500 rounded-lg p-6 bg-zinc-950">
<div className="absolute -left-1 top-0 bottom-0 w-6 bg-orange-500 flex items-center justify-center">
<span className="text-[10px] font-bold text-white transform -rotate-90 whitespace-nowrap">ORCHESTRATOR</span>
</div>
<div className="flex items-start gap-4 ml-4">
<div className="flex flex-col items-center">
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
</div>
<div className="flex flex-col items-center gap-2 relative">
<div className="h-8 w-0.5 bg-zinc-700"></div>
<div className="w-20 h-20 bg-red-500/20 border-2 border-red-500 flex items-center justify-center relative" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
<span className="text-[10px] font-medium text-red-300">LOGIC<br/>PROCESS</span>
</div>
<div className="h-8 w-0.5 bg-zinc-700"></div>

<div className="absolute top-1/2 left-full w-8 h-0.5 bg-zinc-700"></div>
</div>
<div className="flex flex-col gap-4">
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
<div className="w-28 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
<span className="text-xs font-medium text-blue-300">API CALL</span>
</div>
</div>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rotate-45 bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
<span className="text-[10px] font-medium text-green-300 -rotate-45">FIELD<br/>MAP</span>
</div>
</div>
<div className="h-0.5 w-12 bg-zinc-700"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 border-l border-zinc-800 bg-zinc-950 overflow-y-auto">
<div className="p-6">
<h3 className="text-sm font-semibold mb-4">Properties</h3>
<div className="space-y-4 text-sm text-zinc-400">
<p>Select a component to view its properties</p>
<div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
<div className="flex items-center gap-2 text-zinc-300 mb-3">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
<span className="font-medium">Quick Tips</span>
</div>
<ul className="space-y-2 text-xs text-zinc-500">
<li>• Drag components from the toolbox</li>
<li>• Connect nodes to create flows</li>
<li>• Click to configure properties</li>
<li>• Test flows before deploying</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
