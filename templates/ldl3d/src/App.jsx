import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
extend: {
colors: {
os: { bg: '#000000', glass: 'rgba(20, 20, 20, 0.6)', border: 'rgba(255, 255, 255, 0.08)' }
},
animation: {
'pop-3d': 'pop3d 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 3s linear infinite',
},
keyframes: {
pop3d: {
'0%': { transform: 'scale(0.8) rotateX(10deg) translateZ(-50px)', opacity: '0' },
'100%': { transform: 'scale(1) rotateX(0) translateZ(0)', opacity: '1' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
}
}
}
}
}



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.database();

        // INTEGRATED GOOGLE DRIVE
        const DRIVE_APP = { id: 'gdrive_sys', name: 'Google Drive', url: 'https://drive.google.com/drive/my-drive', icon: 'logos:google-drive', category: 'Productivity' };

        const DEFAULT_APPS = [
            DRIVE_APP,
            { id: '1', name: 'Google Keep', url: 'https://keep.google.com/', icon: 'logos:google-keep', category: 'Productivity' },
            { id: '2', name: 'Spotify', url: 'https://open.spotify.com/', icon: 'logos:spotify-icon', category: 'Entertainment' },
            { id: '3', name: 'Figma', url: 'https://www.figma.com/', icon: 'logos:figma', category: 'Design' },
            { id: '4', name: 'YouTube', url: 'https://www.youtube.com/', icon: 'logos:youtube-icon', category: 'Entertainment' },
            { id: '5', name: 'Notion', url: 'https://www.notion.so/', icon: 'logos:notion-icon', category: 'Productivity' },
            { id: '6', name: 'Gmail', url: 'https://mail.google.com/', icon: 'logos:google-gmail', category: 'Social' },
            { id: '7', name: 'X', url: 'https://twitter.com/', icon: 'prime:twitter', category: 'Social' },
            { id: '8', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'simple-icons:openai', category: 'Productivity' },
            { id: '9', name: 'Github', url: 'https://github.com', icon: 'logos:github-icon', category: 'Development' },
            { id: '10', name: 'Dribbble', url: 'https://dribbble.com', icon: 'logos:dribbble-icon', category: 'Design' }
        ];

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null, loading: true,
                apps: [], windows: [], zIndexCounter: 100,
                startOpen: false, contextOpen: false, contextApp: null, contextPos: {x:0,y:0},
                modalOpen: false, modalMode: 'add', modalData: {}, iconTab: 'iconify',
                viewMode: 'desktop', searchQuery: '', dragging: false, dragData: null,
                pageTitle: 'Workspace',

                init() {
                    this.checkViewMode();
                    window.addEventListener('resize', () => { this.checkViewMode(); });
                    
                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        // Delay loading slightly to prevent flicker and show smooth auth state transition
                        setTimeout(() => { this.loading = false; }, 500); 
                        
                        if (u) {
                            db.ref(`users/${u.uid}/data`).on('value', s => {
                                const val = s.val();
                                this.apps = val?.apps || DEFAULT_APPS;
                                this.pageTitle = val?.pageTitle || 'Workspace';
                                if(!val) this.saveSettings();
                            });
                        } else {
                            const localApps = localStorage.getItem('ldl_apps');
                            const localTitle = localStorage.getItem('ldl_title');
                            this.apps = localApps ? JSON.parse(localApps) : DEFAULT_APPS;
                            this.pageTitle = localTitle || 'Workspace';
                        }
                    });
                },

                checkViewMode() { this.viewMode = window.innerWidth < 768 ? 'mobile' : 'desktop'; },
                
                get dockAppsLeft() { return this.apps.slice(0, 3); },
                get dockAppsRight() { return this.apps.slice(3, 6); },
                get filteredApps() { return this.searchQuery ? this.apps.filter(a => a.name.toLowerCase().includes(this.searchQuery.toLowerCase())) : this.apps; },

                signInGoogle() { 
                    this.loading = true; // Show spinner during pop-up
                    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                        .catch(e => {
                             console.error(e);
                             this.loading = false; 
                             alert("Login Failed: " + e.message);
                        }); 
                },
                logout() { auth.signOut(); this.windows = []; },

                openWindow(app) {
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) { existing.minimized = false; this.focusWindow(existing.id); return; }
                    
                    // Center the window initially
                    const w = this.viewMode === 'mobile' ? window.innerWidth : 1000;
                    const h = this.viewMode === 'mobile' ? window.innerHeight - 80 : 640;
                    const x = (window.innerWidth - w) / 2 + (this.windows.length * 20);
                    const y = (window.innerHeight - h) / 2 + (this.windows.length * 20);

                    this.windows.push({
                        id: Date.now(), appId: app.id, title: app.name, content: app.url,
                        x: Math.max(0, x), y: Math.max(0, y), w, h,
                        zIndex: ++this.zIndexCounter, minimized: false, maximized: this.viewMode === 'mobile'
                    });
                },

                // Dedicated Drive Opener
                openDrive(section) {
                    let url = 'https://drive.google.com/drive/my-drive';
                    if(section === 'recent') url = 'https://drive.google.com/drive/recent';
                    if(section === 'starred') url = 'https://drive.google.com/drive/starred';
                    
                    this.openWindow({ id: 'gdrive_sys', name: 'Google Drive', url: url, icon: 'logos:google-drive' });
                    this.startOpen = false;
                },

                openExternal(url) { window.open(url, '_blank'); },
                closeWindow(id) { this.windows = this.windows.filter(w => w.id !== id); },
                minimizeWindow(id) { this.windows.find(w => w.id === id).minimized = true; },
                toggleMaximize(id) { const w = this.windows.find(w=>w.id===id); w.maximized = !w.maximized; },
                focusWindow(id) { const w = this.windows.find(w=>w.id===id); if(w) { w.zIndex = ++this.zIndexCounter; w.minimized = false; } },
                isAppOpen(id) { return this.windows.some(w => w.appId === id && !w.minimized); },
                getAppIcon(id) { return this.apps.find(a => a.id === id)?.icon || 'solar:question-circle-bold'; },

                startDrag(e, id) {
                    const win = this.windows.find(w => w.id === id);
                    if(win.maximized) return;
                    this.focusWindow(id); this.dragging = true;
                    this.dragData = { id, startX: e.clientX, startY: e.clientY, initialLeft: win.x, initialTop: win.y };
                    const move = (e) => {
                        if (!this.dragData) return;
                        const w = this.windows.find(x => x.id === this.dragData.id);
                        w.x = this.dragData.initialLeft + (e.clientX - this.dragData.startX);
                        w.y = this.dragData.initialTop + (e.clientY - this.dragData.startY);
                    };
                    const stop = () => { this.dragging = false; this.dragData = null; document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', stop); };
                    document.addEventListener('mousemove', move); document.addEventListener('mouseup', stop);
                },

                openContext(e, app) {
                    e.preventDefault();
                    let x = e.clientX, y = e.clientY;
                    if(x + 230 > window.innerWidth) x = window.innerWidth - 240;
                    if(y + 250 > window.innerHeight) y = window.innerHeight - 260;
                    this.contextPos = {x, y}; this.contextApp = app; this.contextOpen = true;
                },
                handleDesktopRightClick(e) { if(e.target === e.currentTarget) this.contextOpen = false; },
                closeMenus() { this.startOpen = false; this.contextOpen = false; },
                
                openModal(mode, app = null) {
                    this.modalMode = mode;
                    this.modalData = app ? JSON.parse(JSON.stringify(app)) : { id: 'app'+Date.now(), name: '', url: '', icon: '', category: 'General' };
                    this.modalOpen = true;
                },
                closeModal() { this.modalOpen = false; },
                saveModal() {
                    if (this.modalMode === 'add') this.apps.push(this.modalData);
                    else { const idx = this.apps.findIndex(a => a.id === this.modalData.id); if (idx > -1) this.apps[idx] = this.modalData; }
                    this.saveSettings(); this.closeModal();
                },
                saveSettings() { 
                    const data = { apps: this.apps, pageTitle: this.pageTitle };
                    if (this.user) db.ref(`users/${this.user.uid}/data`).set(data); 
                    else {
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps)); 
                        localStorage.setItem('ldl_title', this.pageTitle);
                    }
                },
                deleteApp(app) { this.apps = this.apps.filter(a => a.id !== app.id); this.saveSettings(); },
                handleFileUpload(e) {
                    const f = e.target.files[0]; if(!f) return;
                    const r = new FileReader(); r.onload = (ev) => this.modalData.icon = ev.target.result; r.readAsDataURL(f);
                }
            }))
        })
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[150] bg-black flex items-center justify-center" x-show="loading">
<div className="relative w-16 h-16">
<div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
<div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" x-show="!user &amp;&amp; !loading" x-transition.opacity="">
<div className="relative w-full max-w-sm p-8 glass-modal rounded-3xl text-center animate-pop-3d overflow-hidden">

