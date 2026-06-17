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
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
<div className="flex h-16 items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white">
<span className="text-xs font-semibold tracking-tighter">N</span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">NEXUS</span>
</div>
</div>
<nav className="flex-1 space-y-0.5 px-3 py-4">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="layout-grid"></i>
                    Overview
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="ticket"></i>
                    Tickets
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-900" data-lucide="users"></i>
                    Clients
                </a>
<div className="my-2 border-t border-gray-100"></div>
<a className="group flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-colors" href="#">
<i className="h-4 w-4 text-gray-500 group-hover:text-gray-900" data-lucide="settings-2"></i>
                    Settings
                </a>
</nav>
<div className="border-t border-gray-200 p-4">
<div className="flex items-center gap-3 px-2 py-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Admin User</span>
<span className="text-[10px] text-gray-400">admin@nexus.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50">

<header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white">
<span className="text-xs font-semibold tracking-tighter">N</span>
</div>
<span className="text-sm font-semibold tracking-tight">NEXUS</span>
</div>
<button className="text-gray-500">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</header>
<div className="mx-auto max-w-4xl px-4 py-8 md:px-8">

<div className="mb-8">
<h1 className="text-xl font-medium tracking-tight text-gray-900">System Settings</h1>
<p className="mt-1 text-sm text-gray-500">Manage database connections and registration protocols.</p>
</div>

<div className="mb-6 flex items-center gap-6 border-b border-gray-200 text-sm">
<button className="border-b-2 border-gray-900 pb-3 font-medium text-gray-900">General</button>
<button className="border-b-2 border-transparent pb-3 font-medium text-gray-500 hover:text-gray-900">Billing</button>
<button className="border-b-2 border-transparent pb-3 font-medium text-gray-500 hover:text-gray-900">Notifications</button>
<button className="border-b-2 border-transparent pb-3 font-medium text-gray-500 hover:text-gray-900">API &amp; Webhooks</button>
</div>
<div className="space-y-6">

<div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
<div className="border-b border-gray-100 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-gray-50">
<i className="h-4 w-4 text-emerald-600" data-lucide="database"></i>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Supabase Integration</h3>
<p className="mt-0.5 text-xs text-gray-500">Connect your Supabase project for data and auth.</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                    Connected
                                </div>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="col-span-1 md:col-span-2">
<label className="mb-1.5 block text-xs font-medium text-gray-700">Project URL</label>
<div className="relative">
<input className="block w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 pr-10 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white focus:ring-0" readonly="" type="text" value="https://xkqjlwzmnpqrstuvwxyz.supabase.co"/>
<button className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600">
<i className="h-4 w-4" data-lucide="copy"></i>
</button>
</div>
<p className="mt-1.5 text-[11px] text-gray-400">Environment variable: <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-gray-600">NEXT_PUBLIC_SUPABASE_URL</code></p>
</div>
<div>
<label className="mb-1.5 block text-xs font-medium text-gray-700">Anon Public Key</label>
<div className="relative">
<input className="block w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 pr-10 text-sm text-gray-600 outline-none focus:border-gray-400 focus:bg-white focus:ring-0" readonly="" type="password" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."/>
<button className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
<p className="mt-1.5 text-[11px] text-gray-400">Safe for client-side use.</p>
</div>
<div>
<label className="mb-1.5 block text-xs font-medium text-gray-700">Service Role Secret</label>
<div className="relative">
<input className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-0" type="password" value="sk_test_..."/>
<button className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600">
<i className="h-4 w-4" data-lucide="eye-off"></i>
</button>
</div>
<p className="mt-1.5 text-[11px] text-red-500/80">Never expose this on the client.</p>
</div>
<div className="col-span-1 md:col-span-2">
<div className="my-2 border-t border-gray-100"></div>
</div>
<div className="col-span-1 md:col-span-2">
<div className="flex items-center justify-between mb-4">
<div>
<label className="text-sm font-medium text-gray-900">Connection Pooling (Supavisor)</label>
<p className="text-xs text-gray-500">Use transaction mode for serverless environments.</p>
</div>
<div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block h-5 w-5 appearance-none rounded-full border border-gray-300 bg-white checked:right-0 checked:border-gray-900 outline-none ring-0 transition-all duration-200 cursor-pointer" id="toggle-pool" name="toggle" type="checkbox" />
<label className="toggle-label block h-5 overflow-hidden rounded-full bg-gray-200 checked:bg-gray-900 cursor-pointer" htmlFor="toggle-pool"></label>
</input></div>
</div>
<div className="rounded-md border border-gray-200 bg-gray-50 p-3">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction String</span>
<span className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium text-gray-600">Port 6543</span>
</div>
<code className="block w-full break-all font-mono text-xs text-gray-600">postgres://postgres.xkqjlwzmnpqrstuvwxyz:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres</code>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
<button className="rounded-md px-3 py-2 text-xs font-medium text-gray-500 hover:text-gray-900">Test Connection</button>
<button className="rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800 shadow-sm transition-all">Save Configuration</button>
</div>
</div>
</div>

