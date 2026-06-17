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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace']
},
extend: {
colors: {
black: '#000000',
gray: { 850: '#1a1a1a', 900: '#111111', 925: '#0e0e0e' }
},
boxShadow: {
'icon': 'inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 10px rgba(0,0,0,0.5)'
}
}
}
}



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

        const DEFAULT_APPS = [
            { id: 'keep', name: 'Google Keep', url: 'https://keep.google.com/u/0/', icon: 'logos:google-keep', category: 'Google', index: 0 },
            { id: 'drive', name: 'Google Drive', url: 'https://drive.google.com/drive/u/0/my-drive', icon: 'solar:cloud-bold-duotone', category: 'Google', index: 1 },
            { id: 'notebooklm', name: 'NotebookLM', url: 'https://notebooklm.google.com/?authuser=4', icon: 'solar:book-2-bold-duotone', category: 'Google', index: 2 },
            { id: 'aura-ldl3b', name: 'Aura ldl3b', url: 'https://www.aura.build/editor/4da1e71e-d62d-42b1-ab9b-99e503ddaaa1', icon: 'solar:magic-wand-bold-duotone', category: 'Aura', index: 3 },
            { id: 'livedesklauncher', name: 'Livedesklauncher', url: 'https://ldl3b.aura.build/', icon: 'solar:rocket-2-bold-duotone', category: 'Aura', index: 4 },
            { id: 'oliverhoop-wix', name: 'Oliverhoop', url: 'http://www.oliverhoop.com/', icon: 'solar:globe-bold-duotone', category: 'Wix', index: 5 },
            { id: 'whatsapp', name: 'Whatsapp Web', url: 'https://web.whatsapp.com/', icon: 'solar:chat-round-dots-bold-duotone', category: 'Meta', index: 6 },
            { id: 'lucid-dashboard', name: 'Dashboard', url: 'https://lucid.app/documents#/home?folder_id=recent', icon: 'solar:widget-bold-duotone', category: 'Lucidchart', index: 7 },
            { id: 'herodeck', name: 'HERODECK_v6 (FRIENDS)2', url: 'https://lucid.app/lucidchart/ce938cc8-1601-4564-867d-75920d344de3/edit?invitationId=inv_46ae3e96-5bd1-49d6-8ee6-c647f08e61ae&page=j9iTxyKimT7X#', icon: 'solar:users-group-two-rounded-bold-duotone', category: 'Lucidchart', index: 8 },
            { id: 'ruggell', name: 'LIVEDESKLAUNCHER_RUGGELL_1 (live)', url: 'https://lucid.app/lucidchart/dd1c6298-8fed-48f2-b7ab-38004d7fa56c/edit?invitationId=inv_3c63131a-6505-4442-a000-2e08315a122b&page=wMo3WTnqL2Yy#', icon: 'solar:map-point-bold-duotone', category: 'Lucidchart', index: 9 },
            { id: 'iui', name: 'oliverhoop.com (IUI)_v1', url: 'https://lucid.app/lucidchart/3587ba21-f268-4bd3-b80d-9d60998abaea/edit?from_internal=true', icon: 'solar:code-square-bold-duotone', category: 'Lucidchart', index: 10 },
            { id: 'oliverhoop-lucid', name: 'OLIVERHOOP', url: 'https://lucid.app/lucidchart/dcc5537f-dbb9-4ffa-bd54-51774dc95a6b/edit?invitationId=inv_27766cf2-e335-4624-bb00-b960b8a252c1&pa', icon: 'solar:crown-star-bold-duotone', category: 'Lucidchart', index: 11 },
            { id: 'system-gallery', name: 'Photos', url: '#gallery', icon: 'solar:gallery-bold-duotone', category: 'System', index: 12 }
        ];

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null,
                loading: true,
                authLoading: false,
                authModalOpen: false, 
                email: '',
                password: '',
                authError: '',
                
                apps: [],
                pageNames: {},
                galleryItems: [],
                viewMode: 'grid',
                currentPage: 0,
                time: '',
                date: '',
                versionString: '',
                
                galleryOpen: false,
                activeGalleryId: null,
                galleryViewMode: 'grid', 
                viewImage: null,
                
                // Folder State
                folderModalOpen: false,
                activeFolder: null,
                
                // Import State
                showImportModal: false,
                importSelection: [],

                // Create Menu State
                createMenuOpen: false,

                contextOpen: false,
                contextApp: null,
                contextPos: { x: 0, y: 0 },
                contextIsInsideFolder: false,
                
                modalOpen: false,
                modalMode: 'add',
                modalData: {},
                modalAddingToFolder: false,
                iconTab: 'iconify',
                uploading: false,
                
                touchStartX: 0,
                
                categoryColors: {
                    'Google': 'text-sky-400',
                    'Aura': 'text-purple-400',
                    'Wix': 'text-pink-400',
                    'Meta': 'text-green-400',
                    'Lucidchart': 'text-orange-400',
                    'System': 'text-white',
                    'default': 'text-gray-500'
                },

                init() {
                    this.updateTime();
                    setInterval(() => this.updateTime(), 1000);

                    const local = localStorage.getItem('ldl_apps');
                    this.processApps(local ? JSON.parse(local) : DEFAULT_APPS);
                    const localPages = localStorage.getItem('ldl_pages');
                    this.pageNames = localPages ? JSON.parse(localPages) : {};
                    const localGallery = localStorage.getItem('ldl_gallery_v6');
                    this.galleryItems = localGallery ? JSON.parse(localGallery) : [];

                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        this.loading = false;
                        if (u) {
                            this.authModalOpen = false; 
                            db.ref(`users/${u.uid}/apps`).on('value', s => {
                                const val = s.val();
                                this.processApps(val || DEFAULT_APPS);
                            });
                            db.ref(`users/${u.uid}/pageNames`).on('value', s => {
                                this.pageNames = s.val() || {};
                            });
                            db.ref(`users/${u.uid}/gallery_v6`).on('value', s => {
                                this.galleryItems = s.val() || [];
                            });
                        } else {
                            const local = localStorage.getItem('ldl_apps');
                            this.processApps(local ? JSON.parse(local) : DEFAULT_APPS);
                        }
                    });
                },

                processApps(data) {
                    let maxInd = 0;
                    this.apps = data.map((a, i) => {
                        if (a.index === undefined) a.index = i;
                        maxInd = Math.max(maxInd, a.index);
                        return a;
                    });
                    if(!this.apps.find(a => a.id === 'system-gallery')) {
                        this.apps.push({ id: 'system-gallery', name: 'Photos', url: '#gallery', icon: 'solar:gallery-bold-duotone', category: 'System', page: 0, index: 99 });
                    }
                    this.apps.sort((a,b) => (a.page||0) - (b.page||0) || a.index - b.index);
                    
                    // Update Active Folder if open
                    if(this.activeFolder) {
                        const updatedFolder = this.apps.find(a => a.id === this.activeFolder.id);
                        if(updatedFolder) {
                            this.activeFolder = updatedFolder;
                        }
                    }

                    this.$nextTick(() => {
                        this.initSortable();
                    });
                },

                updateTime() {
                    const n = new Date();
                    this.time = n.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
                    this.date = n.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                    const day = String(n.getDate()).padStart(2, '0');
                    const month = String(n.getMonth() + 1).padStart(2, '0');
                    const year = n.getFullYear();
                    let hours = n.getHours();
                    const ampm = hours >= 12 ? 'pm' : 'am';
                    hours = hours % 12; hours = hours ? hours : 12; 
                    const strHours = String(hours).padStart(2, '0');
                    const minutes = String(n.getMinutes()).padStart(2, '0');
                    this.versionString = `ldl3b-6_v11.1_${day}.${month}.${year}_${strHours}:${minutes} ${ampm}`;
                },

                handleProfileClick() {
                    if (this.user) {
                        if(confirm('Log out?')) {
                            this.logout();
                        }
                    } else {
                        this.authModalOpen = true;
                    }
                },

                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                async signInEmail() {
                    this.authLoading = true; this.authError = '';
                    try { await auth.signInWithEmailAndPassword(this.email, this.password); }
                    catch { try { await auth.createUserWithEmailAndPassword(this.email, this.password); } catch(e){ this.authError = e.message; } }
                    this.authLoading = false;
                },
                logout() { auth.signOut(); },

                get pageNumbers() {
                    const max = Math.max(...this.apps.map(a => a.page || 0), 0);
                    const range = [];
                    for(let i=0; i<=max; i++) range.push(i);
                    return range;
                },
                
                getPageName(index) { return this.pageNames[index] || `PAGE ${index + 1}`; },
                updatePageName(index, value) { this.pageNames[index] = value; },

                prevPage() { if (this.currentPage > 0) this.currentPage--; },
                nextPage() { 
                    const max = Math.max(...this.pageNumbers);
                    if (this.currentPage < max) this.currentPage++; 
                },
                
                handleTouchStart(e) { this.touchStartX = e.changedTouches[0].screenX; },
                handleTouchEnd(e) {
                    const diff = this.touchStartX - e.changedTouches[0].screenX;
                    if (Math.abs(diff) > 50) {
                        if (diff > 0) this.nextPage(); else this.prevPage();
                    }
                },

                saveApps() {
                    if(this.activeFolder) {
                        const idx = this.apps.findIndex(a => a.id === this.activeFolder.id);
                        if(idx > -1) {
                            this.apps[idx] = this.activeFolder;
                        }
                    }
                    const data = JSON.parse(JSON.stringify(this.apps));
                    if (this.user) db.ref(`users/${this.user.uid}/apps`).set(data);
                    else localStorage.setItem('ldl_apps', JSON.stringify(data));
                },

                savePageNames() {
                    if (this.user) db.ref(`users/${this.user.uid}/pageNames`).set(this.pageNames);
                    else localStorage.setItem('ldl_pages', JSON.stringify(this.pageNames));
                },

                saveGallery() {
                     if (this.user) db.ref(`users/${this.user.uid}/gallery_v6`).set(this.galleryItems);
                    else localStorage.setItem('ldl_gallery_v6', JSON.stringify(this.galleryItems));
                },

                getAppsForPage(p) {
                    return this.apps.filter(a => (a.page || 0) === p).sort((a,b) => a.index - b.index);
                },

                get availableAppsForImport() {
                    return this.apps.filter(a => a.type !== 'folder' && a.id !== 'system-gallery' && a.type !== 'gallery');
                },
                
                get currentGalleryItems() {
                    // Filter items for the currently open gallery. 
                    // Legacy items without galleryId belong to 'system-gallery'.
                    return this.galleryItems.filter(item => {
                         const gId = item.galleryId || 'system-gallery';
                         return gId === this.activeGalleryId;
                    });
                },
                
                getGalleryPreviews(id) {
                    const targetId = id === 'system-gallery' ? 'system-gallery' : id;
                    return this.galleryItems
                        .filter(i => (i.galleryId || 'system-gallery') === targetId)
                        .sort((a,b) => b.date - a.date)
                        .slice(0, 9);
                },
                
                get activeGalleryName() {
                     const app = this.apps.find(a => a.id === this.activeGalleryId);
                     return app ? app.name : 'Gallery';
                },

                toggleImport(id) {
                    if(this.importSelection.includes(id)) {
                        this.importSelection = this.importSelection.filter(i => i !== id);
                    } else {
                        this.importSelection.push(id);
                    }
                },

                confirmImport() {
                    if(!this.activeFolder) return;
                    const itemsToMove = this.apps.filter(a => this.importSelection.includes(a.id));
                    this.apps = this.apps.filter(a => !this.importSelection.includes(a.id));
                    if(!this.activeFolder.items) this.activeFolder.items = [];
                    this.activeFolder.items.push(...itemsToMove);
                    this.saveApps();
                    this.showImportModal = false;
                    this.importSelection = [];
                    this.$nextTick(() => { this.initFolderSortable(); });
                },

                handleAppClick(e, app) { this.launchApp(app); },
                launchApp(app) { 
                    if(app.type === 'folder') {
                        this.openFolder(app);
                    } else if(app.type === 'gallery' || app.id === 'system-gallery' || app.url === '#gallery') {
                        this.activeGalleryId = app.id;
                        this.galleryOpen = true;
                    } else {
                        window.open(app.url, '_blank'); 
                    }
                },

                openFolder(folder) {
                    this.activeFolder = folder;
                    this.folderModalOpen = true;
                    this.$nextTick(() => {
                        this.initFolderSortable();
                    });
                },
                closeFolder() {
                    this.folderModalOpen = false;
                    this.activeFolder = null;
                },

                initFolderSortable() {
                    const el = document.getElementById('folder-sortable');
                    if(!el) return;
                    if(el._sortable) el._sortable.destroy();
                    el._sortable = new Sortable(el, {
                        group: 'folder-items',
                        animation: 200,
                        delay: 100,
                        delayOnTouchOnly: true,
                        draggable: '.folder-item',
                        onEnd: (evt) => {
                             const items = this.activeFolder.items || [];
                             const movedItem = items[evt.oldIndex];
                             items.splice(evt.oldIndex, 1);
                             items.splice(evt.newIndex, 0, movedItem);
                             this.activeFolder.items = items;
                             this.saveApps();
                        }
                    });
                },

                uploadGalleryItem(e) {
                    if(!this.activeGalleryId) return;
                    const files = e.target.files;
                    if (!files.length) return;
                    Array.from(files).forEach(file => {
                        const reader = new FileReader();
                        const isVideo = file.type.startsWith('video/');
                        reader.onload = (evt) => {
                            const result = evt.target.result;
                            const item = {
                                id: (isVideo ? 'vid_' : 'img_') + Date.now() + Math.random().toString(36).substr(2, 9),
                                galleryId: this.activeGalleryId,
                                type: isVideo ? 'video' : 'image',
                                name: file.name,
                                data: null,
                                date: Date.now()
                            };

                            if (isVideo) {
                                item.data = result;
                                this.galleryItems.push(item);
                                this.saveGallery();
                            } else {
                                const img = new Image();
                                img.onload = () => {
                                    const canvas = document.createElement('canvas');
                                    const ctx = canvas.getContext('2d');
                                    const maxSize = 1200; 
                                    let width = img.width;
                                    let height = img.height;
                                    if (width > height) {
                                        if (width > maxSize) { height *= maxSize / width; width = maxSize; }
                                    } else {
                                        if (height > maxSize) { width *= maxSize / height; height = maxSize; }
                                    }
                                    canvas.width = width;
                                    canvas.height = height;
                                    ctx.drawImage(img, 0, 0, width, height);
                                    item.data = canvas.toDataURL('image/jpeg', 0.85);
                                    this.galleryItems.push(item);
                                    this.saveGallery();
                                };
                                img.src = result;
                            }
                        };
                        reader.readAsDataURL(file);
                    });
                    e.target.value = ''; 
                },

                viewMediaItem(item) {
                    this.viewImage = item;
                },
                
                closeLightbox() {
                    const vid = this.$refs.lightboxVideo;
                    if(vid) vid.pause();
                    this.viewImage = null;
                },

                deleteGalleryItem(id) {
                    if(confirm('Delete this item?')) {
                        this.galleryItems = this.galleryItems.filter(img => img.id !== id);
                        this.saveGallery();
                        if(this.viewImage && this.viewImage.id === id) this.closeLightbox();
                    }
                },

                openContext(e, app, insideFolder = false) {
                    e.preventDefault(); e.stopPropagation();
                    let x = e.clientX, y = e.clientY;
                    if (x + 230 > window.innerWidth) x = window.innerWidth - 240;
                    if (y + 250 > window.innerHeight) y = window.innerHeight - 260;
                    this.contextPos = {x, y};
                    this.contextApp = app;
                    this.contextIsInsideFolder = insideFolder;
                    this.contextOpen = true;
                },

                moveAppToPage(app, pageNum) {
                    const idx = this.apps.findIndex(a => a.id === app.id);
                    if(idx > -1) {
                        const targetApps = this.apps.filter(a => (a.page||0) === pageNum);
                        const newIndex = targetApps.length;
                        this.apps[idx].page = pageNum;
                        this.apps[idx].index = newIndex;
                        this.saveApps();
                        this.currentPage = pageNum;
                    }
                },
                
                removeFromFolder(app) {
                    let parentFolder = this.apps.find(a => a.type === 'folder' && a.items && a.items.find(i => i.id === app.id));
                    if(parentFolder) {
                        parentFolder.items = parentFolder.items.filter(i => i.id !== app.id);
                        const pageApps = this.apps.filter(a => (a.page||0) === this.currentPage);
                        app.page = this.currentPage;
                        app.index = pageApps.length;
                        this.apps.push(app);
                        this.saveApps();
                        if(this.activeFolder && this.activeFolder.id === parentFolder.id) {
                            this.activeFolder = parentFolder;
                        }
                        if(parentFolder.items.length === 0) {
                            this.deleteApp(parentFolder);
                            this.closeFolder();
                        }
                    }
                },

                duplicateApp(app) {
                    if(app.type === 'folder' || app.type === 'gallery') return; 
                    const pageApps = this.apps.filter(a => (a.page||0) === (app.page||0));
                    const newApp = {...app, id: 'app'+Date.now(), name: app.name + ' (Copy)', index: pageApps.length};
                    this.apps.push(newApp);
                    this.saveApps();
                },
                deleteApp(app) {
                    if(app.id === 'system-gallery') return; 
                    if(app.type === 'folder') {
                        if(confirm('Delete Folder? Items inside will be deleted.')) {
                            this.apps = this.apps.filter(a => a.id !== app.id);
                            this.saveApps();
                        }
                        return;
                    }
                     let parentFolder = this.apps.find(a => a.type === 'folder' && a.items && a.items.find(i => i.id === app.id));
                     if(parentFolder) {
                         parentFolder.items = parentFolder.items.filter(i => i.id !== app.id);
                         if(this.activeFolder && this.activeFolder.id === parentFolder.id) {
                            this.activeFolder = parentFolder;
                         }
                     } else {
                        this.apps = this.apps.filter(a => a.id !== app.id);
                     }
                    this.saveApps();
                },

                handlePlusClick() {
                    if(this.folderModalOpen) {
                        this.openModal('add', null, true);
                    } else {
                        this.createMenuOpen = true;
                    }
                },

                selectCreateType(type) {
                    this.createMenuOpen = false;
                    
                    if (type === 'app') {
                        this.openModal('add');
                    } else if (type === 'folder') {
                        this.modalMode = 'add';
                        const pageApps = this.apps.filter(a => (a.page||0) === this.currentPage);
                        this.modalData = {
                            id: 'folder_' + Date.now(),
                            type: 'folder',
                            name: '',
                            items: [],
                            bgColor: 'bg-[#1a1a1a]',
                            page: this.currentPage,
                            index: pageApps.length
                        };
                        this.modalOpen = true;
                    } else if (type === 'gallery') {
                        this.modalMode = 'add';
                        const pageApps = this.apps.filter(a => (a.page||0) === this.currentPage);
                        this.modalData = {
                            id: 'gallery_' + Date.now(),
                            type: 'gallery',
                            name: 'New Gallery',
                            icon: 'solar:gallery-bold-duotone',
                            category: 'Gallery',
                            page: this.currentPage,
                            index: pageApps.length
                        };
                        this.modalOpen = true;
                    }
                },

                openModal(mode, app = null, addToFolder = false) {
                    this.modalMode = mode;
                    this.modalAddingToFolder = addToFolder;
                    
                    if(mode === 'add') {
                        this.modalData = { id: 'app'+Date.now(), name: '', url: '', icon: '', category: '' };
                        if(!addToFolder) {
                            const pageApps = this.apps.filter(a => (a.page||0) === this.currentPage);
                            this.modalData.page = this.currentPage;
                            this.modalData.index = pageApps.length;
                        }
                    } else {
                        this.modalData = JSON.parse(JSON.stringify(app));
                    }
                    this.modalOpen = true;
                },
                closeModal() { this.modalOpen = false; },
                
                saveModal() {
                    if (this.modalMode === 'add') {
                        if(this.modalAddingToFolder && this.activeFolder) {
                            if(!this.activeFolder.items) this.activeFolder.items = [];
                            this.activeFolder.items.push(this.modalData);
                        } else {
                            this.apps.push(this.modalData);
                        }
                    } else {
                         let parentFolder = this.apps.find(a => a.type === 'folder' && a.items && a.items.find(i => i.id === this.modalData.id));
                         if (parentFolder) {
                            const idx = parentFolder.items.findIndex(a => a.id === this.modalData.id);
                            if (idx > -1) parentFolder.items[idx] = this.modalData;
                            if(this.activeFolder && this.activeFolder.id === parentFolder.id) this.activeFolder = parentFolder;
                        } else {
                            const idx = this.apps.findIndex(a => a.id === this.modalData.id);
                            if (idx > -1) this.apps[idx] = this.modalData;
                        }
                    }
                    this.saveApps();
                    this.closeModal();
                    
                    if(this.modalAddingToFolder) {
                        this.$nextTick(() => { this.initFolderSortable(); });
                    }
                },
                
                handleUrlInput(e) {
                    const val = e.target.value;
                    const driveRegex = /\/d\/(.+?)\/|id=(.+?)(&|$)/;
                    const match = val.match(driveRegex);
                    if (match) {
                        const id = match[1] || match[2];
                        this.modalData.icon = `https://lh3.googleusercontent.com/d/${id}`;
                    } else {
                        this.modalData.icon = val;
                    }
                },

                handleFileUpload(e) {
                    const file = e.target.files[0];
                    if (!file) return;
                    this.uploading = true;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            const maxSize = 128; 
                            let width = img.width;
                            let height = img.height;
                            if (width > height) {
                                if (width > maxSize) { height *= maxSize / width; width = maxSize; }
                            } else {
                                if (height > maxSize) { width *= maxSize / height; height = maxSize; }
                            }
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
                            this.modalData.icon = canvas.toDataURL('image/png');
                            this.uploading = false;
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                },

                initSortable() {
                    document.querySelectorAll('.sortable-grid').forEach(el => {
                        if(el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, {
                            group: 'apps',
                            animation: 250,
                            delay: 150,
                            delayOnTouchOnly: true,
                            draggable: '.app-item',
                            ghostClass: 'sortable-ghost',
                            dragClass: 'sortable-drag',
                            onEnd: (evt) => {
                                const page = parseInt(evt.to.getAttribute('data-page'));
                                const children = Array.from(evt.to.children);
                                children.forEach((child, newIndex) => {
                                    const id = child.getAttribute('data-id');
                                    const app = this.apps.find(a => a.id === id);
                                    if(app) {
                                        app.page = page;
                                        app.index = newIndex;
                                    }
                                });
                                // Folder creation drag logic
                                const dropX = evt.originalEvent.clientX || evt.originalEvent.changedTouches?.[0].clientX;
                                const dropY = evt.originalEvent.clientY || evt.originalEvent.changedTouches?.[0].clientY;
                                if(dropX && dropY) {
                                    const draggedEl = evt.item;
                                    draggedEl.style.visibility = 'hidden';
                                    const targetEl = document.elementFromPoint(dropX, dropY);
                                    draggedEl.style.visibility = '';
                                    const targetAppEl = targetEl.closest('.app-item');
                                    if(targetAppEl && targetAppEl !== draggedEl) {
                                        const targetId = targetAppEl.getAttribute('data-id');
                                        const draggedId = draggedEl.getAttribute('data-id');
                                        this.createFolder(draggedId, targetId);
                                    }
                                }
                                this.saveApps();
                            }
                        });
                    });
                },

                createFolder(draggedId, targetId) {
                    const draggedApp = this.apps.find(a => a.id === draggedId);
                    const targetApp = this.apps.find(a => a.id === targetId);
                    if (!draggedApp || !targetApp) return;
                    if (draggedApp.type === 'folder' || targetApp.type === 'folder') return;
                    if (draggedApp.type === 'gallery' || targetApp.type === 'gallery') return;
                    
                    if(confirm(`Create folder with "${draggedApp.name}" and "${targetApp.name}"?`)) {
                        const newFolder = {
                            id: 'folder_' + Date.now(),
                            type: 'folder',
                            name: 'Folder',
                            page: targetApp.page,
                            index: targetApp.index,
                            bgColor: 'bg-[#1a1a1a]',
                            items: [targetApp, draggedApp]
                        };
                        this.apps = this.apps.filter(a => a.id !== draggedId && a.id !== targetId);
                        this.apps.push(newFolder);
                        this.saveApps();
                        setTimeout(() => this.processApps(this.apps), 50);
                    }
                }
            }))
        })
    
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
      

