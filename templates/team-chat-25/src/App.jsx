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
      


<input className="peer/chatP1 sr-only" id="chat-project-1" type="checkbox"/>
<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/chatP1:opacity-100 peer-checked/chatP1:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="chat-project-1"></label>
<div className="absolute inset-x-0 bottom-0 top-0 md:inset-y-6 md:mx-auto md:max-w-3xl bg-white shadow-xl md:rounded-2xl flex flex-col">

<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
<div className="flex items-center gap-3">
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer outline-none focus-visible:ring-2 ring-blue-500" htmlFor="chat-project-1">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7"></path>
</svg>
</label>
<img alt="" className="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1542759564-6a5f9f4a6bc8?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[15px] font-semibold tracking-tight">Website Revamp</div>
<div className="text-xs text-slate-500">8 members • In Task</div>
</div>
</div>
<div className="relative">

<input className="peer/menu sr-only" id="chatP1-menu" type="checkbox"/>
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer outline-none focus-visible:ring-2 ring-blue-500" htmlFor="chatP1-menu">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12h.01M12 5h.01M12 19h.01"></path>
</svg>
</label>
<div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg p-2 hidden peer-checked/menu:block">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 21a2 2 0 01-3.46 0"></path>
<path d="M18.63 13A17.89 17.89 0 0018 8"></path>
<path d="M6.26 6.26A6 6 0 0118 8"></path>
<path d="M2 2l20 20"></path>
</svg>
                Mute notifications
              </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 00-3-3.87"></path>
<path d="M16 3.13a4 4 0 010 7.75"></path>
</svg>
                View members
              </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12V8z"></path>
<path d="M14 2v6h6"></path>
</svg>
                View files
              </button>
<label className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 text-sm text-red-600 cursor-pointer" htmlFor="chat-project-1">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
<path d="M16 17l5-5-5-5"></path>
<path d="M21 12H9"></path>
</svg>
                Exit chat
              </label>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">

<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-100 outline-none focus-visible:ring-2 ring-blue-500">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"></path>
<path d="M22 14l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3z"></path>
</svg>
              View AI Summary
            </button>
<span className="text-xs text-slate-500">Missed updates? Get a 30s recap.</span>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-slate-200"></div>
<div className="text-[11px] text-slate-500">Today</div>
<div className="flex-1 h-px bg-slate-200"></div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-slate-500 mb-1">Alex • 10:14 AM</div>
<div className="max-w-[78vw] md:max-w-md bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-3.5 py-2 shadow-sm">
                UI screens are updated. Linking the task below.
              </div>

<div className="mt-2 max-w-[78vw] md:max-w-md border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">TASK-482 • Update Profile UI</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Due Fri</span>
</div>
<div className="text-xs text-slate-500 mt-1">Status: In Review • Assignee: You</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-[11px] text-slate-500">Auto-preview</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<button className="text-[11px] text-blue-600 hover:underline">Open Task</button>
</div>
</div>
</div>
</div>

<div className="flex items-end justify-end">
<div>
<div className="text-xs text-right text-slate-500 mb-1">You • 10:18 AM</div>
<div className="max-w-[78vw] md:max-w-md bg-blue-600 text-white rounded-2xl rounded-tr-md px-3.5 py-2 shadow-sm">
                Nice! Recording a quick voice note with feedback.
              </div>

<div className="mt-2 max-w-[78vw] md:max-w-md bg-blue-50 border border-blue-100 rounded-xl px-3.5 py-3 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v11"></path>
<rect height="11" rx="3" width="6" x="9" y="2"></rect>
<path d="M5 10a7 7 0 0014 0M12 19v4M8 23h8"></path>
</svg>
<div className="text-xs text-blue-800">Voice Note • 0:23</div>
</div>
<button className="text-xs text-blue-700 px-2 py-1 rounded-lg hover:bg-blue-100">Play</button>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            Alex is typing
            <span className="inline-flex gap-1 ml-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-150"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-300"></span>
</span>
</div>
</div>

