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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<aside className="w-64 bg-gray-50/50 border-r border-gray-200 flex-col hidden md:flex flex-shrink-0">

<div className="h-16 flex items-center px-5 border-b border-gray-200/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-gray-900">Dextr AI</span>
</div>
</div>

<div className="px-4 py-4 border-b border-gray-200/50">
<button className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl transition-colors text-left">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
<span className="text-base font-medium text-gray-500">AN</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-medium text-gray-900 truncate">Akmal Nasrulloh</div>
<div className="text-sm text-gray-500 truncate">Manager</div>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">

<div>
<div className="px-3 mb-2 text-sm font-medium text-gray-400 tracking-wider">MANNY</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="message-square" strokeWidth="1.5"></i>
                        Manny Chat
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="brain" strokeWidth="1.5"></i>
                        Staff IQ
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar" strokeWidth="1.5"></i>
                        Rostering
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="wrench" strokeWidth="1.5"></i>
                        Maintenance
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="sliders" strokeWidth="1.5"></i>
                        Configuration
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="users" strokeWidth="1.5"></i>
                        Staffs
                    </a>
</nav>
</div>

<div>
<div className="px-3 mb-2 text-sm font-medium text-gray-400 tracking-wider">DEXTR</div>
<nav className="space-y-0.5">

<a className="flex items-center gap-3 px-3 py-2 text-base font-medium rounded-lg bg-white text-gray-900 shadow-sm border border-gray-200/60 transition-colors" href="#">
<div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center flex-shrink-0">
<i className="w-3 h-3 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
                        Dextr OS
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="layout-grid" strokeWidth="1.5"></i>
                        Dextr Apps
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="clock" strokeWidth="1.5"></i>
                        Scheduled Tasks
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="history" strokeWidth="1.5"></i>
                        History
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors mt-4" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="contact" strokeWidth="1.5"></i>
                        Guest IQ
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="users" strokeWidth="1.5"></i>
                        Guests
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="shield" strokeWidth="1.5"></i>
                        Account
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-gray-200/50 space-y-3">
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="settings" strokeWidth="1.5"></i>
                    Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="life-buoy" strokeWidth="1.5"></i>
                    Get Support
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="message-circle" strokeWidth="1.5"></i>
                    Give Feedback
                </a>
</nav>
<button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg text-base font-medium transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                Download Report
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative">

<header className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div>
<h1 className="text-xl tracking-tight font-medium text-gray-900">Dextr OS</h1>
<p className="text-base text-gray-500 hidden sm:block">Your AI assistant for hotel operations</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-green-700">Online</span>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-amber-200 border border-amber-300 ml-1"></div>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-3xl mx-auto w-full px-4 py-10 pb-48 space-y-10">

<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-baseline justify-between">
<span className="font-medium text-base text-gray-900">Dextr</span>
<span className="text-sm text-gray-400">8:30 AM</span>
</div>
<div className="text-base text-gray-800 leading-relaxed">
                            Good morning, Akmal! I'll apply a 15% Easter surcharge across all spa treatments right away. Let me pull the current price sheet.
                        </div>

<div className="flex items-center gap-2 mt-3 pt-2">
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-sm text-gray-600">Task created</span>
<span className="text-sm text-gray-300 mx-0.5">·</span>
<span className="text-sm text-gray-700">Update Spa Treatment Prices</span>
</div>
<button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 px-2 py-1 rounded transition-colors">
<i className="w-4 h-4" data-lucide="eye" strokeWidth="1.5"></i> View
                            </button>
</div>
</div>
</div>

<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-baseline justify-between">
<span className="font-medium text-base text-gray-900">Dextr</span>
<span className="text-sm text-gray-400">8:32 AM</span>
</div>
<div className="text-base text-gray-800 leading-relaxed">
                            Working on the spa prices now. While I handle this — anything else you'd like to queue up?
                        </div>
</div>
</div>

<div className="flex flex-col items-end gap-1.5">
<div className="flex items-center gap-2 mb-1 mr-1">
<span className="font-medium text-base text-gray-900">Akmal N.</span>
<span className="text-sm text-gray-400">General Manager</span>
</div>
<div className="bg-gray-100/80 text-gray-900 text-base leading-relaxed px-5 py-4 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[75%] border border-gray-200/50">
                        Yes — we're doing a special Easter Brunch at The Grand Terrace this Sunday. $65 per person, kids under 10 eat free. Two seatings at 10 AM and 12:30 PM. Reservations required.
                    </div>
<span className="text-sm text-gray-400 mt-1 mr-1">8:33 AM</span>
</div>

<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-baseline justify-between">
<span className="font-medium text-base text-gray-900">Dextr</span>
<span className="text-sm text-gray-400">8:33 AM</span>
</div>
<div className="text-base text-gray-800 leading-relaxed">
                            Love it! I'll add the Easter Brunch event to the dining knowledge base so the AI can start answering guest questions about it.
                        </div>

<div className="flex flex-wrap items-center gap-3 mt-3 pt-2">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-sm text-gray-600">Task created</span>
<span className="text-sm text-gray-300 mx-0.5">·</span>
<span className="text-sm text-gray-700">Add Easter Brunch Event</span>
</div>
<button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 px-2 py-1 rounded transition-colors">
<i className="w-4 h-4" data-lucide="eye" strokeWidth="1.5"></i> View
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-12 pb-6 px-4 pointer-events-none">
<div className="max-w-3xl mx-auto w-full relative pointer-events-auto">

<div className="absolute -top-14 left-1/2 -translate-x-1/2 w-full max-w-sm">
<button className="w-full flex items-center justify-between bg-white border border-gray-200/80 shadow-sm rounded-xl px-4 py-3 hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-orange-500" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-base font-medium text-gray-800 truncate">Update Easter Check-in Policy</span>
</div>
<div className="flex items-center gap-3 ml-4 flex-shrink-0">
<span className="text-sm text-gray-400">5 / 6</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:ring-1 focus-within:ring-gray-300 focus-within:border-gray-300 transition-all overflow-hidden flex flex-col">
<textarea className="w-full bg-transparent resize-none text-base text-gray-900 placeholder-gray-400 px-4 pt-4 pb-2 outline-none min-h-[64px] max-h-[200px]" placeholder="Ask anything..." rows="1"></textarea>
<div className="flex items-center justify-between px-3 pb-3 pt-1">

<div className="flex items-center gap-2">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
<div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center">
<i className="w-2.5 h-2.5 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
                                Dextr OS
                            </button>
</div>

<div className="flex items-center gap-1.5">
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button className="p-2 bg-gray-100 text-gray-400 hover:bg-gray-900 hover:text-white rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="text-center mt-3">
<span className="text-sm text-gray-400">AI can make mistakes. Verify important information.</span>
</div>
</div>
</div>
</main>


    </>
  );
}
