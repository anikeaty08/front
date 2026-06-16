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
      

<aside className="w-64 border-r border-neutral-800 flex flex-col bg-[#0a0a0a] flex-shrink-0">

<div className="h-14 flex items-center px-4 border-b border-neutral-800">
<div className="flex items-center gap-2 text-neutral-100 font-medium tracking-tight">
<div className="w-6 h-6 bg-neutral-100 text-black rounded flex items-center justify-center text-xs font-bold">D</div>
<span>DataStudio</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4 px-2 space-y-6">

<div>
<div className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Favorites</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors group">
<span className="iconify text-neutral-500 group-hover:text-indigo-400" data-icon="lucide:star" data-width="16"></span>
<span>production_logs</span>
</button>
</li>
</ul>
</div>

<div>
<div className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 flex justify-between items-center group cursor-pointer">
<span>Explorer</span>
<span className="iconify opacity-0 group-hover:opacity-100" data-icon="lucide:plus" data-width="14"></span>
</div>
<ul className="space-y-0.5">

<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors">
<span className="iconify text-neutral-500" data-icon="lucide:chevron-down" data-width="16"></span>
<span className="iconify text-indigo-400" data-icon="lucide:table-2" data-width="16"></span>
<span className="text-white">Tables</span>
<span className="ml-auto text-xs text-neutral-600">14</span>
</button>
<ul className="pl-9 mt-1 space-y-0.5 border-l border-neutral-800/50 ml-4">
<li><button className="w-full text-left px-2 py-1 text-neutral-400 hover:text-indigo-300 transition-colors">users</button></li>
<li><button className="w-full text-left px-2 py-1 text-neutral-400 hover:text-indigo-300 transition-colors">orders</button></li>
<li><button className="w-full text-left px-2 py-1 text-neutral-400 hover:text-indigo-300 transition-colors">products</button></li>
</ul>
</li>

<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors">
<span className="iconify text-neutral-500" data-icon="lucide:chevron-right" data-width="16"></span>
<span className="iconify text-emerald-500" data-icon="lucide:file-json-2" data-width="16"></span>
<span>Documents</span>
</button>
</li>

<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors">
<span className="iconify text-neutral-500" data-icon="lucide:chevron-right" data-width="16"></span>
<span className="iconify text-orange-400" data-icon="lucide:box" data-width="16"></span>
<span>Schemas</span>
</button>
</li>
</ul>
</div>

<div>
<div className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Tools</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded bg-neutral-800 text-white font-medium border border-neutral-700/50 shadow-sm">
<span className="iconify text-indigo-400" data-icon="lucide:terminal-square" data-width="16"></span>
<span>Playground</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors">
<span className="iconify text-neutral-500" data-icon="lucide:settings-2" data-width="16"></span>
<span>Settings</span>
</button>
</li>
</ul>
</div>
</div>

<div className="p-4 border-t border-neutral-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-500"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">DevUser</span>
<span className="text-xs text-neutral-500">admin@org</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#09090b]">

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-20">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-neutral-200">
<span className="iconify text-neutral-500" data-icon="lucide:building-2" data-width="16"></span>
<span className="font-medium">Acme Corp</span>
<span className="text-neutral-600">/</span>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs">
<span>tenant-8392</span>
<span className="iconify text-neutral-500" data-icon="lucide:chevrons-up-down" data-width="12"></span>
</div>
</div>
<div className="h-4 w-px bg-neutral-800"></div>

<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-green-400 tracking-wide">STAGING</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
<span>24ms latency</span>
</div>
<button className="p-2 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white text-black rounded hover:bg-neutral-200 transition-colors">
                    Feedback
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-16">



<section className="flex flex-col h-[600px] border border-neutral-800 rounded-lg bg-[#0c0c0c] overflow-hidden shadow-sm">

<div className="flex items-center border-b border-neutral-800 bg-[#0a0a0a]">
<div className="flex">
<button className="px-4 py-3 text-xs font-medium text-indigo-400 border-b-2 border-indigo-500 bg-[#0f0f0f] flex items-center gap-2">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
                            GET Users by Role
                        </button>
<button className="px-4 py-3 text-xs font-medium text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50 flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:file-code" data-width="14"></span>
                            Update Order Status
                        </button>
