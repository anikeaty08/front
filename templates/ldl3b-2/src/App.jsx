import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
colors: {
neutral: { 850: '#1f1f1f', 925: '#0f0f0f', 950: '#0a0a0a' } // Custom depths
}
}
}
}



        import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
        import Sortable from 'https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/modular/sortable.esm.js';

        // --- APP STORE MODULE (Simulated ./appstore.js) ---
        const AppStoreModule = {
            categories: ['Productivity', 'Development', 'Design', 'Social', 'Utilities'],
            apps: [
                { name: 'Linear', desc: 'Issue tracking', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Linear_Logo.svg', category: 'Productivity', url: 'https://linear.app' },
                { name: 'Figma', desc: 'Design tool', icon: 'lucide:figma', category: 'Design', url: 'https://figma.com' },
                { name: 'GitHub', desc: 'Code hosting', icon: 'lucide:github', category: 'Development', url: 'https://github.com' },
                { name: 'Vercel', desc: 'Deployment', icon: 'lucide:triangle', category: 'Development', url: 'https://vercel.com' },
                { name: 'Notion', desc: 'Workspace', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', category: 'Productivity', url: 'https://notion.so' },
                { name: 'Slack', desc: 'Communication', icon: 'lucide:slack', category: 'Social', url: 'https://slack.com' },
                { name: 'ChatGPT', desc: 'AI Assistant', icon: 'lucide:bot', category: 'Utilities', url: 'https://chat.openai.com' },
                { name: 'Spotify', desc: 'Music', icon: 'lucide:music', category: 'Utilities', url: 'https://spotify.com' }
            ],
            activeCategory: 'Productivity',
            getFilteredApps() {
                return this.apps.filter(app => app.category === this.activeCategory);
            }
        };

        // --- LIVEDESK CORE LOGIC (Simulated ./livedesk.js) ---
        function livedesk() {
            return {
                // State
                user: { uid: 'user_123', name: 'Demo User' },
                currentPage: 'page_home',
                viewMode: 'grid', // 'grid' | 'list'
                searchQuery: '',
                selectedAppId: null,
                isEditMode: false,
                currentWorkspace: { id: 'ws_1', name: 'Personal Workspace' },
                
                // Data
                pages: [
                    { id: 'page_home', name: 'Home', icon: 'lucide:home' },
                    { id: 'page_dev', name: 'Development', icon: 'lucide:code-2' },
                    { id: 'page_design', name: 'Design', icon: 'lucide:pen-tool' }
                ],
                apps: [
                    { id: 'app_1', title: 'Linear', url: 'https://linear.app', icon: 'lucide:check-circle', category: 'Productivity', pageId: 'page_home', order: 0 },
                    { id: 'app_2', title: 'GitHub', url: 'https://github.com', icon: 'lucide:github', category: 'Development', pageId: 'page_dev', order: 0 },
                    { id: 'app_3', title: 'Vercel', url: 'https://vercel.com', icon: 'lucide:triangle', category: 'Development', pageId: 'page_dev', order: 1 }
                ],
                backups: [],

                // UI State
                modals: {
                    appStore: false,
                    settings: false,
                    workspaces: false
                },
                contextMenu: { visible: false, x: 0, y: 0, app: null },
                toast: { visible: false, message: '' },
                appStore: AppStoreModule,

                // --- INIT ---
                init() {
                    this.loadFromStorage();
                    this.initSortable();
                    
                    // Mock initial backup load
                    this.listBackups();

                    // PWA Service Worker Registration
                    if ('serviceWorker' in navigator) {
                        navigator.serviceWorker.register('/service-worker.js').catch(err => console.log('SW Fail', err));
                    }
                },

                // --- SORTABLEJS DRAG & DROP ---
                initSortable() {
                    this.$nextTick(() => {
                        const grid = document.getElementById('app-grid');
                        const list = document.getElementById('app-list');
                        
                        const config = {
                            animation: 150,
                            delay: 100, // prevented accidental drag on click
                            ghostClass: 'sortable-ghost',
                            dragClass: 'sortable-drag',
                            group: 'apps', // allows dragging between lists if we had multiple visible
                            onEnd: (evt) => {
                                this.handleDragEnd(evt);
                            }
                        };

                        if(grid) Sortable.create(grid, config);
                        if(list) Sortable.create(list, config);
                    });
                },

                handleDragEnd(evt) {
                    const itemEl = evt.item;
                    const appId = itemEl.getAttribute('data-id');
                    const newIndex = evt.newIndex;
                    
                    // Filter apps for current page to get context
                    let pageApps = this.apps.filter(a => a.pageId === this.currentPage).sort((a,b) => a.order - b.order);
                    
                    // Remove moved app from array representation
                    const movedApp = this.apps.find(a => a.id === appId);
                    pageApps = pageApps.filter(a => a.id !== appId);
                    
                    // Insert at new position
                    pageApps.splice(newIndex, 0, movedApp);
                    
                    // Update global apps array with new order values
                    pageApps.forEach((app, index) => {
                        const globalRef = this.apps.find(a => a.id === app.id);
                        if(globalRef) globalRef.order = index;
                    });
                    
                    this.saveToStorage();
                },

                // --- ACTIONS ---
                get filteredApps() {
                    let pageApps = this.apps.filter(a => a.pageId === this.currentPage);
                    if (this.searchQuery) {
                        pageApps = pageApps.filter(a => a.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
                    }
                    return pageApps.sort((a, b) => a.order - b.order);
                },

                getPageName() {
                    return this.pages.find(p => p.id === this.currentPage)?.name || 'Unknown';
                },

                changePage(pageId) {
                    this.currentPage = pageId;
                    this.selectedAppId = null;
                    // Re-init sortable on view change (next tick)
                    this.initSortable();
                },

                handleAppClick(app) {
                    this.selectedAppId = app.id;
                    // In a real scenario, window.open(app.url, '_blank');
                    this.showToast(`Launching ${app.title}...`);
                },

                installApp(storeApp) {
                    const newApp = {
                        id: 'app_' + Date.now(),
                        title: storeApp.name,
                        url: storeApp.url,
                        icon: storeApp.icon,
                        category: storeApp.category,
                        pageId: this.currentPage,
                        order: 999 // Add to end
                    };
                    this.apps.push(newApp);
                    this.reorderCurrentPage();
                    this.saveToStorage();
                    this.showToast(`${newApp.title} installed`);
                    this.modals.appStore = false;
                    this.initSortable();
                },

                deleteApp(id) {
                    this.apps = this.apps.filter(a => a.id !== id);
                    this.contextMenu.visible = false;
                    this.saveToStorage();
                    this.showToast('App removed');
                },

                moveToNextPage(app) {
                    const currentIndex = this.pages.findIndex(p => p.id === this.currentPage);
                    const nextIndex = (currentIndex + 1) % this.pages.length;
                    app.pageId = this.pages[nextIndex].id;
                    app.order = 999; // append to end
                    this.contextMenu.visible = false;
                    this.saveToStorage();
                    this.showToast(`Moved to ${this.pages[nextIndex].name}`);
                },

                reorderCurrentPage() {
                    const pageApps = this.apps.filter(a => a.pageId === this.currentPage).sort((a,b) => a.order - b.order);
                    pageApps.forEach((a, i) => a.order = i);
                },

                // --- CONTEXT MENU ---
                openContextMenu(e, app) {
                    this.contextMenu.app = app;
                    this.contextMenu.x = Math.min(e.clientX, window.innerWidth - 170);
                    this.contextMenu.y = Math.min(e.clientY, window.innerHeight - 150);
                    this.contextMenu.visible = true;
                },
                handleGlobalContext(e) {
                    // Close if clicking background
                    if (!e.target.closest('[data-id]')) {
                        this.contextMenu.visible = false;
                    }
                },

                // --- BACKUP SERVERLESS MOCK ---
                createBackup() {
                    // Mocking Firebase Function call: backupUserApps(uid)
                    const backup = {
                        id: 'bk_' + Date.now(),
                        timestamp: Date.now(),
                        size: (JSON.stringify(this.apps).length / 1024).toFixed(1) + 'KB',
                        data: JSON.parse(JSON.stringify(this.apps))
                    };
                    this.backups.unshift(backup);
                    localStorage.setItem('ldl_backups', JSON.stringify(this.backups));
                    this.showToast('Backup created successfully');
                },

                listBackups() {
                    const stored = localStorage.getItem('ldl_backups');
                    if (stored) this.backups = JSON.parse(stored);
                },

                restoreBackup(backupId) {
                    const backup = this.backups.find(b => b.id === backupId);
                    if(backup) {
                        this.apps = JSON.parse(JSON.stringify(backup.data));
                        this.saveToStorage();
                        this.showToast('System restored');
                        this.modals.settings = false;
                        this.initSortable();
                    }
                },

                // --- PERSISTENCE ---
                saveToStorage() {
                    localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                },
                loadFromStorage() {
                    const stored = localStorage.getItem('ldl_apps');
                    if (stored) this.apps = JSON.parse(stored);
                },

                showToast(msg) {
                    this.toast.message = msg;
                    this.toast.visible = true;
                    setTimeout(() => this.toast.visible = false, 2500);
                }
            }
        }

        Alpine.data('livedesk', livedesk);
        Alpine.start();
    


        // In a real build, this lives in sw.js
        /*
        self.addEventListener('install', (e) => {
            e.waitUntil(caches.open('ldl-v3').then((cache) => cache.addAll(['/', '/index.html'])));
        });
        self.addEventListener('fetch', (e) => {
            e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
        });
        */
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div @contextmenu.prevent="handleGlobalContext($event)" className="flex w-full h-full relative" x-data="livedesk">

<aside className="w-16 md:w-64 flex-shrink-0 border-r border-white/5 bg-neutral-925 flex flex-col justify-between transition-all duration-300 ease-out z-20">

<div className="p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3 overflow-hidden">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20">
                        LD
                    </div>
<div className="hidden md:flex flex-col">
<span className="text-white font-medium text-xs tracking-tight truncate">LiveDesk</span>
<span className="text-neutral-500 text-[10px] tracking-tight truncate" x-text="currentWorkspace.name"></span>
</div>
</div>

<button @click="modals.workspaces = true" className="hidden md:flex p-1.5 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</button>
</div>

<nav className="flex-1 overflow-y-auto no-scrollbar py-4 px-2 space-y-1">
<div className="px-2 pb-2 text-[10px] font-medium text-neutral-500 uppercase tracking-wider hidden md:block">Pages</div>
<template :key="page.id" x-htmlFor="page in pages">
<button :className="currentPage === page.id ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/10' : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-200'" @click="changePage(page.id)" @dragover.prevent="handleDragOverPage(page.id)" @drop.prevent="handleDropOnPage(page.id)" className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group relative">
<span :data-icon="page.icon" className="iconify text-lg flex-shrink-0" data-width="16"></span>
<span className="hidden md:block text-xs font-medium tracking-tight" x-text="page.name"></span>

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-white rounded-r-full" x-show="currentPage === page.id"></div>
</button>
</template>
<div className="pt-6 px-2 pb-2 text-[10px] font-medium text-neutral-500 uppercase tracking-wider hidden md:block">Shared</div>

<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:bg-white/5 hover:text-neutral-200 transition-all">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
<span className="hidden md:block text-xs font-medium tracking-tight">Team Engineering</span>
<div className="hidden md:flex ml-auto -space-x-1">
<div className="w-4 h-4 rounded-full bg-blue-500 ring-2 ring-neutral-900"></div>
<div className="w-4 h-4 rounded-full bg-green-500 ring-2 ring-neutral-900"></div>
</div>
</button>
</nav>

<div className="p-3 border-t border-white/5">
<button @click="modals.settings = true" className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 transition-colors group">
<img alt="User" className="w-6 h-6 rounded-full ring-1 ring-white/10" src="https://api.dicebear.com/7.x/initials/svg?seed=User&amp;backgroundColor=262626&amp;textColor=ffffff"/>
<div className="hidden md:flex flex-col items-start">
<span className="text-xs text-neutral-200 font-medium tracking-tight">Demo User</span>
<span className="text-[10px] text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                        </span>
</div>
<span className="hidden md:block ml-auto iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:settings-2" data-width="14"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-neutral-950 relative overflow-hidden">

<header className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-neutral-950/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<h1 className="text-white font-medium text-sm tracking-tight" x-text="getPageName()"></h1>

<span className="text-neutral-600">/</span>
<span className="text-neutral-500 text-xs tracking-tight" x-text="apps.filter(a =&gt; a.pageId === currentPage).length + ' Apps'"></span>
</div>
<div className="flex items-center gap-3">

<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 iconify" data-icon="lucide:search" data-width="14"></span>
<input className="bg-neutral-900/50 border border-white/5 text-xs rounded-full py-1.5 pl-9 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:bg-neutral-900 focus:border-white/10 w-48 transition-all focus:w-64" placeholder="Search apps..." type="text" x-model="searchQuery"/>
</div>

<div className="flex bg-neutral-900 rounded-lg p-0.5 border border-white/5">
<button :className="viewMode === 'grid' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'" @click="viewMode = 'grid'" className="p-1.5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:layout-grid" data-width="14"></span>
</button>
<button :className="viewMode === 'list' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'" @click="viewMode = 'list'" className="p-1.5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:list" data-width="14"></span>
</button>
</div>

<button @click="modals.appStore = true" className="bg-white text-black hover:bg-neutral-200 text-xs font-semibold py-1.5 px-3 rounded-full transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
<span className="hidden sm:inline">Add App</span>
</button>
</div>
</header>

<div @click.self="selectedAppId = null" className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative">

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4" id="app-grid" x-show="viewMode === 'grid'">
<template :key="app.id" x-htmlFor="app in filteredApps">
<div :className="selectedAppId === app.id ? 'bg-white/10 ring-1 ring-white/10' : ''" :data-id="app.id" @click="handleAppClick(app)" @contextmenu.prevent.stop="openContextMenu($event, app)" className="group relative flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/5 active:scale-95 select-none">

<div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900 border border-white/5 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
<template x-if="app.icon.includes(':')">
<span :data-icon="app.icon" className="iconify text-2xl text-white/90"></span>
</template>
<template x-if="!app.icon.includes(':')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="" className="w-8 h-8 object-contain"/>
</template>
</div>

<span className="text-xs text-neutral-300 font-medium tracking-tight text-center truncate w-full group-hover:text-white" x-text="app.title"></span>
</div>
</template>

<button @click="modals.appStore = true" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-white/10 hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-transparent text-neutral-600 group-hover:text-neutral-400">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</div>
<span className="text-xs text-neutral-600 font-medium tracking-tight">Add New</span>
</button>
</div>

<div className="flex flex-col space-y-1" id="app-list" x-show="viewMode === 'list'">
<template :key="app.id" x-htmlFor="app in filteredApps">
<div :data-id="app.id" @click="handleAppClick(app)" @contextmenu.prevent.stop="openContextMenu($event, app)" className="group flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors cursor-pointer select-none">
<div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-900 border border-white/5">
<template x-if="app.icon.includes(':')">
<span :data-icon="app.icon" className="iconify text-lg text-white/90"></span>
</template>
<template x-if="!app.icon.includes(':')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="" className="w-5 h-5 object-contain"/>
</template>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-neutral-200 truncate group-hover:text-white" x-text="app.title"></div>
<div className="text-[10px] text-neutral-500 truncate" x-text="app.url"></div>
</div>
<span className="text-[10px] text-neutral-600 uppercase tracking-wider px-2 py-0.5 rounded border border-white/5 bg-neutral-900" x-text="app.category"></span>
</div>
</template>
</div>
</div>
</main>


<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" x-show="modals.appStore" x-transition.opacity="">
<div @click.away="modals.appStore = false" className="bg-neutral-900 w-full max-w-2xl h-[80vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">

<div className="p-5 border-b border-white/5 flex items-center justify-between bg-neutral-900">
<h2 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:layout-grid" data-width="18"></span>
                        App Library
                    </h2>
<button @click="modals.appStore = false" className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:x" data-width="18"></span></button>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-48 border-r border-white/5 bg-neutral-925 p-3 overflow-y-auto">
<div className="space-y-1">
<template :key="cat" x-htmlFor="cat in appStore.categories">
<button :className="appStore.activeCategory === cat ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-neutral-300'" @click="appStore.activeCategory = cat" className="w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors" x-text="cat"></button>
</template>
</div>
</div>

<div className="flex-1 p-5 overflow-y-auto bg-neutral-900">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<template :key="storeApp.name" x-htmlFor="storeApp in appStore.getFilteredApps()">
<button @click="installApp(storeApp)" className="group flex flex-col items-start p-3 rounded-lg border border-white/5 bg-neutral-850 hover:bg-neutral-800 hover:border-white/10 transition-all text-left relative overflow-hidden">
<div className="w-8 h-8 mb-3 rounded bg-neutral-900 flex items-center justify-center border border-white/5">
<template x-if="storeApp.icon.includes(':')">
<span :data-icon="storeApp.icon" className="iconify text-lg"></span>
</template>
<template x-if="!storeApp.icon.includes(':')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-5 h-5 object-contain"/>
</template>
</div>
<span className="text-xs font-medium text-white block mb-0.5" x-text="storeApp.name"></span>
<span className="text-[10px] text-neutral-500 block truncate w-full" x-text="storeApp.desc"></span>

<div className="absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
<span className="text-white text-xs font-semibold flex items-center gap-1">
<span className="iconify" data-icon="lucide:download" data-width="12"></span> Install
                                        </span>
</div>
</button>
</template>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" x-show="modals.settings" x-transition.opacity="">
<div @click.away="modals.settings = false" className="bg-neutral-900 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
<div className="p-5 border-b border-white/5">
<h2 className="text-sm font-semibold text-white tracking-tight">System Settings</h2>
</div>
<div className="p-5 space-y-6">

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Cloud Backups</h3>
<button @click="createBackup()" className="text-[10px] bg-white text-black px-2 py-1 rounded font-medium hover:bg-neutral-200 transition-colors">Create Now</button>
</div>
<div className="bg-neutral-950 border border-white/5 rounded-lg divide-y divide-white/5 max-h-48 overflow-y-auto">
<template :key="backup.id" x-htmlFor="backup in backups">
<div className="p-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-green-500/10 text-green-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:database" data-width="12"></span>
</div>
<div>
<div className="text-xs text-white font-medium" x-text="new Date(backup.timestamp).toLocaleDateString()"></div>
<div className="text-[10px] text-neutral-500" x-text="new Date(backup.timestamp).toLocaleTimeString() + ' • ' + backup.size"></div>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button @click="restoreBackup(backup.id)" className="p-1 hover:text-indigo-400 text-neutral-500" title="Restore"><span className="iconify" data-icon="lucide:rotate-ccw" data-width="14"></span></button>
<button className="p-1 hover:text-red-400 text-neutral-500" title="Delete"><span className="iconify" data-icon="lucide:trash" data-width="14"></span></button>
</div>
</div>
</template>
<div className="p-4 text-center text-xs text-neutral-600" x-show="backups.length === 0">No backups found.</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">Workspace</h3>
<div className="p-3 rounded-lg border border-white/5 bg-neutral-950 flex items-center justify-between">
<span className="text-xs text-neutral-300">Share Workspace Link</span>
<button className="text-xs text-indigo-400 font-medium hover:underline">Copy Link</button>
</div>
</div>
</div>
<div className="p-4 bg-neutral-925 border-t border-white/5 text-center">
<button @click="modals.settings = false" className="text-xs text-neutral-400 hover:text-white transition-colors">Close</button>
</div>
</div>
</div>

<div :style={{`top: '${contextMenu.y}px', left: '${contextMenu.x}px`'}} @click.away="contextMenu.visible = false" className="fixed w-40 z-[60] bg-neutral-900 border border-white/10 shadow-xl rounded-lg py-1 flex flex-col" x-show="contextMenu.visible" x-transition.opacity.duration.100ms="">
<div className="px-3 py-1.5 border-b border-white/5 mb-1">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold truncate block" x-text="contextMenu.app?.title"></span>
</div>
<button @click="editApp(contextMenu.app)" className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:bg-indigo-600 hover:text-white transition-colors text-left">
<span className="iconify" data-icon="lucide:pencil" data-width="12"></span> Edit
            </button>
<button @click="moveToNextPage(contextMenu.app)" className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors text-left">
<span className="iconify" data-icon="lucide:arrow-right-circle" data-width="12"></span> Move Page
            </button>
<div className="h-px bg-white/5 my-1"></div>
<button @click="deleteApp(contextMenu.app.id)" className="flex items-center gap-2 px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 transition-colors text-left">
<span className="iconify" data-icon="lucide:trash-2" data-width="12"></span> Uninstall
            </button>
</div>

<div className="fixed bottom-6 right-6 z-[70] bg-neutral-900 border border-white/10 shadow-2xl rounded-lg px-4 py-3 flex items-center gap-3" x-show="toast.visible" x-transition="">
<div className="text-green-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white" x-text="toast.message"></span>
</div>
</div>





    </>
  );
}
