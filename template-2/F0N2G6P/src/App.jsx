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
      
<div className="w-full max-w-lg mx-auto rounded-xl bg-stone-50 border border-stone-200 shadow-md">

<div className="flex items-center px-4 py-2 bg-stone-200 rounded-t-xl border-b border-stone-200">
<div className="flex space-x-1">
<span className="block w-2.5 h-2.5 bg-stone-400 rounded-full"></span>
<span className="block w-2.5 h-2.5 bg-stone-300 rounded-full"></span>
<span className="block w-2.5 h-2.5 bg-stone-300 rounded-full"></span>
</div>
<div className="flex-1 mx-3">
<div className="bg-stone-100 rounded px-3 py-0.5 text-xs text-stone-400 geist-mono truncate">
          https://snippet.dev/minimal
        </div>
</div>
</div>

<div className="p-5 bg-stone-50 rounded-b-xl">
<pre className="geist-mono text-xs leading-relaxed text-stone-700 bg-stone-100 rounded-lg p-4 overflow-x-auto"><code>
<span className="text-stone-500">// Minimal JavaScript example</span>
<span className="text-blue-700">function</span> <span className="text-stone-900">greet</span>(name) {"{"}
  <span className="text-blue-700">return</span> <span className="text-rose-700">`Hello, ${"{"}name{"}"}!`</span>;
{"}"}
<span className="text-stone-500">// Usage:</span>
console.log(greet(<span className="text-rose-700">'World'</span>));
      </code></pre>
</div>
</div>

    </>
  );
}
