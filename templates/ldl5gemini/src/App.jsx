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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
void: '#09090b',
surface: '#18181b',
},
boxShadow: {
'block': '0 10px 20px -5px rgba(0, 0, 0, 0.6)',
'block-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
'block-active': '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
'inner-light': 'inset 0 2px 0 rgba(255, 255, 255, 0.15)'
}
}
}
}



        // --- FIREBASE CONFIG (PRESERVED) ---
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

        // --- SEED DATA ---
        const defaultApps = [
            { id: '1', name: 'Inbox', icon: 'lucide:mail', color: 'blue', url: 'mailto:' },
            { id: '2', name: 'Spotify', icon: 'lucide:music', color: 'green', url: 'https://spotify.com' },
            { id: '3', name: 'Gallery', icon: 'lucide:image', color: 'purple', url: '' },
            { id: '4', name: 'Chrome', icon: 'lucide:globe', color: 'orange', url: 'https://google.com' },
            { id: '5', name: 'Terminal', icon: 'lucide:terminal', color: 'dark', url: '' },
            { id: '6', name: 'Youtube', icon: 'lucide:youtube', color: 'red', url: 'https://youtube.com' },
            { id: '7', name: 'Notion', icon: 'simple-icons:notion', color: 'dark', url: 'https://notion.so' },
            { id: '8', name: 'Slack', icon: 'lucide:message-circle', color: 'purple', url: '' },
        ];

        // --- APP LOGIC ---
        function app() {
            return {
                user: null,
                apps: [],
                time: '',
                date: '',
                showAuthModal: false,
                showAddModal: false,
                editMode: false,
                newApp: { name: '', url: '', color: 'blue' },
                contextMenu: { show: false, x: 0, y: 0, target: null },

                async initApp() {
                    // Initialize Firebase
                    if (!firebase.apps.length) {
                        firebase.initializeApp(firebaseConfig);
                    }
                    this.setupAuthListener();
                    this.startClock();
                    
                    // Initialize Icons
                    lucide.createIcons();
                    
                    // Setup Sortable
                    this.$nextTick(() => {
                        this.initSortable();
                    });
                },

                // --- CLOCK ---
                startClock() {
                    const update = () => {
                        const now = new Date();
                        this.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                        this.date = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
                    };
                    update();
                    setInterval(update, 1000);
                },

                // --- AUTH & DATA ---
                setupAuthListener() {
                    firebase.auth().onAuthStateChanged((user) => {
                        this.user = user;
                        if (user) {
                            this.loadUserData(user.uid);
                            this.showAuthModal = false;
                        } else {
                            // Guest Mode
                            const local = localStorage.getItem('ldl_guest_apps');
                            this.apps = local ? JSON.parse(local) : [...defaultApps];
                        }
                    });
                },

                login() {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(provider).catch(e => console.error(e));
                },

                logout() {
                    firebase.auth().signOut();
                    this.apps = [...defaultApps]; // Reset to default on logout
                },

                toggleAuth() {
                    this.showAuthModal = !this.showAuthModal;
                },

                loadUserData(uid) {
                    const dbRef = firebase.database().ref(`users/${uid}/apps`);
                    dbRef.on('value', (snapshot) => {
                        const val = snapshot.val();
                        if (val) {
                            this.apps = val;
                        } else {
                            dbRef.set(defaultApps);
                            this.apps = [...defaultApps];
                        }
                    });
                },

                saveApps() {
                    if (this.user) {
                        firebase.database().ref(`users/${this.user.uid}/apps`).set(this.apps);
                    } else {
                        localStorage.setItem('ldl_guest_apps', JSON.stringify(this.apps));
                    }
                },

                // --- APP ACTIONS ---
                launchApp(app) {
                    if (this.editMode) return;
                    if (app.url) {
                        window.open(app.url, '_blank');
                    }
                },

                openAddModal() {
                    this.newApp = { name: '', url: '', color: 'blue' };
                    this.showAddModal = true;
                },

                confirmAddApp() {
                    const id = Date.now().toString();
                    const iconMap = {
                        'blue': 'lucide:cloud',
                        'red': 'lucide:heart',
                        'green': 'lucide:leaf',
                        'purple': 'lucide:zap',
                        'orange': 'lucide:flame',
                        'dark': 'lucide:box'
                    };
                    
                    this.apps.push({
                        id,
                        name: this.newApp.name,
                        url: this.newApp.url,
                        color: this.newApp.color,
                        icon: iconMap[this.newApp.color]
                    });
                    
                    this.saveApps();
                    this.showAddModal = false;
                },

                deleteApp(id) {
                    if(confirm('Delete this block?')) {
                        this.apps = this.apps.filter(a => a.id !== id);
                        this.saveApps();
                    }
                },

                toggleEditMode() {
                    this.editMode = !this.editMode;
                },

                // --- CONTEXT MENU ---
                handleRightClick(e, app) {
                    e.preventDefault();
                    this.contextMenu = {
                        show: true,
                        x: Math.min(e.clientX, window.innerWidth - 200),
                        y: Math.min(e.clientY, window.innerHeight - 150),
                        target: app
                    };
                },
                
                handleGlobalRightClick(e) {
                    // Prevent default context menu on body
                },

                closeContextMenu() {
                    this.contextMenu.show = false;
                },

                // --- DRAG & DROP ---
                initSortable() {
                    const el = document.getElementById('app-grid');
                    Sortable.create(el, {
                        animation: 200,
                        delay: 150, // Small delay to separate click from drag
                        delayOnTouchOnly: true,
                        ghostClass: 'sortable-ghost',
                        draggable: '.block-container',
                        onEnd: (evt) => {
                            // Reorder logic
                            if (evt.oldIndex === evt.newIndex) return;
                            const item = this.apps.splice(evt.oldIndex, 1)[0];
                            this.apps.splice(evt.newIndex, 0, item);
                            this.saveApps();
                        }
                    });
                }
            }
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">

<div @click="toggleAuth" className="hud-glass pointer-events-auto rounded-2xl p-2 pr-4 flex items-center gap-3 transition hover:bg-white/5 cursor-pointer group shadow-lg">
<template x-if="user">
<div className="relative">
<img :src="user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + user.uid" className="w-10 h-10 rounded-xl bg-gray-800 object-cover ring-1 ring-white/10"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
</div>
</template>
<template x-if="!user">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center ring-1 ring-white/10">
<i className="w-5 h-5 text-white/50" data-lucide="user"></i>
</div>
</template>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white/90 leading-tight" x-text="user ? user.displayName : 'Guest User'"></span>
<span className="text-[10px] font-medium text-white/40 uppercase tracking-wider" x-text="user ? 'Cloud Sync' : 'Local Mode'"></span>
</div>
</div>

<div className="flex flex-col items-end pointer-events-auto select-none mix-blend-screen">
<h1 className="text-5xl font-light tracking-tighter text-white drop-shadow-xl" x-text="time">00:00</h1>
<span className="text-sm font-medium text-white/50 tracking-wide uppercase" x-text="date">...</span>
</div>
</header>

<main @click="closeContextMenu" className="flex-1 overflow-y-auto overflow-x-hidden pt-32 pb-32 px-4">
<div className="max-w-6xl mx-auto">

<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-12 justify-items-center p-10 pb-40 min-h-[500px]" id="app-grid">
<template :key="app.id" x-htmlFor="app in apps">
<div :data-id="app.id" @contextmenu.stop="handleRightClick($event, app)" className="block-container group relative flex flex-col items-center">

<button :className="'theme-' + (app.color || 'dark')" @click="launchApp(app)" className="pseudo-block shadow-block hover:shadow-block-hover shadow-inner-light flex items-center justify-center">

<span :data-icon="app.icon || 'lucide:box'" className="iconify text-white w-10 h-10 drop-shadow-md transition-transform duration-200 group-hover:scale-110"></span>
</button>

<span className="floating-label absolute -bottom-8 text-xs font-semibold text-white/90 tracking-tight bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/5 pointer-events-none" x-text="app.name"></span>

<div @click.stop="deleteApp(app.id)" className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-red-400 z-30 animate-bounce" x-show="editMode">
<i className="w-3 h-3 text-white" data-lucide="x"></i>
</div>
</div>
</template>

<div className="block-container flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
<button @click="openAddModal" className="pseudo-block bg-white/5 border-white/10 hover:bg-white/10 flex items-center justify-center !border-b-transparent !shadow-none border-2 border-dashed">
<i className="w-8 h-8 text-white/30" data-lucide="plus"></i>
</button>
<span className="mt-4 text-xs font-medium text-white/30">Add Block</span>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 p-6 flex justify-between items-end pointer-events-none z-40">

<div className="hud-glass pointer-events-auto px-4 py-2 rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="text-xs font-bold text-white/80 tracking-wide uppercase">Workspace</span>
</div>

<div className="flex gap-4 pointer-events-auto">

<button :className="editMode ? 'bg-blue-600 text-white shadow-blue-900/50' : 'hud-glass text-white/70 hover:bg-white/10'" @click="toggleEditMode" className="h-12 w-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</button>

<button @click="openAddModal" className="h-12 w-12 rounded-xl bg-white text-black flex items-center justify-center shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
</div>


<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md" x-cloak="" x-show="showAuthModal" x-transition.opacity="">
<div @click.outside="showAuthModal = false" className="hud-glass border border-white/10 p-8 rounded-3xl w-full max-w-sm text-center shadow-2xl transform transition-all">
<div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
<i className="w-8 h-8 text-white" data-lucide="cloud"></i>
</div>
<h2 className="text-2xl font-semibold mb-2">Sync Your Desk</h2>
<p className="text-sm text-white/50 mb-8 leading-relaxed">Sign in with Google to access your customized layout from any device.</p>
<template x-if="!user">
<button @click="login" className="w-full py-3.5 bg-white text-black rounded-xl font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition shadow-xl flex items-center justify-center gap-2">
<span className="iconify" data-icon="logos:google-icon"></span>
<span>Continue with Google</span>
</button>
</template>
<template x-if="user">
<button @click="logout" className="w-full py-3.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl font-semibold text-sm hover:bg-red-500/20 transition">
                    Sign Out
                </button>
</template>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" x-cloak="" x-show="showAddModal" x-transition.opacity="">
<div @click.outside="showAddModal = false" className="bg-[#18181b] border border-white/10 p-6 rounded-3xl w-full max-w-md shadow-2xl">
<h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-blue-500" data-lucide="package-plus"></i>
                New Block
            </h2>
<div className="space-y-4">
<div>
<label className="text-xs text-white/40 uppercase font-bold tracking-wider ml-1 mb-1 block">Label</label>
<input className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition text-white placeholder-white/20" placeholder="e.g. Figma" type="text" x-model="newApp.name"/>
</div>
<div>
<label className="text-xs text-white/40 uppercase font-bold tracking-wider ml-1 mb-1 block">Destination URL</label>
<input className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition text-white placeholder-white/20" placeholder="https://..." type="text" x-model="newApp.url"/>
</div>
<div>
<label className="text-xs text-white/40 uppercase font-bold tracking-wider ml-1 mb-1 block">Color Theme</label>
<div className="grid grid-cols-6 gap-2 mt-2">
<template x-htmlFor="color in ['blue', 'purple', 'green', 'orange', 'red', 'dark']">
<button :className="`theme-${color} ${newApp.color === color ? 'border-white scale-110 shadow-lg ring-2 ring-white/20' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`" @click="newApp.color = color" className="h-10 rounded-lg border-2 transition-all relative overflow-hidden">
</button>
</template>
</div>
</div>
</div>
<div className="flex gap-3 mt-8">
<button @click="showAddModal = false" className="flex-1 py-3 bg-white/5 rounded-xl text-sm font-medium hover:bg-white/10 transition">Cancel</button>
<button @click="confirmAddApp" className="flex-1 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-200 transition shadow-lg">Create Block</button>
</div>
</div>
</div>

<div :style={{`top: '${contextMenu.y}px', left: '${contextMenu.x}px`'}} @click.outside="closeContextMenu" className="fixed z-[200] w-48 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl py-1 context-menu" x-cloak="" x-show="contextMenu.show" x-transition="">
<div className="px-3 py-2 text-xs text-white/30 font-medium uppercase tracking-wider border-b border-white/5 mb-1">
<span x-text="contextMenu.target ? contextMenu.target.name : 'Options'"></span>
</div>
<button @click="deleteApp(contextMenu.target.id); closeContextMenu()" className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="trash-2"></i>
            Delete Block
        </button>
<button @click="closeContextMenu" className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/5 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="edit-3"></i>
            Edit Details
        </button>
</div>


    </>
  );
}
