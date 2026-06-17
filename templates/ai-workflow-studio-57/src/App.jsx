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



tailwind.config = {
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4', // Background
200: '#e7e5e4', // Border/Neutral
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
blue: {
500: '#3b82f6', // Accent
600: '#2563eb',
}
},
boxShadow: {
'beautiful': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)',
}
}
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
      

<nav className="h-14 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm flex items-center justify-between px-4 z-50 absolute top-0 w-full">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-stone-800 to-stone-600 dark:from-stone-200 dark:to-stone-400 rounded-lg shadow-sm">
<span className="iconify text-white dark:text-stone-900" data-icon="lucide:network" data-width="18" strokeWidth="1.5"></span>
</div>
<span className="font-medium tracking-tight text-sm text-stone-800 dark:text-stone-100">FLOWSTATE</span>
<span className="bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-[10px] px-1.5 py-0.5 rounded-md font-medium">BETA</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-md p-0.5 border border-stone-200 dark:border-stone-700">
<button className="px-2 py-1 rounded bg-white dark:bg-stone-700 shadow-sm text-xs font-medium text-stone-700 dark:text-stone-200">Editor</button>
<button className="px-2 py-1 rounded hover:bg-stone-200 dark:hover:bg-stone-700/50 text-xs font-medium text-stone-500 transition-colors">Logs</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 text-xs font-medium rounded-md transition-all">
<span className="iconify" data-icon="lucide:share-2" data-width="14"></span>
                Share
            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-md shadow-sm transition-all">
<span className="iconify" data-icon="lucide:play" data-width="14"></span>
                Run Workflow
            </button>
<div className="w-8 h-8 rounded-full bg-stone-300 dark:bg-stone-700 overflow-hidden border border-stone-200 dark:border-stone-600">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
</div>
</nav>

<main className="flex-1 relative w-full h-full pt-14 flex">

<aside className="w-64 bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 flex flex-col z-40 hidden md:flex shadow-sm">
<div className="p-4 border-b border-stone-200 dark:border-stone-800">
<div className="relative">
<span className="iconify absolute left-2.5 top-2 text-stone-400" data-icon="lucide:search" data-width="14"></span>
<input className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-stone-600 dark:text-stone-300 placeholder:text-stone-400" placeholder="Search nodes..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-6 no-scrollbar">

<div>
<h3 className="px-2 text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-2">Generative AI</h3>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md group transition-colors text-left">
<div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-stone-700 dark:text-stone-200">LLM Generation</div>
<div className="text-[10px] text-stone-400">OpenAI, Anthropic</div>
</div>
</button>
<button className="w-full flex items-center gap-3 px-2 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md group transition-colors text-left">
<div className="p-1.5 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-stone-700 dark:text-stone-200">Image Gen</div>
<div className="text-[10px] text-stone-400">Stable Diffusion, DALL-E</div>
</div>
</button>
</div>
</div>

<div>
<h3 className="px-2 text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-2">Logic &amp; Code</h3>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md group transition-colors text-left">
<div className="p-1.5 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-500 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-stone-700 dark:text-stone-200">Custom JS</div>
<div className="text-[10px] text-stone-400">Run Javascript code</div>
</div>
</button>
<button className="w-full flex items-center gap-3 px-2 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md group transition-colors text-left">
<div className="p-1.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 group-hover:bg-stone-200 dark:group-hover:bg-stone-700">
<span className="iconify" data-icon="lucide:git-branch" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-stone-700 dark:text-stone-200">Condition</div>
<div className="text-[10px] text-stone-400">If/Else Logic</div>
</div>
</button>
</div>
</div>
</div>
<div className="p-4 border-t border-stone-200 dark:border-stone-800">
<div className="flex items-center justify-between text-xs text-stone-400">
<span>2,403 Tokens</span>
<span>$0.04</span>
</div>
<div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-blue-500 h-full w-[25%] rounded-full"></div>
</div>
</div>
</aside>

<div className="flex-1 relative overflow-hidden bg-stone-100 dark:bg-stone-950 bg-grid-pattern cursor-grab active:cursor-grabbing">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">

<path className="dark:stroke-stone-700" d="M 380 180 C 480 180, 480 250, 580 250" fill="none" stroke="#d6d3d1" strokeWidth="2"></path>

<path className="dark:stroke-stone-700" d="M 880 250 C 930 250, 930 400, 980 400" fill="none" stroke="#d6d3d1" strokeWidth="2"></path>

<path className="dark:stroke-stone-700" d="M 880 320 C 930 320, 930 180, 980 180" fill="none" stroke="#d6d3d1" strokeWidth="2"></path>
</svg>

