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



      // Initialize Lucide Icons
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
      

<aside className="w-64 h-full flex flex-col border-r border-gray-200 bg-[#F7F7F5]/80 backdrop-blur-xl flex-shrink-0 hidden md:flex">

<div className="h-14 flex items-center px-4 sticky top-0 z-10">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-xs font-medium tracking-tighter group-hover:scale-105 transition-transform duration-200">
            A.
          </div>
<span className="font-medium text-sm tracking-tight text-gray-900">
            Arch.OS
          </span>
<i className="w-3 h-3 text-gray-400 ml-1" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 py-2 space-y-6">

<div className="space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-600 cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
<span>Search</span>
<span className="ml-auto text-[10px] text-gray-400 border border-gray-300 px-1 rounded">
              ⌘K
            </span>
</div>
<div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-600 cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="check-square"></i>
<span>Approvals</span>
<span className="ml-auto px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 text-[10px] font-medium">
              3
            </span>
</div>
<div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-600 cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="settings-2"></i>
<span>Settings</span>
</div>
</div>

<div className="space-y-1">
<h3 className="px-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
            Workspace
          </h3>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer">
<i className="w-4 h-4 text-gray-400" data-lucide="briefcase"></i>
<span className="flex-1">Projects</span>
</div>

<div className="pl-6 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1 bg-gray-200/60 rounded text-sm text-gray-900 font-medium cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span>Kyoto Residence</span>
</div>
<div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-600 cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
<span>Urban Loft V2</span>
</div>
<div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-600 cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
<span>Nordic Museum</span>
</div>
</div>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer mt-2">
<i className="w-4 h-4 text-gray-400" data-lucide="users-2"></i>
<span className="flex-1">Clients</span>
</div>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer mt-2">
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
<span className="flex-1">Team &amp; HR</span>
</div>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer">
<i className="w-4 h-4 text-gray-400" data-lucide="banknote"></i>
<span className="flex-1">Finance</span>
</div>
</div>

<div className="space-y-1">
<h3 className="px-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
            Public Presence
          </h3>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer">
<i className="w-4 h-4 text-gray-400" data-lucide="globe"></i>
<span className="flex-1">Live Portfolio</span>
<i className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100" data-lucide="external-link"></i>
</div>
<div className="group flex items-center gap-2 px-2 py-1 hover:bg-gray-200/50 rounded text-sm text-gray-700 cursor-pointer">
<i className="w-4 h-4 text-gray-400" data-lucide="pen-tool"></i>
<span className="flex-1">Content Manager</span>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-200/60">
<div className="flex items-center gap-2 p-2 rounded hover:bg-gray-200/50 cursor-pointer transition-colors">
<img alt="User" className="w-6 h-6 rounded-md shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Alex M.</span>
<span className="text-[10px] text-gray-500">Lead Architect</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-full flex flex-col relative overflow-hidden bg-white">

<header className="h-14 border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-20 glass">

<div className="flex items-center gap-2 text-sm">
<span className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
            Projects
          </span>
<span className="text-gray-300">/</span>
<span className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
            Kyoto Residence
          </span>
<span className="text-gray-300">/</span>
<div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-gray-100 text-gray-900 font-medium">
<i className="w-3.5 h-3.5" data-lucide="layout-dashboard"></i>
<span>Overview</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-500">
              +3
            </div>
</div>
<div className="h-4 w-[1px] bg-gray-200"></div>
<button className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Invite Client
          </button>
<button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10">

<div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8 relative group shadow-sm">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
<div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 text-white">
<div className="flex items-center gap-2 mb-2 opacity-80 text-xs font-medium uppercase tracking-widest">
<span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                Phase 3: Client Review
              </span>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white drop-shadow-sm">
              Kyoto Residence
            </h1>
</div>
<button className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="image"></i>
            Change Cover
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto">

<div className="md:col-span-8 space-y-8">

<div className="glass-card rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex gap-6">
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Deadline
                  </p>
<p className="text-sm font-medium text-gray-900">Oct 24, 2023</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Budget
                  </p>
<p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                    $1.2M
                    <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                      +2.4%
                    </span>
</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Client
                  </p>
<p className="text-sm font-medium text-gray-900">M. Tanaka</p>
</div>
</div>
<div className="w-full md:w-48">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-500">Progress</span>
<span className="text-gray-900 font-medium">68%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="database"></i>
                  Project Data &amp; Uploads
                </h2>
<button className="flex items-center gap-1 text-xs text-white bg-black hover:bg-gray-800 px-3 py-1.5 rounded transition-colors shadow-sm">
<i className="w-3 h-3" data-lucide="upload-cloud"></i>
                  Upload Data
                </button>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">

<div className="grid grid-cols-12 px-4 py-2 bg-gray-50/50 border-b border-gray-100 text-xs font-medium text-gray-500">
<div className="col-span-6 pl-2">Filename</div>
<div className="col-span-3">Category</div>
<div className="col-span-3 text-right pr-2">Uploaded By</div>
</div>

<div className="grid grid-cols-12 px-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors group cursor-pointer">
<div className="col-span-6 flex items-center gap-3">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded">
<i className="w-4 h-4" data-lucide="file-box"></i>
</div>
<span className="text-sm font-medium text-gray-800">
                      Site_Survey_Points_Raw.las
                    </span>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] font-medium border border-gray-200">
                      Survey Data
                    </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-400 group-hover:text-gray-600 flex items-center justify-end gap-2">
<img className="w-4 h-4 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
                    Alex M.
                  </div>
</div>

