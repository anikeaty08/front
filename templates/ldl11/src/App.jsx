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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
backgroundImage: {
'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
}
}
}
}



        function canvasSystem() {
            return {
                scale: 1,
                posX: 0,
                posY: 0,
                isDragging: false,
                startX: 0,
                startY: 0,
                initialX: 0,
                initialY: 0,
                
                apps: {
                    dev: [
                        { id: 1, name: 'VS Code', icon: 'lucide:code-2' },
                        { id: 2, name: 'Terminal', icon: 'lucide:terminal' },
                        { id: 3, name: 'GitHub', icon: 'lucide:github' },
                        { id: 4, name: 'Docker', icon: 'lucide:container' },
                        { id: 5, name: 'Database', icon: 'lucide:database' },
                        { id: 6, name: 'Vercel', icon: 'lucide:triangle' },
                        { id: 7, name: 'Cloud', icon: 'lucide:cloud' },
                        { id: 8, name: 'Server', icon: 'lucide:server' },
                    ],
                    design: [
                        { id: 10, name: 'Figma', icon: 'lucide:figma' },
                        { id: 11, name: 'Linear', icon: 'lucide:pen-line' },
                        { id: 12, name: 'Frame', icon: 'lucide:layout' },
                        { id: 13, name: 'Colors', icon: 'lucide:palette' },
                        { id: 14, name: 'Type', icon: 'lucide:type' },
                        { id: 15, name: 'Image', icon: 'lucide:image' },
                    ],
                    social: [
                        { id: 20, name: 'Slack', icon: 'lucide:hash', status: '2 mentions' },
                        { id: 21, name: 'Discord', icon: 'lucide:gamepad-2', status: 'Idle' },
                        { id: 22, name: 'Mail', icon: 'lucide:mail', status: 'Inbox Zero' },
                    ],
                    system: [
                        { id: 30, icon: 'lucide:settings' },
                        { id: 31, icon: 'lucide:wifi' },
                        { id: 32, icon: 'lucide:bluetooth' },
                        { id: 33, icon: 'lucide:battery-medium' },
                    ]
                },

                startPan(e) {
                    // Prevent drag if clicking a button or input
                    if(e.target.closest('button') || e.target.closest('input')) return;
                    
                    this.isDragging = true;
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    this.startX = clientX;
                    this.startY = clientY;
                    this.initialX = this.posX;
                    this.initialY = this.posY;
                },

                pan(e) {
                    if (!this.isDragging) return;
                    e.preventDefault();
                    
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    
                    // Direct manipulation delta
                    const dx = (clientX - this.startX);
                    const dy = (clientY - this.startY);
                    
                    // Apply delta adjusted by scale to keep 1:1 feel
                    this.posX = this.initialX + (dx / this.scale);
                    this.posY = this.initialY + (dy / this.scale);
                },

                endPan() {
                    this.isDragging = false;
                },

                handleWheel(e) {
                    // Smooth zoom
                    const zoomSensitivity = 0.001;
                    const newScale = this.scale - (e.deltaY * zoomSensitivity);
                    
                    // Clamp scale
                    this.scale = Math.min(Math.max(0.5, newScale), 3);
                },

                resetView() {
                    this.scale = 1;
                    this.posX = 0;
                    this.posY = 0;
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
      

<div className="fixed inset-0 pointer-events-none opacity-20 z-0">
<div :style={{`transform: 'translate(${posX % 24}px, ${posY % 24}px)`'}} className="absolute inset-0 bg-grid-pattern bg-grid"></div>
</div>

<div @mousedown="startPan" @mouseleave="endPan" @mousemove="pan" @mouseup="endPan" @touchend="endPan" @touchmove="pan" @touchstart="startPan" @wheel.prevent="handleWheel" className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing will-change-transform">
<div :style={{`transform: 'translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px)) scale(${scale})`'}} className="absolute top-1/2 left-1/2 will-change-transform transition-transform duration-75 cubic-bezier(0,0,0,1) origin-center">

<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[340px]">
<div className="glass-panel rounded-3xl p-6 flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-100" data-icon="lucide:terminal-square"></span>
<span className="text-xs font-medium tracking-wide text-zinc-100">Development</span>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700/50 border border-white/5"></div>
</div>
</div>
<div className="grid grid-cols-4 gap-4">
<template :key="app.id" x-htmlFor="app in apps.dev">
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="app-icon w-14 h-14 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 ring-1 ring-inset ring-white/0 group-hover:ring-white/10">
<span :data-icon="app.icon" className="iconify text-2xl"></span>
</div>
<span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-200" x-text="app.name"></span>
</div>
</template>
</div>
</div>
</div>

<div className="absolute top-[-40px] left-[320px] w-[280px]">
<div className="glass-panel rounded-3xl p-5 flex flex-col gap-4">
<div className="flex items-center gap-2 pb-2 border-b border-white/5">
<span className="iconify text-zinc-400" data-icon="lucide:pen-tool"></span>
<span className="text-xs font-medium tracking-wide text-zinc-400">Design System</span>
</div>
<div className="grid grid-cols-3 gap-3">
<template :key="app.id" x-htmlFor="app in apps.design">
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="app-icon w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white">
<span :data-icon="app.icon" className="iconify text-xl"></span>
</div>
</div>
</template>
</div>
</div>
</div>

<div className="absolute top-[80px] left-[-280px] w-[240px]">
<div className="glass-panel rounded-3xl p-1 space-y-1">
<template :key="app.id" x-htmlFor="app in apps.social">
<div className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white">
<span :data-icon="app.icon" className="iconify text-sm"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300" x-text="app.name"></span>
<span className="text-[9px] text-zinc-500 font-mono tracking-tight" x-text="app.status"></span>
</div>
</div>
</template>
</div>
</div>

<div className="absolute top-[280px] left-[-20px] w-[180px]">
<div className="flex flex-wrap gap-2 justify-center">
<template :key="app.id" x-htmlFor="app in apps.system">
<div className="app-icon w-10 h-10 rounded-full glass-panel flex items-center justify-center text-zinc-500 hover:text-zinc-200 cursor-pointer">
<span :data-icon="app.icon" className="iconify text-lg"></span>
</div>
</template>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6">

<header className="flex justify-between items-start pointer-events-auto">
<div className="flex flex-col gap-1">
<h1 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
<span className="w-2 h-2 bg-white rounded-full"></span>
                    LiveDesk
                </h1>
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Workspace v20.4</p>
</div>
<button @click="resetView" className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all backdrop-blur-md">
<span className="iconify text-zinc-400 group-hover:text-white text-xs" data-icon="lucide:locate-fixed"></span>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-white">Reset</span>
</button>
</header>

<div className="mx-auto pointer-events-auto w-full max-w-sm">
<div className="glass-panel rounded-full p-1.5 pl-4 flex items-center gap-3 transition-transform hover:scale-[1.02]">
<span className="iconify text-zinc-500" data-icon="lucide:search"></span>
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-600 w-full font-light h-8" placeholder="Search applications..." type="text"/>
<div className="flex gap-1 pr-1">
<button className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 transition-colors">
<span className="iconify" data-icon="lucide:command"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