<div className="px-4 sm:px-6 py-3 border-t border-slate-200">
<div className="flex items-end gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="Attach">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.44 11.05L12 20.5a6 6 0 01-8.49-8.49L12.5 3.5a4 4 0 115.66 5.66L7.5 19.5"></path>
</svg>
</button>
<div className="flex-1">
<div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 ring-blue-500/50">
<input className="w-full bg-transparent px-3.5 py-2.5 text-[15px] outline-none placeholder:text-slate-400" placeholder="Type a message…" type="text"/>

<div className="px-3.5 pb-2 flex items-center gap-2">
<button className="text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-2 py-1 rounded-md">Attach Task</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">Image</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">PDF</button>
</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-blue-600 bg-blue-600 text-white outline-none focus-visible:ring-2 ring-blue-500" title="Send">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<input className="peer/chatI1 sr-only" id="chat-individual-1" type="checkbox"/>
<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/chatI1:opacity-100 peer-checked/chatI1:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="chat-individual-1"></label>
<div className="absolute inset-x-0 bottom-0 top-0 md:inset-y-6 md:mx-auto md:max-w-3xl bg-white shadow-xl md:rounded-2xl flex flex-col">
<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
<div className="flex items-center gap-3">
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer outline-none focus-visible:ring-2 ring-blue-500" htmlFor="chat-individual-1">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7"></path>
</svg>
</label>
<div className="relative">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</div>
<div>
<div className="text-[15px] font-semibold tracking-tight">Jamie Roberts</div>
<div className="text-xs text-slate-500">Online • Product</div>
</div>
</div>
<div className="flex items-center gap-1">
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="Files">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12V8z"></path>
<path d="M14 2v6h6"></path>
</svg>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="More">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12h.01M12 5h.01M12 19h.01"></path>
</svg>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">
<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-slate-200"></div>
<div className="text-[11px] text-slate-500">Yesterday</div>
<div className="flex-1 h-px bg-slate-200"></div>
</div>
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-slate-500 mb-1">Jamie • 5:22 PM</div>
<div className="max-w-[78vw] md:max-w-md bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-3.5 py-2 shadow-sm">
                Could you attach the sprint summary PDF?
              </div>
</div>
</div>
<div className="flex items-end justify-end">
<div>
<div className="text-xs text-right text-slate-500 mb-1">You • 5:23 PM</div>
<div className="max-w-[78vw] md:max-w-md bg-blue-600 text-white rounded-2xl rounded-tr-md px-3.5 py-2 shadow-sm">
                Attaching now.
              </div>
<div className="mt-2 max-w-[78vw] md:max-w-md border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12V8z"></path>
<path d="M14 2v6h6"></path>
</svg>
<div className="text-sm">
<div className="font-medium tracking-tight">Sprint-12-Summary.pdf</div>
<div className="text-xs text-slate-500">312 KB • PDF</div>
</div>
<button className="ml-auto text-xs text-blue-700 hover:underline">Download</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            Jamie is typing
            <span className="inline-flex gap-1 ml-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-150"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-300"></span>
</span>
</div>
</div>
<div className="px-4 sm:px-6 py-3 border-t border-slate-200">
<div className="flex items-end gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="Attach">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.44 11.05L12 20.5a6 6 0 01-8.49-8.49L12.5 3.5a4 4 0 115.66 5.66L7.5 19.5"></path>
</svg>
</button>
<div className="flex-1">
<div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 ring-blue-500/50">
<input className="w-full bg-transparent px-3.5 py-2.5 text-[15px] outline-none placeholder:text-slate-400" placeholder="Type a message…" type="text"/>
<div className="px-3.5 pb-2 flex items-center gap-2">
<button className="text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-2 py-1 rounded-md">Attach Task</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">Image</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">PDF</button>
</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-blue-600 bg-blue-600 text-white outline-none focus-visible:ring-2 ring-blue-500" title="Send">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<input className="peer/chatG1 sr-only" id="chat-group-1" type="checkbox"/>
<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/chatG1:opacity-100 peer-checked/chatG1:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="chat-group-1"></label>
<div className="absolute inset-x-0 bottom-0 top-0 md:inset-y-6 md:mx-auto md:max-w-3xl bg-white shadow-xl md:rounded-2xl flex flex-col">
<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
<div className="flex items-center gap-3">
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer outline-none focus-visible:ring-2 ring-blue-500" htmlFor="chat-group-1">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7"></path>
</svg>
</label>
<div className="h-9 w-9 rounded-lg bg-blue-600/10 text-blue-700 grid place-content-center font-semibold">DT</div>
<div>
<div className="text-[15px] font-semibold tracking-tight">#Design-Team</div>
<div className="text-xs text-slate-500">14 members • Pinned</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="More">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12h.01M12 5h.01M12 19h.01"></path>
</svg>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">
<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-slate-200"></div>
<div className="text-[11px] text-slate-500">Today</div>
<div className="flex-1 h-px bg-slate-200"></div>
</div>
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-slate-500 mb-1">Mila • 9:52 AM</div>
<div className="max-w-[78vw] md:max-w-md bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-3.5 py-2 shadow-sm">
                Posting the sprint 2023 board here.
              </div>
