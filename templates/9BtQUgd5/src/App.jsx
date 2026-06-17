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
      
<div className="w-full max-w-4xl">
<div className="rounded-lg overflow-hidden shadow-xl border border-gray-700">

<div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 flex border-b border-gray-700">
<button className="py-3 px-4 text-white font-medium relative hover:bg-gray-700 transition-colors">
                    JavaScript
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
</button>
<button className="py-3 px-4 text-gray-400 font-medium hover:text-white hover:bg-gray-700 transition-colors">Python</button>
<button className="py-3 px-4 text-gray-400 font-medium hover:text-white hover:bg-gray-700 transition-colors">Java</button>
<button className="py-3 px-4 text-gray-400 font-medium hover:text-white hover:bg-gray-700 transition-colors">C#</button>
<button className="py-3 px-4 text-gray-400 font-medium hover:text-white hover:bg-gray-700 transition-colors">Ruby</button>
<button className="py-3 px-4 text-gray-400 font-medium hover:text-white hover:bg-gray-700 transition-colors">Go</button>
</div>

<div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 font-mono text-sm">
<div className="flex">
<div className="text-gray-500 pr-4 select-none text-right">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
</div>
<div className="flex-1 overflow-x-auto">
<pre><code><span className="text-pink-400">async function</span> <span className="text-yellow-300">fetchUserData</span><span className="text-gray-400">(</span><span className="text-blue-300">userId</span><span className="text-gray-400">) {</span>
  <span className="text-gray-400">// API endpoint for user data</span>
  <span className="text-purple-400">const</span> <span className="text-blue-300">url</span> <span className="text-gray-400">=</span> <span className="text-green-300">`https://api.example.com/users/${userId}`</span><span className="text-gray-400">;</span>
  
  <span className="text-gray-400">// Error handling with try/catch</span>
  <span className="text-pink-400">try</span> <span className="text-gray-400">{</span>
    <span className="text-purple-400">const</span> <span className="text-blue-300">response</span> <span className="text-gray-400">=</span> <span className="text-pink-400">await</span> <span className="text-yellow-300">fetch</span><span className="text-gray-400">(</span><span className="text-blue-300">url</span><span className="text-gray-400">);</span>
    
    <span className="text-pink-400">if</span> <span className="text-gray-400">(!</span><span className="text-blue-300">response</span><span className="text-gray-400">.</span><span className="text-blue-300">ok</span><span className="text-gray-400">) {</span>
      <span className="text-pink-400">throw new</span> <span className="text-yellow-300">Error</span><span className="text-gray-400">(</span><span className="text-green-300">`HTTP error! Status: ${response.status}`</span><span className="text-gray-400">);</span>
    <span className="text-gray-400">}</span>
    
    <span className="text-purple-400">const</span> <span className="text-blue-300">data</span> <span className="text-gray-400">=</span> <span className="text-pink-400">await</span> <span className="text-blue-300">response</span><span className="text-gray-400">.</span><span className="text-yellow-300">json</span><span className="text-gray-400">();</span>
    <span className="text-pink-400">return</span> <span className="text-blue-300">data</span><span className="text-gray-400">;</span>
  <span className="text-gray-400">}</span> <span className="text-pink-400">catch</span> <span className="text-gray-400">(</span><span className="text-blue-300">error</span><span className="text-gray-400">) {</span>
    <span className="text-yellow-300">console</span><span className="text-gray-400">.</span><span className="text-yellow-300">error</span><span className="text-gray-400">(</span><span className="text-green-300">'Failed to fetch user data:'</span><span className="text-gray-400">,</span> <span className="text-blue-300">error</span><span className="text-gray-400">);</span>
    <span className="text-pink-400">throw</span> <span className="text-blue-300">error</span><span className="text-gray-400">;</span>
  <span className="text-gray-400">}</span>
<span className="text-gray-400">}</span></code></pre>
</div>
</div>
</div>
</div>
<div className="mt-4 text-sm text-gray-400 p-4 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-colors">
<p>This example shows an asynchronous JavaScript function that fetches user data from an API and includes proper error handling with try/catch blocks.</p>
</div>
</div>

    </>
  );
}
