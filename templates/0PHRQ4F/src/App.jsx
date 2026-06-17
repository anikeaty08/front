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
      

<div className="relative w-72 sm:w-80 h-screen max-h-[812px] flex flex-col bg-slate-100/80 border rounded-3xl shadow-2xl backdrop-blur-sm overflow-hidden">

<div className="flex items-center justify-between p-6 pb-4">
<h1 className="text-2xl font-semibold text-gray-900">My Favorites</h1>
<button className="h-8 w-8 rounded-full bg-white shadow flex items-center justify-center">
<svg className="h-4 w-4 stroke-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
</button>
</div>

<div className="flex gap-2 overflow-x-auto pb-1 px-6">
<button className="shrink-0 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">All</button>
<button className="shrink-0 text-sm font-medium text-gray-600 bg-white border-gray-200 border rounded-full pt-2 pr-4 pb-2 pl-4">Temples</button>
<button className="shrink-0 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">Food</button>
<button className="shrink-0 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">Views</button>
</div>

<div className="flex items-center justify-between text-sm px-6 py-4">
<span className="text-gray-600">12 saved places</span>
<button className="flex items-center gap-1 text-gray-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>
<span className="">Sort</span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-4">
<div className="space-y-4">

<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1706813253696-10ee6332edd3?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
<svg className="h-4 w-4 text-red-500" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<span className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">Temple</span>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h3 className="font-semibold text-gray-900">Senso-ji Temple</h3>
<p className="text-sm text-gray-500">Asakusa, Tokyo</p>
</div>
<div className="flex items-center gap-1">
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-medium text-gray-700">4.7</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  2-3 hrs
                </span>
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path></svg>
                  Free
                </span>
</div>
<span className="text-xs text-gray-400">Added 3 days ago</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1554797589-7241bb691973?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
<svg className="h-4 w-4 text-red-500" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">Food</span>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h3 className="font-semibold text-gray-900">Tsukiji Fish Market</h3>
<p className="text-sm text-gray-500">Chuo, Tokyo</p>
</div>
<div className="flex items-center gap-1">
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-medium text-gray-700">4.5</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  1-2 hrs
                </span>
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path></svg>
                  ¥¥
                </span>
</div>
<span className="text-xs text-gray-400">Added 1 week ago</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1696766061774-453cc4c7187d?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
<svg className="h-4 w-4 text-red-500" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">Views</span>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h3 className="font-semibold text-gray-900">Tokyo Skytree</h3>
<p className="text-sm text-gray-500">Sumida, Tokyo</p>
</div>
<div className="flex items-center gap-1">
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-medium text-gray-700">4.6</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  2-4 hrs
                </span>
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path></svg>
                  ¥2,100
                </span>
</div>
<span className="text-xs text-gray-400">Added 2 weeks ago</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1705695373213-115c102714fd?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
<svg className="h-4 w-4 text-red-500" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Garden</span>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h3 className="font-semibold text-gray-900">Shinjuku Gyoen</h3>
<p className="text-sm text-gray-500">Shinjuku, Tokyo</p>
</div>
<div className="flex items-center gap-1">
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-medium text-gray-700">4.4</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  3-4 hrs
                </span>
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path></svg>
                  ¥500
                </span>
</div>
<span className="text-xs text-gray-400">Added 1 month ago</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
<svg className="h-4 w-4 text-red-500" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Culture</span>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="">
<h3 className="font-semibold text-gray-900">Shibuya Crossing</h3>
<p className="text-sm text-gray-500">Shibuya, Tokyo</p>
</div>
<div className="flex items-center gap-1">
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-medium text-gray-700">4.3</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                  30 min
                </span>
<span className="flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path></svg>
                  Free
                </span>
</div>
<span className="text-xs text-gray-400">Added 2 months ago</span>
</div>
</div>
</div>
</div>
</div>

<nav className="flex items-center justify-between bg-white/70 backdrop-blur rounded-full py-3 px-6 shadow mx-6 mb-6 mt-auto">
<button className=""><svg className="stroke-gray-400 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button>
<button className=""><svg className="stroke-gray-400 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg></button>
<button className="flex flex-col items-center gap-1">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
<svg className="h-4 w-4 stroke-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</span>
</button>
<button className=""><svg className="stroke-gray-400 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg></button>
</nav>
</div>

    </>
  );
}
