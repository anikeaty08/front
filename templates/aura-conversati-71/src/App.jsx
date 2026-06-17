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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter flex items-center gap-2 text-neutral-900 group" href="#">
<div className="w-5 h-5 rounded-full bg-neutral-900 group-hover:scale-90 transition-transform duration-300"></div>
                Aura
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200" href="#features">Philosophy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200" href="#security">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200" href="#manifesto">Manifesto</a>
</div>
<a className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all transform hover:scale-105 active:scale-95 shadow-sm" href="#">
                Get Early Access
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-fade-in-up opacity-0">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-neutral-500 font-medium tracking-wide uppercase">v1.0 Now Available</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[1.1] mb-6 animate-fade-in-up delay-100 opacity-0">
                Conversation,<br/>clarified.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-lg mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200 opacity-0">
                Aura removes the noise from your digital life. No status updates, no stories, no clutter. Just you and the people who matter.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300 opacity-0">
<button className="h-12 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
<i className="w-4 h-4 fill-current" data-lucide="apple"></i>
                    Download for iOS
                </button>
<button className="h-12 px-8 rounded-full bg-white text-neutral-900 border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition-all flex items-center gap-2">
                    Open in Browser
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="mt-20 md:mt-32 relative max-w-sm md:max-w-md mx-auto animate-fade-in-up delay-300 opacity-0">

<div className="relative rounded-[3rem] border-[8px] border-neutral-900 bg-neutral-900 overflow-hidden shadow-2xl ring-1 ring-neutral-900/5">

<div className="absolute top-0 inset-x-0 h-7 bg-neutral-900 z-20 flex justify-center">
<div className="w-32 h-full bg-black rounded-b-xl"></div>
</div>

<div className="relative bg-white h-[600px] w-full flex flex-col pt-12 pb-8 px-5 overflow-hidden">

<div className="flex items-center justify-between mb-8 px-1">
<i className="w-6 h-6 text-neutral-400" data-lucide="chevron-left"></i>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-1">
<span className="text-xs font-medium text-neutral-500">S</span>
</div>
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Sarah</span>
</div>
<i className="w-5 h-5 text-neutral-300" data-lucide="info"></i>
</div>

<div className="flex-1 space-y-6 overflow-hidden">
<div className="text-center">
<span className="text-[10px] text-neutral-300 font-medium">Today 9:41 AM</span>
</div>

<div className="flex items-end gap-2">
<div className="chat-bubble bg-neutral-100 text-neutral-800 rounded-bl-none" style={{animationDelay: '0.8s'}}>
                                Are we still on for coffee later?
                            </div>
</div>

<div className="flex items-end gap-2 justify-end">
<div className="chat-bubble bg-neutral-900 text-white rounded-br-none" style={{animationDelay: '1.2s'}}>
                                Absolutely. I found this quiet spot downtown. 
                            </div>
</div>

<div className="flex items-end gap-2 justify-end">
<div className="chat-bubble bg-neutral-900 text-white rounded-br-none" style={{animationDelay: '1.5s'}}>
                                It's perfect for deep work. No music, just focus.
                            </div>
</div>

<div className="flex items-end gap-2">
<div className="chat-bubble bg-neutral-100 text-neutral-800 rounded-bl-none" style={{animationDelay: '2.5s'}}>
                                Sounds like Aura. Let's go.
                            </div>
</div>

<div className="flex items-end gap-2 opacity-0 animate-fade-in-up" style={{animationDelay: '3.5s'}}>
<div className="px-4 py-3 bg-neutral-50 rounded-2xl rounded-bl-none flex gap-1 items-center">
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-100"></div>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-200"></div>
</div>
</div>
</div>

