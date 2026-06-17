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
fontFamily: { sans: ['Nunito', 'sans-serif'] },
colors: {
aura: {
bg: '#000000',
surface: '#0A0A0A',
border: '#1A1A1A'
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
        import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

        // --- Configuration ---
        const firebaseConfig = {
            apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A",
            authDomain: "livedesklauncher.firebaseapp.com",
            projectId: "livedesklauncher",
            storageBucket: "livedesklauncher.firebasestorage.app",
            messagingSenderId: "719865623018",
            appId: "1:719865623018:web:104315b70c32db5bd4c293",
            measurementId: "G-N1XRVV5SNJ",
            databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app"
        };

        const DEFAULT_APPS = [
            { id: 'wa', name: 'WhatsApp', url: 'https://web.whatsapp.com', icon: 'solar:chat-round-dots-bold-duotone' },
            { id: 'gm', name: 'Gmail', url: 'https://mail.google.com', icon: 'solar:letter-bold-duotone' },
            { id: 'yt', name: 'YouTube', url: 'https://youtube.com', icon: 'solar:play-stream-bold-duotone' },
            { id: 'x', name: 'X', url: 'https://twitter.com', icon: 'solar:planet-bold-duotone' },
            { id: 'gpt', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'solar:black-hole-bold-duotone' },
            { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', icon: 'solar:stars-bold-duotone' },
            { id: 'ig', name: 'Instagram', url: 'https://instagram.com', icon: 'solar:camera-bold-duotone' },
            { id: 'rd', name: 'Reddit', url: 'https://reddit.com', icon: 'solar:bomb-emoji-bold-duotone' },
            { id: 'sp', name: 'Spotify', url: 'https://open.spotify.com', icon: 'solar:music-library-2-bold-duotone' },
            { id: 'gh', name: 'GitHub', url: 'https://github.com', icon: 'solar:code-circle-bold-duotone' },
        ];

        // --- State Management ---
        let app, auth, db;
        let currentUser = null;
        let apps = [];
        let isDragging = false;
        let dbRef = null;

        // --- Initialization ---
        try {
            app = initializeApp(firebaseConfig);
            auth = getAuth(app);
            db = getDatabase(app);
        } catch (error) {
            console.error("Firebase Init Error", error);
        }

        const gridEl = document.getElementById('app-grid');
        const networkIndicator = document.getElementById('network-indicator');
        const loginPlaceholder = document.getElementById('login-placeholder');
        const userAvatar = document.getElementById('user-avatar');
        const greeting = document.getElementById('greeting');
        const authBtn = document.getElementById('auth-btn');

        // --- Core Functions ---

        function renderGrid() {
            if (isDragging) return; // Don't re-render while user is moving items

            gridEl.innerHTML = '';
            
            apps.forEach(item => {
                const el = document.createElement('div');
                el.className = 'group relative flex flex-col items-center gap-1.5 touch-manipulation cursor-pointer select-none';
                el.dataset.id = item.id;
                
                // Icon Container
                el.innerHTML = `
                    <a href="${item.url}" target="_blank" class="block relative w-full aspect-square rounded-[18px] bg-neutral-900/60 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-neutral-800 group-hover:border-white/10 group-active:scale-95 shadow-sm shadow-black overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span class="iconify text-[26px] text-neutral-300 group-hover:text-white transition-colors duration-300 drop-shadow-md" data-icon="${item.icon}"></span>
                    </a>
                    <span class="text-[9px] font-semibold text-neutral-500 tracking-wide text-center leading-none truncate w-full group-hover:text-neutral-300 transition-colors">${item.name}</span>
                `;

                // Long Press / Right Click to Delete
                el.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    if(confirm(`Delete ${item.name}?`)) {
                        deleteApp(item.id);
                    }
                });

                gridEl.appendChild(el);
            });

            // Ghost Slots (Visual Filler)
            const totalSlots = Math.max(25, Math.ceil((apps.length + 1) / 5) * 5);
            const ghostsNeeded = totalSlots - apps.length;
            
            for(let i = 0; i < ghostsNeeded; i++) {
                const ghost = document.createElement('div');
                ghost.className = 'aspect-square rounded-[18px] border border-white/5 bg-white/[0.01] opacity-20 pointer-events-none';
                gridEl.appendChild(ghost);
            }
        }

        function updateApps(newApps, save = true) {
            apps = newApps;
            renderGrid();
            
            if (save) {
                if (currentUser && db) {
                    set(dbRef, apps).then(() => {
                        flashStatus('bg-emerald-500');
                    }).catch(() => {
                        flashStatus('bg-red-500');
                    });
                }
                // Always back up to local storage
                localStorage.setItem('aura_apps', JSON.stringify(apps));
            }
        }

        function deleteApp(id) {
            const newApps = apps.filter(a => a.id !== id);
            updateApps(newApps);
        }

        function flashStatus(colorClass) {
            networkIndicator.className = `w-1.5 h-1.5 rounded-full transition-colors duration-300 ${colorClass} shadow-[0_0_8px_currentColor]`;
            setTimeout(() => {
                if(currentUser) networkIndicator.className = "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
                else networkIndicator.className = "w-1.5 h-1.5 rounded-full bg-neutral-700";
            }, 800);
        }

        // --- Auth & Sync Logic ---

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Logged In
                currentUser = user;
                loginPlaceholder.classList.add('hidden');
                userAvatar.src = user.photoURL;
                userAvatar.classList.remove('hidden');
                greeting.textContent = `Welcome back, ${user.displayName.split(' ')[0]}`;
                networkIndicator.className = "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
                
                // DB Reference
                dbRef = ref(db, `users/${user.uid}/apps`);

                // Listen for changes
                onValue(dbRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        apps = data;
                        renderGrid();
                    } else {
                        // First time sync or empty
                        updateApps(DEFAULT_APPS);
                    }
                });

            } else {
                // Logged Out
                currentUser = null;
                dbRef = null;
                loginPlaceholder.classList.remove('hidden');
                userAvatar.classList.add('hidden');
                greeting.textContent = "Local Mode";
                networkIndicator.className = "w-1.5 h-1.5 rounded-full bg-neutral-700";

                // Load from LocalStorage
                const localData = localStorage.getItem('aura_apps');
                apps = localData ? JSON.parse(localData) : DEFAULT_APPS;
                renderGrid();
            }
        });

        // Sign In / Out
        authBtn.addEventListener('click', () => {
            if (currentUser) {
                if(confirm('Sign out of Cloud Sync?')) signOut(auth);
            } else {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider).catch((error) => {
                    alert("Sign in failed: " + error.message);
                });
            }
        });

        // --- UI Interactions ---

        // Sortable JS
        Sortable.create(gridEl, {
            animation: 250,
            draggable: ".group", // The app item class
            delay: 200, // Prevent accidental drag on tap
            delayOnTouchOnly: true,
            onStart: () => { isDragging = true; navigator.vibrate?.(10); },
            onEnd: (evt) => {
                isDragging = false;
                if (evt.oldIndex === evt.newIndex) return;
                
                // Reorder array
                const item = apps.splice(evt.oldIndex, 1)[0];
                apps.splice(evt.newIndex, 0, item);
                
                updateApps(apps);
            }
        });

        // Drawer Logic
        const drawer = document.getElementById('drawer');
        const openDrawer = document.getElementById('add-trigger');
        const closeDrawer = document.getElementById('close-drawer');
        const addForm = document.getElementById('add-form');

        const toggleDrawer = (show) => {
            if(show) drawer.classList.remove('translate-y-full');
            else drawer.classList.add('translate-y-full');
        };

        openDrawer.addEventListener('click', () => toggleDrawer(true));
        closeDrawer.addEventListener('click', () => toggleDrawer(false));
        
        // Add App
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('app-name').value;
            let url = document.getElementById('app-url').value;
            const iconVal = document.getElementById('app-icon').value;
            
            if (!url.startsWith('http')) url = 'https://' + url;

            const newApp = {
                id: 'app_' + Date.now(),
                name: name,
                url: url,
                icon: iconVal || 'solar:link-circle-bold-duotone'
            };

            const newAppsList = [...apps, newApp];
            updateApps(newAppsList);
            
            addForm.reset();
            toggleDrawer(false);
        });

        // Lucide Icons
        lucide.createIcons();
    
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
      

