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
      

<aside className="w-64 border-r border-zinc-900 bg-zinc-950 hidden md:flex flex-col flex-shrink-0">
<div className="h-14 flex items-center px-6 border-b border-zinc-900">
<span className="text-zinc-50 font-medium tracking-tighter text-base uppercase">LOKI ESQ.</span>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
<div>
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-widest">Practice</p>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Case Matters
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Clients
                    </a>
</nav>
</div>
<div>
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-widest">Settings</p>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Profile
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-zinc-900 text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Notifications
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Security
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Billing &amp; Retainers
                    </a>
</nav>
</div>
<div>
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-widest">Resources</p>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors" href="#podcast-section">
<iconify-icon icon="solar:microphone-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        SCOTUS Podcast
                    </a>
</nav>
</div>
</div>
<div className="p-4 border-t border-zinc-900">
<button className="flex items-center gap-3 w-full px-2 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-zinc-50 transition-colors text-left">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-zinc-200 truncate">Admin User</p>
<p className="text-xs text-zinc-500 truncate">admin@lokiesqlaw.com</p>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-zinc-950">

<header className="h-14 flex items-center justify-between px-6 border-b border-zinc-900 flex-shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-zinc-50">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<nav className="hidden sm:flex items-center space-x-2 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Firm Settings</a>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Notifications</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="h-8 w-64 bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-shadow" placeholder="Search cases, clients..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="text-xs text-zinc-600 font-sans px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-950">⌘</kbd>
<kbd className="text-xs text-zinc-600 font-sans px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-950">K</kbd>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10 lg:px-16 scroll-smooth">
<div className="max-w-3xl mx-auto space-y-10">

<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-50">Notifications</h1>
<p className="text-sm text-zinc-400 mt-2">Manage how you receive updates regarding case matters and firm announcements.</p>
</div>

<section className="space-y-6">
<h2 className="text-sm font-medium text-zinc-200 border-b border-zinc-900 pb-2">Email Preferences</h2>
<div className="space-y-4">

<div className="flex items-start justify-between gap-4 py-2">
<div>
<h3 className="text-sm font-medium text-zinc-200">Weekly Case Summary</h3>
<p className="text-sm text-zinc-500 mt-1">Receive a weekly digest of your active matters, filings, and upcoming court dates.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-zinc-950 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-zinc-950"></div>
</label>
</div>

<div className="flex items-start justify-between gap-4 py-2">
<div>
<h3 className="text-sm font-medium text-zinc-200">Client Portal Security</h3>
<p className="text-sm text-zinc-500 mt-1">Get notified about new sign-ins, document access, and security events.&lt;/</p></div></div></div></section></div></div></main>
    </>
  );
}
