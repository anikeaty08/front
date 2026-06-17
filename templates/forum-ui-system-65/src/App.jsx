import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="max-w-md w-full text-center space-y-2 pb-8 border-b border-neutral-800">
<div className="tracking-tighter font-semibold text-lg text-white uppercase">FRM.SYS</div>
<p className="text-xs text-neutral-500">Design System &amp; Page Layouts</p>
</div>

<main className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800/60 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black">

<header className="sticky top-0 z-20 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-neutral-800/50 px-5 pt-12 pb-3 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-white">FRM</div>
<div className="flex items-center gap-4 text-neutral-400">
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:bell-linear" width="20"></iconify-icon></button>
<div className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<div className="px-5 border-b border-neutral-800/50 flex gap-6 text-sm font-medium">
<button className="text-white border-b-2 border-white pb-3 pt-4 px-1">Trending</button>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors pb-3 pt-4 px-1">Latest</button>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors pb-3 pt-4 px-1">Groups</button>
</div>

<div className="p-4 flex flex-col gap-3 h-[600px] overflow-y-auto no-scrollbar">

<article className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-4 hover:border-neutral-700 transition-colors cursor-pointer group">
<div className="flex items-start justify-between gap-4 mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-[10px] font-medium text-white">J</div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-neutral-300">johndoe</span>