<div className="absolute top-[120px] left-[80px] w-[300px] bg-white dark:bg-stone-900 rounded-xl shadow-beautiful border border-stone-200 dark:border-stone-800 z-10 group">

<div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 dark:border-stone-800/50">
<div className="flex items-center gap-2">
<div className="bg-stone-100 dark:bg-stone-800 p-1 rounded-md text-stone-600 dark:text-stone-300">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span>
</div>
<span className="text-sm font-medium text-stone-800 dark:text-stone-100">Webhook Trigger</span>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>

<div className="p-4 space-y-3">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5">Method</label>
<div className="relative">
<select className="w-full appearance-none bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500/30">
<option>POST</option>
<option>GET</option>
</select>
<span className="iconify absolute right-2.5 top-2.5 text-stone-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5">Payload Schema</label>
<div className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md p-2 font-mono text-[10px] text-stone-600 dark:text-stone-400 leading-tight">
                            {<br/>  "prompt": "string",<br/>  "style": "string"<br/>}
                        </div>
</div>
</div>

<div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-stone-300 dark:border-stone-500 rounded-full cursor-crosshair hover:scale-125 transition-transform hover:border-blue-500"></div>
</div>

<div className="absolute top-[180px] left-[580px] w-[300px] bg-white dark:bg-stone-900 rounded-xl shadow-beautiful border border-blue-500/30 ring-1 ring-blue-500/30 z-20">

<div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-blue-500 rounded-full cursor-crosshair"></div>

<div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 dark:border-stone-800/50 bg-blue-50/30 dark:bg-blue-900/10">
<div className="flex items-center gap-2">
<div className="bg-amber-100 dark:bg-amber-900/30 p-1 rounded-md text-amber-600 dark:text-amber-500">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
</div>
<span className="text-sm font-medium text-stone-800 dark:text-stone-100">Prompt Builder</span>
</div>
<button className="text-stone-400 hover:text-stone-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>

<div className="p-0">
<div className="bg-[#292524] p-3 overflow-x-auto">
<code className="font-mono text-[11px] leading-relaxed">
<span className="text-purple-400">const</span> <span className="text-blue-400">process</span> = (input) =&gt; {<br/>
                              <span className="text-stone-400">// Extract style</span><br/>
                              <span className="text-purple-400">return</span> <span className="text-green-400">`Create a ${input.style} image of ${input.prompt}`</span>;<br/>
                            }
                        </code>
</div>
<div className="p-3 bg-stone-50 dark:bg-stone-950/50 border-t border-stone-100 dark:border-stone-800 flex justify-between items-center">
<span className="text-[10px] text-stone-500 font-mono">Output: String</span>
<button className="text-[10px] font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:maximize-2" data-width="10"></span> Expand
                        </button>
</div>
</div>

<div className="absolute top-[30%] -right-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-stone-300 dark:border-stone-500 rounded-full cursor-crosshair hover:scale-125 transition-transform"></div>
<div className="absolute top-[70%] -right-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-stone-300 dark:border-stone-500 rounded-full cursor-crosshair hover:scale-125 transition-transform"></div>
</div>

<div className="absolute top-[100px] left-[980px] w-[300px] bg-white dark:bg-stone-900 rounded-xl shadow-beautiful border border-stone-200 dark:border-stone-800 z-10">

<div className="absolute top-[40%] -left-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-blue-500 rounded-full cursor-crosshair"></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 dark:border-stone-800/50">
<div className="flex items-center gap-2">
<div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-md text-purple-600 dark:text-purple-500">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
</div>
<span className="text-sm font-medium text-stone-800 dark:text-stone-100">SDXL Generator</span>
</div>
</div>
<div className="p-4 space-y-4">
<div>
<label className="flex justify-between text-xs font-medium text-stone-500 mb-1.5">
<span>Prompt Strength</span>
<span className="text-stone-800 dark:text-stone-200">7.5</span>
</label>
<input max="10" min="1" step="0.1" type="range" value="7.5"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5">Aspect Ratio</label>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center justify-center p-2 rounded border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:border-blue-500 transition-colors">
<div className="w-3 h-3 border border-stone-400 rounded-sm mb-1 bg-white dark:bg-stone-600"></div>
<span className="text-[10px] text-stone-500">1:1</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded border border-blue-500 bg-blue-50 dark:bg-blue-900/20 transition-colors">
<div className="w-4 h-3 border border-blue-500 rounded-sm mb-1 bg-white dark:bg-stone-600"></div>
<span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">4:3</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:border-blue-500 transition-colors">
<div className="w-3 h-4 border border-stone-400 rounded-sm mb-1 bg-white dark:bg-stone-600"></div>
<span className="text-[10px] text-stone-500">9:16</span>
</button>
</div>
</div>

