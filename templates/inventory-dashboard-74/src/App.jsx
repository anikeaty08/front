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



tailwind.config = {
theme: {
extend: {
fontFamily: {
'inter': ['Inter', 'sans-serif'],
'sans': ['system-ui', 'sans-serif'],
}
}
}
}



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      
<div className="max-w-md mx-auto animate-3d">

<div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

<div className="p-6 pb-4">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl font-inter font-extralight tracking-tighter text-gray-900">Hello, Sarah</h1>
<p className="text-sm text-gray-600 mt-1 font-sans">What would you like to order today?</p>
</div>
<div className="relative">
<button className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
<i className="w-5 h-5 text-gray-700" data-lucide="shopping-cart"></i>
</button>
<span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center font-medium">3</span>
</div>
</div>

<div className="relative">
<i className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-gray-300" placeholder="Search for products..." type="text"/>
</div>
</div>

<div className="px-6 py-4">
<h2 className="text-xl font-inter font-extralight tracking-tighter text-gray-900 mb-4">Categories</h2>
<div className="grid grid-cols-4 gap-3">

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-2 hover:bg-indigo-100 transition-colors cursor-pointer">
<i className="w-7 h-7 text-indigo-500" data-lucide="apple"></i>
</div>
<span className="text-xs text-gray-700 text-center font-sans">Fruits</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-2 hover:bg-green-100 transition-colors cursor-pointer">
<i className="w-7 h-7 text-green-600" data-lucide="carrot"></i>
</div>
<span className="text-xs text-gray-700 text-center font-sans">Vegetables</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-2 hover:bg-yellow-100 transition-colors cursor-pointer">
<i className="w-7 h-7 text-yellow-600" data-lucide="milk"></i>
</div>
<span className="text-xs text-gray-700 text-center font-sans">Dairy</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-2 hover:bg-orange-100 transition-colors cursor-pointer">
<i className="w-7 h-7 text-orange-600" data-lucide="beef"></i>
</div>
<span className="text-xs text-gray-700 text-center font-sans">Meat</span>
</div>
</div>
</div>

<div className="px-6 py-4">
<div className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-6 overflow-hidden border border-indigo-400">
<div className="relative z-10">
<h3 className="text-xl font-inter font-extralight tracking-tighter text-white mb-1">Weekend Special</h3>
<p className="text-sm text-indigo-100 mb-3 font-sans">Get up to 30% off on fresh produce</p>
<button className="px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors">
                            Shop Now
                        </button>
</div>
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-400 rounded-full opacity-20 -mr-16 -mt-16"></div>
</div>
</div>

<div className="px-6 py-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-inter font-extralight tracking-tighter text-gray-900">Popular Items</h2>
<button className="text-sm text-indigo-500 font-medium hover:text-indigo-600 transition-colors">View All</button>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer">
<div className="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center overflow-hidden">
<img alt="Apples" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&amp;h=400&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1 font-sans">Fresh Apples</h3>
<p className="text-xs text-gray-500 mb-2 font-sans">1 kg</p>
<div className="flex items-center justify-between">
<span className="text-base font-semibold text-gray-900 font-sans">$4.99</span>
<button className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer">
<div className="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center overflow-hidden">
<img alt="Bananas" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&amp;h=400&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1 font-sans">Organic Bananas</h3>
<p className="text-xs text-gray-500 mb-2 font-sans">6 pieces</p>
<div className="flex items-center justify-between">
<span className="text-base font-semibold text-gray-900 font-sans">$3.49</span>
<button className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer">
<div className="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center overflow-hidden">
<img alt="Milk" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&amp;h=400&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1 font-sans">Fresh Milk</h3>
<p className="text-xs text-gray-500 mb-2 font-sans">1 liter</p>
<div className="flex items-center justify-between">
<span className="text-base font-semibold text-gray-900 font-sans">$2.99</span>
<button className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer">
<div className="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center overflow-hidden">
<img alt="Tomatoes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&amp;h=400&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1 font-sans">Red Tomatoes</h3>
<p className="text-xs text-gray-500 mb-2 font-sans">500 g</p>
<div className="flex items-center justify-between">
<span className="text-base font-semibold text-gray-900 font-sans">$2.49</span>
<button className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 mt-4">
<div className="grid grid-cols-4 gap-1 p-4">
<button className="flex flex-col items-center py-2 text-indigo-500">
<i className="w-6 h-6 mb-1" data-lucide="home"></i>
<span className="text-xs font-medium font-sans">Home</span>
</button>
<button className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="grid-3x3"></i>
<span className="text-xs font-medium font-sans">Categories</span>
</button>
<button className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="heart"></i>
<span className="text-xs font-medium font-sans">Favorites</span>
</button>
<button className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="user"></i>
<span className="text-xs font-medium font-sans">Account</span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
