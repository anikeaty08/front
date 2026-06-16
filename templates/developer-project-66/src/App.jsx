import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#030303',
surface: '#0A0A0A',
border: '#1F1F1F',
subtle: '#27272A',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="md:hidden h-14 border-b border-border flex items-center justify-between px-4 bg-background sticky top-0 z-20">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-tight">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
<span>Nexus</span>
</div>
<button className="text-zinc-400 hover:text-zinc-100">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</header>

<aside className="w-full md:w-64 border-r border-border bg-background hidden md:flex flex-col fixed h-screen z-10 left-0 top-0">

<div className="h-14 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2.5 text-zinc-100 font-medium text-sm tracking-tight select-none">
<div className="w-6 h-6 bg-zinc-100 text-black rounded flex items-center justify-center">
<span className="iconify" data-icon="lucide:command" data-strokeWidth="2" data-width="14"></span>
</div>
                Nexus Inc.
                <span className="bg-zinc-900 text-zinc-500 text-[10px] px-1.5 py-0.5 rounded border border-zinc-800 ml-auto">Free</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Platform</div>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:layout-grid" data-width="18"></span>
                Dashboard
            </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:activity" data-width="18"></span>
                Activity
            </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:users" data-width="18"></span>
                Team
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Project</div>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:box" data-width="18"></span>
                Overview
            </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-100 bg-zinc-900 rounded-md shadow-sm border border-zinc-800/50" href="#">
<span className="iconify text-zinc-100" data-icon="lucide:settings-2" data-width="18"></span>
                Settings
            </a>
</nav>

<div className="p-3 border-t border-border">
<button className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md hover:bg-zinc-900 transition-colors group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs text-white font-medium border border-zinc-600">
                    JD
                </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">John Doe</div>
<div className="text-xs text-zinc-500 truncate">john@nexus.com</div>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 md:ml-64 bg-background min-h-screen">

<div className="h-14 border-b border-border flex items-center justify-between px-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">acme-corp</span>
<span className="iconify text-zinc-700" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">frontend-core</span>
<span className="iconify text-zinc-700" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-zinc-200">Settings</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Docs</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Help</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Feedback</a>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 py-10 space-y-12">

<div className="space-y-1">
<h1 className="text-2xl font-medium tracking-tight text-zinc-100">Project Settings</h1>
<p className="text-sm text-zinc-500">Manage your project configuration, build settings, and domains.</p>
</div>

<section className="border border-border rounded-lg bg-surface overflow-hidden">
<div className="px-6 py-4 border-b border-border flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">General</h3>
</div>
<div className="p-6 space-y-6">

<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-zinc-300 mb-1">Project Name</label>
<p className="text-xs text-zinc-500">Used to identify your project in the dashboard.</p>
</div>
<div className="md:col-span-2">
<input className="w-full bg-background border border-subtle rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-700" type="text" value="frontend-core"/>
</div>
</div>
<hr className="border-border"/>

<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-zinc-300 mb-1">Build Command</label>
<p className="text-xs text-zinc-500">The command that builds your application.</p>
</div>
<div className="md:col-span-2 space-y-3">
<div className="relative">
<input className="w-full bg-background border border-subtle rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all font-mono" type="text" value="npm run build"/>
<div className="absolute right-2 top-2">
<span className="iconify text-zinc-600" data-icon="lucide:terminal" data-width="16"></span>
</div>
</div>
<div className="flex items-center gap-2">
<input className="custom-checkbox appearance-none w-4 h-4 border border-zinc-600 rounded bg-transparent checked:bg-zinc-100 checked:border-zinc-100 focus:ring-0 focus:ring-offset-0 cursor-pointer relative transition-all" id="override-build" type="checkbox"/>
<label className="text-sm text-zinc-400 select-none" htmlFor="override-build">Override default command</label>
</div>
</div>
</div>
<hr className="border-border"/>

<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-zinc-300 mb-1">Root Directory</label>
<p className="text-xs text-zinc-500">The directory where your code is located.</p>
</div>
<div className="md:col-span-2">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
<span className="iconify" data-icon="lucide:folder" data-width="14"></span>
<span>/</span>
</div>
<input className="w-full bg-background border border-subtle rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="./" type="text"/>
</div>
</div>
</div>
<div className="px-6 py-3 bg-zinc-900/50 border-t border-border flex justify-between items-center">
<p className="text-xs text-zinc-500">Last saved 2 minutes ago</p>
<button className="bg-zinc-100 text-black px-4 py-1.5 rounded text-sm font-medium hover:bg-zinc-200 transition-colors shadow-sm">Save Changes</button>
</div>
</section>

<section className="border border-border rounded-lg bg-surface overflow-hidden">
<div className="px-6 py-4 border-b border-border">
<h3 className="text-sm font-medium text-zinc-200">Framework</h3>
</div>
<div className="p-6">
<div className="grid md:grid-cols-3 gap-6 items-start">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-zinc-300 mb-1">Framework Preset</label>
<p className="text-xs text-zinc-500">We'll automatically detect your framework.</p>
</div>
<div className="md:col-span-2">
<div className="relative group">
<select className="w-full bg-background border border-subtle rounded-md pl-10 pr-10 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all appearance-none cursor-pointer hover:border-zinc-600">
<option value="nextjs">Next.js</option>
<option value="react">React</option>
<option value="vue">Vue.js</option>
<option value="svelte">Svelte</option>
</select>
<div className="absolute left-3 top-2.5 pointer-events-none">
<span className="iconify text-zinc-100" data-icon="logos:nextjs-icon" data-width="16"></span>
</div>
<div className="absolute right-3 top-2.5 pointer-events-none text-zinc-500 group-hover:text-zinc-300">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border border-red-900/30 rounded-lg bg-red-950/5 overflow-hidden">
<div className="px-6 py-4 border-b border-red-900/20">
<h3 className="text-sm font-medium text-red-400">Danger Zone</h3>
</div>
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h4 className="text-sm font-medium text-zinc-200">Delete Project</h4>
<p className="text-xs text-zinc-500 mt-1">Once you delete a project, there is no going back. Please be certain.</p>
</div>
<button className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-1.5 rounded text-sm font-medium hover:bg-red-500 hover:text-white transition-all">Delete Project</button>
</div>
</section>
<footer className="pt-6 pb-20 border-t border-border flex justify-between items-center text-xs text-zinc-600">
<div className="flex gap-4">
<span>© 2024 Nexus Inc.</span>
</div>
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Status</a>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
