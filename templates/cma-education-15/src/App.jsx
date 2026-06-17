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



        lucide.createIcons();

        const chatContainer = document.getElementById('chat-container');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        let isTyping = false;

        // Knowledge Base for basic logic
        const knowledgeBase = {
            'cma': 'The CMA (Cost and Management Accountant) course is conducted by ICMAI. It has three levels: Foundation, Intermediate, and Final. We provide expert coaching for all levels with experienced faculty.',
            'fee': 'Our fee structure is designed to be affordable. Foundation starts at ₹15,000, Intermediate at ₹35,000 per group. We also offer installment options. Would you like a detailed brochure?',
            'batch': 'New batches for CMA Foundation and Intermediate are starting next Monday. Morning (7 AM - 10 AM) and Evening (5 PM - 8 PM) slots are available.',
            'faculty': 'Our faculty consists of qualified CMAs and CAs with over 10 years of teaching experience. They focus on conceptual clarity and practical application.',
            'admission': 'To take admission, please visit our center with your 10th/12th marksheets and ID proof. You can also register online via our portal.',
            'default': 'Thank you for your inquiry. To provide accurate details, could you specify if you are looking for Foundation, Intermediate, or Final level coaching?'
        };

        function getCurrentTime() {
            return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        }

        function scrollToBottom() {
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 50);
        }

        function createMessageHTML(text, sender) {
            const isUser = sender === 'user';
            const time = getCurrentTime();
            
            if (isUser) {
                return `
                <div class="flex flex-row-reverse gap-4 max-w-2xl ml-auto message-anim">
                    <div class="w-8 h-8 rounded-lg bg-zinc-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <span class="text-xs font-medium text-zinc-500">JD</span>
                    </div>
                    <div class="space-y-2 text-right">
                        <div class="flex items-baseline gap-2 justify-end">
                            <span class="text-[10px] text-zinc-400">${time}</span>
                            <span class="text-sm font-medium text-zinc-900">You</span>
                        </div>
                        <div class="bg-indigo-600 text-white p-4 rounded-xl rounded-tr-none shadow-md shadow-indigo-100 text-sm leading-relaxed text-left">
                            <p>${text}</p>
                        </div>
                    </div>
                </div>`;
            } else {
                return `
                <div class="flex gap-4 max-w-2xl message-anim">
                    <div class="w-8 h-8 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
                        <i data-lucide="sparkles" class="w-4 h-4"></i>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-baseline gap-2">
                            <span class="text-sm font-medium text-zinc-900">Siddhii AI</span>
                            <span class="text-[10px] text-zinc-400">${time}</span>
                        </div>
                        <div class="bg-white border border-zinc-200 p-4 rounded-xl rounded-tl-none shadow-sm text-sm leading-relaxed text-zinc-700">
                            <p>${text}</p>
                        </div>
                    </div>
                </div>`;
            }
        }

        function createTypingIndicatorHTML() {
            return `
            <div id="typing-indicator" class="flex gap-4 max-w-2xl message-anim">
                <div class="w-8 h-8 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
                    <i data-lucide="sparkles" class="w-4 h-4"></i>
                </div>
                <div class="space-y-2">
                     <div class="flex items-baseline gap-2">
                        <span class="text-sm font-medium text-zinc-900">Siddhii AI</span>
                        <span class="text-[10px] text-zinc-400">Thinking...</span>
                    </div>
                    <div class="bg-white border border-zinc-200 px-4 py-3 rounded-xl rounded-tl-none shadow-sm w-20 flex items-center justify-center gap-1">
                        <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                        <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                        <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                    </div>
                </div>
            </div>`;
        }

        function getBotResponse(input) {
            const lowerInput = input.toLowerCase();
            if (lowerInput.includes('cma') || lowerInput.includes('course')) return knowledgeBase['cma'];
            if (lowerInput.includes('fee') || lowerInput.includes('price') || lowerInput.includes('cost')) return knowledgeBase['fee'];
            if (lowerInput.includes('batch') || lowerInput.includes('class') || lowerInput.includes('time')) return knowledgeBase['batch'];
            if (lowerInput.includes('faculty') || lowerInput.includes('teacher')) return knowledgeBase['faculty'];
            if (lowerInput.includes('admission') || lowerInput.includes('join')) return knowledgeBase['admission'];
            return knowledgeBase['default'];
        }

        async function handleMessageSubmit(text = null) {
            const messageText = text || userInput.value.trim();
            if (!messageText || isTyping) return;

            // 1. Add User Message
            chatContainer.insertAdjacentHTML('beforeend', createMessageHTML(messageText, 'user'));
            userInput.value = '';
            scrollToBottom();
            isTyping = true;

            // 2. Add Typing Indicator
            chatContainer.insertAdjacentHTML('beforeend', createTypingIndicatorHTML());
            lucide.createIcons();
            scrollToBottom();

            // 3. Simulate Network Delay
            const delay = Math.random() * 1000 + 1000; // 1-2 seconds
            const responseText = getBotResponse(messageText);

            setTimeout(() => {
                // Remove typing indicator
                const typingEl = document.getElementById('typing-indicator');
                if(typingEl) typingEl.remove();

                // Add Bot Message
                chatContainer.insertAdjacentHTML('beforeend', createMessageHTML(responseText, 'bot'));
                lucide.createIcons();
                scrollToBottom();
                isTyping = false;
            }, delay);
        }

        // Event Listeners
        sendBtn.addEventListener('click', () => handleMessageSubmit());
        
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleMessageSubmit();
        });

        // Exposed function for HTML onclick attributes
        window.handleQuickAction = function(text) {
            handleMessageSubmit(text);
        };
    
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
      

