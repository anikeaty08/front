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
      
<div className="flex flex-col h-screen overflow-hidden">

<header className="px-4 py-3 border-b border-gray-800 bg-gray-900 z-10 fade-in" style={{animationDelay: `0.1s`}}>
<div className="container mx-auto flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path><path d="M13 13h6l2 3"></path></svg>
</div>
<h1 className="text-xl font-semibold tracking-tight">MessageHub</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative bg-gray-800 hover:bg-gray-750 p-2 rounded-full transition-colors duration-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-800"></span>
</button>
<button className="p-2 rounded-full bg-gray-800 hover:bg-gray-750 transition-colors duration-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full overflow-hidden">
<img alt="User" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
</div>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden md:block w-64 border-r border-gray-800 bg-gray-900 overflow-y-auto fade-in" style={{animationDelay: `0.2s`}}>

<div className="p-3 border-b border-gray-800">
<div className="relative">
<input className="w-full py-2 px-3 pl-9 bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search conversations" type="text" />
<svg className="absolute left-3 top-2.5 text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>

<div className="space-y-1 p-1">
<div className="px-2 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">Recent</div>
<div className="relative p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer bg-gray-800/80 gradient-border transition-colors duration-200">
<div className="relative">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Alex Morgan</h3>
<span className="text-xs text-gray-400">12m</span>
</div>
<p className="text-xs text-gray-400 truncate">Just sent you the design files...</p>
</div>
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium">2</div>
</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="relative">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full border-2 border-gray-900"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Sarah Chen</h3>
<span className="text-xs text-gray-400">1h</span>
</div>
<p className="text-xs text-gray-400 truncate">Let me know when you're free</p>
</div>
</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="relative">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Michael Torres</h3>
<span className="text-xs text-gray-400">2h</span>
</div>
<p className="text-xs text-gray-400 truncate">I've reviewed the documentation</p>
</div>
</div>
<div className="px-2 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider mt-4">Teams</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
<span className="text-white font-medium text-sm">D</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Design Team</h3>
<span className="text-xs text-gray-400">3h</span>
</div>
<p className="text-xs text-gray-400 truncate">Weekly design standup at 2PM</p>
</div>
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium">5</div>
</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
<span className="text-white font-medium text-sm">E</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Engineering</h3>
<span className="text-xs text-gray-400">1d</span>
</div>
<p className="text-xs text-gray-400 truncate">Release scheduled for tomorrow</p>
</div>
</div>

<div className="px-2 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider mt-4">Leagues</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
<span className="text-white font-medium text-sm">FB</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Fantasy Basketball</h3>
<span className="text-xs text-gray-400">5h</span>
</div>
<p className="text-xs text-gray-400 truncate">Draft night this Friday at 8PM</p>
</div>
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium">3</div>
</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
<span className="text-white font-medium text-sm">SC</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Soccer Club</h3>
<span className="text-xs text-gray-400">2d</span>
</div>
<p className="text-xs text-gray-400 truncate">Match schedule for next month</p>
</div>
</div>
<div className="p-2 flex items-center gap-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
<span className="text-white font-medium text-sm">RL</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-200 truncate">Running League</h3>
<span className="text-xs text-gray-400">6d</span>
</div>
<p className="text-xs text-gray-400 truncate">Marathon training starts Monday</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-gray-950 overflow-hidden fade-in" style={{animationDelay: `0.3s`}}>

<div className="border-b border-gray-800 bg-gray-900 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="md:hidden p-1 rounded-md hover:bg-gray-800">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
</div>
<div>
<h2 className="text-sm font-medium text-gray-100">Alex Morgan</h2>
<p className="text-xs text-gray-400">Online • Last seen 2m ago</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
</button>
<div className="relative">
<button className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200" id="menu-button">
<svg className="ml-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>

<div className="dropdown-menu absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 hidden" id="dropdown-menu">
<a className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-150" href="#">Search in Conversation</a>
<a className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-150" href="#">Mute Notifications</a>
<a className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-150" href="#" id="settings-button">Settings</a>
<div className="border-t border-gray-700 my-1"></div>
<a className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors duration-150" href="#">Block Contact</a>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages">

<div className="flex justify-center fade-in" style={{animationDelay: `0.4s`}}>
<div className="px-4 py-2 rounded-full bg-gray-800/50 text-xs text-gray-400">
                            Today, 10:24 AM
                        </div>
</div>

<div className="flex gap-3 items-end max-w-[85%] fade-in" style={{animationDelay: `0.5s`}}>
<div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="space-y-1">
<div className="px-4 py-3 rounded-lg bg-gray-800 text-sm text-gray-100">
<p>Hey there! I just wanted to check in about the project. How's everything going?</p>
</div>
<div className="px-4 py-3 rounded-lg bg-gray-800 text-sm text-gray-100">
<p>I've attached the design files for your reference. Let me know if you need anything else!</p>
<div className="mt-2 p-2 bg-gray-700/50 rounded-md flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-200 truncate">project_designs.fig</p>
<p className="text-xs text-gray-400">12.4 MB</p>
</div>
<button className="p-2 rounded-full hover:bg-gray-600 transition-colors duration-200">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
</div>
</div>
<span className="text-xs text-gray-400 pl-2">10:24 AM</span>
</div>
</div>

<div className="flex flex-row-reverse gap-3 items-end max-w-[85%] ml-auto fade-in" style={{animationDelay: `0.6s`}}>
<div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
<img alt="User" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="space-y-1">
<div className="px-4 py-3 rounded-lg bg-blue-600 text-sm text-white">
<p>Hi Alex! Everything's going well. I'm making good progress on the implementation.</p>
</div>
<div className="px-4 py-3 rounded-lg bg-blue-600 text-sm text-white">
<p>Thanks for the designs, I'll take a look right away! 👍</p>
</div>
<div className="flex justify-end text-xs text-gray-400 pr-2">
<span>10:26 AM</span>
<svg className="ml-1 text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path><path d="m20 12-9 9-5-5"></path></svg>
</div>
</div>
</div>

<div className="flex gap-3 items-end max-w-[85%] fade-in" style={{animationDelay: `0.7s`}}>
<div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
<img alt="Contact" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" />
</div>
<div className="space-y-1">
<div className="relative px-4 py-3 rounded-lg bg-gray-800 text-sm text-gray-100">
<p>Great! Let me know if you have any questions about the design. I'll be available for a call later today if needed.</p>
<div className="absolute -bottom-2 right-2 flex -space-x-1">
<span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-xs rounded-full">👍</span>
<span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-xs rounded-full">❤️</span>
</div></div></div></div></div></main></div></div>
    </>
  );
}
