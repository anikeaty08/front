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



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
}
},
fontSize: {
xxs: '0.625rem',
}
}
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
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-14 flex items-center px-5 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-semibold text-xs tracking-tighter">
                    A
                </div>
<span className="font-medium text-sm tracking-tight text-zinc-900">AtsUi<span className="text-zinc-400">.locales</span></span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-2 pb-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="lucide:layout-dashboard" width="16"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="lucide:layers" width="16"></iconify-icon>
                Projects
            </a>
<div className="mt-6 px-2 pb-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Localization</div>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm bg-zinc-100 text-zinc-900 font-medium rounded-md" href="#">
<iconify-icon className="text-indigo-600" icon="lucide:languages" width="16"></iconify-icon>
                Translations
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="lucide:git-pull-request" width="16"></iconify-icon>
                Approvals
                <span className="ml-auto bg-indigo-100 text-indigo-700 py-0.5 px-1.5 rounded text-xs font-semibold">4</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="lucide:history" width="16"></iconify-icon>
                Version History
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="lucide:file-warning" width="16"></iconify-icon>
                Duplicates
            </a>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-700 text-xs font-semibold ring-2 ring-white shadow-sm">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Lead Engineer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white md:bg-zinc-50">

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-500">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-sm">
<span className="text-zinc-500">Organization:</span>
<button className="flex items-center gap-2 px-2 py-1 hover:bg-zinc-50 rounded-md text-zinc-900 font-medium transition-colors border border-transparent hover:border-zinc-200">
<div className="w-4 h-4 bg-indigo-600 rounded-[3px]"></div>
                        ATS Core
                        <iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<span className="text-zinc-300">/</span>
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-md text-xs font-medium border border-zinc-200">v2.4.0-beta</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
<iconify-icon icon="lucide:check-circle-2" width="14"></iconify-icon>
                    Up to date
                </div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-zinc-900 text-white rounded hover:bg-zinc-800 transition-colors shadow-sm font-medium">
<iconify-icon icon="lucide:cloud-upload" width="14"></iconify-icon>
<span>Publish Release</span>
</button>
</div>
</header>

<div className="bg-white border-b border-zinc-200 px-4 sm:px-6 py-4">
<div className="flex flex-col gap-4">

<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">

<div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
<div className="relative group">
<label className="block text-xxs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Project</label>
<button className="flex items-center justify-between w-40 gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-md shadow-sm text-sm text-zinc-700 hover:border-indigo-300 hover:ring-2 hover:ring-indigo-500/10 transition-all text-left">
<span className="truncate">Candidate Portal</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<span className="text-zinc-300 mt-5 hidden sm:inline-block">/</span>
<div className="relative group">
<label className="block text-xxs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Module</label>
<button className="flex items-center justify-between w-40 gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-md shadow-sm text-sm text-zinc-700 hover:border-indigo-300 hover:ring-2 hover:ring-indigo-500/10 transition-all text-left">
<span className="truncate">Onboarding</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<span className="text-zinc-300 mt-5 hidden sm:inline-block">/</span>
<div className="relative group">
<label className="block text-xxs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Screen</label>
<button className="flex items-center justify-between w-40 gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-md shadow-sm text-sm text-zinc-900 font-medium hover:border-indigo-300 hover:ring-2 hover:ring-indigo-500/10 transition-all text-left">
<span className="flex items-center gap-2 truncate">
<iconify-icon className="text-indigo-600" icon="lucide:layout-template" width="14"></iconify-icon>
                                        All Screens
                                    </span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="h-8 w-px bg-zinc-200 mx-2 mt-5 hidden lg:block"></div>

<div className="flex items-end gap-2 w-full lg:w-auto">
<div className="relative group flex-1 lg:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" icon="lucide:search" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 w-full transition-all" placeholder="Search keys or strings..." type="text"/>
</div>
<button className="px-3 py-2 bg-white border border-zinc-200 text-zinc-600 rounded shadow-sm hover:bg-zinc-50 text-sm font-medium flex items-center gap-2" title="Import JSON/CSV">
<iconify-icon icon="lucide:upload" width="14"></iconify-icon>
<span className="hidden sm:inline">Import</span>
</button>
<button className="px-3 py-2 bg-white border border-zinc-200 text-zinc-600 rounded shadow-sm hover:bg-zinc-50 text-sm font-medium flex items-center gap-2" title="Export JSON/CSV">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
<span className="hidden sm:inline">Export</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto p-4 sm:p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-12 gap-4 px-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">
<div className="col-span-3">Key &amp; Usage</div>
<div className="col-span-4">English (Source)</div>
<div className="col-span-4">Japanese (Target)</div>
<div className="col-span-1 text-right">Workflow</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3 px-1">
<div className="p-1 bg-indigo-50 rounded text-indigo-600">
<iconify-icon icon="lucide:rocket" width="14"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Onboarding Flow</h3>
<span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs font-medium">3 keys</span>
<div className="h-px bg-zinc-200 flex-1 ml-4"></div>
</div>
<div className="space-y-3">

