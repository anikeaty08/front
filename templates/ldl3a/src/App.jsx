import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
zinc: {
850: '#1f2937',
900: '#18181b', // Default zinc-900
925: '#121215', // Custom dark
950: '#09090b', // Deep black
}
}
}
}
}



        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { 
            getAuth, 
            signInWithPopup, 
            GoogleAuthProvider, 
            signInWithEmailAndPassword, 
            createUserWithEmailAndPassword,
            onAuthStateChanged,
            signOut
        } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
        import { 
            getFirestore, 
            doc, 
            setDoc, 
            onSnapshot, 
            serverTimestamp, 
            enableIndexedDbPersistence 
        } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

        // --- Configuration ---
        const firebaseConfig = {
            apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A",
            authDomain: "livedesklauncher.firebaseapp.com",
            projectId: "livedesklauncher",
            storageBucket: "livedesklauncher.firebasestorage.app",
            messagingSenderId: "719865623018",
            appId: "1:719865623018:web:104315b70c32db5bd4c293",
            measurementId: "G-N1XRVV5SNJ"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        try {
            enableIndexedDbPersistence(db).catch(() => {});
        } catch(e) {}

        // --- State ---
        const STORAGE_KEY = 'launcher_state_v1';
        const GRID_SIZE = 30; // 5x6
        
        // Defaults with Lucide icons
        const defaultApps = [
            { id: '1', name: 'WhatsApp', url: 'https://web.whatsapp.com', icon: 'lucide:message-circle' },
            { id: '2', name: 'Gmail', url: 'https://gmail.com', icon: 'lucide:mail' },
            { id: '3', name: 'YouTube', url: 'https://youtube.com', icon: 'lucide:youtube' },
            { id: '4', name: 'Calendar', url: 'https://calendar.google.com', icon: 'lucide:calendar' },
            { id: '5', name: 'Notion', url: 'https://notion.so', icon: 'lucide:file-text' },
        ];

        let apps = [...defaultApps];
        let currentUser = null;
        let unsubscribeSnapshot = null;
        let sortable = null;
        let dragSaveTimeout = null;

        // --- UI References ---
        const ui = {
            login: document.getElementById('login-screen'),
            launcher: document.getElementById('launcher'),
            grid: document.getElementById('app-grid'),
            form: document.getElementById('add-app-form'),
            emailForm: document.getElementById('email-form'),
            btnGoogle: document.getElementById('btn-google'),
            authError: document.getElementById('auth-error'),
            userInitial: document.getElementById('user-initial')
        };

        // --- Data Handling ---
        function saveLocal() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
        }

        function loadLocal() {
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) apps = JSON.parse(stored);
            } catch (e) {
                console.log("Local load error", e);
            }
        }

        async function saveCloud() {
            if (!currentUser) return;
            try {
                const userDoc = doc(db, 'users', currentUser.uid, 'launcher', 'state');
                await setDoc(userDoc, {
                    apps: apps,
                    updatedAt: serverTimestamp()
                }, { merge: true });
            } catch (e) {
                console.error("Cloud save error", e);
            }
        }

        // --- Rendering ---
        function renderApps() {
            ui.grid.innerHTML = '';
            
            // Render Apps
            apps.forEach(app => {
                const el = document.createElement('div');
                el.className = 'group flex flex-col items-center gap-1.5 cursor-pointer relative tap-highlight-transparent';
                el.setAttribute('data-id', app.id);
                
                // Using Lucide 1.5 stroke width via data attribute or class if supported, Iconify handles size
                el.innerHTML = `
                    <div class="w-[52px] h-[52px] rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center shadow-sm group-active:scale-95">
                        <span class="iconify text-[22px] text-zinc-400 group-hover:text-white transition-colors" data-icon="${app.icon || 'lucide:globe'}" data-stroke-width="1.5"></span>
                    </div>
                    <span class="text-[9px] font-medium text-zinc-500 group-hover:text-zinc-300 tracking-tight truncate max-w-[56px] px-0.5 transition-colors select-none">${app.name}</span>
                `;
                
                // Click handling (Sortable handles drag)
                el.onclick = (e) => {
                   if (!el.classList.contains('sortable-dragging')) {
                       window.open(app.url, '_blank');
                   }
                };
                ui.grid.appendChild(el);
            });

            // Render Ghosts
            const remaining = Math.max(0, GRID_SIZE - apps.length);
            for(let i=0; i<remaining; i++) {
                const ghost = document.createElement('div');
                ghost.className = 'flex flex-col items-center gap-1.5 opacity-20 pointer-events-none';
                ghost.innerHTML = `
                    <div class="w-[52px] h-[52px] rounded-xl border border-dashed border-zinc-700 flex items-center justify-center"></div>
                `;
                ui.grid.appendChild(ghost);
            }
        }

        // --- Drag & Drop ---
        function initSortable() {
            if (sortable) sortable.destroy();
            
            sortable = new Sortable(ui.grid, {
                animation: 200,
                delay: 200, // Better touch handling
                delayOnTouchOnly: true,
                draggable: '.group',
                ghostClass: 'opacity-40',
                dragClass: 'sortable-dragging',
                onEnd: (evt) => {
                    if (evt.oldIndex === evt.newIndex) return;
                    
                    // Reorder array
                    const item = apps.splice(evt.oldIndex, 1)[0];
                    apps.splice(evt.newIndex, 0, item);
                    
                    saveLocal();
                    
                    // Debounce cloud save
                    if (dragSaveTimeout) clearTimeout(dragSaveTimeout);
                    dragSaveTimeout = setTimeout(saveCloud, 1000);
                    
                    renderApps(); // Re-render to fix ghost positions
                    initSortable(); // Re-init
                }
            });
        }

        // --- Form Handling ---
        ui.form.onsubmit = async (e) => {
            e.preventDefault();
            const name = document.getElementById('new-app-name').value.trim();
            const urlRaw = document.getElementById('new-app-url').value.trim();
            let icon = document.getElementById('new-app-icon').value.trim();
            
            if (!icon) icon = 'lucide:globe';
            let url = urlRaw;
            if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

            const newApp = {
                id: Date.now().toString(),
                name,
                url,
                icon
            };

            apps.push(newApp);
            saveLocal();
            await saveCloud();
            
            ui.form.reset();
            renderApps();
            initSortable();
            
            // Scroll to bottom
            const container = document.getElementById('scroll-container');
            container.scrollTop = container.scrollHeight;
        };

        // --- Auth Handling ---
        onAuthStateChanged(auth, (user) => {
            if (user) {
                currentUser = user;
                ui.login.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => ui.login.classList.add('hidden'), 500);
                ui.launcher.classList.remove('hidden');
                
                // Set initial
                const initial = user.email ? user.email[0].toUpperCase() : 'U';
                ui.userInitial.textContent = initial;

                // Cloud Listener
                const userDoc = doc(db, 'users', user.uid, 'launcher', 'state');
                unsubscribeSnapshot = onSnapshot(userDoc, (docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        if (data.apps) {
                            apps = data.apps;
                            saveLocal();
                            renderApps();
                            initSortable();
                        }
                    } else {
                        // Init cloud if empty
                        saveCloud();
                    }
                });
            } else {
                currentUser = null;
                if (unsubscribeSnapshot) unsubscribeSnapshot();
                
                ui.login.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
                ui.launcher.classList.add('hidden');
                
                loadLocal(); // Fallback to local
                renderApps();
                initSortable();
            }
        });

        // Login Logic
        ui.btnGoogle.onclick = async () => {
            try {
                const provider = new GoogleAuthProvider();
                await signInWithPopup(auth, provider);
            } catch (error) {
                console.error(error);
            }
        };

        ui.emailForm.onsubmit = async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('btn-email');
            
            const originalText = btn.textContent;
            btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2"></span>';
            
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                    try {
                        await createUserWithEmailAndPassword(auth, email, password);
                    } catch (createErr) {
                        showError(createErr.message);
                    }
                } else {
                    showError(error.message);
                }
            } finally {
                btn.textContent = originalText;
            }
        };

        document.getElementById('btn-logout').onclick = () => signOut(auth);

        function showError(msg) {
            ui.authError.textContent = msg.replace('Firebase:', '').trim();
            ui.authError.classList.remove('opacity-0');
            setTimeout(() => ui.authError.classList.add('opacity-0'), 3000);
        }

        // Init
        loadLocal();
        renderApps();
        initSortable();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-500" id="login-screen">