<div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[80px]"></div>
<div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]"></div>
<div className="relative z-10 space-y-8">
<div className="w-24 h-24 mx-auto rounded-[24px] bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-2xl animate-float group cursor-default">
<span className="iconify text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-500" data-icon="solar:rocket-2-bold-duotone"></span>
</div>
<div>
<h1 className="text-3xl font-medium tracking-tight text-white">LiveDesk<span className="text-white/40">OS</span></h1>
<p className="text-sm text-gray-400 mt-2 font-light">Your infinite spatial workspace.</p>
</div>
<div className="space-y-3 pt-2">
<button @click="signInGoogle" className="w-full py-3.5 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5">
<span className="iconify text-xl" data-icon="logos:google-icon"></span>
<span>Sign in with Google</span>
</button>
<p className="text-[10px] text-gray-600 uppercase tracking-widest pt-4">Secure Authentication</p>
</div>
</div>
</div>
</div>

<div @click="closeMenus()" @contextmenu.prevent="handleDesktopRightClick($event)" className="h-full w-full relative bg-black select-none" x-cloak="" x-show="user">

<div :className="{'blur-md scale-110': startOpen || modalOpen}" className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-1000 transform scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>
<div className="absolute inset-0 bg-black/40 backdrop-contrast-125"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="fixed top-8 left-8 z-10 group transition-all duration-300">
<div className="relative flex items-center gap-3">
<div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<input @blur="saveSettings" @keyup.enter="$event.target.blur()" className="bg-transparent text-white/90 focus:text-white text-3xl font-medium tracking-tight outline-none w-64 transition-colors placeholder-white/20 drop-shadow-md" placeholder="Workspace" type="text" x-model="pageTitle"/>
</div>
</div>

