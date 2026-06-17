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



        lucide.createIcons();

        // --- Time & Date Logic ---
        function updateTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
            const displayHours = hours % 12 || 12; 
            
            const timeStr = `${displayHours}:${displayMinutes}`;
            document.getElementById('lock-time').textContent = timeStr;
            document.getElementById('status-time').textContent = timeStr;
            
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            document.getElementById('lock-date').textContent = now.toLocaleDateString('en-US', options);
        }
        setInterval(updateTime, 1000);
        updateTime();

        // --- State Management ---
        let isLocked = true;
        let isAppOpen = false;
        
        const lockScreen = document.getElementById('lock-screen');
        const homeScreen = document.getElementById('home-screen');
        const appLayer = document.getElementById('app-layer');
        const appContent = document.getElementById('app-content');
        const dynamicIsland = document.getElementById('dynamic-island');
        const scrollContainer = document.getElementById('home-scroll-container');
        const dot1 = document.getElementById('dot-1');
        const dot2 = document.getElementById('dot-2');

        // --- Unlock/Lock ---
        function unlockPhone() {
            if (!isLocked) return;
            isLocked = false;
            
            lockScreen.style.opacity = '0';
            lockScreen.style.transform = 'translateY(-100%)';
            lockScreen.style.pointerEvents = 'none';
            
            homeScreen.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
            homeScreen.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');

            animateIsland();
        }

        function lockPhone() {
            if (isLocked) return;
            isLocked = true;
            isAppOpen = false;
            
            // Close app if open
            appLayer.classList.remove('app-enter-active');
            appLayer.classList.add('app-enter');

            homeScreen.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            homeScreen.classList.add('opacity-0', 'scale-95', 'pointer-events-none');

            lockScreen.style.opacity = '1';
            lockScreen.style.transform = 'translateY(0)';
            lockScreen.style.pointerEvents = 'auto';
            
            // Reset scroll
            scrollContainer.scrollTo(0,0);
        }

        function goHome() {
            if (isLocked) return;
            
            if (isAppOpen) {
                // Close App
                isAppOpen = false;
                appLayer.classList.remove('app-enter-active');
                appLayer.classList.add('app-enter');
                homeScreen.classList.remove('scale-95', 'opacity-50');
                homeScreen.classList.add('scale-100', 'opacity-100');
            } else {
                // If on home screen, shake or do nothing (or lock)
                lockPhone();
            }
        }

        function animateIsland() {
            dynamicIsland.style.width = '100px'; 
            setTimeout(() => dynamicIsland.style.width = '7rem', 400);
        }

        // --- Home Screen Scroll Logic ---
        function updateDots() {
            const scrollLeft = scrollContainer.scrollLeft;
            const width = scrollContainer.offsetWidth;
            
            if (scrollLeft < width / 2) {
                dot1.className = "w-1.5 h-1.5 rounded-full bg-white transition-all";
                dot2.className = "w-1.5 h-1.5 rounded-full bg-white/40 transition-all";
            } else {
                dot1.className = "w-1.5 h-1.5 rounded-full bg-white/40 transition-all";
                dot2.className = "w-1.5 h-1.5 rounded-full bg-white transition-all";
            }
        }

        // --- App Content Generators ---
        const apps = {
            'settings': `
                <div class="bg-zinc-100 min-h-full">
                    <div class="px-5 pb-2 pt-4">
                        <h1 class="text-3xl font-bold tracking-tight text-black">Settings</h1>
                        <div class="mt-2 relative">
                             <i data-lucide="search" class="w-4 h-4 absolute left-3 top-2.5 text-zinc-400"></i>
                             <input type="text" placeholder="Search" class="w-full bg-zinc-200/80 rounded-lg py-2 pl-9 pr-4 text-sm outline-none placeholder:text-zinc-500">
                        </div>
                    </div>
                    <div class="px-4 mt-4 space-y-6 pb-20">
                        <!-- Profile -->
                        <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-zinc-200">
                            <div class="w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center text-lg font-semibold text-zinc-500">US</div>
                            <div class="flex-1">
                                <div class="font-medium text-base">User Name</div>
                                <div class="text-xs text-zinc-500">Apple ID, iCloud, Media & Purchases</div>
                            </div>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-zinc-400"></i>
                        </div>

                        <!-- Group 1 -->
                        <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                            <div class="p-3 flex items-center justify-between border-b border-zinc-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 rounded bg-orange-500 flex items-center justify-center"><i data-lucide="plane" class="w-4 h-4 text-white"></i></div>
                                    <span class="text-sm font-medium">Airplane Mode</span>
                                </div>
                                <div class="relative inline-block w-10 h-6 align-middle select-none">
                                    <input type="checkbox" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5 shadow-sm"/>
                                    <div class="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-300"></div>
                                </div>
                            </div>
                            <div class="p-3 flex items-center justify-between border-b border-zinc-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 rounded bg-blue-500 flex items-center justify-center"><i data-lucide="wifi" class="w-4 h-4 text-white"></i></div>
                                    <span class="text-sm font-medium">Wi-Fi</span>
                                </div>
                                <div class="flex items-center gap-2 text-zinc-400">
                                    <span class="text-xs">Home-5G</span>
                                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                                </div>
                            </div>
                            <div class="p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 rounded bg-blue-600 flex items-center justify-center"><i data-lucide="bluetooth" class="w-4 h-4 text-white"></i></div>
                                    <span class="text-sm font-medium">Bluetooth</span>
                                </div>
                                <div class="flex items-center gap-2 text-zinc-400">
                                    <span class="text-xs">On</span>
                                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Group 2 -->
                        <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                            <div class="p-3 flex items-center justify-between border-b border-zinc-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 rounded bg-indigo-500 flex items-center justify-center"><i data-lucide="bell" class="w-4 h-4 text-white"></i></div>
                                    <span class="text-sm font-medium">Notifications</span>
                                </div>
                                <i data-lucide="chevron-right" class="w-4 h-4 text-zinc-400"></i>
                            </div>
                             <div class="p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-7 h-7 rounded bg-pink-500 flex items-center justify-center"><i data-lucide="volume-2" class="w-4 h-4 text-white"></i></div>
                                    <span class="text-sm font-medium">Sounds & Haptics</span>
                                </div>
                                <i data-lucide="chevron-right" class="w-4 h-4 text-zinc-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            'photos': `
                <div class="bg-white h-full flex flex-col">
                    <div class="pt-4 px-4 pb-2 flex justify-between items-end bg-white/90 backdrop-blur-md sticky top-0 z-10">
                        <h1 class="text-2xl font-bold text-black tracking-tight">Library</h1>
                        <div class="flex gap-4">
                            <span class="text-xs font-semibold bg-zinc-200 px-3 py-1 rounded-full">Years</span>
                            <span class="text-xs font-semibold bg-zinc-200 px-3 py-1 rounded-full">Months</span>
                            <span class="text-xs font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">All</span>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto hide-scrollbar pb-20">
                        <div class="grid grid-cols-3 gap-0.5">
                            <div class="aspect-square bg-zinc-200"></div>
                            <div class="aspect-square bg-zinc-300"></div>
                            <div class="aspect-square bg-zinc-400"></div>
                            <div class="aspect-square bg-red-100"></div>
                            <div class="aspect-square bg-blue-100"></div>
                            <div class="aspect-square bg-green-100"></div>
                            <div class="aspect-square bg-yellow-100"></div>
                            <div class="aspect-square bg-purple-100"></div>
                            <div class="aspect-square bg-pink-100"></div>
                            <div class="aspect-square bg-zinc-200"></div>
                            <div class="aspect-square bg-zinc-500"></div>
                            <div class="aspect-square bg-zinc-600"></div>
                             <div class="aspect-square bg-orange-200"></div>
                            <div class="aspect-square bg-teal-200"></div>
                            <div class="aspect-square bg-indigo-200"></div>
                            <!-- Mock content scrolling -->
                             <div class="aspect-square bg-zinc-200"></div>
                            <div class="aspect-square bg-zinc-300"></div>
                            <div class="aspect-square bg-zinc-400"></div>
                             <div class="aspect-square bg-zinc-200"></div>
                            <div class="aspect-square bg-zinc-300"></div>
                            <div class="aspect-square bg-zinc-400"></div>
                        </div>
                         <div class="p-4">
                            <h2 class="font-bold text-lg mb-2">People & Places</h2>
                            <div class="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                                <div class="w-24 h-24 rounded-full bg-zinc-200 shrink-0"></div>
                                <div class="w-24 h-24 rounded-full bg-zinc-300 shrink-0"></div>
                                <div class="w-24 h-24 rounded-full bg-zinc-400 shrink-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            'weather': `
                <div class="h-full bg-gradient-to-b from-blue-400 to-blue-800 text-white flex flex-col relative overflow-hidden">
                    <div class="absolute top-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
                    <div class="flex flex-col items-center pt-16 z-10">
                        <h2 class="text-2xl font-normal">Cupertino</h2>
                        <h1 class="text-7xl font-thin tracking-tighter">68°</h1>
                        <p class="text-lg font-medium text-blue-100">Mostly Clear</p>
                        <div class="flex gap-4 text-sm font-medium text-blue-100 mt-1">
                            <span>H:72°</span>
                            <span>L:58°</span>
                        </div>
                    </div>
                    <div class="mt-12 px-5 pb-20 overflow-y-auto hide-scrollbar z-10 space-y-3">
                        <div class="bg-blue-500/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <div class="text-xs uppercase font-medium opacity-70 mb-3 border-b border-white/10 pb-2">Hourly Forecast</div>
                            <div class="flex justify-between items-center text-sm overflow-x-auto gap-4 hide-scrollbar">
                                <div class="flex flex-col items-center gap-1"><span class="text-xs">Now</span><i data-lucide="cloud-sun" class="w-4 h-4"></i><span>68°</span></div>
                                <div class="flex flex-col items-center gap-1"><span class="text-xs">10AM</span><i data-lucide="sun" class="w-4 h-4"></i><span>70°</span></div>
                                <div class="flex flex-col items-center gap-1"><span class="text-xs">11AM</span><i data-lucide="sun" class="w-4 h-4"></i><span>71°</span></div>
                                <div class="flex flex-col items-center gap-1"><span class="text-xs">12PM</span><i data-lucide="sun" class="w-4 h-4"></i><span>72°</span></div>
                                <div class="flex flex-col items-center gap-1"><span class="text-xs">1PM</span><i data-lucide="cloud" class="w-4 h-4"></i><span>71°</span></div>
                            </div>
                        </div>
                        <div class="bg-blue-500/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <div class="text-xs uppercase font-medium opacity-70 mb-2 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> 10-Day Forecast</div>
                            <div class="space-y-3 mt-2 text-sm font-medium">
                                <div class="flex items-center justify-between">
                                    <span class="w-10">Today</span>
                                    <i data-lucide="sun" class="w-4 h-4 text-yellow-300"></i>
                                    <div class="flex gap-2 opacity-80"><span class="opacity-60">58°</span><div class="w-20 h-1 bg-white/20 rounded-full mt-2 relative"><div class="absolute left-1/4 right-1/4 h-full bg-yellow-300 rounded-full"></div></div><span>72°</span></div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="w-10">Thu</span>
                                    <i data-lucide="cloud-rain" class="w-4 h-4 text-blue-200"></i>
                                    <div class="flex gap-2 opacity-80"><span class="opacity-60">55°</span><div class="w-20 h-1 bg-white/20 rounded-full mt-2 relative"><div class="absolute left-0 right-1/2 h-full bg-blue-300 rounded-full"></div></div><span>65°</span></div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="w-10">Fri</span>
                                    <i data-lucide="cloud" class="w-4 h-4 text-white"></i>
                                    <div class="flex gap-2 opacity-80"><span class="opacity-60">54°</span><div class="w-20 h-1 bg-white/20 rounded-full mt-2 relative"><div class="absolute left-1/3 right-1/3 h-full bg-green-300 rounded-full"></div></div><span>66°</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        const genericApp = `
            <div class="h-full bg-white flex flex-col items-center justify-center text-zinc-300">
                <i data-lucide="layers" class="w-16 h-16 mb-4 stroke-1"></i>
                <p class="text-zinc-400 text-sm font-medium">This app is not installed.</p>
            </div>
        `;

        function openApp(appName) {
            if (isLocked) return;
            isAppOpen = true;

            // Generate Content
            let content = apps[appName] || genericApp;
            appContent.innerHTML = content;
            
            // Re-init icons for the new content
            lucide.createIcons();

            // Animate
            homeScreen.classList.remove('scale-100', 'opacity-100');
            homeScreen.classList.add('scale-95', 'opacity-50');
            
            appLayer.classList.remove('app-enter');
            appLayer.classList.add('app-enter-active');
            
            animateIsland();
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
      

<div className="relative w-full max-w-sm aspect-[9/19.5] max-h-[90vh] bg-black rounded-[3.5rem] shadow-2xl ring-[8px] ring-zinc-800/50 overflow-hidden border-[6px] border-black z-0">

<div className="relative w-full h-full bg-cover bg-center overflow-hidden transition-all duration-500" id="screen" style={{backgroundImage: 'linear-gradient(180deg, #1e1b4b 0%, #4c1d95 40%, #000000 100%)'}}>

<div className="absolute top-0 inset-x-0 h-14 z-[60] flex justify-center items-start pt-3 pointer-events-none">
<div className="h-8 w-28 bg-black rounded-full flex items-center justify-between px-3 transition-all duration-300 z-[60]" id="dynamic-island">
<div className="h-2 w-2 rounded-full bg-black"></div>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-12 z-[55] flex justify-between items-center px-6 pt-2 text-xs font-medium tracking-wide pointer-events-none mix-blend-difference text-white">
<div id="status-time">9:41</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<div className="w-6 h-3 border border-current rounded-sm relative opacity-90">
<div className="absolute inset-y-0 left-0 bg-current w-2/3"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col justify-between items-center pt-24 pb-8 z-50 transition-all duration-500 bg-black/20 backdrop-blur-sm" id="lock-screen" onclick="unlockPhone()">
<div className="flex flex-col items-center gap-2 text-center transform transition-transform duration-500" id="lock-content">
<i className="w-4 h-4 text-white/60 mb-2" data-lucide="lock"></i>
<div className="text-base font-medium text-indigo-100 tracking-wide" id="lock-date">Wednesday, October 11</div>
<div className="text-7xl font-semibold tracking-tighter text-white drop-shadow-lg" id="lock-time">9:41</div>

<div className="mt-8 flex flex-col gap-2 w-full max-w-[20rem]">
<div className="mx-2 p-3 glass rounded-2xl flex items-start gap-3 backdrop-blur-md">
<div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-black shrink-0">
<i className="w-5 h-5 fill-current" data-lucide="message-square"></i>
</div>
<div className="flex-1 text-left min-w-0">
<div className="flex justify-between items-baseline">
<span className="text-sm font-bold text-white">Messages</span>
<span className="text-xs text-white/60">Now</span>
</div>
<div className="text-xs text-white/90 mt-0.5 leading-snug truncate">
<span className="font-semibold">Sarah</span>: Dinner at 8? Don't be late! 🍝
                                </div>
</div>
</div>
<div className="mx-2 p-3 glass rounded-2xl flex items-start gap-3 backdrop-blur-md">
<div className="w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="newspaper"></i>
</div>
<div className="flex-1 text-left min-w-0">
<div className="flex justify-between items-baseline">
<span className="text-sm font-bold text-white">News</span>
<span className="text-xs text-white/60">2m ago</span>
</div>
<div className="text-xs text-white/90 mt-0.5 leading-snug truncate">
                                    Tech giants announce new AI protocols...
                                </div>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-between items-end px-10 mb-6">
<button className="w-12 h-12 glass-dark rounded-full flex items-center justify-center transition active:scale-90 active:bg-white active:text-black group">
<i className="w-6 h-6 stroke-white group-active:stroke-black fill-white group-active:fill-black transition-colors" data-lucide="flashlight"></i>
</button>
<button className="w-12 h-12 glass-dark rounded-full flex items-center justify-center transition active:scale-90 active:bg-white active:text-black group">
<i className="w-6 h-6 stroke-white group-active:stroke-black transition-colors" data-lucide="camera"></i>
</button>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
</div>

<div className="absolute inset-0 pt-16 pb-24 z-20 opacity-0 pointer-events-none transform scale-95 transition-all duration-500 flex flex-col" id="home-screen">

<div className="flex-1 w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory flex" id="home-scroll-container" onscroll="updateDots()">

<div className="min-w-full px-6 grid grid-cols-4 grid-rows-6 gap-x-4 gap-y-4 snap-center content-start">

<div className="col-span-4 row-span-2 h-36 glass rounded-3xl p-4 flex flex-col justify-between text-white shadow-lg cursor-pointer active:scale-95 transition-transform" onclick="openApp('weather')">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase text-zinc-300">Cupertino</span>
<span className="text-3xl font-light tracking-tight">68°</span>
</div>
<i className="w-8 h-8 text-yellow-300" data-lucide="cloud-sun"></i>
</div>
<div className="text-xs font-medium">Mostly Clear<br/>H:72° L:58°</div>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('maps')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-400 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-zinc-800" data-lucide="map"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Maps</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('calendar')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="calendar"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Calendar</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('photos')">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-20"></div>
<div className="w-3 h-3 rounded-full bg-cyan-400 absolute top-3 left-3 blur-sm"></div>
<div className="w-4 h-4 rounded-full bg-purple-400 absolute bottom-3 right-3 blur-sm"></div>
<i className="w-7 h-7 text-zinc-800 relative z-10" data-lucide="image"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Photos</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('settings')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-zinc-600 to-zinc-800 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform border border-zinc-600">
<i className="w-7 h-7 text-zinc-300" data-lucide="settings"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Settings</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('music')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white fill-current" data-lucide="music"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Music</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('mail')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="mail"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Mail</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('notes')">
<div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform relative overflow-hidden">
<div className="w-full h-2 bg-yellow-200 absolute top-3"></div>
<span className="text-zinc-800 font-serif font-bold text-xs pt-2">Notes</span>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Notes</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('files')">
<div className="w-14 h-14 rounded-2xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform border border-blue-400/30">
<i className="w-7 h-7 text-blue-400 fill-current" data-lucide="folder"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Files</span>
</div>
</div>

<div className="min-w-full px-6 grid grid-cols-4 grid-rows-6 gap-x-4 gap-y-4 snap-center content-start">
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="wallet"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Wallet</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform border border-zinc-800">
<i className="w-7 h-7 text-white" data-lucide="tv"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">TV</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<div className="text-[8px] font-bold text-zinc-900 tracking-tighter">APP STORE</div>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">App Store</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-orange-400 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="home"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Home</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="podcast"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Podcasts</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer" onclick="openApp('generic')">
<div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white fill-current" data-lucide="heart"></i>
</div>
<span className="text-[10px] font-medium tracking-tight text-white drop-shadow-md">Health</span>
</div>
</div>
</div>

<div className="flex justify-center gap-1.5 mt-auto mb-4 absolute bottom-24 w-full">
<div className="w-1.5 h-1.5 rounded-full bg-white transition-all" id="dot-1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all" id="dot-2"></div>
</div>

<div className="w-[90%] mx-auto h-20 glass rounded-[2.5rem] flex items-center justify-evenly px-2 mb-2 absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
<div className="flex flex-col items-center group cursor-pointer" onclick="openApp('phone')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white fill-current" data-lucide="phone"></i>
</div>
</div>
<div className="flex flex-col items-center group cursor-pointer" onclick="openApp('safari')">
<div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<i className="w-7 h-7 text-white" data-lucide="compass"></i>
</div>
</div>
<div className="flex flex-col items-center group cursor-pointer" onclick="openApp('messages')">
<div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white fill-current" data-lucide="message-circle"></i>
</div>
</div>
<div className="flex flex-col items-center group cursor-pointer" onclick="openApp('music')">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center app-icon-shadow group-active:scale-90 transition-transform">
<i className="w-7 h-7 text-white" data-lucide="music-2"></i>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-40 bg-black app-enter flex flex-col overflow-hidden rounded-[3rem]" id="app-layer">

<div className="w-full h-full pt-12 pb-6 overflow-y-auto hide-scrollbar bg-white text-black relative" id="app-content">

</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60 cursor-pointer z-[70] hover:opacity-100 transition-opacity mix-blend-difference" onclick="goHome()"></div>
</div>

<div className="absolute -left-[9px] top-28 h-7 w-1 bg-zinc-700 rounded-l-md border border-zinc-900"></div>
<div className="absolute -left-[9px] top-40 h-14 w-1 bg-zinc-700 rounded-l-md border border-zinc-900"></div>
<div className="absolute -left-[9px] top-56 h-14 w-1 bg-zinc-700 rounded-l-md border border-zinc-900"></div>
<div className="absolute -right-[9px] top-44 h-20 w-1 bg-zinc-700 rounded-r-md border border-zinc-900 cursor-pointer hover:bg-zinc-600 transition-colors" onclick="lockPhone()"></div>
</div>

<div className="fixed bottom-8 text-zinc-500 text-xs tracking-tight font-medium flex flex-col items-center gap-1">
<span className="uppercase tracking-widest text-[10px]">Simulator</span>
<span>Click screen to Unlock • Swipe pages • Click Home Bar to Close App</span>
</div>


    </>
  );
}
