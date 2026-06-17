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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
spotify: { green: '#1ed760', black: '#121212', dark: '#181818', light: '#282828' }
},
animation: { 'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }
}
}
}



        // Data Store
        const indianLatest = [
            { id: 'V8Z5ta5enYM', title: 'Chaleya', artist: 'Arijit Singh', album: 'Jawan' },
            { id: 'RLzC55ai0eo', title: 'Heeriye', artist: 'Jasleen Royal, Arijit Singh', album: 'Heeriye' },
            { id: 'YxWlaYCA8MU', title: 'Jhoome Jo Pathaan', artist: 'Vishal-Shekhar', album: 'Pathaan' },
            { id: 'vX2cDW8LUWk', title: 'Excuses', artist: 'AP Dhillon', album: 'Hidden Gems' },
            { id: 'BddP6PYo2gs', title: 'Kesariya', artist: 'Arijit Singh', album: 'Brahmastra' },
        ];

        const oldClassics = [
            { id: 'TFr6G5zveS8', title: 'Lag Ja Gale', artist: 'Lata Mangeshkar', album: 'Woh Kaun Thi' },
            { id: 'M3KqZ9c9j0Y', title: 'Mere Sapno Ki Rani', artist: 'Kishore Kumar', album: 'Aradhana' },
            { id: '4Hh1I1M8CKQ', title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', album: 'Blackmail' },
            { id: '1T860jA5D88', title: 'Ajeeb Dastan Hai Yeh', artist: 'Lata Mangeshkar', album: 'Dil Apna Aur Preet Parai' },
            { id: 'Man405-O8ME', title: 'Gulabi Ankhen', artist: 'Mohammed Rafi', album: 'The Train' },
        ];

        let allTracks = [...indianLatest, ...oldClassics];
        let currentTrackIndex = 0;
        let player;
        let isPlaying = false;
        let progressInterval;

        // --- UI Rendering ---

        function createCard(track, index, listType) {
            const globalIndex = listType === 'latest' ? index : index + indianLatest.length;
            return `
            <div onclick="playTrack(${globalIndex})" class="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-all cursor-pointer group flex flex-col gap-3">
                <div class="relative w-full aspect-square rounded-md overflow-hidden shadow-lg bg-[#333]">
                    <img src="https://i.ytimg.com/vi/${track.id}/maxresdefault.jpg" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/300/121212/555?text=Music'">
                    <button class="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <iconify-icon icon="solar:play-bold" width="24" class="ml-1"></iconify-icon>
                    </button>
                </div>
                <div class="min-h-[48px]">
                    <h3 class="font-bold text-white truncate mb-1">${track.title}</h3>
                    <p class="text-sm text-neutral-400 line-clamp-2">${track.artist}</p>
                </div>
            </div>`;
        }

        document.getElementById('latest-grid').innerHTML = indianLatest.map((t, i) => createCard(t, i, 'latest')).join('');
        document.getElementById('classics-grid').innerHTML = oldClassics.map((t, i) => createCard(t, i, 'classics')).join('');
        
        // Sidebar playlists mock
        const playlists = ['Desi Hits', 'Bollywood Butter', 'Punjabi 101', 'Retro 80s', 'Sleepy Lo-Fi'];
        document.getElementById('sidebar-playlists').innerHTML = playlists.map(p => `
            <div class="p-2 hover:bg-neutral-800 rounded-md flex gap-3 cursor-pointer group">
                 <div class="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center text-neutral-500">
                    <iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon>
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-white text-sm font-medium truncate">${p}</span>
                    <span class="text-xs text-neutral-500 group-hover:text-neutral-400">Playlist</span>
                </div>
            </div>
        `).join('');


        // --- YouTube API ---

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '0',
                width: '0',
                videoId: allTracks[0].id,
                playerVars: { 'playsinline': 1, 'controls': 0, 'disablekb': 1 },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerReady(event) {
            updatePlayerInfo(currentTrackIndex);
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING) {
                isPlaying = true;
                updatePlayIcons();
                startProgressLoop();
                // Update total duration once metadata is loaded
                const duration = player.getDuration();
                document.getElementById('total-time').innerText = formatTime(duration);
            } else {
                isPlaying = false;
                updatePlayIcons();
                clearInterval(progressInterval);
            }
            if (event.data == YT.PlayerState.ENDED) {
                nextTrack();
            }
        }

        // --- Controls ---

        function playTrack(index) {
            currentTrackIndex = index;
            const track = allTracks[index];
            player.loadVideoById(track.id);
            updatePlayerInfo(index);
        }

        function togglePlay() {
            if (player && player.getPlayerState) {
                const state = player.getPlayerState();
                if (state === YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            }
        }

        function nextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % allTracks.length;
            playTrack(currentTrackIndex);
        }

        function prevTrack() {
            currentTrackIndex = (currentTrackIndex - 1 + allTracks.length) % allTracks.length;
            playTrack(currentTrackIndex);
        }

        function playHero() {
            // Check if current track is hero, otherwise play hero (index 0)
            if(allTracks[currentTrackIndex].id === indianLatest[0].id) {
                togglePlay();
            } else {
                playTrack(0);
            }
        }

        function setVolume(val) {
            if(player) player.setVolume(val);
        }

        function seekTrack(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = x / rect.width;
            const duration = player.getDuration();
            player.seekTo(duration * percent, true);
        }

        // --- Helpers & Visuals ---

        function updatePlayerInfo(index) {
            const track = allTracks[index];
            document.getElementById('player-title').innerText = track.title;
            document.getElementById('player-artist').innerText = track.artist;
            document.getElementById('player-img').src = `https://i.ytimg.com/vi/${track.id}/maxresdefault.jpg`;
            
            // Hero section update if it matches
            if(index === 0) {
                 document.getElementById('hero-title').innerText = track.title;
                 document.getElementById('hero-img').src = `https://i.ytimg.com/vi/${track.id}/maxresdefault.jpg`;
            }

            // Simulate gradient change
            const colors = ['from-neutral-900', 'from-indigo-900', 'from-red-900', 'from-green-900', 'from-blue-900'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const main = document.querySelector('main');
            main.className = main.className.replace(/from-\w+-900/, randomColor);
        }

        function updatePlayIcons() {
            const icon = isPlaying ? 'solar:pause-bold' : 'solar:play-bold';
            document.getElementById('play-pause-icon').setAttribute('icon', icon);
            document.getElementById('main-play-btn').setAttribute('icon', icon);
        }

        function startProgressLoop() {
            clearInterval(progressInterval);
            progressInterval = setInterval(() => {
                if (!player || !player.getCurrentTime) return;
                
                const current = player.getCurrentTime();
                const total = player.getDuration();
                
                if (total > 0) {
                    const percent = (current / total) * 100;
                    document.getElementById('progress-bar').style.width = `${percent}%`;
                    document.getElementById('progress-thumb').style.left = `${percent}%`;
                    document.getElementById('current-time').innerText = formatTime(current);
                }
            }, 500);
        }

        function formatTime(seconds) {
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        }

        // --- Search Feature ---
        const searchInput = document.getElementById('yt-search');
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = searchInput.value;
                let videoId = '';
                
                // Check if it's a URL
                try {
                    const url = new URL(val);
                    if (url.hostname.includes('youtube.com')) {
                        videoId = url.searchParams.get('v');
                    } else if (url.hostname.includes('youtu.be')) {
                        videoId = url.pathname.slice(1);
                    }
                } catch {
                    // Assume it's a search term or ID
                    if (val.length === 11) videoId = val; // simple ID check
                }

                if (videoId) {
                    // Add to track list and play
                    const newTrack = {
                        id: videoId,
                        title: 'Custom Track',
                        artist: 'YouTube Import',
                        album: 'Single'
                    };
                    allTracks.unshift(newTrack);
                    currentTrackIndex = 0;
                    player.loadVideoById(videoId);
                    updatePlayerInfo(0);
                } else {
                    alert("For this demo, please paste a valid YouTube Link or ID (e.g. V8Z5ta5enYM).");
                }
            }
        });

        // Header transparency effect
        document.getElementById('main-scroll').addEventListener('scroll', function() {
            const header = document.getElementById('main-header');
            if (this.scrollTop > 50) {
                header.classList.add('bg-neutral-900/90', 'backdrop-blur-md');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.remove('bg-neutral-900/90', 'backdrop-blur-md');
                header.classList.add('bg-transparent');
            }
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
      
<div className="flex-1 flex overflow-hidden">

<aside className="w-[280px] bg-black flex-col gap-2 p-2 hidden md:flex">

<div className="bg-spotify-black rounded-lg p-4 space-y-4">
<a className="flex items-center gap-4 text-white hover:opacity-100 transition-opacity" href="#">
<iconify-icon icon="solar:home-2-bold" width="24"></iconify-icon>
<span className="font-bold text-sm">Home</span>
</a>
<a className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
<span className="font-bold text-sm">Search</span>
</a>
</div>

<div className="bg-spotify-black rounded-lg flex-1 flex flex-col p-2 overflow-hidden">
<div className="p-2 flex items-center justify-between shadow-sm">
<button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:library-bold" width="24"></iconify-icon>
<span className="font-bold text-sm">Your Library</span>
</button>
<div className="flex gap-2">
<button className="hover:bg-neutral-800 p-1 rounded-full text-neutral-400 hover:text-white"><iconify-icon icon="solar:add-linear" width="20"></iconify-icon></button>
<button className="hover:bg-neutral-800 p-1 rounded-full text-neutral-400 hover:text-white"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="px-2 py-3 flex gap-2">
<button className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors">Playlists</button>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors">Artists</button>
</div>

<div className="flex-1 overflow-y-auto mt-2 space-y-1">
<div className="p-2 hover:bg-neutral-800 rounded-md flex gap-3 cursor-pointer group">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-white text-sm font-medium">Liked Songs</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400">420 songs</span>
</div>
</div>

<div id="sidebar-playlists"></div>
</div>
</div>
</aside>

<main className="flex-1 bg-gradient-to-b from-neutral-900 to-spotify-black m-2 rounded-lg overflow-hidden relative flex flex-col">

<header className="h-16 flex items-center justify-between px-6 sticky top-0 bg-transparent z-20 transition-all duration-300" id="main-header">
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-neutral-300 hover:text-white disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-neutral-300 hover:text-white disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 max-w-md mx-4 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500 group-focus-within:text-white" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-neutral-800/50 border border-transparent focus:border-neutral-600 focus:bg-neutral-800 text-sm text-white rounded-full py-2.5 pl-10 pr-4 outline-none transition-all placeholder-neutral-500" id="yt-search" placeholder="Paste YouTube Link or Search Songs..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black text-sm font-bold px-4 py-1.5 rounded-full hover:scale-105 transition-transform">Explore Premium</button>
<div className="w-8 h-8 rounded-full bg-neutral-700 p-0.5 border border-black cursor-pointer">
<img className="rounded-full w-full h-full" src="https://ui-avatars.com/api/?name=User&amp;background=random"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar" id="main-scroll">

<div className="h-4"></div>

<div className="flex flex-col md:flex-row items-end gap-6 mb-8 pt-8 pb-4 transition-all" id="hero-section">
<div className="w-48 h-48 md:w-56 md:h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md overflow-hidden shrink-0 group relative">
<img className="w-full h-full object-cover" id="hero-img" src="https://i.ytimg.com/vi/V8Z5ta5enYM/maxresdefault.jpg"/>
<button className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full items-center justify-center text-black shadow-xl hover:scale-105 active:scale-95 flex opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" onclick="playHero()">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1">
<span className="text-xs font-bold tracking-widest uppercase text-white mb-2 block">Featured Track</span>
<h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none" id="hero-title">Chaleya</h1>
<div className="flex items-center gap-2 text-sm text-white font-medium">
<img className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=Arijit+Singh&amp;background=1ed760&amp;color=000"/>
<span className="hover:underline cursor-pointer">Arijit Singh</span>
<span className="text-neutral-400">•</span>
<span className="text-neutral-400">Jawan</span>
<span className="text-neutral-400">•</span>
<span className="text-neutral-400">2023</span>
</div>
</div>
</div>

<div className="flex items-center gap-6 mb-8">
<button className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform shadow-lg" onclick="playHero()">
<iconify-icon className="ml-1" icon="solar:play-bold" id="main-play-btn" width="28"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:heart-linear" width="32"></iconify-icon></button>
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:menu-dots-linear" width="28"></iconify-icon></button>
</div>

<section className="mb-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer">India's Latest Hits</h2>
<span className="text-xs font-bold text-neutral-400 uppercase hover:underline cursor-pointer tracking-wider">Show all</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="latest-grid">

</div>
</section>

<section className="mb-12">
<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer">Golden Classics</h2>
<span className="text-xs font-bold text-neutral-400 uppercase hover:underline cursor-pointer tracking-wider">Show all</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="classics-grid">

</div>
</section>
</div>
</main>
</div>

<footer className="h-[90px] bg-black border-t border-neutral-800 flex items-center justify-between px-4 z-50">

<div className="w-[30%] min-w-[180px] flex items-center gap-4">
<div className="relative group">
<img className="h-14 w-14 rounded object-cover shadow-lg" id="player-img" src="https://i.ytimg.com/vi/V8Z5ta5enYM/maxresdefault.jpg"/>
<button className="absolute top-1 right-1 bg-black/60 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity" onclick="toggleExpand()">
<iconify-icon icon="solar:maximize-square-linear" width="12"></iconify-icon>
</button>
</div>
<div className="flex flex-col justify-center overflow-hidden">
<a className="text-white text-sm font-medium hover:underline truncate" href="#" id="player-title">Chaleya</a>
<a className="text-[11px] text-neutral-400 hover:text-white hover:underline truncate" href="#" id="player-artist">Arijit Singh</a>
</div>
<button className="text-neutral-400 hover:text-spotify-green ml-2"><iconify-icon icon="solar:heart-linear" width="18"></iconify-icon></button>
</div>

<div className="w-[40%] max-w-[722px] flex flex-col items-center gap-1">
<div className="flex items-center gap-6 mb-1">
<button className="text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="solar:shuffle-linear" width="18"></iconify-icon></button>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="prevTrack()"><iconify-icon icon="solar:skip-previous-bold" width="22"></iconify-icon></button>
<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform" onclick="togglePlay()">
<iconify-icon className="ml-0.5" icon="solar:play-bold" id="play-pause-icon" width="16"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="nextTrack()"><iconify-icon icon="solar:skip-next-bold" width="22"></iconify-icon></button>
<button className="text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="solar:repeat-linear" width="18"></iconify-icon></button>
</div>
<div className="w-full flex items-center gap-2 text-[11px] font-medium text-neutral-400 group">
<span className="min-w-[40px] text-right font-mono" id="current-time">0:00</span>
<div className="flex-1 relative h-1 bg-neutral-600 rounded-full cursor-pointer" onclick="seekTrack(event)">
<div className="absolute h-full bg-white rounded-full w-0 group-hover:bg-spotify-green" id="progress-bar"></div>
<div className="absolute h-3 w-3 bg-white rounded-full shadow top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ml-[-6px]" id="progress-thumb" style={{left: '0%'}}></div>
</div>
<span className="min-w-[40px] font-mono" id="total-time">3:20</span>
</div>
</div>

<div className="w-[30%] min-w-[180px] flex justify-end items-center gap-3">
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:microphone-3-linear" width="18"></iconify-icon></button>
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:devices-linear" width="18"></iconify-icon></button>
<div className="flex items-center gap-2 w-28 group">
<iconify-icon className="text-neutral-400" icon="solar:volume-small-linear" width="18"></iconify-icon>
<div className="flex-1 relative h-1 bg-neutral-600 rounded-full cursor-pointer">
<div className="absolute h-full bg-white rounded-full w-[70%] group-hover:bg-spotify-green"></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" max="100" min="0" oninput="setVolume(this.value)" type="range" value="70"/>
</div>
</div>
<button className="text-neutral-400 hover:text-white"><iconify-icon icon="solar:full-screen-linear" width="18"></iconify-icon></button>
</div>
</footer>

<div className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" id="player"></div>


    </>
  );
}
