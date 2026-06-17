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



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293", measurementId: "G-N1XRVV5SNJ" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(); const db = firebase.database();

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                // Auth & Core
                user: null, authModalOpen: false, email: '', password: '', time: '', date: '',
                
                // App Data
                apps: [], pageNames: {}, 
                currentPage: 0, holisticViewOpen: false,

                // Windows
                windows: [], activeZIndex: 100, snapPreview: null,
                dragState: { isDragging: false, isResizing: false, id: null, type: null, startX: 0, startY: 0, initialRect: {} },

                // UI States
                createMenuOpen: false, contextOpen: false, contextApp: null, contextPos: {x:0, y:0},
                modalOpen: false, modalMode: 'add', modalTab: 'general', modalData: {},

                init() {
                    this.updateTime(); setInterval(() => this.updateTime(), 1000);
                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        if(u) {
                            db.ref(`users/${u.uid}/apps`).on('value', s => this.processApps(s.val() || []));
                            db.ref(`users/${u.uid}/pageNames`).on('value', s => this.pageNames = s.val() || {});
                        } else {
                            const local = localStorage.getItem('ldl_apps');
                            this.processApps(local ? JSON.parse(local) : []);
                        }
                    });
                },

                processApps(data) {
                    if(!data || data.length === 0) data = [{ id: 'sys_store', name: 'App Store', url: 'https://google.com', icon: 'solar:shop-bold-duotone', category: 'System', index: 0 }];
                    this.apps = data.map((a,i) => { if(a.index===undefined) a.index=i; return a; }).sort((a,b)=>(a.page||0)-(b.page||0)||a.index-b.index);
                    this.$nextTick(() => this.initSortable());
                },

                updateTime() { const n=new Date(); this.time=n.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}); this.date=n.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}); },
                
                // Pages
                get pageNumbers() { const max=Math.max(...this.apps.map(a=>a.page||0),0); return Array.from({length:max+1},(_,i)=>i); },
                getPageName(i) { return this.pageNames[i] || `Page ${i+1}`; },
                getAppsForPage(p) { return this.apps.filter(a=>(a.page||0)===p).sort((a,b)=>a.index-b.index); },
                addPage() { const next = Math.max(...this.pageNumbers) + 1; this.currentPage = next; this.holisticViewOpen = false; },
                toggleHolistic() { this.holisticViewOpen = !this.holisticViewOpen; },

                // Interactions
                handleAppClick(e, app) {
                    if(app.type === 'folder') { /* Expand Logic Could Go Here, handled by CSS hover mostly or separate modal */ }
                    else this.launchApp(app);
                },
                launchApp(app) {
                    if(app.launchMode === 'internal' || app.type === 'code') this.openWindow(app);
                    else window.open(app.url, '_blank');
                },
                openContext(e, app) {
                    e.preventDefault(); e.stopPropagation();
                    let x = e.clientX, y = e.clientY;
                    if(x + 208 > window.innerWidth) x = window.innerWidth - 220;
                    if(y + 200 > window.innerHeight) y = window.innerHeight - 210;
                    this.contextPos = {x, y}; this.contextApp = app; this.contextOpen = true;
                },

                // Modals
                selectCreateType(type) { 
                    this.createMenuOpen = false; 
                    this.openModal('add', { type: type, id: 'item_'+Date.now(), name: '', launchMode: type==='code'?'internal':'external', attachments: [] }); 
                },
                openModal(mode, data) { 
                    this.modalMode = mode; this.modalTab = 'general';
                    this.modalData = data ? JSON.parse(JSON.stringify(data)) : { type:'app', id: 'app_'+Date.now(), attachments: [] }; 
                    if(!this.modalData.attachments) this.modalData.attachments = [];
                    this.modalOpen = true; 
                },
                closeModal() { this.modalOpen = false; },
                addAttachment() { this.modalData.attachments.push({name: 'New Link', url: ''}); },
                saveModal() {
                    if(this.modalMode === 'add') {
                        this.modalData.page = this.currentPage;
                        this.modalData.index = this.apps.filter(a=>(a.page||0)===this.currentPage).length;
                        this.apps.push(this.modalData);
                    } else {
                        const idx = this.apps.findIndex(a=>a.id===this.modalData.id);
                        if(idx>-1) this.apps[idx] = this.modalData;
                    }
                    this.saveData(); this.closeModal();
                },
                deleteApp(app) { if(confirm('Delete?')) { this.apps = this.apps.filter(a=>a.id!==app.id); this.saveData(); } },
                saveData() {
                     if(this.user) {
                        db.ref(`users/${this.user.uid}/apps`).set(this.apps);
                        db.ref(`users/${this.user.uid}/pageNames`).set(this.pageNames);
                     } else {
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                     }
                     this.$nextTick(() => this.initSortable());
                },

                // Windows
                openWindow(app) {
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) { existing.minimized = false; this.focusWindow(existing.id); return; }
                    const w = window.innerWidth < 768 ? window.innerWidth*0.9 : 800, h = window.innerHeight < 600 ? window.innerHeight*0.8 : 600;
                    this.activeZIndex++;
                    this.windows.push({
                        id: 'win_' + Date.now(), appId: app.id, title: app.name, url: app.url, icon: app.icon, type: app.type, code: app.code,
                        x: (window.innerWidth-w)/2 + (this.windows.length*20), y: (window.innerHeight-h)/2 + (this.windows.length*20), w: w, h: h, zIndex: this.activeZIndex, minimized: false, maximized: false
                    });
                },
                focusWindow(id) { const w=this.windows.find(x=>x.id===id); if(w) w.zIndex = ++this.activeZIndex; },
                closeWindow(id) { this.windows = this.windows.filter(w=>w.id!==id); },
                toggleMinimize(id) { const w=this.windows.find(x=>x.id===id); if(w) { if(w.minimized) { w.minimized=false; this.focusWindow(id); } else { if(w.zIndex===this.activeZIndex) w.minimized=true; else this.focusWindow(id); } } },
                toggleMaximize(id) {
                    const w=this.windows.find(x=>x.id===id); if(!w) return;
                    if(w.maximized) { Object.assign(w, w.preMax); w.maximized=false; w.snapped=false; }
                    else { w.preMax={x:w.x,y:w.y,w:w.w,h:w.h}; w.x=0; w.y=56; w.w=window.innerWidth; w.h=window.innerHeight-56-80; w.maximized=true; w.snapped=true; }
                },

                // Window Drag/Resize
                startWindowDrag(e, id) { if(e.button!==0)return; const w=this.windows.find(x=>x.id===id); if(!w||w.maximized)return; this.focusWindow(id); this.dragState={isDragging:true, id, startX:e.clientX, startY:e.clientY, initialRect:{x:w.x, y:w.y}}; },
                startResize(e, id, type) { if(e.button!==0)return; e.stopPropagation(); const w=this.windows.find(x=>x.id===id); if(!w||w.maximized)return; this.focusWindow(id); this.dragState={isResizing:true, id, type, startX:e.clientX, startY:e.clientY, initialRect:{x:w.x, y:w.y, w:w.w, h:w.h}}; },
                handleWindowMove(e) {
                    if(this.dragState.isDragging) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            w.x = this.dragState.initialRect.x + (e.clientX - this.dragState.startX);
                            w.y = this.dragState.initialRect.y + (e.clientY - this.dragState.startY);
                            this.snapPreview = null; const m=20, h=56;
                            if(e.clientY<h+m) this.snapPreview={x:0, y:h, w:window.innerWidth, h:window.innerHeight-h};
                            else if(e.clientX<m) this.snapPreview={x:0, y:h, w:window.innerWidth/2, h:window.innerHeight-h};
                            else if(e.clientX>window.innerWidth-m) this.snapPreview={x:window.innerWidth/2, y:h, w:window.innerWidth/2, h:window.innerHeight-h};
                        }
                    } else if(this.dragState.isResizing) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            const dx=e.clientX-this.dragState.startX, dy=e.clientY-this.dragState.startY, r=this.dragState.initialRect, t=this.dragState.type;
                            if(t.includes('e')) w.w = Math.max(300, r.w+dx);
                            if(t.includes('s')) w.h = Math.max(200, r.h+dy);
                            if(t.includes('w')) { w.w = Math.max(300, r.w-dx); w.x = r.x + (r.w - w.w); }
                            if(t.includes('n')) { w.h = Math.max(200, r.h-dy); w.y = r.y + (r.h - w.h); }
                        }
                    }
                },
                handleWindowUp() {
                    if(this.dragState.isDragging && this.snapPreview) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) { w.preMax={x:w.x,y:w.y,w:w.w,h:w.h}; w.x=this.snapPreview.x; w.y=this.snapPreview.y; w.w=this.snapPreview.w; w.h=this.snapPreview.h; w.snapped=true; if(w.w===window.innerWidth) w.maximized=true; }
                    }
                    this.dragState={isDragging:false,isResizing:false}; this.snapPreview=null;
                },

                // Auth & Setup
                handleProfileClick() { if(this.user) { if(confirm('Log out?')) auth.signOut(); } else this.authModalOpen=true; },
                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                
                initSortable() {
                     document.querySelectorAll('.sortable-grid').forEach(el => {
                        if (el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, { group: 'apps', animation: 200, delay: 200, draggable: '.app-item',
                            onEnd: (evt) => {
                                const id = evt.item.getAttribute('data-id'), toPage = parseInt(evt.to.getAttribute('data-page'));
                                const app = this.apps.find(a=>a.id===id);
                                if(app) app.page = toPage;
                                const kids = Array.from(evt.to.children);
                                kids.forEach((k, i) => { const a = this.apps.find(x=>x.id===k.getAttribute('data-id')); if(a) a.index = i; });
                                this.saveData();
                            }
                        });
                    });
                }
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
      

