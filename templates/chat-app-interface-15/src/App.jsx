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
      

<aside className="w-full md:w-[400px] flex flex-col border-r border-[#222d34] bg-[#111b21] z-10 shrink-0">

<header className="px-4 py-2.5 flex items-center justify-between bg-[#202c33]">
<div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center shrink-0 cursor-pointer overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=64748b"/>
</div>
<div className="flex items-center gap-1.5 text-[#aebac1]">
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center" title="Communities">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center" title="Status">
<iconify-icon height="22" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center" title="Channels">
<iconify-icon height="22" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center" title="New chat">
<iconify-icon height="22" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center" title="Menu">
<iconify-icon height="22" icon="solar:menu-dots-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</header>

<div className="px-3 py-2 flex items-center gap-2 border-b border-[#222d34]">
<div className="relative flex-1 flex items-center">
<div className="absolute left-3 text-[#8696a0] flex items-center justify-center">
<iconify-icon height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="w-full bg-[#202c33] rounded-lg pl-12 pr-4 py-1.5 text-sm text-[#e9edef] placeholder-[#8696a0] focus:outline-none focus:bg-[#202c33] transition-colors h-[34px]" placeholder="Search or start a new chat" type="text"/>
</div>
<button className="p-1.5 text-[#8696a0] hover:text-[#e9edef] rounded-lg transition-colors">
<iconify-icon height="20" icon="solar:filter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>

<div className="px-3 py-2.5 flex gap-2 overflow-x-auto scrollbar-hide border-b border-[#222d34]">
<button className="px-4 py-1.5 rounded-full bg-[#202c33] text-[#8696a0] hover:bg-[#2a3942] text-sm transition-colors whitespace-nowrap">All</button>
<button className="px-4 py-1.5 rounded-full bg-[#0a332c] text-[#00a884] text-sm transition-colors whitespace-nowrap">Unread</button>
<button className="px-4 py-1.5 rounded-full bg-[#202c33] text-[#8696a0] hover:bg-[#2a3942] text-sm transition-colors whitespace-nowrap">Groups</button>
</div>

<div className="flex-1 overflow-y-auto bg-[#111b21] scrollbar-custom">

