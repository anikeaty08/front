import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f2023',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-950 flex-col justify-between hidden md:flex">
<div>

<div className="h-14 flex items-center px-6 border-b border-zinc-800/60">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-indigo-500 rounded-md flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="12"></span>
</div>
<span className="font-medium tracking-tight text-zinc-100">DevKits</span>
</div>
</div>

<nav className="px-3 py-4 space-y-0.5">
<div className="px-3 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Library</div>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" href="#">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="16"></span>
<span>All Kits</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" href="#">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:bookmark" data-strokeWidth="1.5" data-width="16"></span>
<span>Saved</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" href="#">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="16"></span>
<span>Read Later</span>
</a>
<div className="px-3 text-xs font-medium text-zinc-500 mt-6 mb-2 uppercase tracking-wider">Collections</div>
<a className="flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900/50 text-indigo-400 border border-zinc-800/50" href="#">
<span className="iconify" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="16"></span>
<span>AI Engineering</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="16"></span>
<span>Web Architecture</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="16"></span>
<span>DevOps &amp; CI/CD</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-zinc-800/60">
<button className="flex items-center gap-3 w-full hover:bg-zinc-900 p-2 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center border border-zinc-600">
<span className="text-xs text-white font-medium">AE</span>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-zinc-200">Alex Engineer</span>
<span className="text-[10px] text-zinc-500">Free Plan</span>
</div>
<span className="iconify ml-auto text-zinc-500" data-icon="lucide:chevrons-up-down" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-0"></div>

<header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">

<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Library</span>
<span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="12"></span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">AI Engineering</span>
<span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="12"></span>
<span className="text-zinc-200 font-medium">LLM Selection</span>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<span className="iconify absolute left-2.5 top-2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="14"></span>
<input className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs rounded-md pl-8 pr-3 py-1.5 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 w-48 transition-all" placeholder="Search resources..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="14"></span>
</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-lg shadow-indigo-900/20 transition-all flex items-center gap-1.5 border border-indigo-500/50">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="14"></span>
<span>New Resource</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto z-10 p-6 md:p-10 animate-fade-in">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-zinc-800/60 pb-8">
<div className="space-y-3 max-w-2xl">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase font-semibold tracking-wider">Guide</span>
<span className="px-2 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-[10px] uppercase font-semibold tracking-wider">Updated 2d ago</span>
</div>
<h1 className="text-3xl font-medium text-white tracking-tight leading-tight">
                            How to Choose the Best Open Source LLM for Your Project
                        </h1>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                            A curated developer kit containing benchmarks, architectural comparisons, and implementation guides for selecting open-weights models (Llama 3, Mistral, Gemma) over proprietary APIs.
                        </p>

<div className="flex items-center gap-3 pt-2">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-zinc-950 bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="" className="w-6 h-6 rounded-full border border-zinc-950 bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<span className="text-xs text-zinc-500">Curated by <span className="text-zinc-300">Engineering Team</span></span>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 w-full md:w-64 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-zinc-300">Kit Progress</span>
<span className="text-xs text-zinc-500">1/4</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-1/4 bg-indigo-500 rounded-full"></div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-1.5 text-xs border border-zinc-700 hover:border-zinc-500 rounded text-zinc-300 transition-colors">Share</button>
<button className="flex-1 py-1.5 text-xs bg-white text-black font-medium rounded hover:bg-zinc-200 transition-colors">Start</button>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Resources</h2>

<div className="flex items-center bg-zinc-900/80 p-0.5 rounded-lg border border-zinc-800">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-200 shadow-sm">All</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-300 transition-colors">Articles</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-300 transition-colors">Videos</button>
</div>
</div>
<div className="grid gap-3">

<div className="group relative flex items-start gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-200">

<div className="pt-1">
<label className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
<input checked="" className="peer w-5 h-5 opacity-0 absolute z-10 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</div>

