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
        extend: {
          fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
          colors: {
            flux: {
              50:'#faf7ff',
              100:'#f3efff',
              200:'#e9dfff',
              300:'#d6c2ff',
              400:'#b794ff',
              500:'#9567ff',
              600:'#7c3aed',
              700:'#6d28d9',
              800:'#5b21b6'
            }
          }
        }
      }
    }
  


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
      
<div className="max-w-7xl mx-auto bg-zinc-800 shadow-xl rounded-xl overflow-hidden my-4 md:my-6 border border-zinc-700">

<header className="flex flex-col md:flex-row items-start md:items-center justify-between md:px-6 border-zinc-700 bg-gradient-to-b from-zinc-800/50 border-b pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center space-x-2 mb-3 md:mb-0">
<div className="bg-clip-text text-xl font-medium text-transparent tracking-tighter bg-gradient-to-r from-flux-400 to-flux-300">Mail</div>
<span className="text-zinc-500 text-xs">/ Compose</span>
</div>
<nav className="flex flex-wrap gap-3 md:gap-6 text-xs font-medium mb-3 md:mb-0">
<a className="flex items-center space-x-1.5 text-zinc-400 hover:text-flux-400 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>Inbox</span>
</a>
<a className="flex items-center space-x-1.5 text-flux-400 font-semibold" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Compose</span>
</a>
<a className="flex items-center space-x-1.5 text-zinc-400 hover:text-flux-400 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Drafts</span>
</a>
</nav>
<div className="flex items-center space-x-1.5">
<button className="p-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors">
<svg className="text-zinc-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-1.5 rounded-md bg-flux-600 text-white hover:bg-flux-700 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<aside className="col-span-1 lg:col-span-3 lg:p-6 lg:border-r lg:border-zinc-700 bg-gradient-to-b from-zinc-800/30 to-zinc-800/50 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between mb-5">
<h2 className="text-sm font-semibold text-white">Compose</h2>
<div className="flex items-center space-x-1 text-xs text-zinc-400">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
<span>Draft auto-saved</span>
</div>
</div>

<div className="space-y-2 mb-6">
<button className="w-full flex items-center space-x-2 px-3 py-2 bg-flux-600 text-white rounded-md hover:bg-flux-700 transition-colors text-xs font-medium">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Send Email</span>
<div className="ml-auto text-xs opacity-60">⌘↵</div>
</button>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center space-x-1 px-2 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>Draft</span>
</button>
<button className="flex items-center justify-center space-x-1 px-2 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
<span>Delete</span>
</button>
</div>
</div>

<div className="space-y-3 mb-6">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Settings</h3>
<div className="space-y-2">
<label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
<span>Priority: High</span>
<input className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-flux-600 focus:ring-flux-500 focus:ring-1" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
<span>Read receipt</span>
<input className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-flux-600 focus:ring-flux-500 focus:ring-1" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
<span>Schedule send</span>
<input className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-flux-600 focus:ring-flux-500 focus:ring-1" type="checkbox"/>
</label>
</div>
</div>

<div className="space-y-3 mb-6">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Templates</h3>
<div className="space-y-1">
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center justify-between">
<p className="font-medium text-zinc-200 text-xs">Meeting Request</p>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
<p className="text-zinc-400 text-xs">Schedule meetings efficiently</p>
</button>
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center justify-between">
<p className="font-medium text-zinc-200 text-xs">Project Update</p>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
<p className="text-zinc-400 text-xs">Weekly status updates</p>
</button>
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center justify-between">
<p className="font-medium text-zinc-200 text-xs">Follow Up</p>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
<p className="text-zinc-400 text-xs">Professional follow-ups</p>
</button>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Recent Contacts</h3>
<div className="space-y-1">
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">J</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200 truncate">John Smith</p>
<p className="text-xs text-zinc-400 truncate">john@company.com</p>
</div>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-medium">S</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200 truncate">Sarah Wilson</p>
<p className="text-xs text-zinc-400 truncate">sarah@design.co</p>
</div>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<button className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-medium">M</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200 truncate">Mike Chen</p>
<p className="text-xs text-zinc-400 truncate">mike@startup.io</p>
</div>
<svg className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
</div>
</div>
</aside>

<main className="col-span-1 lg:col-span-9 lg:p-8 space-y-5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between mb-6">
<h1 className="text-lg font-semibold text-white">New Message</h1>
<div className="flex items-center space-x-1.5 text-xs text-zinc-400">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Auto-saved 2 minutes ago</span>
</div>
</div>

<form className="space-y-4">

<div className="space-y-3">
<div className="flex items-center space-x-3">
<label className="w-12 text-xs font-medium text-zinc-300">To:</label>
<input className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent" placeholder="Enter recipient emails..." type="email"/>
</div>
<div className="flex items-center space-x-3">
<label className="w-12 text-xs font-medium text-zinc-300">CC:</label>
<input className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent" placeholder="Carbon copy recipients..." type="email"/>
</div>
<div className="flex items-center space-x-3">
<label className="w-12 text-xs font-medium text-zinc-300">BCC:</label>
<input className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent" placeholder="Blind carbon copy recipients..." type="email"/>
</div>
</div>

<div className="flex items-center space-x-3">
<label className="w-12 text-xs font-medium text-zinc-300">Subject:</label>
<input className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent" placeholder="Enter email subject..." type="text"/>
</div>

<div className="border-t border-b border-zinc-600 py-3">
<div className="flex items-center space-x-0.5 flex-wrap gap-1">
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h8a4 4 0 1 1 0 8H6z"></path><path d="M6 12h7a4 4 0 1 1 0 8H6z"></path></svg>
</button>
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-9M14 20H5M15 9v11"></path></svg>
</button>
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 17L11 12 6 7"></path><path d="M13 7L18 12 13 17"></path></svg>
</button>
<div className="w-px h-4 bg-zinc-600 mx-1"></div>
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M6 12h15"></path><path d="M3 18h18"></path></svg>
</button>
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</button>
<button className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300" type="button">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</button>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-300">Message:</label>
<textarea className="w-full px-3 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent resize-y" placeholder="Write your email message here..." rows="10"></textarea>
</div>

<div className="border border-zinc-600 border-dashed rounded-md p-4">
<div className="text-center">
<svg className="text-zinc-400 mx-auto mb-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
<p className="text-zinc-400 text-xs mb-1">Drag and drop files here or</p>
<button className="text-flux-400 hover:text-flux-300 text-xs font-medium" type="button">browse files</button>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-zinc-600">
<div className="flex items-center space-x-3 text-xs text-zinc-400">
<span>Draft saved • 124 chars</span>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs" type="button">
                Save Draft
              </button>
<button className="px-4 py-1.5 bg-flux-600 text-white rounded-md hover:bg-flux-700 transition-colors font-medium text-xs" type="submit">
                Send Email
              </button>
</div>
</div>
</form>
</main>
</section>
</div>


    </>
  );
}
