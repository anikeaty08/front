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
      
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-emerald-600/15 rounded-full blur-[100px] sm:blur-[120px]"></div>
</div>
<div className="relative w-full max-w-3xl bg-[#18181b]/70 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden transform transition-all hover:scale-[1.01] hover:bg-[#18181b]/80 duration-500 ease-out">
<div className="flex items-center px-5 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/20 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/20 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/20 shadow-sm"></div>
</div>
</div>
<div className="p-6 sm:p-8 overflow-x-auto text-sm sm:text-base md:text-lg font-mono font-normal leading-[1.7] tracking-tight">
<pre className="m-0"><code><span className="text-blue-400">class</span> <span className="text-emerald-300">Vaccinations</span> <span className="text-blue-400">extends</span> <span className="text-emerald-300">Table</span> <span className="text-yellow-300">{</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">id</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">patientId</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">vaccine</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">IntColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">doseNumber</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">integer</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">DateTimeColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">dateGiven</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">dateTime</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">DateTimeColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">nextDueDate</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">dateTime</span><span className="text-fuchsia-400">()</span><span className="text-gray-500">.</span><span className="text-amber-200">nullable</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">batchNumber</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()</span><span className="text-gray-500">.</span><span className="text-amber-200">nullable</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">agentId</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">TextColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">notes</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">text</span><span className="text-fuchsia-400">()</span><span className="text-gray-500">.</span><span className="text-amber-200">nullable</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">DateTimeColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">createdAt</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">dateTime</span><span className="text-fuchsia-400">()()</span><span className="text-gray-500">;</span>
  <span className="text-emerald-300">BoolColumn</span> <span className="text-blue-400">get</span> <span className="text-gray-200">isSynced</span> <span className="text-gray-500">=&gt;</span> <span className="text-amber-200">boolean</span><span className="text-fuchsia-400">()</span><span className="text-gray-500">.</span><span className="text-amber-200">withDefault</span><span className="text-fuchsia-400">(</span><span className="text-blue-400">const</span> <span className="text-emerald-300">Constant</span><span className="text-sky-400">(</span><span className="text-blue-400">false</span><span className="text-sky-400">)</span><span className="text-fuchsia-400">)()</span><span className="text-gray-500">;</span>

  <span className="text-blue-400">@override</span>
  <span className="text-emerald-300">Set</span><span className="text-gray-500">&lt;</span><span className="text-emerald-300">Column</span><span className="text-gray-500">&gt;</span> <span className="text-blue-400">get</span> <span className="text-gray-200">primaryKey</span> <span className="text-gray-500">=&gt;</span> <span className="text-fuchsia-400">{</span><span className="text-gray-200">id</span><span className="text-fuchsia-400">}</span><span className="text-gray-500">;</span>
<span className="text-yellow-300">}</span></code></pre>
</div>
</div>

    </>
  );
}
