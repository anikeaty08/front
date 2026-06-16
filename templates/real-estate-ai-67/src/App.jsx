import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Initialize Icons ---
        lucide.createIcons();

        // --- 2. Chat Functionality ---
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const draftMessage = document.getElementById('draft-message');
        const draftText = document.getElementById('draft-text');
        const typingIndicator = document.getElementById('typing-indicator');

        // Allow 'Enter' key to send
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleSend();
            }
        });

        function handleSend() {
            const text = chatInput.value.trim();
            if (!text) return;

            // 1. Add User Message
            appendMessage(text, 'user');
            chatInput.value = '';
            
            // Scroll to bottom
            scrollToBottom();

            // 2. Show Typing Indicator after small delay
            setTimeout(() => {
                typingIndicator.classList.remove('hidden');
                typingIndicator.classList.add('flex');
                scrollToBottom();
            }, 400);

            // 3. Simulate AI Response after 1.5s
            setTimeout(() => {
                typingIndicator.classList.add('hidden');
                typingIndicator.classList.remove('flex');
                
                // Simple logic for response
                let response = "I've updated the system with those details. Is there anything else you need help with regarding the property at 128 Oak Street?";
                if(text.toLowerCase().includes('price') || text.toLowerCase().includes('offer')) {
                    response = "I can analyze recent comps for you. Currently, the average closing price in this neighborhood is 2% below list. Shall I draft a counter-offer strategy?";
                } else if (text.toLowerCase().includes('time') || text.toLowerCase().includes('schedule')) {
                    response = "I'll check the calendar. The next available slot is Tuesday at 10 AM. Should I lock that in for you?";
                }

                appendMessage(response, 'ai');
                scrollToBottom();
            }, 2000);
        }

        function appendMessage(text, type) {
            const container = document.createElement('div');
            // Use existing classes for animation
            container.className = type === 'user' ? 'flex gap-4 message-anim' : 'flex flex-row-reverse gap-4 message-anim';
            
            const avatarHtml = type === 'user' 
                ? `<img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" class="h-8 w-8 rounded-full object-cover mt-1 ring-2 ring-white shadow-sm">`
                : `<div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-1 shadow-sm border border-indigo-200"><i data-lucide="bot" class="h-4 w-4"></i></div>`;

            const bubbleClass = type === 'user'
                ? "rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-5 py-3 shadow-sm text-sm text-slate-700 leading-relaxed"
                : "rounded-2xl rounded-tr-sm bg-indigo-600 px-5 py-3 shadow-md shadow-indigo-100 text-sm text-white leading-relaxed";

            const contentHtml = `
                <div class="max-w-[85%]">
                    <div class="${bubbleClass}">
                        ${text}
                    </div>
                    ${type === 'ai' ? `<div class="mt-1 flex items-center justify-end gap-1.5 text-[10px] text-slate-400"><span>Just now</span></div>` : ''}
                </div>
            `;

            container.innerHTML = avatarHtml + contentHtml;
            
            // Insert before typing indicator
            const newMessagesContainer = document.getElementById('new-messages');
            newMessagesContainer.appendChild(container);
            
            // Re-init icons for the new AI bot icon
            lucide.createIcons();
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // --- 3. Draft Approval Logic ---
        function approveDraft() {
            // Get text from draft
            const text = draftText.innerText;
            
            // Hide Draft UI with animation
            draftMessage.style.opacity = '0';
            draftMessage.style.transform = 'translateY(-10px)';
            draftMessage.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                draftMessage.remove(); // Remove from DOM
                
                // Add as an actual AI message
                appendMessage(text, 'ai');
                scrollToBottom();
            }, 300);
        }

        // --- 4. Sidebar Navigation Logic ---
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                // Reset all
                navItems.forEach(nav => {
                    nav.classList.remove('bg-indigo-50/50', 'text-indigo-700', 'border-indigo-100/50');
                    nav.classList.add('text-slate-500', 'border-transparent');
                    const icon = nav.querySelector('i');
                    if(icon) icon.classList.remove('text-indigo-600');
                });

                // Set Active
                item.classList.remove('text-slate-500', 'border-transparent');
                item.classList.add('bg-indigo-50/50', 'text-indigo-700', 'border-indigo-100/50');
                const activeIcon = item.querySelector('i');
                if(activeIcon) activeIcon.classList.add('text-indigo-600');
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex z-20">
<div className="flex h-16 items-center border-b border-gray-100 px-6">
<div className="flex items-center gap-2 text-indigo-600">
<i className="h-6 w-6 fill-indigo-600/10" data-lucide="hexagon"></i>
<span className="text-lg font-semibold tracking-tighter text-slate-900">ESTATE<span className="text-indigo-600">AI</span></span>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6" id="sidebar-nav">

