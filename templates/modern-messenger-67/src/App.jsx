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



        // Icons
        lucide.createIcons();

        // Responsive & UI Logic
        const sidebar = document.getElementById('sidebar');
        const chatWindow = document.getElementById('chat-window');
        const chatAvatar = document.getElementById('chat-avatar');
        const chatName = document.getElementById('chat-name');
        const chatStatus = document.getElementById('chat-status');
        const messagesContainer = document.getElementById('messages-container');
        const messageInput = document.getElementById('message-input');

        function openChat(name, status, avatarUrl) {
            // Update Header
            chatName.textContent = name;
            chatStatus.textContent = status;
            chatAvatar.src = avatarUrl;
            
            // Mobile: Slide sidebar out, show chat
            if (window.innerWidth < 768) {
                sidebar.classList.add('hidden');
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('flex');
            } else {
                // Desktop: Ensure chat is visible (remove empty state logic if implemented later)
            }
            
            // Scroll to bottom
            scrollToBottom();
        }

        function closeChat() {
            // Mobile only: Return to list
            sidebar.classList.remove('hidden');
            chatWindow.classList.add('hidden');
            chatWindow.classList.remove('flex');
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function handleEnter(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const text = messageInput.value.trim();
            if (!text) return;

            // Create Message HTML
            const msgDiv = document.createElement('div');
            msgDiv.className = 'flex flex-col items-end gap-1 max-w-[85%] md:max-w-[60%] ml-auto animate-[fadeIn_0.2s_ease-out]';
            
            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'bg-emerald-900/30 border border-emerald-800/40 text-emerald-50 px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm';
            
            const p = document.createElement('p');
            p.className = 'text-sm leading-relaxed font-light';
            p.textContent = text;
            
            bubbleDiv.appendChild(p);
            
            const timeDiv = document.createElement('div');
            timeDiv.className = 'flex items-center gap-1 text-[10px] text-neutral-500 pr-1';
            
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            timeDiv.innerHTML = `<span>${timeString}</span><i data-lucide="check" class="w-3 h-3"></i>`;
            
            msgDiv.appendChild(bubbleDiv);
            msgDiv.appendChild(timeDiv);

            messagesContainer.appendChild(msgDiv);
            messageInput.value = '';
            
            // Re-initialize icons for the new checkmark
            lucide.createIcons();
            scrollToBottom();
        }

        // Initial scroll
        scrollToBottom();

        // Animation Keyframe
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
    
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
      

<aside className="w-full md:w-[400px] flex flex-col border-r border-neutral-800 bg-neutral-950 h-full transition-transform duration-300 md:translate-x-0" id="sidebar">

<div className="h-16 px-4 flex items-center justify-between border-b border-neutral-800 shrink-0 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">ME</div>
<h1 className="text-sm font-medium tracking-tight text-neutral-100">Chats</h1>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<button className="hover:text-neutral-100 transition-colors"><i className="w-5 h-5" data-lucide="message-square-plus"></i></button>
<button className="hover:text-neutral-100 transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
</div>

<div className="px-3 py-3 space-y-3">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-emerald-500 transition-colors" data-lucide="search"></i>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-1.5 pl-9 pr-3 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all" placeholder="Search" type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-medium text-neutral-200 border border-neutral-700 hover:bg-neutral-700 transition-colors">All</button>
<button className="px-3 py-1 rounded-full bg-neutral-900 text-xs font-medium text-neutral-500 border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-300 transition-colors">Unread</button>
<button className="px-3 py-1 rounded-full bg-neutral-900 text-xs font-medium text-neutral-500 border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-300 transition-colors">Groups</button>
</div>
</div>

<div className="flex-1 overflow-y-auto" id="chat-list">

<div className="group flex items-center gap-3 px-3 py-3 bg-neutral-900/50 border-l-[3px] border-emerald-500 cursor-pointer hover:bg-neutral-900 transition-colors" onclick="openChat('Design Team', 'online', 'https://i.pravatar.cc/150?u=1')">
<img alt="Avatar" className="w-11 h-11 rounded-full bg-neutral-800 object-cover border border-neutral-800" src="https://i.pravatar.cc/150?u=1"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-neutral-100 truncate tracking-tight">Design Team</h3>
<span className="text-[10px] text-emerald-500 font-medium">10:42 AM</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-neutral-300 truncate tracking-tight pr-2">Can we review the figma file?</p>
<span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500 text-[9px] font-bold text-black">2</span>
</div>
</div>
</div>

<div className="group flex items-center gap-3 px-3 py-3 border-l-[3px] border-transparent cursor-pointer hover:bg-neutral-900 transition-colors" onclick="openChat('Sarah Miller', 'Last seen today at 9:30 AM', 'https://i.pravatar.cc/150?u=2')">
<img alt="Avatar" className="w-11 h-11 rounded-full bg-neutral-800 object-cover border border-neutral-800 opacity-90 group-hover:opacity-100" src="https://i.pravatar.cc/150?u=2"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-normal text-neutral-200 truncate tracking-tight">Sarah Miller</h3>
<span className="text-[10px] text-neutral-500">Yesterday</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-xs text-neutral-500 truncate tracking-tight">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="check-check"></i>
<span>Sent the invoice.</span>
</div>
</div>
</div>
</div>

<div className="group flex items-center gap-3 px-3 py-3 border-l-[3px] border-transparent cursor-pointer hover:bg-neutral-900 transition-colors" onclick="openChat('Alex Chen', 'online', 'https://i.pravatar.cc/150?u=3')">
<img alt="Avatar" className="w-11 h-11 rounded-full bg-neutral-800 object-cover border border-neutral-800 opacity-90 group-hover:opacity-100" src="https://i.pravatar.cc/150?u=3"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-normal text-neutral-200 truncate tracking-tight">Alex Chen</h3>
<span className="text-[10px] text-neutral-500">Monday</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-xs text-neutral-500 truncate tracking-tight">
<i className="w-3 h-3" data-lucide="mic"></i> 0:24
                        </div>
</div>
</div>
</div>

<div className="group flex items-center gap-3 px-3 py-3 border-l-[3px] border-transparent cursor-pointer hover:bg-neutral-900 transition-colors" onclick="openChat('Product Updates', 'tap for info', 'https://i.pravatar.cc/150?u=8')">
<div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 text-neutral-400">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-normal text-neutral-200 truncate tracking-tight">Product Updates</h3>
<span className="text-[10px] text-neutral-500">Sunday</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-xs text-neutral-500 truncate tracking-tight">
<span>🚀 v2.0 is now live!</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 px-4 py-3">
<div className="h-px bg-neutral-800 flex-1"></div>
<span className="text-[10px] text-neutral-600 font-medium uppercase tracking-widest">Archived</span>
<div className="h-px bg-neutral-800 flex-1"></div>
</div>
</div>
</aside>

<main className="flex-1 hidden md:flex flex-col h-full bg-neutral-950 relative z-0" id="chat-window">

<div className="hidden flex-col items-center justify-center h-full text-center p-8" id="empty-state">
<div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mb-6 border border-neutral-800">
<i className="w-10 h-10 text-neutral-600" data-lucide="laptop-2"></i>
</div>
<h2 className="text-lg font-medium text-neutral-300 mb-2">Modern Messenger for Web</h2>
<p className="text-sm text-neutral-500 max-w-sm">Send and receive messages without keeping your phone online.<br/>Use modern apps on up to 4 linked devices and 1 phone.</p>
<div className="mt-8 flex items-center gap-2 text-xs text-neutral-600">
<i className="w-3 h-3" data-lucide="lock"></i> End-to-end encrypted
            </div>
</div>

<div className="flex flex-col h-full" id="chat-interface">

<header className="h-16 px-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-3">
<button className="md:hidden text-neutral-400 hover:text-white mr-1" onclick="closeChat()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<img className="w-9 h-9 rounded-full bg-neutral-800 object-cover border border-neutral-700" id="chat-avatar" src="https://i.pravatar.cc/150?u=1"/>
<div className="flex flex-col justify-center">
<h2 className="text-sm font-medium text-neutral-100 tracking-tight leading-none mb-1" id="chat-name">Design Team</h2>
<span className="text-[10px] text-emerald-500 font-medium leading-none" id="chat-status">online</span>
</div>
</div>
<div className="flex items-center gap-5 text-neutral-400">
<button className="hover:text-neutral-100 transition-colors"><i className="w-5 h-5" data-lucide="video"></i></button>
<button className="hover:text-neutral-100 transition-colors"><i className="w-5 h-5" data-lucide="phone"></i></button>
<div className="w-px h-4 bg-neutral-800"></div>
<button className="hover:text-neutral-100 transition-colors"><i className="w-5 h-5" data-lucide="search"></i></button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 chat-bg relative scroll-smooth" id="messages-container">

<div className="flex justify-center mb-6">
<span className="bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px] font-medium px-3 py-1 rounded-full shadow-sm tracking-wide uppercase">Today</span>
</div>

<div className="flex flex-col items-start gap-1 max-w-[85%] md:max-w-[60%]">
<div className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm group relative">
<p className="text-sm leading-relaxed font-light">Hey! Did you get a chance to look at the new component library updates?</p>
<span className="absolute bottom-1 right-3 text-[9px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">10:30 AM</span>
</div>
</div>

<div className="flex flex-col items-start gap-1 max-w-[85%] md:max-w-[60%]">
<div className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm relative group">
<p className="text-sm leading-relaxed font-light">We need to finalize the color palette for the dark mode toggle.</p>
</div>
<span className="text-[10px] text-neutral-600 pl-1">10:31 AM</span>
</div>

<div className="flex flex-col items-end gap-1 max-w-[85%] md:max-w-[60%] ml-auto">
<div className="bg-emerald-900/30 border border-emerald-800/40 text-emerald-50 px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm">
<p className="text-sm leading-relaxed font-light">Yes, I'm reviewing it right now. The contrasts look much better on the new build.</p>
</div>
<div className="flex items-center gap-1 text-[10px] text-neutral-500 pr-1">
<span>10:35 AM</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check-check"></i>
</div>
</div>

<div className="flex flex-col items-end gap-1 max-w-[85%] md:max-w-[60%] ml-auto">
<div className="bg-emerald-900/30 border border-emerald-800/40 p-1 rounded-2xl rounded-tr-sm shadow-sm">
<div className="relative rounded-xl overflow-hidden mb-1">
<div className="absolute inset-0 bg-neutral-900/10 hover:bg-transparent transition-colors"></div>

<div className="w-full h-32 md:h-48 bg-neutral-800 flex items-center justify-center text-neutral-600">
<i className="w-8 h-8 opacity-50" data-lucide="image"></i>
</div>
</div>
<p className="text-sm leading-relaxed font-light px-3 pb-2 pt-1">Reference screenshot</p>
</div>
<div className="flex items-center gap-1 text-[10px] text-neutral-500 pr-1">
<span>10:36 AM</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check-check"></i>
</div>
</div>

<div className="flex flex-col items-start gap-1 max-w-[85%] md:max-w-[60%]">
<div className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm group relative">
<p className="text-sm leading-relaxed font-light">Can we review the figma file?</p>
</div>
<span className="text-[10px] text-neutral-600 pl-1">10:42 AM</span>
</div>
</div>

<footer className="p-4 bg-neutral-950 border-t border-neutral-800 sticky bottom-0 z-20">
<div className="flex items-end gap-2 max-w-4xl mx-auto">
<button className="p-2.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 rounded-lg transition-all mb-0.5">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center px-4 py-2 shadow-sm focus-within:border-neutral-700 focus-within:ring-1 focus-within:ring-neutral-700 transition-all">
<button className="mr-3 text-neutral-500 hover:text-emerald-400 transition-colors">
<i className="w-5 h-5" data-lucide="smile"></i>
</button>
<input autocomplete="off" className="bg-transparent w-full text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none py-1 h-auto max-h-32" id="message-input" onkeydown="handleEnter(event)" placeholder="Type a message..." type="text"/>
<button className="ml-3 text-neutral-500 hover:text-neutral-300 transition-colors">
<i className="w-4 h-4" data-lucide="paperclip"></i>
</button>
</div>
<button className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-105 active:scale-95 mb-0.5 group" onclick="sendMessage()">
<i className="w-4 h-4 translate-x-px group-hover:translate-x-0.5 transition-transform" data-lucide="send-horizontal"></i>
</button>
</div>
</footer>
</div>
</main>


    </>
  );
}
