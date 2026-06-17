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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Folder Toggle Logic
        function toggleFolder(folderId) {
            const folder = document.getElementById(folderId);
            const iconId = 'icon-' + folderId;
            const icon = document.getElementById(iconId);
            
            if (folder && icon) {
                if (folder.classList.contains('hidden')) {
                    folder.classList.remove('hidden');
                    icon.setAttribute('icon', 'solar:alt-arrow-down-linear');
                } else {
                    folder.classList.add('hidden');
                    icon.setAttribute('icon', 'solar:alt-arrow-right-linear');
                }
            }
        }

        // View Switching Logic (Code vs Dashboard)
        function switchMainView(viewType) {
            const viewCode = document.getElementById('view-code');
            const viewDashboard = document.getElementById('view-dashboard');
            const tabCode = document.getElementById('tab-code');
            const tabDashboard = document.getElementById('tab-dashboard');
            const breadcrumbs = document.getElementById('breadcrumbs');

            if (viewType === 'code') {
                // Show Code, hide Dashboard
                viewCode.classList.remove('opacity-0', 'pointer-events-none');
                viewDashboard.classList.add('opacity-0', 'pointer-events-none');
                
                // Update Tabs styling
                tabCode.classList.remove('bg-[#2d2d2d]', 'text-[#858585]');
                tabCode.classList.add('bg-[#1e1e1e]', 'border-t', 'border-t-blue-500', 'text-[#cccccc]');
                
                tabDashboard.classList.add('bg-[#2d2d2d]', 'text-[#858585]');
                tabDashboard.classList.remove('bg-[#1e1e1e]', 'border-t', 'border-t-blue-500', 'text-[#cccccc]');
                
                breadcrumbs.style.display = 'flex';
            } else if (viewType === 'dashboard') {
                // Show Dashboard, hide Code
                viewDashboard.classList.remove('opacity-0', 'pointer-events-none');
                viewCode.classList.add('opacity-0', 'pointer-events-none');
                
                // Update Tabs styling
                tabDashboard.classList.remove('bg-[#2d2d2d]', 'text-[#858585]');
                tabDashboard.classList.add('bg-[#1e1e1e]', 'border-t', 'border-t-blue-500', 'text-[#cccccc]');
                
                tabCode.classList.add('bg-[#2d2d2d]', 'text-[#858585]');
                tabCode.classList.remove('bg-[#1e1e1e]', 'border-t', 'border-t-blue-500', 'text-[#cccccc]');

                breadcrumbs.style.display = 'none';
            }
        }

        // Shortcut to open dashboard from activity bar
        function toggleDashboard() {
            switchMainView('dashboard');
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
      

<div className="h-8 flex-shrink-0 bg-[#333333] flex items-center justify-between px-3 border-b border-[#252526] select-none text-xs">
<div className="flex items-center gap-4 h-full">

<div className="flex items-center gap-2 mr-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="flex items-center h-full gap-3 text-[#cccccc]">
<div className="flex items-center gap-1 font-semibold tracking-tighter text-blue-400">
<iconify-icon className="text-base" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
                    CODEVERSE
                </div>
<div className="flex gap-3 text-[#cccccc] opacity-80">
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">File</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Edit</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Selection</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">View</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Go</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Run</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Terminal</span>
<span className="cursor-pointer hover:bg-[#ffffff1a] px-1.5 py-0.5 rounded transition-colors">Help</span>
</div>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 text-[#858585] flex items-center gap-2 max-w-xl w-full px-4">
<div className="bg-[#252526] border border-[#3c3c3c] rounded-md px-2 py-0.5 flex-1 flex items-center justify-center gap-2 hover:bg-[#2d2d2d] cursor-pointer transition-colors shadow-sm">
<iconify-icon icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
<span>CodeVerse IDE - two_sum.py</span>
</div>
</div>
<div className="flex items-center gap-3 text-[#cccccc] opacity-80">
<iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="solar:minimize-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="solar:maximize-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-[#f48771] transition-colors" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-12 bg-[#333333] flex-shrink-0 flex flex-col items-center justify-between py-2 border-r border-[#252526] z-20">
<div className="flex flex-col items-center gap-4 w-full">
<div className="relative w-full flex justify-center cursor-pointer group text-white">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500"></div>
<iconify-icon className="text-[1.5rem]" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors">
<iconify-icon className="text-[1.5rem]" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors">
<iconify-icon className="text-[1.5rem]" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-2 w-3 h-3 bg-blue-500 rounded-full text-[0.5rem] flex items-center justify-center text-white">2</span>
</div>
<div className="w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors">
<iconify-icon className="text-[1.5rem]" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors" onclick="toggleDashboard()">
<iconify-icon className="text-[1.5rem]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full flex justify-center cursor-pointer text-blue-400 hover:text-blue-300 transition-colors mt-2" title="Learning Hub">
<iconify-icon className="text-[1.5rem]" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-4 w-full mb-2">
<div className="w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors">
<iconify-icon className="text-[1.5rem]" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full flex justify-center cursor-pointer text-[#858585] hover:text-white transition-colors">
<iconify-icon className="text-[1.5rem]" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="w-64 bg-[#252526] flex-shrink-0 flex flex-col border-r border-[#3c3c3c] z-10" id="sidebar">
<div className="h-9 px-4 flex items-center justify-between text-xs tracking-tight text-[#cccccc]">
<span>EXPLORER</span>
<iconify-icon className="cursor-pointer" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto overflow-x-hidden pb-4">

<div className="group">
<div className="px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#2a2d2e] text-xs font-semibold text-[#cccccc]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
                        OPEN EDITORS
                    </div>
<div className="pl-6 py-1 flex items-center gap-2 cursor-pointer bg-[#37373d] text-blue-400">
<iconify-icon className="text-[#4fc1ff]" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">two_sum.py</span>
</div>
<div className="pl-6 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-[#f5a623]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Analytics Dashboard</span>
</div>
</div>

<div className="group mt-2 tree-container">
<div className="px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#2a2d2e] text-xs font-semibold text-[#cccccc]" onclick="toggleFolder('folder-languages')">
<iconify-icon icon="solar:alt-arrow-down-linear" id="icon-folder-languages" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">PROGRAMMING LANGUAGES</span>
</div>
<div className="relative" id="folder-languages">
<div className="tree-line"></div>

<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-yellow-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Python</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">2000+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-yellow-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">JavaScript / TS</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">2000+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-yellow-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Java</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">2000+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-yellow-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">C++</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">2000+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-yellow-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Solidity / Web3</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">500+</span>
</div>
</div>
</div>
<div className="group mt-1 tree-container">
<div className="px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#2a2d2e] text-xs font-semibold text-[#cccccc]" onclick="toggleFolder('folder-dsa')">
<iconify-icon icon="solar:alt-arrow-down-linear" id="icon-folder-dsa" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">DATA STRUCTURES &amp; ALGO</span>
</div>
<div className="relative" id="folder-dsa">
<div className="tree-line"></div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]" onclick="toggleFolder('folder-arrays')">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-[0.7rem]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-blue-400" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Arrays</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">100+</span>
</div>

<div className="relative pl-4" id="folder-arrays">
<div className="tree-line"></div>
<div className="pl-8 pr-2 py-1 flex items-center gap-2 cursor-pointer bg-[#37373d] text-blue-400">
<iconify-icon className="text-[#4fc1ff]" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">two_sum.py</span>
<span className="ml-auto w-2 h-2 rounded-full bg-green-500" title="Solved"></span>
</div>
<div className="pl-8 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-[#4fc1ff]" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">best_time_to_buy.py</span>
</div>
<div className="pl-8 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-[#4fc1ff]" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">container_with_water.py</span>
</div>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-[0.7rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-blue-400" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Graphs</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">100+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-[0.7rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-blue-400" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Dynamic Programming</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">100+</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-[0.7rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-blue-400" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Trees &amp; Heaps</span>
</div>
<span className="text-[0.65rem] bg-[#333333] px-1.5 rounded-full text-[#858585]">200+</span>
</div>
</div>
</div>
<div className="group mt-1 tree-container">
<div className="px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#2a2d2e] text-xs font-semibold text-[#cccccc]" onclick="toggleFolder('folder-interview')">
<iconify-icon icon="solar:alt-arrow-right-linear" id="icon-folder-interview" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">INTERVIEW PREPARATION</span>
</div>
<div className="hidden relative" id="folder-interview">
<div className="tree-line"></div>
<div className="pl-6 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-purple-400" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">FAANG Questions</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-purple-400" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">System Design</span>
</div>
</div>
</div>
<div className="group mt-1 tree-container">
<div className="px-2 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#2a2d2e] text-xs font-semibold text-[#cccccc]" onclick="toggleFolder('folder-realworld')">
<iconify-icon icon="solar:alt-arrow-right-linear" id="icon-folder-realworld" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">REAL-WORLD APPLICATIONS</span>
</div>
<div className="hidden relative" id="folder-realworld">
<div className="tree-line"></div>
<div className="pl-6 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-green-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">AI / ML Implementations</span>
</div>
<div className="pl-6 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]">
<iconify-icon className="text-green-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">Fintech Scenarios</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] relative">

<div className="h-9 bg-[#2d2d2d] flex overflow-x-auto border-b border-[#1e1e1e] scrollbar-none">
<div className="flex items-center gap-2 px-3 py-1 bg-[#1e1e1e] border-t border-t-blue-500 cursor-pointer min-w-fit" id="tab-code" onclick="switchMainView('code')">
<iconify-icon className="text-[#4fc1ff]" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#cccccc]">two_sum.py</span>
<iconify-icon className="ml-1 opacity-0 hover:opacity-100 transition-opacity hover:bg-[#ffffff1a] rounded" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-[#2d2d2d] cursor-pointer hover:bg-[#1e1e1e] min-w-fit transition-colors text-[#858585]" id="tab-dashboard" onclick="switchMainView('dashboard')">
<iconify-icon className="text-[#f5a623]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span>Analytics Dashboard</span>
<div className="w-2 h-2 rounded-full bg-blue-500 ml-1"></div> 
</div>
</div>

<div className="h-6 flex items-center px-4 bg-[#1e1e1e] text-[#858585] text-xs shadow-sm z-10" id="breadcrumbs">
<span className="hover:text-[#cccccc] cursor-pointer">CodeVerse</span>
<iconify-icon className="mx-1 text-[0.6rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="hover:text-[#cccccc] cursor-pointer">Python</span>
<iconify-icon className="mx-1 text-[0.6rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="hover:text-[#cccccc] cursor-pointer">DSA</span>
<iconify-icon className="mx-1 text-[0.6rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="hover:text-[#cccccc] cursor-pointer">Arrays</span>
<iconify-icon className="mx-1 text-[0.6rem]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#cccccc]">two_sum.py</span>
</div>

<div className="flex-1 flex overflow-hidden relative">

<div className="flex-1 flex w-full h-full absolute inset-0 transition-opacity duration-300" id="view-code">

<div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden">

<div className="absolute top-2 right-4 flex items-center gap-2 z-10 bg-[#252526] p-1 rounded-md border border-[#3c3c3c] shadow-lg">
<button className="flex items-center gap-1 hover:bg-[#333333] px-2 py-1 rounded text-xs text-[#cccccc] transition-colors">
<iconify-icon className="text-green-500" icon="solar:play-bold"></iconify-icon> Run
                            </button>
<div className="w-px h-4 bg-[#3c3c3c]"></div>
<iconify-icon className="cursor-pointer hover:text-white px-1" icon="solar:copy-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white px-1" icon="solar:restart-linear"></iconify-icon>
</div>

<div className="flex-1 overflow-auto flex font-mono text-sm leading-relaxed py-2">

<div className="w-12 flex-shrink-0 text-right pr-4 text-[#858585] select-none border-r border-[#3c3c3c]">
<div className="opacity-50 text-xs mt-1">1</div>
<div className="opacity-50 text-xs mt-1">2</div>
<div className="opacity-50 text-xs mt-1">3</div>
<div className="opacity-50 text-xs mt-1">4</div>
<div className="opacity-50 text-xs mt-1">5</div>
<div className="opacity-50 text-xs mt-1">6</div>
<div className="opacity-50 text-xs mt-1">7</div>
<div className="opacity-50 text-xs mt-1">8</div>
<div className="text-[#c6c6c6] text-xs mt-1">9</div> 
<div className="opacity-50 text-xs mt-1">10</div>
<div className="opacity-50 text-xs mt-1">11</div>
<div className="opacity-50 text-xs mt-1">12</div>
</div>

<div className="flex-1 px-4 whitespace-pre overflow-x-auto">
<div className="opacity-60 italic text-[#6a9955]"># Problem: Two Sum</div>
<div className="opacity-60 italic text-[#6a9955]"># Level: Beginner | Space: O(n) | Time: O(n)</div>
<div><span className="token-keyword">def</span> <span className="token-function">twoSum</span>(nums: <span className="token-type">List</span>[<span className="token-type">int</span>], target: <span className="token-type">int</span>) -&gt; <span className="token-type">List</span>[<span className="token-type">int</span>]:</div>
<div> <span className="token-comment"># Dictionary to store value and its index</span></div>
<div>    num_map = {}</div>
<br/>
<div> <span className="token-keyword">for</span> i, num <span className="token-keyword">in</span> <span className="token-function">enumerate</span>(nums):</div>
<div>        complement = target <span className="token-operator">-</span> num</div>
<div className="bg-[#264f78] bg-opacity-30 border border-[#264f78] rounded px-1 -mx-1 relative"> <span className="token-keyword">if</span> complement <span className="token-keyword">in</span> num_map: <span className="absolute right-2 top-0 text-[#858585] text-xs italic opacity-50"># O(1) lookup time</span></div>
<div> <span className="token-keyword">return</span> [num_map[complement], i]</div>
<div>        num_map[num] = i</div>
<br/>
<div> <span className="token-keyword">return</span> [] <span className="token-comment"># No solution found</span></div>
</div>

<div className="w-16 flex-shrink-0 bg-[#1e1e1e] border-l border-[#252526] hidden md:block">
<div className="w-full h-8 bg-[#ffffff1a] opacity-20 mt-2"></div>
<div className="w-3/4 h-1 bg-[#6a9955] ml-1 mt-1 opacity-50"></div>
<div className="w-1/2 h-1 bg-[#6a9955] ml-1 mt-1 opacity-50"></div>
<div className="w-full h-1 bg-[#569cd6] ml-1 mt-2 opacity-50"></div>
<div className="w-1/4 h-1 bg-[#cccccc] ml-2 mt-1 opacity-50"></div>
<div className="w-3/4 h-1 bg-[#569cd6] ml-2 mt-2 opacity-50"></div>
<div className="w-1/2 h-1 bg-[#cccccc] ml-4 mt-1 opacity-50"></div>
<div className="w-full h-1 bg-[#569cd6] ml-4 mt-1 bg-opacity-30 backdrop-blur-sm shadow-[0_0_2px_#569cd6]"></div>
<div className="w-3/4 h-1 bg-[#cccccc] ml-6 mt-1 opacity-50"></div>
<div className="w-1/2 h-1 bg-[#cccccc] ml-4 mt-1 opacity-50"></div>
<div className="w-1/4 h-1 bg-[#569cd6] ml-2 mt-2 opacity-50"></div>
</div>
</div>
</div>

<div className="w-96 bg-[#252526] flex-shrink-0 border-l border-[#3c3c3c] flex flex-col z-20 transition-all duration-300" id="educational-panel">

<div className="flex border-b border-[#3c3c3c] bg-[#1e1e1e] text-xs overflow-x-auto scrollbar-none">
<div className="px-3 py-2 border-b-2 border-blue-500 text-white cursor-pointer whitespace-nowrap">Problem</div>
<div className="px-3 py-2 border-b-2 border-transparent text-[#858585] hover:text-[#cccccc] cursor-pointer whitespace-nowrap">Real-World Apps</div>
<div className="px-3 py-2 border-b-2 border-transparent text-[#858585] hover:text-[#cccccc] cursor-pointer whitespace-nowrap flex items-center gap-1">
                                Visualizer <iconify-icon className="text-green-500" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 text-[0.85rem] leading-relaxed">

<div>
<h1 className="text-lg font-semibold tracking-tight text-white mb-2">1. Two Sum</h1>
<div className="flex gap-2 mb-4">
<span className="px-2 py-0.5 rounded text-[0.65rem] bg-green-500/10 text-green-400 border border-green-500/20">Easy</span>
<span className="px-2 py-0.5 rounded text-[0.65rem] bg-blue-500/10 text-blue-400 border border-blue-500/20">Hash Table</span>
<span className="px-2 py-0.5 rounded text-[0.65rem] bg-orange-500/10 text-orange-400 border border-orange-500/20">Array</span>
</div>
<p className="text-[#cccccc] mb-3">Given an array of integers <code className="bg-[#1e1e1e] px-1 rounded text-[#ce9178]">nums</code> and an integer <code className="bg-[#1e1e1e] px-1 rounded text-[#ce9178]">target</code>, return indices of the two numbers such that they add up to <code className="bg-[#1e1e1e] px-1 rounded text-[#ce9178]">target</code>.</p>
<p className="text-[#cccccc]">You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
</div>

<div className="bg-[#1e1e1e] rounded-md p-3 border border-[#3c3c3c]">
<h3 className="font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-base" icon="solar:lightbulb-linear"></iconify-icon>
                                    Why Hash Tables?
                                </h3>
<p className="text-[#858585] text-xs mb-2">The brute force approach requires nested loops O(n²). By utilizing a Hash Map, we trade space O(n) for time O(n). As we iterate, we store the number and its index. For each number, we instantly check if its <span className="italic text-white">complement</span> (target - current) exists in our map.</p>
<div className="flex items-center gap-4 mt-3 text-xs">
<div className="flex flex-col">
<span className="text-[#858585]">Time Complexity</span>
<span className="text-white font-mono bg-green-500/20 px-1 rounded w-max mt-1">O(n)</span>
</div>
<div className="flex flex-col">
<span className="text-[#858585]">Space Complexity</span>
<span className="text-white font-mono bg-yellow-500/20 px-1 rounded w-max mt-1">O(n)</span>
</div>
</div>
</div>

<div>
<h3 className="font-semibold text-white tracking-tight mb-3 border-b border-[#3c3c3c] pb-1">🌍 Real-World Applications</h3>
<div className="flex flex-col gap-3">

<div className="flex gap-3 items-start">
<div className="mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-blue-500/10 text-blue-400 flex-shrink-0">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<span className="font-medium text-[#cccccc] block text-sm">Finance: Asset Pairing</span>
<span className="text-[#858585] text-xs">Used in portfolio balancing tools to find two assets whose combined historical variance precisely offsets a target risk metric.</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-orange-500/10 text-orange-400 flex-shrink-0">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div>
<span className="font-medium text-[#cccccc] block text-sm">E-commerce: Exact Change</span>
<span className="text-[#858585] text-xs">Gift card optimization algorithms. If a user has a $50 gift card, find exactly two items in their wishlist that total $50 to maximize spend.</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-green-500/10 text-green-400 flex-shrink-0">
<iconify-icon icon="solar:health-linear"></iconify-icon>
</div>
<div>
<span className="font-medium text-[#cccccc] block text-sm">Healthcare: Dosage Matching</span>
<span className="text-[#858585] text-xs">Finding two complementary medications from a database whose combined chemical markers reach a target treatment threshold without exceeding toxicity.</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-purple-500/10 text-purple-400 flex-shrink-0">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon>
</div>
<div>
<span className="font-medium text-[#cccccc] block text-sm">Gaming: Matchmaking</span>
<span className="text-[#858585] text-xs">Finding two solo players in a queue whose MMR (Matchmaking Rating) adds up to perfectly balance a team's total required MMR.</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-red-500/10 text-red-400 flex-shrink-0">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<div>
<span className="font-medium text-[#cccccc] block text-sm">Logistics: Container Loading</span>
<span className="text-[#858585] text-xs">Selecting two cargo pallets that sum exactly to the remaining weight capacity of an aircraft or shipping container.</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1e1e1e] p-3 rounded-md border border-[#3c3c3c]">
<h3 className="font-medium text-white mb-2 text-xs uppercase tracking-widest text-[#858585]">Interview Frequency</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-[#252526] rounded-md text-xs border border-[#3c3c3c] flex items-center gap-1">Amazon <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></span>
<span className="px-2 py-1 bg-[#252526] rounded-md text-xs border border-[#3c3c3c] flex items-center gap-1">Google <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></span>
<span className="px-2 py-1 bg-[#252526] rounded-md text-xs border border-[#3c3c3c] flex items-center gap-1">Meta <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div></span>
<span className="px-2 py-1 bg-[#252526] rounded-md text-xs border border-[#3c3c3c] flex items-center gap-1">Microsoft <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div></span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col w-full h-full absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300 bg-[#1e1e1e] overflow-y-auto p-6 z-30" id="view-dashboard">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white">Performance Analytics</h1>
<p className="text-[#858585] mt-1">Track your journey to mastery across 20,000+ problems.</p>
</div>
<div className="flex gap-2">
<select className="bg-[#252526] border border-[#3c3c3c] rounded px-3 py-1 text-sm text-[#cccccc] outline-none">
<option>Last 30 Days</option>
<option>Last 3 Months</option>
<option>Year to Date</option>
</select>
</div>
</div>

<div className="w-full bg-[#252526] border border-[#3c3c3c] rounded-lg p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<div>
<h3 className="font-medium text-white tracking-tight">Skill Rating (ELO Equivalent)</h3>
<div className="flex items-end gap-2 mt-1">
<span className="text-3xl font-semibold text-white tracking-tighter">1,842</span>
<span className="text-green-500 text-sm font-medium flex items-center mb-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> +42 pts
                                    </span>
</div>
</div>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-1 text-[#858585]"><div className="w-2 h-2 rounded-full bg-green-500"></div> Improving</div>
<div className="flex items-center gap-1 text-[#858585]"><div className="w-2 h-2 rounded-full bg-red-500"></div> Declining</div>
</div>
</div>

<div className="w-full h-64 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 200">

<g opacity="0.5" stroke="#3c3c3c" strokeWidth="1">
<line x1="0" x2="1000" y1="40" y2="40"></line>
<line x1="0" x2="1000" y1="80" y2="80"></line>
<line x1="0" x2="1000" y1="120" y2="120"></line>
<line x1="0" x2="1000" y1="160" y2="160"></line>
</g>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M 0 180 L 100 170 L 200 175 L 300 150 L 400 160 L 500 120 L 600 130 L 700 80 L 800 90 L 900 40 L 1000 30 L 1000 200 L 0 200 Z" fill="url(#chartGradient)"></path>

<path className="animate-path" d="M 0 180 L 100 170 L 200 175 L 300 150 L 400 160 L 500 120 L 600 130 L 700 80 L 800 90 L 900 40 L 1000 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-[0.65rem] text-[#858585]">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
<div className="absolute left-[-30px] top-0 h-full flex flex-col justify-between text-[0.65rem] text-[#858585] text-right py-1">
<span>2000</span><span>1800</span><span>1600</span><span>1400</span><span>1200</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5">
<h3 className="font-medium text-white tracking-tight mb-4">Language Mastery</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Python</span> <span className="text-green-400">85%</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{width: '85%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">JavaScript</span> <span className="text-yellow-400">62%</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '62%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">C++</span> <span className="text-red-400">24%</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-red-500 h-1.5 rounded-full" style={{width: '24%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Solidity</span> <span className="text-yellow-400">45%</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '45%'}}></div></div>
</div>
</div>
</div>

<div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5">
<h3 className="font-medium text-white tracking-tight mb-4">Company Readiness Score</h3>
<div className="flex items-end h-32 gap-4 mt-2">
<div className="flex-1 flex flex-col justify-end group">
<div className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-400 relative" style={{height: '75%'}}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] px-1 rounded border border-[#3c3c3c]">75%</span>
</div>
<span className="text-[0.65rem] text-center mt-2 text-[#858585]">Google</span>
</div>
<div className="flex-1 flex flex-col justify-end group">
<div className="w-full bg-orange-500 rounded-t-sm transition-all duration-500 hover:bg-orange-400 relative" style={{height: '60%'}}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] px-1 rounded border border-[#3c3c3c]">60%</span>
</div>
<span className="text-[0.65rem] text-center mt-2 text-[#858585]">Amazon</span>
</div>
<div className="flex-1 flex flex-col justify-end group">
<div className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-400 relative" style={{height: '85%'}}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] px-1 rounded border border-[#3c3c3c]">85%</span>
</div>
<span className="text-[0.65rem] text-center mt-2 text-[#858585]">Meta</span>
</div>
<div className="flex-1 flex flex-col justify-end group">
<div className="w-full bg-red-500 rounded-t-sm transition-all duration-500 hover:bg-red-400 relative" style={{height: '30%'}}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] px-1 rounded border border-[#3c3c3c]">30%</span>
</div>
<span className="text-[0.65rem] text-center mt-2 text-[#858585]">Netflix</span>
</div>
<div className="flex-1 flex flex-col justify-end group">
<div className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-400 relative" style={{height: '70%'}}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] px-1 rounded border border-[#3c3c3c]">70%</span>
</div>
<span className="text-[0.65rem] text-center mt-2 text-[#858585]">Apple</span>
</div>
</div>
</div>

<div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5">
<h3 className="font-medium text-white tracking-tight mb-4">DSA Topic Mastery</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Arrays &amp; Strings</span> <span className="text-[#858585]">92/100</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-[#569cd6] h-1.5 rounded-full" style={{width: '92%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Hash Tables</span> <span className="text-[#858585]">85/100</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-[#569cd6] h-1.5 rounded-full" style={{width: '85%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Dynamic Programming</span> <span className="text-[#858585]">30/100</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-[#dcdcaa] h-1.5 rounded-full" style={{width: '30%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Graphs</span> <span className="text-[#858585]">45/100</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-[#dcdcaa] h-1.5 rounded-full" style={{width: '45%'}}></div></div>
</div>
</div>
</div>

<div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5">
<h3 className="font-medium text-white tracking-tight mb-4">Application Knowledge Sectors</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Finance / Fintech</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{width: '80%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">E-commerce</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{width: '65%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">Healthcare Systems</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{width: '40%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="text-[#cccccc]">AI / Machine Learning</span></div>
<div className="w-full bg-[#1e1e1e] rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{width: '25%'}}></div></div>
</div>
</div>
</div>
</div>
<div className="h-10"></div> 
</div>
</div>

<div className="h-48 bg-[#1e1e1e] border-t border-[#3c3c3c] flex flex-col flex-shrink-0 z-20">

<div className="flex justify-between items-center pr-4">
<div className="flex text-xs text-[#858585]">
<div className="px-4 py-1.5 border-b border-transparent hover:text-[#cccccc] cursor-pointer tracking-tight">PROBLEMS <span className="bg-[#3c3c3c] rounded-full px-1.5 ml-1 text-[0.65rem]">2</span></div>
<div className="px-4 py-1.5 border-b border-blue-500 text-white cursor-pointer tracking-tight">OUTPUT</div>
<div className="px-4 py-1.5 border-b border-transparent hover:text-[#cccccc] cursor-pointer tracking-tight">DEBUG CONSOLE</div>
<div className="px-4 py-1.5 border-b border-transparent hover:text-[#cccccc] cursor-pointer tracking-tight">TERMINAL</div>
<div className="px-4 py-1.5 border-b border-transparent hover:text-[#cccccc] cursor-pointer tracking-tight">PORTS</div>
</div>
<div className="flex items-center gap-3 text-[#cccccc] opacity-80">
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:maximize-square-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:close-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 p-3 font-mono text-xs overflow-y-auto bg-[#1e1e1e] text-[#cccccc]">
<div className="opacity-50">[Running] python -u "/Users/codeverse/dsa/arrays/two_sum.py"</div>
<br/>
<div className="text-green-400">✅ Test Case 1 Passed! (2ms)</div>
<div>Input: nums = [2,7,11,15], target = 9</div>
<div>Output: [0,1]</div>
<br/>
<div className="text-green-400">✅ Test Case 2 Passed! (1ms)</div>
<div>Input: nums = [3,2,4], target = 6</div>
<div>Output: [1,2]</div>
<br/>
<div className="text-green-400">✅ Test Case 3 Passed! (1ms)</div>
<div>Input: nums = [3,3], target = 6</div>
<div>Output: [0,1]</div>
<br/>
<div className="font-semibold text-blue-400">Score: +10 XP</div>
<div className="opacity-50 mt-2">[Done] exited with code=0 in 0.042 seconds</div>
</div>
</div>
</div>
</div>

<div className="h-6 flex-shrink-0 bg-[#007acc] text-white flex justify-between items-center px-2 text-[0.7rem] select-none z-30">
<div className="flex items-center gap-3 h-full">
<div className="flex items-center gap-1 hover:bg-[#ffffff2a] px-1 h-full cursor-pointer transition-colors">
<iconify-icon icon="solar:git-branch-linear"></iconify-icon> main
            </div>
<div className="flex items-center gap-1 hover:bg-[#ffffff2a] px-1 h-full cursor-pointer transition-colors">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-1 hover:bg-[#ffffff2a] px-1 h-full cursor-pointer transition-colors">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> 0
                <iconify-icon className="ml-1" icon="solar:danger-triangle-linear"></iconify-icon> 0
            </div>
<div className="flex items-center gap-1 hover:bg-[#ffffff2a] px-1 h-full cursor-pointer transition-colors ml-2 bg-[#ffffff2a] rounded-sm">
<iconify-icon className="text-yellow-300" icon="solar:cup-star-linear"></iconify-icon> Streak: 14 Days
            </div>
</div>
<div className="flex items-center gap-3 h-full">
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors">Ln 9, Col 23</div>
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors">Spaces: 4</div>
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors">UTF-8</div>
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors">CRLF</div>
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors flex gap-1">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Python
            </div>
<div className="hover:bg-[#ffffff2a] px-1 h-full flex items-center cursor-pointer transition-colors">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
</div>
</div>


    </>
  );
}
