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
      

<aside className="w-[260px] flex-shrink-0 flex flex-col bg-[#f9fafb] border-r border-gray-200">

<div className="h-20 px-6 flex items-center gap-3">
<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Dextr AI</span>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-8">

<div>
<h3 className="px-3 text-xs font-medium text-gray-500 mb-2">Manny</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
                        Manny Chat
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="brain-circuit" strokeWidth="1.5"></i>
                        Staff IQ
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar-days" strokeWidth="1.5"></i>
                        Rostering
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="wrench" strokeWidth="1.5"></i>
                        Maintenance
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings-2" strokeWidth="1.5"></i>
                        Configuration
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                        Staffs
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-gray-500 mb-2">Dextr</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
                        Voice Booking
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="monitor" strokeWidth="1.5"></i>
                        Dextr OS
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2a2a2b] text-white text-base transition-colors shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="layout-grid" strokeWidth="1.5"></i>
                        Dextr Apps
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user-circle" strokeWidth="1.5"></i>
                        Guest IQ
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                        Guests
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="shield" strokeWidth="1.5"></i>
                        Account
                    </a>
</nav>
</div>
</div>

<div className="px-4 pb-6 space-y-1 border-t border-gray-200 pt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
                Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="life-buoy" strokeWidth="1.5"></i>
                Get Support
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square-plus" strokeWidth="1.5"></i>
                Give Feedback
            </a>
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2a2a2b] text-white rounded-lg text-base font-medium shadow-sm transition-colors hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                    Download Report
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-24 px-8 flex items-center justify-between flex-shrink-0">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Dextr Apps</h1>
<p className="text-base text-gray-500 mt-1">Discover and configure apps for your hotel</p>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors bg-white">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<div className="w-10 h-10 rounded-xl bg-amber-200 shadow-sm cursor-pointer"></div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 pb-8">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm min-h-full flex flex-col">

<div className="h-16 px-6 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-base font-medium">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
                        Back
                    </button>
<div className="flex items-center gap-3">
<button className="px-4 py-1.5 rounded-md bg-gray-50 text-gray-400 text-base font-medium cursor-not-allowed">
                            Save
                        </button>
<button className="px-4 py-1.5 rounded-md bg-[#18181b] text-white text-base font-medium flex items-center gap-2 shadow-sm hover:bg-black transition-colors">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
                            Try in chat
                        </button>
</div>
</div>

<div className="flex-1 flex flex-col xl:flex-row">

<div className="flex-1 p-8 xl:p-12 xl:pr-16">

<div className="flex items-start gap-4 mb-8">
<div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm flex-shrink-0">
<span className="text-3xl">🏠</span>
</div>
<div className="pt-1">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Room Assigner</h2>
<p className="text-base text-gray-500 mt-1">Automated housekeeping room assignment</p>
</div>
</div>

<div className="bg-[#262423] rounded-xl p-5 flex items-center justify-between mb-8 shadow-sm">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#383635] flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-emerald-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white mb-0.5">7h</div>
<div className="text-sm text-gray-400">GM time saved / week</div>
</div>
</div>
<div className="bg-[#1b3224] text-emerald-400 px-2.5 py-1 rounded-md text-xs font-medium tracking-wide">
                                Active
                            </div>
</div>
<p className="text-base text-gray-600 mb-12 leading-relaxed">
                            Collects checkout and stayover rooms from the PMS each day, builds an optimized schedule for housekeepers, gets manager sign-off, then pushes tasks to staff before their next shift.
                        </p>

<div>
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">How it works</h3>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500 flex-shrink-0 mt-0.5">1</div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-1">Collect rooms</h4>
<p className="text-base text-gray-500">Pulls checkout &amp; stayover rooms from the PMS every morning</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500 flex-shrink-0 mt-0.5">2</div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-1">Build schedule</h4>
<p className="text-base text-gray-500">Creates balanced assignments by floor, room type &amp; workload</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500 flex-shrink-0 mt-0.5">3</div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-1">Manager approval</h4>
<p className="text-base text-gray-500">Sends the schedule to the manager for review</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500 flex-shrink-0 mt-0.5">4</div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-1">Assign tasks</h4>
<p className="text-base text-gray-500">After approval, distributes tasks to each housekeeper</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-500 flex-shrink-0 mt-0.5">5</div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-1">Shift start</h4>
<p className="text-base text-gray-500">Staff see their assigned rooms when they clock in</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full xl:w-[420px] p-8 xl:p-12 xl:pl-8 border-t xl:border-t-0 xl:border-l border-gray-100 bg-[#fafafa]/50 rounded-br-xl">

<div className="mb-12">
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Configuration</h3>
<div className="flex flex-col">
<div className="flex items-center justify-between py-4 border-b border-gray-200/60">
<span className="text-base text-gray-500">Schedule time</span>
<span className="text-base font-medium text-gray-900">6:00 AM</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-gray-200/60">
<span className="text-base text-gray-500">Approval channel</span>
<span className="text-base font-medium text-gray-900">Manager chat</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-gray-200/60">
<span className="text-base text-gray-500">Auto-balance workload</span>
<span className="text-base font-medium text-gray-900">Enabled</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Instructions</h3>
<p className="text-sm text-gray-400 mb-4">Custom instructions for how this app operates at your property.</p>
<div className="relative bg-white border border-gray-200 rounded-xl p-4 min-h-[140px] shadow-sm">
<div className="text-base text-gray-400 leading-relaxed">
                                    e.g. "Only assign ground-floor rooms to housekeepers on the morning shift..."
                                </div>

<div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white px-1.5 py-1 rounded-md border border-gray-100 shadow-sm">
<div className="w-6 h-6 flex items-center justify-center text-emerald-500">
<i className="w-4 h-4 fill-emerald-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="w-6 h-6 flex items-center justify-center text-teal-600">
<i className="w-4 h-4 fill-teal-600 text-white" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