</div>
</div>
<div className="flex items-end justify-end">
<div>
<div className="text-xs text-right text-slate-500 mb-1">You • 9:55 AM</div>
<div className="max-w-[78vw] md:max-w-md bg-blue-600 text-white rounded-2xl rounded-tr-md px-3.5 py-2 shadow-sm">
                Thanks! Let’s pin this thread.
              </div>
</div>
</div>
</div>
<div className="px-4 sm:px-6 py-3 border-t border-slate-200">
<div className="flex items-end gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="Attach">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.44 11.05L12 20.5a6 6 0 01-8.49-8.49L12.5 3.5a4 4 0 115.66 5.66L7.5 19.5"></path>
</svg>
</button>
<div className="flex-1">
<div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 ring-blue-500/50">
<input className="w-full bg-transparent px-3.5 py-2.5 text-[15px] outline-none placeholder:text-slate-400" placeholder="Type a message…" type="text"/>
<div className="px-3.5 pb-2 flex items-center gap-2">
<button className="text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-2 py-1 rounded-md">Attach Task</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">Image</button>
<button className="text-[11px] text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">PDF</button>
</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-blue-600 bg-blue-600 text-white outline-none focus-visible:ring-2 ring-blue-500" title="Send">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<input className="peer/newmsg sr-only" id="new-message-modal" type="checkbox"/>
<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/newmsg:opacity-100 peer-checked/newmsg:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="new-message-modal"></label>
<div className="absolute inset-x-4 md:inset-x-0 md:mx-auto top-20 md:top-28 max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between mb-4">
<div className="text-lg font-semibold tracking-tight">New Message</div>
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer" htmlFor="new-message-modal">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</label>
</div>

<div className="flex items-center gap-2 mb-3">
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700">All</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Design</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Engineering</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Recent</button>
</div>
<div className="relative mb-4">
<span className="absolute left-3 top-2.5 text-slate-400">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
</span>
<input className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 outline-none focus:ring-2 ring-blue-500/40" placeholder="Search teammates by name or department…" type="text"/>
</div>
<div className="max-h-80 overflow-y-auto divide-y divide-slate-100">

<label className="flex items-center gap-3 py-3 hover:bg-slate-50 px-2 rounded-lg cursor-pointer" htmlFor="chat-individual-1">
<div className="relative">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight">Jamie Roberts</div>
<div className="text-xs text-slate-500">Product</div>
</div>
<span className="text-[11px] text-slate-500">Recent</span>
</label>
<div className="flex items-center gap-3 py-3 hover:bg-slate-50 px-2 rounded-lg">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight">Alex Green</div>
<div className="text-xs text-slate-500">Design</div>
</div>
<button className="text-xs text-blue-700 hover:underline">Message</button>
</div>
<div className="flex items-center gap-3 py-3 hover:bg-slate-50 px-2 rounded-lg">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight">Priya S</div>
<div className="text-xs text-slate-500">Engineering</div>
</div>
<button className="text-xs text-blue-700 hover:underline">Message</button>
</div>
</div>
<div className="mt-4 flex justify-end">
<label className="px-3 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer" htmlFor="new-message-modal">Close</label>
</div>
</div>
</div>
</div>

