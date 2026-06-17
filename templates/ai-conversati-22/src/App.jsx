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



        // --- Icon Initialization ---
        lucide.createIcons();

        // --- Logic for Sidebar Interactions (React Simulation) ---
        // This function simulates how React would handle 'active' state via props/state
        function handleHistoryClick(element, title) {
            // 1. Reset all items to "inactive" state
            const allItems = document.querySelectorAll('.history-item');
            allItems.forEach(item => {
                // Remove active classes
                item.classList.remove('bg-white', 'shadow-sm', 'border-slate-200', 'text-slate-900');
                // Add inactive classes
                item.classList.add('text-slate-600', 'border-transparent', 'hover:bg-slate-100');
                
                // Fix icon color
                const icon = item.querySelector('svg');
                if(icon) {
                    icon.classList.remove('text-[#D6001C]');
                    icon.classList.add('text-slate-400');
                }
            });

            // 2. Set clicked item to "active" state
            // Remove inactive classes
            element.classList.remove('text-slate-600', 'border-transparent', 'hover:bg-slate-100');
            // Add active classes
            element.classList.add('bg-white', 'shadow-sm', 'border-slate-200', 'text-slate-900');

            // Fix icon color for active state
            const activeIcon = element.querySelector('svg');
            if(activeIcon) {
                activeIcon.classList.remove('text-slate-400');
                activeIcon.classList.add('text-[#D6001C]');
            }

            // Update Header Title to match selection
            const headerTitle = document.getElementById('thread-title');
            if(headerTitle) headerTitle.innerText = title;

            // On mobile, close sidebar after selection
            if(window.innerWidth < 768) {
                toggleSidebar(false);
            }
        }

        // --- Standard UI Logic ---
        const menuBtn = document.getElementById('menu-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar');
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('backdrop');
        const userMenuBtn = document.getElementById('user-menu-btn');
        const userDropdown = document.getElementById('user-dropdown');
        const chatContainer = document.getElementById('chat-container');
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const dynamicMessages = document.getElementById('dynamic-messages');

        function toggleSidebar(show) {
            if (show) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('hidden');
                setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('opacity-0');
                setTimeout(() => backdrop.classList.add('hidden'), 300);
            }
        }

        menuBtn.addEventListener('click', () => toggleSidebar(true));
        closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
        backdrop.addEventListener('click', () => toggleSidebar(false));

        userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.add('hidden');
            }
        });

        // Chat Logic
        function scrollToBottom() {
            chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
        }

        input.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if(this.value === '') this.style.height = 'auto';
        });

        function appendUserMessage(text) {
            const div = document.createElement('div');
            div.className = 'flex gap-3 sm:gap-4 flex-row-reverse group animate-fade-in';
            div.innerHTML = `
                <div class="flex-1 min-w-0 space-y-2 text-right">
                    <div class="inline-block bg-slate-100/80 px-4 py-2.5 rounded-2xl rounded-tr-sm text-slate-800 border border-slate-200/50 text-left sm:text-right text-sm sm:text-base leading-relaxed max-w-full sm:max-w-[90%] shadow-sm">
                        <p>${text}</p>
                    </div>
                </div>
            `;
            dynamicMessages.appendChild(div);
            scrollToBottom();
        }

        function appendAIMessage() {
            const div = document.createElement('div');
            div.className = 'flex gap-3 sm:gap-4 animate-fade-in';
            div.innerHTML = `
                <div class="flex-none mt-1">
                    <div class="h-8 w-8 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                        <img src="https://www.kmecs-automation.jp/assets/images/global/header_logo.png" alt="K" class="h-3 w-auto opacity-70">
                    </div>
                </div>
                <div class="flex-1 min-w-0 space-y-3">
                    <div class="flex items-baseline gap-2">
                        <span class="text-sm font-semibold text-slate-900">Support Assistant</span>
                    </div>
                    <div class="text-slate-600 text-sm sm:text-base leading-relaxed">
                        <p>I have switched context to the selected topic. How can I assist with this specific controller module?</p>
                    </div>
                </div>
            `;
            dynamicMessages.appendChild(div);
            scrollToBottom();
            lucide.createIcons();
        }

        function handleSend() {
            const text = input.value.trim();
            if (!text) return;
            input.value = '';
            input.style.height = 'auto';
            appendUserMessage(text);
            setTimeout(() => appendAIMessage(), 800);
        }

        sendBtn.addEventListener('click', handleSend);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
    
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
      