<div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Sales Console</div>
<a className="nav-item group flex items-center gap-3 rounded-lg bg-indigo-50/50 px-3 py-2 text-sm font-medium text-indigo-700 transition-all border border-indigo-100/50" href="#">
<i className="h-4 w-4 text-indigo-600" data-lucide="layout-dashboard"></i>
                Dashboard
            </a>
<a className="nav-item group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-gray-50 hover:text-slate-900 border border-transparent" href="#">
<i className="h-4 w-4 group-hover:text-slate-900" data-lucide="users"></i>
                Leads Pipeline
                <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 group-hover:bg-slate-200">12</span>
</a>
<a className="nav-item group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-gray-50 hover:text-slate-900 border border-transparent" href="#">
<i className="h-4 w-4 group-hover:text-slate-900" data-lucide="building-2"></i>
                Properties
            </a>
<a className="nav-item group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-gray-50 hover:text-slate-900 border border-transparent" href="#">
<i className="h-4 w-4 group-hover:text-slate-900" data-lucide="bot"></i>
                AI Agents
            </a>

<div className="mt-8 px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Automation</div>
<a className="nav-item group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-gray-50 hover:text-slate-900 border border-transparent" href="#">
<i className="h-4 w-4 group-hover:text-slate-900" data-lucide="workflow"></i>
                Workflows
            </a>
<a className="nav-item group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-gray-50 hover:text-slate-900 border border-transparent" href="#">
<i className="h-4 w-4 group-hover:text-slate-900" data-lucide="calendar-check"></i>
                Scheduler
            </a>
</nav>
<div className="border-t border-gray-100 p-4">
<button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors">
<img alt="User" className="h-8 w-8 rounded-full bg-gray-200 object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 overflow-hidden">
<p className="truncate text-slate-900">Alex Morgan</p>
<p className="truncate text-xs text-slate-400">Top Agent</p>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="chevrons-up-down"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50 relative">

<header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md px-6">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<nav className="hidden flex-row items-center gap-2 text-sm font-medium text-slate-500 md:flex">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Dashboard</span>
<i className="h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
<span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md text-xs">AI Live Console</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block group">
<i className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search"></i>
<input className="h-9 w-64 rounded-md border border-gray-200 bg-slate-50 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 text-slate-700" placeholder="Search leads or properties..." type="text"/>
</div>
<div className="h-6 w-px bg-gray-200"></div>
<button className="relative rounded-full bg-white p-2 text-slate-500 hover:bg-slate-100 ring-1 ring-gray-200 transition-all active:scale-95">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
<div className="mx-auto max-w-7xl">

<div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] transition-all hover:border-indigo-200 hover:shadow-md">
<div className="flex items-center justify-between">
<p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Active Leads</p>
<span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
<i className="mr-1 h-3 w-3" data-lucide="trending-up"></i> +12%
                            </span>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">42</p>
<p className="mt-1 text-xs text-slate-400">18 high intent</p>
</div>
<div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] transition-all hover:border-indigo-200 hover:shadow-md">
<div className="flex items-center justify-between">
<p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Scheduled</p>
<i className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-colors" data-lucide="calendar"></i>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">8</p>
<p className="mt-1 text-xs text-slate-400">Viewings this week</p>
</div>
<div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] transition-all hover:border-indigo-200 hover:shadow-md">
<div className="flex items-center justify-between">
<p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Response Rate</p>
<i className="h-4 w-4 text-slate-400 group-hover:text-amber-500 transition-colors" data-lucide="zap"></i>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">94%</p>
<p className="mt-1 text-xs text-slate-400">Avg. 2m response time</p>
</div>
<div className="group rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-5 shadow-[0_2px_10px_-4px_rgba(79,70,229,0.15)]">
<div className="flex items-center justify-between">
<p className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">Pipeline Value</p>
<i className="h-4 w-4 text-indigo-600" data-lucide="dollar-sign"></i>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-indigo-900">$4.2M</p>
<p className="mt-1 text-xs text-indigo-400">Projected commission</p>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3 lg:h-[600px]">

