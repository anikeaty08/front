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
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        },
        extend: {
          colors: {
            sidebar: '#19171C',
            section: '#232129',
            userbar: '#2C2A31',
            accent: '#4A154B'
          }
        }
      }
    }
  
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
      
<aside className="w-72 min-h-[800px] h-[800px] rounded-2xl bg-sidebar shadow-xl border border-gray-700 flex flex-col overflow-hidden">

<div className="flex items-center gap-3 px-6 pt-7 pb-5 border-b border-gray-800">
<div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center text-2xl font-extrabold text-white">Q</div>
<div>
<div className="text-white font-semibold text-lg leading-tight">QuantumHQ</div>
<button className="text-xs text-purple-200 hover:underline">View workspace</button>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 bg-sidebar">
<div>
<div className="flex items-center justify-between px-1 text-gray-400 uppercase text-xs tracking-wide mb-1 font-semibold select-none">
<span>Channels</span>
<button className="text-gray-400 hover:bg-section/30 rounded-sm p-1">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<nav className="space-y-0.5 mb-4">
<a className="flex items-center px-3 py-2 rounded text-white font-medium bg-section hover:bg-accent/30 group transition" href="#">
<span className="mr-2 text-purple-200 text-base">#</span> general
          </a>
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="mr-2 text-yellow-300 text-base">#</span> dev
          </a>
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="mr-2 text-green-300 text-base">#</span> design
          </a>
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="mr-2 text-pink-400 text-base">#</span> random
          </a>
</nav>
</div>

<div>
<div className="flex items-center justify-between px-1 text-gray-400 uppercase text-xs tracking-wide mb-1 font-semibold select-none">
<span>Direct messages</span>
<button className="text-gray-400 hover:bg-section/30 rounded-sm p-1">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<nav className="space-y-0.5">
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="relative mr-2">
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border-2 border-sidebar"></span>
<img alt="" className="w-6 h-6 rounded-full border-2 border-sidebar" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</span>
            Alex
          </a>
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="mr-2"><img alt="" className="w-6 h-6 rounded-full border-2 border-sidebar" src="https://randomuser.me/api/portraits/women/44.jpg"/></span>
            Samantha
          </a>
<a className="flex items-center px-3 py-2 rounded text-gray-200 hover:bg-accent/20 group" href="#">
<span className="mr-2"><img alt="" className="w-6 h-6 rounded-full border-2 border-sidebar" src="https://randomuser.me/api/portraits/men/45.jpg"/></span>
            John
          </a>
</nav>
</div>
</div>

<div className="px-5 py-5 bg-userbar flex items-center gap-3 border-t border-gray-800">
<img alt="" className="w-9 h-9 rounded-full border-2 border-accent" src="https://randomuser.me/api/portraits/women/47.jpg"/>
<div className="flex-1">
<div className="text-white font-medium leading-tight">Your Name</div>
<div className="text-xs text-gray-400">Active</div>
</div>
<button className="hover:bg-accent/20 p-2 rounded">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</aside>

    </>
  );
}
