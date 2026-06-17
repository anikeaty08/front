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



        const container = document.getElementById('file-container');
        const btnList = document.getElementById('btn-list');
        const btnGrid = document.getElementById('btn-grid');

        function switchView(mode) {
            // Check if View Transition API is supported
            if (!document.startViewTransition) {
                updateClasses(mode);
                return;
            }

            document.startViewTransition(() => {
                updateClasses(mode);
            });
        }

        function updateClasses(mode) {
            if (mode === 'list') {
                container.classList.remove('grid-view');
                container.classList.add('list-view');
                
                // Update Button Styles
                btnList.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
                btnList.classList.remove('text-gray-400');
                btnGrid.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
                btnGrid.classList.add('text-gray-400');
            } else {
                container.classList.remove('list-view');
                container.classList.add('grid-view');

                // Update Button Styles
                btnGrid.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
                btnGrid.classList.remove('text-gray-400');
                btnList.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
                btnList.classList.add('text-gray-400');
            }
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
      

<div className="w-full max-w-5xl bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col max-h-[90vh]">

<div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900 flex items-center gap-2">
                    Project Assets
                    <span className="text-gray-400 text-sm font-normal">4 files</span>
</h1>
</div>
<div className="flex items-center gap-3">

<div className="bg-gray-100/80 p-1 rounded-lg flex items-center gap-1">
<button className="p-1.5 rounded-md text-gray-900 bg-white shadow-sm transition-all hover:text-gray-900" id="btn-list" onclick="switchView('list')">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 transition-all" id="btn-grid" onclick="switchView('grid')">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="h-5 w-px bg-gray-200 mx-2"></div>
<button className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-gray-200">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Upload</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white relative">

<div className="list-view transition-all" id="file-container">

<div className="file-card group relative bg-white border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300 flex" style={{viewTransitionName: 'file-1'}}>

<div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity list-view:static list-view:opacity-100 list-view:mr-4">
<div className="w-5 h-5 rounded border border-gray-300 bg-white hover:border-gray-400 cursor-pointer flex items-center justify-center"></div>
</div>

<div className="file-preview rounded-xl overflow-hidden flex items-center justify-center border border-gray-100 relative group-hover:bg-gray-50 transition-colors">
<div className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>

<div className="flex-1 min-w-0 flex flex-col justify-center">
<h3 className="text-sm font-medium text-gray-900 truncate">Dashboard_Mockup_v04.png</h3>
<p className="text-xs text-gray-400 mt-0.5">2.4 MB • Added today</p>
</div>

<div className="file-meta-row flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 border border-white ring-1 ring-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-medium">AM</div>
<span className="text-xs text-gray-500 hide-on-grid">Alex M.</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="file-card group relative bg-white border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300 flex" style={{viewTransitionName: 'file-2'}}>
<div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity list-view:static list-view:opacity-100 list-view:mr-4">
<div className="w-5 h-5 rounded border border-gray-300 bg-white hover:border-gray-400 cursor-pointer flex items-center justify-center"></div>
</div>
<div className="file-preview rounded-xl overflow-hidden flex items-center justify-center border border-gray-100 bg-gray-50 text-gray-400 group-hover:text-indigo-500 group-hover:bg-indigo-50/50 transition-colors">
<iconify-icon className="grid-view:scale-150 transition-transform" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<h3 className="text-sm font-medium text-gray-900 truncate">Q4_Financial_Report.pdf</h3>
<p className="text-xs text-gray-400 mt-0.5">845 KB • Yesterday</p>
</div>
<div className="file-meta-row flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 border border-white ring-1 ring-gray-100 flex items-center justify-center text-[10px] text-indigo-600 font-medium">SJ</div>
<span className="text-xs text-gray-500 hide-on-grid">Sarah J.</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="file-card group relative bg-gray-50/50 border border-indigo-200 rounded-2xl hover:shadow-md transition-all duration-300 flex" style={{viewTransitionName: 'file-3'}}>
<div className="absolute top-4 left-4 z-10 list-view:static list-view:mr-4">
<div className="w-5 h-5 rounded bg-indigo-600 border border-indigo-600 flex items-center justify-center cursor-pointer shadow-sm shadow-indigo-200">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<div className="file-preview rounded-xl overflow-hidden flex items-center justify-center border border-indigo-100 bg-white text-indigo-500">
<iconify-icon className="grid-view:scale-150 transition-transform" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<h3 className="text-sm font-medium text-indigo-900 truncate">Brand_Assets_Export.zip</h3>
<p className="text-xs text-indigo-400 mt-0.5">142 MB • 2 days ago</p>
</div>
<div className="file-meta-row flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-100 border border-white ring-1 ring-gray-100 flex items-center justify-center text-[10px] text-orange-600 font-medium">MK</div>
<span className="text-xs text-gray-500 hide-on-grid">Mike K.</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<button className="text-indigo-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-indigo-100">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="file-card group relative bg-white border border-red-100 rounded-2xl hover:border-red-200 transition-all duration-300 flex" style={{viewTransitionName: 'file-4'}}>
<div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity list-view:static list-view:opacity-100 list-view:mr-4">
<div className="w-5 h-5 rounded border border-gray-300 bg-white hover:border-gray-400 cursor-pointer flex items-center justify-center"></div>
</div>
<div className="file-preview rounded-xl overflow-hidden flex items-center justify-center border border-red-50 bg-red-50/30 text-red-500">
<iconify-icon className="grid-view:scale-150 transition-transform" icon="solar:code-file-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<h3 className="text-sm font-medium text-gray-900 truncate">main_process_worker.js</h3>
<p className="text-xs text-red-500 mt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:danger-circle-linear" width="12"></iconify-icon>
                            Upload failed
                        </p>
</div>
<div className="file-meta-row flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 border border-white ring-1 ring-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-medium">SYS</div>
<span className="text-xs text-gray-500 hide-on-grid">System</span>
</div>
<div className="flex items-center gap-2">
<button className="text-red-600 hover:text-red-700 text-xs font-medium bg-red-50 px-2 py-1 rounded-md">Retry</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-gray-50/80 border-t border-gray-100 text-center">
<div className="border border-dashed border-gray-300 rounded-xl p-8 hover:bg-gray-100/50 hover:border-gray-400 transition-colors cursor-pointer group">
<div className="flex flex-col items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:cloud-upload-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-gray-500">Drag files here or <span className="text-gray-900 font-medium cursor-pointer">browse</span></p>
</div>
</div>
</div>
</div>


    </>
  );
}
