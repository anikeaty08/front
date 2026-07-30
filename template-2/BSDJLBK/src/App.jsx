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

// Add interactive hover effects
document.querySelectorAll('button').forEach(el => {
el.addEventListener('mouseenter', () => {
if (!el.style.transform.includes('scale')) {
el.style.transform = 'scale(1.02)';
}
});
el.addEventListener('mouseleave', () => {
if (el.style.transform.includes('scale(1.02)')) {
el.style.transform = 'scale(1)';
}
});
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: `url("/assets/00a7b883-92cb-4d7e-a084-40532c53ae93_3840w.jpg")`}}></div>

<main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
<section className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-16">

<article className="relative w-full max-w-sm animate-slide-up delay-100">
<div className="relative bg-black rounded-[44px] w-full aspect-[9/19.5] shadow-2xl shadow-black/40 overflow-hidden p-6 flex flex-col border border-neutral-800">

<div className="absolute top-0 left-0 w-full h-full aurora-container rounded-[44px] overflow-hidden">
<div className="absolute top-0 left-0 aurora-layer w-full opacity-70 h-24 blur-[20px]"></div>
<div className="absolute top-8 left-0 aurora-layer w-full opacity-80 h-20 blur-[15px]"></div>
<div className="absolute top-16 left-0 aurora-layer w-full opacity-60 h-16 blur-[25px]"></div>
<div className="absolute top-24 left-0 aurora-layer w-full opacity-50 h-12 blur-[12px]"></div>
<div className="absolute top-32 left-0 aurora-layer w-full opacity-40 h-10 blur-[15px]"></div>
</div>

<div className="absolute top-0 left-0 w-full h-full dot-pattern rounded-[44px] opacity-30"></div>

<div className="relative z-10 flex flex-col h-full">

<div className="flex items-center justify-between text-xs text-white/60 mb-6">
<div className="flex items-center gap-1">
<span className="font-medium font-geist">10:23</span>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
<span className="font-geist">92%</span>
</div>
</div>

<div className="mb-8">
<h1 className="text-white text-3xl sm:text-4xl leading-tight tracking-tighter font-space-grotesk font-semibold">Smart</h1>
<h2 className="text-neutral-400 text-3xl sm:text-4xl leading-tight tracking-tighter font-space-grotesk font-semibold">Assistant</h2>
<p className="text-neutral-500 text-sm mt-2 font-geist">Intelligent email management</p>
</div>

<div className="space-y-4 mb-8 flex-1">
<div className="flex justify-end">
<div className="max-w-[80%] text-sm text-white font-geist rounded-2xl px-4 py-3 bg-blue-600">
Find emails from marketing team
</div>
</div>
<div className="flex justify-start">
<div className="bg-neutral-800 text-white/90 text-sm px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] font-geist">
Found 23 emails from the marketing team. Most recent ones are about the Q4 campaign launch.
</div>
</div>
<div className="flex justify-end">
<div className="max-w-[80%] text-sm text-white font-geist rounded-2xl px-4 py-3 bg-blue-600">
Show me priority emails only
</div>
</div>
<div className="flex justify-start">
<div className="bg-neutral-700 text-white/70 text-sm px-4 py-3 rounded-2xl rounded-bl-md w-32 flex items-center gap-2 font-geist">
<div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
Processing...
</div>
</div>
</div>

<div className="border-t border-neutral-800 mb-6"></div>

<div className="space-y-3 mb-6">
<h3 className="text-neutral-400 text-sm font-medium uppercase tracking-wider font-geist">Quick Actions</h3>
<button className="w-full flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
<svg className="lucide lucide-check-circle w-4 h-4 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm font-geist">Mark as read</p>
<p className="text-neutral-400 text-xs font-geist">38 unread messages</p>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors text-left" style={{transform: `scale(1)`}}>
<div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
<svg className="lucide lucide-folder-minus w-4 h-4 text-white" data-lucide="folder-minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 13h6"></path><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm font-geist">Archive older items</p>
<p className="text-neutral-400 text-xs font-geist">Last 60 days</p>
</div>
</button>
</div>

<div className="flex items-center justify-between" id="aura-eme09eho0">
<button className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white/80 hover:text-white hover:bg-neutral-700 transition-all">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="w-14 h-14 flex hover:scale-105 transition-transform text-white rounded-full shadow-lg items-center justify-center relative overflow-hidden" style={{background: `conic-gradient(from 45deg at 50% 50%, #ea580c 0deg, #f97316 72deg, #fb923c 144deg, #fdba74 216deg, #fed7aa 288deg, #ea580c 360deg)`}}>
<div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-orange-500/60 to-orange-700/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-tl from-amber-300/20 via-orange-600/40 to-red-500/30 mix-blend-overlay"></div>
<svg className="lucide lucide-send w-6 h-6 relative z-10" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white/80 hover:text-white hover:bg-neutral-700 transition-all" style={{transform: `scale(1)`}}>
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</div>
</article>

