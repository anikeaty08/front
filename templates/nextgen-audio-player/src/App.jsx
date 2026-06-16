import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
glass: {
100: 'rgba(255, 255, 255, 0.03)',
200: 'rgba(255, 255, 255, 0.05)',
300: 'rgba(255, 255, 255, 0.1)',
border: 'rgba(255, 255, 255, 0.08)',
}
},
screens: {
'xs': '375px',
},
animation: {
'wave': 'wave 1.2s ease-in-out infinite',
},
keyframes: {
wave: {
'0%, 100%': { height: '20%' },
'50%': { height: '100%' },
}
}
}
}
}



        // --- Initialization ---
        const API_KEY = "AIzaSyCUHLl0S2viwziElxYL1qAvFkBLkVT04oI";
        let player;
        let isPlaying = false;
        let currentVideoId = '';
        let searchTimeout;
        const visualizer = document.getElementById('visualizer');
        const glassPlayer = document.getElementById('glassPlayer');

        // --- Visualizer Generation ---
        function initVisualizer() {
            visualizer.innerHTML = '';
            for (let i = 0; i < 24; i++) {
                const bar = document.createElement('div');
                bar.className = 'wave-bar';
                bar.style.height = Math.floor(Math.random() * 60 + 20) + '%'; 
                bar.style.animationDuration = (0.8 + Math.random() * 0.5) + 's';
                bar.style.animationDelay = (Math.random() * -1) + 's';
                visualizer.appendChild(bar);
            }
        }
        initVisualizer();

        // --- YouTube API Integration ---
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player-container', {
                height: '0',
                width: '0',
                playerVars: { 'playsinline': 1, 'controls': 0, 'disablekb': 1, 'fs': 0 },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                    'onError': onPlayerError
                }
            });
        }

        function onPlayerReady(event) {
            searchMusic('Chill Synthwave Mix');
            setupProgressLoop();
        }

        function onPlayerError(event) {
            console.error("YouTube Player Error:", event.data);
            if(event.data === 150 || event.data === 101) {
                // Restricted video, skip
                nextTrack();
            }
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING) {
                isPlaying = true;
                updatePlayState(true);
            } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
                isPlaying = false;
                updatePlayState(false);
                if(event.data == YT.PlayerState.ENDED) {
                    // Auto play next logic could go here
                }
            }
        }

        // --- Playback Logic ---
        function updatePlayState(playing) {
            const playIcon = document.getElementById('playIcon');
            const mobilePlayIcon = document.getElementById('mobilePlayIcon');
            
            if (playing) {
                playIcon.setAttribute('icon', 'solar:pause-bold');
                playIcon.classList.remove('ml-1');
                
                mobilePlayIcon.setAttribute('icon', 'solar:pause-bold');
                mobilePlayIcon.classList.remove('ml-0.5');
                
                glassPlayer.classList.add('playing');
            } else {
                playIcon.setAttribute('icon', 'solar:play-bold');
                playIcon.classList.add('ml-1');
                
                mobilePlayIcon.setAttribute('icon', 'solar:play-bold');
                mobilePlayIcon.classList.add('ml-0.5');
                
                glassPlayer.classList.remove('playing');
            }
        }

        function togglePlay() {
            if (!player || !currentVideoId) return;
            isPlaying ? player.pauseVideo() : player.playVideo();
        }

        function loadTrack(videoId, title, channel, thumb) {
            currentVideoId = videoId;
            
            // Update UI with real data
            document.getElementById('currentTitle').textContent = title;
            document.getElementById('currentArtist').textContent = channel;
            
            // Try to get max resolution image
            const highResThumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
            const artImg = document.getElementById('currentArt');
            const mobileArt = document.getElementById('mobileArt');
            
            // Set source, fallback to provided thumb if error
            artImg.src = highResThumb;
            artImg.onerror = function() { this.src = thumb; };
            
            mobileArt.src = highResThumb;
            mobileArt.onerror = function() { this.src = thumb; };

            // Show player if hidden
            glassPlayer.classList.remove('translate-y-[150%]', 'opacity-0');
            
            if(player && player.loadVideoById) {
                player.loadVideoById(videoId);
                isPlaying = true;
            }
        }

        // --- Volume & Sliders ---
        function updateVolume(input) {
            const val = input.value;
            input.style.background = `linear-gradient(to right, white 0%, white ${val}%, rgba(255,255,255,0.15) ${val}%, rgba(255,255,255,0.15) 100%)`;
            
            if(player && player.setVolume) {
                player.setVolume(val);
            }
            
            const icon = document.getElementById('volIcon');
            if(val == 0) icon.setAttribute('icon', 'solar:volume-cross-linear');
            else if(val < 50) icon.setAttribute('icon', 'solar:volume-small-linear');
            else icon.setAttribute('icon', 'solar:volume-loud-linear');
        }
        
        document.querySelectorAll('input[type=range]').forEach(updateVolume);

        // --- Real YouTube Data API V3 Search ---
        async function searchMusic(query) {
            const resultsGrid = document.getElementById('resultsGrid');
            resultsGrid.innerHTML = `
                <div class="col-span-full flex justify-center py-10">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                </div>`;
            
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query)}&type=video&videoCategoryId=10&key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.error) {
                    console.error("API Error:", data.error);
                    resultsGrid.innerHTML = `<div class="col-span-full text-center text-rose-400">API Error: ${data.error.message}</div>`;
                    return;
                }

                resultsGrid.innerHTML = '';
                
                if(!data.items || data.items.length === 0) {
                     resultsGrid.innerHTML = `<div class="col-span-full text-center text-zinc-500">No results found.</div>`;
                     return;
                }

                data.items.forEach(item => {
                    const videoId = item.id.videoId;
                    const title = item.snippet.title;
                    const channel = item.snippet.channelTitle;
                    const thumb = item.snippet.thumbnails.high.url || item.snippet.thumbnails.medium.url;

                    const card = document.createElement('div');
                    card.className = "group relative p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer";
                    // Using onclick with escaped strings to handle quotes in titles
                    card.onclick = function() { loadTrack(videoId, title, channel, thumb); };

                    card.innerHTML = `
                        <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-zinc-800 shadow-lg">
                            <img src="${thumb}" alt="${title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <iconify-icon icon="solar:play-bold" width="24" class="ml-1"></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <h4 class="text-sm font-semibold text-white truncate pr-2">${title}</h4>
                        <p class="text-xs text-zinc-500 truncate mt-1">${channel}</p>
                    `;
                    resultsGrid.appendChild(card);
                });

            } catch (error) {
                console.error("Fetch error:", error);
                resultsGrid.innerHTML = `<div class="col-span-full text-center text-zinc-500">Failed to load music. Check connection.</div>`;
            }
        }

        document.getElementById('searchInput').addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if(e.target.value.length > 2) searchMusic(e.target.value);
            }, 800);
        });

        // --- Progress Loop ---
        function setupProgressLoop() {
            setInterval(() => {
                if (player && isPlaying && player.getCurrentTime) {
                    const current = player.getCurrentTime();
                    const duration = player.getDuration();
                    
                    if (duration) {
                        const min = Math.floor(current / 60);
                        const sec = Math.floor(current % 60);
                        const tMin = Math.floor(duration / 60);
                        const tSec = Math.floor(duration % 60);
                        
                        const timeString = `${min}:${sec < 10 ? '0'+sec : sec} / ${tMin}:${tSec < 10 ? '0'+tSec : tSec}`;
                        document.getElementById('timeDisplay').textContent = timeString;
                        
                        const percent = (current / duration) * 100;
                        const mobileProgress = document.getElementById('mobileProgress');
                        if(mobileProgress) mobileProgress.style.width = `${percent}%`;
                    }
                }
            }, 1000);
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            const isClosed = sidebar.classList.contains('-translate-x-full');

            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }
        
        // Placeholder functions for prev/next
        function nextTrack() {
           // Implement playlist logic if desired
           console.log("Next track clicked");
        }
        function prevTrack() {
           console.log("Prev track clicked");
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 hidden transition-opacity opacity-0" id="mobileOverlay" onclick="toggleMobileMenu()"></div>

<aside className="fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 md:flex flex-col w-64 h-full border-r border-glass-border bg-black/40 backdrop-blur-xl transition-transform duration-300 z-50" id="sidebar">
<div className="p-6 flex items-center justify-between">
<h1 className="text-lg tracking-tight font-semibold flex items-center gap-3 text-white">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
</div>
                MELODIA
            </h1>
<button className="md:hidden text-zinc-400" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-white/5 rounded-lg border border-white/5 shadow-sm transition-all" href="#">
<iconify-icon className="text-indigo-400" icon="solar:home-2-linear" width="18"></iconify-icon>
                Home
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:compass-linear" width="18"></iconify-icon>
                Discover
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:library-linear" width="18"></iconify-icon>
                Library
            </a>
<div className="pt-8 pb-3 px-3 text-[11px] text-zinc-500 font-bold tracking-widest uppercase">Playlists</div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon className="text-rose-500" icon="solar:heart-linear" width="18"></iconify-icon>
                Liked Songs
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:music-library-2-linear" width="18"></iconify-icon>
                Synthwave Mix
            </a>
</nav>
<div className="p-4 mt-auto">
<div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 cursor-pointer hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">US</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-semibold text-white truncate">User Account</div>
<div className="text-[10px] text-indigo-300 truncate">Premium Plan</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] to-[#09090b]">

<header className="h-20 w-full flex items-center gap-4 px-6 md:px-8 z-10 sticky top-0 shrink-0">
<button className="md:hidden text-zinc-400 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="relative flex-1 max-w-md group">
<div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors flex items-center">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-white/10 focus:border-white/10 transition-all shadow-inner" id="searchInput" placeholder="Search tracks, artists..." type="text"/>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0f0f1a]"></span>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8 pb-32 hide-scrollbar relative" id="mainScroll">

