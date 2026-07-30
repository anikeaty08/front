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



    lucide.createIcons();
  
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
      

<div className="relative w-full max-w-6xl backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden fade-in bg-black/95">

<div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 sm:py-6 sm:px-3 fade-in fade-in-delay-1 pt-4 pr-2 pb-4 pl-2 items-center bg-gray-100">
<button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-black text-gray-100 hover:bg-gray-800" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-message-circle sm:w-4 sm:h-4 w-[12px] h-[12px] text-slate-950" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-brain sm:w-4 sm:h-4 w-[12px] h-[12px] text-slate-950" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-settings sm:w-4 sm:h-4 w-[12px] h-[12px] text-slate-950" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-history sm:w-4 sm:h-4 w-[12px] h-[12px] text-slate-950" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></button>
</div>

<div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-10 sm:space-y-8 lg:space-y-10 pt-4 pr-4 pb-6 pl-14 space-y-6">

<div className="flex items-center justify-between fade-in fade-in-delay-2">
<div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-cpu w-3 h-3 sm:w-4 sm:h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="hidden sm:inline font-sans">AI Assistant</span>
<span className="sm:hidden font-sans">AI</span>
<span className="font-sans text-violet-400">Pro</span>
<svg className="lucide lucide-chevron-down w-3 h-3 sm:w-4 sm:h-4 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<h2 className="hidden md:block text-sm font-medium text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Welcome Back</h2>
<button className="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-200 hover:scale-105 text-xs font-medium rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center bg-gradient-to-br from-pink-500 to-rose-500 hover:from-violet-300 hover:to-blue-300 text-black">
<svg className="lucide lucide-crown w-3 h-3 sm:w-4 sm:h-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="hidden sm:inline font-sans">Upgrade</span>
<span className="sm:hidden font-sans">Pro</span>
</button>
</div>

<h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight fade-in fade-in-delay-3 max-w-lg text-2xl tracking-tight font-manrope text-gray-100" style={{}}>
        Transform Your Ideas Into 
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-rose-500 font-manrope" style={{}}>Reality</span> 
        with AI
      </h1>

<div className="relative fade-in fade-in-delay-3">

<div className="hidden xl:block absolute -right-20 -top-16">
<div className="relative">
<div className="w-32 h-32 opacity-20 animate-pulse bg-gradient-to-r rounded-full from-orange-600 to-pink-600"></div>
<div className="absolute top-6 right-6 text-sm font-medium rounded-xl pt-2 pr-4 pb-2 pl-4 shadow-lg text-gray-300 bg-black" style={{transition: `outline 0.1s ease-in-out`}}>
              Ready to create? ✨
            </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
<div className="sm:rounded-2xl sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-md bg-gray-100 border-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-orange-400 to-pink-300 text-black"><svg className="lucide lucide-lightbulb w-4 h-4 sm:w-5 sm:h-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg></div>
<p className="sm:text-lg leading-snug text-base font-normal font-sans text-gray-900" style={{transition: `outline 0.1s ease-in-out`}}>Generate creative content, brainstorm ideas, and solve complex problems instantly.</p>
<span className="text-xs sm:text-sm font-medium font-sans text-gray-600" style={{transition: `outline 0.1s ease-in-out`}}>Creative Assistance</span>
</div>
<div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-900" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br to-teal-500 flex items-center justify-center from-green-600 text-black"><svg className="lucide lucide-users w-4 h-4 sm:w-5 sm:h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<p className="sm:text-lg leading-snug text-base font-normal font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>Collaborate seamlessly with team members and AI assistants for maximum productivity.</p>
<span className="text-xs sm:text-sm text-gray-500 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Team Collaboration</span>
</div>
<div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 bg-black border-gray-900" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-bl to-red-500 text-black from-amber-600"><svg className="lucide lucide-target w-4 h-4 sm:w-5 sm:h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
<p className="sm:text-lg leading-snug text-base font-normal font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>Automate workflows, optimize processes, and achieve your goals faster than ever.</p>
<span className="text-xs sm:text-sm text-gray-500 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Smart Automation</span>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto fade-in fade-in-delay-3">
<div className="sm:rounded-2xl flex flex-col gap-3 sm:gap-4 sm:p-4 md:p-6 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-lg bg-gray-100 border-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center justify-between text-xs font-medium text-gray-600" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center gap-1"><svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg> <span className="hidden sm:inline font-sans">Enhanced capabilities with Pro</span><span className="sm:hidden font-sans">Pro features</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> <span className="hidden sm:inline font-sans">Secured by AI v3.0</span><span className="sm:hidden font-sans">Secure</span></div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<svg className="lucide lucide-command w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<input className="flex-1 border-none outline-none placeholder-gray-500 text-sm sm:text-base bg-transparent text-gray-700" placeholder="Ask me anything... &quot;Create a marketing strategy for my startup&quot;" style={{transition: `outline 0.1s ease-in-out`}} type="text" />
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 border-gray-300 text-gray-600 hover:bg-gray-200 hover:border-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg></button>
<button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br text-black hover:from-violet-300 hover:to-blue-300 from-pink-400 to-rose-400"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</div>

<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 hover:scale-105 bg-gradient-to-br text-black hover:from-violet-300 hover:to-blue-300 from-pink-400 to-rose-400"><svg className="lucide lucide-search w-3 h-3" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> <span className="hidden sm:inline font-sans">Research</span><span className="sm:hidden font-sans">Search</span></button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-image w-3 h-3 text-gray-600" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> <span className="hidden sm:inline font-sans text-slate-950">Generate Image</span><span className="sm:hidden font-sans">Image</span></button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-file-text w-3 h-3 text-gray-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> <span className="hidden sm:inline font-sans text-slate-950">Write Content</span><span className="sm:hidden font-sans">Write</span></button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-code w-3 h-3 text-gray-600" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg> <span className="hidden sm:inline font-sans text-slate-950">Code</span><span className="sm:hidden font-sans">Code</span></button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-200 ring-gray-300 hover:bg-gray-300 hover:ring-gray-400" style={{transition: `outline 0.1s ease-in-out`}}><svg className="lucide lucide-more-horizontal w-3 h-3 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
