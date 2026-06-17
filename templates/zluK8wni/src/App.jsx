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
      
<div className="container mx-auto px-4 py-16">

<div className="text-center mb-16">
<h1 className="text-4xl font-bold text-white mb-4">Choose Your <span className="text-blue-400">Plan</span></h1>
<p className="text-gray-400 max-w-2xl mx-auto">Select the perfect development environment that matches your coding needs and workflow.</p>
</div>

<div className="max-w-6xl mx-auto">

<div className="bg-[#1f2937] px-4 py-2 rounded-t-lg flex items-center justify-between">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
<div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
</div>
<div className="text-gray-400 text-sm">pricing.json</div>
</div>

<div className="bg-gray-700 px-4 py-1.5 text-white flex space-x-4">
<span className="border-b-2 border-blue-400 pb-1">pricing.json</span>
<span className="text-gray-400">features.json</span>
</div>

<div className="bg-[#111827] p-6 rounded-b-lg">

<div className="flex mb-4">
<span className="text-gray-500 mr-2 w-8 text-right">1</span>
<span className="text-white">{</span>
</div>
<div className="flex mb-2">
<span className="text-gray-500 mr-2 w-8 text-right">2</span>
<span className="pl-4 text-pink-400">"plans"</span>
<span className="text-white">: [</span>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-6 pl-8">

<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all">
<div className="p-6">
<div className="flex mb-2">
<span className="text-gray-500 mr-2">3</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">4</span>
<span className="text-pink-400">"name"</span>
<span className="text-white">: </span>
<span className="text-green-300">"Free"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">5</span>
<span className="text-pink-400">"price"</span>
<span className="text-white">: </span>
<span className="text-blue-300">0</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">6</span>
<span className="text-pink-400">"features"</span>
<span className="text-white">: [</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">7</span>
<span className="text-green-300">"Basic Editor"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">8</span>
<span className="text-green-300">"5 Projects"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">9</span>
<span className="text-green-300">"Community Support"</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">10</span>
<span className="text-white">]</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2">11</span>
<span className="text-white">}</span>
<span className="text-white">,</span>
</div>
</div>
<div className="border-t border-gray-700 p-4">
<button className="w-full py-2 bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors">
                                Select Free
                            </button>
</div>
</div>

<div className="bg-gray-800 rounded-lg overflow-hidden border border-blue-500 shadow-lg shadow-blue-500/20 transform -translate-y-2">
<div className="bg-blue-600 py-1 text-center text-white text-sm">
                            MOST POPULAR
                        </div>
<div className="p-6">
<div className="flex mb-2">
<span className="text-gray-500 mr-2">12</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">13</span>
<span className="text-pink-400">"name"</span>
<span className="text-white">: </span>
<span className="text-green-300">"Pro"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">14</span>
<span className="text-pink-400">"price"</span>
<span className="text-white">: </span>
<span className="text-blue-300">19</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">15</span>
<span className="text-pink-400">"features"</span>
<span className="text-white">: [</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">16</span>
<span className="text-green-300">"Advanced Editor"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">17</span>
<span className="text-green-300">"Unlimited Projects"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">18</span>
<span className="text-green-300">"Priority Support"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">19</span>
<span className="text-green-300">"Cloud Sync"</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">20</span>
<span className="text-white">]</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2">21</span>
<span className="text-white">}</span>
<span className="text-white">,</span>
</div>
</div>
<div className="border-t border-gray-700 p-4">
<button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                                Select Pro
                            </button>
</div>
</div>

<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all">
<div className="p-6">
<div className="flex mb-2">
<span className="text-gray-500 mr-2">22</span>
<span className="text-white">{</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">23</span>
<span className="text-pink-400">"name"</span>
<span className="text-white">: </span>
<span className="text-green-300">"Team"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">24</span>
<span className="text-pink-400">"price"</span>
<span className="text-white">: </span>
<span className="text-blue-300">49</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">25</span>
<span className="text-pink-400">"features"</span>
<span className="text-white">: [</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">26</span>
<span className="text-green-300">"Everything in Pro"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">27</span>
<span className="text-green-300">"5 Team Members"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">28</span>
<span className="text-green-300">"Team Collaboration"</span>
<span className="text-white">,</span>
</div>
<div className="flex pl-8">
<span className="text-gray-500 mr-2">29</span>
<span className="text-green-300">"Admin Controls"</span>
</div>
<div className="flex pl-4">
<span className="text-gray-500 mr-2">30</span>
<span className="text-white">]</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2">31</span>
<span className="text-white">}</span>
</div>
</div>
<div className="border-t border-gray-700 p-4">
<button className="w-full py-2 bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors">
                                Select Team
                            </button>
</div>
</div>
</div>

<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">32</span>
<span className="text-white">]</span>
</div>
<div className="flex">
<span className="text-gray-500 mr-2 w-8 text-right">33</span>
<span className="text-white">}</span>
</div>
</div>

<div className="bg-gray-800 px-4 py-2 text-gray-400 text-sm flex justify-between">
<div>Currency: USD</div>
<div>Monthly billing</div>
</div>
</div>
</div>

    </>
  );
}
