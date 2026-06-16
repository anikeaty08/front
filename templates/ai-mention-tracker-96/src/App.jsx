import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
},
reddit: {
500: '#FF4500',
600: '#e03d00'
}
},
fontSize: {
xxs: '0.65rem',
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
      

<div className="w-full bg-slate-900 text-white overflow-hidden whitespace-nowrap border-b border-slate-800 relative z-50">
<div className="animate-marquee inline-flex items-center gap-10 py-2">

<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-slate-400">r/programming</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span className="text-white">CLAUDE 3.5</span>
<span className="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +124 mentions</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">COPILOT</span>
<span className="text-rose-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> -12 mentions</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">LLAMA 3</span>
<span className="text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Stable</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">MISTRAL</span>
<span className="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +45% vol</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">DEVIN</span>
<span className="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +32 mentions</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">CURSOR</span>
<span className="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +89 mentions</span>
</div>

<div className="flex items-center gap-3 text-xs font-medium border-l border-slate-700 pl-10">
<span className="text-slate-400">r/programming</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span className="text-white">CLAUDE 3.5</span>
<span className="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +124 mentions</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">COPILOT</span>
<span className="text-rose-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> -12 mentions</span>
</div>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="text-white">LLAMA 3</span>
<span className="text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Stable</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">

<a className="group flex items-center gap-2" href="#">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md ring-1 ring-slate-900/10 transition group-hover:bg-slate-800">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-slate-900">Mention Tracker</span>
<span className="text-[10px] font-medium text-slate-500 tracking-wide">r/programming edition</span>
</div>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-900 transition hover:text-slate-600" href="#leaderboard">Trends</a>
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#activity">Live Feed</a>
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#methodology">Methodology</a>
</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Scanning r/programming
                </div>
<div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
<div className="relative w-full sm:w-48 hidden sm:block">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<input className="block w-full rounded-md border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs leading-5 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Filter agents..." type="text"/>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex-grow w-full">

<div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-8">
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">24h Mentions</p>
<iconify-icon className="text-slate-400" icon="solar:chat-square-like-linear" width="16"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-xl font-bold tracking-tight text-slate-900">1,892</p>
<span className="text-xs font-medium text-emerald-600">+12% vs yesterday</span>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Top Trending</p>
<iconify-icon className="text-slate-400" icon="solar:fire-linear" width="16"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-xl font-bold tracking-tight text-slate-900">Claude 3.5</p>
<span className="text-xs font-medium text-slate-400">324 posts</span>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Top Context</p>
<iconify-icon className="text-slate-400" icon="solar:tag-linear" width="16"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-xl font-bold tracking-tight text-slate-900">Code Quality</p>
<span className="text-xs font-medium text-slate-400">vs "Refactoring"</span>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Sentiment</p>
<iconify-icon className="text-slate-400" icon="solar:smile-circle-linear" width="16"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-xl font-bold tracking-tight text-slate-900">Cautious</p>
<span className="text-xs font-medium text-slate-400">More skeptical</span>
</div>
</div>
</div>

<div className="mb-12" id="leaderboard">

<div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Trending in r/programming</h1>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 font-medium hidden sm:block">Timeframe:</span>
<div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
<button className="rounded px-3 py-1 text-xs font-medium text-white bg-slate-900 shadow-sm transition">24H</button>
<button className="rounded px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition">7D</button>
<button className="rounded px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition">30D</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

<div className="lg:col-span-3">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
<div className="overflow-x-auto custom-scrollbar">
<table className="min-w-full divide-y divide-slate-100">
<thead className="bg-slate-50/50">
<tr>
<th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 tracking-wide w-12" scope="col">Rank</th>
<th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 tracking-wide" scope="col">Tool / Agent</th>
<th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 tracking-wide" scope="col">Mentions</th>
<th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 tracking-wide" scope="col">Trend</th>
<th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 tracking-wide pl-8 hidden sm:table-cell" scope="col">Sentiment</th>
<th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 tracking-wide" scope="col">Activity (24h)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">

<tr className="group cursor-pointer hover:bg-slate-50/80 transition-colors bg-orange-50/10">
<td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-400">1</td>
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 ring-1 ring-black/5 shadow-sm">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div className="ml-3">
<div className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">Claude 3.5 Sonnet</div>
<div className="text-xxs font-bold text-slate-400 uppercase tracking-wide">Anthropic</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-slate-900">324</td>
<td className="whitespace-nowrap px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-emerald-600 bg-emerald-50">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2.5" width="10"></iconify-icon>
                                                12%
                                            </span>
</td>
<td className="whitespace-nowrap px-4 py-3 pl-8 hidden sm:table-cell">
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-emerald-500 w-[75%]"></div>
</div>
<span className="text-xxs font-medium text-emerald-600">75% Pos</span>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 flex justify-end">
<svg className="h-8 w-28 overflow-visible" fill="none" stroke="currentColor" viewbox="0 0 100 24">
<path className="text-orange-500 vector-effect-non-scaling-stroke" d="M0 20 L15 15 L30 18 L45 8 L60 12 L75 5 L90 10 L100 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</td>
</tr>

<tr className="group cursor-pointer hover:bg-slate-50/80 transition-colors">
<td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-400">2</td>
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 ring-1 ring-black/5 shadow-sm">
<iconify-icon icon="solar:cpu-bolt-linear" width="16"></iconify-icon>
</div>
<div className="ml-3">
<div className="text-sm font-semibold text-slate-900 group-hover:text-green-600 transition-colors">GPT-4o</div>
<div className="text-xxs font-bold text-slate-400 uppercase tracking-wide">OpenAI</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-slate-900">289</td>
<td className="whitespace-nowrap px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-rose-600 bg-rose-50">
<iconify-icon icon="solar:arrow-right-down-linear" strokeWidth="2.5" width="10"></iconify-icon>
                                                4%
                                            </span>
</td>
<td className="whitespace-nowrap px-4 py-3 pl-8 hidden sm:table-cell">
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-yellow-500 w-[55%]"></div>
</div>
<span className="text-xxs font-medium text-slate-500">55% Pos</span>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 flex justify-end">
<svg className="h-8 w-28 overflow-visible" fill="none" stroke="currentColor" viewbox="0 0 100 24">
<path className="text-slate-400 vector-effect-non-scaling-stroke" d="M0 10 L15 12 L30 15 L45 10 L60 18 L75 14 L90 20 L100 22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</td>
</tr>

<tr className="group cursor-pointer hover:bg-slate-50/80 transition-colors">
<td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-400">3</td>
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 ring-1 ring-black/5 shadow-sm">
<iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon>
</div>
<div className="ml-3">
<div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Cursor</div>
<div className="text-xxs font-bold text-slate-400 uppercase tracking-wide">Editor</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-slate-900">210</td>
<td className="whitespace-nowrap px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-emerald-600 bg-emerald-50">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2.5" width="10"></iconify-icon>
                                                24%
                                            </span>
</td>
<td className="whitespace-nowrap px-4 py-3 pl-8 hidden sm:table-cell">
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-emerald-500 w-[82%]"></div>
</div>
<span className="text-xxs font-medium text-emerald-600">82% Pos</span>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 flex justify-end">
<svg className="h-8 w-28 overflow-visible" fill="none" stroke="currentColor" viewbox="0 0 100 24">
<path className="text-emerald-500 vector-effect-non-scaling-stroke" d="M0 24 L15 20 L30 22 L45 15 L60 10 L75 12 L90 5 L100 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</td>
</tr>

<tr className="group cursor-pointer hover:bg-slate-50/80 transition-colors">
<td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-400">4</td>
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 ring-1 ring-black/5 shadow-sm">
<iconify-icon icon="solar:code-circle-linear" width="16"></iconify-icon>
</div>
<div className="ml-3">
<div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Llama 3 70B</div>
<div className="text-xxs font-bold text-slate-400 uppercase tracking-wide">Meta</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-slate-900">145</td>
<td className="whitespace-nowrap px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-slate-600 bg-slate-100">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2.5" width="10"></iconify-icon>
                                                0%
                                            </span>
</td>
<td className="whitespace-nowrap px-4 py-3 pl-8 hidden sm:table-cell">
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-emerald-500 w-[65%]"></div>
</div>
<span className="text-xxs font-medium text-emerald-600">65% Pos</span>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 flex justify-end">
<svg className="h-8 w-28 overflow-visible" fill="none" stroke="currentColor" viewbox="0 0 100 24">
<path className="text-slate-400 vector-effect-non-scaling-stroke" d="M0 12 L15 12 L30 10 L45 14 L60 12 L75 12 L90 12 L100 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</td>
</tr>

<tr className="group cursor-pointer hover:bg-slate-50/80 transition-colors">
<td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-400">5</td>
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 ring-1 ring-black/5 shadow-sm">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div className="ml-3">
<div className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">Mistral Large</div>
<div className="text-xxs font-bold text-slate-400 uppercase tracking-wide">Mistral</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-slate-900">98</td>
<td className="whitespace-nowrap px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-emerald-600 bg-emerald-50">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2.5" width="10"></iconify-icon>
                                                45%
                                            </span>
</td>
<td className="whitespace-nowrap px-4 py-3 pl-8 hidden sm:table-cell">
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-emerald-500 w-[60%]"></div>
</div>
<span className="text-xxs font-medium text-emerald-600">60% Pos</span>
</div>
</td>
<td className="whitespace-nowrap px-4 py-3 flex justify-end">
<svg className="h-8 w-28 overflow-visible" fill="none" stroke="currentColor" viewbox="0 0 100 24">
<path className="text-emerald-500 vector-effect-non-scaling-stroke" d="M0 20 L15 18 L30 15 L45 10 L60 5 L75 8 L90 4 L100 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</td>
</tr>
</tbody>
</table>
</div>
<div className="border-t border-slate-200 bg-slate-50 px-6 py-3 flex justify-center">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition flex items-center gap-2">
                                Load more agents
                                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                            Trending Topics
                        </h3>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 cursor-pointer transition">#python</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 cursor-pointer transition">#rust</span>
<span className="px-2.5 py-1 rounded-md bg-orange-50 text-xs font-medium text-orange-600 border border-orange-100 cursor-pointer">#claude-artifacts</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 cursor-pointer transition">#copilot-bug</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 cursor-pointer transition">#local-llm</span>
</div>
</div>

<div className="rounded-xl bg-slate-900 p-5 shadow-sm text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-sm font-semibold">Public Read-Only Access</h3>
<p className="mt-2 text-xs text-slate-400 leading-relaxed">
                                This dashboard aggregates data from publicly available Reddit threads in real-time. 
                            </p>
<div className="mt-4 pt-4 border-t border-slate-700 flex flex-col gap-2">
<div className="flex justify-between text-xs text-slate-300">
<span>Last Scan:</span>
<span className="font-mono text-emerald-400">2 mins ago</span>
</div>
<div className="flex justify-between text-xs text-slate-300">
<span>Threads Parsed:</span>
<span className="font-mono">14,204</span>
</div>
</div>
</div>
<iconify-icon className="absolute -bottom-6 -right-6 text-slate-800 rotate-12" icon="solar:server-square-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mb-12 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" id="entity-detail">

<div className="p-6 lg:p-8 border-b border-slate-100 bg-slate-50/30">
<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-500/10 shadow-sm">
<iconify-icon icon="solar:box-bold" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                                Claude 3.5 Sonnet
                                <span className="text-xs font-bold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-full">LLM</span>
</h2>
<div className="mt-1 flex items-center gap-4 text-sm">
<span className="font-medium text-slate-900">324 <span className="text-slate-500 font-normal text-xs">Mentions</span></span>
<span className="font-medium text-emerald-600 flex items-center gap-0.5 text-xs"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> Rising trend</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 lg:p-8">

<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-900">Mention Frequency (r/programming)</h3>
<div className="flex rounded-md bg-slate-100 p-0.5">
<button className="rounded bg-white px-3 py-1 text-xxs font-bold text-slate-900 shadow-sm">24H</button>
<button className="rounded px-3 py-1 text-xxs font-bold text-slate-500 hover:text-slate-900 transition">7D</button>
<button className="rounded px-3 py-1 text-xxs font-bold text-slate-500 hover:text-slate-900 transition">30D</button>
</div>
</div>

<div className="relative h-56 w-full rounded-lg bg-gradient-to-b from-slate-50/50 to-white border border-slate-100 p-4 mb-8">

<div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
<div className="border-t border-dashed border-slate-200 w-full h-0"></div>
<div className="border-t border-dashed border-slate-200 w-full h-0"></div>
<div className="border-t border-dashed border-slate-200 w-full h-0"></div>
<div className="border-t border-dashed border-slate-200 w-full h-0"></div>
</div>

<div className="flex h-full items-end gap-1.5 sm:gap-3 relative z-10 px-2 justify-between">

<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[20%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[35%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[25%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[40%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[55%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[30%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[45%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[60%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[75%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[50%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[65%] rounded-sm"></div>
<div className="w-full bg-orange-500 shadow-lg shadow-orange-500/20 h-[85%] rounded-sm relative group cursor-help">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xxs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20">
                                42 Mentions (14:00)
                            </div>
</div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[70%] rounded-sm"></div>
<div className="w-full bg-orange-200/40 hover:bg-orange-400/50 transition-all h-[55%] rounded-sm"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-4 border-t border-slate-100">
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Peak Time</div>
<div className="text-sm font-bold text-slate-900">14:00 UTC</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Unique Authors</div>
<div className="text-sm font-bold text-slate-900">218 Users</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Sentiment Score</div>
<div className="text-sm font-bold text-emerald-600">Positive (0.75)</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Top Keyword</div>
<div className="text-sm font-bold text-slate-900">"Artifacts"</div>
</div>
</div>
</div>
</div>

<div className="mb-20" id="activity">
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-6 flex items-center gap-2">
                Source Drilldown
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">r/programming</span>
</h2>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="grid grid-cols-1 divide-y divide-slate-100">

<div className="group p-5 hover:bg-slate-50 transition flex gap-4 cursor-pointer">
<div className="flex flex-col items-center gap-1 shrink-0 w-10 pt-1">
<iconify-icon className="text-slate-400 group-hover:text-reddit-500 transition" icon="solar:arrow-up-outline" width="20"></iconify-icon>
<span className="text-xs font-bold text-slate-700">2.1k</span>
<iconify-icon className="text-slate-300" icon="solar:arrow-down-outline" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1.5 text-xs">
<span className="font-bold text-slate-900">r/programming</span>
<span className="text-slate-400">•</span>
<span className="text-slate-500">Posted by u/seniordev_99</span>
<span className="text-slate-400">4 hours ago</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-reddit-600 transition-colors mb-2 leading-relaxed">
                                Honestly, <span className="bg-orange-100 text-orange-800 px-1 rounded">Claude 3.5</span> has completely replaced Stack Overflow for me when debugging legacy Java code.
                            </h3>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">
                                I was skeptical at first, but the context window allows me to dump entire class files and it actually understands the dependency injection patterns we use...
                            </p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition">
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> 245 Comments
                                </span>
<span className="flex items-center gap-1.5 hover:bg-slate-100 px-2 py-1 rounded transition">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon> Share
                                </span>
</div>
</div>
</div>

<div className="group p-5 hover:bg-slate-50 transition flex gap-4 cursor-pointer">
<div className="flex flex-col items-center gap-1 shrink-0 w-10 pt-1">
<iconify-icon className="text-slate-400 group-hover:text-reddit-500 transition" icon="solar:arrow-up-outline" width="20"></iconify-icon>
<span className="text-xs font-bold text-slate-700">856</span>
<iconify-icon className="text-slate-300" icon="solar:arrow-down-outline" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1.5 text-xs">
<span className="font-bold text-slate-900">r/programming</span>
<span className="text-slate-400">•</span>
<span className="text-slate-500">Posted by u/rust_evangelist</span>
<span className="text-slate-400">6 hours ago</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-reddit-600 transition-colors mb-2 leading-relaxed">
                                Comparison: <span className="bg-indigo-100 text-indigo-800 px-1 rounded">Cursor</span> vs VSCode + Copilot: My experience after 1 week
                            </h3>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">
                                The tab-autocomplete in Cursor feels significantly faster, but Copilot Chat still seems to have better knowledge of Azure specific integrations...
                            </p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition">
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> 112 Comments
                                </span>
<span className="flex items-center gap-1.5 hover:bg-slate-100 px-2 py-1 rounded transition">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon> Share
                                </span>
</div>
</div>
</div>

<div className="group p-5 hover:bg-slate-50 transition flex gap-4 cursor-pointer">
<div className="flex flex-col items-center gap-1 shrink-0 w-10 pt-1">
<iconify-icon className="text-slate-400 group-hover:text-reddit-500 transition" icon="solar:arrow-up-outline" width="20"></iconify-icon>
<span className="text-xs font-bold text-slate-700">124</span>
<iconify-icon className="text-slate-300" icon="solar:arrow-down-outline" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1.5 text-xs">
<span className="font-bold text-slate-900">r/programming</span>
<span className="text-slate-400">•</span>
<span className="text-slate-500">Posted by u/ai_watcher</span>
<span className="text-slate-400">8 hours ago</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-reddit-600 transition-colors mb-2 leading-relaxed">
<span className="bg-blue-100 text-blue-800 px-1 rounded">Llama 3</span> running locally is great, but JSON output formatting is still hit or miss compared to GPT-4.
                            </h3>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">
                                Has anyone found a good system prompt to force consistent JSON schema adherence on the 70B model? I'm getting trailing commas...
                            </p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition">
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> 45 Comments
                                </span>
<span className="flex items-center gap-1.5 hover:bg-slate-100 px-2 py-1 rounded transition">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon> Share
                                </span>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-center">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition flex items-center gap-2">
                        Load older threads
                        <iconify-icon icon="solar:restart-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-6 text-center sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<iconify-icon icon="solar:graph-new-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">AI Mention Tracker</span>
</div>
<p className="text-xs text-slate-500 max-w-md leading-relaxed">
                Aggregating open data from r/programming to visualize the developer zeitgeist regarding AI tools. This project is not affiliated with Reddit or any AI providers.
            </p>
<div className="flex gap-6 text-xs text-slate-400 font-medium">
<a className="hover:text-slate-900 transition" href="#">Public API</a>
<a className="hover:text-slate-900 transition" href="#">Methodology</a>
<a className="hover:text-slate-900 transition" href="#">Status</a>
</div>
<p className="text-[10px] text-slate-300">Last updated: Oct 2023 • v1.0.4 (MVP)</p>
</div>
</footer>

    </>
  );
}
