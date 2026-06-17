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



        // --- Navigation Logic ---
        const views = ['view-home', 'view-chat', 'view-contacts', 'view-broadcasts', 'view-more'];
        
        function switchTab(tabId) {
            // Hide all views
            views.forEach(v => {
                document.getElementById(v).classList.add('hidden');
                document.getElementById(v).classList.remove('fade-in');
            });
            // Show target view
            const targetView = document.getElementById('view-' + tabId);
            targetView.classList.remove('hidden');
            // Slight delay for animation to apply after un-hiding
            setTimeout(() => targetView.classList.add('fade-in'), 10);

            // Update Header Title if needed (Home has custom title inside, others might need top bar update)
            const header = document.getElementById('global-header');
            if(tabId === 'home') header.style.display = 'flex';
            // Adjust header visibility based on design needs per tab. For this prototype, keep it global.

            // Update Nav Icons styling
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-emerald-600');
                btn.classList.add('text-slate-400');
                btn.querySelector('.icon-active').classList.add('hidden');
                btn.querySelector('.icon-inactive').classList.remove('hidden');
            });

            // Activate current nav icon
            const activeBtn = event.currentTarget || document.querySelector(`nav button[onclick*="${tabId}"]`);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-400');
                activeBtn.classList.add('text-emerald-600');
                activeBtn.querySelector('.icon-active').classList.remove('hidden');
                activeBtn.querySelector('.icon-inactive').classList.add('hidden');
            }
        }

        // --- Drawer Logic ---
        const backdrop = document.getElementById('drawer-backdrop');
        let activeDrawer = null;

        function openDrawer(drawerId) {
            backdrop.classList.remove('hidden');
            // Trigger reflow
            void backdrop.offsetWidth;
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');

            const drawer = document.getElementById(drawerId);
            drawer.classList.remove('translate-y-full', '-translate-x-full');
            activeDrawer = drawer;
        }

        function openLeftDrawer() {
            backdrop.classList.remove('hidden');
            void backdrop.offsetWidth;
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');

            const drawer = document.getElementById('drawer-left');
            drawer.classList.remove('-translate-x-full');
            activeDrawer = drawer;
        }

        function closeAllDrawers() {
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            setTimeout(() => { backdrop.classList.add('hidden'); }, 300);

            if(activeDrawer) {
                if(activeDrawer.id === 'drawer-left') {
                    activeDrawer.classList.add('-translate-x-full');
                } else {
                    activeDrawer.classList.add('translate-y-full');
                }
                activeDrawer = null;
            }
        }

        // --- Slide Screen Logic (Conversation, Contact Info) ---
        function openSlideScreen(screenId) {
            const screen = document.getElementById(screenId);
            screen.classList.remove('translate-x-full');
        }

        function closeSlideScreen(screenId) {
            const screen = document.getElementById(screenId);
            screen.classList.add('translate-x-full');
        }

        // --- Component Interactions ---
        function toggleSearchBar() {
            const searchBar = document.getElementById('chat-search-bar');
            searchBar.classList.toggle('hidden');
            if(!searchBar.classList.contains('hidden')) {
                searchBar.querySelector('input').focus();
            }
        }

        // Initialize default view
        switchTab('home');

        // Close drawers on backdrop click
        backdrop.addEventListener('click', closeAllDrawers);

    
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
      

<div className="w-full max-w-md h-full bg-white relative overflow-hidden flex flex-col shadow-2xl">



<header className="px-4 pt-12 pb-3 bg-white border-b border-slate-100 flex items-center justify-between z-20 relative" id="global-header">
<button className="flex items-center gap-2 active:opacity-70 transition-opacity" onclick="openLeftDrawer()">
<div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-sm tracking-tight relative">
                    CL
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
</button>
<div className="flex items-center gap-4 text-slate-600">
<button className="active:scale-95 transition-transform"><iconify-icon icon="solar:refresh-linear" width="20"></iconify-icon></button>
<button className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full text-xs font-medium border border-slate-100 active:bg-slate-100" onclick="openDrawer('drawer-devices')">
<iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon> 2/3
                </button>
