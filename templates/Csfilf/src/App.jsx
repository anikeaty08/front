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
      
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-white mb-12">What Our <span className="text-blue-400">Users</span> Say</h2>
<div className="max-w-5xl mx-auto">

<div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">

<div className="bg-[#1f2937] px-4 py-2 flex items-center justify-between">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
<div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
</div>
<div className="text-gray-400 text-sm">testimonials.js</div>
</div>

<div className="bg-gray-700 px-4 py-1.5 text-white flex space-x-4">
<span className="border-b-2 border-blue-400 pb-1">testimonials.js</span>
<span className="text-gray-400">reviews.js</span>
</div>

<div className="bg-[#111827] p-6">

<div className="flex mb-4">
<span className="text-gray-500 mr-2 w-8 text-right">1</span>
<span className="text-blue-300">const</span>
<span className="text-yellow-300"> testimonials </span>
<span className="text-white">= [</span>
</div>

<div className="ml-8 mb-6 bg-gray-800 rounded-lg p-4 border-l-4 border-green-400">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">2</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">3</span>
<span className="text-pink-400">name</span>
<span className="text-white">: </span>
<span className="text-green-300">"Sarah Chen"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">4</span>
<span className="text-pink-400">role</span>
<span className="text-white">: </span>
<span className="text-green-300">"Senior Developer"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">5</span>
<span className="text-pink-400">company</span>
<span className="text-white">: </span>
<span className="text-green-300">"TechFlow Inc."</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">6</span>
<span className="text-pink-400">stars</span>
<span className="text-white">: </span>
<span className="text-orange-400">5</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">7</span>
<span className="text-pink-400">quote</span>
<span className="text-white">: </span>
<span className="text-green-300">"This editor has transformed my workflow. The syntax highlighting is perfect, and the integrated terminal saves me so much time."</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">8</span>
<span className="text-white">},</span>
</div>
</div>

<div className="ml-8 mb-6 bg-gray-800 rounded-lg p-4 border-l-4 border-blue-400">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">9</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">10</span>
<span className="text-pink-400">name</span>
<span className="text-white">: </span>
<span className="text-green-300">"Marcus Johnson"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">11</span>
<span className="text-pink-400">role</span>
<span className="text-white">: </span>
<span className="text-green-300">"Freelance Developer"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">12</span>
<span className="text-pink-400">stars</span>
<span className="text-white">: </span>
<span className="text-orange-400">5</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">13</span>
<span className="text-pink-400">quote</span>
<span className="text-white">: </span>
<span className="text-green-300">"I've tried dozens of code editors, but this one stands out. The customization options are endless, and it never slows down even with large projects."</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">14</span>
<span className="text-white">},</span>
</div>
</div>

<div className="ml-8 mb-6 bg-gray-800 rounded-lg p-4 border-l-4 border-purple-400">
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">15</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">16</span>
<span className="text-pink-400">name</span>
<span className="text-white">: </span>
<span className="text-green-300">"Priya Patel"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">17</span>
<span className="text-pink-400">role</span>
<span className="text-white">: </span>
<span className="text-green-300">"CTO"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">18</span>
<span className="text-pink-400">company</span>
<span className="text-white">: </span>
<span className="text-green-300">"DevStack"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">19</span>
<span className="text-pink-400">stars</span>
<span className="text-white">: </span>
<span className="text-orange-400">4.5</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2 w-8 text-right">20</span>
<span className="text-pink-400">quote</span>
<span className="text-white">: </span>
<span className="text-green-300">"Our entire team switched to this editor last year. The collaboration features and extension ecosystem have improved our productivity by at least 30%."</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">21</span>
<span className="text-white">}</span>
</div>
</div>

<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">22</span>
<span className="text-white">];</span>
</div>
<div className="flex mt-4">
<span className="text-gray-500 mr-2 w-8 text-right">23</span>
<span className="text-blue-300">export</span>
<span className="text-purple-400"> default </span>
<span className="text-yellow-300">testimonials</span>
<span className="text-white">;</span>
</div>
</div>

<div className="bg-gray-800 px-4 py-2 text-gray-400 text-sm flex justify-between">
<div>JavaScript</div>
<div>Ln 23, Col 32</div>
</div>
</div>
</div>
</div>

    </>
  );
}
