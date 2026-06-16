import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293", measurementId: "G-N1XRVV5SNJ" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(); const db = firebase.database();
        const DEFAULT_APPS = [ { id: 'keep', name: 'Google Keep', url: 'https://keep.google.com/u/0/', icon: 'logos:google-keep', category: 'Google', index: 0 }, { id: 'drive', name: 'Google Drive', url: 'https://drive.google.com/drive/u/0/my-drive', icon: 'solar:cloud-bold-duotone', category: 'Google', index: 1 }, { id: 'notebooklm', name: 'NotebookLM', url: 'https://notebooklm.google.com/?authuser=4', icon: 'solar:book-2-bold-duotone', category: 'Google', index: 2 }, { id: 'aura-ldl3b', name: 'Aura ldl3b', url: 'https://www.aura.build/editor/4da1e71e-d62d-42b1-ab9b-99e503ddaaa1', icon: 'solar:magic-wand-bold-duotone', category: 'Aura', index: 3 }, { id: 'livedesklauncher', name: 'Livedesklauncher', url: 'https://ldl3b.aura.build/', icon: 'solar:rocket-2-bold-duotone', category: 'Aura', index: 4 }, { id: 'system-gallery', name: 'Photos', url: '#gallery', icon: 'solar:gallery-bold-duotone', category: 'System', index: 12 }, { id: 'virtual-look-3', name: 'Virtual Look 3', url: '#virtual-look', icon: 'solar:hanger-2-bold-duotone', category: 'Virtual', index: 13 } ];
        
        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null, loading: true, authLoading: false, authModalOpen: false, email: '', password: '', authError: '',
                apps: [], pageNames: {}, galleryItems: [], viewMode: 'grid', currentPage: 0, time: '', date: '',
                holisticViewOpen: false,
                galleryOpen: false, activeGalleryId: null,
                noteViewerOpen: false, viewingNoteApp: null,
                createMenuOpen: false, contextOpen: false, contextApp: null, contextPos: { x: 0, y: 0 },
                modalOpen: false, modalMode: 'add', modalData: {},
                categoryColors: { 'Google': 'text-sky-400', 'Aura': 'text-purple-400', 'System': 'text-white', 'default': 'text-gray-500' },
                
                // WINDOW MANAGEMENT STATE
                windows: [],
                activeWindowId: null,
                zCounter: 100,
                dragState: { isDragging: false, isResizing: false, targetId: null, startX: 0, startY: 0, initialX: 0, initialY: 0, initialW: 0, initialH: 0, resizeDir: '', snapZone: null },

                init() {
                    this.updateTime(); setInterval(() => this.updateTime(), 1000);
                    const local = localStorage.getItem('ldl_apps'); this.processApps(local ? JSON.parse(local) : DEFAULT_APPS);
                    const localPages = localStorage.getItem('ldl_pages'); this.pageNames = localPages ? JSON.parse(localPages) : {};
                    const localGallery = localStorage.getItem('ldl_gallery_v6'); this.galleryItems = localGallery ? JSON.parse(localGallery) : [];
                    auth.onAuthStateChanged(u => { this.user = u; this.loading = false; if(u) { db.ref(`users/${u.uid}/apps`).on('value', s => this.processApps(s.val() || DEFAULT_APPS)); db.ref(`users/${u.uid}/pageNames`).on('value', s => this.pageNames = s.val() || {}); db.ref(`users/${u.uid}/gallery_v6`).on('value', s => this.galleryItems = s.val() || []); }});
                },
                processApps(data) {
                    this.apps = data.map((a, i) => { if(a.index === undefined) a.index = i; return a; }).sort((a,b) => (a.page||0)-(b.page||0) || a.index - b.index);
                    this.$nextTick(() => this.initSortable());
                },
                updateTime() { const n = new Date(); this.time = n.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}); this.date = n.toLocaleDateString('en-GB',{day:'numeric',month:'short'}); },
                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                async signInEmail() { this.authLoading=true; try{ await auth.signInWithEmailAndPassword(this.email,this.password); }catch{ try{ await auth.createUserWithEmailAndPassword(this.email,this.password); }catch(e){this.authError=e.message;} } this.authLoading=false; },
                handleProfileClick() { if(this.user && confirm('Log out?')) auth.signOut(); else if(!this.user) this.authModalOpen = true; },
                get pageNumbers() { return [...new Set(this.apps.map(a=>a.page||0)),0].sort((a,b)=>a-b); },
                getPageName(i) { return this.pageNames[i] || `PAGE ${i+1}`; },
                getAppsForPage(p) { return this.apps.filter(a => (a.page||0)===p); },
                
                // --- WINDOW MANAGEMENT ---
                createWindow(app) {
                    if(!app) return;
                    if(app.type === 'folder') return; // Folders not supported in window mode yet
                    const existing = this.windows.find(w => w.appId === app.id);
                    if(existing) { this.focusWindow(existing.id); return; }
                    
                    this.zCounter++;
                    const w = window.innerWidth; const h = window.innerHeight;
                    const width = Math.min(800, w * 0.8);
                    const height = Math.min(600, h * 0.7);
                    
                    const newWin = {
                        id: 'win_' + Date.now(),
                        appId: app.id,
                        title: app.name,
                        icon: app.icon,
                        type: app.type || (app.url.startsWith('#') ? 'internal' : 'external'),
                        url: app.url,
                        data: app.code, // for code widgets
                        x: (w - width) / 2 + (this.windows.length * 20),
                        y: (h - height) / 2 + (this.windows.length * 20),
                        width: width,
                        height: height,
                        zIndex: this.zCounter,
                        minimized: false,
                        maximized: false,
                        prevRect: null
                    };
                    this.windows.push(newWin);
                    this.activeWindowId = newWin.id;
                },
                focusWindow(id) {
                    const w = this.windows.find(x => x.id === id);
                    if(w) {
                        w.minimized = false;
                        this.zCounter++;
                        w.zIndex = this.zCounter;
                        this.activeWindowId = id;
                    }
                },
                toggleWindowFromDock(id) {
                    const w = this.windows.find(x => x.id === id);
                    if(!w) return;
                    if(w.minimized) { this.focusWindow(id); }
                    else if(this.activeWindowId === id) { this.minimizeWindow(id); }
                    else { this.focusWindow(id); }
                },
                minimizeWindow(id) {
                    const w = this.windows.find(x => x.id === id);
                    if(w) { w.minimized = true; this.activeWindowId = null; }
                },
                closeWindow(id) {
                    this.windows = this.windows.filter(w => w.id !== id);
                },
                closeAllWindows() {
                    this.windows = [];
                },
                toggleMaximize(id) {
                    const w = this.windows.find(x => x.id === id);
                    if(!w) return;
                    if(!w.maximized) {
                        w.prevRect = { x: w.x, y: w.y, width: w.width, height: w.height };
                        w.x = 0; w.y = 0; w.width = window.innerWidth; w.height = window.innerHeight - 80; // Leave space for dock
                        w.maximized = true;
                    } else {
                        if(w.prevRect) {
                            w.x = w.prevRect.x; w.y = w.prevRect.y; w.width = w.prevRect.width; w.height = w.prevRect.height;
                        }
                        w.maximized = false;
                    }
                },
                // Drag & Snap
                startDrag(e, id) {
                    const w = this.windows.find(x => x.id === id);
                    if(w.maximized) return; // Can't drag maximized
                    this.focusWindow(id);
                    this.dragState = { isDragging: true, isResizing: false, targetId: id, startX: e.clientX, startY: e.clientY, initialX: w.x, initialY: w.y, snapZone: null };
                },
                startResize(e, id, dir) {
                    const w = this.windows.find(x => x.id === id);
                    this.focusWindow(id);
                    this.dragState = { isDragging: false, isResizing: true, targetId: id, startX: e.clientX, startY: e.clientY, initialW: w.width, initialH: w.height, initialX: w.x, initialY: w.y, resizeDir: dir };
                },
                handleWindowDrag(e) {
                    if(!this.dragState.isDragging && !this.dragState.isResizing) return;
                    const w = this.windows.find(x => x.id === this.dragState.targetId);
                    if(!w) return;
                    
                    if(this.dragState.isDragging) {
                        const dx = e.clientX - this.dragState.startX;
                        const dy = e.clientY - this.dragState.startY;
                        w.x = this.dragState.initialX + dx;
                        w.y = this.dragState.initialY + dy;
                        
                        // Snap Logic
                        const screenW = window.innerWidth; const screenH = window.innerHeight;
                        const zone = 20;
                        if(e.clientX < zone) this.dragState.snapZone = 'left';
                        else if(e.clientX > screenW - zone) this.dragState.snapZone = 'right';
                        else if(e.clientY < zone) this.dragState.snapZone = 'top';
                        else if(e.clientY > screenH - zone) this.dragState.snapZone = 'bottom';
                        else this.dragState.snapZone = null;
                        
                    } else if(this.dragState.isResizing) {
                         const dx = e.clientX - this.dragState.startX;
                         const dy = e.clientY - this.dragState.startY;
                         if(this.dragState.resizeDir.includes('e')) w.width = Math.max(300, this.dragState.initialW + dx);
                         if(this.dragState.resizeDir.includes('s')) w.height = Math.max(200, this.dragState.initialH + dy);
                    }
                },
                stopWindowDrag(e) {
                    if(this.dragState.isDragging && this.dragState.snapZone) {
                        const w = this.windows.find(x => x.id === this.dragState.targetId);
                        const sW = window.innerWidth; const sH = window.innerHeight;
                        w.prevRect = { x: w.x, y: w.y, width: w.width, height: w.height }; // Save state before snap
                        
                        switch(this.dragState.snapZone) {
                            case 'left': w.x = 0; w.y = 0; w.width = sW / 2; w.height = sH - 80; break;
                            case 'right': w.x = sW / 2; w.y = 0; w.width = sW / 2; w.height = sH - 80; break;
                            case 'top': w.x = 0; w.y = 0; w.width = sW; w.height = sH / 2; break;
                            case 'bottom': w.x = 0; w.y = sH / 2; w.width = sW; w.height = (sH / 2) - 80; break;
                        }
                    }
                    this.dragState = { isDragging: false, isResizing: false, targetId: null, snapZone: null };
                },
                getSnapPreviewStyle() {
                    const sW = window.innerWidth; const sH = window.innerHeight;
                    switch(this.dragState.snapZone) {
                        case 'left': return `left: 4px; top: 4px; width: ${sW/2-8}px; height: ${sH-88}px`;
                        case 'right': return `left: ${sW/2+4}px; top: 4px; width: ${sW/2-8}px; height: ${sH-88}px`;
                        case 'top': return `left: 4px; top: 4px; width: ${sW-8}px; height: ${sH/2-8}px`;
                        case 'bottom': return `left: 4px; top: ${sH/2+4}px; width: ${sW-8}px; height: ${sH/2-88}px`;
                        default: return 'display: none';
                    }
                },

                // GENERAL APP LOGIC
                handleAppClick(e, app) { this.launchApp(app); },
                launchApp(app) {
                    if(app.type === 'folder') return;
                    if(app.note || (app.attachments && app.attachments.length)) { this.viewingNoteApp = app; this.noteViewerOpen = true; return; }
                    window.open(app.url, '_blank');
                },
                getGalleryPreviews(id) { return this.galleryItems.filter(i=>(i.galleryId||'system-gallery')===(id==='system-gallery'?'system-gallery':id)).slice(0,9); },
                openContext(e, app) {
                    e.preventDefault(); let x = e.clientX, y = e.clientY;
                    if(x+240>window.innerWidth) x=window.innerWidth-240; if(y+260>window.innerHeight) y=window.innerHeight-260;
                    this.contextPos = {x,y}; this.contextApp = app; this.contextOpen = true;
                },
                handlePlusClick() { this.createMenuOpen = true; },
                selectCreateType(type) {
                    this.createMenuOpen = false; this.modalMode = 'add';
                    const idx = this.apps.filter(a=>(a.page||0)===this.currentPage).length;
                    if(type==='app') this.modalData = { id:'app_'+Date.now(), type:'app', name:'', url:'', icon:'', page:this.currentPage, index:idx };
                    if(type==='code') this.modalData = { id:'code_'+Date.now(), type:'code', name:'', code:'', icon:'solar:code-circle-bold-duotone', page:this.currentPage, index:idx };
                    if(type==='folder') this.modalData = { id:'folder_'+Date.now(), type:'folder', name:'', items:[], bgColor:'bg-[#1a1a1a]', page:this.currentPage, index:idx };
                    if(type==='gallery') this.modalData = { id:'gallery_'+Date.now(), type:'gallery', name:'', icon:'solar:gallery-bold-duotone', page:this.currentPage, index:idx };
                    this.modalOpen = true;
                },
                openModal(mode, data) { this.modalMode = mode; this.modalData = JSON.parse(JSON.stringify(data)); this.modalOpen = true; },
                closeModal() { this.modalOpen = false; },
                saveModal() {
                    if(!this.modalData.name) return;
                    if(this.modalMode==='add') this.apps.push(this.modalData);
                    else { const idx = this.apps.findIndex(a=>a.id===this.modalData.id); if(idx>-1) this.apps[idx]=this.modalData; }
                    if(this.user) db.ref(`users/${this.user.uid}/apps`).set(this.apps); else localStorage.setItem('ldl_apps',JSON.stringify(this.apps));
                    this.closeModal(); this.$nextTick(()=>this.initSortable());
                },
                deleteApp(app) { if(confirm('Delete?')) { this.apps=this.apps.filter(a=>a.id!==app.id); if(this.user) db.ref(`users/${this.user.uid}/apps`).set(this.apps); else localStorage.setItem('ldl_apps',JSON.stringify(this.apps)); } },
                initSortable() {
                    document.querySelectorAll('.sortable-grid').forEach(el => {
                        if(el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, { group:'apps', animation:250, delay:200, draggable:'.app-item',
                        onEnd: (evt) => {
                            const appId = evt.item.getAttribute('data-id'); const toPage = parseInt(evt.to.getAttribute('data-page'));
                            const app = this.apps.find(a=>a.id===appId); if(app) app.page = toPage;
                            this.saveModal(); // Quick save trigger
                        }});
                    });
                }
            }));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[120] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm p-8 space-y-8 text-center bg-[#111] border border-gray-800 rounded-3xl shadow-2xl">
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
<h1 className="text-lg font-bold tracking-tight text-white hidden md:block">LDL15 EXPERIMENTAL <span className="text-xs text-gray-600 ml-1">v23</span></h1>
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
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center font-bold text-xs" x-show="!user?.photoURL" x-text="user?.email?.[0].toUpperCase()"></div>
</div>
<div className="w-9 h-9 rounded-full bg-gray-800 overflow-hidden border border-white/10 flex items-center justify-center hover:bg-gray-700 transition-colors" x-show="!user">
<span className="iconify text-xl text-gray-400" data-icon="solar:user-circle-bold-duotone"></span>
</div>
</button>
</div>
</div>
</header>

<div :style={{}} className="snap-preview" x-show="dragState.snapZone"></div>

<div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
<template :key="win.id" x-htmlFor="win in windows">
<div :style={{`left: '${win.x}px', top: '${win.y}px', width: '${win.width}px', height: '${win.height}px', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" className="window-frame pointer-events-auto flex flex-col" x-show="!win.minimized">

<div @dblclick="toggleMaximize(win.id)" @mousedown="startDrag($event, win.id)" className="h-10 bg-[#161616] border-b border-white/5 flex items-center justify-between px-3 shrink-0 select-none cursor-grab active:cursor-grabbing">
<div className="flex items-center gap-2 overflow-hidden">
<div className="w-4 h-4 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
<template x-if="win.icon.includes('data:') || win.icon.includes('http')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover rounded-[2px]"/>
</template>
<template x-if="!win.icon.includes('data:') &amp;&amp; !win.icon.includes('http')">
<span :data-icon="win.icon" className="iconify text-[10px] text-white"></span>
</template>
</div>
<span className="text-xs font-bold text-gray-300 truncate" x-text="win.title"></span>
</div>
<div @mousedown.stop="" className="flex items-center gap-1.5">
<button @click.stop="minimizeWindow(win.id)" className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500 border border-yellow-500/50 transition-colors"></button>
<button @click.stop="toggleMaximize(win.id)" className="w-3 h-3 rounded-full bg-green-500/20 hover:bg-green-500 border border-green-500/50 transition-colors"></button>
<button @click.stop="closeWindow(win.id)" className="w-3 h-3 rounded-full bg-red-500/20 hover:bg-red-500 border border-red-500/50 transition-colors"></button>
</div>
</div>

<div className="flex-1 bg-black/50 relative overflow-hidden">

<div className="absolute inset-0 z-50 bg-transparent" x-show="dragState.isDragging || dragState.isResizing"></div>

<template x-if="win.type === 'app' || win.type === 'external'">
<iframe :src="win.url" allow="camera; microphone; geolocation" className="w-full h-full border-none"></iframe>
</template>

<template x-if="win.type === 'code'">
<iframe :srcdoc="win.data" className="w-full h-full border-none bg-white"></iframe>
</template>

<template x-if="win.type === 'gallery'">
<div className="w-full h-full overflow-y-auto p-2">
<div className="gallery-grid">
<template :key="item.id" x-htmlFor="item in getGalleryPreviews(win.appId)">
<div className="aspect-square rounded-lg bg-gray-900 border border-white/10 overflow-hidden relative">
<template x-if="item.type === 'video'">
<video :src="item.data" className="w-full h-full object-cover opacity-80"></video>
</template>
<template x-if="item.type !== 'video'">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=200'" className="w-full h-full object-cover"/>
</template>
</div>
</template>
</div>
</div>
</template>
</div>

<div @mousedown.stop.prevent="startResize($event, win.id, 'e')" className="window-resizer wr-r"></div>
<div @mousedown.stop.prevent="startResize($event, win.id, 's')" className="window-resizer wr-b"></div>
<div @mousedown.stop.prevent="startResize($event, win.id, 'se')" className="window-resizer wr-br"></div>
</div>
</template>
</div>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-16 pb-0 overflow-hidden">

<div className="h-full w-full relative" x-show="viewMode === 'grid'" x-transition.opacity="">
<div :className="holisticViewOpen ? 'z-30 bg-black/40 backdrop-blur-xl overflow-y-auto p-10 pt-20 flex flex-wrap justify-center items-center gap-8' : ''" className="h-full w-full relative transition-all duration-300">
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
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-full h-full object-cover"/>
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
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" @error="$el.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover opacity-90"/>
</template>
<template x-if="item.type === 'video'">
<div className="w-full h-full flex items-center justify-center bg-gray-800">
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
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-gray-200"></span>
</template>
</div>
</template>
<div className="flex flex-col items-center gap-0.5 text-center">
<span className="text-[11px] font-bold text-white tracking-tight leading-tight truncate w-20" x-text="app.name"></span>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[9px] font-medium uppercase leading-none truncate w-20" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : (app.type === 'code' ? 'Widget' : (app.category || 'App')))"></span>
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
<template x-if="app.type !== 'folder'">
<div className="relative w-full h-full flex items-center justify-center">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-xl text-white"></span>
</template>
</div>
</template>
</div>
<div className="flex-grow min-w-0">
<h3 className="font-bold text-white truncate text-sm" x-text="app.name"></h3>
<p className="text-xs text-gray-500 truncate" x-text="app.category || 'App'"></p>
</div>
</div>
</template>
</div>
</div>
</main>

<div className="fixed inset-0 z-[110] flex items-center justify-center p-4" x-cloak="" x-show="noteViewerOpen">
<div @click="noteViewerOpen = false" className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative w-full max-w-md bg-[#161616] border border-gray-700 rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
<div className="p-6 border-b border-gray-700 bg-gray-900/50 flex items-center gap-4">
<div className="flex-1 min-w-0"><h2 className="text-lg font-bold text-white truncate" x-text="viewingNoteApp?.name"></h2></div>
<button @click="noteViewerOpen = false" className="text-gray-400 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
<button @click="window.open(viewingNoteApp?.url, '_blank')" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg">
<span className="iconify text-lg" data-icon="solar:link-circle-bold"></span> Open Application
                    </button>
<div className="space-y-2" x-show="viewingNoteApp?.note">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Note</div>
<div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-gray-200 text-sm whitespace-pre-wrap leading-relaxed" x-text="viewingNoteApp?.note"></div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4" x-cloak="" x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-bold text-white">Create New</h2>
<button @click="createMenuOpen = false" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="grid grid-cols-1 gap-3">
<button @click="selectCreateType('app')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all text-left group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:widget-add-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Application</div><div className="text-[10px] text-gray-500">Add a link or app icon</div></div>
</button>
<button @click="selectCreateType('folder')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all text-left group">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:folder-with-files-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Folder</div><div className="text-[10px] text-gray-500">Group apps together</div></div>
</button>
<button @click="selectCreateType('gallery')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all text-left group">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:gallery-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Gallery</div><div className="text-[10px] text-gray-500">Media collection</div></div>
</button>
<button @click="selectCreateType('code')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all text-left group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:code-circle-bold-duotone"></span></div>
<div><div className="font-bold text-sm text-white">Code Widget</div><div className="text-[10px] text-gray-500">Custom HTML/JS</div></div>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[120] flex items-center justify-center p-4" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
<div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
<h2 className="text-xl font-bold text-white" x-text="modalMode === 'add' ? 'Add Item' : 'Edit Item'"></h2>
<button @click="closeModal" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="overflow-y-auto p-6 space-y-5 custom-scrollbar">
<template x-if="modalData.type === 'folder'">
<div className="space-y-4">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" placeholder="Folder Name" type="text" x-model="modalData.name"/>
<div className="grid grid-cols-5 gap-2 mt-2">
<template x-htmlFor="col in ['bg-[#1a1a1a]', 'bg-gray-800', 'bg-blue-900', 'bg-purple-900', 'bg-red-900']">
<div :className="[col, modalData.bgColor === col ? 'border-white' : 'border-transparent']" @click="modalData.bgColor = col" className="aspect-square rounded-lg cursor-pointer border-2 !bg-opacity-50"></div>
</template>
</div>
</div>
</template>
<template x-if="modalData.type !== 'folder'">
<div className="space-y-4">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" placeholder="Name" type="text" x-model="modalData.name"/>
<template x-if="modalData.type === 'code'">
<textarea className="w-full bg-gray-900 border border-purple-500/30 rounded-xl px-4 py-3 text-sm font-mono text-gray-300 outline-none" placeholder="HTML/JS Code" rows="6" x-model="modalData.code"></textarea>
</template>
<template x-if="modalData.type !== 'code'">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" placeholder="URL" type="url" x-model="modalData.url"/>
</template>
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" placeholder="Iconify Icon or Image URL" type="text" x-model="modalData.icon"/>
</div>
</template>
</div>
<div className="p-6 pt-2 border-t border-gray-800">
<button @click="saveModal" className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">Save</button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-0 right-0 z-[60] flex flex-col items-center justify-end gap-3 pointer-events-none" x-cloak="" x-show="viewMode === 'grid'">

<div className="pointer-events-auto flex items-end gap-2 p-2 bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl mb-2 transition-all duration-300" x-show="windows.length &gt; 0">
<template :key="win.id" x-htmlFor="win in windows">
<button :className="(activeWindowId === win.id &amp;&amp; !win.minimized) ? 'bg-indigo-600 border-indigo-500' : 'bg-gray-800 border-white/5 hover:bg-gray-700'" @click="toggleWindowFromDock(win.id)" className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all group border">
<div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center p-1">
<template x-if="win.icon.includes('data:') || win.icon.includes('http')">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover rounded-md"/>
</template>
<template x-if="!win.icon.includes('data:') &amp;&amp; !win.icon.includes('http')">
<span :data-icon="win.icon" className="iconify text-xl text-white"></span>
</template>
</div>
<div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" x-show="!win.minimized"></div>
</button>
</template>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<button @click="closeAllWindows" className="w-8 h-8 rounded-lg flex items-center justify-center text-red-400 hover:bg-white/10 transition-colors">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>

<div className="pointer-events-auto flex gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl transition-all duration-300" x-show="!holisticViewOpen">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="currentPage === pNum ? 'bg-white w-4 shadow-white/50' : 'bg-gray-600 hover:bg-gray-400'" @click="currentPage = pNum" className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center"></div>
</template>
</div>

<button @click="toggleHolistic()" className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
<span :className="holisticViewOpen ? 'rotate-180' : ''" :data-icon="holisticViewOpen ? 'solar:minimize-square-bold-duotone' : 'solar:widget-5-bold-duotone'" className="iconify text-2xl text-white transition-transform duration-500 relative z-10"></span>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[130] w-60 bg-[#111] border border-gray-800 rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col backdrop-blur-xl" x-show="contextOpen" x-transition.opacity.duration.200ms="">
<template x-if="contextApp?.type !== 'folder'">
<button @click="launchApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:plain-bold-duotone"></span> Open
                </button>

<button @click="createWindow(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:window-frame-bold-duotone"></span> Open as Window
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
<button @click="deleteApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-900/20 hover:text-red-300 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:trash-bin-trash-bold-duotone"></span> Delete
            </button>
</div>
</div>


    </>
  );
}
