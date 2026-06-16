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
      

<header className="flex h-10 w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3 z-50">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<iconify-icon icon="solar:layers-minimalistic-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-slate-900">Workflow Engine <span className="text-slate-400 font-normal">/</span> v2.4.0</span>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-1">
<span className="text-[11px] text-slate-500">Project:</span>
<span className="text-[11px] font-medium text-slate-900">Support_Agent_Main</span>
<iconify-icon className="text-slate-400 ml-1" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 mr-2 bg-slate-50 px-2 py-1 rounded border border-slate-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono text-slate-600">socket_connected</span>
</div>
<button className="flex items-center gap-1.5 rounded border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:diskette-linear" width="12"></iconify-icon> Save
            </button>
<button className="flex items-center gap-1.5 rounded bg-slate-900 px-3 py-1 text-[11px] font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
<iconify-icon icon="solar:play-linear" width="12"></iconify-icon> Deploy
            </button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="flex w-64 flex-col border-r border-slate-200 bg-white z-20">
<div className="flex border-b border-slate-200">
<button className="flex-1 border-b-2 border-slate-900 py-2.5 text-[11px] font-medium text-slate-900">Components</button>
<button className="flex-1 border-b-2 border-transparent py-2.5 text-[11px] font-medium text-slate-500 hover:text-slate-700">Variables</button>
</div>
<div className="p-2 border-b border-slate-200">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="12"></iconify-icon>
<input className="w-full rounded bg-slate-50 border border-slate-200 py-1.5 pl-8 pr-2 text-[11px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none transition-colors" placeholder="Search nodes..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-4">

<div>
<h3 className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Triggers</h3>
<div className="space-y-0.5">
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-blue-50 text-blue-600 border border-blue-100">
<iconify-icon icon="solar:chat-round-line-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">Chat Input</span>
<iconify-icon className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400" icon="solar:menu-dots-linear" width="12"></iconify-icon>
</div>
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-purple-50 text-purple-600 border border-purple-100">
<iconify-icon icon="solar:link-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">Webhook</span>
</div>
</div>
</div>

<div>
<h3 className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Compute</h3>
<div className="space-y-0.5">
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-indigo-50 text-indigo-600 border border-indigo-100">
<iconify-icon icon="solar:stars-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">LLM Generation</span>
<span className="ml-auto text-[9px] font-mono text-slate-400">GPT</span>
</div>
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-orange-50 text-orange-600 border border-orange-100">
<iconify-icon icon="solar:code-square-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">Python Script</span>
</div>
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-teal-50 text-teal-600 border border-teal-100">
<iconify-icon icon="solar:branching-paths-down-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">Router / If-Else</span>
</div>
</div>
</div>

<div>
<h3 className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Data</h3>
<div className="space-y-0.5">
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">Vector Search</span>
</div>
<div className="group flex cursor-grab items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="flex h-5 w-5 items-center justify-center rounded bg-amber-50 text-amber-600 border border-amber-100">
<iconify-icon icon="solar:globe-linear" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-slate-700">HTTP Request</span>
</div>
</div>
</div>
</div>

<div className="h-48 border-t border-slate-200 bg-slate-50/50 p-3">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Overview</span>
<span className="text-[10px] text-slate-400">100%</span>
</div>
<div className="w-full h-32 bg-white border border-slate-200 rounded relative overflow-hidden">

<div className="absolute left-2 top-4 w-6 h-4 bg-blue-100 border border-blue-200 rounded-sm"></div>
<div className="absolute left-10 top-8 w-6 h-4 bg-indigo-100 border border-indigo-200 rounded-sm"></div>
<div className="absolute left-20 top-10 w-6 h-4 bg-slate-100 border border-slate-200 rounded-sm"></div>
</div>
</div>
</aside>

<main className="relative flex-1 bg-[#f8fafc] bg-grid-dots overflow-hidden cursor-grab active:cursor-grabbing">

<div className="absolute top-4 left-4 flex flex-col gap-2 z-30">
<div className="flex flex-col rounded-md bg-white border border-slate-200 shadow-sm">
<button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-t-md border-b border-slate-100" title="Select">
<iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-b border-slate-100" title="Pan">
<iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-b-md" title="Comment">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="absolute top-4 right-4 flex gap-2 z-30">
<div className="px-2 py-1 rounded bg-white border border-slate-200 shadow-sm flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
<span className="text-[10px] font-medium text-slate-600">Read-only</span>
</div>
</div>