<input className="peer/cg sr-only" id="create-group-modal" type="checkbox"/>
<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/cg:opacity-100 peer-checked/cg:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="create-group-modal"></label>
<div className="absolute inset-x-4 md:inset-x-0 md:mx-auto top-20 md:top-28 max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between mb-4">
<div className="text-lg font-semibold tracking-tight">Create Group</div>
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer" htmlFor="create-group-modal">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</label>
</div>
<div className="grid gap-3">
<div>
<label className="text-xs text-slate-600">Group name</label>
<input className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 ring-blue-500/40" placeholder="#design-team" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600">Department visibility</label>
<div className="mt-1 flex items-center gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700">All</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Design</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Engineering</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Marketing</button>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Add members</label>
<div className="mt-1 flex items-center gap-2 flex-wrap">
<button className="text-xs px-2.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Alex</button>
<button className="text-xs px-2.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Mila</button>
<button className="text-xs px-2.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Priya</button>
<button className="text-xs px-2.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Tom</button>
</div>
</div>
</div>
<div className="mt-5 flex justify-end gap-2">
<label className="px-3 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer" htmlFor="create-group-modal">Cancel</label>
<label className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" htmlFor="create-group-modal">Create Group</label>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-content-center font-semibold tracking-tight">AC</div>
<div className="hidden sm:block">
<div className="text-[15px] font-semibold tracking-tight">Chats</div>
<div className="text-xs text-slate-500">Connect with projects, teammates and groups</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="Search">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 outline-none focus-visible:ring-2 ring-blue-500" title="New">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 pb-3">
<div className="w-full sm:w-auto bg-slate-100 p-1 rounded-xl border border-slate-200 flex gap-1">
<input checked="" className="peer/project sr-only" id="tab-project" name="top-tabs" type="radio"/>
<label className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-slate-700 peer-checked/project:bg-white peer-checked/project:shadow-sm peer-checked/project:border peer-checked/project:border-slate-200 peer-checked/project:text-slate-900 hover:bg-white/60 select-none tracking-tight" htmlFor="tab-project">
<span className="inline-flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" width="7" x="3" y="3"></rect>
<rect height="7" width="7" x="14" y="3"></rect>
<rect height="7" width="7" x="14" y="14"></rect>
<rect height="7" width="7" x="3" y="14"></rect>
</svg>
              Project Chat
            </span>
</label>
<input className="peer/ind sr-only" id="tab-individual" name="top-tabs" type="radio"/>
<label className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-slate-700 peer-checked/ind:bg-white peer-checked/ind:shadow-sm peer-checked/ind:border peer-checked/ind:border-slate-200 peer-checked/ind:text-slate-900 hover:bg-white/60 select-none tracking-tight" htmlFor="tab-individual">
<span className="inline-flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
              Individual Chat
            </span>
</label>
<input className="peer/group sr-only" id="tab-group" name="top-tabs" type="radio"/>
<label className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-slate-700 peer-checked/group:bg-white peer-checked/group:shadow-sm peer-checked/group:border peer-checked/group:border-slate-200 peer-checked/group:text-slate-900 hover:bg-white/60 select-none tracking-tight" htmlFor="tab-group">
<span className="inline-flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 00-3-3.87"></path>
<path d="M16 3.13a4 4 0 010 7.75"></path>
</svg>
              Group Chat
            </span>
</label>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl w-full px-4 sm:px-6 pt-3 pb-24">

<section aria-labelledby="project-chat" className="peer-checked/project:block peer-checked/ind:hidden peer-checked/group:hidden block">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

<div className="relative group">

<input className="peer/proj1 sr-only" id="proj1-menu" type="checkbox"/>
<label className="block bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer" htmlFor="chat-project-1">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">Website Revamp</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="h-7 w-7 rounded-full bg-slate-100 ring-2 ring-white grid place-content-center text-[11px] text-slate-600">+3</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">10:24 AM</div>
<div className="mt-1 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-blue-600 text-white text-[11px] px-1.5">4</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">Alex:</span> UI screens are updated
              </div>