</div>
<div className="ml-auto px-4 flex items-center gap-2">
<span className="text-xs text-neutral-600">Autosaved</span>
</div>
</div>

<div className="h-12 border-b border-neutral-800 flex items-center justify-between px-4 bg-[#0c0c0c]">
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors shadow-lg shadow-indigo-900/20">
<span className="iconify" data-icon="lucide:play" data-width="14"></span>
                            Run Query
                        </button>
<div className="h-4 w-px bg-neutral-800"></div>
<select className="bg-transparent text-xs text-neutral-400 border-none focus:ring-0 cursor-pointer">
<option>Preset: Find Active Users</option>
</select>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span>Limit: 100</span>
<span>Timeout: 5s</span>
</div>
</div>

<div className="flex-1 flex min-h-0">

<div className="w-1/2 border-r border-neutral-800 flex flex-col bg-[#050505]">
<div className="flex-1 p-4 font-mono text-xs/6 overflow-auto">
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">1</div>
<div><span className="syntax-k">query</span> <span className="syntax-f">getUsers</span>($role: String!) {</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">2</div>
<div className="pl-4">users(</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">3</div>
<div className="pl-8">where: { role: { _eq: $role } }</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">4</div>
<div className="pl-8">order_by: { created_at: desc }</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">5</div>
<div className="pl-4">) {</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">6</div>
<div className="pl-8">id</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">7</div>
<div className="pl-8">email</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">8</div>
<div className="pl-8">profile {</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">9</div>
<div className="pl-12">full_name</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">10</div>
<div className="pl-8">}</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">11</div>
<div className="pl-4">}</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">12</div>
<div>}</div>
</div>
<div className="flex mt-4">
<div className="text-neutral-700 pr-4 select-none text-right w-8">13</div>
<div className="syntax-c"># Variables</div>
</div>
<div className="flex">
<div className="text-neutral-700 pr-4 select-none text-right w-8">14</div>
<div>{ <span className="syntax-s">"role"</span>: <span className="syntax-s">"admin"</span> }</div>
</div>
</div>
</div>

<div className="w-1/2 flex flex-col bg-[#09090b]">
<div className="flex items-center justify-between px-4 py-2 bg-[#0c0c0c] border-b border-neutral-800">
<span className="text-xs font-medium text-emerald-500">200 OK</span>
<span className="text-xs text-neutral-600">124ms · 4.2KB</span>
</div>
<div className="flex-1 p-4 overflow-auto font-mono text-xs/6">
<span className="text-neutral-500">{</span>
<div className="pl-4">
<span className="syntax-s">"data"</span>: <span className="text-neutral-500">{</span>
<div className="pl-4">
<span className="syntax-s">"users"</span>: <span className="text-neutral-500">[</span>
<div className="pl-4">
<span className="text-neutral-500">{</span>
<div className="pl-4">
<span className="syntax-s">"id"</span>: <span className="syntax-s">"usr_82910"</span><span className="text-neutral-500">,</span><br/>
<span className="syntax-s">"email"</span>: <span className="syntax-s">"sarah.c@acme.com"</span><span className="text-neutral-500">,</span><br/>
<span className="syntax-s">"profile"</span>: <span className="text-neutral-500">{</span>
<span className="syntax-s">"full_name"</span>: <span className="syntax-s">"Sarah Connor"</span>
<span className="text-neutral-500">}</span>
</div>
<span className="text-neutral-500">},</span>
</div>
<div className="pl-4">
<span className="text-neutral-500">{</span>
<div className="pl-4">
<span className="syntax-s">"id"</span>: <span className="syntax-s">"usr_11029"</span><span className="text-neutral-500">,</span><br/>
<span className="syntax-s">"email"</span>: <span className="syntax-s">"j.doe@acme.com"</span><span className="text-neutral-500">,</span><br/>
<span className="syntax-s">"profile"</span>: <span className="text-neutral-500">{</span>
<span className="syntax-s">"full_name"</span>: <span className="syntax-s">"John Doe"</span>
<span className="text-neutral-500">}</span>
</div>
<span className="text-neutral-500">}</span>
</div>
<span className="text-neutral-500">]</span>
</div>
<span className="text-neutral-500">}</span>
</div>
<span className="text-neutral-500">}</span>
</div>

