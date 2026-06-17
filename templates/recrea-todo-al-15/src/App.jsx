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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="w-[72px] h-full flex flex-col items-center py-6 border-r border-zinc-200/50 bg-[#F6F6F6] shrink-0 z-20">

<div className="size-12 bg-black text-white rounded-full flex items-center justify-center mb-8 shadow-sm">
<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"></path></svg>
</div>
<div className="size-10 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md relative">
<svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"></path></svg>
<div className="absolute -right-1 -bottom-1 size-3 bg-white rounded-full"></div>
</div>

<div className="flex flex-col gap-6 items-center flex-1 w-full text-zinc-400">
<div className="p-2 cursor-pointer hover:text-black transition-colors">
<i className="size-6" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<div className="p-2 cursor-pointer text-black bg-zinc-200/50 rounded-2xl">
<i className="size-6 fill-zinc-200 text-black" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<div className="p-2 cursor-pointer hover:text-black transition-colors">
<i className="size-6" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="p-2 cursor-pointer hover:text-black transition-colors">
<i className="size-6" data-lucide="code" strokeWidth="1.5"></i>
</div>
</div>

<div className="mt-auto">
<img alt="User" className="size-10 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
</nav>

<aside className="w-[380px] h-full p-2 shrink-0 flex flex-col z-10">
<div className="bg-white rounded-[32px] w-full h-full p-6 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">

<div className="flex items-center justify-between mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-black">All Chats</h1>
<i className="size-6 text-black" data-lucide="search" strokeWidth="2"></i>
</div>

<div className="flex items-start justify-between mb-8 px-1">
<div className="flex flex-col items-center gap-2">
<div className="size-[60px] rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-purple-500 relative">
<img alt="" className="size-full rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-black">Ekene</span>
<span className="text-xs text-zinc-400">Designer</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="size-[60px] rounded-full relative">
<img alt="" className="size-full rounded-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-1 -right-1 size-6 bg-black text-white text-xs flex items-center justify-center rounded-full border-2 border-white font-medium z-10">2</div>
</div>
<span className="text-sm font-medium text-black">Phawta</span>
<span className="text-xs text-zinc-400">Developer</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="size-[60px] rounded-full relative">
<img alt="" className="size-full rounded-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div className="absolute -top-2 -right-3 bg-white border border-zinc-200 px-2 py-0.5 rounded-full text-xs font-semibold text-black shadow-sm z-10">OK!</div>
<div className="absolute -bottom-1 -right-1 size-6 bg-black text-white text-xs flex items-center justify-center rounded-full border-2 border-white font-medium z-10">1</div>
</div>
<span className="text-sm font-medium text-black">Waiapi</span>
<span className="text-xs text-zinc-400">Designer</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="size-[60px] rounded-full p-[2px] bg-green-500 relative">
<img alt="" className="size-full rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<span className="text-sm font-medium text-black">Wen</span>
<span className="text-xs text-zinc-400">Developer</span>
</div>
</div>

<div className="flex-1 overflow-y-auto flex flex-col gap-4 -mx-2 px-2 pb-20">

<div className="bg-[#F8F9FA] rounded-[24px] p-5 relative group cursor-pointer border border-transparent hover:border-zinc-200 transition-all">
<div className="absolute top-5 right-5 size-6 bg-black text-white text-xs rounded-full flex items-center justify-center font-medium">2</div>
<p className="text-zinc-400 text-xs mb-1">Working</p>
<h3 className="text-lg font-semibold tracking-tight text-black leading-tight mb-4 pr-8">Many of you asked how to create these stunning animations</h3>

<div className="bg-white rounded-2xl p-3 shadow-sm mb-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<img alt="" className="size-5 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=50&amp;h=50"/>
<span className="text-xs font-medium">Alex <span className="text-zinc-400 font-normal">- Designer</span></span>
</div>
<div className="flex items-center gap-1 text-zinc-300">
<i className="size-3" data-lucide="message-square" strokeWidth="2"></i>
<span className="text-xs">13</span>
</div>
</div>

<div className="relative h-28 w-full flex justify-center items-center mt-2">
<img alt="" className="absolute w-20 h-28 object-cover rounded-xl -rotate-12 -translate-x-8 shadow-sm" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=300"/>
<img alt="" className="absolute w-20 h-28 object-cover rounded-xl rotate-12 translate-x-8 shadow-sm" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=300"/>
<img alt="" className="absolute w-24 h-32 object-cover rounded-xl z-10 shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium">
<i className="size-3" data-lucide="flag" strokeWidth="2"></i> Low
                            </span>
