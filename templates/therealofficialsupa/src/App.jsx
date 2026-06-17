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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
glass: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
}
}
}
}



        // --- CONFIG & STATE ---
        let SYSTEM_PASS = "$UPA";
        const MASTER_KEY = "999,999";
        
        let stats = {
            timeOnline: 0, // seconds
            gamesPlayed: 0,
            favorites: []
        };

        const GAMES_DB = [
            { id: 'mc', title: 'Minecraft', cat: 'Sandbox', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbs4806QcKW1d_p3nKUDPe_F6ltDLeya_h_o5.png', url: 'https://eaglercraft.com/mc/1.8.8/', desc: 'The classic block-building sandbox game.', how: 'WASD to move, Space to jump, Mouse to look/mine.' },
            { id: 'fnaf1', title: 'FNAF 1', cat: 'Horror', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Five_Nights_at_Freddy%27s_poster.png/220px-Five_Nights_at_Freddy%27s_poster.png', url: 'https://scratch.mit.edu/projects/embed/173924376/?autostart=false', desc: 'Survive five nights at Freddy\'s.', how: 'Click lights and doors to survive.' },
            { id: '2048', title: '2048', cat: 'Puzzle', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png', url: 'https://play2048.co/', desc: 'Join the numbers and get to the 2048 tile.', how: 'Arrow keys to move tiles.' },
            { id: 'space', title: 'Spacebar Clicker', cat: 'Idle', img: 'https://play-lh.googleusercontent.com/s65cbfiO804qg0n9XySg32qH41h72gD7D8Xn473g870a4176140081014138138760', url: 'https://colorgalaxy.io/', desc: 'Click to win.', how: 'Press Spacebar.' },
            { id: 'slope', title: 'Slope', cat: 'Arcade', img: 'https://play-lh.googleusercontent.com/uKuS44J3d1bU7tE6xOqJv-jR1p55XzO9e7_Kz3L7d5v7g4o6q8z5w9x7r4t2y1u3i4o=w240-h480-rw', url: 'https://kbhgames.com/game/slope', desc: 'Roll down the slope.', how: 'AD or Arrows to steer.' },
            { id: 'subway', title: 'Subway Surfers', cat: 'Runner', img: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/0b8e734c20790479109786e680a68393.png', url: 'https://poki.com/en/g/subway-surfers', desc: 'Run from the inspector.', how: 'Arrows to move.' }
        ];

        const ARTISTS_DB = {
            'Lil Tecca': [
                { title: 'Ransom', len: '2:11' },
                { title: '500lbs', len: '2:24' },
                { title: 'HVN ON EARTH', len: '2:45' }
            ],
            'NLE Choppa': [
                { title: 'Walk Em Down', len: '2:53' },
                { title: 'Shotta Flow', len: '2:40' }
            ],
            'King Von': [
                { title: 'Took Her To The O', len: '3:16' },
                { title: 'Crazy Story', len: '2:26' }
            ],
            'BigXthaPlug': [
                { title: 'Texas', len: '2:30' },
                { title: 'Mmhmm', len: '2:15' }
            ]
        };

        // --- INIT ---
        window.onload = () => {
            renderGames();
            setInterval(updateStats, 1000);
            updateSystemAge();
            // Load saved stats
            if(localStorage.getItem('supa_stats')) {
                stats = JSON.parse(localStorage.getItem('supa_stats'));
                document.getElementById('games-count').innerText = stats.gamesPlayed;
            }
        };

        // --- AUTHENTICATION ---
        const passInput = document.getElementById('password-input');
        passInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                const val = passInput.value;
                const status = document.getElementById('status-message');
                status.style.opacity = '1';
                
                if(val === SYSTEM_PASS) {
                    status.innerText = "ACCESS GRANTED";
                    status.className = "h-6 text-center text-xs font-mono font-medium tracking-widest text-emerald-500";
                    setTimeout(() => {
                        document.getElementById('login-overlay').style.opacity = '0';
                        document.getElementById('login-overlay').style.pointerEvents = 'none';
                        document.getElementById('main-app').classList.remove('hidden-sys');
                        setTimeout(() => document.getElementById('main-app').style.opacity = '1', 100);
                    }, 800);
                } else if (val === MASTER_KEY) {
                    status.innerText = "MASTER KEY RECOGNIZED";
                    status.className = "h-6 text-center text-xs font-mono font-medium tracking-widest text-red-500 animate-pulse";
                    setTimeout(() => {
                        document.getElementById('reset-modal').classList.remove('hidden');
                        document.getElementById('reset-modal').classList.add('flex');
                    }, 800);
                } else {
                    status.innerText = "ACCESS DENIED";
                    status.className = "h-6 text-center text-xs font-mono font-medium tracking-widest text-red-500";
                    passInput.value = '';
                    passInput.classList.add('border-red-500');
                    setTimeout(() => passInput.classList.remove('border-red-500'), 500);
                }
            }
        });

        function saveNewPass() {
            const val = document.getElementById('new-pass-val').value;
            if(val) {
                SYSTEM_PASS = val;
                document.getElementById('reset-modal').classList.remove('flex');
                document.getElementById('reset-modal').classList.add('hidden');
                passInput.value = '';
                document.getElementById('status-message').innerText = "SYSTEM UPDATED. LOGIN.";
                document.getElementById('status-message').className = "h-6 text-center text-xs font-mono font-medium tracking-widest text-blue-400";
            }
        }

        // --- NAVIGATION ---
        function switchTab(tab) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden-sys'));
            
            // Show selected
            document.getElementById(`view-${tab}`).classList.remove('hidden-sys');
            
            // Highlight nav
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-white/10', 'text-white'));
            // (Simple loop logic, in real app match IDs)
        }

        // --- GAMES SYSTEM ---
        function renderGames() {
            const grid = document.getElementById('games-grid');
            grid.innerHTML = '';
            GAMES_DB.forEach(game => {
                const el = document.createElement('div');
                el.className = 'group relative h-40 rounded-xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer hover:border-white/30 transition-all hover:-translate-y-1';
                el.onclick = () => launchGame(game);
                el.innerHTML = `
                    <img src="${game.img}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="font-semibold text-white tracking-tight">${game.title}</h3>
                        <p class="text-[10px] text-zinc-400 uppercase tracking-wider">${game.cat}</p>
                    </div>
                `;
                grid.appendChild(el);
            });
        }

        let currentGame = null;

        function launchGame(game) {
            currentGame = game;
            stats.gamesPlayed++;
            document.getElementById('games-count').innerText = stats.gamesPlayed;
            
            document.getElementById('view-games').classList.add('hidden-sys');
            const player = document.getElementById('view-game-player');
            player.classList.remove('hidden-sys');
            
            document.getElementById('active-game-title').innerText = game.title;
            document.getElementById('game-desc').innerText = game.desc;
            document.getElementById('game-instructions').innerText = game.how;
            document.getElementById('game-iframe').src = game.url;

            // Check fav
            const favBtn = document.getElementById('fav-btn');
            if(stats.favorites.includes(game.id)) {
                favBtn.innerHTML = '<iconify-icon icon="solar:heart-bold" class="text-red-500"></iconify-icon>';
            } else {
                favBtn.innerHTML = '<iconify-icon icon="solar:heart-linear"></iconify-icon>';
            }
        }

        function closeGame() {
            document.getElementById('view-game-player').classList.add('hidden-sys');
            document.getElementById('view-games').classList.remove('hidden-sys');
            document.getElementById('game-iframe').src = '';
            currentGame = null;
        }

        function toggleFullscreen() {
            const player = document.getElementById('view-game-player');
            if(!document.fullscreenElement) {
                player.requestFullscreen().catch(err => {
                    // Fallback to css fullscreen
                    player.classList.add('game-fullscreen');
                });
            } else {
                document.exitFullscreen();
            }
        }

        function toggleFav() {
            if(!currentGame) return;
            const idx = stats.favorites.indexOf(currentGame.id);
            const btn = document.getElementById('fav-btn');
            
            if(idx > -1) {
                stats.favorites.splice(idx, 1);
                btn.innerHTML = '<iconify-icon icon="solar:heart-linear"></iconify-icon>';
            } else {
                stats.favorites.push(currentGame.id);
                btn.innerHTML = '<iconify-icon icon="solar:heart-bold" class="text-red-500"></iconify-icon>';
            }
            localStorage.setItem('supa_stats', JSON.stringify(stats));
        }

        // --- MUSIC SYSTEM ---
        let audio = document.getElementById('audio-player');
        let isPlaying = false;

        function loadArtist(name) {
            const tracks = ARTISTS_DB[name];
            const list = document.getElementById('track-list');
            document.getElementById('track-list-title').innerText = name + " - Top Tracks";
            list.innerHTML = '';
            
            tracks.forEach((track, i) => {
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors border border-transparent hover:border-white/5';
                div.onclick = () => playTrack(track.title, name, track.len);
                div.innerHTML = `
                    <div class="flex items-center gap-4">
                        <span class="text-xs text-zinc-500 font-mono w-4">${i+1}</span>
                        <div>
                            <div class="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">${track.title}</div>
                            <div class="text-xs text-zinc-500">${name}</div>
                        </div>
                    </div>
                    <span class="text-xs text-zinc-600 font-mono">${track.len}</span>
                `;
                list.appendChild(div);
            });
        }

        // Preload generic list
        loadArtist('Lil Tecca');

        function playTrack(title, artist, len) {
            // Mock playing
            document.getElementById('player-title').innerText = title;
            document.getElementById('player-artist').innerText = artist;
            document.getElementById('time-total').innerText = len;
            isPlaying = true;
            document.getElementById('play-icon').setAttribute('icon', 'solar:pause-bold');
            
            // Simulate progress
            let currentSec = 0;
            const parts = len.split(':');
            const totalSec = parseInt(parts[0])*60 + parseInt(parts[1]);
            
            // Clear existing interval
            if(window.musicInt) clearInterval(window.musicInt);
            
            window.musicInt = setInterval(() => {
                if(!isPlaying) return;
                currentSec++;
                if(currentSec >= totalSec) {
                    currentSec = 0;
                    isPlaying = false;
                    document.getElementById('play-icon').setAttribute('icon', 'solar:play-bold');
                }
                
                // Update UI
                const min = Math.floor(currentSec / 60);
                const sec = currentSec % 60;
                document.getElementById('time-current').innerText = `${min}:${sec < 10 ? '0'+sec : sec}`;
                document.getElementById('progress-bar').style.width = `${(currentSec/totalSec)*100}%`;
                
            }, 1000);
        }

        function togglePlay() {
            isPlaying = !isPlaying;
            document.getElementById('play-icon').setAttribute('icon', isPlaying ? 'solar:pause-bold' : 'solar:play-bold');
        }

        // --- YOUTUBE ---
        function loadYoutube() {
            const input = document.getElementById('yt-input').value;
            let id = "jfKfPfyJRdk"; // Default Lofi
            if(input.includes('v=')) {
                id = input.split('v=')[1].split('&')[0];
            } else if (input.length > 5) {
                id = input;
            }
            document.getElementById('yt-frame').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
        }

        // --- CHAT ---
        function sendMessage() {
            const input = document.getElementById('chat-input');
            const msg = input.value;
            if(!msg) return;
            
            const history = document.getElementById('chat-history');
            
            // User Msg
            const userDiv = document.createElement('div');
            userDiv.className = 'flex items-center justify-end gap-3';
            userDiv.innerHTML = `
                <div class="bg-blue-600 p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm text-white">
                    ${msg}
                </div>
            `;
            history.appendChild(userDiv);
            input.value = '';

            // Bot Reply (Mock)
            setTimeout(() => {
                const botDiv = document.createElement('div');
                botDiv.className = 'flex items-start gap-3 fade-in';
                const replies = ["System functioning within normal parameters.", "I cannot access external networks currently.", "Access granted.", "Please specify your query."];
                const reply = replies[Math.floor(Math.random()*replies.length)];
                
                botDiv.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500"><iconify-icon icon="solar:bot-linear"></iconify-icon></div>
                    <div class="bg-white/5 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm text-zinc-300 border border-white/5">
                        ${reply}
                    </div>
                `;
                history.appendChild(botDiv);
                history.scrollTop = history.scrollHeight;
            }, 600);
        }
        
        document.getElementById('chat-input').addEventListener('keyup', (e) => {
             if(e.key === 'Enter') sendMessage();
        });

        // --- UTILS & CLOAKING ---
        function updateStats() {
            stats.timeOnline++;
            const m = Math.floor(stats.timeOnline / 60);
            const s = stats.timeOnline % 60;
            document.getElementById('time-online').innerText = `${m}:${s < 10 ? '0'+s : s}`;
            localStorage.setItem('supa_stats', JSON.stringify(stats));
        }

        function updateSystemAge() {
            const start = new Date('2023-11-01');
            const now = new Date();
            const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
            document.getElementById('sys-age').innerText = `SYS AGE: ${diff} DAYS`;
        }

        function changeTheme(val) {
            document.body.className = `antialiased overflow-hidden h-screen w-screen selection:bg-white/20 transition-colors duration-500 theme-${val}`;
        }

        let cloaked = false;
        function toggleCloak() {
            cloaked = !cloaked;
            const btn = document.getElementById('cloak-btn');
            
            if(cloaked) {
                btn.innerText = "ON";
                btn.className = "text-[10px] border border-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-500";
                document.title = "Google Drive";
                // Change favicon
                let link = document.querySelector("link[rel~='icon']");
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.getElementsByTagName('head')[0].appendChild(link);
                }
                link.href = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
            } else {
                btn.innerText = "OFF";
                btn.className = "text-[10px] border border-white/20 px-2 py-0.5 rounded text-zinc-500 hover:text-white hover:border-white";
                document.title = "$UPA // SYSTEM ACCESS";
                // Reset Favicon (none provided in prompt, so just clear)
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
      

<div className="fixed flex flex-col transition-all duration-700 bg-zinc-950 z-[100] top-0 right-0 bottom-0 left-0 items-center justify-center" id="login-overlay">
<div className="w-full max-w-md p-8 rounded-2xl border backdrop-blur-xl shadow-2xl flex flex-col items-center gap-6 border-white/5 bg-zinc-900/50">
<div className="h-16 w-16 rounded-full flex items-center justify-center border shadow-inner bg-white/5 border-white/10">
<iconify-icon className="text-white/70" icon="solar:lock-keyhole-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="text-center space-y-2">
<h1 className="text-2xl font-semibold tracking-tight text-white">$UPA SYSTEM</h1>
<p className="text-zinc-500 text-xs tracking-wide">AUTHENTICATION REQUIRED</p>
</div>
<div className="w-full space-y-4">
<input className="focus:outline-none focus:border-white/30 transition-colors uppercase text-white tracking-[0.3em] font-mono text-center bg-black/40 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 shadow-inner placeholder-zinc-700 text-sm" id="password-input" placeholder="ENTER KEY" type="password"/>
<div className="h-6 text-center text-xs font-mono font-medium tracking-widest opacity-0 transition-opacity duration-300 text-zinc-500" id="status-message">
                    CONNECTING...
                </div>
</div>
<div className="flex gap-4 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
<span>V.4.0.2</span>
<span>SECURE</span>
</div>
</div>
</div>

<div className="hidden-sys h-full flex flex-col transition-opacity duration-1000 opacity-0 relative" id="main-app">
<div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none z-0 bg-gradient-to-br from-black/40 to-transparent"></div>
<div className="relative z-10 flex h-full">

<aside className="w-64 border-r backdrop-blur-md flex flex-col justify-between p-4 border-white/5 bg-black/40">
<div className="space-y-6">

<div className="px-2 py-2 flex items-center justify-between">
<span className="text-xl font-bold tracking-tighter text-white font-mono">$UPA</span>
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>

<nav className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group hover:text-white hover:bg-white/5 text-zinc-400 text-sm" onclick="switchTab('games')">
<iconify-icon icon="solar:gamepad-linear" width="18"></iconify-icon>
<span className="font-medium">Games</span>
</button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group hover:text-white hover:bg-white/5 text-zinc-400 text-sm" onclick="switchTab('music')">
<iconify-icon icon="solar:music-library-linear" width="18"></iconify-icon>
<span className="font-medium">Music</span>
</button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group hover:text-white hover:bg-white/5 text-zinc-400 text-sm" onclick="switchTab('youtube')">
<iconify-icon icon="solar:play-stream-linear" width="18"></iconify-icon>
<span className="font-medium">YouTube</span>
</button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group hover:text-white hover:bg-white/5 text-zinc-400 text-sm" onclick="switchTab('chat')">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
<span className="font-medium">AI Chat</span>
</button>
<a className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group hover:text-white hover:bg-white/5 text-zinc-400 text-sm" href="https://github.com" target="_blank">
<iconify-icon icon="solar:cloud-upload-linear" width="18"></iconify-icon>
<span className="font-medium">Backups</span>
</a>
</nav>

<div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-3">
<h3 className="text-[10px] uppercase tracking-wider font-mono text-zinc-500">Session Stats</h3>
<div className="space-y-1">
<div className="flex justify-between text-xs text-zinc-400">
<span>Time Online</span>
<span className="text-white font-mono" id="time-online">00:00</span>
</div>
<div className="flex justify-between text-xs text-zinc-400">
<span>Games Played</span>
<span className="text-white font-mono" id="games-count">0</span>
</div>
</div>
</div>
</div>

<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex items-center justify-between px-2">
<span className="text-xs text-zinc-400">Cloaking</span>
<button className="text-[10px] border border-white/20 px-2 py-0.5 rounded text-zinc-500 hover:text-white hover:border-white" id="cloak-btn" onclick="toggleCloak()">OFF</button>
</div>
<select className="w-full text-xs bg-black/40 border border-white/10 rounded p-1.5 text-zinc-400 outline-none" id="theme-select" onchange="changeTheme(this.value)">
<option value="default">Abyss (Default)</option>
<option value="vampire">Vampire</option>
<option value="matrix">Matrix</option>
<option value="snow">Snow</option>
</select>
<div className="text-[10px] text-center text-zinc-600 font-mono" id="sys-age">SYS AGE: CALCULATING...</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-black/20">

<div className="view-section absolute inset-0 overflow-y-auto p-8 scroll-smooth" id="view-games">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white">Local Library</h2>
<div className="relative">
<input className="bg-white/5 border border-white/10 rounded-full py-1.5 px-4 text-xs w-48 focus:w-64 transition-all outline-none text-white focus:border-white/20" placeholder="Search..." type="text"/>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24" id="games-grid">

</div>
</div>

<div className="view-section hidden-sys absolute inset-0 bg-zinc-950 flex flex-col" id="view-game-player">
<div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-black/40 backdrop-blur">
<button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white" onclick="closeGame()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                        </button>
<span className="text-sm font-semibold text-white" id="active-game-title">Game Title</span>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 transition-colors" id="fav-btn" onclick="toggleFav()">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 transition-colors" onclick="toggleFullscreen()">
<iconify-icon icon="solar:full-screen-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 relative flex">
<div className="flex-1 bg-black relative flex items-center justify-center">
<iframe allowfullscreen="" className="w-full h-full border-none" id="game-iframe"></iframe>
</div>
<div className="w-64 border-l border-white/5 bg-zinc-900/50 p-4 space-y-4 overflow-y-auto hidden md:block">
<h3 className="text-sm font-semibold text-white">How to Play</h3>
<p className="text-xs text-zinc-400 leading-relaxed" id="game-instructions">WASD to move.</p>
<div className="h-px bg-white/5"></div>
<h3 className="text-sm font-semibold text-white">Description</h3>
<p className="text-xs text-zinc-400 leading-relaxed" id="game-desc">...</p>
</div>
</div>
</div>

<div className="view-section hidden-sys absolute inset-0 flex flex-col pb-20" id="view-music">
<div className="flex-1 overflow-y-auto p-8">
<h2 className="text-xl font-bold tracking-tight text-white mb-6">Artists</h2>

<div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
<div className="flex flex-col items-center gap-3 cursor-pointer group min-w-[100px]" onclick="loadArtist('Lil Tecca')">
<img className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform shadow-lg border-2 border-transparent group-hover:border-white/20" src="https://i.scdn.co/image/ab67616100005174092b67f16a04eb086ac34481"/>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">Lil Tecca</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group min-w-[100px]" onclick="loadArtist('NLE Choppa')">
<img className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform shadow-lg border-2 border-transparent group-hover:border-white/20" src="https://i.scdn.co/image/ab6761610000517454274c2df22c5344337b5120"/>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">NLE Choppa</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group min-w-[100px]" onclick="loadArtist('King Von')">
<img className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform shadow-lg border-2 border-transparent group-hover:border-white/20" src="https://i.scdn.co/image/ab67616100005174d8162238381df499c851726a"/>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">King Von</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group min-w-[100px]" onclick="loadArtist('BigXthaPlug')">
<img className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform shadow-lg border-2 border-transparent group-hover:border-white/20" src="https://i.scdn.co/image/ab67616100005174e5055b8988627b0b30283f6d"/>
<span className="text-xs font-medium text-zinc-300 group-hover:text-white">BigXthaPlug</span>
</div>
</div>

<h2 className="text-lg font-semibold tracking-tight text-white mb-4 mt-4" id="track-list-title">All Tracks</h2>
<div className="space-y-1" id="track-list">

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-black/60 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-6 z-40">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-500" icon="solar:music-note-linear"></iconify-icon>
</div>
<div className="overflow-hidden">
<div className="text-sm font-medium text-white truncate" id="player-title">Not Playing</div>
<div className="text-xs text-zinc-500 truncate" id="player-artist">-</div>
</div>
</div>
<div className="flex flex-col items-center w-1/3 gap-1">
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white"><iconify-icon icon="solar:skip-previous-linear" width="20"></iconify-icon></button>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform" onclick="togglePlay()">
<iconify-icon icon="solar:play-bold" id="play-icon" width="16"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white"><iconify-icon icon="solar:skip-next-linear" width="20"></iconify-icon></button>
</div>
<div className="w-full flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
<span id="time-current">0:00</span>
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-0" id="progress-bar"></div>
</div>
<span id="time-total">0:00</span>
</div>
</div>
<div className="flex items-center justify-end gap-2 w-1/3">
<iconify-icon className="text-zinc-400" icon="solar:volume-loud-linear" width="16"></iconify-icon>
<input className="w-20 h-1 accent-white bg-white/10 rounded-lg appearance-none cursor-pointer" id="volume-slider" max="100" min="0" type="range" value="80"/>
</div>
</div>
</div>

<div className="view-section hidden-sys absolute inset-0 p-8 flex flex-col" id="view-youtube">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-6">System Stream</h2>
<div className="flex gap-2 mb-6">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-white/30 outline-none" id="yt-input" placeholder="Paste YouTube ID or Search..." type="text"/>
<button className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg text-sm font-medium transition-colors" onclick="loadYoutube()">Load</button>
</div>
<div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-black">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" id="yt-frame" src="https://www.youtube.com/embed/jfKfPfyJRdk"></iframe>
</div>
</div>

<div className="view-section hidden-sys absolute inset-0 flex flex-col" id="view-chat">
<div className="p-6 border-b border-white/5 bg-black/20">
<h2 className="text-lg font-semibold text-white">AI Assistant</h2>
<p className="text-xs text-zinc-500">Model: GPT-Unknown</p>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4" id="chat-history">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500"><iconify-icon icon="solar:bot-linear"></iconify-icon></div>
<div className="bg-white/5 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm text-zinc-300 border border-white/5">
                                Hello. I am the $UPA system AI. How can I assist you today?
                            </div>
</div>
</div>
<div className="p-4 bg-black/40 border-t border-white/5">
<div className="relative">
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-white/20" id="chat-input" placeholder="Message..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors" onclick="sendMessage()">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</main>
</div>
</div>

<audio id="audio-player"></audio>

<div className="hidden fixed inset-0 z-[110] backdrop-blur-md items-center justify-center bg-black/80" id="reset-modal">
<div className="bg-zinc-900 border border-red-500/30 p-8 rounded-xl w-96 space-y-4 shadow-2xl shadow-red-900/20">
<div className="flex items-center gap-2 text-red-500 mb-2">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="font-bold tracking-widest text-sm uppercase">Override Protocol</h3>
</div>
<p className="text-xs text-zinc-400">Master key accepted. Enter new system password.</p>
<input className="w-full bg-black border border-red-900/50 rounded p-3 text-white focus:outline-none focus:border-red-500 text-sm font-mono tracking-widest text-center" id="new-pass-val" placeholder="NEW PASSWORD" type="text"/>
<div className="grid grid-cols-2 gap-3">
<button className="py-2 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-wide transition-colors" onclick="saveNewPass()">OVERWRITE</button>
<button className="py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-bold tracking-wide transition-colors" onclick="document.getElementById('reset-modal').classList.add('hidden')">ABORT</button>
</div>
</div>
</div>


    </>
  );
}
