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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f1f1f',
950: '#0a0a0a',
}
}
}
}
}



        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
        import { getAuth, signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
        import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A",
            authDomain: "livedesklauncher.firebaseapp.com",
            databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "livedesklauncher",
            storageBucket: "livedesklauncher.firebasestorage.app",
            messagingSenderId: "719865623018",
            appId: "1:719865623018:web:104315b70c32db5bd4c293",
            measurementId: "G-N1XRVV5SNJ"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getDatabase(app);

        // Expose logic to Alpine
        window.firebaseApp = { auth, db, ref, set, onValue, signInAnonymously, onAuthStateChanged, signInWithPopup, GoogleAuthProvider };
    


        document.addEventListener('alpine:init', () => {
            Alpine.data('auraApp', () => ({
                user: null,
                online: navigator.onLine,
                modalOpen: false,
                apps: [],
                newApp: { name: '', url: '', icon: 'solar:star-bold-duotone' },
                sortable: null,
                
                // Default Apps Configuration
                defaults: [
                    { id: 'wa', name: 'WhatsApp', url: 'https://web.whatsapp.com', icon: 'solar:chat-round-dots-bold-duotone' },
                    { id: 'yt', name: 'YouTube', url: 'https://youtube.com', icon: 'solar:play-circle-bold-duotone' },
                    { id: 'gm', name: 'Gmail', url: 'https://mail.google.com', icon: 'solar:letter-bold-duotone' },
                    { id: 'x', name: 'X', url: 'https://twitter.com', icon: 'solar:close-circle-bold-duotone' },
                    { id: 'rd', name: 'Reddit', url: 'https://reddit.com', icon: 'solar:mask-hkk-bold-duotone' },
                    { id: 'ig', name: 'Instagram', url: 'https://instagram.com', icon: 'solar:camera-bold-duotone' },
                    { id: 'tg', name: 'Telegram', url: 'https://web.telegram.org', icon: 'solar:plain-2-bold-duotone' },
                    { id: 'gpt', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'solar:magic-stick-3-bold-duotone' },
                    { id: 'gem', name: 'Gemini', url: 'https://gemini.google.com', icon: 'solar:stars-bold-duotone' },
                    { id: 'not', name: 'Notion', url: 'https://notion.so', icon: 'solar:notebook-bold-duotone' },
                    { id: 'spo', name: 'Spotify', url: 'https://open.spotify.com', icon: 'solar:music-note-slider-bold-duotone' },
                    { id: 'dis', name: 'Discord', url: 'https://discord.com/app', icon: 'solar:gamepad-bold-duotone' },
                    { id: 'gh', name: 'GitHub', url: 'https://github.com', icon: 'solar:code-circle-bold-duotone' },
                    { id: 'nf', name: 'Netflix', url: 'https://netflix.com', icon: 'solar:clapperboard-play-bold-duotone' },
                    { id: 'fig', name: 'Figma', url: 'https://figma.com', icon: 'solar:pen-new-square-bold-duotone' }
                ],

                async initApp() {
                    // Check local storage first
                    const cached = localStorage.getItem('aura_apps');
                    if (cached) {
                        this.apps = JSON.parse(cached);
                        this.$nextTick(() => this.initSortable());
                    } else {
                        this.apps = [...this.defaults];
                        this.$nextTick(() => this.initSortable());
                    }

                    // Online listener
                    window.addEventListener('online', () => { this.online = true; this.syncToFirebase(); });
                    window.addEventListener('offline', () => this.online = false);

                    // Wait for Firebase to load module
                    const checkFirebase = setInterval(() => {
                        if (window.firebaseApp) {
                            clearInterval(checkFirebase);
                            this.setupFirebase();
                        }
                    }, 50);
                },

                setupFirebase() {
                    const { auth, onAuthStateChanged, signInAnonymously } = window.firebaseApp;

                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            this.user = user;
                            this.listenToDB();
                        } else {
                            // Silent sign-in (Anonymous)
                            signInAnonymously(auth).catch(e => console.error("Auth Error", e));
                        }
                    });
                },

                listenToDB() {
                    const { db, ref, onValue } = window.firebaseApp;
                    const userAppsRef = ref(db, `users/${this.user.uid}/apps`);

                    onValue(userAppsRef, (snapshot) => {
                        const val = snapshot.val();
                        if (val) {
                            this.apps = val;
                            localStorage.setItem('aura_apps', JSON.stringify(val));
                            this.$nextTick(() => {
                                // Refresh icons
                                if (window.Iconify) window.Iconify.scan();
                            });
                        } else {
                            // First time user in DB, save defaults
                            this.syncToFirebase();
                        }
                    });
                },

                syncToFirebase() {
                    if (!this.user || !this.online) return;
                    const { db, ref, set } = window.firebaseApp;
                    set(ref(db, `users/${this.user.uid}/apps`), this.apps);
                },

                signIn() {
                    const { auth, signInWithPopup, GoogleAuthProvider } = window.firebaseApp;
                    const provider = new GoogleAuthProvider();
                    signInWithPopup(auth, provider).catch(e => console.log(e));
                },

                initSortable() {
                    const el = document.getElementById('app-grid');
                    if (this.sortable) this.sortable.destroy();

                    this.sortable = new Sortable(el, {
                        animation: 200,
                        delay: 150, // Slight delay prevents accidental drag on tap
                        delayOnTouchOnly: true,
                        ghostClass: 'opacity-50',
                        onEnd: (evt) => {
                            const item = this.apps.splice(evt.oldIndex, 1)[0];
                            this.apps.splice(evt.newIndex, 0, item);
                            // Update local
                            localStorage.setItem('aura_apps', JSON.stringify(this.apps));
                            // Sync remote
                            this.syncToFirebase();
                        }
                    });
                },

                launch(app) {
                    window.open(app.url, '_blank');
                },

                openModal() {
                    this.newApp = { name: '', url: '', icon: 'solar:star-bold-duotone' };
                    this.modalOpen = true;
                },

                closeModal() {
                    this.modalOpen = false;
                },

                saveNewApp() {
                    if (!this.newApp.name || !this.newApp.url) return;
                    
                    // Simple URL validation prefix
                    let url = this.newApp.url;
                    if (!/^https?:\/\//i.test(url)) {
                        url = 'https://' + url;
                    }

                    const app = {
                        id: Date.now().toString(36),
                        name: this.newApp.name,
                        url: url,
                        icon: this.newApp.icon || 'solar:globe-bold-duotone'
                    };

                    this.apps.push(app);
                    localStorage.setItem('aura_apps', JSON.stringify(this.apps));
                    this.syncToFirebase();
                    this.closeModal();
                    
                    this.$nextTick(() => {
                         if (window.Iconify) window.Iconify.scan();
                    });
                },

                removeApp(id) {
                    if(confirm("Remove this app?")) {
                        this.apps = this.apps.filter(a => a.id !== id);
                        localStorage.setItem('aura_apps', JSON.stringify(this.apps));
                        this.syncToFirebase();
                    }
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-zinc-900/20 to-transparent"></div>
</div>

<div className="fixed top-4 right-4 z-50 flex items-center gap-2" x-cloak="" x-show="!user">
<button @click="signIn" className="text-xs font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full transition-colors border border-white/5">
            Sign In
        </button>
</div>

<main className="relative h-full w-full flex flex-col pt-12">

<header className="px-6 mb-4 flex justify-between items-end">
<h1 className="text-3xl font-semibold tracking-tight text-white leading-none">Aura</h1>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" title="Online" x-show="online"></div>
</header>

<div className="flex-1 overflow-y-auto pb-40 px-4" id="scroll-container">
<div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-x-2 gap-y-6 mx-auto max-w-7xl" id="app-grid">

<template :key="app.id" x-htmlFor="(app, index) in apps">
<div :data-id="app.id" @click="launch(app)" className="flex flex-col items-center gap-2 group cursor-pointer relative">

<button @click.stop="removeApp(app.id)" className="absolute -top-1 -right-1 z-10 bg-red-500/80 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity" title="Remove">
<span className="iconify w-3 h-3" data-icon="solar:trash-bin-trash-bold-duotone"></span>
</button>
<div className="app-card w-16 h-16 rounded-[1.2rem] bg-zinc-900/60 border border-white/5 shadow-lg flex items-center justify-center text-3xl text-white/80 group-hover:bg-zinc-800/80 group-hover:text-white group-hover:shadow-white/5 transition-all relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span :data-icon="app.icon" className="iconify relative z-10"></span>
</div>
<span className="text-[10px] font-medium tracking-wide text-white/50 group-hover:text-white/80 truncate w-full text-center" x-text="app.name"></span>
</div>
</template>
</div>

<div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-x-2 gap-y-6 mt-6 opacity-30 ghost-fade pointer-events-none mx-auto max-w-7xl">
<template x-htmlFor="i in 15">
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-[1.2rem] bg-zinc-900/30 border border-white/5"></div>
<div className="h-2 w-8 bg-zinc-900/30 rounded-full"></div>
</div>
</template>
</div>
</div>
</main>

<div className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none">
<button @click="openModal" className="pointer-events-auto bg-white text-black rounded-full p-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform">
<span className="iconify w-6 h-6" data-icon="solar:add-circle-bold-duotone"></span>
</button>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm" x-cloak="" x-show="modalOpen" x-transition.opacity="">
<div @click.outside="closeModal" className="bg-zinc-950 border border-white/10 rounded-3xl p-6 w-full max-w-sm shadow-2xl transform transition-all">
<h2 className="text-lg font-semibold text-white mb-6 tracking-tight flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="solar:widget-add-bold-duotone"></span>
                Add Application
            </h2>
<div className="space-y-4">
<div>
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold ml-1">App Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-colors placeholder-zinc-700" placeholder="e.g. Dribbble" type="text" x-model="newApp.name"/>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold ml-1">URL</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-colors placeholder-zinc-700" placeholder="https://..." type="url" x-model="newApp.url"/>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold ml-1">Icon (Solar Name)</label>
<div className="flex gap-2">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-colors placeholder-zinc-700" placeholder="solar:basketball-bold-duotone" type="text" x-model="newApp.icon"/>
<div className="w-12 h-11 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<span :data-icon="newApp.icon || 'solar:question-circle-bold-duotone'" className="iconify text-xl text-white/80"></span>
</div>
</div>
<a className="text-[10px] text-blue-400 mt-1 ml-1 hover:underline" href="https://icon-sets.iconify.design/solar/?query=bold+duotone" target="_blank">Find icons here</a>
</div>
</div>
<div className="flex gap-3 mt-8">
<button @click="closeModal" className="flex-1 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">Cancel</button>
<button @click="saveNewApp" className="flex-1 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">Add App</button>
</div>
</div>
</div>




    </>
  );
}
