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
      
<div className="w-[340px] h-[900px] frost border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">

<div className="flex items-center gap-3 px-6 py-7 border-b border-neutral-800">
<div className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-2xl">

<svg className="w-7 h-7" fill="none" viewbox="0 0 44 44">
<g><path d="M22 5.8a7.46 7.46 0 0 1 7.44 0l6.47 3.75a7.3 7.3 0 0 1 3.73 6.47v7.5a7.3 7.3 0 0 1-3.73 6.47L29.44 38.2a7.46 7.46 0 0 1-7.44 0l-6.47-3.75A7.3 7.3 0 0 1 5.8 29.44v-7.5a7.3 7.3 0 0 1 3.73-6.47l6.47-3.75A7.46 7.46 0 0 1 22 5.8Z" fill="#fff"></path><circle cx="22" cy="22" fill="#232325" r="9"></circle><path d="M22 13a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#777"></path></g>
</svg>
</div>
<span className="ml-2 text-lg font-semibold tracking-tight text-white select-none flex-1" style={{letterSpacing: '-.01em'}}>ChatGPT</span>
<button aria-label="Close sidebar" className="rounded-full flex items-center justify-center w-9 h-9 hover:bg-neutral-800 transition group">
<i className="w-6 h-6 text-neutral-500 group-hover:text-white transition" data-lucide="x"></i>
</button>
</div>

<div className="px-6 pt-7 pb-4 border-b border-neutral-800">
<button className="flex items-center w-full gap-2 rounded-xl border border-neutral-700 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-900 text-neutral-200 font-semibold px-4 py-2 shadow-sm transition">
<i className="w-5 h-5" data-lucide="plus"></i> New chat
      </button>
</div>

<nav className="flex-1 px-2 pt-4 pb-2 overflow-y-auto sidebar-scroll">
<div className="mb-3 px-3">
<div className="uppercase text-[11px] tracking-wide font-bold text-neutral-500 mb-1 pt-2">Chats</div>
<ul className="space-y-[2px]">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800 transition text-white font-medium group" href="#">
<i className="w-5 h-5 text-neutral-300" data-lucide="message-square"></i>
              Recent Session
              <span className="ml-auto flex items-center">
<span className="inline-flex items-center justify-center text-xs font-semibold bg-neutral-600 text-white rounded-full w-5 h-5">3</span>
</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800 transition text-white font-medium group" href="#">
<i className="w-5 h-5 text-neutral-400" data-lucide="folder"></i>
              Dev Notes
              <span className="ml-auto flex items-center">
<span className="inline-flex items-center justify-center text-xs font-semibold bg-neutral-700 text-white rounded-full w-5 h-5">5</span>
</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800 transition text-white font-medium group" href="#">
<i className="w-5 h-5 text-neutral-500" data-lucide="folder"></i>
              Archive
            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800 transition text-white font-medium group" href="#">
<i className="w-5 h-5 text-neutral-500" data-lucide="message-circle"></i>
              Chat with Claude
              <span className="ml-auto flex items-center">
<span className="inline-flex items-center justify-center text-xs font-semibold bg-neutral-600 text-white rounded-full w-5 h-5">1</span>
</span>
</a>
</li>
</ul>
</div>
<div className="mt-6 px-3">
<div className="uppercase text-[11px] tracking-wide font-bold text-neutral-500 mb-1">Shortcuts</div>
<ul className="space-y-[2px]">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-neutral-800 transition text-white font-medium" href="#">
<i className="w-5 h-5 text-neutral-300" data-lucide="star"></i>
              Starred
            </a>
</li>
</ul>
</div>
</nav>

<div className="px-3 pb-2 space-y-2">
<a className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-neutral-800 transition text-white font-medium" href="#">
<i className="w-5 h-5 text-neutral-400" data-lucide="settings"></i>
        Settings
      </a>
<a className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-neutral-800 transition text-white font-medium" href="#">
<i className="w-5 h-5 text-neutral-400" data-lucide="credit-card"></i>
        View Plans
      </a>
</div>

<div className="flex items-center gap-3 px-6 py-5 border-t border-neutral-800 bg-neutral-900/90 backdrop-blur-lg">
<img alt="User" className="w-10 h-10 rounded-lg object-cover border border-neutral-800 shadow-sm" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="flex-1 min-w-0">
<span className="block font-semibold text-white text-[15px] truncate leading-tight">Your Name</span>
<span className="block text-xs text-neutral-400 truncate">@youremail.com</span>
</div>
<button aria-label="Log out" className="ml-auto flex items-center px-2 py-2 rounded-lg hover:bg-neutral-800 transition">
<i className="w-5 h-5 text-neutral-500 hover:text-neutral-200" data-lucide="log-out"></i>
</button>
</div>
</div>


    </>
  );
}
