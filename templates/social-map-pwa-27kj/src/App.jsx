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



        // --- LUCIDE ICONS INIT ---
        lucide.createIcons();

        // --- PWA SERVICE WORKER REGISTRATION ---
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // For demonstration in a single file, we register a dummy SW using a Blob
                // In a real next-pwa setup, this would point to '/sw.js'
                const swCode = `
                    const CACHE_NAME = 'zenly-nova-v1';
                    self.addEventListener('install', (event) => {
                        self.skipWaiting();
                    });
                    self.addEventListener('activate', (event) => {
                        event.waitUntil(self.clients.claim());
                    });
                    self.addEventListener('fetch', (event) => {
                        // Network first strategy
                    });
                `;
                const blob = new Blob([swCode], {type: 'application/javascript'});
                const swUrl = URL.createObjectURL(blob);
                
                // Try registering blob (works in some envs), otherwise fallback logic needed in real app
                navigator.serviceWorker.register(swUrl)
                    .then((registration) => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch((err) => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }

        // --- SPLASH SCREEN LOGIC ---
        window.addEventListener('load', () => {
            const splash = document.getElementById('splash-screen');
            setTimeout(() => {
                splash.remove(); // Remove from DOM after animation
            }, 2500); // 2s animation + buffer
        });

        // --- APP INTERACTION LOGIC ---
        
        // DOM Elements
        const screens = {
            map: document.getElementById('screen-map'),
            chat: document.getElementById('screen-chat'),
            profile: document.getElementById('screen-profile')
        };
        const navBtns = {
            map: document.getElementById('nav-map'),
            chat: document.getElementById('nav-chat'),
            profile: document.getElementById('nav-profile')
        };
        const chatModal = document.getElementById('chat-modal');
        const ghostToggle = document.getElementById('ghost-toggle');
        const ghostIndicator = document.getElementById('ghost-indicator');

        // State
        let activeScreen = 'map';

        // Navigation Logic
        function toggleScreen(screenName) {
            // Hide all screens
            Object.values(screens).forEach(el => el.classList.add('hidden'));
            Object.values(screens).forEach(el => el.classList.remove('flex'));
            
            // Show active screen
            screens[screenName].classList.remove('hidden');
            screens[screenName].classList.add('flex');

            // Reset Nav Buttons Style
            Object.values(navBtns).forEach(btn => {
                btn.className = 'nav-btn w-12 h-12 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300';
                const icon = btn.querySelector('i');
                if(icon) {
                    icon.style.strokeWidth = '1.5';
                    icon.parentElement.classList.remove('bg-white', 'text-black', 'shadow-lg', 'scale-105');
                    icon.parentElement.classList.add('text-white/60');
                }
            });

            // Active Button Style
            const activeBtn = navBtns[screenName];
            activeBtn.className = 'nav-btn w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 transform scale-105';
            const activeIcon = activeBtn.querySelector('i');
            if(activeIcon) activeIcon.style.strokeWidth = '2.5';
            
            // Re-render icons if needed by library (Lucide handles this mostly via DOM observation, but safe to ignore here)
            activeScreen = screenName;
        }

        // Chat Modal Logic
        function openChat(name, activity) {
            const nameEl = document.getElementById('chat-name');
            const statusEl = document.getElementById('chat-status');
            
            nameEl.innerText = name;
            // Update status text based on activity
            let statusText = "Active Now";
            if(activity === 'sleeping') statusText = "Asleep (Low Battery)";
            if(activity === 'studying') statusText = "Focus Mode";
            
            statusEl.innerHTML = `<span class="w-1.5 h-1.5 ${activity === 'sleeping' ? 'bg-yellow-500' : 'bg-green-500'} rounded-full"></span> ${statusText}`;
            
            chatModal.style.transform = 'translateY(0)';
        }

        function closeChat() {
            chatModal.style.transform = 'translateY(100%)';
        }

        // Ghost Mode Logic
        ghostToggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                ghostIndicator.classList.remove('hidden');
                // Simulate toast or feedback
                const btn = e.target.nextElementSibling;
                btn.classList.add('bg-blue-500');
            } else {
                ghostIndicator.classList.add('hidden');
            }
        });

        // Simulated Map Pan Interaction (Desktop/Mobile)
        const mapLayer = document.getElementById('map-layer');
        let isDragging = false;
        let startX, startY, translateX = 0, translateY = 0;

        screens.map.addEventListener('mousedown', startDrag);
        screens.map.addEventListener('touchstart', startDrag, {passive: false});

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, {passive: false});

        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);

        function startDrag(e) {
            if(activeScreen !== 'map') return;
            // Don't drag if clicking a friend
            if(e.target.closest('.cursor-pointer')) return;
            
            isDragging = true;
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            screens.map.style.cursor = 'grabbing';
        }

        function drag(e) {
            if (!isDragging) return;
            if(e.type === 'touchmove') e.preventDefault(); // prevent scroll
            
            const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            
            const diffX = currentX - startX;
            const diffY = currentY - startY;

            // Simple limit
            if (Math.abs(translateX + diffX) < 150) {
                 mapLayer.style.transform = `translate(${translateX + diffX}px, ${translateY + diffY}px)`;
            }
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            screens.map.style.cursor = 'default';
            // Snap back for effect
            mapLayer.style.transform = `translate(0px, 0px)`;
            translateX = 0;
            translateY = 0;
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
      

<div className="fixed inset-0 z-[100] bg-[#0f0f12] flex flex-col items-center justify-center splash-fade-out" id="splash-screen">
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

<img alt="Logo" className="w-24 h-24 rounded-2xl shadow-2xl relative z-10 object-cover border border-white/10" src="https://media.licdn.com/dms/image/D5612AQE2_w7yio6dOQ/article-cover_image-shrink_720_1280/0/1684639948011?e=2147483647&amp;v=beta&amp;t=H3-w2_qD9l4e0s2t3r_u5v6w7x8y9z0"/>
</div>
<h1 className="mt-6 text-xl font-medium tracking-tight text-white/90">Zenly Nova</h1>
<div className="mt-2 flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{animationDelay: '0s'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="aura-blob bg-blue-600/20 w-96 h-96 -top-20 -left-20"></div>
<div className="aura-blob bg-indigo-600/20 w-80 h-80 top-1/2 left-1/2" style={{animationDelay: '-2s'}}></div>
<div className="aura-blob bg-teal-600/20 w-96 h-96 -bottom-20 -right-20" style={{animationDelay: '-5s'}}></div>
</div>

<div className="relative z-10 w-full h-full max-w-md mx-auto flex flex-col bg-black/5 backdrop-blur-sm border-x border-white/5 shadow-2xl" id="app">

<main className="flex-1 relative overflow-hidden group" id="screen-map">

<div className="absolute inset-0 map-grid bg-[#131316] will-change-transform" id="map-layer" style={{transition: 'transform 0.1s ease-out'}}>

<svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path d="M-100,200 Q150,250 400,100 T900,300" fill="none" stroke="white" strokeWidth="20"></path>
<path d="M50,800 Q200,400 350,600 T600,200" fill="none" stroke="white" strokeWidth="15"></path>
<path d="M200,-50 L250,900" fill="none" stroke="white" strokeWidth="12"></path>
</svg>

<div className="absolute top-1/3 left-1/4 flex flex-col items-center transform transition-transform duration-500 hover:scale-110 cursor-pointer" onclick="openChat('Sarah', 'walking')">
<div className="relative">
<div className="w-12 h-12 rounded-full border-2 border-purple-400 p-0.5 bg-black/50 backdrop-blur-md avatar-pulse overflow-hidden">
<img alt="Sarah" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="absolute -top-2 -right-2 bg-white text-black text-[10px] px-1.5 py-0.5 rounded-full shadow-lg font-medium flex items-center gap-1">
<span>🚶‍♀️</span>
</div>
</div>
<span className="mt-2 text-xs font-medium text-white/90 drop-shadow-md tracking-wide">Sarah</span>
</div>

<div className="absolute bottom-1/3 right-1/4 flex flex-col items-center transform transition-transform duration-500 hover:scale-110 cursor-pointer" onclick="openChat('Mike', 'sleeping')">
<div className="relative">
<div className="w-12 h-12 rounded-full border-2 border-teal-400 p-0.5 bg-black/50 backdrop-blur-md overflow-hidden">
<img alt="Mike" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div className="absolute -top-2 -right-2 bg-white text-black text-[10px] px-1.5 py-0.5 rounded-full shadow-lg font-medium flex items-center gap-1">
<span>😴</span>
</div>
</div>
<span className="mt-2 text-xs font-medium text-white/90 drop-shadow-md tracking-wide">Mike</span>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="w-16 h-16 rounded-full border-2 border-white/80 p-1 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">

<img alt="Me" className="w-full h-full rounded-full object-cover" src="https://media.licdn.com/dms/image/D5612AQE2_w7yio6dOQ/article-cover_image-shrink_720_1280/0/1684639948011?e=2147483647&amp;v=beta&amp;t=H3-w2_qD9l4e0s2t3r_u5v6w7x8y9z0"/>
</div>
<div className="mt-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium text-white/90">You</span>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full p-4 pt-12 flex justify-between items-start z-30 pointer-events-none">
<div className="pointer-events-auto bg-black/20 backdrop-blur-xl border border-white/10 rounded-full p-2.5 text-white/80 hover:bg-white/10 transition-colors cursor-pointer" onclick="toggleScreen('profile')">
<i className="w-6 h-6" data-lucide="user-circle"></i>
</div>
<div className="pointer-events-auto flex gap-3">
<div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 text-white/80 flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="text-xs font-medium">Search</span>
</div>
<div className="hidden bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-full p-2.5 text-indigo-200 animate-pulse" id="ghost-indicator">
<i className="w-6 h-6" data-lucide="ghost"></i>
</div>
</div>
</div>
</main>

<div className="hidden flex-1 bg-black/40 backdrop-blur-xl flex-col p-6 pt-20 animate-[fadeIn_0.3s_ease-out]" id="screen-chat">
<h1 className="text-2xl font-semibold tracking-tight mb-1 text-white">Messages</h1>
<p className="text-white/40 text-xs mb-8 font-medium">3 friends nearby</p>
<div className="space-y-4 overflow-y-auto no-scrollbar pb-24">

<div className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition-all cursor-pointer" onclick="openChat('Sarah', 'walking')">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/50" src="https://i.pravatar.cc/150?img=32"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#131316]"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="font-medium text-white/90">Sarah</h3>
<span className="text-[10px] text-white/40">2m ago</span>
</div>
<p className="text-xs text-white/50 truncate font-light">Where are we meeting for coffee?</p>
</div>
</div>

<div className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition-all cursor-pointer" onclick="openChat('Mike', 'sleeping')">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover grayscale opacity-70" src="https://i.pravatar.cc/150?img=11"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-indigo-500 rounded-full border-2 border-[#131316]"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="font-medium text-white/90">Mike</h3>
<span className="text-[10px] text-white/40">1h ago</span>
</div>
<p className="text-xs text-white/50 truncate font-light">I'm taking a nap, buzz me later.</p>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 bg-[#0f0f12] flex-col overflow-y-auto no-scrollbar relative" id="screen-profile">

<div className="h-48 w-full bg-gradient-to-b from-blue-900/40 to-[#0f0f12] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
</div>
<div className="px-6 -mt-12 relative z-10 pb-32">
<div className="flex justify-between items-end">
<div className="w-24 h-24 rounded-full border-4 border-[#0f0f12] overflow-hidden bg-zinc-800">

<img className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/D5612AQE2_w7yio6dOQ/article-cover_image-shrink_720_1280/0/1684639948011?e=2147483647&amp;v=beta&amp;t=H3-w2_qD9l4e0s2t3r_u5v6w7x8y9z0"/>
</div>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 px-4 py-1.5 rounded-full text-xs font-medium transition-colors">Edit Profile</button>
</div>
<div className="mt-4">
<h1 className="text-2xl font-semibold tracking-tight text-white">Pepe Trader</h1>
<p className="text-white/40 text-xs font-light mt-1">@pepemoon • Wall Street, NY</p>
</div>

<div className="grid grid-cols-3 gap-3 mt-8">
<div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
<div className="text-xl font-light text-blue-300">242</div>
<div className="text-[10px] uppercase tracking-widest text-white/30 mt-1 font-medium">Stonks</div>
</div>
<div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
<div className="text-xl font-light text-green-300">12</div>
<div className="text-[10px] uppercase tracking-widest text-white/30 mt-1 font-medium">Gains</div>
</div>
<div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
<div className="text-xl font-light text-pink-300">85%</div>
<div className="text-[10px] uppercase tracking-widest text-white/30 mt-1 font-medium">Battery</div>
</div>
</div>

<div className="mt-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl p-5 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="bg-blue-500/20 p-2 rounded-full text-blue-300">
<i className="w-5 h-5" data-lucide="ghost"></i>
</div>
<div>
<h3 className="text-sm font-medium text-white/90">Ghost Mode</h3>
<p className="text-[10px] text-white/40 max-w-[150px] leading-tight mt-0.5">Freeze your location. Chat remains active.</p>
</div>
</div>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#0f0f12] appearance-none cursor-pointer transition-all duration-300 top-0 left-0" id="ghost-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-white/10 cursor-pointer border border-white/10 transition-colors duration-300" htmlFor="ghost-toggle"></label>
</div>
</div>
</div>
<div className="mt-6 space-y-2">
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
<span className="text-xs text-white/70 font-medium">Privacy Settings</span>
<i className="w-4 h-4 text-white/30" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
<span className="text-xs text-white/70 font-medium">Zen Places Journal</span>
<i className="w-4 h-4 text-white/30" data-lucide="lock"></i>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto">
<nav className="flex items-center gap-1 bg-white/10 backdrop-blur-2xl border border-white/10 px-2 py-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<button className="nav-btn w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-105" id="nav-map" onclick="toggleScreen('map')">
<i className="w-5 h-5 stroke-[2px]" data-lucide="map-pin"></i>
</button>
<button className="nav-btn w-12 h-12 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300" id="nav-chat" onclick="toggleScreen('chat')">
<i className="w-5 h-5 stroke-[1.5px]" data-lucide="message-circle"></i>
</button>
<button className="nav-btn w-12 h-12 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300" id="nav-profile" onclick="toggleScreen('profile')">
<i className="w-5 h-5 stroke-[1.5px]" data-lucide="user-circle"></i>
</button>
</nav>
</div>

<div className="absolute inset-0 z-[60] bg-[#0f0f12] transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col" id="chat-modal">

<div className="px-4 py-4 pt-12 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-md">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/70" onclick="closeChat()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="flex flex-col items-center">
<span className="text-sm font-medium text-white tracking-wide" id="chat-name">Friend</span>
<span className="text-[10px] text-white/40 flex items-center gap-1" id="chat-status">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active Now
                    </span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/70">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">
<div className="text-center text-[10px] text-white/20 my-4 uppercase tracking-widest">Today</div>

<div className="flex gap-3 items-end">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="bg-white/10 border border-white/5 rounded-2xl rounded-bl-none px-4 py-2 max-w-[70%]">
<p className="text-sm font-light text-white/90">Hey! Saw you're nearby.</p>
</div>
</div>

<div className="flex gap-3 items-end justify-end">
<div className="bg-blue-600/80 backdrop-blur-sm rounded-2xl rounded-br-none px-4 py-2 max-w-[70%] shadow-lg shadow-blue-900/20">
<p className="text-sm font-light text-white">Yeah just checking the markets. Want to join?</p>
</div>
</div>
</div>

<div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/5 mb-6">
<div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3">
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-white/30 flex-1 font-light" placeholder="Send a message..." type="text"/>
<button className="text-blue-400 hover:text-blue-300 transition-colors">
<i className="w-5 h-5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
