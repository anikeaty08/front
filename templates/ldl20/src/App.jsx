import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.database();
        const DEFAULT_APPS = [
            { id: 'app1', name: 'Google', url: 'https://www.google.com/webhp?igu=1', icon: 'logos:google-icon', category: 'Google', index: 0 },
            { id: 'system-gallery', name: 'Photos', type: 'gallery', icon: 'solar:gallery-bold-duotone', category: 'System', index: 1 },
            { id: 'calc', name: 'Calculator', type: 'code', code: '<style>body{display:flex;justify-content:center;align-items:center;height:100%;background:#000;color:#fff;font-family:sans-serif}input{width:100%;padding:10px;margin-bottom:10px;background:#222;border:none;color:#fff;font-size:20px;text-align:right}button{width:23%;height:50px;margin:1%;border:none;border-radius:5px;font-size:18px;cursor:pointer;background:#333;color:#fff}button.op{background:#f90;color:#000}</style><div style="width:200px"><input id="d" readonly><br><button onclick="a(7)">7</button><button onclick="a(8)">8</button><button onclick="a(9)">9</button><button class="op" onclick="a(\'/\')">/</button><br><button onclick="a(4)">4</button><button onclick="a(5)">5</button><button onclick="a(6)">6</button><button class="op" onclick="a(\'*\')">*</button><br><button onclick="a(1)">1</button><button onclick="a(2)">2</button><button onclick="a(3)">3</button><button class="op" onclick="a(\'-\')">-</button><br><button onclick="a(0)">0</button><button onclick="c()">C</button><button onclick="e()">=</button><button class="op" onclick="a(\'+\')">+</button></div><script>function a(v){document.getElementById("d").value+=v}function c(){document.getElementById("d").value=""}function e(){try{document.getElementById("d").value=eval(document.getElementById("d").value)}catch{document.getElementById("d").value="Err"}}<\/script>', icon: 'solar:calculator-bold-duotone', category: 'Widget', index: 2 }
        ];

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null, authModalOpen: false, authLoading: false,
                apps: [], windows: [], galleryItems: [], pageNames: {},
                viewMode: 'grid', currentPage: 0, holisticViewOpen: false,
                time: '', date: '', 
                
                // Context & Modals
                createMenuOpen: false, contextOpen: false, contextApp: null, contextPos: {x:0,y:0},
                modalOpen: false, modalMode: 'add', modalData: {},
                viewImage: null,
                
                // Window Management State
                zCounter: 100,
                isDragging: false,
                isResizing: false,
                dragOffset: { x:0, y:0 },
                activeResizeDir: null,
                activeWinId: null,
                snapPreview: null, // {x, y, w, h} or null

                init() {
                    this.updateTime(); setInterval(() => this.updateTime(), 1000);
                    const localApps = localStorage.getItem('ldl_apps');
                    this.processApps(localApps ? JSON.parse(localApps) : DEFAULT_APPS);
                    const localGal = localStorage.getItem('ldl_gallery_v6');
                    this.galleryItems = localGal ? JSON.parse(localGal) : [];
                    
                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        if(u) {
                            db.ref(`users/${u.uid}/apps`).on('value', s => this.processApps(s.val() || DEFAULT_APPS));
                            db.ref(`users/${u.uid}/gallery_v6`).on('value', s => this.galleryItems = s.val() || []);
                        }
                    });
                },

                // --- APP LOGIC ---
                processApps(data) {
                    this.apps = data.map((a,i) => ({...a, index: a.index ?? i})).sort((a,b) => (a.page||0)-(b.page||0) || a.index-b.index);
                    this.$nextTick(() => this.initSortable());
                },
                saveApps() {
                    if(this.user) db.ref(`users/${this.user.uid}/apps`).set(this.apps);
                    else localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                },
                getAppsForPage(p) { return this.apps.filter(a => (a.page||0)===p); },
                get pageNumbers() { const m = Math.max(...this.apps.map(a=>a.page||0), 0); return Array.from({length:m+1},(_,i)=>i); },
                updateTime() { const n=new Date(); this.time=n.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}); this.date=n.toLocaleDateString('en-GB',{day:'numeric',month:'short'}); },
                
                // --- WINDOW MANAGEMENT (V23 CORE) ---
                handleAppClick(e, app) { this.launchApp(app); },
                
                launchApp(app) {
                    if(this.windows.find(w => w.appId === app.id)) {
                        const win = this.windows.find(w => w.appId === app.id);
                        this.toggleWindow(win.id);
                        return;
                    }
                    // Determine Type
                    let contentType = 'iframe';
                    if(app.type === 'folder') contentType = 'folder';
                    else if(app.type === 'gallery' || app.id === 'system-gallery') contentType = 'gallery';
                    else if(app.note || (app.attachments && app.attachments.length)) contentType = 'note';

                    // Default geometry
                    const w = Math.min(window.innerWidth * 0.9, 800);
                    const h = Math.min(window.innerHeight * 0.8, 600);
                    const x = (window.innerWidth - w) / 2 + (this.windows.length * 20);
                    const y = (window.innerHeight - h) / 2 + (this.windows.length * 20);

                    const newWin = {
                        id: Date.now(),
                        appId: app.id,
                        title: app.name,
                        icon: app.icon || 'solar:window-frame-bold-duotone',
                        contentType: contentType,
                        appData: app, // Store full app data for rendering
                        url: app.url,
                        x: x, y: y, w: w, h: h,
                        z: ++this.zCounter,
                        minimized: false,
                        maximized: false,
                        preMax: null // store geometry before maximize
                    };
                    this.windows.push(newWin);
                },

                toggleWindow(id) {
                    const win = this.windows.find(w => w.id === id);
                    if(win.minimized) {
                        win.minimized = false;
                        this.focusWindow(id);
                    } else if (win.z === this.zCounter) {
                        // If top, minimize
                        win.minimized = true;
                    } else {
                        // If not top, bring to front
                        this.focusWindow(id);
                    }
                },
                focusWindow(id) {
                    const win = this.windows.find(w => w.id === id);
                    if(win) {
                        win.z = ++this.zCounter;
                        this.activeWinId = id;
                    }
                },
                closeWindow(id) {
                    this.windows = this.windows.filter(w => w.id !== id);
                },
                maximizeWindow(win) {
                    if(win.maximized) {
                        // Restore
                        win.x = win.preMax.x; win.y = win.preMax.y; win.w = win.preMax.w; win.h = win.preMax.h;
                        win.maximized = false;
                    } else {
                        // Maximize
                        win.preMax = { x: win.x, y: win.y, w: win.w, h: win.h };
                        win.x = 0; win.y = 64; // Below Header
                        win.w = window.innerWidth; win.h = window.innerHeight - 64 - 80; // Minus header and dock space
                        win.maximized = true;
                    }
                    this.focusWindow(win.id);
                },
                minimizeWindow(id) {
                    const win = this.windows.find(w => w.id === id);
                    if(win) win.minimized = true;
                },

                // --- DRAG & RESIZE LOGIC ---
                startDrag(e, win) {
                    if(win.maximized) return;
                    this.isDragging = true;
                    this.activeWinId = win.id;
                    this.focusWindow(win.id);
                    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
                    this.dragOffset = { x: clientX - win.x, y: clientY - win.y };
                },
                startResize(e, win, dir) {
                    this.isResizing = true;
                    this.activeWinId = win.id;
                    this.activeResizeDir = dir;
                    this.focusWindow(win.id);
                    this.dragOffset = { 
                        x: e.type.includes('touch') ? e.touches[0].clientX : e.clientX,
                        y: e.type.includes('touch') ? e.touches[0].clientY : e.clientY,
                        winX: win.x, winY: win.y, winW: win.w, winH: win.h
                    };
                },
                onMouseMove(e) {
                    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

                    // DRAGGING + SNAPPING PREVIEW
                    if (this.isDragging && this.activeWinId) {
                        const win = this.windows.find(w => w.id === this.activeWinId);
                        win.x = clientX - this.dragOffset.x;
                        win.y = clientY - this.dragOffset.y;
                        
                        // Snap Logic
                        const edgeThreshold = 30;
                        const headerH = 64;
                        this.snapPreview = null;

                        if (clientY < edgeThreshold + headerH) {
                            // Top Snap (Full)
                            this.snapPreview = { x: 0, y: headerH, w: window.innerWidth, h: window.innerHeight - headerH - 80 };
                        } else if (clientX < edgeThreshold) {
                            // Left Snap (Half)
                            this.snapPreview = { x: 0, y: headerH, w: window.innerWidth/2, h: window.innerHeight - headerH - 80 };
                        } else if (clientX > window.innerWidth - edgeThreshold) {
                            // Right Snap (Half)
                            this.snapPreview = { x: window.innerWidth/2, y: headerH, w: window.innerWidth/2, h: window.innerHeight - headerH - 80 };
                        }
                    }

                    // RESIZING
                    if (this.isResizing && this.activeWinId) {
                         const win = this.windows.find(w => w.id === this.activeWinId);
                         const dx = clientX - this.dragOffset.x;
                         const dy = clientY - this.dragOffset.y;
                         
                         if(this.activeResizeDir.includes('r')) win.w = Math.max(300, this.dragOffset.winW + (clientX - this.dragOffset.x));
                         if(this.activeResizeDir.includes('b')) win.h = Math.max(200, this.dragOffset.winH + (clientY - this.dragOffset.y));
                         if(this.activeResizeDir.includes('l')) {
                             const newW = Math.max(300, this.dragOffset.winW - (clientX - this.dragOffset.x));
                             win.x = this.dragOffset.winX + (this.dragOffset.winW - newW);
                             win.w = newW;
                         }
                         if(this.activeResizeDir.includes('t')) {
                             const newH = Math.max(200, this.dragOffset.winH - (clientY - this.dragOffset.y));
                             win.y = this.dragOffset.winY + (this.dragOffset.winH - newH);
                             win.h = newH;
                         }
                    }
                },
                endResizeOrDrag() {
                    if (this.isDragging && this.snapPreview && this.activeWinId) {
                        const win = this.windows.find(w => w.id === this.activeWinId);
                        win.preMax = { x: win.x, y: win.y, w: win.w, h: win.h }; // Save state
                        win.x = this.snapPreview.x;
                        win.y = this.snapPreview.y;
                        win.w = this.snapPreview.w;
                        win.h = this.snapPreview.h;
                    }
                    this.isDragging = false;
                    this.isResizing = false;
                    this.activeWinId = null;
                    this.snapPreview = null;
                },

                // --- UTILS ---
                toggleHolistic() { this.holisticViewOpen = !this.holisticViewOpen; },
                handlePlusClick() { this.createMenuOpen = true; },
                getPageName(i) { return this.pageNames[i] || `PAGE ${i+1}`; },
                getGalleryItems(gId) { return this.galleryItems.filter(i => (i.galleryId||'system-gallery') === gId); },
                uploadToGallery(e, gId) {
                     Array.from(e.target.files).forEach(f => {
                         const r = new FileReader();
                         r.onload = (ev) => {
                             this.galleryItems.push({ id: Date.now() + Math.random(), galleryId: gId, type: f.type.startsWith('video')?'video':'image', data: ev.target.result, date: Date.now() });
                             if(this.user) db.ref(`users/${this.user.uid}/gallery_v6`).set(this.galleryItems);
                             else localStorage.setItem('ldl_gallery_v6', JSON.stringify(this.galleryItems));
                         };
                         r.readAsDataURL(f);
                     });
                },
                
                // --- SORTABLE ---
                initSortable() {
                    document.querySelectorAll('.sortable-grid').forEach(el => {
                        if(el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, {
                            group: 'apps', delay: 200, delayOnTouchOnly: true,
                            onEnd: (evt) => {
                                // Simple reorder logic for brevity
                                const fromP = parseInt(evt.from.dataset.page);
                                const toP = parseInt(evt.to.dataset.page);
                                const item = this.apps.find(a=>a.id === evt.item.dataset.id);
                                if(item) { item.page = toP; this.saveApps(); }
                            }
                        });
                    });
                },
                
                // --- CONTEXT ---
                openContext(e, app) {
                     e.preventDefault();
                     this.contextApp = app;
                     this.contextPos = { x: Math.min(e.clientX, window.innerWidth-230), y: Math.min(e.clientY, window.innerHeight-200) };
                     this.contextOpen = true;
                },
                deleteApp(app) {
                    if(confirm("Delete?")) {
                        this.apps = this.apps.filter(a => a.id !== app.id);
                        this.saveApps();
                    }
                },
                // --- CREATE/MODAL ---
                selectCreateType(t) { this.openModal('add'); this.modalData.type = t; this.createMenuOpen=false; },
                openModal(mode, data) {
                    this.modalMode = mode;
                    this.modalData = mode==='add' ? {id:'app_'+Date.now(), name:'', page:this.currentPage, index:999, type:'app'} : {...data};
                    this.modalOpen = true;
                },
                saveModal() {
                    if(this.modalMode==='add') this.apps.push(this.modalData);
                    else { const i = this.apps.findIndex(a=>a.id===this.modalData.id); if(i>-1) this.apps[i]=this.modalData; }
                    this.saveApps(); this.closeModal();
                },
                closeModal() { this.modalOpen = false; },
                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                handleProfileClick() { if(this.user) { if(confirm('Logout?')) auth.signOut(); } else this.authModalOpen=true; }
            }));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[2000] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
