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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col shrink-0">
<div className="h-14 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
<span className="text-base font-semibold tracking-tighter">PRJCT</span>
</div>
<nav className="p-4 space-y-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                General
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Team
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                Security
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
                Billing
            </a>
</nav>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-y-auto">
<header className="h-14 flex items-center px-6 md:px-10 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0">
<h1 className="text-xl font-semibold tracking-tight">Settings</h1>
</header>
<div className="p-6 md:p-10 max-w-4xl w-full">

<section className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm mb-8 overflow-hidden">
<div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
<h2 className="text-lg font-medium tracking-tight mb-1 text-zinc-900 dark:text-zinc-100">Project Name</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Used to identify your project across the dashboard and deployments.</p>
<input className="w-full max-w-md bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all placeholder:text-zinc-400" type="text" value="production-app"/>
</div>
<div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<span className="text-sm text-zinc-500 dark:text-zinc-400">Maximum 32 characters.</span>
<button className="bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                        Save Changes
                    </button>
</div>
</section>

<section className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm mb-8 overflow-hidden">
<div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
<h2 className="text-lg font-medium tracking-tight mb-1 text-zinc-900 dark:text-zinc-100">Root Directory</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">The directory within your project that contains your source code.</p>
<div className="flex items-center gap-2 w-full max-w-md">
<div className="flex-1 flex items-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm">
<iconify-icon className="text-zinc-400 mr-2 text-base" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900 dark:text-zinc-100">/src/app</span>
</div>
<button className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                            Edit
                        </button>
</div>
</div>
</section>

<section className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
<div className="p-6 flex flex-col gap-6">

<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 mb-0.5">Production Branch Protection</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Require reviews and status checks before merging.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-zinc-900 dark:peer-checked:bg-zinc-100"></div>
</label>
</div>
<div className="w-full h-px bg-zinc-200 dark:bg-zinc-800"></div>

<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 mb-0.5">Automated Previews</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Automatically generate preview environments for pull requests.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-zinc-900 dark:peer-checked:bg-zinc-100"></div>
</label>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
