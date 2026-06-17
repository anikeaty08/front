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
      

<div className="relative h-[55vh] lg:h-full w-full lg:w-2/3 flex-shrink-0 bg-slate-900 overflow-hidden">

<img alt="Marcus Johnson" className="absolute inset-0 w-full h-full object-cover object-top opacity-90" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent"></div>

<div className="absolute inset-0 p-6 lg:p-16 flex flex-col justify-end">

<div className="mb-8 lg:mb-12">
<h1 className="text-4xl lg:text-6xl tracking-tight font-semibold text-white mb-2">Marcus Johnson</h1>
<p className="text-xl lg:text-2xl font-medium text-slate-300">Principal Consultant &amp; Strategist</p>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 max-w-3xl w-full shadow-2xl">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

<div className="flex items-center space-x-5 group cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-400 mb-0.5">Email</span>
<span className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">marcus@example.com</span>
</div>
</div>

<div className="flex items-center space-x-5 group cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-400 mb-0.5">Direct Line</span>
<span className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">+1 (555) 284-8921</span>
</div>
</div>

<div className="flex items-center space-x-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-400 mb-0.5">Office</span>
<span className="text-lg text-white font-medium">1 World Trade Center, NY</span>
</div>
</div>

<div className="flex items-center space-x-4 pt-2 sm:pt-0 sm:justify-end">
<button className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all text-white hover:scale-105">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all text-white hover:scale-105">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all text-white hover:scale-105">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-slate-50 lg:bg-white border-l border-slate-200 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.03)] h-[45vh] lg:h-full">

<div className="px-6 py-4 lg:py-6 border-b border-slate-200 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center space-x-4">
<div className="relative">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h2 className="text-xl tracking-tight font-semibold text-slate-900">Marcus's Assistant</h2>
<p className="text-base text-slate-500 font-medium">Typically replies instantly</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">

<div className="flex justify-center">
<span className="text-sm font-medium text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">Today, 9:41 AM</span>
</div>

<div className="flex w-full max-w-[90%] items-end space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-slate-200 shadow-sm rounded-2xl rounded-bl-sm px-5 py-4">
<p className="text-lg text-slate-700 leading-relaxed">
                        Hi there! 👋 I'm Marcus's digital assistant. He's currently in meetings, but I can help you access his portfolio, schedule a call, or take a message. How can I assist you today?
                    </p>
</div>
</div>

<div className="flex w-full max-w-[90%] ml-auto justify-end items-end space-x-3">
<div className="bg-slate-900 text-white shadow-sm rounded-2xl rounded-br-sm px-5 py-4">
<p className="text-lg leading-relaxed">
                        I'd love to schedule a brief consultation regarding a new enterprise project.
                    </p>
</div>
</div>

<div className="flex w-full max-w-[90%] items-end space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-slate-200 shadow-sm rounded-2xl rounded-bl-sm px-5 py-4 space-y-4 w-full">
<p className="text-lg text-slate-700 leading-relaxed">
                        Excellent. Marcus would be happy to discuss that. What timeline are you looking at for this project?
                    </p>

<div className="flex flex-wrap gap-2 pt-2">
<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-medium rounded-full transition-colors border border-slate-200">
                            Within 1 month
                        </button>
<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-medium rounded-full transition-colors border border-slate-200">
                            1-3 months
                        </button>
<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-medium rounded-full transition-colors border border-slate-200">
                            Just exploring
                        </button>
</div>
</div>
</div>

<div className="flex w-full max-w-[90%] items-end space-x-3 opacity-50">
<div className="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-slate-200 shadow-sm rounded-2xl rounded-bl-sm px-5 py-4">
<div className="flex space-x-1.5 items-center h-5">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>
</div>

<div className="p-4 lg:p-6 bg-white border-t border-slate-200">
<div className="relative flex items-center">
<input className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 rounded-full py-3.5 pl-6 pr-14 text-lg text-slate-900 placeholder-slate-400 outline-none transition-all shadow-sm" placeholder="Type your message..." type="text"/>
<button className="absolute right-2 p-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 hover:scale-105 transition-all shadow-sm flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-center space-x-1 text-slate-400">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-sm font-medium">End-to-end encrypted</span>
</div>
</div>
</div>




    </>
  );
}
