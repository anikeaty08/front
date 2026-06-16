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
'pop-in': 'popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
popIn: { '0%': { transform: 'scale(0.95)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
slideUp: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } }
}
}
}
}



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.database();

        const DEFAULT_APPS = [
            { id: '1', name: 'Google Keep', url: 'https://keep.google.com/', icon: 'logos:google-keep', category: 'Productivity' },
            { id: '2', name: 'Spotify', url: 'https://open.spotify.com/', icon: 'logos:spotify-icon', category: 'Entertainment' },
            { id: '3', name: 'Figma', url: 'https://www.figma.com/', icon: 'logos:figma', category: 'Design' },
            { id: '4', name: 'YouTube', url: 'https://www.youtube.com/', icon: 'logos:youtube-icon', category: 'Entertainment' },
            { id: '5', name: 'Notion', url: 'https://www.notion.so/', icon: 'logos:notion-icon', category: 'Productivity' },
            { id: '6', name: 'Gmail', url: 'https://mail.google.com/', icon: 'logos:google-gmail', category: 'Social' },
            { id: '7', name: 'Twitter', url: 'https://twitter.com/', icon: 'logos:twitter', category: 'Social' },
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
                pageTitle: 'Dashboard',

                init() {
                    this.checkViewMode();
                    window.addEventListener('resize', () => { this.checkViewMode(); });
                    
                    auth.onAuthStateChanged(u => {
                        this.user = u; this.loading = false;
                        if (u) {
                            db.ref(`users/${u.uid}/data`).on('value', s => {
                                const val = s.val();
                                this.apps = val?.apps || DEFAULT_APPS;
                                this.pageTitle = val?.pageTitle || 'Dashboard';
                                if(!val) this.saveSettings();
                            });
                        } else {
                            const localApps = localStorage.getItem('ldl_apps');
                            const localTitle = localStorage.getItem('ldl_title');
                            this.apps = localApps ? JSON.parse(localApps) : DEFAULT_APPS;
                            this.pageTitle = localTitle || 'Dashboard';
                        }
                    });
                },

                checkViewMode() { this.viewMode = window.innerWidth < 768 ? 'mobile' : 'desktop'; },
                
                // Dock Computed Properties
                get dockAppsLeft() {
                    const dockCount = 6;
                    const half = Math.floor(Math.min(this.apps.length, dockCount) / 2);
                    return this.apps.slice(0, half);
                },
                get dockAppsRight() {
                    const dockCount = 6;
                    const half = Math.floor(Math.min(this.apps.length, dockCount) / 2);
                    const total = Math.min(this.apps.length, dockCount);
                    return this.apps.slice(half, total);
                },
                get filteredApps() { return this.searchQuery ? this.apps.filter(a => a.name.toLowerCase().includes(this.searchQuery.toLowerCase())) : this.apps; },

                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                logout() { auth.signOut(); this.windows = []; },

                openWindow(app) {
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) { existing.minimized = false; this.focusWindow(existing.id); return; }
                    this.windows.push({
                        id: Date.now(), appId: app.id, title: app.name, content: app.url,
                        x: this.viewMode === 'mobile' ? 0 : 50 + (this.windows.length * 30),
                        y: this.viewMode === 'mobile' ? 0 : 50 + (this.windows.length * 30),
                        w: this.viewMode === 'mobile' ? window.innerWidth : 900,
                        h: this.viewMode === 'mobile' ? window.innerHeight - 80 : 600,
                        zIndex: ++this.zIndexCounter, minimized: false, maximized: this.viewMode === 'mobile'
                    });
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
                    if(x + 220 > window.innerWidth) x = window.innerWidth - 230;
                    if(y + 200 > window.innerHeight) y = window.innerHeight - 210;
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
      

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" x-show="!user &amp;&amp; !loading" x-transition.opacity="">
<div className="w-full max-w-sm p-8 space-y-8 text-center animate-pop-in">
<div className="space-y-3">
<div className="w-24 h-24 mx-auto rounded-[22px] bg-gradient-to-b from-gray-800 to-black border border-gray-700 flex items-center justify-center shadow-2xl">
<span className="iconify text-5xl text-white" data-icon="solar:rocket-2-bold-duotone"></span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-white">LIVEDESK<span className="text-gray-500">OS</span></h1>
</div>
<button @click="signInGoogle" className="w-full py-3 bg-white text-black font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
<span className="iconify text-xl" data-icon="logos:google-icon"></span>
<span>Sign in with Google</span>
</button>
</div>
</div>

<div @click="closeMenus()" @contextmenu.prevent="handleDesktopRightClick($event)" className="h-full w-full relative bg-black select-none" x-cloak="" x-show="user">

<div :className="{'scale-105 blur-sm': startOpen || notifOpen}" className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-700 transform" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1620121692023-5108ec80af12?q=80&amp'}}>
<div className="absolute inset-0 bg-black/40"></div>
</div>

<div className="fixed bottom-24 md:bottom-8 left-6 md:left-8 z-10 group transition-all duration-300">
<div className="relative">
<input @blur="saveSettings" @keyup.enter="$event.target.blur()" className="bg-transparent text-white/40 hover:text-white/80 focus:text-white text-3xl md:text-4xl font-semibold tracking-tight outline-none w-64 md:w-80 transition-colors placeholder-white/20" placeholder="Dashboard" type="text" x-model="pageTitle"/>
<div className="h-1 w-10 bg-white/20 mt-2 rounded-full group-hover:bg-white/50 transition-colors"></div>
</div>
</div>

<main className="relative z-10 w-full h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden custom-scrollbar">
<div className="w-full max-w-7xl mx-auto p-4 md:p-10 pt-10 md:pt-14 pb-32">

<div className="app-grid gap-y-8 gap-x-2 md:gap-x-8 place-items-center transition-all duration-300">

<div @click="openModal('add')" className="flex flex-col items-center gap-2.5 w-full cursor-pointer group opacity-50 hover:opacity-100 transition-all">
<div className="w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-[18px] bg-white/5 border border-dashed border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="iconify text-2xl text-white/50" data-icon="solar:add-circle-linear"></span>
</div>
<span className="text-[11px] font-medium text-white/50">Add App</span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" id="windows-layer">
</div>

<div @click.stop="" className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] md:w-[500px] h-[55vh] glass-modal rounded-2xl flex flex-col overflow-hidden origin-bottom shadow-2xl border border-white/10" x-show="startOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95" x-transition:leave="transition ease-in duration-100" x-transition:leave-end="opacity-0 translate-y-4 scale-95" x-transition:leave-start="opacity-100 translate-y-0 scale-100">
<div className="p-4 border-b border-white/5 bg-white/5">
<div className="relative group">
<span className="iconify absolute left-3 top-2.5 text-gray-400" data-icon="solar:magnifer-linear"></span>
<input className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:bg-black/60 focus:border-white/20 transition-all placeholder:text-gray-500" placeholder="Search apps..." type="text" x-model="searchQuery"/>
</div>
</div>
<div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
<div className="grid grid-cols-5 gap-3">
</div>
</div>
<div className="p-3 bg-black/40 border-t border-white/5 flex justify-between items-center px-5 backdrop-blur-md">
<div className="flex items-center gap-3 text-xs text-white/80">
<div className="w-7 h-7 rounded-full bg-indigo-500/80 flex items-center justify-center text-[10px] font-bold border border-white/10" x-text="user?.email?.[0].toUpperCase()"></div>
<span x-text="user?.email"></span>
</div>
<button @click="logout" className="hover:bg-white/10 p-2 rounded-full text-gray-400 hover:text-white transition-all"><span className="iconify text-lg" data-icon="solar:power-bold"></span></button>
</div>
</div>