<button className="relative active:scale-95 transition-transform" onclick="openDrawer('drawer-notifications')">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
</div>
</header>



<main className="flex-1 relative overflow-hidden bg-white pb-16">

<div className="absolute inset-0 overflow-y-auto hide-scrollbar p-4 bg-slate-50/50" id="view-home">
<div className="mb-6">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Overview</h1>
<p className="text-xs text-slate-500 mt-0.5">Today's performance metrics</p>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon></div>
<span className="text-xs text-slate-500 font-medium">Total Convos</span>
<span className="text-2xl font-semibold tracking-tight">1,248</span>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col gap-2 relative overflow-hidden">
<div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-1"><iconify-icon icon="solar:chat-round-unread-linear"></iconify-icon></div>
<span className="text-xs text-slate-500 font-medium">Unread Chats</span>
<span className="text-2xl font-semibold tracking-tight text-rose-500">42</span>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
<span className="text-xs text-slate-500 font-medium">Active Agents</span>
<span className="text-2xl font-semibold tracking-tight">8</span>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-1"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon></div>
<span className="text-xs text-slate-500 font-medium">Contacts Added</span>
<span className="text-2xl font-semibold tracking-tight">156</span>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] mb-4">
<div className="flex justify-between items-center mb-4">
<h2 className="text-sm font-medium text-slate-800">Broadcasts Sent</h2>
<span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">Today</span>
</div>
<div className="flex items-end gap-2 h-24 mt-2">
<div className="w-1/6 bg-slate-100 rounded-t-md h-[40%]"></div>
<div className="w-1/6 bg-slate-100 rounded-t-md h-[60%]"></div>
<div className="w-1/6 bg-slate-100 rounded-t-md h-[30%]"></div>
<div className="w-1/6 bg-slate-100 rounded-t-md h-[80%]"></div>
<div className="w-1/6 bg-emerald-100 rounded-t-md h-[100%]"></div>
<div className="w-1/6 bg-slate-100 rounded-t-md h-[50%]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col hidden bg-white" id="view-chat">

<div className="px-3 pt-2 pb-1 flex items-center gap-2 border-b border-slate-50">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium text-slate-700 active:bg-slate-100 flex-shrink-0" onclick="openDrawer('drawer-phone-filter')">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon> All Phones
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium text-slate-700 active:bg-slate-100 flex-shrink-0" onclick="openDrawer('drawer-inbox-filter')">
                        Inbox <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="flex-1 flex justify-end gap-1">
<button className="w-8 h-8 flex items-center justify-center text-slate-500 rounded-full hover:bg-slate-50 active:bg-slate-100" onclick="toggleSearchBar()"><iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center text-slate-500 rounded-full hover:bg-slate-50 active:bg-slate-100" onclick="openDrawer('drawer-adv-filters')"><iconify-icon icon="solar:tuning-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="hidden px-4 py-2 border-b border-slate-50 bg-slate-50/50" id="chat-search-bar">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Search customer, number, message..." type="text"/>
</div>
</div>

<div className="px-3 py-2 overflow-x-auto hide-scrollbar border-b border-slate-100">
<div className="flex gap-1 p-1 bg-slate-100/80 rounded-xl w-max">
<button className="px-4 py-1.5 text-xs font-medium rounded-lg bg-white shadow-sm text-slate-800">Active</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700">Open</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700">Unassigned</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700">Snoozed</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700">Closed</button>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-20 p-2 space-y-1">

<div className="flex gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group relative" onclick="openSlideScreen('view-conversation')">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center text-slate-600 font-medium tracking-tight">SJ</div>
<div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-sm text-slate-900 truncate">Sarah Jenkins</h4>
<span className="text-xs text-emerald-600 font-medium">10:42 AM</span>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex-1 min-w-0">
<p className="text-xs text-slate-800 font-medium truncate mb-1.5">Yes, I would like to upgrade my plan.</p>
<div className="flex items-center gap-2 text-[0.65rem] text-slate-400">
<div className="flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 415 555 2671</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:user-linear"></iconify-icon> Alex</div>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<button className="text-[0.65rem] px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-0.5" onclick="event.stopPropagation(); openDrawer('drawer-tags')"><iconify-icon icon="solar:tag-linear"></iconify-icon> Tag</button>
</div>
</div>
</div>
</div>