<div aria-hidden="true" className="fixed inset-0 bg-slate-900/10 backdrop-blur-[2px] z-40 hidden transition-opacity opacity-0" id="backdrop"></div>

<header className="flex-none h-14 border-b border-slate-100 flex items-center justify-between px-4 bg-white z-30 relative">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-800 transition-colors -ml-2 p-2" id="menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-3">
<div className="h-6 w-auto flex items-center">
<img alt="K.MECS" className="h-5 w-auto object-contain block" src="https://www.kmecs-automation.jp/assets/images/global/header_logo.png"/>
</div>
<div className="hidden sm:block w-px h-4 bg-slate-200"></div>
<span className="hidden sm:block text-sm font-medium text-slate-500 tracking-tight">AI Assistant</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex h-8 px-3 items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-md transition-colors border border-transparent hover:border-slate-100">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i>
                Docs
            </button>
<div className="relative">
<button className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 focus:ring-2 focus:ring-offset-1 focus:ring-slate-100 outline-none transition-shadow" id="user-menu-btn">
                    JD
                </button>
<div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-1 hidden z-50 origin-top-right transform transition-all duration-200" id="user-dropdown">
<div className="px-3 py-2 border-b border-slate-50">
<p className="text-sm font-medium text-slate-900">John Doe</p>
<p className="text-xs text-slate-500 truncate">eng.dept@kmecs.jp</p>
</div>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Settings</a>
<a className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50" href="#">Log out</a>
</div>
</div>
</div>
</header>
<div className="flex-1 flex overflow-hidden relative">

<aside className="absolute md:relative inset-y-0 left-0 z-50 w-72 md:w-64 bg-slate-50/50 border-r border-slate-100 flex flex-col transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] h-full backdrop-blur-xl md:backdrop-blur-none bg-white/95 md:bg-slate-50/50" id="sidebar">
<div className="p-4 flex-none flex items-center justify-between md:hidden border-b border-slate-100">
<span className="font-medium text-slate-900">Menu</span>
<button className="text-slate-400 hover:text-slate-600 p-1" id="close-sidebar">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-3">
<button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-white hover:shadow-md border border-slate-200 hover:border-slate-300 text-slate-700 h-9 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 group">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="plus"></i>
<span>New Chat</span>
</button>
</div>

<nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-6 no-scrollbar">

<div>
<h3 className="px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">Recent</h3>
<ul className="space-y-0.5">
<li>

<button className="history-item w-full flex items-center gap-2.5 px-2 py-2 text-sm font-medium text-slate-900 bg-white shadow-sm border border-slate-200 rounded-md transition-all duration-200 group text-left" onclick="handleHistoryClick(this, 'Q3 Controller Specs')">
<i className="w-4 h-4 text-[#D6001C] flex-none" data-lucide="message-square"></i>
<span className="truncate">Q3 Controller Specs</span>
</button>
</li>
<li>
<button className="history-item w-full flex items-center gap-2.5 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-all duration-200 group text-left border border-transparent" onclick="handleHistoryClick(this, 'Servo Tuning Guide')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-500 flex-none transition-colors" data-lucide="message-square"></i>
<span className="truncate">Servo Tuning Guide</span>
</button>
</li>
<li>
<button className="history-item w-full flex items-center gap-2.5 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-all duration-200 group text-left border border-transparent" onclick="handleHistoryClick(this, 'Wiring Diagram V2')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-500 flex-none transition-colors" data-lucide="message-square"></i>
<span className="truncate">Wiring Diagram V2</span>
</button>
</li>
</ul>
</div>

<div>
<h3 className="px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Previous 7 Days</h3>
<ul className="space-y-0.5">
<li>
<button className="history-item w-full flex items-center gap-2.5 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-all duration-200 group text-left border border-transparent" onclick="handleHistoryClick(this, 'Error 402 Resolution')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-500 flex-none transition-colors" data-lucide="message-square"></i>
<span className="truncate">Error 402 Resolution</span>
</button>
</li>
<li>
<button className="history-item w-full flex items-center gap-2.5 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-all duration-200 group text-left border border-transparent" onclick="handleHistoryClick(this, 'EtherCAT Nodes')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-500 flex-none transition-colors" data-lucide="message-square"></i>
<span className="truncate">EtherCAT Nodes</span>
</button>
</li>
</ul>
</div>
</nav>
<div className="p-3 border-t border-slate-100">
<button className="w-full flex items-center gap-2 px-2 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
                    Clear conversations
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white w-full">

