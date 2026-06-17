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
      
<div className="iphone-frame">
<div className="notch"></div>
<div className="home-indicator"></div>
<div className="bg-stone-900 text-white font-sans h-full overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 h-8 mt-1 z-40">
<div className="text-white text-xs">9:41</div>
<div className="flex items-center space-x-1">
<i className="fas fa-signal text-white text-xs"></i>
<i className="fas fa-wifi text-white text-xs"></i>
<i className="fas fa-battery-full text-white text-xs"></i>
</div>
</div>

<header className="px-4 pt-3 pb-2 flex justify-between items-center">
<h1 className="text-2xl font-semibold">Explore</h1>
<div className="flex items-center space-x-4">
<button className="text-white"><i className="fas fa-search text-xl"></i></button>
<button className="w-8 h-8 rounded-full overflow-hidden bg-gray-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto scrollbar-hide pb-20">

<div className="flex space-x-2 px-4 py-4 overflow-x-auto scrollbar-hide">
<button className="px-4 py-1.5 bg-blue-500 rounded-full text-sm font-medium whitespace-nowrap">All</button>
<button className="px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap">TV Shows</button>
<button className="px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap">Movies</button>
<button className="px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap">Categories</button>
<button className="px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap">My List</button>
</div>

<div className="mt-2 px-4">
<div className="relative rounded-xl overflow-hidden shadow-sm">
<img alt="Featured" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;w=800&amp;h=450&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
<span className="bg-blue-500 text-xs px-2 py-0.5 rounded-sm font-medium">New Release</span>
<h3 className="text-lg font-bold mt-1">Stranger Things</h3>
<div className="flex items-center text-xs mt-1">
<span className="text-green-400 mr-2">97% Match</span>
<span>2022</span>
</div>
</div>
<button className="absolute bottom-4 right-4 bg-white bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center">
<i className="fas fa-play text-white"></i>
</button>
</div>
</div>

<div className="mt-6 px-4">
<h2 className="text-lg font-bold mb-3">Continue Watching</h2>
<div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
<div className="flex-shrink-0 w-32 relative">
<img alt="Movie" className="w-full h-44 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
<div className="w-3/4 h-full bg-red-600"></div>
</div>
</div>
<div className="flex-shrink-0 w-32 relative">
<img alt="Movie" className="w-full h-44 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
<div className="w-1/4 h-full bg-red-600"></div>
</div>
</div>
<div className="flex-shrink-0 w-32 relative">
<img alt="Movie" className="w-full h-44 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
<div className="w-1/2 h-full bg-red-600"></div>
</div>
</div>
</div>
</div>

<div className="mt-6 px-4">
<h2 className="text-lg font-bold mb-3">Trending Now</h2>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-md overflow-hidden shadow-sm">
<img alt="Movie" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
<div className="rounded-md overflow-hidden shadow-sm">
<img alt="Movie" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
<div className="rounded-md overflow-hidden shadow-sm">
<img alt="Movie" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
</div>
</div>

<div className="mt-6 px-4 pb-16">
<h2 className="text-lg font-bold mb-3">Top 10 in Your Country</h2>
<div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
<div className="flex-shrink-0 flex items-end relative">
<span className="absolute bottom-0 left-0 text-6xl font-bold text-stone-800 z-10 translate-x-[-15px] translate-y-[5px]">1</span>
<img alt="Movie" className="w-28 h-40 object-cover rounded-md shadow-sm ml-4 relative z-20" src="https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
<div className="flex-shrink-0 flex items-end relative">
<span className="absolute bottom-0 left-0 text-6xl font-bold text-stone-800 z-10 translate-x-[-15px] translate-y-[5px]">2</span>
<img alt="Movie" className="w-28 h-40 object-cover rounded-md shadow-sm ml-4 relative z-20" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
<div className="flex-shrink-0 flex items-end relative">
<span className="absolute bottom-0 left-0 text-6xl font-bold text-stone-800 z-10 translate-x-[-15px] translate-y-[5px]">3</span>
<img alt="Movie" className="w-28 h-40 object-cover rounded-md shadow-sm ml-4 relative z-20" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=300&amp;h=450&amp;q=80"/>
</div>
</div>
</div>
</main>

<div className="bg-[#2a2a2a] mt-auto">
<nav className="py-3 mb-5">
<ul className="flex justify-between items-center px-10">
<li className="flex flex-col items-center">
<i className="fas fa-home text-lg text-white"></i>
<span className="text-xs mt-1">Home</span>
</li>
<li className="flex flex-col items-center">
<i className="fas fa-compass text-lg text-blue-500"></i>
<span className="text-xs mt-1 text-blue-500">Explore</span>
</li>
<li className="flex flex-col items-center">
<i className="fas fa-heart text-lg text-white"></i>
<span className="text-xs mt-1">My List</span>
</li>
<li className="flex flex-col items-center">
<i className="fas fa-download text-lg text-white"></i>
<span className="text-xs mt-1">Downloads</span>
</li>
<li className="flex flex-col items-center">
<i className="fas fa-ellipsis-h text-lg text-white"></i>
<span className="text-xs mt-1">More</span>
</li>
</ul>
</nav>
</div>
</div>
</div>

    </>
  );
}
