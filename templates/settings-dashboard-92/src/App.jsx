import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-200 bg-[#FAFAFA] p-4 flex flex-col gap-1">
<div className="px-3 py-4 mb-2">
<div className="w-8 h-8 bg-zinc-900 rounded-md flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-lg" icon="solar:command-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-white text-zinc-900 shadow-sm border border-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Team
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Security
            </a>
</nav>
</aside>

<main className="flex-1 p-6 md:p-10 max-w-4xl w-full">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">Settings</h1>
<p className="text-sm text-zinc-500">Manage your account settings and preferences.</p>
</div>
<div className="space-y-6">

<div className="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-zinc-200">
<h2 className="text-base font-semibold text-zinc-900">Profile Information</h2>
<p className="text-sm text-zinc-500 mt-1">Update your personal details and public profile.</p>
</div>
<div className="p-6 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">First Name</label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-colors" type="text" value="Jane"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Last Name</label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-colors" type="text" value="Doe"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full pl-9 px-3 py-2 text-sm bg-white border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-colors" type="email" value="jane.doe@example.com"/>
</div>
</div>
<div className="space-y-1.5 pt-2">
<label className="block text-sm font-medium text-zinc-700">Language</label>

<div className="relative group inline-block w-full sm:w-64">
<button className="flex items-center justify-between w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 hover:bg-zinc-50 transition-colors" type="button">
<span className="text-zinc-700">English (US)</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute left-0 w-full mt-1 bg-white border border-zinc-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
<div className="py-1">
<a className="flex items-center justify-between px-3 py-2 text-sm text-zinc-900 bg-zinc-50" href="#">
                                        English (US)
                                        <iconify-icon className="text-zinc-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="block px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Spanish</a>
<a className="block px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">French</a>
</div>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-colors" type="button">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:ring-offset-2 transition-colors" type="button">Save Changes</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-zinc-200">
<h2 className="text-base font-semibold text-zinc-900">Preferences</h2>
<p className="text-sm text-zinc-500 mt-1">Manage your notifications and display settings.</p>
</div>
<div className="p-6 space-y-6">

<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Push Notifications</h3>
<p className="text-xs text-zinc-500 mt-0.5">Receive alerts directly on your device.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zinc-900/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900 shadow-sm transition-colors"></div>
</label>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<h3 className="text-sm font-medium text-zinc-900 mb-3">Email Communications</h3>
<label className="relative flex items-start cursor-pointer group">
<div className="flex items-center h-5 relative">
<input checked="" className="peer appearance-none w-4 h-4 border border-zinc-300 rounded bg-white checked:bg-zinc-900 checked:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-colors group-hover:border-zinc-400 cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center justify-center text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-3 text-sm">
<span className="font-medium text-zinc-900 block">Weekly Digest</span>
<span className="text-xs text-zinc-500 block mt-0.5">A summary of activity sent every Monday.</span>
</div>
</label>
<label className="relative flex items-start cursor-pointer group">
<div className="flex items-center h-5 relative">
<input className="peer appearance-none w-4 h-4 border border-zinc-300 rounded bg-white checked:bg-zinc-900 checked:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-colors group-hover:border-zinc-400 cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center justify-center text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-3 text-sm">
<span className="font-medium text-zinc-900 block">Product Updates</span>
<span className="text-xs text-zinc-500 block mt-0.5">News about product features and releases.</span>
</div>
</label>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
