import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Authentication & Database variables
            let db;
            let currentUser = null;
            let isLoginMode = true;
            let playlist = [];
            let currentlyPlayingUrl = null;

            // DOM Elements
            const authView = document.getElementById('auth-view');
            const appView = document.getElementById('app-view');
            const authForm = document.getElementById('auth-form');
            const authTitle = document.getElementById('auth-title');
            const authSubtitle = document.getElementById('auth-subtitle');
            const authSubmitBtn = document.getElementById('auth-submit');
            const authToggleBtn = document.getElementById('auth-toggle');
            const authError = document.getElementById('auth-error');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const logoutBtn = document.getElementById('logout-btn');

            const fileInput = document.getElementById('file-upload');
            const playlistEl = document.getElementById('playlist');
            const emptyMsg = document.getElementById('empty-playlist-msg');
            const videoCount = document.getElementById('video-count');
            const playerEmptyState = document.getElementById('player-empty-state');
            const videoContainer = document.getElementById('video-container');
            const mainPlayer = document.getElementById('main-player');
            const nowPlayingTitle = document.getElementById('now-playing-title');
            const dropZone = document.getElementById('drop-zone');
            
            const sidebar = document.getElementById('sidebar');
            const openSidebarBtn = document.getElementById('open-sidebar');
            const closeSidebarBtn = document.getElementById('close-sidebar');
            const sidebarOverlay = document.getElementById('sidebar-overlay');

            // Initialize IndexedDB
            const initDB = () => {
                return new Promise((resolve, reject) => {
                    const request = indexedDB.open('VXPlayerDB', 1);
                    request.onerror = () => reject(request.error);
                    request.onsuccess = () => { db = request.result; resolve(); };
                    request.onupgradeneeded = (e) => {
                        db = e.target.result;
                        if (!db.objectStoreNames.contains('videos')) {
                            const store = db.createObjectStore('videos', { keyPath: 'id' });
                            store.createIndex('username', 'username', { unique: false });
                        }
                    };
                });
            };

            // Database Init and Boot
            initDB().then(() => {
                currentUser = localStorage.getItem('vx_currentUser');
                if (currentUser) {
                    // Fix: Set to true to automatically load saved videos on refresh/re-open
                    login(currentUser, true);
                } else {
                    showAuth();
                }
            }).catch(err => {
                console.error("IndexedDB init failed", err);
                showAuth(); 
            });

            // Authentication Logic
            function showAuth() {
                appView.classList.add('hidden');
                appView.classList.remove('flex');
                authView.classList.remove('hidden');
                authView.classList.add('flex');
            }

            function login(username, shouldLoadVideos = true) {
                currentUser = username;
                localStorage.setItem('vx_currentUser', username);
                
                authView.classList.add('hidden');
                authView.classList.remove('flex');
                appView.classList.remove('hidden');
                appView.classList.add('flex');
                
                if (shouldLoadVideos) loadUserVideos(username);
            }

            function loadUserVideos(username) {
                if (!db) return;
                const tx = db.transaction('videos', 'readonly');
                const store = tx.objectStore('videos');
                const index = store.index('username');
                const request = index.getAll(username);
                
                request.onsuccess = () => {
                    const files = request.result;
                    // Robust loading in case a file object was interrupted
                    playlist = files.map(f => {
                        try {
                            f.url = URL.createObjectURL(f.file);
                        } catch(e) {
                            console.error("Could not restore file from database:", e);
                            f.url = null;
                        }
                        return f;
                    }).filter(f => f.url !== null);
                    
                    updatePlaylistUI();
                };
            }

            authToggleBtn.addEventListener('click', () => {
                isLoginMode = !isLoginMode;
                authError.classList.add('hidden');
                usernameInput.value = '';
                passwordInput.value = '';
                
                if (isLoginMode) {
                    authTitle.textContent = 'Sign in to your account';
                    authSubtitle.textContent = 'Enter your details to access your library';
                    authSubmitBtn.textContent = 'Sign In';
                    authToggleBtn.textContent = "Don't have an account? Sign up";
                } else {
                    authTitle.textContent = 'Create an account';
                    authSubtitle.textContent = 'Sign up to start saving your media library';
                    authSubmitBtn.textContent = 'Sign Up';
                    authToggleBtn.textContent = "Already have an account? Sign in";
                }
            });

            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                authError.classList.add('hidden');
                const user = usernameInput.value.trim();
                const pass = passwordInput.value;
                
                let users = JSON.parse(localStorage.getItem('vx_users') || '{}');
                
                if (isLoginMode) {
                    if (users[user] && users[user] === pass) {
                        login(user);
                    } else {
                        authError.textContent = 'Invalid username or password';
                        authError.classList.remove('hidden');
                    }
                } else {
                    if (users[user]) {
                        authError.textContent = 'Username already exists';
                        authError.classList.remove('hidden');
                    } else {
                        users[user] = pass;
                        localStorage.setItem('vx_users', JSON.stringify(users));
                        login(user, false); 
                    }
                }
            });

            logoutBtn.addEventListener('click', () => {
                playlist.forEach(item => URL.revokeObjectURL(item.url));
                playlist = [];
                updatePlaylistUI();
                
                currentlyPlayingUrl = null;
                mainPlayer.src = '';
                playerEmptyState.style.display = 'flex';
                videoContainer.classList.add('hidden');
                
                localStorage.removeItem('vx_currentUser');
                currentUser = null;
                usernameInput.value = '';
                passwordInput.value = '';
                
                showAuth();
            });

            // Application Logic
            function toggleSidebar() {
                const isOpen = !sidebar.classList.contains('-translate-x-full');
                if (isOpen) {
                    sidebar.classList.add('-translate-x-full');
                    sidebarOverlay.classList.add('hidden');
                } else {
                    sidebar.classList.remove('-translate-x-full');
                    sidebarOverlay.classList.remove('hidden');
                }
            }

            openSidebarBtn.addEventListener('click', toggleSidebar);
            closeSidebarBtn.addEventListener('click', toggleSidebar);
            sidebarOverlay.addEventListener('click', toggleSidebar);

            fileInput.addEventListener('change', (e) => {
                handleFiles(e.target.files);
                fileInput.value = ''; 
            });

            function handleFiles(filesList) {
                const files = Array.from(filesList).filter(file => file.type.startsWith('video/') || file.name.endsWith('.mkv'));
                if (files.length === 0) return;

                const initialLength = playlist.length;

                files.forEach(file => {
                    const videoData = {
                        id: Math.random().toString(36).substr(2, 9),
                        username: currentUser,
                        name: file.name,
                        type: file.type || file.name.split('.').pop().toUpperCase(),
                        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
                        file: file
                    };

                    if (db) {
                        const tx = db.transaction('videos', 'readwrite');
                        tx.objectStore('videos').put(videoData);
                    }

                    videoData.url = URL.createObjectURL(file);
                    playlist.push(videoData);
                });

                updatePlaylistUI();

                if (initialLength === 0 && playlist.length > 0) {
                    playVideo(playlist[0]);
                }
            }

            function updatePlaylistUI() {
                playlistEl.innerHTML = '';
                videoCount.textContent = playlist.length;

                if (playlist.length > 0) {
                    emptyMsg.style.display = 'none';
                } else {
                    emptyMsg.style.display = 'block';
                }

                playlist.forEach((item) => {
                    const li = document.createElement('li');
                    const isPlaying = currentlyPlayingUrl === item.url;
                    
                    li.className = `flex flex-col gap-1 p-2.5 rounded-xl cursor-pointer transition-all border ${isPlaying ? 'bg-zinc-800/60 border-zinc-700/50 shadow-sm' : 'bg-transparent border-transparent hover:bg-zinc-800/30 hover:border-zinc-800/30'} group`;
                    
                    li.innerHTML = `
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isPlaying ? 'bg-white text-black shadow-sm' : 'bg-zinc-900 border border-zinc-800/60 text-zinc-500 group-hover:text-zinc-300 group-hover:bg-zinc-800'}">
                                <iconify-icon icon="${isPlaying ? 'solar:play-bold' : 'solar:video-frame-linear'}" class="text-sm"></iconify-icon>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium truncate tracking-tight ${isPlaying ? 'text-zinc-100' : 'text-zinc-400 group-hover:text-zinc-200'} transition-colors">${item.name}</p>
                                <p class="text-xs text-zinc-600 truncate mt-0.5">${item.size} • ${item.type}</p>
                            </div>
                        </div>
                    `;
                    
                    li.onclick = () => {
                        playVideo(item);
                        if (window.innerWidth < 768) toggleSidebar();
                    };
                    
                    playlistEl.appendChild(li);
                });
            }

            function playVideo(item) {
                currentlyPlayingUrl = item.url;
                
                playerEmptyState.style.display = 'none';
                videoContainer.classList.remove('hidden');
                nowPlayingTitle.textContent = item.name;
                
                mainPlayer.src = item.url;
                mainPlayer.play().catch(e => console.error("Playback failed:", e));
                
                updatePlaylistUI();
            }
            
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, preventDefaults, false);
            });

            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                dropZone.addEventListener(eventName, highlight, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, unhighlight, false);
            });

            function highlight(e) {
                dropZone.classList.add('bg-zinc-900/50');
            }

            function unhighlight(e) {
                dropZone.classList.remove('bg-zinc-900/50');
            }

            dropZone.addEventListener('drop', handleDrop, false);

            function handleDrop(e) {
                let dt = e.dataTransfer;
                let files = dt.files;
                handleFiles(files);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden h-full w-full flex-col items-center justify-center p-4 relative z-50" id="auth-view">
<div className="w-full max-w-[360px] bg-[#09090b] border border-zinc-800/60 rounded-2xl p-6 shadow-2xl">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-tight text-xl mb-6 justify-center">
<div className="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center text-xs tracking-tighter font-semibold">VX</div>
                Player
            </div>
<h2 className="text-xl text-zinc-100 font-semibold tracking-tight text-center mb-1" id="auth-title">Sign in to your account</h2>
<p className="text-xs text-zinc-500 text-center mb-6" id="auth-subtitle">Enter your details to access your library</p>
<form className="space-y-4" id="auth-form">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Username</label>
<input className="w-full bg-[#09090b] border border-zinc-800/60 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="username" placeholder="johndoe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Password</label>
<input className="w-full bg-[#09090b] border border-zinc-800/60 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-white text-black rounded-lg py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors mt-2 shadow-[0_1px_2px_rgba(0,0,0,0.1)]" id="auth-submit" type="submit">Sign In</button>
</form>
<div className="hidden mt-4 text-xs text-red-400 text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20" id="auth-error"></div>
<div className="mt-5 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-medium" id="auth-toggle">Don't have an account? Sign up</button>
</div>
</div>
</div>

<div className="hidden h-full w-full flex" id="app-view">
<aside className="w-72 border-r border-zinc-800/60 bg-[#09090b] flex flex-col absolute inset-y-0 left-0 transform -translate-x-full z-40 transition-transform duration-300 ease-in-out md:relative md:translate-x-0" id="sidebar">
<div className="h-14 border-b border-zinc-800/60 flex items-center px-5 justify-between flex-shrink-0">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-tight text-lg">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-xs tracking-tighter font-semibold">VX</div>
                    Player
                </div>
<button className="md:hidden text-zinc-500 hover:text-zinc-100 transition-colors" id="close-sidebar">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="flex items-center justify-between mb-4 px-1">
<h2 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Library</h2>
<span className="text-xs text-zinc-500 font-medium px-2 py-0.5 bg-zinc-900 rounded-full border border-zinc-800/60" id="video-count">0</span>
</div>
<ul className="space-y-1" id="playlist">
</ul>
<div className="text-center py-10 px-4 text-xs text-zinc-500 border border-dashed border-zinc-800/60 rounded-xl mt-2 bg-zinc-900/20" id="empty-playlist-msg">
                    No videos loaded.<br/>Add files to build your playlist.
                </div>
</div>
<div className="p-4 border-t border-zinc-800/60 flex-shrink-0">
<label className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg text-sm font-medium transition-all cursor-pointer group shadow-[0_1px_2px_rgba(0,0,0,0.1)]" htmlFor="file-upload">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:folder-add-linear"></iconify-icon>
                    Add Files
                </label>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 relative">
<header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-4 bg-[#09090b]/80 backdrop-blur-md z-30">
<div className="flex items-center gap-3">
<button className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors flex items-center" id="open-sidebar">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="hidden md:flex items-center gap-2 text-xs text-zinc-500 font-medium">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Local playback only. Files remain securely on your device.</span>
</div>
</div>
<div className="flex items-center gap-2 md:gap-3">
<input accept="video/mp4,video/webm,video/x-matroska,.mkv" id="file-upload" multiple="" type="file"/>
<label className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800/50 hover:text-zinc-100 text-xs font-medium transition-colors cursor-pointer text-zinc-400" htmlFor="file-upload">
<iconify-icon className="text-sm" icon="solar:video-frame-linear"></iconify-icon>
                        Open Media
                     </label>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800/60 hover:bg-zinc-800/50 hover:text-zinc-100 text-xs font-medium transition-colors cursor-pointer text-zinc-400" id="logout-btn">
<iconify-icon className="text-sm" icon="solar:logout-2-linear"></iconify-icon>
<span className="hidden md:inline">Sign Out</span>
</button>
</div>
</header>
<div className="flex-1 bg-[#09090b] relative flex items-center justify-center p-0 md:p-6 lg:p-8 overflow-hidden group transition-colors duration-200" id="drop-zone">
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#09090b] pointer-events-none" id="player-empty-state">
<div className="w-20 h-20 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center mb-6 shadow-2xl relative">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-zinc-600" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h1 className="text-xl text-zinc-100 font-medium tracking-tight mb-2 pointer-events-auto">Drop video to play</h1>
<p className="text-sm text-zinc-500 max-w-sm text-center mb-8 pointer-events-auto">Support for MKV, WebM, and MP4. Watch directly in your browser with native performance.</p>
<label className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors cursor-pointer flex items-center gap-2 shadow-lg shadow-white/5 pointer-events-auto" htmlFor="file-upload">
                        Browse Computer
                    </label>
</div>
<div className="w-full h-full max-w-[1600px] flex flex-col hidden z-10 relative group/player" id="video-container">
<div className="absolute top-4 left-4 z-30 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 pointer-events-none">
<h3 className="text-xs font-medium text-zinc-200 truncate max-w-md tracking-tight" id="now-playing-title"></h3>
</div>
<video className="w-full h-full outline-none rounded-none md:rounded-xl bg-black object-contain ring-1 ring-white/5 shadow-2xl" controls="" id="main-player" playsinline="">
</video>
</div>
</div>
</main>
</div>
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 hidden transition-opacity md:hidden" id="sidebar-overlay"></div>


    </>
  );
}