<div className="fixed inset-0 z-[70] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen = false" className="absolute inset-0 bg-black/90 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm p-8 space-y-8 text-center bg-[#111] border border-gray-800 rounded-3xl shadow-2xl" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<button @click="authModalOpen = false" className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
<div className="space-y-2">
<div className="w-16 h-16 mx-auto rounded-[16px] bg-gradient-to-b from-gray-800 to-black border border-gray-700 flex items-center justify-center shadow-2xl">
<span className="iconify text-3xl text-white" data-icon="solar:rocket-2-bold-duotone"></span>
</div>
<h1 className="text-xl font-bold tracking-tight text-white">Sign In</h1>
<p className="text-xs text-gray-500">Sync your apps across devices</p>
</div>
<div className="space-y-4">
<button @click="signInGoogle" className="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
<span className="iconify text-xl" data-icon="logos:google-icon"></span>
<span>Continue with Google</span>
</button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
<span className="relative bg-[#111] px-2 text-xs text-gray-500 uppercase">Or</span>
</div>
<form @submit.prevent="signInEmail" className="space-y-3">
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors" placeholder="Email" type="email" x-model="email"/>
<input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors" placeholder="Password" type="password" x-model="password"/>
<button className="w-full py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 transition-colors" type="submit">
<span x-show="!authLoading">Sign In / Register</span>
<span className="iconify animate-spin mx-auto" data-icon="solar:refresh-circle-bold-duotone" x-show="authLoading"></span>
</button>
<p className="text-red-500 text-xs h-4" x-text="authError"></p>
</form>
</div>
</div>
</div>

