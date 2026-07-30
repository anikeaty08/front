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
      

<div className="relative w-[280px] sm:w-[350px] md:w-[380px] aspect-[460/960] rounded-[36px] bg-black overflow-hidden beautiful-shadow transition-custom ring-1 ring-white/20">

<div className="absolute inset-0">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=2160&q=80" />
<div className="absolute inset-0 bg-black/20 bg-[url(https://images.unsplash.com/photo-1644843521796-33876c641aeb?w=2160&q=80)] bg-cover"></div>
</div>

<div className="absolute top-3 left-0 right-0 flex justify-between items-center px-4 z-40">

<div className="absolute left-1/2 transform -translate-x-1/2 top-0">
<div className="h-6 w-32 relative">
<div className="absolute inset-x-0 mx-auto top-0 h-3.5 w-24 bg-black/90 rounded-full backdrop-blur-sm"></div>
</div>
</div>

<div className="text-white/90 text-[10px] font-medium">
                2:17
            </div>

<div className="flex gap-1 text-white/90 text-[10px] font-medium items-center">
<svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
<path d="M6.5 2h11a1.5 1.5 0 0 1 1.5 1.5v17a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2Z"></path>
</svg>
<span className="">87%</span>
</div>
</div>

<div className="absolute top-[68px] w-full text-center z-30">
<p className="text-white/90 font-medium text-sm">Friday, November 15</p>
</div>

<div className="absolute top-[95px] w-full flex justify-center z-30">
<div className="relative">
<span className="font-thin text-[112px] leading-none text-white/95 tracking-tight time-blur">2:17</span>
</div>
</div>

<div className="absolute inset-x-3 bottom-[165px] flex flex-col gap-3 z-30">

<div className="relative overflow-hidden rounded-3xl transition-custom">
<div className="absolute z-0 inset-0 backdrop-blur-lg glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-15"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)`, borderRadius: `24px`}}></div>
<div className="z-30 relative flex gap-3 p-4">
<div className="flex-shrink-0">
<div className="relative w-8 h-8 rounded-lg overflow-hidden">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-purple-500/80"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)`, borderRadius: `8px`}}></div>
<div className="z-30 relative h-full w-full flex bg-slate-50/70 items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path className="" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path className="" d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0 leading-snug">
<p className="text-white font-semibold text-[13px]">Marcus Rivera</p>
<p className="text-white/90 font-medium text-[13px]">Team Lunch Tomorrow 🍕</p>
<p className="text-white/80 text-[12px] mt-1 line-clamp-2">Just confirmed our reservation at Giovanni's for 12:30 PM. Don't forget to let me know about dietary restrictions by end of day. Looking forward to catching up with everyone!</p>
</div>
<span className="text-white/60 text-[11px] self-start">3m</span>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl transition-custom">
<div className="absolute z-0 inset-0 backdrop-blur-lg glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-15"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)`, borderRadius: `24px`}}></div>
<div className="z-30 relative flex gap-3 pt-4 pr-4 pb-4 pl-4">
<div className="flex-shrink-0">
<div className="relative w-8 h-8 overflow-hidden rounded-lg">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-orange-500/80"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)`, borderRadius: `8px`}}></div>
<div className="z-30 relative h-full w-full flex bg-slate-50/70 items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" fillRule="evenodd"></path>
</svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0 leading-snug">
<p className="text-white font-semibold text-[13px]">Coffee Enthusiasts</p>
<p className="text-white/90 font-medium text-[13px]">Sarah Chen</p>
<p className="text-white/80 text-[12px] mt-1 line-clamp-2">That new roastery downtown has some incredible single-origin beans from Ethiopia! Just tried their pour-over and the flavor notes are absolutely amazing...</p>
</div>
<span className="text-white/60 text-[11px] self-start">8m</span>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-20 px-8 flex justify-between z-30">

<div className="relative w-12 h-12 rounded-full overflow-hidden transition-custom">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.15)`, borderRadius: `50%`}}></div>
<button className="z-30 relative h-full w-full flex items-center justify-center">
<svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="relative w-12 h-12 rounded-full overflow-hidden transition-custom">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.15)`, borderRadius: `50%`}}></div>
<button className="z-30 relative h-full w-full flex items-center justify-center">
<svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
<div className="relative">
<div className="h-1 w-24 bg-white/80 rounded-full backdrop-blur-sm"></div>
</div>
</div>
</div>

    </>
  );
}
