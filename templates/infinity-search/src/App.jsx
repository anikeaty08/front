import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<aside className="hidden md:flex flex-col w-64 h-full border-r border-zinc-800/50 bg-zinc-950/50">

<div className="h-16 flex items-center px-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<span className="text-zinc-100 font-medium tracking-tighter text-base">NEXUS</span>
</div>
</div>

<div className="px-4 mb-4">
<button className="group flex items-center justify-between w-full px-3 py-2 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-lg transition-all duration-200 shadow-sm">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400 group-hover:text-zinc-100 transition-colors" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">New Thread</span>
</div>
<span className="text-xs border border-zinc-800 bg-zinc-900 rounded px-1.5 py-0.5 text-zinc-500 group-hover:border-zinc-700">⌘K</span>
</button>
</div>

<nav className="flex-1 overflow-y-auto px-4 space-y-6">

<div>
<h3 className="text-xs font-medium text-zinc-600 px-3 mb-2 uppercase tracking-wider">Today</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 bg-zinc-900/40 rounded-md border border-zinc-800/50 shadow-sm" href="#">
<span className="iconify text-indigo-400" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Quantum computing trends</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">React server components</span>
</a>
</li>
</ul>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-600 px-3 mb-2 uppercase tracking-wider">Previous 7 Days</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Q4 Marketing Strategy</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Competitor Analysis</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:image" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Logo concepts</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="p-4 border-t border-zinc-800/50">
<button className="flex items-center gap-3 w-full p-2 hover:bg-zinc-900 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<span className="text-xs font-medium">JD</span>
</div>
<div className="flex-1 text-left">
<p className="text-sm font-medium text-zinc-200">John Doe</p>
<p className="text-xs text-zinc-500">Pro Plan</p>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:more-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-full">

<header className="md:hidden h-14 flex items-center justify-between px-4 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
<span className="iconify text-zinc-400" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-zinc-100 font-medium tracking-tighter">NEXUS</span>
<span className="iconify text-zinc-400" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="20"></span>
</header>

<div className="absolute top-4 right-6 hidden md:flex items-center gap-4 z-20">

<div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-full p-1">
<button className="px-3 py-1 rounded-full text-xs font-medium text-white bg-zinc-800 shadow-sm border border-zinc-700 transition-all">GPT-4</button>
<button className="px-3 py-1 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all">Claude 3</button>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 w-full max-w-4xl mx-auto z-10">

<div className="mb-10 text-center space-y-2">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                    V2.4 Online
                </div>
<h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">How can I help you explore?</h1>
</div>

<div className="w-full relative group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden focus-within:border-zinc-600 focus-within:ring-1 focus-within:ring-zinc-600 transition-all duration-200">

<textarea className="w-full bg-transparent text-lg text-white placeholder-zinc-500 p-5 pr-14 pb-14 resize-none outline-none font-light h-32 leading-relaxed" placeholder="Ask anything, analyze data, or generate code..."></textarea>

<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">

<div className="flex items-center gap-1">
<button className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors" title="Attach">
<span className="iconify" data-icon="lucide:paperclip" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors" title="Voice">
<span className="iconify" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="18"></span>
</button>

<div className="flex items-center gap-2 ml-2 px-2 py-1.5 rounded-md hover:bg-zinc-800/50 cursor-pointer group/toggle">
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out left-0 border-zinc-600" id="web-search" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-700 cursor-pointer" htmlFor="web-search"></label>
</div>
<span className="text-xs text-zinc-500 group-hover/toggle:text-zinc-300 select-none">Search Web</span>
</div>
</div>

<button className="p-2.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-all shadow-lg flex items-center justify-center disabled:opacity-50">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</div>

<div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
<button className="text-left group p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200">
<div className="mb-2 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="text-sm font-medium text-zinc-200">Analyze Data</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">Process CSVs and visualize trends.</p>
</button>
<button className="text-left group p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200">
<div className="mb-2 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="text-sm font-medium text-zinc-200">Write Code</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">Debug, refactor or create functions.</p>
</button>
<button className="text-left group p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200">
<div className="mb-2 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:pen-line" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="text-sm font-medium text-zinc-200">Draft Content</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">Blogs, emails, and marketing copy.</p>
</button>
</div>
</div>

<div className="absolute bottom-4 w-full text-center">
<p className="text-[10px] text-zinc-600">Nexus AI can make mistakes. Consider checking important information.</p>
</div>

<div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none -z-10"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
</main>

    </>
  );
}
