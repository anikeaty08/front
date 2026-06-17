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



        // --- Data & Configuration ---
        const PASSWORDS = {
            main: '72135',
            roles: {
                '428': 1,      // Rookie
                '1962': 2,     // Intermediate
                '53719': 3     // Admin
            }
        };

        const DIRECTORY = [
            // Level 1: Rookie
            { id: 'rocket', name: 'Rocket Goal', url: 'https://rocketgoal.io/', level: 1, icon: 'solar:rocket-linear' },
            { id: 'rumble', name: 'Rumble Rush', url: 'https://rumblerush.io/', level: 1, icon: 'solar:gamepad-minimalistic-linear' },
            { id: 'froggy', name: 'Froggy\'s Arcade', url: 'https://vallejocharterschool.org/', level: 1, icon: 'solar:ghost-smile-linear' },
            { id: 'music', name: 'Audio Node', url: 'https://listenfree.in/', level: 1, icon: 'solar:music-notes-linear' },
            
            // Level 2: Intermediate
            { id: 'uniub', name: 'Unihub', url: 'https://89-58-60-170.nip.io/#home', level: 2, icon: 'solar:hub-linear' },
            { id: 'mario', name: 'Mario', url: 'https://mariogames.io/', level: 2, icon: 'solar:crown-linear' },
            { id: 'sonic', name: 'Sonic', url: 'https://www.allsonicgames.net/', level: 2, icon: 'solar:bolt-linear' },
            { id: 'freegames', name: 'Free Games', url: 'https://www.freegames.com', level: 2, icon: 'solar:play-circle-linear' },
            
            // Level 3: Admin
            { id: 'vapor', name: 'Vapor', url: 'https://vcsaontop.bayworld.net/', level: 3, icon: 'solar:cloud-linear' },
            { id: 'us4', name: 'US4', url: 'https://voucan-us4.github.io/', level: 3, icon: 'solar:shield-network-linear' },
            { id: 'browsing', name: 'Secure Browse', url: 'https://wiki.jimmyqrg.com/', level: 3, icon: 'solar:global-linear' },
            { id: 'ixl', name: 'IXL Matrix', url: 'https://educational.learningeducation.cc/g.html', level: 3, icon: 'solar:calculator-linear' },
            { id: 'calc', name: 'Calc Solver', url: 'https://calcsolver.net/', level: 3, icon: 'solar:math-linear' },
            { id: 'freeze', name: 'FreezeNova', url: 'https://unblocked-games.s3.amazonaws.com/index.html', level: 3, icon: 'solar:snowflake-linear' },
            { id: 'retro', name: 'Retro Node', url: 'https://www.retrogames.cc/', level: 3, icon: 'solar:tv-linear' },
            { id: 'fg', name: 'fG Terminal', url: 'https://www.fanfreegames.com/', level: 3, icon: 'solar:server-linear' },
            { id: 'miniplay', name: 'Mini Play', url: 'https://www.miniplay.com/', level: 3, icon: 'solar:gamepad-linear' },
            { id: 'arcadespot', name: 'Arcade Spot', url: 'https://arcadespot.com', level: 3, icon: 'solar:target-linear' },
            { id: 'bgames', name: 'BG Games', url: 'https://www.bgames.com', level: 3, icon: 'solar:box-linear' },
            { id: 'rg', name: 'RG Hub', url: 'https://www.retrogames.cz', level: 3, icon: 'solar:history-linear' },
            { id: 'gamefrog', name: 'Game Frog', url: 'https://gamesfrog.com', level: 3, icon: 'solar:frog-linear' },
            { id: 'classic', name: 'Classic Arch', url: 'https://freebie.games', level: 3, icon: 'solar:archive-linear' },
            { id: 'titotou', name: 'Titotou', url: 'https://titotu.io', level: 3, icon: 'solar:star-linear' }
        ];

        let currentUserLevel = 0;
        let adblockActive = false;
        let searchQuery = '';

        // --- Initialization ---
        window.onload = () => {
            const hasMain = sessionStorage.getItem('fw8_main_auth');
            const roleLvl = sessionStorage.getItem('fw8_role_lvl');

            if (hasMain && roleLvl) {
                currentUserLevel = parseInt(roleLvl);
                showScreen('app');
                renderGrid();
            } else if (hasMain) {
                showScreen('role');
            } else {
                showScreen('main');
            }
        };

        // --- Authentication ---
        function checkMainPass() {
            const input = document.getElementById('mainPass').value;
            if (input === PASSWORDS.main) {
                sessionStorage.setItem('fw8_main_auth', 'true');
                showScreen('role');
            } else {
                showError('mainError');
                document.getElementById('mainPass').value = '';
            }
        }

        function checkRolePass() {
            const input = document.getElementById('rolePass').value;
            const level = PASSWORDS.roles[input];
            if (level) {
                currentUserLevel = level;
                sessionStorage.setItem('fw8_role_lvl', level);
                showScreen('app');
                renderGrid();
            } else {
                showError('roleError');
                document.getElementById('rolePass').value = '';
            }
        }

        function showError(id) {
            const el = document.getElementById(id);
            el.classList.remove('hidden');
            setTimeout(() => el.classList.add('hidden'), 3000);
        }

        function showScreen(screenId) {
            document.getElementById('screen-main').classList.add('hidden');
            document.getElementById('screen-role').classList.add('hidden');
            document.getElementById('screen-app').classList.add('hidden');
            document.getElementById(`screen-${screenId}`).classList.remove('hidden');
            if(screenId === 'main') document.getElementById('mainPass').focus();
            if(screenId === 'role') document.getElementById('rolePass').focus();
        }

        // --- Core UI Logic ---
        function handleSearch() {
            searchQuery = document.getElementById('searchInput').value.toLowerCase();
            renderGrid();
        }

        function renderGrid() {
            const container = document.getElementById('gridContainer');
            container.innerHTML = '';
            
            const allowed = DIRECTORY.filter(app => 
                app.level <= currentUserLevel && 
                app.name.toLowerCase().includes(searchQuery)
            );
            
            if (allowed.length === 0) {
                container.innerHTML = `
                    <div class="col-span-full flex flex-col items-center justify-center py-20 text-neutral-500">
                        <iconify-icon icon="solar:ghost-linear" class="text-4xl mb-4 opacity-50"></iconify-icon>
                        <p class="text-sm font-medium">No active nodes match your query.</p>
                    </div>
                `;
                return;
            }

            allowed.forEach((app, index) => {
                // Determine initials for the letter-based logo
                const words = app.name.split(' ');
                let initials = '';
                if (words.length > 1) {
                    initials = (words[0][0] + words[1][0]).toUpperCase();
                } else {
                    initials = app.name.substring(0, 2).toUpperCase();
                }

                const delay = Math.min(index * 30, 400); // cap delay for fast typing
                const card = document.createElement('div');
                card.className = `aspect-square shrink-0 glass-panel rounded-2xl flex flex-col group cursor-pointer hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 opacity-0 overflow-hidden`;
                card.style.animation = `fadeIn 0.4s ease-out ${delay}ms forwards`;
                
                const iconName = app.icon || 'solar:box-linear';

                card.innerHTML = `
                    <div class="flex-1 flex items-center justify-center relative bg-neutral-950 overflow-hidden group">
                        
                        <!-- Background Tech Grid -->
                        <div class="absolute inset-0 tech-grid opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        
                        <!-- Glow orb -->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 aspect-square bg-cyan-900/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500 z-10"></div>
                        
                        <!-- High-end letter logo container -->
                        <div class="relative z-20 flex items-center justify-center w-14 sm:w-16 aspect-square rounded-2xl border border-neutral-800/60 bg-neutral-900/50 backdrop-blur-md group-hover:border-cyan-500/40 transition-all duration-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.15)] group-hover:scale-105">
                            
                            <!-- Precision corners -->
                            <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-600/50 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                            <div class="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-600/50 group-hover:border-cyan-400/60 transition-colors duration-300"></div>
                            
                            <!-- The Letter Logo -->
                            <span class="text-2xl sm:text-3xl bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-600 bg-clip-text text-transparent tracking-tighter font-light select-none group-hover:from-white group-hover:via-cyan-100 group-hover:to-cyan-600 transition-all duration-500">
                                ${initials}
                            </span>
                        </div>
                        
                        <!-- Subtle background icon indicator -->
                        <iconify-icon icon="${iconName}" class="absolute bottom-3 right-3 text-neutral-800 text-xl z-20 group-hover:text-cyan-900/60 transition-colors duration-500"></iconify-icon>
                    </div>
                    
                    <div class="p-4 border-t border-neutral-900/80 bg-neutral-950/90 z-20 shrink-0">
                        <h3 class="text-neutral-300 font-normal tracking-tight text-sm mb-0.5 group-hover:text-cyan-400 transition-colors truncate">${app.name}</h3>
                        <div class="flex items-center gap-2 mt-1">
                            <div class="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-cyan-500 shadow-[0_0_5px_transparent] group-hover:shadow-cyan-500/50 transition-all duration-300"></div>
                            <p class="text-xs text-neutral-600 uppercase tracking-widest truncate font-normal">Lvl ${app.level} Node</p>
                        </div>
                    </div>
                `;
                
                card.onclick = () => openIframe(app.url);
                container.appendChild(card);
            });
        }

        function openIframe(url) {
            const iframe = document.getElementById('mainIframe');
            
            if (adblockActive) {
                iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-presentation');
            } else {
                iframe.removeAttribute('sandbox');
            }

            iframe.src = url;
            document.getElementById('appGrid').classList.add('hidden');
            document.getElementById('iframeContainer').classList.remove('hidden');
            document.getElementById('btnMenu').classList.remove('hidden');
        }

        function closeIframe() {
            document.getElementById('mainIframe').src = '';
            document.getElementById('iframeContainer').classList.add('hidden');
            document.getElementById('appGrid').classList.remove('hidden');
            document.getElementById('btnMenu').classList.add('hidden');
        }

        // --- Tools & Settings ---
        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        function toggleSettings() {
            const modal = document.getElementById('settingsModal');
            modal.classList.toggle('hidden');
        }

        function panic() {
            window.location.replace('https://classroom.google.com/');
        }

        function cloakSite() {
            document.title = "Classes";
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
            toggleSettings();
        }

        function toggleAdblock() {
            adblockActive = !adblockActive;
            const toggle = document.getElementById('adblockToggle');
            const icon = document.getElementById('adblockIcon');
            toggle.checked = adblockActive;
            
            if(adblockActive) {
                icon.classList.remove('text-neutral-500');
                icon.classList.add('text-cyan-400');
            } else {
                icon.classList.add('text-neutral-500');
                icon.classList.remove('text-cyan-400');
            }

            const iframe = document.getElementById('mainIframe');
            if(iframe.src && iframe.src !== window.location.href) {
                const currentSrc = iframe.src;
                iframe.src = '';
                setTimeout(() => openIframe(currentSrc), 50);
            }
        }

        // --- AI Chat Logic ---
        const botResponses = [
            "Data stream verified.",
            "I cannot override security protocols.",
            "Routing traffic through proxy nodes...",
            "System performance is optimal.",
            "Access logged.",
            "Please ensure you clear your cache frequently."
        ];

        function toggleChat() {
            const modal = document.getElementById('chatModal');
            modal.classList.toggle('hidden');
            if(!modal.classList.contains('hidden')) {
                document.getElementById('chatInput').focus();
            }
        }

        function sendChat() {
            const input = document.getElementById('chatInput');
            const text = input.value.trim();
            if (!text) return;

            addMessage(text, 'user');
            input.value = '';

            setTimeout(() => {
                const reply = botResponses[Math.floor(Math.random() * botResponses.length)];
                addMessage(reply, 'bot');
            }, 600 + Math.random() * 800);
        }

        function addMessage(text, sender) {
            const history = document.getElementById('chatHistory');
            const msgDiv = document.createElement('div');
            
            if (sender === 'user') {
                msgDiv.className = 'flex flex-col gap-1 max-w-[85%] self-end items-end';
                msgDiv.innerHTML = `
                    <span class="text-neutral-500 text-xs mr-1">You</span>
                    <div class="bg-cyan-950/40 text-cyan-100 px-3 py-2 rounded-lg rounded-tr-none border border-cyan-900/50">
                        ${text}
                    </div>
                `;
            } else {
                msgDiv.className = 'flex flex-col gap-1 max-w-[85%] self-start';
                msgDiv.innerHTML = `
                    <span class="text-neutral-500 text-xs ml-1">AI</span>
                    <div class="bg-neutral-900 text-neutral-300 px-3 py-2 rounded-lg rounded-tl-none border border-neutral-800">
                        ${text}
                    </div>
                `;
            }
            
            history.appendChild(msgDiv);
            history.scrollTop = history.scrollHeight;
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
      

<div className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-950" id="screen-main">
<div className="glass-panel p-8 rounded-xl flex flex-col items-center w-full max-w-sm animate-fade-in shadow-2xl shadow-black">
<h1 className="text-xl text-neutral-100 tracking-tighter mb-1 font-medium">F W 8 <span className="text-neutral-500">U L T R A</span></h1>
<p className="text-xs text-neutral-500 mb-8 tracking-wide uppercase">System Locked</p>
<div className="w-full relative mb-6">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-lg" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-4 text-neutral-200 outline-none transition-all input-glow text-sm" id="mainPass" onkeydown="if(event.key === 'Enter') checkMainPass()" placeholder="System key" type="password"/>
</div>
<button className="w-full bg-neutral-100 text-neutral-950 font-medium py-2 rounded-lg hover:bg-neutral-300 transition-colors text-sm" onclick="checkMainPass()">Initialize</button>
<p className="text-red-400 text-xs mt-3 hidden" id="mainError">Invalid sequence.</p>
</div>
</div>

<div className="absolute inset-0 z-40 hidden flex items-center justify-center bg-neutral-950" id="screen-role">
<div className="glass-panel p-8 rounded-xl flex flex-col items-center w-full max-w-sm animate-fade-in shadow-2xl shadow-black">
<iconify-icon className="text-3xl text-cyan-500 mb-3" icon="solar:shield-keyhole-linear"></iconify-icon>
<h2 className="text-lg text-neutral-100 tracking-tight mb-1 font-medium">Clearance Level</h2>
<p className="text-xs text-neutral-500 mb-8 text-center">Authenticate to establish connection routing.</p>
<div className="w-full relative mb-6">
<input className="w-full bg-transparent border-b border-neutral-700 py-2 text-center text-neutral-200 outline-none transition-all focus:border-cyan-500 text-lg tracking-widest" id="rolePass" onkeydown="if(event.key === 'Enter') checkRolePass()" placeholder="Clearance code" type="password"/>
</div>
<button className="text-xs text-neutral-400 hover:text-cyan-400 transition-colors uppercase tracking-widest font-medium" onclick="checkRolePass()">Verify</button>
<p className="text-red-400 text-xs mt-4 hidden" id="roleError">Access denied.</p>
</div>
</div>

<div className="absolute inset-0 z-10 hidden flex flex-col bg-neutral-950" id="screen-app">

<header className="h-14 border-b border-neutral-900 flex items-center justify-between px-6 shrink-0 glass-panel z-20 relative">
<div className="flex items-center gap-4">
<div className="text-neutral-100 tracking-tighter font-medium flex items-center gap-2 text-base">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:cpu-linear"></iconify-icon>
                    F W 8
                </div>
<div className="h-4 w-[1px] bg-neutral-800 mx-2"></div>
<button className="hidden text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1 transition-colors" id="btnMenu" onclick="closeIframe()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Return to Grid
                </button>
</div>
<div className="flex items-center gap-5">

<div className="flex items-center gap-2 group cursor-pointer" onclick="toggleAdblock()" title="Shield / Ad Blocker">
<iconify-icon className="text-neutral-500 text-lg group-hover:text-cyan-400 transition-colors" icon="solar:shield-check-linear" id="adblockIcon"></iconify-icon>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-neutral-200 border-4 appearance-none cursor-pointer border-neutral-700 transition-all duration-300 top-0 left-0 z-10" id="adblockToggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer transition-colors duration-300" htmlFor="adblockToggle"></label>
</input></div>
</div>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<button className="text-neutral-400 hover:text-cyan-400 transition-colors" onclick="toggleChat()" title="AI Assistant">
<iconify-icon className="text-xl" icon="solar:chat-square-code-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-neutral-200 transition-colors" onclick="toggleFullscreen()" title="Fullscreen">
<iconify-icon className="text-xl" icon="solar:maximize-square-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-neutral-200 transition-colors" onclick="toggleSettings()" title="Settings">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<button className="flex items-center gap-1.5 text-red-500/80 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-md transition-colors text-xs font-medium" onclick="panic()">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                    Panic
                </button>
</div>
</header>

<main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar px-6 md:px-12 py-8 relative" id="appGrid">

<div className="max-w-2xl mx-auto w-full mb-8 relative group shrink-0">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-lg group-focus-within:text-cyan-400 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-neutral-900/40 border border-neutral-800/80 rounded-xl py-3 pl-12 pr-4 text-neutral-200 outline-none transition-all focus:border-cyan-500/50 focus:bg-neutral-900 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-sm font-medium tracking-wide" id="searchInput" oninput="handleSearch()" placeholder="Search directory..." type="text"/>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-12 w-full max-w-7xl mx-auto" id="gridContainer">

</div>
</main>

<div className="flex-1 hidden bg-black relative" id="iframeContainer">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-xs tracking-widest z-0">
                ESTABLISHING CONNECTION...
            </div>
<iframe allow="fullscreen" className="w-full h-full border-none relative z-10 bg-transparent" id="mainIframe"></iframe>
</div>
</div>

<div className="absolute inset-0 z-50 hidden flex items-center justify-center bg-black/80 backdrop-blur-sm" id="settingsModal">
<div className="glass-panel p-6 rounded-xl w-full max-w-sm border border-neutral-800">
<div className="flex justify-between items-center mb-6">
<h3 className="text-neutral-100 font-medium tracking-tight text-base">Configuration</h3>
<button className="text-neutral-500 hover:text-neutral-300" onclick="toggleSettings()">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
<div className="flex items-center justify-between mb-2">
<span className="text-neutral-300 font-medium text-sm">Cloak Mode</span>
<iconify-icon className="text-neutral-500" icon="solar:ghost-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Disguise the active tab as Google Classroom to evade detection.</p>
<button className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 py-2 rounded border border-neutral-700 transition-colors text-xs font-medium" onclick="cloakSite()">
                        Activate Cloak
                    </button>
</div>
<div className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
<div className="flex items-center justify-between mb-2">
<span className="text-red-400 font-medium text-sm">Emergency Protocol</span>
</div>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Immediately redirect this environment to a safe learning portal.</p>
<button className="w-full bg-red-900/40 hover:bg-red-800/60 text-red-200 py-2 rounded border border-red-800/50 transition-colors text-xs font-medium" onclick="panic()">
                        Trigger Panic
                    </button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-80 h-96 z-50 hidden flex flex-col glass-panel rounded-xl border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300" id="chatModal">
<div className="bg-neutral-900/80 px-4 py-3 border-b border-neutral-800 flex justify-between items-center shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
<span className="text-neutral-200 font-medium text-xs tracking-tight">System AI</span>
</div>
<button className="text-neutral-500 hover:text-neutral-300" onclick="toggleChat()">
<iconify-icon className="text-lg" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-xs custom-scrollbar" id="chatHistory">
<div className="flex flex-col gap-1 max-w-[85%] self-start">
<span className="text-neutral-500 text-xs ml-1">AI</span>
<div className="bg-neutral-900 text-neutral-300 px-3 py-2 rounded-lg rounded-tl-none border border-neutral-800">
                    Terminal connected. How can I assist you in navigating the FW8 framework today?
                </div>
</div>
</div>
<div className="p-3 border-t border-neutral-800 bg-neutral-900/50 shrink-0">
<div className="relative">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-neutral-200 outline-none focus:border-cyan-500/50 transition-colors text-xs pr-8" id="chatInput" onkeydown="if(event.key === 'Enter') sendChat()" placeholder="Enter query..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-cyan-400 transition-colors" onclick="sendChat()">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