<div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
<div className="border-b border-gray-100 px-6 py-4">
<h3 className="text-sm font-medium text-gray-900">Access Control</h3>
<p className="mt-0.5 text-xs text-gray-500">Configure how users access the application via Supabase Auth.</p>
</div>
<div className="p-6">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-medium text-gray-900">Public Registration</div>
<div className="text-xs text-gray-500">Allow users to sign up via the public auth endpoint.</div>
</div>
<div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
<input className="toggle-checkbox absolute block h-5 w-5 appearance-none rounded-full border border-gray-300 bg-white outline-none ring-0 transition-all duration-200 cursor-pointer" id="toggle-reg" name="toggle" type="checkbox" />
<label className="toggle-label block h-5 overflow-hidden rounded-full bg-gray-200 cursor-pointer" htmlFor="toggle-reg"></label>
</input></div>
</div>
<div className="mt-6 flex items-start justify-between">
<div>
<div className="text-sm font-medium text-gray-900">Organization Domain Enforcement</div>
<div className="text-xs text-gray-500">Restrict authentication to specific email domains only.</div>
</div>
<div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block h-5 w-5 appearance-none rounded-full border-gray-300 bg-white checked:right-0 checked:border-gray-900 outline-none ring-0 transition-all duration-200 cursor-pointer" id="toggle-domain" name="toggle" type="checkbox" />
<label className="toggle-label block h-5 overflow-hidden rounded-full bg-gray-200 checked:bg-gray-900 cursor-pointer" htmlFor="toggle-domain"></label>
</input></div>
</div>

<div className="mt-4">
<label className="mb-1.5 block text-xs font-medium text-gray-700">Whitelisted Domains</label>
<div className="flex flex-wrap gap-2 rounded-md border border-gray-200 bg-white p-2 focus-within:border-gray-400 shadow-sm">
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                        acme.com
                                        <button className="ml-1 text-gray-400 hover:text-gray-600"><i className="h-3 w-3" data-lucide="x"></i></button>
</span>
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                        nexus.inc
                                        <button className="ml-1 text-gray-400 hover:text-gray-600"><i className="h-3 w-3" data-lucide="x"></i></button>
</span>
<input className="min-w-[100px] flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400" placeholder="Add domain..." type="text"/>
</div>
</div>
</div>
</div>

<div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
<div className="border-b border-gray-100 px-6 py-4">
<h3 className="text-sm font-medium text-gray-900">Manual Invitation</h3>
<p className="mt-0.5 text-xs text-gray-500">Triggers a Supabase magic link invitation.</p>
</div>
<div className="bg-gray-50 px-6 py-6">
<div className="flex gap-4">
<div className="flex-1">
<label className="sr-only">Email address</label>
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" data-lucide="mail"></i>
<input className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-9 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-0 shadow-sm" placeholder="client@company.com" type="email"/>
</div>
</div>
<div className="w-40">
<select className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-0 shadow-sm">
<option>Viewer</option>
<option>Editor</option>
<option>Admin</option>
</select>
</div>
<button className="rounded-md bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-colors">
                                    Send Magic Link
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
