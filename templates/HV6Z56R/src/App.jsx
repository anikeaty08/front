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
      
hfyh
  
<header className="flex items-center bg-gray-800 px-6 py-3 border-b border-gray-700">
<svg className="w-6 h-6 text-indigo-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="font-semibold text-lg">main.py</span>
<div className="ml-auto flex items-center gap-4">
<button className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Run</button>
<button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">Save</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-56 bg-gray-800 border-r border-gray-700 flex flex-col p-4">
<h2 className="font-bold mb-4 text-gray-300 text-sm tracking-wide">EXPLORER</h2>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2 px-2 py-1 rounded bg-gray-700">
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M2 4a2 2 0 012-2h3.172a2 2 0 011.414.586l.828.828A2 2 0 0010.828 4H16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"></path></svg>
<span>main.py</span>
</li>
<li className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700">
<svg className="w-4 h-4 text-blue-400" fill="currentColor" viewbox="0 0 20 20"><path d="M17 8V6a2 2 0 00-2-2h-2V2H7v2H5a2 2 0 00-2 2v2h14z"></path><path clip-rule="evenodd" d="M3 10v4a2 2 0 002 2h10a2 2 0 002-2v-4H3zm2 2a1 1 0 102 0 1 1 0 00-2 0z" fill-rule="evenodd"></path></svg>
<span>utils.js</span>
</li>
<li className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700">
<svg className="w-4 h-4 text-green-400" fill="currentColor" viewbox="0 0 20 20"><path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"></path><path d="M7 7h6v2H7V7z"></path></svg>
<span>README.md</span>
</li>
</ul>
<button className="mt-6 flex items-center text-xs text-gray-400 hover:text-indigo-400">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
        New File
      </button>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<div className="flex-1 relative overflow-auto bg-gray-900">
<div className="flex h-full">

<div className="py-4 px-2 text-right select-none bg-gray-800 text-gray-500 text-xs leading-6">
<pre>1
2
3
4
5
6
7
8
9
10</pre>
</div>

<textarea className="flex-1 py-4 px-4 bg-transparent font-mono text-sm outline-none resize-none text-gray-100 leading-6" rows="10" spellcheck="false" style={{minHeight: '100%'}}>def greet(name):
    print(f"Hello, {name}!")

greet("World")
</textarea>
</div>
</div>

<footer className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex items-center">
        Ln 1, Col 1
        <span className="mx-2">|</span>
        Spaces: 4
        <span className="mx-2">|</span>
        UTF-8
        <span className="mx-2">|</span>
        Python
      </footer>
</main>
</div>

    </>
  );
}
