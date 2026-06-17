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



        // --- State Management ---
        const state = {
            currentTab: 'home',
            prayers: {
                shacharis: true,
                mincha: false,
                maariv: false
            }
        };

        // --- Navigation ---
        function switchTab(tabId) {
            // Update state
            state.currentTab = tabId;

            // Hide all screens
            ['home', 'stats', 'history'].forEach(id => {
                const el = document.getElementById(`screen-${id}`);
                el.classList.add('hidden');
                el.classList.remove('screen-enter');
            });

            // Show target screen
            const target = document.getElementById(`screen-${tabId}`);
            target.classList.remove('hidden');
            // Trigger animation reflow
            void target.offsetWidth; 
            target.classList.add('screen-enter');

            // Update Header
            const title = document.getElementById('header-title');
            const subtitle = document.getElementById('header-subtitle');
            
            if (tabId === 'home') {
                title.innerText = 'Today';
                subtitle.style.opacity = '1';
                document.getElementById('footer-quote').style.display = 'block';
            } else if (tabId === 'stats') {
                title.innerText = 'Insights';
                subtitle.style.opacity = '0'; // Hide subtitle smoothly
                document.getElementById('footer-quote').style.display = 'none';
            } else {
                title.innerText = 'History';
                subtitle.style.opacity = '0';
                document.getElementById('footer-quote').style.display = 'none';
            }

            // Update Nav Icons
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-zinc-100');
                el.classList.add('text-zinc-600');
            });
            const activeNav = document.getElementById(`nav-${tabId}`);
            activeNav.classList.remove('text-zinc-600');
            activeNav.classList.add('text-zinc-100');
        }

        // --- Prayer Toggling ---
        function togglePrayer(id) {
            const isChecked = state.prayers[id];
            const newState = !isChecked;
            state.prayers[id] = newState;

            const card = document.getElementById(`card-${id}`);
            const btn = card.querySelector('.check-btn');
            const icon = btn.querySelector('.iconify');

            // UI Update Logic
            if (newState) {
                // Change to Checked visual
                if (id === 'mincha') { // Handle the big active card specifically
                    btn.classList.remove('bg-zinc-100', 'text-zinc-950');
                    btn.classList.add('bg-emerald-500', 'text-white', 'ring-4', 'ring-emerald-500/20');
                    // Remove pulse animation text if done
                    document.getElementById('pulse-mincha').style.display = 'none';
                } else {
                    btn.classList.remove('bg-zinc-900/50', 'text-zinc-700', 'border-zinc-800');
                    btn.classList.add('bg-emerald-500/10', 'text-emerald-500', 'ring-1', 'ring-inset', 'ring-emerald-500/20');
                    // Add badge if needed
                    const badge = card.querySelector('h3').nextElementSibling;
                    if(!badge || badge.tagName !== 'SPAN') {
                        // Create badge logic if I were dynamically creating it, 
                        // but here we toggle opacity/visibility ideally.
                        // Simplified: change border color of card
                        card.classList.add('border-emerald-500/20');
                    }
                }
                showToast(`${id.charAt(0).toUpperCase() + id.slice(1)} marked done`);
            } else {
                // Change to Unchecked visual
                if (id === 'mincha') {
                    btn.classList.add('bg-zinc-100', 'text-zinc-950');
                    btn.classList.remove('bg-emerald-500', 'text-white', 'ring-4', 'ring-emerald-500/20');
                    document.getElementById('pulse-mincha').style.display = 'flex';
                } else {
                    btn.classList.add('bg-zinc-900/50', 'text-zinc-700', 'border', 'border-zinc-800');
                    btn.classList.remove('bg-emerald-500/10', 'text-emerald-500', 'ring-1', 'ring-inset', 'ring-emerald-500/20');
                    card.classList.remove('border-emerald-500/20');
                }
            }

            updateProgress();
        }

        function updateProgress() {
            const total = 3;
            const completed = Object.values(state.prayers).filter(Boolean).length;
            const pct = (completed / total) * 100;

            document.getElementById('progress-text').innerText = `${completed} / ${total}`;
            document.getElementById('progress-bar').style.width = `${pct}%`;
        }

        // --- Toast Notification ---
        let toastTimeout;
        function showToast(msg) {
            const toast = document.getElementById('toast');
            const msgEl = document.getElementById('toast-message');
            
            msgEl.innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
            
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                hideToast();
            }, 3000);
        }

        function hideToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        }

        // --- Settings Modal ---
        function toggleSettings() {
            const modal = document.getElementById('settings-modal');
            const overlay = document.getElementById('settings-overlay');
            const isOpen = !modal.classList.contains('translate-y-full');

            if (isOpen) {
                modal.classList.add('translate-y-full');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            } else {
                modal.classList.remove('translate-y-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
            }
        }

        // --- Toggle Switch Animation ---
        function toggleSwitch(btn) {
            const knob = btn.querySelector('div');
            const isChecked = btn.classList.contains('bg-emerald-500');

            if (isChecked) {
                btn.classList.remove('bg-emerald-500');
                btn.classList.add('bg-zinc-700');
                knob.classList.remove('right-1');
                knob.classList.add('left-1');
            } else {
                btn.classList.remove('bg-zinc-700');
                btn.classList.add('bg-emerald-500');
                knob.classList.remove('left-1');
                knob.classList.add('right-1');
            }
        }

        // Initialize
        updateProgress();
    
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
      

<div className="w-full max-w-[420px] bg-zinc-950 flex flex-col relative shadow-2xl border-x border-zinc-900/50 h-[100dvh]">

<header className="flex items-center justify-between px-6 pt-12 pb-4 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-30 border-b border-transparent transition-colors" id="main-header">
<div className="flex flex-col">
<h1 className="text-zinc-100 font-medium tracking-tighter text-lg transition-all duration-300" id="header-title">Today</h1>
<p className="text-xs text-zinc-500 font-medium mt-0.5 transition-all duration-300" id="header-subtitle">Tue, 12 Tishrei • Jerusalem</p>
</div>
<button className="p-2 rounded-full hover:bg-zinc-900 transition-colors text-zinc-400 active:scale-95" onclick="toggleSettings()">
<span className="iconify" data-icon="lucide:settings-2" data-width="20" strokeWidth="1.5"></span>
</button>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative bg-zinc-950">

<div className="screen-enter px-6 pb-28 pt-2" id="screen-home">

<div className="mb-8">
<div className="flex items-end justify-between mb-2">
<span className="text-sm font-medium text-zinc-300">Daily Progress</span>
<span className="text-xs font-medium text-zinc-500" id="progress-text">1 / 3</span>
</div>
<div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-1/3 rounded-full transition-all duration-500 ease-out" id="progress-bar"></div>
</div>
</div>

<div className="space-y-4">

<div className="group relative overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-5 transition-all duration-300 hover:bg-zinc-900/40" id="card-shacharis">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-base font-medium text-zinc-300 tracking-tight">Shacharis</h3>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 transition-opacity" id="badge-shacharis">DONE</span>
</div>
<p className="text-xs text-zinc-500">Checked at 7:12 AM</p>
</div>
<button className="check-btn flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20 transition-all active:scale-90" data-state="checked" onclick="togglePrayer('shacharis')">
<span className="iconify" data-icon="lucide:check" data-width="20" strokeWidth="1.5"></span>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-b from-zinc-900 to-zinc-900/50 p-5 shadow-[0_0_20px_-10px_rgba(59,130,246,0.15)] transition-all duration-300" id="card-mincha">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Mincha</h3>
<span className="flex h-2 w-2 relative" id="pulse-mincha">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
</div>
<p className="text-xs text-zinc-400" id="text-mincha">Sunset in 1h 42m</p>
<p className="text-[10px] text-zinc-600 mt-1 font-mono">End time: 7:24 PM</p>
</div>

<button className="check-btn group flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 hover:bg-white text-zinc-950 shadow-lg shadow-zinc-950/50 transition-all active:scale-95" data-state="unchecked" onclick="togglePrayer('mincha')">
<span className="iconify group-hover:scale-110 transition-transform" data-icon="lucide:check" data-width="22" strokeWidth="2"></span>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-zinc-800/40 bg-zinc-900/10 p-5 opacity-75 hover:opacity-100 transition-opacity" id="card-maariv">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-base font-medium text-zinc-400 tracking-tight">Maariv</h3>
</div>
<p className="text-xs text-zinc-600">Earliest time 8:05 PM</p>
</div>
<button className="check-btn flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-700 transition-all hover:bg-zinc-800 hover:text-zinc-500 active:scale-95" data-state="unchecked" onclick="togglePrayer('maariv')">
<span className="iconify" data-icon="lucide:moon" data-width="18" strokeWidth="1.5"></span>
</button>
</div>
</div>
</div>

<div className="mt-8">
<div className="rounded-lg bg-zinc-900/30 border border-zinc-800/50 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-400"><span className="text-zinc-200 font-medium">14,203</span> others davened Mincha</span>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:globe" data-width="14"></span>
</div>
</div>
</div>

<div className="hidden px-6 pb-28 pt-2" id="screen-stats">
<div className="grid grid-cols-2 gap-3 mb-3">

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between h-32 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start relative">
<div className="p-1.5 rounded-md bg-orange-500/10 text-orange-500 w-fit">
<span className="iconify" data-icon="lucide:flame" data-width="16" strokeWidth="1.5"></span>
</div>
</div>
<div className="relative">
<span className="text-2xl font-medium text-zinc-100 tracking-tight block">12</span>
<span className="text-xs text-zinc-500 font-medium">Day Streak</span>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between h-32 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start relative">
<div className="p-1.5 rounded-md bg-purple-500/10 text-purple-500 w-fit">
<span className="iconify" data-icon="lucide:users" data-width="16" strokeWidth="1.5"></span>
</div>
</div>
<div className="relative">
<span className="text-2xl font-medium text-zinc-100 tracking-tight block">92%</span>
<span className="text-xs text-zinc-500 font-medium">With Minyan</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 w-full mt-4">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-zinc-400">Activity (Last 30 Days)</span>
<span className="text-[10px] text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full">Perfect</span>
</div>
<div className="flex items-end justify-between h-32 gap-1 w-full">

<div className="w-full bg-zinc-800/50 rounded-t-sm h-[60%] hover:bg-emerald-500/50 transition-colors cursor-pointer group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-200 text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">2/3</div>
</div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-200 text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">3/3</div>
</div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[33%] hover:bg-emerald-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[66%] hover:bg-emerald-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[100%] hover:bg-emerald-400 transition-colors cursor-pointer"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[66%] opacity-50 border-t-2 border-dashed border-zinc-600"></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-zinc-600 font-mono uppercase">
<span>Sep 1</span>
<span>Sep 15</span>
<span>Today</span>
</div>
</div>
</div>

<div className="hidden px-6 pb-28 pt-2" id="screen-history">

<div className="flex items-center justify-between mb-6">
<button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-zinc-900 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<span className="text-sm font-medium text-zinc-200">October 2023</span>
<button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-zinc-900 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>

<div className="grid grid-cols-7 gap-y-4 mb-8">

<div className="text-[10px] text-zinc-600 text-center font-medium">S</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">M</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">T</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">W</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">T</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">F</div>
<div className="text-[10px] text-zinc-600 text-center font-medium">S</div>

<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-700 text-xs">28</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-700 text-xs">29</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-700 text-xs">30</div>

<div className="h-10 flex flex-col items-center justify-center gap-1 cursor-pointer">
<span className="text-xs text-zinc-400">1</span>
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 cursor-pointer">
<span className="text-xs text-zinc-400">2</span>
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 cursor-pointer">
<span className="text-xs text-zinc-400">3</span>
<div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 cursor-pointer bg-zinc-900/50 rounded-lg">
<span className="text-xs text-zinc-100 font-medium">4</span>
<div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-600 text-xs">5</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-600 text-xs">6</div>
<div className="h-10 flex flex-col items-center justify-center gap-1 text-zinc-600 text-xs">7</div>
</div>

<h3 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Recent</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-medium text-xs">M</div>
<div>
<p className="text-sm text-zinc-200">Monday</p>
<p className="text-[10px] text-zinc-500">Oct 2, 2023</p>
</div>
</div>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-medium text-xs">S</div>
<div>
<p className="text-sm text-zinc-200">Sunday</p>
<p className="text-[10px] text-zinc-500">Oct 1, 2023</p>
</div>
</div>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-2 rounded-full bg-zinc-700"></div>
</div>
</div>
</div>
</div>

<div className="mt-8 text-center pb-8 opacity-100 transition-opacity" id="footer-quote">
<p className="text-[10px] text-zinc-700 uppercase tracking-widest font-medium">Kavana • Focus • Connect</p>
</div>
</main>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-max max-w-[90%] z-40 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none" id="toast">
<div className="bg-zinc-800/90 backdrop-blur-md text-zinc-200 text-xs px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-zinc-700">
<span id="toast-message">Prayer updated</span>
<button className="text-blue-400 font-medium hover:text-blue-300" onclick="hideToast()">Undo</button>
</div>
</div>

<nav className="absolute bottom-0 w-full h-20 bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-800/50 flex items-center justify-around px-2 z-30">
<button className="nav-item flex flex-col items-center gap-1 p-2 text-zinc-100 transition-colors" id="nav-home" onclick="switchTab('home')">
<span className="iconify" data-icon="lucide:home" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Today</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 p-2 text-zinc-600 hover:text-zinc-400 transition-colors" id="nav-stats" onclick="switchTab('stats')">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Stats</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 p-2 text-zinc-600 hover:text-zinc-400 transition-colors" id="nav-history" onclick="switchTab('history')">
<span className="iconify" data-icon="lucide:calendar" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">History</span>
</button>
</nav>

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="settings-overlay" onclick="toggleSettings()"></div>

<div className="absolute bottom-0 left-0 w-full bg-zinc-900 z-50 rounded-t-3xl border-t border-zinc-800 transform translate-y-full modal-slide h-[85vh] flex flex-col" id="settings-modal">
<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
<h2 className="text-sm font-medium text-zinc-100">Settings</h2>
<button className="bg-zinc-800 p-1 rounded-full text-zinc-400 hover:text-zinc-200" onclick="toggleSettings()">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-medium text-lg">JD</div>
<div>
<h3 className="text-sm text-zinc-100 font-medium">Jacob Doe</h3>
<p className="text-xs text-zinc-500">Jerusalem, Israel</p>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-zinc-300">Notifications</span>
<span className="text-[10px] text-zinc-500">Get reminders 15m before zmanim</span>
</div>
<button className="w-10 h-6 bg-emerald-500 rounded-full relative transition-colors duration-200" onclick="toggleSwitch(this)">
<div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-transform duration-200"></div>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-zinc-300">Nusach</span>
<span className="text-[10px] text-zinc-500">Ashkenaz</span>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-zinc-300">Location Access</span>
<span className="text-[10px] text-zinc-500">Always Allow</span>
</div>
<button className="w-10 h-6 bg-zinc-700 rounded-full relative transition-colors duration-200" onclick="toggleSwitch(this)">
<div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition-transform duration-200"></div>
</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Zmanim Configuration</h3>
<div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-400">Plag HaMincha</span>
<span className="text-zinc-200">1:15h before sunset</span>
</div>
<div className="w-full h-px bg-zinc-800"></div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-400">Tzeit Hakochavim</span>
<span className="text-zinc-200">Geonim (8.5°)</span>
</div>
</div>
</div>
<button className="w-full py-3 rounded-lg border border-red-500/20 text-red-400 text-xs font-medium bg-red-500/5 hover:bg-red-500/10 transition-colors">
                    Log Out
                </button>
</div>
</div>
</div>


    </>
  );
}
