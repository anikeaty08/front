import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#1CB979',
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
150: '#F6F7F8',
200: '#E5E8EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
boxShadow: {
'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
},
fontFamily: {
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
}
}
}
}



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] bg-gray-150 border-r border-gray-200 flex flex-col flex-shrink-0 h-full overflow-y-auto pb-6">
<div className="px-6 h-16 flex items-center">
<div className="flex items-center gap-2 font-semibold text-gray-900 text-lg tracking-tight">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
          Hype Proxies
        </div>
</div>
<nav className="flex-1 px-4 space-y-8 mt-4">
<div>
<h3 className="px-2 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            Main Menu
          </h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-200/50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="layout-grid"></i>
                Overview
              </a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 shadow-sm relative overflow-hidden justify-between group" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-900" data-lucide="store"></i>
                  My services
                </div>
<span className="bg-gray-100 text-gray-900 text-[10px] px-1.5 py-0.5 rounded font-medium">
                  5
                </span>
</a>
</li>
</ul>
</div>
<div>
<h3 className="px-2 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            Products
          </h3>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-200/50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400" data-lucide="globe"></i>
                  Proxies
                </div>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-down"></i>
</button>
</li>
<li>
<button className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-200/50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400" data-lucide="server"></i>
                  Servers
                </div>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-up"></i>
</button>
<div className="mt-1 ml-2 pl-2 border-l border-gray-200 space-y-1">
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 transition-colors" href="#">
                  Bare Metal
                </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
                  VPS
                </a>
</div>
</li>
</ul>
</div>
</nav>

<div className="px-4 mt-auto">
<div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<div className="text-xs font-semibold text-gray-900">
                Servers 50% Off
              </div>
<div className="text-[10px] text-gray-500">Limited time offer</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0 z-10">

<nav className="flex items-center text-sm font-medium">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
            My Services
          </a>
<span className="mx-2 text-gray-300">/</span>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Servers
          </a>
<span className="mx-2 text-gray-300">/</span>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Titan-BM-01
          </a>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900 bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">
            Overview
          </span>
</nav>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="life-buoy"></i>
            Support
          </button>
<div className="h-4 w-px bg-gray-200"></div>
<div className="flex items-center gap-2 pl-1">
<div className="w-7 h-7 bg-green-50 text-green-700 text-[10px] font-semibold rounded-full flex items-center justify-center border border-green-100">
              VF
            </div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50 p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
<div>
<div className="flex items-center gap-3 mb-2">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Titan-BM-01
                </h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Healthy
                </span>
</div>
<div className="flex flex-wrap items-center gap-2 text-sm mt-1">
<span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 text-xs font-medium">
                  Bare Metal
                </span>
<span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 text-xs font-medium">
                  10 Gbps
                </span>
<span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 text-xs font-medium">
                  NVMe
                </span>
<span className="text-gray-300 mx-2">|</span>
<span className="text-gray-600 text-xs font-medium flex items-center gap-1.5" title="CPU Model">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="cpu"></i>
                  E-2388G
                </span>
<span className="text-gray-300 mx-1">·</span>
<span className="text-gray-600 text-xs font-medium" title="RAM">
                  64GB DDR4
                </span>
<span className="text-gray-300 mx-1">·</span>
<span className="text-gray-600 text-xs font-medium" title="Storage">
                  2x 1TB NVMe
                </span>
<span className="text-gray-300 mx-2">|</span>
<span className="text-gray-500 text-xs font-mono">
                  ID: srv-bm-8392
                </span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-lg hover:bg-green-600 shadow-sm transition-all">
<i className="w-4 h-4" data-lucide="terminal"></i>
                Launch Console
              </button>
<div className="w-px h-8 bg-gray-200 mx-1"></div>
<button className="p-2 text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors" title="Reboot">
<i className="w-4 h-4" data-lucide="rotate-cw"></i>
</button>
<button className="p-2 text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors" title="Shutdown">
<i className="w-4 h-4" data-lucide="power"></i>
</button>
<div className="relative ml-1">
<button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition-colors">
                  More
                  <i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-start justify-between">
<span className="text-xs font-medium text-gray-500">
                  Uptime (30d)
                </span>