<div className="flex gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group" onclick="openSlideScreen('view-conversation')">
<div className="relative flex-shrink-0">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-sm text-slate-900 truncate">Michael Chen</h4>
<span className="text-xs text-slate-400">Yesterday</span>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex-1 min-w-0">
<p className="text-xs text-slate-500 truncate mb-1.5 flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon> The documents are attached below.</p>
<div className="flex items-center gap-2 text-[0.65rem] text-slate-400">
<div className="flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> +44 7700 900077</div>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<div className="flex gap-1">
<span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">VIP</span>
</div>
<iconify-icon className="text-orange-400 text-xs" icon="solar:flag-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group" onclick="openSlideScreen('view-conversation')">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-medium tracking-tight">TC</div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-sm text-slate-900 truncate">TechCorp Inc.</h4>
<span className="text-xs text-slate-400">Mon</span>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex-1 min-w-0">
<p className="text-xs text-slate-500 truncate mb-1.5 flex items-center gap-1"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> We will review and get back.</p>
<div className="flex items-center gap-2 text-[0.65rem] text-slate-400">
<div className="flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 212 555 8921</div>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<button className="text-[0.65rem] px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-0.5" onclick="event.stopPropagation(); openDrawer('drawer-tags')"><iconify-icon icon="solar:tag-linear"></iconify-icon> Tag</button>
</div>
</div>
</div>
</div>
</div>

<button className="absolute bottom-6 right-4 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(16,185,129,0.3)] flex items-center justify-center active:scale-95 transition-transform z-10" onclick="openDrawer('drawer-new-contact')">
<iconify-icon icon="solar:chat-square-add-linear" width="26"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 overflow-y-auto hide-scrollbar hidden bg-slate-50/50" id="view-contacts">
<div className="sticky top-0 bg-white border-b border-slate-100 px-4 py-3 z-10">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="Search contacts..." type="text"/>
</div>
</div>
<div className="p-4 space-y-2">

<div className="bg-white p-3 rounded-2xl border border-slate-100 flex items-center gap-3 active:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">JD</div>
<div className="flex-1">
<h4 className="font-medium text-sm text-slate-900">John Doe</h4>
<p className="text-xs text-slate-500">+1 234 567 8900</p>
</div>
<div className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[0.65rem] font-medium">Sales</div>
</div>
<div className="bg-white p-3 rounded-2xl border border-slate-100 flex items-center gap-3 active:bg-slate-50 transition-colors">
<img className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?img=5"/>
<div className="flex-1">
<h4 className="font-medium text-sm text-slate-900">Alice Smith</h4>
<p className="text-xs text-slate-500">+44 7700 900123</p>
</div>
<div className="px-2 py-1 bg-amber-50 text-amber-600 rounded-md text-[0.65rem] font-medium">VIP</div>
</div>
</div>
<button className="absolute bottom-6 right-4 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(16,185,129,0.3)] flex items-center justify-center active:scale-95 transition-transform z-10" onclick="openDrawer('drawer-new-contact')">
<iconify-icon icon="solar:user-plus-linear" width="26"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 overflow-y-auto hide-scrollbar hidden bg-slate-50/50" id="view-broadcasts">
<div className="p-4 flex justify-between items-center sticky top-0 bg-slate-50/90 backdrop-blur-sm z-10">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Campaigns</h1>
<button className="text-sm font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-xl"><iconify-icon icon="solar:add-circle-linear"></iconify-icon> Create</button>
</div>
<div className="px-4 pb-20 space-y-3">

