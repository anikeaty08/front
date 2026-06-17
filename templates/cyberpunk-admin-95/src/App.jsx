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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.02),rgba(0,0,255,0.04))] bg-[length:100%_4px,3px_100%] opacity-30"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-100"></div>

<div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-emerald-500/15 mix-blend-screen filter blur-[160px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[55vw] h-[55vw] rounded-full bg-emerald-400/10 mix-blend-screen filter blur-[180px]"></div>
<div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
</div>

<aside className="hidden md:flex w-64 flex-col border-r border-emerald-500/40 bg-black/70 backdrop-blur-3xl z-20 shadow-[10px_0_40px_rgba(16,185,129,0.1)] relative">
<div className="absolute inset-y-0 right-0 w-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>

<div className="h-16 flex items-center px-6 border-b border-emerald-500/40 relative">
<div className="absolute bottom-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<span className="text-xl font-medium tracking-tighter text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)]">root@UPNL:~#</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-sm bg-emerald-900/40 shadow-[inset_3px_0_0_#34d399,0_0_15px_rgba(16,185,129,0.2)] border border-emerald-500/50 text-emerald-300 font-medium text-sm transition-all" href="#">
<iconify-icon className="text-lg drop-shadow-[0_0_8px_currentColor]" icon="solar:widget-linear"></iconify-icon>
<span className="drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">./dashboard.sh</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:inbox-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">/var/mail/inbox</span>
<span className="ml-auto bg-emerald-950 border border-emerald-500 text-emerald-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.6)] py-0.5 px-2 rounded-sm text-xs font-medium transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)]">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">./nodes.list</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:chart-square-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">./telemetry.log</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">/opt/projects/</span>
</a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]">-- SYSTEM CONFIG --</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:shield-user-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">chmod &amp; chown</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:card-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">./tx_billing.bin</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-sm text-emerald-500/80 hover:text-emerald-300 hover:bg-emerald-900/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 border border-transparent font-medium text-sm transition-all group" href="#">
<iconify-icon className="text-lg group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:settings-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">~/.bashrc</span>
</a>
</nav>

<div className="p-4 border-t border-emerald-500/40 relative">
<div className="absolute top-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<button className="flex items-center gap-3 w-full p-2 rounded-sm hover:bg-emerald-900/40 transition-all text-left border border-transparent hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] group">
<div className="w-8 h-8 rounded-sm bg-black border border-emerald-400 flex items-center justify-center text-emerald-300 text-xs font-medium shadow-[0_0_15px_rgba(52,211,153,0.4)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.8)] transition-all">
                    JD
                </div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-emerald-300 truncate group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">sysadmin_jd</p>
<p className="text-xs text-emerald-600 truncate">192.168.1.104</p>
</div>
<iconify-icon className="text-emerald-400 text-sm group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">

