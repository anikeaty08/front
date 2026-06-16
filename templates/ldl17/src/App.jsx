import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const firebaseConfig = { apiKey: "AIzaSyCo0Rq6eABM3Q6le_x9VjskDCCAg1XUl8A", authDomain: "livedesklauncher.firebaseapp.com", projectId: "livedesklauncher", databaseURL: "https://livedesklauncher-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "livedesklauncher.firebasestorage.app", messagingSenderId: "719865623018", appId: "1:719865623018:web:104315b70c32db5bd4c293" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.database();

        const DEFAULT_APPS = [
            // PAGE 0: Main
            { id: 'app-01', name: 'Google', url: 'https://google.com', icon: 'logos:google-icon', category: 'Google', page: 0, index: 0 },
            { id: 'app-02', name: 'YouTube', url: 'https://youtube.com', icon: 'logos:youtube-icon', category: 'Google', page: 0, index: 1 },
            { id: 'app-03', name: 'Gmail', url: 'https://mail.google.com', icon: 'logos:google-gmail', category: 'Google', page: 0, index: 2 },
            { id: 'app-04', name: 'Drive', url: 'https://drive.google.com', icon: 'logos:google-drive', category: 'Google', page: 0, index: 3 },
            { id: 'app-05', name: 'Calendar', url: 'https://calendar.google.com', icon: 'logos:google-calendar', category: 'Google', page: 0, index: 4 },
            { id: 'app-06', name: 'Photos', url: 'https://photos.google.com', icon: 'logos:google-photos', category: 'Google', page: 0, index: 5 },
            { id: 'system-gallery', name: 'Gallery', type: 'gallery', icon: 'solar:gallery-bold-duotone', category: 'System', page: 0, index: 6 },
            { id: 'app-08', name: 'Maps', url: 'https://maps.google.com', icon: 'logos:google-maps', category: 'Google', page: 0, index: 7 },
            { id: 'folder-social', name: 'Socials', type: 'folder', bgColor:'bg-indigo-900', items: [
                { id: 's1', name: 'Twitter', url: 'https://twitter.com', icon: 'logos:twitter' },
                { id: 's2', name: 'Instagram', url: 'https://instagram.com', icon: 'skill-icons:instagram' },
                { id: 's3', name: 'LinkedIn', url: 'https://linkedin.com', icon: 'logos:linkedin-icon' },
                { id: 's4', name: 'Reddit', url: 'https://reddit.com', icon: 'logos:reddit-icon' }
            ], page: 0, index: 8, category: 'Folder' },
            { id: 'app-09', name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'simple-icons:openai', category: 'AI', page: 0, index: 9 },

            // PAGE 1: Dev
            { id: 'app-10', name: 'GitHub', url: 'https://github.com', icon: 'logos:github-icon', category: 'Dev', page: 1, index: 0 },
            { id: 'app-11', name: 'Vercel', url: 'https://vercel.com', icon: 'logos:vercel-icon', category: 'Dev', page: 1, index: 1 },
            { id: 'app-12', name: 'Supabase', url: 'https://supabase.com', icon: 'logos:supabase-icon', category: 'Dev', page: 1, index: 2 },
            { id: 'app-13', name: 'Firebase', url: 'https://firebase.google.com', icon: 'logos:firebase', category: 'Dev', page: 1, index: 3 },
            { id: 'app-14', name: 'Tailwind', url: 'https://tailwindcss.com', icon: 'logos:tailwindcss-icon', category: 'Dev', page: 1, index: 4 },
            { id: 'app-15', name: 'React', url: 'https://react.dev', icon: 'logos:react', category: 'Dev', page: 1, index: 5 },
            { id: 'app-16', name: 'Vue', url: 'https://vuejs.org', icon: 'logos:vue', category: 'Dev', page: 1, index: 6 },
            { id: 'app-17', name: 'Svelte', url: 'https://svelte.dev', icon: 'logos:svelte-icon', category: 'Dev', page: 1, index: 7 },
             { id: 'app-18', name: 'Figma', url: 'https://figma.com', icon: 'logos:figma', category: 'Design', page: 1, index: 8 },
            { id: 'app-19', name: 'Linear', url: 'https://linear.app', icon: 'solar:hamburger-menu-bold-duotone', category: 'Productivity', page: 1, index: 9 },

            // PAGE 2: Entertainment
            { id: 'app-20', name: 'Netflix', url: 'https://netflix.com', icon: 'logos:netflix-icon', category: 'Media', page: 2, index: 0 },
            { id: 'app-21', name: 'Spotify', url: 'https://spotify.com', icon: 'logos:spotify-icon', category: 'Media', page: 2, index: 1 },
            { id: 'app-22', name: 'Twitch', url: 'https://twitch.tv', icon: 'logos:twitch', category: 'Media', page: 2, index: 2 },
            { id: 'app-23', name: 'Discord', url: 'https://discord.com', icon: 'logos:discord-icon', category: 'Social', page: 2, index: 3 },
            { id: 'app-24', name: 'Hulu', url: 'https://hulu.com', icon: 'simple-icons:hulu', category: 'Media', page: 2, index: 4 },
            { id: 'app-25', name: 'Disney+', url: 'https://disneyplus.com', icon: 'cib:disney-plus', category: 'Media', page: 2, index: 5 },

             // PAGE 3: Utils
            { id: 'app-30', name: 'Notion', url: 'https://notion.so', icon: 'logos:notion-icon', category: 'Productivity', page: 3, index: 0 },
            { id: 'app-31', name: 'Slack', url: 'https://slack.com', icon: 'logos:slack-icon', category: 'Productivity', page: 3, index: 1 },
            { id: 'app-32', name: 'Zoom', url: 'https://zoom.us', icon: 'logos:zoom-icon', category: 'Productivity', page: 3, index: 2 },
            { id: 'app-33', name: 'Trello', url: 'https://trello.com', icon: 'logos:trello', category: 'Productivity', page: 3, index: 3 },
            { id: 'folder-adobe', name: 'Adobe', type: 'folder', bgColor:'bg-red-900', items: [
                { id: 'a1', name: 'Photoshop', url: 'https://adobe.com', icon: 'logos:adobe-photoshop' },
                { id: 'a2', name: 'Illustrator', url: 'https://adobe.com', icon: 'logos:adobe-illustrator' },
                { id: 'a3', name: 'XD', url: 'https://adobe.com', icon: 'logos:adobe-xd' }
            ], page: 3, index: 4, category: 'Folder' },
        ];

        document.addEventListener('alpine:init', () => {
            Alpine.data('livedesk', () => ({
                user: null, loading: true, authModalOpen: false, email: '', password: '', authError: '', authLoading: false,
                apps: [], pageNames: { 0: 'HOME', 1: 'DEV', 2: 'MEDIA', 3: 'WORK' }, 
                galleryItems: [], 
                
                // Wallpaper Feature State
                pageConfigs: {}, // { 0: { bg: {type, data} } }
                bgModalOpen: false,
                pageContextOpen: false,

                // Core State
                viewMode: 'grid', currentPage: 0, time: '', date: '', holisticViewOpen: false,
                galleryOpen: false, activeGalleryId: null, galleryViewMode: 'grid', viewImage: null,
                contextOpen: false, contextApp: null, contextPos: { x: 0, y: 0 },
                modalOpen: false, modalMode: 'add', modalData: {},
                folderModalOpen: false, activeFolder: { name: '', items: [] },
                categoryColors: { 'Google': 'text-sky-400', 'Dev': 'text-purple-400', 'Media': 'text-pink-400', 'Social': 'text-green-400', 'Productivity': 'text-orange-400', 'System': 'text-white', 'Folder': 'text-gray-400', 'default': 'text-gray-500' },

                init() {
                    this.updateTime(); setInterval(() => this.updateTime(), 1000);
                    
                    const localPageConfigs = localStorage.getItem('ldl_page_configs');
                    if(localPageConfigs) this.pageConfigs = JSON.parse(localPageConfigs);
                    
                    const local = localStorage.getItem('ldl_apps');
                    const initialApps = local ? JSON.parse(local) : DEFAULT_APPS;
                    this.processApps(initialApps);

                    auth.onAuthStateChanged(u => {
                        this.user = u;
                        if (u) {
                            this.authModalOpen = false;
                            db.ref(`users/${u.uid}/apps`).on('value', s => { if(s.val()) this.processApps(s.val()); });
                            db.ref(`users/${u.uid}/pageConfigs`).on('value', s => { if(s.val()) this.pageConfigs = s.val(); });
                        }
                    });
                },

                // Wallpaper Logic
                openPageContext(e) {
                    if(this.holisticViewOpen) return;
                    e.preventDefault();
                    this.contextPos = { x: e.clientX, y: e.clientY };
                    this.pageContextOpen = true;
                },
                openBgModal() {
                    this.bgModalOpen = true;
                },
                getOrCreatePageConfig(p) {
                    if(!this.pageConfigs[p]) this.pageConfigs[p] = { bg: null };
                    return this.pageConfigs[p];
                },
                uploadBackground(e) {
                    const file = e.target.files[0];
                    if(!file) return;
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                        const bgData = {
                            type: file.type.startsWith('video') ? 'video' : 'image',
                            data: evt.target.result
                        };
                        this.getOrCreatePageConfig(this.currentPage).bg = bgData;
                        this.saveSettings();
                    };
                    reader.readAsDataURL(file);
                },
                clearPageBg() {
                    if(this.pageConfigs[this.currentPage]) {
                        this.pageConfigs[this.currentPage].bg = null;
                        this.saveSettings();
                    }
                },
                get currentBg() {
                    const pConfig = this.pageConfigs[this.currentPage];
                    return (pConfig && pConfig.bg) ? pConfig.bg : null;
                },

                // Core Logic
                processApps(data) { this.apps = data.sort((a,b) => (a.page||0)-(b.page||0) || a.index-b.index); this.$nextTick(()=>this.initSortable()); },
                updateTime() { const n=new Date(); this.time=n.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}); this.date=n.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}); },
                get pageNumbers() { return [...new Set(this.apps.map(a=>a.page||0)),0,1,2,3].sort((a,b)=>a-b); },
                getAppsForPage(p) { return this.apps.filter(a=>(a.page||0)===p); },
                getPageName(i) { return this.pageNames[i] || `PAGE ${i+1}`; },
                
                saveSettings() {
                    if (this.user) {
                        db.ref(`users/${this.user.uid}/pageConfigs`).set(this.pageConfigs);
                        db.ref(`users/${this.user.uid}/apps`).set(this.apps);
                    } else {
                        localStorage.setItem('ldl_page_configs', JSON.stringify(this.pageConfigs));
                        localStorage.setItem('ldl_apps', JSON.stringify(this.apps));
                    }
                },

                handleAppClick(e,app) { 
                    if(app.type==='folder'){ 
                        this.activeFolder = app; 
                        this.folderModalOpen = true; 
                    } else if (app.type === 'gallery' || app.id === 'system-gallery') {
                        this.activeGalleryId = app.id;
                        this.galleryOpen = true;
                    } else { 
                        window.open(app.url, '_blank'); 
                    } 
                },
                closeFolderModal() { this.folderModalOpen = false; this.saveSettings(); },
                
                // Modals
                openModal(mode, app=null) {
                    this.modalMode = mode;
                    this.modalData = mode === 'edit' ? {...app} : { name:'', url:'', icon:'', category:'', page: this.currentPage, index: this.apps.length };
                    this.modalOpen = true;
                },
                closeModal() { this.modalOpen = false; },
                saveModal() {
                    if(this.modalMode === 'add') {
                        this.modalData.id = 'app-' + Date.now();
                        this.apps.push(this.modalData);
                    } else {
                        const idx = this.apps.findIndex(a=>a.id===this.modalData.id);
                        if(idx !== -1) this.apps[idx] = this.modalData;
                    }
                    this.saveSettings();
                    this.closeModal();
                },
                deleteApp(app) {
                    this.apps = this.apps.filter(a=>a.id!==app.id);
                    this.saveSettings();
                },
                launchApp(app) { this.handleAppClick(null, app); },

                // Gallery Logic
                triggerGalleryUpload() { document.getElementById('galleryUpload').click(); },
                handleGalleryUpload(e) {
                     Array.from(e.target.files).forEach(file => {
                         const reader = new FileReader();
                         reader.onload = (evt) => {
                             this.galleryItems.push({ id: Date.now()+Math.random(), type: file.type.startsWith('video')?'video':'image', data: evt.target.result });
                         };
                         reader.readAsDataURL(file);
                     });
                },
                getGalleryPreviews(id) { return this.galleryItems.slice(0, 9); },

                // Misc
                openContext(e, app) { e.preventDefault(); this.contextPos={x:e.clientX,y:e.clientY}; this.contextApp=app; this.contextOpen=true; },
                signInGoogle() { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); },
                signInEmail() { auth.signInWithEmailAndPassword(this.email, this.password).catch(()=>{ auth.createUserWithEmailAndPassword(this.email, this.password).catch(e=>this.authError=e.message); }); },
                handleProfileClick() { if(this.user) auth.signOut(); else this.authModalOpen=true; },
                toggleHolistic() { this.holisticViewOpen = !this.holisticViewOpen; },
                
                initSortable() {
                    document.querySelectorAll('.sortable-grid').forEach(el=>{
                        if(el._sortable) el._sortable.destroy();
                        el._sortable = new Sortable(el, { group:'apps', animation:200, draggable:'.app-item', delay:150, delayOnTouchOnly:true, onEnd:(evt)=>{
                             const itemEl = evt.item; const newIds = Array.from(evt.to.children).map(c=>c.dataset.id);
                             this.apps.forEach(a=>{ if(newIds.includes(a.id)) { a.page=parseInt(evt.to.dataset.page); a.index=newIds.indexOf(a.id); } });
                             this.saveSettings();
                        }});
                    });
                }
            }));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black transition-all duration-500">