<div className="h-full w-full relative bg-black">

<header className="fixed top-0 left-0 right-0 h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-md z-40">
<div className="flex items-center gap-4">
<h1 className="text-lg font-bold tracking-tight text-white hidden md:block">LIVEDESKLAUNCHER <span className="text-xs text-gray-600 ml-1">v11.1</span></h1>
<div className="flex bg-gray-900 rounded-lg p-1 border border-white/10">
<button :className="viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'grid'" className="p-1.5 rounded-md transition-colors">
<span className="iconify text-lg" data-icon="solar:widget-2-bold-duotone"></span>
</button>
<button :className="viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'list'" className="p-1.5 rounded-md transition-colors">
<span className="iconify text-lg" data-icon="solar:list-bold-duotone"></span>
</button>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right leading-tight hidden sm:block">
<div className="text-sm font-bold text-white" x-text="time"></div>
<div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide" x-text="date"></div>
</div>
<div className="flex items-center gap-3">
<button @click="handlePlusClick()" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:add-circle-bold-duotone"></span>
</button>
<button @click="handleProfileClick()" className="relative group">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden border border-white/20 ring-2 ring-green-500/20" x-show="user">
<img :src="user?.photoURL || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center font-bold text-xs" x-show="!user?.photoURL" x-text="user?.email?.[0].toUpperCase()"></div>
</div>
<div className="w-9 h-9 rounded-full bg-gray-800 overflow-hidden border border-white/10 flex items-center justify-center hover:bg-gray-700 transition-colors" x-show="!user">
<span className="iconify text-xl text-gray-400" data-icon="solar:user-circle-bold-duotone"></span>
</div>
</button>
</div>
</div>
</header>

