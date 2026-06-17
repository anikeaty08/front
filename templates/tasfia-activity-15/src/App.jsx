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



        // Initialize Icons
        lucide.createIcons();

        // Simple timer simulation
        let seconds = 45;
        let minutes = 12;
        const timerElement = document.getElementById('timer');
        
        setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            // Format time with leading zeros
            const formattedMin = minutes < 10 ? '0' + minutes : minutes;
            const formattedSec = seconds < 10 ? '0' + seconds : seconds;
            timerElement.textContent = `${formattedMin}:${formattedSec}`;
        }, 1000);
    
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
      

<div className="relative w-full h-full max-w-md mx-auto flex flex-col">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Dr. Sarah Mitchell" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;h=1200&amp;fit=crop&amp;q=80"/>

<div className="absolute inset-0 video-gradient"></div>
</div>

<div className="relative z-10 px-6 pt-12 flex justify-between items-start">
<button className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10 active:scale-95 transition-transform" onclick="window.history.back()">
<svg className="lucide lucide-chevron-down w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1.5 mb-1">
<svg className="lucide lucide-lock w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs font-medium text-green-400 tracking-wide uppercase">End-to-End Encrypted</span>
</div>
<h1 className="text-lg font-semibold tracking-tight text-white shadow-sm">Dr. Sarah Mitchell</h1>
<span className="text-sm font-medium text-white/70" id="timer">12:45</span>
</div>
<button className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10 active:scale-95 transition-transform">
<svg className="lucide lucide-flip-horizontal w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"></path><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"></path><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="m3 12 18-9"></path><path d="M3 12v9"></path></svg>
</button>
</div>

<div className="absolute top-32 right-6 z-10 flex flex-col gap-1 items-end">
<div className="flex gap-1 items-end h-3">
<div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
<div className="w-1 h-2 bg-white rounded-full opacity-50"></div>
<div className="w-1 h-3 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute bottom-28 right-4 z-20 w-28 h-40 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/20">
<img alt="You" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&amp;h=400&amp;fit=crop&amp;q=80"/>
<div className="absolute bottom-2 left-2 p-1 bg-black/50 backdrop-blur-sm rounded-md">
<svg className="lucide lucide-mic-off w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="2" x2="22" y1="2" y2="22"></line><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path><path d="M5 10v2a7 7 0 0 0 12 5"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>

<div className="absolute bottom-0 w-full z-30 pb-8 pt-4 px-6 glass-controls rounded-t-3xl border-t border-white/5">

<div className="flex justify-between items-center px-2">

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95">
<svg className="lucide lucide-mic w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</button>
<span className="text-[10px] font-medium text-white/80">Mute</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95">
<svg className="lucide lucide-video w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</button>
<span className="text-[10px] font-medium text-white/80">Stop Video</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95 relative">
<svg className="lucide lucide-message-square w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-[#1e1e1e]"></span>
</button>
<span className="text-[10px] font-medium text-white/80">Chat</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<button className="flex hover:bg-red-600 transition-colors active:scale-95 shadow-red-900/20 bg-red-500/90 w-14 h-14 border-red-500 border rounded-full shadow-lg backdrop-blur-md items-center justify-center cursor-pointer" onclick="window.history.back();window.location.href='/patient-home'" role="button">
<svg className="lucide lucide-phone-off w-6 h-6 text-white fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="22" x2="2" y1="2" y2="22"></line></svg>
</button>
<span className="text-[10px] font-medium text-white/80">End</span>
</div>
</div>

<div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-6"></div>
</div>
</div>


    </>
  );
}