<template x-if="currentBg">
<div className="w-full h-full relative">
<template x-if="currentBg.type === 'video'">
<video :src="currentBg.data" autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline=""></video>
</template>
<template x-if="currentBg.type === 'image'">
<img :src="currentBg.data" className="w-full h-full object-cover opacity-60"/>
</template>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
</div>
</template>
<template x-if="!currentBg">
<div className="w-full h-full bg-black"></div>
</template>
</div>

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

<div className="h-full w-full relative z-10 flex flex-col">

<header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-black/60 backdrop-blur-md z-40 shrink-0">
<div className="flex items-center gap-4">
<div className="hidden md:flex items-baseline gap-2">
<h1 className="text-lg font-bold tracking-tight text-white">LDL15 EXPERIMENTAL</h1>
<span className="text-xs text-gray-500 font-mono">v20</span>
</div>
<div className="flex bg-gray-900/80 rounded-lg p-1 border border-white/10">
<button :className="viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'grid'; holisticViewOpen = false" className="p-1.5 rounded-md transition-colors">
<span className="iconify text-lg" data-icon="solar:widget-2-bold-duotone"></span>
</button>
<button :className="viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'" @click="viewMode = 'list'; holisticViewOpen = false" className="p-1.5 rounded-md transition-colors">
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
<button @click="openModal('add')" className="w-8 h-8 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="solar:add-circle-bold-duotone"></span>
</button>
<button @click="handleProfileClick()" className="relative group">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden border border-white/20 ring-2 ring-green-500/20" x-show="user">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" x-show="user?.photoURL"/>
<div className="w-full h-full flex items-center justify-center font-bold text-xs" x-show="!user?.photoURL" x-text="user?.email?.[0].toUpperCase()"></div>
</div>
<div className="w-9 h-9 rounded-full bg-gray-800 overflow-hidden border border-white/10 flex items-center justify-center hover:bg-gray-700 transition-colors" x-show="!user">
<span className="iconify text-xl text-gray-400" data-icon="solar:user-circle-bold-duotone"></span>
</div>
</button>
</div>
</div>
</header>