<div className="p-1 rounded bg-green-50 text-green-600">
<i className="w-3.5 h-3.5" data-lucide="activity"></i>
</div>
</div>
<div className="flex items-end justify-between">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
                  99.99%
                </div>
<div className="flex gap-0.5 h-6 items-end opacity-50">
<div className="w-1 bg-green-500 h-4 rounded-sm"></div>
<div className="w-1 bg-green-500 h-6 rounded-sm"></div>
<div className="w-1 bg-green-500 h-5 rounded-sm"></div>
<div className="w-1 bg-green-500 h-6 rounded-sm"></div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-start justify-between">
<span className="text-xs font-medium text-gray-500">
                  CPU Avg (24h)
                </span>
<div className="p-1 rounded bg-blue-50 text-blue-600">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
</div>
</div>
<div className="flex items-end justify-between">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
                  14%
                </div>
<svg className="w-16 h-8 text-blue-500 opacity-50" fill="none" stroke="currentColor" viewbox="0 0 50 20">
<path d="M0 15 L10 12 L20 16 L30 10 L40 12 L50 8" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-start justify-between">
<span className="text-xs font-medium text-gray-500">
                  Network Egress
                </span>
<div className="p-1 rounded bg-purple-50 text-purple-600">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="flex items-end justify-between">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
                  4.2 TB
                </div>
<svg className="w-16 h-8 text-purple-500 opacity-50" fill="none" stroke="currentColor" viewbox="0 0 50 20">
<path d="M0 18 L10 15 L20 12 L30 14 L40 8 L50 10" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-start justify-between">
<span className="text-xs font-medium text-gray-500">
                  Disk Usage
                </span>
<div className="p-1 rounded bg-orange-50 text-orange-600">
<i className="w-3.5 h-3.5" data-lucide="hard-drive"></i>
</div>
</div>
<div className="flex items-end justify-between">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
                  24%
                </div>
<div className="w-16 bg-gray-100 rounded-full h-1.5 mb-2">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '24%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
<div className="px-6 py-6 border-b border-gray-200 flex items-center justify-between">
<h3 className="text-base font-semibold text-gray-900">
                Resource Usage
              </h3>
<div className="flex bg-gray-100 rounded-lg p-0.5 border border-gray-200">
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md">
                  1h
                </button>
<button className="px-3 py-1 text-xs font-semibold text-primary bg-white rounded-md shadow-sm transition-all ring-1 ring-black/5">
                  24h
                </button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md">
                  7d
                </button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md">
                  30d
                </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">

<div className="bg-white p-6 group">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-gray-500">
                    CPU Usage
                  </span>
<div className="flex gap-2">
<span className="text-[10px] font-mono text-gray-500">
                      Base: 8%
                    </span>
<span className="text-[10px] font-mono text-gray-900 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      Peak: 45%
                    </span>
</div>
</div>
<div className="h-48 w-full chart-grid relative">
<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q20 38 40 20 T80 25 T100 15 V40 H0 Z" fill="rgba(28, 185, 121, 0.05)" stroke="none"></path>
<path d="M0 35 Q20 38 40 20 T80 25 T100 15" fill="none" stroke="#1CB979" strokeLinecap="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex flex-col items-center">
<div className="bg-gray-900 text-white text-[10px] py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                      11:30 AM • 24.5%
                    </div>
<div className="w-px h-full bg-gray-900/10 absolute top-0 bottom-0 pointer-events-none"></div>
</div>
</div>
</div>

<div className="bg-white p-6 group">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-gray-500">Memory</span>
<div className="flex gap-2">
<span className="text-[10px] font-mono text-gray-500">
                      Cached: 4GB
                    </span>
<span className="text-[10px] font-mono text-gray-900 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      32GB / 64GB
                    </span>
</div>
</div>
<div className="h-48 w-full chart-grid relative">
<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 25 H20 L25 20 H50 L55 22 H100 V40 H0 Z" fill="rgba(99, 102, 241, 0.05)" stroke="none"></path>
<path d="M0 25 H20 L25 20 H50 L55 22 H100" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-[10px] py-1 px-2 rounded shadow-lg z-10">
                    11:30 AM • 50%
                  </div>
