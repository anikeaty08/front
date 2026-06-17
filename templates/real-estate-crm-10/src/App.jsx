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



      function switchView(view) {
        const listTab = document.getElementById('tab-list');
        const focusTab = document.getElementById('tab-focus');
        const listView = document.getElementById('list-view');
        const focusView = document.getElementById('focus-view');

        if (view === 'list') {
          listView.classList.remove('hidden');
          focusView.classList.add('hidden');

          listTab.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white shadow-sm text-zinc-900 text-xs font-semibold border border-zinc-200/50 transition-all';
          focusTab.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-zinc-500 hover:text-zinc-900 text-xs font-medium transition-all';
        } else {
          listView.classList.add('hidden');
          focusView.classList.remove('hidden');
          focusView.classList.add('flex');

          focusTab.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white shadow-sm text-zinc-900 text-xs font-semibold border border-zinc-200/50 transition-all';
          listTab.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-zinc-500 hover:text-zinc-900 text-xs font-medium transition-all';
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
      

<aside className="w-64 bg-zinc-100/50 border-r border-zinc-200/80 flex flex-col h-full shrink-0">
<div className="h-14 flex items-center px-6 border-b border-zinc-200/80">
<div className="tracking-tighter font-medium text-lg text-zinc-900">
          RECRM
        </div>
</div>
<div className="p-4 flex-1 overflow-y-auto flex flex-col gap-1">
<div className="text-xs font-medium text-zinc-400 mb-2 px-2 uppercase tracking-widest mt-2">
          Workspace
        </div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-white border border-zinc-200/80 shadow-sm text-zinc-900 font-medium" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:inbox-linear"></iconify-icon>
          Today Queue
          <span className="ml-auto bg-zinc-900 text-white text-xs px-1.5 py-0.5 rounded">
            7
          </span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
          All Leads
        </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:buildings-linear"></iconify-icon>
          Properties
        </a>
<div className="text-xs font-medium text-zinc-400 mb-2 px-2 uppercase tracking-widest mt-6">
          Settings
        </div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:tuning-square-2-linear"></iconify-icon>
          Lifecycle Rules
        </a>
</div>
<div className="p-4 border-t border-zinc-200/80 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-xs tracking-tight">
          AJ
        </div>
<div>
<div className="font-medium text-zinc-900 text-xs">Alex Jenkins</div>
<div className="text-xs text-zinc-500">Sales Agent</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 flex items-center justify-between px-8 border-b border-zinc-200/80 bg-white/50 backdrop-blur-sm shrink-0">
<div className="flex items-center gap-6">
<h1 className="text-xl font-medium tracking-tight text-zinc-900">
            Today Queue
          </h1>
<div className="flex items-center bg-zinc-100/80 p-0.5 rounded-lg border border-zinc-200/50" id="view-tabs">
<button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white shadow-sm text-zinc-900 text-xs font-semibold border border-zinc-200/50 transition-all" id="tab-list" onclick="switchView('list')">
<iconify-icon className="text-sm" icon="lucide:list"></iconify-icon>
              List View
            </button>
<button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-zinc-500 hover:text-zinc-900 text-xs font-medium transition-all" id="tab-focus" onclick="switchView('focus')">
<iconify-icon className="text-sm" icon="lucide:layout-panel-left"></iconify-icon>
              Focus Mode
            </button>
</div>
</div>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-zinc-500">
<iconify-icon className="text-base text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span>8 resolved today</span>
</div>
<button className="bg-zinc-900 text-white px-3 py-1.5 rounded-md font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
            New Lead
          </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8" id="list-view">
<div className="max-w-3xl mx-auto flex flex-col gap-10">

<section>
<div className="flex items-center justify-between mb-4 border-b border-zinc-200/80 pb-2">
<div className="flex items-center gap-2">
<h2 className="font-medium text-zinc-900 text-base tracking-tight">
                  Respond Now
                </h2>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  High Priority
                </span>
</div>
<span className="text-xs text-zinc-400">2 leads</span>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-zinc-900 text-base tracking-tight">
                      Sarah Jenkins
                    </h3>
<p className="text-xs text-zinc-500 mt-0.5">
                      sarah.j@example.com • +1 555 0192
                    </p>
</div>
<div className="flex gap-1.5">
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors" title="Call">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors" title="Email">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3 text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 text-zinc-600">
<iconify-icon className="text-zinc-400 text-base" icon="solar:home-2-linear"></iconify-icon>
<span className="font-medium text-zinc-700">124 Maple Street, Apt 4B</span>
<span className="w-px h-3 bg-zinc-300"></span>
<span className="flex items-center gap-1">
<iconify-icon className="text-zinc-400" icon="solar:global-linear"></iconify-icon>
                    Newhome Inbound
                  </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs border border-blue-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      First Contact
                    </span>
</div>
<div className="text-xs text-rose-600 font-medium flex items-center gap-1.5 bg-rose-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                    Unread 2h (SLA Risk)
                  </div>
</div>
<div className="pt-4 mt-1 border-t border-zinc-100 flex items-center gap-2">
<button className="flex-1 bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2">
                    Send First Response
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors">
                    Qualify
                  </button>
<button className="w-9 h-9 flex items-center justify-center bg-white border border-zinc-200 text-zinc-400 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-zinc-900 text-base tracking-tight">
                      James Wilson
                    </h3>
<p className="text-xs text-zinc-500 mt-0.5">
                      j.wilson@email.com • +1 555 3920
                    </p>
</div>
<div className="flex gap-1.5">
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors" title="Call">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors" title="Email">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3 text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 text-zinc-600">
<iconify-icon className="text-zinc-400 text-base" icon="solar:home-2-linear"></iconify-icon>
<span className="font-medium text-zinc-700">88 Riverside Drive</span>
<span className="w-px h-3 bg-zinc-300"></span>
<span className="flex items-center gap-1 text-rose-600 font-medium">
<iconify-icon className="text-rose-500" icon="solar:tag-price-bold"></iconify-icon>
                    Seller Counter-Offer Received
                  </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs border border-blue-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Negotiation
                    </span>
</div>
<div className="text-xs text-rose-600 font-medium flex items-center gap-1.5 bg-rose-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                    Urgent (Time Sensitive)
                  </div>
</div>
<div className="pt-4 mt-1 border-t border-zinc-100 flex items-center gap-2">
<button className="flex-1 bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2">
                    Review Counter Offer
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                    Call Client
                  </button>
<button className="w-9 h-9 flex items-center justify-center bg-white border border-zinc-200 text-zinc-400 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4 border-b border-zinc-200/80 pb-2">
<div className="flex items-center gap-2">
<h2 className="font-medium text-zinc-900 text-base tracking-tight">
                  Due Follow-Ups
                </h2>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-50 text-purple-700 font-medium text-xs border border-purple-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Nurture
                </span>
</div>
<span className="text-xs text-zinc-400">2 leads</span>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-zinc-900 text-base tracking-tight">
                      Marcus West
                    </h3>
<p className="text-xs text-zinc-500 mt-0.5">
                      m.west@corporate.com • +1 555 8832
                    </p>
</div>
<div className="flex gap-1.5">
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3 text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 text-zinc-600">
<iconify-icon className="text-zinc-400 text-base" icon="solar:home-2-linear"></iconify-icon>
<span className="font-medium text-zinc-700">Penthouse 4A, The Beacon</span>
<span className="w-px h-3 bg-zinc-300"></span>
<span className="flex items-center gap-1">
<iconify-icon className="text-zinc-400" icon="solar:link-linear"></iconify-icon>
                    Comparis Inquiry
                  </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs border border-purple-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      Follow Up
                    </span>
</div>
<div className="text-xs text-amber-600 font-medium flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-md">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
                    Follow-up is today
                  </div>
</div>
<div className="pt-4 mt-1 border-t border-zinc-100 flex items-center gap-2">
<button className="flex-1 bg-white border border-zinc-300 shadow-sm text-zinc-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors flex justify-center items-center gap-2 ring-2 ring-indigo-500/20" onclick="document.getElementById('schedule-modal').classList.remove('hidden'); document.getElementById('schedule-modal').classList.add('flex');">
                    Schedule Viewing
                    <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</button>
<button className="flex-1 bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors">
                    Send Check-in
                  </button>
<button className="w-9 h-9 flex items-center justify-center bg-white border border-zinc-200 text-zinc-400 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-zinc-900 text-base tracking-tight">
                      Linda Chen
                    </h3>
<p className="text-xs text-zinc-500 mt-0.5">
                      linda.c@domain.com • +1 555 1029
                    </p>
</div>
<div className="flex gap-1.5">
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 bg-white rounded-md border border-zinc-200 shadow-sm transition-colors">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3 text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 text-zinc-600">
<iconify-icon className="text-zinc-400 text-base" icon="solar:home-2-linear"></iconify-icon>
<span className="font-medium text-zinc-700">450 Oak Ave (Seller)</span>
<span className="w-px h-3 bg-zinc-300"></span>
<span className="flex items-center gap-1">
<iconify-icon className="text-zinc-400" icon="solar:chart-square-linear"></iconify-icon>
                    CMA Requested
                  </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs border border-purple-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      Valuation
                    </span>
</div>
<div className="text-xs text-zinc-500 font-medium flex items-center gap-1.5 bg-zinc-100 px-2 py-1 rounded-md">
                    Due Today
                  </div>
</div>
<div className="pt-4 mt-1 border-t border-zinc-100 flex items-center gap-2">
<button className="flex-1 bg-white border border-zinc-300 shadow-sm text-zinc-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors flex justify-center items-center gap-2">
                    Draft Valuation Report
                  </button>
<button className="w-9 h-9 flex items-center justify-center bg-white border border-zinc-200 text-zinc-400 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-4 border-b border-zinc-200/80 pb-2">
<div className="flex items-center gap-2">
<h2 className="font-medium text-zinc-900 text-base tracking-tight">
                  Stalled Deals
                </h2>
<span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-xs font-medium border border-amber-100/50">
                  Action Required
                </span>
</div>
</div>
<div className="flex flex-col gap-3">

<div className="bg-white border border-zinc-200 rounded-xl px-5 py-3 shadow-sm flex items-center justify-between hover:border-zinc-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-xs font-medium tracking-tight">ER</div>
<div>
<div className="font-medium text-zinc-900 text-sm tracking-tight">Elena Rostova</div>
<div className="text-xs text-zinc-500 mt-0.5">Contract in hands • 14 days without change</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-medium border border-orange-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Contract Sent
                  </span>
<button className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">Review</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl px-5 py-3 shadow-sm flex items-center justify-between hover:border-zinc-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-xs font-medium tracking-tight">DM</div>
<div>
<div className="font-medium text-zinc-900 text-sm tracking-tight">David Meier</div>
<div className="text-xs text-zinc-500 mt-0.5">Viewing completed • 5 days no feedback</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Viewing Done
                  </span>
<button className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">Follow up</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl px-5 py-3 shadow-sm flex items-center justify-between hover:border-zinc-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-xs font-medium tracking-tight">SF</div>
<div>
<div className="font-medium text-zinc-900 text-sm tracking-tight">Sarah Fischer</div>
<div className="text-xs text-zinc-500 mt-0.5">Offer drafted • Pending agent review 3 days</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Offer Drafted
                  </span>
<button className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">Review Offer</button>
</div>
</div>
</div>
</section>
<div className="h-8"></div>
</div>
</div>

<div className="hidden flex-1 overflow-hidden flex h-full w-full" id="focus-view">

<div className="w-72 bg-zinc-50/80 border-r border-zinc-200/80 flex flex-col h-full shrink-0">
<div className="p-4 border-b border-zinc-200/80 flex items-center justify-between bg-white/50 backdrop-blur-sm">
<h3 className="font-semibold text-zinc-900 text-sm">Action Queue</h3>
<span className="text-xs bg-zinc-200 text-zinc-600 px-1.5 py-0.5 rounded font-medium">7 left</span>
</div>
<div className="overflow-y-auto flex-1 p-3 flex flex-col gap-2">
<div className="text-xs font-medium text-zinc-400 px-1 uppercase tracking-widest mt-1 mb-1">High Priority</div>

<div className="p-3 bg-white border-2 border-blue-200 shadow-sm rounded-lg flex flex-col gap-1 cursor-pointer ring-4 ring-blue-50">
<div className="flex justify-between items-center">
<span className="font-semibold text-zinc-900 text-sm tracking-tight">Sarah Jenkins</span>
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
</div>
<span className="text-xs text-zinc-500 truncate">124 Maple Street, Apt 4B</span>
<span className="text-[10px] text-rose-500 font-medium mt-1 flex items-center gap-1"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon> SLA Risk</span>
</div>

<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">James Wilson</span>
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
</div>
<span className="text-xs text-zinc-500 truncate">88 Riverside Drive</span>
<span className="text-[10px] text-rose-500 font-medium mt-1 flex items-center gap-1"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Urgent</span>
</div>
<div className="text-xs font-medium text-zinc-400 px-1 uppercase tracking-widest mt-4 mb-1">Follow Ups</div>
<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">Marcus West</span>
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
</div>
<span className="text-xs text-zinc-500 truncate">Penthouse 4A, The Beacon</span>
</div>
<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">Linda Chen</span>
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
</div>
<span className="text-xs text-zinc-500 truncate">450 Oak Ave (Seller)</span>
</div>
<div className="text-xs font-medium text-zinc-400 px-1 uppercase tracking-widest mt-4 mb-1">Stalled Deals</div>
<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">Elena Rostova</span>
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
</div>
</div>
<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">David Meier</span>
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
</div>
</div>
<div className="p-3 bg-transparent hover:bg-zinc-100 border border-transparent rounded-lg flex flex-col gap-1 cursor-pointer transition-colors">
<div className="flex justify-between items-center">
<span className="font-medium text-zinc-700 text-sm tracking-tight">Sarah Fischer</span>
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col h-full bg-white relative overflow-y-auto border-r border-zinc-200/80">
<div className="max-w-2xl w-full mx-auto p-8 flex flex-col gap-6">

<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs border border-blue-100/50 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Respond Now
                  </span>
<span className="text-xs text-rose-600 font-medium flex items-center gap-1 bg-rose-50 px-2 py-1 rounded-md">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon>
                    SLA Risk: Unread 2h
                  </span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Sarah Jenkins First Contact
                </h2>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-2">
                  Task: Send Initial Response &amp; Qualify Lead
                </p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-50 transition-colors">
                  Skip
                </button>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm">
                  Mark Resolved
                </button>
</div>
</div>

<div className="flex flex-col gap-4 mt-4">
<h3 className="font-semibold text-sm text-zinc-900 border-b border-zinc-100 pb-2">Recent Activity</h3>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-semibold text-xs tracking-tight">
                  SJ
                </div>
<div className="flex-1 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-semibold text-sm text-zinc-900">Sarah Jenkins</span>
<span className="text-xs text-zinc-400">2 hours ago via Newhome.com</span>
</div>
<div className="bg-zinc-50 border border-zinc-200 rounded-lg rounded-tl-none p-4 text-sm text-zinc-700 shadow-sm leading-relaxed">
                    Hi there, I saw the listing for 124 Maple Street and I'm very interested. Is the property still available for viewing this weekend? I am a pre-approved buyer and looking to move quickly.
                  </div>
</div>
</div>
</div>

<div className="mt-4 flex flex-col gap-3">
<h3 className="font-semibold text-sm text-zinc-900">Draft First Response</h3>
<div className="border border-zinc-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-zinc-900/20 focus-within:border-zinc-400 transition-all bg-white shadow-sm">
<textarea className="w-full p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none resize-none" placeholder="Type your response..." rows="5">Hi Sarah,

Thank you for reaching out! Yes, 124 Maple Street is still available, and we are hosting private viewings this Saturday. Since you are pre-approved, I'd love to prioritize your visit.

Does 10:00 AM or 2:00 PM work better for you?</textarea>
<div className="bg-zinc-50 px-4 py-3 border-t border-zinc-200 flex items-center justify-between">
<div className="flex gap-2">
<button className="text-zinc-400 hover:text-zinc-600 p-1" title="Attach Files">
<iconify-icon className="text-lg" icon="solar:paperclip-linear"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-600 p-1" title="Insert Calendar Link">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</button>
<button className="text-indigo-400 hover:text-indigo-600 p-1 bg-indigo-50 rounded" title="AI Assistant">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>
<button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
                    Send Reply
                    <iconify-icon className="text-sm" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 bg-zinc-50/50 flex flex-col h-full shrink-0 overflow-y-auto">
<div className="p-6 flex flex-col gap-8">

<section className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-lg tracking-tight shadow-sm">
                  SJ
                </div>
<div>
<h3 className="font-semibold text-zinc-900 text-base tracking-tight">Sarah Jenkins</h3>
<div className="text-xs text-zinc-500 mt-0.5">Active Buyer</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[11px] font-medium px-2 py-0.5 rounded">
<iconify-icon className="text-emerald-500" icon="solar:verified-check-bold"></iconify-icon>
                  Pre-approved
                </span>
<span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-100 text-[11px] font-medium px-2 py-0.5 rounded">
                  First-time buyer
                </span>
</div>
<div className="bg-white border border-zinc-200/80 rounded-lg p-3 text-xs flex flex-col gap-2 shadow-sm">
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear"></iconify-icon>
                  sarah.j@example.com
                </div>
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:phone-linear"></iconify-icon>
                  +1 555 0192
                </div>
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:wallet-money-linear"></iconify-icon>
                  Budget: $800k - $900k
                </div>
</div>
</section>

<section className="flex flex-col gap-3">
<h4 className="font-semibold text-xs text-zinc-900 uppercase tracking-widest">Inquiry Context</h4>
<div className="bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm group cursor-pointer hover:border-zinc-300 transition-colors">
<div className="h-24 bg-zinc-200 relative">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-400 flex items-center justify-center">
<iconify-icon className="text-3xl text-zinc-100" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-zinc-900 text-[10px] font-semibold px-1.5 py-0.5 rounded shadow-sm">
                    Active Listing
                  </span>
</div>
<div className="p-3">
<div className="font-semibold text-sm text-zinc-900 truncate">124 Maple Street, Apt 4B</div>
<div className="text-xs text-zinc-500 mt-1 flex items-center justify-between">
<span className="font-medium text-zinc-900">$850,000</span>
<span>2 Bed • 2 Bath</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h4 className="font-semibold text-xs text-zinc-900 uppercase tracking-widest">Activity History</h4>
<button className="text-xs text-blue-600 font-medium hover:text-blue-700">View All</button>
</div>
<div className="relative pl-3">
<div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-200"></div>
<div className="flex flex-col gap-5 relative z-10">

<div className="flex gap-3 items-start">
<div className="w-2.5 h-2.5 mt-1 rounded-full bg-rose-500 ring-4 ring-rose-50 flex-shrink-0"></div>
<div className="flex flex-col gap-0.5">
<div className="text-xs font-semibold text-zinc-900">SLA Warning</div>
<div className="text-[11px] text-zinc-500">Unread for 2 hours</div>
<div className="text-[10px] text-zinc-400 mt-0.5">Today, 12:00 PM</div>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="w-2.5 h-2.5 mt-1 rounded-full bg-zinc-400 ring-4 ring-zinc-100 flex-shrink-0"></div>
<div className="flex flex-col gap-0.5">
<div className="text-xs font-medium text-zinc-900">Lead Assigned</div>
<div className="text-[11px] text-zinc-500">Automatically assigned to Alex Jenkins</div>
<div className="text-[10px] text-zinc-400 mt-0.5">Today, 10:05 AM</div>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="w-2.5 h-2.5 mt-1 rounded-full bg-blue-500 ring-4 ring-blue-50 flex-shrink-0"></div>
<div className="flex flex-col gap-0.5">
<div className="text-xs font-medium text-zinc-900">Inbound Inquiry</div>
<div className="text-[11px] text-zinc-500">Source: Newhome.com portal</div>
<div className="text-[10px] text-zinc-400 mt-0.5">Today, 10:00 AM</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 hidden items-center justify-center p-6 bg-zinc-900/20 backdrop-blur-sm" id="schedule-modal">
<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-2xl w-full max-w-[520px] overflow-hidden flex flex-col animate-[fadeIn_0.2s_ease-out]">
<div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900">Schedule Viewing</h2>
<p className="text-xs text-zinc-500 mt-0.5">Marcus West • Penthouse 4A, The Beacon</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200/50 transition-colors" onclick="document.getElementById('schedule-modal').classList.add('hidden'); document.getElementById('schedule-modal').classList.remove('flex');">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col gap-6">
<div className="flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700">Date</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-400 text-base" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-400 transition-shadow" type="text" value="Oct 24, 2023"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700">Time</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-400 text-base" icon="solar:clock-circle-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-400 transition-shadow" type="text" value="14:00"/>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-700">Viewing Notes (Optional)</label>
<textarea className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-400 transition-shadow resize-none" placeholder="Any special requests or details..." rows="2"></textarea>
</div>
</div>
<div className="bg-zinc-50 rounded-xl border border-zinc-200/80 p-5">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Expected Side Effects</h4>
</div>
<ul className="flex flex-col gap-4 text-sm relative">
<div className="absolute left-2 top-2 bottom-2 w-px bg-zinc-200"></div>
<li className="flex gap-4 items-start relative z-10">
<div className="w-4 h-4 mt-0.5 rounded-full bg-white border-2 border-zinc-300 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
</div>
<div className="flex flex-col gap-0.5">
<div className="text-zinc-900 font-medium text-sm">Log timeline event</div>
<div className="text-xs text-zinc-500 bg-white border border-zinc-100 rounded px-2 py-1 mt-1 inline-flex w-max shadow-sm">
                      "Scheduled initial viewing"
                    </div>
</div>
</li>
<li className="flex gap-4 items-start relative z-10">
<div className="w-4 h-4 mt-0.5 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
</div>
<div className="flex flex-col gap-1">
<div className="text-zinc-900 font-medium text-sm">Update Lead Stage</div>
<div className="flex items-center gap-2 text-xs bg-white border border-zinc-100 rounded p-1.5 shadow-sm inline-flex w-max">
<span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded border border-purple-100/50 font-medium">Follow up</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon>
<span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100/50 font-medium">Viewing Scheduled</span>
</div>
</div>
</li>
<li className="flex gap-4 items-start relative z-10">
<div className="w-4 h-4 mt-0.5 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col gap-0.5">
<div className="text-zinc-900 font-medium text-sm">Create smart reminders</div>
<div className="text-xs text-zinc-500 bg-white border border-zinc-100 rounded px-2 py-1 mt-1 inline-flex w-max shadow-sm items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="solar:alarm-linear"></iconify-icon>
                      Agent &amp; Buyer sync 24h before
                    </div>
</div>
</li>
</ul>
</div>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-zinc-300 bg-white group-hover:border-zinc-400 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<iconify-icon className="text-white bg-zinc-900 rounded-[3px] absolute inset-[-1px] opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 select-none">Send automated calendar invites to all parties</span>
</label>
</div>
<div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="document.getElementById('schedule-modal').classList.add('hidden'); document.getElementById('schedule-modal').classList.remove('flex');">
              Discard
            </button>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-md text-sm font-medium bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm" onclick="document.getElementById('schedule-modal').classList.add('hidden'); document.getElementById('schedule-modal').classList.remove('flex');">
                Cancel
              </button>
<button className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm">
                Confirm &amp; Schedule
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
