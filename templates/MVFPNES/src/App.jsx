import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide icons
      lucide.createIcons({ strokeWidth: 1.5 });

      // State management
      let currentTrack = null;
      let lyrics = [];
      let currentLyricIndex = -1;
      let syncIndex = 0;
      let tapHistory = [];
      let autoScroll = true;
      let globalOffset = 0;
      let isPlaying = false;

      // DOM elements
      const audioPlayer = document.getElementById('audioPlayer');
      const audioFile = document.getElementById('audioFile');
      const lrcFileInput = document.getElementById('lrcFileInput');
      
      const statusIndicator = document.getElementById('statusIndicator');
      const trackName = document.getElementById('trackName');
      const trackArtist = document.getElementById('trackArtist');
      const currentTime = document.getElementById('currentTime');
      const totalTime = document.getElementById('totalTime');
      
      const progressContainer = document.getElementById('progressContainer');
      const progressLoaded = document.getElementById('progressLoaded');
      const progressPlayed = document.getElementById('progressPlayed');
      const progressThumb = document.getElementById('progressThumb');
      
      const playBtn = document.getElementById('playBtn');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      
      const volumeSlider = document.getElementById('volumeSlider');
      const volumeValue = document.getElementById('volumeValue');
      const speedSlider = document.getElementById('speedSlider');
      const speedValue = document.getElementById('speedValue');
      
      const visualizer = document.getElementById('visualizer');
      const lyricsTextarea = document.getElementById('lyricsTextarea');
      const lyricsDisplay = document.getElementById('lyricsDisplay');
      const lyricsScroll = document.getElementById('lyricsScroll');
      
      const offsetSlider = document.getElementById('offsetSlider');
      const offsetValue = document.getElementById('offsetValue');
      const syncTimeline = document.getElementById('syncTimeline');
      const nextSyncIndex = document.getElementById('nextSyncIndex');
      
      const karaokeProgress = document.getElementById('karaokeProgress');
      const karaokeTime = document.getElementById('karaokeTime');

      // Utility functions
      function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }

      function formatTimeWithMs(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        const ms = Math.floor((seconds % 1) * 100);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
      }

      function parseTimeTag(tag) {
        const match = tag.match(/\[(\d{2}):(\d{2})(?:\.(\d{2}))?\]/);
        if (!match) return null;
        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const centiseconds = parseInt(match[3] || '0');
        return minutes * 60 + seconds + centiseconds / 100;
      }

      function createTimeTag(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        const cs = Math.floor((seconds % 1) * 100);
        return `[${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${cs.toString().padStart(2, '0')}]`;
      }

      // Audio handling
      audioFile.addEventListener('change', handleAudioUpload);
      audioPlayer.addEventListener('loadedmetadata', updateTrackInfo);
      audioPlayer.addEventListener('timeupdate', updateProgress);
      audioPlayer.addEventListener('progress', updateBuffered);
      audioPlayer.addEventListener('play', () => { isPlaying = true; showVisualizer(); updatePlayButton(); });
      audioPlayer.addEventListener('pause', () => { isPlaying = false; hideVisualizer(); updatePlayButton(); });
      audioPlayer.addEventListener('ended', () => { isPlaying = false; hideVisualizer(); updatePlayButton(); });

      function handleAudioUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        currentTrack = file;
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.load();

        trackName.textContent = file.name.replace(/\.[^/.]+$/, "");
        trackArtist.textContent = `${(file.size / 1024 / 1024).toFixed(1)} MB • ${file.type.split('/')[1].toUpperCase()}`;
        
        statusIndicator.className = 'absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0F0F23] transition-colors';
      }

      function updateTrackInfo() {
        totalTime.textContent = formatTime(audioPlayer.duration);
        updateSyncTimeline();
      }

      function updateProgress() {
        const current = audioPlayer.currentTime;
        const duration = audioPlayer.duration || 0;
        const percentage = duration ? (current / duration) * 100 : 0;

        currentTime.textContent = formatTime(current);
        karaokeTime.textContent = formatTime(current);
        progressPlayed.style.width = percentage + '%';
        progressThumb.style.left = percentage + '%';
        karaokeProgress.style.width = percentage + '%';

        updateActiveLyric(current);
      }

      function updateBuffered() {
        if (audioPlayer.buffered.length > 0) {
          const duration = audioPlayer.duration || 0;
          const buffered = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
          const percentage = duration ? (buffered / duration) * 100 : 0;
          progressLoaded.style.width = percentage + '%';
        }
      }

      function updatePlayButton() {
        const icon = playBtn.querySelector('i');
        icon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
        lucide.createIcons({ strokeWidth: 1.5 });
      }

      function showVisualizer() {
        visualizer.classList.remove('hidden');
      }

      function hideVisualizer() {
        visualizer.classList.add('hidden');
      }

      // Player controls
      playBtn.addEventListener('click', togglePlay);
      prevBtn.addEventListener('click', () => seekRelative(-10));
      nextBtn.addEventListener('click', () => seekRelative(10));

      function togglePlay() {
        if (!audioPlayer.src) return;
        
        if (isPlaying) {
          audioPlayer.pause();
        } else {
          audioPlayer.play().catch(console.error);
        }
      }

      function seekRelative(seconds) {
        if (!audioPlayer.src) return;
        audioPlayer.currentTime = Math.max(0, Math.min(audioPlayer.duration, audioPlayer.currentTime + seconds));
      }

      // Progress bar seeking
      progressContainer.addEventListener('click', handleSeek);
      
      function handleSeek(event) {
        if (!audioPlayer.src) return;
        
        const rect = progressContainer.getBoundingClientRect();
        const percentage = (event.clientX - rect.left) / rect.width;
        const time = percentage * audioPlayer.duration;
        audioPlayer.currentTime = Math.max(0, Math.min(audioPlayer.duration, time));
      }

      // Volume and speed controls
      volumeSlider.addEventListener('input', (e) => {
        const volume = parseFloat(e.target.value);
        audioPlayer.volume = volume;
        volumeValue.textContent = Math.round(volume * 100);
      });

      speedSlider.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        audioPlayer.playbackRate = speed;
        speedValue.textContent = speed.toFixed(1);
      });

      // Offset control
      offsetSlider.addEventListener('input', (e) => {
        globalOffset = parseFloat(e.target.value);
        offsetValue.textContent = globalOffset.toFixed(1) + 's';
        updateSyncTimeline();
        renderLyrics();
      });

      // Lyrics parsing and management
      document.getElementById('parseLyrics').addEventListener('click', parseLyrics);
      document.getElementById('clearLyrics').addEventListener('click', clearLyrics);
      document.getElementById('tapSync').addEventListener('click', tapSync);
      document.getElementById('undoTap').addEventListener('click', undoTap);
      document.getElementById('exportLRC').addEventListener('click', exportLRC);
      document.getElementById('importLRC').addEventListener('click', () => lrcFileInput.click());

      lrcFileInput.addEventListener('change', importLRCFile);

      function parseLyrics() {
        const text = lyricsTextarea.value.trim();
        if (!text) return;

        lyrics = [];
        const lines = text.split('\n');

        lines.forEach(line => {
          const timeMatch = line.match(/\[(\d{2}:\d{2}(?:\.\d{2})?)\]/);
          if (timeMatch) {
            const time = parseTimeTag(timeMatch[0]);
            const text = line.replace(/\[\d{2}:\d{2}(?:\.\d{2})?\]/g, '').trim();
            lyrics.push({ time, text, synced: true });
          } else if (line.trim()) {
            lyrics.push({ time: null, text: line.trim(), synced: false });
          }
        });

        lyrics.sort((a, b) => {
          if (a.time === null && b.time === null) return 0;
          if (a.time === null) return 1;
          if (b.time === null) return -1;
          return a.time - b.time;
        });

        syncIndex = lyrics.findIndex(lyric => !lyric.synced);
        if (syncIndex === -1) syncIndex = lyrics.length;

        renderLyrics();
        updateSyncTimeline();
      }

      function clearLyrics() {
        lyrics = [];
        syncIndex = 0;
        tapHistory = [];
        currentLyricIndex = -1;
        lyricsTextarea.value = '';
        renderLyrics();
        updateSyncTimeline();
      }

      function tapSync() {
        if (!audioPlayer.src || syncIndex >= lyrics.length) return;

        const currentTime = audioPlayer.currentTime - globalOffset;
        lyrics[syncIndex].time = currentTime;
        lyrics[syncIndex].synced = true;
        
        tapHistory.push(syncIndex);
        syncIndex++;

        // Find next unsynced lyric
        while (syncIndex < lyrics.length && lyrics[syncIndex].synced) {
          syncIndex++;
        }

        renderLyrics();
        updateSyncTimeline();
      }

      function undoTap() {
        if (tapHistory.length === 0) return;

        const lastIndex = tapHistory.pop();
        lyrics[lastIndex].time = null;
        lyrics[lastIndex].synced = false;
        syncIndex = Math.min(syncIndex, lastIndex);

        renderLyrics();
        updateSyncTimeline();
      }

      function exportLRC() {
        if (lyrics.length === 0) return;

        const lrcContent = lyrics
          .filter(lyric => lyric.synced && lyric.time !== null)
          .sort((a, b) => a.time - b.time)
          .map(lyric => `${createTimeTag(lyric.time)} ${lyric.text}`)
          .join('\n');

        const blob = new Blob([lrcContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (trackName.textContent || 'lyrics') + '.lrc';
        a.click();
        URL.revokeObjectURL(url);
      }

      function importLRCFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
          lyricsTextarea.value = e.target.result;
          parseLyrics();
        };
        reader.readAsText(file);
      }

      // Lyrics display
      function renderLyrics() {
        if (lyrics.length === 0) {
          lyricsDisplay.innerHTML = `
            <div class="text-center text-white/40">
              <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="music" class="w-8 h-8"></i>
              </div>
              <p class="text-lg">No lyrics loaded</p>
              <p class="text-sm mt-2">Add some lyrics in the editor to get started</p>
            </div>
          `;
          lucide.createIcons({ strokeWidth: 1.5 });
          return;
        }

        const html = lyrics.map((lyric, index) => {
          const timeDisplay = lyric.synced && lyric.time !== null 
            ? formatTimeWithMs(lyric.time + globalOffset)
            : '--:--.--';
          
          return `
            <div class="lyric-line relative" data-index="${index}" data-time="${lyric.time}">
              <div class="text-sm text-white/40 mb-1 font-mono">${timeDisplay}</div>
              <div class="text-2xl md:text-4xl font-semibold leading-relaxed text-white/60 transition-all duration-500">
                ${lyric.text}
              </div>
              ${index === syncIndex ? '<div class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-8 bg-yellow-400 rounded-full"></div>' : ''}
            </div>
          `;
        }).join('');

        lyricsDisplay.innerHTML = html;
        lucide.createIcons({ strokeWidth: 1.5 });
      }

      function updateActiveLyric(currentTime) {
        if (lyrics.length === 0) return;

        const adjustedTime = currentTime - globalOffset;
        let activeIndex = -1;

        for (let i = lyrics.length - 1; i >= 0; i--) {
          if (lyrics[i].synced && lyrics[i].time !== null && lyrics[i].time <= adjustedTime) {
            activeIndex = i;
            break;
          }
        }

        if (activeIndex !== currentLyricIndex) {
          // Remove previous highlight
          if (currentLyricIndex >= 0) {
            const prevLine = document.querySelector(`[data-index="${currentLyricIndex}"]`);
            if (prevLine) {
              const textEl = prevLine.querySelector('div:last-child');
              textEl.classList.remove('text-white', 'scale-105', 'glow-pulse');
              textEl.classList.add('text-white/60');
            }
          }

          // Add new highlight
          if (activeIndex >= 0) {
            const activeLine = document.querySelector(`[data-index="${activeIndex}"]`);
            if (activeLine) {
              const textEl = activeLine.querySelector('div:last-child');
              textEl.classList.remove('text-white/60');
              textEl.classList.add('text-white', 'scale-105', 'glow-pulse');

              // Auto-scroll
              if (autoScroll) {
                activeLine.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }
            }
          }

          currentLyricIndex = activeIndex;
        }
      }

      function updateSyncTimeline() {
        if (lyrics.length === 0) {
          syncTimeline.innerHTML = '<div class="text-center text-white/40 py-8">No lyrics to sync</div>';
          nextSyncIndex.textContent = '-';
          return;
        }

        const html = lyrics.map((lyric, index) => {
          const status = lyric.synced ? 'synced' : 'pending';
          const statusColor = lyric.synced ? 'bg-green-500' : 'bg-yellow-500';
          const timeDisplay = lyric.synced && lyric.time !== null 
            ? formatTimeWithMs(lyric.time + globalOffset)
            : 'Not synced';

          return `
            <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div class="w-2 h-2 rounded-full ${statusColor}"></div>
              <span class="text-sm font-mono text-white/70 w-20">${timeDisplay}</span>
              <span class="flex-1 text-sm">${lyric.text}</span>
              ${index === syncIndex ? '<span class="text-xs text-yellow-400 font-semibold">NEXT</span>' : ''}
            </div>
          `;
        }).join('');

        syncTimeline.innerHTML = html;
        nextSyncIndex.textContent = syncIndex < lyrics.length ? syncIndex + 1 : 'Done';
      }

      // Auto-scroll toggle
      document.getElementById('autoScrollToggle').addEventListener('click', (e) => {
        autoScroll = !autoScroll;
        e.target.classList.toggle('bg-white/10', autoScroll);
        e.target.classList.toggle('bg-white/5', !autoScroll);
      });

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'TEXTAREA') return;

        switch(e.code) {
          case 'Space':
            e.preventDefault();
            togglePlay();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            seekRelative(-5);
            break;
          case 'ArrowRight':
            e.preventDefault();
            seekRelative(5);
            break;
          case 'KeyT':
            e.preventDefault();
            tapSync();
            break;
          case 'KeyZ':
            if (e.ctrlKey || e.metaKey) {
              e.preventDefault();
              undoTap();
            }
            break;
        }
      });

      // Initialize with sample lyrics
      lyricsTextarea.value = `Welcome to Karaoke Studio Pro
Upload an audio file to get started
Paste your lyrics here
Use the Parse button to process them
Then use Tap Sync while playing to set timestamps
Press Space to play/pause
Use arrow keys to seek
Press T to tap sync
Press Ctrl+Z to undo`;

      // Initialize display
      renderLyrics();
      updateSyncTimeline();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 min-h-screen">