</div>
</div>

<div className="bg-white p-6 group">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-gray-500">
                    Disk I/O
                  </span>
<div className="flex gap-2 items-center">
<span className="text-[10px] font-mono text-gray-500">
                      Peak: 120MB/s
                    </span>
<div className="h-3 w-px bg-gray-200"></div>
<span className="text-[10px] text-blue-500 font-medium">
                      Read
                    </span>
<span className="text-[10px] text-orange-500 font-medium">
                      Write
                    </span>
</div>
</div>
<div className="h-48 w-full chart-grid relative">
<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 38 L10 37 L20 38 L30 35 L40 37 L50 38 L60 30 L100 38" fill="none" stroke="#3b82f6" strokeLinejoin="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M0 39 L15 39 L30 38 L45 38 L60 35 L100 38" fill="none" stroke="#f97316" stroke-dasharray="3 3" strokeLinejoin="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white p-6 group">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-gray-500">Network</span>
<div className="flex gap-2 items-center">
<span className="text-[10px] font-mono text-gray-500">
                      Avg: 450Mbps
                    </span>
<div className="h-3 w-px bg-gray-200"></div>
<span className="text-[10px] text-green-600 font-medium">
                      Up
                    </span>
<span className="text-[10px] text-gray-500 font-medium">
                      Down
                    </span>
</div>
</div>
<div className="h-48 w-full chart-grid relative">
<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q30 25 50 15 T100 20" fill="none" stroke="#1CB979" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M0 35 Q40 35 60 25 T100 30" fill="none" stroke="#9ca3af" stroke-dasharray="3 3" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-6 border-b border-gray-200 flex items-center justify-between bg-white">
<div>
<h3 className="text-sm font-semibold text-gray-900">
                      Snapshots
                    </h3>
<p className="text-xs text-gray-500 mt-0.5">
                      Capture and restore the full server state.
                    </p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="camera"></i>
                    Create Snapshot
                  </button>
</div>
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100 text-xs text-gray-500 font-medium uppercase tracking-wide">
<th className="px-6 py-3">Name</th>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">Created</th>
<th className="px-6 py-3">Size</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr>
<td className="px-6 py-4 font-medium text-gray-900">
                        Weekly-Backup-01
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-gray-600">Automated</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 text-xs tabular-nums">
                        Oct 20, 04:00
                      </td>
<td className="px-6 py-4 text-gray-500 text-xs tabular-nums">
                        42.0 GB
                      </td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-primary hover:text-green-700 font-medium transition-colors">
                          Restore
                        </button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-gray-900">
                        Pre-Update-Safety
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
<span className="text-xs text-gray-600">Manual</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 text-xs tabular-nums">
                        Oct 24, 14:15
                      </td>
<td className="px-6 py-4 text-gray-500 text-xs tabular-nums">
                        42.5 GB
                      </td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-primary hover:text-green-700 font-medium transition-colors">
                          Restore
                        </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-6 border-b border-gray-200 flex items-center justify-between bg-white">
<div>
<h3 className="text-sm font-semibold text-gray-900">
                      IP Addresses
                    </h3>
<p className="text-xs text-gray-500 mt-0.5">
                      Manage public and private networking.
                    </p>
</div>
<div className="flex gap-2">
<button className="text-xs text-gray-500 hover:text-gray-900 font-medium px-2 py-1">
                      Manage IPs
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                      Assign IP
                    </button>
</div>
</div>
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100 text-xs text-gray-500 font-medium uppercase tracking-wide">
<th className="px-6 py-3">IP Address</th>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">rDNS</th>
<th className="px-6 py-3">Pool</th>
<th className="px-6 py-3 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="group">
<td className="px-6 py-4 font-mono text-xs text-gray-900">
                        192.168.101.45
                      </td>
<td className="px-6 py-4 text-xs text-gray-500">
                        Primary (IPv4)
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-xs text-gray-900 border-b border-dashed border-gray-300 cursor-help" title="Reverse DNS improves IP reputation and service identity.">
                            titan-bm-01.hype.net
                          </span>