<main @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="absolute inset-0 pt-16 pb-0 overflow-hidden">

<div className="h-full w-full relative" x-show="viewMode === 'grid'" x-transition.opacity="">
<div className="h-full w-full relative">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div className="absolute inset-0 overflow-y-auto no-scrollbar scroll-mask p-4 md:p-8" x-show="currentPage === pNum" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-x-0" x-transition:enter-start="opacity-0 translate-x-10">
<div className="max-w-7xl mx-auto min-h-full">
<div :data-page="pNum" className="app-grid sortable-grid">
<template :key="app.id" x-htmlFor="app in getAppsForPage(pNum)">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="relative flex flex-col items-center gap-1.5 rounded-xl transition-all cursor-pointer touch-manipulation group select-none app-item">

<template x-if="app.type === 'folder'">
<div :className="app.bgColor || 'bg-[#1a1a1a]'" className="ios-icon flex flex-col z-10 p-0 backdrop-blur-md !bg-opacity-50">
<div className="folder-mini-grid">
<template :key="subApp.id" x-htmlFor="subApp in (app.items || []).slice(0, 9)">
<div className="w-full h-full rounded-[2px] overflow-hidden bg-black/50 flex items-center justify-center">
<template x-if="subApp.icon.includes('data:') || subApp.icon.includes('http')">
<img :src="subApp.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!subApp.icon.includes('data:') &amp;&amp; !subApp.icon.includes('http')">
<span :data-icon="subApp.icon" className="iconify text-[8px] text-white"></span>
</template>
</div>
</template>
</div>
</div>
</template>

