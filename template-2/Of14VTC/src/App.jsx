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
      
<div className="max-w-xl w-full rounded-3xl p-9 bg-gradient-to-b from-[#232437] to-[#161822] border border-[#262637] shadow-2xl/70 backdrop-blur-xl flex flex-col gap-7">
<header className="flex flex-col gap-1 items-start pb-1">
<div className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-1">Employee Skill Assessment</div>
<div className="text-3xl font-semibold text-white tracking-tight">2024 Overview</div>
</header>
<div className="flex flex-col gap-6 pt-1">
<div className="text-left text-sm text-gray-500 mb-2">Skill scores based on recent performance review</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Communication</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#55eaff]/90 via-[#2081fb]/70 to-[#55eaff]/0" style={{width: `78%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">78</div>
</div>
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Technical Skills</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#818cf8]/90 via-[#2b65f6]/80 to-[#818cf8]/10" style={{width: `85%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">85</div>
</div>
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Leadership</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#818cf8]/70 via-[#bb80ef]/60 to-[#9c74fc]/20" style={{width: `67%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">67</div>
</div>
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Creativity</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#fca5a5]/90 via-[#fde68a]/80 to-[#eab308]/30" style={{width: `72%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">72</div>
</div>
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Teamwork</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#a7f3d0]/80 via-[#38bdf8]/90 to-[#beffd6]/30" style={{width: `89%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">89</div>
</div>
<div className="flex items-center gap-4">
<div className="w-40 text-left pr-3 text-gray-400 font-medium">Time Management</div>
<div className="flex-1 h-3 rounded-full bg-[#232e3d] overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#fca5a5]/60 via-[#fbbf24]/70 to-[#333]/10" style={{width: `77%`}}></div>
</div>
<div className="ml-3 text-white font-semibold tabular-nums">77</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-start space-y-1">
<div className="text-2xl font-semibold text-white tracking-tight">
        Average Score:
        <span className="ml-2 bg-gradient-to-bl from-[#38bdf8] via-[#818cf8] to-[#a7f3d0] bg-clip-text text-transparent font-bold">78</span>
</div>
<div className="text-xs text-gray-500 font-medium">All scores out of 100</div>
</div>
</div>

    </>
  );
}
