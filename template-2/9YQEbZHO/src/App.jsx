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
      
<div className="w-full max-w-2xl">

<div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">

<div className="bg-[#1f2937] px-4 py-2 flex items-center justify-between">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
<div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
</div>
<div className="text-gray-400 text-sm">chat.js</div>
<div className="text-gray-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="16"></rect>
<rect height="6" width="6"></rect>
</svg>
</div>
</div>

<div className="bg-gray-700 px-4 py-1.5 text-white flex space-x-4">
<span className="border-b-2 border-blue-400 pb-1">chat.js</span>
<span className="text-gray-400">users.js</span>
</div>

<div className="h-[400px] overflow-y-auto p-4 bg-[#111827] text-white" id="chat-messages">

<div className="mb-4">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">1</span>
<span className="text-green-400">// System initialized chat</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">2</span>
<span className="text-blue-400">console</span>
<span className="text-white">.</span>
<span className="text-yellow-400">log</span>
<span className="text-white">(</span>
<span className="text-green-300">'Welcome to Code Chat!'</span>
<span className="text-white">);</span>
</div>
</div>

<div className="mb-4">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">3</span>
<span className="text-blue-400">user</span>
<span className="text-white">.</span>
<span className="text-yellow-400">send</span>
<span className="text-white">({"{"}</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">message</span>
<span className="text-white">: </span>
<span className="text-green-300">'Hi there! Can you help me with a coding problem?'</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">timestamp</span>
<span className="text-white">: </span>
<span className="text-orange-400">Date.now()</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">4</span>
<span className="text-white">{"}"});</span>
</div>
</div>

<div className="mb-4">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">5</span>
<span className="text-blue-400">assistant</span>
<span className="text-white">.</span>
<span className="text-yellow-400">reply</span>
<span className="text-white">({"{"}</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">message</span>
<span className="text-white">: </span>
<span className="text-green-300">'Of course! What specific coding issue are you facing?'</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">timestamp</span>
<span className="text-white">: </span>
<span className="text-orange-400">Date.now()</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">6</span>
<span className="text-white">{"}"});</span>
</div>
</div>

<div className="mb-4">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">7</span>
<span className="text-blue-400">user</span>
<span className="text-white">.</span>
<span className="text-yellow-400">send</span>
<span className="text-white">({"{"}</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">message</span>
<span className="text-white">: </span>
<span className="text-green-300">'I'm trying to understand async/await in JavaScript...'</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-12">
<span className="text-pink-400">timestamp</span>
<span className="text-white">: </span>
<span className="text-orange-400">Date.now()</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">8</span>
<span className="text-white">{"}"});</span>
</div>
</div>

<div className="flex h-5 items-center">
<span className="text-gray-500 mr-2 w-8 text-right">9</span>
<div className="h-4 w-2 bg-white animate-pulse"></div>
</div>
</div>

<div className="bg-[#1e293b] border-t border-gray-700 p-4">
<div className="flex items-center">
<span className="text-gray-500 mr-2 w-8 text-right">10</span>
<span className="text-blue-400">user</span>
<span className="text-white">.</span>
<span className="text-yellow-400">send</span>
<span className="text-white">(</span>
<div className="flex-1 relative">
<input className="w-full bg-gray-800 border-0 text-green-300 py-2 px-3 rounded focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="Type your message..." type="text" />
</div>
<span className="text-white ml-1">);</span>
<button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Run
                    </button>
</div>
</div>

<div className="bg-gray-800 px-4 py-2 text-gray-400 text-sm flex justify-between">
<div>Online: 2 users</div>
<div>Ln 10, Col 12</div>
</div>
</div>
</div>

    </>
  );
}