<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black -z-10"></div>

<div className="fixed inset-0 z-[200] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm p-8 space-y-8 text-center bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<button @click="authModalOpen = false" className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
<div className="space-y-2">
<div className="w-16 h-16 mx-auto rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl shadow-white/10">
<span className="iconify text-3xl" data-icon="solar:lock-keyhole-minimalistic-bold-duotone"></span>
</div>
<h1 className="text-xl font-bold tracking-tight text-white">Authenticate</h1>
</div>
<div className="space-y-4">
<button @click="signInGoogle" className="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
<span className="iconify text-xl" data-icon="logos:google-icon"></span>
<span>Continue with Google</span>
</button>
</div>
</div>
</div>

<header :className="holisticViewOpen ? 'bg-transparent pointer-events-none opacity-0' : 'bg-transparent'" className="fixed top-0 left-0 right-0 h-14 px-5 flex items-center justify-between z-40 transition-all duration-300">
<div className="flex items-center gap-4">
<div className="text-sm font-bold tracking-tighter flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                LDL15 <span className="opacity-50 font-normal">OS</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right leading-tight hidden sm:block">
<div className="text-sm font-bold text-white tracking-tight" x-text="time"></div>
<div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide" x-text="date"></div>
</div>
<button @click="handleProfileClick()" className="relative group">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 overflow-hidden ring-offset-2 ring-offset-black transition-all hover:ring-2 ring-white/20">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center" x-show="!user?.photoURL">
<span className="iconify text-gray-400" data-icon="solar:user-circle-bold"></span>
</div>
</div>
</button>
</div>
</header>

