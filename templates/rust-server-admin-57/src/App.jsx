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
      

<div className="md:hidden fixed top-0 left-0 w-full h-14 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between px-4 z-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center">
<span className="text-white font-semibold text-xs tracking-tighter">R</span>
</div>
<span className="text-neutral-100 font-medium text-sm tracking-tight">RUST<span className="text-neutral-500 font-normal">DEV</span></span>
</div>
<button className="text-neutral-400 hover:text-neutral-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex w-64 flex-shrink-0 border-r border-neutral-800 bg-neutral-900/30 backdrop-blur-xl flex-col h-full relative z-10">

<div className="h-16 flex items-center px-5 border-b border-neutral-800/80 justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_12px_rgba(234,88,12,0.25)] border border-orange-400/20">
<span className="text-white font-semibold text-xs tracking-tighter">R</span>
</div>
<span className="text-neutral-100 font-medium text-sm tracking-tight">RUST<span className="text-neutral-500 font-normal">DEV</span></span>
</div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors flex items-center justify-center relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-orange-500 rounded-full border border-neutral-950"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar py-5 px-3 flex flex-col gap-7">

<div>
<h3 className="text-xs font-medium text-neutral-500 mb-2.5 px-3 uppercase tracking-widest">Overview</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:widget-5-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Analytics
                    </a>
</nav>
</div>

<div>
<h3 className="text-xs font-medium text-neutral-500 mb-2.5 px-3 uppercase tracking-widest">Server Operation</h3>
<nav className="space-y-0.5">

<a className="flex items-center justify-between px-3 py-2 rounded-md bg-orange-500/10 text-orange-500 font-medium text-sm transition-all border border-orange-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:terminal-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Live Console
                        </div>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:map-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        World Map &amp; Seeds
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:history-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Wipe Schedule
                    </a>
</nav>
</div>

<div>
<h3 className="text-xs font-medium text-neutral-500 mb-2.5 px-3 uppercase tracking-widest">Player Management</h3>
<nav className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Active Players
                        </div>
<span className="bg-neutral-800 text-neutral-300 text-xs px-1.5 py-0.5 rounded-sm border border-neutral-700/50 shadow-sm font-normal">241</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:shield-warning-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Bans &amp; Mutes
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Groups &amp; Permissions
                    </a>
</nav>
</div>

<div>
<h3 className="text-xs font-medium text-neutral-500 mb-2.5 px-3 uppercase tracking-widest">Configuration</h3>
<nav className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Plugins (Carbon)
                        </div>
<span className="bg-orange-500/10 text-orange-400 text-xs px-1.5 py-0.5 rounded-sm border border-orange-500/20 font-normal">Update</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Loot Tables
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Startup Parameters
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-neutral-800/80 bg-neutral-900/50 shrink-0">

<div className="mb-4 bg-neutral-950/50 rounded-lg p-3 border border-neutral-800 shadow-sm relative overflow-hidden group hover:border-neutral-700 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-neutral-300 truncate pr-2">EU Main Vanilla</span>
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:server-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="relative z-10 flex items-baseline gap-1.5 mb-2">
<span className="text-base font-medium text-neutral-100 tracking-tight">241</span>
<span className="text-xs text-neutral-500">/ 500 online</span>
</div>
<div className="relative z-10 grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-neutral-800/50">
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5">CPU</p>
<p className="text-xs font-medium text-neutral-300">42%</p>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5">RAM</p>
<p className="text-xs font-medium text-neutral-300">18.4 GB</p>
</div>
</div>
</div>
<button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800/60 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden flex-shrink-0 relative">
<svg className="w-full h-full text-neutral-400" fill="none" viewbox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
<rect fill="#171717" height="36" width="36"></rect>
<circle cx="18" cy="14" fill="currentColor" r="6"></circle>
<path d="M9 30C9 25.0294 13.0294 21 18 21C22.9706 21 27 25.0294 27 30" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-neutral-800 rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-200 truncate group-hover:text-white transition-colors">Garry</p>
<p className="text-[11px] text-neutral-500 truncate">System Admin</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-neutral-400 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-neutral-950 pt-14 md:pt-0 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950 pointer-events-none"></div>

<header className="h-16 border-b border-neutral-800/60 flex items-center px-6 lg:px-8 justify-between relative z-10 shrink-0">
<h1 className="text-lg font-medium tracking-tight text-neutral-100 flex items-center gap-2">
                Live Console &amp; RCON
                <span className="bg-neutral-800 border border-neutral-700 text-neutral-400 text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm">Websocket</span>
</h1>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md py-1.5 pl-9 pr-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/40 focus:bg-neutral-900 transition-all shadow-sm" placeholder="Search commands..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 bg-neutral-800 border border-neutral-700 rounded-sm">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 bg-neutral-800 border border-neutral-700 rounded-sm">K</kbd>
</div>
</div>
</div>
</header>

<div className="flex-1 p-6 lg:p-8 overflow-y-auto relative z-10">
<div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl overflow-hidden shadow-sm backdrop-blur-sm">
<div className="px-5 py-4 border-b border-neutral-800/80 flex justify-between items-center">
<h2 className="text-sm font-medium text-neutral-200 tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:socket-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Connection Settings
                            </h2>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-[10px] text-emerald-500 font-medium uppercase tracking-widest">Connected</span>