</label>

<label className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white border border-slate-200 cursor-pointer shadow-sm" htmlFor="proj1-menu">
<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12h.01M12 5h.01M12 19h.01"></path>
</svg>
</label>
<div className="absolute right-2 top-11 w-40 bg-white border border-slate-200 rounded-xl shadow-lg p-1 hidden peer-checked/proj1:block">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V3h-4v6L5 15h14l-5-6z"></path>
<path d="M12 15v6"></path>
</svg>
                Pin project
              </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                Mark as read
              </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">

<svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 21a2 2 0 01-3.46 0"></path>
<path d="M18.63 13A17.89 17.89 0 0018 8"></path>
<path d="M6.26 6.26A6 6 0 0118 8"></path>
<path d="M2 2l20 20"></path>
</svg>
                Mute
              </button>
</div>
</div>

<div className="relative group">
<input className="peer/chatP2 sr-only" id="chat-project-2" type="checkbox"/>
<label className="block bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer" htmlFor="chat-project-2">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">Mobile Onboarding</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">9:02 AM</div>
<div className="mt-1 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-blue-600 text-white text-[11px] px-1.5">2</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">Mila:</span> Shared checklist for QA
              </div>
</label>

<div className="fixed inset-0 z-40 opacity-0 pointer-events-none peer-checked/chatP2:opacity-100 peer-checked/chatP2:pointer-events-auto transition">
<label className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" htmlFor="chat-project-2"></label>
<div className="absolute inset-x-0 bottom-0 top-0 md:inset-y-6 md:mx-auto md:max-w-3xl bg-white shadow-xl md:rounded-2xl flex flex-col">
<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200">
<div className="flex items-center gap-3">
<label className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer" htmlFor="chat-project-2">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7"></path>
</svg>
</label>
<img alt="" className="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[15px] font-semibold tracking-tight">Mobile Onboarding</div>
<div className="text-xs text-slate-500">6 members • On Break</div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">
<div className="text-xs text-slate-500">Checklist shared by Mila</div>
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="max-w-[78vw] md:max-w-md bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-3.5 py-2 shadow-sm">
                      Added two issues: splash flicker and keyboard overlap.
                    </div>
</div>
</div>
<div className="px-4 sm:px-6 py-3 border-t border-slate-200">
<div className="flex items-end gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100" title="Attach">
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.44 11.05L12 20.5a6 6 0 01-8.49-8.49L12.5 3.5a4 4 0 115.66 5.66L7.5 19.5"></path>
</svg>
</button>
<div className="flex-1">
<div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 ring-blue-500/50">
<input className="w-full bg-transparent px-3.5 py-2.5 text-[15px] outline-none placeholder:text-slate-400" placeholder="Type a message…" type="text"/>
<div className="px-3.5 pb-2 flex items-center gap-2">
<button className="text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-2 py-1 rounded-md">Attach Task</button>
</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-blue-600 bg-blue-600 text-white" title="Send">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<input className="peer/proj2 sr-only" id="proj2-menu" type="checkbox"/>
<label className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white border border-slate-200 cursor-pointer shadow-sm" htmlFor="proj2-menu">
<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12h.01M12 5h.01M12 19h.01"></path>
</svg>
</label>
<div className="absolute right-2 top-11 w-40 bg-white border border-slate-200 rounded-xl shadow-lg p-1 hidden peer-checked/proj2:block">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">Pin project</button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">Mark as read</button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm">Mute</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">API Stabilization</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Mon</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">Priya:</span> Pushed hotfix to v1.9.3
            </div>
</div>
</div>
<div className="mt-4 text-xs text-slate-500 px-0.5">Tip: Swipe left to mute, or tap ⋮ for more.</div>
</section>

<section aria-labelledby="individual-chat" className="peer-checked/ind:block hidden">
<div className="relative mb-3">
<span className="absolute left-3 top-2.5 text-slate-400">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
</span>
<input className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 ring-blue-500/40" placeholder="Search teammates…" type="text"/>
</div>
<ul className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl shadow-sm">