<aside className="w-64 bg-white border-r border-zinc-200 flex-col hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-semibold tracking-tighter">S</span>
</div>
<span className="text-zinc-900 font-medium tracking-tight text-sm">SIDDHII.</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Menu</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-900 bg-zinc-50 rounded-md border border-zinc-200/50 shadow-sm" href="#">
<i className="w-4 h-4 text-indigo-600" data-lucide="message-square"></i>
<span className="font-medium">Inquiry Bot</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Courses</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Faculty</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Batches</span>
</a>
<div className="mt-8 px-3 mb-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">History</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors group" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="truncate">CMA Foundation Fee...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors group" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-400"></span>
<span className="truncate">Admission Process</span>
</a>
</nav>

<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">CMA Aspirant</p>
</div>
<i className="w-4 h-4 text-zinc-400" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white relative shadow-xl z-10">

<header className="h-16 border-b border-zinc-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
<div className="flex items-center gap-3">
<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div>
<h1 className="text-base font-medium text-zinc-900 tracking-tight flex items-center gap-2">
                        Siddhii Assistant
                        <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-medium border border-indigo-100">BETA</span>
</h1>
<p className="text-xs text-zinc-500 hidden sm:block">CMA Education Automation</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Online
                </div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-zinc-50/50 scroll-smooth" id="chat-container">

<div className="flex justify-center">
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-wider">Today</span>
</div>

<div className="flex gap-4 max-w-2xl">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="space-y-2">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-zinc-900">Siddhii AI</span>
<span className="text-[10px] text-zinc-400">10:23 AM</span>
</div>
<div className="bg-white border border-zinc-200 p-4 rounded-xl rounded-tl-none shadow-sm text-sm leading-relaxed text-zinc-700">
<p>Hello! Welcome to <span className="font-medium text-zinc-900">Siddhii Professionals</span>. We are dedicated to shaping your professional career in CMA (Cost &amp; Management Accountant).</p>
<p className="mt-2">How can I assist you with your inquiries today?</p>
</div>

