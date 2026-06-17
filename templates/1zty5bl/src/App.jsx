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
      
<div className="w-[384px] max-w-instagram mx-auto rounded-2xl shadow-2xl border border-neutral-800 bg-[#15161a]">

<div className="pt-8 pb-4 border-b border-neutral-800">
<div className="flex flex-row items-center justify-center gap-5">

<div className="flex flex-col items-center">
<img alt="avatar" className="w-20 h-20 object-cover rounded-full border-2 border-neutral-800 shadow" src="https://randomuser.me/api/portraits/women/75.jpg"/>
</div>

<div className="flex flex-row items-center gap-7">
<div className="flex flex-col items-center">
<span className="font-bold text-white text-[17px] leading-tight">8,652</span>
<span className="text-gray-400 text-xs tracking-wide mt-0.5">Followers</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold text-white text-[17px] leading-tight">721</span>
<span className="text-gray-400 text-xs tracking-wide mt-0.5">Following</span>
</div>
</div>
</div>
<div className="flex flex-col items-center mt-3 mb-1">
<span className="font-bold text-lg text-white leading-tight">juliadow</span>
<span className="text-gray-400 text-[15px]">@julia_doe</span>
</div>
<div className="px-9 mt-3">
<button className="w-full py-1.5 rounded-lg border border-[#232429] text-[15px] font-semibold text-blue-400 hover:bg-[#232a39] transition">Edit Profile</button>
</div>
</div>

<div className="divide-y divide-[#232429]">
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex justify-between items-center transition">
<span className="font-medium text-[15px] text-white">Change Password</span>
<svg fill="none" height="18" stroke="#6b7280" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex justify-between items-center transition">
<span className="font-medium text-[15px] text-white">Notifications</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer dark-switch" type="checkbox"/>
</label>
</button>
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex justify-between items-center transition">
<span className="font-medium text-[15px] text-white">Privacy &amp; Security</span>
<svg fill="none" height="18" stroke="#6b7280" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex flex-col sm:flex-row sm:items-center sm:justify-between transition">
<span>
<span className="font-medium text-[15px] text-white">Account Status</span>
<br/><span className="text-gray-400 text-[14px]">Personal information and connections</span>
</span>
<svg className="sm:mt-0 mt-2" fill="none" height="18" stroke="#6b7280" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex flex-col sm:flex-row sm:items-center sm:justify-between transition">
<span>
<span className="font-medium text-[15px] text-white">Help</span>
<br/><span className="text-gray-400 text-[14px]">FAQs &amp; support chat</span>
</span>
<svg className="sm:mt-0 mt-2" fill="none" height="18" stroke="#6b7280" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full text-left px-6 py-3 bg-transparent hover:bg-[#232429] flex flex-col sm:flex-row sm:items-center sm:justify-between transition">
<span>
<span className="font-medium text-[15px] text-white">About</span>
<br/><span className="text-gray-400 text-[14px]">Terms, data policy, version 3.2.4</span>
</span>
<svg className="sm:mt-0 mt-2" fill="none" height="18" stroke="#6b7280" strokeWidth="2" width="18"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="w-full px-7 pb-7 pt-4">
<button className="w-full py-2.5 rounded-xl text-base font-semibold shadow gradient-btn focus:outline-none focus:ring-2 focus:ring-blue-800 transition">
        Log out
      </button>
</div>
</div>

    </>
  );
}