<div className="h-32 border-t border-neutral-800 bg-[#050505] flex flex-col">
<div className="px-4 py-1 bg-[#0a0a0a] border-b border-neutral-800 flex gap-4 text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
<span>Console</span>
<span>Timeline</span>
</div>
<div className="p-2 overflow-auto font-mono text-[11px] space-y-1">
<div className="flex gap-2 text-neutral-400">
<span className="text-neutral-600">10:42:01</span>
<span>Executing query "getUsers"...</span>
</div>
<div className="flex gap-2 text-neutral-400">
<span className="text-neutral-600">10:42:01</span>
<span>Connected to backend <span className="text-green-500">us-east-1</span></span>
</div>
</div>
</div>
</div>
</div>
</section>



<section>
<div className="mb-4 flex items-end justify-between">
<div>
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:table-2" data-width="20"></span>
                            public.users
                        </h2>
<p className="text-xs text-neutral-500 mt-1">1,240 records · Sorted by created_at desc</p>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="absolute left-2.5 top-1.5 iconify text-neutral-500" data-icon="lucide:search" data-width="14"></span>
<input className="pl-8 pr-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-xs text-white focus:outline-none focus:border-indigo-500/50 w-64 placeholder:text-neutral-600" placeholder="Filter id, email..." type="text"/>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-white text-black rounded text-xs font-medium transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                            Add Row
                        </button>