<div className="h-12 border-b border-slate-50 flex items-center justify-between px-4 flex-none w-full bg-white/80 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-2 overflow-hidden">
<h1 className="font-medium text-slate-800 text-sm sm:text-base tracking-tight truncate" id="thread-title">Q3 Controller Specifications</h1>
<span className="flex-none px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200">Q3-Series</span>
</div>
<button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 sm:px-4 sm:py-6 scroll-smooth" id="chat-container">
<div className="w-full max-w-4xl mx-auto space-y-6 pb-4">

<div className="flex justify-center">
<span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Today, 9:41 AM</span>
</div>

<div className="flex gap-3 sm:gap-4">
<div className="flex-none mt-1">
<div className="h-8 w-8 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-center">
<img alt="K" className="h-3 w-auto opacity-70" src="https://www.kmecs-automation.jp/assets/images/global/header_logo.png"/>
</div>
</div>
<div className="flex-1 min-w-0 space-y-2">
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-slate-900">Support Assistant</span>
</div>
<div className="prose prose-sm max-w-none text-slate-600 leading-relaxed">
<p>Hello! I can help you with technical specifications, wiring diagrams, and troubleshooting for K.MECS automation products. What do you need assistance with?</p>
</div>
</div>
</div>

<div className="flex gap-3 sm:gap-4 flex-row-reverse group">
<div className="flex-1 min-w-0 text-right space-y-2">
<div className="inline-block bg-slate-100/80 px-4 py-2.5 rounded-2xl rounded-tr-sm text-slate-800 border border-slate-200/50 text-left sm:text-right text-sm sm:text-base leading-relaxed max-w-full sm:max-w-[90%] shadow-sm">
<p>Can you give me the power requirements and I/O limits for the Q3 Controller?</p>
</div>
</div>
</div>

<div className="flex gap-3 sm:gap-4">
<div className="flex-none mt-1">
<div className="h-8 w-8 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-center">
<img alt="K" className="h-3 w-auto opacity-70" src="https://www.kmecs-automation.jp/assets/images/global/header_logo.png"/>
</div>
</div>
<div className="flex-1 min-w-0 space-y-3">
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-slate-900">Support Assistant</span>
</div>
<div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
<p>Based on the technical datasheet for the Q3 Series High-Performance Controller, here are the specifications:</p>
<div className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm w-full max-w-lg">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-100">
<tr>
<th className="px-4 py-2 font-medium text-slate-500 w-1/3">Parameter</th>
<th className="px-4 py-2 font-medium text-slate-500">Specification</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr>
<td className="px-4 py-2.5 text-slate-500">Input Voltage</td>
<td className="px-4 py-2.5 text-slate-900 font-medium">24V DC (20.4 to 28.8V)</td>
</tr>
<tr>
<td className="px-4 py-2.5 text-slate-500">Current Draw</td>
<td className="px-4 py-2.5 text-slate-900 font-medium">0.8A (Main Unit only)</td>
</tr>
<tr>
<td className="px-4 py-2.5 text-slate-500">Local I/O Max</td>
<td className="px-4 py-2.5 text-slate-900 font-medium">64 Points</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="flex items-center gap-3 pt-1">
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors p-1 -ml-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
                                    Copy
                                </button>
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors p-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i>
                                    Helpful
                                </button>
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors p-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="thumbs-down"></i>
</button>
</div>
</div>
</div>
<div className="space-y-6" id="dynamic-messages"></div>
</div>
</div>

<div className="flex-none px-4 pb-6 pt-2 w-full">
<div className="max-w-4xl mx-auto relative group">
<div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent -top-4 pointer-events-none"></div>
<div className="relative bg-white rounded-xl shadow-sm border border-slate-200 transition-colors focus-within:border-[#D6001C] focus-within:ring-1 focus-within:ring-[#D6001C] flex items-end overflow-hidden">
<textarea className="block w-full border-0 bg-transparent py-3.5 pl-4 pr-12 text-slate-900 placeholder:text-slate-400 focus:ring-0 text-base resize-none leading-relaxed" id="chat-input" placeholder="Ask a follow up..." rows="1" style={{minHeight: '52px', maxHeight: '200px'}}></textarea>
<div className="absolute right-2 bottom-2 flex items-center gap-1">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="paperclip"></i>
</button>
<button className="p-2 bg-[#D6001C] hover:bg-[#b00017] text-white rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed" id="send-btn">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
<p className="text-center text-[10px] sm:text-xs text-slate-400 mt-2 font-medium">AI generated content may be inaccurate. Verify with official K.MECS manuals.</p>
</div>
</div>
</main>
</div>


    </>
  );
}
