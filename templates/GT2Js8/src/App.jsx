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
      
<div className="w-full max-w-3xl">
<div className="relative">

<div className="bg-[#0c2e4e] rounded-t-lg overflow-hidden shadow-xl">
<div className="flex">

<div className="bg-[#0c2e4e] sticky left-0 top-0 z-10">
<div className="flex flex-col items-end text-[#55718d] min-w-[38px] py-4 pr-2 text-sm font-mono">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
</div>
</div>

<div className="py-4 px-4 overflow-x-auto font-mono text-sm text-[#e6edf3]">
<pre><code><span className="token-comment">// Initialize the API client with your key</span>
<span className="token-keyword">const</span> quantum <span className="token-punctuation">=</span> <span className="token-keyword">new</span> <span className="token-function">Quantum</span><span className="token-punctuation">(</span><span className="token-string">'qnt_test_example'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>

<span className="token-comment">// Create a new customer</span>
<span className="token-keyword">async</span> <span className="token-keyword">function</span> <span className="token-function">createCustomer</span><span className="token-punctuation">(</span><span className="token-punctuation">)</span> <span className="token-punctuation">{</span>
  <span className="token-keyword">const</span> customer <span className="token-punctuation">=</span> <span className="token-keyword">await</span> quantum.customers.<span className="token-function">create</span><span className="token-punctuation">(</span><span className="token-punctuation">{</span>
    email<span className="token-punctuation">:</span> <span className="token-string">'customer@example.com'</span><span className="token-punctuation">,</span>
    name<span className="token-punctuation">:</span> <span className="token-string">'Jenny Rosen'</span>
  <span className="token-punctuation">}</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
}</code></pre>
</div>
</div>

<div className="flex justify-between bg-[#0a2540] text-[#55718d] h-[28px] text-xs">
<div className="flex items-center">
<div className="bg-[#00d4ff] text-[#06182c] h-full flex items-center px-3 relative uppercase">
              JavaScript
            </div>
<div className="text-[#00d4ff] flex items-center ml-3">
              api.js
            </div>
</div>
<div className="flex items-center mr-3">
<div className="flex items-center mr-2">Ln</div>
<div className="flex items-center mr-1">8</div>
<div className="flex items-center mr-1">:</div>
<div className="flex items-center">3</div>
</div>
</div>
</div>

<div className="bg-[#06182c] border border-[#0f395e] rounded-b-lg text-[#adbdcc] font-mono text-sm p-4 pt-6 -mt-2">
<div className="flex flex-col">
<div className="flex">
<span className="text-[#55718d] mr-2">$</span>
<span>node api.js</span>
</div>
<div className="flex">
<span className="text-[#ffa956]">Creating customer...</span>
</div>
<div className="flex">
<span className="text-[#00d4ff]">✓ Customer created: cus_Q8zdRojn4xJUt4</span>
</div>
<div className="flex items-center">
<span className="text-[#55718d] mr-2">$</span>
<span className="w-[8.4px] h-[16px] bg-white inline-block"></span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
