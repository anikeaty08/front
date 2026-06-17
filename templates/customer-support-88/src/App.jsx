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

        // Toggle "See More" Logic
        function toggleMoreTickets() {
            const extraSection = document.getElementById('extra-tickets');
            const btnText = document.querySelector('#toggle-more-btn span');
            const icon = document.getElementById('toggle-icon');
            
            if (extraSection.classList.contains('hidden')) {
                // Expand
                extraSection.classList.remove('hidden');
                // Simple animation simulation
                extraSection.style.opacity = '0';
                setTimeout(() => extraSection.style.opacity = '1', 50);
                
                btnText.innerText = "Collapse";
                icon.style.transform = "rotate(180deg)";
            } else {
                // Collapse
                extraSection.classList.add('hidden');
                btnText.innerText = "See More (4 remaining)";
                icon.style.transform = "rotate(0deg)";
            }
        }

        // Toggle Side Panel Logic
        function toggleSidePanel() {
            const panel = document.getElementById('side-panel');
            if (panel.classList.contains('translate-x-full')) {
                panel.classList.remove('translate-x-full');
            } else {
                panel.classList.add('translate-x-full');
            }
        }

        // Auto-scroll main chat to bottom on load
        window.onload = function() {
            const mainScroll = document.getElementById('main-scroll');
            // Scroll to a specific point to show context, usually bottom but leaving space for input
            mainScroll.scrollTop = mainScroll.scrollHeight; 
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
      

<aside className="flex w-80 flex-col border-r border-slate-200 bg-slate-50/50 hidden md:flex">

<div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-800">Inbox</span>
<span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600">12</span>
</div>
<button className="rounded-md p-1.5 hover:bg-slate-200 text-slate-500 transition-colors">
<i data-lucide="filter" height="16" strokeWidth="1.5" width="16"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg bg-white border border-slate-200 p-3 shadow-sm ring-1 ring-transparent transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
<i data-lucide="facebook" height="12" strokeWidth="1.5" width="12"></i>
</div>
<span className="text-sm font-medium text-slate-900">Sarah Jenkins</span>
</div>
<span className="text-xs text-slate-400">2m</span>
</div>
<p className="line-clamp-1 text-xs text-slate-500">I haven't received my order yet, can you check?</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center rounded border border-yellow-200 bg-yellow-50 px-1.5 py-0.5 text-[10px] font-medium text-yellow-700">
                        Medium
                    </span>
<span className="inline-flex items-center gap-1 rounded border border-slate-100 bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
<i data-lucide="user" height="10" strokeWidth="1.5" width="10"></i> Assigned
                    </span>
</div>
</div>

<div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg p-3 hover:bg-slate-100 transition-colors border border-transparent">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
<i data-lucide="mail" height="12" strokeWidth="1.5" width="12"></i>
</div>
<span className="text-sm font-medium text-slate-700">Tech Solutions Inc.</span>
</div>
<span className="text-xs text-slate-400">1h</span>
</div>
<p className="line-clamp-1 text-xs text-slate-500">Re: Invoice #4029 payment confirmation</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center rounded border border-green-200 bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700">
                        Low
                    </span>
</div>
</div>

<div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg p-3 hover:bg-slate-100 transition-colors border border-transparent">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
<i data-lucide="message-circle" height="12" strokeWidth="1.5" width="12"></i>
</div>
<span className="text-sm font-medium text-slate-700">David Miller</span>
</div>
<span className="text-xs text-slate-400">3h</span>
</div>
<p className="line-clamp-1 text-xs text-slate-500">Is the API documentation updated?</p>
</div>
</div>
</aside>

<main className="flex flex-1 flex-col relative overflow-hidden bg-white">

<header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-6 bg-white z-10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium ring-2 ring-white shadow-sm">SJ</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-slate-900">Sarah Jenkins</h1>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        via Facebook Messenger
                    </div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
<i data-lucide="check-circle" height="14" strokeWidth="1.5" width="14"></i>
                    Close Chat
                </button>
<button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" height="18" strokeWidth="1.5" width="18"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white scroll-smooth" id="main-scroll">


<section className="border-b border-slate-100 bg-slate-50/30 px-6 py-5">
<div className="mb-3 flex items-center justify-between">
<h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
<i data-lucide="archive" height="14" strokeWidth="1.5" width="14"></i>
                        Previous Resolved Tickets (6)
                    </h3>
</div>
<div className="space-y-3">

<div className="ticket-card group relative flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-slate-300">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<div className="flex items-center gap-1.5">
<div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-bold">KE</div>
<span className="font-medium text-slate-700">Khan Emon</span>
</div>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-1.5">
<i data-lucide="calendar" height="12" strokeWidth="1.5" width="12"></i>
                                        Oct 24, 2:30 PM
                                    </div>
</div>
<p className="line-clamp-1 pr-4 text-sm font-medium text-slate-800">Order delay inquiry for Product X-200</p>
<p className="mt-1 line-clamp-1 text-xs text-slate-500">Customer was frustrated about shipping times. Expedited shipping offered as compensation.</p>
</div>

<button className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 focus:ring-2 focus:ring-indigo-500/20 active:scale-95" onclick="toggleSidePanel()">
                                View Conversation
                            </button>
</div>

<div className="flex items-center gap-4 border-t border-slate-50 pt-3">
<div className="flex items-center gap-1.5" title="SLA Met">
<i className="text-green-500" data-lucide="check-circle-2" height="14" strokeWidth="1.5" width="14"></i>
<span className="text-xs font-medium text-slate-600">SLA Met (100%)</span>
</div>
<div className="flex items-center gap-1.5" title="CSAT Score">
<i className="text-yellow-500" data-lucide="smile" height="14" strokeWidth="1.5" width="14"></i>
<span className="text-xs font-medium text-slate-600">4.5/5 Happy</span>
</div>
</div>
</div>

<div className="ticket-card group relative flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-slate-300">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<div className="flex items-center gap-1.5">
<div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-[10px] font-bold">AI</div>
<span className="font-medium text-slate-700">Support Bot</span>
</div>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-1.5">
<i data-lucide="calendar" height="12" strokeWidth="1.5" width="12"></i>
                                        Oct 12, 9:15 AM
                                    </div>
</div>
<p className="line-clamp-1 pr-4 text-sm font-medium text-slate-800">Return Policy Query</p>
<p className="mt-1 line-clamp-1 text-xs text-slate-500">Automated resolution regarding 30-day return window policy link provided.</p>
</div>
<button className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 active:scale-95" onclick="toggleSidePanel()">
                                View Conversation
                            </button>
</div>
<div className="flex items-center gap-4 border-t border-slate-50 pt-3">
<div className="flex items-center gap-1.5">
<i className="text-green-500" data-lucide="check-circle-2" height="14" strokeWidth="1.5" width="14"></i>
<span className="text-xs font-medium text-slate-600">SLA Met</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-xs text-slate-400">No CSAT provided</span>
</div>
</div>
</div>

<div className="hidden space-y-3" id="extra-tickets">

<div className="ticket-card flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm opacity-75 hover:opacity-100 transition-opacity">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<div className="flex items-center gap-1.5">
<div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[10px] font-bold">RJ</div>
<span className="font-medium text-slate-700">Ryan Jones</span>
</div>
<span className="text-slate-300">|</span>
<span className="text-xs">Sep 30, 11:00 AM</span>
</div>
<p className="line-clamp-1 text-sm font-medium text-slate-800">Defective Item Report</p>
</div>
<button className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50" onclick="toggleSidePanel()">View</button>
</div>
</div>

</div>

<div className="text-center">
<button className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors" id="toggle-more-btn" onclick="toggleMoreTickets()">
<span>See More (4 remaining)</span>
<i className="transition-transform duration-300" data-lucide="chevron-down" height="14" id="toggle-icon" strokeWidth="1.5" width="14"></i>
</button>
</div>
</div>
</section>

<section className="px-6 py-8 pb-32">

<div className="relative mb-8 text-center">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-100"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-xs font-medium text-slate-400">Today, October 26</span>
</div>
</div>

<div className="mb-6 flex justify-center">
<span className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-[11px] text-slate-500 border border-slate-100">
<i data-lucide="zap" height="10" strokeWidth="1.5" width="10"></i>
                        Automated ticket created via Facebook Messenger
                    </span>
</div>

<div className="mb-6 flex gap-4">
<div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium">SJ</div>
<div className="max-w-[75%]">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-medium text-slate-900">Sarah Jenkins</span>
<span className="text-xs text-slate-400">10:42 AM</span>
</div>
<div className="rounded-2xl rounded-tl-none bg-slate-100 px-4 py-3 text-sm text-slate-800 leading-relaxed">
                            Hi there, I placed an order (#99281) three days ago but the tracking status hasn't updated from "Label Created". Can you help me check if it's been shipped?
                        </div>
</div>
</div>

<div className="mb-6 flex justify-center">
<span className="text-[11px] text-slate-400">
                        Khan Mohammad Emon assigned to this chat
                    </span>
</div>

<div className="mb-6 flex flex-row-reverse gap-4">
<div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-medium">KE</div>
<div className="max-w-[75%] flex flex-col items-end">
<div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
<span className="text-sm font-medium text-slate-900">You</span>
<span className="text-xs text-slate-400">10:45 AM</span>
</div>
<div className="rounded-2xl rounded-tr-none bg-blue-600 px-4 py-3 text-sm text-white leading-relaxed shadow-sm">
                            Hello Sarah! Thanks for reaching out. Let me pull up your order details right away. Give me just a moment.
                        </div>
<span className="mt-1 text-[10px] text-slate-400 flex items-center gap-1">
                            Seen <i data-lucide="check-check" height="10" strokeWidth="1.5" width="10"></i>
</span>
</div>
</div>

<div className="mb-6 flex gap-4">
<div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium">SJ</div>
<div className="max-w-[75%]">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-medium text-slate-900">Sarah Jenkins</span>
<span className="text-xs text-slate-400">10:46 AM</span>
</div>
<div className="rounded-2xl rounded-tl-none bg-slate-100 px-4 py-3 text-sm text-slate-800 leading-relaxed">
                            Sure, thanks.
                        </div>
</div>
</div>
</section>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-4 z-20">
<div className="relative rounded-lg border border-slate-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">

<textarea className="block w-full resize-none rounded-lg border-0 bg-transparent py-3 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0" placeholder="Type your reply... (Enter to send)" rows="1"></textarea>

<div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-2 py-2 rounded-b-lg">
<div className="flex items-center gap-1">
<button className="rounded p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
<i data-lucide="paperclip" height="16" strokeWidth="1.5" width="16"></i>
</button>
<button className="rounded p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
<i data-lucide="smile" height="16" strokeWidth="1.5" width="16"></i>
</button>
<button className="rounded p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
<i data-lucide="image" height="16" strokeWidth="1.5" width="16"></i>
</button>
<span className="mx-1 h-4 w-px bg-slate-200"></span>
<button className="flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors">
<i data-lucide="zap" height="12" strokeWidth="1.5" width="12"></i>
                            Saved Replies
                        </button>
</div>
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-xs text-slate-500 font-medium">Private Note</span>
</label>
<button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                            Send <span className="ml-1 opacity-70">⌘Enter</span>
</button>
</div>
</div>
</div>
</div>

<aside className="absolute right-0 top-0 z-50 h-full w-[400px] transform border-l border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-in-out translate-x-full" id="side-panel">

<div className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-indigo-500/50 transition-colors"></div>

<div className="flex h-16 items-center justify-between border-b border-slate-100 px-5 bg-white">
<div>
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Resolved Ticket #8821</h2>
<span className="text-xs text-slate-500">Resolved Oct 24, 2:30 PM</span>
</div>
<button className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" onclick="toggleSidePanel()">
<i data-lucide="x" height="18" strokeWidth="1.5" width="18"></i>
</button>
</div>

<div className="flex h-[calc(100%-64px)] flex-col overflow-y-auto bg-slate-50/30 p-5">

<div className="mb-6 rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-indigo-700 mb-1">
<i data-lucide="sparkles" height="12" strokeWidth="1.5" width="12"></i>
                            Resolution Summary
                        </div>
<button className="text-[10px] text-indigo-600 hover:underline">Copy</button>
</div>
<p className="text-xs text-indigo-900 leading-relaxed">
                        Customer reported delay on Order X-200. Confirmed carrier delay. Refunded shipping cost ($15) and expedited delivery. Customer satisfied.
                    </p>
</div>

<div className="space-y-6">

<div className="text-center">
<span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-medium text-slate-500">Oct 24</span>
</div>

<div className="flex gap-3">
<div className="h-6 w-6 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold">SJ</div>
<div>
<div className="rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-800 shadow-sm">
                                Where is my order? It's been 5 days.
                            </div>
<span className="mt-1 block text-[10px] text-slate-400">2:15 PM</span>
</div>
</div>

<div className="flex flex-row-reverse gap-3">
<div className="h-6 w-6 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-bold">KE</div>
<div>
<div className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-white shadow-sm">
                                Checking that now for you, Sarah. It looks like a carrier delay.
                            </div>
<span className="mt-1 block text-right text-[10px] text-slate-400">2:18 PM</span>
</div>
</div>

<div className="flex flex-row-reverse gap-3">
<div className="h-6 w-6 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-bold">KE</div>
<div>
<div className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-white shadow-sm">
                                I've refunded the shipping charge. It should arrive tomorrow.
                            </div>
<span className="mt-1 block text-right text-[10px] text-slate-400">2:25 PM</span>
</div>
</div>

<div className="flex justify-center">
<div className="flex items-center gap-1 rounded bg-green-50 px-2 py-1 text-[10px] text-green-700 border border-green-100">
<i data-lucide="check" height="10" strokeWidth="1.5" width="10"></i>
                            Ticket Resolved by Khan Emon
                        </div>
</div>
</div>

<div className="mt-8 text-center text-[10px] text-slate-400 pb-4">
                    End of conversation history
                </div>
</div>
</aside>
</main>


    </>
  );
}