<span className="flex items-center gap-1 px-2.5 py-1 bg-white border border-zinc-100 text-zinc-500 rounded-lg text-xs">
<i className="size-3" data-lucide="calendar" strokeWidth="1.5"></i> Nov 4
                            </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 text-xs">
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="users" strokeWidth="1.5"></i> 8</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="paperclip" strokeWidth="1.5"></i> 23</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="message-circle" strokeWidth="1.5"></i> 12</span>
</div>
</div>
</div>

<div className="flex -space-x-2 px-2 py-1">
<img alt="" className="size-8 rounded-full border-2 border-white relative z-30" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="size-8 rounded-full border-2 border-white relative z-20 grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="size-8 rounded-full border-2 border-white relative z-10 grayscale brightness-50" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>

<div className="bg-white border border-zinc-100 rounded-[24px] p-5 hover:border-zinc-200 transition-all cursor-pointer">
<p className="text-zinc-400 text-xs mb-1">Working</p>
<h3 className="text-base font-semibold tracking-tight text-black leading-snug mb-4">It's now much better<br/>at challenging</h3>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 px-2.5 py-1 border border-zinc-100 text-zinc-500 rounded-lg text-xs">
<i className="size-3" data-lucide="calendar" strokeWidth="1.5"></i> Nov 4
                        </span>
<div className="flex items-center gap-3 text-zinc-400 text-xs">
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="message-square" strokeWidth="1.5"></i> 9</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="paperclip" strokeWidth="1.5"></i> 34</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="message-circle" strokeWidth="1.5"></i> 21</span>
</div>
</div>
</div>

<div className="w-full flex justify-start px-2 py-1">
<div className="size-10 bg-black text-white rounded-[14px] flex items-center justify-center">
<svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-100 rounded-[24px] p-5 hover:border-zinc-200 transition-all cursor-pointer">
<p className="text-zinc-400 text-xs mb-1">Working</p>
<h3 className="text-base font-semibold tracking-tight text-black leading-snug mb-4">Geex Arts new App</h3>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 px-2.5 py-1 border border-zinc-100 text-zinc-500 rounded-lg text-xs">
<i className="size-3" data-lucide="calendar" strokeWidth="1.5"></i> Nov 4
                        </span>
<div className="flex items-center gap-3 text-zinc-400 text-xs">
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="users" strokeWidth="1.5"></i> 8</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="paperclip" strokeWidth="1.5"></i> 29</span>
<span className="flex items-center gap-1"><i className="size-3.5" data-lucide="message-circle" strokeWidth="1.5"></i> 12</span>
</div>
</div>
</div>
</div>

<button className="absolute bottom-6 left-1/2 -translate-x-1/2 size-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform z-20">
<i className="size-6" data-lucide="plus" strokeWidth="2"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative py-6 px-4">

<header className="flex items-center justify-between px-6 py-2 mb-4">
<div className="flex items-center gap-3">
<img alt="" className="size-10 rounded-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h2 className="text-base font-semibold text-black leading-none mb-1">Many of you asked...</h2>
<p className="text-xs text-zinc-400 flex items-center gap-1">
<i className="size-3" data-lucide="pen-line" strokeWidth="2"></i> Writing ···
                    </p>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-black">
<i className="size-6" data-lucide="video" strokeWidth="1.5"></i>
</button>
</header>

<div className="flex-1 overflow-y-auto px-6 pb-24 flex flex-col gap-6">

<div className="flex items-end gap-3 max-w-[85%]">
<img alt="" className="size-8 rounded-full mb-1 object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="bg-white py-3 px-5 rounded-t-2xl rounded-br-2xl rounded-bl-sm shadow-sm relative">
<div className="absolute top-1/2 -left-2 -translate-y-1/2 text-zinc-300">
<i className="size-4" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<p className="text-black font-medium pl-2">Adjust lighting and angles, but keep defining features unchanged.</p>
</div>
</div>

<div className="flex flex-col gap-3 ml-11 mt-4">
<div className="relative w-[380px] h-[360px] flex items-center justify-center">

<div className="absolute top-4 left-0 w-36 h-48 bg-[#FF6500] rounded-2xl -rotate-12 shadow-sm"></div>
<div className="absolute top-10 right-4 w-36 h-48 bg-[#4853FF] rounded-2xl rotate-12 shadow-sm"></div>