<main className="relative w-full h-full max-w-[480px] bg-black flex flex-col overflow-hidden sm:border-x sm:border-neutral-900 shadow-2xl">

<header className="pt-10 pb-4 px-6 flex justify-between items-center z-20 bg-gradient-to-b from-black via-black/90 to-transparent sticky top-0">
<div>
<h1 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
                    Aura
                    
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 transition-colors duration-300 shadow-[0_0_8px_rgba(0,0,0,0.5)]" id="network-indicator"></span>
</h1>
<p className="text-xs text-neutral-500 font-medium tracking-wide" id="greeting">Cloud Workspace</p>
</div>
<div className="flex items-center gap-3">

<button className="relative group rounded-full overflow-hidden transition-all active:scale-95" id="auth-btn">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-800 group-hover:text-white transition-colors" id="login-placeholder">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
</div>
<img alt="User" className="w-8 h-8 rounded-full hidden border border-neutral-800 object-cover" id="user-avatar" src=""/>
</button>

<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 active:scale-90 transition-all" id="add-trigger">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 relative pb-32" id="scroll-area">

<div className="grid grid-cols-5 gap-x-3 gap-y-4 pt-2 pb-10 min-h-[300px]" id="app-grid">

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10"></div>

<div className="absolute inset-x-0 bottom-0 bg-[#0A0A0A] border-t border-neutral-800/50 rounded-t-[32px] transform translate-y-full transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) z-50 shadow-[0_-10px_40px_-10px_rgba(0,0,0,1)]" id="drawer">
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-semibold text-white tracking-wide">Add Application</h2>
<button className="p-2 -mr-2 text-neutral-500 hover:text-white transition-colors" id="close-drawer">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<form className="space-y-4" id="add-form">
<div className="group">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3.5 text-xs font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all" id="app-name" placeholder="Name (e.g. Linear)" required="" type="text"/>
</div>
<div className="group">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3.5 text-xs font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all" id="app-url" placeholder="URL (e.g. https://linear.app)" required="" type="url"/>
</div>
<div className="group relative">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl pl-4 pr-10 py-3.5 text-xs font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all" id="app-icon" placeholder="Icon (e.g. solar:layers-bold-duotone)" type="text"/>
<a className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white" href="https://icon-sets.iconify.design/solar/" target="_blank">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
</a>
</div>
<button className="w-full bg-white text-black font-bold text-xs py-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                        Add to Home
                    </button>
</form>
</div>
</div>
</main>



    </>
  );
}
