import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



Weglot.initialize({
api_key: 'wg_f4ee6c137db7c8008e5bd95ccd1e91204'
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white font-medium tracking-tighter text-lg" href="#">NEXUS</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#">Changelog</a>
<a className="hover:text-white transition-colors duration-200" href="#">Customers</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full transition-colors border border-white/5" href="#">
                    Sign in
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 max-w-6xl mx-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

<div className="lg:col-span-5 flex flex-col justify-center h-full pt-4">
<div className="inline-flex items-center gap-2 self-start border border-indigo-500/20 bg-indigo-500/10 rounded-full px-2.5 py-1 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">v2.4 Released</span>
</div>
<h1 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Connect every <br className="hidden lg:block"/>
                    signal in one list.
                </h1>
<p className="text-lg text-zinc-500 font-normal leading-relaxed mb-8 max-w-md">
                    Streamline your data ingestion. A unified interface to monitor, track, and act on your system events in real-time without the noise.
                </p>
<div className="flex items-center gap-4">
<button className="group relative px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                        Start integration
                        <iconify-icon className="inline-block ml-1 relative top-[1px] transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-5 py-2.5 bg-transparent border border-zinc-800 hover:bg-zinc-900 text-zinc-300 text-sm font-medium rounded-lg transition-all">
                        Read docs
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-zinc-600">
<span className="text-xs uppercase tracking-widest font-medium">Trusted by teams at</span>
<div className="flex -space-x-2">

<div className="h-6 w-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold">A</div>
<div className="h-6 w-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold">L</div>
<div className="h-6 w-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold">V</div>
</div>
</div>
</div>

<div className="lg:col-span-7 w-full relative">

<div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700/20 to-transparent rounded-2xl blur-sm opacity-50"></div>
<div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs font-medium text-zinc-500 ml-2">Event Stream</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 font-medium">Live Updates</span>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 checked:right-0 right-4 top-0 border-transparent" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer border border-zinc-700" htmlFor="toggle"></label>
</div>
</div>
</div>

<div className="flex items-center gap-6 px-5 py-3 border-b border-white/5 text-xs font-medium text-zinc-500 bg-zinc-900/30">
<span className="text-white border-b border-indigo-500 pb-3 -mb-3.5">All Events</span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Errors</span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Webhooks</span>
<span className="ml-auto flex items-center gap-1 text-zinc-600">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
                            Sort
                        </span>
</div>

<div className="list-mask max-h-[420px] overflow-y-auto custom-scrollbar">

<div className="group flex items-center gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:card-send-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate">Payment Succeeded</h3>
<span className="text-xs text-zinc-500 tabular-nums">Just now</span>
</div>
<p className="text-xs text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">Invoice #4920 processed via Stripe API</p>
</div>
<div className="flex-shrink-0">
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group flex items-center gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate">Rate Limit Approaching</h3>
<span className="text-xs text-zinc-500 tabular-nums">2m ago</span>
</div>
<p className="text-xs text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">85% of hourly quota consumed on /v1/users</p>
</div>
<div className="flex-shrink-0">
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group flex items-center gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate">New Organization Created</h3>
<span className="text-xs text-zinc-500 tabular-nums">14m ago</span>
</div>
<p className="text-xs text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">Acme Corp added by admin@acme.com</p>
</div>
<div className="flex-shrink-0">
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group flex items-center gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon className="animate-spin-slow" icon="solar:refresh-circle-linear" strokeWidth="1.5" style={{animationDuration: '3s'}} width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate">Database Migration</h3>
<span className="text-xs text-zinc-500 tabular-nums">42m ago</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
</div>
</div>
<div className="flex-shrink-0">
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group flex items-center gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default opacity-60">
<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:code-file-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate">Deployment Config</h3>
<span className="text-xs text-zinc-500 tabular-nums">1h ago</span>
</div>
<p className="text-xs text-zinc-500 truncate font-mono">git commit -m "fix: layout"</p>
</div>
<div className="flex-shrink-0">
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-zinc-900/80 border-t border-white/5 px-5 py-3 flex justify-between items-center text-xs">
<span className="text-zinc-500">Showing 5 of 128 events</span>
<a className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1" href="#">
                            View all logs
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl rounded-full -z-10"></div>
</div>
</div>
</main>

    </>
  );
}