<img alt="" className="absolute top-16 -left-6 w-36 h-48 object-cover rounded-2xl -rotate-6 opacity-80" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
<img alt="" className="absolute top-20 -right-2 w-36 h-48 object-cover rounded-2xl rotate-6 opacity-80" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>

<img alt="Glossy lips" className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 object-cover rounded-[32px] z-10 shadow-xl border-4 border-white/10" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>

<div className="flex items-center gap-3">
<button className="bg-black text-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform"><svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"></path></svg></button>
<div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm text-xs font-medium">
<span className="flex items-center gap-1"><span className="text-base">🦎</span> 13</span>
<span className="flex items-center gap-1"><span className="text-base">🔥</span> 8</span>
<span className="flex items-center gap-1"><span className="text-base">👾</span> 8</span>
</div>
<div className="flex items-center bg-white p-1 pr-3 rounded-2xl shadow-sm ml-auto">
<div className="flex -space-x-2 mr-2">
<img alt="" className="size-6 rounded-full border border-white relative z-30" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="size-6 rounded-full border border-white relative z-20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="size-6 rounded-full border border-white relative z-10 bg-orange-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<span className="text-xs font-medium text-zinc-500"><i className="size-3 inline mr-1" data-lucide="message-square" strokeWidth="2"></i>13</span>
</div>
</div>
</div>

<div className="flex justify-end w-full mt-4">
<div className="bg-black text-white py-3 px-5 rounded-t-2xl rounded-bl-2xl rounded-br-sm shadow-md flex items-center gap-2">
<i className="size-4" data-lucide="sparkles" strokeWidth="2"></i>
<p className="font-medium">Create video with all</p>
</div>
</div>

<div className="flex flex-col gap-2 ml-11 mt-4 max-w-md">
<div className="relative">
<img alt="Person with headphones" className="w-full h-48 object-cover rounded-2xl shadow-sm" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=400"/>
</div>

<div className="flex items-center gap-2 mt-2">
<button className="bg-black text-white p-2.5 rounded-xl shadow-md"><svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"></path></svg></button>
<div className="bg-white py-2 px-4 rounded-full shadow-sm text-sm font-semibold">WOOOW 👏👏</div>
</div>