<div className="flex flex-wrap gap-2 pt-1">
<button className="px-3 py-1.5 bg-white border border-zinc-200 text-xs text-zinc-600 font-medium rounded-lg shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all hover:bg-indigo-50/30" onclick="handleQuickAction('CMA Course Details')">
                            CMA Course Details
                        </button>
<button className="px-3 py-1.5 bg-white border border-zinc-200 text-xs text-zinc-600 font-medium rounded-lg shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all hover:bg-indigo-50/30" onclick="handleQuickAction('Fee Structure')">
                            Fee Structure
                        </button>
<button className="px-3 py-1.5 bg-white border border-zinc-200 text-xs text-zinc-600 font-medium rounded-lg shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all hover:bg-indigo-50/30" onclick="handleQuickAction('Upcoming Batches')">
                            Upcoming Batches
                        </button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-zinc-100">
<div className="max-w-4xl mx-auto relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<input className="w-full pl-10 pr-24 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm" id="user-input" placeholder="Ask about admissions, fees, or courses..." type="text"/>
<div className="absolute right-2 top-2 flex items-center gap-1">
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="mic"></i>
</button>
<button className="p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors" id="send-btn">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-zinc-400">AI can make mistakes. Please verify important details with the institute directly.</p>
</div>
</div>
</main>

<aside className="w-80 bg-zinc-50 border-l border-zinc-200 hidden lg:flex flex-col overflow-y-auto">
<div className="p-6">
<h2 className="text-sm font-medium text-zinc-900 tracking-tight mb-4">Institute Details</h2>

<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm mb-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center border border-zinc-200">
<i className="w-5 h-5 text-zinc-600" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Siddhii Prof.</h3>
<p className="text-xs text-zinc-500">Education Excellence</p>
</div>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-start gap-3">
<i className="w-3.5 h-3.5 mt-0.5 text-zinc-400" data-lucide="map-pin"></i>
<p className="text-xs text-zinc-600 leading-relaxed">
                            3rd Floor, Example Plaza,<br/>Main Road, City Center,<br/>India - 400001
                        </p>
</div>
<div className="flex items-center gap-3">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="phone"></i>
<p className="text-xs text-zinc-600">+91 98765 43210</p>
</div>
<div className="flex items-center gap-3">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="globe"></i>
<a className="text-xs text-indigo-600 hover:underline" href="#">siddhiprofessionals.co.in</a>
</div>
</div>
</div>

<h2 className="text-sm font-medium text-zinc-900 tracking-tight mb-4">Preferences</h2>
<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">

<div className="p-4 border-b border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-700">Email Updates</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>

<div className="p-4">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-zinc-700">Notif. Volume</span>
<span className="text-xs text-zinc-400">40%</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5">
<div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>

<h2 className="text-sm font-medium text-zinc-900 tracking-tight mb-4 mt-6">Trending Courses</h2>
<div className="space-y-3">
<div className="group flex items-center gap-3 p-3 bg-white border border-zinc-200 rounded-lg hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-[10px] font-semibold border border-orange-100 tracking-tight">CMA</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-900">Cost &amp; Mgmt Acc.</div>
<div className="text-[10px] text-zinc-500">Foundation &amp; Inter</div>
</div>
<i className="w-4 h-4 text-zinc-300 group-hover:text-indigo-400" data-lucide="chevron-right"></i>
</div>
<div className="group flex items-center gap-3 p-3 bg-white border border-zinc-200 rounded-lg hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-semibold border border-blue-100">CS</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-900">Company Secretary</div>
<div className="text-[10px] text-zinc-500">CSEET &amp; Executive</div>
</div>
<i className="w-4 h-4 text-zinc-300 group-hover:text-indigo-400" data-lucide="chevron-right"></i>
</div>
</div>

<div className="mt-auto pt-6 pb-4">
<button className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="phone-call"></i>
                    Request Callback
                </button>
</div>
</div>
</aside>


    </>
  );
}