<div className="relative w-full max-w-sm p-8 space-y-8 text-center bg-[#111] border border-gray-800 rounded-3xl shadow-2xl">
<button @click="authModalOpen = false" className="absolute top-4 right-4 text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
<div className="space-y-2">
<div className="w-16 h-16 mx-auto rounded-[16px] bg-gradient-to-b from-gray-800 to-black border border-gray-700 flex items-center justify-center shadow-2xl">
<span className="iconify text-3xl text-white" data-icon="solar:rocket-2-bold-duotone"></span>
</div>
<h1 className="text-xl font-bold tracking-tight text-white">Sign In</h1>
</div>
<button @click="signInGoogle" className="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200">
<span className="iconify text-xl" data-icon="logos:google-icon"></span><span>Continue with Google</span>
</button>
</div>
</div>

<div className="h-full w-full relative bg-black">

<header className="fixed top-0 left-0 right-0 h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-md z-40">
<div className="flex items-center gap-4">
<h1 className="text-lg font-bold tracking-tight text-white hidden md:block">LDL15 EXPERIMENTAL <span className="text-xs text-gray-600 ml-1">v23</span></h1>
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
<button @click="handleProfileClick()" className="w-9 h-9 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img :src="user?.photoURL" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<span className="iconify text-xl text-gray-400" data-icon="solar:user-circle-bold-duotone" x-show="!user?.photoURL"></span>
</button>
</div>
</div>
</header>