<button className="p-1.5 text-neutral-400 border border-neutral-800 rounded bg-neutral-900 hover:text-white">
<span className="iconify" data-icon="lucide:columns" data-width="14"></span>
</button>
</div>
</div>
<div className="border border-neutral-800 rounded-lg overflow-hidden bg-[#0c0c0c]">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800 text-xs font-medium text-neutral-500 bg-[#0a0a0a]">
<th className="w-10 px-4 py-2.5 text-center bg-[#0a0a0a] sticky left-0 z-10">
<input className="rounded border-neutral-700 bg-neutral-800 text-indigo-500 focus:ring-0" type="checkbox"/>
</th>
<th className="px-4 py-2.5 whitespace-nowrap group cursor-pointer hover:bg-neutral-800/50">
<div className="flex items-center gap-1.5">
<span className="iconify text-neutral-600" data-icon="lucide:key" data-width="12"></span>
                                            id
                                        </div>
</th>
<th className="px-4 py-2.5 whitespace-nowrap group cursor-pointer hover:bg-neutral-800/50">
<div className="flex items-center gap-1.5">
<span className="iconify text-neutral-600" data-icon="lucide:type" data-width="12"></span>
                                            email
                                        </div>
</th>
<th className="px-4 py-2.5 whitespace-nowrap group cursor-pointer hover:bg-neutral-800/50">
<div className="flex items-center gap-1.5">
<span className="iconify text-neutral-600" data-icon="lucide:toggle-right" data-width="12"></span>
                                            is_verified
                                        </div>
</th>
<th className="px-4 py-2.5 whitespace-nowrap group cursor-pointer hover:bg-neutral-800/50">
<div className="flex items-center gap-1.5">
<span className="iconify text-neutral-600" data-icon="lucide:calendar" data-width="12"></span>
                                            created_at
                                            <span className="iconify text-neutral-600" data-icon="lucide:arrow-down" data-width="12"></span>
</div>
</th>
<th className="px-4 py-2.5 w-10"></th>
</tr>
</thead>
<tbody className="text-xs text-neutral-300 divide-y divide-neutral-800/50">
<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="px-4 py-2 text-center sticky left-0 bg-[#0c0c0c] group-hover:bg-[#161616]">
<input className="rounded border-neutral-700 bg-neutral-800 text-indigo-500 focus:ring-0" type="checkbox"/>
</td>
<td className="px-4 py-2 font-mono text-neutral-500">usr_839201</td>
<td className="px-4 py-2 text-white">alex.rivers@example.com</td>
<td className="px-4 py-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">TRUE</span>
</td>
<td className="px-4 py-2 text-neutral-500">2023-10-12 08:42:00</td>
<td className="px-4 py-2 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-neutral-700 rounded"><span className="iconify" data-icon="lucide:pencil" data-width="12"></span></button>
</td>
</tr>
<tr className="group hover:bg-neutral-800/30 transition-colors bg-neutral-800/10">
<td className="px-4 py-2 text-center sticky left-0 bg-[#111] group-hover:bg-[#161616]">
<input className="rounded border-neutral-700 bg-neutral-800 text-indigo-500 focus:ring-0" type="checkbox"/>
</td>
<td className="px-4 py-2 font-mono text-neutral-500">usr_992102</td>
<td className="px-4 py-2 text-white">dev.test@acme.corp</td>
<td className="px-4 py-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">FALSE</span>
</td>
<td className="px-4 py-2 text-neutral-500">2023-10-11 14:20:10</td>
<td className="px-4 py-2 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-neutral-700 rounded"><span className="iconify" data-icon="lucide:pencil" data-width="12"></span></button>
</td>
</tr>

<tr className="bg-neutral-900/30 border-l-2 border-l-indigo-500">
<td className="px-4 py-2 text-center">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="12"></span>
</td>
<td className="px-4 py-2 font-mono text-neutral-600 italic">auto-gen</td>
<td className="px-4 py-0">
<input className="w-full bg-transparent border-none text-xs focus:ring-0 text-white placeholder-neutral-600" placeholder="Enter email..." type="text"/>
</td>
<td className="px-4 py-2">
<input className="rounded border-neutral-700 bg-neutral-800" type="checkbox"/>
</td>
<td className="px-4 py-2 font-mono text-neutral-600 italic">now()</td>
<td className="px-4 py-2"></td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
<span>Showing 1-2 of 1240</span>
<div className="flex gap-2">
<button className="px-2 py-1 rounded hover:bg-neutral-800 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 rounded hover:bg-neutral-800 text-white">Next</button>
</div>
</div>
</div>
</section>



<section>
<div className="mb-4 flex items-end justify-between">
<div>
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:file-json-2" data-width="20"></span>
                            collection: system_logs
                        </h2>
</div>
<div className="flex gap-2">
<div className="flex items-center bg-neutral-900 border border-neutral-800 rounded px-2">
<span className="text-neutral-500 text-xs px-1 font-mono">{ }</span>
<input className="bg-transparent border-none text-xs text-white focus:ring-0 w-48 font-mono" placeholder='{"level": "error"}' type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">

<div className="bg-[#0c0c0c] border border-neutral-800 rounded-lg p-4 hover:border-neutral-600 transition-colors cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button className="p-1 hover:bg-neutral-800 rounded text-neutral-400"><span className="iconify" data-icon="lucide:maximize-2" data-width="14"></span></button>
<button className="p-1 hover:bg-red-900/30 hover:text-red-400 rounded text-neutral-400"><span className="iconify" data-icon="lucide:trash" data-width="14"></span></button>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="font-mono text-xs text-neutral-300">log_9921</span>
</div>
<div className="font-mono text-[11px] leading-relaxed text-neutral-500 truncate">
                            {<br/>
                              <span className="syntax-s">"level"</span>: <span className="syntax-s">"error"</span>,<br/>
                              <span className="syntax-s">"service"</span>: <span className="syntax-s">"auth-worker"</span>,<br/>
                              <span className="syntax-s">"msg"</span>: <span className="syntax-s">"Connection timeout..."</span><br/>
                            }
                        </div>
<div className="mt-3 pt-3 border-t border-neutral-800/50 flex justify-between items-center">
<span className="text-[10px] text-neutral-600">2 min ago</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">v2.1</span>
</div>
</div>

<div className="bg-[#0c0c0c] border border-neutral-800 rounded-lg p-4 hover:border-neutral-600 transition-colors cursor-pointer group relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="font-mono text-xs text-neutral-300">log_9922</span>
</div>
<div className="font-mono text-[11px] leading-relaxed text-neutral-500">
                            {<br/>
                              <span className="syntax-s">"level"</span>: <span className="syntax-s">"info"</span>,<br/>
                              <span className="syntax-s">"service"</span>: <span className="syntax-s">"api-gateway"</span>,<br/>
                              <span className="syntax-s">"status"</span>: 200<br/>
                            }
                        </div>
<div className="mt-3 pt-3 border-t border-neutral-800/50 flex justify-between items-center">
<span className="text-[10px] text-neutral-600">5 min ago</span>
</div>
</div>

<div className="border border-dashed border-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center text-neutral-600 hover:border-neutral-600 hover:text-neutral-400 hover:bg-neutral-900/20 transition-all cursor-pointer min-h-[140px]">
<span className="iconify mb-2" data-icon="lucide:plus" data-width="24"></span>
<span className="text-xs font-medium">New Document</span>
</div>
</div>
</section>



<section>
<div className="mb-4">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:box" data-width="20"></span>
                        Schema Inspector
                    </h2>
</div>
<div className="relative h-96 bg-[#0c0c0c] rounded-xl border border-neutral-800 overflow-hidden" style={{backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '20px 20px'}}>

<div className="absolute top-10 left-10 w-64 bg-[#0a0a0a] border border-neutral-700 rounded-lg shadow-xl shadow-black/50 z-10">
<div className="px-3 py-2 border-b border-neutral-800 bg-neutral-900/50 flex justify-between items-center">
<span className="font-bold text-neutral-200 text-xs">Users</span>
<span className="iconify text-neutral-500" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="p-1">
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-neutral-800/50 rounded">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:key" data-width="12"></span>
<span className="text-neutral-300 text-xs">id</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">UUID</span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-neutral-800/50 rounded">
<div className="flex items-center gap-2">
<span className="w-3"></span>
<span className="text-neutral-300 text-xs">email</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">String</span>
</div>

<div className="flex items-center justify-between px-2 py-1.5 hover:bg-neutral-800/50 rounded bg-neutral-800/20">
<div className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:link" data-width="12"></span>
<span className="text-neutral-300 text-xs">posts</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">[Post]</span>
</div>
</div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
<path d="M 320 60 C 400 60, 400 140, 480 140" fill="none" stroke="#404040" strokeWidth="2"></path>
</svg>

<div className="absolute top-28 left-[480px] w-64 bg-[#0a0a0a] border border-neutral-700 rounded-lg shadow-xl shadow-black/50 z-10">
<div className="px-3 py-2 border-b border-neutral-800 bg-neutral-900/50 flex justify-between items-center">
<span className="font-bold text-neutral-200 text-xs">Posts</span>
<span className="iconify text-neutral-500" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="p-1">
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-neutral-800/50 rounded">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:key" data-width="12"></span>
<span className="text-neutral-300 text-xs">id</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">UUID</span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-neutral-800/50 rounded bg-neutral-800/20">
<div className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:link" data-width="12"></span>
<span className="text-neutral-300 text-xs">author_id</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">User</span>
</div>
</div>
</div>
</div>
</section>



<section className="max-w-2xl pb-20">
<div className="mb-6">
<h2 className="text-lg font-medium text-white tracking-tight">Tenant Settings</h2>
<p className="text-sm text-neutral-500">Configuration for 'tenant-8392' (Production)</p>
</div>
<div className="space-y-6">

<div className="border border-neutral-800 rounded-lg bg-[#0c0c0c] overflow-hidden">
<div className="px-6 py-4 border-b border-neutral-800">
<h3 className="text-sm font-medium text-white">API Credentials</h3>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Public Key</label>
<div className="flex gap-2">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500" readonly="" type="text" value="pk_test_51Mx..."/>
<button className="px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Secret Key</label>
<div className="flex gap-2">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500" readonly="" type="password" value="sk_test_51Mx........................"/>
<button className="px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</button>
</div>
<p className="mt-2 text-[11px] text-neutral-500">Never share your secret key client-side.</p>
</div>
</div>
</div>

<div className="border border-red-900/30 rounded-lg bg-red-950/5 overflow-hidden">
<div className="px-6 py-4 flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-red-400">Reload Schema Cache</h3>
<p className="text-xs text-neutral-500 mt-1">Useful if schema changes aren't reflecting immediately.</p>
</div>
<button className="px-3 py-1.5 bg-transparent border border-red-900/50 text-red-400 text-xs font-medium rounded hover:bg-red-900/20 transition-colors">
                                Reload
                            </button>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
