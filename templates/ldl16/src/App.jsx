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



    document.addEventListener('alpine:init', () => {
        Alpine.data('livedesk', () => ({
            authModalOpen: false,
            authLoading: false,
            email: '',
            password: '',
            authError: '',
            user: null, 
            viewMode: 'grid',
            holisticViewOpen: false,
            currentPage: 1,
            pageNumbers: [1, 2, 3, 4, 5],
            pageNames: {1: 'Home', 2: 'Work', 3: 'Media', 4: 'Tools', 5: 'Settings'},
            time: '',
            date: '',
            apps: [], 
            noteViewerOpen: false,
            viewingNoteApp: null,
            createMenuOpen: false,
            folderModalOpen: false,
            activeFolder: null,
            showImportModal: false,
            availableAppsForImport: [],
            importSelection: [],
            galleryOpen: false,
            activeGalleryName: '',
            currentGalleryItems: [],
            galleryViewMode: 'grid',
            virtualLookOpen: false,
            virtualFashion9Open: false,
            viewImage: null,
            versionString: 'v20.0.0-alpha',
            contextOpen: false,
            contextPos: {x: 0, y: 0},
            contextApp: null,
            categoryColors: {
                default: 'text-gray-500',
                'Productivity': 'text-blue-400',
                'Social': 'text-green-400',
                'Utility': 'text-purple-400',
                'Design': 'text-pink-400'
            },

            init() {
                this.updateTime();
                setInterval(() => this.updateTime(), 1000);
                this.loadApps();
                document.addEventListener('click', (e) => {
                    // Close context menu on general click
                    if(this.contextOpen) this.contextOpen = false;
                });
            },

            updateTime() {
                const now = new Date();
                this.time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                this.date = now.toLocaleDateString([], {weekday: 'long', month: 'short', day: 'numeric'});
            },

            loadApps() {
                // Initial dummy data to make the requested UI functional
                this.apps = [
                    {id: '1', name: 'Browser', icon: 'solar:globe-bold-duotone', category: 'Utility', type: 'app', page: 1, url: 'https://google.com'},
                    {id: '2', name: 'Fashion 3', icon: 'solar:hanger-2-bold-duotone', category: 'Design', type: 'app', page: 1, url: 'virtual-look'},
                    {id: '3', name: 'Fashion 9', icon: 'solar:t-shirt-bold-duotone', category: 'Design', type: 'app', page: 1, url: 'virtual-fashion-9'},
                    {id: '4', name: 'Notes', icon: 'solar:notes-bold-duotone', category: 'Productivity', type: 'app', page: 1, note: 'Meeting at 5pm', url: '#'},
                    {id: 'system-gallery', name: 'Photos', icon: 'solar:gallery-bold-duotone', category: 'Media', type: 'gallery', page: 1},
                    {id: 'folder-1', name: 'Socials', icon: 'solar:folder-bold-duotone', type: 'folder', page: 1, items: [
                        {id: 'f1', name: 'Chat', icon: 'solar:chat-round-dots-bold', url: '#'},
                        {id: 'f2', name: 'Mail', icon: 'solar:letter-bold', url: '#'}
                    ]}
                ];
            },

            getPageName(num) { return this.pageNames[num] || `Page ${num}`; },
            updatePageName(num, name) { this.pageNames[num] = name; },
            savePageNames() { },
            
            getAppsForPage(page) {
                return this.apps.filter(app => app.page === page);
            },

            handleAppClick(e, app) {
                if(this.createMenuOpen || this.contextOpen) return;
                this.launchApp(app);
            },

            launchApp(app) {
                if(app.type === 'folder') {
                    this.openFolder(app);
                } else if(app.type === 'gallery' || app.id === 'system-gallery') {
                    this.openGallery(app);
                } else if(app.url === 'virtual-look') {
                    this.virtualLookOpen = true;
                } else if(app.url === 'virtual-fashion-9') {
                    this.virtualFashion9Open = true;
                } else if(app.note || app.attachments) {
                    this.viewingNoteApp = app;
                    this.noteViewerOpen = true;
                } else if(app.url && app.url !== '#') {
                    window.open(app.url, '_blank');
                }
            },

            openFolder(folder) {
                this.activeFolder = folder;
                this.folderModalOpen = true;
            },
            closeFolder() {
                this.folderModalOpen = false;
                this.activeFolder = null;
            },

            openGallery(app) {
                this.activeGalleryName = app.name;
                this.currentGalleryItems = [
                    {id: 'g1', type: 'image', name: 'Design Mockup', date: new Date(), data: 'https://images.unsplash.com/photo-1558655146-d09347e0b7a8?auto=format&fit=crop&w=800&q=80'},
                    {id: 'g2', type: 'video', name: 'Demo Reel', date: new Date(), data: 'https://www.w3schools.com/html/mov_bbb.mp4'}
                ]; 
                this.galleryOpen = true;
            },

            getGalleryPreviews(id) {
                return [
                    {type: 'image', id: 'p1', data: 'https://images.unsplash.com/photo-1558655146-d09347e0b7a8?auto=format&fit=crop&w=200&q=80'},
                    {type: 'image', id: 'p2', data: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80'}
                ];
            },
            
            viewMediaItem(item) {
                this.viewImage = item;
            },
            closeLightbox() {
                this.viewImage = null;
            },
            deleteGalleryItem(id) {
                this.currentGalleryItems = this.currentGalleryItems.filter(i => i.id !== id);
            },
            uploadGalleryItem(e) { },

            handlePlusClick() { this.createMenuOpen = true; },
            handleProfileClick() { this.authModalOpen = true; },
            signInGoogle() { this.user = { email: 'demo@user.com', photoURL: null }; this.authModalOpen = false; },
            signInEmail() { this.authLoading = true; setTimeout(() => { this.user = { email: this.email, photoURL: null }; this.authModalOpen = false; this.authLoading = false; }, 1000); },

            openContext(e, app, inFolder = false) {
                e.preventDefault();
                this.contextOpen = true;
                this.contextApp = app;
                this.contextPos = { x: e.clientX, y: e.clientY };
                if (this.contextPos.x + 224 > window.innerWidth) this.contextPos.x = window.innerWidth - 230;
                if (this.contextPos.y + 150 > window.innerHeight) this.contextPos.y = window.innerHeight - 160;
            },

            toggleHolistic() {
                this.holisticViewOpen = !this.holisticViewOpen;
            },
            
            handleTouchStart() {},
            handleTouchEnd() {},
            selectCreateType() {},
            saveApps() {},
            openModal() {},
            toggleImport() {},
            confirmImport() {},
            formatBytes(bytes) { return '1.2 MB'; }
        }));
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
      

<div className="fixed inset-0 z-[70] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm p-8 space-y-8 text-center bg-[#111] border border-gray-800 rounded-3xl shadow-2xl" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<button @click="authModalOpen = false" className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
<div className="space-y-2">
<div className="w-16 h-16 mx-auto rounded-[16px] bg-gradient-to-b from-gray-800 to-black border border-gray-700 flex items-center justify-center shadow-2xl">
<span className="iconify text-3xl text-white" data-icon="solar:rocket-2-bold-duotone"></span>
</div>
<h1 className="text-xl font-bold tracking-tight text-white">Sign In</h1>
<p className="text-xs text-gray-500">Sync your apps across devices</p>
</div>
<div className="space-y-4">
<button @click="signInGoogle" className="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
<span className="iconify text-xl" data-icon="logos:google-icon"></span>
<span>Continue with Google</span>
</button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
<span className="relative bg-[#111] px-2 text-xs text-gray-500 uppercase">Or</span>
</div>
<form @submit.prevent="signInEmail" className="space-y-3">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors" placeholder="Email" type="email" x-model="email"/>
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors" placeholder="Password" type="password" x-model="password"/>
<button className="w-full py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 transition-colors" type="submit">
<span x-show="!authLoading">Sign In / Register</span>
<span className="iconify animate-spin mx-auto" data-icon="solar:refresh-circle-bold-duotone" x-show="authLoading"></span>
</button>
<p className="text-red-500 text-xs h-4" x-text="authError"></p>
</form>
</div>
</div>
</div>

<div className="h-full w-full relative bg-black">

<header className="fixed top-0 left-0 right-0 h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-md z-40">
<div className="flex items-center gap-4">
<h1 className="text-lg font-bold tracking-tight text-white hidden md:block">LDL15 EXPERIMENTAL <span className="text-xs text-gray-600 ml-1">v20</span></h1>
<div className="flex bg-gray-900 rounded-lg p-1 border border-white/10">
<button :className="viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'grid'; holisticViewOpen = false" className="p-1.5 rounded-md transition-colors">
<span className="iconify text-lg" data-icon="solar:widget-2-bold-duotone"></span>
</button>
<button :className="viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'list'; holisticViewOpen = false" className="p-1.5 rounded-md transition-colors">
<span className="iconify text-lg" data-icon="solar:list-bold-duotone"></span>
</button>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right leading-tight hidden sm:block">
<div className="text-sm font-bold text-white" x-text="time"></div>
<div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide" x-text="date"></div>
</div>
<div className="flex items-center gap-3">
<button @click="handlePlusClick()" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:add-circle-bold-duotone"></span>
</button>
<button @click="handleProfileClick()" className="relative group">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden border border-white/20 ring-2 ring-green-500/20" x-show="user">
<img :src="user?.photoURL" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center font-bold text-xs" x-show="!user?.photoURL" x-text="user?.email?.[0].toUpperCase()"></div>
</div>
<div className="w-9 h-9 rounded-full bg-gray-800 overflow-hidden border border-white/10 flex items-center justify-center hover:bg-gray-700 transition-colors" x-show="!user">
<span className="iconify text-xl text-gray-400" data-icon="solar:user-circle-bold-duotone"></span>
</div>
</button>
</div>
</div>
</header>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-16 pb-0 overflow-hidden">

<div className="h-full w-full relative" x-show="viewMode === 'grid'" x-transition.opacity="">

<div :className="holisticViewOpen ? 'z-50 bg-black/40 backdrop-blur-xl overflow-y-auto p-10 pt-20 flex flex-wrap justify-center items-center gap-8' : ''" className="h-full w-full relative transition-all duration-300">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">

<div :className="holisticViewOpen ? 'relative w-[260px] h-[460px] md:w-[300px] md:h-[530px] rounded-3xl border border-white/10 bg-[#111] shadow-2xl cursor-pointer hover:border-indigo-500/50 hover:shadow-indigo-500/20 hover:-translate-y-2' : 'absolute inset-0 overflow-y-auto no-scrollbar scroll-mask p-4 md:p-8'" @click="if(holisticViewOpen) { currentPage = pNum; holisticViewOpen = false; }" className="transition-all duration-500 ease-out" x-show="holisticViewOpen || currentPage === pNum">

<div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none" x-show="holisticViewOpen">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-black/80 px-3 py-1.5 rounded-full border border-white/10 shadow-lg" x-text="getPageName(pNum)"></span>
</div>


<div :className="holisticViewOpen ? 'w-[360%] h-[360%] origin-top-left scale-[0.277] pointer-events-none p-10 pt-24' : 'max-w-7xl mx-auto min-h-full'">
<div :data-page="pNum" className="app-grid sortable-grid">
<template :key="app.id" x-htmlFor="app in getAppsForPage(pNum)">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="relative flex flex-col items-center gap-1.5 rounded-xl transition-all cursor-pointer touch-manipulation group select-none app-item">

<template x-if="app.type === 'folder'">
<div :className="app.bgColor || 'bg-[#1a1a1a]'" className="ios-icon flex flex-col z-10 p-0 backdrop-blur-md !bg-opacity-50">
<div className="folder-mini-grid">
<template :key="subApp.id" x-htmlFor="subApp in (app.items || []).slice(0, 9)">
<div className="w-full h-full rounded-[2px] overflow-hidden bg-black/50 flex items-center justify-center">
<template x-if="subApp.icon.includes('data:') || subApp.icon.includes('http')">
<img :src="subApp.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!subApp.icon.includes('data:') &amp;&amp; !subApp.icon.includes('http')">
<span :data-icon="subApp.icon" className="iconify text-[8px] text-white"></span>
</template>
</div>
</template>
</div>
</div>
</template>

<template x-if="app.type === 'gallery' || app.id === 'system-gallery'">
<div className="ios-icon flex flex-col z-10 p-0 bg-[#1a1a1a] overflow-hidden">

<div className="folder-mini-grid" x-show="getGalleryPreviews(app.id).length &gt; 0">
<template :key="item.id" x-htmlFor="item in getGalleryPreviews(app.id)">
<div className="w-full h-full rounded-[2px] overflow-hidden bg-gray-900 relative">
<template x-if="item.type === 'image'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover opacity-90"/>
</template>
<template x-if="item.type === 'video'">
<div className="w-full h-full flex items-center justify-center bg-gray-800">
<video :src="item.data" className="w-full h-full object-cover opacity-60 pointer-events-none" muted=""></video>
<span className="iconify text-[8px] text-white absolute z-10" data-icon="solar:play-bold"></span>
</div>
</template>
</div>
</template>
</div>

<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30" x-show="getGalleryPreviews(app.id).length === 0">
<span :data-icon="app.icon || 'solar:gallery-bold-duotone'" className="iconify text-3xl text-gray-500"></span>
</div>
</div>
</template>

<template x-if="app.type !== 'folder' &amp;&amp; app.type !== 'gallery' &amp;&amp; app.id !== 'system-gallery'">
<div className="ios-icon app-icon-bg flex items-center justify-center z-10 relative">

<template x-if="app.note || (app.attachments &amp;&amp; app.attachments.length)">
<div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full border border-black z-20 flex items-center justify-center shadow-sm">
<span className="iconify text-[8px] text-black" data-icon="solar:notes-bold"></span>
</div>
</template>
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-gray-200"></span>
</template>
</div>
</template>
<div className="flex flex-col items-center gap-0.5 text-center">
<span className="text-[11px] font-bold text-white tracking-tight leading-tight truncate w-20" x-text="app.name"></span>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[9px] font-medium uppercase leading-none truncate w-20" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : (app.category || 'App'))"></span>
</div>
</div>
</template>
</div>
</div>
</div>
</template>
</div>
</div>

<div className="h-full overflow-y-auto p-4 md:p-8 no-scrollbar pb-32" x-cloak="" x-show="viewMode === 'list'">
<div className="max-w-4xl mx-auto space-y-3" id="list-sortable">
<template :key="app.id" x-htmlFor="app in apps">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="flex items-center gap-4 p-3 rounded-2xl bg-gray-900/50 border border-white/5 hover:bg-gray-800 transition-colors group cursor-pointer select-none">

<div className="w-12 h-12 rounded-[10px] bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 relative border border-white/5">
<template x-if="app.type === 'folder'">
<div className="grid grid-cols-2 gap-0.5 p-1 w-full h-full">
<template x-htmlFor="sub in (app.items||[]).slice(0,4)">
<div className="bg-gray-600 rounded-[2px]"></div>
</template>
</div>
</template>
<template x-if="app.type === 'gallery' || app.id === 'system-gallery'">
<div className="grid grid-cols-2 gap-0.5 p-1 w-full h-full">
<template x-htmlFor="item in getGalleryPreviews(app.id).slice(0,4)">
<div className="bg-gray-700 rounded-[2px] overflow-hidden">
<img :src="item.data" className="w-full h-full object-cover" x-show="item.type!=='video'"/>
<div className="w-full h-full bg-gray-800" x-show="item.type==='video'"></div>
</div>
</template>
<div className="absolute inset-0 flex items-center justify-center" x-show="getGalleryPreviews(app.id).length === 0">
<span :data-icon="app.icon || 'solar:gallery-bold-duotone'" className="iconify text-xl text-gray-500"></span>
</div>
</div>
</template>
<template x-if="app.type !== 'folder' &amp;&amp; app.type !== 'gallery' &amp;&amp; app.id !== 'system-gallery'">
<div className="relative w-full h-full flex items-center justify-center">

<template x-if="app.note || (app.attachments &amp;&amp; app.attachments.length)">
<div className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full border border-black z-20 flex items-center justify-center"></div>
</template>
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-xl text-white"></span>
</template>
</div>
</template>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-bold text-white truncate text-sm" x-text="app.name"></h3>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 font-medium uppercase" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : app.category)"></span>
</div>
<p className="text-xs text-gray-500 truncate" x-text="app.type === 'folder' ? `${(app.items||[]).length} items` : (app.type === 'gallery' ? 'Media Collection' : app.url)"></p>
</div>
</div>
</template>
</div>
</div>
</main>

<div className="fixed inset-0 z-[110] flex items-center justify-center p-4" x-cloak="" x-show="noteViewerOpen">
<div @click="noteViewerOpen = false" className="absolute inset-0 bg-black/70 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-md bg-[#161616] border border-gray-700 rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-8">
<div className="p-6 border-b border-gray-700 bg-gray-900/50 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-black border border-gray-600 flex items-center justify-center overflow-hidden flex-shrink-0">
<template x-if="viewingNoteApp?.icon.includes('data:') || viewingNoteApp?.icon.includes('http')">
<img :src="viewingNoteApp.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="viewingNoteApp &amp;&amp; (!viewingNoteApp.icon.includes('data:') &amp;&amp; !viewingNoteApp.icon.includes('http'))">
<span :data-icon="viewingNoteApp.icon" className="iconify text-2xl text-white"></span>
</template>
</div>
<div className="flex-1 min-w-0">
<h2 className="text-lg font-bold text-white truncate" x-text="viewingNoteApp?.name"></h2>
<div className="text-xs text-gray-400 truncate" x-text="viewingNoteApp?.category"></div>
</div>
<button @click="noteViewerOpen = false" className="text-gray-400 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar space-y-6">

<button @click="window.open(viewingNoteApp?.url, '_blank')" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg">
<span className="iconify text-lg" data-icon="solar:link-circle-bold"></span>
                        Open Application
                    </button>

<div className="space-y-2" x-show="viewingNoteApp?.note">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Note</div>
<div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-gray-200 text-sm whitespace-pre-wrap leading-relaxed" x-text="viewingNoteApp?.note"></div>
</div>

<div className="space-y-2" x-show="viewingNoteApp?.attachments &amp;&amp; viewingNoteApp.attachments.length &gt; 0">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Attachments</div>
<div className="space-y-2">
<template :key="idx" x-htmlFor="(file, idx) in (viewingNoteApp?.attachments || [])">
<a :download="file.name" :href="file.data" className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:file-bold-duotone"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate" x-text="file.name"></div>
<div className="text-[10px] text-gray-500" x-text="formatBytes(file.size || 0)"></div>
</div>
<div className="text-gray-500 group-hover:text-indigo-400">
<span className="iconify text-xl" data-icon="solar:download-bold-duotone"></span>
</div>
</a>
</template>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4" x-cloak="" x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-bold text-white">Create New</h2>
<button @click="createMenuOpen = false" className="text-gray-500 hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
<div className="grid grid-cols-1 gap-3">
<button @click="selectCreateType('app')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:widget-add-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Application</div>
<div className="text-[10px] text-gray-500">Add a link or app icon</div>
</div>
</button>
<button @click="selectCreateType('folder')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:folder-with-files-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Folder</div>
<div className="text-[10px] text-gray-500">Group apps together</div>
</div>
</button>
<button @click="selectCreateType('gallery')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:gallery-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Gallery</div>
<div className="text-[10px] text-gray-500">Create separate media collection</div>
</div>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[65] flex items-center justify-center" x-cloak="" x-show="folderModalOpen">
<div @click="closeFolder" className="absolute inset-0 bg-black/60 backdrop-blur-xl" x-transition.opacity=""></div>
<div className="relative w-full max-w-3xl bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-all duration-300" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:enter-start="opacity-0 scale-90 translate-y-4">

<div className="w-full flex justify-between items-start p-6 pb-2 shrink-0 bg-gradient-to-b from-[#1a1a1a] to-transparent z-10">
<div className="flex flex-col w-full mr-4">
<input @blur="saveApps()" @keydown.enter="$el.blur()" className="folder-title-input mb-1" placeholder="Folder Name" type="text" x-model="activeFolder.name"/>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500 font-mono uppercase tracking-wider" x-text="`${(activeFolder?.items || []).length} items`"></span>

<div className="flex gap-1 ml-4">
<template x-htmlFor="col in ['bg-[#1a1a1a]', 'bg-gray-800', 'bg-blue-900', 'bg-purple-900', 'bg-red-900']">
<button :className="[col, activeFolder.bgColor === col ? 'ring-1 ring-white' : '']" @click="activeFolder.bgColor = col; saveApps()" className="w-4 h-4 rounded-full border border-white/20 hover:border-white transition-colors !bg-opacity-50"></button>
</template>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button @click="showImportModal = true" className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-bold text-white flex items-center gap-2 transition-colors border border-gray-700">
<span className="iconify" data-icon="solar:import-bold-duotone"></span> Import
                        </button>
<button @click="closeFolder" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700">
<span className="iconify text-xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>

<div className="w-full overflow-y-auto no-scrollbar p-6 pt-2 flex-1">
<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6" id="folder-sortable">

<template :key="app.id" x-htmlFor="app in (activeFolder?.items || [])">
<div :data-id="app.id" @click="launchApp(app)" @contextmenu.prevent="openContext($event, app, true)" className="flex flex-col items-center gap-2 cursor-pointer group folder-item relative">
<div className="w-16 h-16 rounded-[14px] bg-black border border-gray-700 flex items-center justify-center overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-white"></span>
</template>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white text-lg" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
<span className="text-[11px] font-medium text-gray-300 text-center truncate w-full px-1" x-text="app.name"></span>
</div>
</template>

<div @click="openModal('add', null, true)" className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-16 h-16 rounded-[14px] bg-gray-900 border border-gray-700 border-dashed flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors">
<span className="iconify text-2xl text-gray-500 group-hover:text-white" data-icon="solar:add-circle-bold-duotone"></span>
</div>
<span className="text-[11px] font-medium text-gray-500 group-hover:text-gray-300 text-center truncate w-full">Add New</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[75] flex items-center justify-center p-4" x-cloak="" x-show="showImportModal">
<div @click="showImportModal = false" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-md bg-[#161616] border border-gray-800 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] overflow-hidden">
<div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#1a1a1a]">
<h3 className="font-bold text-white">Import Apps</h3>
<button @click="showImportModal = false" className="text-gray-400 hover:text-white"><span className="iconify text-xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="overflow-y-auto p-2 flex-1 space-y-1">
<template :key="app.id" x-htmlFor="app in availableAppsForImport">
<div @click="toggleImport(app.id)" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-colors">
<div :className="importSelection.includes(app.id) ? 'bg-indigo-600 border-indigo-600' : 'border-gray-600'" className="w-5 h-5 rounded border flex items-center justify-center transition-colors">
<span className="iconify text-white text-xs" data-icon="solar:check-bold" x-show="importSelection.includes(app.id)"></span>
</div>
<div className="w-8 h-8 rounded bg-black border border-gray-700 flex items-center justify-center overflow-hidden">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-lg text-white"></span>
</template>
</div>
<span className="text-sm text-gray-200" x-text="app.name"></span>
</div>
</template>
<div className="p-4 text-center text-gray-500 text-xs" x-show="availableAppsForImport.length === 0">
                        No apps available to import from desktop.
                    </div>
</div>
<div className="p-4 border-t border-gray-800 bg-[#1a1a1a]">
<button :disabled="importSelection.length === 0" @click="confirmImport" className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
<span x-text="`Move ${importSelection.length} Apps`"></span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center md:p-6 p-0" x-cloak="" x-show="galleryOpen">
<div @click="galleryOpen = false" className="absolute inset-0 bg-black/50 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full h-full md:rounded-3xl bg-[#0f0f0f] border border-gray-800 shadow-2xl flex flex-col overflow-hidden" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-white/5 bg-[#111] shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-2xl text-pink-500" data-icon="solar:gallery-bold-duotone"></span>
<div>
<h2 className="text-sm font-bold tracking-wide text-white uppercase" x-text="activeGalleryName || 'GALLERY'"></h2>
<span className="text-[10px] text-gray-500 uppercase tracking-wider" x-text="`${currentGalleryItems.length} MEDIA`"></span>
</div>
</div>
<div className="flex bg-gray-900 rounded-lg p-1 border border-white/10 hidden sm:flex">
<button :className="galleryViewMode === 'grid' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'grid'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:widget-3-bold-duotone"></span>
</button>
<button :className="galleryViewMode === 'vertical' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'vertical'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:smartphone-bold-duotone"></span>
</button>
<button :className="galleryViewMode === 'list' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'list'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:list-bold-duotone"></span>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<label className="cursor-pointer px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-semibold text-white transition-colors border border-gray-700 flex items-center gap-2 group">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="solar:upload-bold-duotone"></span>
<span>Add</span>
<input @change="uploadGalleryItem" accept="image/,video/" className="hidden" multiple="" type="file"/>
</label>
<button @click="galleryOpen = false" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 bg-black/50">
<div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4" x-show="currentGalleryItems.length === 0">
<span className="iconify text-6xl opacity-20" data-icon="solar:gallery-wide-bold-duotone"></span>
<p className="text-xs uppercase tracking-widest font-medium opacity-50">No Media Found</p>
</div>
<div className="gallery-grid" x-show="galleryViewMode === 'grid'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="aspect-square rounded-xl bg-gray-900 border border-white/5 overflow-hidden relative group cursor-pointer">
<template x-if="item.type === 'video'">
<div className="w-full h-full relative">
<video :src="item.data" className="w-full h-full object-cover opacity-80"></video>
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
<span className="iconify text-lg ml-0.5" data-icon="solar:play-bold"></span>
</div>
</div>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
</template>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
<button @click.stop="deleteGalleryItem(item.id)" className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</div>
</template>
</div>
<div className="gallery-vertical" x-show="galleryViewMode === 'vertical'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="aspect-[9/16] rounded-xl bg-gray-900 border border-white/5 overflow-hidden relative group cursor-pointer">
<template x-if="item.type === 'video'">
<div className="w-full h-full relative">
<video :src="item.data" className="w-full h-full object-cover opacity-80"></video>
<div className="absolute top-2 right-2 text-white drop-shadow-md">
<span className="iconify" data-icon="solar:videocamera-record-bold-duotone"></span>
</div>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=300&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
</template>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 z-20">
<div className="flex justify-between items-center">
<span className="text-[10px] text-gray-300 font-mono" x-text="new Date(item.date).toLocaleDateString()"></span>
<button @click.stop="deleteGalleryItem(item.id)" className="p-1.5 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors">
<span className="iconify text-sm" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</div>
</div>
</template>
</div>
<div className="flex flex-col gap-2" x-show="galleryViewMode === 'list'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="flex items-center gap-4 p-2 rounded-lg bg-gray-900/40 hover:bg-gray-800 border border-white/5 transition-colors group cursor-pointer">
<div className="w-16 h-12 rounded-md overflow-hidden bg-black relative flex-shrink-0">
<template x-if="item.type === 'video'">
<div className="w-full h-full flex items-center justify-center bg-gray-800">
<span className="iconify text-xl text-gray-400" data-icon="solar:videocamera-record-bold-duotone"></span>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=100&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
</div>
<div className="flex-grow min-w-0 flex flex-col justify-center">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-gray-300 truncate" x-text="item.name || 'Untitled'"></span>
<span className="text-[9px] px-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" x-show="item.type === 'video'">VIDEO</span>
</div>
<span className="text-[10px] text-gray-600 font-mono" x-text="new Date(item.date).toLocaleString()"></span>
</div>
<button @click.stop="deleteGalleryItem(item.id)" className="p-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</template>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center md:p-6 p-0" x-cloak="" x-show="virtualLookOpen">
<div @click="virtualLookOpen = false" className="absolute inset-0 bg-black/50 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full h-full md:rounded-3xl bg-[#0f0f0f] border border-gray-800 shadow-2xl flex flex-col overflow-hidden" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-white/5 bg-[#111] shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-2xl text-purple-400" data-icon="solar:hanger-2-bold-duotone"></span>
<div>
<h2 className="text-sm font-bold tracking-wide text-white uppercase">Virtual Look 3</h2>
<span className="text-[10px] text-gray-500 uppercase tracking-wider">Fashion Studio</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button @click="virtualLookOpen = false" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>
<div className="flex-1 bg-black/50 overflow-hidden relative">
<iframe allow="microphone; camera; clipboard-write" className="w-full h-full border-none" loading="lazy" src="https://virtual-fashion-studio-3-614759327168.us-west1.run.app/" title="Virtual Fashion Studio"></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center md:p-6 p-0" x-cloak="" x-show="virtualFashion9Open">
<div @click="virtualFashion9Open = false" className="absolute inset-0 bg-black/50 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full h-full md:rounded-3xl bg-[#0f0f0f] border border-gray-800 shadow-2xl flex flex-col overflow-hidden" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-white/5 bg-[#111] shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-2xl text-purple-400" data-icon="solar:t-shirt-bold-duotone"></span>
<div>
<h2 className="text-sm font-bold tracking-wide text-white uppercase">Virtual Fashion 9</h2>
<span className="text-[10px] text-gray-500 uppercase tracking-wider">Mobile Studio</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button @click="virtualFashion9Open = false" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>
<div className="flex-1 bg-black/50 overflow-hidden relative">
<iframe allow="camera; microphone; clipboard-write" className="w-full h-full border-none" loading="lazy" src="https://virtual-fashion-studio-9-mobile-6203446808.us-west1.run.app" title="Virtual Fashion Studio Mobile"></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex flex-col" x-cloak="" x-show="viewImage" x-transition.opacity="">
<div className="absolute top-4 right-4 z-50">
<button @click="closeLightbox" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
<div className="flex-1 flex items-center justify-center p-4 md:p-10 overflow-hidden">
<template x-if="viewImage?.type === 'video'">
<video :src="viewImage.data" autoplay="" className="max-w-full max-h-full rounded-lg shadow-2xl bg-black outline-none border border-white/10" controls="" x-ref="lightboxVideo"></video>
</template>
<template x-if="viewImage?.type !== 'video'">
<img :src="viewImage?.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=1200&amp;auto=format&amp;fit=crop'" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"/>
</template>
</div>
<div className="h-16 flex flex-col items-center justify-center text-gray-400 shrink-0">
<div className="text-xs font-bold text-white tracking-wide" x-text="viewImage?.name"></div>
<div className="text-[10px] font-mono uppercase tracking-widest opacity-60" x-text="viewImage ? new Date(viewImage.date).toLocaleString() : ''"></div>
</div>
</div>

<div className="fixed bottom-3 right-4 z-40 pointer-events-none select-none">
<span className="text-[9px] font-mono text-gray-600/60 uppercase tracking-wider font-medium mix-blend-plus-lighter" x-text="versionString"></span>
</div>

<div className="fixed bottom-6 left-6 z-40 group" x-cloak="" x-show="viewMode === 'grid' &amp;&amp; !holisticViewOpen">
<div className="flex items-center gap-2">
<input :value="getPageName(currentPage)" @blur="savePageNames" @input="updatePageName(currentPage, $event.target.value)" @keydown.enter="$el.blur()" className="bg-transparent text-gray-600 font-bold text-xl focus:text-white outline-none w-48 placeholder-gray-800 transition-colors uppercase tracking-tight" type="text"/>
<span className="iconify text-gray-700 group-hover:text-gray-500 transition-colors text-sm" data-icon="solar:pen-bold-duotone"></span>
</div>
</div>

<div className="fixed bottom-6 left-0 right-0 z-[60] flex flex-col items-center justify-end gap-4 pointer-events-none" x-cloak="" x-show="viewMode === 'grid'">

<div className="pointer-events-auto flex gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl transition-all duration-300" x-show="!holisticViewOpen">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="currentPage === pNum ? 'bg-white w-4 shadow-white/50' : 'bg-gray-600 hover:bg-gray-400'" @click="currentPage = pNum" className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center">
</div>
</template>
</div>

<button @click="toggleHolistic()" className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
<span :className="holisticViewOpen ? 'rotate-180' : ''" :data-icon="holisticViewOpen ? 'solar:minimize-square-bold-duotone' : 'solar:widget-5-bold-duotone'" className="iconify text-2xl text-white transition-transform duration-500 relative z-10"></span>

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-white/5 opacity-0 group-active:opacity-100 transition-opacity duration-100"></div>
</button>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[85] w-56 bg-[#111] border border-gray-800 rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col backdrop-blur-xl" x-show="contextOpen" x-transition.opacity.duration.200ms="">
<template x-if="contextApp?.type !== 'folder'">
<button @click="launchApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:plain-bold-duotone"></span> Open
                </button>
</template>
<template x-if="contextApp?.type === 'folder'">
<button @click="openFolder(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:folder-open-bold-duotone"></span> Open Folder
                </button>
</template>
<div className="h-px bg-gray-800 my-1 mx-2"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:pen-bold-duotone"></span> Edit
            </button>
</div>
</div>



    </>
  );
}