<main @contextmenu.prevent="openPageContext($event)" @touchend="handleTouchEnd" @touchstart="handleTouchStart" className="flex-1 relative overflow-hidden">

<div className="h-full w-full relative" x-show="viewMode === 'grid'" x-transition.opacity="">
<div :className="holisticViewOpen ? 'z-50 bg-black/60 backdrop-blur-xl overflow-y-auto p-10 pt-20 flex flex-wrap justify-center items-center gap-8' : ''" className="h-full w-full relative transition-all duration-300">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="holisticViewOpen ? 'relative w-[260px] h-[460px] md:w-[300px] md:h-[530px] rounded-3xl border border-white/10 bg-[#111] shadow-2xl cursor-pointer hover:border-indigo-500/50 hover:shadow-indigo-500/20 hover:-translate-y-2' : 'absolute inset-0 overflow-y-auto no-scrollbar scroll-mask p-4 md:p-8'" @click="if(holisticViewOpen) { currentPage = pNum; holisticViewOpen = false; }" className="transition-all duration-500 ease-out" x-show="holisticViewOpen || currentPage === pNum">
<div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none" x-show="holisticViewOpen">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-black/80 px-3 py-1.5 rounded-full border border-white/10 shadow-lg" x-text="getPageName(pNum)"></span>
</div>
<div :className="holisticViewOpen ? 'w-[360%] h-[360%] origin-top-left scale-[0.277] pointer-events-none p-10 pt-24' : 'max-w-7xl mx-auto min-h-full'">