<div :style={{`left: '${snapPreview.x}px', top: '${snapPreview.y}px', width: '${snapPreview.w}px', height: '${snapPreview.h}px', opacity: '${snapPreview ? 1 : 0}`'}} className="snap-zone" x-show="isDragging &amp;&amp; snapPreview"></div>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-16 pb-0 overflow-hidden">

<div :className="holisticViewOpen ? 'z-50 bg-black/40 backdrop-blur-xl overflow-y-auto p-10 pt-20 flex flex-wrap justify-center items-center gap-8' : ''" className="h-full w-full relative transition-all duration-300">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="holisticViewOpen ? 'relative w-[260px] h-[460px] md:w-[300px] md:h-[530px] rounded-3xl border border-white/10 bg-[#111] shadow-2xl cursor-pointer hover:border-indigo-500/50 hover:-translate-y-2' : 'absolute inset-0 overflow-y-auto no-scrollbar p-4 md:p-8'" @click="if(holisticViewOpen) { currentPage = pNum; holisticViewOpen = false; }" className="transition-all duration-500 ease-out" x-show="holisticViewOpen || currentPage === pNum">
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
<img :src="subApp.icon" className="w-full h-full object-cover"/>
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
<div className="ios-icon flex flex-col z-10 p-0 bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
<span :data-icon="app.icon || 'solar:gallery-bold-duotone'" className="iconify text-3xl text-gray-500"></span>
</div>
</template>

<template x-if="app.type !== 'folder' &amp;&amp; app.type !== 'gallery' &amp;&amp; app.id !== 'system-gallery'">
<div className="ios-icon app-icon-bg flex items-center justify-center z-10 relative">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-gray-200"></span>
</template>
</div>
</template>
<div className="flex flex-col items-center gap-0.5 text-center">
<span className="text-[11px] font-bold text-white tracking-tight leading-tight truncate w-20" x-text="app.name"></span>
</div>
</div>
</template>
</div>
</div>
</div>
</template>
</div>
</main>

<div className="absolute inset-0 pointer-events-none z-[50]">
<template :key="win.id" x-htmlFor="win in windows">
<div :style={{`left: '${win.x}px', top: '${win.y}px', width: '${win.w}px', height: '${win.h}px', zIndex: '${win.z}', display: '${win.minimized ? \'none\' : \'flex\'}', transform: 'scale(${win.minimized ? 0.8 : 1})', opacity: '${win.minimized ? 0 : 1}`'}} @mousedown="focusWindow(win.id)" @touchstart="focusWindow(win.id)" className="absolute flex flex-col rounded-xl overflow-hidden window-glass border border-white/10 shadow-2xl pointer-events-auto transition-transform duration-200">

<div @mousedown.stop.prevent="startResize($event, win, 'r')" className="resize-handle resize-r"></div>
<div @mousedown.stop.prevent="startResize($event, win, 'b')" className="resize-handle resize-b"></div>
<div @mousedown.stop.prevent="startResize($event, win, 'br')" className="resize-handle resize-br"></div>
<div @mousedown.stop.prevent="startResize($event, win, 'l')" className="resize-handle resize-l"></div>
<div @mousedown.stop.prevent="startResize($event, win, 't')" className="resize-handle resize-t"></div>

<div @dblclick="maximizeWindow(win)" @mousedown="startDrag($event, win)" @touchstart="startDrag($event, win)" className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center justify-between px-3 cursor-grab active:cursor-grabbing shrink-0 select-none">
<div className="flex items-center gap-2 max-w-[70%]">
<div className="flex gap-1.5 mr-2 group">
<button @click.stop="closeWindow(win.id)" className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 border border-red-600 flex items-center justify-center"><span className="iconify text-[8px] text-black opacity-0 group-hover:opacity-100" data-icon="solar:close-circle-bold"></span></button>
<button @click.stop="minimizeWindow(win.id)" className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 border border-yellow-600 flex items-center justify-center"><span className="iconify text-[8px] text-black opacity-0 group-hover:opacity-100" data-icon="solar:minimize-bold"></span></button>
<button @click.stop="maximizeWindow(win)" className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 border border-green-600 flex items-center justify-center"><span className="iconify text-[8px] text-black opacity-0 group-hover:opacity-100" data-icon="solar:maximize-bold"></span></button>
</div>
<span className="text-xs font-bold text-gray-300 truncate" x-text="win.title"></span>
</div>
</div>

<div className="flex-1 relative bg-[#0f0f0f] overflow-hidden">

<div className="absolute inset-0 z-50 bg-transparent" x-show="isDragging || isResizing"></div>

<template x-if="win.contentType === 'iframe'">
<div className="w-full h-full flex flex-col">
<template x-if="win.appData.type === 'code'">
<iframe :srcdoc="win.appData.code" className="w-full h-full border-none bg-white"></iframe>
</template>
<template x-if="win.appData.type !== 'code'">
<div className="w-full h-full relative">
<iframe :src="win.url" allow="camera; microphone; geolocation" className="w-full h-full border-none" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"></iframe>

<div className="absolute bottom-4 right-4 z-10">
<a :href="win.url" className="px-3 py-1.5 bg-black/80 backdrop-blur border border-white/20 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors" target="_blank">
<span>Open in Tab</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold"></span>
</a>
</div>
</div>
</template>
</div>
</template>

<template x-if="win.contentType === 'folder'">
<div className="w-full h-full overflow-y-auto p-4 custom-scrollbar bg-[#0a0a0a]">
<div :id="'folder-sortable-' + win.id" className="grid grid-cols-4 sm:grid-cols-5 gap-4">
<template :key="item.id" x-htmlFor="item in win.appData.items || []">
<div :data-id="item.id" @click="handleAppClick($event, item)" className="flex flex-col items-center gap-2 cursor-pointer group hover:bg-white/5 p-2 rounded-xl transition-colors">
<div className="w-12 h-12 rounded-[10px] bg-[#222] border border-gray-700 flex items-center justify-center overflow-hidden">
<template x-if="item.icon.includes('data:') || item.icon.includes('http')">
<img :src="item.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="!item.icon.includes('data:') &amp;&amp; !item.icon.includes('http')">
<span :data-icon="item.icon" className="iconify text-2xl text-white"></span>
</template>
</div>
<span className="text-[10px] text-gray-300 text-center truncate w-full" x-text="item.name"></span>
</div>
</template>
</div>
</div>
</template>

<template x-if="win.contentType === 'gallery'">
<div className="w-full h-full overflow-y-auto p-4 custom-scrollbar bg-black" x-data="{ items: getGalleryItems(win.appData.id) }">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-bold text-gray-500 uppercase" x-text="items.length + ' Items'"></span>
<label className="cursor-pointer px-3 py-1 bg-gray-800 rounded-lg text-xs font-bold hover:bg-gray-700 flex items-center gap-2">
<span className="iconify" data-icon="solar:upload-bold-duotone"></span> Upload
                                        <input @change="uploadToGallery($event, win.appData.id)" accept="image/*,video/*" className="hidden" multiple="" type="file"/>
</label>
</div>
<div className="gallery-grid">
<template :key="gItem.id" x-htmlFor="gItem in items">
<div @click="viewImage = gItem" className="aspect-square rounded-lg bg-gray-900 border border-white/10 overflow-hidden relative group cursor-pointer">
<template x-if="gItem.type === 'video'">
<video :src="gItem.data" className="w-full h-full object-cover"></video>
</template>
<template x-if="gItem.type !== 'video'">
<img :src="gItem.data" className="w-full h-full object-cover"/>
</template>
</div>
</template>
</div>
</div>
</template>

<template x-if="win.contentType === 'note'">
<div className="p-6 overflow-y-auto h-full space-y-4">
<div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-gray-200 text-sm whitespace-pre-wrap" x-text="win.appData.note"></div>
<template x-if="win.appData.attachments">
<div className="space-y-2">
<div className="text-[10px] font-bold text-gray-500 uppercase">Attachments</div>
<template x-htmlFor="file in win.appData.attachments">
<a :download="file.name" :href="file.data" className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700">
<span className="iconify text-xl text-gray-400" data-icon="solar:file-bold-duotone"></span>
<span className="text-xs text-white truncate" x-text="file.name"></span>
</a>
</template>
</div>
</template>
<button @click="window.open(win.appData.url, '_blank')" className="w-full py-2 bg-indigo-600 rounded-lg font-bold text-sm">Open Original URL</button>
</div>
</template>
</div>
</div>
</template>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-end gap-4 pointer-events-none">

<div className="pointer-events-auto dock-glass px-2 py-2 rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-2xl origin-bottom" x-show="windows.length &gt; 0">
<template :key="win.id" x-htmlFor="win in windows">
<button :className="win.minimized ? 'opacity-50 grayscale' : 'bg-white/10'" @click="toggleWindow(win.id)" className="relative group w-10 h-10 rounded-[10px] flex items-center justify-center transition-all hover:-translate-y-2 hover:scale-110">
<div className="w-full h-full rounded-[10px] overflow-hidden border border-white/10">
<template x-if="win.icon.includes('solar:') || win.icon.includes('logos:')">
<div className="w-full h-full flex items-center justify-center bg-[#222]">
<span :data-icon="win.icon" className="iconify text-xl text-white"></span>
</div>
</template>
<template x-if="!win.icon.includes('solar:') &amp;&amp; !win.icon.includes('logos:')">
<img :src="win.icon" className="w-full h-full object-cover"/>
</template>
</div>

<div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white shadow-glow"></div>

<div className="absolute -top-8 bg-gray-900 border border-gray-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity truncate max-w-[100px]" x-text="win.title"></div>
</button>
</template>

<div className="w-16"></div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] pointer-events-auto transform translate-y-1">
<button @click="toggleHolistic()" className="group relative flex items-center justify-center w-14 h-14 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
<span :className="holisticViewOpen ? 'rotate-180' : ''" :data-icon="holisticViewOpen ? 'solar:minimize-square-bold-duotone' : 'solar:widget-5-bold-duotone'" className="iconify text-2xl text-white transition-transform duration-500 relative z-10"></span>
</button>
</div>

<div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col" x-cloak="" x-show="viewImage">
<button @click="viewImage = null" className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white z-50"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
<div className="flex-1 flex items-center justify-center p-4">
<template x-if="viewImage?.type === 'video'">
<video :src="viewImage.data" autoplay="" className="max-w-full max-h-full rounded-lg" controls=""></video>
</template>
<template x-if="viewImage?.type !== 'video'">
<img :src="viewImage?.data" className="max-w-full max-h-full object-contain rounded-lg"/>
</template>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl" x-cloak="" x-show="viewMode === 'grid' &amp;&amp; !holisticViewOpen">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="currentPage === pNum ? 'bg-white w-4' : 'bg-gray-600'" @click="currentPage = pNum" className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg"></div>
</template>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4" x-cloak="" x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl">
<h2 className="text-lg font-bold text-white mb-4">Add New</h2>
<div className="grid grid-cols-2 gap-3">
<button @click="openModal('add'); createMenuOpen=false" className="p-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-center font-bold">App</button>
<button @click="selectCreateType('folder')" className="p-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-center font-bold">Folder</button>
<button @click="selectCreateType('gallery')" className="p-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-center font-bold">Gallery</button>
<button @click="selectCreateType('code')" className="p-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-center font-bold">Widget</button>
</div>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[150] w-56 bg-[#111] border border-gray-800 rounded-xl shadow-2xl py-1.5 backdrop-blur-xl" x-show="contextOpen">
<button @click="launchApp(contextApp); contextOpen=false" className="w-full px-4 py-2 text-left text-sm text-white hover:bg-indigo-600">Open Window</button>
<div className="h-px bg-gray-800 my-1"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="w-full px-4 py-2 text-left text-xs text-gray-300 hover:bg-gray-800">Edit</button>
<button @click="deleteApp(contextApp); contextOpen=false" className="w-full px-4 py-2 text-left text-xs text-red-400 hover:bg-gray-800">Delete</button>
</div>

<div className="fixed inset-0 z-[110] flex items-center justify-center p-4" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
<h2 className="text-xl font-bold mb-4" x-text="modalMode === 'add' ? 'Add Item' : 'Edit Item'"></h2>
<div className="space-y-4">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none" placeholder="Name" type="text" x-model="modalData.name"/>
<template x-if="modalData.type !== 'folder' &amp;&amp; modalData.type !== 'gallery' &amp;&amp; modalData.type !== 'code'">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none" placeholder="URL" type="url" x-model="modalData.url"/>
</template>
<template x-if="modalData.type === 'code'">
<textarea className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm font-mono focus:border-white outline-none" placeholder="HTML Code" rows="5" x-model="modalData.code"></textarea>
</template>
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none" placeholder="Icon (URL or iconify name)" type="text" x-model="modalData.icon"/>
<button @click="saveModal" className="w-full py-3 bg-white text-black font-bold rounded-xl">Save</button>
</div>
</div>
</div>
</div>


    </>
  );
}
