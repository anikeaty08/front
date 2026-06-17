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
      

<nav className="w-16 border-r border-slate-200 flex flex-col items-center py-4 bg-white z-20 flex-shrink-0">

<div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-8 shadow-sm cursor-pointer">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-circle"></i>
</div>

<div className="flex flex-col gap-6 w-full items-center">
<button className="text-slate-400 hover:text-slate-800 transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="home"></i></button>
<button className="text-slate-400 hover:text-slate-800 transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2"></i></button>
<div className="relative group cursor-pointer">
<div className="absolute -right-3 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-full"></div>
<button className="text-emerald-600"><i className="w-6 h-6 stroke-[1.5]" data-lucide="inbox"></i></button>
</div>
<button className="text-slate-400 hover:text-slate-800 transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i></button>
<button className="text-slate-400 hover:text-slate-800 transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="settings"></i></button>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-slate-400 hover:text-slate-800 transition-colors"><i className="w-6 h-6 stroke-[1.5]" data-lucide="user"></i></button>
</div>
</nav>

<aside className="w-96 border-r border-slate-200 flex flex-col bg-slate-50/30 flex-shrink-0">

<div className="h-16 border-b border-slate-200 flex items-center justify-between px-5 bg-white">
<div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-md transition-colors">
<span className="font-medium text-base text-slate-900">All Assigned</span>
<span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-medium">184</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-3 text-slate-400">
<i className="w-5 h-5 cursor-pointer hover:text-slate-600" data-lucide="edit"></i>
<i className="w-5 h-5 cursor-pointer hover:text-slate-600" data-lucide="search"></i>
</div>
</div>

<div className="px-5 py-3 flex items-center justify-between border-b border-slate-200 bg-white">
<div className="flex items-center gap-4 text-sm font-medium">
<button className="text-slate-900 border-b-2 border-slate-900 pb-3 -mb-3.5">All Chats</button>
<button className="text-slate-500 hover:text-slate-700 pb-3 -mb-3.5 transition-colors">Replied</button>
<button className="text-slate-500 hover:text-slate-700 pb-3 -mb-3.5 transition-colors">Unreplied</button>
</div>
<button className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
<span>Filter</span>
</button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="px-5 py-4 border-b border-slate-100 bg-white relative cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-3">

<div className="relative">
<img alt="Elsa" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=elsa"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5">
<div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white">
<svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 text-base leading-none">Elsa Anna</h3>
<p className="text-slate-500 text-sm mt-1">hola</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-slate-400">9 mo</span>
<i className="w-3 h-3 text-slate-300" data-lucide="pin"></i>
</div>
</div>
<div className="flex items-center gap-2 mt-3 pl-[52px]">
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Messenger test</span>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded border border-emerald-100 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Low
                    </span>
</div>
</div>

<div className="px-5 py-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-medium">JD</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5">
<div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center text-white text-[8px]">M</div>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 text-base leading-none">Jayed Doe</h3>
<p className="text-slate-500 text-sm mt-1">Imu Gmail</p>
</div>
</div>
<span className="text-xs text-slate-400">9 h</span>
</div>
<div className="flex items-center gap-2 mt-3 pl-[52px]">
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Support</span>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded border border-emerald-100 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Low
                    </span>
</div>
</div>

<div className="px-5 py-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Minhaz" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=minhaz"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5">
<div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white">
<svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 text-base leading-none">Minhaz Nihal</h3>
<p className="text-slate-500 text-sm mt-1 truncate w-40">Bot: A new ticket wa...</p>
</div>
</div>
<span className="text-xs text-slate-400">1 y</span>
</div>
<div className="flex items-center gap-2 mt-3 pl-[52px]">
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Sales</span>
<span className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded border border-red-100 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Urgent
                    </span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white flex-shrink-0 z-30">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-slate-400" data-lucide="tag"></i>
<i className="w-5 h-5 text-slate-400 hover:text-red-500 cursor-pointer transition-colors" data-lucide="flag"></i>
<div className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-100 text-xs font-medium flex items-center gap-1.5">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Low
                </div>
<button className="flex items-center gap-1.5 text-slate-500 hover:bg-slate-50 px-3 py-1.5 rounded-md border border-dashed border-slate-300 text-xs font-medium transition-colors">
<i className="w-3.5 h-3.5" data-lucide="smile-plus"></i>
                    Add Sentiment
                </button>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
<div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">SA</div>
<span className="text-sm font-medium text-slate-700">Sayad Ahm...</span>
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down"></i>
</div>
<button className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-1.5 rounded-md text-sm font-medium border border-emerald-100 transition-colors">
                    Close Chat
                </button>
<button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="panel-right-close"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white relative scroll-smooth">

<section className="relative z-10 pb-8">

<div className="sticky top-0 z-10 w-full backdrop-blur-md bg-white/90 border-b border-transparent transition-all duration-200">
<div className="py-6 flex items-center justify-center">
<div aria-hidden="true" className="absolute inset-0 flex items-center px-8 pointer-events-none">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-slate-50 border border-slate-200 text-slate-500 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm flex items-center gap-2">
<i className="w-3 h-3" data-lucide="archive"></i>
                                Ticket #1024 • Resolved • Dec 12, 2023
                            </span>
</div>
</div>
</div>

<div className="px-8 opacity-70 hover:opacity-100 transition-opacity duration-300 pt-2">