<div :data-page="pNum" className="app-grid sortable-grid">
<template :key="app.id" x-htmlFor="app in getAppsForPage(pNum)">
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent.stop="openContext($event, app)" className="relative flex flex-col items-center gap-1.5 rounded-xl transition-all cursor-pointer touch-manipulation group select-none app-item">

<template x-if="app.type === 'folder'">
<div :className="app.bgColor || 'bg-[#1a1a1a]'" className="ios-icon flex flex-col z-10 p-0 backdrop-blur-md !bg-opacity-50">
<div className="folder-mini-grid">
<template :key="subApp.id" x-htmlFor="subApp in (app.items || []).slice(0, 9)">
<div className="w-full h-full rounded-[2px] overflow-hidden bg-black/50 flex items-center justify-center">
<template x-if="subApp.icon.includes('data:') || subApp.icon.includes('http')">
<img :src="subApp.icon" className="w-full h-full object-cover"/>
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
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover opacity-90"/>
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
<div className="ios-icon app-icon-bg flex items-center justify-center z-10 relative">
<template x-if="app.note || (app.attachments &amp;&amp; app.attachments.length)">
<div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full border border-black z-20 flex items-center justify-center shadow-sm">
<span className="iconify text-[8px] text-black" data-icon="solar:notes-bold"></span>
</div>
</template>
<template x-if="app.icon.includes('data:') || app.icon.includes('http')">
<img :src="app.icon" className="w-full h-full object-cover pointer-events-none"/>
</template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')">
<span :data-icon="app.icon" className="iconify text-3xl text-gray-200"></span>
</template>
</div>
</template>
<div className="flex flex-col items-center gap-0.5 text-center">
<span className="text-[0.68rem] font-bold text-white tracking-tight leading-tight truncate w-20" x-text="app.name"></span>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[0.55rem] font-medium uppercase leading-none truncate w-20" x-text="app.type === 'folder' ? 'Folder' : (app.type === 'gallery' ? 'Gallery' : (app.category || 'App'))"></span>
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
<div :data-id="app.id" @click="handleAppClick($event, app)" @contextmenu.prevent.stop="openContext($event, app)" className="flex items-center gap-4 p-3 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/5 hover:bg-gray-800 transition-colors group cursor-pointer select-none">
<div className="w-12 h-12 rounded-[10px] bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 relative border border-white/5">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')"><img :src="app.icon" className="w-full h-full object-cover"/></template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')"><span :data-icon="app.icon" className="iconify text-xl text-white"></span></template>
</div>
<div className="flex-grow min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-bold text-white truncate text-sm" x-text="app.name"></h3>
<span :className="categoryColors[app.category] || categoryColors.default" className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 font-medium uppercase" x-text="app.type === 'folder' ? 'Folder' : app.category"></span>
</div>
<p className="text-xs text-gray-500 truncate" x-text="app.url"></p>
</div>
</div>
</template>
</div>
</div>
</main>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="pageContextOpen = false" className="fixed z-[85] w-64 bg-[#111]/90 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl py-2 overflow-hidden flex flex-col" x-show="pageContextOpen" x-transition.opacity="">
<div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-800 mb-1">
                Page <span x-text="currentPage + 1"></span> Options
            </div>