<div className="group bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-4 items-start">
<div className="col-span-12 md:col-span-3 flex flex-col gap-1.5 pr-2">
<div className="flex items-center gap-2">
<span className="font-mono text-xs font-medium text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded w-fit">onboarding.welcome</span>
</div>
<div className="flex items-center gap-1.5 group/usage cursor-pointer">
<iconify-icon className="text-zinc-400" icon="lucide:file-code" width="12"></iconify-icon>
<div className="text-xs text-zinc-500 hover:text-indigo-600 transition-colors">screens/Onboarding/Welcome.tsx</div>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-medium border border-indigo-100">Used in 1 place</span>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none leading-relaxed" rows="2">Welcome to the team! We are excited to have you.</textarea>
</div>
<div className="col-span-12 md:col-span-4 relative">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none leading-relaxed" rows="2">チームへようこそ！一緒に働けることを楽しみにしています。</textarea>
</div>
<div className="col-span-12 md:col-span-1 flex flex-col items-end gap-2 pt-1">
<div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-100">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
                                        Approved
                                    </div>
<button className="text-zinc-400 hover:text-zinc-600" title="View History">
<iconify-icon icon="lucide:history" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-amber-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
<div className="grid grid-cols-12 gap-4 p-4 items-start">
<div className="col-span-12 md:col-span-3 flex flex-col gap-1.5 pr-2">
<span className="font-mono text-xs font-medium text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded w-fit">onboarding.step_1.title</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:file-code" width="12"></iconify-icon>
<div className="text-xs text-zinc-500">screens/Onboarding/StepOne.tsx</div>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded font-medium border border-zinc-200">Used in 2 places</span>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none" rows="1">Personal Details</textarea>
</div>
<div className="col-span-12 md:col-span-4 relative">
<textarea className="w-full text-sm text-zinc-800 bg-amber-50/50 border border-dashed border-amber-300 rounded p-1.5 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 resize-none placeholder:text-amber-400/70" placeholder="Enter translation..." rows="1"></textarea>
</div>
<div className="col-span-12 md:col-span-1 flex flex-col items-end gap-2 pt-1">
<div className="flex items-center gap-1.5 px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-medium border border-amber-100">
<iconify-icon icon="lucide:alert-circle" width="12"></iconify-icon>
                                        Missing
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-2">
<div className="flex items-center gap-2 mb-3 px-1">
<div className="p-1 bg-purple-50 rounded text-purple-600">
<iconify-icon icon="lucide:alert-triangle" width="14"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Consistency Check</h3>
<span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium">1 Duplicate</span>
<div className="h-px bg-zinc-200 flex-1 ml-4"></div>
</div>
<div className="space-y-3">

<div className="group bg-white border border-red-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-4 items-start relative">

<div className="col-span-12 bg-red-50 -mx-4 -mt-4 mb-4 px-4 py-1.5 flex items-center justify-between border-b border-red-100">
<div className="flex items-center gap-2 text-xs text-red-700 font-medium">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon>
                                        Duplicate value detected with key: <span className="font-mono bg-red-100 px-1 rounded">common.btn.save</span>
</div>
<button className="text-xs text-red-600 hover:text-red-800 underline">Merge Keys</button>
</div>
<div className="col-span-12 md:col-span-3 flex flex-col gap-1.5 pr-2">
<span className="font-mono text-xs font-medium text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded w-fit">profile.save_changes</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:file-code" width="12"></iconify-icon>
<div className="text-xs text-zinc-500">screens/Profile/Settings.tsx</div>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none" rows="1">Save Changes</textarea>
</div>
<div className="col-span-12 md:col-span-4 relative">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none" rows="1">変更内容を保存</textarea>
</div>
<div className="col-span-12 md:col-span-1 flex flex-col items-end gap-2 pt-1">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium border border-zinc-200">
                                        Review
                                    </div>
<button className="text-zinc-400 hover:text-zinc-600" title="View History">
<iconify-icon icon="lucide:history" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="pt-2">
<div className="flex items-center gap-2 mb-3 px-1">
<div className="p-1 bg-zinc-100 rounded text-zinc-600">
<iconify-icon icon="lucide:git-pull-request" width="14"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Pending Review</h3>
<div className="h-px bg-zinc-200 flex-1 ml-4"></div>
</div>
<div className="space-y-3">
<div className="group bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-4 items-start">
<div className="col-span-12 md:col-span-3 flex flex-col gap-1.5 pr-2">
<span className="font-mono text-xs font-medium text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded w-fit">ui.button.submit</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:file-code" width="12"></iconify-icon>
<div className="text-xs text-zinc-500">ui/Button.tsx</div>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-medium border border-indigo-100">Used in 12 places</span>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none" rows="1">Submit Application</textarea>
</div>
<div className="col-span-12 md:col-span-4 relative">
<textarea className="w-full text-sm text-zinc-800 bg-transparent border-none p-0 focus:ring-0 resize-none" rows="1">アプリケーションを送信</textarea>
<div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:user" width="10"></iconify-icon>
                                        Translated by Sarah 2h ago
                                    </div>
</div>
<div className="col-span-12 md:col-span-1 flex flex-col items-end gap-2 pt-1">
<div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100">
                                        In Review
                                    </div>
<div className="flex gap-2">
<button className="text-green-600 hover:text-green-700 bg-green-50 p-1 rounded" title="Approve">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</button>
<button className="text-red-600 hover:text-red-700 bg-red-50 p-1 rounded" title="Reject">
<iconify-icon icon="lucide:x" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-zinc-200 px-6 py-3 flex items-center justify-between z-10">
<div className="text-xs text-zinc-500 flex items-center gap-2">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
<span>Changes will be applied to <span className="font-semibold text-zinc-700">Candidate Portal / v2.4.0</span></span>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 font-medium transition-colors">Discard</button>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded shadow-sm shadow-indigo-200 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:save" width="14"></iconify-icon>
                    Save Changes
                </button>
</div>
</div>
</main>

    </>
  );
}