<div className="lg:col-span-2 flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden h-full">

<div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4 bg-white z-10">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-2.5 w-2.5 absolute -right-0.5 -bottom-0.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-200">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-900">Live AI Negotiation</h3>
<span className="rounded bg-indigo-50 px-1.5 py-0.5 text-[10px] font-medium text-indigo-700">Beta</span>
</div>
<p className="text-xs text-slate-500">Lead: Sarah Jenkins • 128 Oak St.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Auto-Pilot On</span>
</div>
<button className="rounded-md p-1.5 text-slate-400 hover:bg-gray-50 hover:text-slate-600 transition-colors">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth" id="chat-messages">

<div className="flex items-center justify-center">
<span className="rounded-full bg-gray-200/50 px-3 py-1 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Today, 10:23 AM</span>
</div>

<div className="flex gap-4 message-anim">
<img className="h-8 w-8 rounded-full object-cover mt-1 opacity-90 ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=fake1"/>
<div className="max-w-[85%]">
<div className="rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-5 py-3 shadow-sm text-sm text-slate-700 leading-relaxed">
                                        Hi, I saw the listing for 128 Oak Street. Is the price negotiable? I'm looking to move in next month.
                                    </div>
</div>
</div>

<div className="flex flex-row-reverse gap-4 message-anim" style={{animationDelay: '0.1s'}}>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-1 shadow-sm border border-indigo-200">
<i className="h-4 w-4" data-lucide="bot"></i>
</div>
<div className="max-w-[85%]">
<div className="rounded-2xl rounded-tr-sm bg-indigo-600 px-5 py-3 shadow-md shadow-indigo-100 text-sm text-white leading-relaxed">
                                        Hello Sarah! Thanks for your interest in 128 Oak Street. It's a fantastic property ready for immediate move-in. While there is significant interest, the seller is open to reasonable offers for a quick close. Would you like to schedule a viewing for tomorrow afternoon to discuss details?
                                    </div>
<div className="mt-1 flex items-center justify-end gap-1.5 text-[10px] text-slate-400">
<span>Sent automatically</span>
<i className="h-3 w-3" data-lucide="check-check"></i>
</div>
</div>
</div>

<div className="flex gap-4 message-anim" style={{animationDelay: '0.2s'}}>
<img className="h-8 w-8 rounded-full object-cover mt-1 opacity-90 ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=fake1"/>
<div className="max-w-[85%]">
<div className="rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-5 py-3 shadow-sm text-sm text-slate-700 leading-relaxed">
                                        That sounds promising. Yes, I'm free tomorrow after 4 PM.
                                    </div>
</div>
</div>

<div className="flex flex-row-reverse gap-4 message-anim" id="draft-message" style={{animationDelay: '0.3s'}}>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-400 mt-1 border border-indigo-100/50">
<i className="h-4 w-4" data-lucide="bot"></i>
</div>
<div className="max-w-[85%] w-full">
<div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50/40 px-5 py-4 text-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-300"></div>
<div className="flex justify-between items-start mb-2">
<p className="font-semibold text-indigo-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
<i className="h-3 w-3" data-lucide="sparkles"></i> AI Suggestion
                                            </p>
<span className="text-[10px] text-indigo-400">Confidence: 98%</span>
</div>
<p className="text-slate-700 mb-4 leading-relaxed" id="draft-text">Great! I've tentatively scheduled you for 4:30 PM tomorrow at 128 Oak Street. I'll send you a calendar invite shortly. Is there anything specific you'd like to focus on during the tour?</p>
<div className="flex gap-2">
<button className="flex items-center gap-1.5 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm hover:shadow active:scale-95" onclick="approveDraft()">
<i className="h-3 w-3" data-lucide="send"></i> Approve &amp; Send
                                            </button>
<button className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-gray-50 transition-colors">
<i className="h-3 w-3" data-lucide="edit-3"></i> Edit
                                            </button>
</div>
</div>
</div>
</div>

<div id="new-messages"></div>