<button @click="openBgModal(); pageContextOpen=false" className="px-4 py-2.5 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:wallpaper-bold-duotone"></span> Change Wallpaper
            </button>
</div>

<div className="fixed inset-0 z-[95] flex items-center justify-center p-4" x-cloak="" x-show="bgModalOpen">
<div @click="bgModalOpen = false" className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
<div className="relative w-full max-w-sm bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-6 space-y-4">
<div className="flex justify-between items-center">
<h2 className="text-lg font-bold text-white">Page Wallpaper</h2>
<button @click="bgModalOpen = false" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="flex gap-4">
<label className="flex-1 aspect-video rounded-xl border border-gray-700 bg-gray-900 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors group overflow-hidden relative">
<div className="flex flex-col items-center" x-show="!pageConfigs[currentPage]?.bg">
<span className="iconify text-2xl text-gray-500 group-hover:text-white mb-1" data-icon="solar:upload-square-bold-duotone"></span>
<span className="text-xs text-gray-400">Upload</span>
</div>

<template x-if="pageConfigs[currentPage]?.bg">
<div className="w-full h-full relative">
<template x-if="pageConfigs[currentPage].bg.type === 'video'"><video :src="pageConfigs[currentPage].bg.data" className="w-full h-full object-cover opacity-50"></video></template>
<template x-if="pageConfigs[currentPage].bg.type === 'image'"><img :src="pageConfigs[currentPage].bg.data" className="w-full h-full object-cover opacity-50"/></template>
<button @click.prevent="clearPageBg()" className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white"><span className="iconify" data-icon="solar:trash-bin-trash-bold"></span></button>
</div>
</template>
<input @change="uploadBackground($event)" accept="image/*,video/*" className="hidden" type="file"/>
</label>
</div>
<p className="text-[10px] text-gray-500 text-center">Right-click empty space to access this again.</p>
</div>
</div>

