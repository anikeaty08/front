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
      

<div className="relative z-50 w-full max-w-sm mx-auto rounded-2xl border border-zinc-200 bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] overflow-hidden">

<div className="flex justify-between items-center border-b border-zinc-200 py-2 px-4 bg-white rounded-t-2xl">
<h2 className="text-xs uppercase font-medium text-zinc-400 tracking-wide">Edit Profile</h2>
<button aria-label="Close" className="text-zinc-400 hover:text-zinc-600 border border-zinc-200 hover:border-zinc-300 rounded-full p-1 transition">
<svg className="opacity-80" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="p-4">

<div className="flex items-center gap-3 mb-5">
<span className="inline-flex h-12 w-12 rounded-full bg-zinc-200 border border-zinc-200">
<img alt="AJ" className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/21.jpg"/>
</span>
<div className="flex flex-col">
<span className="font-medium text-[15px] text-zinc-900 leading-tight">Alice Johnson</span>
<span className="text-xs text-zinc-400">alice@email.com</span>
</div>
</div>
<form>
<div className="mb-3">
<label className="block text-xs font-medium text-zinc-500 mb-1" htmlFor="name">Name</label>
<input autocomplete="off" className="w-full bg-zinc-100 border border-zinc-200 rounded-md text-zinc-900 text-sm font-normal placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 py-2 px-3 transition custom-caret" id="name" placeholder="Enter your name" type="text" value="Alice Johnson"/>
</div>
<div className="mb-3">
<label className="block text-xs font-medium text-zinc-500 mb-1" htmlFor="email">Email</label>
<input className="w-full bg-zinc-100 border border-zinc-200 rounded-md text-zinc-400 text-sm font-normal placeholder:text-zinc-400 outline-none py-2 px-3 cursor-not-allowed" disabled="" id="email" type="email" value="alice@email.com"/>
</div>
<div className="mb-5">
<label className="block text-xs font-medium text-zinc-500 mb-1" htmlFor="bio">Bio</label>
<textarea className="w-full bg-zinc-100 border border-zinc-200 rounded-md text-zinc-900 text-sm font-normal placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 py-2 px-3 transition custom-caret resize-none" id="bio" placeholder="Write something about yourself..." rows="2">Passionate about AI and web design.</textarea>
</div>
<div className="flex justify-between items-center pt-2">
<button className="px-3 py-1.5 text-xs rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 transition" type="button">Cancel</button>
<button className="px-4 py-1.5 text-xs rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition" type="submit">Save Changes</button>
</div>
</form>
<div className="my-6 border-t border-zinc-200"></div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Danger Zone</span>
</div>
<button className="flex items-center gap-2 px-3 py-2 w-full text-xs border border-zinc-200 rounded-md bg-white hover:bg-zinc-100 text-rose-500 hover:text-rose-600 transition">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
          Delete Account
        </button>
</div>
</div>
</div>

    </>
  );
}
