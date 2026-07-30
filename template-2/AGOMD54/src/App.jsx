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
      

<header className="fixed top-0 w-full bg-white shadow z-10">
<div className="max-w-md mx-auto flex items-center justify-between px-4 py-3">
<div className="text-lg font-bold">ShopEasy</div>
<div className="flex space-x-3">
<button><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"></path></svg></button>
<button><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.3h12a1 1 0 00.9-1.3L17 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"></path></svg></button>
</div>
</div>
</header>

<main className="max-w-md mx-auto pt-20 pb-24 px-4">

<section className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-400 text-white p-5 mb-6">
<div className="flex flex-col space-y-2">
<h2 className="text-2xl font-bold">Summer Sale</h2>
<p className="text-sm">Up to 50% off on selected items</p>
<button className="mt-2 px-4 py-2 bg-white text-indigo-600 rounded font-semibold w-max">Shop Now</button>
</div>
</section>

<section className="mb-6">
<h3 className="font-semibold mb-3 text-lg">Categories</h3>
<div className="flex space-x-4 overflow-x-auto pb-2">
<div className="flex flex-col items-center min-w-[70px]">
<div className="bg-white rounded-full p-3 shadow">
<svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg>
</div>
<span className="text-xs mt-1">All</span>
</div>
<div className="flex flex-col items-center min-w-[70px]">
<div className="bg-white rounded-full p-3 shadow">
<svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6z"></path></svg>
</div>
<span className="text-xs mt-1">Electronics</span>
</div>
<div className="flex flex-col items-center min-w-[70px]">
<div className="bg-white rounded-full p-3 shadow">
<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7l9 6 9-6-9-4-9 4z"></path><path d="M21 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"></path></svg>
</div>
<span className="text-xs mt-1">Books</span>
</div>
<div className="flex flex-col items-center min-w-[70px]">
<div className="bg-white rounded-full p-3 shadow">
<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a2.5 2.5 0 015 0M17 21a2.5 2.5 0 015 0"></path></svg>
</div>
<span className="text-xs mt-1">Fashion</span>
</div>
<div className="flex flex-col items-center min-w-[70px]">
<div className="bg-white rounded-full p-3 shadow">
<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12l2 2 6-6m0 0l6 6 2-2m-8-2v10"></path></svg>
</div>
<span className="text-xs mt-1">Home</span>
</div>
</div>
</section>

<section>
<h3 className="font-semibold mb-3 text-lg">Featured</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl shadow p-3 flex flex-col">
<img alt="Product" className="rounded-lg h-28 object-cover mb-2" src="https://images.unsplash.com/photo-1513708927688-890aceacb6ad?auto=format&fit=crop&w=200&q=80" />
<span className="font-semibold text-sm">Wireless Headphones</span>
<span className="text-xs text-gray-500 mb-2">Electronics</span>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-600">$59.99</span>
<button className="bg-indigo-600 text-white rounded px-2 py-1 text-xs">Add</button>
</div>
</div>
<div className="bg-white rounded-xl shadow p-3 flex flex-col">
<img alt="Product" className="rounded-lg h-28 object-cover mb-2" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80" />
<span className="font-semibold text-sm">Leather Backpack</span>
<span className="text-xs text-gray-500 mb-2">Fashion</span>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-600">$39.99</span>
<button className="bg-indigo-600 text-white rounded px-2 py-1 text-xs">Add</button>
</div>
</div>
<div className="bg-white rounded-xl shadow p-3 flex flex-col">
<img alt="Product" className="rounded-lg h-28 object-cover mb-2" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" />
<span className="font-semibold text-sm">Modern Chair</span>
<span className="text-xs text-gray-500 mb-2">Home</span>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-600">$89.99</span>
<button className="bg-indigo-600 text-white rounded px-2 py-1 text-xs">Add</button>
</div>
</div>
<div className="bg-white rounded-xl shadow p-3 flex flex-col">
<img alt="Product" className="rounded-lg h-28 object-cover mb-2" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" />
<span className="font-semibold text-sm">Novel: The Odyssey</span>
<span className="text-xs text-gray-500 mb-2">Books</span>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-600">$14.99</span>
<button className="bg-indigo-600 text-white rounded px-2 py-1 text-xs">Add</button>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow z-10">
<div className="max-w-md mx-auto flex justify-between px-8 py-2">
<button className="flex flex-col items-center text-indigo-600">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"></path></svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"></path></svg>
<span className="text-xs">Search</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.3h12a1 1 0 00.9-1.3L17 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"></path></svg>
<span className="text-xs">Cart</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.093 0 4.077.405 5.879 1.136M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M19.07 4.93a10 10 0 11-14.14 0 10 10 0 0114.14 0z"></path></svg>
<span className="text-xs">Account</span>
</button>
</div>
</nav>

    </>
  );
}
