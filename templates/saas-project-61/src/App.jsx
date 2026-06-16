import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white font-semibold text-xs tracking-tighter">
                AC
            </div>
<span className="font-medium text-sm tracking-tight text-gray-900">Acme Corp</span>
</div>
<button className="text-gray-500">
<iconify-icon height="20" icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex w-64 bg-[#FBFBFC] border-r border-gray-200/75 flex-col justify-between h-screen sticky top-0">
<div className="p-4 space-y-6">

<div className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-gray-100/50 rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white font-medium text-[10px] tracking-tight shadow-sm">
                        AC
                    </div>
<span className="font-medium text-sm tracking-tight text-gray-900">Acme Corp</span>
</div>
<iconify-icon className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</div>

<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-gray-800 transition-colors" icon="lucide:home" width="16"></iconify-icon>
<span className="font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-gray-800 transition-colors" icon="lucide:bar-chart-2" width="16"></iconify-icon>
<span className="font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-gray-800 transition-colors" icon="lucide:users" width="16"></iconify-icon>
<span className="font-medium">Customers</span>
</a>
<div className="pt-4 pb-2">
<p className="px-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Configuration</p>
</div>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm bg-white border border-gray-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-gray-900 rounded-md transition-all" href="#">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-gray-800 transition-colors" icon="lucide:credit-card" width="16"></iconify-icon>
<span className="font-medium">Billing</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-gray-200/50">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-white shadow-sm flex items-center justify-center text-xs font-medium text-gray-600">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 leading-none">John Doe</span>
<span className="text-xs text-gray-500 leading-none mt-1">john@acme.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full">
<div className="p-6 md:p-12 space-y-10">

<div className="space-y-1">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Project Settings</h1>
<p className="text-sm text-gray-500 font-normal">Manage your project configuration and deployment preferences.</p>
</div>

<div className="border-b border-gray-200">
<nav className="-mb-px flex space-x-6">
<a className="border-b-2 border-gray-900 py-3 text-sm font-medium text-gray-900" href="#">General</a>
<a className="border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="#">Team</a>
<a className="border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="#">Integrations</a>
<a className="border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="#">Advanced</a>
</nav>
</div>

<div className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-8 border-b border-gray-200/60">
<div className="md:col-span-1 space-y-1">
<h3 className="text-sm font-medium text-gray-900">Project Name</h3>
<p className="text-xs text-gray-500 leading-relaxed">This will be visible to your team and on public invoices.</p>
</div>
<div className="md:col-span-2 max-w-md">
<div className="flex items-center gap-2">
<input className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all shadow-sm" type="text" value="Acme Platform"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-8 border-b border-gray-200/60">
<div className="md:col-span-1 space-y-1">
<h3 className="text-sm font-medium text-gray-900">Project URL</h3>
<p className="text-xs text-gray-500 leading-relaxed">Your project's primary domain.</p>
</div>
<div className="md:col-span-2 max-w-md">
<div className="flex rounded-md shadow-sm">
<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                                acme.com/
                            </span>
<input className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all" type="text" value="dashboard"/>
</div>
<p className="mt-2 text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="lucide:info" width="12"></iconify-icon>
                            CNAME verification required for custom domains.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-8 border-b border-gray-200/60">
<div className="md:col-span-1 space-y-1">
<h3 className="text-sm font-medium text-gray-900">Framework</h3>
<p className="text-xs text-gray-500 leading-relaxed">The frontend framework used for this project.</p>
</div>
<div className="md:col-span-2 max-w-md">
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-md pl-10 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 shadow-sm transition-all cursor-pointer">
<option>Next.js</option>
<option>React</option>
<option>Vue.js</option>
<option>Svelte</option>
</select>
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="lucide:box" width="16"></iconify-icon>
</div>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-8 border-b border-gray-200/60">
<div className="md:col-span-1 space-y-1">
<h3 className="text-sm font-medium text-gray-900">Experimental Features</h3>
<p className="text-xs text-gray-500 leading-relaxed">Opt-in to beta features.</p>
</div>
<div className="md:col-span-2 max-w-md space-y-4">

<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white shadow-sm">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Server Actions</span>
<span className="text-xs text-gray-500">Enable server-side mutations.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>

<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white shadow-sm opacity-60">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Edge Middleware</span>
<span className="text-xs text-gray-500">Run code at the edge (Beta).</span>
</div>
<label className="relative inline-flex items-center cursor-not-allowed">
<input className="sr-only peer" disabled="" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-100 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-50 after:border-gray-200 after:border after:rounded-full after:h-4 after:w-4 transition-all"></div>
</label>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-2">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                        Cancel
                    </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm">
                        Save Changes
                    </button>
</div>

<div className="mt-12 p-6 border border-red-200 rounded-lg bg-red-50/30">
<h3 className="text-sm font-medium text-red-900">Danger Zone</h3>
<p className="text-xs text-red-700 mt-1 mb-4">Deleting this project will permanently remove all associated data and cannot be undone.</p>
<button className="px-4 py-2 text-sm font-medium text-red-700 bg-white border border-red-200 rounded-md hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Project
                    </button>
</div>
</div>
<footer className="mt-20 border-t border-gray-200 pt-6 pb-12">
<div className="flex items-center justify-between text-xs text-gray-400">
<span>© 2023 Acme Corp. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-gray-600" href="#">Privacy</a>
<a className="hover:text-gray-600" href="#">Terms</a>
<a className="hover:text-gray-600" href="#">Status</a>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