<svg className="pointer-events-none absolute inset-0 h-full w-full z-0 overflow-visible">
<defs>
<marker id="arrow-default" markerheight="6" markerwidth="6" orient="auto" refx="4" refy="3">
<path d="M0,0 L0,6 L6,3 z" fill="#cbd5e1"></path>
</marker>
<marker id="arrow-active" markerheight="6" markerwidth="6" orient="auto" refx="4" refy="3">
<path d="M0,0 L0,6 L6,3 z" fill="#6366f1"></path>
</marker>
</defs>

<path className="connection-path" d="M 280 180 C 330 180, 330 240, 380 240" marker-end="url(#arrow-default)" stroke="#cbd5e1" strokeWidth="1.5"></path>

<path className="connection-path" d="M 620 240 C 660 240, 660 320, 700 320" marker-end="url(#arrow-default)" stroke="#cbd5e1" strokeWidth="1.5"></path>

<path className="connection-path" d="M 950 320 C 1000 320, 1000 320, 1050 320" marker-end="url(#arrow-active)" stroke="#6366f1" strokeWidth="2"></path>
</svg>

<div className="absolute left-[80px] top-[140px] w-[200px] rounded-md border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all z-10 group">

<div className="flex items-center justify-between border-b border-slate-100 px-2 py-1.5 bg-slate-50/80 rounded-t-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chat-round-line-linear" width="14"></iconify-icon>
<span className="text-[11px] font-semibold text-slate-800">Chat Input</span>
</div>
<span className="text-[9px] font-mono text-slate-400">#TR-01</span>
</div>

<div className="p-2 space-y-2">
<div className="flex justify-between items-center">
<span className="text-[10px] text-slate-500 font-medium">Output</span>
<span className="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-mono text-slate-600">String</span>
</div>
<div className="rounded bg-slate-50 border border-slate-100 p-1.5">
<div className="text-[10px] text-slate-600 italic">"How do I reset my API key?"</div>
</div>
</div>

<div className="absolute -right-1.5 top-10 h-3 w-3 rounded-full border border-slate-300 bg-white hover:bg-blue-500 hover:border-blue-500 z-20 cursor-crosshair shadow-sm"></div>
</div>

<div className="absolute left-[380px] top-[180px] w-[240px] rounded-md border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-orange-300 transition-all z-10">
<div className="flex items-center justify-between border-b border-slate-100 px-2 py-1.5 bg-slate-50/80 rounded-t-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:code-square-linear" width="14"></iconify-icon>
<span className="text-[11px] font-semibold text-slate-800">Context Builder</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400 hover:text-green-500 cursor-pointer" icon="solar:play-circle-linear" width="12"></iconify-icon>
</div>
</div>
<div className="p-2 space-y-2.5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="h-2 w-2 rounded-full border border-blue-400 bg-blue-100"></div>
<span className="text-[10px] text-slate-600">query</span>
</div>
<span className="text-[9px] font-mono text-slate-400 truncate max-w-[80px]">TR-01.output</span>
</div>

<div className="relative rounded border border-slate-200 bg-white">
<div className="absolute top-0 right-0 p-1 bg-slate-50 border-b border-l border-slate-100 rounded-bl text-[8px] font-mono text-slate-500">PY</div>
<div className="p-1.5 font-mono text-[9px] leading-relaxed text-slate-600">
<span className="cm-keyword">def</span> <span className="cm-number">process</span>(query):<br/>
                              <span className="cm-keyword">return</span> {<br/>
                                <span className="cm-string">"q"</span>: query.trim(),<br/>
                                <span className="cm-string">"ts"</span>: time.now()<br/>
                              }
                        </div>
</div>
</div>
<div className="px-2 py-1 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-b-md">
<span className="text-[9px] text-slate-400">Duration: 45ms</span>
<span className="text-[9px] text-green-600 flex items-center gap-1"><iconify-icon icon="solar:check-circle-bold" width="8"></iconify-icon> Success</span>
</div>

<div className="absolute -left-1.5 top-10 h-3 w-3 rounded-full border border-slate-300 bg-slate-100 hover:border-blue-500 z-20"></div>
<div className="absolute -right-1.5 top-10 h-3 w-3 rounded-full border border-slate-300 bg-white hover:bg-orange-500 hover:border-orange-500 z-20 cursor-crosshair shadow-sm"></div>
</div>

