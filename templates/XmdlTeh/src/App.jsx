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
      
<div className="max-w-[800px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#111827] rounded-[6px] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(30,58,138,0.4)]">
<div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.05)] to-transparent p-4">

<div className="flex items-center gap-3">
<div className="relative">
<div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#3b82f6]">
<img alt="User avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/80?img=57"/>
</div>
<div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-[#4CB782] rounded-full border border-[#111827]"></div>
</div>
<div>
<h3 className="text-[14px] font-medium text-white">Marcus Chen</h3>
<p className="text-[12px] font-normal text-white/60">Data Scientist</p>
</div>
</div>

<div className="flex items-center gap-2 mt-4">
<div className="flex items-center gap-2">
<div className="w-[8px] h-[8px] bg-[#4CB782] rounded-full"></div>
<span className="text-[12px] text-white">Available for projects</span>
</div>
</div>

<div className="h-[1px] bg-[rgba(255,255,255,0.06)] my-4"></div>

<div className="grid grid-cols-3 gap-2">
<div className="text-center">
<p className="text-[20px] font-semibold text-white">42</p>
<p className="text-[12px] font-normal text-white/60">Projects</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">8.5k</p>
<p className="text-[12px] font-normal text-white/60">Connections</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">96%</p>
<p className="text-[12px] font-normal text-white/60">Success Rate</p>
</div>
</div>

<div className="flex gap-2 mt-4">
<button className="flex-1 h-[32px] bg-[#3b82f6] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-[#2563eb] transition-all transform hover:scale-105">
              Follow
            </button>
<button className="flex-1 h-[32px] bg-transparent border border-[rgba(255,255,255,0.08)] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-white/5 transition-all transform hover:scale-105">
              Message
            </button>
</div>
</div>
</div>

<div className="bg-[#111827] rounded-[6px] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(30,58,138,0.4)]">
<div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.05)] to-transparent p-4">

<div className="flex items-center gap-3">
<div className="relative">
<div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#3b82f6]">
<img alt="User avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/80?img=32"/>
</div>
<div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-[#f97316] rounded-full border border-[#111827]"></div>
</div>
<div>
<h3 className="text-[14px] font-medium text-white">Sophia Lee</h3>
<p className="text-[12px] font-normal text-white/60">UX Designer</p>
</div>
</div>

<div className="flex items-center gap-2 mt-4">
<div className="flex items-center gap-2">
<div className="w-[8px] h-[8px] bg-[#f97316] rounded-full"></div>
<span className="text-[12px] text-white">Busy until April 15</span>
</div>
</div>

<div className="h-[1px] bg-[rgba(255,255,255,0.06)] my-4"></div>

<div className="grid grid-cols-3 gap-2">
<div className="text-center">
<p className="text-[20px] font-semibold text-white">78</p>
<p className="text-[12px] font-normal text-white/60">Projects</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">12k</p>
<p className="text-[12px] font-normal text-white/60">Connections</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">98%</p>
<p className="text-[12px] font-normal text-white/60">Success Rate</p>
</div>
</div>

<div className="flex gap-2 mt-4">
<button className="flex-1 h-[32px] bg-[#3b82f6] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-[#2563eb] transition-all transform hover:scale-105">
              Follow
            </button>
<button className="flex-1 h-[32px] bg-transparent border border-[rgba(255,255,255,0.08)] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-white/5 transition-all transform hover:scale-105">
              Message
            </button>
</div>
</div>
</div>

<div className="bg-[#111827] rounded-[6px] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(30,58,138,0.4)]">
<div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.05)] to-transparent p-4">

<div className="flex items-center gap-3">
<div className="relative">
<div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#3b82f6]">
<img alt="User avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/80?img=68"/>
</div>
<div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-[#4CB782] rounded-full border border-[#111827]"></div>
</div>
<div>
<h3 className="text-[14px] font-medium text-white">Alex Rivera</h3>
<p className="text-[12px] font-normal text-white/60">Frontend Developer</p>
</div>
</div>

<div className="flex items-center gap-2 mt-4">
<div className="flex items-center gap-2">
<div className="w-[8px] h-[8px] bg-[#4CB782] rounded-full"></div>
<span className="text-[12px] text-white">Looking for new opportunities</span>
</div>
</div>

<div className="h-[1px] bg-[rgba(255,255,255,0.06)] my-4"></div>

<div className="grid grid-cols-3 gap-2">
<div className="text-center">
<p className="text-[20px] font-semibold text-white">63</p>
<p className="text-[12px] font-normal text-white/60">Projects</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">5.2k</p>
<p className="text-[12px] font-normal text-white/60">Connections</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">92%</p>
<p className="text-[12px] font-normal text-white/60">Success Rate</p>
</div>
</div>

<div className="flex gap-2 mt-4">
<button className="flex-1 h-[32px] bg-[#3b82f6] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-[#2563eb] transition-all transform hover:scale-105">
              Follow
            </button>
<button className="flex-1 h-[32px] bg-transparent border border-[rgba(255,255,255,0.08)] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-white/5 transition-all transform hover:scale-105">
              Message
            </button>
</div>
</div>
</div>

<div className="bg-[#111827] rounded-[6px] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(30,58,138,0.4)]">
<div className="relative bg-gradient-to-b from-[rgba(59,130,246,0.05)] to-transparent p-4">

<div className="flex items-center gap-3">
<div className="relative">
<div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#3b82f6]">
<img alt="User avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/80?img=23"/>
</div>
<div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-[#94a3b8] rounded-full border border-[#111827]"></div>
</div>
<div>
<h3 className="text-[14px] font-medium text-white">Emma Johnson</h3>
<p className="text-[12px] font-normal text-white/60">Product Manager</p>
</div>
</div>

<div className="flex items-center gap-2 mt-4">
<div className="flex items-center gap-2">
<div className="w-[8px] h-[8px] bg-[#94a3b8] rounded-full"></div>
<span className="text-[12px] text-white">Away until May 1</span>
</div>
</div>

<div className="h-[1px] bg-[rgba(255,255,255,0.06)] my-4"></div>

<div className="grid grid-cols-3 gap-2">
<div className="text-center">
<p className="text-[20px] font-semibold text-white">127</p>
<p className="text-[12px] font-normal text-white/60">Projects</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">15k</p>
<p className="text-[12px] font-normal text-white/60">Connections</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold text-white">94%</p>
<p className="text-[12px] font-normal text-white/60">Success Rate</p>
</div>
</div>

<div className="flex gap-2 mt-4">
<button className="flex-1 h-[32px] bg-[#3b82f6] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-[#2563eb] transition-all transform hover:scale-105">
              Follow
            </button>
<button className="flex-1 h-[32px] bg-transparent border border-[rgba(255,255,255,0.08)] rounded-[4px] text-[14px] font-medium text-white px-3 hover:bg-white/5 transition-all transform hover:scale-105">
              Message
            </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
