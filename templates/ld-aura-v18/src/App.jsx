import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"imports": {
"@google/genai": "https://esm.sh/@google/genai",
"markdown-it": "https://esm.sh/markdown-it@14.0.0"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out" x-show="settings.wallpaper.mode === 'static' || !settings.wallpaper.url">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,#000000_100%)]" x-show="!settings.wallpaper.url"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50" x-show="!settings.wallpaper.url">
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150">
</div>

<div :style={{`backgroundImage: 'url(\'${settings.wallpaper.url}\')', filter: '${getWallpaperFilter()}`'}} className="absolute inset-0 bg-cover bg-center transition-all duration-700" x-show="settings.wallpaper.url &amp;&amp; settings.wallpaper.type === 'image' &amp;&amp; settings.wallpaper.mode === 'static'">
<div className="absolute inset-0 bg-black/30"></div>
</div>

<video :src="settings.wallpaper.type === 'video' ? settings.wallpaper.url : ''" :style={{`filter: '${getWallpaperFilter()}`'}} autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80" loop="" muted="" playsinline="" x-show="settings.wallpaper.url &amp;&amp; settings.wallpaper.type === 'video' &amp;&amp; settings.wallpaper.mode === 'static'">
</video>
</div>

<header className="fixed top-0 left-0 right-0 h-12 z-40 flex items-center justify-between px-4 border-b border-white/[0.06] bg-[#050505]/60 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center gap-4">
<button @click="settingsModalOpen = true" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors" title="Settings">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
<button :className="searchOpen ? 'bg-white/20 text-white' : ''" @click="searchOpen = !searchOpen; if(searchOpen) $nextTick(() =&gt; $refs.searchInput.focus())" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors" title="Search">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>

<button :className="systemMode === 'edit' ? 'bg-purple-500/25 border-purple-400/50 text-purple-100 shadow-[0_0_14px_-4px_rgba(168,85,247,0.55)]' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'" @click="toggleSystemMode()" className="flex items-center gap-2 px-2.5 py-1 rounded-lg transition-all border backdrop-blur-md text-xs font-medium" title="Toggle Edit Mode">
<iconify-icon :icon="systemMode === 'edit' ? 'solar:check-circle-linear' : 'solar:pen-new-square-linear'" width="15"></iconify-icon>
<span x-text="systemMode === 'edit' ? 'Done' : 'Edit'"></span>
</button>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<div className="relative" x-data="{ open: false }">
<button @click="open = !open" className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors">
<iconify-icon icon="solar:layers-linear" width="14"></iconify-icon>
<span className="hidden sm:inline">Layouts</span>
</button>
<div @click.outside="open = false" className="absolute top-8 left-0 w-48 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-1 z-50 flex flex-col" x-cloak="" x-show="open" x-transition="">
<button @click="saveLayout(); open=false" className="text-left px-3 py-2 text-xs hover:bg-white/10 text-white/70 hover:text-white transition-colors">Save
                        Current Layout</button>
<div className="h-[1px] bg-white/5 my-1"></div>
<template :key="name" x-htmlFor="(layout, name) in savedLayouts">
<div className="flex items-center justify-between px-3 hover:bg-white/10 group">
<button @click="loadLayout(name); open=false" className="py-2 text-xs text-left text-white/70 group-hover:text-white flex-1" x-text="name"></button>
<button @click="deleteLayout(name)" className="text-white/20 hover:text-red-400"><iconify-icon icon="solar:trash-bin-trash-linear" width="12"></iconify-icon></button>
</div>
</template>
</div>
</div>
</div>
<div className="flex items-center gap-5">
<span className="text-xs font-medium tracking-tight text-white/90" x-text="time"></span>
<button :title="user ? `Signed in as ${user.displayName || user.email}` : 'Sign In'" @click="handleProfileClick()" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors ring-1 ring-white/10 overflow-hidden relative">
<template x-if="user &amp;&amp; user.photoURL">
<img :src="user.photoURL" className="w-full h-full object-cover"/>
</template>
<template x-if="!user || !user.photoURL">
<iconify-icon className="text-white/70" icon="solar:user-circle-linear" width="16"></iconify-icon>
</template>
<div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-green-500 rounded-full ring-1 ring-black" x-show="user"></div>
</button>
</div>
</header>

<main @mousedown="handleCanvasDown($event)" @touchstart="handleCanvasDown($event)" className="absolute inset-0 z-10 overflow-hidden cursor-grab active:cursor-grabbing" id="infinite-canvas">

<div :style={{`transformOrigin: '0 0', transform: 'translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.scale})`'}} className="absolute top-0 left-0 will-change-transform pointer-events-none origin-top-left">

<div className="absolute top-0 left-0 pointer-events-none z-[-1]" style={{overflow: 'visible'}} x-show="settings.wallpaper.url &amp;&amp; settings.wallpaper.mode === 'dynamic'">

<div :style={{`left: '-50000px', top: '-50000px', width: '100000px', height: '100000px', backgroundImage: 'url(\'${settings.wallpaper.url}\')', backgroundRepeat: 'repeat', backgroundSize: '${settings.wallpaper.scale || 1000}px', opacity: '0.5', filter: '${getWallpaperFilter()}`'}} className="absolute" x-show="settings.wallpaper.type === 'image'">
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[1080px] bg-black" x-show="settings.wallpaper.type === 'video'">
<video :src="settings.wallpaper.url" :style={{`filter: '${getWallpaperFilter()}`'}} autoplay="" className="w-full h-full object-cover opacity-50" loop="" muted=""></video>
</div>
</div>

<div className="relative w-full h-full pointer-events-auto" style={{imageRendering: '-webkit-optimize-contrast'}}>
<template :key="app.id" x-htmlFor="app in layeredApps">
<div :className="(appDragState.id === app.id ? 'pointer-events-none scale-105 opacity-80' : 'transition-transform duration-300') + (selectedApps.includes(app.id) ? ' selected' : '') + (systemMode === 'edit' ? ' edit-mode-app' : '') + (app.groupId ? ' ring-1 ring-cyan-400/25' : '') + (app.locked ? ' locked cursor-grab active:cursor-grabbing' : ' cursor-pointer') + (settings?.experimental?.hoverEffects ? ' hover:bg-white/5' : '')" :data-id="app.id" :style={{`left: '${getAppVisualX(app)}px', top: '${getAppVisualY(app)}px', zIndex: '${getAppZIndex(app)}', willChange: 'transform', backfaceVisibility: 'hidden'}} @click="handleAppClick($event, app)" @contextmenu.prevent="openContext($event, app)" @dragstart.prevent="" @mousedown="handleAppDragStart($event, app)" @mouseenter="settings?.experimental?.hoverPreview &amp;&amp; showHoverPreview($event, app)" @mouseleave="settings?.experimental?.hoverPreview &amp;&amp; hideHoverPreview()" @mousemove="settings?.experimental?.hoverPreview &amp;&amp; moveHoverPreview($event)" @touchstart="handleAppDragStart($event, app)" className="app-item absolute flex flex-col items-center gap-3 p-2 rounded-xl transition-colors group w-[100px]">

<div className="relative">

<div :className="`effect-${(app.style &amp;&amp; app.style.effect) ? app.style.effect : settings.icon.effect} ${systemMode === 'edit' ? 'edit-mode-indicator' : ''} ${getIconType(app.icon) === '3d' || app.type === '3d' ? '' : 'overflow-hidden'} ${settings?.experimental?.hoverEffects ? 'group-hover:bg-white/10' : ''}`" :style={{`width: '${(app.style &amp', app.style.size) ? app.style.size: 'settings.icon.size}px', height: '${(app.style &amp', app.style.size) ? app.style.size: 'settings.icon.size}px', borderRadius: '${(app.style &amp', app.style.radius !== undefined) ? app.style.radius: 'settings.icon.radius}px`'}} className="rounded-[18px] flex items-center justify-center relative glass-icon">

<button @click.stop="openNotePreview(app)" className="absolute top-1 right-1 z-30 w-5 h-5 rounded-full bg-blue-600 shadow-lg flex items-center justify-center hover:scale-110 transition-transform" x-show="app.note || (app.attachments &amp;&amp; app.attachments.length)"><iconify-icon className="text-white" icon="solar:notes-linear" width="10"></iconify-icon></button>
<template x-if="app.type === 'folder'">
<div className="grid grid-cols-2 gap-1 p-3 w-full h-full opacity-70">
<template x-htmlFor="sub in (app.items || []).slice(0,4)">
<div className="bg-white/20 rounded-[2px]"></div>
</template>
<template x-if="!app.items || app.items.length===0"><iconify-icon className="col-span-2 m-auto text-white/50" icon="solar:folder-with-files-linear" width="24"></iconify-icon></template>
</div>
</template>
<template x-if="app.type !== 'folder'">
<div :className="getIconType(app.icon) === '3d' || app.type === '3d' ? 'overflow-visible' : ''" className="text-white/80 group-hover:text-white transition-colors flex items-center justify-center w-full h-full relative">
<template x-if="getIconType(app.icon) === 'image'"><img :src="app.icon" className="w-full h-full object-cover rounded-lg" style={{backfaceVisibility: 'hidden', transform: 'translateZ(0)', imageRendering: '-webkit-optimize-contrast'}}/></template>
<template x-if="getIconType(app.icon) === 'video'"><video :src="app.icon" autoplay="" className="w-full h-full object-cover rounded-lg" loop="" muted="" playsinline="" style={{backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}></video></template>
<template x-if="getIconType(app.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg text-white/50 group-hover:text-white transition-colors"><iconify-icon icon="solar:music-note-linear" width="32"></iconify-icon><audio :src="app.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(app.icon) === 'pdf'"><iframe :src="app.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover rounded-lg bg-white overflow-hidden pointer-events-none" style={{border: 'none'}}></iframe></template>
<template x-if="getIconType(app.icon) === 'lottie'"><lottie-player :src="app.icon" autoplay="" background="transparent" className="w-full h-full object-cover rounded-lg" loop="" speed="1" style={{transform: 'translateZ(0)'}}></lottie-player></template>
<template x-if="app.type === '3d' || getIconType(app.icon) === '3d'"><model-viewer :scale="`${(app.style?.size || 64) / 64} ${(app.style?.size || 64) / 64} ${(app.style?.size || 64) / 64}`" :src="app.modelUrl || app.icon" :style={{`width: '${100 * Math.min(Math.max(1, viewport.scale || 1), 5)}%', height: '${100 * Math.min(Math.max(1, viewport.scale || 1), 5)}%', transform: 'scale(${1 / Math.min(Math.max(1, viewport.scale || 1), 5)})', transformOrigin: 'top left', pointerEvents: 'none', backgroundColor: 'transparent', outline: 'none', border: 'none'}} @load="$event.target.minimumRenderScale = 1; $event.target.updateFraming();" camera-controls="false" camera-orbit="45deg 55deg auto" className="w-full h-full object-contain absolute top-0 left-0" disable-pan="" disable-tap="" disable-zoom="" environment-image="neutral" field-of-view="2deg" interaction-prompt="none" min-field-of-view="1deg" shadow-intensity="1.5" shadow-softness="0.5"></model-viewer></template>
<template x-if="getIconType(app.icon) === 'iconify'"><iconify-icon :icon="app.icon || 'solar:box-linear'" strokeWidth="1.5" width="32"></iconify-icon></template>
</div>
</template>
</div>

<div className="absolute flex items-center justify-center z-40 shadow-sm" style={{top: '-4px', right: '-4px', width: '16px', height: '16px', background: '#FF4444', borderRadius: '50%'}} x-show="app.locked">
<iconify-icon className="text-white drop-shadow-sm" icon="solar:lock-password-bold" width="10"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center w-full">
<span :style={{`fontFamily: '${settings.fonts.apps}, sans-serif', fontSize: '${getAppNameSize(app)}px', color: '${getAppNameColor(app)}`'}} className="font-medium tracking-tight transition-colors text-center w-full truncate px-1 shadow-black/50 drop-shadow-md" x-text="app.name"></span>
<span :style={{`fontFamily: '${settings.fonts.apps}, sans-serif', fontSize: '${getAppCategorySize(app)}px', color: '${getAppCategoryColor(app)}`'}} className="font-medium tracking-wider uppercase text-center w-full truncate px-1 shadow-black/50 drop-shadow-md" x-show="app.category" x-text="app.category"></span>
</div>
</div>
</template>
</div>
</div>
</main>

<div className="fixed bottom-[5%] left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
<div className="flex items-center p-2 bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] gap-1">
<button @click="openModal('add', { type: 'app', id: 'app_'+Date.now() })" className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"><iconify-icon icon="solar:widget-add-linear" width="20"></iconify-icon></button>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>

<div className="flex items-center gap-1" x-show="dockedApps.length &gt; 0">
<template :key="app.id" x-htmlFor="app in dockedApps">
<button :title="app.name" @click="launchApp(app)" className="w-10 h-10 rounded-xl flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all relative group">
<div className="w-full h-full p-2 flex items-center justify-center">
<template x-if="getIconType(app.icon) === 'image'"><img :src="app.icon" className="w-full h-full object-cover rounded-md"/></template>
<template x-if="getIconType(app.icon) === 'video'"><video :src="app.icon" autoplay="" className="w-full h-full object-cover rounded-md" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(app.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 rounded-md text-white/50 group-hover:text-white transition-colors"><iconify-icon icon="solar:music-note-linear" width="22"></iconify-icon><audio :src="app.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(app.icon) === 'pdf'"><iframe :src="app.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover rounded-md bg-white overflow-hidden pointer-events-none" style={{border: 'none'}}></iframe></template>
<template x-if="getIconType(app.icon) === 'lottie'"><lottie-player :src="app.icon" autoplay="" background="transparent" className="w-full h-full object-cover rounded-md" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(app.icon) === 'iconify'"><iconify-icon :icon="app.icon || 'solar:box-linear'" width="22"></iconify-icon></template>
</div>

<div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]" x-show="windows.some(w =&gt; w.appId === app.id)"></div>

<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" x-text="app.name"></div>
</button>
</template>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
</div>

<div className="flex items-center gap-1">
<template :key="win.id" x-htmlFor="win in windows">
<button :className="!win.minimized ? 'bg-white/10 shadow-inner text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'" @click="toggleMinimize(win.id)" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all relative group overflow-hidden">
<template x-if="getIconType(win.icon) === 'image'"><img :src="win.icon" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 p-1 rounded-lg"/></template>
<template x-if="getIconType(win.icon) === 'video'"><video :src="win.icon" autoplay="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 p-1 rounded-lg" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(win.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors"><iconify-icon icon="solar:music-note-linear" width="18"></iconify-icon><audio :src="win.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(win.icon) === 'pdf'">
<div className="w-full h-full opacity-80 group-hover:opacity-100 p-1 rounded-lg overflow-hidden">
<iframe :src="win.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover bg-white pointer-events-none" style={{border: 'none'}}></iframe>
</div>
</template>
<template x-if="getIconType(win.icon) === 'lottie'"><lottie-player :src="win.icon" autoplay="" background="transparent" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 p-1 rounded-lg" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(win.icon) === 'iconify'"><iconify-icon :icon="win.icon || 'solar:window-frame-linear'" width="18"></iconify-icon></template>
<div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full shadow-[0_0_6px_white]" x-show="!win.minimized"></div>
</button>
</template>
<div className="text-[10px] text-white/20 font-medium px-2 uppercase tracking-widest" x-show="windows.length === 0">Idle</div>
</div>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<button @click="resetViewport()" className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all" title="Reset View"><iconify-icon icon="solar:target-linear" width="20"></iconify-icon></button>
</div>
</div>

<div :style={{`left: '${hoverPreview.x}px', top: '${hoverPreview.y}px`'}} className="fixed z-[205] w-[280px] pointer-events-none bg-[#0a0a0a]/92 backdrop-blur-xl border border-white/15 rounded-xl p-3 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.8)]" x-cloak="" x-show="hoverPreview.open &amp;&amp; hoverPreview.app &amp;&amp; !contextOpen" x-transition.opacity.duration.120ms="">
<div className="flex items-center justify-between gap-2">
<div className="text-[10px] font-semibold text-white/90 truncate" x-text="hoverPreview.app?.name"></div>
<div className="text-[9px] uppercase tracking-[0.14em] text-white/45" x-text="hoverPreview.app?.type || 'app'">
</div>
</div>
<div className="mt-2 text-[11px] leading-relaxed text-white/70 max-h-[120px] overflow-hidden" x-text="getHoverPreviewText(hoverPreview.app)"></div>
</div>

<button @click="settingsModalOpen = true; settingsTab = 'appearance'" className="fixed bottom-7 right-6 z-[210] w-10 h-10 rounded-xl border border-purple-400/30 bg-purple-500/20 backdrop-blur-xl text-purple-100 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:scale-105 hover:bg-purple-400/25 transition-all flex items-center justify-center" title="Quick Style">
<iconify-icon icon="solar:flash-circle-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#050505]"></span>
</button>

<div className="fixed top-14 right-3 z-[210] px-2.5 py-2 rounded-xl border border-white/15 bg-black/55 backdrop-blur-xl shadow-[0_10px_24px_-12px_rgba(0,0,0,0.9)]">
<div className="text-[8px] uppercase tracking-[0.16em] text-white/45">Build</div>
<div className="text-[10px] font-semibold text-purple-200">CL-V3-2026-02-19</div>
<div className="text-[9px] text-white/60">claude v3 branch</div>
<div className="text-[8px] uppercase tracking-[0.12em] text-white/40" x-text="location.host"></div>
</div>

<div @click.self="searchOpen = false" className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm pt-20 px-4" x-cloak="" x-show="searchOpen" x-transition.opacity="">
<div className="max-w-2xl mx-auto flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-12 py-4 text-white text-lg outline-none focus:border-white/30 shadow-2xl" placeholder="Search apps, categories, notes..." type="text" x-model="searchQuery" x-ref="searchInput"/>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" icon="solar:magnifer-linear" width="24"></iconify-icon>
<button @click="searchQuery = ''" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white" x-show="searchQuery"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl p-2 max-h-[60vh] overflow-y-auto custom-scrollbar" x-show="searchQuery">
<template :key="app.id" x-htmlFor="app in filteredApps">
<div @click="launchApp(app); searchOpen=false; searchQuery=''" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
<template x-if="getIconType(app.icon) === 'image'"><img :src="app.icon" className="w-full h-full object-cover rounded-lg"/></template>
<template x-if="getIconType(app.icon) === 'video'"><video :src="app.icon" autoplay="" className="w-full h-full object-cover rounded-lg" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(app.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg text-white/50 group-hover:text-white transition-colors"><iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon><audio :src="app.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(app.icon) === 'pdf'"><iframe :src="app.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover rounded-lg bg-white overflow-hidden pointer-events-none" style={{border: 'none'}}></iframe></template>
<template x-if="getIconType(app.icon) === 'lottie'"><lottie-player :src="app.icon" autoplay="" background="transparent" className="w-full h-full object-cover rounded-lg" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(app.icon) === 'iconify'"><iconify-icon :icon="app.icon || 'solar:box-linear'" width="20"></iconify-icon></template>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-medium text-white" x-text="app.name"></span>
<span className="text-[10px] text-white/40 uppercase tracking-wider" x-text="app.type"></span>
</div>
<div className="flex gap-2 text-[10px] text-white/40">
<span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5" x-show="app.category" x-text="app.category"></span>
<span className="italic truncate max-w-[200px]" x-show="app.note" x-text="app.note"></span>
</div>
</div>
</div>
</template>
<div className="p-4 text-center text-white/30 text-sm" x-show="filteredApps.length === 0">No results found.
                </div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" x-cloak="" x-show="settingsModalOpen">
<div @click="settingsModalOpen=false" className="absolute inset-0 bg-black/40" x-transition.opacity=""></div>
<div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[85vh]" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-95">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h2 className="text-sm font-semibold text-white tracking-tight">System Configuration</h2>
</div>
<div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5 overflow-x-auto custom-scrollbar">
<template x-htmlFor="tab in ['view', 'appearance', 'wallpaper', 'presets', 'experimental']">
<button :className="settingsTab === tab ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'" @click="settingsTab = tab" className="px-4 py-1.5 text-[11px] font-medium rounded-md transition-all capitalize whitespace-nowrap"><span x-text="tab"></span></button>
</template>
</div>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar">
<div className="space-y-8" x-show="settingsTab === 'view'">
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Icon Grid</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-white/50"><span>Columns</span><span x-text="settings.grid.cols"></span></div><input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="12" min="3" step="1" type="range" x-model.number="settings.grid.cols"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-white/50"><span>Gap (px)</span><span x-text="settings.grid.gap"></span></div><input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="64" min="8" step="4" type="range" x-model.number="settings.grid.gap"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-white/50"><span>Snap
                                        Precision</span><span x-text="settings.grid.snapStep.toFixed(2)"></span></div>
<input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="1" min="0.05" step="0.05" type="range" x-model.number="settings.grid.snapStep"/>
</div>
<label className="space-y-2 flex items-center justify-between px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/70">
<span>Align Components to Grid</span>
<input className="accent-cyan-400" type="checkbox" x-model="settings.grid.alignToGrid"/>
</label>
</div>
</div>
</div>
<div className="space-y-8" x-show="settingsTab === 'appearance'">
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Icon Style</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-white/50"><span>Size (px)</span><span x-text="settings.icon.size"></span></div><input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="512" min="16" step="1" type="range" x-model.number="settings.icon.size"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-white/50"><span>Corner Radius
                                        (px)</span><span x-text="settings.icon.radius"></span></div><input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="64" min="0" step="2" type="range" x-model.number="settings.icon.radius"/>
</div>
</div>
<div className="grid grid-cols-4 gap-3"><template x-htmlFor="eff in ['glass', 'neon', 'flat', 'shadow', 'animated', 'transparent', 'soft-glow', 'strong-glow', 'neon-glow', 'ambient', 'inner-glow', 'outline', 'rim']"><button :className="settings.icon.effect === eff ? 'bg-white/10 border-white/30' : 'bg-transparent border-white/5 hover:bg-white/5'" @click="settings.icon.effect = eff" className="flex flex-col items-center gap-2 p-3 rounded-lg border transition-all">
<div :className="'effect-'+eff" className="w-8 h-8 rounded-lg"></div><span className="text-[9px] uppercase tracking-wide opacity-60 truncate w-full text-center" x-text="eff.replace('-', ' ')"></span>
</button></template></div>
</div>
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Typography</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div><label className="block text-[10px] font-medium text-white/40 mb-1.5">UI
                                    Font</label><select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none" x-model="settings.fonts.ui">
<option value="Inter">Inter (Default)</option>
<option value="JetBrains Mono">JetBrains Mono</option>
<option value="Lora">Lora (Serif)</option>
<option value="Poppins">Poppins</option>
</select></div>
<div><label className="block text-[10px] font-medium text-white/40 mb-1.5">Apps
                                    Font</label><select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none" x-model="settings.fonts.apps">
<option value="Inter">Inter (Default)</option>
<option value="JetBrains Mono">JetBrains Mono</option>
<option value="Lora">Lora</option>
<option value="Poppins">Poppins</option>
</select></div>
</div>
</div>
</div>
<div className="space-y-6" x-show="settingsTab === 'wallpaper'">
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Wallpaper Mode
                        </h3>
<div className="flex bg-white/5 rounded-lg p-1 border border-white/5 mb-4">
<button :className="settings.wallpaper.mode === 'static' ? 'bg-white text-black shadow' : 'text-white/50 hover:text-white'" @click="settings.wallpaper.mode = 'static'" className="flex-1 py-1.5 text-xs font-medium rounded transition-colors">Static</button>
<button :className="settings.wallpaper.mode === 'dynamic' ? 'bg-white text-black shadow' : 'text-white/50 hover:text-white'" @click="settings.wallpaper.mode = 'dynamic'" className="flex-1 py-1.5 text-xs font-medium rounded transition-colors">Dynamic
                                (Tiled)</button>
</div>
<div className="space-y-2 mb-4" x-show="settings.wallpaper.mode === 'dynamic' &amp;&amp; settings.wallpaper.type === 'image'">
<div className="flex justify-between text-[10px] text-white/50"><span>Tiling Scale</span><span x-text="settings.wallpaper.scale + 'px'"></span></div>
<input className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="6000" min="200" step="50" type="range" x-model.number="settings.wallpaper.scale"/>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Post-Processing
                            Effects</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10">

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Brightness</span><input type="checkbox" x-model="settings.wallpaper.effects.brightnessEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.brightnessEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="200" min="0" type="range" x-model.number="settings.wallpaper.effects.brightness"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Exposure</span><input type="checkbox" x-model="settings.wallpaper.effects.exposureEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.exposureEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="200" min="0" type="range" x-model.number="settings.wallpaper.effects.exposure"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Contrast</span><input type="checkbox" x-model="settings.wallpaper.effects.contrastEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.contrastEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="200" min="0" type="range" x-model.number="settings.wallpaper.effects.contrast"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Saturation</span><input type="checkbox" x-model="settings.wallpaper.effects.saturationEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.saturationEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="200" min="0" type="range" x-model.number="settings.wallpaper.effects.saturation"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Color Shift</span><input type="checkbox" x-model="settings.wallpaper.effects.hueEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.hueEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="360" min="0" type="range" x-model.number="settings.wallpaper.effects.hue"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center"><span className="text-[10px] text-white/50 uppercase">Softness</span><input type="checkbox" x-model="settings.wallpaper.effects.blurEnabled"/></div>
<input :disabled="!settings.wallpaper.effects.blurEnabled" className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80 disabled:opacity-30" max="40" min="0" type="range" x-model.number="settings.wallpaper.effects.blur"/>
</div>

<div className="space-y-2 col-span-2 pt-2 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-white/50 uppercase">Invert Colors</span>
<div className="flex items-center gap-4">
<input className="w-24 h-1 bg-white/10 rounded-full appearance-none cursor-pointer opacity-80" max="100" min="0" type="range" x-model.number="settings.wallpaper.effects.invert"/>
<input type="checkbox" x-model="settings.wallpaper.effects.invertEnabled"/>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Active Wallpaper
                        </h3>
<div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 bg-black/50 relative group">
<template x-if="settings.wallpaper.type === 'video'"><video :src="settings.wallpaper.url" :style={{`filter: '${getWallpaperFilter()}`'}} autoplay="" className="w-full h-full object-cover opacity-80" loop="" muted=""></video></template><template x-if="settings.wallpaper.type === 'image'"><img :src="settings.wallpaper.url" :style={{`filter: '${getWallpaperFilter()}`'}} className="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop'"/>
<div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
</template>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button @click="settings.wallpaper = {url:'', type:'image', mode: 'static', scale: 1000, effects: JSON.parse(JSON.stringify(DEFAULT_EFFECTS))}" className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-xs hover:bg-red-500/30">Remove
                                    Wallpaper</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div><label className="block text-[10px] font-medium text-white/40 mb-1.5">Direct Link</label><input @input="settings.wallpaper.type = $event.target.value.match(/\.(mp4|webm)$/i) ? 'video' : 'image'" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none" placeholder="https://..." type="text" x-model="settings.wallpaper.url"/></div>
<div><label className="block text-[10px] font-medium text-white/40 mb-1.5">Upload File</label><label className="flex items-center justify-center w-full px-3 py-2 bg-white/5 border border-dashed border-white/20 rounded-lg text-xs text-white/50 cursor-pointer hover:bg-white/10 hover:text-white transition-colors"><span>Choose
                                    Image or Video</span><input @change="handleFileUpload($event)" accept="image/*,video/*" className="hidden" type="file"/></label></div>
</div>
</div>
<div className="space-y-8" x-show="settingsTab === 'experimental'">
<div>
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Experimental
                            Features</h3>
<div className="p-4 mb-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
<p className="text-[11px] text-yellow-200/80 leading-relaxed font-medium">
<iconify-icon className="text-yellow-400 mr-1 mb-[-2px]" icon="solar:danger-triangle-bold"></iconify-icon>
                                These features are actively in development. Enabling them might cause unexpected UI
                                behavior or performance issues.
                            </p>
</div>
<div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/10">

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex flex-col gap-1 pr-4">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Icon
                                        Hover Effects</span>
<span className="text-[10px] text-white/40 leading-relaxed max-w-sm">Enables the white
                                        background highlight when moving the mouse over grid applications.</span>
</div>
<div :className="settings.experimental.hoverEffects ? 'bg-cyan-500' : 'bg-white/20'" className="relative inline-block w-10 h-5 rounded-full transition-colors flex-shrink-0">
<input className="opacity-0 w-0 h-0 absolute" type="checkbox" x-model="settings.experimental.hoverEffects"/>
<span :className="settings.experimental.hoverEffects ? 'translate-x-5' : 'translate-x-0'" className="absolute left-[2px] top-[2px] bg-white w-4 h-4 rounded-full transition-transform"></span>
</div>
</label>

<div className="h-[1px] bg-white/5 my-4"></div>
<label className="flex items-center justify-between cursor-pointer group pb-2">
<div className="flex flex-col gap-1 pr-4">
<span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Hover
                                        Preview Tooltips</span>
<span className="text-[10px] text-white/40 leading-relaxed max-w-sm">Shows a detailed
                                        text popup describing the application when hovering over it.</span>
</div>
<div :className="settings.experimental.hoverPreview ? 'bg-cyan-500' : 'bg-white/20'" className="relative inline-block w-10 h-5 rounded-full transition-colors flex-shrink-0">
<input className="opacity-0 w-0 h-0 absolute" type="checkbox" x-model="settings.experimental.hoverPreview"/>
<span :className="settings.experimental.hoverPreview ? 'translate-x-5' : 'translate-x-0'" className="absolute left-[2px] top-[2px] bg-white w-4 h-4 rounded-full transition-transform"></span>
</div>
</label>
</div>
</div>
</div>
<div className="space-y-4" x-show="settingsTab === 'presets'">
<button @click="savePreset()" className="w-full py-3 bg-white/10 border border-white/10 rounded-lg text-xs text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"><iconify-icon icon="solar:diskette-linear"></iconify-icon> Save Current Configuration as Preset</button>
<div className="h-[1px] bg-white/5 my-4"></div>
<div className="space-y-2"><template :key="idx" x-htmlFor="(preset, idx) in presets">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 group">
<div>
<div className="text-xs font-medium text-white" x-text="preset.name"></div>
<div className="text-[9px] text-white/40" x-text="new Date(preset.date).toLocaleDateString()"></div>
</div>
<div className="flex gap-2"><button @click="applyPreset(preset)" className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded text-[10px] hover:bg-blue-500/30">Load</button><button @click="deletePreset(idx)" className="p-1.5 text-white/20 hover:text-red-400 rounded"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button></div>
</div>
</template>
<div className="text-center text-[10px] text-white/30 italic py-4" x-show="presets.length === 0">No
                            saved presets</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-[#0f0f0f] flex justify-end"><button @click="settingsModalOpen = false" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">Close</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" x-cloak="" x-show="authModalOpen">
<div @click="authModalOpen=false" className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
<div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4 text-center">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<iconify-icon className="text-white" icon="solar:lock-keyhole-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-semibold text-white tracking-tight">Access Your OS</h2>
<p className="text-xs text-white/50 mt-1">Sign in to sync your apps and layouts</p>
</div>
<form @submit.prevent="handleAuth" className="w-full space-y-3 mt-2"><input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 outline-none transition-colors" placeholder="Email" type="email" x-model="email"/><input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 outline-none transition-colors" placeholder="Password" type="password" x-model="password"/>
<p className="text-[10px] text-red-400 text-left" x-show="authError" x-text="authError"></p><button :disabled="isLoadingAuth" className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50" type="submit"><span x-text="isLoadingAuth ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')"></span></button>
</form>
<button @click="isSignUp = !isSignUp" className="text-[10px] text-white/40 hover:text-white transition-colors"><span x-text="isSignUp ? 'Already have an account? Sign In' : 'New here? Create Account'"></span></button>
</div>
</div>

<div :style={{`top: '${snapPreview?.y}px', left: '${snapPreview?.x}px', width: '${snapPreview?.w}px', height: '${snapPreview?.h}px`'}} className="fixed z-[90] bg-white/[0.08] border border-white/20 backdrop-blur-md rounded-lg transition-all duration-200 pointer-events-none" x-show="snapPreview" x-transition.opacity=""></div>

<div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
<template :key="win.id" x-htmlFor="win in windows">
<div :class="{ 
                    'transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]': win.snapped,
                    'ring-2 ring-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]': activeWindowId === win.id
                }" :style={{`top: '${win.y}px', left: '${win.x}px', width: '${win.w}px', height: '${win.h}px', zIndex: '${win.zIndex}`'}} @mousedown="focusWindow(win.id)" @touchstart="focusWindow(win.id)" className="absolute flex flex-col bg-[#0a0a0a] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_-12px_rgba(0,0,0,0.8)] pointer-events-auto transition-transform will-change-transform" x-show="!win.minimized">

<div x-show="!win.maximized">
<div @mousedown.prevent.stop="startResize($event, win.id, 'n')" @touchstart.prevent.stop="startResize($event, win.id, 'n')" className="resizer resizer-n"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'e')" @touchstart.prevent.stop="startResize($event, win.id, 'e')" className="resizer resizer-e"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 's')" @touchstart.prevent.stop="startResize($event, win.id, 's')" className="resizer resizer-s"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'w')" @touchstart.prevent.stop="startResize($event, win.id, 'w')" className="resizer resizer-w"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'nw')" @touchstart.prevent.stop="startResize($event, win.id, 'nw')" className="resizer resizer-nw"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'ne')" @touchstart.prevent.stop="startResize($event, win.id, 'ne')" className="resizer resizer-ne"></div>
<div @mousedown.prevent.stop="startResize($event, win.id, 'sw')" @touchstart.prevent.stop="startResize($event, win.id, 'sw')" className="resizer resizer-sw"></div>
</div>

<div @dblclick="toggleMaximize(win.id)" @mousedown="startWindowDrag($event, win.id)" @touchstart="startTouchDrag($event, win.id)" className="h-10 px-4 flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a] rounded-t-lg shrink-0 select-none group/header relative">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-white/40">
<template x-if="getIconType(win.icon) === 'image'"><img :src="win.icon" className="w-3.5 h-3.5 object-cover rounded-sm"/></template>
<template x-if="getIconType(win.icon) === 'video'"><video :src="win.icon" autoplay="" className="w-3.5 h-3.5 object-cover rounded-sm" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(win.icon) === 'audio'">
<div className="w-3.5 h-3.5 flex items-center justify-center text-white/50"><iconify-icon icon="solar:music-note-linear" width="14"></iconify-icon></div>
</template>
<template x-if="getIconType(win.icon) === 'pdf'">
<div className="w-3.5 h-3.5 bg-white overflow-hidden rounded-sm flex items-center justify-center pointer-events-none">
<iframe :src="win.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-[200%] h-[200%] object-cover origin-top-left scale-50" style={{border: 'none'}}></iframe>
</div>
</template>
<template x-if="getIconType(win.icon) === 'lottie'"><lottie-player :src="win.icon" autoplay="" background="transparent" className="w-3.5 h-3.5 object-cover rounded-sm" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(win.icon) === 'iconify'"><iconify-icon :icon="win.icon || 'solar:window-frame-linear'" width="14"></iconify-icon></template>
</div>
<span className="text-xs font-medium text-white/70 tracking-tight truncate max-w-[200px]" x-text="win.title"></span>
</div>
<div className="flex items-center gap-2 opacity-100 md:opacity-40 md:group-hover/header:opacity-100 transition-opacity">
<button @click.stop="win.minimized = true" className="p-1 hover:bg-white/10 rounded text-white/70 transition-colors"><iconify-icon icon="solar:minus-circle-linear" width="14"></iconify-icon></button>
<button @click.stop="toggleMaximize(win.id)" className="p-1 hover:bg-white/10 rounded text-white/70 transition-colors"><iconify-icon :icon="win.maximized ? 'solar:minimize-square-linear' : 'solar:maximize-square-linear'" width="14"></iconify-icon></button>
<button @click.stop="closeWindow(win.id)" className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded text-white/70 transition-colors"><iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon></button>
</div>
</div>

<div className="flex-1 bg-[#050505] relative rounded-b-lg overflow-hidden flex flex-col">
<div className="absolute inset-0 z-[60] bg-[#0a0a0a]/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center" x-show="win.type === 'chat' &amp;&amp; !ai">
<div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20">
<iconify-icon className="text-red-400" icon="solar:shield-warning-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Gemini Not Ready</h3>
<p className="text-sm text-white/50 mb-6 max-w-xs">API Key is missing or invalid. Please configure
                            it in your environment or settings.</p>
<button @click="settingsModalOpen = true; settingsTab = 'view'" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">Open
                            Settings</button>
</div>
<template x-if="win.type === 'code'">
<div className="w-full h-full bg-[#050505]"><iframe :className="dragState.isDragging || dragState.isResizing ? 'pointer-events-none' : ''" :srcdoc="win.code" className="w-full h-full border-none" sandbox="allow-scripts allow-forms allow-same-origin"></iframe></div>
</template>
<template x-if="win.type === 'gallery'">
<div className="w-full h-full bg-[#0a0a0a] p-4 overflow-y-auto custom-scrollbar">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<template :key="file.url" x-htmlFor="file in (win.attachments || [])">
<div className="group relative aspect-square bg-white/5 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all">
<img :src="file.url" className="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop'"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
<a :href="file.url" className="text-white text-xs hover:underline truncate px-2" target="_blank" x-text="file.name"></a>
</div>
</div>
</template>
<button @click="openModal('edit', getAppById(win.appId))" className="aspect-square rounded-lg border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 text-white/20 hover:text-white hover:border-white/30 transition-all"><iconify-icon icon="solar:gallery-add-linear" width="24"></iconify-icon><span className="text-[10px] font-medium">Add Media</span></button>
</div>
</div>
</template>
<template x-if="win.type === 'folder'">
<div className="w-full h-full bg-[#0a0a0a] p-4 overflow-y-auto custom-scrollbar">
<div className="grid grid-cols-4 gap-4">
<template x-htmlFor="item in (win.items || [])">
<div @click="launchApp(item)" className="flex flex-col items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg">
<div className="w-12 h-12 flex items-center justify-center">
<template x-if="getIconType(item.icon) === 'image'"><img :src="item.icon" className="w-full h-full object-cover rounded-md"/></template>
<template x-if="getIconType(item.icon) === 'video'"><video :src="item.icon" autoplay="" className="w-full h-full object-cover rounded-md" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(item.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 rounded-md text-white/50 group-hover:text-white transition-colors"><iconify-icon icon="solar:music-note-linear" width="32"></iconify-icon><audio :src="item.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(item.icon) === 'pdf'"><iframe :src="item.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover rounded-md bg-white overflow-hidden pointer-events-none" style={{border: 'none'}}></iframe></template>
<template x-if="getIconType(item.icon) === 'lottie'"><lottie-player :src="item.icon" autoplay="" background="transparent" className="w-full h-full object-cover rounded-md" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(item.icon) === 'iconify'"><iconify-icon :icon="item.icon || 'solar:box-linear'" className="text-white" width="32"></iconify-icon></template>
</div>
<span className="text-[10px] text-center text-white truncate w-full" x-text="item.name"></span>
</div>
</template>
<div className="col-span-4 text-center text-white/30 text-xs py-10" x-show="!win.items || win.items.length === 0">Folder is empty</div>
</div>
</div>
</template>
<template x-if="win.type === 'chat'">
<div className="flex flex-col h-full bg-[#0a0a0a] text-white overflow-hidden">
<div :id="'chat-container-'+win.id" className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
<template :key="msg.id" x-htmlFor="msg in win.messages">
<div :className="msg.role === 'user' ? 'justify-end' : 'justify-start'" className="flex">
<div :className="msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : (msg.isError ? 'bg-red-900/50 border border-red-500/30 text-red-100 rounded-bl-none' : 'bg-[#1a1a1a] border border-white/10 text-white/90 rounded-bl-none')" className="max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm markdown-content">
<div x-html="window.renderMarkdown ? window.renderMarkdown(msg.text) : msg.text">
</div>
</div>
</div>
</template>
<div className="flex justify-start" x-show="win.isLoading">
<div className="bg-[#1a1a1a] border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
<div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-75"></div>
<div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-150">
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/10 bg-[#0f0f0f]">
<form @submit.prevent="sendChatMessage(win)" className="flex gap-2 items-end bg-[#1a1a1a] border border-white/10 rounded-xl p-2 focus-within:border-white/20 transition-all">
<textarea @keydown.enter.prevent="if(!$event.shiftKey) sendChatMessage(win)" className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-white/30 resize-none h-10 max-h-24 py-2 custom-scrollbar" placeholder="Ask Gemini..." x-model="win.tempInput"></textarea>
<button :disabled="!win.tempInput || win.isLoading" className="p-2 bg-white text-black rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-all" type="submit"><iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon></button>
</form>
</div>
</div>
</template>
<template x-if="win.type !== 'code' &amp;&amp; win.type !== 'gallery' &amp;&amp; win.type !== 'chat' &amp;&amp; win.type !== 'folder'">
<div className="w-full h-full flex flex-col bg-white"><iframe :className="dragState.isDragging || dragState.isResizing ? 'pointer-events-none' : ''" :src="win.url" className="w-full h-full border-none" loading="lazy"></iframe></div>
</template>
<div @mousedown.prevent.stop="startResize($event, win.id, 'se')" @touchstart.prevent.stop="startResize($event, win.id, 'se')" className="absolute bottom-0 right-0 w-10 h-10 z-[60] cursor-se-resize touch-action-none flex items-end justify-end p-1.5 opacity-50 hover:opacity-100" x-show="!win.maximized">
<div className="w-5 h-5 border-b-2 border-r-2 border-white/50 rounded-br-md"></div>
</div>
</div>
</div>
</template>
</div>

<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" x-cloak="" x-show="modalOpen">
<div @click="closeModal" className="absolute inset-0 bg-black/60 backdrop-blur-sm" x-transition.opacity=""></div>
<div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
<h2 className="text-xs font-semibold text-white tracking-tight uppercase" x-text="modalMode === 'add' ? 'New Item' : 'Edit Item'"></h2>
<div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5">
<template x-htmlFor="tab in ['general', 'notes', 'files']">
<button :className="modalTab === tab ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white'" @click="modalTab = tab" className="px-3 py-1 text-[10px] font-medium rounded-md transition-all uppercase tracking-wide"><span x-text="tab"></span></button>
</template>
</div>
</div>
<div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
<div className="space-y-5" x-show="modalTab === 'general'">
<div className="relative" x-data="{ open: false }" x-show="modalMode === 'add'">
<button @click="open=!open" className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/70 hover:text-white transition-colors"><span>Load
                                a Preset</span><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></button>
<div @click.outside="open=false" className="absolute top-full left-0 w-full mt-1 bg-[#111] border border-white/10 rounded-lg z-50 shadow-xl" x-cloak="" x-show="open">
<button @click="applyModalPreset('kanban'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Kanban
                                Board</button>
<button @click="applyModalPreset('calendar'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Calendar</button>
<button @click="applyModalPreset('gallery'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">Photo
                                Gallery</button>
<button @click="applyModalPreset('chat'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">AI
                                Chat</button>
<button @click="applyModalPreset('todo'); open=false" className="w-full text-left px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5">To-Do
                                List</button>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
<template x-if="getIconType(modalData.icon) === 'image'"><img :src="modalData.icon" className="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop'"/></template>
<template x-if="getIconType(modalData.icon) === 'video'"><video :src="modalData.icon" autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline=""></video></template>
<template x-if="getIconType(modalData.icon) === 'audio'">
<div @mouseenter="$el.querySelector('audio').play()" @mouseleave="$el.querySelector('audio').pause()" className="w-full h-full flex items-center justify-center bg-white/5 text-white/50 group-hover:text-white transition-colors"><iconify-icon icon="solar:music-note-linear" width="28"></iconify-icon><audio :src="modalData.icon" className="hidden" loop=""></audio></div>
</template>
<template x-if="getIconType(modalData.icon) === 'pdf'"><iframe :src="modalData.icon + '#toolbar=0&amp;navpanes=0&amp;scrollbar=0'" className="w-full h-full object-cover bg-white overflow-hidden pointer-events-none" style={{border: 'none'}}></iframe></template>
<template x-if="getIconType(modalData.icon) === 'lottie'"><lottie-player :src="modalData.icon" autoplay="" background="transparent" className="w-full h-full object-cover" loop="" speed="1"></lottie-player></template>
<template x-if="getIconType(modalData.icon) === 'iconify'"><iconify-icon :icon="modalData.icon || 'solar:box-linear'" className="text-white/60" width="28"></iconify-icon></template>
</div>
<div className="flex-1 space-y-3">
<div><label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Name</label><input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors" placeholder="My App" type="text" x-model="modalData.name"/></div>
<div className="flex gap-2">
<div className="flex-1"><label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Icon</label>
<div className="flex gap-1">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors" placeholder="solar:rocket-linear" type="text" x-model="modalData.icon"/>
<label :className="isUploadingIcon ? 'opacity-50 cursor-not-allowed' : ''" className="shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors" title="Upload icon image">
<template x-if="isUploadingIcon">
<div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin">
</div>
</template>
<template x-if="!isUploadingIcon">
<iconify-icon className="text-white/50" icon="solar:upload-minimalistic-linear" width="14"></iconify-icon>
</template>
<input :disabled="isUploadingIcon" @change="handleIconUpload($event)" accept="image/*,video/mp4,audio/mpeg,audio/mp3,application/pdf,application/json,.glb,.gltf" className="hidden" type="file"/>
</label>
</div>
</div>
<div className="w-1/3"><label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Category</label><input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors" placeholder="Tools" type="text" x-model="modalData.category"/></div>
</div>
</div>
</div>
<div className="h-[1px] bg-white/5"></div>
<div className="space-y-4">
<template x-if="modalData.type !== 'folder' &amp;&amp; modalData.type !== 'code' &amp;&amp; modalData.type !== 'gallery' &amp;&amp; modalData.type !== 'chat'">
<div className="space-y-3">
<div><label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Target
                                        URL</label><input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-white/20 outline-none transition-colors font-mono" placeholder="https://..." type="text" x-model="modalData.url"/></div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
<span className="text-xs text-white/70">Launch Externally (New Tab)</span>
<button :className="modalData.launchMode === 'external' ? 'bg-blue-600' : 'bg-white/20'" @click="modalData.launchMode = modalData.launchMode === 'external' ? 'internal' : 'external'" className="w-10 h-5 rounded-full relative transition-colors">
<div :className="modalData.launchMode === 'external' ? 'translate-x-5' : ''" className="w-3 h-3 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
</button>
</div>
</div>
</template>
<template x-if="modalData.type === 'code'">
<div><label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Embed
                                    Code</label><textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white focus:border-white/20 outline-none font-mono custom-scrollbar" placeholder="&lt;div&gt;...&lt;/div&gt;" rows="5" x-model="modalData.code"></textarea></div>
</template>
<template x-if="modalMode === 'add'">
<div>
<label className="block text-[10px] font-medium text-white/40 uppercase tracking-wider mb-1.5">Type</label>
<div className="grid grid-cols-4 gap-2">
<button :className="modalData.type === 'app' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'app'" className="py-2 rounded-lg border text-xs font-medium transition-colors">App</button>
<button :className="modalData.type === 'folder' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'folder'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Folder</button>
<button :className="modalData.type === 'code' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'code'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Widget</button>
<button :className="modalData.type === 'gallery' ? 'bg-blue-600 border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50'" @click="modalData.type = 'gallery'" className="py-2 rounded-lg border text-xs font-medium transition-colors">Gallery</button>
</div>
</div>
</template>
</div>
</div>
<div className="h-full" x-show="modalTab === 'notes'"><textarea className="w-full h-48 bg-white/5 border border-white/10 rounded-lg p-4 text-xs text-white/80 focus:border-white/20 outline-none resize-none leading-relaxed" placeholder="Write notes..." x-model="modalData.note"></textarea></div>
<div className="space-y-3" x-show="modalTab === 'files'">
<template :key="idx" x-htmlFor="(file, idx) in (modalData.attachments || [])">
<div className="flex gap-2 items-center p-2 rounded-lg bg-white/5 border border-white/5 group">
<input className="flex-1 bg-transparent text-xs text-white outline-none" placeholder="Name" type="text" x-model="file.name"/><input className="w-1/3 bg-transparent text-[10px] text-white/40 outline-none text-right" placeholder="URL" type="text" x-model="file.url"/><button @click="modalData.attachments.splice(idx, 1)" className="text-white/20 hover:text-red-400"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</template>
<button @click="(modalData.attachments = modalData.attachments || []).push({name:'', url:''})" className="w-full py-2 border border-dashed border-white/10 rounded-lg text-xs text-white/40 hover:text-white transition-colors">+
                        Add Item</button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-[#0f0f0f] flex justify-end">
<button :disabled="isUploadingIcon" @click="saveModal" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
<span x-text="isUploadingIcon ? 'Uploading...' : 'Save Changes'"></span>
</button>
</div>
</div>
</div>

<div :style={{`top: '${contextPos.y}px', left: '${contextPos.x}px`'}} @click.outside="contextOpen = false" className="fixed z-[9999] w-[320px] bg-[#0a0a0a]/96 backdrop-blur-xl border border-white/15 rounded-xl shadow-[0_26px_60px_-14px_rgba(0,0,0,0.9)] overflow-hidden" x-cloak="" x-show="contextOpen" x-transition.opacity.duration.150ms="">
<div className="px-3 pt-3 pb-2 border-b border-white/10 bg-white/[0.03]">
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-[12px] font-semibold text-white/95 truncate max-w-[210px]" x-text="contextApp?.name || (selectedApps.length + ' components')"></div>
<div className="mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-white/45">
<span x-text="contextApp?.type || 'app'"></span>
<span className="px-1.5 py-[2px] rounded bg-cyan-400/20 text-cyan-200" x-show="contextApp?.groupId" x-text="contextApp?.groupId"></span>
<span className="px-1.5 py-[2px] rounded bg-white/10 text-white/70" x-text="'L' + (contextApp?.layer || 0)"></span>
</div>
</div>
<div className="flex items-center gap-1">
<button :className="contextApp?.locked ? 'text-red-400 bg-red-500/10 hover:bg-red-500/20' : 'text-white/50 hover:text-white hover:bg-white/10'" :title="contextApp?.locked ? 'Unlock Component' : 'Lock Component'" @click="if(contextApp) { contextApp.locked = !contextApp.locked; saveData(); }" className="w-6 h-6 rounded-md transition-colors flex items-center justify-center" x-show="contextApp">
<iconify-icon :icon="contextApp?.locked ? 'solar:lock-password-bold' : 'solar:lock-password-unlocked-linear'" width="14"></iconify-icon>
</button>
<button @click="contextOpen = false" className="w-6 h-6 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="mt-2 grid grid-cols-4 gap-1 text-[10px] font-medium">
<button :className="contextTab==='actions' ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'" @click="contextTab='actions'" className="rounded-md py-1.5 transition-colors">Actions</button>
<button :className="contextTab==='style' ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'" @click="contextTab='style'" className="rounded-md py-1.5 transition-colors">Style</button>
<button :className="contextTab==='text' ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'" @click="contextTab='text'" className="rounded-md py-1.5 transition-colors">Text</button>
<button :className="contextTab==='preview' ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'" @click="contextTab='preview'" className="rounded-md py-1.5 transition-colors">Preview</button>
</div>
</div>
<div className="p-2 space-y-1 text-xs" x-show="contextTab === 'actions'">
<button :className="contextApp?.locked ? 'opacity-50 cursor-not-allowed text-white/40 hover:bg-transparent' : 'hover:bg-blue-600/80 hover:text-white'" @click="if(!contextApp?.locked) { launchApp(contextApp); contextOpen=false; }" className="w-full px-3 py-2 text-left font-medium text-white/85 rounded-lg flex items-center gap-2 transition-colors" x-show="selectedApps.length &lt;= 1">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>Launch
                </button>
<button @click="openModal('edit', contextApp); contextOpen=false" className="w-full px-3 py-2 text-left font-medium text-white/85 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors" x-show="selectedApps.length &lt;= 1">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon>Properties
                </button>
<button @click="duplicateApp(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left font-medium text-white/85 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors" x-show="selectedApps.length &lt;= 1">
<iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>Duplicate
                </button>
<button @click="togglePin(contextApp); contextOpen=false" className="w-full px-3 py-2 text-left font-medium text-white/85 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors" x-show="selectedApps.length &lt;= 1">
<iconify-icon :icon="contextApp?.pinned ? 'solar:pin-bold-linear' : 'solar:pin-linear'" width="14"></iconify-icon>
<span x-text="contextApp?.pinned ? 'Unpin from dock' : 'Pin to dock'"></span>
</button>
<div className="h-[1px] bg-white/10 my-1"></div>
<div className="grid grid-cols-2 gap-1">
<button @click="adjustLayerForContext(1)" className="px-2 py-1.5 text-[10px] rounded-md border border-white/10 text-white/75 hover:bg-white/10 transition-colors">Layer
                        +</button>
<button @click="adjustLayerForContext(-1)" className="px-2 py-1.5 text-[10px] rounded-md border border-white/10 text-white/75 hover:bg-white/10 transition-colors">Layer
                        -</button>
<button @click="bringToFrontForContext()" className="px-2 py-1.5 text-[10px] rounded-md border border-white/10 text-white/75 hover:bg-white/10 transition-colors">Front</button>
<button @click="sendToBackForContext()" className="px-2 py-1.5 text-[10px] rounded-md border border-white/10 text-white/75 hover:bg-white/10 transition-colors">Back</button>
</div>
<div className="h-[1px] bg-white/10 my-1"></div>
<div className="grid grid-cols-2 gap-1">
<button @click="groupContextTargets()" className="px-2 py-1.5 text-[10px] rounded-md border border-cyan-300/20 text-cyan-200/90 hover:bg-cyan-400/10 transition-colors">Group</button>
<button @click="ungroupContextTargets()" className="px-2 py-1.5 text-[10px] rounded-md border border-cyan-300/20 text-cyan-200/90 hover:bg-cyan-400/10 transition-colors">Ungroup</button>
</div>
<button @click="selectGroup(contextApp)" className="w-full px-3 py-2 text-left font-medium text-cyan-200/90 hover:bg-cyan-400/10 rounded-lg flex items-center gap-2 transition-colors" x-show="contextApp?.groupId">
<iconify-icon icon="solar:widget-linear" width="14"></iconify-icon>Select Group
                </button>
<div className="h-[1px] bg-white/10 my-1"></div>
<button @click="deleteContextTargets(); contextOpen=false" className="w-full px-3 py-2 text-left font-medium text-red-300 hover:bg-red-500/12 rounded-lg flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
<span x-text="selectedApps.length &gt; 1 ? `Delete (${selectedApps.length})` : 'Remove'"></span>
</button>
</div>
<div className="p-3 space-y-3 text-[10px]" x-show="contextTab === 'style'">
<div className="space-y-1.5" x-data="{ sizeTimer: null }">
<div style={{marginBottom: '8px'}}>
<span style={{fontSize: '12px', color: '#666'}}>Size (8px - 10000px)</span>
</div>
<input :value="getAppStyleValue(contextApp, 'size', settings.icon.size)" @input="
                        let val = $event.target.value;
                        document.getElementById('contextSizeNumber').value = val;
                        clearTimeout(sizeTimer);
                        sizeTimer = setTimeout(() =&gt; { setStyleValueForContext('size', parseFloat(val)) }, 150);
                    " className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" id="contextSizeRange" max="10000" min="8" step="1" type="range"/>
<div className="flex items-center gap-2 mt-2 pt-1">
<input :value="Math.round(getAppStyleValue(contextApp, 'size', settings.icon.size))" @blur="
                            let val = Math.max(8, Math.min(10000, $event.target.value || 8));
                            $event.target.value = val;
                            document.getElementById('contextSizeRange').value = val;
                            setStyleValueForContext('size', parseFloat(val));
                        " @input="
                            let val = $event.target.value;
                            document.getElementById('contextSizeRange').value = val;
                            clearTimeout(sizeTimer);
                            sizeTimer = setTimeout(() =&gt; { setStyleValueForContext('size', parseFloat(val)) }, 150);
                        " @keydown.enter="
                            let val = Math.max(8, Math.min(10000, $event.target.value || 8));
                            $event.target.value = val;
                            document.getElementById('contextSizeRange').value = val;
                            setStyleValueForContext('size', parseFloat(val));
                        " id="contextSizeNumber" max="10000" min="8" step="1" style={{width: '80px', border: '1px solid #ccc', padding: '6px 8px', borderRadius: '4px', fontSize: '14px', background: 'transparent', color: 'white'}} type="number"/>
<span className="text-white/55 text-[14px]">px</span>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-white/55"><span>Radius</span><span x-text="Math.round(getAppStyleValue(contextApp, 'radius', settings.icon.radius)) + 'px'"></span>
</div>
<input :value="getAppStyleValue(contextApp, 'radius', settings.icon.radius)" @input="setStyleValueForContext('radius', parseFloat($event.target.value))" className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer" max="256" min="0" step="1" type="range"/>
</div>
<div className="grid grid-cols-2 gap-2">
<label className="flex flex-col gap-1 text-white/55">Grid X
                        <input :value="contextApp?.gridX ?? 0" @change="setGridCoordForContext('x', parseFloat($event.target.value))" className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white outline-none" step="0.05" type="number"/>
</label>
</div></div></div></div>
    </>
  );
}
