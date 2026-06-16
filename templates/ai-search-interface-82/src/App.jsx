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
neutral: {
850: '#1f1f1f',
925: '#121212',
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
      

<aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-925/50 backdrop-blur-xl h-full flex-shrink-0 z-20">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="14"></span>
</div>
<span className="font-medium tracking-tight text-sm text-white group-hover:text-neutral-200 transition-colors">AURA</span>
</div>
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:sidebar" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>

<div className="px-3 pb-2">
<button className="w-full flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium py-2 px-3 rounded-lg border border-neutral-700/50 transition-all shadow-sm">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="14"></span>
                New Search
            </button>
</div>

<nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5 no-scrollbar">
<div className="px-2 py-1.5 text-xs font-medium text-neutral-500 uppercase tracking-wider">Today</div>
<a className="group flex items-center gap-2 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:message-square" data-width="14"></span>
<span className="truncate">Q3 Market Trends Analysis</span>
</a>
<a className="group flex items-center gap-2 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:code-2" data-width="14"></span>
<span className="truncate">React Server Components</span>
</a>
<div className="px-2 py-1.5 mt-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Yesterday</div>
<a className="group flex items-center gap-2 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:plane" data-width="14"></span>
<span className="truncate">Kyoto Itinerary 5 Days</span>
</a>
<a className="group flex items-center gap-2 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:search" data-width="14"></span>
<span className="truncate">History of Bauhaus</span>
</a>
</nav>

<div className="p-3 border-t border-neutral-800">
<button className="flex items-center gap-3 w-full p-2 hover:bg-neutral-800/50 rounded-lg transition-colors group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 flex items-center justify-center border border-neutral-600 text-white font-medium text-xs">
                    JD
                </div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-neutral-200">John Doe</span>
<span className="text-xs text-neutral-500">Pro Plan</span>
</div>
<span className="iconify ml-auto text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:settings-2" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-black">

<header className="md:hidden flex items-center justify-between p-4 border-b border-neutral-800 bg-black/80 backdrop-blur sticky top-0 z-30">
<span className="font-medium tracking-tight text-white">AURA</span>
<button className="text-neutral-400">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</header>

<div className="hidden md:flex items-center justify-between px-6 py-4 absolute top-0 w-full z-10">
<div className="flex items-center bg-neutral-900 rounded-lg p-1 border border-neutral-800">
<button className="px-3 py-1.5 rounded-md bg-neutral-800 text-xs font-medium text-white shadow-sm border border-neutral-700">Search</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Reasoning</button>
</div>
<div className="flex gap-4">
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto w-full flex flex-col items-center justify-center relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-900/40 rounded-full blur-[100px] opacity-20"></div>
</div>
<div className="w-full max-w-2xl px-4 flex flex-col items-center gap-8 z-10 transition-all duration-700 ease-out">

<div className="text-center space-y-4">
<div className="inline-flex items-center justify-center p-2 rounded-full bg-neutral-900 border border-neutral-800 shadow-sm mb-2">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What do you want to know?</h1>
<p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto">
                        Ask complex questions, get accurate answers backed by real-time web sources.
                    </p>
</div>

<div className="w-full relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl opacity-30 group-hover:opacity-60 transition duration-500 blur-sm"></div>
<div className="relative flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden focus-within:ring-1 focus-within:ring-neutral-700 focus-within:border-neutral-700 transition-all">

<textarea className="w-full bg-transparent text-neutral-200 text-sm placeholder:text-neutral-500 p-4 min-h-[56px] max-h-[200px] resize-none focus:outline-none" placeholder="Ask anything..." rows="1"></textarea>

<div className="flex items-center justify-between px-3 pb-3 pt-1">
<div className="flex items-center gap-2">
<button className="p-2 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 rounded-lg transition-all" title="Attach">
<span className="iconify" data-icon="lucide:paperclip" data-width="18"></span>
</button>
<button className="p-2 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 rounded-lg transition-all" title="Focus Mode">
<span className="iconify" data-icon="lucide:scan-search" data-width="18"></span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-1.5 mr-2">
<span className="text-[10px] text-neutral-600 border border-neutral-800 px-1.5 py-0.5 rounded">Pro</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-neutral-700 peer-checked:after:bg-white"></div>
<span className="ml-2 text-xs font-medium text-neutral-500">Copilot</span>
</label>
</div>
<button className="p-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full text-left">
<button className="group p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all text-left flex items-start gap-3">
<span className="mt-0.5 text-neutral-500 group-hover:text-neutral-300">
<span className="iconify" data-icon="lucide:trending-up" data-width="16"></span>
</span>
<div>
<span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Tech Stock Trends</span>
<span className="block text-xs text-neutral-500 mt-0.5">Analyze the last 24h movements</span>
</div>
</button>
<button className="group p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all text-left flex items-start gap-3">
<span className="mt-0.5 text-neutral-500 group-hover:text-neutral-300">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
</span>
<div>
<span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Debug Python Script</span>
<span className="block text-xs text-neutral-500 mt-0.5">Find errors in async functions</span>
</div>
</button>
<button className="group p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all text-left flex items-start gap-3">
<span className="mt-0.5 text-neutral-500 group-hover:text-neutral-300">
<span className="iconify" data-icon="lucide:pen-tool" data-width="16"></span>
</span>
<div>
<span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Draft an Email</span>
<span className="block text-xs text-neutral-500 mt-0.5">Resignation letter respectful tone</span>
</div>
</button>
<button className="group p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all text-left flex items-start gap-3">
<span className="mt-0.5 text-neutral-500 group-hover:text-neutral-300">
<span className="iconify" data-icon="lucide:globe" data-width="16"></span>
</span>
<div>
<span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Explain Quantum Physics</span>
<span className="block text-xs text-neutral-500 mt-0.5">Like I am 5 years old</span>
</div>
</button>
</div>
</div>

<div className="absolute bottom-4 w-full text-center">
<div className="flex items-center justify-center gap-4 text-xs text-neutral-600">
<a className="hover:text-neutral-400 transition-colors" href="#">Help</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</main>

    </>
  );
}
