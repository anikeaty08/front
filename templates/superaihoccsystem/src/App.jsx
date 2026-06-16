import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icon Init
        lucide.createIcons();

        // State
        let isOpen = true;
        
        // Elements
        const widgetWindow = document.getElementById('widget-window');
        const iconOpen = document.getElementById('icon-open');
        const iconClose = document.getElementById('icon-close');
        
        // Views
        const views = {
            home: document.getElementById('view-home'),
            chat: document.getElementById('view-chat'),
            docs: document.getElementById('view-docs'),
            activity: document.getElementById('view-activity')
        };
        
        // Header Elements
        const headerLogo = document.getElementById('header-logo');
        const headerBack = document.getElementById('header-back');
        const headerTitle = document.getElementById('header-title');

        // Toggle Widget Open/Close
        function toggleWidget() {
            isOpen = !isOpen;
            if (isOpen) {
                // Show
                widgetWindow.classList.remove('opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none');
                widgetWindow.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                // Icon animation
                iconOpen.classList.add('opacity-0', 'rotate-90', 'scale-50');
                iconOpen.classList.remove('opacity-100', 'rotate-0', 'scale-100');
                iconClose.classList.remove('opacity-0', '-rotate-90', 'scale-50');
                iconClose.classList.add('opacity-100', 'rotate-0', 'scale-100');
            } else {
                // Hide
                widgetWindow.classList.add('opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none');
                widgetWindow.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
                // Icon animation
                iconOpen.classList.remove('opacity-0', 'rotate-90', 'scale-50');
                iconOpen.classList.add('opacity-100', 'rotate-0', 'scale-100');
                iconClose.classList.add('opacity-0', '-rotate-90', 'scale-50');
                iconClose.classList.remove('opacity-100', 'rotate-0', 'scale-100');
            }
        }

        // Navigation Logic
        function navigate(viewName) {
            // Hide all
            Object.values(views).forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in'); // Reset animation
            });
            
            // Show target
            const target = views[viewName];
            target.classList.remove('hidden');
            target.classList.add('fade-in');

            // Header Logic
            if (viewName === 'home') {
                headerLogo.classList.remove('hidden');
                headerBack.classList.add('hidden');
                headerTitle.innerText = 'Gyde Assistant';
            } else {
                headerLogo.classList.add('hidden');
                headerBack.classList.remove('hidden');
                
                if (viewName === 'chat') headerTitle.innerText = 'AI Chat';
                if (viewName === 'docs') headerTitle.innerText = 'Documentation';
                if (viewName === 'activity') headerTitle.innerText = 'Recent Activity';
            }
        }

        // Chat Logic
        function handleChatSubmit(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const msg = input.value.trim();
            if (!msg) return;

            const chatContainer = document.getElementById('chat-messages');

            // Append User Message
            const userHTML = `
                <div class="flex items-end justify-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div class="bg-[#1a1f2c] text-white p-3.5 px-4 rounded-2xl rounded-tr-sm msg-user shadow-md max-w-[85%]">
                        <p class="text-[14px] leading-normal">${msg}</p>
                    </div>
                </div>
            `;
            chatContainer.insertAdjacentHTML('beforeend', userHTML);
            input.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Simulate Bot Typing
            const typingHTML = `
                <div id="typing-indicator" class="flex items-start gap-3 mt-4 animate-in fade-in slide-in-from-bottom-2">
                    <div class="w-8 h-8 rounded-full bg-[#1a1f2c] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                         <i data-lucide="layers" class="w-4 h-4"></i>
                    </div>
                    <div class="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm msg-bot shadow-sm">
                        <div class="flex space-x-1 h-4 items-center">
                            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                        </div>
                    </div>
                </div>
            `;
            chatContainer.insertAdjacentHTML('beforeend', typingHTML);
            lucide.createIcons(); // Re-init icons for new elements
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Remove typing and show response after delay
            setTimeout(() => {
                const typingEl = document.getElementById('typing-indicator');
                if(typingEl) typingEl.remove();

                const responses = [
                    "I can help with that property task. Checking the database...",
                    "To update that, please navigate to the Stay Management dashboard.",
                    "I found a relevant article about that in our documentation.",
                    "Room inventory has been updated accordingly."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                const botHTML = `
                    <div class="flex items-start gap-3 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div class="w-8 h-8 rounded-full bg-[#1a1f2c] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                             <i data-lucide="layers" class="w-4 h-4"></i>
                        </div>
                        <div class="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm msg-bot shadow-sm max-w-[85%]">
                            <p class="text-[14px] text-gray-800 leading-relaxed">${randomResponse}</p>
                        </div>
                    </div>
                `;
                chatContainer.insertAdjacentHTML('beforeend', botHTML);
                lucide.createIcons(); // Re-init icons
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="flex h-full w-full opacity-40 blur-[2px] pointer-events-none select-none grayscale-[20%]">
<div className="w-64 bg-white border-r border-gray-200 flex flex-col py-6 px-4 space-y-6">
<div className="flex items-center space-x-3 px-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center"><i className="text-white w-5 h-5" data-lucide="box"></i></div>
<span className="font-semibold text-lg tracking-tight">GydeXP</span>
</div>
<nav className="space-y-1">
<div className="flex items-center space-x-3 bg-gray-100 text-gray-900 px-3 py-2.5 rounded-lg"><i className="w-5 h-5" data-lucide="home"></i><span className="font-medium text-base">Room View</span></div>
<div className="flex items-center space-x-3 text-gray-500 px-3 py-2.5 rounded-lg"><i className="w-5 h-5" data-lucide="users"></i><span className="font-medium text-base">Bookings</span></div>
<div className="flex items-center space-x-3 text-gray-500 px-3 py-2.5 rounded-lg"><i className="w-5 h-5" data-lucide="bed"></i><span className="font-medium text-base">Stay Management</span></div>
</nav>
</div>
<div className="flex-1 flex flex-col bg-gray-50">
<div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
<div className="flex space-x-4"></div>
<div className="flex items-center space-x-6">
<i className="w-5 h-5 text-gray-400" data-lucide="mail"></i>
<div className="flex items-center space-x-3">
<div className="w-9 h-9 bg-purple-600 rounded-full"></div>
</div>
</div>
</div>
<div className="p-8">
<div className="grid grid-cols-4 gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-48"></div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-48"></div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-48"></div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-48"></div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">

<div className="w-[420px] max-w-[90vw] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right transform scale-100 opacity-100" id="widget-window">

<div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white z-10">
<div className="flex items-center space-x-3.5">

<div className="h-9 w-9 rounded-[10px] bg-[#1a1f2c] flex items-center justify-center text-white shadow-sm transition-all duration-200" id="header-logo">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>

<button className="hidden h-9 w-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-200 -ml-2" id="header-back" onclick="navigate('home')">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<span className="font-semibold text-[19px] tracking-tight text-gray-900" id="header-title">Gyde Assistant</span>
</div>
<div className="flex items-center">
<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-400 hover:text-gray-600 ml-1" onclick="toggleWidget()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="relative h-[600px] overflow-hidden bg-white">

<div className="absolute inset-0 flex flex-col overflow-y-auto scrollbar-hide fade-in" id="view-home">

<div className="px-6 mt-4 mb-8">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" data-lucide="search"></i>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 hover:border-gray-200 focus:bg-white rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 transition-all" placeholder="Search PMS guides..." type="text"/>
</div>
</div>

<div className="px-6 mb-10">
<h3 className="text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-widest pl-1">Quick Actions</h3>
<div className="grid grid-cols-2 gap-4">
<button className="flex flex-col justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all text-left group active:bg-gray-50 h-[150px]" onclick="navigate('chat')">
<div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="message-square-plus"></i>
</div>
<div>
<span className="block font-semibold text-[15px] text-gray-900">New Chat</span>
<span className="block text-[13px] text-gray-500 mt-1">Ask AI anything</span>
</div>
</button>
<button className="flex flex-col justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all text-left group active:bg-gray-50 h-[150px]" onclick="navigate('docs')">
<div className="bg-purple-50 text-purple-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="book"></i>
</div>
<div>
<span className="block font-semibold text-[15px] text-gray-900">Documentation</span>
<span className="block text-[13px] text-gray-500 mt-1">Browse guides</span>
</div>
</button>
</div>
</div>

<div className="px-6 pb-28">
<div className="flex items-center justify-between mb-4 pl-1 pr-1">
<h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Recent Activity</h3>
<button className="text-[11px] text-gray-500 hover:text-gray-900 font-medium transition-colors" onclick="navigate('activity')">View all</button>
</div>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-3.5 -mx-3.5 rounded-xl hover:bg-gray-50 transition-colors group text-left">
<div className="flex items-center space-x-4 overflow-hidden">
<div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="message-square"></i>
</div>
<div className="flex flex-col min-w-0 gap-0.5">
<span className="text-[14px] font-medium text-gray-900 truncate">Room 101 Check-out Issue</span>
<span className="text-[12px] text-gray-400 truncate">AI Chat • 2m ago</span>
</div>
</div>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" data-lucide="chevron-right"></i>
</button>
<button className="w-full flex items-center justify-between p-3.5 -mx-3.5 rounded-xl hover:bg-gray-50 transition-colors group text-left">
<div className="flex items-center space-x-4 overflow-hidden">
<div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div className="flex flex-col min-w-0 gap-0.5">
<span className="text-[14px] font-medium text-gray-900 truncate">Adding a new floor</span>
<span className="text-[12px] text-gray-400 truncate">Article • Viewed 1h ago</span>
</div>
</div>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent pt-12">
<button className="group w-full flex items-center justify-center space-x-2 bg-[#111827] hover:bg-black text-white py-3.5 px-4 rounded-xl transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] active:scale-[0.99]" onclick="navigate('chat')">
<span className="font-medium text-[15px]">Start new conversation</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="absolute inset-0 flex flex-col hidden bg-gray-50/50" id="view-chat">
<div className="flex-1 overflow-y-auto p-6 space-y-6" id="chat-messages">

<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#1a1f2c] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm msg-bot shadow-sm max-w-[85%]">
<p className="text-[14px] text-gray-800 leading-relaxed">Hi Tom! I can help you with bookings, housekeeping schedules, or inventory. What do you need?</p>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-gray-100">
<form className="relative" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3.5 text-[14px] focus:ring-2 focus:ring-gray-900/5 focus:bg-white focus:border-gray-300 transition-all placeholder-gray-400" id="chat-input" placeholder="Ask anything..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#1a1f2c] text-white rounded-lg hover:bg-black transition-colors shadow-sm" type="submit">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</form>
</div>
</div>

<div className="absolute inset-0 flex flex-col hidden bg-white overflow-y-auto" id="view-docs">
<div className="p-6 space-y-4">
<h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Knowledge Base</h2>

<a className="block p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group" href="#">
<div className="flex items-start justify-between">
<div className="flex space-x-4">
<div className="mt-0.5 text-blue-600 bg-blue-50 p-2 rounded-lg"><i className="w-5 h-5" data-lucide="calendar-check"></i></div>
<div>
<h3 className="font-semibold text-[15px] text-gray-900 group-hover:text-blue-700 transition-colors">Managing Check-in Protocols</h3>
<p className="text-[13px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">Standard operating procedures for VIP and group check-ins during peak season.</p>
</div>
</div>
</div>
<div className="mt-3 pl-[52px] flex items-center space-x-2">
<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Front Desk</span>
<span className="text-[11px] text-gray-400">3 min read</span>
</div>
</a>

<a className="block p-4 border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50/30 transition-all group" href="#">
<div className="flex items-start justify-between">
<div className="flex space-x-4">
<div className="mt-0.5 text-purple-600 bg-purple-50 p-2 rounded-lg"><i className="w-5 h-5" data-lucide="refresh-cw"></i></div>
<div>
<h3 className="font-semibold text-[15px] text-gray-900 group-hover:text-purple-700 transition-colors">OTA Synchronization</h3>
<p className="text-[13px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">Troubleshooting channel manager connectivity with Booking.com and Expedia.</p>
</div>
</div>
</div>
<div className="mt-3 pl-[52px] flex items-center space-x-2">
<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Technical</span>
<span className="text-[11px] text-gray-400">8 min read</span>
</div>
</a>
</div>
</div>

<div className="absolute inset-0 flex flex-col hidden bg-white overflow-y-auto" id="view-activity">
<div className="px-6 py-6">
<h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">All Activity</h2>
<div className="relative border-l border-gray-100 ml-3 space-y-8">

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 shadow-sm"></div>
<div className="flex flex-col">
<span className="text-[14px] font-medium text-gray-900">Room 101 Check-out Issue</span>
<span className="text-[12px] text-gray-500 mt-1">Resolved via Chat • 10 mins ago</span>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-purple-500 shadow-sm"></div>
<div className="flex flex-col">
<span className="text-[14px] font-medium text-gray-900">Read "Adding a new floor"</span>
<span className="text-[12px] text-gray-500 mt-1">Documentation • 1 hour ago</span>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-300 shadow-sm"></div>
<div className="flex flex-col">
<span className="text-[14px] font-medium text-gray-900">System Backup Completed</span>
<span className="text-[12px] text-gray-500 mt-1">System • 4 hours ago</span>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-orange-500 shadow-sm"></div>
<div className="flex flex-col">
<span className="text-[14px] font-medium text-gray-900">Occupancy Alert (90%)</span>
<span className="text-[12px] text-gray-500 mt-1">Notification • Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="h-14 w-14 bg-[#1a1f2c] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 z-50 group relative" id="trigger-btn" onclick="toggleWidget()">

<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 rotate-90 scale-50" id="icon-open">
<i className="w-7 h-7" data-lucide="layers"></i>
<span className="absolute top-0 right-0 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white"></span>
</div>

<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-100 rotate-0 scale-100" id="icon-close">
<i className="w-7 h-7" data-lucide="chevron-down"></i>
</div>
</button>
</div>


    </>
  );
}