<main className="relative z-10 w-full h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden custom-scrollbar">
<div className="w-full max-w-7xl mx-auto p-4 md:p-10 pt-24 pb-32">

<div className="app-grid gap-y-10 gap-x-4 md:gap-x-10 place-items-center transition-all duration-300 perspective-1000">
<template :key="app.id" x-htmlFor="app in apps">
<div @click="openWindow(app)" @contextmenu.stop="openContext($event, app)" className="flex flex-col items-center gap-3 w-full cursor-pointer group app-icon-container" draggable="true">
<div className="relative w-[64px] h-[64px] md:w-[72px] md:h-[72px]">

<div className="absolute inset-0 rounded-[22px] app-icon-inner overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<template x-if="app.icon.includes('http') || app.icon.includes('data:image')">
<img :src="app.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('http') &amp;&amp; !app.icon.includes('data:image')">
<span :data-icon="app.icon" className="iconify text-[32px] md:text-[36px] text-white drop-shadow-lg"></span>
</template>
</div>
</div>

<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" x-show="isAppOpen(app.id)"></div>
</div>
<span className="text-[11px] font-medium text-white/70 group-hover:text-white tracking-wide drop-shadow-md text-center line-clamp-1 px-2 py-0.5 rounded-md group-hover:bg-black/40 transition-colors" x-text="app.name"></span>
</div>
</template>

