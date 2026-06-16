import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const audio = new Audio();
        let tracks = [];
        let currentTrackIndex = -1;
        let isPlaying = false;

        // DOM Elements
        const searchInput = document.getElementById('search-input');
        const tracksContainer = document.getElementById('tracks-container');
        const loadingState = document.getElementById('loading-state');
        const sectionTitle = document.getElementById('section-title');
        
        // Player Elements
        const playerCover = document.getElementById('player-cover');
        const playerTitle = document.getElementById('player-title');
        const playerArtist = document.getElementById('player-artist');
        const playPauseIcon = document.getElementById('play-pause-icon');
        const progressSlider = document.getElementById('progress-slider');
        const currentTimeEl = document.getElementById('current-time');
        const totalTimeEl = document.getElementById('total-time');

        // Format time in M:SS
        const formatTime = (seconds) => {
            if (isNaN(seconds)) return "0:00";
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        };

        // Fetch music from iTunes API
        async function searchMusic(query) {
            sectionTitle.innerText = query === 'Karan Aujla' ? 'Full Collection' : `Results for "${query}"`;
            tracksContainer.innerHTML = '';
            loadingState.classList.remove('hidden');

            try {
                // Fetching up to 50 tracks to provide the "full" illusion
                const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=50&media=music&entity=song`);
                const data = await response.json();
                
                // Filter out tracks without preview URLs
                tracks = data.results.filter(t => t.previewUrl);
                renderTracks();
            } catch (error) {
                console.error("Failed to fetch music:", error);
                tracksContainer.innerHTML = '<p class="text-sm text-neutral-600 py-4">Failed to synchronize. Please try again.</p>';
            } finally {
                loadingState.classList.add('hidden');
            }
        }

        // Render tracks to UI
        function renderTracks() {
            if (tracks.length === 0) {
                tracksContainer.innerHTML = '<p class="text-sm text-neutral-600 py-4">No frequencies found.</p>';
                return;
            }

            tracksContainer.innerHTML = tracks.map((track, index) => `
                <div class="group flex items-center p-2 md:px-4 md:py-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer border border-transparent hover:border-white/[0.02]" onclick="playTrack(${index})">
                    
                    <div class="w-8 text-center text-xs text-neutral-600 hidden md:block group-hover:text-white/60 transition-colors">${index + 1}</div>
                    
                    <div class="flex items-center gap-4 flex-1 overflow-hidden">
                        <div class="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-[#0a0a0a] border border-white/[0.05] flex-shrink-0">
                            <img src="${track.artworkUrl100 || 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'}" alt="Cover" class="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                            <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <iconify-icon icon="solar:play-bold" class="text-white/90 text-lg"></iconify-icon>
                            </div>
                        </div>
                        <div class="flex flex-col overflow-hidden">
                            <span class="text-sm text-neutral-300 font-medium tracking-tight truncate group-hover:text-white transition-colors">${track.trackName}</span>
                            <span class="text-xs text-neutral-600 truncate group-hover:text-neutral-400 transition-colors">${track.artistName}</span>
                        </div>
                    </div>
                    
                    <div class="w-48 hidden lg:block text-xs text-neutral-600 truncate pr-4 group-hover:text-neutral-400 transition-colors">
                        ${track.collectionName || 'Single'}
                    </div>
                    
                    <div class="w-16 text-right flex items-center justify-end gap-3">
                        <button class="text-neutral-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all hidden md:block" onclick="event.stopPropagation(); toggleHeart(this)">
                            <iconify-icon icon="solar:heart-linear" class="text-lg"></iconify-icon>
                        </button>
                        <span class="text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">${formatTime(track.trackTimeMillis / 1000)}</span>
                    </div>
                </div>
            `).join('');
        }

        // Play specific track
        function playTrack(index) {
            if (index < 0 || index >= tracks.length) return;
            currentTrackIndex = index;
            const track = tracks[index];

            audio.src = track.previewUrl;
            audio.play();
            isPlaying = true;

            // Update UI
            playerTitle.innerText = track.trackName;
            playerArtist.innerText = track.artistName;
            playerCover.src = track.artworkUrl100 || playerCover.src;
            playPauseIcon.setAttribute('icon', 'solar:pause-bold');
            playPauseIcon.classList.remove('ml-1'); // adjust centering for pause icon
        }

        // Play/Pause toggle
        function togglePlay() {
            if (currentTrackIndex === -1 && tracks.length > 0) {
                playTrack(0);
                return;
            }
            if (!audio.src) return;

            if (isPlaying) {
                audio.pause();
                playPauseIcon.setAttribute('icon', 'solar:play-bold');
                playPauseIcon.classList.add('ml-1');
            } else {
                audio.play();
                playPauseIcon.setAttribute('icon', 'solar:pause-bold');
                playPauseIcon.classList.remove('ml-1');
            }
            isPlaying = !isPlaying;
        }

        // Next/Prev controls
        function playNext() {
            if (tracks.length === 0) return;
            let nextIndex = currentTrackIndex + 1;
            if (nextIndex >= tracks.length) nextIndex = 0;
            playTrack(nextIndex);
        }

        function playPrev() {
            if (tracks.length === 0) return;
            let prevIndex = currentTrackIndex - 1;
            if (prevIndex < 0) prevIndex = tracks.length - 1;
            playTrack(prevIndex);
        }

        // Audio Event Listeners
        audio.addEventListener('timeupdate', () => {
            const current = audio.currentTime;
            const duration = audio.duration || 30; // iTunes previews are usually 30s
            currentTimeEl.innerText = formatTime(current);
            progressSlider.value = (current / duration) * 100 || 0;
        });

        audio.addEventListener('ended', playNext);

        audio.addEventListener('loadedmetadata', () => {
            totalTimeEl.innerText = formatTime(audio.duration);
        });

        // Seek Audio
        function seekAudio(percent) {
            if (!audio.src) return;
            const duration = audio.duration || 30;
            audio.currentTime = (percent / 100) * duration;
        }

        // Volume Control
        function setVolume(val) {
            audio.volume = val;
        }

        // Toggle Heart icon
        window.toggleHeart = function(btn) {
            const icon = btn.querySelector('iconify-icon');
            const currentIcon = icon.getAttribute('icon');
            if (currentIcon === 'solar:heart-linear') {
                icon.setAttribute('icon', 'solar:heart-bold');
                btn.classList.add('text-white');
                btn.classList.remove('text-neutral-600');
            } else {
                icon.setAttribute('icon', 'solar:heart-linear');
                btn.classList.remove('text-white');
                btn.classList.add('text-neutral-600');
            }
        };

        // Search Input Listener
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                searchMusic(searchInput.value);
            }
        });

        // Initial Load
        audio.volume = 0.7;
        searchMusic('Karan Aujla');

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white/[0.01] border-r border-white/[0.03] flex-col hidden md:flex z-10 backdrop-blur-3xl">
<div className="p-6">
<h1 className="text-2xl tracking-tighter text-white/90 font-medium opacity-80">GHOST</h1>
</div>
<nav className="flex-1 px-4 py-2 space-y-6 overflow-y-auto">

<div>
<p className="text-xs text-neutral-600 mb-3 px-2 tracking-widest uppercase">Menu</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-white/80 bg-white/[0.03] rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-500 hover:text-white/80 hover:bg-white/[0.02] rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
                        Search
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-500 hover:text-white/80 hover:bg-white/[0.02] rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:library-linear"></iconify-icon>
                        Your Library
                    </a>
</div>
</div>

<div>
<p className="text-xs text-neutral-600 mb-3 px-2 tracking-widest uppercase">Discover</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-500 hover:text-white/80 hover:bg-white/[0.02] rounded-lg transition-colors" href="#" onclick="searchMusic('Karan Aujla')">
<iconify-icon className="text-lg" icon="solar:fire-linear"></iconify-icon>
                        Karan Aujla
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-500 hover:text-white/80 hover:bg-white/[0.02] rounded-lg transition-colors" href="#" onclick="searchMusic('new releases')">
<iconify-icon className="text-lg" icon="solar:music-notes-linear"></iconify-icon>
                        New Releases
                    </a>
</div>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col relative h-full overflow-y-auto pb-28">

<header className="sticky top-0 z-40 bg-[#030303]/80 backdrop-blur-2xl border-b border-white/[0.03] px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4 flex-1">
<button className="md:hidden text-white/80">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="relative group w-full max-w-sm">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 text-lg group-focus-within:text-white/70 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white/[0.02] border border-white/[0.03] focus:border-white/10 focus:bg-white/[0.04] rounded-full py-2 pl-10 pr-4 text-sm text-white/90 placeholder-neutral-600 outline-none transition-all" id="search-input" placeholder="Search in Ghost..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-neutral-500 hover:text-white/80 transition-colors hidden sm:block">Log in</button>
<button className="text-sm bg-white/90 text-black px-5 py-2 rounded-full hover:bg-white transition-colors font-medium tracking-tight">Sign up</button>
</div>
</header>
<div className="p-6 md:p-8 max-w-7xl mx-auto w-full">

<section className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 group border border-white/[0.05]">
<div className="absolute inset-0 bg-neutral-900/20 grayscale mix-blend-overlay transition-transform duration-1000 group-hover:scale-105">
<img alt="Hero" className="w-full h-full object-cover opacity-30 grayscale blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
<span className="text-xs font-medium text-neutral-500 mb-2 tracking-widest uppercase">Artist Spotlight</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-white/90 font-normal mb-2">Karan Aujla</h2>
<p className="text-sm md:text-base text-neutral-500 max-w-md">Ghost Edition. Experience the complete collection in a distraction-free, ethereal environment.</p>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl tracking-tight text-white/80 font-normal" id="section-title">Tracks</h3>
</div>

<div className="flex flex-col items-center justify-center py-20 hidden" id="loading-state">
<iconify-icon className="animate-spin text-3xl text-neutral-500 mb-4" icon="solar:spinner-linear"></iconify-icon>
<p className="text-sm text-neutral-600">Summoning audio...</p>
</div>

<div className="hidden md:flex items-center px-4 py-2 text-xs text-neutral-600 border-b border-white/[0.03] mb-2 uppercase tracking-widest">
<div className="w-8 text-center">#</div>
<div className="flex-1">Title</div>
<div className="w-48 hidden lg:block">Album</div>
<div className="w-16 text-right"><iconify-icon className="text-sm inline-block" icon="solar:clock-circle-linear"></iconify-icon></div>
</div>

<div className="space-y-1" id="tracks-container">

</div>
</section>
</div>
</main>

<footer className="fixed bottom-0 w-full h-24 bg-[#030303]/90 backdrop-blur-3xl border-t border-white/[0.03] z-50 flex items-center justify-between px-4 md:px-8">

<div className="flex items-center gap-4 w-1/3 min-w-[200px]">
<div className="relative w-14 h-14 rounded-md overflow-hidden bg-white/[0.02] border border-white/[0.05] flex-shrink-0">
<img alt="Cover" className="w-full h-full object-cover grayscale opacity-60" id="player-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col truncate pr-4">
<span className="text-sm text-white/90 font-medium tracking-tight truncate" id="player-title">Select a track</span>
<span className="text-xs text-neutral-500 truncate" id="player-artist">Ghost Player</span>
</div>
<button className="text-neutral-600 hover:text-white/80 transition-colors hidden sm:block" onclick="toggleHeart(this)">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-col items-center justify-center w-1/3 max-w-xl gap-2">
<div className="flex items-center gap-6">
<button className="text-neutral-600 hover:text-white/80 transition-colors hidden sm:block">
<iconify-icon className="text-lg" icon="solar:shuffle-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white/90 transition-colors" onclick="playPrev()">
<iconify-icon className="text-2xl" icon="solar:skip-previous-linear"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md" onclick="togglePlay()">
<iconify-icon className="text-xl ml-1 opacity-80" icon="solar:play-bold" id="play-pause-icon"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white/90 transition-colors" onclick="playNext()">
<iconify-icon className="text-2xl" icon="solar:skip-next-linear"></iconify-icon>
</button>
<button className="text-neutral-600 hover:text-white/80 transition-colors hidden sm:block">
<iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3 w-full opacity-70 hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-500 w-8 text-right" id="current-time">0:00</span>
<input className="flex-1" id="progress-slider" max="100" min="0" oninput="seekAudio(this.value)" type="range" value="0"/>
<span className="text-xs text-neutral-500 w-8" id="total-time">0:30</span>
</div>
</div>

<div className="flex items-center justify-end gap-3 w-1/3 min-w-[150px] hidden md:flex opacity-60 hover:opacity-100 transition-opacity">
<button className="text-neutral-500 hover:text-white/80 transition-colors">
<iconify-icon className="text-lg" icon="solar:volume-loud-linear"></iconify-icon>
</button>
<input className="w-24" id="volume-slider" max="1" min="0" oninput="setVolume(this.value)" step="0.01" type="range" value="0.7"/>
</div>
</footer>



    </>
  );
}
