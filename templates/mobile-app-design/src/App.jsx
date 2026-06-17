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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-screen saturate-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tPmIIl0vKqHO9yqmtge2"></div>

</div></div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">

<div className="flex flex-col bg-white w-full h-[840px] max-w-sm rounded-3xl relative shadow-2xl">

<div className="flex pt-8 pr-6 pb-6 pl-6 items-center justify-between">
<button className="text-gray-500 hover:text-gray-800 transition">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:arrow-left-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="text-gray-500 hover:text-gray-800 transition">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:calendar-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724" fill="currentColor"></path><path d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" fill="currentColor" opacity=".5"></path><path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path></svg>
</button>
</div>

<div className="px-8 mt-2 relative z-10">
<div className="space-y-6">
<div className="">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wide font-geist-mono">Event</p>
<h2 className="text-lg font-semibold text-gray-900 mt-1 font-geist-mono">UX Research Sync</h2>
</div>
<div className="">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wide font-geist-mono">Time</p>
<h2 className="text-lg font-semibold text-gray-900 mt-1 font-geist-mono">Mar 12th - 09:00</h2>
</div>
<div className="">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wide font-geist-mono">Location</p>
<h2 className="text-lg font-semibold text-gray-900 mt-1 font-geist-mono">Design Wing - 204</h2>
</div>
</div>
</div>

<div className="absolute top-24 right-6 flex flex-col items-center space-y-6 z-0">

<div className="absolute top-8 bottom-8 w-px bg-gray-200 -z-10"></div>

<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8deab20-79f0-4568-be6e-c4baeded4050_320w.webp"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e807631-f507-40d1-92e2-17f496e11b6b_320w.webp"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/800c4988-577b-41c6-ab7f-990312f9f0cd_320w.webp"/>

<button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</button>
<div className="text-center pt-2">
<p className="text-[10px] text-gray-400 font-medium font-geist-mono">DSGN402</p>
<p className="text-xs text-orange-500 font-semibold font-geist-mono">Team Alpha</p>
</div>
</div>

<div className="-ml-10 bg-orange-50 w-[85%] z-20 border-orange-100/50 border rounded-3xl mt-12 pt-6 pr-6 pb-6 pl-6 relative top-4 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<p className="text-[10px] text-orange-400 font-medium uppercase tracking-wide mb-4 font-geist-mono">Current Sprints</p>
<div className="space-y-6">
<div className="flex items-center justify-between group cursor-pointer">
<div>
<h3 className="text-orange-900 font-medium text-sm font-geist-mono">User Persona Workshop</h3>
<p className="text-orange-400 text-xs mt-1 font-geist-mono">Progress: 45%</p>
</div>
<svg aria-hidden="true" className="iconify text-orange-300 text-xl iconify--solar" data-icon="solar:calendar-add-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692" fill="currentColor"></path><path d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M16 13.25a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="">
<h3 className="text-orange-900 font-medium text-sm font-geist-mono">Journey Mapping Session</h3>
<p className="text-orange-400 text-xs mt-1 font-geist-mono">Progress: 20%</p>
</div>
<svg aria-hidden="true" className="iconify text-orange-300 text-xl iconify--solar" data-icon="solar:calendar-add-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692" fill="currentColor"></path><path className="" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M16 13.25a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</div>
<p className="text-gray-500 text-xs mt-6 font-light font-geist-mono">Looking forward to seeing the insights!</p>
</div>

<div className="overflow-hidden text-center bg-neutral-500 rounded-3xl mt-auto pt-8 pr-8 pb-12 pl-8 relative">
<p className="text-green-50 text-sm font-light mb-6 leading-relaxed font-geist-mono">
                    You need to upload your research findings first to register and attend this sync.
                </p>
<div className="border-dashed flex flex-col cursor-pointer hover:bg-green-800/30 transition group border-green-200/30 border-2 rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition">
<svg aria-hidden="true" className="iconify text-green-100 text-xl iconify--solar" data-icon="solar:upload-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16v-1c0-2.829 0-4.242-.879-5.121S18.828 9 16 9H8c-2.83 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.998V16c0 2.828 0 4.242.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879S22 18.828 22 16" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<p className="text-green-50 font-medium text-sm font-geist-mono">Upload your findings</p>
<p className="text-green-200/60 text-xs mt-1 font-light font-geist-mono">Don't worry even if it's a draft :)</p>
</div>
</div>
</div>

<div className="relative w-full max-w-sm bg-gray-900 rounded-3xl h-[840px] overflow-hidden shadow-2xl group">

