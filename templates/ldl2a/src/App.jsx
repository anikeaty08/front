import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



        // ------------------------------------------------------------------
        // FIREBASE CONFIG & IMPORTS
        // ------------------------------------------------------------------
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
        import { getFirestore, doc, onSnapshot, setDoc, serverTimestamp, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A",
            authDomain: "livedesklauncher.firebaseapp.com",
            projectId: "livedesklauncher",
            storageBucket: "livedesklauncher.firebasestorage.app",
            messagingSenderId: "719865623018",
            appId: "1:719865623018:web:104315b70c32db5bd4c293",
            measurementId: "G-N1XRVV5SNJ"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        // Offline Persistence
        try {
            enableIndexedDbPersistence(db).catch((err) => {
                if (err.code == 'failed-precondition') {
                    console.warn('Persistence failed: Multiple tabs open');
                } else if (err.code == 'unimplemented') {
                    console.warn('Persistence not supported by browser');
                }
            });
        } catch (e) { console.log("Persistence init skipped"); }

        // ------------------------------------------------------------------
        // STATE MANAGEMENT
        // ------------------------------------------------------------------
        const DEFAULT_APPS = [
            { id: '1', name: 'WhatsApp', url: 'https://web.whatsapp.com', icon: 'solar:chat-round-line-duotone' },
            { id: '2', name: 'Gmail', url: 'https://mail.google.com', icon: 'solar:letter-bold-duotone' },
            { id: '3', name: 'YouTube', url: 'https://youtube.com', icon: 'solar:play-circle-bold-duotone' },
            { id: '4', name: 'Calendar', url: 'https://calendar.google.com', icon: 'solar:calendar-bold-duotone' },
            { id: '5', name: 'Notion', url: 'https://notion.so', icon: 'solar:notebook-bold-duotone' },
        ];

        let currentState = {
            apps: JSON.parse(localStorage.getItem('launcher_apps')) || DEFAULT_APPS,
            uid: null
        };

        // DOM Elements
        const gridEl = document.getElementById('app-grid');
        const ghostGridEl = document.getElementById('ghost-grid');
        const btnAdd = document.getElementById('btn-add');
        const inputName = document.getElementById('input-name');
        const inputUrl = document.getElementById('input-url');
        const inputIcon = document.getElementById('input-icon');

        // ------------------------------------------------------------------
        // CORE FUNCTIONS
        // ------------------------------------------------------------------
        
        function renderGrid() {
            gridEl.innerHTML = '';
            
            currentState.apps.forEach(app => {
                const el = document.createElement('div');
                el.className = 'app-icon-container flex flex-col items-center gap-2 cursor-pointer group select-none relative';
                el.setAttribute('data-id', app.id);
                el.setAttribute('data-url', app.url);
                
                // Icon Container
                const iconBox = document.createElement('div');
                iconBox.className = 'w-[60px] h-[60px] bg-zinc-900 rounded-2xl flex items-center justify-center text-white border border-zinc-800 group-hover:border-zinc-600 transition-colors shadow-sm';
                
                // Iconify Element
                const icon = document.createElement('iconify-icon');
                icon.setAttribute('icon', app.icon || 'solar:asteroid-bold-duotone');
                icon.setAttribute('width', '28');
                icon.setAttribute('height', '28');
                icon.className = 'text-zinc-200';
                
                iconBox.appendChild(icon);
                
                // Label
                const label = document.createElement('span');
                label.className = 'text-[10px] text-zinc-400 font-medium tracking-tight text-center truncate w-full px-1 group-hover:text-zinc-200';
                label.textContent = app.name;

                // Delete Button (Small x on hover/longpress context)
                const delBtn = document.createElement('button');
                delBtn.className = 'absolute -top-1 -right-1 w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-500';
                delBtn.innerHTML = `<i data-lucide="x" stroke-width="2" class="w-3 h-3 text-white"></i>`;
                delBtn.onclick = (e) => {
                    e.stopPropagation();
                    deleteApp(app.id);
                };

                el.appendChild(iconBox);
                el.appendChild(label);
                el.appendChild(delBtn);
                
                // Click Handler (Navigation)
                el.addEventListener('click', (e) => {
                    // Prevent navigation if we are dragging
                    if (el.classList.contains('sortable-drag')) return;
                    window.open(app.url, '_blank');
                });

                gridEl.appendChild(el);
            });

            // Re-init Lucide icons for delete buttons
            lucide.createIcons();
            renderGhosts();
        }

        function renderGhosts() {
            ghostGridEl.innerHTML = '';
            // Generate 15 ghost icons
            for(let i=0; i<15; i++) {
                const el = document.createElement('div');
                el.className = 'flex flex-col items-center gap-2';
                el.innerHTML = `
                    <div class="w-[60px] h-[60px] bg-zinc-900/30 rounded-2xl border border-zinc-800/30"></div>
                    <div class="w-10 h-2 bg-zinc-900/30 rounded-full"></div>
                `;
                ghostGridEl.appendChild(el);
            }
        }

        // ------------------------------------------------------------------
        // DATA PERSISTENCE
        // ------------------------------------------------------------------

        // 1. Local Save
        function saveLocal() {
            localStorage.setItem('launcher_apps', JSON.stringify(currentState.apps));
        }

        // 2. Cloud Save (Debounced)
        let debounceTimer;
        function saveToCloud() {
            if (!currentState.uid) return;

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(async () => {
                try {
                    const docRef = doc(db, "users", currentState.uid, "launcher", "state");
                    await setDoc(docRef, {
                        apps: currentState.apps,
                        updatedAt: serverTimestamp()
                    });
                } catch (e) {
                    console.error("Cloud save failed", e);
                }
            }, 500); // 500ms debounce
        }

        // Unified Update
        function updateState(newApps) {
            currentState.apps = newApps;
            saveLocal();
            renderGrid();
            saveToCloud();
        }

        function addApp(name, url, icon) {
            const newApp = {
                id: Date.now().toString(),
                name: name,
                url: url.startsWith('http') ? url : `https://${url}`,
                icon: icon || 'solar:link-circle-bold-duotone'
            };
            const newApps = [...currentState.apps, newApp];
            updateState(newApps);
        }

        function deleteApp(id) {
            const newApps = currentState.apps.filter(app => app.id !== id);
            updateState(newApps);
        }

        // ------------------------------------------------------------------
        // DRAG & DROP (SortableJS)
        // ------------------------------------------------------------------
        Sortable.create(gridEl, {
            animation: 200,
            delay: 150, // Slight delay for touch to prevent drag on tap
            delayOnTouchOnly: true,
            ghostClass: 'opacity-50',
            dragClass: 'scale-105',
            onEnd: (evt) => {
                if (evt.oldIndex === evt.newIndex) return;

                // Reorder array based on DOM
                const itemIds = Array.from(gridEl.children).map(el => el.getAttribute('data-id'));
                const reorderedApps = itemIds.map(id => currentState.apps.find(a => a.id === id)).filter(Boolean);
                
                // Update state without re-rendering grid to keep animation smooth
                currentState.apps = reorderedApps;
                saveLocal();
                saveToCloud();
            }
        });

        // ------------------------------------------------------------------
        // EVENT LISTENERS
        // ------------------------------------------------------------------
        btnAdd.addEventListener('click', () => {
            const name = inputName.value.trim();
            const url = inputUrl.value.trim();
            const icon = inputIcon.value.trim();

            if (name && url) {
                addApp(name, url, icon);
                inputName.value = '';
                inputUrl.value = '';
                inputIcon.value = '';
            }
        });

        // ------------------------------------------------------------------
        // INITIALIZATION FLOW
        // ------------------------------------------------------------------
        
        // 1. Initial Render (Local Data)
        renderGrid();

        // 2. Auth & Sync
        onAuthStateChanged(auth, (user) => {
            if (user) {
                currentState.uid = user.uid;
                
                // 3. Setup Firestore Listener
                const docRef = doc(db, "users", user.uid, "launcher", "state");
                onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        // Only update if data is effectively different to prevent loops
                        if (JSON.stringify(data.apps) !== JSON.stringify(currentState.apps)) {
                            currentState.apps = data.apps;
                            saveLocal();
                            renderGrid();
                        }
                    } else {
                        // First time cloud setup: write local defaults to cloud
                        saveToCloud();
                    }
                });
            } else {
                signInAnonymously(auth).catch(console.error);
            }
        });

        // Initialize Lucide icons on load
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-full max-w-[420px] bg-black sm:border-x border-zinc-900 flex flex-col">

<div className="h-12 w-full shrink-0"></div>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-32" id="scroll-container">

<div className="grid grid-cols-5 gap-y-6 gap-x-2" id="app-grid">

</div>

<div className="grid grid-cols-5 gap-y-6 gap-x-2 mt-6 opacity-20 pointer-events-none grayscale" id="ghost-grid">

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 p-4 pb-8 z-50">
<div className="flex flex-col gap-3">
<div className="flex gap-2">
<input className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 w-1/3 focus:outline-none focus:border-zinc-600 transition-colors" id="input-name" placeholder="App Name" type="text"/>
<input className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 w-2/3 focus:outline-none focus:border-zinc-600 transition-colors" id="input-url" placeholder="https://..." type="url"/>
</div>
<div className="flex gap-2">
<input className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 flex-1 focus:outline-none focus:border-zinc-600 transition-colors" id="input-icon" placeholder="solar:asteroid-bold-duotone" type="text"/>
<button className="bg-white text-black font-semibold rounded-lg px-4 py-2 text-xs hover:bg-zinc-200 transition-colors flex items-center gap-2" id="btn-add">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                        Add
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