<div className="flex items-end gap-3 mt-1">
<img alt="" className="size-8 rounded-full mb-1 object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="bg-white py-2.5 px-5 rounded-t-2xl rounded-br-2xl rounded-bl-sm shadow-sm">
<p className="text-black font-semibold">Do You SEE thith?</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-[#F6F6F6] rounded-full p-2 flex items-center justify-between gap-2 shadow-sm">
<button className="p-3 bg-white rounded-full text-zinc-400 hover:text-black shadow-sm">
<i className="size-5" data-lucide="paperclip" strokeWidth="2"></i>
</button>
<div className="flex-1 bg-white h-12 rounded-full px-5 flex items-center shadow-sm">
<i className="size-4 text-zinc-400 mr-2" data-lucide="type" strokeWidth="2"></i>
<input className="w-full bg-transparent outline-none text-black font-medium placeholder:text-zinc-400" placeholder="Text Massege" type="text"/>
</div>
<div className="flex items-center gap-1">
<button className="p-3 hover:bg-white rounded-full text-zinc-400 transition-colors">
<i className="size-5" data-lucide="sparkles" strokeWidth="2"></i>
</button>
<button className="p-3 hover:bg-white rounded-full text-zinc-400 transition-colors">
<i className="size-5" data-lucide="type" strokeWidth="2"></i>
</button>
<button className="p-3 bg-black text-white rounded-full shadow-md">
<i className="size-5" data-lucide="mic" strokeWidth="2"></i>
</button>
</div>
</div>
</main>

<aside className="w-[380px] h-full p-6 shrink-0 flex flex-col gap-6 overflow-y-auto relative z-20">

<div className="absolute top-12 -left-16 w-56 bg-[#FF6500] rounded-3xl p-5 shadow-[0_20px_40px_-10px_rgba(255,101,0,0.4)] z-50 transform -rotate-3 text-white flex flex-col cursor-pointer hover:rotate-0 transition-transform">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-semibold text-lg leading-tight">Ai Sumari</h3>
<p className="text-white/80 text-xs">All Massage</p>
</div>
</div>

<div className="flex items-end gap-[3px] h-10 mb-4 justify-between px-1">
<div className="w-1 bg-black/90 h-3 rounded-full"></div>
<div className="w-1 bg-black/90 h-6 rounded-full"></div>
<div className="w-1 bg-black/90 h-8 rounded-full"></div>
<div className="w-1 bg-black/90 h-4 rounded-full"></div>
<div className="w-1 bg-black/90 h-10 rounded-full"></div>
<div className="w-1 bg-black/90 h-7 rounded-full"></div>
<div className="w-1 bg-black/90 h-5 rounded-full"></div>
<div className="w-1 bg-black/90 h-9 rounded-full"></div>
<div className="w-1 bg-black/90 h-4 rounded-full"></div>
<div className="w-1 bg-black/90 h-6 rounded-full"></div>
<div className="w-1 bg-black/90 h-8 rounded-full relative">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 size-1.5 bg-black rounded-full"></div>
</div>
<div className="w-1 bg-black/90 h-3 rounded-full"></div>
<div className="w-1 bg-black/90 h-5 rounded-full"></div>
<div className="w-1 bg-black/40 h-7 rounded-full"></div>
<div className="w-1 bg-black/40 h-4 rounded-full"></div>
<div className="w-1 bg-black/40 h-6 rounded-full"></div>
<div className="w-1 bg-black/40 h-2 rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<button className="size-8 bg-black rounded-full flex items-center justify-center pl-0.5">
<svg className="size-3.5 text-white fill-white" viewbox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"></path></svg>
</button>
<span className="text-xs font-medium opacity-80">0:19</span>
</div>
</div>

<header className="flex items-center justify-between mb-2">
<h2 className="text-xl font-semibold tracking-tight text-black">Ai Assistant</h2>
<div className="flex gap-2 text-zinc-400">
<i className="size-5 cursor-pointer hover:text-black" data-lucide="copy" strokeWidth="2"></i>
<i className="size-5 cursor-pointer hover:text-black" data-lucide="more-horizontal" strokeWidth="2"></i>
</div>
</header>

<div className="flex flex-col ml-32">
<h3 className="text-base font-semibold mb-1">Search</h3>
<p className="text-xs text-zinc-400 mb-3">Picchers</p>
<div className="grid grid-cols-2 gap-2 h-20 w-36">
<img alt="" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<img alt="" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="mt-4 border-l-2 border-zinc-200 pl-3 py-1">
<p className="text-xs text-zinc-400">to Al</p>
<p className="text-sm font-semibold leading-tight">Your trip with Gojek<br/>on Wednesday</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-2">

<div className="flex flex-col gap-2">
<h3 className="text-base font-semibold">Timer</h3>
<div className="bg-white/50 backdrop-blur-sm rounded-3xl p-4 flex flex-col items-center justify-center relative aspect-square border border-white/60">
<svg className="absolute inset-0 size-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="2"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#000" stroke-dasharray="251.2" stroke-dashoffset="180" strokeWidth="2"></circle>
</svg>
<div className="text-center z-10">
<div className="text-2xl font-light tracking-widest leading-none">08</div>
<div className="text-2xl font-light tracking-widest leading-none">45</div>
<div className="text-2xl font-light tracking-widest leading-none text-zinc-400">00</div>
</div>
</div>
<div className="flex items-center gap-2 mt-1">
<button className="size-6 bg-black rounded-full flex items-center justify-center pl-0.5"><svg className="size-2.5 text-white fill-white" viewbox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"></path></svg></button>
<span className="text-xs font-semibold">Start Progect</span>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<h3 className="text-base font-semibold">Docs</h3>
<i className="size-4 text-zinc-400" data-lucide="plus" strokeWidth="2"></i>
</div>
<div className="bg-white/50 backdrop-blur-sm rounded-3xl p-3 flex flex-col relative aspect-square border border-white/60 overflow-hidden">
<div className="relative w-full h-full">
<img alt="" className="absolute top-0 right-0 w-20 h-16 object-cover rounded-xl shadow-sm rotate-6" src="https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=150"/>
<img alt="" className="absolute top-2 left-0 w-20 h-16 object-cover rounded-xl shadow-sm -rotate-6" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=150"/>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-16 bg-white rounded-xl shadow-md p-1 border border-zinc-100 z-10">
<img alt="" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=150"/>
<div className="absolute -top-2 -left-2 size-6 bg-white/80 backdrop-blur text-xs font-semibold rounded-full flex items-center justify-center border border-zinc-200">9</div>
</div>
</div>
</div>
<div className="mt-1">
<p className="text-xs text-zinc-400">24-27 April</p>
<p className="text-xs font-semibold">Japen Metup</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-2">

<div className="flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold">Tasks</h3>
<i className="size-4 text-black" data-lucide="plus" strokeWidth="2"></i>
</div>
<ul className="flex flex-col gap-4 text-xs font-semibold">
<li className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<i className="size-3.5 text-zinc-400" data-lucide="heart" strokeWidth="2"></i>
<span>Buy Sunlite</span>
</div>
<div className="size-4 rounded border-2 border-zinc-200 border-dashed"></div>
</li>
<li className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<div className="size-3.5 bg-red-500 rounded-sm rotate-45"></div>
<span>to Hallie Alvarado</span>
</div>
<div className="size-4 rounded border-2 border-zinc-200 border-dashed"></div>
</li>
<li className="flex items-center justify-between text-zinc-400 relative">
<div className="flex items-center gap-2">
<i className="size-3.5" data-lucide="layers" strokeWidth="2"></i>
<span>Get radi</span>
</div>
<div className="absolute left-6 right-6 h-px bg-red-500 top-1/2"></div>
<div className="size-4 rounded border-2 border-zinc-200 border-dashed bg-zinc-100"></div>
</li>
<li className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<i className="size-3.5 text-orange-500" data-lucide="zap" strokeWidth="2"></i>
<span>Go to mouvi</span>
</div>
<div className="size-4 rounded border-2 border-zinc-200 border-dashed"></div>
</li>
</ul>
</div>

<div className="flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold">Coonect<br/><span className="text-zinc-400 font-normal text-xs">Apps</span></h3>
<i className="size-4 text-black" data-lucide="plus" strokeWidth="2"></i>
</div>
<div className="bg-white/60 backdrop-blur-sm rounded-[24px] p-4 border border-white grid grid-cols-2 gap-4 place-items-center">

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<svg className="size-4" viewbox="0 0 24 24"><path d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" fill="#EA4335"></path><path d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z" fill="#34A853"></path><path d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z" fill="#4A90E2"></path><path d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z" fill="#FBBC05"></path></svg>
</div>

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="size-4 text-blue-500" data-lucide="layers" strokeWidth="2"></i>
</div>

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<div className="flex gap-0.5">
<div className="size-1.5 bg-red-400 rounded-full"></div>
<div className="size-1.5 bg-yellow-400 rounded-full"></div>
<div className="size-1.5 bg-orange-400 rounded-full"></div>
</div>
</div>

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="size-4 text-black" data-lucide="asterisk" strokeWidth="2"></i>
</div>

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="size-4 text-black" data-lucide="slack" strokeWidth="2"></i>
</div>

<div className="size-8 rounded-full bg-white flex items-center justify-center shadow-sm">
<div className="size-3 bg-black rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold">Today</h3>
<i className="size-4 text-black" data-lucide="plus" strokeWidth="2"></i>
</div>
<div className="relative w-full h-32 flex justify-center overflow-hidden pt-4">

<svg className="absolute top-0 w-[120%] left-[-10%] h-[200px]" viewbox="0 0 200 100">
<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="2"></path>

<path d="M 150 40 A 80 80 0 0 1 180 100" fill="none" stroke="#FBBF24" strokeWidth="2"></path>
</svg>

<div className="absolute top-[35px] right-[45px] size-3 bg-orange-500 rounded-full border-2 border-white shadow-sm z-10"></div>
<div className="absolute top-[60px] right-[15px] size-2 bg-yellow-400 rounded-full border border-white shadow-sm z-10"></div>
<div className="absolute top-[80px] right-[5px] size-2 bg-yellow-400 rounded-full border border-white shadow-sm z-10"></div>
<div className="text-center z-10 mt-8">
<p className="text-xs text-zinc-400 mb-1">Next Meeting</p>
<h2 className="text-4xl font-light tracking-tight text-black leading-none mb-2">10:15</h2>
<p className="text-xs text-zinc-400">00:30:12</p>
</div>
</div>
</div>

<div className="mt-auto pt-4 flex items-center justify-between px-2">
<button className="p-2 text-zinc-400 hover:text-black bg-white rounded-full shadow-sm"><i className="size-4" data-lucide="paperclip" strokeWidth="2"></i></button>
<div className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
<div className="flex items-center gap-[2px]">
<div className="w-1 bg-white h-2 rounded-full"></div>
<div className="w-1 bg-white h-4 rounded-full"></div>
<div className="w-1 bg-white h-3 rounded-full"></div>
<div className="w-1 bg-white h-5 rounded-full"></div>
<div className="w-1 bg-white h-2 rounded-full"></div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-black bg-white rounded-full shadow-sm"><i className="size-4" data-lucide="type" strokeWidth="2"></i></button>
</div>
</aside>



    </>
  );
}