<div className="flex items-end gap-3 mb-6 group">
<img className="w-8 h-8 rounded-full mb-1 border border-slate-100" src="https://i.pravatar.cc/150?u=elsa"/>
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-xs font-medium text-slate-600 ml-1">Elsa Anna</span>
<div className="bg-slate-50 border border-slate-100 text-slate-800 rounded-2xl rounded-bl-none px-4 py-2.5 text-base shadow-sm">
<p>I was wondering about the integration process?</p>
</div>
<span className="text-[10px] text-slate-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">12:26 PM</span>
</div>
</div>

<div className="flex flex-col items-end gap-1 mb-6 group">
<span className="text-xs font-medium text-emerald-600 mr-1 flex items-center gap-1">
                            Chatbot <i className="w-3 h-3" data-lucide="bot"></i>
</span>
<div className="flex items-end gap-3 flex-row-reverse max-w-[60%]">
<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-1 flex-shrink-0">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-br-none px-4 py-2.5 text-base shadow-sm">
<p>You can check our docs at docs.myalice.ai</p>
</div>
</div>
<div className="flex items-center gap-1 mr-1 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
<span>12:27 PM</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check-check"></i>
</div>
</div>

<div className="flex items-end gap-3 mb-6 group">
<img className="w-8 h-8 rounded-full mb-1 border border-slate-100" src="https://i.pravatar.cc/150?u=elsa"/>
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-xs font-medium text-slate-600 ml-1">Elsa Anna</span>
<div className="bg-slate-50 border border-slate-100 text-slate-800 rounded-2xl rounded-bl-none px-4 py-2.5 text-base shadow-sm">
<p>Okay thanks!</p>
</div>
<span className="text-[10px] text-slate-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">12:28 PM</span>
</div>
</div>
</div>
</section>

<section className="relative z-20 min-h-screen">

<div className="sticky top-0 z-20 w-full backdrop-blur-md bg-white/95">
<div className="py-8 flex items-center justify-center">
<div aria-hidden="true" className="absolute inset-0 flex items-center px-8 pointer-events-none">
<div className="w-full border-t border-emerald-100"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-2 ring-4 ring-emerald-50/50">
<i className="w-3 h-3" data-lucide="ticket"></i>
                                Current Ticket #2045 • Open • Today
                            </span>
</div>
</div>
</div>

<div className="px-8 pt-2">

<div className="flex items-end gap-3 mb-6 group">
<img className="w-8 h-8 rounded-full mb-1 border border-slate-100 shadow-sm" src="https://i.pravatar.cc/150?u=elsa"/>
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-xs font-medium text-slate-900 ml-1">Elsa Anna</span>
<div className="bg-white border border-slate-200 text-slate-900 rounded-2xl rounded-bl-none px-4 py-2.5 text-base shadow-sm">
<p>Hola</p>
</div>
<span className="text-[10px] text-slate-400 ml-1">12:26 PM</span>
</div>
</div>

<div className="flex items-end gap-3 mb-6 group">

<div className="w-8 h-8"></div>
<div className="flex flex-col gap-1 max-w-[60%]">
<div className="bg-white border border-slate-200 text-slate-900 rounded-2xl rounded-bl-none px-4 py-2.5 text-base shadow-sm">
<p>hi</p>
</div>
<span className="text-[10px] text-slate-400 ml-1">12:26 PM</span>
</div>
</div>

<div className="flex items-end gap-3 mb-8 group">
<img className="w-8 h-8 rounded-full mb-1 border border-slate-100 shadow-sm" src="https://i.pravatar.cc/150?u=elsa"/>
<div className="flex flex-col gap-1 max-w-[60%]">
<span className="text-xs font-medium text-slate-900 ml-1">Elsa Anna</span>
<div className="bg-white border border-slate-200 text-slate-900 rounded-2xl rounded-bl-none px-4 py-2.5 text-base shadow-sm">
<p>Get Started</p>
</div>
<span className="text-[10px] text-slate-400 ml-1">3:22 PM</span>
</div>
</div>

<div className="flex items-center justify-center mb-8">
<span className="text-[11px] text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Ticket assigned to Sayad Ahmed</span>
</div>

<div className="h-24"></div>
</div>
</section>
</div>

<footer className="border-t border-slate-200 bg-slate-50/50 p-4 absolute bottom-0 left-0 right-0 z-40 backdrop-blur-sm">

<div className="flex items-center gap-6 mb-3 px-1">
<button className="text-sm font-medium text-emerald-600 border-b-2 border-emerald-500 pb-1 -mb-1.5">Chat</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-1 -mb-1.5 transition-colors">Note</button>
</div>

<div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center justify-center gap-2 mb-3">
<div className="bg-red-100 rounded-full p-0.5"><i className="w-3.5 h-3.5 text-red-600" data-lucide="alert-circle"></i></div>
<span className="text-sm text-red-600 font-medium">You can not reply this conversation due to platform restrictions.</span>
</div>

<div className="relative opacity-60 pointer-events-none select-none">
<div className="w-full bg-white border border-slate-200 rounded-lg h-12 flex items-center px-4 shadow-sm">
<span className="text-slate-400 text-base">Type a message...</span>
</div>
<div className="absolute right-2 top-2 flex items-center gap-2">
<button className="p-2 text-slate-400"><i className="w-5 h-5" data-lucide="paperclip"></i></button>
<button className="p-2 text-slate-400"><i className="w-5 h-5" data-lucide="smile"></i></button>
<div className="h-5 w-[1px] bg-slate-200 mx-1"></div>
<button className="p-2 bg-slate-100 text-slate-400 rounded-md"><i className="w-4 h-4" data-lucide="send"></i></button>
</div>
</div>
</footer>
</main>


    </>
  );
}