<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[0.65rem] font-semibold text-emerald-600 uppercase tracking-wider">Running</span>
</div>
<h3 className="font-medium text-slate-900">Q3 Product Update</h3>
</div>
<button className="text-slate-400 p-1 active:bg-slate-50 rounded-lg" onclick="openDrawer('drawer-broadcast-actions')"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">Hi {{name}}, check out our latest features designed to speed up your workflow...</p>
<div className="flex justify-between items-center border-t border-slate-50 pt-3">
<div className="text-[0.65rem] text-slate-400">Modified: Today, 09:00 AM</div>
<div className="text-[0.65rem] font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md">Type: Text</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] opacity-80">
<div className="flex justify-between items-start mb-3">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span className="text-[0.65rem] font-semibold text-slate-500 uppercase tracking-wider">Complete</span>
</div>
<h3 className="font-medium text-slate-900">Weekend Sale Alert</h3>
</div>
<button className="text-slate-400 p-1 active:bg-slate-50 rounded-lg" onclick="openDrawer('drawer-broadcast-actions')"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="flex items-center gap-4 text-xs mt-2">
<div className="flex flex-col"><span className="text-slate-400 text-[0.65rem]">Sent</span><span className="font-medium">1,500</span></div>
<div className="flex flex-col"><span className="text-slate-400 text-[0.65rem]">Delivered</span><span className="font-medium text-emerald-600">98%</span></div>
<div className="flex flex-col"><span className="text-slate-400 text-[0.65rem]">Read</span><span className="font-medium text-blue-600">65%</span></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto hide-scrollbar hidden bg-slate-50/50" id="view-more">
<div className="p-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Settings</h1>
<div className="space-y-4 pb-20">

<div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors border-b border-slate-50" onclick="alert('Templates screen')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">Templates</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><iconify-icon icon="solar:buildings-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">Organization Info</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">Team Members</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center"><iconify-icon icon="solar:global-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">Language Settings</span>
</div>
<span className="text-xs text-slate-400">English</span>
</button>
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center"><iconify-icon icon="solar:settings-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">App Settings</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 active:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center"><iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-slate-800">Help &amp; Support</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="text-center text-[0.65rem] text-slate-400 mt-4">Clapvo v2.1.0</div>
</div>
</div>
</div>
</main>



<nav className="h-16 bg-white border-t border-slate-100 flex justify-around items-center px-2 pb-safe absolute bottom-0 w-full z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-emerald-600 transition-colors" onclick="switchTab('home')">
<iconify-icon className="icon-active" icon="solar:home-2-bold" width="22"></iconify-icon>
<iconify-icon className="icon-inactive hidden" icon="solar:home-2-linear" width="22"></iconify-icon>
<span className="text-[0.6rem] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-600 transition-colors" onclick="switchTab('chat')">
<iconify-icon className="icon-active hidden" icon="solar:chat-round-dots-bold" width="22"></iconify-icon>
<iconify-icon className="icon-inactive" icon="solar:chat-round-dots-linear" width="22"></iconify-icon>
<span className="text-[0.6rem] font-medium">Chats</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-600 transition-colors" onclick="switchTab('contacts')">
<iconify-icon className="icon-active hidden" icon="solar:users-group-rounded-bold" width="22"></iconify-icon>
<iconify-icon className="icon-inactive" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
<span className="text-[0.6rem] font-medium">Contacts</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-600 transition-colors relative" onclick="switchTab('broadcasts')">
<iconify-icon className="icon-active hidden" icon="solar:satellite-bold" width="22"></iconify-icon>
<iconify-icon className="icon-inactive" icon="solar:satellite-linear" width="22"></iconify-icon>
<span className="text-[0.6rem] font-medium">Broadcast</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-600 transition-colors" onclick="switchTab('more')">
<iconify-icon className="icon-active hidden" icon="solar:hamburger-menu-bold" width="22"></iconify-icon>
<iconify-icon className="icon-inactive" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
<span className="text-[0.6rem] font-medium">More</span>
</button>
</nav>




<div className="view-screen absolute inset-0 bg-white z-30 translate-x-full flex flex-col" id="view-conversation">

<div className="pt-12 pb-3 px-2 bg-white border-b border-slate-100 flex items-center justify-between z-10 shadow-sm">
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 active:bg-slate-50 rounded-full" onclick="closeSlideScreen('view-conversation')"><iconify-icon icon="solar:alt-arrow-left-linear" width="24"></iconify-icon></button>
<div className="flex items-center gap-3 cursor-pointer p-1 -ml-1 rounded-xl active:bg-slate-50 transition-colors" onclick="openSlideScreen('view-contact-info')">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm">SJ</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h2 className="text-sm font-semibold text-slate-900 leading-tight">Sarah Jenkins</h2>
<p className="text-[0.65rem] text-slate-500 flex items-center gap-1">Assigned to You</p>
</div>
</div>
</div>
<div className="flex items-center gap-1">

