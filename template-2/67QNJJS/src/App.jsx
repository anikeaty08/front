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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      
<div className="rounded-xl shadow-2xl bg-gray-800 p-2 w-[800px] h-[600px] flex flex-col justify-center" style={{boxShadow: `0 50px 100px -20px rgba(0,0,0,0.5),0 30px 60px -30px rgba(0,0,0,0.4),inset 0 -2px 6px 0 rgba(0,0,0,0.35)`}}>
<div className="rounded-lg bg-gray-900 h-full flex flex-col justify-between relative overflow-hidden">

<div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
<div className="flex items-center space-x-2">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<h1 className="text-gray-200 text-xs font-medium ml-4">CodeCraft IDE</h1>
</div>
<div className="flex items-center space-x-4">
<div className="text-gray-500 hover:text-gray-300">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-gray-500 hover:text-gray-300">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
<div className="flex items-center space-x-2 mb-6">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h2 className="text-gray-200 text-xs font-medium">Projects</h2>
</div>
<div className="space-y-1">
<div className="bg-purple-900/30 text-purple-300 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">React App</span>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="text-gray-400 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Node.js API</span>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
<div className="text-gray-400 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Python ML</span>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
</div>
<div className="text-gray-400 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Vue Dashboard</span>
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
</div>
<div className="text-gray-400 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Mobile App</span>
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-700">
<div className="flex items-center justify-between text-gray-500 text-xs mb-2">
<span>Last build</span>
<span>2m ago</span>
</div>
<button className="w-full bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 rounded-md py-1.5 text-xs mt-4 flex items-center justify-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                            Run Project
                        </button>
</div>
</div>

<div className="flex-1 bg-gradient-to-b from-gray-900 to-gray-800 overflow-y-auto">
<div className="p-6">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-gray-200 text-xl font-semibold">React App</h1>
<p className="text-gray-400 text-xs">src/components/Dashboard.jsx • Modified 5m ago</p>
</div>
<div className="flex space-x-2">
<button className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 rounded-md px-2 py-1 text-xs">Dev</button>
<button className="bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md px-2 py-1 text-xs">Prod</button>
</div>
</div>

<div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 flex items-start">
<div className="flex flex-col text-gray-500 text-xs mr-4 code-font">
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
</div>
<div className="flex-1 code-font text-sm">
<div className="text-purple-400">import React from 'react';</div>
<div className="text-purple-400">import {"{"} useState, useEffect {"}"} from 'react';</div>
<div className="text-gray-400"></div>
<div className="text-blue-400">const <span className="text-yellow-300">Dashboard</span> = () ={">"} {"{"}</div>
<div className="ml-4 text-blue-400">const [<span className="text-red-400">data</span>, <span className="text-red-400">setData</span>] = <span className="text-yellow-300">useState</span>(<span className="text-green-400">null</span>);</div>
<div className="text-blue-400">{"}"}</div>
</div>
</div>

<div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
<h3 className="text-gray-200 text-xs font-medium mb-3">Development Metrics</h3>
<div className="grid grid-cols-5 gap-3">
<div className="bg-gray-800 rounded-lg p-2 text-center">
<p className="text-gray-400 text-xs">Tests</p>
<div className="w-6 h-6 mx-auto my-1 text-green-400">✓</div>
<p className="text-gray-200 text-xs font-medium">98%</p>
<p className="text-gray-500 text-xs">Passed</p>
</div>
<div className="bg-gray-800 rounded-lg p-2 text-center">
<p className="text-gray-400 text-xs">Build</p>
<div className="w-6 h-6 mx-auto my-1 text-blue-400">⚡</div>
<p className="text-gray-200 text-xs font-medium">2.1s</p>
<p className="text-gray-500 text-xs">Fast</p>
</div>
<div className="bg-gray-800 rounded-lg p-2 text-center">
<p className="text-gray-400 text-xs">Size</p>
<div className="w-6 h-6 mx-auto my-1 text-yellow-400">📦</div>
<p className="text-gray-200 text-xs font-medium">2.4MB</p>
<p className="text-gray-500 text-xs">Gzipped</p>
</div>
<div className="bg-gray-800 rounded-lg p-2 text-center">
<p className="text-gray-400 text-xs">Score</p>
<div className="w-6 h-6 mx-auto my-1 text-green-400">🎯</div>
<p className="text-gray-200 text-xs font-medium">95</p>
<p className="text-gray-500 text-xs">Lighthouse</p>
</div>
<div className="bg-gray-800 rounded-lg p-2 text-center">
<p className="text-gray-400 text-xs">Deploy</p>
<div className="w-6 h-6 mx-auto my-1 text-purple-400">🚀</div>
<p className="text-gray-200 text-xs font-medium">Live</p>
<p className="text-gray-500 text-xs">Vercel</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-3">
<h3 className="text-gray-200 text-xs font-medium">Performance</h3>
<span className="text-[10px] text-green-400 bg-green-900/30 px-2 py-0.5 rounded-full">Excellent</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-gray-400 text-xs">Bundle Size</span>
<span className="text-gray-200 text-xs font-medium">2.4MB</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-1 mb-3">
<div className="bg-green-500 h-1 rounded-full" style={{width: `85%`}}></div>
</div>
<div className="grid grid-cols-3 gap-2 text-center mt-2">
<div className="bg-gray-800 rounded-lg p-1.5">
<p className="text-gray-400 text-[10px]">CPU</p>
<p className="text-gray-200 text-xs font-medium mt-0.5">12%</p>
</div>
<div className="bg-gray-800 rounded-lg p-1.5">
<p className="text-gray-400 text-[10px]">Memory</p>
<p className="text-gray-200 text-xs font-medium mt-0.5">45MB</p>
</div>
<div className="bg-gray-800 rounded-lg p-1.5">
<p className="text-gray-400 text-[10px]">FPS</p>
<p className="text-gray-200 text-xs font-medium mt-0.5">60</p>
</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
<h3 className="text-gray-200 text-xs font-medium mb-3">Git Status</h3>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Branch</span>
<span className="text-gray-200 text-xs">feature/dashboard</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Commits ahead</span>
<span className="text-gray-200 text-xs">3</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Modified files</span>
<span className="text-gray-200 text-xs">5</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Last commit</span>
<span className="text-gray-200 text-xs">2h ago</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Author</span>
<span className="text-gray-200 text-xs">john.doe</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-xs">Coverage</span>
<span className="text-gray-200 text-xs">98.2%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-800 border-t border-gray-700 px-4 py-1.5 flex justify-between items-center text-[10px] text-gray-400">
<div>Node.js v18.17.0 • React 18.2.0 • TypeScript 5.1.6</div>
<div className="flex items-center">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
<span>Connected</span>
</div>
</div>
</div>
</div>

    </>
  );
}