<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67351756-a1a8-4042-926e-9015a7f1e799_1600w.webp"/>
<div className="bg-gradient-to-b from-black/40 via-transparent to-black/80 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 left-0 right-0 p-6 pt-8 flex items-start justify-between">
<button className="text-white/80 hover:text-white transition">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:arrow-left-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z" fill="currentColor"></path></svg>
</button>
<div className="text-right">
<div className="flex items-center justify-end gap-2">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
<p className="text-white text-xs font-medium font-geist-mono">84,209 designers active!</p>
</div>
<p className="text-white/60 text-[10px] mt-1 font-geist-mono">Session archives available post-live</p>
</div>
</div>

<div className="transform -translate-x-1/2 -translate-y-1/2 flex bg-gradient-to-br from-white/90 to-white/60 w-[90%] rounded-3xl pt-4 pr-4 pb-4 pl-4 absolute top-1/2 left-1/2 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] backdrop-blur-md gap-x-4 gap-y-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '24px'}}>
<div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Library" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/843e481b-cf5e-495f-bc63-2febbc784407_320w.webp" style={{}}/>
</div>
<div className="flex-1 flex flex-col justify-between py-1">
<div className="">
<p className="text-xs font-semibold text-gray-900 font-geist-mono">Friday, Mar 15th</p>
<p className="text-lg font-medium text-gray-800 tracking-tight mt-0.5 font-geist-mono">10:00 - 11:30</p>
<p className="text-xs text-gray-500 font-medium font-geist-mono">Central Studio</p>
</div>
<button className="hover:bg-gray-200 self-start transition text-xs font-medium text-gray-900 font-geist-mono bg-gray-100 rounded-full mt-2 pt-2 pr-4 pb-2 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        Reserve a Seat
                    </button>
</div>
</div>

<div className="absolute right-4 bottom-40 flex flex-col gap-3">
<button className="flex hover:bg-white/30 transition text-white bg-gradient-to-br from-white/20 via-white/0 to-white/10 w-12 h-12 rounded-full shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] backdrop-blur-sm items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:bookmark-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098" fill="currentColor" opacity=".5"></path><path className="" d="M9 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</button>
<button className="flex hover:bg-white/30 transition text-white bg-gradient-to-br from-white/20 via-white/0 to-white/10 w-12 h-12 rounded-full relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] backdrop-blur-sm items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:chat-round-dots-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12c0 1.76.413 3.423 1.148 4.898c.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.8 1.8 0 0 1 1.262.147A10.96 10.96 0 0 0 12 23" fill="currentColor" opacity=".5"></path><path d="M10.9 12a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m-4.4 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m8.8 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0" fill="currentColor"></path></svg>
<span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
</button>
<button className="flex hover:bg-white/30 transition text-white bg-gradient-to-br from-white/20 via-white/0 to-white/10 w-12 h-12 rounded-full shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] backdrop-blur-sm items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:pen-new-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" fill="currentColor" opacity=".5"></path><path d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z" fill="currentColor"></path></svg>
</button>
</div>

<div className="pt-8 pr-8 pb-10 pl-8 absolute right-0 bottom-0 left-0">
<h2 className="text-2xl text-white leading-tight mb-6 font-geist-mono tracking-tighter" style={{}}>
                    Advanced Prototyping &amp; Interaction
                </h2>
<div className="flex items-center justify-between">
<button className="bg-[#bfd6ba] text-[#2d3a2a] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#a9c4a3] transition font-geist-mono">
                        Julian Thorne
                    </button>
<span className="text-white/60 text-[10px] font-medium tracking-wider uppercase font-geist-mono">Head of Design</span>
</div>
</div>
</div>

<div className="flex flex-col bg-gray-200 w-full h-[840px] max-w-sm rounded-3xl relative shadow-2xl">

<div className="flex bg-white rounded-t-3xl pt-8 pr-6 pb-6 pl-6 items-center justify-between">
<button className="text-gray-500 hover:text-gray-800 transition">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:arrow-left-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path className="" d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="text-gray-500 hover:text-gray-800 transition">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
<div className="bg-white z-10 rounded-b-[3rem] pr-8 pb-8 pl-8 shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]">
<h1 className="text-2xl text-gray-900 mb-6 font-geist-mono tracking-tighter" style={{}}>
                    Advanced Prototyping &amp; Interaction Design
                </h1>