<div className="flex items-center gap-1.5 mr-2 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
<span className="text-[0.6rem] font-medium text-slate-500">Private</span>
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-slate-200 appearance-none cursor-pointer" id="private-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer" htmlFor="private-toggle"></label>
</input></div>
</div>
<button className="p-2 text-slate-500 active:bg-slate-50 rounded-full"><iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon></button>
<button className="p-2 text-slate-500 active:bg-slate-50 rounded-full" onclick="openDrawer('drawer-chat-actions')"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4 hide-scrollbar">
<div className="text-center my-4"><span className="text-[0.65rem] bg-slate-100 text-slate-500 px-2 py-1 rounded-md">Today</span></div>

<div className="flex gap-2 max-w-[85%]">
<div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0 mt-auto hidden"></div>
<div>
<div className="bg-white border border-slate-100 text-slate-800 p-3 rounded-2xl rounded-bl-sm shadow-sm text-sm">
                            Hi, I need help upgrading my subscription plan.
                        </div>
<div className="text-[0.6rem] text-slate-400 mt-1 ml-1">10:40 AM</div>
</div>
</div>

<div className="flex gap-2 max-w-[85%] ml-auto justify-end">
<div className="flex flex-col items-end">
<div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-br-sm shadow-sm text-sm">
                            Hello Sarah! I can certainly help you with that. Which plan were you looking to upgrade to?
                        </div>
<div className="text-[0.6rem] text-slate-400 mt-1 mr-1 flex items-center gap-1">10:41 AM <iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon></div>
</div>
</div>

<div className="flex gap-2 max-w-[85%]">
<div>
<div className="bg-white border border-slate-100 text-slate-800 p-3 rounded-2xl rounded-bl-sm shadow-sm text-sm">
                            Yes, I would like to upgrade my plan. The Pro tier looks good.
                        </div>
<div className="text-[0.6rem] text-slate-400 mt-1 ml-1">10:42 AM</div>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100 pb-safe">
<div className="flex items-end gap-2 bg-slate-50 rounded-2xl border border-slate-100 p-1 pl-3">
<button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon></button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2.5 max-h-24 resize-none outline-none text-slate-800" placeholder="Type a message..." rows="1"></textarea>
<button className="p-2.5 m-0.5 bg-emerald-600 text-white rounded-xl active:scale-95 transition-transform"><iconify-icon icon="solar:plain-linear" width="18"></iconify-icon></button>
</div>
</div>
</div>

<div className="view-screen absolute inset-0 bg-white z-40 translate-x-full flex flex-col" id="view-contact-info">
<div className="pt-12 pb-3 px-2 bg-white flex items-center justify-between border-b border-slate-100">
<button className="p-2 text-slate-600 active:bg-slate-50 rounded-full flex items-center gap-1" onclick="closeSlideScreen('view-contact-info')"><iconify-icon icon="solar:alt-arrow-left-linear" width="24"></iconify-icon> <span className="text-sm font-medium">Back</span></button>
<button className="text-sm font-medium text-emerald-600 px-3 py-1">Edit</button>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar pb-10">

<div className="flex flex-col items-center pt-6 pb-4 border-b border-slate-50">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center text-slate-600 font-medium text-2xl mb-3 shadow-sm">SJ</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Sarah Jenkins</h2>
<p className="text-sm text-slate-500 mb-3">+1 415 555 2671</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Lead</span>
<span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Pro Plan</span>
</div>
</div>

<div className="flex border-b border-slate-100">
<button className="flex-1 py-3 text-sm font-medium text-emerald-600 border-b-2 border-emerald-600">Profile</button>
<button className="flex-1 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">Notes</button>
<button className="flex-1 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">Schedule</button>
</div>

