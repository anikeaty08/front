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
      

<header className="h-10 border-b border-slate-200 bg-white flex items-center justify-between px-3 flex-none z-30 relative">

<div className="flex items-center gap-2 w-52">
<div className="w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center shadow-md shadow-slate-200">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight hidden md:block">Mailbox</span>
</div>

<div className="flex-1 max-w-xl px-2">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<input className="block w-full pl-8 pr-16 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all h-7" placeholder="Search..." type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-1.5 gap-1">
<span className="text-[10px] text-slate-400 font-medium px-1 border border-slate-200 rounded bg-white">⌘K</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 w-52 justify-end">

<div className="hidden xl:flex items-center gap-1.5 text-[10px] text-slate-400 font-medium bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
<iconify-icon className="animate-spin-slow" icon="solar:refresh-linear" width="10"></iconify-icon>
<span>Synced</span>
</div>
<button className="relative p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
<span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>

<div className="flex items-center gap-1.5 pl-2 border-l border-slate-100 cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Profile" className="w-6 h-6 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative z-0">

<aside className="hidden lg:flex w-52 border-r border-slate-200 bg-slate-50/30 flex-col flex-none">

<div className="p-2 pb-1">
<button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-1.5 px-3 rounded-md shadow-sm transition-all group">
<iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon>
<span className="font-medium text-xs">Compose</span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-1.5 py-1 space-y-4">

<div className="space-y-px">
<div className="px-2 pb-1 pt-1 flex items-center justify-between group">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Folders</span>
<button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"><iconify-icon icon="solar:add-circle-linear" width="12"></iconify-icon></button>
</div>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-900 bg-white rounded group border border-slate-200 shadow-sm transition-all" href="#">
<iconify-icon className="text-slate-800" icon="solar:inbox-linear" width="14"></iconify-icon>
<span className="font-medium flex-1">Inbox</span>
<span className="text-[10px] font-semibold text-slate-900">4</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-yellow-500" icon="solar:star-linear" width="14"></iconify-icon>
<span className="font-medium">Starred</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-orange-500" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-medium">Snoozed</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:plain-2-linear" width="14"></iconify-icon>
<span className="font-medium">Sent</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:file-text-linear" width="14"></iconify-icon>
<span className="font-medium flex-1">Drafts</span>
<span className="text-[10px] font-medium text-slate-400">2</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:archive-linear" width="14"></iconify-icon>
<span className="font-medium">Archive</span>
</a>
</div>

<div className="space-y-px">
<div className="px-2 pb-1 pt-1 flex items-center justify-between">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Categories</span>
</div>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-blue-400" icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span className="font-medium">Social</span>
<span className="text-[10px] text-blue-600 bg-blue-50 px-1 py-px rounded font-medium ml-auto">12</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors group" href="#">
<iconify-icon className="text-emerald-400" icon="solar:tag-price-linear" width="14"></iconify-icon>
<span className="font-medium">Promotions</span>
</a>
</div>

<div className="space-y-px">
<div className="px-2 pb-1 pt-1 flex items-center justify-between group">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Labels</span>
<button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"><iconify-icon icon="solar:add-circle-linear" width="12"></iconify-icon></button>
</div>
<button className="w-full flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:bg-slate-100 rounded transition-colors text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span>Finance</span>
</button>
<button className="w-full flex items-center gap-2.5 px-2 py-1 text-slate-600 hover:bg-slate-100 rounded transition-colors text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
<span>Priority</span>
</button>
</div>
</div>

<div className="p-2 border-t border-slate-200 mt-auto">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-medium text-slate-600">Storage</span>
<span className="text-[10px] text-slate-400">75%</span>
</div>
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-slate-400 rounded-full"></div>
</div>
</div>
</aside>

<div className="w-full md:w-72 xl:w-[380px] border-r border-slate-200 flex flex-col bg-white h-full z-10 flex-none">

<div className="h-9 border-b border-slate-200 flex items-center justify-between px-2 flex-none bg-white">
<div className="flex items-center gap-1">
<label className="custom-checkbox flex items-center cursor-pointer p-1 rounded hover:bg-slate-50">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white flex items-center justify-center text-white transition-colors">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<iconify-icon className="ml-1 text-slate-400" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</label>
<button className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded" title="Archive">
<iconify-icon icon="solar:archive-linear" width="14"></iconify-icon>
</button>
<button className="p-1 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1">
<button className="p-1 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="px-2 py-1.5 flex items-center gap-1.5 border-b border-slate-100 overflow-x-auto no-scrollbar">
<button className="px-2.5 py-0.5 bg-slate-900 text-white rounded-md text-[10px] font-medium whitespace-nowrap">Focused</button>
<button className="px-2.5 py-0.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-md text-[10px] font-medium whitespace-nowrap transition-colors">Other</button>
<button className="px-2.5 py-0.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-md text-[10px] font-medium whitespace-nowrap transition-colors flex items-center gap-1">
                    Unread <span className="bg-slate-200 px-1 rounded text-[9px] h-3.5 flex items-center">4</span>
