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
      
<div className="w-full max-w-md rounded-[2.5rem] bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden">
<form className="flex-1 flex flex-col p-8 pb-7">

<div className="flex items-center justify-between mb-4">
<span className="font-bold text-2xl text-slate-900 select-none">Create Event</span>
<button className="p-2 rounded-full hover:bg-slate-100 transition" type="button">
<svg fill="none" height="26" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="26"><path d="M6 6l14 14M20 6l-14 14"></path></svg>
</button>
</div>

<div className="flex gap-3 mb-7 mt-1">
<button className="group flex items-center px-3.5 py-1.5 rounded-full border-2 border-cyan-400 bg-cyan-50 text-cyan-700 font-medium text-sm shadow-sm hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300" type="button">
<span className="w-2.5 h-2.5 rounded-full mr-2 bg-cyan-400"></span>Meeting
        </button>
<button className="group flex items-center px-3.5 py-1.5 rounded-full border-2 border-fuchsia-300 bg-fuchsia-50 text-fuchsia-600 font-medium text-sm shadow-sm hover:bg-fuchsia-100" type="button">
<span className="w-2.5 h-2.5 rounded-full mr-2 bg-fuchsia-300"></span>Personal
        </button>
<button className="group flex items-center px-3.5 py-1.5 rounded-full border-2 border-violet-300 bg-violet-50 text-violet-600 font-medium text-sm shadow-sm hover:bg-violet-100" type="button">
<span className="w-2.5 h-2.5 rounded-full mr-2 bg-violet-300"></span>Reminder
        </button>
</div>

<div className="flex flex-col gap-5">
<input className="w-full rounded-xl border border-slate-200 bg-slate-100 placeholder-slate-400 text-slate-900 py-3 px-5 text-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-200" placeholder="Title"/>
<div className="flex gap-3">
<input className="rounded-xl border border-slate-200 bg-slate-100 text-slate-900 py-3 px-4 flex-1 font-medium focus:ring-2 focus:ring-cyan-200" style={{colorScheme: 'light'}} type="date"/>
<input className="rounded-xl border border-slate-200 bg-slate-100 text-slate-900 py-3 px-4 w-[110px] font-medium focus:ring-2 focus:ring-cyan-200" style={{colorScheme: 'light'}} type="time"/>
</div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-100 placeholder-slate-400 text-slate-900 py-3 px-5 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100" placeholder="Location" />
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-100 placeholder-slate-400 text-slate-900 py-3 px-5 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-50 resize-none" placeholder="Add notes..." rows="2"></textarea>
</input></div>

<div className="flex items-center gap-3 mt-7 mb-3">
<label className="flex items-center text-cyan-600 font-medium space-x-2 cursor-pointer">
<input className="accent-cyan-500 w-5 h-5 rounded focus:ring-cyan-400 transition" type="checkbox" />
<span className="text-slate-600 text-base">All day</span>
</input></label>
<div className="flex-1"></div>
<button className="flex items-center px-3 py-1.5 rounded-lg bg-violet-100 text-violet-600 font-semibold text-sm hover:bg-violet-200" type="button">
<svg className="mr-2" fill="none" height="18" viewbox="0 0 24 24" width="18"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg>
          Invite
        </button>
</div>
<div className="h-px bg-slate-200 mb-4"></div>
<div className="flex gap-2">
<button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl text-lg shadow transition" type="submit">Save</button>
<button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-xl text-lg shadow transition" type="button">Cancel</button>
</div>
</form>
</div>

    </>
  );
}
