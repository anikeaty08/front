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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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
      
<div className="flex h-screen w-full">

<aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex shrink-0">
<div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
<div className="flex items-center gap-2 font-medium tracking-tight text-lg">
<div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center text-white font-semibold">
              JB
            </div>
<span>LDBP Matrix</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-4">
            Workspace
          </p>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'dashboard', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'dashboard' }" @click="currentTab = 'dashboard'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
            Dashboard
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'origination', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'origination' }" @click="currentTab = 'origination'; creditStep = 1" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:hand-money-linear" strokeWidth="1.5"></iconify-icon>
            Credit Limit Origination
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'bill_purchase', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'bill_purchase' }" @click="currentTab = 'bill_purchase'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:bill-list-linear" strokeWidth="1.5"></iconify-icon>
            Bill Purchase Origination
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'customer', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'customer' }" @click="currentTab = 'customer'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
            Customer Profile
          </button>
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-8">
            Configuration
          </p>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'banklimit', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'banklimit' }" @click="currentTab = 'banklimit'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:bank-linear" strokeWidth="1.5"></iconify-icon>
            Bank Limit Setup
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'delegation', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'delegation' }" @click="currentTab = 'delegation'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
            Role Delegation
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'rules', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'rules' }" @click="currentTab = 'rules'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
            Exception Rules
          </button>
<button :className="{ 'bg-slate-800 text-white': currentTab === 'rulesetup', 'text-slate-300 hover:bg-slate-800/50 hover:text-white': currentTab !== 'rulesetup' }" @click="currentTab = 'rulesetup'" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
            Rule Setup
          </button>
</nav>
<div className="p-4 border-t border-slate-800 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-medium">
              RM
            </div>