<span className="text-[9px] font-semibold tracking-wide px-1.5 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase">Pro</span>
</div>
<span className="text-xs text-neutral-600">· 2h</span>
</div>
<button className="text-neutral-600 hover:text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-100 leading-snug mb-2">How to implement custom authentication in Next.js 14 App Router?</h3>
<div className="flex flex-wrap items-center gap-2 mb-4">
<span className="text-[10px] px-2 py-1 rounded-full bg-[#171717] border border-neutral-800 text-neutral-400">nextjs</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-[#171717] border border-neutral-800 text-neutral-400">auth</span>

<span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Resolved
                    </span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<div className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors"><iconify-icon icon="solar:alt-arrow-up-linear" width="16"></iconify-icon> 124</div>
<div className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors"><iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon> 32 replies</div>
</div>
</article>

<article className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-4 hover:border-neutral-700 transition-colors cursor-pointer group">
<div className="flex items-start justify-between gap-4 mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center text-[10px] font-medium text-white">S</div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-neutral-300">sarah_dev</span>

<span className="text-[9px] font-semibold tracking-wide px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">Ultra</span>
</div>
<span className="text-xs text-neutral-600">· 5h</span>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-100 leading-snug mb-2">The state of CSS in 2024: Tailwind vs CSS-in-JS vs CSS Modules</h3>
<p className="text-xs text-neutral-400 line-clamp-2 mb-3 leading-relaxed">I've been evaluating different styling solutions for a large enterprise app and wanted to gather thoughts on current trends. Are we all just moving to Tailwind?</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<div className="flex items-center gap-1.5 text-neutral-300"><iconify-icon className="text-white" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon> 458</div>
<div className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors"><iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon> 128 replies</div>
</div>
</article>
</div>

<nav className="absolute bottom-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-neutral-800/80 pb-6 pt-3 px-6 flex justify-between items-center text-neutral-500">
<a className="flex flex-col items-center gap-1 text-white" href="#"><iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Home</span></a>
<a className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors" href="#"><iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Groups</span></a>
<a className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors" href="#"><iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Post</span></a>
<a className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors" href="#"><iconify-icon icon="solar:chat-round-unread-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Chat</span></a>
<a className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors" href="#"><iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Profile</span></a>
</nav>
</main>

<main className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800/60 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black">

<header className="sticky top-0 z-20 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-neutral-800/50 px-4 pt-12 pb-3 flex items-center gap-3">
<button className="text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="text-sm font-medium text-white truncate">Thread</div>
</header>
<div className="p-4 flex flex-col h-[600px] overflow-y-auto no-scrollbar pb-24">

<article className="mb-6">
<h1 className="text-xl tracking-tight font-semibold text-white mb-4 leading-tight">Architecture patterns for real-time multiplayer games?</h1>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white">M</div>
<div>
<div className="text-sm font-medium text-neutral-200">mark_builds</div>
<div className="text-xs text-neutral-500">Oct 24 · Server Eng</div>
</div>
</div>
</div>
<div className="text-sm text-neutral-300 leading-relaxed space-y-4">
<p>I'm starting a new project that requires real-time sync for up to 50 players in a single room. I'm torn between using WebSockets with a custom Node backend vs leveraging something like Nakama or Agones.</p>
<p>What are the current industry standards for indie teams?</p>
</div>
<div className="mt-4 flex items-center gap-2 border-t border-neutral-800/50 pt-4">
<button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-[#111111]"><iconify-icon icon="solar:alt-arrow-up-linear" width="18"></iconify-icon> 89</button>
<button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-[#111111]"><iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon></button>
<button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-[#111111] ml-auto"><iconify-icon icon="solar:reply-linear" width="16"></iconify-icon> Reply</button>
</div>
</article>
<div className="w-full h-px bg-neutral-800/50 mb-6"></div>

<div className="flex flex-col gap-5">

<div className="flex flex-col gap-3">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#171717] flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">A</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-neutral-300">alex_dev</span>
<span className="text-[10px] text-neutral-600">4h ago</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-2">Nakama is incredible for this. It abstracts away a lot of the matchmaker and realtime socket boilerplate. Highly recommend it if you want to ship fast.</p>
<div className="flex items-center gap-4 text-[11px] text-neutral-500">
<button className="hover:text-neutral-300">Upvote (12)</button>
<button className="hover:text-neutral-300">Reply</button>
</div>
</div>
</div>

<div className="ml-3 pl-3 border-l border-neutral-800/60 flex flex-col gap-3 mt-1">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-900 to-black flex-shrink-0 flex items-center justify-center text-[10px] text-white">M</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-white">mark_builds</span>
<span className="text-[8px] bg-[#171717] text-neutral-400 px-1.5 rounded-sm">OP</span>
<span className="text-[10px] text-neutral-600">3h ago</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-2">Did you find hosting it difficult? Thinking of just deploying it on a DigitalOcean droplet.</p>
<div className="flex items-center gap-4 text-[11px] text-neutral-500">
<button className="hover:text-neutral-300">Upvote (2)</button>
<button className="hover:text-neutral-300">Reply</button>
</div>
</div>
</div>

<div className="ml-3 pl-3 border-l border-neutral-800/60 flex flex-col gap-3 mt-1">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#171717] flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">A</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-neutral-300">alex_dev</span>
<span className="text-[10px] text-neutral-600">2h ago</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-2">They have an official docker-compose file. Literally takes 5 minutes to spin up on a standard Ubuntu droplet.</p>
<div className="flex items-center gap-4 text-[11px] text-neutral-500">
<button className="hover:text-neutral-300">Upvote (5)</button>
<button className="hover:text-neutral-300">Reply</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-3 mt-2">
<div className="w-6 h-6 rounded-full bg-[#171717] flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">R</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-neutral-300">ryan_sys</span>
<span className="text-[10px] text-neutral-600">1h ago</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-2">If you want full control, raw WebSockets via Node/Socket.io is fine for 50 CCU. You only need Agones when you start orchestrating thousands of dedicated game servers across clusters.</p>
<div className="flex items-center gap-4 text-[11px] text-neutral-500">
<button className="hover:text-neutral-300">Upvote (8)</button>
<button className="hover:text-neutral-300">Reply</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-neutral-800/80 p-3 pb-6 flex items-end gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center text-xs text-white">U</div>
<div className="flex-1 bg-[#111111] border border-neutral-800 rounded-xl flex items-center pr-1 focus-within:border-neutral-600 transition-colors">
<input className="w-full bg-transparent border-none text-sm text-white placeholder-neutral-600 px-3 py-2.5 outline-none" placeholder="Add a reply..." type="text"/>
<button className="p-1.5 text-neutral-400 hover:text-white bg-[#171717] rounded-lg m-1 transition-colors">
<iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>

<main className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800/60 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black">

<div className="relative bg-[#111111] pt-12 pb-6 px-5 border-b border-neutral-800/80">

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
<div className="absolute top-12 right-4 flex gap-2">
<button className="p-2 rounded-full bg-[#171717] border border-neutral-800 text-neutral-300 hover:text-white transition-colors"><iconify-icon icon="solar:settings-linear" width="16"></iconify-icon></button>
</div>
<div className="relative z-10 flex flex-col items-center mt-4">
<div className="w-20 h-20 rounded-full bg-neutral-900 border-2 border-[#0a0a0a] shadow-lg shadow-black/50 flex items-center justify-center text-2xl font-medium text-white relative mb-3">
                    E
                    
<svg className="absolute -inset-1 w-22 h-22 rotate-[-90deg]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="#262626" strokeWidth="2"></circle>
<circle cx="50" cy="50" fill="none" r="48" stroke="#8b5cf6" stroke-dasharray="301" stroke-dashoffset="75" strokeLinecap="round" strokeWidth="2"></circle>
</svg>
<div className="absolute -bottom-2 bg-neutral-800 border border-neutral-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-md z-10">Lvl 42</div>
</div>
<h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                    Elena Rogers
                    <iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="16"></iconify-icon>
</h2>
<p className="text-xs text-neutral-500 mb-4">@elena_codes · Joined 2023</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] font-semibold tracking-wide px-2 py-1 rounded-md bg-gradient-to-r from-amber-200 to-yellow-500 text-black uppercase shadow-sm shadow-amber-500/20">Ultra Member</span>
<span className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#171717] border border-neutral-800 text-neutral-300">Core Contributor</span>
</div>

<div className="flex justify-center gap-8 w-full">
<div className="flex flex-col items-center">
<span className="text-base font-semibold text-white">12.4k</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Reputation</span>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-semibold text-white">342</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Posts</span>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-semibold text-white">89</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Followers</span>
</div>
</div>
</div>
</div>

<div className="h-[350px] bg-[#0a0a0a] overflow-y-auto no-scrollbar pb-10">

<div className="flex border-b border-neutral-800/50 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 px-4">
<button className="flex-1 text-xs font-medium text-white border-b-2 border-white py-3">Activity</button>
<button className="flex-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 py-3">Groups</button>
<button className="flex-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 py-3">Badges</button>
</div>

<div className="p-4 space-y-3">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Joined Groups</h3>

<div className="bg-[#111111] border border-neutral-800 rounded-xl p-3 flex items-center justify-between hover:bg-[#171717] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-800/50 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Frontend Masters</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                                1.2k online · 14k members
                            </div>
</div>
</div>
<button className="bg-[#1a1a1a] border border-neutral-700 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors">Leave</button>
</div>

<div className="bg-[#111111] border border-neutral-800 rounded-xl p-3 flex items-center justify-between hover:bg-[#171717] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">DevOps Central</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
                                450 online · 8k members
                            </div>
</div>
</div>
<button className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-neutral-200 transition-colors">Join</button>
</div>
</div>
</div>
</main>

<main className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800/60 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black flex flex-col h-[600px]">

<header className="bg-[#111111] border-b border-neutral-800/80 px-4 pt-12 pb-3 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<div className="flex items-center gap-2">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white">D</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111111] rounded-full"></div>
</div>
<div>
<div className="text-sm font-medium text-white leading-none">david_ui</div>
<div className="text-[10px] text-emerald-500 mt-1">Online</div>
</div>
</div>
</div>
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:menu-dots-circle-linear" width="20"></iconify-icon></button>
</header>

<div className="flex-1 p-4 overflow-y-auto no-scrollbar flex flex-col gap-4 bg-[#0a0a0a]">
<div className="text-center text-[10px] text-neutral-600 my-2">Today, 2:41 PM</div>

<div className="flex gap-2 max-w-[85%] self-start">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center text-[10px] text-white mt-auto">D</div>
<div className="flex flex-col gap-1">
<div className="bg-[#171717] border border-neutral-800 text-sm text-neutral-200 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                        Hey! Saw your post about the new design system. Looks super clean. 
                    </div>
<span className="text-[9px] text-neutral-500 ml-1">2:41 PM</span>
</div>
</div>

<div className="flex gap-2 max-w-[85%] self-end flex-row-reverse">
<div className="flex flex-col gap-1 items-end">
<div className="bg-white text-black text-sm p-3 rounded-2xl rounded-br-sm shadow-sm">
                        Thanks man! Trying to keep it as minimal as possible while ensuring accessible contrast.
                    </div>
<div className="flex items-center gap-1 mr-1">
<span className="text-[9px] text-neutral-500">2:45 PM</span>
<iconify-icon className="text-blue-500" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex gap-2 max-w-[85%] self-start">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center text-[10px] text-white mt-auto">D</div>
<div className="flex flex-col gap-1">
<div className="bg-[#171717] border border-neutral-800 text-sm text-neutral-200 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                        Are you using custom CSS vars or strictly Tailwind utility classes?
                    </div>
<span className="text-[9px] text-neutral-500 ml-1">2:46 PM</span>
</div>
</div>
</div>

<div className="bg-[#111111] border-t border-neutral-800/80 p-3 shrink-0 flex items-center gap-2">
<button className="p-2 text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon></button>
<div className="flex-1 bg-[#0a0a0a] border border-neutral-800 rounded-full px-4 py-2 flex items-center">
<input className="w-full bg-transparent border-none text-sm text-white placeholder-neutral-600 outline-none" placeholder="Message..." type="text"/>
</div>
<button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:plain-2-bold" width="18"></iconify-icon>
</button>
</div>
</main>

<main className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800/60 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black p-5 pt-12">
<h2 className="text-xl tracking-tight font-semibold text-white mb-6">Upgrade Account</h2>

<div className="space-y-4 mb-8">

<div className="relative bg-[#111111] border border-violet-500/30 rounded-2xl p-5 overflow-hidden group hover:border-violet-500/60 transition-colors cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-violet-500" icon="solar:star-fall-bold" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-fuchsia-400 text-transparent bg-clip-text">Pro</h3>
<p className="text-xs text-neutral-400 mt-1">For active contributors</p>
</div>
<div className="text-right">
<span className="text-xl font-semibold text-white">$4</span><span className="text-xs text-neutral-500">/mo</span>
</div>
</div>
<ul className="space-y-2 text-xs text-neutral-300 relative z-10 mb-5">
<li className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Custom profile badge</li>
<li className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Create up to 5 private groups</li>
<li className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Edit posts indefinitely</li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">Upgrade to Pro</button>
</div>

<div className="relative bg-gradient-to-b from-[#1a1500] to-[#0a0a0a] border border-amber-500/30 rounded-2xl p-5 overflow-hidden">
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<h3 className="text-lg font-semibold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">Ultra</h3>
<p className="text-xs text-amber-500/70 mt-1">Maximum platform limits</p>
</div>
<div className="text-right">
<span className="text-xl font-semibold text-white">$12</span><span className="text-xs text-neutral-500">/mo</span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-200 to-yellow-500 text-black text-sm font-medium hover:opacity-90 transition-opacity">Get Ultra</button>
</div>
</div>

<div className="pt-6 border-t border-neutral-800/50">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">UI States / Validation</h3>

<div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex gap-3 mb-4">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:danger-circle-linear" width="18"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-red-400">Connection Error</h4>
<p className="text-xs text-red-400/80 mt-1">Unable to post reply. Please check your internet connection and try again.</p>
</div>
</div>

<div className="border border-dashed border-neutral-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 rounded-full bg-[#111111] border border-neutral-800 flex items-center justify-center text-neutral-500 mb-3">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-neutral-200 mb-1">No threads found</h4>
<p className="text-xs text-neutral-500 mb-4 max-w-[200px]">There are no discussions in this group yet. Be the first!</p>
<button className="bg-[#171717] border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors">Create Thread</button>
</div>
</div>
</main>

    </>
  );
}
