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
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
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
      

<aside className="w-64 border-r border-neutral-800 bg-neutral-950 flex flex-col flex-shrink-0 transition-all duration-300">

<div className="h-14 flex items-center px-4 border-b border-neutral-800/50">
<div className="flex items-center gap-2 text-neutral-200 hover:bg-neutral-900 py-1 px-2 -ml-2 rounded-md cursor-pointer transition-colors w-full group">
<div className="w-5 h-5 bg-neutral-100 rounded flex items-center justify-center text-neutral-950 text-xs font-semibold tracking-tighter">
                    O
                </div>
<span className="font-medium tracking-tight text-sm">Orbital</span>
<span className="iconify ml-auto text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4 px-2 space-y-6">

<div>
<div className="px-2 mb-2 flex items-center justify-between group cursor-pointer">
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors">Workspace</span>
</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-neutral-800/50 text-neutral-200" href="#">
<span className="iconify" data-icon="lucide:inbox" data-strokeWidth="1.5" data-width="16"></span>
<span>Inbox</span>
<span className="ml-auto text-xs text-neutral-500">2</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-300 transition-colors group" href="#">
<span className="iconify group-hover:text-neutral-300 transition-colors" data-icon="lucide:target" data-strokeWidth="1.5" data-width="16"></span>
<span>My Issues</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-300 transition-colors group" href="#">
<span className="iconify group-hover:text-neutral-300 transition-colors" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="16"></span>
<span>Views</span>
</a>
</nav>
</div>

<div>
<div className="px-2 mb-2 flex items-center justify-between group">
<span className="text-xs font-medium text-neutral-500">Your Teams</span>
<span className="iconify text-neutral-600 hover:text-neutral-400 cursor-pointer" data-icon="lucide:plus" data-width="14"></span>
</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 rounded-[2px] border border-neutral-600"></span>
<span>Core Product</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 rounded-[2px] border border-blue-900/50 bg-blue-500/20"></span>
<span>Design System</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-300 transition-colors" href="#">
<span className="w-2 h-2 rounded-[2px] border border-purple-900/50 bg-purple-500/20"></span>
<span>Marketing</span>
</a>
</nav>
</div>
</div>

<div className="p-3 border-t border-neutral-800">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-900/60 text-neutral-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:help-circle" data-strokeWidth="1.5" data-width="16"></span>
<span>Help &amp; Feedback</span>
</a>
<div className="mt-2 flex items-center gap-2 px-2 pt-2 border-t border-neutral-800/50">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-neutral-600 to-neutral-400 flex items-center justify-center text-[10px] text-white font-medium">JS</div>
<span className="text-xs">Jane Smith</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-950">

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-3">
<nav className="flex items-center gap-2 text-sm text-neutral-500">
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Orbital</span>
<span className="iconify text-neutral-700" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-neutral-200 font-medium">Inbox</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="iconify absolute left-2.5 top-1.5 text-neutral-600 group-focus-within:text-neutral-400" data-icon="lucide:search" data-width="14"></span>
<input className="bg-neutral-900/50 border border-neutral-800 text-neutral-300 text-xs rounded-md pl-8 pr-3 py-1.5 w-48 focus:outline-none focus:border-neutral-700 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1.5 flex gap-0.5">
<kbd className="hidden sm:inline-flex h-4 items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-1 font-mono text-[10px] font-medium text-neutral-500 opacity-100">⌘K</kbd>
</div>
</div>
<button className="flex items-center justify-center w-7 h-7 rounded hover:bg-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="16"></span>
</button>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<button className="bg-neutral-200 hover:bg-white text-neutral-950 px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2" data-width="14"></span>
                    New Issue
                </button>
</div>
</header>

<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-1">
<button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200 transition-colors text-xs">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                    Filter
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200 transition-colors text-xs">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="14"></span>
                    Sort
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200 transition-colors text-xs">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
                    Display
                </button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-600">32 issues</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-6">
<div className="w-full">

<div className="grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2 border-b border-neutral-800 text-xs font-medium text-neutral-600">
<div className="w-4"></div>
<div>Title</div>
<div>Status</div>
<div>Priority</div>
<div className="text-center"></div>
</div>