<div>
<div className="text-sm font-medium text-white">Dealing Officer</div>
<div className="text-xs text-slate-400">Gulshan Branch Maker</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-white rounded-l-2xl shadow-[inset_1px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200">

<header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 shrink-0 bg-white/80 backdrop-blur-md">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="relative w-64 hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-1.5 bg-slate-100 border-transparent rounded-md text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none" placeholder="Search LC, Customer or LDBP..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Auto Refresh: On
            </div>
<button className="relative text-slate-500 hover:text-slate-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">

<div className="space-y-6" x-show="currentTab === 'dashboard'">
<div className="flex items-center justify-between">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Workflow Overview
              </h1>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-50 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                  Today
                </button>
<button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">
                  Export Report
                </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                  Pending Validation
                </div>
<div className="text-2xl font-semibold text-slate-900">42</div>
<div className="text-xs text-slate-400 mt-2">
                  Maker/Checker level
                </div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                  Pending Recom.
                </div>
<div className="text-2xl font-semibold text-slate-900">18</div>
<div className="text-xs text-slate-400 mt-2">Wholesale Banking</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                  Pending Approval
                </div>
<div className="text-2xl font-semibold text-slate-900">07</div>
<div className="text-xs text-slate-400 mt-2">CRM / Management</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-300 hover:shadow-md transition-all group">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                  Approved Today
                </div>
<div className="text-2xl font-semibold text-emerald-600">24</div>
<div className="text-xs text-slate-400 mt-2">
                  Completed workflow
                </div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-red-300 hover:shadow-md transition-all group">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1 group-hover:text-red-600 transition-colors">
                  Rejected Today
                </div>
<div className="text-2xl font-semibold text-red-500">03</div>
<div className="text-xs text-slate-400 mt-2">
                  Returned to branch
                </div>
</div>
<div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm">
<div className="text-xs text-indigo-600 font-medium mb-1">
                  Total In Pipeline
                </div>
<div className="text-2xl font-semibold text-indigo-900">67</div>
<div className="text-xs text-indigo-500 mt-2">
                  All active records
                </div>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-slate-900 mb-3">
                SLA &amp; Aging Status
              </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between border-l-4 border-l-emerald-400">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-50 rounded text-emerald-600">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">
                        Pending &gt; 1 Day
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        45 Records
                      </div>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    Within SLA
                  </span>
</div>
<div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between border-l-4 border-l-amber-400">
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-50 rounded text-amber-600">
<iconify-icon className="text-lg" icon="solar:hourglass-line-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">
                        Pending &gt; 3 Days
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        12 Records
                      </div>
</div>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    Nearing SLA
                  </span>
</div>
<div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between border-l-4 border-l-red-500">
<div className="flex items-center gap-3">
<div className="p-2 bg-red-50 rounded text-red-600">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">
                        SLA Breached
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        10 Records
                      </div>
</div>
</div>
<span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                    Action Req
                  </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-medium text-slate-900">
                      LDBP Exposure by Bank
                    </h3>
<p className="text-xs text-slate-500">
                      Top issuing banks by purchase amount
                    </p>
</div>
<select className="text-xs border-slate-200 rounded-md py-1 pl-2 pr-6 text-slate-600 focus:ring-indigo-500 focus:border-indigo-500">
<option>Amount</option>
<option>Volume</option>
</select>
</div>
<div className="flex-1 flex items-end gap-2 h-48 mt-auto px-2">
<div className="relative flex-1 group h-[85%] bg-indigo-100 rounded-t-sm hover:bg-indigo-200 transition-colors cursor-pointer">
<div className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-slate-800 text-white text-xs px-2 py-1 rounded left-1/2 -translate-x-1/2 z-10 shadow-lg">
                      City Bank: ৳45M
                    </div>
</div>
<div className="relative flex-1 group h-[60%] bg-indigo-500 rounded-t-sm hover:bg-indigo-600 transition-colors cursor-pointer">
<div className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-slate-800 text-white text-xs px-2 py-1 rounded left-1/2 -translate-x-1/2 z-10 shadow-lg">
                      Brac Bank: ৳32M
                    </div>
</div>
<div className="relative flex-1 group h-[95%] bg-indigo-500 rounded-t-sm hover:bg-indigo-600 transition-colors cursor-pointer">
<div className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-slate-800 text-white text-xs px-2 py-1 rounded left-1/2 -translate-x-1/2 z-10 shadow-lg">
                      Islami Bank: ৳52M
                    </div>
</div>
<div className="relative flex-1 group h-[40%] bg-indigo-100 rounded-t-sm hover:bg-indigo-200 transition-colors cursor-pointer"></div>
<div className="relative flex-1 group h-[30%] bg-indigo-100 rounded-t-sm hover:bg-indigo-200 transition-colors cursor-pointer"></div>
<div className="relative flex-1 group h-[70%] bg-indigo-500 rounded-t-sm hover:bg-indigo-600 transition-colors cursor-pointer"></div>
<div className="relative flex-1 group h-[20%] bg-indigo-100 rounded-t-sm hover:bg-indigo-200 transition-colors cursor-pointer"></div>
</div>
<div className="flex items-center justify-between text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-100">
<span className="flex-1 text-center truncate">City Bank</span>
<span className="flex-1 text-center truncate">Brac</span>
<span className="flex-1 text-center truncate font-medium text-slate-700">
                    IBBL
                  </span>
<span className="flex-1 text-center truncate">EBL</span>
<span className="flex-1 text-center truncate">Mutual</span>
<span className="flex-1 text-center truncate font-medium text-slate-700">
                    UCB
                  </span>
<span className="flex-1 text-center truncate">Dutch</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
<div className="w-full mb-4">
<h3 className="text-sm font-medium text-slate-900">
                    Maturity Distribution
                  </h3>
<p className="text-xs text-slate-500">
                    Upcoming liquidity pressure
                  </p>
</div>
<div className="relative w-40 h-40 chart-donut flex items-center justify-center shadow-inner">
<div className="text-center z-10">
<div className="text-2xl font-semibold text-slate-900">142</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Total Bills
                    </div>
</div>
</div>
<div className="w-full mt-6 space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-slate-600">Overdue</span>
</div>
<span className="font-medium">12%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-slate-600">0-15 Days</span>
</div>
<span className="font-medium">35%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-slate-600">16-30+ Days</span>
</div>
<span className="font-medium">53%</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
<div>
<h3 className="text-sm font-medium text-slate-900">
                    Export LC Pipeline
                  </h3>
<p className="text-xs text-slate-500">
                    Pending recommendation/approval grid
                  </p>
</div>
<div className="flex gap-2">
<input className="text-xs border-slate-200 rounded-md py-1.5 pl-3 pr-3 text-slate-900 focus:ring-indigo-500 focus:border-indigo-500 w-48 shadow-sm" placeholder="Filter table..." type="text"/>
<button className="px-2 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md hover:bg-slate-50 shadow-sm">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium tracking-wide">
<th className="py-3 px-4">LC Number</th>
<th className="py-3 px-4">LDBP Number</th>
<th className="py-3 px-4">Customer Details</th>
<th className="py-3 px-4">Issuing Bank &amp; Branch</th>
<th className="py-3 px-4 text-right">Accept Amt.</th>
<th className="py-3 px-4 text-center">Tenor / Mat. Date</th>
<th className="py-3 px-4 text-center">CIB Status</th>
<th className="py-3 px-4 text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
<td className="py-3 px-4">
<div className="font-medium text-slate-900">0451230001</div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-slate-900 group-hover:text-indigo-600">
                          LDBP-23-0891
                        </div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-slate-900">
                          Acme Garments Ltd.
                        </div>
<div className="text-xs text-slate-500">
                          Gulshan Branch | App: ZARA
                        </div>
</td>
<td className="py-3 px-4">
<div className="text-slate-900">City Bank PLC</div>
<div className="text-xs text-slate-500">Motijheel Br.</div>
</td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                        ৳ 12,500,000
                      </td>
<td className="py-3 px-4 text-center">
<div className="text-slate-900">90 Days</div>
<div className="text-xs text-slate-500">12 Oct 2023</div>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Standard
                        </span>
</td>
<td className="py-3 px-4 text-center">
<button @click="currentTab = 'bill_purchase'" className="px-3 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded text-xs font-medium transition-colors border border-indigo-200 hover:border-indigo-600">
                          Purchase Initiate
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-show="currentTab === 'customer'">
<div className="border-b border-slate-200 pb-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Customer Profile Setup
              </h1>
<p className="text-sm text-slate-500 mt-1">
                Fetch customer intelligence and define pre-approved limits.
              </p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-end gap-4">
<div className="flex-1 max-w-md">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                  CASA Account Number *
                </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none" type="text" value="1012345678901"/>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium h-[38px]">
                Fetch Details
              </button>
</div>
</div>

<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-show="currentTab === 'origination'">
<div className="border-b border-slate-200 pb-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Credit Limit Origination
              </h1>
<p className="text-sm text-slate-500 mt-1">
                Search a customer, review position &amp; performance, then
                request credit limit.
              </p>
</div>

<div className="flex items-center justify-between mb-8 relative z-0">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
<div :style={{`width: '${(creditStep-1)*25}%`'}} className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-600 -z-10 transition-all duration-300"></div>
<template x-htmlFor="i in 5">
<div className="flex flex-col items-center gap-2 bg-slate-50 px-2">
<div :className="creditStep &gt;= i ? 'border-indigo-600 text-indigo-600' : 'border-slate-300 text-slate-400'" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors duration-300 bg-white">
<span x-text="i"></span>
</div>
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider" x-text="['Search', 'Position', 'Performance', 'Apply', 'Summary'][i-1]"></span>
</div>
</template>
</div>

<div className="space-y-6" style={{}} x-show="creditStep === 1">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-end gap-4">
<div className="flex-1 max-w-xl">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Customer Search
                  </label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:border-indigo-500 focus:ring-1 outline-none" placeholder="Customer Name or Account Number..." type="text"/>
</div>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium h-[38px]">
                  Search
                </button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-900">
                    List of Customers
                  </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-slate-100 text-xs text-slate-500 font-medium bg-slate-50/80">
<th className="py-3 px-4">CIF ID</th>
<th className="py-3 px-4">Customer Name</th>
<th className="py-3 px-4">Branch Name</th>
<th className="py-3 px-4 text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 font-medium text-slate-900">
                          CIF88902
                        </td>
<td className="py-3 px-4 font-medium text-slate-900">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">Gulshan Branch</td>
<td className="py-3 px-4 text-center">
<button @click="creditStep = 2" className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded text-xs font-medium border border-indigo-200 hover:bg-indigo-600 hover:text-white">
                            Select
                          </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="creditStep === 2">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Customer Facility Limit Position (CBS)
                  </h3>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                        Approved Limit
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        ৳ 50M
                      </div>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                        Utilized
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        ৳ 32M
                      </div>
</div>
<div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
<div className="text-[10px] text-indigo-600 uppercase tracking-wide mb-1">
                        Available
                      </div>
<div className="text-sm font-semibold text-indigo-700">
                        ৳ 18M
                      </div>
</div>
<div className="p-3 bg-red-50 rounded-lg border border-red-100">
<div className="text-[10px] text-red-600 uppercase tracking-wide mb-1">
                        Overdue
                      </div>
<div className="text-sm font-semibold text-red-700">৳ 0</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                        Expiry Date
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        31 Dec 2024
                      </div>
</div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      CIB Information
                    </h3>
<button className="text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Report
                    </button>
</div>
<div className="space-y-4 flex-1">
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-xs text-slate-500">Status</span>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        Standard
                      </span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-xs text-slate-500">Report Date</span>
<span className="text-sm font-medium text-slate-900">
                        10 Aug 2023
                      </span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Expiry Date</span>
<span className="text-sm font-medium text-slate-900">
                        09 Aug 2024
                      </span>
</div>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="creditStep = 1" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm">
                  Back
                </button>
<button @click="creditStep = 3" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="creditStep === 3">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-900">
                    LDBP Performance (Last 12 Months) from CBS
                  </h3>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium tracking-wide">
<th className="py-3 px-4">Category</th>
<th className="py-3 px-4 text-center">Quantity</th>
<th className="py-3 px-4 text-right">Amount (BDT)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Purchased
                        </td>
<td className="py-3 px-4 text-center text-slate-900">45</td>
<td className="py-3 px-4 text-right text-slate-900">
                          120,500,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Realized
                        </td>
<td className="py-3 px-4 text-center text-slate-900">38</td>
<td className="py-3 px-4 text-right text-slate-900">
                          95,000,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Outstanding
                        </td>
<td className="py-3 px-4 text-center text-slate-900">7</td>
<td className="py-3 px-4 text-right text-slate-900">
                          2,55,00,000
                        </td>
</tr>
<tr className="bg-red-50/30 hover:bg-red-50/50">
<td className="py-3 px-4 text-red-600 font-medium">
                          Overdue
                        </td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          2
                        </td>
<td className="py-3 px-4 text-right text-red-600 font-medium">
                          15,00,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Proposed
                        </td>
<td className="py-3 px-4 text-center text-slate-900">2</td>
<td className="py-3 px-4 text-right text-slate-900">
                          8,000,000
                        </td>
</tr>
<tr className="bg-indigo-50/50">
<td className="py-3 px-4 text-indigo-900 font-semibold">
                          Total Pipeline
                        </td>
<td className="py-3 px-4 text-center text-indigo-900 font-semibold">
                          9
                        </td>
<td className="py-3 px-4 text-right text-indigo-900 font-semibold">
                          33,500,000
                        </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden mt-6">
<div className="p-4 border-b border-red-200 bg-red-50">
<h3 className="text-sm font-medium text-red-800">
                    Overdue Detail View
                  </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium tracking-wide">
<th className="py-3 px-4">LC Ref / Doc Number</th>
<th className="py-3 px-4">Bank Name</th>
<th className="py-3 px-4">Applicant Name</th>
<th className="py-3 px-4">Opening Date</th>
<th className="py-3 px-4">Overdue Date</th>
<th className="py-3 px-4 text-center">Days Overdue</th>
<th className="py-3 px-4 text-right">Outstanding Amt</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-0145
                        </td>
<td className="py-3 px-4 text-slate-600">City Bank PLC</td>
<td className="py-3 px-4 text-slate-600">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">12 Feb 2023</td>
<td className="py-3 px-4 text-slate-600">12 May 2023</td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          92
                        </td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          ৳ 1,000,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-0218
                        </td>
<td className="py-3 px-4 text-slate-600">BRAC Bank PLC</td>
<td className="py-3 px-4 text-slate-600">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">05 Mar 2023</td>
<td className="py-3 px-4 text-slate-600">05 Jun 2023</td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          68
                        </td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          ৳ 500,000
                        </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="creditStep = 2" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm">
                  Back
                </button>
<button @click="creditStep = 4" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="creditStep === 4">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2">
                  Request Details
                </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Currency
                        </label>
<select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none">
<option>BDT</option>
<option>USD</option>
<option>EUR</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Amount
                        </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none" type="text" value="60,000,000"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Number of bill purchase yearly
                        </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none" type="number" value="15"/>
</div>
</div>
</div>
<div className="space-y-4">
<h4 className="text-xs font-medium text-slate-900 border-b border-slate-100 pb-2">
                      Document Uploads
                    </h4>
<label className="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:document-add-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                          CIB Report
                          <span className="text-slate-500 ml-1 font-normal">
                            (if CIB report aging is more than 2 months)
                          </span>
</span>
</div>
<input className="hidden" type="file"/>
<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        Upload
                      </span>
</label>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="creditStep = 3" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm">
                  Back
                </button>
<button @click="creditStep = 5" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="creditStep === 5">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center py-10">
<div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-3xl" icon="solar:clipboard-text-linear"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
                  Summary
                </h2>
<p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Review the details before submitting the credit limit request.
                </p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto">
<div className="grid grid-cols-2 gap-y-4 text-sm">
<div className="text-slate-500">Customer</div>
<div className="font-medium text-slate-900 text-right">
                      Acme Garments Ltd.
                    </div>
<div className="text-slate-500">Requested Amount</div>
<div className="font-bold text-indigo-700 text-right">
                      BDT 60,000,000
                    </div>
<div className="text-slate-500">Yearly Bills Volume</div>
<div className="font-medium text-slate-900 text-right">15</div>
<div className="text-slate-500">Documents Attached</div>
<div className="font-medium text-slate-900 text-right">
                      None
                    </div>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="creditStep = 4" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm">
                  Back
                </button>
<button @click="creditStep = 1; currentTab = 'dashboard'" className="px-6 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium shadow-sm flex items-center gap-2">
                  Submit Request
                </button>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-data="{ billStep: 1, margin: 10, rate: 110.50, val: 250000, currency: 'USD' }" x-show="currentTab === 'bill_purchase'">

<div className="border-b border-slate-200 pb-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Bill Purchase Origination
              </h1>
<p className="text-sm text-slate-500 mt-1">
                Search a customer, review position &amp; performance, select
                acceptances and initiate purchase.
              </p>
</div>

<div className="flex items-center justify-between mb-8 relative z-0">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
<div :style={{`width: '${(billStep-1)*20}%`'}} className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-600 -z-10 transition-all duration-300"></div>
<template x-htmlFor="i in 6">
<div className="flex flex-col items-center gap-2 bg-slate-50 px-2">
<div :className="billStep &gt;= i ? 'border-indigo-600 text-indigo-600' : 'border-slate-300 text-slate-400'" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors duration-300 bg-white">
<span x-text="i"></span>
</div>
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider" x-text="['Search', 'Position', 'Performance', 'Acceptances', 'Purchase', 'Summary'][i-1]"></span>
</div>
</template>
</div>

<div className="space-y-6" style={{}} x-show="billStep === 1">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-end gap-4">
<div className="flex-1 max-w-xl">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Customer Search
                  </label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:border-indigo-500 focus:ring-1 outline-none shadow-sm" placeholder="Customer Name or Account Number or LC ref" type="text"/>
</div>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 shadow-sm h-[38px]">
                  Search
                </button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-900">
                    List of Customers
                  </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-slate-100 text-xs text-slate-500 font-medium bg-slate-50/80">
<th className="py-3 px-4">CIF ID</th>
<th className="py-3 px-4">Customer Name</th>
<th className="py-3 px-4">Branch Name</th>
<th className="py-3 px-4 text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-medium text-slate-900">
                          CIF88902
                        </td>
<td className="py-3 px-4 font-medium text-slate-900">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">Gulshan Branch</td>
<td className="py-3 px-4 text-center">
<button @click="billStep = 2" className="px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded text-xs font-medium border border-indigo-200">
                            Select
                          </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="billStep === 2">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Customer Facility Limit Position (CBS)
                  </h3>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                        Approved Limit
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        ৳ 50M
                      </div>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                        Utilized
                      </div>
<div className="text-sm font-semibold text-slate-900">
                        ৳ 32M
                      </div>
</div>
<div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
<div className="text-[10px] text-indigo-600 uppercase tracking-wide mb-1">
                        Available
                      </div>
<div className="text-sm font-semibold text-indigo-700">
                        ৳ 18M
                      </div>
</div>
<div className="p-3 bg-red-50 rounded-lg border border-red-100">
<div className="text-[10px] text-red-600 uppercase tracking-wide mb-1">
                        Overdue
                      </div>
<div className="text-sm font-semibold text-red-700">৳ 0</div>
</div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      CIB Information
                    </h3>
<button className="text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Report
                    </button>
</div>
<div className="space-y-4 flex-1">
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-xs text-slate-500">Status</span>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        Standard
                      </span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-slate-100">
<span className="text-xs text-slate-500">Report Date</span>
<span className="text-sm font-medium text-slate-900">
                        10 Aug 2023
                      </span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Expiry Date</span>
<span className="text-sm font-medium text-slate-900">
                        09 Aug 2024
                      </span>
</div>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="billStep = 1" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Back
                </button>
<button @click="billStep = 3" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="billStep === 3">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-900">
                    LDBP Performance (Last 12 Months)
                  </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium tracking-wide">
<th className="py-3 px-4">Category</th>
<th className="py-3 px-4 text-center">Quantity</th>
<th className="py-3 px-4 text-right">Amount (BDT)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Purchased
                        </td>
<td className="py-3 px-4 text-center text-slate-900">45</td>
<td className="py-3 px-4 text-right text-slate-900">
                          120,500,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Realized
                        </td>
<td className="py-3 px-4 text-center text-slate-900">38</td>
<td className="py-3 px-4 text-right text-slate-900">
                          95,000,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Outstanding
                        </td>
<td className="py-3 px-4 text-center text-slate-900">7</td>
<td className="py-3 px-4 text-right text-slate-900">
                          2,55,00,000
                        </td>
</tr>
<tr className="bg-red-50/30 hover:bg-red-50/50">
<td className="py-3 px-4 text-red-600 font-medium">
                          Overdue
                        </td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          2
                        </td>
<td className="py-3 px-4 text-right text-red-600 font-medium">
                          15,00,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 text-slate-900 font-medium">
                          Proposed
                        </td>
<td className="py-3 px-4 text-center text-slate-900">2</td>
<td className="py-3 px-4 text-right text-slate-900">
                          8,000,000
                        </td>
</tr>
<tr className="bg-indigo-50/50">
<td className="py-3 px-4 text-indigo-900 font-semibold">
                          Total Pipeline
                        </td>
<td className="py-3 px-4 text-center text-indigo-900 font-semibold">
                          9
                        </td>
<td className="py-3 px-4 text-right text-indigo-900 font-semibold">
                          33,500,000
                        </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-red-200 bg-red-50">
<h3 className="text-sm font-medium text-red-800">
                    Overdue Detail View
                  </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium tracking-wide">
<th className="py-3 px-4">LC Ref / Doc Number</th>
<th className="py-3 px-4">Bank Name</th>
<th className="py-3 px-4">Applicant Name</th>
<th className="py-3 px-4">Opening Date</th>
<th className="py-3 px-4">Overdue Date</th>
<th className="py-3 px-4 text-center">Days Overdue</th>
<th className="py-3 px-4 text-right">Outstanding Amt</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-0145
                        </td>
<td className="py-3 px-4 text-slate-600">City Bank PLC</td>
<td className="py-3 px-4 text-slate-600">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">12 Feb 2023</td>
<td className="py-3 px-4 text-slate-600">12 May 2023</td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          92
                        </td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          ৳ 1,000,000
                        </td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-0218
                        </td>
<td className="py-3 px-4 text-slate-600">BRAC Bank PLC</td>
<td className="py-3 px-4 text-slate-600">
                          Acme Garments Ltd.
                        </td>
<td className="py-3 px-4 text-slate-600">05 Mar 2023</td>
<td className="py-3 px-4 text-slate-600">05 Jun 2023</td>
<td className="py-3 px-4 text-center text-red-600 font-medium">
                          68
                        </td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          ৳ 500,000
                        </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="billStep = 2" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Back
                </button>
<button @click="billStep = 4" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="billStep === 4">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-900">
                    List of Acceptances (Pending Purchase)
                  </h3>
<p className="text-xs text-slate-500 mt-1">
                    Select multiple acceptances from CBS/TCS to initiate
                    purchase.
                  </p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-slate-100 text-xs text-slate-500 font-medium bg-slate-50/80">
<th className="py-3 px-4 w-10 text-center">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
</th>
<th className="py-3 px-4">LC Number</th>
<th className="py-3 px-4">Applicant Name</th>
<th className="py-3 px-4">Issuing Bank &amp; Branch</th>
<th className="py-3 px-4 text-right">Accepted Value</th>
<th className="py-3 px-4 text-center">Tenor</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 text-center">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-9981
                        </td>
<td className="py-3 px-4 text-slate-600">ZARA Fashions</td>
<td className="py-3 px-4 text-slate-600">City Bank PLC</td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          USD 250,000
                        </td>
<td className="py-3 px-4 text-center">90 Days</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 text-center">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
</td>
<td className="py-3 px-4 font-medium text-slate-900">
                          LC-2023-9982
                        </td>
<td className="py-3 px-4 text-slate-600">H&amp;M Group</td>
<td className="py-3 px-4 text-slate-600">BRAC Bank PLC</td>
<td className="py-3 px-4 text-right font-medium text-slate-900">
                          USD 150,000
                        </td>
<td className="py-3 px-4 text-center">60 Days</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="billStep = 3" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Back
                </button>
<button @click="billStep = 5" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="billStep === 5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2">
                    Purchase Calculation
                  </h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Currency
                      </label>
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm outline-none">
<option>USD</option>
<option>EUR</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Margin %
                      </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:border-indigo-500 outline-none" type="number" x-model.number="margin"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Today's Conv. Rate
                      </label>
<input className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-md text-sm text-slate-600 outline-none" readonly="" type="number" x-model="rate"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Acceptance Value (Auto)
                      </label>
<input className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-md text-sm text-slate-600 outline-none" readonly="" type="number" x-model="val"/>
</div>
</div>
<div className="pt-4 border-t border-slate-100 space-y-3">
<div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg border border-indigo-100">
<span className="text-xs font-medium text-indigo-800">
                        Purchase Amount (USD)
                      </span>
<span className="text-sm font-bold text-indigo-900" x-text="'$ ' + (val * ((100-margin)/100)).toLocaleString(undefined, {minimumFractionDigits: 2})"></span>
</div>
<div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
<span className="text-xs font-medium text-emerald-800">
                        Purchase Amount (BDT)
                      </span>
<span className="text-sm font-bold text-emerald-900" x-text="'৳ ' + ((val * ((100-margin)/100)) * rate).toLocaleString(undefined, {minimumFractionDigits: 2})"></span>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2">
                    Document Uploads
                  </h3>
<div className="space-y-3">
<label className="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:document-add-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                          LC Swift Message Copy
                        </span>
</div>
<input className="hidden" type="file"/>
<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        Upload
                      </span>
</label>
<label className="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:file-check-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                          Bank Acceptance Swift Copy
                        </span>
</div>
<input className="hidden" type="file"/>
<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        Upload
                      </span>
</label>
<label className="flex items-center justify-between p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:document-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                          Commercial Invoice
                        </span>
</div>
<input className="hidden" type="file"/>
<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        Upload
                      </span>
</label>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="billStep = 4" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Back
                </button>
<button @click="billStep = 6" className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 flex items-center gap-2">
                  Next
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6" style={{display: 'none'}} x-show="billStep === 6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center py-10">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-3xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 mb-2">
                  Ready for Submission
                </h2>
<p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Please review the purchase summary before submitting to the
                  system.
                </p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-2xl mx-auto">
<div className="grid grid-cols-2 gap-y-4 text-sm">
<div className="text-slate-500">Customer</div>
<div className="font-medium text-slate-900 text-right">
                      Acme Garments Ltd.
                    </div>
<div className="text-slate-500">Selected Bills</div>
<div className="font-medium text-slate-900 text-right">
                      1 (LC-2023-9981)
                    </div>
<div className="text-slate-500">Total Acceptance Val</div>
<div className="font-medium text-slate-900 text-right">
                      USD 250,000
                    </div>
<div className="text-slate-500">Margin Applied</div>
<div className="font-medium text-slate-900 text-right">10%</div>
<div className="text-slate-500">Total Purchase (USD)</div>
<div className="font-bold text-indigo-700 text-right">
                      USD 225,000.00
                    </div>
<div className="text-slate-500">Total Purchase (BDT)</div>
<div className="font-bold text-emerald-700 text-right">
                      ৳ 24,862,500.00
                    </div>
</div>
</div>
</div>
<div className="flex justify-between pt-4 border-t border-slate-200">
<button @click="billStep = 5" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Back
                </button>
<button @click="billStep = 1; currentTab = 'dashboard'" className="px-6 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-emerald-700 flex items-center gap-2">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
                  Submit Origination
                </button>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-show="currentTab === 'banklimit'">
<div className="border-b border-slate-200 pb-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Bank Limit Setup
              </h1>
<p className="text-sm text-slate-500 mt-1">
                Define and monitor exposure limits per issuing bank.
              </p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Bank Name
                  </label>
<select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
<option>City Bank PLC</option>
<option>BRAC Bank PLC</option>
<option>Islami Bank Bangladesh</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Bank Type
                  </label>
<select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
<option>Local Private Commercial</option>
<option>Foreign Commercial</option>
<option>State Owned</option>
</select>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">
                  Limit Configuration
                </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Total Exposure Limit (BDT)
                    </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="500,000,000"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Single Tx Limit (BDT)
                    </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="50,000,000"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Tenor Limit (Days)
                    </label>
<input className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="180"/>
</div>
</div>
</div>
<div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50/50">
<div>
<div className="text-sm font-medium text-slate-900">
                    Exception Handling Required
                  </div>
<div className="text-xs text-slate-500 mt-0.5">
                    Route to management if limit exceeded.
                  </div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
<div className="flex justify-end gap-3 pt-2">
<button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50">
                  Cancel
                </button>
<button className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700">
                  Save Limits
                </button>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-data="{ custLimit: 80, bankLimit: 90 }" x-show="currentTab === 'rules'">
<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                  Matrix &amp; Rule Configuration
                </h1>
<p className="text-sm text-slate-500 mt-1">
                  Define auto-approval, delegation, and escalation logic.
                </p>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                Test Rule Engine
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900">
                    Green Field Conditions
                  </h3>
</div>
<p className="text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                  All conditions below must pass for Auto-Approval at Branch/CRM
                  level.
                </p>
<div className="space-y-6 flex-1">
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-slate-700">
                        Cust Limit Utilization ≤
                      </label>
<span className="text-xs font-bold text-slate-900" x-text="custLimit + '%'">
                        80%
                      </span>
</div>
<input className="w-full" max="100" min="0" type="range" x-model="custLimit"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-slate-700">
                        Bank Limit Utilization ≤
                      </label>
<span className="text-xs font-bold text-slate-900" x-text="bankLimit + '%'">
                        90%
                      </span>
</div>
<input className="w-full" max="100" min="0" type="range" x-model="bankLimit"/>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        CIB = Standard
                      </span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        BBID Verified
                      </span>
</label>
<label className="col-span-2 flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        No Adverse Clause in LC
                      </span>
</label>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-xs font-medium text-slate-700">
                    Auto Approval Level:
                  </span>
<select className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm outline-none focus:border-indigo-500 w-48 text-slate-700 shadow-sm">
<option>Branch Manager</option>
<option>CRM Head</option>
</select>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900">
                    Exception &amp; Escalation Mapping
                  </h3>
</div>
<p className="text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                  Define routing when green field conditions fail.
                </p>
<div className="space-y-4 flex-1">
<div className="p-4 border border-slate-100 bg-slate-50/50 rounded-lg">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-semibold text-slate-900">
                        Customer Limit Exceeded
                      </h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-100 text-red-600">
                        Red Flag
                      </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400 text-sm" icon="solar:routing-2-linear"></iconify-icon>
                      Routes to:
                      <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Management (MD/CEO)
                      </span>
</div>
</div>
<div className="p-4 border border-slate-100 bg-slate-50/50 rounded-lg">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-semibold text-slate-900">
                        Bank Limit Exceeded
                      </h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700">
                        Warning
                      </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400 text-sm" icon="solar:routing-2-linear"></iconify-icon>
                      Routes to:
                      <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Wholesale Division Head
                      </span>
</div>
</div>
<button className="w-full py-2.5 border border-dashed border-slate-300 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center gap-2 transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    Add Exception Rule
                  </button>
</div>
<div className="mt-6">
<button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors">
                    Save Rule Matrix
                  </button>
</div>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto space-y-6" style={{display: 'none'}} x-data="{ custLimit2: 80, bankLimit2: 90 }" x-show="currentTab === 'rulesetup'">
<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">
                  Matrix &amp; Rule Configuration
                </h1>
<p className="text-sm text-slate-500 mt-1">
                  Define auto-approval, delegation, and escalation logic.
                </p>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                Test Rule Engine
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900">
                    Green Field Conditions
                  </h3>
</div>
<p className="text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                  All conditions below must pass for Auto-Approval at Branch/CRM
                  level.
                </p>
<div className="space-y-6 flex-1">
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-slate-700">
                        Cust Limit Utilization ≤
                      </label>
<span className="text-xs font-bold text-slate-900" x-text="custLimit2 + '%'">
                        80%
                      </span>
</div>
<input className="w-full" max="100" min="0" type="range" x-model="custLimit2"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-slate-700">
                        Bank Limit Utilization ≤
                      </label>
<span className="text-xs font-bold text-slate-900" x-text="bankLimit2 + '%'">
                        90%
                      </span>
</div>
<input className="w-full" max="100" min="0" type="range" x-model="bankLimit2"/>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        CIB = Standard
                      </span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        BBID Verified
                      </span>
</label>
<label className="col-span-2 flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4" type="checkbox"/>
<span className="text-xs font-medium text-slate-700">
                        No Adverse Clause in LC
                      </span>
</label>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-xs font-medium text-slate-700">
                    Auto Approval Level:
                  </span>
<select className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm outline-none focus:border-indigo-500 w-48 text-slate-700 shadow-sm">
<option>Branch Manager</option>
<option>CRM Head</option>
</select>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900">
                    Exception &amp; Escalation Mapping
                  </h3>
</div>
<p className="text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                  Define routing when green field conditions fail.
                </p>
<div className="space-y-4 flex-1">
<div className="p-4 border border-slate-100 bg-slate-50/50 rounded-lg">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-semibold text-slate-900">
                        Customer Limit Exceeded
                      </h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-100 text-red-600">
                        Red Flag
                      </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400 text-sm" icon="solar:routing-2-linear"></iconify-icon>
                      Routes to:
                      <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Management (MD/CEO)
                      </span>
</div>
</div>
<div className="p-4 border border-slate-100 bg-slate-50/50 rounded-lg">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-semibold text-slate-900">
                        Bank Limit Exceeded
                      </h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700">
                        Warning
                      </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400 text-sm" icon="solar:routing-2-linear"></iconify-icon>
                      Routes to:
                      <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Wholesale Division Head
                      </span>
</div>
</div>
<button className="w-full py-2.5 border border-dashed border-slate-300 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center gap-2 transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    Add Exception Rule
                  </button>
</div>
<div className="mt-6">
<button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors">
                    Save Rule Matrix
                  </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
