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
      

<aside className="w-64 border-r border-zinc-800/60 bg-[#09090b] hidden md:flex flex-col flex-shrink-0">

<div className="h-14 flex items-center px-4 border-b border-zinc-800/60">
<span className="text-base font-medium tracking-tighter text-white">ITSM.BOT</span>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<button className="flex gap-2 hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-200 bg-zinc-900 w-full border-zinc-800/80 border rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-lg text-zinc-400" icon="solar:pen-new-square-linear"></iconify-icon>
                New Inquiry
            </button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
<div className="">
<div className="text-xs font-medium text-zinc-500 mb-2 px-2 tracking-tight">Quick Actions</div>
<div className="space-y-0.5">
<a className="flex items-center gap-2 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors text-sm text-zinc-400 rounded-md pt-1.5 pr-2 pb-1.5 pl-2" href="/#">
<iconify-icon className="text-base" icon="solar:server-square-linear"></iconify-icon>
                        CMDB Lookup
                    </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
                        Service Catalog
                    </a>
<a className="flex items-center gap-2 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors text-sm text-zinc-400 rounded-md pt-1.5 pr-2 pb-1.5 pl-2" href="/#">
<iconify-icon className="text-base" icon="solar:ticket-linear"></iconify-icon>
                        My SCTASKs
                    </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:shield-keyhole-linear"></iconify-icon>
                        Password Reset
                    </a>
</div>
</div>
<div className="">
<div className="text-xs font-medium text-zinc-500 mb-2 px-2 tracking-tight">Recent</div>
<div className="space-y-0.5">
<a className="block px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-md transition-colors truncate" href="#">
                        Server details for PRD-DB...
                    </a>
<a className="block px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-md transition-colors truncate" href="#">
                        Request Adobe CC License
                    </a>
<a className="block px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-md transition-colors truncate" href="#">
                        Status of SCTASK009213
                    </a>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-800/60">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-900/50 transition-colors cursor-pointer">
<div className="w-7 h-7 rounded bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">
                    JS
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">John Smith</span>
<span className="text-xs text-zinc-500">IT Operations</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-[#09090b]">

<header className="h-14 md:hidden flex items-center justify-between px-4 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-10">
<span className="text-base font-medium tracking-tighter text-white">ITSM.BOT</span>
<button className="text-zinc-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-3xl mx-auto space-y-8 pb-24">

<div className="flex gap-4">
<div className="w-8 h-8 flex-shrink-0 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-4">
<div className="text-sm text-zinc-300 leading-relaxed pt-1">
                            Hello! I am your automated IT Service Assistant. I can help you retrieve server information from the CMDB, find service catalog items, or check the status of your tasks.
                        </div>
<div className="text-sm text-zinc-300">
                            Here are a few things you can ask me:
                        </div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-colors">
                                "Details for server PRD-APP-01"
                            </button>
<button className="px-3 py-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-colors">
                                "I need a new monitor"
                            </button>
<button className="px-3 py-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-colors">
                                "Status of SCTASK10294"
                            </button>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 flex-shrink-0 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">
                        JS
                    </div>
<div className="flex-1">
<div className="text-sm text-zinc-200 leading-relaxed pt-1">
                            Can you get me the basic details for server <strong>SRV-PROD-DB-01</strong> from the CMDB?
                        </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 flex-shrink-0 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<div className="text-sm text-zinc-300 leading-relaxed pt-1">
                            I found the following configuration item in the CMDB:
                        </div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 max-w-lg">
<div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:server-square-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-100 tracking-tight">SRV-PROD-DB-01</span>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">Operational</span>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6">
<div>
<div className="text-xs text-zinc-500 mb-1">IP Address</div>
<div className="text-sm text-zinc-200 font-mono text-xs">10.45.192.88</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Operating System</div>
<div className="text-sm text-zinc-200">Red Hat Enterprise Linux 8</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Environment</div>
<div className="text-sm text-zinc-200">Production</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Support Group</div>
<div className="text-sm text-zinc-200">DBA Core Team</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-zinc-800/60 flex justify-end gap-2">
<button className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
<iconify-icon icon="solar:link-linear"></iconify-icon> View in ServiceNow
                                </button>
</div>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 flex-shrink-0 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">
                        JS
                    </div>
<div className="flex-1">
<div className="text-sm text-zinc-200 leading-relaxed pt-1">
                            Thanks. Also, I need to request a new laptop for a new hire starting next week.
                        </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 flex-shrink-0 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<div className="text-sm text-zinc-300 leading-relaxed pt-1">
                            You can submit a hardware request through the Service Catalog. Here is the direct link to initiate the SCTASK for new employee equipment:
                        </div>

<a className="group flex items-center gap-4 p-3 max-w-lg rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate tracking-tight">Standard Laptop Request</div>
<div className="text-xs text-zinc-500 truncate mt-0.5">Service Catalog &gt; Hardware &gt; End User Computing</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 transition-colors flex-shrink-0 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<div className="text-sm text-zinc-300 leading-relaxed pt-2">
                            Is there anything else you need help with?
                        </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09090b] via-[#09090b] to-transparent pt-10 pb-6 px-4 md:px-8">
<div className="max-w-3xl mx-auto relative">
<div className="relative flex items-end w-full border border-zinc-800/80 bg-zinc-900/50 rounded-xl overflow-hidden shadow-sm focus-within:border-zinc-600 focus-within:bg-zinc-900 transition-colors">
<button className="p-3 text-zinc-500 hover:text-zinc-300 transition-colors flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:paperclip-linear"></iconify-icon>
</button>
<textarea className="w-full max-h-32 py-3.5 px-2 bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none resize-none leading-tight" placeholder="Ask about a server, service catalog, or ticket status..." rows="1" style={{minHeight: '44px'}}></textarea>
<button className="p-2.5 m-1 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>

<div className="text-center mt-3 text-xs text-zinc-600">
                    ITSM.BOT can make mistakes. Please verify critical CMDB data within ServiceNow.
                </div>
</div>
</div>
</main>

    </>
  );
}