</div>
</div>
<div className="p-5 flex flex-col gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Server IP</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2 px-3 text-sm text-neutral-200 focus:outline-none focus:border-orange-500/50 transition-colors font-mono" type="text" value="142.250.187.46"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">RCON Port</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2 px-3 text-sm text-neutral-200 focus:outline-none focus:border-orange-500/50 transition-colors font-mono" type="text" value="28016"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Game Port</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800/50 rounded-md py-2 px-3 text-sm text-neutral-500 cursor-not-allowed font-mono" disabled="" type="text" value="28015"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">RCON Password</label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2 pl-3 pr-10 text-sm text-neutral-200 focus:outline-none focus:border-orange-500/50 transition-colors font-mono" type="password" value="rustadmin123"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-neutral-100 hover:bg-white text-neutral-950 font-medium text-sm py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                    Reconnect RCON
                                </button>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800 border-dashed rounded-xl p-5">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:code-file-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-200 tracking-tight">How to connect</h3>
<p className="text-xs text-neutral-500 mt-0.5">Rust uses WebSockets for RCON. Ensure <code className="text-neutral-300 bg-neutral-800 px-1 py-0.5 rounded">+rcon.web 1</code> is in your launch parameters.</p>
</div>
</div>

<div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 overflow-hidden relative group">
<button className="absolute top-2 right-2 bg-neutral-800 text-neutral-400 p-1 rounded border border-neutral-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<pre className="font-mono text-[10px] leading-relaxed text-neutral-400 overflow-x-auto hide-scrollbar"><span className="text-orange-400">const</span> ws = <span className="text-orange-400">new</span> <span className="text-emerald-400">WebSocket</span>(<span className="text-neutral-300">'ws://IP:PORT/PASSWORD'</span>);

ws.<span className="text-emerald-300">onmessage</span> = (event) =&gt; {
  <span className="text-orange-400">const</span> data = <span className="text-emerald-400">JSON</span>.<span className="text-emerald-300">parse</span>(event.data);
  console.<span className="text-emerald-300">log</span>(data.Message);
};

<span className="text-neutral-500">// Send command</span>
ws.<span className="text-emerald-300">send</span>(<span className="text-emerald-400">JSON</span>.<span className="text-emerald-300">stringify</span>({
  <span className="text-neutral-300">Identifier</span>: <span className="text-orange-300">1</span>, 
  <span className="text-neutral-300">Message</span>: <span className="text-neutral-300">'status'</span>,
  <span className="text-neutral-300">Name</span>: <span className="text-neutral-300">'WebRcon'</span>
}));</pre>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col h-[600px] lg:h-full min-h-[500px] border border-neutral-800 rounded-xl bg-neutral-950 shadow-sm overflow-hidden relative">

<div className="h-12 border-b border-neutral-800 bg-neutral-900/50 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-300">Server Output</span>
</div>
<div className="flex items-center gap-4">

<label className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">Auto-scroll</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-neutral-400 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-orange-500 peer-checked:after:bg-white"></div>
</div>
</label>
<div className="w-px h-4 bg-neutral-800"></div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-1.5 text-xs font-medium">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                Clear
                            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-1.5 bg-[#0a0a0a]" id="console-output">
<div className="text-neutral-500">Connecting to ws://142.250.187.46:28016...</div>
<div className="text-emerald-500">Authentication successful. Connected to Rust Dedicated Server v2503.</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:22:01]</span> Server is running with +rcon.web 1</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:22:15]</span> <span className="text-sky-400">[CHAT]</span> Player1: anyone trading scrap?</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:23:00]</span> Saving map...</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:23:01]</span> Saved 142,501 ents, 0 pending network updates.</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:24:12]</span> 176.22.XX.XX:54321/76561198XXXXXXX/NewPlayer joined [windows/76561198XXXXXXX]</div>
<div className="text-orange-400"><span className="text-neutral-600">[14:25:50]</span> [WARNING] High entity count detected in sector G12.</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:26:05]</span> <span className="text-sky-400">[CHAT]</span> FarmerJoe: omw</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:27:10]</span> Calling collect...</div>
<div className="text-neutral-400"><span className="text-neutral-600">[14:27:11]</span> 38mb collected.</div>

<div className="text-neutral-400 mt-2 flex items-center h-4">
<span className="w-2 h-3.5 bg-neutral-500 animate-pulse"></span>
</div>
</div>

<div className="p-3 border-t border-neutral-800 bg-neutral-900/50 shrink-0">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 font-mono text-sm">&gt;</span>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2 pl-7 pr-3 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all font-mono shadow-inner" placeholder="Type an RCON command (e.g., status, say, kick)..." type="text"/>
</div>
<button className="bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm py-2 px-4 rounded-md transition-colors flex items-center justify-center shadow-sm shrink-0">
                                Send
                            </button>
</div>

<div className="flex items-center gap-2 mt-3 overflow-x-auto hide-scrollbar">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest mr-1 shrink-0">Quick Actions</span>
<button className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded text-xs text-neutral-300 transition-colors whitespace-nowrap">status</button>
<button className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded text-xs text-neutral-300 transition-colors whitespace-nowrap">serverinfo</button>
<button className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded text-xs text-neutral-300 transition-colors whitespace-nowrap">save</button>
<button className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded text-xs text-neutral-300 transition-colors whitespace-nowrap">weather.clear</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