<div :style={{`top: '${snapPreview?.y}px', left: '${snapPreview?.x}px', width: '${snapPreview?.w}px', height: '${snapPreview?.h}px`'}} className="fixed z-[90] bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl transition-all duration-200 ease-out pointer-events-none" x-show="snapPreview" x-transition.opacity=""></div>
<div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
<template :key="win.id" x-htmlFor="win in windows">
<div :className="win.snapped ? 'transition-all duration-300' : ''" :style={{`top: '${win.y}px', left: '${win.x}px', width: '${win.w}px', height: '${win.h}px', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" className="absolute bg-[#111] border border-gray-800 rounded-xl shadow-2xl flex flex-col pointer-events-auto transition-transform" x-show="!win.minimized">

<div @mousedown.prevent.stop="startResize($event, win.id, 'n')" className="resizer resizer-n"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'e')" className="resizer resizer-e"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 's')" className="resizer resizer-s"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'w')" className="resizer resizer-w"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'nw')" className="resizer resizer-nw"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'ne')" className="resizer resizer-ne"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'sw')" className="resizer resizer-sw"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'se')" className="resizer resizer-se"></div>

<div @dblclick="toggleMaximize(win.id)" @mousedown="startWindowDrag($event, win.id)" className="h-10 px-3 flex items-center justify-between border-b border-white/5 bg-[#161616] rounded-t-xl shrink-0 cursor-default select-none group">
<div className="flex items-center gap-3">
<div className="flex gap-2 group-hover:opacity-100 opacity-60 transition-opacity">
<button @click.stop="closeWindow(win.id)" className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10"></button>
<button @click.stop="win.minimized = true" className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10"></button>
<button @click.stop="toggleMaximize(win.id)" className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10"></button>
</div>
<div className="flex items-center gap-2 pl-2 border-l border-white/5 ml-1">
<span className="text-xs font-semibold text-gray-400 truncate max-w-[200px]" x-text="win.title"></span>
</div>
</div>
</div>

<div className="flex-1 bg-black overflow-hidden relative rounded-b-xl">
<div className="absolute inset-0 z-50 bg-transparent" x-show="dragState.isDragging || dragState.isResizing"></div>
<template x-if="win.type !== 'code'">
<iframe :src="win.url" allow="microphone; camera; clipboard-write; geolocation" className="w-full h-full border-none" loading="lazy"></iframe>
</template>
<template x-if="win.type === 'code'">
<iframe :srcdoc="win.code" className="w-full h-full border-none bg-white"></iframe>
</template>
</div>
</div>
</template>
</div>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-14 pb-0 overflow-hidden">

<div :className="holisticViewOpen ? 'scale-100 bg-black/80 backdrop-blur-xl z-50' : 'scale-100'" className="h-full w-full relative transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
<div :className="holisticViewOpen ? 'flex flex-wrap items-center justify-center gap-8 overflow-y-auto p-10 pt-20' : 'relative'" className="h-full w-full">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :class="holisticViewOpen 
                            ? 'relative w-[280px] h-[500px] rounded-3xl border border-white/10 bg-[#111] shadow-2xl cursor-pointer hover:-translate-y-4 hover:border-white/30 hover:shadow-indigo-500/20 group' 
                            : (currentPage === pNum ? 'absolute inset-0 overflow-y-auto no-scrollbar' : 'hidden absolute inset-0')" @click="if(holisticViewOpen) { currentPage = pNum; holisticViewOpen = false; }" className="transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">

<div className="absolute -top-10 left-0 w-full text-center transition-all duration-300 group-hover:-translate-y-1" x-show="holisticViewOpen">
<input :value="getPageName(pNum)" @click.stop="" className="bg-transparent text-center text-xs font-bold text-gray-500 uppercase tracking-widest outline-none focus:text-white" placeholder="Page Name" type="text" x-model="pageNames[pNum]"/>
</div>

<div :className="holisticViewOpen ? 'w-[360%] h-[360%] origin-top-left scale-[0.277] pointer-events-none p-10 pt-20' : 'max-w-7xl mx-auto min-h-full p-4 md:p-8'">

<div :data-page="pNum" className="app-grid sortable-grid">
<template :key="app.id" x-htmlFor="app in getAppsForPage(pNum)">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="relative flex flex-col items-center gap-2 rounded-xl transition-all cursor-pointer touch-manipulation group select-none app-item">

<div :className="app.type === 'folder' ? (app.bgColor || 'bg-[#1c1c1e] backdrop-blur-md') : 'app-icon-bg'" className="ios-icon flex flex-col z-10">

<div className="absolute top-1.5 right-1.5 flex gap-1 z-20">
<div className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm border border-black/20" x-show="app.note"></div>
<div className="w-2 h-2 rounded-full bg-blue-400 shadow-sm border border-black/20" x-show="app.attachments?.length"></div>
</div>

<template x-if="app.type === 'folder'">
<div className="folder-mini-grid">
<template :key="subApp.id" x-htmlFor="subApp in (app.items || []).slice(0, 9)">
<div className="w-full h-full rounded-[3px] overflow-hidden bg-white/10 flex items-center justify-center">
<template x-if="subApp.icon.includes('data:') || subApp.icon.includes('http')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover"/>
</template>
<template x-if="!subApp.icon.includes('data:') &amp;&amp; !subApp.icon.includes('http')">
<span :data-icon="subApp.icon" className="iconify text-[10px] text-white"></span>
</template>
</div>
</template>
</div>
</template>

<template x-if="app.type !== 'folder'">
<div className="w-full h-full flex items-center justify-center">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-[32px] text-gray-200"></span>
</template>

<div className="absolute bottom-1 right-1 opacity-50" x-show="app.launchMode === 'internal' || app.type === 'code'">
<span className="iconify text-[10px] text-white" data-icon="solar:window-frame-bold"></span>
</div>
</div>
</template>
</div>
<div className="flex flex-col items-center gap-0.5 text-center w-full">
<span className="text-[11px] font-semibold text-white tracking-tight leading-tight truncate w-20 shadow-black drop-shadow-md" x-text="app.name"></span>
</div>
</div>
</template>
</div>
</div>
</div>
</template>

<button @click="addPage()" className="w-[280px] h-[500px] rounded-3xl border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-colors gap-4" x-show="holisticViewOpen">
<span className="iconify text-4xl" data-icon="solar:add-circle-bold-duotone"></span>
<span className="text-sm font-medium uppercase tracking-wider">New Page</span>
</button>
</div>
</div>
</main>

<div :className="holisticViewOpen ? 'translate-y-32 opacity-0' : ''" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] flex items-end gap-3 transition-all duration-500">

<div className="flex items-center gap-1 p-1.5 bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/5">

<button @click="createMenuOpen = true" className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 group relative">
<span className="iconify text-xl" data-icon="solar:add-square-bold-duotone"></span>
<div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-black text-white text-[10px] px-2 py-1 rounded border border-white/10 transition-opacity">Add</div>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>

<div className="flex items-center gap-1 px-1" x-show="windows.length &gt; 0">
<template :key="win.id" x-htmlFor="win in windows">
<button :className="win.minimized ? 'opacity-50 hover:bg-white/5' : 'bg-white/10 shadow-inner'" @click="toggleMinimize(win.id)" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all relative group">
<span :className="win.minimized ? 'text-gray-400' : 'text-white'" :data-icon="win.icon || 'solar:window-frame-bold-duotone'" className="iconify text-lg"></span>

<div className="absolute -bottom-1 w-1 h-1 bg-white/50 rounded-full" x-show="!win.minimized"></div>

<div className="absolute -top-12 bg-black/90 backdrop-blur-md text-[10px] font-medium text-white px-2 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity truncate max-w-[120px]" x-text="win.title"></div>
</button>
</template>
<div className="w-px h-6 bg-white/10 mx-1"></div>
</div>

<div className="flex items-center gap-1.5 px-2">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<button :className="currentPage === pNum ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-2 bg-gray-600 hover:bg-gray-400'" @click="currentPage = pNum" className="h-2 rounded-full transition-all duration-300"></button>
</template>
</div>
<div className="w-px h-6 bg-white/10 mx-1"></div>

<button @click="toggleHolistic()" className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white group relative">
<span className="iconify text-xl" data-icon="solar:widget-5-bold-duotone"></span>
<div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-black text-white text-[10px] px-2 py-1 rounded border border-white/10 transition-opacity whitespace-nowrap">Page View</div>
</button>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[200] w-52 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1" x-show="contextOpen" x-transition.opacity.duration.200ms="">
<div className="px-3 py-2 border-b border-white/5 mb-1">
<div className="text-xs font-bold text-white truncate" x-text="contextApp?.name"></div>
<div className="text-[10px] text-gray-500 uppercase" x-text="contextApp?.type"></div>
</div>
<button @click="launchApp(contextApp); contextOpen=false" className="w-full px-3 py-1.5 text-left text-xs text-white hover:bg-blue-600 flex items-center gap-2 group">
<span className="iconify opacity-70 group-hover:opacity-100" data-icon="solar:play-bold"></span> Open
        </button>
<button @click="openModal('edit', contextApp); contextOpen=false" className="w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/10 flex items-center gap-2">
<span className="iconify opacity-70" data-icon="solar:pen-bold"></span> Edit / Info
        </button>
<div className="h-px bg-white/10 my-1"></div>
<button @click="deleteApp(contextApp); contextOpen=false" className="w-full px-3 py-1.5 text-left text-xs text-red-400 hover:bg-red-500/10 flex items-center gap-2">
<span className="iconify opacity-70" data-icon="solar:trash-bin-trash-bold"></span> Delete
        </button>
</div>

<div className="fixed inset-0 z-[210] flex items-center justify-center p-4" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="scale-100 opacity-100" x-transition:enter-start="scale-95 opacity-0">

<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#141414]">
<h2 className="text-sm font-bold text-white uppercase tracking-wider" x-text="modalMode === 'add' ? 'Create New' : 'Edit Properties'"></h2>
<div className="flex gap-1 bg-black/50 p-1 rounded-lg">
<button :className="modalTab === 'general' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'general'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all">GENERAL</button>
<button :className="modalTab === 'notes' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'notes'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1">
                        NOTES <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" x-show="modalData.note"></span>
</button>
<button :className="modalTab === 'files' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'files'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1">
                        FILES <span className="w-1.5 h-1.5 rounded-full bg-blue-500" x-show="modalData.attachments?.length"></span>
</button>
</div>
</div>

<div className="overflow-y-auto p-6 custom-scrollbar h-full">

<div className="space-y-5" x-show="modalTab === 'general'">

<div className="flex gap-4">
<div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
<template x-if="modalData.icon &amp;&amp; (modalData.icon.includes('data:') || modalData.icon.includes('http'))">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover"/>
</template>
<template x-if="!modalData.icon || (!modalData.icon.includes('data:') &amp;&amp; !modalData.icon.includes('http'))">
<span :data-icon="modalData.icon || 'solar:question-circle-bold-duotone'" className="iconify text-3xl text-gray-500"></span>
</template>
</div>
<div className="flex-1 space-y-3">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">App Name</label>
<input className="input-dark" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">Icon (URL or Iconify)</label>
<input className="input-dark" placeholder="solar:rocket-bold" type="text" x-model="modalData.icon"/>
</div>
</div>
</div>

<template x-if="modalData.type !== 'folder'">
<div>
<template x-if="modalData.type !== 'code'">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">Destination URL</label>
<input className="input-dark" type="url" x-model="modalData.url"/>
</div>
</template>
<template x-if="modalData.type === 'code'">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">Embed Code (HTML/JS)</label>
<textarea className="input-dark font-mono text-xs" rows="8" x-model="modalData.code"></textarea>
</div>
</template>
</div>
</template>

<template x-if="modalData.type !== 'folder' &amp;&amp; modalData.type !== 'code'">
<div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
<div className="text-xs text-gray-300">Open in Window Mode</div>
<button :className="modalData.launchMode === 'internal' ? 'bg-indigo-500' : 'bg-gray-700'" @click="modalData.launchMode = modalData.launchMode === 'internal' ? 'external' : 'internal'" className="w-10 h-6 rounded-full transition-colors relative">
<div :className="modalData.launchMode === 'internal' ? 'translate-x-4' : ''" className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
</button>
</div>
</template>

<template x-if="modalData.type === 'folder'">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block">Folder Tint</label>
<div className="flex gap-2">
<template x-htmlFor="col in ['bg-[#1c1c1e]', 'bg-gray-800', 'bg-blue-900', 'bg-purple-900', 'bg-red-900', 'bg-green-900']">
<div :className="[col, modalData.bgColor === col ? 'border-white' : 'border-transparent']" @click="modalData.bgColor = col" className="w-8 h-8 rounded-full cursor-pointer border-2 transition-transform hover:scale-110"></div>
</template>
</div>
</div>
</template>
</div>

<div className="h-full" x-show="modalTab === 'notes'">
<label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block">Personal Notes</label>
<textarea className="w-full h-[200px] bg-[#1a1a1a] border border-[#333] rounded-xl p-4 text-sm text-gray-200 focus:border-indigo-500 outline-none resize-none leading-relaxed" placeholder="Type your notes here..." x-model="modalData.note"></textarea>
<p className="text-[10px] text-gray-500 mt-2">Notes are saved automatically with this app.</p>
</div>

<div className="space-y-4" x-show="modalTab === 'files'">
<div className="flex justify-between items-end">
<label className="text-[10px] text-gray-500 font-bold uppercase block">Attached Links</label>
<button @click="addAttachment()" className="text-xs text-indigo-400 hover:text-white font-bold">+ Add Link</button>
</div>
<div className="space-y-2">
<template :key="idx" x-htmlFor="(file, idx) in modalData.attachments">
<div className="flex gap-2 items-center p-2 rounded-lg bg-white/5 border border-white/5 group">
<div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-400">
<span className="iconify" data-icon="solar:link-circle-bold"></span>
</div>
<div className="flex-1 space-y-1">
<input className="w-full bg-transparent text-xs text-white outline-none border-b border-transparent focus:border-gray-600" placeholder="Name" type="text" x-model="file.name"/>
<input className="w-full bg-transparent text-[10px] text-gray-500 outline-none border-b border-transparent focus:border-gray-600" placeholder="https://" type="text" x-model="file.url"/>
</div>
<button @click="modalData.attachments.splice(idx, 1)" className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-white px-2">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</template>
<div className="text-center py-8 text-gray-600 text-xs border border-dashed border-white/10 rounded-xl" x-show="!modalData.attachments || modalData.attachments.length === 0">
                            No attachments yet.
                        </div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-[#141414]">
<button @click="saveModal" className="w-full py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-lg">Save Changes</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[200] flex items-center justify-center p-4" x-cloak="" x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-90">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-bold text-white">Create New</h2>
<button @click="createMenuOpen = false" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="grid grid-cols-1 gap-3">
<button @click="selectCreateType('app')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white"><span className="iconify text-xl" data-icon="solar:widget-add-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Application</div><div className="text-[10px] text-gray-500">Link or Web App</div></div>
</button>
<button @click="selectCreateType('folder')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white"><span className="iconify text-xl" data-icon="solar:folder-with-files-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Folder</div><div className="text-[10px] text-gray-500">Group items</div></div>
</button>
<button @click="selectCreateType('code')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white"><span className="iconify text-xl" data-icon="solar:code-circle-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Widget</div><div className="text-[10px] text-gray-500">HTML/JS Embed</div></div>
</button>
</div>
</div>
</div>


    </>
  );
}