<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<p className="text-[10px] font-semibold text-gray-400 uppercase font-geist-mono">Term</p>
<p className="text-sm font-medium text-gray-900 mt-1 font-geist-mono">4 months</p>
</div>
<div className="">
<p className="text-[10px] font-semibold text-gray-400 uppercase font-geist-mono">Credits</p>
<p className="text-sm font-medium text-gray-900 mt-1 font-geist-mono">5.0</p>
</div>
<div className="">
<p className="text-[10px] font-semibold text-gray-400 uppercase font-geist-mono">Exam</p>
<p className="text-sm font-medium text-gray-900 mt-1 font-geist-mono">Final Project</p>
</div>
</div>
<p className="text-gray-500 text-sm leading-relaxed font-light mb-4 font-geist-mono">
                    Interaction design forms the backbone of digital experiences. We focus on micro-interactions, state management, and haptic feedback systems using modern tools.
                </p>
</div>

<div className="text-white bg-[#1a1a1a] w-[85%] z-20 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-[340px] right-[-40px] shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<div className="flex flex-col text-center mb-6 items-center">
<div className="w-16 h-16 rounded-full p-1 border border-gray-700 mb-3">
<img alt="Professor" className="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b4169b2-1e5b-4014-a9a6-1785e7867fcd_320w.webp" style={{}}/>
</div>
<h3 className="text-lg font-medium tracking-tight font-geist-mono">Julian Thorne</h3>
<p className="text-xs text-gray-400 mt-1 font-geist-mono">Head of Design Systems</p>
</div>
<p className="text-[11px] text-gray-400 text-center leading-relaxed mb-6 px-2 font-geist-mono">
                    Julian is a renowned design systems architect known for his work on scalable UI frameworks at major tech firms.
                </p>
<div className="flex justify-between px-4 mb-6 border-t border-white/10 pt-4">
<div className="text-center">
<p className="text-[10px] text-gray-500 uppercase font-geist-mono">Courses</p>
<p className="text-sm font-medium mt-1 font-geist-mono">5</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500 uppercase font-geist-mono">Projects</p>
<p className="text-sm font-medium mt-1 font-geist-mono">42</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500 uppercase font-geist-mono">Rate</p>
<p className="text-sm font-medium mt-1 font-geist-mono">9.9</p>
</div>
</div>
<button className="hover:bg-white/20 transition flex text-xs font-medium text-gray-200 font-geist-mono bg-gradient-to-br from-white/10 to-white/0 w-full rounded-xl py-3 gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px'}}>
                    Enrol his Courses <span className="text-lg font-geist-mono">+</span>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pt-48 pr-8 pb-8 pl-8">
<p className="text-xs font-semibold text-gray-900 mb-6 font-geist-mono">Course Schedule</p>
<div className="space-y-8">
<div className="group cursor-pointer flex items-center justify-between">
<div className="">
<p className="text-[10px] text-gray-400 uppercase font-medium mb-1 font-geist-mono">Lesson 01</p>
<h4 className="text-sm font-medium text-gray-900 font-geist-mono">Micro-interactions 101</h4>
<p className="text-xs text-gray-400 mt-1 font-geist-mono">Feb 2nd - 19:30</p>
</div>
<svg aria-hidden="true" className="iconify text-gray-400 text-lg group-hover:text-gray-800 transition iconify--solar" data-icon="solar:alt-arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z" fill="currentColor"></path><path d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="group cursor-pointer flex items-center justify-between">
<div className="">
<p className="text-[10px] text-gray-400 uppercase font-medium mb-1 font-geist-mono">Lesson 02</p>
<h4 className="text-sm font-medium text-gray-900 font-geist-mono">State Management Logic</h4>
<p className="text-xs text-gray-400 mt-1 font-geist-mono">Feb 16th - 19:30</p>
</div>
<svg aria-hidden="true" className="iconify text-gray-400 text-lg group-hover:text-gray-800 transition iconify--solar" data-icon="solar:alt-arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z" fill="currentColor"></path><path d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="group cursor-pointer flex items-center justify-between">
<div className="">
<p className="text-[10px] text-gray-400 uppercase font-medium mb-1 font-geist-mono">Lesson 03</p>
<h4 className="text-sm font-medium text-gray-900 font-geist-mono">Haptic Feedback Patterns</h4>
<p className="text-xs text-gray-400 mt-1 font-geist-mono">Mar 1st - 19:30</p>
</div>
<svg aria-hidden="true" className="iconify text-gray-400 text-lg group-hover:text-gray-800 transition iconify--solar" data-icon="solar:alt-arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z" fill="currentColor"></path><path d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
