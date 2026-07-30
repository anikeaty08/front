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

<div className="flex text-xs mt-2 pt-2 pr-2 pb-2 pl-2 items-center justify-between">
<span className="" id="clock">18:18</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="pt-4 pr-6 pb-4 pl-6">
<div className="flex justify-between items-center">
<div className="">
<h1 className="text-2xl font-bold">Панино - доставка</h1>
<p className="text-sm text-gray-500"></p>
</div>
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-user text-orange-500"></i>
</button>
</div>
</header>

<div className="px-6 py-2">
<div className="relative">
<input className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 pl-10 text-sm focus:outline-none" placeholder="Search recipes..." type="text" />
<i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="py-4">
<div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-1">
<i className="fas fa-utensils text-orange-500 text-xl"></i>
</div>
<span className="text-xs">все</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-1">
<i className="fas fa-hamburger text-red-500 text-xl"></i>
</div>
<span className="text-xs">Бургеры</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
<i className="fas fa-pizza-slice text-yellow-500 text-xl"></i>
</div>
<span className="text-xs">Пицца</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-1">
<i className="fas fa-seedling text-green-500 text-xl"></i>
</div>
<span className="text-xs">Салаты</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-1">
<i className="fas fa-fish text-blue-500 text-xl"></i>
</div>
<span className="text-xs">Морепродукты</span>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Рекомендуем</h3>
<button className="text-xs text-orange-600">View All</button>
</div>
<div className="relative rounded-2xl overflow-hidden h-48 mb-4">
<img className="w-full h-full object-cover" src="https://archiwood.ru/images/yvc.jpg?w=800&q=80" style={{outline: `rgb(245, 158, 11) solid 2px`, outlineOffset: `2px`, transition: `outline 0.1s ease-in-out`}} />
<div className="absolute inset-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent pt-4 pr-4 pb-4 pl-4 justify-end">
<div className="w-fit text-xs text-white bg-orange-500 rounded-full mb-2 pt-1 pr-2 pb-1 pl-2">Популярное</div>
<h4 className="font-bold text-white">Пикник - Шаурма</h4>
<div className="flex text-xs text-white/80 mt-1 items-center">
<i className="fas fa-clock mr-1"></i> 25 mins
                <i className="fas fa-fire mr-1 ml-3"></i> 320 cal
                
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-24 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" />
</div>
<div className="p-3">
<h4 className="text-sm font-medium">Салат </h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 10 mins
                </div>
</div>
</div>
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow">
<div className="h-24 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" />
</div>
<div className="p-3">
<h4 className="text-sm font-medium">Пицца</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 35 mins
                </div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Недавно просмотренные</h3>
<button className="text-xs text-orange-600">Clear All</button>
</div>
<div className="space-y-3">
<div className="bg-[#eaecf0] rounded-2xl p-3 shadow flex">
<div className="w-16 h-16 rounded-xl overflow-hidden mr-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529042410759-befb1204b468" />
</div>
<div className="flex-1">
<h4 className="font-medium">Chicken Curry</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 45 mins
                  <div className="flex items-center ml-3">
<i className="fas fa-star mr-1 text-yellow-400"></i> 4.6
                  </div>
</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white">
<i className="fas fa-bookmark text-orange-500"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-2xl p-3 shadow flex">
<div className="w-16 h-16 rounded-xl overflow-hidden mr-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551248429-40975aa4de74" />
</div>
<div className="flex-1">
<h4 className="font-medium">Grilled Salmon</h4>
<div className="flex items-center text-xs text-gray-500 mt-1">
<i className="fas fa-clock mr-1"></i> 30 mins
                  <div className="flex items-center ml-3">
<i className="fas fa-star mr-1 text-yellow-400"></i> 4.9
                  </div>
</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white">
<i className="fas fa-bookmark text-gray-300"></i>
</button>
</div>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Popular Chefs</h3>
<button className="text-xs text-orange-600">View All</button>
</div>
<div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-2">
<div className="flex flex-col items-center w-20">
<div className="w-16 h-16 rounded-full overflow-hidden mb-1 border-2 border-orange-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583394838336-acd977736f90" />
</div>
<span className="text-xs text-center">Chef Maria</span>
</div>
<div className="flex flex-col items-center w-20">
<div className="w-16 h-16 rounded-full overflow-hidden mb-1 border-2 border-gray-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16" />
</div>
<span className="text-xs text-center">Chef Thomas</span>
</div>
<div className="flex flex-col items-center w-20">
<div className="w-16 h-16 rounded-full overflow-hidden mb-1 border-2 border-gray-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f" />
</div>
<span className="text-xs text-center">Chef Ling</span>
</div>
<div className="flex flex-col items-center w-20">
<div className="w-16 h-16 rounded-full overflow-hidden mb-1 border-2 border-gray-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607631568211-da8c1b4c36ca" />
</div>
<span className="text-xs text-center">Chef James</span>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: `20`}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-home text-orange-600"></i>
<span className="text-xs text-orange-600 mt-1">Home</span>
<div className="w-1 h-1 bg-orange-600 rounded-full mt-1"></div>
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



    </>
  );
}