<button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-all p-1 hover:bg-gray-100 rounded" title="Edit rDNS">
<i className="w-3 h-3" data-lucide="pencil"></i>
</button>
</div>
</td>
<td className="px-6 py-4">
<span className="text-[10px] text-gray-400">-</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
<tr className="group">
<td className="px-6 py-4 font-mono text-xs text-gray-900">
                        192.168.101.46
                      </td>
<td className="px-6 py-4 text-xs text-gray-500">
                        Secondary (IPv4)
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-xs text-gray-900 border-b border-dashed border-gray-300 cursor-help" title="Reverse DNS improves IP reputation and service identity.">
                            ip-101-46.hype.net
                          </span>
<button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-all p-1 hover:bg-gray-100 rounded" title="Edit rDNS">
<i className="w-3 h-3" data-lucide="pencil"></i>
</button>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700">
                          ISP-Res-NY
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-6 border-b border-gray-200 flex items-center justify-between bg-white">
<div>
<h3 className="text-sm font-semibold text-gray-900">
                      Attached Proxy Pools
                    </h3>
<p className="text-xs text-gray-500 mt-0.5">
                      Link proxy pools that use this server as their gateway.
                    </p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="link"></i>
                    Attach Pool
                  </button>
</div>
<div className="p-6">
<div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">
                          ISP-Res-NY-Cluster
                        </div>
<div className="text-xs text-gray-500 mt-0.5">
                          ISP Proxies • /24 Subnet (256 IPs)
                        </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-gray-900">
                        1.2 TB
                      </div>
<div className="text-xs text-green-600 mt-0.5">Active</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-6 border-b border-gray-200 flex items-center justify-between bg-white">
<h3 className="text-sm font-semibold text-gray-900">
                    Activity Log
                  </h3>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] font-medium bg-gray-100 text-gray-600 rounded-md cursor-pointer border border-gray-200">
                      All
                    </span>
<span className="px-2 py-1 text-[10px] font-medium bg-white text-gray-500 hover:text-gray-700 rounded-md cursor-pointer border border-transparent">
                      Power
                    </span>
<span className="px-2 py-1 text-[10px] font-medium bg-white text-gray-500 hover:text-gray-700 rounded-md cursor-pointer border border-transparent">
                      Network
                    </span>
</div>
</div>
<table className="w-full text-left">
<thead className="bg-gray-50/50 border-b border-gray-100 text-xs text-gray-500 font-medium uppercase tracking-wide">
<tr>
<th className="px-6 py-3">Timestamp</th>
<th className="px-6 py-3">Actor</th>
<th className="px-6 py-3">Event</th>
<th className="px-6 py-3 text-right">Result</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr>
<td className="px-6 py-4 text-xs text-gray-500 font-mono tabular-nums">
                        Oct 24, 14:30
                      </td>
<td className="px-6 py-4 text-xs font-medium text-gray-900">
                        System (Auto)
                      </td>
<td className="px-6 py-4 text-xs text-gray-600">
                        Snapshot created:
                        <span className="font-medium text-gray-900">
                          Pre-Update-Safety
                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Success
                        </div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs text-gray-500 font-mono tabular-nums">
                        Oct 24, 09:15
                      </td>
<td className="px-6 py-4 text-xs font-medium text-gray-900">
                        admin@hype.com
                      </td>
<td className="px-6 py-4 text-xs text-gray-600">
                        Server Reboot Initiated
                      </td>
<td className="px-6 py-4 text-right">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Success
                        </div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Project Context
                </h3>
<div className="space-y-4">
<div>
<div className="text-xs text-gray-500 mb-1">Project</div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Ticketing-US-Cluster
                    </div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Environment</div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] bg-green-50 text-green-700 border border-green-100">
                        Production
                      </span>
</div>
</div>
<div className="pt-2">
<button className="w-full text-xs text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md py-1.5 transition-colors">
                      View Project
                    </button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Tools &amp; Access
                </h3>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left group">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="monitor"></i>
                      IPMI / KVM
                    </span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="external-link"></i>
</button>
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left group">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="life-buoy"></i>
                      Rescue Mode
                    </span>
</button>
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left group">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="file-code"></i>
                      SSH Config
                    </span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="download"></i>
</button>
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left group">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="key"></i>
                      API Credentials
                    </span>
</button>
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