<header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-emerald-500/40 bg-black/60 backdrop-blur-3xl sticky top-0 z-20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative">
<div className="absolute bottom-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<div className="flex items-center gap-4 flex-1 relative z-10">
<button className="md:hidden p-2 text-emerald-500 hover:text-emerald-300 hover:drop-shadow-[0_0_10px_currentColor] rounded-sm transition-all">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="hidden sm:flex relative max-w-md w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-emerald-400 font-medium drop-shadow-[0_0_5px_currentColor]">&gt;</span>
</div>
<input className="block w-full pl-8 pr-3 py-1.5 border border-emerald-500/50 rounded-sm leading-5 bg-black/60 text-emerald-300 placeholder-emerald-700 focus:outline-none focus:bg-black/80 focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 focus:shadow-[0_0_25px_rgba(52,211,153,0.4),inset_0_0_10px_rgba(52,211,153,0.1)] text-sm transition-all sm:text-sm backdrop-blur-xl" placeholder="grep 'query'..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
<span className="text-xs text-emerald-500 font-medium px-1.5 border border-emerald-600/50 bg-black/90 shadow-[0_0_8px_rgba(16,185,129,0.3)]">CTRL+F</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-4 ml-4 relative z-10">
<button className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 rounded-sm transition-all relative border border-transparent hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] group">
<iconify-icon className="text-xl group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,1)] animate-pulse border border-red-300/50"></span>
</button>
<button className="md:hidden w-8 h-8 rounded-sm bg-black border border-emerald-400 flex items-center justify-center text-emerald-300 text-xs font-medium shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                    JD
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-6xl mx-auto space-y-8 relative z-10">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-emerald-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.9)]">SYSTEM_OVERVIEW</h1>
<p className="text-sm text-emerald-500 mt-1 drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]">Status: ONLINE | Uptime: 24:08:15</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-black/60 border border-emerald-500/60 text-emerald-400 text-sm font-medium rounded-sm hover:bg-emerald-900/40 hover:border-emerald-300 hover:text-emerald-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] backdrop-blur-xl group">
<iconify-icon className="group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:calendar-linear"></iconify-icon>
<span className="group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">--since=30d</span>
</button>
<button className="px-4 py-2 bg-emerald-900 border border-emerald-300 text-emerald-200 text-sm font-medium rounded-sm hover:bg-emerald-800 shadow-[0_0_25px_rgba(52,211,153,0.5),inset_0_0_10px_rgba(52,211,153,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.8),inset_0_0_15px_rgba(52,211,153,0.6)] transition-all flex items-center gap-2 group">
<span className="text-emerald-100 drop-shadow-[0_0_8px_currentColor]">&gt;</span>
<span className="drop-shadow-[0_0_8px_currentColor]">EXECUTE</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-black/50 backdrop-blur-2xl p-5 rounded-sm border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15),inset_0_0_15px_rgba(16,185,129,0.05)] flex flex-col relative overflow-hidden group hover:border-emerald-300 hover:bg-emerald-950/20 hover:shadow-[0_0_40px_rgba(52,211,153,0.4),inset_0_0_20px_rgba(52,211,153,0.1)] transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.8)] group-hover:bg-emerald-300 transition-colors"></div>
<div className="flex justify-between items-start pl-3">
<h3 className="text-xs font-medium text-emerald-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">Gross_Income_Stream</h3>
<iconify-icon className="text-emerald-500 text-xl group-hover:text-emerald-300 transition-colors group-hover:drop-shadow-[0_0_12px_currentColor]" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-baseline gap-2 pl-3">
<span className="text-4xl font-medium tracking-tight text-emerald-300 drop-shadow-[0_0_18px_rgba(52,211,153,1)]">24,500<span className="text-xl text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">.00</span></span>
</div>
<div className="mt-3 flex items-center text-sm pl-3">
<span className="flex items-center text-emerald-200 bg-emerald-900/60 px-1.5 py-0.5 rounded-sm text-xs font-medium border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)] drop-shadow-[0_0_5px_currentColor]">
<iconify-icon className="mr-1" icon="solar:graph-up-linear"></iconify-icon>
                                +12.5%
                            </span>
<span className="text-emerald-600 ml-2 text-xs font-medium">delta vs prev_cycle</span>
</div>
</div>

<div className="bg-black/50 backdrop-blur-2xl p-5 rounded-sm border border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.15),inset_0_0_15px_rgba(34,211,238,0.05)] flex flex-col relative overflow-hidden group hover:border-cyan-300 hover:bg-cyan-950/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:bg-cyan-300 transition-colors"></div>
<div className="flex justify-between items-start pl-3">
<h3 className="text-xs font-medium text-cyan-600 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(8,145,178,0.5)]">Active_Connections</h3>
<iconify-icon className="text-cyan-600 text-xl group-hover:text-cyan-300 transition-colors group-hover:drop-shadow-[0_0_12px_currentColor]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-baseline gap-2 pl-3">
<span className="text-4xl font-medium tracking-tight text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,1)]">1,204</span>
</div>
<div className="mt-3 flex items-center text-sm pl-3">
<span className="flex items-center text-cyan-200 bg-cyan-900/60 px-1.5 py-0.5 rounded-sm text-xs font-medium border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] drop-shadow-[0_0_5px_currentColor]">
<iconify-icon className="mr-1" icon="solar:graph-up-linear"></iconify-icon>
                                +4.2%
                            </span>
<span className="text-cyan-700 ml-2 text-xs font-medium">delta vs prev_cycle</span>
</div>
</div>