<template x-if="app.type === 'gallery' || app.id === 'system-gallery'">
<div className="ios-icon flex flex-col z-10 p-0 bg-[#1a1a1a] overflow-hidden">

<div className="folder-mini-grid" x-show="getGalleryPreviews(app.id).length &gt; 0">
<template :key="item.id" x-htmlFor="item in getGalleryPreviews(app.id)">
<div className="w-full h-full rounded-[2px] overflow-hidden bg-gray-900 relative">
<template x-if="item.type === 'image'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover opacity-90"/>
</template>
<template x-if="item.type === 'video'">
<div className="w-full h-full flex items-center justify-center bg-gray-800">
<video :src="item.data" className="w-full h-full object-cover opacity-60 pointer-events-none" muted=""></video>
<span className="iconify text-[8px] text-white absolute z-10" data-icon="solar:play-bold"></span>
</div>
</template>
</div>
</template>
</div>

<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30" x-show="getGalleryPreviews(app.id).length === 0">
<span :data-icon="app.icon || 'solar:gallery-bold-duotone'" className="iconify text-3xl text-gray-500"></span>
</div>
</div>
</template>

<template x-if="app.type !== 'folder' &amp;&amp; app.type !== 'gallery' &amp;&amp; app.id !== 'system-gallery'">
<div className="ios-icon app-icon-bg flex items-center justify-center z-10">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-gray-200"></span>
</template>
</div>
</template>
<div className="flex flex-col items-center gap-0.5 text-center">
<span className="text-[11px] font-bold text-white tracking-tight leading-tight truncate w-20" x-text="app.name"></span>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[9px] font-medium uppercase leading-none truncate w-20" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : (app.category || 'App'))"></span>
</div>
</div>
</template>
</div>
</div>
</div>
</template>
</div>
</div>

<div className="h-full overflow-y-auto p-4 md:p-8 no-scrollbar pb-32" x-cloak="" x-show="viewMode === 'list'">
<div className="max-w-4xl mx-auto space-y-3" id="list-sortable">
<template :key="app.id" x-htmlFor="app in apps">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" className="flex items-center gap-4 p-3 rounded-2xl bg-gray-900/50 border border-white/5 hover:bg-gray-800 transition-colors group cursor-pointer select-none">

