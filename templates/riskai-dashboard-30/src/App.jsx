import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons for existing UI
        lucide.createIcons();

        // Chat input interaction logic
        const chatInput = document.getElementById('chat-input');

        if(chatInput) {
            const updateChatUI = () => {
                // Reset height to compute actual scroll height
                chatInput.style.height = 'auto';
                const newHeight = Math.min(chatInput.scrollHeight, 240);
                chatInput.style.height = newHeight + 'px';
            };
            
            chatInput.addEventListener('input', updateChatUI);
            window.addEventListener('resize', updateChatUI);
            
            // Run initially to ensure correct starting layout
            setTimeout(updateChatUI, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col flex-shrink-0 transition-all duration-300 z-30 hidden md:flex">

<div className="h-16 flex items-center px-6 gap-3 flex-shrink-0">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-indigo-200">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl tracking-tight text-gray-900">RiskAI</span>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-8">

<div>
<h3 className="px-2 text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Tools</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-sm font-medium">New Chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Subscription</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group justify-between" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="bell" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Updates</span>
</div>
<span className="bg-indigo-100 text-indigo-600 text-xs font-medium px-1.5 py-0.5 rounded-md">New</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>
</div>

<div>
<h3 className="px-2 text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Active Projects</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg transition-colors group justify-between" href="#">
<div className="flex items-center gap-3 truncate">
<i className="w-5 h-5 flex-shrink-0" data-lucide="folder" strokeWidth="1.5"></i>
<span className="text-sm font-medium truncate">Mission District Analysis</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group justify-between" href="#">
<div className="flex items-center gap-3 truncate">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" data-lucide="folder" strokeWidth="1.5"></i>
<span className="text-sm font-medium truncate">Coastal Zone A</span>
</div>
<i className="w-4 h-4 text-amber-400 flex-shrink-0 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group justify-between" href="#">
<div className="flex items-center gap-3 truncate">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" data-lucide="folder" strokeWidth="1.5"></i>
<span className="text-sm font-medium truncate">Seismic Retrofit B4</span>
</div>
</a>
</nav>
</div>
</div>

<div className="p-4 border-t border-gray-100 flex-shrink-0">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 overflow-hidden border border-gray-200 flex-shrink-0">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col min-w-0">
<span className="text-sm font-medium text-gray-900 truncate">Felix Anderson</span>
<span className="text-xs text-gray-400 truncate">felix.a@riskai.com</span>
</div>
<div className="ml-auto">
<span className="px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Pro</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white relative">

<header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-gray-50 flex-shrink-0 absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm">
<div className="flex items-center gap-3">
<button className="md:hidden text-gray-400 hover:text-gray-900 mr-2 flex items-center">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hidden sm:flex">
<i className="w-4 h-4" data-lucide="folder" strokeWidth="1.5"></i>
</div>
<h1 className="text-lg font-medium text-gray-900 tracking-tight">Mission District Analysis</h1>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-xs font-medium uppercase tracking-wider hidden sm:inline-block">Active</span>
</div>
<div className="flex items-center gap-3">
<button className="text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 gap-2">
<i className="w-4 h-4" data-lucide="share-2" strokeWidth="1.5"></i>
<span className="hidden sm:inline-block">Export Project</span>
</button>
<button className="text-gray-400 hover:text-gray-600 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col pt-24 pb-48 px-6 md:px-8">
<div className="w-full max-w-4xl mx-auto flex flex-col h-full">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-medium text-gray-900 tracking-tight mb-1">Conversations</h2>
<p className="text-base text-gray-500">3 previous chats found in this project.</p>
</div>

<div className="flex items-center gap-3">
<div className="relative flex items-center flex-1 sm:flex-initial">
<i className="absolute left-3 w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all w-full sm:w-48 shadow-sm" placeholder="Search..." type="text"/>
</div>
<button className="flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-sm text-gray-700 transition-colors shadow-sm whitespace-nowrap">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down-up" strokeWidth="1.5"></i>
<span className="font-normal">Newest first</span>
</div>
<i className="w-4 h-4 text-gray-400 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="space-y-4 flex-1">
<a className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group" href="#">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 border border-indigo-100">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1">
<h3 className="text-base font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors tracking-tight">Liquefaction risk assessment</h3>
<span className="text-xs text-gray-400 whitespace-nowrap">Today, 10:42 AM</span>
</div>
<p className="text-base text-gray-600 line-clamp-2 leading-relaxed mb-4">Analyzed the latest USGS data for the target zones. High risk detected in Zone A, specifically near the historical creek beds. Recommended reviewing the deep foundation plans before proceeding with the permit application.</p>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-200">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="paperclip" strokeWidth="1.5"></i>
                                        2 Attachments
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-200">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                                        USGS Data
                                    </span>
</div>
</div>
</div>
</a>
<a className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group" href="#">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 flex-shrink-0 border border-gray-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1">
<h3 className="text-base font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors tracking-tight">Historical flood records review</h3>
<span className="text-xs text-gray-400 whitespace-nowrap">Yesterday, 3:15 PM</span>
</div>
<p className="text-base text-gray-600 line-clamp-2 leading-relaxed mb-4">Compared the 1998 and 2005 flood maps. The boundaries have shifted by 15% in the northern quadrant due to the new drainage system. Overall structural impact is negligible for the current site plan.</p>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200/60">
<i className="w-3.5 h-3.5 text-amber-500" data-lucide="flag" strokeWidth="1.5"></i>
                                        Review Required
                                    </span>
</div>
</div>
</div>
</a>
<a className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group" href="#">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 flex-shrink-0 border border-gray-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1">
<h3 className="text-base font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors tracking-tight">Retrofit compliance check</h3>
<span className="text-xs text-gray-400 whitespace-nowrap">Oct 12, 2023</span>
</div>
<p className="text-base text-gray-600 line-clamp-2 leading-relaxed">Checked the local database for unreinforced masonry buildings in the immediate vicinity. Found 3 structures that require mandatory retrofitting within the next 5 years. Property values might be temporarily impacted.</p>
</div>
</div>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/0 pt-24 pb-8 px-6 md:px-8 z-20 pointer-events-none">
<div className="max-w-3xl mx-auto relative flex flex-col items-center pointer-events-auto">

<div className="mb-3 w-full flex justify-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-full text-sm">
<iconify-icon className="text-gray-400" height="18" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-gray-600">You've reached your usage limit.</span>
<a className="font-medium text-indigo-600 hover:text-indigo-700 ml-1" href="#">Upgrade Plan</a>
</div>
</div>

<div className="w-full bg-gray-50 border border-gray-200 rounded-3xl shadow-sm flex flex-col p-2 transition-all duration-300" id="chat-container">

<textarea className="w-full bg-transparent border-none outline-none resize-none px-3 pt-3 pb-3 text-gray-500 text-base placeholder:text-gray-400 min-h-[52px] max-h-[240px] overflow-y-auto leading-relaxed cursor-not-allowed" disabled="" id="chat-input" placeholder="Message RiskAI..." rows="1"></textarea>

<div className="flex items-center justify-between w-full px-1 pb-1 pt-1 opacity-50 pointer-events-none">

<button className="w-9 h-9 flex items-center justify-center text-gray-500 rounded-full">
<i className="w-[22px] h-[22px]" data-lucide="plus" strokeWidth="1.5"></i>
</button>

<div className="flex items-center gap-1.5 pr-1">
<button className="w-9 h-9 flex items-center justify-center text-gray-700 rounded-full">
<i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 flex items-center justify-center bg-gray-300 text-white rounded-full">
<i className="w-5 h-5 block" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
