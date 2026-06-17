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



        // Initialize Icons
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

        // State
        const state = {
            activeMixer: [], // list of active sound IDs
            currentSingle: null, // object { id, title, subtitle }
            isPlaying: false,
            activeTab: 'mixer'
        };

        const audioElements = {
            rain: document.getElementById('audio-rain'),
            wind: document.getElementById('audio-wind'),
            fire: document.getElementById('audio-fire'),
            noise: document.getElementById('audio-noise'),
            single: document.getElementById('audio-single')
        };
        
        // Mock Sources for Single Tracks (using ambient tracks as placeholders)
        const singleSources = {
            story1: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
            story2: "https://assets.mixkit.co/music/preview/mixkit-hollidays-2793.mp3",
            med1: "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3",
            med2: "https://assets.mixkit.co/music/preview/mixkit-stars-in-the-night-176.mp3",
            med3: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3"
        };

        // UI References
        const visualizer = document.getElementById('visualizer');
        const globalPlayBtn = document.getElementById('global-play-btn');
        const playerTitle = document.getElementById('player-title');
        const playerSubtitle = document.getElementById('player-subtitle');

        // --- Functions ---

        function updatePlayerUI() {
            // Visualizer State
            if (state.isPlaying) {
                visualizer.className = 'playing relative w-12 h-12 rounded bg-gradient-to-br from-indigo-900 to-zinc-800 flex items-center justify-center border border-white/5 overflow-hidden group';
                globalPlayBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4 fill-current"></i>';
            } else {
                visualizer.className = 'paused relative w-12 h-12 rounded bg-zinc-900 flex items-center justify-center border border-white/5 overflow-hidden group';
                globalPlayBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4 fill-current ml-0.5"></i>';
            }
            lucide.createIcons();

            // Text
            if (state.currentSingle) {
                playerTitle.textContent = state.currentSingle.title;
                playerSubtitle.textContent = state.currentSingle.subtitle;
            } else if (state.activeMixer.length > 0) {
                playerTitle.textContent = "Custom Mix";
                playerSubtitle.textContent = state.activeMixer.map(id => id.charAt(0).toUpperCase() + id.slice(1)).join(' + ');
            } else {
                playerTitle.textContent = "Somnia";
                playerSubtitle.textContent = "Select a sound to begin";
            }
        }

        function toggleGlobalPlay() {
            if (state.activeMixer.length === 0 && !state.currentSingle) return;

            state.isPlaying = !state.isPlaying;
            
            if (state.isPlaying) {
                // Resume active sounds
                if (state.currentSingle) {
                    audioElements.single.play();
                } else {
                    state.activeMixer.forEach(id => audioElements[id].play());
                }
            } else {
                // Pause all
                Object.values(audioElements).forEach(el => el.pause());
            }
            updatePlayerUI();
        }

        function stopAllSounds() {
            // Pause everything
            Object.values(audioElements).forEach(el => {
                el.pause();
                el.currentTime = 0;
            });
            state.activeMixer = [];
            state.currentSingle = null;
            state.isPlaying = false;
            
            // Reset UI cards in mixer
            document.querySelectorAll('.mixer-card').forEach(card => {
                resetCardUI(card);
            });
            
            updatePlayerUI();
        }

        // --- Mixer Logic ---

        function toggleTrack(id) {
            // If playing a story, stop it first
            if (state.currentSingle) {
                audioElements.single.pause();
                state.currentSingle = null;
            }

            const index = state.activeMixer.indexOf(id);
            const card = document.getElementById(`card-${id}`);
            const btn = card.querySelector('.toggle-btn');
            const rangeContainer = card.querySelector('.range-container');
            const rangeInput = rangeContainer.querySelector('input');
            const audio = audioElements[id];

            if (index === -1) {
                // Activate
                state.activeMixer.push(id);
                audio.volume = rangeInput.value / 100;
                audio.play();
                
                // UI Styles
                card.classList.remove('opacity-60', 'hover:opacity-100'); // make active
                rangeContainer.classList.remove('opacity-50', 'pointer-events-none');
                
                // Button Style
                btn.innerHTML = '<i data-lucide="power" class="w-4 h-4"></i>';
                btn.classList.remove('text-zinc-600', 'hover:text-indigo-400', 'hover:text-emerald-400', 'hover:text-amber-400', 'hover:text-slate-400');
                
                // Color coding based on ID
                if(id === 'rain') btn.classList.add('text-indigo-400');
                if(id === 'wind') btn.classList.add('text-emerald-400');
                if(id === 'fire') btn.classList.add('text-amber-400');
                if(id === 'noise') btn.classList.add('text-slate-400');

                state.isPlaying = true;

            } else {
                // Deactivate
                state.activeMixer.splice(index, 1);
                audio.pause();
                resetCardUI(card);
                
                if (state.activeMixer.length === 0) state.isPlaying = false;
            }
            
            updatePlayerUI();
        }

        function resetCardUI(card) {
            const btn = card.querySelector('.toggle-btn');
            const rangeContainer = card.querySelector('.range-container');
            
            card.classList.add('opacity-60', 'hover:opacity-100'); // dim
            rangeContainer.classList.add('opacity-50', 'pointer-events-none');
            
            btn.innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i>';
            btn.className = 'toggle-btn text-zinc-600 hover:text-zinc-300 transition-colors';
            
            // Restore hover colors logic roughly
            if(card.id.includes('rain')) btn.classList.add('hover:text-indigo-400');
            else if(card.id.includes('wind')) btn.classList.add('hover:text-emerald-400');
            else if(card.id.includes('fire')) btn.classList.add('hover:text-amber-400');
            else if(card.id.includes('noise')) btn.classList.add('hover:text-slate-400');
            
            lucide.createIcons();
        }

        function setVolume(id, val) {
            audioElements[id].volume = val / 100;
        }

        function resetMixer() {
            state.activeMixer.forEach(id => {
                audioElements[id].pause();
                const card = document.getElementById(`card-${id}`);
                resetCardUI(card);
            });
            state.activeMixer = [];
            state.isPlaying = false;
            updatePlayerUI();
        }

        // --- Single Track Logic (Stories / Meditation) ---

        function playSingleTrack(sourceId, title, subtitle) {
            // Stop Mixer
            resetMixer();
            
            state.currentSingle = { id: sourceId, title, subtitle };
            audioElements.single.src = singleSources[sourceId];
            audioElements.single.play();
            state.isPlaying = true;
            
            updatePlayerUI();
        }

        function setMasterVolume(val) {
            Object.values(audioElements).forEach(el => {
                // This is a simple implementation; real implementation would scale individual volumes
                if(el.volume > 0) el.volume = val / 100; 
            });
        }

        // --- Navigation Logic ---

        function switchTab(tab) {
            // Update Buttons
            document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('nav-active', 'bg-white/5'));
            document.querySelectorAll('.section-hidden, #view-mixer').forEach(el => el.style.display = 'none');
            
            // Show Content
            const content = document.getElementById(`view-${tab}`);
            if(content) content.style.display = 'block';
            if(tab === 'mixer') content.style.display = 'block'; // Grid/Space handling
            if(tab === 'stories') content.querySelector('div').className = "grid grid-cols-1 gap-4"; // Ensure grid

            // Highlight Nav
            const navBtn = document.getElementById(`nav-${tab}`);
            if(navBtn) navBtn.classList.add('nav-active');
            
            // Update Header
            const title = document.getElementById('header-title');
            const desc = document.getElementById('header-desc');
            
            if(tab === 'mixer') {
                title.innerText = "Good evening";
                desc.innerText = "Prepare your mind for deep rest.";
            } else if (tab === 'stories') {
                title.innerText = "Sleep Stories";
                desc.innerText = "Drift off with calming narratives.";
            } else if (tab === 'meditation') {
                title.innerText = "Guided Meditation";
                desc.innerText = "Find your center and let go.";
            }
        }

        // Init
        document.querySelectorAll('.mixer-card').forEach(c => resetCardUI(c));
    
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
      

<aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-black/50 h-full backdrop-blur-xl z-20">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-lg">SOMNIA</span>
</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md nav-active text-sm font-medium transition-all group" id="nav-mixer" onclick="switchTab('mixer')">
<i className="w-4 h-4 text-indigo-400" data-lucide="waves"></i>
                    Sound Mixer
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-500 hover:text-zinc-300 text-sm font-light transition-all" id="nav-stories" onclick="switchTab('stories')">
<i className="w-4 h-4" data-lucide="book-open"></i>
                    Sleep Stories
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-500 hover:text-zinc-300 text-sm font-light transition-all" id="nav-meditation" onclick="switchTab('meditation')">
<i className="w-4 h-4" data-lucide="mic-2"></i>
                    Guided Meditation
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-zinc-500 hover:text-zinc-300 text-sm font-light transition-all">
<i className="w-4 h-4" data-lucide="heart"></i>
                    Favorites
                </button>
</nav>
</div>
<div className="mt-auto p-6 border-t border-white/5">
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-300">Sleep Timer</span>
<i className="w-3 h-3 text-zinc-500" data-lucide="clock"></i>
</div>
<div className="flex gap-2" id="timer-buttons">
<button className="timer-btn flex-1 py-1.5 text-xs rounded bg-zinc-800 text-zinc-400 border border-white/5 hover:bg-zinc-700 transition-colors">30m</button>
<button className="timer-btn flex-1 py-1.5 text-xs rounded bg-zinc-800 text-zinc-400 border border-white/5 hover:bg-zinc-700 transition-colors">1h</button>
<button className="timer-btn flex-1 py-1.5 text-xs rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 transition-colors">2h</button>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-black">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>

