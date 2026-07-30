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



    // Animate sequence
    window.onload = () => {
      setTimeout(()=>{
        document.querySelectorAll('.slide-up').forEach((el)=>{ el.style.animationPlayState="running"; });
      },200);
    };
    // Theme toggle logic
    const toggle = document.getElementById('darkModeToggle');
    const mockup = document.getElementById('iphone-mockup');
    const screen = document.getElementById('screen-area');
    let isDark = true;
    function applyMode() {
      if(isDark) {
        mockup.classList.remove('mockup-light');
        screen.classList.remove('screen-light');
        toggle.style.background = "linear-gradient(90deg,#2563eb44 0%,#1e40af33 100%)";
        toggle.querySelector('.toggle-knob').style.transform = "translateX(0px)";
        toggle.querySelector('.toggle-knob').style.background = "#2563eb";
      } else {
        mockup.classList.add('mockup-light');
        screen.classList.add('screen-light');
        toggle.style.background = "linear-gradient(90deg,#e0e7ff 60%,#bae6fd 100%)";
        toggle.querySelector('.toggle-knob').style.transform = "translateX(20px)";
        toggle.querySelector('.toggle-knob').style.background = "#dbeafe";
      }
    }
    applyMode();
    toggle.addEventListener('click',()=>{isDark=!isDark;applyMode();});
  
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
      
<div className="relative rounded-[40px] border-8 border-[#222] w-[393px] h-[852px] bg-gradient-to-br from-[#232323] via-[#292929] to-[#444] shadow-2xl flex items-center justify-center fade-in-scale" id="iphone-mockup">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-[#111] rounded-b-2xl z-30 shadow"></div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[56px] h-[6px] bg-[#222] rounded-lg z-31"></div>
<div className="relative w-[377px] h-[828px] transition-colors duration-300 bg-black rounded-[32px] overflow-hidden shadow flex flex-col" id="screen-area">

<div className="slide-up" style={{animationDelay: `0.45s`}}>
<div className="h-[59px] flex items-center px-6 pt-3 pb-1.5">
<span className="status-bar-text w-14 text-white text-[17px] font-semibold text-center tracking-[-0.41px] sf-semi select-none">9:41</span>
<div className="grow"></div>
<div className="flex items-center space-x-2">
<svg className="status-bar-svg" fill="white" height="12" viewBox="0 0 18 12" width="18"><rect height="5" width="2" x="0" y="7"></rect><rect height="8" width="2" x="4" y="4"></rect><rect height="10" width="2" x="8" y="2"></rect><rect height="12" width="2" x="12" y="0"></rect><rect height="7" width="2" x="16" y="5"></rect></svg>
<svg className="status-bar-svg" height="12" viewBox="0 0 17 12" width="17"><path d="M8.5 12a2.5 2.5 0 0 1 0-5c1.35 0 2.25 1.24 2.5 2a4.5 4.5 0 0 0-9 0c.25-.76 1.15-2 2.5-2a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></svg>
<svg className="status-bar-svg" height="13" viewBox="0 0 27 13" width="27"><rect fill="none" height="9" opacity="0.35" rx="2" stroke="currentColor" strokeWidth="1.1" width="21" x="0" y="2"></rect><rect fill="currentColor" height="5" rx="1" width="17" x="2" y="4"></rect><rect fill="currentColor" height="3" opacity="0.4" rx="1" width="2" x="23" y="5"></rect></svg>
</div>
</div>
<div className="w-full flex items-center justify-between px-4 pt-2 pb-2">
<h1 className="text-[28px] leading-[34px] font-bold text-white tracking-[-0.4px] sf-bold">Settings</h1>
<button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition">
<svg fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pt-1 px-4 pb-28 w-full">
<div className="slide-up" style={{animationDelay: `0.60s`}}>
<h2 className="text-[22px] leading-7 font-bold text-white tracking-[-0.4px] sf-bold pt-4 pb-2">Account</h2>
<div className="space-y-2">
<div className="flex items-center justify-between min-h-[56px] rounded-lg hover:bg-white/5 px-4">
<span className="text-[16px] text-white sf-regular opacity-70 tracking-[-0.4px]">Personal information</span>
<svg fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex items-center justify-between min-h-[56px] rounded-lg hover:bg-white/5 px-4">
<span className="text-[16px] text-white sf-regular opacity-70 tracking-[-0.4px]">Notifications</span>
<svg fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex items-center justify-between min-h-[56px] rounded-lg hover:bg-white/5 px-4">
<span className="text-[16px] text-white sf-regular opacity-70 tracking-[-0.4px]">Payments and payouts</span>
<svg fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex items-center justify-between min-h-[56px] rounded-lg hover:bg-white/5 px-4">
<span className="text-[16px] text-white sf-regular opacity-70 tracking-[-0.4px]">Privacy and sharing</span>
<svg fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
</div>
<div className="slide-up mt-6" style={{animationDelay: `0.75s`}}>
<h2 className="text-[22px] leading-7 font-bold text-white tracking-[-0.4px] sf-bold pb-2">Support</h2>
<div className="space-y-2">
<div className="flex items-center justify-between min-h-[72px] rounded-lg hover:bg-white/5 px-4 py-2">
<div>
<div className="text-[16px] font-semibold text-white sf-semi tracking-[-0.4px]">Safety Center</div>
<div className="text-[15px] opacity-70 text-white mt-1 sf-regular leading-5">Get the support, tools, and information you need to be safe.</div>
</div>
<svg className="mt-4" fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex items-center justify-between min-h-[72px] rounded-lg hover:bg-white/5 px-4 py-2">
<div>
<div className="text-[16px] font-semibold text-white sf-semi tracking-[-0.4px]">Contact Support</div>
<div className="text-[15px] opacity-70 text-white mt-1 sf-regular leading-5">Let our team know about your concerns.</div>
</div>
<svg className="mt-2" fill="none" height="24" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
</div>

<div className="slide-up mt-6" style={{animationDelay: `0.9s`}}>
<div className="flex items-center justify-between min-h-[72px] rounded-lg hover:bg-white/5 px-4 py-2">
<div className="text-[16px] font-semibold text-white sf-semi tracking-[-0.4px]">Dark mode</div>
<div className="toggle-outer cursor-pointer w-[51px] h-[31px] rounded-full flex items-center px-1 bg-gradient-to-r from-white/20 to-white/10" id="darkModeToggle" style={{background: `linear-gradient(90deg,#2563eb44 0%,#1e40af33 100%)`}}>
<div className="toggle-knob w-[27px] h-[27px] rounded-full flex items-center justify-center bg-blue-500 shadow transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="slide-up absolute bottom-[34px] left-0 w-full px-8 z-40" style={{animationDelay: `1.1s`}}>
<button className="w-full py-2.5 rounded-xl bg-blue-500 text-white text-[15px] font-semibold leading-5 sf-semi hover:bg-blue-400 active:bg-blue-600 transition text-center shadow-lg">Log out</button>
</div>

<div className="slide-up absolute bottom-0 left-0 w-full flex justify-center items-center h-[34px]" style={{animationDelay: `1.2s`}}>
<div className="home-indicator w-[134px] h-[5px] bg-white rounded-full"></div>
</div>
</div>
</div>


    </>
  );
}
