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



        // --- Application State & Logic ---
        const app = {
            timeInSeconds: 138, // 02:18
            timerInterval: null,
            isRecording: true,
            isSidebarCollapsed: false,

            // Formatting Time
            formatTime(seconds) {
                const m = String(Math.floor(seconds / 60)).padStart(2, '0');
                const s = String(seconds % 60).padStart(2, '0');
                return `${m}:${s}`;
            },

            // Update DOM Timer
            updateTimer() {
                const el = document.getElementById('timer-text');
                if (el) el.innerText = this.formatTime(this.timeInSeconds);
            },

            // Start Recording
            startTimer() {
                if (!this.timerInterval && this.isRecording) {
                    this.timerInterval = setInterval(() => {
                        this.timeInSeconds++;
                        this.updateTimer();
                    }, 1000);
                }
            },

            // Stop Recording
            stopTimer() {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                this.isRecording = false;
            },

            // Toast Notification System
            showToast(msg, type = 'info') {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                
                const icon = type === 'success' ? 'solar:check-circle-linear' : 
                             type === 'error' ? 'solar:close-circle-linear' : 
                             'solar:info-circle-linear';
                
                const color = type === 'success' ? 'text-green-400' : 
                              type === 'error' ? 'text-red-400' : 
                              'text-purple-400';

                toast.className = 'glass-panel bg-[#100822]/90 text-white px-4 py-3 rounded-xl text-sm shadow-xl transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-3 border border-white/10 backdrop-blur-md';
                toast.innerHTML = `<iconify-icon icon="${icon}" class="${color} text-lg"></iconify-icon> <span>${msg}</span>`;
                
                container.appendChild(toast);
                
                // Animate in
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        toast.classList.remove('translate-y-10', 'opacity-0');
                    });
                });
                
                // Animate out and remove
                setTimeout(() => {
                    toast.classList.add('translate-y-10', 'opacity-0');
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }
        };

        // Initialize Timer
        app.startTimer();

        // --- Custom Cursor Logic ---
        const cursorTrail = document.getElementById('cursor-trail');
        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let trailX = window.innerWidth / 2, trailY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
        });

        function animateCursor() {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            cursorTrail.style.left = `${trailX}px`;
            cursorTrail.style.top = `${trailY}px`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // --- DOM Elements & Interactions ---
        const orb = document.getElementById('main-orb');
        const orbGlow = document.getElementById('orb-glow');
        const statusContainer = document.getElementById('status-container');
        const recordText = document.getElementById('record-text');
        const recordingDot = document.getElementById('recording-dot');

        function setVisualState(active) {
            if (active) {
                orbGlow.classList.remove('bg-purple-600/10', 'blur-[40px]', 'scale-90');
                orbGlow.classList.add('bg-purple-600/30', 'blur-[60px]', 'scale-100');
                statusContainer.style.opacity = '1';
                recordingDot.innerHTML = `<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>`;
                recordText.innerHTML = `Recording · <span id="timer-text">${app.formatTime(app.timeInSeconds)}</span>`;
            } else {
                orbGlow.classList.remove('bg-purple-600/30', 'blur-[60px]', 'scale-100');
                orbGlow.classList.add('bg-purple-600/10', 'blur-[40px]', 'scale-90');
                statusContainer.style.opacity = '0.5';
                recordingDot.innerHTML = `<span class="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>`;
            }
        }

        // Central Orb Click
        orb.addEventListener('click', () => {
            if (app.isRecording) {
                app.stopTimer();
                setVisualState(false);
                recordText.innerHTML = `Paused · <span id="timer-text">${app.formatTime(app.timeInSeconds)}</span>`;
                app.showToast('Recording Paused');
            } else {
                app.isRecording = true;
                app.startTimer();
                setVisualState(true);
                app.showToast('Recording Resumed', 'success');
            }
        });

        // Save Button
        document.getElementById('btn-save').addEventListener('click', () => {
            app.stopTimer();
            setVisualState(false);
            recordText.innerText = "Saved to Workspace";
            app.showToast('Audio Saved Successfully!', 'success');
        });

        // Delete Button
        document.getElementById('btn-delete').addEventListener('click', () => {
            app.stopTimer();
            app.timeInSeconds = 0;
            setVisualState(false);
            recordText.innerHTML = `Ready · <span id="timer-text">00:00</span>`;
            app.showToast('Recording Discarded', 'error');
        });

        // Sidebar Toggle
        const sidebar = document.getElementById('left-sidebar');
        const collapseBtn = document.getElementById('collapse-btn');
        const collapseIcon = document.getElementById('collapse-icon');
        const navTexts = document.querySelectorAll('.nav-text');

        collapseBtn.addEventListener('click', () => {
            app.isSidebarCollapsed = !app.isSidebarCollapsed;
            if (app.isSidebarCollapsed) {
                sidebar.classList.remove('w-64');
                sidebar.classList.add('w-[88px]');
                navTexts.forEach(el => el.classList.add('opacity-0', 'pointer-events-none', 'hidden'));
                collapseIcon.classList.add('rotate-180');
                app.showToast('Sidebar Collapsed');
            } else {
                sidebar.classList.remove('w-[88px]');
                sidebar.classList.add('w-64');
                navTexts.forEach(el => {
                    el.classList.remove('hidden');
                    setTimeout(() => el.classList.remove('opacity-0', 'pointer-events-none'), 50);
                });
                collapseIcon.classList.remove('rotate-180');
                app.showToast('Sidebar Expanded');
            }
        });

        // AI Tools Interaction
        document.querySelectorAll('.ai-tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const toolName = e.currentTarget.getAttribute('data-tool');
                const scanEffect = e.currentTarget.querySelector('.scan-effect');
                
                scanEffect.style.animation = 'scan-sweep 1.2s ease-in-out';
                btn.classList.add('bg-white/10', 'border-white/20');
                app.showToast(`Processing ${toolName}...`);
                
                setTimeout(() => {
                    scanEffect.style.animation = 'none';
                    btn.classList.remove('bg-white/10', 'border-white/20');
                    app.showToast(`${toolName} Complete!`, 'success');
                }, 1500);
            });
        });

        // Theme Toggle (Visual Only)
        const themeLight = document.getElementById('theme-light');
        const themeDark = document.getElementById('theme-dark');
        const themeIndicator = document.getElementById('theme-indicator');

        themeLight.addEventListener('click', () => {
            themeIndicator.style.transform = 'translateX(-38px)';
            themeLight.classList.add('text-white');
            themeLight.classList.remove('text-slate-400');
            themeDark.classList.remove('text-white');
            themeDark.classList.add('text-slate-400');
            app.showToast('Light mode preview (locked in cosmic theme)');
        });

        themeDark.addEventListener('click', () => {
            themeIndicator.style.transform = 'translateX(0)';
            themeDark.classList.add('text-white');
            themeDark.classList.remove('text-slate-400');
            themeLight.classList.remove('text-white');
            themeLight.classList.add('text-slate-400');
            app.showToast('Dark mode restored');
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
      

<div id="cursor-trail"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#0a0512] via-[#100822] to-[#0a0512]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(107,33,168,0.15)_0%,transparent_60%)]"></div>
<div className="absolute -top-[10%] -left-[10%] w-[60%] h-[50%] bg-violet-900/20 blur-[120px] rounded-full animate-nebula"></div>
<div className="absolute top-[20%] right-[10%] w-[40%] h-[60%] bg-fuchsia-900/10 blur-[130px] rounded-full animate-nebula" style={{animationDelay: '-10s'}}></div>
<div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[40%] bg-indigo-900/20 blur-[100px] rounded-full animate-nebula" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-0 left-1/4 w-[200%] h-40 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent -rotate-[35deg] blur-3xl transform -translate-x-1/2 mix-blend-screen"></div>
<div className="absolute inset-0 opacity-[0.015] mix-blend-screen" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
</div>

<div className="relative z-10 flex w-full h-full">

<aside className="w-64 transition-all duration-300 hidden md:flex flex-col justify-between glass-panel border-l-0 border-y-0 h-[96vh] my-auto ml-4 rounded-3xl relative overflow-hidden group shrink-0" id="left-sidebar">
<div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="p-6 flex flex-col h-full overflow-hidden">

<div className="flex items-center gap-3 mb-10 px-2 cursor-pointer group/logo" onclick="app.showToast('Navigating to Home')">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover/logo:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-500 relative shrink-0">
<div className="absolute inset-[2px] bg-[#0a0512] rounded-full flex items-center justify-center">
<iconify-icon className="text-purple-300 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
<span className="nav-text font-medium tracking-tight text-lg text-white whitespace-nowrap">Voice Magic</span>
</div>

<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group/nav" onclick="app.showToast('Opened Home')">
<iconify-icon className="text-xl opacity-70 group-hover/nav:opacity-100 transition-opacity shrink-0" icon="solar:home-2-linear"></iconify-icon>
<span className="nav-text text-sm whitespace-nowrap">Home</span>
</button>

<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/5 relative overflow-hidden" onclick="app.showToast('Already on Record tab')">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-purple-400 rounded-r-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
<iconify-icon className="text-xl text-purple-300 shrink-0" icon="solar:microphone-2-linear"></iconify-icon>
<span className="nav-text text-sm font-normal whitespace-nowrap">Record</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group/nav" onclick="app.showToast('Opened Recordings')">
<iconify-icon className="text-xl opacity-70 group-hover/nav:opacity-100 transition-opacity shrink-0" icon="solar:soundwave-linear"></iconify-icon>
<span className="nav-text text-sm whitespace-nowrap">Recordings</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group/nav" onclick="app.showToast('Opened Folders')">
<iconify-icon className="text-xl opacity-70 group-hover/nav:opacity-100 transition-opacity shrink-0" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="nav-text text-sm whitespace-nowrap">Folders</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group/nav" onclick="app.showToast('Opened Insights')">
<iconify-icon className="text-xl opacity-70 group-hover/nav:opacity-100 transition-opacity shrink-0" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="nav-text text-sm whitespace-nowrap">Insights</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group/nav" onclick="app.showToast('Opened Profile')">
<iconify-icon className="text-xl opacity-70 group-hover/nav:opacity-100 transition-opacity shrink-0" icon="solar:user-rounded-linear"></iconify-icon>
<span className="nav-text text-sm whitespace-nowrap">Profile</span>
</button>
</nav>

<div className="mt-10 flex-1 nav-text transition-opacity duration-300">
<h3 className="px-3 text-xs tracking-wider text-slate-500 uppercase font-normal mb-3">Today</h3>
<ul className="space-y-1">
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm group/item" onclick="app.showToast('Opened Team Standup')">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)] group-hover/item:scale-125 transition-transform shrink-0"></span>
<span className="truncate">Team Standup</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm group/item" onclick="app.showToast('Opened Client Interview')">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)] group-hover/item:scale-125 transition-transform shrink-0"></span>
<span className="truncate">Client Interview</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm group/item" onclick="app.showToast('Opened Product Discussion')">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-slate-400 transition-colors shrink-0"></span>
<span className="truncate">Product Discussion</span>
</button>
</li>
</ul>
</div>

<div className="mt-auto flex justify-center">
<button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer shrink-0" id="collapse-btn">
<iconify-icon className="text-lg transition-transform duration-300" icon="solar:alt-arrow-left-linear" id="collapse-icon"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-screen overflow-hidden">

<header className="flex justify-end p-6 shrink-0 z-30">
<div className="flex items-center gap-3">
<div className="glass-button flex items-center p-1 rounded-full relative">
<button className="p-2 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer z-10 relative" id="theme-light">
<iconify-icon className="text-lg" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="p-2 rounded-full text-white shadow-sm cursor-pointer z-10 relative" id="theme-dark">
<iconify-icon className="text-lg" icon="solar:moon-linear"></iconify-icon>
</button>

<div className="absolute right-1 w-[34px] h-[34px] rounded-full bg-white/10 transition-all duration-300 pointer-events-none" id="theme-indicator"></div>
</div>
<button className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-sm font-medium text-white cursor-pointer tracking-wide" onclick="app.showToast('Profile settings')">
                        AS
                    </button>
</div>
</header>

<div className="flex-1 flex flex-col items-center overflow-y-auto px-8 pb-10 w-full relative z-10 custom-scrollbar">

<div className="flex-1 min-h-[4vh]"></div>

<div className="text-center flex flex-col items-center z-10 shrink-0">
<div className="glass-button inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8">
<iconify-icon className="text-purple-400 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs text-slate-300 font-normal">AI-Powered Voice Workspace</span>
</div>
<h1 className="text-5xl md:text-6xl font-serif-elegant tracking-tight text-white leading-tight">
                        Capture Conversations.<br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 drop-shadow-sm">Unlock Clarity.</span>
</h1>
<p className="mt-6 text-lg text-slate-400 max-w-lg font-light leading-relaxed">
                        Record, transcribe, and enhance your conversations with intelligent AI — effortlessly.
                    </p>
</div>

<div className="relative mt-16 mb-12 flex items-center justify-center shrink-0">
<div className="absolute w-[360px] h-[360px] rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite] pointer-events-none"></div>
<div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.02] border-t-purple-500/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>
<div className="absolute w-64 h-64 bg-purple-600/30 blur-[60px] rounded-full mix-blend-screen pointer-events-none transition-all duration-700" id="orb-glow"></div>
<div className="relative w-64 h-64 rounded-full orb-core backdrop-blur-xl animate-float cursor-pointer group transition-transform duration-700 hover:scale-105 z-10 overflow-hidden flex items-center justify-center" id="main-orb">
<div className="absolute inset-0 bg-gradient-to-br from-[#1c0d3a]/80 to-[#05020a]/90"></div>
<div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-500/40 rounded-full blur-3xl group-hover:bg-pink-400/60 transition-colors duration-1000 mix-blend-screen"></div>
<div className="absolute -bottom-16 -left-8 w-56 h-56 bg-violet-600/50 rounded-full blur-3xl group-hover:bg-indigo-500/60 transition-colors duration-1000 mix-blend-screen"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-breathe mix-blend-screen"></div>
<div className="absolute inset-0 rounded-full border-[1.5px] border-white/20 mix-blend-overlay"></div>
<div className="absolute inset-[1px] rounded-full border border-white/10 pointer-events-none"></div>
<div className="absolute top-[12%] left-[18%] w-20 h-8 bg-white/30 rounded-[100%] blur-[4px] rotate-[-25deg] pointer-events-none"></div>
<div className="absolute bottom-[15%] right-[15%] w-10 h-10 bg-purple-300/20 rounded-[100%] blur-[8px] pointer-events-none"></div>
<div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-pink-200 rounded-full shadow-[0_0_8px_#fbcfe8] animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="relative z-20 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" icon="solar:microphone-2-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-6 z-10 shrink-0">
<div className="flex items-center gap-2 text-sm text-slate-400 transition-opacity duration-300" id="status-container">
<span className="relative flex h-2 w-2" id="recording-dot">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
</span>
<span className="tracking-wide" id="record-text">Recording · <span id="timer-text">02:18</span></span>
</div>
<div className="flex flex-wrap justify-center items-center gap-4">
<button className="glass-button flex items-center gap-3 px-6 py-3 rounded-2xl cursor-pointer group" id="btn-save">
<div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/80 transition-colors">
<iconify-icon className="text-sm text-white" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-white text-sm font-normal">Stop &amp; Save</span>
<span className="text-xs text-slate-500 font-light">Finish recording</span>
</div>
</button>
<button className="glass-button flex items-center gap-3 px-6 py-3 rounded-2xl cursor-pointer hover:bg-red-500/10 hover:border-red-500/30 group" id="btn-delete">
<iconify-icon className="text-xl text-slate-400 group-hover:text-red-400 transition-colors" icon="solar:trash-bin-trash-linear"></iconify-icon>
<div className="flex flex-col items-start text-left">
<span className="text-slate-300 group-hover:text-red-200 transition-colors text-sm font-normal">Delete</span>
<span className="text-xs text-slate-500 font-light">Discard audio</span>
</div>
</button>
</div>
</div>

<div className="flex-1 min-h-[6vh]"></div>

<div className="mt-8 glass-panel flex flex-wrap justify-center items-center p-2 rounded-2xl gap-2 z-10 w-max max-w-full shadow-2xl shrink-0">
<button className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group text-left" onclick="app.showToast('AI Enhancement Applied')">
<div className="p-1.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/5">
<iconify-icon className="text-base text-purple-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex flex-col hidden sm:flex">
<span className="text-sm text-white font-normal">AI Enhancement</span>
<span className="text-[11px] text-slate-500">Polish transcripts</span>
</div>
</button>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<button className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group text-left" onclick="app.showToast('Smart Summary Generated')">
<div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-base text-slate-300" icon="solar:text-align-left-linear"></iconify-icon>
</div>
<div className="flex flex-col hidden sm:flex">
<span className="text-sm text-white font-normal">Smart Summaries</span>
<span className="text-[11px] text-slate-500">Key points &amp; actions</span>
</div>
</button>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<button className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group text-left" onclick="app.showToast('Content Organized')">
<div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-base text-slate-300" icon="solar:widget-5-linear"></iconify-icon>
</div>
<div className="flex flex-col hidden sm:flex">
<span className="text-sm text-white font-normal">Auto-Organize</span>
<span className="text-[11px] text-slate-500">Structured insights</span>
</div>
</button>
</div>
</div>
</main>

<aside className="w-80 hidden lg:flex flex-col glass-panel border-r-0 border-y-0 h-[96vh] my-auto mr-4 rounded-3xl relative overflow-hidden z-20 pt-20 pb-6 px-6 shadow-[-10px_0_30px_rgba(0,0,0,0.2)] shrink-0">
<div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="flex flex-col h-full">
<div className="mb-6">
<h2 className="text-lg text-white font-normal tracking-tight">AI Tools</h2>
<p className="text-xs text-slate-500 mt-1">Enhance your transcript</p>
</div>
<div className="space-y-3 flex-1">

<button className="w-full text-left group relative overflow-hidden rounded-2xl glass-button bg-white/10 border-white/20 cursor-pointer p-4 flex items-center justify-between" onclick="app.showToast('Viewing Raw Transcript')">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Raw Transcript</span>
<span className="text-xs text-slate-400 mt-0.5">Ready to enhance</span>
</div>
</div>
</button>

<button className="ai-tool-btn w-full text-left group relative overflow-hidden rounded-2xl glass-button cursor-pointer p-4 flex items-center justify-between" data-tool="Polish">
<div className="scan-effect absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md -left-full pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-purple-300 group-hover:border-purple-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:magic-stick-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-200 group-hover:text-white transition-colors">Polish</span>
<span className="text-xs text-slate-500 mt-0.5">Improve clarity &amp; flow</span>
</div>
</div>
<iconify-icon className="text-lg text-slate-600 group-hover:text-slate-400 transition-colors relative z-10" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="ai-tool-btn w-full text-left group relative overflow-hidden rounded-2xl glass-button cursor-pointer p-4 flex items-center justify-between" data-tool="Summarize">
<div className="scan-effect absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md -left-full pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:list-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-200 group-hover:text-white transition-colors">Summarize</span>
<span className="text-xs text-slate-500 mt-0.5">Key points &amp; actions</span>
</div>
</div>
<iconify-icon className="text-lg text-slate-600 group-hover:text-slate-400 transition-colors relative z-10" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="ai-tool-btn w-full text-left group relative overflow-hidden rounded-2xl glass-button cursor-pointer p-4 flex items-center justify-between" data-tool="Organize">
<div className="scan-effect absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md -left-full pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-pink-300 group-hover:border-pink-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-200 group-hover:text-white transition-colors">Organize</span>
<span className="text-xs text-slate-500 mt-0.5">Structure content</span>
</div>
</div>
<iconify-icon className="text-lg text-slate-600 group-hover:text-slate-400 transition-colors relative z-10" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-auto glass-panel p-4 rounded-2xl relative overflow-hidden border border-purple-500/20 bg-purple-500/[0.03]" id="tip-card">
<button className="absolute top-0 right-0 p-3 cursor-pointer text-slate-500 hover:text-white transition-colors" onclick="document.getElementById('tip-card').remove()">
<iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-purple-300 mb-2">
<iconify-icon className="text-base" icon="solar:lightbulb-linear"></iconify-icon>
<span className="text-sm font-medium">Tip</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed font-light">
                        Select any text to quickly polish or summarize a specific section.
                    </p>
</div>
</div>
</aside>
</div>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2" id="toast-container"></div>


    </>
  );
}