<header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8 z-10 shrink-0">
<div>
<h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-1" id="header-title">Good evening</h1>
<p className="text-sm text-zinc-500 font-light" id="header-desc">Prepare your mind for deep rest.</p>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" onclick="stopAllSounds()" title="Stop All">
<i className="w-4 h-4" data-lucide="volume-x"></i>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10"></div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 md:px-10 pb-32 z-10 custom-scrollbar relative">

<div className="space-y-10" id="view-mixer">
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-300 tracking-tight">Active Mixer</h2>
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors" onclick="resetMixer()">Reset</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="mixer-card group relative bg-zinc-900/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300" id="card-rain">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<i className="w-5 h-5" data-lucide="cloud-rain"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">Heavy Rain</h3>
<p className="text-xs text-zinc-500">Nature</p>
</div>
</div>
<button className="toggle-btn text-zinc-600 hover:text-indigo-400 transition-colors" data-id="rain" onclick="toggleTrack('rain')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2 opacity-50 pointer-events-none range-container transition-opacity">
<input max="100" min="0" oninput="setVolume('rain', this.value)" type="range" value="50"/>
</div>
</div>

<div className="mixer-card group relative bg-zinc-900/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300" id="card-wind">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">Forest Wind</h3>
<p className="text-xs text-zinc-500">Ambience</p>
</div>
</div>
<button className="toggle-btn text-zinc-600 hover:text-emerald-400 transition-colors" data-id="wind" onclick="toggleTrack('wind')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2 opacity-50 pointer-events-none range-container transition-opacity">
<input max="100" min="0" oninput="setVolume('wind', this.value)" type="range" value="40"/>
</div>
</div>

<div className="mixer-card group relative bg-zinc-900/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300" id="card-fire">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
<i className="w-5 h-5" data-lucide="flame"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">Crackling Fire</h3>
<p className="text-xs text-zinc-500">Warmth</p>
</div>
</div>
<button className="toggle-btn text-zinc-600 hover:text-amber-400 transition-colors" data-id="fire" onclick="toggleTrack('fire')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2 opacity-50 pointer-events-none range-container transition-opacity">
<input max="100" min="0" oninput="setVolume('fire', this.value)" type="range" value="60"/>
</div>
</div>

