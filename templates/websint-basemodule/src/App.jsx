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
      
<div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

<header className="mb-10 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
<iconify-icon className="text-xl text-gray-700" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Project Settings</h1>
<p className="text-sm text-gray-500 mt-1 font-medium">Manage your deployment and environment configurations.</p>
</div>
</header>
<div className="space-y-6">

<section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
<div className="p-6 sm:p-8">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Project Name</h2>
<p className="text-sm text-gray-500 mt-1 mb-5">Used to identify your project across the dashboard.</p>
<div className="max-w-md">
<label className="sr-only" htmlFor="project-name">Project Name</label>
<input className="block w-full rounded-lg border-0 py-2 px-3 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 transition-shadow outline-none font-medium" id="project-name" type="text" value="production-app-web"/>
</div>
</div>
<div className="bg-gray-50/50 px-6 py-4 sm:px-8 border-t border-gray-100 flex items-center justify-between">
<p className="text-sm text-gray-500">Please use 32 characters at maximum.</p>
<button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors" type="button">
                        Save
                    </button>
</div>
</section>

<section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
<div className="p-6 sm:p-8">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Deployment Environment</h2>
<p className="text-sm text-gray-500 mt-1 mb-6">Select the default environment for your automated deployments.</p>
<div className="relative max-w-md">
<button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 sm:text-sm transition-shadow" type="button">
<span className="block truncate font-medium text-gray-900">Production (Default)</span>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
<div className="p-6 sm:p-8">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">Advanced Configurations</h2>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Enable Edge Functions</h3>
<p className="text-sm text-gray-500 mt-1">Deploy serverless functions to the edge network.</p>
</div>
<button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" role="switch" type="button">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Strict Type Checking</h3>
<p className="text-sm text-gray-500 mt-1">Fail builds on TypeScript compilation warnings.</p>
</div>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" role="switch" type="button">
<span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-red-200 overflow-hidden">
<div className="p-6 sm:p-8">
<h2 className="text-lg font-semibold tracking-tight text-red-600">Delete Project</h2>
<p className="text-sm text-gray-600 mt-1 mb-5">Permanently remove your project and all of its deployments. This action cannot be undone.</p>
<button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 ring-1 ring-inset ring-red-200 hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" type="button">
                        Delete Project
                    </button>
</div>
</section>
</div>
</div>

    </>
  );
}