<div className="fixed inset-0 z-[90] flex items-center justify-center p-4" x-cloak="" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-10">
<div className="flex justify-between items-center">
<h2 className="text-xl font-bold text-white" x-text="modalMode === 'add' ? 'Add App' : 'Edit App'"></h2>
<button @click="closeModal" className="text-gray-500 hover:text-white"><span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span></button>
</div>
<div className="space-y-3">
<div><label className="text-[10px] uppercase font-bold text-gray-500">Name</label><input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white mt-1 focus:border-indigo-500 outline-none" type="text" x-model="modalData.name"/></div>
<div><label className="text-[10px] uppercase font-bold text-gray-500">URL</label><input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white mt-1 focus:border-indigo-500 outline-none" type="text" x-model="modalData.url"/></div>
<div className="flex gap-2">
<div className="flex-1"><label className="text-[10px] uppercase font-bold text-gray-500">Icon (Iconify/URL)</label><input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white mt-1 focus:border-indigo-500 outline-none" type="text" x-model="modalData.icon"/></div>
<div className="w-1/3"><label className="text-[10px] uppercase font-bold text-gray-500">Category</label><input className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white mt-1 focus:border-indigo-500 outline-none" type="text" x-model="modalData.category"/></div>
</div>
</div>
<button @click="saveModal" className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 mt-2">Save App</button>
</div>
</div>

