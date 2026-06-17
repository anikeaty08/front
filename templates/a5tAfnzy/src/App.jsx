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
      
<div className="phone-frame relative w-[320px] h-[650px] bg-black rounded-[50px] p-4 shadow-xl flex flex-col">

<div className="notch absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[20px] z-20 flex justify-center items-center">
<div className="camera bg-gray-700 w-3 h-3 rounded-full mr-2"></div>
<div className="speaker bg-gray-700 w-12 h-1.5 rounded-full"></div>
</div>

<div className="screen bg-white w-full h-full rounded-[40px] overflow-hidden relative z-10">

<div className="status-bar flex justify-between items-center px-6 pt-8 pb-2 text-xs">
<div className="time font-semibold">9:41</div>
<div className="icons flex space-x-1.5">
<div className="signal flex space-x-0.5">
<div className="bar w-0.5 h-2 bg-black rounded-sm"></div>
<div className="bar w-0.5 h-2.5 bg-black rounded-sm"></div>
<div className="bar w-0.5 h-3 bg-black rounded-sm"></div>
<div className="bar w-0.5 h-3.5 bg-black rounded-sm"></div>
</div>
<div className="wifi">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L17 11M12 16L7 11M12 16V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="battery flex items-center">
<div className="w-5 h-2.5 border border-black rounded-sm relative">
<div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black rounded-sm m-[1px]"></div>
<div className="absolute -right-[3px] top-1/2 transform -translate-y-1/2 w-[2px] h-1 bg-black rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="app-content p-4 h-[calc(100%-70px)] overflow-y-auto">

<div className="app-header flex justify-between items-center mb-6">
<h1 className="text-2xl font-bold">Home</h1>
<div className="profile-pic w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
<svg className="w-full h-full text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>
</div>

<div className="search-bar bg-gray-100 rounded-full p-3 flex items-center mb-6">
<svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-500">Search</span>
</div>

<div className="content-cards space-y-4">
<div className="card bg-blue-100 p-4 rounded-xl">
<h3 className="font-bold mb-2">Featured</h3>
<p className="text-sm text-gray-700">This is a sample card content that could contain any app information.</p>
</div>
<div className="card bg-purple-100 p-4 rounded-xl">
<h3 className="font-bold mb-2">Recent Activity</h3>
<p className="text-sm text-gray-700">Your recent activity will appear here.</p>
</div>
<div className="card bg-yellow-100 p-4 rounded-xl">
<h3 className="font-bold mb-2">Notifications</h3>
<p className="text-sm text-gray-700">You have 3 unread notifications.</p>
</div>
<div className="card bg-green-100 p-4 rounded-xl">
<h3 className="font-bold mb-2">Messages</h3>
<p className="text-sm text-gray-700">You have 2 new messages.</p>
</div>
</div>
</div>

<div className="bottom-nav absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
<button className="nav-item flex flex-col items-center">
<svg className="w-6 h-6 text-blue-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
<span className="text-xs mt-1 text-blue-500">Home</span>
</button>
<button className="nav-item flex flex-col items-center">
<svg className="w-6 h-6 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path>
</svg>
<span className="text-xs mt-1">Search</span>
</button>
<button className="nav-item flex flex-col items-center">
<svg className="w-6 h-6 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
<span className="text-xs mt-1">Menu</span>
</button>
<button className="nav-item flex flex-col items-center">
<svg className="w-6 h-6 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" fill-rule="evenodd"></path>
</svg>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>

<div className="side-button absolute -right-1 top-24 w-1.5 h-8 bg-gray-800 rounded-l-sm"></div>

<div className="volume-up absolute -left-1 top-32 w-1.5 h-8 bg-gray-800 rounded-r-sm"></div>
<div className="volume-down absolute -left-1 top-44 w-1.5 h-8 bg-gray-800 rounded-r-sm"></div>
</div>

    </>
  );
}
