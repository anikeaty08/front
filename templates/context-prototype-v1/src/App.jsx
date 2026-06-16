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
      

<aside className="w-16 lg:w-64 h-full border-r border-white/5 flex flex-col bg-[#080808] z-30 relative">

<div className="h-14 flex items-center px-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gradient-to-br from-white to-neutral-500 rounded-md flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:box" data-width="14"></span>
</div>
<span className="text-white font-semibold tracking-tighter text-sm hidden lg:block">CONTEXT</span>
</div>
</div>

<div className="p-4 hidden lg:block">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors text-xs text-neutral-300 group">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
<span className="font-medium">E-Commerce App</span>
</div>
<span className="iconify text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-2 space-y-6 pt-2">

<div>
<div className="px-2 mb-2 flex items-center justify-between group">
<h3 className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">Tables</h3>
<button className="opacity-0 group-hover:opacity-100"><span className="iconify" data-icon="lucide:plus" data-width="12"></span></button>
</div>
<ul className="space-y-0.5">
<li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-neutral-200 cursor-grab active:cursor-grabbing group transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:table-2" data-width="14"></span>
<span className="text-xs font-medium truncate">public.users</span>
<span className="ml-auto hidden group-hover:block"><span className="iconify text-neutral-500" data-icon="lucide:grip-vertical" data-width="12"></span></span>
</li>
<li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-neutral-200 cursor-grab active:cursor-grabbing group transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:table-2" data-width="14"></span>
<span className="text-xs font-medium truncate">public.orders</span>
</li>
<li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-neutral-200 cursor-grab active:cursor-grabbing group transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:box" data-width="14"></span>
<span className="text-xs font-medium truncate">redis.cache</span>
</li>
</ul>
</div>

<div>
<div className="px-2 mb-2">
<h3 className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">Saved Canvas</h3>
</div>
<ul className="space-y-0.5">
<li className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-neutral-200 border-l-2 border-indigo-500">
<span className="iconify" data-icon="lucide:layout-template" data-width="14"></span>
<span className="text-xs font-medium truncate">User Onboarding Flow</span>
</li>
<li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:layout-template" data-width="14"></span>
<span className="text-xs font-medium truncate">Billing Debug</span>
</li>
</ul>
</div>

<div>
<div className="px-2 mb-2">
<h3 className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">Timeline</h3>
</div>
<div className="relative pl-4 ml-2 border-l border-white/5 space-y-4">
<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:border-indigo-500 transition-colors"></div>
<div className="text-[10px] text-neutral-500 mb-0.5">Just now</div>
<div className="text-xs text-neutral-300">SELECT * FROM users...</div>
</div>
<div className="relative group cursor-pointer opacity-60">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700"></div>
<div className="text-[10px] text-neutral-500 mb-0.5">14m ago</div>
<div className="text-xs text-neutral-300">UPDATE orders SET...</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px]">
<img alt="User" className="rounded-full bg-black h-full w-full object-cover" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div className="hidden lg:block overflow-hidden">
<div className="text-xs font-medium text-white">Dev Session</div>
<div className="text-[10px] text-neutral-500 truncate">Online • Read/Write</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 relative flex flex-col h-full overflow-hidden">

<header className="absolute top-0 left-0 w-full z-20 px-6 py-4 flex items-start justify-between pointer-events-none">

<div className="pointer-events-auto flex flex-col items-center gap-4 mx-auto w-full max-w-2xl translate-y-2">

<div className="flex items-center p-1 bg-[#111] rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/5 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]"></span>
                        Local
                    </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-300 flex items-center gap-2 transition-colors relative group">
                        Staging
                         