<div className="absolute left-[700px] top-[240px] w-[260px] rounded-md border border-indigo-500 bg-white shadow-lg shadow-indigo-100 z-20 ring-1 ring-indigo-500/20">
<div className="flex items-center justify-between border-b border-indigo-100 px-2 py-1.5 bg-indigo-50/30 rounded-t-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:stars-linear" width="14"></iconify-icon>
<span className="text-[11px] font-semibold text-slate-900">LLM Inference</span>
</div>
<span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-[9px] font-bold tracking-wide">ACTIVE</span>
</div>
<div className="p-2 space-y-3">

<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-[9px] font-medium text-slate-500 mb-0.5">Model</label>
<div className="flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 py-1">
<iconify-icon className="text-slate-400" icon="solar:bolt-circle-linear" width="10"></iconify-icon>
<span className="text-[10px] font-medium text-slate-700">gpt-4-turbo</span>
</div>
</div>
<div>
<label className="block text-[9px] font-medium text-slate-500 mb-0.5">Temp</label>
<div className="flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 py-1">
<span className="text-[10px] font-mono text-slate-700">0.7</span>
</div>
</div>
</div>

<div className="space-y-1.5 pt-1">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-1.5">
<div className="h-2 w-2 rounded-full border border-orange-400 bg-orange-100"></div>
<span className="text-[10px] text-slate-600">system_prompt</span>
</div>
<iconify-icon className="hidden group-hover:block text-slate-400" icon="solar:link-broken-linear" width="10"></iconify-icon>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-1.5">
<div className="h-2 w-2 rounded-full border border-orange-400 bg-orange-100"></div>
<span className="text-[10px] text-slate-600">user_message</span>
</div>
<span className="text-[9px] font-mono text-indigo-600 bg-indigo-50 px-1 rounded">connected</span>
</div>
</div>
</div>

<div className="px-2 py-1.5 border-t border-indigo-50 bg-indigo-50/10 flex justify-between items-center rounded-b-md">
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-[9px] text-slate-500">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon> 2.4s
                        </span>
<span className="flex items-center gap-1 text-[9px] text-slate-500">
<iconify-icon icon="solar:ticket-linear" width="10"></iconify-icon> 420 toks
                        </span>
</div>
<span className="text-[9px] font-mono text-slate-400">$0.012</span>
</div>

<div className="absolute -left-1.5 top-12 h-3 w-3 rounded-full border border-indigo-200 bg-white hover:border-indigo-500 z-20"></div>
<div className="absolute -right-1.5 top-12 h-3 w-3 rounded-full border border-indigo-500 bg-indigo-600 z-20 cursor-crosshair shadow-sm ring-2 ring-white"></div>
</div>

<div className="absolute left-[1050px] top-[280px] w-[200px] rounded-md border border-slate-200 bg-white shadow-sm opacity-90 z-10">
<div className="flex items-center justify-between border-b border-slate-100 px-2 py-1.5 rounded-t-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:database-linear" width="14"></iconify-icon>
<span className="text-[11px] font-semibold text-slate-800">Vector Store</span>
</div>
</div>
<div className="p-2">
<div className="flex items-center gap-1.5 mb-2">
<div className="h-2 w-2 rounded-full border border-indigo-400 bg-indigo-100"></div>
<span className="text-[10px] text-slate-600">embedding</span>
</div>
<div className="flex items-center gap-1.5">
<div className="h-2 w-2 rounded-full border border-slate-300 bg-slate-100"></div>
<span className="text-[10px] text-slate-400">metadata</span>
</div>
</div>
<div className="absolute -left-1.5 top-10 h-3 w-3 rounded-full border border-slate-300 bg-slate-100 z-20"></div>
</div>
</main>

<aside className="flex w-[340px] flex-col border-l border-slate-200 bg-white z-20 shadow-xl shadow-slate-200/50">

