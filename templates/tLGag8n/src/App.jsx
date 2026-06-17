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
      
<div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-xl border border-gray-700">

<div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
<div className="flex items-center">
<div className="flex space-x-2 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 border border-red-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-yellow-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-green-600"></div>
</div>
<div className="text-gray-300 font-medium">index.html</div>
</div>
<button className="text-gray-300 hover:text-gray-100 px-2 py-1 rounded border border-gray-600 hover:bg-gray-700 transition text-xs">
<svg className="h-3 w-3 inline-block mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Copy
            </button>
</div>

<div className="bg-gray-800 flex divide-x divide-gray-700">

<div className="bg-gray-900 text-gray-500 py-3 px-2 text-right select-none w-10">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
</div>

<div className="py-3 px-3 overflow-auto w-full bg-gray-800">
<pre><code><span className="text-blue-400">&lt;!DOCTYPE html&gt;</span>
<span className="text-blue-400">&lt;html</span> <span className="text-green-400">lang=</span><span className="text-amber-400">"en"</span><span className="text-blue-400">&gt;</span>
<span className="text-blue-400">&lt;head&gt;</span>
  <span className="text-blue-400">&lt;meta</span> <span className="text-green-400">charset=</span><span className="text-amber-400">"UTF-8"</span><span className="text-blue-400">&gt;</span>
  <span className="text-blue-400">&lt;title&gt;</span><span className="text-gray-300">My Website</span><span className="text-blue-400">&lt;/title&gt;</span>
  <span className="text-blue-400">&lt;link</span> <span className="text-green-400">rel=</span><span className="text-amber-400">"stylesheet"</span> <span className="text-green-400">href=</span><span className="text-amber-400">"styles.css"</span><span className="text-blue-400">&gt;</span>
<span className="text-blue-400">&lt;/head&gt;</span>
<span className="text-blue-400">&lt;body&gt;</span></code></pre>
</div>
</div>

<div className="bg-gray-950 p-3 border-t border-gray-800">
<div className="text-gray-300">
<div className="mb-1"><span className="text-green-400">$</span> npm start</div>
<div className="mb-1 text-blue-300">&gt; Starting development server...</div>
<div className="text-green-400">&gt; Server running at http://localhost:3000</div>
</div>
</div>

<div className="bg-gray-800 px-3 py-1 border-t border-gray-700 flex justify-between items-center text-gray-400 text-xs">
<div className="flex items-center space-x-3">
<span>HTML</span>
<span>UTF-8</span>
</div>
<div className="flex items-center space-x-3">
<span>Ln 8, Col 7</span>
<span>Spaces: 2</span>
<span>8 lines</span>
</div>
</div>
</div>

    </>
  );
}
