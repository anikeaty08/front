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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]"></div>
</div>

<aside className="relative z-20 w-64 h-full hidden md:flex flex-col justify-between border-r border-slate-200/60 bg-white/50 backdrop-blur-xl pt-6 pb-6 px-4">
<div>

<div className="flex items-center gap-3 px-3 mb-8">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-lg shadow-slate-200">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Nexus</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-white shadow-sm ring-1 ring-slate-200 rounded-lg group" href="#">
<iconify-icon className="text-slate-900" icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:server-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Servers
                    <span className="ml-auto text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Data Flow
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Analytics
                </a>
</nav>
<div className="mt-8 px-3">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Pipelines</h3>
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status"></span>
                        aws-east-1 <span className="text-slate-300 mx-1">→</span> snowflake
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-status"></span>
                        gcp-log-stream <span className="text-slate-300 mx-1">→</span> elastic
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        kafka-main <span className="text-slate-300 mx-1">→</span> s3-backup
                    </div>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-3 pt-4 border-t border-slate-200/60">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-white shadow-sm flex items-center justify-center text-xs font-semibold text-slate-600">
                JD
            </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">John Doe</p>
<p className="text-[10px] text-slate-500 truncate">Lead Data Engineer</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="relative z-10 flex-1 flex flex-col h-full overflow-hidden">

<header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-slate-200/50 bg-white/30 backdrop-blur-md sticky top-0">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span>Nexus</span>
<span className="text-slate-300">/</span>
<span className="text-slate-900 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 bg-white/60 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-slate-200/50 w-64 transition-all" placeholder="Search logs..." type="text"/>
</div>
<button className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm">
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 border border-white rounded-full translate-x-1/4 -translate-y-1/4"></span>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500">System Uptime</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">99.98%</h3>
</div>
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+0.01%</span>
<span className="text-[10px] text-slate-400">vs last week</span>
</div>
</div>

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500">Data Throughput</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">4.2 TB<span className="text-sm font-normal text-slate-400">/hr</span></h3>
</div>
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:transfer-vertical-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="w-full bg-slate-100 rounded-full h-1 mt-2">
<div className="bg-blue-500 h-1 rounded-full w-[75%]"></div>
</div>
</div>

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500">Active Nodes</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">12<span className="text-sm font-normal text-slate-400">/14</span></h3>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex -space-x-2 overflow-hidden">
<div className="w-5 h-5 rounded-full bg-slate-200 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[8px] text-slate-500">+9</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-slate-900">Server Nodes</h2>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            Manage
                            <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">

<div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50/50 border-b border-slate-200/60 text-xs font-medium text-slate-500 uppercase tracking-wide">
<div className="col-span-4">Node Name</div>
<div className="col-span-2">Region</div>
<div className="col-span-2">Status</div>
<div className="col-span-3">Load (CPU/MEM)</div>
<div className="col-span-1 text-right">Lat</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-slate-100 hover:bg-white transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon icon="solar:server-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">nexus-core-01</p>
<p className="text-[10px] text-slate-400">192.168.1.10</p>
</div>
</div>
<div className="col-span-2 text-xs text-slate-500 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:flag-linear"></iconify-icon> US-East
                            </div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status"></span>
                                    Operational
                                </span>
</div>
<div className="col-span-3 pr-4">
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>45%</span> <span>2.1GB</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-800 h-full rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="col-span-1 text-right text-xs font-medium text-slate-600">24ms</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-slate-100 hover:bg-white transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon icon="solar:server-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">nexus-db-shard-04</p>
<p className="text-[10px] text-slate-400">192.168.1.45</p>
</div>
</div>
<div className="col-span-2 text-xs text-slate-500 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:flag-linear"></iconify-icon> EU-Central
                            </div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    High Load
                                </span>
</div>
<div className="col-span-3 pr-4">
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>89%</span> <span>15.4GB</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-500 h-full rounded-full" style={{width: '89%'}}></div>
</div>
</div>
<div className="col-span-1 text-right text-xs font-medium text-amber-600">112ms</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-white transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon icon="solar:server-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">nexus-analytics-02</p>
<p className="text-[10px] text-slate-400">192.168.1.88</p>
</div>
</div>
<div className="col-span-2 text-xs text-slate-500 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:flag-linear"></iconify-icon> US-West
                            </div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status"></span>
                                    Operational
                                </span>