<div className="flex items-center justify-between px-3 py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<span className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">Inspector</span>
</div>
<div className="flex gap-1">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-4 border-b border-slate-100 bg-slate-50/50">
<div className="flex items-start gap-3">
<div className="mt-1 flex h-8 w-8 items-center justify-center rounded bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon icon="solar:stars-bold-duotone" width="18"></iconify-icon>
</div>
<div className="flex-1">
<h2 className="text-sm font-semibold text-slate-900">LLM Inference</h2>
<p className="text-[11px] text-slate-500 mt-0.5">Generates text using OpenAI models.</p>
<div className="flex gap-2 mt-2">
<span className="px-1.5 py-0.5 bg-slate-200 rounded text-[9px] font-mono text-slate-600">ID: node_8842</span>
<span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[9px] font-medium">v1.2</span>
</div>
</div>
</div>
</div>

<div className="flex border-b border-slate-200 px-1">
<button className="flex-1 border-b-2 border-indigo-600 py-2 text-[11px] font-semibold text-indigo-600">Configuration</button>
<button className="flex-1 border-b-2 border-transparent py-2 text-[11px] font-medium text-slate-500 hover:text-slate-700">History</button>
<button className="flex-1 border-b-2 border-transparent py-2 text-[11px] font-medium text-slate-500 hover:text-slate-700">JSON</button>
</div>

<div className="p-4 space-y-5">

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-[11px] font-semibold text-slate-900">Model Provider</label>
<span className="text-[9px] text-indigo-600 cursor-pointer hover:underline">Manage Keys</span>
</div>
<div className="relative">
<select className="w-full appearance-none rounded border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>OpenAI Platform</option>
<option>Azure OpenAI</option>
<option>Anthropic</option>
</select>
<iconify-icon className="absolute right-2.5 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<label className="text-[11px] font-semibold text-slate-900">Model Name</label>
<div className="relative">
<select className="w-full appearance-none rounded border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>gpt-4-turbo-2024-04-09</option>
<option>gpt-3.5-turbo-0125</option>
</select>
<iconify-icon className="absolute right-2.5 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</div>
</div>
<div className="h-px bg-slate-100"></div>

<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between">
<label className="text-[11px] font-semibold text-slate-900">Temperature</label>
<input className="w-10 rounded border border-slate-200 px-1 py-0.5 text-right text-[10px] text-slate-600 focus:border-indigo-500 focus:outline-none" type="number" value="0.7"/>
</div>
<input className="w-full accent-indigo-600" max="1" min="0" step="0.1" type="range" value="0.7"/>
</div>
<div className="space-y-2">
<div className="flex justify-between">
<label className="text-[11px] font-semibold text-slate-900">Max Tokens</label>
<input className="w-12 rounded border border-slate-200 px-1 py-0.5 text-right text-[10px] text-slate-600 focus:border-indigo-500 focus:outline-none" type="number" value="2048"/>
</div>
<input className="w-full accent-indigo-600" max="8000" min="100" step="100" type="range" value="2048"/>
</div>
</div>
<div className="h-px bg-slate-100"></div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-[11px] font-semibold text-slate-900">System Prompt</label>
<button className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:maximize-square-linear" width="10"></iconify-icon> Expand</button>
</div>
<div className="rounded border border-slate-200 bg-white p-0 overflow-hidden shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
<div className="bg-slate-50 border-b border-slate-200 px-2 py-1 flex items-center gap-2">
<span className="text-[9px] font-mono text-slate-500">jinja2</span>
</div>
<textarea className="w-full resize-y border-none bg-white p-2 text-[10px] font-mono leading-relaxed text-slate-700 focus:ring-0 min-h-[100px]" spellcheck="false">You are a helpful assistant.

Context: {{ContextBuilder.output}}

User Query: {{ChatInput.message}}

Answer concisely in JSON format.</textarea>
</div>
<div className="flex gap-2 flex-wrap">
<span className="inline-flex items-center rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{{ContextBuilder.output}}</span>
<span className="inline-flex items-center rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{{ChatInput.message}}</span>
</div>
</div>

<div className="space-y-2 pt-2">
<div className="flex items-center justify-between py-1">
<div className="flex flex-col">
<span className="text-[11px] font-medium text-slate-700">JSON Mode</span>
<span className="text-[9px] text-slate-400">Enforce valid JSON output</span>
</div>
<div className="relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
<span className="translate-x-3 pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 bg-slate-50 p-3">
<button className="flex w-full items-center justify-center gap-2 rounded-md bg-white border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all">
<iconify-icon className="text-indigo-600" icon="solar:play-linear" width="14"></iconify-icon>
                    Run This Node
                </button>
</div>
</aside>
</div>

    </>
  );
}
