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
      

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 lg:px-6 shrink-0 bg-neutral-950/80 backdrop-blur-md z-20">
<div className="flex items-center gap-6">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black font-semibold tracking-tighter text-sm">
                    PR
                </div>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Propulsion</span>
</div>

<div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
<span className="text-neutral-600">/</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">acme-corp</span>
<span className="text-neutral-600">/</span>
<span className="text-neutral-200">platform-v2</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-neutral-900 border border-neutral-800 rounded-md py-1.5 pl-9 pr-3 text-xs text-neutral-300 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 w-64 transition-all" placeholder="Search..." type="text"/>
</div>
<button className="w-8 h-8 rounded-md hover:bg-neutral-900 flex items-center justify-center border border-transparent hover:border-neutral-800 transition-all text-neutral-400 hover:text-white relative">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-700 ring-2 ring-neutral-950"></div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<main className="flex-1 overflow-y-auto relative">
<div className="max-w-5xl mx-auto p-6 lg:p-10 pb-20">

<div className="flex flex-col gap-4 mb-10">
<div className="flex items-start justify-between">
<div>
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">Platform Migration</h1>
<p className="text-neutral-500 text-sm max-w-2xl">
                                Updating the core infrastructure to support edge functions and distributed database sharding. Targeted for Q3 release.
                            </p>
</div>
<div className="flex gap-2">
<button className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-medium px-3 py-1.5 rounded-md transition-colors flex items-center gap-2">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon>
                                Edit
                            </button>
<button className="bg-white hover:bg-neutral-200 text-black text-xs font-medium px-3 py-1.5 rounded-md transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                Deploy
                            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500">Total Deployments</span>
<iconify-icon className="text-neutral-600" icon="solar:rocket-linear" width="16"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1,204</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
                            +12% this week
                        </div>
</div>
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500">Success Rate</span>
<iconify-icon className="text-neutral-600" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">99.8%</div>
<div className="text-xs text-neutral-500 mt-1">Stable performance</div>
</div>
<div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500">Avg Duration</span>
<iconify-icon className="text-neutral-600" icon="solar:stopwatch-linear" width="16"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">42s</div>
<div className="text-xs text-neutral-500 mt-1">-5s improvement</div>
</div>
</div>

<div className="mb-2 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Recent Activity</h2>
<button className="text-xs text-neutral-500 hover:text-white transition-colors">View all</button>
</div>
<div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/20">

<div className="group flex items-center justify-between p-4 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-neutral-700">
<iconify-icon icon="solar:git-commit-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-200 font-medium">Update configuration schema</div>
<div className="text-xs text-neutral-500">committed by <span className="text-neutral-400">alex-dev</span></div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">7f3a2b</span>
<span className="text-xs text-neutral-500">2h ago</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-900/20 flex items-center justify-center text-green-500 border border-green-900/30">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-200 font-medium">Production deployment successful</div>
<div className="text-xs text-neutral-500">automatic trigger</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-xs bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-400">v2.1.0</span>
<span className="text-xs text-neutral-500">5h ago</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-neutral-700">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-200 font-medium">Commented on PR #42</div>
<div className="text-xs text-neutral-500">sarah-design requested changes</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-xs text-neutral-500">1d ago</span>
</div>
</div>
</div>
<div className="h-10"></div> 

<div className="mb-2 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Environment Variables</h2>
</div>
<div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-400 relative group">
<button className="absolute top-3 right-3 p-1.5 rounded hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
</button>
<div className="flex gap-4">
<span className="text-blue-400 select-none">1</span>
<span>NEXT_PUBLIC_API_URL=<span className="text-orange-300">"https://api.propulsion.dev/v1"</span></span>
</div>
<div className="flex gap-4">
<span className="text-blue-400 select-none">2</span>
<span>DATABASE_REGION=<span className="text-orange-300">"us-east-1"</span></span>
</div>
<div className="flex gap-4">
<span className="text-blue-400 select-none">3</span>
<span className="text-neutral-600"># Keys are hidden in read-only mode</span>
</div>
</div>
</div>
</main>

<aside className="w-80 border-l border-neutral-800 bg-neutral-950 hidden lg:flex flex-col overflow-y-auto">
<div className="p-6 flex flex-col gap-8">

<div className="flex flex-col gap-4">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Status</h3>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:flag-linear" width="16"></iconify-icon>
                            Priority
                        </div>
<div className="px-2 py-0.5 rounded border border-orange-900/30 bg-orange-900/10 text-orange-400 text-xs font-medium">
                            High
                        </div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:user-circle-linear" width="16"></iconify-icon>
                            Assignee
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
<div className="w-5 h-5 rounded-full bg-neutral-700"></div>
<span className="text-xs text-neutral-400 hover:text-white transition-colors">dave_c</span>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:calendar-linear" width="16"></iconify-icon>
                            Due Date
                        </div>
<span className="text-xs text-neutral-400">Oct 24, 2023</span>
</div>
</div>
<div className="h-px bg-neutral-800 w-full"></div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Tags</h3>
<iconify-icon className="text-neutral-500 hover:text-white cursor-pointer transition-colors" icon="solar:add-circle-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 hover:border-neutral-700 cursor-default transition-colors">frontend</span>
<span className="px-2 py-1 rounded-md border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 hover:border-neutral-700 cursor-default transition-colors">optimization</span>
<span className="px-2 py-1 rounded-md border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 hover:border-neutral-700 cursor-default transition-colors">v2-beta</span>
</div>
</div>
<div className="h-px bg-neutral-800 w-full"></div>

<div className="flex flex-col gap-4">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Notifications</h3>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-neutral-300">Push on deploy</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-200 peer-checked:after:bg-black"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-neutral-300">Email digest</span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-200 peer-checked:after:bg-black"></div>
</div>
</label>
</div>
<div className="h-px bg-neutral-800 w-full"></div>

<div className="flex flex-col gap-2 mt-auto">
<a className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon>
                        Documentation
                    </a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:bug-linear" width="14"></iconify-icon>
                        Report a bug
                    </a>
</div>
</div>
</aside>
</div>

    </>
  );
}