<div @click="openModal('add')" className="flex flex-col items-center gap-3 w-full cursor-pointer group app-icon-container opacity-60 hover:opacity-100">
<div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-[22px] bg-white/5 border border-dashed border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40 transition-colors backdrop-blur-sm">
<span className="iconify text-2xl text-white/50 group-hover:text-white" data-icon="solar:add-circle-linear"></span>
</div>
<span className="text-[11px] font-medium text-white/40 group-hover:text-white/80">Add App</span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-20 overflow-hidden perspective-1000" id="windows-layer">
<template :key="win.id" x-htmlFor="win in windows">
<div :className="{'w-full h-full top-0 left-0 rounded-none': win.maximized, 'opacity-0 scale-90 translate-y-10': win.minimized}" :style={{`width: '${win.w}px', height: '${win.h}px', transform: 'translate3d(${win.x}px, ${win.y}px, 0)', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" className="absolute rounded-xl overflow-hidden glass shadow-2xl flex flex-col pointer-events-auto transition-transform duration-300" x-show="!win.minimized" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100 translate-y-0 rotate-x-0" x-transition:enter-start="opacity-0 scale-95 translate-y-4 rotate-x-6">

<div @dblclick="toggleMaximize(win.id)" @mousedown="startDrag($event, win.id)" className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-3 cursor-move backdrop-blur-md">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 group">
<button @click.stop="closeWindow(win.id)" className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 border border-white/5 flex items-center justify-center text-[8px] text-transparent hover:text-black/60 transition-all"><span className="iconify" data-icon="solar:close-circle-bold"></span></button>
<button @click.stop="minimizeWindow(win.id)" className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 border border-white/5 flex items-center justify-center text-[8px] text-transparent hover:text-black/60 transition-all"><span className="iconify" data-icon="solar:minimize-bold"></span></button>
<button @click.stop="toggleMaximize(win.id)" className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 border border-white/5 flex items-center justify-center text-[8px] text-transparent hover:text-black/60 transition-all"><span className="iconify" data-icon="solar:maximize-bold"></span></button>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<span className="text-xs font-medium text-white/70 flex items-center gap-2">
<span :data-icon="getAppIcon(win.appId)" className="iconify"></span>
<span x-text="win.title"></span>
</span>
</div>
</div>

<div className="flex-1 bg-white relative">

<iframe :src="win.content" className="w-full h-full border-none bg-white"></iframe>

<div className="absolute inset-0 bg-transparent" x-show="dragging"></div>
</div>
</div>
</template>
</div>

<div @click.stop="" className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] md:w-[480px] h-[500px] glass-modal rounded-3xl flex flex-col overflow-hidden origin-bottom" x-show="startOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 scale-100 rotate-x-0" x-transition:enter-start="opacity-0 translate-y-10 scale-95 rotate-x-12" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-10 scale-95" x-transition:leave-start="opacity-100 translate-y-0 scale-100">
<div className="p-5 border-b border-white/5">
<div className="relative group">
<span className="iconify absolute left-3 top-2.5 text-gray-400 group-focus-within:text-white transition-colors" data-icon="solar:magnifer-linear"></span>
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all placeholder:text-gray-500 font-light" placeholder="Search Drive, Apps, Files..." type="text" x-model="searchQuery"/>
</div>
</div>
<div className="flex-1 p-5 overflow-y-auto custom-scrollbar">

<div className="mb-6">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Quick Access</div>
<div className="grid grid-cols-2 gap-3">
<button @click="openDrive('recent')" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group">
<div className="w-8 h-8 rounded-lg bg-[#4285F4]/20 flex items-center justify-center text-[#4285F4]"><span className="iconify" data-icon="solar:clock-circle-bold"></span></div>
<div className="text-left">
<div className="text-xs font-medium text-white/90 group-hover:text-white">Recent Files</div>
<div className="text-[10px] text-gray-500">Google Drive</div>
</div>
</button>
<button @click="openDrive('starred')" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group">
<div className="w-8 h-8 rounded-lg bg-[#F4B400]/20 flex items-center justify-center text-[#F4B400]"><span className="iconify" data-icon="solar:star-bold"></span></div>
<div className="text-left">
<div className="text-xs font-medium text-white/90 group-hover:text-white">Starred</div>
<div className="text-[10px] text-gray-500">Google Drive</div>
</div>
</button>
</div>
</div>
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">All Applications</div>
<div className="grid grid-cols-4 gap-2">
<template :key="app.id" x-htmlFor="app in filteredApps">
<button @click="openWindow(app); startOpen=false" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<span :data-icon="app.icon" className="iconify text-xl"></span>
</div>
<span className="text-[10px] text-gray-400 group-hover:text-white truncate w-full text-center" x-text="app.name"></span>
</button>
</template>
</div>
</div>
<div className="p-4 bg-black/20 border-t border-white/5 flex justify-between items-center backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold border border-white/20 shadow-lg" x-text="user?.email?.[0].toUpperCase()"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white" x-text="user?.email"></span>
<span className="text-[10px] text-gray-500">Pro Workspace</span>
</div>
</div>
<button @click="logout" className="hover:bg-white/10 p-2 rounded-lg text-gray-400 hover:text-white transition-all"><span className="iconify text-lg" data-icon="solar:power-bold"></span></button>
</div>
</div>

<div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-end pointer-events-none perspective-1000">
<div className="dock-glass px-3 py-2.5 rounded-[24px] flex items-end gap-3 pointer-events-auto transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
<template :key="app.id" x-htmlFor="app in dockAppsLeft">
<div className="relative group">
<button @click="openWindow(app)" className="w-12 h-12 rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95 shadow-lg">
<span :data-icon="app.icon" className="iconify text-2xl text-white drop-shadow-md"></span>
</button>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full" x-show="isAppOpen(app.id)"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded-md text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md" x-text="app.name"></div>
</div>
</template>

<div className="w-px h-8 bg-white/10 mx-1 mb-2"></div>

<button @click.stop="startOpen = !startOpen" className="relative w-14 h-14 -mb-1 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group z-10">
<div className="w-12 h-12 rounded-[18px] flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
<span className="iconify text-3xl text-white" data-icon="solar:widget-5-bold-duotone"></span>
</div>
</button>
<div className="w-px h-8 bg-white/10 mx-1 mb-2"></div>

<div className="relative group">
<button @click="openDrive('root')" className="w-12 h-12 rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95 shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
<span className="iconify text-2xl text-white drop-shadow-md" data-icon="logos:google-drive"></span>
</button>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded-md text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md">Drive</div>
</div>
<template :key="app.id" x-htmlFor="app in dockAppsRight">
<div className="relative group">
<button @click="openWindow(app)" className="w-12 h-12 rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95 shadow-lg">
<span :data-icon="app.icon" className="iconify text-2xl text-white drop-shadow-md"></span>
</button>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full" x-show="isAppOpen(app.id)"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded-md text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md" x-text="app.name"></div>
</div>
</template>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[60] w-56 glass-modal rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col" x-show="contextOpen" x-transition:enter="transition ease-out duration-100" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="px-3 py-2 border-b border-white/5 mb-1 bg-white/5">
<div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
<span :data-icon="contextApp?.icon" className="iconify"></span>
<span x-text="contextApp?.name"></span>
</div>
</div>
<button @click="openWindow(contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-white hover:bg-indigo-500/80 flex items-center gap-3 transition-colors group mx-1 rounded-md">
<span className="iconify text-sm opacity-70 group-hover:text-white" data-icon="solar:maximize-square-minimalistic-bold"></span> Open
            </button>
<button @click="openExternal(contextApp?.url); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-white hover:bg-white/10 flex items-center gap-3 transition-colors mx-1 rounded-md">
<span className="iconify text-sm opacity-70" data-icon="solar:arrow-right-up-linear"></span> New Tab
            </button>
<div className="h-px bg-white/10 my-1 mx-2"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-gray-200 hover:bg-white/10 flex items-center gap-3 transition-colors mx-1 rounded-md">
<span className="iconify text-sm opacity-70" data-icon="solar:pen-bold"></span> Edit Properties
            </button>
<button @click="deleteApp(contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-500/20 hover:text-red-200 flex items-center gap-3 transition-colors mx-1 rounded-md">
<span className="iconify text-sm opacity-70" data-icon="solar:trash-bin-trash-bold"></span> Remove App
            </button>
</div>

<div className="fixed inset-0 z-[70] flex items-center justify-center p-4 perspective-1000" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" x-transition.opacity=""></div>
<div className="relative w-full max-w-lg glass-modal rounded-2xl overflow-hidden shadow-2xl flex flex-col" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 rotate-x-0 scale-100" x-transition:enter-start="opacity-0 translate-y-20 rotate-x-12 scale-90">
<div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
<h2 className="text-sm font-semibold text-white tracking-wide uppercase" x-text="modalMode === 'add' ? 'Install Application' : 'App Properties'"></h2>
<button @click="closeModal" className="text-gray-400 hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="p-6 space-y-6">

<div className="flex gap-5 items-start">
<div className="w-24 h-24 flex-shrink-0 rounded-[24px] bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center overflow-hidden relative shadow-inner group">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<template x-if="modalData.icon &amp;&amp; (modalData.icon.includes('http') || modalData.icon.includes('data:'))">
<img :src="modalData.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="modalData.icon &amp;&amp; !modalData.icon.includes('http') &amp;&amp; !modalData.icon.includes('data:')">
<span :data-icon="modalData.icon" className="iconify text-4xl text-white"></span>
</template>
<template x-if="!modalData.icon">
<span className="iconify text-3xl text-gray-600" data-icon="solar:gallery-wide-linear"></span>
</template>
</div>
<div className="flex-grow space-y-3">
<div className="flex gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-wide border-b border-white/5 pb-1">
<button :className="iconTab==='iconify' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'hover:text-gray-300'" @click="iconTab='iconify'" className="pb-1 transition-colors">Icon Library</button>
<button :className="iconTab==='upload' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'hover:text-gray-300'" @click="iconTab='upload'" className="pb-1 transition-colors">Upload Image</button>
</div>
<div className="animate-pop-in" x-show="iconTab === 'iconify'">
<div className="relative">
<span className="iconify absolute left-3 top-3 text-gray-500" data-icon="solar:emoji-funny-circle-linear"></span>
<input className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white focus:border-indigo-500/50 focus:bg-black/60 outline-none transition-all" placeholder="solar:home-bold" type="text" x-model="modalData.icon"/>
</div>
</div>
<div className="animate-pop-in" x-show="iconTab === 'upload'">
<label className="flex items-center justify-center w-full py-2.5 bg-black/40 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group border-dashed hover:border-white/30">
<span className="iconify mr-2 text-gray-400 group-hover:text-white" data-icon="solar:upload-minimalistic-linear"></span>
<span className="text-xs text-gray-300 group-hover:text-white">Select File</span>
<input @change="handleFileUpload" accept="image/*" className="hidden" type="file"/>
</label>
</div>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">App Name</label>
<input className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-gray-700 focus:bg-white/5" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Category</label>
<div className="relative">
<select className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500/50 outline-none appearance-none transition-all focus:bg-white/5" x-model="modalData.category">
<option value="General">General</option>
<option value="Productivity">Productivity</option>
<option value="Social">Social</option>
<option value="Design">Design</option>
<option value="Development">Development</option>
<option value="Entertainment">Entertainment</option>
</select>
<span className="iconify absolute right-3 top-4 text-gray-500 pointer-events-none" data-icon="solar:alt-arrow-down-linear"></span>
</div>
</div>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Web Address (URL)</label>
<div className="relative">
<span className="iconify absolute left-3 top-4 text-gray-500" data-icon="solar:link-circle-linear"></span>
<input className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-gray-700 focus:bg-white/5" placeholder="https://..." type="url" x-model="modalData.url"/>
</div>
</div>
</div>
<button @click="saveModal" className="w-full py-3 bg-white text-black font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
<span className="iconify" data-icon="solar:diskette-bold"></span>
<span x-text="modalMode === 'add' ? 'Install to Workspace' : 'Save Changes'"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