<div className="w-full h-[340px] rounded-[32px] relative overflow-hidden mb-10 group cursor-pointer border border-white/5 shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-indigo-300 uppercase mb-4 shadow-lg">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Featured Mix
                    </div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 leading-tight">Midnight <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Oscillations</span></h2>
<p className="text-zinc-300 text-sm md:text-base font-medium max-w-lg leading-relaxed mb-8">Drift into deep electronic soundscapes designed for focus and coding. Curated frequencies for the modern mind.</p>
<div className="flex gap-4">
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]" onclick="searchMusic('Midnight Oscillations')">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon> Play Now
                        </button>
<button className="bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon> Save
                        </button>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold tracking-tight text-white">Recommended for You</h3>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" id="resultsGrid">

</div>
<div className="h-24"></div>
</div>
</main>

<div className="fixed bottom-6 inset-x-4 md:inset-x-0 mx-auto max-w-[900px] z-[60] perspective-1000">
<div className="relative bg-[#1e1e2e]/70 backdrop-blur-2xl border border-white/10 rounded-[30px] p-2 pr-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out transform translate-y-[150%] md:translate-y-0 opacity-0 md:opacity-100 flex items-center justify-between group" id="glassPlayer">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none"></div>

<div className="flex items-center gap-4 relative z-10 w-[240px]">
<div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-500 border border-white/10">
<img alt="Album Art" className="w-full h-full object-cover" id="currentArt" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
</div>
<div className="flex flex-col min-w-0 justify-center">
<span className="text-sm font-bold text-white truncate tracking-tight" id="currentTitle">Select a track</span>
<span className="text-xs font-medium text-zinc-500 truncate mt-0.5" id="currentArtist">...</span>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[300px] z-20">