<div className="bg-black/50 backdrop-blur-2xl p-5 rounded-sm border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15),inset_0_0_15px_rgba(245,158,11,0.05)] flex flex-col relative overflow-hidden group hover:border-amber-400 hover:bg-amber-950/20 hover:shadow-[0_0_40px_rgba(251,191,36,0.4),inset_0_0_20px_rgba(251,191,36,0.1)] transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)] group-hover:bg-amber-400 transition-colors"></div>
<div className="flex justify-between items-start pl-3">
<h3 className="text-xs font-medium text-amber-600 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(217,119,6,0.5)]">Network_Requests</h3>
<iconify-icon className="text-amber-600 text-xl group-hover:text-amber-400 transition-colors group-hover:drop-shadow-[0_0_12px_currentColor]" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-baseline gap-2 pl-3">
<span className="text-4xl font-medium tracking-tight text-amber-400 drop-shadow-[0_0_18px_rgba(251,191,36,1)]">48.2k</span>
</div>
<div className="mt-3 flex items-center text-sm pl-3">
<span className="flex items-center text-red-300 bg-red-900/60 px-1.5 py-0.5 rounded-sm text-xs font-medium border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] drop-shadow-[0_0_5px_currentColor]">
<iconify-icon className="mr-1" icon="solar:graph-down-linear"></iconify-icon>
                                -2.1%
                            </span>
<span className="text-amber-700 ml-2 text-xs font-medium">packet loss alert</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-black/60 backdrop-blur-3xl rounded-sm border border-emerald-500/40 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.1)] overflow-hidden flex flex-col relative">
<div className="px-5 py-4 border-b border-emerald-500/50 flex justify-between items-center bg-black/80 relative">
<div className="absolute bottom-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<h2 className="text-base font-medium text-emerald-300 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
<span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)] animate-pulse"></span>
                                TX_LOGS
                            </h2>
<button className="text-sm font-medium text-emerald-500 hover:text-emerald-300 hover:drop-shadow-[0_0_8px_currentColor] transition-all">[VIEW_ALL]</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-emerald-950/40 text-xs font-medium text-emerald-500 border-b border-emerald-500/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
<tr>
<th className="px-5 py-3 w-10" scope="col">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="px-5 py-3 drop-shadow-[0_0_5px_currentColor]" scope="col">PROCESS</th>
<th className="px-5 py-3 drop-shadow-[0_0_5px_currentColor]" scope="col">VALUE</th>
<th className="px-5 py-3 drop-shadow-[0_0_5px_currentColor]" scope="col">TIMESTAMP</th>
<th className="px-5 py-3 drop-shadow-[0_0_5px_currentColor]" scope="col">STATE</th>
<th className="px-5 py-3 text-right drop-shadow-[0_0_5px_currentColor]" scope="col">ACTION</th>
</tr>
</thead>
<tbody className="divide-y divide-emerald-500/20 text-emerald-400 bg-black/40">
<tr className="hover:bg-emerald-900/30 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group">
<td className="px-5 py-3">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-black border border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-400 group-hover:border-emerald-300 group-hover:text-emerald-300 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all">
<iconify-icon className="group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:figma-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">Design_License</p>
<p className="text-xs text-emerald-600">usr/bin/saas</p>
</div>
</div>
</td>
<td className="px-5 py-3 font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">-$15.00</td>
<td className="px-5 py-3 text-emerald-600">10-24 14:32:01</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]">OK (0)</span>
</td>
<td className="px-5 py-3 text-right text-emerald-600">
<button className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_currentColor] transition-all"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-emerald-900/30 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group">
<td className="px-5 py-3">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-black border border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-400 group-hover:border-emerald-300 group-hover:text-emerald-300 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all">
<iconify-icon className="group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:server-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">EC2_Compute</p>
<p className="text-xs text-emerald-600">net/aws/infra</p>
</div>
</div>
</td>
<td className="px-5 py-3 font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">-$124.50</td>
<td className="px-5 py-3 text-emerald-600">10-22 03:15:44</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]">OK (0)</span>
</td>
<td className="px-5 py-3 text-right text-emerald-600">
<button className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_currentColor] transition-all"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-cyan-900/20 hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 group">
<td className="px-5 py-3">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-black border border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-400 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
<iconify-icon className="group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-emerald-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Incoming_Node_Transfer</p>
<p className="text-xs text-emerald-600 group-hover:text-cyan-700">ext/stripe/payout</p>
</div>
</div>
</td>
<td className="px-5 py-3 font-medium text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] text-lg">+$4,200.00</td>
<td className="px-5 py-3 text-emerald-600">10-20 09:00:12</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-amber-900/60 text-amber-300 border border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] drop-shadow-[0_0_5px_currentColor] animate-pulse">PENDING</span>
</td>
<td className="px-5 py-3 text-right text-emerald-600">
<button className="hover:text-cyan-300 hover:drop-shadow-[0_0_8px_currentColor] transition-all"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-emerald-900/30 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group">
<td className="px-5 py-3">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-black border border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-400 group-hover:border-emerald-300 group-hover:text-emerald-300 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all">
<iconify-icon className="group-hover:drop-shadow-[0_0_8px_currentColor]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">Contractor_Escrow</p>
<p className="text-xs text-emerald-600">usr/dev/outsourced</p>
</div>
</div>
</td>
<td className="px-5 py-3 font-medium text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">-$850.00</td>
<td className="px-5 py-3 text-emerald-600">10-18 18:45:00</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]">OK (0)</span>
</td>
<td className="px-5 py-3 text-right text-emerald-600">
<button className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_currentColor] transition-all"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="bg-black/60 backdrop-blur-3xl rounded-sm border border-emerald-500/40 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.1)] p-5 relative">
<h2 className="text-base font-medium text-emerald-300 mb-4 border-b border-emerald-500/50 pb-2 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] relative">
<div className="absolute bottom-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
                                SYS_PREFS
                            </h2>
