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
      

<div className="bg-white rounded-3xl p-2 gap-2 flex flex-row w-full max-w-[1440px] h-full max-h-[900px] shadow-sm overflow-hidden">

<aside className="bg-zinc-950 rounded-2xl p-4 gap-5 flex-col w-[320px] flex-shrink-0 hidden lg:flex overflow-y-auto">

<div className="flex items-center justify-between w-full mt-1 px-1">
<span className="text-lg font-medium text-zinc-50 tracking-tight">Mail</span>
<button className="flex items-center gap-1.5 bg-zinc-900 rounded-full py-1.5 px-3 hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-green-400 text-sm" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-xs text-zinc-400 font-light">Compose</span>
</button>
</div>

<div className="flex items-center gap-2 bg-zinc-900 rounded-xl py-2.5 px-3.5 w-full">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-xs text-zinc-300 w-full placeholder-zinc-500 font-light" placeholder="Search mail..." type="text"/>
</div>

<div className="flex gap-3 w-full">
<div className="bg-zinc-900 rounded-2xl p-4 flex flex-col gap-2 flex-1">
<div className="flex items-center justify-between w-full">
<span className="text-xs text-zinc-400 font-light">Unreads</span>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<span className="text-3xl font-extralight text-zinc-100 tracking-tight">6</span>
</div>
<div className="bg-zinc-900 rounded-2xl p-4 flex flex-col gap-2 flex-1">
<div className="flex items-center justify-between w-full">
<span className="text-xs text-zinc-400 font-light">Updates</span>
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
</div>
<span className="text-3xl font-extralight text-zinc-100 tracking-tight">22</span>
</div>
</div>

<nav className="flex flex-col w-full gap-0.5 mt-2">
<div className="flex items-center justify-between rounded-xl py-2 px-3 bg-zinc-900 cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-green-400 text-base" icon="solar:inbox-in-linear"></iconify-icon>
<span className="text-sm font-normal text-zinc-50 tracking-tight">Inbox</span>
</div>
<span className="rounded-full py-0.5 px-2.5 text-xs font-normal bg-green-400 text-zinc-950">12</span>
</div>
<div className="flex items-center justify-between rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors text-zinc-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-400">Sent</span>
</div>
</div>
<div className="flex items-center justify-between rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors text-zinc-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-400">Drafts</span>
</div>
<span className="rounded-full py-0.5 px-2.5 text-xs font-light bg-zinc-800 text-zinc-400">3</span>
</div>
<div className="flex items-center justify-between rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors text-zinc-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:shield-warning-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-400">Spam</span>
</div>
</div>
<div className="flex items-center justify-between rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors text-zinc-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-400">Trash</span>
</div>
</div>
</nav>

<div className="flex flex-col gap-1 w-full mt-4">
<span className="text-xs uppercase tracking-widest text-zinc-600 font-normal px-3 mb-2">Labels</span>
<div className="flex items-center gap-3 rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-sm font-light text-zinc-400">Work</span>
</div>
<div className="flex items-center gap-3 rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
<span className="text-sm font-light text-zinc-400">Personal</span>
</div>
<div className="flex items-center gap-3 rounded-xl py-2 px-3 hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-light text-zinc-400">Finance</span>
</div>
</div>
<div className="flex-1"></div>

<div className="flex items-center gap-3 bg-zinc-900 rounded-2xl p-3 w-full mt-4">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-sm font-normal text-zinc-50 truncate">Avery Nolan</span>
<span className="text-xs font-light text-zinc-500 truncate">avery@nordbyte.com</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</aside>

<section className="bg-zinc-50 rounded-2xl flex flex-col w-full md:w-[380px] flex-shrink-0 border-r border-zinc-100/50 md:border-none overflow-hidden">
<div className="flex flex-col gap-5 p-5 w-full border-b border-zinc-100">
<div className="flex items-center justify-between w-full">
<span className="text-lg font-medium text-zinc-950 tracking-tight">Inbox</span>
<div className="flex items-center gap-1.5">
<button className="w-8 h-8 rounded-full bg-zinc-200/50 flex items-center justify-center hover:bg-zinc-200 transition-colors text-zinc-600">
<iconify-icon className="text-sm" icon="solar:tuning-square-2-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-zinc-200/50 flex items-center justify-center hover:bg-zinc-200 transition-colors text-zinc-600">
<iconify-icon className="text-sm" icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-1 w-full">
<button className="rounded-full py-1.5 px-4 text-xs bg-zinc-950 text-white font-normal transition-colors tracking-wide">All</button>
<button className="rounded-full py-1.5 px-4 text-xs text-zinc-500 hover:bg-zinc-200/50 font-light transition-colors tracking-wide">Unread</button>
<button className="rounded-full py-1.5 px-4 text-xs text-zinc-500 hover:bg-zinc-200/50 font-light transition-colors tracking-wide">Starred</button>
</div>
</div>
<div className="flex flex-col flex-1 overflow-y-auto">

<div className="flex gap-3.5 p-4 bg-white border-l-2 border-zinc-950 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 text-xs font-medium text-zinc-950 tracking-tight">MR</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5">
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-zinc-950">Marcus Reid</span>
<span className="text-xs text-zinc-500 font-light">10:42 AM</span>
</div>
<span className="text-sm font-medium text-zinc-950 truncate tracking-tight">Q3 Proposal — Final Review</span>
<span className="text-xs text-zinc-500 font-light truncate">Hey, I've attached the final version of the proposal. Let me know if you need any changes before we send it over.</span>
</div>
</div>

