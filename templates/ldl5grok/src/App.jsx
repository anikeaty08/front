import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
gray: { 850: '#1f1f1f', 900: '#111111', 950: '#050505' },
zinc: { 850: '#202022', 950: '#09090b' }
},
boxShadow: {
'iso': '10px 10px 20px rgba(0,0,0,0.5)',
'glow': '0 0 20px rgba(99, 102, 241, 0.3)'
}
}
}
}



        // Firebase Configuration
        const firebaseConfig = {
            apiKey: "AIzaSyD-PLACEHOLDER-KEY",
            authDomain: "livedesklauncher.firebaseapp.com",
            databaseURL: "https://livedesklauncher-default-rtdb.firebaseio.com",
            projectId: "livedesklauncher",
            storageBucket: "livedesklauncher.appspot.com",
            messagingSenderId: "00000000000",
            appId: "1:00000000000:web:00000000000000"
        };

        // Initialize Firebase safely
        let appInstance, auth, db;
        try {
            appInstance = firebase.initializeApp(firebaseConfig);
            auth = firebase.auth();
            db = firebase.database();
        } catch (e) { console.warn("Firebase Init Error (Using Local Mode):", e); }

        function launcher() {
            return {
                user: null,
                apps: [],
                pageNames: ['Home', 'Work', 'Social', 'Dev', 'Media'],
                currentPage: 0,
                viewMode: 'grid',
                showModal: false,
                editMode: false,
                loading: true,
                email: '',
                password: '',
                time: '',
                date: '',
                contextMenu: { show: false, x: 0, y: 0, app: null },
                form: { id: null, name: '', url: '', icon: '', category: 'Google', page: 0 },
                
                // Default Data
                defaultApps: [
                    { id: '1', name: 'Keep', category: 'Google', url: 'https://keep.google.com', icon: 'solar:notes-bold-duotone', page: 0 },
                    { id: '2', name: 'Drive', category: 'Google', url: 'https://drive.google.com', icon: 'solar:cloud-bold-duotone', page: 0 },
                    { id: '3', name: 'NotebookLM', category: 'Google', url: 'https://notebooklm.google.com', icon: 'solar:book-bookmark-bold-duotone', page: 0 },
                    { id: '4', name: 'Aura', category: 'Aura', url: '#', icon: 'solar:atom-bold-duotone', page: 0 },
                    { id: '5', name: 'Livedesk', category: 'Aura', url: '#', icon: 'solar:monitor-bold-duotone', page: 0 },
                    { id: '6', name: 'Shop', category: 'Work', url: '#', icon: 'solar:shop-bold-duotone', page: 0 },
                    { id: '7', name: 'WhatsApp', category: 'Social', url: 'https://web.whatsapp.com', icon: 'solar:chat-round-bold-duotone', page: 0 },
                    { id: '8', name: 'Analytics', category: 'Work', url: '#', icon: 'solar:graph-bold-duotone', page: 0 },
                ],

                init() {
                    // Clock
                    setInterval(() => {
                        const now = new Date();
                        this.time = now.toLocaleTimeString('en-US', { hour12: false, hour:'2-digit', minute:'2-digit' });
                        this.date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                    }, 1000);

                    // Auth State
                    if(auth) {
                        auth.onAuthStateChanged(u => {
                            this.user = u;
                            this.loading = false;
                            if(u) this.loadData();
                        });
                    } else {
                        this.loading = false;
                        const savedUser = localStorage.getItem('ldl_user');
                        if(savedUser) { 
                            this.user = JSON.parse(savedUser);
                            this.loadData();
                        }
                    }

                    // Sortable Setup
                    this.$nextTick(() => {
                        this.initSortable();
                        lucide.createIcons();
                    });
                },

                get filteredApps() {
                    return this.apps.filter(a => (a.page || 0) == this.currentPage);
                },

                initSortable() {
                    const el = document.getElementById('app-grid');
                    if(!el) return;
                    Sortable.create(el, {
                        animation: 200,
                        delay: 150,
                        delayOnTouchOnly: true,
                        ghostClass: 'sortable-ghost',
                        dragClass: 'sortable-drag',
                        draggable: '.group',
                        onEnd: (evt) => {
                            // Logic for reordering arrays would go here
                            // For V1 visual prototype, we let Sortable handle DOM reorder
                        }
                    });
                },

                // Authentication
                loginGoogle() {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    auth.signInWithPopup(provider).catch(e => alert(e.message));
                },
                loginEmail() {
                    auth.signInWithEmailAndPassword(this.email, this.password).catch(e => {
                        if(e.code === 'auth/user-not-found') {
                            auth.createUserWithEmailAndPassword(this.email, this.password);
                        } else alert(e.message);
                    });
                },
                guestMode() {
                    this.user = { uid: 'guest', email: 'guest@local', photoURL: '' };
                    localStorage.setItem('ldl_user', JSON.stringify(this.user));
                    this.loadData();
                },
                logout() {
                    if(auth) auth.signOut();
                    this.user = null;
                    localStorage.removeItem('ldl_user');
                    this.apps = [];
                },

                // Data Persistence
                loadData() {
                    if(this.user.uid === 'guest') {
                        const localApps = localStorage.getItem('ldl_apps');
                        this.apps = localApps ? JSON.parse(localApps) : this.defaultApps;
                        const localPages = localStorage.getItem('ldl_pages');
                        if(localPages) this.pageNames = JSON.parse(localPages);
                        return;
                    }
                    db.ref(`users/${this.user.uid}/apps`).on('value', s => {
                        const val = s.val();
                        this.apps = val ? Object.values(val) : this.defaultApps;
                    });
                    db.ref(`users/${this.user.uid}/pageNames`).on('value', s => {
                        if(s.exists()) this.pageNames = s.val();
                    });
                },
                saveData() {
                    if(this.user.uid === 'guest') {
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                        localStorage.setItem('ldl_pages', JSON.stringify(this.pageNames));
                        return;
                    }
                    const appObj = {};
                    this.apps.forEach(a => appObj[a.id] = a);
                    db.ref(`users/${this.user.uid}/apps`).set(appObj);
                    db.ref(`users/${this.user.uid}/pageNames`).set(this.pageNames);
                },

                // CRUD Operations
                openModal() {
                    this.editMode = false;
                    this.form = { id: Date.now().toString(), name: '', url: 'https://', icon: 'solar:box-bold-duotone', category: 'Google', page: this.currentPage };
                    this.showModal = true;
                },
                editApp(app) {
                    this.editMode = true;
                    this.form = { ...app };
                    this.showModal = true;
                    this.contextMenu.show = false;
                },
                saveApp() {
                    if(!this.form.name) return;
                    if(this.editMode) {
                        const idx = this.apps.findIndex(a => a.id === this.form.id);
                        if(idx > -1) this.apps[idx] = { ...this.form };
                    } else {
                        this.apps.push({ ...this.form });
                    }
                    this.saveData();
                    this.closeModal();
                },
                deleteApp(id) {
                    this.apps = this.apps.filter(a => a.id !== id);
                    this.saveData();
                    this.contextMenu.show = false;
                },
                deleteAppWrapper() {
                    if(confirm('Delete this block?')) this.deleteApp(this.form.id);
                    this.closeModal();
                },
                moveAppToPage(app, pageIdx) {
                    const idx = this.apps.findIndex(a => a.id === app.id);
                    if(idx > -1) {
                        this.apps[idx].page = pageIdx;
                        this.saveData();
                    }
                    this.contextMenu.show = false;
                },
                savePageName() {
                    this.saveData();
                },

                // UI Utils
                launchApp(app) {
                    window.open(app.url, '_blank');
                },
                openNewWindow() {
                    window.open(window.location.href, '_blank', 'width=500,height=600');
                },
                closeModal() {
                    this.showModal = false;
                },
                toggleView() {
                    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
                },
                nextPage() {
                    if(this.currentPage < 4) { this.currentPage++; }
                },
                prevPage() {
                    if(this.currentPage > 0) { this.currentPage--; }
                },
                setPage(n) {
                    this.currentPage = n;
                },
                showContext(e, app) {
                    // Adjust coordinates to prevent overflow
                    let x = e.clientX;
                    let y = e.clientY;
                    if (x > window.innerWidth - 180) x -= 160;
                    if (y > window.innerHeight - 200) y -= 150;
                    
                    this.contextMenu = { show: true, x, y, app };
                },
                getCategoryColor(cat) {
                    const map = {
                        'Google': 'text-sky-400 border-sky-400/20 bg-sky-400/10',
                        'Aura': 'text-purple-400 border-purple-400/20 bg-purple-400/10',
                        'Work': 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
                        'Social': 'text-pink-400 border-pink-400/20 bg-pink-400/10',
                        'Dev': 'text-orange-400 border-orange-400/20 bg-orange-400/10'
                    };
                    // Simplified for list/grid nuance
                    if (this.viewMode === 'list') return map[cat] || 'text-zinc-500 bg-zinc-800';
                    // Just text color for billboard
                    return map[cat] ? map[cat].split(' ')[0] : 'text-zinc-500';
                },
                handleFileUpload(e) {
                    const file = e.target.files[0];
                    if(!file) return;
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        this.form.icon = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                },
                fetchMeta() {
                    if(!this.form.name && this.form.url) {
                        try {
                            const url = new URL(this.form.url);
                            this.form.name = url.hostname.replace('www.','').split('.')[0];
                            this.form.icon = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
                        } catch(e){}
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl" x-show="!user &amp;&amp; !loading" x-transition.opacity.duration.500ms="">
<div className="w-full max-w-xs p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5"></div>
<h1 className="text-xl font-semibold text-white tracking-tight mb-2 relative z-10">LIVEDESK</h1>
<p className="text-zinc-500 mb-6 text-xs relative z-10">Isometric Workspace v1</p>
<button @click="loginGoogle" className="w-full bg-white text-black font-medium py-2 rounded-md mb-3 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all relative z-10 text-xs shadow-lg">
<span className="iconify text-lg" data-icon="flat-color-icons:google"></span> Google
            </button>
<form @submit.prevent="loginEmail" className="space-y-3 relative z-10">
<input className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Email" type="email" x-model="email"/>
<input className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Password" type="password" x-model="password"/>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium py-2 rounded-md text-xs transition-all border border-zinc-700/50" type="submit">
                    Enter
                </button>
</form>
<button @click="guestMode" className="mt-4 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors relative z-10 uppercase tracking-wider">Guest Mode</button>
</div>
</div>

<div className="ui-layer top-0 left-0 right-0 px-6 py-5 flex justify-between items-start mix-blend-difference">
<div className="ui-interactive">
<h1 className="text-lg font-semibold tracking-tight text-white drop-shadow-md opacity-90">LDL<span className="text-indigo-500 text-xs align-top ml-1 opacity-80">v1</span></h1>
</div>
<div className="flex items-start gap-8 ui-interactive">
<div className="text-right hidden sm:block">
<div className="text-xl font-light text-white tracking-tighter leading-none" x-text="time"></div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-0.5" x-text="date"></div>
</div>
<div className="flex items-center gap-3">
<button @click="toggleView" className="p-2 text-zinc-500 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="layout-grid" x-show="viewMode === 'grid'"></i>
<i className="w-4 h-4" data-lucide="list" x-show="viewMode === 'list'"></i>
</button>
<button @click="openNewWindow" className="bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md text-[10px] font-medium border border-zinc-800 transition-all backdrop-blur-sm">
                    New Window
                </button>
<template x-if="user">
<div className="relative group">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700/50 cursor-pointer overflow-hidden">
<img :src="user.photoURL || `https://api.iconify.design/solar:user-circle-bold-duotone.svg?color=%23555`" className="w-full h-full object-cover opacity-80"/>
</div>
<button @click="logout" className="absolute top-8 right-0 bg-red-950/90 text-red-200 text-[10px] px-3 py-1 rounded border border-red-900/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Logout</button>
</div>
</template>
</div>
</div>
</div>

<div className="iso-scroll-wrapper" id="scrollContainer">

<div @click="prevPage" className="fixed inset-y-0 left-0 w-20 z-40 flex items-center justify-start pl-4 cursor-pointer group pointer-events-auto" x-show="currentPage &gt; 0">
<div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0">
<i className="text-white w-5 h-5" data-lucide="chevron-left"></i>
</div>
</div>
<div @click="nextPage" className="fixed inset-y-0 right-0 w-20 z-40 flex items-center justify-end pr-4 cursor-pointer group pointer-events-auto" x-show="currentPage &lt; 4">
<div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
<i className="text-white w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="scene">
<div :style={{viewMode === 'list' ? 'transform: 'none', padding: '100px 20px', ': '\'\''}} className="iso-plane">

<div :className="viewMode === 'list' ? 'flex flex-col gap-2 w-full max-w-2xl mx-auto' : 'grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-12'" className="transition-all duration-500" id="app-grid">

<template :key="app.id" x-htmlFor="app in filteredApps">
<div :className="viewMode === 'list' ? 'w-full bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800 p-3 rounded-lg flex items-center gap-4 cursor-pointer transition-colors' : 'iso-block'" :data-id="app.id" @click="launchApp(app)" @contextmenu.prevent="showContext($event, app)" className="group relative">

<template x-if="viewMode === 'grid'">
<div className="cube">
<div className="cube-shadow"></div>
<div className="cube-top flex items-center justify-center overflow-hidden">

<div className="w-8 h-8 text-white app-icon transition-transform duration-300 group-hover:scale-110 opacity-90">
<template x-if="app.icon.startsWith('http') || app.icon.startsWith('data:')">
<img :src="app.icon" className="w-full h-full object-contain drop-shadow-sm"/>
</template>
<template x-if="!app.icon.startsWith('http') &amp;&amp; !app.icon.startsWith('data:')">
<span :data-icon="app.icon" className="iconify w-full h-full"></span>
</template>
</div>
</div>

<div className="iso-label">
<div className="text-xs font-semibold text-white tracking-wide" x-text="app.name"></div>
<div :className="getCategoryColor(app.category)" className="text-[9px] font-medium tracking-wider uppercase opacity-80" x-text="app.category"></div>
</div>
</div>
</template>

<template x-if="viewMode === 'list'">
<div className="flex items-center w-full gap-4">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700/50">
<span :data-icon="app.icon.includes(':') ? app.icon : 'solar:box-bold-duotone'" className="iconify text-lg"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-xs font-medium text-zinc-200 truncate" x-text="app.name"></h3>
<p className="text-[10px] truncate text-zinc-600" x-text="app.url"></p>
</div>
<span :className="getCategoryColor(app.category)" className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800" x-text="app.category"></span>
</div>
</template>
</div>
</template>

<template x-htmlFor="i in (viewMode === 'grid' ? 8 : 0)">
<div className="iso-block ghost-slot opacity-20 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
</template>

<div :className="viewMode === 'list' ? 'py-4 border-2 border-dashed border-zinc-800 rounded-lg hover:border-zinc-700' : 'iso-block ghost-slot hover:border-white/20 hover:bg-white/5'" @click="openModal()" className="cursor-pointer flex items-center justify-center text-zinc-600 hover:text-white transition-colors">
<i className="w-6 h-6 app-icon" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</div>

<div className="ui-layer bottom-0 left-0 right-0 p-8 flex justify-between items-end bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">

<div className="ui-interactive group">
<div className="text-[9px] text-zinc-600 font-mono mb-1 uppercase tracking-widest">WORKSPACE</div>
<input @change="savePageName" className="bg-transparent text-2xl font-semibold text-zinc-200 focus:outline-none border-b border-transparent focus:border-indigo-500/50 transition-all w-48 tracking-tight placeholder-zinc-800 font-sans" placeholder="Untitled" type="text" x-model="pageNames[currentPage]"/>
</div>

<div className="flex gap-2 pb-2 ui-interactive">
<template x-htmlFor="i in 5">
<button :className="currentPage === i-1 ? 'bg-indigo-500 w-4' : 'bg-zinc-800 hover:bg-zinc-600'" @click="setPage(i-1)" className="w-1.5 h-1.5 rounded-full transition-all duration-300">
</button>
</template>
</div>
</div>

<div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm" x-cloak="" x-show="showModal" x-transition.opacity="">
<div @click.away="closeModal()" className="w-full max-w-sm p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl relative">
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-semibold text-white tracking-tight" x-text="editMode ? 'Edit Object' : 'New Object'"></h2>
<button @click="closeModal()" className="text-zinc-500 hover:text-white"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Name</label>
<input className="w-full bg-black/20 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none transition-all placeholder-zinc-700" type="text" x-model="form.name"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Category</label>
<input className="w-full bg-black/20 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none transition-all" list="categories" type="text" x-model="form.category"/>
<datalist id="categories">
<option value="Google"></option>
<option value="Aura"></option>
<option value="Work"></option>
<option value="Social"></option>
<option value="Dev"></option>
</datalist>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Page</label>
<select className="w-full bg-black/20 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none transition-all appearance-none" x-model="form.page">
<template x-htmlFor="(name, idx) in pageNames">
<option :value="idx" x-text="name || 'Page ' + (idx+1)"></option>
</template>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">URL</label>
<div className="flex gap-2">
<input className="w-full bg-black/20 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none transition-all placeholder-zinc-700" type="url" x-model="form.url"/>
<button @click="fetchMeta" className="bg-zinc-800 px-2.5 rounded-md border border-zinc-700/50 hover:bg-zinc-700"><i className="w-3.5 h-3.5 text-indigo-400" data-lucide="wand-2"></i></button>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Icon</label>
<div className="flex gap-3 items-center">
<div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center border border-zinc-700/50 overflow-hidden shrink-0">
<template x-if="form.icon.startsWith('http') || form.icon.startsWith('data:')">
<img :src="form.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="!form.icon.startsWith('http') &amp;&amp; !form.icon.startsWith('data:')">
<span :data-icon="form.icon || 'solar:link-circle-bold-duotone'" className="iconify text-xl text-zinc-400"></span>
</template>
</div>
<div className="flex-1 space-y-1.5">
<input className="w-full bg-black/20 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none" placeholder="iconify:name" type="text" x-model="form.icon"/>
<label className="inline-flex items-center gap-1.5 cursor-pointer text-[10px] text-zinc-500 hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="upload"></i> <span>Upload Local Image</span>
<input @change="handleFileUpload" accept="image/*" className="hidden" type="file"/>
</label>
</div>
</div>
</div>
<div className="pt-4 flex justify-end gap-3 border-t border-zinc-800/50 mt-2">
<button @click="deleteAppWrapper" className="text-red-500 text-[10px] hover:text-red-400 mr-auto px-1" x-show="editMode">DELETE</button>
<button @click="closeModal()" className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors">Cancel</button>
<button @click="saveApp()" className="px-4 py-1.5 bg-zinc-100 hover:bg-white text-black text-xs font-semibold rounded-md shadow-lg transition-transform transform active:scale-95">Save</button>
</div>
</div>
</div>
</div>

<div :style={{`top: '${contextMenu.y}px', left: '${contextMenu.x}px`'}} @click.away="contextMenu.show = false" className="fixed z-[160] w-40 bg-zinc-900/95 border border-zinc-800 rounded-lg shadow-xl py-1 backdrop-blur-md" x-cloak="" x-show="contextMenu.show">
<div className="px-3 py-1.5 border-b border-zinc-800 mb-1">
<p className="text-[10px] font-semibold text-zinc-400 truncate uppercase tracking-wider" x-text="contextMenu.app?.name"></p>
</div>
<button @click="launchApp(contextMenu.app)" className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-indigo-500/10 hover:text-indigo-400 flex items-center gap-2"><i className="w-3 h-3" data-lucide="external-link"></i> Open</button>
<button @click="editApp(contextMenu.app)" className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-white flex items-center gap-2"><i className="w-3 h-3" data-lucide="edit-2"></i> Edit</button>
<div className="relative group">
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-white flex items-center justify-between">
<div className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="arrow-right-circle"></i> Move</div>
<i className="w-3 h-3 opacity-50" data-lucide="chevron-right"></i>
</button>
<div className="absolute left-full top-0 ml-1 w-24 bg-zinc-900 border border-zinc-800 rounded shadow-xl hidden group-hover:block">
<template x-htmlFor="(name, idx) in pageNames">
<button @click="moveAppToPage(contextMenu.app, idx)" className="w-full text-left px-3 py-1.5 text-[10px] text-zinc-400 hover:bg-white/5 hover:text-white truncate" x-text="name || 'Page '+(idx+1)"></button>
</template>
</div>
</div>
<div className="h-px bg-zinc-800 my-1"></div>
<button @click="deleteApp(contextMenu.app.id)" className="w-full text-left px-3 py-1.5 text-xs text-red-500 hover:bg-red-900/10 flex items-center gap-2"><i className="w-3 h-3" data-lucide="trash"></i> Delete</button>
</div>


    </>
  );
}