<span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-amber-500 border border-[#111]"></span>
</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-red-400 flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                        Production
                    </button>
</div>

<div className="w-full relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<input className="w-full bg-[#0a0a0a]/90 backdrop-blur-xl text-sm text-white placeholder-neutral-500 rounded-xl border border-white/10 py-2.5 pl-10 pr-12 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 shadow-2xl transition-all" placeholder="Ask Context: 'Show active users from NYC who ordered last week'..." type="text"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<kbd className="hidden sm:inline-block items-center gap-1 px-1.5 font-mono text-[10px] font-medium text-neutral-500 bg-white/5 rounded border border-white/5">⌘K</kbd>
</div>
</div>
</div>

<div className="pointer-events-auto flex items-center gap-3 translate-y-2">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=59"/>
</div>
<button className="bg-[#111] text-neutral-400 hover:text-white p-2 rounded-lg border border-white/10">
<span className="iconify" data-icon="lucide:share-2" data-width="14"></span>
</button>
</div>
</header>

<div className="flex-1 relative overflow-hidden bg-[#050505] cursor-grab active:cursor-grabbing">

<div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="gradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path className="animate-pulse" d="M 690 320 C 720 320, 720 400, 750 400" fill="none" filter="url(#glow)" stroke="url(#gradientLine)" stroke-dasharray="4,4" strokeWidth="2"></path>

<path d="M 450 200 C 500 200, 500 250, 550 250" fill="none" stroke="#333" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-[120px] left-[80px] w-[380px] glass-node rounded-xl z-10 flex flex-col animate-fade-in-up">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-3 bg-white/0 rounded-t-xl handle cursor-grab">
<div className="flex items-center gap-2">
<div className="p-1 bg-indigo-500/10 rounded">
<span className="iconify text-indigo-400" data-icon="lucide:table-2" data-width="14"></span>
</div>
<span className="text-xs font-medium text-white tracking-tight">public.users</span>
<span className="px-1.5 py-0.5 rounded text-[9px] bg-neutral-800 text-neutral-400 border border-white/5">142k rows</span>
</div>
<div className="flex gap-2">
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:maximize-2" data-width="12"></span></button>
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal" data-width="12"></span></button>
</div>
</div>

<div className="px-3 py-2 flex items-center gap-2 border-b border-white/5 bg-neutral-900/30">
<div className="flex items-center gap-1 text-[10px] bg-white/5 px-2 py-1 rounded text-neutral-300 border border-white/5">
<span className="opacity-50">status</span>
<span className="text-emerald-400">= active</span>
<button className="hover:text-white ml-1"><span className="iconify" data-icon="lucide:x" data-width="10"></span></button>
</div>
<button className="text-[10px] text-neutral-500 hover:text-neutral-300 flex items-center gap-1">
<span className="iconify" data-icon="lucide:filter" data-width="10"></span> Filter
                     </button>
</div>

<div className="max-h-[300px] overflow-y-auto p-2 space-y-2">

<div className="group relative bg-neutral-900/50 hover:bg-neutral-800/80 border border-white/5 hover:border-indigo-500/30 rounded-lg p-3 transition-all cursor-pointer">
<div className="flex items-start gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full bg-neutral-800 object-cover border border-white/10" src="https://i.pravatar.cc/100?img=12"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111] rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-neutral-200 truncate">Alex Morgan</h4>
<span className="text-[10px] font-mono text-neutral-600">ID: 9482</span>
</div>
<div className="text-xs text-neutral-500 mb-2 truncate">alex.m@example.com</div>

<div className="flex flex-wrap gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] border border-indigo-500/10">Pro Plan</span>
<span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500 text-[10px] border border-white/5">Last login: 2h ago</span>
</div>
</div>
</div>

<div className="hidden group-hover:block absolute -right-[260px] top-0 w-[250px] bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-left-2 duration-200">
<div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Related: Orders</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
<span className="text-white">#ORD-992</span>
<span className="text-emerald-400">$124.00</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-500">Total LTV</span>
<span className="text-white font-mono">$2,402.00</span>
</div>
<button className="w-full mt-1 text-[10px] py-1 bg-white/5 hover:bg-white/10 rounded text-neutral-300 transition-colors">View Customer Graph</button>
</div>

<div className="absolute top-4 -left-1.5 w-3 h-3 bg-[#0F0F0F] border-l border-t border-white/10 rotate-45"></div>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-lg p-3">
<div className="flex items-start gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300 border border-indigo-500/20 text-xs font-medium">JD</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-neutral-200 truncate">John Doe</h4>
<span className="text-[10px] font-mono text-neutral-600">ID: 9481</span>
</div>
<div className="text-xs text-neutral-500 mb-2 truncate">john.d@company.net</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border border-neutral-900 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-crosshair z-20"></div>
</div>

<div className="absolute top-[220px] left-[550px] w-[420px] glass-node rounded-xl z-20">

<div className="absolute top-[30px] -left-1.5 w-3 h-3 bg-neutral-800 border border-neutral-600 rounded-full z-20"></div>

<div className="h-10 border-b border-white/5 flex items-center justify-between px-3 bg-white/0 rounded-t-xl handle cursor-grab">
<div className="flex items-center gap-2">
<span className="iconify text-amber-400" data-icon="lucide:terminal-square" data-width="14"></span>
<span className="text-xs font-medium text-white tracking-tight">Query: Active Revenue</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-emerald-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live
                        </span>
<div className="h-3 w-[1px] bg-white/10 mx-1"></div>
<button className="text-white hover:text-indigo-400 transition-colors"><span className="iconify" data-icon="lucide:play" data-width="12"></span></button>
</div>
</div>

<div className="p-0 bg-[#0C0C0C]">

<div className="px-3 py-2 bg-indigo-500/5 border-b border-indigo-500/10 flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="10"></span>
<span className="text-[11px] text-indigo-300 italic">"Top 5 users by revenue active last week"</span>
</div>

<div className="p-3 font-mono text-xs leading-relaxed text-neutral-300 overflow-x-auto">
<span className="text-purple-400">SELECT</span> 
                        u.id, u.email, <span className="text-amber-400">SUM</span>(o.total) <span className="text-purple-400">as</span> revenue<br/>
<span className="text-purple-400">FROM</span> public.users u<br/>
<span className="text-purple-400">JOIN</span> public.orders o <span className="text-purple-400">ON</span> u.id = o.user_id<br/>
<span className="text-purple-400">WHERE</span> u.status = <span className="text-emerald-300">'active'</span><br/>
<span className="text-purple-400">AND</span> o.created_at &gt; <span className="text-purple-400">NOW</span>() - <span className="text-purple-400">INTERVAL</span> <span className="text-emerald-300">'7 days'</span><br/>
<span className="text-purple-400">GROUP BY</span> u.id<br/>
<span className="text-purple-400">ORDER BY</span> revenue <span className="text-purple-400">DESC</span><br/>
<span className="text-purple-400">LIMIT</span> 5;
                    </div>
</div>

<div className="px-3 py-1.5 bg-neutral-900/50 border-t border-white/5 flex items-center justify-between rounded-b-xl">
<span className="text-[10px] text-neutral-500">Duration: 42ms</span>
<span className="text-[10px] text-neutral-500">5 rows returned</span>
</div>

<div className="absolute bottom-[20px] -right-1.5 w-3 h-3 bg-indigo-500 border border-white rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] z-20"></div>
</div>

<div className="absolute top-[380px] left-[750px] w-[300px] glass-node rounded-xl z-10">
<div className="absolute top-[20px] -left-1.5 w-3 h-3 bg-neutral-800 border border-neutral-600 rounded-full z-20"></div>
<div className="p-3">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-white">Revenue Distribution</span>
<span className="iconify text-neutral-500" data-icon="lucide:bar-chart-2" data-width="12"></span>
</div>

<div className="flex items-end justify-between h-24 gap-2 pt-2 border-b border-white/5 pb-2">
<div className="w-full bg-neutral-800 rounded-t-sm relative group" style={{height: '40%'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$1.2k</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm relative group" style={{height: '65%'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$2.8k</div>
</div>
<div className="w-full bg-indigo-500 rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] relative group" style={{height: '90%'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-white font-bold opacity-100">$4.1k</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm relative group" style={{height: '55%'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$2.1k</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm relative group" style={{height: '30%'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$0.9k</div>
</div>
</div>
<div className="flex justify-between text-[9px] text-neutral-600 font-mono mt-1">
<span>A.M.</span>
<span>J.D.</span>
<span>S.L.</span>
<span>M.R.</span>
<span>K.T.</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2 z-40">
<button className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center backdrop-blur shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
<button className="w-8 h-8 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center backdrop-blur shadow-lg">
<span className="iconify" data-icon="lucide:minus" data-width="16"></span>
</button>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 border border-amber-500/20 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs text-amber-200 font-medium">Schema Mismatch Detected</span>
</div>
<div className="h-3 w-[1px] bg-white/10"></div>
<button className="text-xs text-white hover:text-amber-400 underline decoration-amber-500/50 underline-offset-2">Review Diff</button>
</div>
</div>
</main>

    </>
  );
}