</button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="group relative px-2 py-2 border-b border-slate-100 bg-blue-50/40 cursor-pointer hover:bg-blue-50/70 transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600"></div>
<div className="flex items-start gap-2">

<div className="flex flex-col items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white hover:border-slate-400 flex items-center justify-center text-white">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</label>
<button className="text-slate-300 hover:text-yellow-400"><iconify-icon icon="solar:star-linear" width="12"></iconify-icon></button>
</div>

<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-px">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-md bg-slate-800 text-white flex items-center justify-center text-[9px] font-bold">L</div>
<h3 className="text-xs font-bold text-slate-900 truncate">Linear Team</h3>
</div>
<span className="text-[10px] font-medium text-slate-900 whitespace-nowrap">10:24 AM</span>
</div>
<h4 className="text-[11px] font-semibold text-slate-800 mb-0.5 truncate leading-tight">Cycle 24 Planning &amp; Roadmap</h4>
<p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">Hey team, here is the proposed roadmap for the upcoming cycle. We are focusing on performance...</p>
</div>
</div>
</div>

<div className="group relative px-2 py-2 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex items-start gap-2">

<div className="flex flex-col items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white hover:border-slate-400 flex items-center justify-center text-white">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</label>
<button className="text-yellow-400"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></button>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-px">
<div className="flex items-center gap-1.5">
<img alt="Stripe" className="w-4 h-4 rounded-md" src="https://i.pravatar.cc/150?u=stripe"/>
<h3 className="text-xs font-medium text-slate-900 truncate">Stripe Support</h3>
</div>
<span className="text-[10px] text-slate-500 whitespace-nowrap">Yesterday</span>
</div>
<h4 className="text-[11px] font-medium text-slate-700 mb-0.5 truncate">Your payout of $2,400.00 is on the way</h4>
<p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">We've sent a payout to your bank account ending in 4242. It should arrive by Friday...</p>
</div>
</div>
</div>

<div className="group relative px-2 py-2 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex items-start gap-2">
<div className="flex flex-col items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white hover:border-slate-400 flex items-center justify-center text-white">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</label>
<button className="text-slate-300 hover:text-yellow-400"><iconify-icon icon="solar:star-linear" width="12"></iconify-icon></button>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-px">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center"><iconify-icon icon="solar:shield-warning-linear" width="10"></iconify-icon></div>
<h3 className="text-xs font-bold text-slate-900 truncate">Vercel Security</h3>
</div>
<span className="text-[10px] text-slate-500 whitespace-nowrap">Oct 24</span>
</div>
<div className="flex items-center gap-1 mb-0.5">
<iconify-icon className="text-red-500" icon="solar:danger-circle-linear" width="12"></iconify-icon>
<h4 className="text-[11px] font-bold text-slate-800 truncate">New login from Chrome on macOS</h4>
</div>
<p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">We noticed a new login to your Vercel account. If this was you, you don't need to do anything.</p>
</div>
</div>
</div>

<div className="group relative px-2 py-2 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex items-start gap-2">
<div className="flex flex-col items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white hover:border-slate-400 flex items-center justify-center text-white">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</label>
<button className="text-slate-300 hover:text-yellow-400"><iconify-icon icon="solar:star-linear" width="12"></iconify-icon></button>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-px">
<div className="flex items-center gap-1.5">
<img alt="Sarah" className="w-4 h-4 rounded-md" src="https://i.pravatar.cc/150?u=sarah"/>
<h3 className="text-xs font-medium text-slate-700 truncate">Sarah Jenkins</h3>
</div>
<span className="text-[10px] text-slate-500 whitespace-nowrap">Oct 22</span>
</div>
<h4 className="text-[11px] font-medium text-slate-600 mb-0.5 truncate">Re: Design System Update</h4>
<p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">I've attached the latest figma files. Let me know if you need anything else to proceed with the...</p>
<div className="mt-1 flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:paperclip-linear" width="10"></iconify-icon>
<span className="text-[9px] text-slate-400 bg-slate-50 px-1 rounded border border-slate-100">design_v2.fig</span>
</div>
</div>
</div>
</div>

<div className="group relative px-2 py-2 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex items-start gap-2">
<div className="flex flex-col items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded bg-white hover:border-slate-400 flex items-center justify-center text-white">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</label>
<button className="text-slate-300 hover:text-yellow-400"><iconify-icon icon="solar:star-linear" width="12"></iconify-icon></button>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-px">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-md bg-purple-100 text-purple-600 flex items-center justify-center text-[9px] font-bold">D</div>
<h3 className="text-xs font-medium text-slate-700 truncate">DevOps</h3>
</div>
<span className="text-[10px] text-slate-500 whitespace-nowrap">Oct 21</span>
</div>
<h4 className="text-[11px] font-medium text-slate-600 mb-0.5 truncate">Production Deployment Succeeded</h4>
<p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">The deployment to production was successful. All tests passed. See logs attached...</p>
</div>
</div>
</div>
</div>