<div className="fixed inset-0 z-[90] flex items-center justify-center p-4" x-cloak="" x-show="folderModalOpen">
<div @click="closeFolderModal" className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
<div className="relative w-full max-w-2xl bg-[#111] border border-gray-800 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center min-h-[50vh]" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-90">
<input @change="saveSettings()" className="folder-title-input mb-8" type="text" x-model="activeFolder.name"/>
<div className="app-grid w-full">
<template :key="app.id" x-htmlFor="app in activeFolder.items">
<div @click="handleAppClick($event, app)" @contextmenu.prevent.stop="openContext($event, app)" className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-[#222] border border-white/10 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
<template x-if="app.icon.includes('data:') || app.icon.includes('http')"><img :src="app.icon" className="w-full h-full object-cover"/></template>
<template x-if="!app.icon.includes('data:') &amp;&amp; !app.icon.includes('http')"><span :data-icon="app.icon" className="iconify text-3xl text-white"></span></template>
</div>
<span className="text-xs text-white truncate w-20 text-center" x-text="app.name"></span>
</div>
</template>
</div>
<button @click="closeFolderModal" className="mt-auto py-3 px-8 bg-gray-800 rounded-full text-white font-bold hover:bg-gray-700 transition-colors">Close Folder</button>
</div>
</div>

<div className="fixed inset-0 z-[95] bg-black flex flex-col" x-cloak="" x-show="galleryOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-full">
<div className="h-16 px-6 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/10 shrink-0">
<h2 className="text-lg font-bold">Gallery</h2>
<div className="flex gap-2">
<button @click="triggerGalleryUpload" className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg">Upload</button>
<button @click="galleryOpen=false" className="p-2 bg-gray-800 rounded-lg text-white"><span className="iconify" data-icon="solar:close-circle-bold"></span></button>
</div>
<input @change="handleGalleryUpload" accept="image/*,video/*" className="hidden" id="galleryUpload" multiple="" type="file"/>
</div>
<div className="flex-1 overflow-y-auto p-4">
<div className="gallery-grid">
<template :key="item.id" x-htmlFor="item in galleryItems">
<div @click="viewImage = item" className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
<template x-if="item.type==='image'"><img :src="item.data" className="w-full h-full object-cover"/></template>
<template x-if="item.type==='video'"><video :src="item.data" className="w-full h-full object-cover opacity-80"></video><span className="iconify absolute inset-0 m-auto text-3xl text-white" data-icon="solar:play-circle-bold"></span></template>
<button @click.stop="deleteGalleryItem(item.id)" className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"><span className="iconify" data-icon="solar:trash-bin-trash-bold"></span></button>
</div>
</template>
</div>
</div>
</div>

<div className="fixed bottom-6 left-0 right-0 z-[60] flex flex-col items-center justify-end gap-4 pointer-events-none" x-cloak="" x-show="viewMode === 'grid'">
<div className="pointer-events-auto flex gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl transition-all duration-300" x-show="!holisticViewOpen">
<template :key="pNum" x-htmlFor="pNum in pageNumbers">
<div :className="currentPage === pNum ? 'bg-white w-4 shadow-white/50' : 'bg-gray-600 hover:bg-gray-400'" @click="currentPage = pNum" className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center"></div>
</template>
</div>
<button @click="toggleHolistic()" className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
<span :className="holisticViewOpen ? 'rotate-180' : ''" :data-icon="holisticViewOpen ? 'solar:minimize-square-bold-duotone' : 'solar:widget-5-bold-duotone'" className="iconify text-2xl text-white transition-transform duration-500 relative z-10"></span>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[85] w-56 bg-[#111] border border-gray-800 rounded-xl shadow-2xl py-1.5 overflow-hidden flex flex-col backdrop-blur-xl" x-show="contextOpen" x-transition.opacity="">
<button @click="launchApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-sm text-white hover:bg-indigo-600 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:plain-bold-duotone"></span> Open
            </button>
<div className="h-px bg-gray-800 my-1 mx-2"></div>
<button @click="openModal('edit', contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:pen-bold-duotone"></span> Edit App
            </button>
<button @click="deleteApp(contextApp); contextOpen=false" className="px-4 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-900/20 hover:text-red-300 flex items-center gap-3">
<span className="iconify text-lg opacity-70" data-icon="solar:trash-bin-trash-bold-duotone"></span> Delete
            </button>
</div>
</div>


    </>
  );
}