<div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-end pointer-events-none">
<div className="dock-glass px-4 py-2 rounded-2xl flex items-end gap-3 pointer-events-auto transform transition-all duration-300 hover:scale-[1.01]">

<div className="flex items-end gap-2">
</div>

<div className="px-2">
<button @click.stop="startOpen = !startOpen" className="relative w-14 h-14 -mb-1 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group">
<div className="w-12 h-12 rounded-[16px] flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all">
<span className="iconify text-3xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-icon="solar:widget-5-bold-duotone"></span>
</div>
</button>
</div>

<div className="flex items-end gap-2">
</div>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[60] w-52 glass-modal rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col border border-white/10" x-show="contextOpen" x-transition.opacity.duration.100ms="">
<div className="px-3 py-1.5 border-b border-white/10 mb-1">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider" x-text="contextApp?.name"></div>
</div>
<button @click="openWindow(contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-white hover:bg-blue-600 flex items-center gap-3 transition-colors group">
<span className="iconify text-sm opacity-70 group-hover:text-white" data-icon="solar:maximize-square-minimalistic-bold"></span> Open Window
            </button>
<button @click="openExternal(contextApp?.url); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-white hover:bg-white/10 flex items-center gap-3 transition-colors">
<span className="iconify text-sm opacity-70" data-icon="solar:arrow-right-up-linear"></span> Open New Tab
            </button>