<li className="relative">
<label className="flex items-center gap-3 p-3 sm:p-4 cursor-pointer hover:bg-slate-50" htmlFor="chat-individual-1">
<div className="relative">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[15px] font-semibold tracking-tight truncate">Jamie Roberts</div>
<div className="text-xs text-slate-500">1:02 PM</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span>Typing…</span>
<span className="inline-flex gap-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-150"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-300"></span>
</span>
</div>
</div>
</label>
</li>

<li className="relative">
<div className="flex items-center gap-3 p-3 sm:p-4 hover:bg-slate-50">
<div className="relative">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 bg-slate-300 rounded-full ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[15px] font-semibold tracking-tight truncate">Alex Green</div>
<div className="text-xs text-slate-500">12:44 PM</div>
</div>
<div className="text-sm text-slate-600 truncate">UI screens are updated</div>
</div>
<div className="ml-2 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-blue-600 text-white text-[11px] px-1.5">3</div>
</div>
</li>

<li className="relative">
<div className="flex items-center gap-3 p-3 sm:p-4 hover:bg-slate-50">
<div className="relative">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[15px] font-semibold tracking-tight truncate">Priya S</div>
<div className="text-xs text-slate-500">11:09 AM</div>
</div>
<div className="text-sm text-slate-600 truncate">Shared a task: API Stabilization</div>
</div>
</div>
</li>
</ul>

<label className="fixed bottom-24 right-5 sm:right-8 z-30 h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white grid place-content-center shadow-lg cursor-pointer outline-none focus-visible:ring-2 ring-blue-500" htmlFor="new-message-modal">

<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</label>
</section>

<section aria-labelledby="group-chat" className="peer-checked/group:block hidden">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-slate-600">Pinned groups are shown first.</div>
<label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer text-sm" htmlFor="create-group-modal">

<svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
            Create Group
          </label>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

<label className="block bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer" htmlFor="chat-group-1">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">#Design-Team</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="h-7 w-7 rounded-full bg-slate-100 ring-2 ring-white grid place-content-center text-[11px] text-slate-600">+10</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">8:31 AM</div>
<div className="mt-1 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-blue-600 text-white text-[11px] px-1.5">6</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">Mila:</span> New brand components are live
            </div>
</label>

<div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">#Sprint-2023</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Tue</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">Tom:</span> Velocity report uploaded
            </div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between">
<div>
<div className="text-[15px] font-semibold tracking-tight">#Announcements</div>
<div className="mt-2 flex items-center -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Mon</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-600">
<span className="font-medium">HR:</span> Holiday calendar updated
            </div>
</div>
</div>
</section>
</main>

<nav className="fixed inset-x-0 bottom-0 z-30 bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl grid grid-cols-5">
<a className="flex flex-col items-center justify-center py-2 text-[11px] text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">

<svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4"></path>
<rect height="20" rx="2" ry="2" width="20" x="2" y="2"></rect>
</svg>
          Tasks
        </a>
<a className="flex flex-col items-center justify-center py-2 text-[11px] text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">

<svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h6M3 12h6M3 19h6"></path>
<path d="M16 7l2 2 4-4M16 14l2 2 4-4M16 21l2 2 4-4"></path>
</svg>
          Checklists
        </a>
<a className="flex flex-col items-center justify-center py-2 text-[11px] text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">

<svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h6l2 2h10v9a2 2 0 01-2 2H3z"></path>
</svg>
          Projects
        </a>
<a className="flex flex-col items-center justify-center py-2 text-[11px] text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">

<svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="13" r="7"></circle>
<path d="M12 10v4l2 2"></path>
<path d="M5 3L2 6M22 6l-3-3"></path>
</svg>
          Overdue
        </a>
<a className="flex flex-col items-center justify-center py-2 text-[11px] text-blue-700 hover:bg-slate-50" href="#">

<svg className="h-5 w-5 mb-1 text-blue-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 01-4 4H7l-4 4V5a4 4 0 014-4h10a4 4 0 014 4z"></path>
</svg>
          Chats
        </a>
</div>
</nav>

    </>
  );
}