<div className="group grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2.5 border-b border-neutral-800/50 hover:bg-neutral-900/40 items-center transition-colors cursor-default">
<label className="custom-checkbox w-4 h-4 flex items-center justify-center cursor-pointer relative">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded-[3px] flex items-center justify-center transition-colors hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-neutral-900 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-mono">INT-204</span>
<span className="text-neutral-200 text-sm font-medium group-hover:text-white transition-colors">Update authentication flow for mobile users</span>
</div>
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-blue-900/30 bg-blue-500/10 text-blue-400 text-[11px] font-medium">
<span className="iconify" data-icon="lucide:circle-dot" data-width="10"></span>
                            In Progress
                        </div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify text-orange-400" data-icon="lucide:bar-chart-3" data-width="14"></span>
                        High
                    </div>
<div className="flex justify-center">
<div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-neutral-400">AB</div>
</div>
</div>

<div className="group grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2.5 border-b border-neutral-800/50 hover:bg-neutral-900/40 items-center transition-colors cursor-default">
<label className="custom-checkbox w-4 h-4 flex items-center justify-center cursor-pointer relative">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded-[3px] flex items-center justify-center transition-colors hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-neutral-900 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-mono">INT-203</span>
<span className="text-neutral-200 text-sm font-medium group-hover:text-white transition-colors">Fix overflow issue on settings page</span>
</div>
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-[11px] font-medium">
<span className="iconify" data-icon="lucide:circle" data-width="10"></span>
                            Todo
                        </div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify text-neutral-500" data-icon="lucide:bar-chart-2" data-width="14"></span>
                        Medium
                    </div>
<div className="flex justify-center">
<span className="iconify text-neutral-600 group-hover:text-neutral-400 transition-colors" data-icon="lucide:user-plus" data-width="14"></span>
</div>
</div>

<div className="group grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2.5 border-b border-neutral-800/50 hover:bg-neutral-900/40 items-center transition-colors cursor-default">
<label className="custom-checkbox w-4 h-4 flex items-center justify-center cursor-pointer relative">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded-[3px] flex items-center justify-center transition-colors hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-neutral-900 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-mono">INT-198</span>
<span className="text-neutral-200 text-sm font-medium group-hover:text-white transition-colors">Refactor backend API endpoints</span>
</div>
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-amber-900/30 bg-amber-500/10 text-amber-400 text-[11px] font-medium">
<span className="iconify" data-icon="lucide:clock" data-width="10"></span>
                            Backlog
                        </div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify text-neutral-600" data-icon="lucide:bar-chart" data-width="14"></span>
                        Low
                    </div>
<div className="flex justify-center">
<div className="w-5 h-5 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-[9px] text-indigo-300">RK</div>
</div>
</div>

<div className="group grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2.5 border-b border-neutral-800/50 hover:bg-neutral-900/40 items-center transition-colors cursor-default">
<label className="custom-checkbox w-4 h-4 flex items-center justify-center cursor-pointer relative">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded-[3px] flex items-center justify-center transition-colors hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-neutral-900 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-mono">INT-192</span>
<span className="text-neutral-500 line-through text-sm font-normal group-hover:text-neutral-400 transition-colors">Implement dark mode toggle</span>
</div>
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-purple-900/30 bg-purple-500/10 text-purple-400 text-[11px] font-medium">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="10"></span>
                            Done
                        </div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify text-neutral-500" data-icon="lucide:bar-chart-2" data-width="14"></span>
                        Medium
                    </div>
<div className="flex justify-center">
<div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-neutral-400">AB</div>
</div>
</div>

<div className="group grid grid-cols-[auto_1fr_100px_100px_40px] gap-4 px-3 py-2.5 border-b border-neutral-800/50 hover:bg-neutral-900/40 items-center transition-colors cursor-default">
<label className="custom-checkbox w-4 h-4 flex items-center justify-center cursor-pointer relative">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded-[3px] flex items-center justify-center transition-colors hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-neutral-900 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-mono">INT-188</span>
<span className="text-neutral-200 text-sm font-medium group-hover:text-white transition-colors">Design new landing page assets</span>
</div>
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-blue-900/30 bg-blue-500/10 text-blue-400 text-[11px] font-medium">
<span className="iconify" data-icon="lucide:circle-dot" data-width="10"></span>
                            In Progress
                        </div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify text-red-400" data-icon="lucide:alert-circle" data-width="14"></span>
                        Urgent
                    </div>
<div className="flex justify-center">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-neutral-600 to-neutral-400 flex items-center justify-center text-[9px] text-white font-medium">JS</div>
</div>
</div>
</div>

<div className="mt-4 flex justify-center">
<button className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:loader" data-strokeWidth="1.5" data-width="14"></span>
                    Loading more...
                </button>
</div>
</div>
</main>

    </>
  );
}