<header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5">
<div className="w-full h-full rounded-lg bg-black/60 backdrop-blur flex items-center justify-center">
<span className="text-lg font-bold tracking-tight">K</span>
</div>
</div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-500 rounded-full border-2 border-[#0F0F23] transition-colors" id="statusIndicator"></div>
</div>
<div>
<h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Karaoke Studio Pro
                </h1>
<p className="text-sm text-white/60">Professional lyric synchronization</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" id="themeToggle">
<i className="w-4 h-4" data-lucide="palette"></i>
</button>
<label className="group cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all" htmlFor="audioFile">
<i className="w-4 h-4" data-lucide="upload"></i>
<span className="hidden sm:inline">Upload Track</span>
<input accept="audio/*" className="hidden" id="audioFile" type="file"/>
</label>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-1 space-y-6">

<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-white/10" id="albumArt">
<i className="w-8 h-8 text-white/60" data-lucide="music"></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-semibold truncate" id="trackName">No track selected</h3>
<p className="text-sm text-white/60" id="trackArtist">Upload an audio file to begin</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-white/50" id="currentTime">00:00</span>
<span className="text-white/30">/</span>
<span className="text-xs text-white/50" id="totalTime">00:00</span>
</div>
</div>
</div>

<div className="space-y-2">
<div className="relative h-2 bg-white/10 rounded-full cursor-pointer group" id="progressContainer">
<div className="absolute inset-y-0 left-0 bg-white/20 rounded-full transition-all" id="progressLoaded"></div>
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all" id="progressPlayed"></div>
<div className="absolute w-4 h-4 bg-white rounded-full -top-1 -translate-x-1/2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" id="progressThumb" style={{left: '0%'}}></div>
</div>
</div>

<div className="flex items-center justify-center gap-3">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" id="prevBtn">
<i className="w-5 h-5" data-lucide="skip-back"></i>
</button>
<button className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ring-2 ring-purple-500/20 transition-all" id="playBtn">
<i className="w-6 h-6" data-lucide="play"></i>
</button>
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" id="nextBtn">
<i className="w-5 h-5" data-lucide="skip-forward"></i>
</button>
</div>

<div className="hidden flex items-end justify-center h-12 gap-1" id="visualizer">
<div className="spectrum-bar waveform-bar h-4"></div>
<div className="spectrum-bar waveform-bar h-8"></div>
<div className="spectrum-bar waveform-bar h-6"></div>
<div className="spectrum-bar waveform-bar h-10"></div>
<div className="spectrum-bar waveform-bar h-5"></div>
<div className="spectrum-bar waveform-bar h-9"></div>
<div className="spectrum-bar waveform-bar h-7"></div>
<div className="spectrum-bar waveform-bar h-11"></div>
<div className="spectrum-bar waveform-bar h-4"></div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm text-white/70">
<i className="w-4 h-4" data-lucide="volume-2"></i>
                    Volume
                  </label>
<input className="w-full accent-purple-500" id="volumeSlider" max="1" min="0" step="0.01" type="range" value="0.8"/>
<div className="text-xs text-white/50 text-center"><span id="volumeValue">80</span>%</div>
</div>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm text-white/70">
<i className="w-4 h-4" data-lucide="zap"></i>
                    Speed
                  </label>
<input className="w-full accent-purple-500" id="speedSlider" max="1.5" min="0.5" step="0.1" type="range" value="1"/>
<div className="text-xs text-white/50 text-center"><span id="speedValue">1.0</span>x</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold">Lyric Editor</h2>
<div className="flex items-center gap-2">
<button className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" id="clearLyrics">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
<button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors" id="importLRC">
<i className="w-4 h-4" data-lucide="file-plus"></i>
</button>
</div>
</div>
<textarea className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-white/40 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none" id="lyricsTextarea" placeholder="Paste your lyrics here or import an LRC file...

Example:
[00:12.50] First line of lyrics
[00:18.00] Second line of lyrics
Or just plain text without timestamps" rows="8"></textarea>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" id="parseLyrics">
<i className="w-4 h-4" data-lucide="file-text"></i>
                  Parse
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors" id="tapSync">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Tap Sync
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors" id="undoTap">
<i className="w-4 h-4" data-lucide="undo-2"></i>
                  Undo
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors" id="exportLRC">
<i className="w-4 h-4" data-lucide="download"></i>
                  Export
                </button>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-white/10">
<label className="text-sm text-white/70 whitespace-nowrap">Offset:</label>
<input className="flex-1 accent-purple-500" id="offsetSlider" max="3" min="-3" step="0.1" type="range" value="0"/>
<span className="text-sm text-white/70 w-12 text-right" id="offsetValue">0.0s</span>
</div>
</div>
</div>

<div className="xl:col-span-2">
<div className="bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl rounded-2xl border border-white/10 h-[70vh] flex flex-col overflow-hidden">

<div className="flex items-center justify-between p-6 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="mic-2"></i>
</div>
<h2 className="text-xl font-semibold">Karaoke View</h2>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors" id="autoScrollToggle">
<i className="w-4 h-4" data-lucide="move"></i>
                    Auto-scroll
                  </button>
<button className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors" id="fullscreenBtn">
<i className="w-4 h-4" data-lucide="maximize"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-hidden relative" id="lyricsContainer">
<div className="h-full overflow-y-auto px-8 py-8 scroll-smooth" id="lyricsScroll">
<div className="space-y-6 min-h-full flex flex-col justify-center" id="lyricsDisplay">
<div className="text-center text-white/40">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="music"></i>
</div>
<p className="text-lg">Load a track and add lyrics to get started</p>
<p className="text-sm mt-2">Upload an audio file and paste your lyrics above</p>
</div>
</div>
</div>

<div className="absolute bottom-4 left-8 right-8">
<div className="bg-black/60 backdrop-blur-lg rounded-lg p-3 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-purple-500 glow-pulse"></div>
<div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" id="karaokeProgress" style={{width: '0%'}}></div>
</div>
<div className="text-sm text-white/70 font-mono" id="karaokeTime">00:00</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold">Sync Timeline</h2>
<div className="flex items-center gap-2">
<span className="text-sm text-white/60">Next to sync:</span>
<span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm font-mono" id="nextSyncIndex">-</span>
</div>
</div>
<div className="space-y-2 max-h-48 overflow-y-auto" id="syncTimeline">

</div>
</div>
</main>

<audio crossorigin="anonymous" id="audioPlayer"></audio>

<input accept=".lrc,.txt" className="hidden" id="lrcFileInput" type="file"/>
</div>




    </>
  );
}