<div className="mixer-card group relative bg-zinc-900/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300" id="card-noise">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="fan"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">Pink Noise</h3>
<p className="text-xs text-zinc-500">Focus</p>
</div>
</div>
<button className="toggle-btn text-zinc-600 hover:text-slate-400 transition-colors" data-id="noise" onclick="toggleTrack('noise')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2 opacity-50 pointer-events-none range-container transition-opacity">
<input max="100" min="0" oninput="setVolume('noise', this.value)" type="range" value="30"/>
</div>
</div>
</div>
</section>
<section className="space-y-6">
<h2 className="text-sm font-medium text-zinc-300 tracking-tight">Sound Library</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
<button className="group flex flex-col items-center justify-center p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:bg-zinc-800/40 hover:border-white/10 transition-all active:scale-95">
<i className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-zinc-200 transition-colors" data-lucide="waves"></i>
<span className="text-xs text-zinc-400 font-medium">Ocean</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:bg-zinc-800/40 hover:border-white/10 transition-all active:scale-95">
<i className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-zinc-200 transition-colors" data-lucide="train"></i>
<span className="text-xs text-zinc-400 font-medium">Train</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:bg-zinc-800/40 hover:border-white/10 transition-all active:scale-95">
<i className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-zinc-200 transition-colors" data-lucide="music-2"></i>
<span className="text-xs text-zinc-400 font-medium">Binaural</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:bg-zinc-800/40 hover:border-white/10 transition-all active:scale-95">
<i className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-zinc-200 transition-colors" data-lucide="keyboard"></i>
<span className="text-xs text-zinc-400 font-medium">ASMR</span>
</button>
</div>
</section>
</div>

<div className="section-hidden space-y-6" id="view-stories">
<div className="grid grid-cols-1 gap-4">

<div className="group relative aspect-[3/1] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-end justify-between">
<div>
<h3 className="text-xl text-white font-medium mb-1">The Alpine Cabin</h3>
<p className="text-sm text-zinc-400 font-light line-clamp-2 max-w-lg">A journey through the snowy peaks into a warm, safe shelter.</p>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10" onclick="playSingleTrack('story1', 'The Alpine Cabin', 'Sleep Story')">
<i className="w-5 h-5 fill-current ml-0.5" data-lucide="play"></i>
</button>
</div>
</div>
</div>

