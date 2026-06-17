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
        const auth = firebase.auth();
        const db = firebase.database();

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null,
                authModalOpen: false,
                authEmail: '',
                authPassword: '',
                authError: '',
                time: '',
                date: '',
                apps: [],
                pageNames: {},
                currentPage: 0,
                holisticViewOpen: false,
                windows: [],
                activeZIndex: 100,
                snapPreview: null,
                dragState: { isDragging: false, isResizing: false, id: null, type: null, startX: 0, startY: 0, initialRect: {} },
                createMenuOpen: false,
                contextOpen: false,
                contextApp: null,
                contextPos: {x:0, y:0},
                modalOpen: false,
                modalMode: 'add',
                modalTab: 'general',
                modalData: {},
                touchStartY: 0,

                init() {
                    this.updateTime();
                    setInterval(() => this.updateTime(), 1000);
                    
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
                    if(!data || data.length === 0) {
                        data = [
                            { id: 'sys_1', name: 'Google', url: 'https://www.google.com/webhp?igu=1', icon: 'logos:google-icon', type: 'app', launchMode: 'internal', page: 0, index: 0 },
                            { id: 'sys_2', name: 'App Store', url: 'https://vercel.com', icon: 'solar:shop-bold-duotone', type: 'app', launchMode: 'external', page: 0, index: 1 }
                        ];
                    }
                    this.apps = data.map((a,i) => { if(a.index===undefined) a.index=i; return a; })
                        .sort((a,b)=>(a.page||0)-(b.page||0)||a.index-b.index);
                    this.$nextTick(() => this.initSortable());
                },

                updateTime() {
                    const n=new Date();
                    this.time=n.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
                    this.date=n.toLocaleDateString('en-GB',{weekday:'short', day:'numeric', month:'short'});
                },

                get pageNumbers() {
                    const max = this.apps.length ? Math.max(...this.apps.map(a=>a.page||0),0) : 0;
                    return Array.from({length:max+1},(_,i)=>i);
                },

                getPageName(i) { return this.pageNames[i] || `Page ${i+1}`; },
                getAppsForPage(p) { return this.apps.filter(a=>(a.page||0)===p).sort((a,b)=>a.index-b.index); },
                
                addPage() {
                    const next = Math.max(...this.pageNumbers) + 1;
                    this.currentPage = next;
                    this.holisticViewOpen = false;
                },

                toggleHolistic() { this.holisticViewOpen = !this.holisticViewOpen; },

                handleTouchStart(e) { this.touchStartY = e.touches[0].clientY; },
                handleTouchEnd(e) {
                    if(this.touchStartY - e.changedTouches[0].clientY > 100) this.holisticViewOpen = true; 
                    if(this.holisticViewOpen && e.changedTouches[0].clientY - this.touchStartY > 100) this.holisticViewOpen = false;
                },

                handleAppClick(e, app) {
                    if(this.holisticViewOpen) return;
                    if(app.type === 'folder') {
                        alert('Folder expansion would happen here');
                    } else {
                        this.launchApp(app);
                    }
                },

                launchApp(app) {
                    if(app.launchMode === 'internal' || app.type === 'code') this.openWindow(app);
                    else window.open(app.url, '_blank');
                },

                openContext(e, app) {
                    e.preventDefault(); e.stopPropagation();
                    let x = e.clientX, y = e.clientY;
                    if(x + 224 > window.innerWidth) x = window.innerWidth - 230;
                    if(y + 200 > window.innerHeight) y = window.innerHeight - 210;
                    this.contextPos = {x, y}; this.contextApp = app; this.contextOpen = true;
                },

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
                
                handleIconUpload(e) {
                    const file = e.target.files[0];
                    if(!file) return;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.modalData.icon = e.target.result;
                    };
                    reader.readAsDataURL(file);
                },

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

                deleteApp(app) { 
                    if(confirm('Delete ' + app.name + '?')) { 
                        this.apps = this.apps.filter(a=>a.id!==app.id); 
                        this.saveData(); 
                    } 
                },

                saveData() {
                     if(this.user) {
                        db.ref(`users/${this.user.uid}/apps`).set(this.apps);
                        db.ref(`users/${this.user.uid}/pageNames`).set(this.pageNames);
                     } else {
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                     }
                     this.$nextTick(() => this.initSortable());
                },

                // Windows Logic
                openWindow(app) {
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) { existing.minimized = false; this.focusWindow(existing.id); return; }
                    
                    const w = window.innerWidth < 768 ? window.innerWidth*0.9 : 900;
                    const h = window.innerHeight < 600 ? window.innerHeight*0.8 : 600;
                    this.activeZIndex++;
                    
                    this.windows.push({
                        id: 'win_' + Date.now(),
                        appId: app.id,
                        title: app.name,
                        url: app.url,
                        icon: app.icon,
                        type: app.type,
                        code: app.code,
                        x: (window.innerWidth-w)/2 + (this.windows.length*20),
                        y: (window.innerHeight-h)/2 + (this.windows.length*20),
                        w: w, h: h,
                        zIndex: this.activeZIndex,
                        minimized: false, maximized: false, snapped: false
                    });
                },

                focusWindow(id) { const w=this.windows.find(x=>x.id===id); if(w) w.zIndex = ++this.activeZIndex; },
                closeWindow(id) { this.windows = this.windows.filter(w=>w.id!==id); },
                
                toggleMinimize(id) { 
                    const w=this.windows.find(x=>x.id===id); 
                    if(w) { 
                        if(w.minimized) { w.minimized=false; this.focusWindow(id); } 
                        else { 
                            if(w.zIndex===this.activeZIndex) w.minimized=true; 
                            else this.focusWindow(id); 
                        } 
                    } 
                },

                toggleMaximize(id) {
                    const w=this.windows.find(x=>x.id===id); if(!w) return;
                    if(w.maximized) {
                        Object.assign(w, w.preMax); w.maximized=false; w.snapped=false;
                    } else {
                        w.preMax={x:w.x,y:w.y,w:w.w,h:w.h};
                        w.x=0; w.y=48; w.w=window.innerWidth; w.h=window.innerHeight-48; // Adjust for header
                        w.maximized=true; w.snapped=true;
                    }
                    this.focusWindow(id);
                },

                startWindowDrag(e, id) {
                    if(e.button!==0)return;
                    const w=this.windows.find(x=>x.id===id);
                    if(!w||w.maximized)return;
                    this.focusWindow(id);
                    this.dragState={isDragging:true, id, startX:e.clientX, startY:e.clientY, initialRect:{x:w.x, y:w.y}};
                },

                startResize(e, id, type) {
                    if(e.button!==0)return;
                    e.stopPropagation();
                    const w=this.windows.find(x=>x.id===id);
                    if(!w||w.maximized)return;
                    this.focusWindow(id);
                    this.dragState={isResizing:true, id, type, startX:e.clientX, startY:e.clientY, initialRect:{x:w.x, y:w.y, w:w.w, h:w.h}};
                },

                handleWindowMove(e) {
                    if(this.dragState.isDragging) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            w.x = this.dragState.initialRect.x + (e.clientX - this.dragState.startX);
                            w.y = this.dragState.initialRect.y + (e.clientY - this.dragState.startY);
                            
                            // Snap Preview Logic
                            this.snapPreview = null;
                            const m=10, h=48;
                            if(e.clientY < h+m) this.snapPreview={x:0, y:h, w:window.innerWidth, h:window.innerHeight-h}; // Maximize
                            else if(e.clientX < m) this.snapPreview={x:0, y:h, w:window.innerWidth/2, h:window.innerHeight-h}; // Left
                            else if(e.clientX > window.innerWidth-m) this.snapPreview={x:window.innerWidth/2, y:h, w:window.innerWidth/2, h:window.innerHeight-h}; // Right
                        }
                    } else if(this.dragState.isResizing) {
                        const w=this.windows.find(x=>x.id===this.dragState.id);
                        if(w) {
                            const dx=e.clientX-this.dragState.startX, dy=e.clientY-this.dragState.startY;
                            const r=this.dragState.initialRect, t=this.dragState.type;
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
                        if(w) {
                            w.preMax={x:w.x,y:w.y,w:w.w,h:w.h};
                            w.x=this.snapPreview.x; w.y=this.snapPreview.y; w.w=this.snapPreview.w; w.h=this.snapPreview.h;
                            w.snapped=true;
                            if(w.w===window.innerWidth) w.maximized=true;
                        }
                    }
                    this.dragState={isDragging:false,isResizing:false};
                    this.snapPreview=null;
                },

                handleProfileClick() {
                    if(this.user) {
                        if(confirm('Log out?')) auth.signOut();
                    } else {
                        this.authModalOpen=true;
                    }
                },

                signInEmail() {
                    this.authError = '';
                    if(!this.authEmail || !this.authPassword) { this.authError = 'Please fill in all fields'; return; }
                    auth.signInWithEmailAndPassword(this.authEmail, this.authPassword)
                        .then(() => { this.authModalOpen = false; this.authEmail=''; this.authPassword=''; })
                        .catch(e => this.authError = e.message.replace('Firebase:', '').trim());
                },

                signUpEmail() {
                    this.authError = '';
                    if(!this.authEmail || !this.authPassword) { this.authError = 'Please fill in all fields'; return; }
                    auth.createUserWithEmailAndPassword(this.authEmail, this.authPassword)
                        .then(() => { this.authModalOpen = false; this.authEmail=''; this.authPassword=''; })
                        .catch(e => this.authError = e.message.replace('Firebase:', '').trim());
                },

                initSortable() {
                    document.querySelectorAll('.sortable-grid').forEach(el => {
                        if (el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, {
                            group: 'apps',
                            animation: 200,
                            delay: 200,
                            delayOnTouchOnly: true,
                            draggable: '.app-item',
                            ghostClass: 'opacity-50',
                            onEnd: (evt) => {
                                const id = evt.item.getAttribute('data-id');
                                const toPage = parseInt(evt.to.getAttribute('data-page'));
                                
                                const app = this.apps.find(a=>a.id===id);
                                if(app) app.page = toPage;

                                // Re-index siblings
                                const kids = Array.from(evt.to.children);
                                kids.forEach((k, i) => {
                                    const a = this.apps.find(x=>x.id===k.getAttribute('data-id'));
                                    if(a) a.index = i;
                                });
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
      

<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black -z-10"></div>
<div className="fixed inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10 mix-blend-overlay"></div>

<header :className="holisticViewOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-300'" className="fixed flex transition-opacity duration-300 opacity-100 h-12 z-40 pr-6 pl-6 top-0 right-0 left-0 items-center justify-between">
<div className="flex gap-3 items-center" style={{visibility: 'hidden'}}>
<div className="flex items-center gap-2 text-xs font-semibold tracking-tight text-white/80">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                LDL15
            </div>
</div>
<div className="flex items-center gap-6">
<div className="text-right hidden sm:block">
<div className="text-xs font-semibold tracking-tight text-white" x-text="time">18:20</div>
<div className="text-[10px] text-white/40 font-medium uppercase tracking-wide" x-text="date">Wed 17 Dec</div>
</div>
<button @click="handleProfileClick()" className="w-8 h-8 rounded-full bg-white/10 border border-white/10 overflow-hidden hover:border-white/30 transition-colors">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" style={{display: 'none'}} x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center text-white/50" x-show="!user?.photoURL">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:user-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 11.5a8.46 8.46 0 0 0 4.807-1.489c.604-.415.862-1.205.51-1.848C16.59 15.83 15.09 15 12 15s-4.59.83-5.318 2.163c-.351.643-.093 1.433.511 1.848A8.46 8.46 0 0 0 12 20.5" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</button>
</div>
</header>

<div :style={{`top: '${snapPreview?.y}px', left: '${snapPreview?.x}px', width: '${snapPreview?.w}px', height: '${snapPreview?.h}px`'}} className="fixed z-[90] bg-white/10 border border-white/20 backdrop-blur-md rounded-xl pointer-events-none transition-all duration-200" style={{display: 'none'}} x-show="snapPreview" x-transition.opacity=""></div>

<div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
</div>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-12 pb-0 overflow-hidden">
<div :className="holisticViewOpen ? 'scale-100 bg-black/80 backdrop-blur-xl z-50' : 'scale-100'" className="h-full w-full relative transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] scale-100">
<div :className="holisticViewOpen ? 'flex flex-wrap items-center justify-center gap-10 overflow-y-auto p-10 pt-20' : 'relative'" className="h-full w-full relative">
<template :key="pNum" x-htmlFor="pNum in pageNumbers"></template><div :class="holisticViewOpen 
                            ? 'relative w-[300px] h-[540px] rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl cursor-pointer hover:-translate-y-4 hover:border-white/30 group' 
                            : (currentPage === pNum ? 'absolute inset-0 overflow-y-auto no-scrollbar' : 'hidden absolute inset-0')" @click="if(holisticViewOpen) { currentPage = pNum; holisticViewOpen = false; }" className="transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] overflow-y-auto no-scrollbar absolute top-0 right-0 bottom-0 left-0">

<div className="absolute -top-8 left-0 w-full text-center transition-all duration-300 group-hover:-translate-y-1" style={{display: 'none'}} x-show="holisticViewOpen">
<input :value="getPageName(pNum)" @click.stop="" className="bg-transparent text-center text-xs font-semibold text-gray-500 uppercase tracking-widest outline-none focus:text-white" placeholder="Page Name" type="text" x-model="pageNames[pNum]"/>
</div>

<div :className="holisticViewOpen ? 'w-[360%] h-[360%] origin-top-left scale-[0.277] pointer-events-none p-10 pt-20' : 'max-w-7xl mx-auto min-h-full p-4 md:p-8'" className="min-h-full md:p-8 [--fx-filter:blur(12px)_liquid-glass(1.5,10)_saturate(1.25)_noise(0.5,1,0)] opacity-90 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 mx-auto p-4">
<div :data-page="pNum" className="app-grid sortable-grid">
</div>
</div>
</div>

<button @click="addPage()" className="w-[300px] h-[540px] rounded-[2rem] border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all gap-4" style={{display: 'none'}} x-show="holisticViewOpen">
<svg aria-hidden="true" className="iconify text-4xl iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-xs font-semibold uppercase tracking-wider">New Page</span>
</button>
</div>
</div>
</main>

<div :className="holisticViewOpen ? 'translate-y-40 opacity-0' : 'translate-y-0 opacity-100'" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] transition-all duration-500 ease-out translate-y-0 opacity-100">
<div className="flex gap-1.5 border-white/10 border ring-white/5 ring-1 rounded-2xl px-2 py-2 shadow-2xl backdrop-blur-2xl gap-x-1.5 gap-y-1.5 items-center">
<button @click="createMenuOpen = true" className="w-11 h-11 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-95 group relative">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:add-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path><path d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75" fill="currentColor"></path></svg>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<div className="flex items-center gap-1.5" style={{display: 'none'}} x-show="windows.length &gt; 0">
<div className="w-px h-6 bg-white/10 mx-1"></div>
</div>
<div className="flex items-center gap-2 px-2">
<button :className="currentPage === pNum ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-1.5 bg-white/20 hover:bg-white/40'" @click="currentPage = pNum" className="h-1.5 rounded-full transition-all duration-300 w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></button>
</div>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<button @click="toggleHolistic()" className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:widget-5-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6z" fill="currentColor" opacity=".5"></path><path d="M2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5" fill="currentColor"></path><path d="M2 18.5c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[200] w-56 bg-[#161616]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 overflow-hidden" style={{top: '0px', left: '0px', display: 'none'}} x-show="contextOpen" x-transition.opacity.duration.150ms="">
<div className="px-3 py-2 border-b border-white/5 mb-1 bg-white/5">
<div className="text-xs font-semibold text-white truncate" x-text="contextApp?.name"></div>
<div className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5" x-text="contextApp?.type"></div>
</div>
<button @click="launchApp(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-white hover:bg-blue-600 flex items-center gap-2.5 group transition-colors">
<svg aria-hidden="true" className="iconify opacity-60 group-hover:opacity-100 iconify--solar" data-icon="solar:play-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg> Open
        </button>
<button @click="openModal('edit', contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-white hover:bg-white/10 flex items-center gap-2.5 transition-colors">
<svg aria-hidden="true" className="iconify opacity-60 iconify--solar" data-icon="solar:pen-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" fill="currentColor"></path></svg> Edit Properties
        </button>
<div className="h-px bg-white/10 my-1 mx-3"></div>
<button @click="deleteApp(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-500/10 flex items-center gap-2.5 transition-colors">
<svg aria-hidden="true" className="iconify opacity-60 iconify--solar" data-icon="solar:trash-bin-trash-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877" fill="currentColor"></path><path clip-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707" fill="currentColor" fill-rule="evenodd"></path></svg> Delete
        </button>
</div>

<div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{display: 'none'}} x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl text-center space-y-6" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
<div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<svg aria-hidden="true" className="iconify text-3xl text-black iconify--solar" data-icon="solar:shield-keyhole-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M13.5 15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.401A2.999 2.999 0 0 1 12 8a3 3 0 0 1 1.5 5.599z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div>
<h1 className="text-lg font-semibold text-white">Authentication</h1>
<p className="text-xs text-gray-500 mt-2">Sign in to sync your desktop</p>
</div>
<div className="space-y-3">
<div className="relative">
<svg aria-hidden="true" className="iconify absolute top-3 left-3 text-gray-500 text-lg iconify--solar" data-icon="solar:letter-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" fill="currentColor" fill-rule="evenodd"></path></svg>
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="Email address" type="email" x-model="authEmail"/>
</div>
<div className="relative">
<svg aria-hidden="true" className="iconify absolute top-3 left-3 text-gray-500 text-lg iconify--solar" data-icon="solar:lock-password-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor" fill-rule="evenodd"></path></svg>
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="Password" type="password" x-model="authPassword"/>
</div>
</div>
<div className="text-[10px] text-red-500 bg-red-500/10 p-2 rounded-lg border border-red-500/20 text-left" style={{display: 'none'}} x-show="authError" x-text="authError"></div>
<div className="flex gap-3">
<button @click="signInEmail" className="flex-1 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-xl text-xs transition-colors">
                    Sign In
                </button>
<button @click="signUpEmail" className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-xl text-xs transition-colors">
                    Create Account
                </button>
</div>
<button @click="authModalOpen = false" className="text-xs text-gray-500 hover:text-white transition-colors">Maybe later</button>
</div>
</div>

<div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{display: 'none'}} x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-bold text-white uppercase tracking-wider">Create New</h2>
<button @click="createMenuOpen = false" className="text-gray-500 hover:text-white"><svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:close-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button>
</div>
<div className="space-y-3">
<button @click="selectCreateType('app')" className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-white"><svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:widget-add-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" fill="currentColor"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" fill="currentColor" opacity=".5"></path></svg></div>
<div><div className="font-semibold text-sm text-white">Application</div><div className="text-[10px] text-gray-400">Link or Web App</div></div>
</button>
<button @click="selectCreateType('folder')" className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:text-white"><svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:folder-with-files-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" fill="currentColor" opacity=".5"></path><path d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238" fill="currentColor"></path><path clip-rule="evenodd" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<div><div className="font-semibold text-sm text-white">Folder</div><div className="text-[10px] text-gray-400">Group items</div></div>
</button>
<button @click="selectCreateType('code')" className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-white"><svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:code-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg></div>
<div><div className="font-semibold text-sm text-white">Widget</div><div className="text-[10px] text-gray-400">HTML/JS Embed</div></div>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[210] flex items-center justify-center p-4" style={{display: 'none'}} x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="scale-100 opacity-100" x-transition:enter-start="scale-95 opacity-0">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#141414]">
<h2 className="text-xs font-bold text-white uppercase tracking-wider" x-text="modalMode === 'add' ? 'Create New' : 'Edit Properties'">Create New</h2>
<div className="flex gap-1 bg-black/50 p-1 rounded-lg">
<button :className="modalTab === 'general' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'general'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all bg-white text-black">GENERAL</button>
<button :className="modalTab === 'notes' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'notes'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1 text-gray-500 hover:text-white">
                        NOTES <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" style={{display: 'none'}} x-show="modalData.note"></span>
</button>
<button :className="modalTab === 'files' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'" @click="modalTab = 'files'" className="px-3 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1 text-gray-500 hover:text-white">
                        FILES <span className="w-1.5 h-1.5 rounded-full bg-blue-500" style={{display: 'none'}} x-show="modalData.attachments?.length"></span>
</button>
</div>
</div>
<div className="overflow-y-auto p-6 custom-scrollbar h-full space-y-6">

<div className="space-y-5" x-show="modalTab === 'general'">
<div className="flex gap-4">
<div className="w-20 h-20 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
<svg :data-icon="modalData.icon || 'solar:question-circle-bold-duotone'" aria-hidden="true" className="iconify text-3xl text-gray-500 iconify--solar" data-icon="solar:question-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor"></path></svg>
</div>
<div className="flex-1 space-y-3">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">App Name</label>
<input className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:border-white/40 outline-none transition-colors" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">Icon (URL, Iconify, or Upload)</label>
<div className="flex gap-2">
<input className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="solar:rocket-bold" type="text" x-model="modalData.icon"/>
<button @click="$refs.iconInput.click()" className="px-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg flex items-center justify-center text-white transition-colors" title="Upload Image">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:upload-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16v-1c0-2.829 0-4.242-.879-5.121S18.828 9 16 9H8c-2.83 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.998V16c0 2.828 0 4.242.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879S22 18.828 22 16" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75" fill="currentColor" fill-rule="evenodd"></path></svg>
</button>
<input @change="handleIconUpload" accept="image/*" className="hidden" type="file" x-ref="iconInput"/>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">Destination URL</label>
<input className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:border-white/40 outline-none transition-colors" type="url" x-model="modalData.url"/>
</div>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
<div className="text-xs text-gray-300 font-medium">Open as Window</div>
<button :className="modalData.launchMode === 'internal' ? 'bg-green-600' : 'bg-gray-700'" @click="modalData.launchMode = modalData.launchMode === 'internal' ? 'external' : 'internal'" className="w-10 h-6 rounded-full transition-colors relative bg-gray-700">
<div :className="modalData.launchMode === 'internal' ? 'translate-x-4' : ''" className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm"></div>
</button>
</div>
</div>

<div className="h-full" style={{display: 'none'}} x-show="modalTab === 'notes'">
<textarea className="w-full h-[300px] bg-[#1a1a1a] border border-[#333] rounded-xl p-4 text-sm text-gray-200 focus:border-white/40 outline-none resize-none leading-relaxed" placeholder="Type your notes here..." x-model="modalData.note"></textarea>
</div>

<div className="space-y-4" style={{display: 'none'}} x-show="modalTab === 'files'">
<div className="flex justify-between items-end">
<label className="text-[10px] text-gray-500 font-bold uppercase block">Attached Links</label>
<button @click="addAttachment()" className="text-xs text-blue-400 hover:text-white font-semibold transition-colors">+ Add Link</button>
</div>
<div className="space-y-2">
<div className="text-center py-10 text-gray-600 text-xs border border-dashed border-white/10 rounded-xl" x-show="!modalData.attachments || modalData.attachments.length === 0">
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


    </>
  );
}