<div className="grid grid-cols-12 px-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors group cursor-pointer">
<div className="col-span-6 flex items-center gap-3">
<div className="p-1.5 bg-red-50 text-red-600 rounded">
<i className="w-4 h-4" data-lucide="file-warning"></i>
</div>
<span className="text-sm font-medium text-gray-800">
                      Safety_Compliance_Report.pdf
                    </span>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-medium border border-red-100">
                      Compliance
                    </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-400 group-hover:text-gray-600 flex items-center justify-end gap-2">
<div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-[8px]">
                      JP
                    </div>
                    Sarah J.
                  </div>
</div>

<div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-gray-50/50 transition-colors group cursor-pointer">
<div className="col-span-6 flex items-center gap-3">
<div className="p-1.5 bg-green-50 text-green-600 rounded">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<span className="text-sm font-medium text-gray-800">
                      Signed_Phase3_Approval.pdf
                    </span>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded bg-green-50 text-green-700 text-[10px] font-medium border border-green-100">
                      Client Legal
                    </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-400 group-hover:text-gray-600 flex items-center justify-end gap-2">
<i className="w-3 h-3" data-lucide="users"></i>
                    M. Tanaka
                  </div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="kanban"></i>
                  Current Sprint
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-gray-100/50 rounded-xl p-3">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span className="text-xs font-medium text-gray-500">
                      Assign &amp; Prep
                    </span>
<span className="text-xs text-gray-400 ml-auto">2</span>
</div>
<div className="space-y-2">
<div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-1.5 mb-1">
<span className="text-[10px] font-semibold text-gray-400 uppercase">
                          Manager Action
                        </span>
</div>
<p className="text-sm text-gray-800 font-medium mb-2">
                        Assign HVAC Consultant
                      </p>
<div className="flex items-center justify-between">
<i className="w-3 h-3 text-gray-400" data-lucide="user-plus"></i>
<div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-[9px]">
                          AM
                        </div>
</div>
</div>
</div>
</div>

<div className="bg-gray-100/50 rounded-xl p-3">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span className="text-xs font-medium text-gray-500">
                      Client Review
                    </span>
<span className="text-xs text-gray-400 ml-auto">1</span>
</div>
<div className="space-y-2">
<div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200/60 hover:shadow-md transition-shadow cursor-pointer ring-1 ring-blue-100">
<div className="flex items-center gap-1.5 mb-1">
<span className="text-[10px] font-semibold text-blue-600 uppercase">
                          Awaiting Approval
                        </span>
</div>
<p className="text-sm text-gray-800 font-medium mb-2">
                        Review: Kitchen Materials
                      </p>
<div className="flex items-center justify-between">
<i className="w-3 h-3 text-gray-400" data-lucide="message-circle"></i>
<span className="text-[10px] text-gray-500">
                          Sent 2h ago
                        </span>
</div>
</div>
</div>
</div>

<div className="bg-gray-100/50 rounded-xl p-3 opacity-80">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs font-medium text-gray-500">
                      Approved Phases
                    </span>
<span className="text-xs text-gray-400 ml-auto">4</span>
</div>
<div className="space-y-2">
<div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200/60 cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-semibold text-green-600 uppercase">
                          Signed Off
                        </span>
<i className="w-3 h-3 text-green-600" data-lucide="check"></i>
</div>
<p className="text-sm text-gray-700 font-medium">
                        Phase 2: Foundation
                      </p>
<div className="mt-2 flex items-center gap-1">
<img alt="Client" className="w-4 h-4 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<span className="text-[10px] text-gray-400">M. Tanaka</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-6">

<div className="glass-card rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<i className="w-24 h-24" data-lucide="trending-up"></i>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500">Q4 Revenue</h3>
<span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  Finance
                </span>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">
                $142,000
              </div>
<div className="text-xs text-gray-500 mb-6">vs. $120k target</div>

<div className="flex items-end gap-1.5 h-16 w-full mt-auto">
<div className="w-1/6 bg-gray-100 rounded-t h-[40%]"></div>
<div className="w-1/6 bg-gray-200 rounded-t h-[60%]"></div>
<div className="w-1/6 bg-gray-200 rounded-t h-[50%]"></div>
<div className="w-1/6 bg-gray-300 rounded-t h-[80%]"></div>
<div className="w-1/6 bg-gray-300 rounded-t h-[70%]"></div>
<div className="w-1/6 bg-gray-900 rounded-t h-[90%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Oct
                  </div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-gray-600">
                      Client Portal Active
                    </span>
</div>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="shield-check"></i>
</div>
<div className="bg-white rounded border border-gray-100 p-3 mb-3 shadow-sm flex items-start gap-3">
<div className="relative">
<img alt="Client" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">
                      M. Tanaka (Client)
                    </p>
<p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                      Viewed
                      <span className="font-medium text-gray-700">
                        Interior Renders
                      </span>
                      12m ago
                    </p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-white border border-gray-200 text-gray-600 text-xs py-1.5 rounded font-medium hover:border-gray-300 transition-colors">
                    Permissions
                  </button>
<button className="flex-1 bg-gray-900 text-white text-xs py-1.5 rounded font-medium hover:bg-gray-800 transition-colors">
                    View as Client
                  </button>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-5 bg-amber-50/30">
<div className="flex items-center gap-2 mb-3 text-amber-800/60">
<i className="w-4 h-4" data-lucide="sticky-note"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                  Scratchpad
                </span>
</div>
<p className="text-sm text-gray-600 leading-relaxed font-mono">
                Remember to check the zoning laws for the east wing expansion.
                Meeting with city council on Tuesday @ 10am.
              </p>
</div>
</div>
</div>
<div className="h-20"></div>

</div>
</main>


    </>
  );
}
