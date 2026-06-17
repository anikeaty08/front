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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
<div className="flex h-16 items-center border-b border-gray-100 px-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
<iconify-icon height="18" icon="lucide:folder-kanban" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">RFMS</span>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto p-4">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Dashboard
                </a>

<a className="group flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition-colors" href="#">
<iconify-icon icon="lucide:radar" strokeWidth="1.5" width="18"></iconify-icon>
                    File Tracking
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
<iconify-icon icon="lucide:files" strokeWidth="1.5" width="18"></iconify-icon>
                    All Records
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="1.5" width="18"></iconify-icon>
                    Movements
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    Departments
                </a>
</nav>
<div className="border-t border-gray-100 p-4">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
                    Settings
                </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="h-8 w-8 rounded-full bg-gray-200">
<img alt="User" className="h-full w-full rounded-full bg-gray-100 object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900">Admin User</span>
<span className="text-xs text-gray-500">Records Mgr.</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50/50">

<header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-6 backdrop-blur-sm md:px-8">
<div className="flex items-center gap-4">
<button className="text-gray-500 md:hidden">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-sm font-semibold text-gray-900">Track Record</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
<div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></div>
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="mx-auto max-w-5xl p-6 md:p-8">

<div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<label className="mb-2 block text-sm font-medium text-gray-700">Locate File</label>
<div className="relative flex items-center gap-2">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="lucide:scan-barcode" width="20"></iconify-icon>
<input className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Scan barcode or enter File ID..." type="text" value="#REC-2024-042"/>
</div>
<button className="h-11 rounded-lg bg-indigo-600 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
                            Track
                        </button>
</div>
<div className="mt-2 text-xs text-gray-500">
                        Last scanned: 2 seconds ago
                    </div>
</div>

<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
<div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Project Alpha Blueprints</h2>
<p className="text-sm text-gray-500">ID: #REC-2024-042</p>
</div>
<span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
<span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                In Transit
                            </span>
</div>

<div className="relative pl-2">

<div className="absolute left-[19px] top-2 h-full w-px bg-gray-200"></div>

<div className="relative mb-8 flex gap-4">
<div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-white bg-amber-100 text-amber-600 shadow-sm ring-1 ring-amber-500">
<iconify-icon icon="lucide:truck" width="18"></iconify-icon>
</div>
<div className="flex flex-1 flex-col rounded-lg border border-amber-100 bg-amber-50/50 p-4">
<div className="flex justify-between">
<h3 className="text-sm font-semibold text-gray-900">In Transit</h3>
<span className="text-xs font-medium text-amber-600">Now</span>
</div>
<p className="mt-1 text-sm text-gray-600">Courier assigned: Express Logistics. Expected delivery to Legal Dept by 2:00 PM.</p>
</div>
</div>

<div className="relative mb-8 flex gap-4">
<div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-indigo-600 shadow-sm">
<iconify-icon icon="lucide:check" width="18"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between">
<h3 className="text-sm font-semibold text-gray-900">Checked Out from Engineering</h3>
<span className="text-xs text-gray-500">Today, 09:30 AM</span>
</div>
<p className="mt-1 text-xs text-gray-500">Authorized by: <span className="font-medium text-gray-700">Sarah Jenkins</span></p>
<p className="mt-1 text-xs text-gray-500">Reason: <span className="italic">Audit Review</span></p>
</div>
</div>

<div className="relative mb-8 flex gap-4">
<div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-white bg-gray-100 text-gray-500 shadow-sm">
<iconify-icon icon="lucide:archive" width="18"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between">
<h3 className="text-sm font-medium text-gray-900">Stored in Archive Room B</h3>
<span className="text-xs text-gray-500">Nov 12, 2023</span>
</div>
<p className="mt-1 text-xs text-gray-500">Shelf: A-12, Box: 04</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-white bg-gray-100 text-gray-500 shadow-sm">
<iconify-icon icon="lucide:file-plus" width="18"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between">
<h3 className="text-sm font-medium text-gray-900">File Created</h3>
<span className="text-xs text-gray-500">Nov 10, 2023</span>
</div>
<p className="mt-1 text-xs text-gray-500">Origin: Engineering Dept.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<h3 className="mb-4 text-sm font-semibold text-gray-900">File Details</h3>
<div className="space-y-4">
<div>
<p className="text-xs font-medium text-gray-500">Classification</p>
<div className="mt-1 flex items-center gap-2 text-sm text-gray-900">
<iconify-icon className="text-red-500" icon="lucide:shield-alert" width="16"></iconify-icon>
                                        Confidential
                                    </div>
</div>
<div className="h-px w-full bg-gray-100"></div>
<div>
<p className="text-xs font-medium text-gray-500">Physical Type</p>
<div className="mt-1 text-sm text-gray-900">Box Folder (A4)</div>
</div>
<div className="h-px w-full bg-gray-100"></div>
<div>
<p className="text-xs font-medium text-gray-500">Owner Department</p>
<div className="mt-1 flex items-center gap-2 text-sm text-gray-900">
<div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                        Engineering
                                    </div>
</div>
<div className="h-px w-full bg-gray-100"></div>
<div>
<p className="text-xs font-medium text-gray-500">Retention Policy</p>
<div className="mt-1 text-sm text-gray-900">Keep until 2030</div>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<h3 className="mb-4 text-sm font-semibold text-gray-900">Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
<iconify-icon icon="lucide:arrow-right-circle" width="14"></iconify-icon>
                                    Check In
                                </button>
<button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
<iconify-icon icon="lucide:edit-2" width="14"></iconify-icon>
                                    Edit Info
                                </button>
<button className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-transparent bg-indigo-50 py-2 text-xs font-medium text-indigo-700 hover:bg-indigo-100">
<iconify-icon icon="lucide:printer" width="14"></iconify-icon>
                                    Print Label / Barcode
                                </button>
<button className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-transparent bg-red-50 py-2 text-xs font-medium text-red-700 hover:bg-red-100">
<iconify-icon icon="lucide:alert-triangle" width="14"></iconify-icon>
                                    Report Lost
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
