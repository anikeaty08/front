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
      

<aside className="w-64 bg-white border-r border-slate-200/70 hidden md:flex flex-col justify-between h-full z-20 shrink-0">
<div className="p-4">

<div className="flex items-center gap-3 px-2 mb-8 mt-2">
<div className="w-8 h-8 bg-slate-900 text-white rounded-md flex items-center justify-center font-medium text-sm tracking-tight shadow-sm ring-1 ring-slate-900/5">
                    P
                </div>
<span className="font-medium text-sm tracking-tight text-slate-900">Platform Kit</span>
<div className="ml-auto">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:double-alt-arrow-left-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:home-smile-linear" width="18"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Team
                </a>
<div className="pt-4 pb-2">
<p className="px-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Configuration</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    Security
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm bg-slate-50 text-slate-900 font-medium rounded-md transition-all shadow-sm ring-1 ring-slate-200/60" href="#">
<iconify-icon className="text-slate-900" icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:card-linear" width="18"></iconify-icon>
                    Billing
                </a>
</nav>
</div>
<div className="p-4 border-t border-slate-200/70">
<button className="flex items-center gap-3 w-full px-2 py-1.5 hover:bg-slate-50 rounded-md transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-100 to-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 shadow-sm">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Jane Doe</span>
<span className="text-[11px] text-slate-500">jane@example.com</span>
</div>
<iconify-icon className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">

<header className="h-16 border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-6 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">

<button className="md:hidden text-slate-500 hover:text-slate-900 -ml-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm text-slate-500 overflow-hidden whitespace-nowrap mask-linear-fade">
<span className="hover:text-slate-800 cursor-pointer transition-colors hidden sm:inline">jdoe-org</span>
<span className="text-slate-300 hidden sm:inline">/</span>
<span className="hover:text-slate-800 cursor-pointer transition-colors">platform-kit</span>
<span className="text-slate-300">/</span>
<span className="font-medium text-slate-900">Settings</span>
</div>
</div>
<div className="flex items-center gap-3 md:gap-4 pl-4">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Docs</a>
<div className="hidden sm:block h-4 w-[1px] bg-slate-200"></div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">Feedback</a>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10 space-y-10 md:space-y-12 pb-24">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/70 pb-6 gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1.5">Project Settings</h1>
<p className="text-sm text-slate-500">Manage your project configuration and deployment preferences.</p>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
<div className="md:col-span-1">
<label className="text-sm font-medium text-slate-900 block mb-1" htmlFor="projectName">Project Name</label>
<p className="text-xs text-slate-500 leading-relaxed">This will be used to identify your project in the dashboard and URLs.</p>
</div>
<div className="md:col-span-2">
<div className="flex gap-0 shadow-sm rounded-md transition-shadow group focus-within:ring-2 focus-within:ring-slate-100 focus-within:ring-offset-1">
<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">
                                vercel.app/
                            </span>
<input className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-all" id="projectName" placeholder="my-project" type="text" value="platform-kit-v2"/>
</div>
</div>
</section>
<div className="h-[1px] w-full bg-slate-100"></div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
<div className="md:col-span-1">
<label className="text-sm font-medium text-slate-900 block mb-1">Framework</label>
<p className="text-xs text-slate-500 leading-relaxed">We'll automatically detect optimal build settings for your framework.</p>
</div>
<div className="md:col-span-2">
<div className="relative group">
<select className="appearance-none w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-1 focus:border-slate-300 block p-2.5 pr-8 transition-all cursor-pointer hover:border-slate-300 hover:bg-slate-50/50">
<option>Next.js</option>
<option>React</option>
<option>Vue.js</option>
<option>Svelte</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-start gap-2.5 p-3 bg-blue-50/50 border border-blue-100/80 rounded-md text-blue-700">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs leading-5">The Output Directory has been automatically set to <code className="bg-blue-100/50 px-1 py-0.5 rounded text-blue-800 font-medium">.next</code>.</p>
</div>
</div>
</section>
<div className="h-[1px] w-full bg-slate-100"></div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
<div className="md:col-span-1">
<label className="text-sm font-medium text-slate-900 block mb-1">Root Directory</label>
<p className="text-xs text-slate-500 leading-relaxed">The directory within your project to locate the source code.</p>
</div>
<div className="md:col-span-2">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-slate-600 transition-colors" icon="solar:folder-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 px-3 py-2 border border-slate-200 rounded-md bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-1 focus:border-slate-300 transition-all hover:border-slate-300" type="text" value="./"/>
</div>
</div>
</section>
<div className="h-[1px] w-full bg-slate-100"></div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
<div className="md:col-span-1">
<label className="text-sm font-medium text-slate-900 block mb-1">Git Integration</label>
<p className="text-xs text-slate-500 leading-relaxed">Trigger deployments when you push to your Git repository.</p>
</div>
<div className="md:col-span-2 space-y-4">
<div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#24292e] text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Connected to GitHub</p>
<p className="text-xs text-slate-500">jdoe-org/platform-kit</p>
</div>
</div>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 transition-all">
                                Disconnect
                            </button>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Deploy on Push</span>
<span className="text-xs text-slate-500 mt-0.5">Automatically deploy when changes are pushed.</span>
</div>

<label className="inline-flex relative items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-100 peer-focus:ring-offset-1 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900 transition-colors"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Comments</span>
<span className="text-xs text-slate-500 mt-0.5">Allow comments on previews.</span>
</div>

<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-100 peer-focus:ring-offset-1 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900 transition-colors"></div>
</label>
</div>
</div>
</section>

<div className="sticky bottom-4 md:bottom-8 z-20 flex items-center justify-end gap-3 pt-6 pointer-events-none">
<div className="pointer-events-auto flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-slate-200 shadow-lg shadow-slate-200/50">
<button className="px-4 py-2 text-sm font-medium text-slate-600 bg-transparent rounded-md hover:bg-slate-100 hover:text-slate-900 transition-all">
                            Cancel
                        </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2 group">
<iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:disk-linear" width="16"></iconify-icon>
<span>Save Changes</span>
</button>
</div>
</div>

<div className="pt-6 mt-4 border-t border-slate-200">
<h3 className="text-sm font-medium text-red-600 mb-6">Danger Zone</h3>
<div className="border border-red-200 rounded-lg overflow-hidden">
<div className="p-4 bg-red-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<h4 className="text-sm font-medium text-slate-900">Delete Project</h4>
<p className="text-xs text-slate-500 mt-1 max-w-sm">The project will be permanently deleted, including all deployments and domains. This action is irreversible.</p>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-red-700 bg-white border border-red-200 hover:border-red-300 hover:bg-red-50 hover:text-red-800 rounded-md transition-all shadow-sm whitespace-nowrap">
                                Delete Project
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