<div className="p-4 space-y-4">
<div>
<label className="text-[0.65rem] uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Assigned Agent</label>
<div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs">AX</div>
<span className="text-sm font-medium text-slate-800">Alex (You)</span>
</div>
</div>
<div>
<label className="text-[0.65rem] uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Email Address</label>
<p className="text-sm text-slate-800">sarah.j@example.com</p>
</div>
<div>
<label className="text-[0.65rem] uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Created Date</label>
<p className="text-sm text-slate-800">Oct 24, 2023</p>
</div>
<div className="pt-4 mt-4 border-t border-slate-100">
<button className="w-full py-3 text-rose-500 text-sm font-medium bg-rose-50 rounded-xl active:bg-rose-100 transition-colors">Block Contact</button>
</div>
</div>
</div>
</div>




<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300" id="drawer-backdrop" onclick="closeAllDrawers()"></div>

<div className="drawer fixed top-0 bottom-0 left-0 w-[80%] max-w-sm bg-white z-50 -translate-x-full shadow-2xl flex flex-col" id="drawer-left">
<div className="p-6 bg-slate-50/50 border-b border-slate-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-md shadow-emerald-600/20">CL</div>
<div>
<h2 className="font-semibold text-slate-900 tracking-tight text-base leading-tight">Clapvo HQ</h2>
<p className="text-xs text-slate-500">Free Plan</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-sm">Switch Org</button>
<button className="py-1.5 px-3 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm"><iconify-icon icon="solar:add-circle-linear"></iconify-icon></button>
</div>
</div>
<div className="flex-1 overflow-y-auto py-2">
<div className="px-4 py-2 text-[0.65rem] font-semibold text-slate-400 uppercase tracking-wider">Account</div>
<button className="w-full flex items-center gap-3 px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:user-linear" width="20"></iconify-icon> My Profile</button>
<button className="w-full flex items-center gap-3 px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:settings-linear" width="20"></iconify-icon> Settings</button>
<div className="px-4 py-2 mt-4 text-[0.65rem] font-semibold text-slate-400 uppercase tracking-wider">Support</div>
<button className="w-full flex items-center gap-3 px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:help-linear" width="20"></iconify-icon> Help Center</button>
</div>
<div className="p-4 border-t border-slate-100">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-50 text-rose-500 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors"><iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon> Log Out</button>
</div>
</div>

<div className="drawer fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 translate-y-full pb-safe" id="drawer-inbox-filter">
<div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4"></div>
<div className="px-4 pb-6">
<h3 className="text-sm font-semibold text-slate-900 mb-3 px-2">Filter Chats</h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium text-sm" onclick="closeAllDrawers()">
<div className="flex items-center gap-3"><iconify-icon icon="solar:inbox-linear" width="20"></iconify-icon> Inbox</div>
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm" onclick="closeAllDrawers()">
<div className="flex items-center gap-3"><iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon> Assigned to Me</div>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm" onclick="closeAllDrawers()">
<div className="flex items-center gap-3"><iconify-icon icon="solar:chat-round-unread-linear" width="20"></iconify-icon> Unread Chats</div>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm" onclick="closeAllDrawers()">
<div className="flex items-center gap-3"><iconify-icon icon="solar:flag-linear" width="20"></iconify-icon> Flagged</div>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm" onclick="closeAllDrawers()">
<div className="flex items-center gap-3"><iconify-icon icon="solar:archive-linear" width="20"></iconify-icon> Archived</div>
</button>
</div>
</div>
</div>

<div className="drawer fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 translate-y-full pb-safe" id="drawer-chat-actions">
<div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4"></div>
<div className="px-4 pb-6 space-y-1">
<button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-medium" onclick="closeAllDrawers()"><iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon> Assign Chat</button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-medium" onclick="closeAllDrawers(); openDrawer('drawer-tags')"><iconify-icon icon="solar:tag-linear" width="20"></iconify-icon> Add Tags</button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-medium" onclick="closeAllDrawers()"><iconify-icon icon="solar:flag-linear" width="20"></iconify-icon> Flag Chat</button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-medium" onclick="closeAllDrawers()"><iconify-icon icon="solar:moon-sleep-linear" width="20"></iconify-icon> Snooze Chat</button>
<div className="h-px bg-slate-100 my-2"></div>
<button className="w-full flex items-center gap-3 p-3 rounded-xl text-rose-500 hover:bg-rose-50 text-sm font-medium" onclick="closeAllDrawers()"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon> Close Chat</button>
</div>
</div>

