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

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
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
<h1 className="text-2xl font-bold">Explore</h1>
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-sliders-h text-orange-500"></i>
</button>
</div>
</header>

<div className="px-6 py-2">
<div className="relative">
<input className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 pl-10 text-sm focus:outline-none" placeholder="Search recipes, ingredients, cuisines..." type="text"/>
<i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="py-4">
<h3 className="font-bold mb-3">Trending Categories</h3>
<div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium">Breakfast</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1603105037880-880cd4edfb0d"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium">Lunch</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium">Dinner</span>
</div>
</div>
<div className="min-w-[120px] rounded-xl overflow-hidden relative">
<img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1488477181946-6428a0bfdf32"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium">Dessert</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold mb-3">Popular Cuisines</h3>
<div className="grid grid-cols-3 gap-3">
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
<i className="fas fa-pepper-hot text-red-500"></i>
</div>
<span className="text-xs">Mexican</span>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
<i className="fas fa-fish text-blue-500"></i>
</div>
<span className="text-xs">Japanese</span>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
<i className="fas fa-pizza-slice text-green-500"></i>
</div>
<span className="text-xs">Italian</span>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
<i className="fas fa-drumstick-bite text-yellow-500"></i>
</div>
<span className="text-xs">American</span>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
<i className="fas fa-mortar-pestle text-purple-500"></i>
</div>
<span className="text-xs">Indian</span>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
<i className="fas fa-utensils text-orange-500"></i>
</div>
<span className="text-xs">More</span>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Trending Now</h3>
<button className="text-xs text-orange-600">View All</button>
</div>
<div className="space-y-3">
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-40 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"/>
</div>
<div className="p-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">Vegetable Salad with Nuts</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 15 mins
                      <div className="flex items-center ml-3">
<i className="fas fa-fire mr-1"></i> 180 cal
                      </div>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center text-xs mr-2">
<i className="fas fa-star text-yellow-400 mr-1"></i>
<span>4.8</span>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white">
<i className="fas fa-bookmark text-orange-500"></i>
</button>
</div>
</div>
<div className="flex mt-3">
<div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mr-2">Vegan</div>
<div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Healthy</div>
</div>
</div>
</div>
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-40 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559847844-5315695dadae"/>
</div>
<div className="p-3">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">Homemade Pasta Carbonara</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 30 mins
                      <div className="flex items-center ml-3">
<i className="fas fa-fire mr-1"></i> 450 cal
                      </div>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center text-xs mr-2">
<i className="fas fa-star text-yellow-400 mr-1"></i>
<span>4.7</span>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white">
<i className="fas fa-bookmark text-gray-300"></i>
</button>
</div>
</div>
<div className="flex mt-3">
<div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full mr-2">Italian</div>
<div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Popular</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-home text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Home</span>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-search text-orange-600"></i>
<span className="text-xs text-orange-600 mt-1">Explore</span>
<div className="w-1 h-1 bg-orange-600 rounded-full mt-1"></div>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-bookmark text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Saved</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-cog text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Settings</span>
</div>
</div>
</nav>
</div>

<style>
    .hide-scrollbar::-webkit-scrollbar { display:none;}
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}
  </style>

    </>
  );
}