<div className="mt-4 relative">
<div className="h-12 w-full bg-neutral-50 rounded-full border border-neutral-100 flex items-center px-4 justify-between">
<span className="text-neutral-300 text-sm">Message...</span>
<div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="arrow-up"></i>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-12 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl -z-10"></div>
<div className="absolute bottom-12 -right-12 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl -z-10"></div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group col-span-1 md:col-span-2 bg-white rounded-3xl p-10 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 border border-neutral-100">
<i className="text-neutral-900" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-neutral-900">Instant Focus Mode</h3>
<p className="text-neutral-500 leading-relaxed max-w-md">Silence the world with a single tap. Aura suppresses all non-urgent notifications, allowing you to engage in deep, uninterrupted conversation.</p>
</div>

<div className="absolute top-1/2 right-[-20px] translate-y-[-10%] w-48 h-64 bg-neutral-50 rounded-l-2xl border-l border-t border-b border-neutral-100 flex flex-col p-4 gap-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-[-10px] transition-all duration-500">
<div className="w-full h-2 bg-neutral-200 rounded-full"></div>
<div className="w-2/3 h-2 bg-neutral-200 rounded-full"></div>
<div className="mt-auto w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center self-end">
<i className="w-4 h-4 text-blue-600" data-lucide="moon"></i>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-3xl p-10 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 border border-neutral-100">
<i className="text-neutral-900" data-lucide="lock"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-neutral-900">Zero Knowledge</h3>
<p className="text-neutral-500 leading-relaxed text-sm">End-to-end encrypted. We can't read your messages, and we don't want to.</p>
</div>
<div className="mt-8 flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-50 p-3 rounded-lg">
<i className="w-3 h-3" data-lucide="key"></i>
<span>0x7F...3A29</span>
</div>
</div>

<div className="col-span-1 bg-neutral-900 rounded-3xl p-10 shadow-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
<i className="text-white" data-lucide="palette"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Adaptive UI</h3>
<p className="text-neutral-400 leading-relaxed text-sm">The interface recedes. Aura adapts to your environment, turning dark when the lights go down.</p>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 -z-10"></div>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-all duration-700"></div>
</div>

<div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-10 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500">
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 border border-neutral-100">
<i className="text-neutral-900" data-lucide="mic"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-neutral-900">Crystal Audio</h3>
<p className="text-neutral-500 leading-relaxed">Voice notes that sound like you're in the same room. High fidelity audio compression with noise isolation.</p>
</div>
<div className="flex-1 flex items-center justify-center">

<div className="flex items-center gap-1 h-16">
<div className="w-1.5 bg-neutral-200 rounded-full h-4 animate-[float_1.2s_ease-in-out_infinite]"></div>
<div className="w-1.5 bg-neutral-300 rounded-full h-8 animate-[float_1.5s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1.5 bg-neutral-800 rounded-full h-12 animate-[float_1.1s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1.5 bg-neutral-600 rounded-full h-6 animate-[float_1.3s_ease-in-out_infinite_0.3s]"></div>
<div className="w-1.5 bg-neutral-300 rounded-full h-10 animate-[float_1.4s_ease-in-out_infinite_0.4s]"></div>
<div className="w-1.5 bg-neutral-200 rounded-full h-5 animate-[float_1.6s_ease-in-out_infinite_0.5s]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white border-t border-neutral-100">
<div className="max-w-xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-all duration-500">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">
                Ready to clear the air?
            </h2>
<p className="text-neutral-500 mb-10 text-lg">
                Join thousands who have switched to a calmer way of communicating.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Get Aura for iOS
                </button>
<button className="h-12 px-8 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all">
                    Read the Manifesto
                </button>
</div>
<p className="mt-8 text-xs text-neutral-400">
                Requires iOS 15 or later. <a className="underline hover:text-neutral-600" href="#">Privacy Policy</a>
</p>
</div>
</section>

<footer className="bg-[#FAFAFA] border-t border-neutral-200 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-neutral-900"></div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Aura</span>
</div>
<div className="flex flex-wrap gap-8">
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Support</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Careers</a>
</div>
<div className="text-xs text-neutral-400">
                © 2023 Aura Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