</div>
<div className="col-span-3 pr-4">
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>12%</span> <span>4.2GB</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-800 h-full rounded-full" style={{width: '12%'}}></div>
</div>
</div>
<div className="col-span-1 text-right text-xs font-medium text-slate-600">45ms</div>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-5 shadow-lg shadow-slate-200/50 mt-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20">
<iconify-icon className="text-white" icon="solar:code-square-linear" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
</div>
<span className="text-[10px] font-mono text-slate-400 ml-2">syslog — tail -f /var/log/nexus.log</span>
</div>
<div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-1 h-32 overflow-hidden relative">

<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-900 to-transparent"></div>
<p className="flex gap-3"><span className="text-slate-500">10:42:01</span> <span className="text-emerald-400">INFO</span> <span className="opacity-80">Connected to snowflake_warehouse_01 successfully.</span></p>
<p className="flex gap-3"><span className="text-slate-500">10:42:05</span> <span className="text-blue-400">DEBUG</span> <span className="opacity-80">Packet batch #9921 received. Size: 45MB. Processing...</span></p>
<p className="flex gap-3"><span className="text-slate-500">10:42:08</span> <span className="text-amber-400">WARN</span> <span className="opacity-80">High latency detected on eu-central-1 node (112ms). Retrying handshake.</span></p>
<p className="flex gap-3"><span className="text-slate-500">10:42:09</span> <span className="text-emerald-400">INFO</span> <span className="opacity-80">Batch #9921 processed. Time: 0.4s. Output: s3://nexus-bkt/raw/</span></p>
<p className="flex gap-3"><span className="text-slate-500">10:42:15</span> <span className="text-emerald-400">INFO</span> <span className="opacity-80">Health check passed for 11/12 nodes.</span></p>
<p className="flex gap-3"><span className="text-slate-500">10:42:18</span> <span className="text-blue-400">DEBUG</span> <span className="opacity-80">Auto-scaling group triggered. Spinning up nexus-worker-05.</span></p>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-slate-900">Active Pipeline</h3>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>

<div className="relative flex flex-col gap-6 items-center">

<div className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 relative z-10">
<div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 shadow-sm">
<iconify-icon icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Ingestion API</p>
<p className="text-[10px] text-slate-500">HTTPS / REST</p>
</div>
<span className="ml-auto text-[10px] text-emerald-600 bg-emerald-50 px-1.5 rounded">200 OK</span>
</div>

<div className="absolute top-10 left-8 bottom-10 w-0.5 bg-slate-200 z-0"></div>

<svg className="absolute top-[48px] left-[29px] w-6 h-16 z-0 animate-flow overflow-visible">
<line stroke="#64748b" stroke-dasharray="4" strokeWidth="2" x1="1" x2="1" y1="0" y2="60"></line>
</svg>

<div className="w-full flex items-center gap-3 p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 relative z-10 shadow-sm">
<div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Nexus Engine</p>
<p className="text-[10px] text-slate-500">Processing &amp; ETL</p>
</div>
<div className="ml-auto flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
</div>
</div>

<svg className="absolute top-[130px] left-[29px] w-6 h-16 z-0 animate-flow overflow-visible">
<line stroke="#64748b" stroke-dasharray="4" strokeWidth="2" x1="1" x2="1" y1="0" y2="60"></line>
</svg>

<div className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 relative z-10">
<div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 shadow-sm">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Data Warehouse</p>
<p className="text-[10px] text-slate-500">PostgreSQL / S3</p>
</div>
<span className="ml-auto text-[10px] text-slate-400">Idle</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center">
<div className="p-2 rounded-lg bg-slate-50">
<p className="text-[10px] text-slate-400">Latency</p>
<p className="text-xs font-semibold text-slate-800">24ms</p>
</div>
<div className="p-2 rounded-lg bg-slate-50">
<p className="text-[10px] text-slate-400">Error Rate</p>
<p className="text-xs font-semibold text-slate-800">0.001%</p>
</div>
</div>
</div>

<div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 mb-4">Configuration</h3>
<div className="space-y-4">

<label className="flex items-center justify-between cursor-pointer group">
<span className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:shield-warning-linear"></iconify-icon>
                                    Maintenance Mode
                                </span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group">
<span className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:bell-bing-linear"></iconify-icon>
                                    Alert Notifications
                                </span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</div>
</label>

<div className="pt-2">
<div className="flex justify-between text-[10px] text-slate-500 mb-2">
<span>Auto-Scaling Limit</span>
<span>24 Nodes</span>
</div>
<input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900" max="50" min="1" type="range" value="24"/>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
