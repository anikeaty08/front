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
      html

<div className="min-h-screen bg-orange-50 flex flex-col gap-14 py-12 items-center">

<section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
<h2 className="text-2xl font-bold text-orange-600">🍳 Trending Recipes</h2>
<div className="flex gap-4 overflow-x-auto pb-2">
<div className="min-w-[160px] bg-orange-100 rounded-xl p-4 shadow hover:scale-105 transition">
<img alt="Pasta" className="h-24 w-full object-cover rounded-lg mb-2" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=400" />
<p className="font-semibold">Creamy Garlic Pasta</p>
<div className="text-sm text-gray-500">⏱ 30 min · ⭐ 4.8</div>
</div>
<div className="min-w-[160px] bg-yellow-100 rounded-xl p-4 shadow hover:scale-105 transition">
<img alt="Salad" className="h-24 w-full object-cover rounded-lg mb-2" src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400" />
<p className="font-semibold">Rainbow Veggie Salad</p>
<div className="text-sm text-gray-500">⏱ 15 min · ⭐ 4.6</div>
</div>
<div className="min-w-[160px] bg-red-100 rounded-xl p-4 shadow hover:scale-105 transition">
<img alt="Burger" className="h-24 w-full object-cover rounded-lg mb-2" src="https://images.pexels.com/photos/7045691/pexels-photo-7045691.jpeg?auto=compress&w=400" />
<p className="font-semibold">Spicy Chickpea Burger</p>
<div className="text-sm text-gray-500">⏱ 25 min · ⭐ 4.7</div>
</div>
</div>
<button className="self-end mt-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
      See All Recipes
    </button>
</section>

<section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">
<h2 className="text-2xl font-bold text-lime-700">📚 Explore Collections</h2>
<div className="grid grid-cols-2 gap-4">
<div className="relative bg-lime-100 rounded-xl p-4 flex items-end overflow-hidden shadow hover:scale-105 transition min-h-[120px]">
<img alt="Vegetarian" className="absolute top-0 right-0 w-20 h-20 object-cover rounded-br-xl opacity-60" src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=300" />
<span className="font-semibold text-lime-800 text-lg relative">Vegetarian</span>
</div>
<div className="relative bg-teal-100 rounded-xl p-4 flex items-end overflow-hidden shadow hover:scale-105 transition min-h-[120px]">
<img alt="Global Eats" className="absolute top-0 right-0 w-20 h-20 object-cover rounded-br-xl opacity-60" src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&w=300" />
<span className="font-semibold text-teal-800 text-lg relative">Global Eats</span>
</div>
<div className="relative bg-fuchsia-100 rounded-xl p-4 flex items-end overflow-hidden shadow hover:scale-105 transition min-h-[120px] col-span-2">
<img alt="Quick & Easy" className="absolute top-0 right-0 w-20 h-20 object-cover rounded-br-xl opacity-60" src="https://images.pexels.com/photos/7045691/pexels-photo-7045691.jpeg?auto=compress&w=300" />
<span className="font-semibold text-fuchsia-800 text-lg relative">Quick & Easy</span>
</div>
</div>
</section>

<section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center">
<h2 className="text-2xl font-bold text-rose-700 mb-2">👩‍🍳 Chef Spotlight</h2>
<div className="flex gap-6 items-center">
<img alt="Chef Anita" className="h-24 w-24 rounded-full border-4 border-rose-300 object-cover shadow-xl" src="https://randomuser.me/api/portraits/women/68.jpg" />
<div>
<p className="font-bold text-lg">Chef Anita Desai</p>
<p className="text-rose-500">Plant-based Masterpieces</p>
<div className="flex gap-1 text-sm text-gray-500 mt-1">
<span>✔️ 42 Recipes</span>
<span>·</span>
<span>⭐ 4.9</span>
</div>
<button className="mt-2 px-3 py-1 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600">
          View Creations
        </button>
</div>
</div>
<div className="w-full grid grid-cols-3 gap-3 mt-4">
<img alt="Recipe1" className="h-16 w-full object-cover rounded-lg" src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=100" />
<img alt="Recipe2" className="h-16 w-full object-cover rounded-lg" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=100" />
<img alt="Recipe3" className="h-16 w-full object-cover rounded-lg" src="https://images.pexels.com/photos/7045691/pexels-photo-7045691.jpeg?auto=compress&w=100" />
</div>
</section>
</div>

    </>
  );
}
