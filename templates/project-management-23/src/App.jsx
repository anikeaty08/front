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



        // Initialize Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Dummy Media Data
        const mediaItems = [
            { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=600', title: 'Hero_Bg_Abstract.jpg', author: 'Emily Johnson', authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: '2 hours ago', size: '1.2 MB' },
            { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=600', title: 'Dashboard_Mockup_v2.png', author: 'You', authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Yesterday', size: '3.4 MB' },
            { id: 3, type: 'video', url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600&h=600', title: 'Interaction_Prototype.mp4', author: 'Charlie Davis', authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 15', size: '12.5 MB' },
            { id: 4, type: 'file', url: '', icon: 'file-text', title: 'Design_System_Specs.pdf', author: 'Emily Johnson', authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 14', size: '4.1 MB' },
            { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600&h=600', title: 'Logo_Concepts.jpg', author: 'Bob Smith', authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 12', size: '800 KB' },
            { id: 6, type: 'audio', url: '', icon: 'headphones', title: 'Client_Meeting_Notes.mp3', author: 'You', authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 10', size: '8.2 MB' },
            { id: 7, type: 'link', url: '', icon: 'link', title: 'Figma Master File', author: 'Sarah Chen', authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 08', size: 'External' },
            { id: 8, type: 'image', url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=600', title: 'App_Icon_Final.png', author: 'Emily Johnson', authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', date: 'Jan 05', size: '1.1 MB' },
        ];

        // Tab Switching Logic
        function switchView(viewName) {
            // Reset tabs
            const tabs = ['messages', 'media', 'pins'];
            tabs.forEach(tab => {
                const el = document.getElementById(`tab-${tab}`);
                el.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                el.classList.add('text-slate-500');
                
                const viewEl = document.getElementById(`view-${tab}`);
                viewEl.classList.add('hidden');
                viewEl.classList.remove('flex');
            });

            // Set active tab
            const activeTab = document.getElementById(`tab-${viewName}`);
            activeTab.classList.remove('text-slate-500');
            activeTab.classList.add('bg-white', 'shadow-sm', 'text-slate-900');

            // Show view
            const activeView = document.getElementById(`view-${viewName}`);
            activeView.classList.remove('hidden');
            activeView.classList.add('flex');

            // If Media tab, render all initially
            if(viewName === 'media') {
                filterMedia('all');
            }
        }

        // Media Filtering Logic
        function filterMedia(filterType) {
            // Update Chip Styles
            const filters = ['all', 'images', 'videos', 'audio', 'files', 'links'];
            filters.forEach(f => {
                const el = document.getElementById(`filter-${f}`);
                if(f === filterType) {
                    el.className = 'px-4 py-1.5 rounded-full border text-base font-medium transition-all whitespace-nowrap bg-slate-900 text-white border-transparent shadow-sm';
                } else {
                    el.className = 'px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white';
                }
            });

            // Filter Data
            const grid = document.getElementById('media-grid');
            grid.innerHTML = '';
            
            let filteredItems = mediaItems;
            // Map plural filters to singular types for dummy data checking
            const typeMap = { 'images': 'image', 'videos': 'video', 'audio': 'audio', 'files': 'file', 'links': 'link' };
            if (filterType !== 'all') {
                filteredItems = mediaItems.filter(item => item.type === typeMap[filterType]);
            }

            // Render Items
            if(filteredItems.length === 0) {
                grid.innerHTML = '<div class="col-span-full py-12 text-center text-slate-500 text-base">No media found for this filter.</div>';
                return;
            }

            filteredItems.forEach(item => {
                let contentHTML = '';
                
                if(item.type === 'image') {
                    contentHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">`;
                } else if(item.type === 'video') {
                    contentHTML = `
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover brightness-90 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1">
                                <i data-lucide="play" class="w-5 h-5"></i>
                            </div>
                        </div>`;
                } else {
                    // File, Audio, Link
                    const colors = {
                        'file': 'bg-blue-50 text-blue-600',
                        'audio': 'bg-purple-50 text-purple-600',
                        'link': 'bg-amber-50 text-amber-600'
                    };
                    const colorClass = colors[item.type] || 'bg-slate-50 text-slate-600';
                    contentHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center ${colorClass} transition-colors group-hover:bg-slate-100">
                            <i data-lucide="${item.icon}" class="w-8 h-8 mb-2"></i>
                            <span class="text-sm font-medium px-4 text-center truncate w-full">${item.title}</span>
                        </div>`;
                }

                const cardHTML = `
                    <div onclick="openDrawer(${item.id})" class="group flex flex-col gap-2 cursor-pointer">
                        <div class="aspect-square bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:border-slate-300">
                            ${contentHTML}
                        </div>
                        <div class="px-1">
                            <p class="text-base font-medium text-slate-900 truncate" title="${item.title}">${item.title}</p>
                            <div class="flex items-center justify-between mt-1">
                                <div class="flex items-center gap-1.5">
                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-4 h-4 rounded-full">
                                    <span class="text-sm text-slate-500 truncate max-w-[80px]">${item.author}</span>
                                </div>
                                <span class="text-xs text-slate-400">${item.date}</span>
                            </div>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', cardHTML);
            });
            
            // Re-init icons for newly added HTML
            lucide.createIcons({ strokeWidth: 1.5 });
        }

        // Drawer Logic
        function openDrawer(itemId) {
            const item = mediaItems.find(i => i.id === itemId);
            if(!item) return;

            // Populate Drawer Data
            document.getElementById('drawer-title').textContent = item.title;
            document.getElementById('drawer-meta').textContent = `${item.type.charAt(0).toUpperCase() + item.type.slice(1)} • ${item.size}`;
            document.getElementById('drawer-author').textContent = item.author;
            document.getElementById('drawer-date').textContent = item.date;
            document.getElementById('drawer-avatar').src = item.authorAvatar;

            const previewContainer = document.getElementById('drawer-preview-container');
            if(item.type === 'image') {
                previewContainer.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-contain">`;
            } else if(item.type === 'video') {
                previewContainer.innerHTML = `
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                    <div class="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div class="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 pl-1 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                            <i data-lucide="play" class="w-6 h-6"></i>
                        </div>
                    </div>`;
            } else {
                const colors = {
                    'file': 'text-blue-500',
                    'audio': 'text-purple-500',
                    'link': 'text-amber-500'
                };
                previewContainer.innerHTML = `<i data-lucide="${item.icon}" class="w-24 h-24 ${colors[item.type] || 'text-slate-400'}"></i>`;
            }
            lucide.createIcons({ strokeWidth: 1.5 });

            // Show Drawer
            const overlay = document.getElementById('drawer-overlay');
            const drawer = document.getElementById('media-drawer');
            
            overlay.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                drawer.classList.remove('translate-x-full');
            }, 10);
        }

        function closeDrawer() {
            const overlay = document.getElementById('drawer-overlay');
            const drawer = document.getElementById('media-drawer');
            
            overlay.classList.add('opacity-0');
            drawer.classList.add('translate-x-full');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }

    
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
      

<aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col flex-shrink-0 h-full">

<div className="h-16 flex items-center px-6 border-b border-slate-200/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="hexagon"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Allehive</span>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar py-4 px-3 flex flex-col gap-8">

<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md" href="#">
<i className="w-5 h-5" data-lucide="folder-kanban"></i> Projects
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="check-square"></i> My Tasks
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar"></i> Calendar
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users"></i> Team
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i> Report
                </a>
</nav>

<div>
<h4 className="px-3 text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Quick Action</h4>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="clock"></i> Schedule
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="file-text"></i> Documents
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="activity"></i> Activity
                    </a>
</nav>
</div>

<div>
<h4 className="px-3 text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Recent Projects</h4>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> Website Redesign
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-900 font-medium bg-slate-200/50 rounded-md" href="#">
<span className="w-2 h-2 rounded-full bg-amber-500"></span> ClickCraft Mobile App
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Brand Guide
                    </a>
</nav>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 px-6 flex items-center justify-between border-b border-slate-200 flex-shrink-0">
<div className="flex items-center gap-4">
<button className="p-1 text-slate-400 hover:text-slate-600 rounded">
<i className="w-5 h-5" data-lucide="panel-left"></i>
</button>
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="timer"></i>
<span className="text-sm font-medium">0:00:00</span>
<i className="w-4 h-4 text-blue-500" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative w-64">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-2.5 flex items-center gap-1">
<kbd className="px-1.5 py-0.5 text-xs font-medium text-slate-400 bg-white border border-slate-200 rounded">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-xs font-medium text-slate-400 bg-white border border-slate-200 rounded">K</kbd>
</div>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<button className="text-slate-500 hover:text-slate-700"><i className="w-5 h-5" data-lucide="help-circle"></i></button>
<button className="text-slate-500 hover:text-slate-700"><i className="w-5 h-5" data-lucide="bell"></i></button>
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
</header>

<div className="px-8 py-5 flex items-center justify-between flex-shrink-0">
<div className="flex items-center gap-4">
<span className="w-3 h-3 rounded-sm bg-amber-500"></span>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">ClickCraft Mobile App</h1>
<button className="p-1 text-slate-400 hover:text-slate-600 rounded"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-3 py-1.5 text-base border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    To Do
                    <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="flex items-center -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-white text-sm font-medium">A</div>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-600 text-sm font-medium">+5</div>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="user-plus"></i> Invite
                </button>
</div>
</div>

<div className="px-8 border-b border-slate-200 flex-shrink-0">
<nav className="flex gap-8">
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">Overview</a>
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">Tasks</a>
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">Discussion</a>
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">Files &amp; Documents</a>
<a className="pb-3 text-base font-medium text-blue-600 border-b-2 border-blue-600" href="#">Chat</a>
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">Calendars</a>
<a className="pb-3 text-base text-slate-500 hover:text-slate-900 border-b-2 border-transparent transition-colors" href="#">AI Insight</a>
<button className="pb-3 text-slate-400 hover:text-slate-600 ml-auto"><i className="w-4 h-4" data-lucide="sliders-horizontal"></i></button>
</nav>
</div>

<div className="flex-1 flex overflow-hidden bg-white">

<div className="flex-1 flex flex-col min-w-0 border-r border-slate-200">

<div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
<div className="bg-slate-100/80 p-1 rounded-lg inline-flex">
<button className="px-5 py-1.5 text-base font-medium rounded-md bg-white shadow-sm text-slate-900 transition-all" id="tab-messages" onclick="switchView('messages')">Messages</button>
<button className="px-5 py-1.5 text-base font-medium rounded-md text-slate-500 hover:text-slate-900 transition-all" id="tab-media" onclick="switchView('media')">Media</button>
<button className="px-5 py-1.5 text-base font-medium rounded-md text-slate-500 hover:text-slate-900 transition-all" id="tab-pins" onclick="switchView('pins')">Pins</button>
</div>
<div className="flex items-center gap-3 text-slate-400">
<button className="p-2 hover:bg-slate-50 rounded-md transition-colors"><i className="w-5 h-5" data-lucide="video"></i></button>
<button className="p-2 hover:bg-slate-50 rounded-md transition-colors"><i className="w-5 h-5" data-lucide="phone"></i></button>
<button className="p-2 hover:bg-slate-50 rounded-md transition-colors"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="p-2 hover:bg-slate-50 rounded-md transition-colors"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden" id="view-messages">
<div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6">

<div className="flex items-center gap-4">
<div className="h-px bg-slate-100 flex-1"></div>
<span className="text-sm text-slate-400 font-medium">Today</span>
<div className="h-px bg-slate-100 flex-1"></div>
</div>

<div className="flex gap-4">
<img alt="" className="w-10 h-10 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-medium text-slate-900 text-base">Emily Johnson</span>
<span className="text-sm text-slate-400">10:24 AM</span>
</div>
<p className="text-base text-slate-700 bg-slate-50 p-3 rounded-b-xl rounded-tr-xl inline-block">Hey team! Here are the latest mockups for the dashboard redesign. Let me know what you think.</p>
<div className="mt-3 flex gap-2">
<div className="relative w-48 h-32 rounded-lg overflow-hidden border border-slate-200 cursor-pointer group">
<img alt="Mockup 1" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
</div>
<div className="relative w-48 h-32 rounded-lg overflow-hidden border border-slate-200 cursor-pointer group">
<img alt="Mockup 2" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
</div>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<img alt="" className="w-10 h-10 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex flex-col items-end">
<div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
<span className="font-medium text-slate-900 text-base">You</span>
<span className="text-sm text-slate-400">10:30 AM</span>
</div>
<p className="text-base text-white bg-blue-600 p-3 rounded-b-xl rounded-tl-xl inline-block">Looks great Emily! I especially like the cleaner tab structure. Have you uploaded the design specs document?</p>
</div>
</div>

<div className="flex gap-4">
<img alt="" className="w-10 h-10 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-medium text-slate-900 text-base">Emily Johnson</span>
<span className="text-sm text-slate-400">10:32 AM</span>
</div>
<p className="text-base text-slate-700 bg-slate-50 p-3 rounded-b-xl rounded-tr-xl inline-block mb-2">Yes, attaching it right now.</p>

<div className="flex items-center gap-4 p-3 rounded-lg border border-slate-200 bg-white shadow-sm w-72 cursor-pointer hover:border-slate-300 transition-colors">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-slate-900 truncate">Design_Specs_v2.pdf</p>
<p className="text-sm text-slate-500">2.4 MB PDF</p>
</div>
<button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 flex-shrink-0">
<div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
<button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg flex-shrink-0">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2 text-base placeholder:text-slate-400" placeholder="Type a message..." rows="1"></textarea>
<div className="flex items-center gap-1 flex-shrink-0 pb-1">
<button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg">
<i className="w-5 h-5" data-lucide="smile"></i>
</button>
<button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col overflow-hidden bg-slate-50/50" id="view-media">

<div className="px-6 py-5 bg-white border-b border-slate-100 flex-shrink-0">

<div className="relative max-w-2xl">
<i className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Search media by name, uploader, or date..." type="text"/>
</div>

<div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
<button className="px-4 py-1.5 rounded-full border text-base font-medium transition-all whitespace-nowrap bg-slate-900 text-white border-transparent shadow-sm" id="filter-all" onclick="filterMedia('all')">All</button>
<button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white" id="filter-images" onclick="filterMedia('images')">Images</button>
<button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white" id="filter-videos" onclick="filterMedia('videos')">Videos</button>
<button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white" id="filter-audio" onclick="filterMedia('audio')">Audio</button>
<button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white" id="filter-files" onclick="filterMedia('files')">Files</button>
<button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-base font-medium hover:bg-slate-50 transition-all whitespace-nowrap bg-white" id="filter-links" onclick="filterMedia('links')">Links</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6">

<h3 className="text-base font-medium text-slate-900 mb-4 tracking-tight">January 2025</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="media-grid">

</div>
</div>
</div>

<div className="hidden flex-1 flex-col overflow-hidden bg-slate-50/50" id="view-pins">
<div className="flex-1 overflow-y-auto custom-scrollbar p-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-4">Pinned Messages</h3>
<div className="flex flex-col gap-3 max-w-3xl">

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm group hover:border-slate-300 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<img alt="" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="font-medium text-slate-900 text-sm">Sarah Chen</span>
<span className="text-slate-400 text-sm">Jan 15</span>
</div>
<button className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
                                        Jump <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-base text-slate-600 line-clamp-2">Here is the link to the master Figma file. Please use this for all future reference: figma.com/file/abc123xyz.</p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm group hover:border-slate-300 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<img alt="" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="font-medium text-slate-900 text-sm">You</span>
<span className="text-slate-400 text-sm">Jan 10</span>
</div>
<button className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
                                        Jump <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100 mt-2">
<div className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-archive"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Project_Assets_Final.zip</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="w-80 border-l border-slate-200 bg-white flex flex-col h-full flex-shrink-0" id="panel-group-details">
<div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 flex-shrink-0">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Group Details</h2>
<button className="text-slate-400 hover:text-slate-600"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-6">

<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">ClickCraft Mobile App</h3>
</div>
</div>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Central hub for all design system discussions, component specifications, and UI asset sharing.
                    </p>
<div className="space-y-3 mb-8 border-b border-slate-100 pb-6">
<div className="flex justify-between text-base">
<span className="text-slate-500">Project</span>
<span className="font-medium text-slate-900">ClickCraft Mobile App</span>
</div>
<div className="flex justify-between text-base">
<span className="text-slate-500">Created By</span>
<span className="font-medium text-slate-900">John Smith</span>
</div>
<div className="flex justify-between text-base">
<span className="text-slate-500">Created On</span>
<span className="font-medium text-slate-900">Feb 24, 2024</span>
</div>
</div>

<div className="mb-8">
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-4">Members &amp; Roles</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="text-base font-medium text-slate-900">Emily Johnson</span>
</div>
<span className="text-sm text-slate-400">Admin</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="text-base font-medium text-slate-900">Bob Smith</span>
</div>
<span className="text-sm text-slate-400">Admin</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="text-base font-medium text-slate-900">Charlie Davis</span>
</div>
<span className="text-sm text-slate-400">Editor</span>
</div>
</div>
<button className="w-full mt-4 py-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            View All 24 Members
                        </button>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h4 className="text-base font-semibold tracking-tight text-slate-900">Media</h4>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/></div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/></div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center text-slate-400"><i className="w-6 h-6" data-lucide="file-text"></i></div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/></div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center text-slate-400"><i className="w-6 h-6" data-lucide="video"></i></div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/></div>
</div>
</div>
</div>
</aside>
</div>
</main>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 hidden transition-opacity opacity-0" id="drawer-overlay" onclick="closeDrawer()"></div>

<div className="fixed inset-y-0 right-0 w-[400px] bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col border-l border-slate-200" id="media-drawer">

<div className="h-16 px-6 flex items-center justify-between border-b border-slate-100 flex-shrink-0 bg-white">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Media Details</h2>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-50 transition-colors" title="Download">
<i className="w-5 h-5" data-lucide="download"></i>
</button>
<div className="w-px h-4 bg-slate-200"></div>
<button className="p-2 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-50 transition-colors" onclick="closeDrawer()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">

<div className="bg-slate-50 w-full aspect-[4/3] flex items-center justify-center border-b border-slate-100 overflow-hidden relative group" id="drawer-preview-container">

</div>
<div className="p-6">

<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1 break-words" id="drawer-title">Filename.jpg</h3>
<p className="text-base text-slate-500" id="drawer-meta">Image • 2.4 MB</p>
</div>

<div className="flex items-center justify-between py-4 border-y border-slate-100 mb-6">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full border border-slate-200" id="drawer-avatar" src=""/>
<div>
<p className="text-base font-medium text-slate-900" id="drawer-author">Name</p>
<p className="text-sm text-slate-500" id="drawer-date">Date</p>
</div>
</div>
<button className="px-3 py-1.5 text-sm font-medium border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-slate-600 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square"></i> Open in Chat
                    </button>
</div>

<div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
                        Comments <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-medium">2</span>
</h4>
<div className="space-y-4 mb-4">

<div className="flex gap-3">
<img alt="" className="w-8 h-8 rounded-full flex-shrink-0 mt-1" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-slate-900 text-base">You</span>
<span className="text-xs text-slate-400">Just now</span>
</div>
<p className="text-base text-slate-700 mt-0.5">We should use this variation for the hero section.</p>
</div>
</div>

<div className="flex gap-3">
<img alt="" className="w-8 h-8 rounded-full flex-shrink-0 mt-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-slate-900 text-base">Emily Johnson</span>
<span className="text-xs text-slate-400">2 hours ago</span>
</div>
<p className="text-base text-slate-700 mt-0.5">Looks great, the contrast is much better here.</p>
</div>
</div>
</div>

<div className="flex items-start gap-3 mt-6">
<img alt="" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex-1 bg-white border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden transition-all">
<textarea className="w-full p-2.5 text-base border-none focus:ring-0 resize-none placeholder:text-slate-400" placeholder="Write a comment..." rows="2"></textarea>
<div className="px-2.5 py-2 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
<div className="flex gap-1">
<button className="p-1.5 text-slate-400 hover:text-slate-600 rounded"><i className="w-4 h-4" data-lucide="paperclip"></i></button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 rounded"><i className="w-4 h-4" data-lucide="smile"></i></button>
</div>
<button className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Post</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