<div className="hidden flex-row-reverse gap-4" id="typing-indicator">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-1">
<i className="h-4 w-4" data-lucide="bot"></i>
</div>
<div className="rounded-2xl rounded-tr-sm bg-gray-100 px-4 py-3">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 p-4 bg-white z-10">
<div className="relative flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
<button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-50"><i className="h-4 w-4" data-lucide="paperclip"></i></button>
<input className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400 text-slate-700" id="chat-input" placeholder="Type a message or command..." type="text"/>
<button className="rounded-lg bg-indigo-50 p-2 text-indigo-600 hover:bg-indigo-100 transition-colors active:scale-95" onclick="handleSend()"><i className="h-4 w-4" data-lucide="send-horizontal"></i></button>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col h-full overflow-y-auto pr-1">

<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Lead Intelligence</h4>
<div className="flex items-center gap-5">
<div className="relative h-16 w-16 shrink-0">
<svg className="h-full w-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-indigo-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="85, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-bold text-slate-900">85</span>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-slate-500 font-medium">Budget Match</span>
<span className="font-semibold text-emerald-600">Perfect</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-emerald-500 w-[95%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-slate-500 font-medium">Urgency</span>
<span className="font-semibold text-indigo-600">High</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-indigo-500 w-[75%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden group cursor-pointer hover:border-indigo-300 transition-colors">
<div className="relative h-32 bg-slate-200 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
<img alt="House" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-2a4d04fb7529?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 text-white z-20">
<p className="font-medium text-sm">128 Oak Street</p>
<p className="text-[10px] uppercase tracking-wide opacity-90">$850,000 • 4bd 3ba</p>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Status</span>
<span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Active Listing</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Commission (2.5%)</span>
<span className="font-semibold text-slate-900">$21,250</span>
</div>
<button className="w-full mt-2 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="file-text"></i>
                                    View Contract
                                </button>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Automation Settings</h4>
<div className="space-y-5">
<div className="flex items-center justify-between group">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Auto-Schedule</span>
<span className="text-[10px] text-slate-400">Allow AI to book slots</span>
</div>
<div className="relative inline-block w-9 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 ease-in-out shadow-sm checked:translate-x-full checked:border-indigo-600" id="toggle1" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between group">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Smart Follow-up</span>
<span className="text-[10px] text-slate-400">Send nudge after 24h</span>
</div>
<div className="relative inline-block w-9 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 ease-in-out shadow-sm checked:translate-x-full checked:border-indigo-600" id="toggle2" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle2"></label>
</input></div>
</div>
<div className="pt-2 border-t border-gray-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-700">Tone</span>
<span className="text-[10px] text-slate-400">Professional</span>
</div>
<div className="flex gap-1 h-1.5">
<div className="w-1/3 rounded-l-full bg-indigo-600"></div>
<div className="w-1/3 bg-indigo-200"></div>
<div className="w-1/3 rounded-r-full bg-slate-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 pb-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Recent Automations</h3>
<button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-md transition-colors">View All History</button>
</div>
<div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ring-1 ring-black/5">
<table className="min-w-full divide-y divide-gray-100">
<thead className="bg-gray-50/50">
<tr>
<th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Event</th>
<th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Lead</th>
<th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Status</th>
<th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">
<tr className="group hover:bg-slate-50/50 transition-colors cursor-default">
<td className="whitespace-nowrap px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Viewing Scheduled</div>
<div className="text-xs text-slate-500">128 Oak Street</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                        Sarah Jenkins
                                    </td>
<td className="whitespace-nowrap px-6 py-4">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Confirmed</span>
</td>
<td className="whitespace-nowrap px-6 py-4 text-right text-xs text-slate-400 font-medium">
                                        2 mins ago
                                    </td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors cursor-default">
<td className="whitespace-nowrap px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-100 transition-colors">
<i className="h-4 w-4" data-lucide="mail"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Follow-up Email</div>
<div className="text-xs text-slate-500">Open House Visitors</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                        Multiple (14)
                                    </td>
<td className="whitespace-nowrap px-6 py-4">
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Sent</span>
</td>
<td className="whitespace-nowrap px-6 py-4 text-right text-xs text-slate-400 font-medium">
                                        1 hour ago
                                    </td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors cursor-default">
<td className="whitespace-nowrap px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100 group-hover:bg-amber-100 transition-colors">
<i className="h-4 w-4" data-lucide="alert-circle"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Missing Documents</div>
<div className="text-xs text-slate-500">Contract #4402</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                        Michael Chen
                                    </td>
<td className="whitespace-nowrap px-6 py-4">
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Pending Action</span>
</td>
<td className="whitespace-nowrap px-6 py-4 text-right text-xs text-slate-400 font-medium">
                                        3 hours ago
                                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
