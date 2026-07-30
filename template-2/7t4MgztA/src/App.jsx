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
      
<div className="flex h-screen w-full overflow-hidden">

<div className="hidden md:flex md:w-64 lg:w-72 flex-col bg-[#0c0c0c] border-r border-[#1d1d1f] h-full transition-all duration-200">

<div className="h-14 px-4 flex items-center border-b border-[#1d1d1f]">
<div className="flex items-center">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-blue-500"></div>
<span className="ml-2 font-medium">Aura</span>
</div>
</div>

<nav className="flex-1 pt-4 pb-4 overflow-y-auto">
<div className="px-3 mb-2">
<div className="flex items-center justify-between text-xs text-[#8a8a8d] mb-1 px-2">
<span>WORKSPACE</span>
<button className="hover:bg-[#1d1d1f] p-0.5 rounded">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
</svg>
</button>
</div>
<div className="space-y-0.5">
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#e2e2e4] bg-[#1d1d1f]" href="#">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
<path clip-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path>
</svg>
              Overview
            </a>
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path>
</svg>
              Issues
            </a>
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16.5h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16.5z"></path>
</svg>
              Team
            </a>
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z" fillRule="evenodd"></path>
</svg>
              Projects
            </a>
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" fillRule="evenodd"></path>
</svg>
              Roadmap
            </a>
</div>
</div>
<div className="px-3 mt-6 mb-2">
<div className="flex items-center justify-between text-xs text-[#8a8a8d] mb-1 px-2">
<span>FAVORITES</span>
</div>
<div className="space-y-0.5">
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" fillRule="evenodd"></path>
</svg>
              Backlog
            </a>
<a className="flex items-center px-2 py-1.5 rounded text-sm text-[#8a8a8d] hover:bg-[#1d1d1f] hover:text-[#e2e2e4]" href="#">
<svg className="w-4 h-4 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" fillRule="evenodd"></path>
</svg>
              Active Sprint
            </a>
</div>
</div>
</nav>

<div className="p-3 border-t border-[#1d1d1f]">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-medium">
              AK
            </div>
</div>
<div className="ml-3">
<p className="text-sm font-medium text-white">Alex Kim</p>
<p className="text-xs text-[#8a8a8d]">Design Team</p>
</div>
<div className="ml-auto">
<button className="text-[#8a8a8d] hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="md:hidden fixed bottom-4 left-4 z-50">
<button className="bg-[#1d1d1f] hover:bg-[#2d2d2f] p-3 rounded-full shadow-lg">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fillRule="evenodd"></path>
</svg>
</button>
</div>

<main className="flex-1 overflow-y-auto bg-[#0c0c0c]">
<div className="px-4 md:px-8 py-6">
<div className="flex items-center justify-between mb-6">
<h1 className="text-xl font-semibold">Overview</h1>
<div className="flex items-center space-x-2">
<button className="bg-[#1d1d1f] hover:bg-[#2d2d2f] text-sm px-3 py-1.5 rounded">
<span>Filter</span>
</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-sm px-3 py-1.5 rounded">
<span>New Issue</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-[#141414] border border-[#1d1d1f] rounded-lg p-4">
<h3 className="text-sm text-[#8a8a8d] mb-1">Active Issues</h3>
<div className="flex items-end justify-between">
<p className="text-2xl font-semibold">23</p>
<span className="text-xs text-green-500">↑ 12%</span>
</div>
</div>

<div className="bg-[#141414] border border-[#1d1d1f] rounded-lg p-4">
<h3 className="text-sm text-[#8a8a8d] mb-1">Completed This Week</h3>
<div className="flex items-end justify-between">
<p className="text-2xl font-semibold">17</p>
<span className="text-xs text-green-500">↑ 8%</span>
</div>
</div>

<div className="bg-[#141414] border border-[#1d1d1f] rounded-lg p-4">
<h3 className="text-sm text-[#8a8a8d] mb-1">Team Velocity</h3>
<div className="flex items-end justify-between">
<p className="text-2xl font-semibold">42</p>
<span className="text-xs text-red-500">↓ 3%</span>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