<div className="w-12 h-12 rounded-[10px] bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 relative border border-white/5">
<template x-if="app.type === 'folder'">
<div className="grid grid-cols-2 gap-0.5 p-1 w-full h-full">
<template x-htmlFor="sub in (app.items||[]).slice(0,4)">
<div className="bg-gray-600 rounded-[2px]"></div>
</template>
</div>
</template>
<template x-if="app.type === 'gallery' || app.id === 'system-gallery'">
<div className="grid grid-cols-2 gap-0.5 p-1 w-full h-full">
<template x-htmlFor="item in getGalleryPreviews(app.id).slice(0,4)">
<div className="bg-gray-700 rounded-[2px] overflow-hidden">
<img :src="item.data" className="w-full h-full object-cover" x-show="item.type!=='video'"/>
<div className="w-full h-full bg-gray-800" x-show="item.type==='video'"></div>
</div>
</template>
<div className="absolute inset-0 flex items-center justify-center" x-show="getGalleryPreviews(app.id).length === 0">
<span :data-icon="app.icon || 'solar:gallery-bold-duotone'" className="iconify text-xl text-gray-500"></span>
</div>
</div>
</template>
<template x-if="app.type !== 'folder' &amp;&amp; app.type !== 'gallery' &amp;&amp; app.id !== 'system-gallery'">
<div>
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-xl text-white"></span>
</template>
</div>
</template>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-bold text-white truncate text-sm" x-text="app.name"></h3>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 font-medium uppercase" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : app.category)"></span>
</div>
<p className="text-xs text-gray-500 truncate" x-text="app.type === 'folder' ? `${(app.items||[]).length} items` : (app.type === 'gallery' ? 'Media Collection' : app.url)"></p>
</div>
</div>
</template>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4" x-cloak="" x-show="createMenuOpen">
<div @click="createMenuOpen = false" className="absolute inset-0 bg-black/60 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-bold text-white">Create New</h2>
<button @click="createMenuOpen = false" className="text-gray-500 hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
<div className="grid grid-cols-1 gap-3">
<button @click="selectCreateType('app')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:widget-add-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Application</div>
<div className="text-[10px] text-gray-500">Add a link or app icon</div>
</div>
</button>
<button @click="selectCreateType('folder')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:folder-with-files-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Folder</div>
<div className="text-[10px] text-gray-500">Group apps together</div>
</div>
</button>
<button @click="selectCreateType('gallery')" className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-600 transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="solar:gallery-bold-duotone"></span>
</div>
<div>
<div className="font-bold text-sm text-white">Gallery</div>
<div className="text-[10px] text-gray-500">Create separate media collection</div>
</div>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[65] flex items-center justify-center" x-cloak="" x-show="folderModalOpen">
<div @click="closeFolder" className="absolute inset-0 bg-black/60 backdrop-blur-xl" x-transition.opacity=""></div>
<div className="relative w-full max-w-3xl bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-all duration-300" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:enter-start="opacity-0 scale-90 translate-y-4">

<div className="w-full flex justify-between items-start p-6 pb-2 shrink-0 bg-gradient-to-b from-[#1a1a1a] to-transparent z-10">
<div className="flex flex-col w-full mr-4">
<input @blur="saveApps()" @keydown.enter="$el.blur()" className="folder-title-input mb-1" placeholder="Folder Name" type="text" x-model="activeFolder.name"/>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500 font-mono uppercase tracking-wider" x-text="`${(activeFolder?.items || []).length} items`"></span>

<div className="flex gap-1 ml-4">
<template x-htmlFor="col in ['bg-[#1a1a1a]', 'bg-gray-800', 'bg-blue-900', 'bg-purple-900', 'bg-red-900']">
<button :className="[col, activeFolder.bgColor === col ? 'ring-1 ring-white' : '']" @click="activeFolder.bgColor = col; saveApps()" className="w-4 h-4 rounded-full border border-white/20 hover:border-white transition-colors !bg-opacity-50"></button>
</template>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button @click="showImportModal = true" className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-bold text-white flex items-center gap-2 transition-colors border border-gray-700">
<span className="iconify" data-icon="solar:import-bold-duotone"></span> Import
                        </button>
<button @click="closeFolder" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700">
<span className="iconify text-xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>

<div className="w-full overflow-y-auto no-scrollbar p-6 pt-2 flex-1">
<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6" id="folder-sortable">

<template :key="app.id" x-htmlFor="app in (activeFolder?.items || [])">
<div :data-id="app.id" @click="launchApp(app)" @contextmenu.prevent="openContext($event, app, true)" className="flex flex-col items-center gap-2 cursor-pointer group folder-item relative">
<div className="w-16 h-16 rounded-[14px] bg-black border border-gray-700 flex items-center justify-center overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-white"></span>
</template>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white text-lg" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
<span className="text-[11px] font-medium text-gray-300 text-center truncate w-full px-1" x-text="app.name"></span>
</div>
</template>