<div className="w-full max-w-sm p-8 space-y-8 animate-[fade-in_0.5s_ease-out]">
<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 mb-4 shadow-lg shadow-black/50">
<span className="iconify text-xl text-white" data-icon="lucide:command"></span>
</div>
<h1 className="text-xl font-medium tracking-tight text-white">Launcher</h1>
<p className="text-xs text-zinc-500">Sign in to sync your workspace</p>
</div>
<div className="space-y-3">
<button className="group w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black h-10 rounded-lg text-xs font-medium transition-all active:scale-95 shadow-lg shadow-white/5" id="btn-google">
<span className="iconify text-base" data-icon="logos:google-icon"></span>
<span>Continue with Google</span>
</button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-zinc-900"></div>
<span className="flex-shrink-0 mx-3 text-[10px] text-zinc-600 uppercase tracking-wider">Or</span>
<div className="flex-grow border-t border-zinc-900"></div>
</div>
<form className="space-y-2.5" id="email-form">
<input className="w-full h-10 px-3 rounded-lg input-base text-xs text-white placeholder:text-zinc-600" id="email" placeholder="Email address" required="" type="email"/>
<input className="w-full h-10 px-3 rounded-lg input-base text-xs text-white placeholder:text-zinc-600" id="password" placeholder="Password" required="" type="password"/>
<button className="w-full h-10 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-lg text-xs font-medium transition-all active:scale-95 border border-zinc-800" id="btn-email" type="submit">
                        Sign in
                    </button>