<div className="h-6 flex items-end gap-[3px] mb-2 opacity-30" id="visualizer">

</div>

<div className="flex items-center gap-5 md:gap-6">
<button className="text-zinc-500 hover:text-white transition-colors" title="Shuffle">
<iconify-icon icon="solar:shuffle-linear" width="18"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-all transform active:scale-90" onclick="prevTrack()">
<iconify-icon icon="solar:skip-previous-bold" width="24"></iconify-icon>
</button>

<button className="relative group/play" id="playPauseBtn" onclick="togglePlay()">
<div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-md opacity-0 group-hover/play:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-inner hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300">
<iconify-icon className="ml-1" icon="solar:play-bold" id="playIcon" width="24"></iconify-icon>
</div>
</button>
<button className="text-zinc-400 hover:text-white transition-all transform active:scale-90" onclick="nextTrack()">
<iconify-icon icon="solar:skip-next-bold" width="24"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-white transition-colors" title="Repeat">
<iconify-icon icon="solar:repeat-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-end gap-4 w-[240px] relative z-10">
<span className="text-xs font-medium text-zinc-500 font-mono tracking-wide" id="timeDisplay">0:00 / 0:00</span>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:volume-loud-linear" id="volIcon" width="18"></iconify-icon>
<div className="w-20">
<input className="glass-range" max="100" min="0" oninput="updateVolume(this)" type="range" value="80"/>
</div>
</div>
</div>
</div>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f1a]/95 backdrop-blur-xl border-t border-white/10 p-4 pb-8 flex items-center justify-between z-50">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-lg object-cover" id="mobileArt" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold text-white truncate max-w-[150px]" id="mobileTitle">Select a track</div>
<div className="text-xs text-zinc-500">...</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center" onclick="togglePlay()">
<iconify-icon className="ml-0.5" icon="solar:play-bold" id="mobilePlayIcon" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
<div className="h-full bg-indigo-500 w-0" id="mobileProgress"></div>
</div>
</div>
</div>

<div className="absolute pointer-events-none opacity-0 -z-50" id="player-container"></div>


    </>
  );
}