<div className="flex items-stretch bg-[#2a3942] cursor-pointer group">
<div className="px-3 py-3 flex items-center justify-center">
<div className="w-[48px] h-[48px] rounded-full bg-zinc-700 overflow-hidden shrink-0">
<img alt="Sarah" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&amp;backgroundColor=6366f1"/>
</div>
</div>
<div className="flex-1 flex flex-col justify-center pr-4 py-3 border-b border-[#222d34] min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[#e9edef] text-base truncate font-normal">Sarah Jenkins</span>
<span className="text-[#00a884] text-xs shrink-0 ml-2">14:05</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[#e9edef] text-sm truncate pr-2 font-normal">I'll board the flight in 2 hours! ✈️</span>
<div className="bg-[#00a884] text-[#111b21] rounded-full h-[20px] min-w-[20px] px-1 flex items-center justify-center text-xs tracking-tight shrink-0">
                            2
                        </div>
</div>
</div>
</div>

<div className="flex items-stretch hover:bg-[#202c33] cursor-pointer group transition-colors">
<div className="px-3 py-3 flex items-center justify-center">
<div className="w-[48px] h-[48px] rounded-full bg-zinc-700 overflow-hidden shrink-0">
<img alt="Marcus" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&amp;backgroundColor=14b8a6"/>
</div>
</div>
<div className="flex-1 flex flex-col justify-center pr-4 py-3 border-b border-[#222d34] min-w-0 group-hover:border-transparent">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[#e9edef] text-base truncate font-normal">Marcus Chen</span>
<span className="text-[#8696a0] text-xs shrink-0 ml-2">11:42</span>
</div>
<div className="flex justify-start items-center gap-1.5">
<iconify-icon className="text-[#53bdeb] shrink-0" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="text-[#8696a0] text-sm truncate font-normal">The sunset here in Kyoto is unreal today.</span>
</div>
</div>
</div>

<div className="flex items-stretch hover:bg-[#202c33] cursor-pointer group transition-colors">
<div className="px-3 py-3 flex items-center justify-center">
<div className="w-[48px] h-[48px] rounded-full bg-zinc-700 overflow-hidden shrink-0">
<img alt="Group" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Design&amp;backgroundColor=f59e0b"/>
</div>
</div>
<div className="flex-1 flex flex-col justify-center pr-4 py-3 border-b border-[#222d34] min-w-0 group-hover:border-transparent">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[#e9edef] text-base truncate font-normal">Design System Sync</span>
<span className="text-[#8696a0] text-xs shrink-0 ml-2">Yesterday</span>
</div>
<div className="flex justify-start items-center gap-1">
<span className="text-[#8696a0] text-sm truncate font-normal">Anna: Let's coordinate the timezone difference.</span>
</div>
</div>
</div>
</div>
</aside>

<main className="hidden md:flex flex-1 flex-col relative bg-[#0b141a]">

<div className="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat"></div>

<header className="px-4 py-2.5 flex items-center justify-between bg-[#202c33] z-10 border-l border-[#222d34]">
<div className="flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden shrink-0">
<img alt="Sarah" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&amp;backgroundColor=6366f1"/>
</div>
<div className="flex flex-col">
<span className="text-[#e9edef] text-base font-normal">Sarah Jenkins</span>
<span className="text-[#8696a0] text-xs">click here for contact info</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-[#aebac1]">
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center">
<iconify-icon height="22" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-[#374248] rounded-full transition-colors flex items-center justify-center">
<iconify-icon height="22" icon="solar:menu-dots-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-[5%] lg:px-[8%] py-4 z-10 scrollbar-custom flex flex-col gap-1">

<div className="flex justify-center mb-4 mt-2">
<div className="bg-[#182229] text-[#ffd279] text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-center max-w-[85%] shadow-sm">
<iconify-icon height="12" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</span>
</div>
</div>

<div className="flex justify-center mb-3">
<div className="bg-[#182229] text-[#8696a0] text-xs px-3 py-1.5 rounded-lg shadow-sm">
                    TODAY
                </div>
</div>

<div className="flex mb-0.5 w-full">
<div className="bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none px-2 py-1.5 max-w-[65%] text-sm relative shadow-sm break-words">

<div className="absolute top-0 -left-2 w-2 h-3 overflow-hidden">
<div className="w-4 h-4 bg-[#202c33] rounded-sm absolute top-0 left-1 transform -rotate-45"></div>
</div>
<span className="pl-1">Hey! I just made it to the hotel. The city is amazing even at night.</span>
<span className="float-right mt-2 ml-4 text-[10px] text-[#8696a0]">14:01</span>

<div className="clear-both"></div>
</div>
</div>

<div className="flex mb-3 w-full">
<div className="bg-[#202c33] text-[#e9edef] rounded-lg px-2 py-1.5 max-w-[65%] text-sm relative shadow-sm break-words">
<span className="pl-1">Wish you were here. The 12 hour difference is going to be wild for our calls though 😅</span>
<span className="float-right mt-2 ml-4 text-[10px] text-[#8696a0]">14:01</span>
<div className="clear-both"></div>
</div>
</div>

<div className="flex mb-0.5 w-full justify-end">
<div className="bg-[#005c4b] text-[#e9edef] rounded-lg rounded-tr-none px-2 py-1.5 max-w-[65%] text-sm relative shadow-sm break-words">
<div className="absolute top-0 -right-2 w-2 h-3 overflow-hidden">
<div className="w-4 h-4 bg-[#005c4b] rounded-sm absolute top-0 -left-1 transform rotate-45"></div>
</div>
<span className="pl-1">So glad you made it safe! Send pictures when you can.</span>
<div className="float-right mt-2 ml-4 flex items-center gap-1 text-[10px] text-[#8696a0]">
<span>14:03</span>
<iconify-icon className="text-[#53bdeb]" height="15" icon="solar:check-read-linear" width="15"></iconify-icon>
</div>
<div className="clear-both"></div>
</div>
</div>

<div className="flex mb-3 w-full justify-end">
<div className="bg-[#005c4b] text-[#e9edef] rounded-lg px-2 py-1.5 max-w-[65%] text-sm relative shadow-sm break-words">
<span className="pl-1">Don't worry about the time zone, we'll make it work. I'll stay up late!</span>
<div className="float-right mt-2 ml-4 flex items-center gap-1 text-[10px] text-[#8696a0]">
<span>14:03</span>
<iconify-icon className="text-[#53bdeb]" height="15" icon="solar:check-read-linear" width="15"></iconify-icon>
</div>
<div className="clear-both"></div>
</div>
</div>

<div className="flex mb-1 w-full">
<div className="bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none px-2 py-1.5 max-w-[65%] text-sm relative shadow-sm break-words">
<div className="absolute top-0 -left-2 w-2 h-3 overflow-hidden">
<div className="w-4 h-4 bg-[#202c33] rounded-sm absolute top-0 left-1 transform -rotate-45"></div>
</div>
<span className="pl-1">I'll board the flight in 2 hours! ✈️</span>
<span className="float-right mt-2 ml-4 text-[10px] text-[#8696a0]">14:05</span>
<div className="clear-both"></div>
</div>
</div>
<div className="h-2"></div>
</div>

<footer className="px-4 py-3 bg-[#202c33] flex items-end gap-3 z-10 border-l border-[#222d34]">
<div className="flex items-center gap-2 mb-1.5 text-[#8696a0]">
<button className="p-1.5 hover:text-[#e9edef] transition-colors flex items-center justify-center">
<iconify-icon height="26" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</button>
<button className="p-1.5 hover:text-[#e9edef] transition-colors flex items-center justify-center">
<iconify-icon height="26" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</button>
</div>
<div className="flex-1 bg-[#2a3942] rounded-lg flex items-center relative mb-0.5">
<textarea className="w-full bg-transparent text-[#e9edef] placeholder-[#8696a0] px-4 py-2.5 text-sm resize-none focus:outline-none scrollbar-hide max-h-[100px] block" placeholder="Type a message" rows="1" style={{minHeight: '40px'}}></textarea>
</div>
<div className="flex items-center mb-1.5 text-[#8696a0]">
<button className="p-1.5 hover:text-[#e9edef] transition-colors flex items-center justify-center">
<iconify-icon height="26" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</button>
</div>
</footer>
</main>
<style>
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .scrollbar-custom::-webkit-scrollbar {
            width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
            background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        .scrollbar-custom:hover::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2);
        }
    </style>

    </>
  );
}