<div @click="openModal('add', null, true)" className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-16 h-16 rounded-[14px] bg-gray-900 border border-gray-700 border-dashed flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors">
<span className="iconify text-2xl text-gray-500 group-hover:text-white" data-icon="solar:add-circle-bold-duotone"></span>
</div>
<span className="text-[11px] font-medium text-gray-500 group-hover:text-gray-300 text-center truncate w-full">Add New</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[75] flex items-center justify-center p-4" x-cloak="" x-show="showImportModal">
<div @click="showImportModal = false" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-md bg-[#161616] border border-gray-800 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] overflow-hidden">
<div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#1a1a1a]">
<h3 className="font-bold text-white">Import Apps</h3>
<button @click="showImportModal = false" className="text-gray-400 hover:text-white"><span className="iconify text-xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="overflow-y-auto p-2 flex-1 space-y-1">
<template :key="app.id" x-htmlFor="app in availableAppsForImport">
<div @click="toggleImport(app.id)" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-colors">
<div :className="importSelection.includes(app.id) ? 'bg-indigo-600 border-indigo-600' : 'border-gray-600'" className="w-5 h-5 rounded border flex items-center justify-center transition-colors">
<span className="iconify text-white text-xs" data-icon="solar:check-bold" x-show="importSelection.includes(app.id)"></span>
</div>
<div className="w-8 h-8 rounded bg-black border border-gray-700 flex items-center justify-center overflow-hidden">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-lg text-white"></span>
</template>
</div>
<span className="text-sm text-gray-200" x-text="app.name"></span>
</div>
</template>
<div className="p-4 text-center text-gray-500 text-xs" x-show="availableAppsForImport.length === 0">
                        No apps available to import from desktop.
                    </div>
</div>
<div className="p-4 border-t border-gray-800 bg-[#1a1a1a]">
<button :disabled="importSelection.length === 0" @click="confirmImport" className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
<span x-text="`Move ${importSelection.length} Apps`"></span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center md:p-6 p-0" x-cloak="" x-show="galleryOpen">
<div @click="galleryOpen = false" className="absolute inset-0 bg-black/50 backdrop-blur-md" x-transition.opacity=""></div>
<div className="relative w-full h-full md:rounded-3xl bg-[#0f0f0f] border border-gray-800 shadow-2xl flex flex-col overflow-hidden" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-white/5 bg-[#111] shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-2xl text-pink-500" data-icon="solar:gallery-bold-duotone"></span>
<div>
<h2 className="text-sm font-bold tracking-wide text-white uppercase" x-text="activeGalleryName || 'GALLERY'"></h2>
<span className="text-[10px] text-gray-500 uppercase tracking-wider" x-text="`${currentGalleryItems.length} MEDIA`"></span>
</div>
</div>
<div className="flex bg-gray-900 rounded-lg p-1 border border-white/10 hidden sm:flex">
<button :className="galleryViewMode === 'grid' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'grid'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:widget-3-bold-duotone"></span>
</button>
<button :className="galleryViewMode === 'vertical' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'vertical'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:smartphone-bold-duotone"></span>
</button>
<button :className="galleryViewMode === 'list' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'" @click="galleryViewMode = 'list'" className="p-1.5 rounded-md transition-all">
<span className="iconify text-lg" data-icon="solar:list-bold-duotone"></span>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<label className="cursor-pointer px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-semibold text-white transition-colors border border-gray-700 flex items-center gap-2 group">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="solar:upload-bold-duotone"></span>
<span>Add</span>
<input @change="uploadGalleryItem" accept="image/*,video/*" className="hidden" multiple="" type="file"/>
</label>
<button @click="galleryOpen = false" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:close-circle-bold"></span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 bg-black/50">
<div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4" x-show="currentGalleryItems.length === 0">
<span className="iconify text-6xl opacity-20" data-icon="solar:gallery-wide-bold-duotone"></span>
<p className="text-xs uppercase tracking-widest font-medium opacity-50">No Media Found</p>
</div>
<div className="gallery-grid" x-show="galleryViewMode === 'grid'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="aspect-square rounded-xl bg-gray-900 border border-white/5 overflow-hidden relative group cursor-pointer">
<template x-if="item.type === 'video'">
<div className="w-full h-full relative">
<video :src="item.data" className="w-full h-full object-cover opacity-80"></video>
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
<span className="iconify text-lg ml-0.5" data-icon="solar:play-bold"></span>
</div>
</div>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
</template>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
<button @click.stop="deleteGalleryItem(item.id)" className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</div>
</template>
</div>
<div className="gallery-vertical" x-show="galleryViewMode === 'vertical'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="aspect-[9/16] rounded-xl bg-gray-900 border border-white/5 overflow-hidden relative group cursor-pointer">
<template x-if="item.type === 'video'">
<div className="w-full h-full relative">
<video :src="item.data" className="w-full h-full object-cover opacity-80"></video>
<div className="absolute top-2 right-2 text-white drop-shadow-md">
<span className="iconify" data-icon="solar:videocamera-record-bold-duotone"></span>
</div>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=300&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
</template>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 z-20">
<div className="flex justify-between items-center">
<span className="text-[10px] text-gray-300 font-mono" x-text="new Date(item.date).toLocaleDateString()"></span>
<button @click.stop="deleteGalleryItem(item.id)" className="p-1.5 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors">
<span className="iconify text-sm" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</div>
</div>
</template>
</div>
<div className="flex flex-col gap-2" x-show="galleryViewMode === 'list'">
<template :key="item.id" x-htmlFor="item in currentGalleryItems">
<div @click="viewMediaItem(item)" className="flex items-center gap-4 p-2 rounded-lg bg-gray-900/40 hover:bg-gray-800 border border-white/5 transition-colors group cursor-pointer">
<div className="w-16 h-12 rounded-md overflow-hidden bg-black relative flex-shrink-0">
<template x-if="item.type === 'video'">
<div className="w-full h-full flex items-center justify-center bg-gray-800">
<span className="iconify text-xl text-gray-400" data-icon="solar:videocamera-record-bold-duotone"></span>
</div>
</template>
<template x-if="item.type !== 'video'">
<img :src="item.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=100&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
</div>
<div className="flex-grow min-w-0 flex flex-col justify-center">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-gray-300 truncate" x-text="item.name || 'Untitled'"></span>
<span className="text-[9px] px-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" x-show="item.type === 'video'">VIDEO</span>
</div>
<span className="text-[10px] text-gray-600 font-mono" x-text="new Date(item.date).toLocaleString()"></span>
</div>
<button @click.stop="deleteGalleryItem(item.id)" className="p-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
<span className="iconify" data-icon="solar:trash-bin-trash-bold"></span>
</button>
</div>
</template>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex flex-col" x-cloak="" x-show="viewImage" x-transition.opacity="">
<div className="absolute top-4 right-4 z-50">
<button @click="closeLightbox" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700">
<span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
</button>
</div>
<div className="flex-1 flex items-center justify-center p-4 md:p-10 overflow-hidden">
<template x-if="viewImage?.type === 'video'">
<video :src="viewImage.data" autoplay="" className="max-w-full max-h-full rounded-lg shadow-2xl bg-black outline-none border border-white/10" controls="" x-ref="lightboxVideo"></video>
</template>
<template x-if="viewImage?.type !== 'video'">
<img :src="viewImage?.data" @error="$el.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=1200&amp;auto=format&amp;fit=crop'" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"/>
</template>
</div>
<div className="h-16 flex flex-col items-center justify-center text-gray-400 shrink-0">
<div className="text-xs font-bold text-white tracking-wide" x-text="viewImage?.name"></div>
<div className="text-[10px] font-mono uppercase tracking-widest opacity-60" x-text="viewImage ? new Date(viewImage.date).toLocaleString() : ''"></div>
</div>
</div>

<div className="fixed bottom-3 right-4 z-40 pointer-events-none select-none">
<span className="text-[9px] font-mono text-gray-600/60 uppercase tracking-wider font-medium mix-blend-plus-lighter" x-text="versionString"></span>
</div>
<div className="fixed bottom-6 left-6 z-40 group" x-cloak="" x-show="viewMode === 'grid'">
<div className="flex items-center gap-2">
<input :value="getPageName(currentPage)" @blur="savePageNames" @input="updatePageName(currentPage, $event.target.value)" @keydown.enter="$el.blur()" className="bg-transparent text-gray-600 font-bold text-xl focus:text-white outline-none w-48 placeholder-gray-800 transition-colors uppercase tracking-tight" type="text"/>
<span className="iconify text-gray-700 group-hover:text-gray-500 transition-colors text-sm" data-icon="solar:pen-bold-duotone"></span>
</div>
</div>
<div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-2 z-40 pointer-events-none" x-cloak="" x-show="viewMode === 'grid'">
<div className="pointer-events-auto flex gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="currentPage === pNum ? 'bg-white w-4 shadow-white/50' : 'bg-gray-600 hover:bg-gray-400'" @click="currentPage = pNum" className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center">
</div>
</template>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[85] w-56 bg-[#111] border border-gray-800 rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col backdrop-blur-xl" x-show="contextOpen" x-transition.opacity.duration.200ms="">
<template x-if="contextApp?.type !== 'folder'">
<button @click="launchApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:plain-bold-duotone"></span> Open
                </button>
</template>
<template x-if="contextApp?.type === 'folder'">
<button @click="openFolder(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:folder-open-bold-duotone"></span> Open Folder
                </button>
</template>
<div className="h-px bg-gray-800 my-1 mx-2"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:pen-bold-duotone"></span> Edit
            </button>

<template x-if="contextIsInsideFolder">
<button @click="removeFromFolder(contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:logout-bold-duotone"></span> Remove from Folder
                </button>
</template>
<template x-if="!contextIsInsideFolder">
<div>
<div className="px-4 py-2 text-[10px] font-bold text-gray-600 uppercase tracking-wider">Move to Page</div>
<div className="flex flex-wrap px-2 pb-1">
<template :key="p" x-htmlFor="p in pageNumbers">
<button :className="(contextApp?.page || 0) === p ? 'bg-gray-800 text-white' : 'text-gray-400'" @click="moveAppToPage(contextApp, p); contextOpen=false" className="w-6 h-6 m-1 rounded flex items-center justify-center text-xs border border-gray-700 hover:bg-white hover:text-black transition-colors" x-text="p+1"></button>
</template>
<button @click="moveAppToPage(contextApp, Math.max(...pageNumbers)+1); contextOpen=false" className="w-6 h-6 m-1 rounded flex items-center justify-center text-xs border border-gray-700 hover:bg-white hover:text-black text-gray-400">+</button>
</div>
</div>
</template>
<div className="h-px bg-gray-800 my-1 mx-2"></div>
<button @click="duplicateApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:copy-bold-duotone"></span> Duplicate
            </button>
<button @click="deleteApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-900/20 hover:text-red-300 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:trash-bin-trash-bold-duotone"></span> Delete
            </button>
</div>

<div className="fixed inset-0 z-[90] flex items-center justify-center p-4" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-lg bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
<h2 className="text-xl font-bold text-white" x-text="modalMode === 'add' ? 'Add Item' : (modalData.type === 'folder' ? 'Edit Folder' : (modalData.type === 'gallery' ? 'Edit Gallery' : 'Edit Application'))"></h2>
<button @click="closeModal" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="overflow-y-auto p-6 space-y-5 custom-scrollbar">

<template x-if="modalData.type === 'folder'">
<div className="space-y-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Folder Name</label>
<input className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" placeholder="My Folder" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Background Style (50% Opacity)</label>
<div className="grid grid-cols-5 gap-2 mt-2">
<template x-htmlFor="col in ['bg-[#1a1a1a]', 'bg-gray-800', 'bg-blue-900', 'bg-purple-900', 'bg-red-900']">
<div :className="[col, modalData.bgColor === col ? 'border-white' : 'border-transparent']" @click="modalData.bgColor = col" className="aspect-square rounded-lg cursor-pointer border-2 !bg-opacity-50"></div>
</template>
</div>
</div>
</div>
</template>

<template x-if="modalData.type === 'gallery'">
<div className="space-y-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Gallery Name</label>
<input className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" placeholder="My Gallery" type="text" x-model="modalData.name"/>
</div>
</div>
</template>

<template x-if="modalData.type !== 'folder' &amp;&amp; modalData.type !== 'gallery'">
<div>
<div className="flex gap-5">
<div className="w-24 h-24 flex-shrink-0 rounded-[18px] bg-black border border-gray-700 flex items-center justify-center overflow-hidden relative group">
<template x-if="modalData.icon &amp;&amp; (modalData.icon.includes('data:') || modalData.icon.includes('http'))">
<img :src="modalData.icon" @error="$el.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop'" className="w-full h-full object-cover"/>
</template>
<template x-if="!modalData.icon || (!modalData.icon.includes('data:') &amp;&amp; !modalData.icon.includes('http'))">
<span :data-icon="modalData.icon || 'solar:question-circle-bold-duotone'" className="iconify text-4xl text-gray-500"></span>
</template>
</div>
<div className="flex-grow space-y-3">
<div className="flex gap-3 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
<button :className="iconTab==='iconify' ? 'text-white border-b border-white' : ''" @click="iconTab='iconify'" className="pb-1 transition-colors">Iconify</button>
<button :className="iconTab==='url' ? 'text-white border-b border-white' : ''" @click="iconTab='url'" className="pb-1 transition-colors">URL / Drive</button>
<button :className="iconTab==='upload' ? 'text-white border-b border-white' : ''" @click="iconTab='upload'" className="pb-1 transition-colors">Upload</button>
</div>
<div x-show="iconTab === 'iconify'">
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder="e.g. solar:home-bold" type="text" x-model="modalData.icon"/>
</div>
<div x-show="iconTab === 'url'">
<input @input="handleUrlInput($event)" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder="Paste Image URL or Google Drive Link" type="text"/>
</div>
<div x-show="iconTab === 'upload'">
<label className="flex items-center justify-center w-full py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors relative overflow-hidden">
<span className="text-xs text-gray-300" x-text="uploading ? 'Resizing &amp; Processing...' : 'Choose Image File'"></span>
<input @change="handleFileUpload" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</label>
</div>
</div>
</div>
<div className="space-y-4 mt-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Name *</label>
<input className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" type="text" x-model="modalData.name"/>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Category</label>
<input className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" list="cats" type="text" x-model="modalData.category"/>
<datalist id="cats">
<option value="Google"></option><option value="Aura"></option><option value="Wix"></option><option value="Meta"></option><option value="Lucidchart">
</option></datalist>
</div>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase ml-1">URL *</label>
<input className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none" type="url" x-model="modalData.url"/>
</div>
</div>
</div>
</template>
</div>
<div className="p-6 pt-2 border-t border-gray-800">
<button @click="saveModal" className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
<span x-text="modalMode === 'add' ? (modalData.type === 'folder' ? 'Create Folder' : 'Add Item') : 'Save Changes'"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
