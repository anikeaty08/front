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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const os = {
            highestZ: 10,
            apps: {
                cinema: { id: 'win-cinema', isOpen: false, isMinimized: false, isMaximized: false, defaultRect: null },
                interface: { id: 'win-interface', isOpen: false, isMinimized: false, isMaximized: false, defaultRect: null },
                games: { id: 'win-games', isOpen: false, isMinimized: false, isMaximized: false, defaultRect: null }
            },
            
            openApp: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                const tbEl = document.getElementById('tb-' + appKey);
                
                if (!app.isOpen) {
                    app.isOpen = true;
                    winEl.classList.remove('hidden');
                    winEl.classList.add('flex');
                    tbEl.classList.remove('hidden');
                    tbEl.classList.add('flex');
                    
                    // Small entry animation
                    winEl.style.opacity = '0';
                    winEl.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        winEl.style.opacity = '1';
                        winEl.style.transform = 'scale(1)';
                    }, 10);
                }
                
                if (app.isMinimized) {
                    this.minimizeApp(appKey); // Toggle back
                }
                
                this.focusApp(appKey);
                this.updateTaskbarState(appKey);
            },

            closeApp: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                const tbEl = document.getElementById('tb-' + appKey);
                
                winEl.style.opacity = '0';
                winEl.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    winEl.classList.add('hidden');
                    winEl.classList.remove('flex');
                    tbEl.classList.add('hidden');
                    tbEl.classList.remove('flex');
                    app.isOpen = false;
                    app.isMinimized = false;
                    this.updateTaskbarState(appKey);
                }, 200);
            },

            minimizeApp: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                
                if (!app.isMinimized) {
                    winEl.style.opacity = '0';
                    winEl.style.transform = 'translateY(20px) scale(0.95)';
                    setTimeout(() => {
                        winEl.style.pointerEvents = 'none';
                    }, 200);
                    app.isMinimized = true;
                } else {
                    winEl.style.pointerEvents = 'auto';
                    winEl.style.opacity = '1';
                    winEl.style.transform = app.isMaximized ? 'translateY(0) scale(1)' : 'scale(1)';
                    app.isMinimized = false;
                    this.focusApp(appKey);
                }
                this.updateTaskbarState(appKey);
            },

            maximizeApp: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                
                if (!app.isMaximized) {
                    // Save current state
                    app.defaultRect = {
                        width: winEl.style.width,
                        height: winEl.style.height,
                        top: winEl.style.top,
                        left: winEl.style.left
                    };
                    
                    winEl.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    winEl.style.width = '100%';
                    winEl.style.height = 'calc(100% - 3.5rem)'; // Subtract taskbar
                    winEl.style.top = '0';
                    winEl.style.left = '0';
                    winEl.classList.remove('rounded-2xl');
                    app.isMaximized = true;
                } else {
                    winEl.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    winEl.style.width = app.defaultRect.width;
                    winEl.style.height = app.defaultRect.height;
                    winEl.style.top = app.defaultRect.top;
                    winEl.style.left = app.defaultRect.left;
                    winEl.classList.add('rounded-2xl');
                    app.isMaximized = false;
                }
                
                // Remove transition after it completes to allow smooth dragging again
                setTimeout(() => { winEl.style.transition = 'opacity 0.2s, transform 0.2s'; }, 300);
                this.focusApp(appKey);
            },

            focusApp: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                this.highestZ++;
                winEl.style.zIndex = this.highestZ;
                
                // Visual focus state update
                Object.keys(this.apps).forEach(key => {
                    const el = document.getElementById(this.apps[key].id);
                    if(el) {
                        if(key === appKey) {
                            el.classList.add('border-white/80', 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]');
                            el.classList.remove('border-white/40', 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]');
                        } else {
                            el.classList.remove('border-white/80', 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]');
                            el.classList.add('border-white/40', 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]');
                        }
                    }
                });
                this.updateTaskbarState(appKey, true);
            },

            toggleFromTaskbar: function(appKey) {
                const app = this.apps[appKey];
                const winEl = document.getElementById(app.id);
                
                if (app.isMinimized) {
                    this.minimizeApp(appKey);
                } else if (parseInt(winEl.style.zIndex) === this.highestZ) {
                    this.minimizeApp(appKey); // If active and clicked on taskbar, minimize
                } else {
                    this.focusApp(appKey);
                }
            },

            updateTaskbarState: function(activeAppKey, isFocused = false) {
                Object.keys(this.apps).forEach(key => {
                    const tbEl = document.getElementById('tb-' + key);
                    const dotEl = document.getElementById('dot-' + key);
                    const app = this.apps[key];
                    
                    if (tbEl && app.isOpen) {
                        if (key === activeAppKey && !app.isMinimized && isFocused) {
                            tbEl.classList.add('bg-white/80', 'shadow-sm');
                            dotEl.classList.remove('w-1', 'bg-slate-400');
                            dotEl.classList.add('w-3', 'bg-slate-800');
                        } else {
                            tbEl.classList.remove('bg-white/80', 'shadow-sm');
                            dotEl.classList.remove('w-3', 'bg-slate-800');
                            dotEl.classList.add('w-1', 'bg-slate-400');
                        }
                    }
                });
            },

            // Window Dragging Logic
            startDrag: function(e, winId) {
                if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
                
                const winEl = document.getElementById(winId);
                const appKey = Object.keys(this.apps).find(key => this.apps[key].id === winId);
                
                if (this.apps[appKey].isMaximized) return; // Don't drag maximized windows
                
                this.focusApp(appKey);
                
                let startX = e.clientX;
                let startY = e.clientY;
                let startTop = parseInt(winEl.style.top || winEl.offsetTop);
                let startLeft = parseInt(winEl.style.left || winEl.offsetLeft);

                // Enable shield over iframe to prevent it eating mouse events
                const shield = winEl.querySelector('.drag-shield');
                if(shield) shield.classList.remove('hidden');

                const doDrag = (e) => {
                    winEl.style.transition = 'none'; // Disable transition for smooth drag
                    winEl.style.top = (startTop + e.clientY - startY) + 'px';
                    winEl.style.left = (startLeft + e.clientX - startX) + 'px';
                };

                const stopDrag = () => {
                    document.removeEventListener('mousemove', doDrag);
                    document.removeEventListener('mouseup', stopDrag);
                    if(shield) shield.classList.add('hidden');
                    winEl.style.transition = 'opacity 0.2s, transform 0.2s'; // Restore transition
                };

                document.addEventListener('mousemove', doDrag);
                document.addEventListener('mouseup', stopDrag);
            },

            // Clock
            updateClock: function() {
                const now = new Date();
                const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const dateStr = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
                document.getElementById('clock-time').textContent = timeStr;
                document.getElementById('clock-date').textContent = dateStr;
            }
        };

        // Initialize clock
        setInterval(os.updateClock, 1000);
        os.updateClock();

        // Bind focus events to windows content area
        document.querySelectorAll('.window').forEach(win => {
            win.addEventListener('mousedown', (e) => {
                const appKey = Object.keys(os.apps).find(key => os.apps[key].id === win.id);
                if (appKey) os.focusApp(appKey);
            });
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
      

<div className="sm:p-6 flex flex-col flex-wrap content-start z-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-start" id="desktop">

<button className="group flex flex-col items-center gap-1.5 w-20 p-2 rounded-lg hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300/50" onclick="os.openApp('cinema')">
<div className="w-12 h-12 bg-white shadow-sm border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700 tracking-tight text-center leading-tight drop-shadow-sm">Cinema<br/>OS</span>
</button>

<button className="group flex flex-col items-center gap-1.5 w-20 p-2 rounded-lg hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300/50" onclick="os.openApp('interface')">
<div className="w-12 h-12 bg-white shadow-sm border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700 tracking-tight text-center leading-tight drop-shadow-sm">Web<br/>App</span>
</button>

<button className="group flex flex-col items-center gap-1.5 w-20 p-2 rounded-lg hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300/50" onclick="os.openApp('games')">
<div className="w-12 h-12 bg-white shadow-sm border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700 tracking-tight text-center leading-tight drop-shadow-sm">Ozo<br/>Games</span>
</button>
</div>

<div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" id="windows-container">

<div className="window hidden absolute bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 pointer-events-auto flex flex-col overflow-hidden transition-[width,height,opacity,transform] duration-200" id="win-cinema" style={{width: '80%', height: '75%', top: '5%', left: '10%', zIndex: '10'}}>
<div className="window-header h-12 bg-transparent flex items-center justify-between px-4 select-none cursor-default border-b border-slate-100/50" onmousedown="os.startDrag(event, 'win-cinema')">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" height="18" icon="solar:videocamera-record-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Cinema OS</span>
</div>
<div className="flex items-center gap-1.5">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.minimizeApp('cinema')"><iconify-icon height="16" icon="solar:minus-linear" width="16"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.maximizeApp('cinema')"><iconify-icon height="14" icon="solar:maximize-square-linear" width="14"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors" onclick="os.closeApp('cinema')"><iconify-icon height="16" icon="solar:close-circle-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="flex-1 relative bg-slate-50">
<div className="drag-shield absolute inset-0 hidden z-10"></div>
<iframe allowfullscreen="" className="w-full h-full border-none" src="https://cinemaos.live"></iframe>
</div>
</div>

<div className="window hidden absolute bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 pointer-events-auto flex flex-col overflow-hidden transition-[width,height,opacity,transform] duration-200" id="win-interface" style={{width: '70%', height: '80%', top: '8%', left: '15%', zIndex: '10'}}>
<div className="window-header h-12 bg-transparent flex items-center justify-between px-4 select-none cursor-default border-b border-slate-100/50" onmousedown="os.startDrag(event, 'win-interface')">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" height="18" icon="solar:code-square-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Web App</span>
</div>
<div className="flex items-center gap-1.5">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.minimizeApp('interface')"><iconify-icon height="16" icon="solar:minus-linear" width="16"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.maximizeApp('interface')"><iconify-icon height="14" icon="solar:maximize-square-linear" width="14"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors" onclick="os.closeApp('interface')"><iconify-icon height="16" icon="solar:close-circle-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="flex-1 relative bg-slate-50">
<div className="drag-shield absolute inset-0 hidden z-10"></div>
<iframe allowfullscreen="" className="w-full h-full border-none" src="https://link-deleted.b-cdn.net/"></iframe>
</div>
</div>

<div className="window hidden absolute bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 pointer-events-auto flex flex-col overflow-hidden transition-[width,height,opacity,transform] duration-200" id="win-games" style={{width: '85%', height: '85%', top: '3%', left: '5%', zIndex: '10'}}>
<div className="window-header h-12 bg-transparent flex items-center justify-between px-4 select-none cursor-default border-b border-slate-100/50" onmousedown="os.startDrag(event, 'win-games')">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" height="18" icon="solar:gamepad-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Ozo Games</span>
</div>
<div className="flex items-center gap-1.5">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.minimizeApp('games')"><iconify-icon height="16" icon="solar:minus-linear" width="16"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" onclick="os.maximizeApp('games')"><iconify-icon height="14" icon="solar:maximize-square-linear" width="14"></iconify-icon></button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors" onclick="os.closeApp('games')"><iconify-icon height="16" icon="solar:close-circle-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="flex-1 relative bg-slate-50">
<div className="drag-shield absolute inset-0 hidden z-10"></div>
<iframe allowfullscreen="" className="w-full h-full border-none" src="https://ozogames.com"></iframe>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full h-14 bg-white/70 backdrop-blur-xl border-t border-white/50 z-50 flex items-center justify-between px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">

<div className="flex items-center">
<button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/50 transition-colors group">
<span className="text-base font-semibold tracking-tighter text-slate-800 group-hover:text-black transition-colors" style={{letterSpacing: '-0.08em'}}>OS</span>
</button>
</div>

<div className="flex-1 flex justify-center items-center gap-2" id="taskbar-dock">

<button className="hidden w-10 h-10 rounded-xl items-center justify-center transition-all hover:bg-white/60 relative group" id="tb-cinema" onclick="os.toggleFromTaskbar('cinema')">
<iconify-icon className="text-slate-600 transition-transform group-hover:-translate-y-0.5" height="20" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-400 rounded-full transition-opacity" id="dot-cinema"></div>
</button>
<button className="hidden w-10 h-10 rounded-xl items-center justify-center transition-all hover:bg-white/60 relative group" id="tb-interface" onclick="os.toggleFromTaskbar('interface')">
<iconify-icon className="text-slate-600 transition-transform group-hover:-translate-y-0.5" height="20" icon="solar:code-square-linear" width="20"></iconify-icon>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-400 rounded-full transition-opacity" id="dot-interface"></div>
</button>
<button className="hidden w-10 h-10 rounded-xl items-center justify-center transition-all hover:bg-white/60 relative group" id="tb-games" onclick="os.toggleFromTaskbar('games')">
<iconify-icon className="text-slate-600 transition-transform group-hover:-translate-y-0.5" height="20" icon="solar:gamepad-linear" width="20"></iconify-icon>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-400 rounded-full transition-opacity" id="dot-games"></div>
</button>
</div>

<div className="flex items-center gap-3 pr-2">
<button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/50 transition-colors text-slate-600">
<iconify-icon height="16" icon="solar:wifi-router-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:volume-loud-linear" width="16"></iconify-icon>
</button>
<div className="flex flex-col items-end justify-center cursor-default text-slate-700 hover:bg-white/50 px-2 py-1 rounded-lg transition-colors">
<span className="text-xs font-medium tracking-tight" id="clock-time">06:08 p.m.</span>
<span className="text-[10px] text-slate-500 font-medium" id="clock-date">abr 15, 2026</span>
</div>
</div>
</div>



    </>
  );
}