<div className="w-full aspect-[4/3] bg-stone-100 dark:bg-stone-950 rounded-lg border border-dashed border-stone-300 dark:border-stone-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-medium">PNG</div>
</div>
</div>
</div>

<div className="absolute top-[480px] left-[980px] w-[300px] bg-white dark:bg-stone-900 rounded-xl shadow-beautiful border border-stone-200 dark:border-stone-800 z-10">

<div className="absolute top-[20%] -left-1.5 w-3 h-3 bg-white dark:bg-stone-700 border-2 border-blue-500 rounded-full cursor-crosshair"></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 dark:border-stone-800/50">
<div className="flex items-center gap-2">
<div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-md text-blue-600 dark:text-blue-500">
<span className="iconify" data-icon="lucide:bot" data-width="14"></span>
</div>
<span className="text-sm font-medium text-stone-800 dark:text-stone-100">GPT-4 Caption</span>
</div>
</div>
<div className="p-4 space-y-3">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5">System Prompt</label>
<textarea className="w-full h-16 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md p-2 text-xs text-stone-700 dark:text-stone-300 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/30 placeholder:text-stone-400" placeholder="You are a helpful assistant..."></textarea>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-stone-600 dark:text-stone-400">Stream Response</span>

<button className="w-8 h-4 bg-stone-300 dark:bg-stone-700 rounded-full relative transition-colors focus:outline-none">
<span className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform transform translate-x-0"></span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 flex flex-col gap-2">
<div className="bg-white dark:bg-stone-900 p-1 rounded-lg shadow-beautiful border border-stone-200 dark:border-stone-800 flex flex-col gap-1">
<button className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md text-stone-500 dark:text-stone-400 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
<button className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md text-stone-500 dark:text-stone-400 transition-colors">
<span className="iconify" data-icon="lucide:minus" data-width="16"></span>
</button>
</div>
<div className="bg-white dark:bg-stone-900 px-3 py-1.5 rounded-lg shadow-beautiful border border-stone-200 dark:border-stone-800">
<span className="text-xs font-mono text-stone-500">100%</span>
</div>
</div>
</div>

<aside className="w-80 bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 flex flex-col z-30 hidden lg:flex shadow-[-5px_0px_30px_-5px_rgba(0,0,0,0.05)]">
<div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
<h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100 tracking-tight">Configuration</h2>
<button className="text-stone-400 hover:text-stone-600"><span className="iconify" data-icon="lucide:x" data-width="14"></span></button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-stone-900 dark:text-stone-100">Prompt Builder</div>
<div className="text-xs text-stone-500">Custom JS Function</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Settings</label>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 dark:text-stone-300">Node Name</label>
<input className="w-full bg-transparent border-b border-stone-200 dark:border-stone-700 py-1 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-blue-500 transition-colors" type="text" value="Prompt Builder"/>
</div>
<div className="space-y-1.5 pt-2">
<label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center gap-2">
                            Timeout (ms)
                            <span className="iconify text-stone-400" data-icon="lucide:info" data-width="12"></span>
</label>
<input className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md px-3 py-2 text-xs text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-1 focus:ring-blue-500/30" type="number" value="5000"/>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex justify-between items-center">
                        Dependencies
                        <button className="text-blue-500 hover:text-blue-600"><span className="iconify" data-icon="lucide:plus" data-width="14"></span></button>
</label>
<div className="flex flex-wrap gap-2">
<div className="px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
<span className="text-[10px] font-medium text-stone-600 dark:text-stone-300">lodash</span>
<button className="text-stone-400 hover:text-red-500"><span className="iconify" data-icon="lucide:x" data-width="10"></span></button>
</div>
<div className="px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
<span className="text-[10px] font-medium text-stone-600 dark:text-stone-300">axios</span>
<button className="text-stone-400 hover:text-red-500"><span className="iconify" data-icon="lucide:x" data-width="10"></span></button>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Last Output</label>
<div className="w-full h-32 bg-stone-900 rounded-md p-3 overflow-auto border border-stone-800">
<code className="font-mono text-[10px] text-green-400">
                            &gt; "Create a cyberpunk image of a cat"<br/>
<span className="text-stone-500">// Execution time: 12ms</span>
</code>
</div>
</div>
</div>
<div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/50">
<button className="w-full py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md shadow-sm text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 hover:border-red-200 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
                    Delete Node
                </button>
</div>
</aside>
</main>

    </>
  );
}