<div className="group relative aspect-[3/1] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-end justify-between">
<div>
<h3 className="text-xl text-white font-medium mb-1">Drifting on the Nile</h3>
<p className="text-sm text-zinc-400 font-light line-clamp-2 max-w-lg">Float gently down the ancient river under starlight.</p>
</div>
<button className="w-12 h-12 rounded-full bg-zinc-800 text-white border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors active:scale-95" onclick="playSingleTrack('story2', 'Drifting on the Nile', 'Sleep Story')">
<i className="w-5 h-5 fill-current ml-0.5" data-lucide="play"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="section-hidden space-y-6" id="view-meditation">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/50 transition-colors cursor-pointer" onclick="playSingleTrack('med1', 'Deep Body Scan', '15 min')">
<div className="flex justify-between items-start mb-8">
<span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 text-[10px] font-medium uppercase tracking-wider border border-indigo-500/20">Focus</span>
<i className="text-zinc-500 hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
<h3 className="text-lg text-white font-medium mb-1">Deep Body Scan</h3>
<p className="text-xs text-zinc-500">Release tension from head to toe.</p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/50 transition-colors cursor-pointer" onclick="playSingleTrack('med2', 'Breathing Rhythm', '10 min')">
<div className="flex justify-between items-start mb-8">
<span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-medium uppercase tracking-wider border border-emerald-500/20">Calm</span>
<i className="text-zinc-500 hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
<h3 className="text-lg text-white font-medium mb-1">Breathing Rhythm</h3>
<p className="text-xs text-zinc-500">Simple 4-7-8 breathing technique.</p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/50 transition-colors cursor-pointer" onclick="playSingleTrack('med3', 'Morning Clarity', '5 min')">
<div className="flex justify-between items-start mb-8">
<span className="px-2 py-1 rounded bg-amber-500/10 text-amber-300 text-[10px] font-medium uppercase tracking-wider border border-amber-500/20">Morning</span>
<i className="text-zinc-500 hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
<h3 className="text-lg text-white font-medium mb-1">Morning Clarity</h3>
<p className="text-xs text-zinc-500">Set your intention for the day.</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 w-full z-50 bg-[#09090b]/90 backdrop-blur-2xl border-t border-white/10 px-6 py-4 md:py-3">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

<div className="flex items-center gap-4 w-full md:w-1/3 justify-start">

<div className="paused relative w-12 h-12 rounded bg-zinc-900 flex items-center justify-center border border-white/5 overflow-hidden group" id="visualizer">
<div className="flex gap-1 items-end h-4">
<div className="w-1 bg-indigo-400 rounded-t-sm h-2 animate-bar-1"></div>
<div className="w-1 bg-indigo-400 rounded-t-sm h-4 animate-bar-2"></div>
<div className="w-1 bg-indigo-400 rounded-t-sm h-3 animate-bar-3"></div>
</div>
</div>
<div className="overflow-hidden">
<h4 className="text-sm font-medium text-zinc-200 truncate" id="player-title">Select a sound</h4>
<p className="text-xs text-zinc-500 font-light truncate" id="player-subtitle">Mixer is empty</p>
</div>
<button className="ml-2 text-zinc-500 hover:text-indigo-400 transition-colors hidden sm:block">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>

<div className="flex flex-col items-center w-full md:w-1/3 gap-1">
<div className="flex items-center gap-6">
<button className="text-zinc-500 hover:text-white transition-colors hidden sm:block">
<i className="w-4 h-4" data-lucide="shuffle"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5 fill-current" data-lucide="skip-back"></i>
</button>

<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform active:scale-95" id="global-play-btn" onclick="toggleGlobalPlay()">
<i className="w-4 h-4 fill-current ml-0.5" data-lucide="play"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5 fill-current" data-lucide="skip-forward"></i>
</button>
<button className="text-zinc-500 hover:text-white transition-colors hidden sm:block">
<i className="w-4 h-4" data-lucide="repeat"></i>
</button>
</div>
</div>

<div className="flex items-center justify-end w-full md:w-1/3 gap-4 hidden md:flex">
<button className="text-zinc-500 hover:text-zinc-300">
<i className="w-4 h-4" data-lucide="mic-2"></i>
</button>
<div className="flex items-center gap-2 w-32 group">
<button className="text-zinc-400">
<i className="w-4 h-4" data-lucide="volume-2"></i>
</button>
<input className="opacity-70 group-hover:opacity-100 transition-opacity" max="100" min="0" oninput="setMasterVolume(this.value)" type="range" value="100"/>
</div>
<button className="text-zinc-500 hover:text-zinc-300 ml-2">
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</button>
</div>

<div className="flex md:hidden w-full justify-around pt-2 border-t border-white/5 mt-2">
<button className="p-2 text-indigo-400" onclick="switchTab('mixer')"><i className="w-5 h-5" data-lucide="waves"></i></button>
<button className="p-2 text-zinc-500" onclick="switchTab('stories')"><i className="w-5 h-5" data-lucide="book-open"></i></button>
<button className="p-2 text-zinc-500" onclick="switchTab('meditation')"><i className="w-5 h-5" data-lucide="mic-2"></i></button>
</div>
</div>
</div>

<audio id="audio-rain" loop="" src="https://assets.mixkit.co/sfx/preview/mixkit-light-rain-loop-1613.mp3"></audio>
<audio id="audio-wind" loop="" src="https://assets.mixkit.co/sfx/preview/mixkit-wind-in-dry-grass-1196.mp3"></audio>
<audio id="audio-fire" loop="" src="https://assets.mixkit.co/sfx/preview/mixkit-camp-fire-crackling-1331.mp3"></audio>
<audio id="audio-noise" loop="" src="https://assets.mixkit.co/sfx/preview/mixkit-white-noise-1454.mp3"></audio>

<audio id="audio-single" src=""></audio>


    </>
  );
}