<article className="relative w-full max-w-sm animate-slide-up delay-300">
<div className="relative bg-black rounded-[44px] w-full aspect-[9/19.5] shadow-2xl shadow-black/40 overflow-hidden p-6 flex flex-col border border-neutral-800">

<div className="absolute top-0 left-0 w-full h-full aurora-container rounded-[44px] overflow-hidden">
<div className="absolute top-0 left-0 aurora-layer w-full opacity-60 h-28 blur-[18px]"></div>
<div className="absolute top-10 left-0 aurora-layer w-full opacity-70 h-24 blur-[12px]"></div>
<div className="absolute top-20 left-0 aurora-layer w-full opacity-50 h-20 blur-[22px]"></div>
<div className="absolute top-32 left-0 aurora-layer w-full opacity-40 h-16 blur-[10px]"></div>
<div className="absolute top-44 left-0 aurora-layer w-full opacity-30 h-12 blur-[16px]"></div>
</div>

<div className="absolute top-0 left-0 w-full h-full dot-pattern-dense rounded-[44px] opacity-20"></div>

<div className="relative z-10 flex flex-col h-full">

<div className="flex items-center justify-between text-xs text-white/60 mb-6">
<div className="flex items-center gap-1">
<span className="font-medium font-geist">10:23</span>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
<span className="font-geist">92%</span>
</div>
</div>

<div className="mb-6">
<h1 className="text-white text-3xl sm:text-4xl leading-tight tracking-tighter font-space-grotesk font-semibold">Draft</h1>
<h2 className="text-white text-3xl sm:text-4xl leading-tight tracking-tighter font-space-grotesk font-semibold">Generator</h2>
<p className="text-neutral-500 text-sm mt-2 font-geist">AI-powered writing assistant</p>
</div>

<div className="space-y-4 mb-8 flex-1">
<div className="bg-neutral-900/50 rounded-xl p-4">
<div className="flex items-center justify-between mb-3 text-xs">
<span className="text-neutral-400 font-geist">To:</span>
<span className="text-white/80 truncate font-geist">alex.chen@techcorp.io</span>
<svg className="lucide lucide-x w-3 h-3 text-neutral-500 cursor-pointer hover:text-white" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="mb-3">
<span className="text-neutral-400 text-xs font-geist">Subject:</span>
<span className="text-white/80 text-xs ml-2 font-geist">Weekly Progress Report</span>
</div>
<div className="text-white/90 text-sm leading-relaxed font-geist">
Hi Alex,

Hope you're doing well. I wanted to share this week's project updates and highlight key milestones we've achieved...
</div>
</div>

<div className="flex gap-2 mb-4 flex-wrap">
<button className="px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 hover:bg-purple-600/30 transition-colors font-geist">
Formal
</button>
<button className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs text-neutral-400 hover:bg-neutral-700/50 transition-colors font-geist">
Friendly
</button>
<button className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs text-neutral-400 hover:bg-neutral-700/50 transition-colors font-geist" style={{transform: `scale(1)`}}>
Concise
</button>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-neutral-900/50 rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-zap w-4 h-4 text-purple-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-neutral-400 uppercase tracking-wide font-geist">Style</span>
</div>
<p className="text-white text-xl font-bold font-geist">Formal</p>
</div>
<div className="bg-neutral-900/50 rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-align-left w-4 h-4 text-pink-400" data-lucide="align-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12H3"></path><path d="M17 18H3"></path><path d="M21 6H3"></path></svg>
<span className="text-xs text-neutral-400 uppercase tracking-wide font-geist">Words</span>
</div>
<p className="text-white text-xl font-bold font-geist">~150</p>
</div>
</div>

<div className="space-y-3">
<h3 className="text-neutral-400 text-sm font-medium uppercase tracking-wider font-geist">Templates</h3>
<button className="w-full flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors text-left" style={{transform: `scale(1)`}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
<svg className="lucide lucide-calendar w-4 h-4 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm font-geist">Status Update</p>
<p className="text-neutral-400 text-xs font-geist">Used 8 times</p>
</div>
</button>
</div>
</div>

<div className="flex items-center justify-between" id="aura-eme09fgkb">
<button className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white/80 hover:text-white hover:bg-neutral-700 transition-all">
<svg className="lucide lucide-paperclip w-5 h-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<button className="w-14 h-14 flex hover:scale-105 transition-transform text-white rounded-full shadow-lg items-center justify-center relative overflow-hidden" style={{background: `conic-gradient(from 225deg at 50% 50%, #1e40af 0deg, #3b82f6 72deg, #60a5fa 144deg, #93c5fd 216deg, #dbeafe 288deg, #1e40af 360deg)`}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/60 to-blue-700/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/20 via-blue-600/40 to-indigo-500/30 mix-blend-overlay"></div>
<svg className="lucide lucide-sparkles w-6 h-6 relative z-10" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<button className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white/80 hover:text-white hover:bg-neutral-700 transition-all">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
</div>
</article>
</section>
</main>

    </>
  );
}
