import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-zinc-200 bg-white/60 backdrop-blur-md sticky top-0 z-20">
<div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded-[4px] text-xs font-medium tracking-tighter">A</div>
<span className="text-sm font-medium tracking-tighter">ACME</span>
<span className="text-zinc-300">/</span>
<span className="text-sm font-medium tracking-tighter">WEBSITE</span>
</div>
<div className="hidden md:flex items-center gap-1 text-sm">
<a className="px-3 py-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-100/50" href="#">Overview</a>
<a className="px-3 py-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-100/50" href="#">Deployments</a>
<a className="px-3 py-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-100/50" href="#">Analytics</a>
<a className="px-3 py-1.5 text-zinc-900 font-medium bg-zinc-100/80 transition-colors rounded-md" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-7 h-7 bg-zinc-200 rounded-full border border-zinc-300 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12">

<aside className="w-full md:w-56 shrink-0 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-zinc-100/80 text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                General
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                Environment Variables
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                Domains
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:plug-circle-linear" strokeWidth="1.5"></iconify-icon>
                Integrations
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors mt-4" href="#">
<iconify-icon className="text-base" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                Security
            </a>
</aside>

<div className="flex-1 space-y-8 max-w-3xl">
<header>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Project Settings</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your project configuration, environments, and general preferences.</p>
</header>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-5 md:p-6 border-b border-zinc-100">
<h2 className="text-base font-medium text-zinc-900">Project Name</h2>
<p className="text-sm text-zinc-500 mt-1 mb-5">Used to identify your project on the dashboard and in the CLI.</p>
<input className="w-full max-w-md border border-zinc-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors shadow-sm" type="text" value="acme-website-prod"/>
</div>
<div className="bg-zinc-50/50 px-5 py-3 md:px-6 flex items-center justify-between border-t border-zinc-200/50">
<span className="text-xs text-zinc-500">Maximum 32 characters.</span>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors shadow-sm">Save</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-5 md:p-6 border-b border-zinc-100">
<h2 className="text-base font-medium text-zinc-900">Root Directory</h2>
<p className="text-sm text-zinc-500 mt-1 mb-5">The directory within your project that contains your application code.</p>
<div className="flex items-center gap-2 max-w-md">
<div className="flex-1 relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-400 text-base pointer-events-none" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full border border-zinc-200 rounded-md pl-9 pr-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors shadow-sm" placeholder="./apps/web" type="text"/>
</div>
</div>

<div className="flex items-center gap-2 mt-5">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" id="include-monorepo" type="checkbox" />
<div className="w-4 h-4 border border-zinc-300 rounded-[4px] shadow-sm bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</input></div>
<label className="text-sm text-zinc-700 cursor-pointer select-none" htmlFor="include-monorepo">Include source files outside of this directory</label>
</div>
</div>
<div className="bg-zinc-50/50 px-5 py-3 md:px-6 flex items-center justify-between border-t border-zinc-200/50">
<span className="text-xs text-zinc-500">Changes will affect future deployments.</span>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors shadow-sm">Save</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-5 md:p-6 border-b border-zinc-100">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-base font-medium text-zinc-900">Production Branch</h2>
<p className="text-sm text-zinc-500 mt-1">Select the branch that automatically deploys to production.</p>
</div>

<label className="relative inline-flex items-center cursor-pointer mt-1">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900 shadow-inner"></div>
</label>
</div>

<div className="relative w-full max-w-md mt-6">
<button className="w-full flex items-center justify-between border border-zinc-200 rounded-md px-3 py-2 bg-white text-sm text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors shadow-sm" type="button">
<span className="flex items-center gap-2">
<iconify-icon className="text-zinc-500 text-base" icon="solar:branch-linear" strokeWidth="1.5"></iconify-icon>
                                main
                            </span>
<iconify-icon className="text-zinc-400 text-sm" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="bg-zinc-50/50 px-5 py-3 md:px-6 flex items-center justify-between border-t border-zinc-200/50">
<span className="text-xs text-zinc-500">Connected to GitHub repository.</span>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors shadow-sm">Save</button>
</div>
</div>

<div className="border border-red-200 rounded-xl overflow-hidden">
<div className="p-5 md:p-6">
<h2 className="text-base font-medium text-red-600">Delete Project</h2>
<p className="text-sm text-zinc-500 mt-1 mb-5">Permanently delete this project, all of its environments, and associated domains.</p>
<button className="bg-white border border-red-200 text-red-600 text-sm font-medium px-4 py-2 rounded-md hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm">Delete Project</button>
</div>
</div>
</div>
</main>

    </>
  );
}
