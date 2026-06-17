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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple state manager to toggle between Default, Voice, and Text UIs
        function setState(state) {
            const defaultUi = document.getElementById('default-controls');
            const voiceUi = document.getElementById('voice-controls');
            const textUi = document.getElementById('text-controls');
            const quickReplies = document.getElementById('quick-replies');

            // Reset UI states
            [defaultUi, voiceUi, textUi].forEach(el => {
                el.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto', 'z-10');
                el.classList.add('opacity-0', 'pointer-events-none', 'z-0');
            });
            defaultUi.classList.add('scale-95');
            voiceUi.classList.add('scale-95');
            textUi.classList.add('translate-y-4');

            // Apply selected state
            if (state === 'default') {
                defaultUi.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');
                defaultUi.classList.add('opacity-100', 'scale-100', 'pointer-events-auto', 'z-10');
                
                quickReplies.style.opacity = '1';
                quickReplies.style.transform = 'translateY(0)';
                quickReplies.style.pointerEvents = 'auto';
            } else if (state === 'voice') {
                voiceUi.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');
                voiceUi.classList.add('opacity-100', 'scale-100', 'pointer-events-auto', 'z-10');
                
                quickReplies.style.opacity = '0';
                quickReplies.style.transform = 'translateY(10px)';
                quickReplies.style.pointerEvents = 'none';
            } else if (state === 'text') {
                textUi.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0');
                textUi.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto', 'z-10');
                
                quickReplies.style.opacity = '0';
                quickReplies.style.transform = 'translateY(10px)';
                quickReplies.style.pointerEvents = 'none';
                
                // Auto-focus the input field cleanly
                setTimeout(() => document.getElementById('text-input').focus(), 100);
            }
        }
    
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
      

<div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-40">
<div className="absolute top-[20%] left-[10%] text-purple-300 animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-3xl" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="absolute top-[35%] right-[15%] text-yellow-400 animate-pulse" style={{animationDuration: '4s'}}>
<iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
<div className="absolute bottom-[40%] left-[15%] text-purple-200 animate-bounce" style={{animationDuration: '5s'}}>
<iconify-icon className="text-4xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>

<header className="flex items-center justify-between p-5 bg-white/80 backdrop-blur-md border-b border-gray-100 z-20 relative">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100 shadow-sm text-purple-600">
<iconify-icon className="text-2xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<h1 className="text-xl font-normal tracking-tight text-gray-900">Quto AI</h1>
</div>
<div className="flex items-center gap-5">

<div className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center relative" style={{background: 'conic-gradient(#9333ea 70%, #f3f4f6 0)'}}>
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<iconify-icon className="text-xs text-orange-500" icon="solar:fire-linear"></iconify-icon>
</div>
</div>
<button className="text-gray-600 hover:text-gray-900 transition-colors active:scale-95">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-2xl mx-auto overflow-y-auto hide-scrollbar">

<div className="w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transform transition-all hover:scale-[1.02]">
<div className="flex items-center gap-3 mb-5 opacity-80">
<iconify-icon className="text-xl text-purple-600" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-normal text-purple-700 tracking-wide uppercase">AI Teacher</span>
</div>
<p className="text-2xl text-gray-800 leading-snug tracking-tight font-normal text-left">
                Today we will learn how to speak in English. <br/><br/>Are you ready?
            </p>
</div>
</main>

<footer className="w-full bg-gradient-to-t from-white via-white to-white/0 pt-16 pb-8 z-20 relative">
<div className="max-w-md mx-auto w-full px-4 flex flex-col gap-6 relative">

<div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x px-2 -mx-2 pb-2 transition-all duration-300 ease-out" id="quick-replies">
<button className="snap-center shrink-0 px-6 py-3.5 rounded-full bg-purple-600 text-white text-base font-normal shadow-md shadow-purple-600/20 active:scale-95 transition-all">
                    Yes, I'm ready
                </button>
<button className="snap-center shrink-0 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 text-base font-normal shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
                    Something else
                </button>
<button className="snap-center shrink-0 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 text-base font-normal shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
                    I didn't understand
                </button>
<button className="snap-center shrink-0 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-red-600 text-base font-normal shadow-sm hover:bg-red-50 active:scale-95 transition-all">
                    Exit exercise
                </button>
</div>

<div className="relative h-24 w-full mt-2">

<div className="absolute inset-0 flex items-center justify-center gap-6 transition-all duration-300 ease-out z-10 opacity-100 scale-100 pointer-events-auto" id="default-controls">

<button className="w-14 h-14 rounded-full bg-white border border-gray-100 text-gray-600 shadow-sm flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all" onclick="setState('text')">
<iconify-icon className="text-2xl" icon="solar:keyboard-linear"></iconify-icon>
</button>

<div className="relative flex items-center justify-center">
<div className="absolute w-28 h-28 bg-purple-100 rounded-full animate-ping opacity-60" style={{animationDuration: '3s'}}></div>
<div className="absolute w-24 h-24 bg-purple-200 rounded-full animate-pulse opacity-80" style={{animationDuration: '2s'}}></div>
<button className="relative z-10 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-xl shadow-purple-600/30 active:scale-90 transition-transform duration-300" onclick="setState('voice')">
<iconify-icon className="text-3xl" icon="solar:microphone-2-linear"></iconify-icon>
</button>
</div>

<div className="w-14 h-14 opacity-0 pointer-events-none"></div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out z-0 opacity-0 scale-95 pointer-events-none" id="voice-controls">
<div className="relative flex items-center justify-center">

<div className="absolute w-32 h-32 bg-purple-300 rounded-full animate-ping opacity-30" style={{animationDuration: '1.5s'}}></div>
<div className="absolute w-24 h-24 bg-purple-200 rounded-full animate-pulse opacity-50"></div>

<button className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-purple-700 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-purple-600/40 hover:scale-105 active:scale-95 transition-transform duration-300 group" onclick="setState('default')">

<div className="flex items-center justify-center gap-1.5 h-8 w-8 group-hover:opacity-0 transition-opacity duration-300">
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
</div>

<iconify-icon className="absolute text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:stop-circle-linear"></iconify-icon>
</button>
</div>
<span className="absolute -bottom-6 text-sm font-normal text-purple-600 tracking-wide animate-pulse">Listening...</span>
</div>

<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out z-0 opacity-0 translate-y-4 pointer-events-none w-full max-w-sm mx-auto" id="text-controls">
<div className="flex w-full bg-white border border-gray-200 rounded-full shadow-lg shadow-gray-200/50 p-1.5 items-center gap-2">

<button className="p-2.5 text-gray-400 hover:text-gray-700 rounded-full transition-colors" onclick="setState('default')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<input className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm font-normal px-1 w-full" id="text-input" placeholder="Type your message..." type="text"/>

<button className="w-12 h-12 shrink-0 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-95 hover:bg-purple-700 transition-all">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
