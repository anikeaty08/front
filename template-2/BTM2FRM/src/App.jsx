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
      

<header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
<div className="flex items-center gap-2 text-xl font-bold text-gray-800">
<i className="fa-solid fa-brain text-blue-600"></i>
      AI Interface
    </div>
<div className="flex items-center gap-6">
<span className="text-gray-500">User: <span className="font-semibold">Alex</span></span>
<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
<i className="fa-solid fa-cog"></i>
</button>
</div>
</header>
<main className="flex-1 flex flex-col lg:flex-row gap-6 p-6">

<aside className="w-full lg:w-72 flex flex-col gap-6">

<section className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
<span className="text-xs text-gray-400">Agents Active</span>
<span className="text-2xl font-bold text-blue-700 mt-1">12</span>
</div>
<div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
<span className="text-xs text-gray-400">Tasks Running</span>
<span className="text-2xl font-bold text-green-600 mt-1">7</span>
</div>
<div className="bg-white rounded-xl shadow p-4 flex flex-col items-center col-span-2">
<span className="text-xs text-gray-400">Overall Progress</span>
<div className="w-full bg-gray-200 rounded-full h-3 mt-1">
<div className="bg-blue-500 h-3 rounded-full" style={{width: `63%`}}></div>
</div>
<span className="text-sm text-gray-600 mt-1">63%</span>
</div>
</section>

<section className="bg-white rounded-xl shadow flex-1 p-4">
<h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
<i className="fa-solid fa-list-check text-blue-500"></i>
          Ongoing Tasks
        </h2>
<ul className="divide-y divide-gray-100">
<li className="py-3 flex items-start gap-3">
<div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-gray-700">Website Generation</span>
<span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">Active</span>
</div>
<span className="text-xs text-gray-400">Agent: WebGen-3</span>
<div className="w-full bg-gray-200 h-2 rounded mt-2">
<div className="bg-blue-400 h-2 rounded" style={{width: `78%`}}></div>
</div>
</div>
</li>
<li className="py-3 flex items-start gap-3">
<div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-gray-700">Image Generation</span>
<span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded">Pending</span>
</div>
<span className="text-xs text-gray-400">Agent: VisionX</span>
<div className="w-full bg-gray-200 h-2 rounded mt-2">
<div className="bg-yellow-400 h-2 rounded" style={{width: `40%`}}></div>
</div>
</div>
</li>
<li className="py-3 flex items-start gap-3">
<div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-gray-700">Code Generation</span>
<span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Active</span>
</div>
<span className="text-xs text-gray-400">Agent: CodeAI</span>
<div className="w-full bg-gray-200 h-2 rounded mt-2">
<div className="bg-blue-600 h-2 rounded" style={{width: `92%`}}></div>
</div>
</div>
</li>
<li className="py-3 flex items-start gap-3">
<div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-gray-700">Text Summarization</span>
<span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">Queued</span>
</div>
<span className="text-xs text-gray-400">Agent: Summarizer</span>
<div className="w-full bg-gray-200 h-2 rounded mt-2">
<div className="bg-gray-300 h-2 rounded" style={{width: `10%`}}></div>
</div>
</div>
</li>
</ul>
</section>
</aside>

<section className="flex-1 flex flex-col gap-6">

<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
<h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
<i className="fa-solid fa-comments text-blue-400"></i>
          Chat with AI
        </h2>
<div className="flex flex-col gap-3 max-h-52 overflow-y-auto mb-2">

<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">A</div>
<div className="bg-blue-50 rounded-xl px-4 py-2 max-w-xs text-gray-800 text-sm">
              Hi! What can I help you with today?
            </div>
</div>
<div className="flex gap-3 items-start flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">U</div>
<div className="bg-gray-100 rounded-xl px-4 py-2 max-w-xs text-gray-700 text-sm">
              Generate a landing page for a travel agency.
            </div>
</div>
</div>
<form className="flex items-center gap-2">
<input className="flex-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm" placeholder="Type your message..." type="text" />
<button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white" type="button">
<i className="fa-solid fa-microphone"></i>
</button>
<button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white" type="submit">
<i className="fa-solid fa-paper-plane"></i>
</button>
</form>
</div>

<div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col">
<h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
<i className="fa-solid fa-eye text-violet-500"></i>
          Agent Output Previews
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">

<div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<i className="fa-solid fa-globe text-blue-600"></i>
<span className="text-sm font-medium text-gray-700">Website Preview</span>
</div>
<div className="flex-1 bg-white rounded-md border border-gray-200 h-32 flex items-center justify-center text-gray-400 text-xs">
<span>[Website Screenshot]</span>
</div>
<div className="text-xs text-gray-400 mt-2">Agent: WebGen-3</div>
</div>

<div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<i className="fa-solid fa-code text-green-700"></i>
<span className="text-sm font-medium text-gray-700">Code Generation</span>
</div>
<pre className="flex-1 bg-black text-green-200 rounded-md h-32 overflow-auto text-xs p-2 font-mono">
{"<"}html{">"}
  {"<"}head{">"}{"<"}/head{">"}
  {"<"}body{">"}
    {"<"}h1{">"}Travel Agency Landing Page{"<"}/h1{">"}
    ...
  {"<"}/body{">"}
{"<"}/html{">"}
            </pre>
<div className="text-xs text-gray-400 mt-2">Agent: CodeAI</div>
</div>

<div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<i className="fa-solid fa-align-left text-indigo-500"></i>
<span className="text-sm font-medium text-gray-700">Text Generation</span>
</div>
<div className="flex-1 bg-white rounded-md border border-gray-200 h-32 overflow-auto text-xs p-3 text-gray-800">
              Discover your next adventure with our curated travel experiences across the globe...
            </div>
<div className="text-xs text-gray-400 mt-2">Agent: TextMaster</div>
</div>

<div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<i className="fa-solid fa-image text-pink-500"></i>
<span className="text-sm font-medium text-gray-700">Image Output</span>
</div>
<div className="flex-1 bg-white rounded-md border border-gray-200 h-32 flex items-center justify-center">
<img alt="Generated" className="h-24 rounded shadow" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" />
</div>
<div className="text-xs text-gray-400 mt-2">Agent: VisionX</div>
</div>

<div className="rounded-lg border border-gray-100 bg-gray-50 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<i className="fa-solid fa-vr-cardboard text-orange-500"></i>
<span className="text-sm font-medium text-gray-700">AR Interface</span>
</div>
<div className="flex-1 bg-white rounded-md border border-gray-200 h-32 flex items-center justify-center text-gray-400 text-xs">
<span>[AR Preview Placeholder]</span>
</div>
<div className="text-xs text-gray-400 mt-2">Agent: ARMaker</div>
</div>

</div>
</div>
</section>
</main>

    </>
  );
}
