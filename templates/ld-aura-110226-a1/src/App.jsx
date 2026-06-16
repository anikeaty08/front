import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const firebaseConfig = {
            apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A",
            authDomain: "livedesklauncher.firebaseapp.com",
            projectId: "livedesklauncher",
            databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app",
            storageBucket: "livedesklauncher.firebasestorage.app",
            messagingSenderId: "719865623018",
            appId: "1:719865623018:web:104315b70c32db5bd4c293",
            measurementId: "G-N1XRVV5SNJ"
        };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(); const db = firebase.database();

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null, authModalOpen: false, time: '',
                email: '', password: '', isSignUp: false, authError: '',
                
                apps: [], pageNames: {}, currentPage: 0, holisticViewOpen: false,
                windows: [], activeZIndex: 100, activeWindowId: null, snapPreview: null,
                dragState: { isDragging: false, isResizing: false, id: null, type: null, startX: 0, startY: 0, initialRect: {} },
                contextOpen: false, contextApp: null, contextPos: {x:0, y:0},
                modalOpen: false, modalMode: 'add', modalTab: 'general', modalData: {},
                savedLayouts: {}, longPressTimer: null,

                init() {
                    this.updateTime(); setInterval(() => this.updateTime(), 1000);
                    
                    // Session Restoration
                    const sessionWins = localStorage.getItem('ldl_session_windows');
                    if(sessionWins) {
                        try { this.windows = JSON.parse(sessionWins); this.activeZIndex = Math.max(100, ...this.windows.map(w=>w.zIndex)) + 1; } catch(e){}
                    }
                    this.$watch('windows', val => localStorage.setItem('ldl_session_windows', JSON.stringify(val)));

                    // Auth State
                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        this.authModalOpen = false;
                        if(u) {
                            db.ref(`users/${u.uid}/apps`).on('value', s => this.processApps(s.val() || []));
                            db.ref(`users/${u.uid}/pageNames`).on('value', s => this.pageNames = s.val() || {});
                            db.ref(`users/${u.uid}/layouts`).on('value', s => this.savedLayouts = s.val() || {});
                        } else {
                            // Check local storage or load default guest apps
                            const local = localStorage.getItem('ldl_apps');
                            if(local) {
                                this.processApps(JSON.parse(local));
                            } else {
                                this.processApps([
                                    { id: 'sys_store', name: 'App Store', url: 'https://vercel.com/templates', icon: 'solar:shop-linear', type: 'app', page: 0, index: 0 },
                                    { id: 'sys_browser', name: 'Browser', url: 'https://bing.com', icon: 'solar:globe-linear', type: 'app', page: 0, index: 1 },
                                    { id: 'sys_gallery', name: 'Wallpapers', icon: 'solar:gallery-wide-linear', type: 'gallery', page: 0, index: 2, attachments: [{name:'Abs 1', url:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=60'},{name:'Abs 2', url:'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=500&q=60'}] }
                                ]);
                            }
                        }
                    });

                    this.$nextTick(() => {
                        new Sortable(document.getElementById('pages-container'), {
                            animation: 150, handle: '.handle', draggable: '.page-wrapper',
                        });
                    });
                },

                handleAuth() {
                    this.authError = '';
                    if(this.isSignUp) {
                        auth.createUserWithEmailAndPassword(this.email, this.password)
                            .then(() => { this.authModalOpen = false; this.email=''; this.password=''; })
                            .catch(e => this.authError = e.message);
                    } else {
                        auth.signInWithEmailAndPassword(this.email, this.password)
                            .then(() => { this.authModalOpen = false; this.email=''; this.password=''; })
                            .catch(e => this.authError = e.message);
                    }
                },

                processApps(data) {
                    // Ensure every app has basic properties
                    this.apps = data.map((a,i) => { 
                        if(a.index===undefined) a.index=i; 
                        if(!a.icon) a.icon = 'solar:box-linear'; // Default fallack
                        return a; 
                    }).sort((a,b)=>(a.page||0)-(b.page||0)||a.index-b.index);
                    this.$nextTick(() => this.initSortable());
                },

                updateTime() { const n=new Date(); this.time=n.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}); },
                
                get pageNumbers() { 
                    const max=Math.max(...this.apps.map(a=>a.page||0),0); 
                    return Array.from({length:max+1},(_,i)=>i); 
                },
                getPageName(i) { return this.pageNames[i] || `DESKTOP ${i+1}`; },
                getAppsForPage(p) { return this.apps.filter(a=>(a.page||0)===p).sort((a,b)=>a.index-b.index); },
                getAppById(id) { return this.apps.find(a=>a.id === id); },
                
                addPage() { const next = Math.max(...this.pageNumbers) + 1; this.currentPage = next; this.holisticViewOpen = false; },
                deletePage(pNum) {
                    if(confirm(`Delete Desktop ${pNum+1} and all its apps?`)) {
                        this.apps = this.apps.filter(a => a.page !== pNum);
                        delete this.pageNames[pNum];
                        this.saveData();
                    }
                },
                
                toggleHolistic() { this.holisticViewOpen = !this.holisticViewOpen; },

                handleAppClick(e, app) {
                    if(app.type === 'folder') { /* Folder logic */ }
                    else this.launchApp(app);
                },
                launchApp(app) {
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) { existing.minimized = false; this.focusWindow(existing.id); return; }
                    
                    const w = window.innerWidth < 768 ? window.innerWidth*0.9 : 800;
                    const h = window.innerHeight < 600 ? window.innerHeight*0.8 : 600;
                    
                    this.activeZIndex++;
                    const newWin = {
                        id: 'win_' + Date.now(), appId: app.id, title: app.name, url: app.url, icon: app.icon, 
                        type: app.type, code: app.code, attachments: app.attachments || [],
                        x: (window.innerWidth-w)/2 + (Math.random()*40), 
                        y: (window.innerHeight-h)/2 + (Math.random()*40), 
                        w: w, h: h, zIndex: this.activeZIndex, minimized: false, maximized: false, snapped: false
                    };
                    this.windows.push(newWin);
                    this.activeWindowId = newWin.id;
                },
                
                focusWindow(id) { const w=this.windows.find(x=>x.id===id); if(w) { w.zIndex = ++this.activeZIndex; this.activeWindowId = id; } },
                closeWindow(id) { this.windows = this.windows.filter(w=>w.id!==id); if(this.activeWindowId === id) this.activeWindowId = null; },
                toggleMinimize(id) { const w=this.windows.find(x=>x.id===id); if(w) { if(w.minimized) { w.minimized=false; this.focusWindow(id); } else { if(w.zIndex===this.activeZIndex) w.minimized=true; else this.focusWindow(id); } } },
                toggleMaximize(id) {
                    const w=this.windows.find(x=>x.id===id); if(!w) return;
                    if(w.maximized) { Object.assign(w, w.preMax); w.maximized=false; w.snapped=false; }
                    else { w.preMax={x:w.x,y:w.y,w:w.w,h:w.h}; w.x=0; w.y=48; w.w=window.innerWidth; w.h=window.innerHeight-48-80; w.maximized=true; w.snapped=true; }
                },

                getEventPos(e) { return e.touches ? {x:e.touches[0].clientX, y:e.touches[0].clientY} : {x:e.clientX, y:e.clientY}; },
                
                startWindowDrag(e, id) { 
                    if(e.button!==0)return; 
                    const w=this.windows.find(x=>x.id===id); if(!w||w.maximized)return; 
                    this.focusWindow(id); 
                    this.dragState={isDragging:true, id, startX:e.clientX, startY:e.clientY, initialRect:{x:w.x, y:w.y}}; 
                },
                
                startTouchDrag(e, id) {
                    const w=this.windows.find(x=>x.id===id); if(!w||w.maximized)return;
                    this.focusWindow(id);
                    const pos = this.getEventPos(e);
                    this.longPressTimer = setTimeout(() => {
                        this.dragState = {isDragging:true, id, startX:pos.x, startY:pos.y, initialRect:{x:w.x, y:w.y}};
                        if(navigator.vibrate) navigator.vibrate(50);
                    }, 500); 
                },

                startResize(e, id, type) { 
                    const w=this.windows.find(x=>x.id===id); if(!w||w.maximized)return; 
                    this.focusWindow(id); 
                    const pos = this.getEventPos(e);
                    this.dragState={isResizing:true, id, type, startX:pos.x, startY:pos.y, initialRect:{x:w.x, y:w.y, w:w.w, h:w.h}}; 
                },

                handleWindowMove(e) {
                    if (this.longPressTimer && !this.dragState.isDragging) { clearTimeout(this.longPressTimer); this.longPressTimer = null; }
                    const pos = this.getEventPos(e);

                    if(this.dragState.isDragging) {
                        if(e.preventDefault) e.preventDefault();
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            w.x = this.dragState.initialRect.x + (pos.x - this.dragState.startX);
                            w.y = this.dragState.initialRect.y + (pos.y - this.dragState.startY);
                            this.snapPreview = null; const m=20, h=48;
                            if(pos.y<h+m) this.snapPreview={x:0, y:h, w:window.innerWidth, h:window.innerHeight-h};
                            else if(pos.x<m) this.snapPreview={x:0, y:h, w:window.innerWidth/2, h:window.innerHeight-h};
                            else if(pos.x>window.innerWidth-m) this.snapPreview={x:window.innerWidth/2, y:h, w:window.innerWidth/2, h:window.innerHeight-h};
                        }
                    } else if(this.dragState.isResizing) {
                        if(e.preventDefault) e.preventDefault();
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            const dx=pos.x-this.dragState.startX, dy=pos.y-this.dragState.startY, r=this.dragState.initialRect, t=this.dragState.type;
                            if(t.includes('e')) w.w = Math.max(320, r.w+dx);
                            if(t.includes('s')) w.h = Math.max(200, r.h+dy);
                            if(t.includes('w')) { w.w = Math.max(320, r.w-dx); w.x = r.x + (r.w - w.w); }
                            if(t.includes('n')) { w.h = Math.max(200, r.h-dy); w.y = r.y + (r.h - w.h); }
                        }
                    }
                },
                handleWindowUp() {
                    if (this.longPressTimer) clearTimeout(this.longPressTimer);
                    if(this.dragState.isDragging && this.snapPreview) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) { w.preMax={x:w.x,y:w.y,w:w.w,h:w.h}; w.x=this.snapPreview.x; w.y=this.snapPreview.y; w.w=this.snapPreview.w; w.h=this.snapPreview.h; w.snapped=true; if(w.w===window.innerWidth) w.maximized=true; }
                    }
                    this.dragState={isDragging:false,isResizing:false}; this.snapPreview=null;
                },

                openContext(e, app) {
                    e.preventDefault();
                    let x = e.clientX, y = e.clientY;
                    if(x + 192 > window.innerWidth) x = window.innerWidth - 200;
                    if(y + 160 > window.innerHeight) y = window.innerHeight - 170;
                    this.contextPos = {x, y}; this.contextApp = app; this.contextOpen = true;
                },
                openModal(mode, data) { 
                    this.modalMode = mode; this.modalTab = 'general';
                    this.modalData = data ? JSON.parse(JSON.stringify(data)) : { type:'app', id: 'app_'+Date.now(), attachments: [] }; 
                    this.modalOpen = true; 
                },
                applyPreset(type) {
                    if(type === 'kanban') {
                        this.modalData.name = 'Kanban Board'; this.modalData.icon = 'solar:clipboard-list-linear'; this.modalData.type = 'code';
                        this.modalData.code = '<iframe src="https://kanban-board-demo.vercel.app/" style="width:100%;height:100%;border:none;"></iframe>';
                    }
                    if(type === 'calendar') {
                        this.modalData.name = 'Calendar'; this.modalData.icon = 'solar:calendar-linear'; this.modalData.type = 'code';
                        this.modalData.code = '<iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=UTC" style="border: 0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
                    }
                    if(type === 'todo') {
                         this.modalData.name = 'To-Do'; this.modalData.icon = 'solar:checklist-minimalistic-linear'; this.modalData.type = 'code';
                         this.modalData.code = '<div style="padding:20px; font-family:sans-serif; color:white;"><h3>Tasks</h3><ul><li>[ ] Research</li><li>[ ] Design</li></ul></div>';
                    }
                    if(type === 'gallery') {
                         this.modalData.name = 'Photos'; this.modalData.icon = 'solar:gallery-wide-linear'; this.modalData.type = 'gallery'; this.modalData.attachments = [];
                    }
                },
                closeModal() { this.modalOpen = false; },
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
                deleteApp(app) { if(confirm('Delete ' + app.name + '?')) { this.apps = this.apps.filter(a=>a.id!==app.id); this.saveData(); } },
                saveData() {
                     if(this.user) {
                        db.ref(`users/${this.user.uid}/apps`).set(this.apps);
                        db.ref(`users/${this.user.uid}/pageNames`).set(this.pageNames);
                     } else {
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                     }
                     this.$nextTick(() => this.initSortable());
                },
                
                saveLayout() {
                    const name = prompt("Name this layout:", "My Workspace");
                    if(name) {
                        this.savedLayouts[name] = JSON.parse(JSON.stringify(this.windows));
                        if(this.user) db.ref(`users/${this.user.uid}/layouts`).set(this.savedLayouts);
                        else localStorage.setItem('ldl_layouts', JSON.stringify(this.savedLayouts));
                    }
                },
                loadLayout(name) {
                    if(this.savedLayouts[name]) {
                        this.windows = JSON.parse(JSON.stringify(this.savedLayouts[name]));
                        this.activeZIndex = Math.max(100, ...this.windows.map(w=>w.zIndex)) + 1;
                    }
                },
                deleteLayout(name) {
                    if(confirm("Delete layout " + name + "?")) {
                        delete this.savedLayouts[name];
                        if(this.user) db.ref(`users/${this.user.uid}/layouts`).set(this.savedLayouts);
                        else localStorage.setItem('ldl_layouts', JSON.stringify(this.savedLayouts));
                    }
                },

                handleProfileClick() { if(this.user) { if(confirm('Sign Out?')) auth.signOut(); } else { this.authError=''; this.authModalOpen=true; } },
                initSortable() {
                     document.querySelectorAll('.sortable-grid').forEach(el => {
                        if (el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, { 
                            group: 'apps', animation: 200, delay: 200, delayOnTouchOnly: true, draggable: '.app-item',
                            onEnd: (evt) => {
                                const id = evt.item.getAttribute('data-id'), toPage = parseInt(evt.to.getAttribute('data-page'));
                                const app = this.apps.find(a=>a.id===id);
                                if(app) app.page = toPage;
                                Array.from(evt.to.children).forEach((k, i) => { const a = this.apps.find(x=>x.id===k.getAttribute('data-id')); if(a) a.index = i; });
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
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,#000000_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<header :className="holisticViewOpen ? 'translate-y-[-100%]' : 'translate-y-0'" className="fixed top-0 left-0 right-0 h-12 z-40 flex items-center justify-between px-6 border-b border-white/[0.06] bg-[#050505]/60 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center gap-4">
<div @click="toggleHolistic()" className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" icon="solar:command-linear" width="18"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">LiveDesk</span>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>

<div className="relative" x-data="{ open: false }">
<button @click="open = !open" className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors">
<iconify-icon icon="solar:layers-linear" width="14"></iconify-icon>
<span>Layouts</span>
</button>
<div @click.outside="open = false" className="absolute top-8 left-0 w-48 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-1 z-50 flex flex-col" x-cloak="" x-show="open" x-transition="">
<button @click="saveLayout(); open=false" className="text-left px-3 py-2 text-xs hover:bg-white/10 text-white/70 hover:text-white transition-colors">Save Current Layout</button>
<div className="h-[1px] bg-white/5 my-1"></div>
<template :key="name" x-htmlFor="(layout, name) in savedLayouts">
<div className="flex items-center justify-between px-3 hover:bg-white/10 group">
<button @click="loadLayout(name); open=false" className="py-2 text-xs text-left text-white/70 group-hover:text-white flex-1" x-text="name"></button>
<button @click="deleteLayout(name)" className="text-white/20 hover:text-red-400"><iconify-icon icon="solar:trash-bin-trash-linear" width="12"></iconify-icon></button>
</div>
</template>
<div className="px-3 py-2 text-[10px] text-white/30 italic" x-show="Object.keys(savedLayouts).length === 0">No saved layouts</div>
</div>
</div>
</div>
<div className="flex items-center gap-5">
<span className="text-xs font-medium tracking-tight text-white/90" x-text="time"></span>

<button @click="handleProfileClick()" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors ring-1 ring-white/10 overflow-hidden relative">
<template x-if="user &amp;&amp; user.photoURL">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover"/>
</template>
<template x-if="!user || !user.photoURL">
<iconify-icon className="text-white/70" icon="solar:user-circle-linear" width="16"></iconify-icon>
</template>

<div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-green-500 rounded-full ring-1 ring-black" x-show="user"></div>
</button>
</div>
</header>

<div className="fixed inset-0 z-[300] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen=false" className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
<div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4 text-center">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<iconify-icon className="text-white" icon="solar:lock-keyhole-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-semibold text-white tracking-tight">Access Your OS</h2>
<p className="text-xs text-white/50 mt-1">Sign in to sync your apps and layouts</p>
</div>
<form @submit.prevent="handleAuth" className="w-full space-y-3 mt-2">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 outline-none transition-colors" placeholder="Email" type="email" x-model="email"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 outline-none transition-colors" placeholder="Password" type="password" x-model="password"/>
<p className="text-[10px] text-red-400 text-left" x-show="authError" x-text="authError"></p>
<button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors" type="submit">
<span x-text="isSignUp ? 'Create Account' : 'Sign In'"></span>
</button>
</form>
<button @click="isSignUp = !isSignUp" className="text-[10px] text-white/40 hover:text-white transition-colors">
<span x-text="isSignUp ? 'Already have an account? Sign In' : 'New here? Create Account'"></span>
</button>
</div>
</div>

<div :style={{`top: '${snapPreview?.y}px', left: '${snapPreview?.x}px', width: '${snapPreview?.w}px', height: '${snapPreview?.h}px`'}} className="fixed z-[90] bg-white/[0.08] border border-white/20 backdrop-blur-md rounded-lg transition-all duration-200 pointer-events-none" x-show="snapPreview" x-transition.opacity="">
</div>
<div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
<template :key="win.id" x-htmlFor="win in windows">
<div :className="win.snapped ? 'transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]' : ''" :style={{`top: '${win.y}px', left: '${win.x}px', width: '${win.w}px', height: '${win.h}px', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" @touchstart="focusWindow(win.id)" className="absolute flex flex-col bg-[#0a0a0a] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_-12px_rgba(0,0,0,0.8)] pointer-events-auto transition-transform will-change-transform" x-show="!win.minimized">

<div @mousedown.prevent.stop="startResize($event, win.id, 'n')" className="resizer resizer-n"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'e')" className="resizer resizer-e"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 's')" className="resizer resizer-s"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'w')" className="resizer resizer-w"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'nw')" className="resizer resizer-nw"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'ne')" className="resizer resizer-ne"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'sw')" className="resizer resizer-sw"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'se')" className="resizer resizer-se"></div>

<div @dblclick="toggleMaximize(win.id)" @mousedown="startWindowDrag($event, win.id)" @touchstart="startTouchDrag($event, win.id)" className="h-10 px-4 flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a] rounded-t-lg shrink-0 select-none group/header relative">
<div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center pointer-events-none" x-show="dragState.isDragging &amp;&amp; dragState.id === win.id">
<span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Dragging</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-white/40">

<template x-if="win.icon &amp;&amp; (win.icon.includes('http') || win.icon.includes('data:'))">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-3.5 h-3.5 object-cover rounded-sm" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"/>
<iconify-icon className="hidden" icon="solar:window-frame-linear" width="14"></iconify-icon>
</template>
<template x-if="!win.icon || (!win.icon.includes('http') &amp;&amp; !win.icon.includes('data:'))">
<iconify-icon :icon="win.icon || 'solar:window-frame-linear'" width="14"></iconify-icon>
</template>
</div>
<span className="text-xs font-medium text-white/70 tracking-tight truncate max-w-[200px]" x-text="win.title"></span>
</div>
<div className="flex items-center gap-2 opacity-100 md:opacity-40 md:group-hover/header:opacity-100 transition-opacity">
<button @click.stop="win.minimized = true" className="p-1 hover:bg-white/10 rounded text-white/70 transition-colors">
<iconify-icon icon="solar:minus-circle-linear" width="14"></iconify-icon>
</button>
<button @click.stop="toggleMaximize(win.id)" className="p-1 hover:bg-white/10 rounded text-white/70 transition-colors">
<iconify-icon :icon="win.maximized ? 'solar:minimize-square-linear' : 'solar:maximize-square-linear'" width="14"></iconify-icon>
</button>
<button @click.stop="closeWindow(win.id)" className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded text-white/70 transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 bg-[#050505] relative rounded-b-lg overflow-hidden flex flex-col">
<div className="absolute inset-0 z-50 bg-transparent" x-show="dragState.isDragging || dragState.isResizing"></div>
<template x-if="win.type === 'code'">
<div className="w-full h-full bg-[#050505]">
<iframe :srcdoc="win.code" className="w-full h-full border-none" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>
</div>
</template>
<template x-if="win.type === 'gallery'">
<div className="w-full h-full bg-[#0a0a0a] p-4 overflow-y-auto custom-scrollbar">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<template :key="file.url" x-htmlFor="file in (win.attachments || [])">
<div className="group relative aspect-square bg-white/5 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-full h-full object-cover" onerror="this.style.display='none'"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
<a :href="file.url" className="text-white text-xs hover:underline truncate px-2" target="_blank" x-text="file.name"></a>
</div>
</div>
</template>
<button @click="openModal('edit', getAppById(win.appId))" className="aspect-square rounded-lg border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 text-white/20 hover:text-white hover:border-white/30 transition-all">
<iconify-icon icon="solar:gallery-add-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Add Media</span>
</button>
</div>
</div>
</template>
<template x-if="win.type !== 'code' &amp;&amp; win.type !== 'gallery'">
<div className="w-full h-full flex flex-col bg-white">
<iframe :src="win.url" className="w-full h-full border-none" loading="lazy"></iframe>
</div>
</template>
<div @mousedown.prevent.stop="startResize($event, win.id, 'se')" @touchstart.prevent.stop="startResize($event, win.id, 'se')" className="absolute bottom-0 right-0 w-6 h-6 z-50 cursor-se-resize flex items-end justify-end p-1 opacity-50 hover:opacity-100">
<svg fill="none" height="8" viewbox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8H0L8 0V8Z" fill="white"></path>
</svg>
</div>
</div>
</div>
</template>
</div>

<main @click.self="activeWindowId = null" className="absolute inset-0 pt-16 pb-24 overflow-hidden z-10">

<div :className="holisticViewOpen ? 'scale-90 opacity-100' : 'scale-100'" className="h-full w-full relative transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
<div :className="holisticViewOpen ? 'flex flex-wrap items-center justify-center gap-8 overflow-y-auto p-10' : 'relative'" className="h-full w-full" id="pages-container">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :class="holisticViewOpen 
                            ? 'relative w-[320px] h-[200px] rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-white/30 cursor-pointer group shadow-2xl shrink-0' 
                            : (currentPage === pNum ? 'absolute inset-0 overflow-y-auto custom-scrollbar px-6 md:px-12' : 'hidden absolute inset-0')" :data-page-id="pNum" className="page-wrapper transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
<div className="absolute -top-8 left-0 w-full flex items-center justify-between px-1" x-show="holisticViewOpen">
<input :value="getPageName(pNum)" @click.stop="" className="bg-transparent text-left text-[10px] font-bold uppercase tracking-widest text-white/40 focus:text-white outline-none w-24" type="text" x-model="pageNames[pNum]"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/20 cursor-move handle" icon="solar:reorder-linear"></iconify-icon>
<button @click.stop="deletePage(pNum)" className="text-white/20 hover:text-red-400 transition-colors" title="Delete Page">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div :className="holisticViewOpen ? 'w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none p-8 bg-[#050505]' : 'max-w-7xl mx-auto h-full'">
<div :data-page="pNum" className="app-grid sortable-grid">
<template :key="app.id" x-htmlFor="app in getAppsForPage(pNum)">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="group relative flex flex-col items-center gap-3 p-2 rounded-xl transition-all cursor-pointer app-item">

<div className="w-16 h-16 rounded-[18px] glass-icon flex items-center justify-center relative overflow-hidden group-hover:bg-white/10">
<div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] z-20" x-show="app.note || (app.attachments &amp;&amp; app.attachments.length)"></div>
<template x-if="app.type === 'folder'">
<div className="grid grid-cols-2 gap-1 p-3 w-full h-full opacity-70">
<template x-htmlFor="sub in (app.items || []).slice(0,4)">
<div className="bg-white/20 rounded-[2px]"></div>
</template>
<template x-if="!app.items || app.items.length===0">
<iconify-icon className="col-span-2 m-auto text-white/50" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</template>
</div>
</template>

<template x-if="app.type !== 'folder'">
<div className="text-white/80 group-hover:text-white transition-colors flex items-center justify-center w-full h-full relative">

<template x-if="app.icon &amp;&amp; (app.icon.includes('http') || app.icon.includes('data:'))">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"/>

<iconify-icon className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" icon="solar:gallery-broken-linear" width="32"></iconify-icon>
</template>

<template x-if="!app.icon || (!app.icon.includes('http') &amp;&amp; !app.icon.includes('data:'))">
<iconify-icon :icon="app.icon || 'solar:box-linear'" strokeWidth="1.5" width="32"></iconify-icon>
</template>
</div>
</template>
</div>
<span className="text-[11px] font-medium text-white/60 tracking-tight group-hover:text-white transition-colors text-center w-24 truncate" x-text="app.name"></span>
</div>
</template>
</div>
</div>
<div @click="currentPage = pNum; holisticViewOpen = false" className="absolute inset-0 z-10" x-show="holisticViewOpen"></div>
</div>
</template>
<button @click="addPage()" className="w-[320px] h-[200px] shrink-0 rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 text-white/20 hover:text-white/60 hover:border-white/20 transition-all group" x-show="holisticViewOpen">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">New Desktop</span>
</button>
</div>
</div>
</main>

<div :className="holisticViewOpen ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
<div className="flex items-center p-2 bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] gap-1">
<button @click="openModal('add', { type: 'app', id: 'app_'+Date.now() })" className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all tooltip-trigger relative">
<iconify-icon icon="solar:widget-add-linear" width="20"></iconify-icon>
</button>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<div className="flex items-center gap-1">
<template :key="win.id" x-htmlFor="win in windows">
<button :className="!win.minimized ? 'bg-white/10 shadow-inner text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'" @click="toggleMinimize(win.id)" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all relative group overflow-hidden">
<template x-if="win.icon &amp;&amp; (win.icon.includes('http') || win.icon.includes('data:'))">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 p-1 rounded-lg" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"/>
<iconify-icon className="hidden" icon="solar:window-frame-linear" width="18"></iconify-icon>
</template>
<template x-if="!win.icon || (!win.icon.includes('http') &amp;&amp; !win.icon.includes('data:'))">
<iconify-icon :icon="win.icon || 'solar:window-frame-linear'" width="18"></iconify-icon>
</template>
<div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full shadow-[0_0_6px_white]" x-show="!win.minimized"></div>
</button>
</template>
<div className="text-[10px] text-white/20 font-medium px-2 uppercase tracking-widest" x-show="windows.length === 0">Idle</div>
</div>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<div className="flex items-center gap-2 px-2">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<button :className="currentPage === pNum ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'w-1.5 bg-white/20 hover:bg-white/40'" @click="currentPage = pNum" className="h-1.5 rounded-full transition-all duration-300"></button>
</template>
</div>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<button @click="toggleHolistic()" className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[200] w-48 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] py-1.5 overflow-hidden" x-cloak="" x-show="contextOpen" x-transition.opacity.duration.150ms="">
<div className="px-3 py-2 border-b border-white/5 mb-1 bg-white/[0.02]">
<div className="text-[11px] font-semibold text-white/90 truncate" x-text="contextApp?.name"></div>
<div className="text-[9px] text-white/40 uppercase tracking-wider font-medium" x-text="contextApp?.type"></div>
</div>
<button @click="launchApp(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-white/80 hover:bg-blue-600 hover:text-white flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon> Launch
        </button>
<button @click="openModal('edit', contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon> Properties
        </button>
<div className="h-[1px] bg-white/5 my-1 mx-2"></div>
<button @click="deleteApp(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon> Remove
        </button>
</div>

<div className="fixed inset-0 z-[210] flex items-center justify-center p-4" x-cloak="" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/60 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
<h2 className="text-xs font-semibold text-white tracking-tight uppercase" x-text="modalMode === 'add' ? 'New Item' : 'Edit Item'"></h2>
<div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5">
<template x-htmlFor="tab in ['general', 'notes', 'files']">
<button :className="modalTab === tab ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'" @click="modalTab = tab" className="px-3 py-1 text-[10px] font-medium rounded-md transition-all uppercase tracking-wide">
<span x-text="tab"></span>
</button>
</template>
</div>
</div>
<div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
<div className="space-y-5" x-show="modalTab === 'general'">
<div className="relative" x-data="{ open: false }" x-show="modalMode === 'add'">
<button @click="open=!open" className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/70 hover:text-white transition-colors">
<span>Load a Preset (Optional)</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div @click.outside="open=false" className="absolute top-full left-0 w-full mt-1 bg-[#111] border border-white/10 rounded-lg z-50 shadow-xl" x-cloak="" x-show="open">
<button @click="applyPreset('kanban'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Planning: Kanban Board</button>
<button @click="applyPreset('calendar'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Planning: Calendar</button>
<button @click="applyPreset('todo'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Planning: To-Do List</button>
<button @click="applyPreset('gallery'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Media: Photo Gallery</button>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
<template x-if="modalData.icon &amp;&amp; (modalData.icon.includes('http') || modalData.icon.includes('data:'))">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover"/>
</template>
<template x-if="!modalData.icon || (!modalData.icon.includes('http') &amp;&amp; !modalData.icon.includes('data:'))">
<iconify-icon :icon="modalData.icon || 'solar:box-linear'" className="text-white/60" width="28"></iconify-icon>
</template>
</div>
<div className="flex-1 space-y-3">
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors placeholder-white/20" placeholder="My App" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Icon (Solar Name or URL)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors placeholder-white/20" placeholder="solar:rocket-linear OR https://..." type="text" x-model="modalData.icon"/>
</div>
</div>
</div>
<div className="h-[1px] bg-white/5"></div>
<div className="space-y-4">
<template x-if="modalData.type !== 'folder' &amp;&amp; modalData.type !== 'code' &amp;&amp; modalData.type !== 'gallery'">
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Target URL</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors font-mono" placeholder="https://..." type="text" x-model="modalData.url"/>
</div>
</template>
<template x-if="modalData.type === 'code'">
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">HTML Embed Code</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white focus:border-white/20 outline-none transition-colors font-mono custom-scrollbar" placeholder="&lt;div&gt;Widget content...&lt;/div&gt;" rows="5" x-model="modalData.code"></textarea>
</div>
</template>
<template x-if="modalMode === 'add'">
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Item Type</label>
<div className="grid grid-cols-4 gap-2">
<button :className="modalData.type === 'app' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'app'" className="py-2 rounded-lg border text-xs font-medium transition-colors">App</button>
<button :className="modalData.type === 'folder' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'folder'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Folder</button>
<button :className="modalData.type === 'code' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'code'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Widget</button>
<button :className="modalData.type === 'gallery' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'gallery'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Gallery</button>
</div>
</div>
</template>
</div>
</div>
<div className="h-full" x-show="modalTab === 'notes'">
<textarea className="w-full h-48 bg-white/5 border border-white/10 rounded-lg p-4 text-xs text-white/80 focus:border-white/20 outline-none resize-none leading-relaxed" placeholder="Write personal notes here..." x-model="modalData.note"></textarea>
</div>
<div className="space-y-3" x-show="modalTab === 'files'">
<p className="text-[10px] text-white/40 uppercase tracking-wider mb-2" x-show="modalData.type==='gallery'">Image URLs</p>
<template :key="idx" x-htmlFor="(file, idx) in (modalData.attachments || [])">
<div className="flex gap-2 items-center p-2 rounded-lg bg-white/5 border border-white/5 group">
<iconify-icon :icon="modalData.type==='gallery'?'solar:gallery-wide-linear':'solar:link-linear'" className="text-white/40"></iconify-icon>
<input className="flex-1 bg-transparent text-xs text-white outline-none" placeholder="Name" type="text" x-model="file.name"/>
<input className="w-1/3 bg-transparent text-[10px] text-white/40 outline-none text-right" placeholder="URL" type="text" x-model="file.url"/>
<button @click="modalData.attachments.splice(idx, 1)" className="text-white/20 hover:text-red-400"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</template>
<button @click="(modalData.attachments = modalData.attachments || []).push({name:'', url:''})" className="w-full py-2 border border-dashed border-white/10 rounded-lg text-xs text-white/40 hover:text-white hover:border-white/30 transition-colors">+ Add Item</button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-[#0f0f0f] flex justify-end">
<button @click="saveModal" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">Save Changes</button>
</div>
</div>
</div>


    </>
  );
}