<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
<span className="iconify text-blue-400" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate pr-4 group-hover:text-indigo-300 transition-colors">Choosing the Best Open Source AI Models</h3>
<span className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-900">12 min read</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">huggingface.co/blog/dvilasuero/choosing-best-open-source-ai-models</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span>
<span>Hugging Face Blog</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-emerald-500/80">
<span className="iconify" data-icon="lucide:check-circle" data-width="12"></span>
<span>Read</span>
</div>
</div>
</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4 flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-md transition-colors" title="Copy Link">
<span className="iconify" data-icon="lucide:copy" data-strokeWidth="1.5" data-width="14"></span>
</button>
<a className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-700 rounded-md transition-colors" href="#" title="Open Link">
<span className="iconify" data-icon="lucide:external-link" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative flex items-start gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-200">
<div className="pt-1">
<label className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
<input className="peer w-5 h-5 opacity-0 absolute z-10 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center hover:border-zinc-500">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
<span className="iconify text-blue-400" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate pr-4 group-hover:text-indigo-300 transition-colors">Benchmarks: Llama 3 vs Mistral Large</h3>
<span className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-900">8 min read</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">huggingface.co/blog/open-llm-leaderboard-deep-dive</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span>
<span>Hugging Face Blog</span>
</div>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4 flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:copy" data-strokeWidth="1.5" data-width="14"></span>
</button>
<a className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-700 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:external-link" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative flex items-start gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-200">
<div className="pt-1">
<label className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
<input className="peer w-5 h-5 opacity-0 absolute z-10 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center hover:border-zinc-500">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
<span className="iconify text-rose-400" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate pr-4 group-hover:text-indigo-300 transition-colors">Fine-tuning LLMs Locally</h3>
<span className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-900">24:10</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">youtube.com/watch?v=pYax2rupKEY</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<span className="iconify" data-icon="lucide:play-circle" data-width="12"></span>
<span>YouTube</span>
</div>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4 flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:copy" data-strokeWidth="1.5" data-width="14"></span>
</button>
<a className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-700 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:external-link" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative flex items-start gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-200">
<div className="pt-1">
<label className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
<input className="peer w-5 h-5 opacity-0 absolute z-10 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center hover:border-zinc-500">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
<span className="iconify text-sky-400" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-medium text-zinc-200 truncate pr-4 group-hover:text-indigo-300 transition-colors">Latest Open Source Hardware Recs</h3>
<span className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-900">Thread</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">x.com/TheAhmadOsman/status/2001351373359824949</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<span className="iconify" data-icon="lucide:message-circle" data-width="12"></span>
<span>Social</span>
</div>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4 flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:copy" data-strokeWidth="1.5" data-width="14"></span>
</button>
<a className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-700 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:external-link" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-zinc-800/60">
<h3 className="text-sm font-medium text-zinc-300 mb-4">You might also like</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<a className="group block p-5 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/10 hover:border-zinc-700 transition-all" href="#">
<div className="flex items-start justify-between mb-2">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:server" data-width="16"></span>
</div>
<span className="text-[10px] text-zinc-500">5 Resources</span>
</div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Self-Hosting LLMs with Docker</h4>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">A complete guide to containerizing and serving open weights models on your own infrastructure.</p>
</a>

<a className="group block p-5 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/10 hover:border-zinc-700 transition-all" href="#">
<div className="flex items-start justify-between mb-2">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
</div>
<span className="text-[10px] text-zinc-500">8 Resources</span>
</div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">RAG Implementation Patterns</h4>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Best practices for building Retrieval Augmented Generation pipelines with LangChain.</p>
</a>
</div>
</div>
</div>

<footer className="mt-12 mb-6 text-center text-[10px] text-zinc-600">
<p>© 2023 DevKits Inc. <span className="mx-2">•</span> Privacy <span className="mx-2">•</span> Terms</p>
</footer>
</div>
</main>

<button className="md:hidden fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 rounded-full text-white shadow-xl flex items-center justify-center z-50">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>

    </>
  );
}