<div className="flex gap-3.5 p-4 border-b border-zinc-100 cursor-pointer hover:bg-zinc-100/50 transition-colors border-l-2 border-transparent">
<div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-medium text-zinc-950 tracking-tight">SL</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-950">Sarah Lin</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
</div>
<span className="text-xs text-zinc-500 font-light">9:15 AM</span>
</div>
<span className="text-sm font-medium text-zinc-950 truncate tracking-tight">Re: Onboarding Schedule</span>
<span className="text-xs text-zinc-500 font-light truncate">The new onboarding flow is ready for review. Can we sync tomorrow at 2pm to walk through it together?</span>
</div>
</div>

<div className="flex gap-3.5 p-4 border-b border-zinc-100 cursor-pointer hover:bg-zinc-100/50 transition-colors border-l-2 border-transparent">
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-xs font-medium text-white tracking-tight">JK</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5">
<div className="flex items-center justify-between w-full">
<span className="text-sm font-light text-zinc-600">James Kim</span>
<span className="text-xs text-zinc-400 font-light">Yesterday</span>
</div>
<span className="text-sm font-light text-zinc-700 truncate tracking-tight">Invoice #2024-089 Due</span>
<span className="text-xs text-zinc-400 font-light truncate">This is a reminder that invoice #2024-089 for $4,200 is due on Friday, March 8th.</span>
</div>
</div>

<div className="flex gap-3.5 p-4 border-b border-zinc-100 cursor-pointer hover:bg-zinc-100/50 transition-colors border-l-2 border-transparent">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-xs font-medium text-zinc-300 tracking-tight">TP</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5">
<div className="flex items-center justify-between w-full">
<span className="text-sm font-light text-zinc-600">Tara Patel</span>
<span className="text-xs text-zinc-400 font-light">Mon</span>
</div>
<span className="text-sm font-light text-zinc-700 truncate tracking-tight">Design System Feedback</span>
<span className="text-xs text-zinc-400 font-light truncate">Loved the new button styles! One thing — the ghost button feels a bit too subtle on dark backgrounds.</span>
</div>
</div>
</div>
</section>

<main className="bg-white rounded-2xl flex flex-col flex-1 overflow-hidden hidden md:flex border-l border-zinc-100/50 lg:border-none">

<div className="flex flex-col gap-6 p-7 border-b border-zinc-100 w-full">
<div className="flex items-center justify-between w-full">
<span className="text-xl font-medium text-zinc-950 tracking-tight">Q3 Proposal — Final Review</span>
<div className="flex items-center gap-1.5 text-zinc-500">
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"><iconify-icon className="text-base" icon="solar:archive-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"><iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"><iconify-icon className="text-base" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-full bg-green-400 flex items-center justify-center text-sm font-medium text-zinc-950 tracking-tight flex-shrink-0">MR</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-950">Marcus Reid</span>
<span className="text-xs font-light text-zinc-500">marcus.reid@nordbyte.com</span>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-light text-zinc-500">Today, 10:42 AM</span>
<span className="bg-zinc-100 rounded-full py-0.5 px-3 text-xs font-light text-zinc-600">Work</span>
</div>
</div>
</div>

<div className="flex flex-col p-7 flex-1 overflow-y-auto">
<div className="flex flex-col gap-5 max-w-3xl">
<p className="text-sm font-normal text-zinc-950">Hi Avery,</p>
<p className="text-sm font-light text-zinc-700 leading-relaxed">I've attached the final version of the Q3 proposal for your review. We've incorporated all the feedback from last week's call — the pricing section has been updated and the timeline now reflects the revised milestones.</p>
<p className="text-sm font-light text-zinc-700 leading-relaxed">Please let me know if you'd like any further changes before we send it over to the client. I'm available for a quick call this afternoon if needed.</p>
</div>

<div className="flex flex-col gap-3 py-8 w-full max-w-3xl">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-normal">Attachments</span>
<div className="flex flex-wrap gap-3 w-full">
<div className="flex items-center gap-3 bg-zinc-50/80 border border-zinc-100 rounded-xl p-3 cursor-pointer hover:bg-zinc-100 transition-colors min-w-[200px]">
<div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-500">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 truncate">Q3_Proposal_Final.pdf</span>
<span className="text-xs font-light text-zinc-500">2.4 MB</span>
</div>
</div>
<div className="flex items-center gap-3 bg-zinc-50/80 border border-zinc-100 rounded-xl p-3 cursor-pointer hover:bg-zinc-100 transition-colors min-w-[200px]">
<div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-500">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 truncate">Budget_Breakdown.xlsx</span>
<span className="text-xs font-light text-zinc-500">840 KB</span>
</div>
</div>
</div>
</div>
<div className="flex-1 min-h-[40px]"></div>

<div className="bg-zinc-50/80 border border-zinc-100 rounded-2xl p-4 gap-4 flex flex-col w-full max-w-3xl mt-auto">
<div className="flex items-center gap-2.5 w-full">
<span className="text-xs font-light text-zinc-500">To:</span>
<div className="flex items-center gap-1.5 bg-zinc-200/50 rounded-full py-1 px-2.5">
<div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[10px] font-medium text-zinc-950">M</div>
<span className="text-xs font-normal text-zinc-900">Marcus Reid</span>
</div>
</div>
<textarea className="w-full bg-transparent border-none outline-none text-sm font-light text-zinc-900 placeholder-zinc-400 resize-none min-h-[60px]" placeholder="Write a reply..."></textarea>
<div className="flex items-center justify-between w-full pt-2">
<div className="flex items-center gap-1 text-zinc-500">
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors"><iconify-icon className="text-sm" icon="solar:paperclip-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors"><iconify-icon className="text-sm" icon="solar:smile-circle-linear"></iconify-icon></button>
</div>
<button className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 transition-colors rounded-xl py-2 px-4 shadow-sm text-white">
<iconify-icon className="text-sm" icon="solar:plain-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Send Reply</span>
</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