<div className="h-px bg-white/10 my-1 mx-2"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-gray-200 hover:bg-white/10 flex items-center gap-3 transition-colors">
<span className="iconify text-sm opacity-70" data-icon="solar:pen-bold"></span> Edit App
            </button>
<button @click="deleteApp(contextApp); contextOpen=false" className="px-3 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-500/20 hover:text-red-200 flex items-center gap-3 transition-colors">
<span className="iconify text-sm opacity-70" data-icon="solar:trash-bin-trash-bold"></span> Delete
            </button>
</div>

<div className="fixed inset-0 z-[70] flex items-center justify-center p-4" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" x-transition.opacity=""></div>
<div className="relative w-full max-w-lg glass-modal rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
<h2 className="text-lg font-semibold text-white tracking-tight" x-text="modalMode === 'add' ? 'Add Application' : 'Edit Application'"></h2>
<button @click="closeModal" className="text-gray-400 hover:text-white transition-colors"><span className="iconify text-xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="p-6 space-y-6">

<div className="flex gap-5 items-start">
<div className="w-20 h-20 flex-shrink-0 rounded-[20px] bg-black border border-white/20 flex items-center justify-center overflow-hidden relative shadow-inner">
</div>
<div className="flex-grow space-y-3">
<div className="flex gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-wide border-b border-white/10 pb-1">
<button :className="iconTab==='iconify' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-gray-300'" @click="iconTab='iconify'" className="pb-1 transition-colors">Iconify</button>
<button :className="iconTab==='upload' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-gray-300'" @click="iconTab='upload'" className="pb-1 transition-colors">Upload</button>
</div>
<div x-show="iconTab === 'iconify'">
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:border-blue-500/50 focus:bg-black/60 outline-none transition-all" placeholder="solar:home-bold" type="text" x-model="modalData.icon"/>
<p className="text-[9px] text-gray-500 mt-1">Use icon names from Iconify (e.g. logos:react)</p>
</div>
<div x-show="iconTab === 'upload'">
<label className="flex items-center justify-center w-full py-2.5 bg-black/40 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group border-dashed">
<span className="iconify mr-2 text-gray-400 group-hover:text-white" data-icon="solar:upload-minimalistic-linear"></span>
<span className="text-xs text-gray-300 group-hover:text-white">Choose Image File</span>
<input @change="handleFileUpload" accept="image/*" className="hidden" type="file"/>
</label>
</div>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Name</label>
<input className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Category</label>
<div className="relative">
<select className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500/50 outline-none appearance-none transition-all" x-model="modalData.category">
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
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">URL</label>
<input className="w-full mt-1.5 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700" placeholder="https://..." type="url" x-model="modalData.url"/>
</div>
</div>
<button @click="saveModal" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/20 active:scale-[0.99] transform">
<span x-text="modalMode === 'add' ? 'Add Application' : 'Save Changes'"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
