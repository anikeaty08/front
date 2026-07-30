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



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();
  
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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#ffffff] to-[#f0f2f5] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#e1e4e8] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center p-2 text-xs mt-2">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Saved Recipes</h1>
<div className="flex space-x-2">
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-sort text-orange-500 text-sm"></i>
</button>
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-ellipsis-v text-orange-500 text-sm"></i>
</button>
</div>
</div>
</header>

<div className="px-6 py-2">
<div className="flex space-x-2 overflow-x-auto hide-scrollbar">
<button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm whitespace-nowrap">All Recipes (12)</button>
<button className="px-4 py-2 bg-[#eaecf0] rounded-xl text-sm whitespace-nowrap">Favorites (5)</button>
<button className="px-4 py-2 bg-[#eaecf0] rounded-xl text-sm whitespace-nowrap">Recently Added (3)</button>
<button className="px-4 py-2 bg-[#eaecf0] rounded-xl text-sm whitespace-nowrap">My Collections</button>
</div>
</div>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="py-4 mb-4">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold">My Collections</h3>
<button className="text-xs text-orange-600">Create New</button>
</div>
<div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
<div className="min-w-[120px] rounded-xl overflow-hidden relative bg-[#eaecf0] border border-gray-200">
<div className="p-3 flex flex-col items-center justify-center h-28">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
<i className="fas fa-plus text-orange-500"></i>
</div>
<span className="text-xs text-center">Create New Collection</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium text-center">Healthy Meals</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium text-center">Quick Dinners</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1504113888839-1c8eb50233d3" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium text-center">Desserts</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="space-y-4">

<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-40 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" />
<div className="absolute top-2 right-2">
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
<i className="fas fa-heart text-red-500"></i>
</button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">Avocado & Egg Toast</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 10 mins
                      <div className="flex items-center ml-3">
<i className="fas fa-fire mr-1"></i> 240 cal
                      </div>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center text-xs mr-2">
<i className="fas fa-star text-yellow-400 mr-1"></i>
<span>4.5</span>
</div>
</div>
</div>
<div className="flex mt-3">
<div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full mr-2">Breakfast</div>
<div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Healthy</div>
</div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-40 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" />
<div className="absolute top-2 right-2">
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
<i className="fas fa-heart text-red-500"></i>
</button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">Margherita Pizza</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 35 mins
                      <div className="flex items-center ml-3">
<i className="fas fa-fire mr-1"></i> 380 cal
                      </div>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center text-xs mr-2">
<i className="fas fa-star text-yellow-400 mr-1"></i>
<span>4.9</span>
</div>
</div>
</div>
<div className="flex mt-3">
<div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mr-2">Italian</div>
<div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Dinner</div>
</div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-40 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529042410759-befb1204b468" />
<div className="absolute top-2 right-2">
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
<i className="fas fa-heart text-gray-400"></i>
</button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">Chicken Curry</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 45 mins
                      <div className="flex items-center ml-3">
<i className="fas fa-fire mr-1"></i> 420 cal
                      </div>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center text-xs mr-2">
<i className="fas fa-star text-yellow-400 mr-1"></i>
<span>4.6</span>
</div>
</div>
</div>
<div className="flex mt-3">
<div className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full mr-2">Indian</div>
<div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">Spicy</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: `20`}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-home text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Home</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-search text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Explore</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-bookmark text-orange-600"></i>
<span className="text-xs text-orange-600 mt-1">Saved</span>
<div className="w-1 h-1 bg-orange-600 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-cog text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Settings</span>
</div>
</div>
</nav>
</div>



    </>
  );
}
