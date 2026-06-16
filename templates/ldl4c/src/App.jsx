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
os: {
bg: '#0a0a0a',
panel: 'rgba(20, 20, 20, 0.75)',
surface: 'rgba(255, 255, 255, 0.05)',
accent: '#3b82f6',
border: 'rgba(255, 255, 255, 0.08)'
}
},
animation: {
'pop-in': 'popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
popIn: {
'0%': { transform: 'scale(0.95)', opacity: '0' },
'100%': { transform: 'scale(1)', opacity: '1' }
},
slideUp: {
'0%': { transform: 'translateY(100%)' },
'100%': { transform: 'translateY(0)' }
}
}
}
}
}



        function os() {
            return {
                // State
                apps: [
                    { id: '1', name: 'Explorer', icon: 'solar:folder-with-files-bold-duotone', color: 'bg-yellow-600', type: 'explorer' },
                    { id: '2', name: 'Settings', icon: 'solar:settings-bold-duotone', color: 'bg-gray-600', type: 'settings' },
                    { id: '3', name: 'Browser', icon: 'solar:globe-bold-duotone', color: 'bg-blue-500', type: 'iframe', content: 'https://www.google.com/webhp?igu=1' },
                    { id: '4', name: 'Store', icon: 'solar:bag-bold-duotone', color: 'bg-gradient-to-br from-pink-500 to-orange-400', type: 'iframe', content: 'https://poki.com' },
                    { id: '5', name: 'Spotify', icon: 'logos:spotify-icon', color: 'bg-green-500', type: 'iframe', content: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M' },
                    { id: '6', name: 'Terminal', icon: 'solar:terminal-line-duotone', color: 'bg-black border border-white/20', type: 'iframe', content: 'about:blank' },
                    { id: '7', name: 'Camera', icon: 'solar:camera-bold-duotone', color: 'bg-indigo-500', type: 'app' },
                    { id: '8', name: 'Notes', icon: 'solar:notes-bold-duotone', color: 'bg-yellow-400', type: 'app' },
                    { id: '9', name: 'Calculator', icon: 'solar:calculator-bold-duotone', color: 'bg-red-400', type: 'app' },
                    { id: '10', name: 'Photos', icon: 'solar:gallery-bold-duotone', color: 'bg-purple-500', type: 'app' },
                ],
                windows: [],
                startOpen: false,
                notifOpen: false,
                viewMode: 'desktop', // desktop, mobile
                clockTime: '',
                clockDate: '',
                clockDateFull: '',
                zIndexCounter: 100,
                dockApps: [],

                // Init
                initOS() {
                    this.updateTime();
                    setInterval(() => this.updateTime(), 1000);
                    
                    // Initial dock population
                    this.dockApps = this.apps.slice(0, 5);

                    // Sortable Setup
                    this.$nextTick(() => {
                        Sortable.create(this.$refs.appGrid, {
                            animation: 150,
                            ghostClass: 'opacity-50',
                            delay: 200, // delay for touch devices to allow scrolling
                            delayOnTouchOnly: true
                        });
                        lucide.createIcons();
                    });

                    // Responsive check
                    window.addEventListener('resize', () => {
                        this.viewMode = window.innerWidth < 768 ? 'mobile' : 'desktop';
                    });
                    this.viewMode = window.innerWidth < 768 ? 'mobile' : 'desktop';
                },

                // Logic
                updateTime() {
                    const now = new Date();
                    this.clockTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    this.clockDate = now.toLocaleDateString([], { month: 'short', day: 'numeric' });
                    this.clockDateFull = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
                },

                toggleStart() {
                    this.startOpen = !this.startOpen;
                    this.notifOpen = false;
                },

                closeMenus() {
                    this.startOpen = false;
                    this.notifOpen = false;
                },

                openApp(app) {
                    // Check if already open
                    const existing = this.windows.find(w => w.appId === app.id);
                    if (existing) {
                        if (existing.minimized) existing.minimized = false;
                        this.focusWindow(existing.id);
                        return;
                    }

                    // Create new window
                    const win = {
                        id: Date.now(),
                        appId: app.id,
                        title: app.name,
                        type: app.type,
                        content: app.content || '',
                        x: 50 + (this.windows.length * 20),
                        y: 50 + (this.windows.length * 20),
                        w: window.innerWidth < 640 ? window.innerWidth : 800,
                        h: window.innerWidth < 640 ? window.innerHeight - 100 : 500,
                        zIndex: ++this.zIndexCounter,
                        minimized: false,
                        maximized: window.innerWidth < 640 // Auto maximize on mobile
                    };
                    this.windows.push(win);
                    
                    // Add to dock if not present (temporary)
                    if(!this.dockApps.find(d => d.id === app.id)) {
                        // Logic to add temp icon to dock could go here
                    }
                },

                closeWindow(id) {
                    this.windows = this.windows.filter(w => w.id !== id);
                },

                minimizeWindow(id) {
                    const win = this.windows.find(w => w.id === id);
                    if (win) win.minimized = true;
                },

                toggleMaximize(id) {
                    const win = this.windows.find(w => w.id === id);
                    if (win) win.maximized = !win.maximized;
                },

                focusWindow(id) {
                    const win = this.windows.find(w => w.id === id);
                    if (win) {
                        win.zIndex = ++this.zIndexCounter;
                        win.minimized = false;
                    }
                },

                isAppOpen(appId) {
                    return this.windows.some(w => w.appId === appId && !w.minimized);
                },

                getAppIcon(appId) {
                    const app = this.apps.find(a => a.id === appId);
                    return app ? app.icon : 'solar:question-circle-bold';
                },

                // Dragging Logic
                dragData: null,
                startDrag(e, id) {
                    if(this.windows.find(w=>w.id === id).maximized) return;
                    
                    this.focusWindow(id);
                    const win = this.windows.find(w => w.id === id);
                    this.dragData = {
                        id: id,
                        startX: e.clientX,
                        startY: e.clientY,
                        initialLeft: win.x,
                        initialTop: win.y
                    };
                    
                    const moveHandler = (e) => {
                        if (!this.dragData) return;
                        const dx = e.clientX - this.dragData.startX;
                        const dy = e.clientY - this.dragData.startY;
                        const w = this.windows.find(x => x.id === this.dragData.id);
                        w.x = this.dragData.initialLeft + dx;
                        w.y = this.dragData.initialTop + dy;
                    };

                    const upHandler = () => {
                        document.removeEventListener('mousemove', moveHandler);
                        document.removeEventListener('mouseup', upHandler);
                        this.dragData = null;
                    };

                    document.addEventListener('mousemove', moveHandler);
                    document.addEventListener('mouseup', upHandler);
                },

                // Features preserved from ldl3b
                triggerUpload() {
                    document.getElementById('iconUploader').click();
                    document.getElementById('iconUploader').onchange = (e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            this.apps.push({
                                id: Date.now().toString(),
                                name: file.name.split('.')[0],
                                icon: event.target.result,
                                isImage: true,
                                color: 'bg-gray-800',
                                type: 'app'
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                },
                
                handleRightClick(e) {
                    // Placeholder for Custom Context Menu logic
                    // Can implement a custom div appearing at e.clientX, e.clientY
                },
                
                handleAppRightClick(e, app) {
                    // Placeholder for App Context Menu (Delete, Edit)
                    if(confirm('Delete ' + app.name + '?')) {
                        this.apps = this.apps.filter(a => a.id !== app.id);
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
      

<div :className="{'scale-105 blur-sm': startOpen || notifOpen}" className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-700 transform" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>
<div className="absolute inset-0 bg-black/30"></div>
</div>

<main className="relative z-10 w-full h-[calc(100vh-3rem)] md:h-[calc(100vh-3rem)] overflow-hidden flex flex-col p-4 md:p-6" id="desktop-area">

<div className="md:hidden lg:flex w-full max-w-sm mb-6 animate-pop-in" x-show="viewMode !== 'desktop' || window.innerWidth &gt; 1024">
<div className="w-full aspect-[4/2] bg-gradient-to-br from-emerald-400/20 to-teal-900/40 glass rounded-3xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50"><i className="w-8 h-8" data-lucide="cloud-sun"></i></div>
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<h3 className="text-emerald-100 font-medium text-sm tracking-wide">Next Meeting</h3>
<p className="text-white text-lg font-semibold mt-1">Product Design Review</p>
<p className="text-emerald-200/70 text-xs mt-1">10:00 AM - 11:30 AM</p>
</div>
<div>
<h1 className="text-5xl font-light tracking-tighter text-white" x-text="clockTime">09:41</h1>
<p className="text-emerald-100/60 text-sm mt-1" x-text="clockDate">Tue Apr 1</p>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/30 blur-3xl rounded-full"></div>
<div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-400/20 blur-3xl rounded-full"></div>
</div>
</div>

<div :className="{'grid grid-cols-4 gap-4 content-start': viewMode === 'mobile', 'flex flex-wrap content-start gap-2': viewMode === 'desktop'}" className="flex-1 w-full overflow-y-auto overflow-x-hidden md:overflow-visible no-scrollbar pb-20" x-ref="appGrid">
<template :key="app.id" x-htmlFor="app in apps">
<div :data-id="app.id" @click="openApp(app)" @contextmenu.stop="handleAppRightClick($event, app)" className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer w-[80px] h-[96px] md:w-[96px] md:h-[112px]">

<div :className="app.color || 'bg-gray-700'" className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg relative overflow-hidden transition-transform group-hover:scale-105 active:scale-95">

<template x-if="app.live">
<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
</template>
<template x-if="app.isImage">
<img :src="app.icon" className="w-full h-full object-cover"/>
</template>
<template x-if="!app.isImage">
<iconify-icon :icon="app.icon" className="text-white drop-shadow-md"></iconify-icon>
</template>
</div>

<span className="mt-2 text-xs font-medium text-white/90 text-center truncate w-full drop-shadow-md" x-text="app.name"></span>

<div :className="{'opacity-100': isAppOpen(app.id)}" className="w-1 h-1 bg-white rounded-full mt-1 opacity-0 transition-opacity"></div>
</div>
</template>

<div @click="triggerUpload()" className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer w-[80px] h-[96px] opacity-60 hover:opacity-100">
<div className="w-14 h-14 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center text-white/50">
<i className="w-6 h-6" data-lucide="plus"></i>
</div>
<span className="mt-2 text-xs font-medium text-white/50">Add</span>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" id="windows-container">
<template :key="win.id" x-htmlFor="win in windows">
<div :class="{
                    'inset-0 !rounded-none m-0': win.maximized, 
                    'scale-95 opacity-0 pointer-events-none': win.minimized,
                    'border border-white/10': !win.maximized
                 }" :style={{`left: '${win.x}px', top: '${win.y}px', width: '${win.w}px', height: '${win.h}px', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" className="absolute flex flex-col glass rounded-lg overflow-hidden shadow-2xl transition-all duration-200 pointer-events-auto">

<div @dblclick="toggleMaximize(win.id)" @mousedown="startDrag($event, win.id)" className="h-10 bg-white/5 flex items-center justify-between px-3 select-none">
<div className="flex items-center gap-3">
<iconify-icon :icon="getAppIcon(win.appId)" className="text-white/70"></iconify-icon>
<span className="text-xs font-medium text-white/80" x-text="win.title"></span>
</div>
<div className="flex items-center gap-2">
<button @click.stop="minimizeWindow(win.id)" className="p-1.5 hover:bg-white/10 rounded-md text-white/70">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
<button @click.stop="toggleMaximize(win.id)" className="p-1.5 hover:bg-white/10 rounded-md text-white/70">
<i className="w-3 h-3" data-lucide="square"></i>
</button>
<button @click.stop="closeWindow(win.id)" className="p-1.5 hover:bg-red-500/80 rounded-md hover:text-white text-white/70 transition-colors">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex-1 bg-os-bg/90 relative overflow-hidden">
<template x-if="win.type === 'iframe'">
<iframe :src="win.content" className="w-full h-full border-0"></iframe>
</template>
<template x-if="win.type === 'settings'">
<div className="p-6 h-full overflow-y-auto">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Settings</h2>

<div className="space-y-6 max-w-2xl">
<div className="glass-light p-4 rounded-xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl">👤</div>
<div>
<div className="font-medium">Guest User</div>
<div className="text-xs text-gray-400">Local Account</div>
</div>
</div>
</div>
<div className="glass-light p-4 rounded-xl space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><i className="w-4 h-4" data-lucide="monitor"></i></div>
<span className="text-sm">Display Mode</span>
</div>
<select className="bg-black/40 border border-white/10 rounded-md text-xs p-2 outline-none" x-model="viewMode">
<option value="desktop">Desktop</option>
<option value="mobile">Mobile/Tablet</option>
</select>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><i className="w-4 h-4" data-lucide="palette"></i></div>
<span className="text-sm">Accent Color</span>
</div>
<div className="flex gap-2">
<div className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer ring-2 ring-white/20"></div>
<div className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer hover:ring-2 ring-white/20"></div>
<div className="w-5 h-5 rounded-full bg-emerald-500 cursor-pointer hover:ring-2 ring-white/20"></div>
</div>
</div>
</div>
</div>
</div>
</template>
<template x-if="win.type === 'explorer'">
<div className="flex h-full">

<div className="w-48 border-r border-white/5 bg-white/5 p-2 flex flex-col gap-1">
<button className="flex items-center gap-2 p-2 rounded-md bg-white/10 text-xs font-medium"><i className="w-4 h-4" data-lucide="home"></i> Home</button>
<button className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5 text-xs text-gray-400"><i className="w-4 h-4" data-lucide="monitor"></i> Desktop</button>
<button className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5 text-xs text-gray-400"><i className="w-4 h-4" data-lucide="download"></i> Downloads</button>
</div>

<div className="flex-1 p-4 grid grid-cols-4 gap-4 content-start">
<div className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5">
<iconify-icon className="text-4xl text-yellow-400" icon="solar:folder-with-files-bold-duotone"></iconify-icon>
<span className="text-xs">Documents</span>
</div>
<div className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5">
<iconify-icon className="text-4xl text-purple-400" icon="solar:gallery-bold-duotone"></iconify-icon>
<span className="text-xs">Photos</span>
</div>
</div>
</div>
</template>
</div>
</div>
</template>
</div>

<div @click.stop="" className="fixed bottom-16 md:bottom-14 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] md:w-[640px] h-[70vh] md:h-[600px] glass rounded-2xl flex flex-col overflow-hidden origin-bottom pb-4" x-show="startOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-10 scale-95" x-transition:leave="transition ease-in duration-100" x-transition:leave-end="opacity-0 translate-y-10 scale-95" x-transition:leave-start="opacity-100 translate-y-0 scale-100">

<div className="p-6 pb-2">
<div className="relative group">
<i className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-blue-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Search for apps, settings, and documents" type="text"/>
</div>
</div>

<div className="flex-1 px-6 py-2 overflow-y-auto">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-gray-400 ml-1">Pinned</h3>
<button className="text-xs text-white bg-white/10 px-2 py-1 rounded hover:bg-white/20 flex items-center gap-1">All apps <i className="w-3 h-3" data-lucide="chevron-right"></i></button>
</div>
<div className="grid grid-cols-4 md:grid-cols-6 gap-4">
<template :key="app.id" x-htmlFor="app in apps.slice(0, 12)">
<button @click="openApp(app); startOpen = false" className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-colors group">
<div :className="app.color" className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon :icon="app.icon" className="text-white"></iconify-icon>
</div>
<span className="text-[10px] text-gray-300 truncate w-full text-center" x-text="app.name"></span>
</button>
</template>
</div>
<div className="mt-8 mb-4">
<h3 className="text-xs font-semibold text-gray-400 ml-1">Recommended</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="file-text"></i></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-200">Project Proposal.pdf</span>
<span className="text-[10px] text-gray-500">2h ago</span>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
<div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="image"></i></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-200">Screenshot_2023.png</span>
<span className="text-[10px] text-gray-500">Yesterday</span>
</div>
</div>
</div>
</div>

<div className="h-14 bg-black/20 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-8 mt-auto">
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-[10px] flex items-center justify-center font-bold">GU</div>
<span className="text-xs font-medium">Guest User</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="power"></i>
</button>
</div>
</div>

<div @click.stop="" className="fixed top-0 right-0 bottom-12 w-80 glass border-l border-white/10 z-40 p-4 flex flex-col gap-4" x-show="notifOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="translate-x-0 opacity-100" x-transition:enter-start="translate-x-full opacity-50" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="translate-x-full opacity-50" x-transition:leave-start="translate-x-0 opacity-100">

<div className="glass-light rounded-xl p-4">
<div className="text-sm font-medium mb-2" x-text="clockDateFull"></div>
<div className="grid grid-cols-7 gap-1 text-[10px] text-center text-gray-500">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>

<template x-htmlFor="i in 30">
<span :className="{'bg-blue-500 text-white rounded-full font-bold': i === 1}" className="p-1 hover:bg-white/10 rounded"> <span x-text="i"></span> </span>
</template>
</div>
</div>

<div className="grid grid-cols-4 gap-3">
<button className="aspect-square bg-blue-500 rounded-lg flex flex-col items-center justify-center gap-1 text-white shadow-lg shadow-blue-500/20">
<i className="w-5 h-5" data-lucide="wifi"></i>
</button>
<button className="aspect-square bg-white/10 hover:bg-white/20 rounded-lg flex flex-col items-center justify-center gap-1 text-white transition-colors">
<i className="w-5 h-5" data-lucide="bluetooth"></i>
</button>
<button className="aspect-square bg-white/10 hover:bg-white/20 rounded-lg flex flex-col items-center justify-center gap-1 text-white transition-colors">
<i className="w-5 h-5" data-lucide="moon"></i>
</button>
<button className="aspect-square bg-white/10 hover:bg-white/20 rounded-lg flex flex-col items-center justify-center gap-1 text-white transition-colors">
<i className="w-5 h-5" data-lucide="battery"></i>
</button>
</div>

<div className="glass-light p-3 rounded-xl flex items-center gap-3">
<i className="w-4 h-4 text-gray-400" data-lucide="sun"></i>
<div className="h-1 bg-gray-600 rounded-full flex-1 overflow-hidden relative group cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-[70%] bg-blue-500"></div>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<h3 className="text-xs font-semibold text-gray-400 mb-2">Notifications</h3>
<div className="bg-white/5 rounded-lg p-3 border-l-2 border-blue-500">
<div className="flex justify-between items-start">
<span className="text-xs font-medium">System</span>
<span className="text-[10px] text-gray-500">Now</span>
</div>
<p className="text-xs text-gray-300 mt-1">Welcome to LiveDeskLauncher v2. Sync is active.</p>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end pb-2 md:pb-0 h-16 md:h-12 md:bg-black/40 md:backdrop-filter md:backdrop-blur-xl border-t border-white/0 md:border-white/5 transition-all duration-300">

<div className="hidden md:flex absolute left-4 bottom-0 h-full items-center gap-1">
<div className="text-xs text-white/50 hover:text-white cursor-pointer px-2 transition-colors flex flex-col items-start leading-tight">
<span className="font-medium text-white/80"><i className="w-3 h-3 inline mr-1" data-lucide="cloud"></i> Cloudy</span>
<span className="text-[10px]">72°F</span>
</div>
</div>

<div className="flex items-center gap-1 md:gap-2 px-3 py-2 bg-black/60 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none border border-white/10 md:border-none rounded-2xl md:rounded-none shadow-2xl md:shadow-none mb-1 md:mb-0 transition-all duration-300">

<button @click.stop="toggleStart()" className="relative w-10 h-10 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10 active:scale-95 group">
<iconify-icon className="text-xl md:text-lg filter drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(0,160,255,0.6)]" icon="logos:microsoft-windows"></iconify-icon>
</button>
<div className="w-[1px] h-6 bg-white/10 mx-1"></div>

<template :key="'dock-'+app.id" x-htmlFor="app in dockApps">
<button @click="openApp(app)" className="relative w-10 h-10 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10 active:scale-95 active:-translate-y-1 tooltip-container">
<div :className="app.color" className="w-8 h-8 md:w-7 md:h-7 rounded-md flex items-center justify-center text-lg">
<iconify-icon :icon="app.icon" className="text-white"></iconify-icon>
</div>

<div :className="isAppOpen(app.id) ? 'w-3 md:w-4 bg-blue-400' : 'opacity-0'" className="absolute -bottom-1 w-1 h-1 bg-white/80 rounded-full transition-all duration-300"></div>
</button>
</template>
</div>

<div className="hidden md:flex absolute right-0 bottom-0 h-full items-center px-4 gap-2">
<button @click.stop="notifOpen = !notifOpen" className="hover:bg-white/10 p-1.5 rounded-md transition-colors">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-white/50" data-lucide="chevron-up"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="volume-2"></i>
<i className="w-4 h-4" data-lucide="battery"></i>
</div>
</button>
<div @click.stop="notifOpen = !notifOpen" className="flex flex-col items-end justify-center px-2 hover:bg-white/10 rounded-md cursor-pointer h-full py-1">
<span className="text-xs font-medium leading-none" x-text="clockTime"></span>
<span className="text-[10px] text-gray-400 leading-none mt-0.5" x-text="clockDate"></span>
</div>
<div className="w-1 h-full border-l border-white/10 ml-1"></div>
</div>
</div>

<input accept="image/*" className="hidden" id="iconUploader" type="file"/>


    </>
  );
}
