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



  lucide.createIcons();

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
      

<div className="w-full max-w-2xl rounded-2xl bg-gray-900/90 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl">

<div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-white/10">
<svg className="lucide lucide-search w-5 h-5 text-zinc-400 flex-shrink-0" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 focus:outline-none placeholder:text-zinc-500 sm:text-base text-sm bg-transparent rounded-xl" placeholder="Search tasks, teammates, projects, or conversations..." type="text"/>
<div className="hidden sm:flex gap-2">
<div className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-white/10 rounded-md text-xs text-zinc-400">⌘</div>
<div className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-white/10 rounded-md text-xs text-zinc-400">K</div>
</div>
</div>

<div className="px-4 sm:px-6 py-4 border-b border-white/10">
<div className="flex gap-2 sm:gap-3 text-sm font-medium">
<button className="tab active flex gap-2 ring-1 ring-white/20 whitespace-nowrap bg-gray-800 rounded-full pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="lucide lucide-check-square w-4 h-4 text-emerald-400" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="hidden sm:inline">Tasks</span>
</button>
<button className="tab flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-800 ring-1 ring-transparent hover:ring-white/10 whitespace-nowrap">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="hidden sm:inline">Team</span>
</button>
<button className="tab flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-800 ring-1 ring-transparent hover:ring-white/10 whitespace-nowrap">
<svg className="lucide lucide-briefcase w-4 h-4 text-purple-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="hidden sm:inline">Projects</span>
</button>
<button className="tab flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-800 ring-1 ring-transparent hover:ring-white/10 whitespace-nowrap">
<svg className="lucide lucide-message-square w-4 h-4 text-amber-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="hidden sm:inline">Chats</span>
</button>
<button className="tab flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-800 ring-1 ring-transparent hover:ring-white/10 whitespace-nowrap">
<svg className="lucide lucide-file-text w-4 h-4 text-green-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="hidden sm:inline">Docs</span>
</button>
</div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-8 text-sm max-h-96 overflow-y-auto">

<div className="">
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-300 font-semibold flex items-center gap-2">
<svg className="lucide lucide-list-todo w-4 h-4" data-lucide="list-todo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="3" y="5"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
          Recent Tasks
        </h3>
<span className="text-xs text-zinc-500 bg-gray-800 px-2 py-1 rounded-full">12 total</span>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<span className="checkbox relative flex-shrink-0">
<input type="checkbox"/>
<span></span>
</span>
<div>
<p className="font-medium">Implement OAuth 2.0 Authentication</p>
<p className="text-xs text-zinc-500 mt-1">Mobile App • Due tomorrow</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">High</span>
<span className="text-xs text-zinc-500">4h</span>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<span className="checkbox relative flex-shrink-0">
<input checked="" type="checkbox"/>
<span></span>
</span>
<div>
<p className="font-medium line-through opacity-60">Review Figma Design System Components</p>
<p className="text-xs text-zinc-500 mt-1">Design System • Completed</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">Done</span>
<span className="text-xs text-zinc-500">2h</span>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<span className="checkbox relative flex-shrink-0">
<input type="checkbox"/>
<span></span>
</span>
<div>
<p className="font-medium">Database Migration &amp; Performance Optimization</p>
<p className="text-xs text-zinc-500 mt-1">Backend • Due Friday</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Medium</span>
<span className="text-xs text-zinc-500">6h</span>
</div>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-300 font-semibold flex items-center gap-2">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Team Members
        </h3>
<span className="text-xs text-zinc-500 bg-gray-800 px-2 py-1 rounded-full">24 online</span>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=68"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-gray-900 rounded-full"></div>
</div>
<div>
<p className="font-medium">Sarah Chen</p>
<p className="text-xs text-zinc-500">Senior Frontend Developer</p>
</div>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500">Active now</span>
<p className="text-xs text-zinc-400">7 tasks assigned</p>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=33"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-yellow-400 border-2 border-gray-900 rounded-full"></div>
</div>
<div>
<p className="font-medium">Marcus Rodriguez</p>
<p className="text-xs text-zinc-500">DevOps Engineer</p>
</div>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500">Away</span>
<p className="text-xs text-zinc-400">3 tasks assigned</p>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=44"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-gray-900 rounded-full"></div>
</div>
<div>
<p className="font-medium">Priya Patel</p>
<p className="text-xs text-zinc-500">Product Designer</p>
</div>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500">Active now</span>
<p className="text-xs text-zinc-400">12 tasks assigned</p>
</div>
</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-300 font-semibold flex items-center gap-2">
<svg className="lucide lucide-folder-open w-4 h-4" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
          Active Projects
        </h3>
<span className="text-xs text-zinc-500 bg-gray-800 px-2 py-1 rounded-full">8 projects</span>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-smartphone w-4 h-4 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div>
<p className="font-medium">NexusHub Mobile App</p>
<p className="text-xs text-zinc-500">Mobile Development • 87% complete</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-gray-900" src="https://i.pravatar.cc/32?img=21"/>
<img className="w-6 h-6 rounded-full border-2 border-gray-900" src="https://i.pravatar.cc/32?img=22"/>
<img className="w-6 h-6 rounded-full border-2 border-gray-900" src="https://i.pravatar.cc/32?img=23"/>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-[10px] border-2 border-gray-900">+4</span>
</div>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div>
<p className="font-medium">API Infrastructure Redesign</p>
<p className="text-xs text-zinc-500">Backend • 45% complete</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-gray-900" src="https://i.pravatar.cc/32?img=35"/>
<img className="w-6 h-6 rounded-full border-2 border-gray-900" src="https://i.pravatar.cc/32?img=36"/>
</div>
</div>
</li>
</ul>
</div>
</div>

<div className="flex items-center justify-between px-4 sm:px-6 py-4 border-t border-white/10 text-xs text-zinc-400">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-arrow-up-down w-4 h-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span className="hidden sm:inline">Navigate</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-corner-down-left w-4 h-4" data-lucide="corner-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4v7a4 4 0 0 1-4 4H4"></path><path d="m9 10-5 5 5 5"></path></svg>
<span className="hidden sm:inline">Select</span>
</div>
</div>
<div className="flex items-center gap-1">
<span className="hidden sm:inline">ESC to close</span>
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</div>
</div>



    </>
  );
}