<div className="drawer fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 translate-y-full pb-safe max-h-[70vh] flex flex-col" id="drawer-tags">
<div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 flex-shrink-0"></div>
<div className="px-4 py-3 flex justify-between items-center border-b border-slate-50 flex-shrink-0">
<h3 className="text-sm font-semibold text-slate-900">Manage Tags</h3>
<button className="text-xs font-medium text-emerald-600">Create New</button>
</div>
<div className="px-4 py-4 overflow-y-auto hide-scrollbar space-y-2 flex-1">

<label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl cursor-pointer active:bg-slate-50">
<span className="text-sm font-medium text-slate-700">Lead</span>
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-square-bold"></iconify-icon>
</label>
<label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl cursor-pointer active:bg-slate-50">
<span className="text-sm font-medium text-slate-700">Support</span>
<iconify-icon className="text-slate-300 text-xl" icon="solar:square-bottom-up-linear"></iconify-icon>
</label>
<label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl cursor-pointer active:bg-slate-50">
<span className="text-sm font-medium text-slate-700">Sales</span>
<iconify-icon className="text-slate-300 text-xl" icon="solar:square-bottom-up-linear"></iconify-icon>
</label>
<label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl cursor-pointer active:bg-slate-50">
<span className="text-sm font-medium text-slate-700">VIP</span>
<iconify-icon className="text-slate-300 text-xl" icon="solar:square-bottom-up-linear"></iconify-icon>
</label>
</div>
<div className="p-4 border-t border-slate-50">
<button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-medium active:scale-95 transition-transform" onclick="closeAllDrawers()">Apply Tags</button>
</div>
</div>

<div className="drawer fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 translate-y-full pb-safe" id="drawer-devices">
<div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4"></div>
<div className="px-4 pb-6">
<h3 className="text-sm font-semibold text-slate-900 mb-4 px-1">Connected Devices</h3>
<div className="space-y-3">
<div className="p-3 border border-slate-100 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><iconify-icon icon="solar:smartphone-bold" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-slate-900 leading-none mb-1">Support Line 1</h4>
<p className="text-[0.65rem] text-slate-500">+1 234 567 8900</p>
</div>
</div>
<span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[0.6rem] font-bold rounded-md uppercase tracking-wider">Connected</span>
</div>
<div className="p-3 border border-slate-100 rounded-2xl flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center"><iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-slate-900 leading-none mb-1">Sales Line</h4>
<p className="text-[0.65rem] text-slate-500">+1 987 654 3210</p>
</div>
</div>
<span className="px-2 py-1 bg-slate-100 text-slate-500 text-[0.6rem] font-bold rounded-md uppercase tracking-wider">Offline</span>
</div>
</div>
<button className="w-full mt-4 py-3 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium flex items-center justify-center gap-2"><iconify-icon icon="solar:add-circle-linear"></iconify-icon> Connect Device</button>
</div>
</div>

<div className="drawer fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 translate-y-full pb-safe" id="drawer-new-contact">
<div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-2"></div>
<div className="px-4 py-2 border-b border-slate-50 flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900">New Contact</h3>
<button className="p-1 text-slate-400 rounded-full bg-slate-50" onclick="closeAllDrawers()"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="px-4 pb-6 space-y-4">
<div>
<label className="text-xs font-medium text-slate-700 mb-1 block">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="e.g. John Doe" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-700 mb-1 block">Phone Number</label>
<div className="flex gap-2">
<select className="bg-slate-50 border border-slate-100 rounded-xl px-2 py-2.5 text-sm text-slate-600 focus:outline-none">
<option>+1</option>
<option>+44</option>
</select>
<input className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<button className="w-full mt-2 py-3 bg-emerald-600 text-white rounded-xl text-sm font-medium active:scale-95 transition-transform" onclick="closeAllDrawers(); openSlideScreen('view-conversation'); switchTab('chat')">Save &amp; Start Chat</button>
</div>
</div>
</div>


    </>
  );
}