<div className="h-8 border-t border-slate-200 flex items-center justify-between px-2 bg-slate-50/50 flex-none text-[10px] text-slate-500">
<span>1-50 of 523</span>
<div className="flex items-center gap-1">
<button className="p-0.5 hover:bg-slate-200 rounded disabled:opacity-50" disabled=""><iconify-icon icon="solar:alt-arrow-left-linear" width="12"></iconify-icon></button>
<button className="p-0.5 hover:bg-slate-200 rounded"><iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></button>
</div>
</div>
</div>

<main className="hidden md:flex flex-1 flex-col h-full bg-white min-w-0 relative">

<div className="flex-none p-3 border-b border-slate-100">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="flex gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100">
<button className="p-1 text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded transition-all" title="Reply"><iconify-icon icon="solar:reply-linear" width="14"></iconify-icon></button>
<button className="p-1 text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded transition-all" title="Reply All"><iconify-icon icon="solar:reply-2-linear" width="14"></iconify-icon></button>
<button className="p-1 text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded transition-all" title="Forward"><iconify-icon icon="solar:forward-linear" width="14"></iconify-icon></button>
</div>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Archive"><iconify-icon icon="solar:archive-linear" width="16"></iconify-icon></button>
<button className="p-1 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete"><iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon></button>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-medium rounded uppercase tracking-wider">Inbox</span>
<button className="p-1 text-slate-400 hover:text-slate-900 rounded"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</div>
</div>

<div className="flex items-start justify-between gap-4 mb-2">
<h1 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">Cycle 24 Planning &amp; Roadmap</h1>
<button className="text-slate-300 hover:text-yellow-400 transition-colors"><iconify-icon icon="solar:star-linear" width="18"></iconify-icon></button>
</div>

<div className="flex items-start justify-between">
<div className="flex items-start gap-2.5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-800 to-slate-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                            LT
                        </div>
<div>
<div className="flex items-center gap-1">
<span className="text-xs font-bold text-slate-900">Linear Team</span>
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear" title="Verified Sender" width="12"></iconify-icon>
<span className="text-[10px] text-slate-500">&lt;hello@linear.app&gt;</span>
</div>
<div className="flex items-center gap-1 text-[10px] text-slate-500 mt-0 group cursor-pointer">
<span>To: <span className="text-slate-800">Katherine M.</span></span>
<iconify-icon className="group-hover:text-slate-800" icon="solar:alt-arrow-down-linear" width="8"></iconify-icon>
</div>
</div>
</div>
<div className="text-right">
<p className="text-[10px] font-medium text-slate-900">Oct 24</p>
<p className="text-[10px] text-slate-500">10:24 AM</p>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 md:px-6 lg:px-8 pb-10">

<div className="mb-4 bg-slate-50/80 rounded-md p-2 border border-slate-100 flex gap-2">
<div className="w-5 h-5 rounded bg-purple-100 text-purple-600 flex items-center justify-center flex-none">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
</div>
<div>
<p className="text-[10px] font-bold text-slate-700 mb-0">AI Summary</p>
<p className="text-[10px] text-slate-500 leading-tight">Proposed roadmap for Cycle 24 focusing on sync engine performance. Objectives: reduce TTI by 20%, refactor notifications.</p>
</div>
</div>
<div className="prose prose-slate prose-xs max-w-none text-slate-700 leading-snug font-normal">
<p className="mb-2">Hi Katherine,</p>
<p className="mb-2">Here is the proposed roadmap for the upcoming <strong>Cycle 24</strong>. We are primarily focusing on performance improvements, specifically around the sync engine and initial load times for large workspaces.</p>
<h3 className="text-xs font-bold text-slate-900 mt-4 mb-2">Key Objectives</h3>
<ul className="space-y-1 list-none pl-0 mb-4">
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-500 mt-px flex-none" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Reduce TTI (Time to Interactive) by 20%</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-500 mt-px flex-none" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Implement new optimistic UI updates for task creation</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-500 mt-px flex-none" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Refactor the notification center backend</span>
</li>
</ul>
<p>Please review the attached document for the detailed breakdown of engineering resources and timeline estimations.</p>
</div>

<div className="mt-4 border-t border-slate-100 pt-3">
<h4 className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-wider">1 Attachment</h4>
<div className="flex flex-wrap gap-2">
<div className="group flex items-center gap-2 p-1.5 pr-3 border border-slate-200 rounded-md bg-white hover:bg-slate-50 hover:shadow-sm transition-all cursor-pointer w-fit">
<div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon icon="solar:file-pdf-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Roadmap_Cycle_24.pdf</p>
<p className="text-[10px] text-slate-400">2.4 MB</p>
</div>
<div className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-0.5">
<button className="p-0.5 text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded shadow-sm"><iconify-icon icon="solar:eye-linear" width="12"></iconify-icon></button>
<button className="p-0.5 text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded shadow-sm"><iconify-icon icon="solar:download-linear" width="12"></iconify-icon></button>
</div>
</div>
</div>
</div>
<div className="h-8"></div>

<div className="border-t border-slate-200 pt-3 cursor-pointer group">
<div className="flex items-center gap-2 text-[10px] text-slate-400 group-hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-square-linear" width="14"></iconify-icon>
<span>2 older messages in this thread</span>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