<div className="space-y-5">
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">daemon_alerts</p>
<p className="text-xs text-emerald-600 mt-0.5">SMTP daily dumps</p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">req_2FA</p>
<p className="text-xs text-emerald-600 mt-0.5">Strict auth policy</p>
</div>
<input className="custom-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">auto_renew</p>
<p className="text-xs text-emerald-600 mt-0.5">Recurring cron job</p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
</div>
</div>

<div className="bg-red-950/40 backdrop-blur-3xl rounded-sm border border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.25),inset_0_0_20px_rgba(220,38,38,0.1)] p-5 text-red-500 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(239,68,68,0.5),inset_0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/30 rounded-full blur-[60px] pointer-events-none group-hover:scale-150 group-hover:bg-red-500/40 transition-all duration-700 ease-in-out"></div>
<h2 className="text-base font-medium mb-2 relative z-10 flex items-center gap-2 text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.9)]">
<iconify-icon className="text-xl animate-pulse" icon="solar:danger-triangle-linear"></iconify-icon>
                                ELEVATE_PRIVILEGES
                            </h2>
<p className="text-sm text-red-400/80 mb-5 relative z-10 leading-relaxed font-medium">Current access level insufficient for deep telemetry and priority node routing. Upgrade required.</p>
<button className="w-full py-2 bg-red-900 border border-red-400 text-red-200 text-sm font-medium rounded-sm hover:bg-red-800 shadow-[0_0_20px_rgba(239,68,68,0.5),inset_0_0_10px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(248,113,113,0.8),inset_0_0_15px_rgba(248,113,113,0.6)] hover:drop-shadow-[0_0_8px_currentColor] transition-all relative z-10">
                                sudo su - PRO
                            </button>
</div>
</div>
</div>
</div>

<footer className="mt-12 pt-6 border-t border-emerald-500/40 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 max-w-6xl mx-auto relative z-10">
<div className="absolute top-0 inset-x-0 h-px bg-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<p className="text-xs text-emerald-600 font-medium drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]">SYS_VER 4.2.1 // KERNEL 5.15.0 // UPNL</p>
<div className="flex gap-4 text-xs font-medium text-emerald-500">
<a className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" href="#">MAN_PAGES</a>
<a className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" href="#">OPSEC</a>
<a className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all" href="#">PING_SYSADMIN</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