<p className="text-[10px] text-red-400 text-center h-3 opacity-0 transition-opacity" id="auth-error"></p>
</form>
</div>
</div>
</div>

<div className="hidden w-full h-full max-w-md mx-auto relative flex flex-col bg-zinc-950 border-x border-zinc-900 shadow-2xl" id="launcher">

<div className="pt-6 pb-4 px-5 flex justify-between items-center z-10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-transparent">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center border border-zinc-700">
<span className="text-xs font-medium text-white" id="user-initial">U</span>
</div>
<div>
<h1 className="text-sm font-medium text-zinc-200 tracking-tight leading-none">Workspace</h1>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="text-[10px] text-zinc-500 font-medium">Synced</span>
</div>
</div>
</div>
<button className="p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-900 transition-colors" id="btn-logout">
<span className="iconify text-lg" data-icon="lucide:log-out" data-strokeWidth="1.5"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-32" id="scroll-container">
<div className="grid grid-cols-5 gap-y-4 gap-x-2 pt-2" id="app-grid">

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 glass-panel border-t border-zinc-800/50 p-4 pb-6 z-20 backdrop-blur-xl bg-black/60">
<form className="flex flex-col gap-2.5" id="add-app-form">
<div className="flex gap-2">
<div className="relative flex-1 group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
<span className="iconify" data-icon="lucide:type" data-strokeWidth="1.5"></span>
</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg input-base text-xs text-white placeholder:text-zinc-600" id="new-app-name" placeholder="Name" required="" type="text"/>
</div>
<div className="relative w-[35%] group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
<span className="iconify" data-icon="lucide:smile" data-strokeWidth="1.5"></span>
</div>
<input className="w-full h-10 pl-9 pr-3 rounded-lg input-base text-xs text-zinc-400 placeholder:text-zinc-700" id="new-app-icon" placeholder="lucide:globe" type="text"/>
</div>
</div>
<div className="flex gap-2">
<div className="relative flex-1 group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
<span className="iconify" data-icon="lucide:link" data-strokeWidth="1.5"></span>
</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg input-base text-xs text-zinc-300 placeholder:text-zinc-600 font-mono" id="new-app-url" placeholder="https://..." required="" type="url"/>
</div>
<button className="h-10 w-12 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors active:scale-95 flex items-center justify-center shadow-lg shadow-white/5" type="submit">
<span className="iconify text-lg" data-icon="lucide:plus" data-strokeWidth="2"></span>
</button>
</div>
</form>
</div>
</div>



    </>
  );
}
