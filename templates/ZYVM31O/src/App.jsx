import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Track Library (same as before)
      const trackLibrary = [
        {
          id: 1,
          title: "Midnight Synthwave",
          artist: "AURORA x Lumen",
          album: "Neon Dreams",
          year: "2025",
          duration: "6:12",
          plays: "32.1M",
          rating: "4.9★",
          artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=faces&auto=format",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          artistAvatar: "AX",
          tags: [
            { name: "Synthwave", color: "indigo" },
            { name: "Chill", color: "purple" },
            { name: "4.9★", color: "emerald" }
          ],
          releaseDate: "Released Jan 15, 2025",
          waveform: [12, 16, 22, 28, 35, 42, 48, 54, 59, 62, 64, 63, 60, 56, 51, 44, 38, 31, 24, 19, 15, 11]
        },
        {
          id: 2,
          title: "Digital Horizon",
          artist: "CyberNova",
          album: "Future Pulse",
          year: "2024",
          duration: "4:38",
          plays: "15.7M",
          rating: "4.7★",
          artwork: "https://images.unsplash.com/photo-1571974599782-87624638275b?w=400&h=400&fit=crop&crop=faces&auto=format",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          artistAvatar: "CN",
          tags: [
            { name: "Electronic", color: "blue" },
            { name: "Upbeat", color: "orange" },
            { name: "4.7★", color: "emerald" }
          ],
          releaseDate: "Released Aug 22, 2024",
          waveform: [19, 28, 24, 36, 43, 31, 52, 58, 47, 64, 60, 55, 44, 34, 28, 23, 31, 36, 25, 20, 15, 12]
        },
        {
          id: 3,
          title: "Ocean Dreams",
          artist: "Wavelength",
          album: "Deep Blue",
          year: "2024",
          duration: "5:24",
          plays: "28.9M",
          rating: "4.8★",
          artwork: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=faces&auto=format",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          artistAvatar: "WL",
          tags: [
            { name: "Ambient", color: "teal" },
            { name: "Relaxing", color: "blue" },
            { name: "4.8★", color: "emerald" }
          ],
          releaseDate: "Released May 10, 2024",
          waveform: [13, 19, 15, 20, 25, 23, 28, 34, 31, 36, 42, 39, 44, 34, 28, 23, 25, 20, 17, 15, 13, 12]
        },
        {
          id: 4,
          title: "Neon Lights",
          artist: "Electric Pulse",
          album: "City Nights",
          year: "2023",
          duration: "3:45",
          plays: "42.3M",
          rating: "4.9★",
          artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop&crop=faces&auto=format",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
          artistAvatar: "EP",
          tags: [
            { name: "Dance", color: "pink" },
            { name: "Energetic", color: "red" },
            { name: "4.9★", color: "emerald" }
          ],
          releaseDate: "Released Dec 3, 2023",
          waveform: [23, 36, 31, 50, 60, 42, 64, 64, 52, 64, 64, 63, 55, 44, 34, 28, 39, 50, 36, 25, 20, 16]
        },
        {
          id: 5,
          title: "Starfield Journey",
          artist: "Cosmic Drift",
          album: "Interstellar",
          year: "2024",
          duration: "7:15",
          plays: "19.6M",
          rating: "4.6★",
          artwork: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=faces&auto=format",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
          artistAvatar: "CD",
          tags: [
            { name: "Space", color: "purple" },
            { name: "Epic", color: "indigo" },
            { name: "4.6★", color: "emerald" }
          ],
          releaseDate: "Released Mar 18, 2024",
          waveform: [16, 23, 28, 34, 39, 44, 50, 55, 60, 64, 63, 64, 58, 52, 47, 39, 34, 28, 23, 17, 15, 13]
        }
      ];

      // Initialize icons
      lucide.createIcons();

      // Current track management
      let currentTrackIndex = 0;
      let currentTrack = trackLibrary[currentTrackIndex];

      // DOM elements (same as before)
      const audio = document.getElementById('audio');
      const btnPlay = document.getElementById('btnPlay');
      const btnPrev = document.getElementById('btnPrev');
      const btnNext = document.getElementById('btnNext');
      const btnLike = document.getElementById('btnLike');
      const btnShuffle = document.getElementById('btnShuffle');
      const btnRepeat = document.getElementById('btnRepeat');
      const btnMute = document.getElementById('btnMute');
      const btnQueue = document.getElementById('btnQueue');

      const currentTimeEl = document.getElementById('currentTime');
      const totalDurationEl = document.getElementById('totalDuration');
      const miniTimeEl = document.getElementById('miniTime');

      const progressBar = document.getElementById('progressBar');
      const progressThumb = document.getElementById('progressThumb');
      const seekArea = document.getElementById('seekArea');

      const playerCard = document.getElementById('playerCard');
      const waveContainer = document.getElementById('waveContainer');

      // Track selector elements
      const trackSelector = document.getElementById('trackSelector');
      const closeTracks = document.getElementById('closeTracks');
      const albumArtContainer = document.getElementById('albumArtContainer');

      // Track info elements
      const trackTitle = document.getElementById('trackTitle');
      const trackArtist = document.getElementById('trackArtist');
      const trackAlbum = document.getElementById('trackAlbum');
      const trackYear = document.getElementById('trackYear');
      const trackTags = document.getElementById('trackTags');
      const trackPlays = document.getElementById('trackPlays');
      const trackReleaseDate = document.getElementById('trackReleaseDate');
      const albumArt = document.getElementById('albumArt');
      const artistAvatar = document.getElementById('artistAvatar');

      // Enhanced time formatting
      const formatTime = (t) => {
        if (!isFinite(t)) return '0:00';
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
      };

      // Enhanced waveform interaction with ripple effect
      function createWaveRipple(clientX) {
        const ripple = document.getElementById('waveRipple');
        const rect = waveContainer.getBoundingClientRect();
        const x = clientX - rect.left;
        
        ripple.style.background = `radial-gradient(circle at ${x}px 50%, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.2) 30%, transparent 70%)`;
        ripple.style.opacity = '1';
        
        setTimeout(() => {
          ripple.style.opacity = '0';
        }, 300);
      }

      // Enhanced button click effects
      function createButtonRipple(button, e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.className = 'absolute rounded-full bg-white/20 pointer-events-none animate-ping';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }

      // Load track data with enhanced animations
      function loadTrack(track) {
        currentTrack = track;
        
        // Add loading animation
        playerCard.classList.add('animate-pulse');
        
        setTimeout(() => {
          // Update UI elements
          trackTitle.textContent = track.title;
          trackArtist.textContent = track.artist;
          trackAlbum.textContent = track.album;
          trackYear.textContent = track.year;
          trackPlays.textContent = `🎵 ${track.plays} plays`;
          trackReleaseDate.textContent = track.releaseDate;
          albumArt.src = track.artwork;
          albumArt.alt = `${track.title} album art`;
          artistAvatar.textContent = track.artistAvatar;
          totalDurationEl.textContent = track.duration;
          miniTimeEl.textContent = `0:00 / ${track.duration}`;
          
          // Update tags with stagger animation
          trackTags.innerHTML = track.tags.map((tag, index) => 
            `<span class="px-2.5 py-1 text-[10px] font-medium bg-${tag.color}-500/20 text-${tag.color}-300 rounded-lg ring-1 ring-${tag.color}-500/30 hover:bg-${tag.color}-500/30 hover:scale-105 transition-all duration-200 animate-tag-pop" style="animation-delay: ${index * 0.1}s;">${tag.name}</span>`
          ).join('');
          
          // Update waveform
          updateWaveform(track.waveform);
          
          // Load audio
          audio.src = track.audioSrc;
          audio.load();
          
          // Reset progress
          progressBar.style.width = '0%';
          progressThumb.style.left = '0%';
          currentTimeEl.textContent = '0:00';
          
          playerCard.classList.remove('animate-pulse');
        }, 300);
      }

      // Update waveform visualization with enhanced effects
      function updateWaveform(heights) {
        const bars = waveContainer.children;
        heights.forEach((height, index) => {
          if (bars[index] && bars[index].classList.contains('wave-bar')) {
            bars[index].style.height = `${height}px`;
            bars[index].style.animationDelay = `${index * 40}ms`;
          }
        });
      }

      // Create track selector with enhanced animations
      function createTrackSelector() {
        const trackList = trackSelector.querySelector('.flex-1');
        trackList.innerHTML = trackLibrary.map((track, index) => `
          <div class="track-item group/track relative rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-4 hover:bg-black/30 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-slide-in ${index === currentTrackIndex ? 'ring-2 ring-indigo-500/50 bg-indigo-500/10' : ''}" data-track-id="${track.id}" style="animation-delay: ${index * 0.05}s;">
            <div class="flex items-center gap-4">
              <div class="relative shrink-0">
                <div class="w-16 h-16 rounded-xl overflow-hidden ring-1 ring-white/20">
                  <img src="${track.artwork}" alt="${track.title}" class="w-full h-full object-cover group-hover/track:scale-110 transition-transform duration-300">
                </div>
                ${index === currentTrackIndex ? '<div class="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl"><div class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse-fast"></div></div>' : ''}
              </div>
              
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-white mb-1 truncate">${track.title}</h3>
                <div class="flex items-center gap-2 text-[12px] text-white/70 mb-2">
                  <span>${track.artist}</span>
                  <span class="w-1 h-1 bg-white/30 rounded-full animate-pulse"></span>
                  <span>${track.duration}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="px-2 py-0.5 text-[10px] bg-white/10 text-white/60 rounded-md hover:bg-white/20 transition-colors">${track.rating}</span>
                  <span class="text-[10px] text-white/50">${track.plays} plays</span>
                </div>
              </div>
              
              <div class="shrink-0 opacity-0 group-hover/track:opacity-100 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="play" class="lucide lucide-play h-5 w-5 stroke-[1.5] text-white/70 animate-pulse"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              </div>
            </div>
          </div>
        `).join('');
        
        // Add click listeners to track items
        trackList.querySelectorAll('.track-item').forEach(item => {
          item.addEventListener('click', (e) => {
            createButtonRipple(item, e);
            const trackId = parseInt(item.dataset.trackId);
            const trackIndex = trackLibrary.findIndex(t => t.id === trackId);
            if (trackIndex !== -1) {
              currentTrackIndex = trackIndex;
              loadTrack(trackLibrary[currentTrackIndex]);
              closeTrackSelector();
            }
          });
        });
        
        lucide.createIcons();
      }

      // Enhanced show/hide track selector with transform
      function showTrackSelector() {
        trackSelector.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        trackSelector.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        createTrackSelector();
      }

      function closeTrackSelector() {
        trackSelector.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        trackSelector.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
      }

      // Enhanced play/pause toggle with icon management
      let playIcon, pauseIcon;
      
      function initializeIcons() {
        const playButton = document.getElementById('btnPlay');
        playIcon = playButton.querySelector('[data-lucide="play"]');
        pauseIcon = playButton.querySelector('[data-lucide="pause"]');
      }

      function setPlayingUI(playing) {
        if (playing) {
          playerCard.classList.add('is-playing');
          if (playIcon) playIcon.style.display = 'none';
          if (pauseIcon) pauseIcon.style.display = 'inline';
          btnPlay.setAttribute('aria-label', 'Pause');
        } else {
          playerCard.classList.remove('is-playing');
          if (playIcon) playIcon.style.display = 'inline';
          if (pauseIcon) pauseIcon.style.display = 'none';
          btnPlay.setAttribute('aria-label', 'Play');
        }
      }

      function updateProgress() {
        const percent = (audio.currentTime / (audio.duration || 1)) * 100;
        progressBar.style.width = percent + '%';
        progressThumb.style.left = `calc(${percent}% - 12px)`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        miniTimeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration || 0)}`;
        requestAnimationFrame(() => {
          if (!audio.paused) updateProgress();
        });
      }

      // Track navigation with enhanced effects
      function playNextTrack() {
        // Add transition effect
        playerCard.style.transform = 'translateX(-10px)';
        setTimeout(() => {
          playerCard.style.transform = '';
        }, 200);
        
        if (btnShuffle.getAttribute('aria-pressed') === 'true') {
          const randomIndex = Math.floor(Math.random() * trackLibrary.length);
          currentTrackIndex = randomIndex;
        } else {
          currentTrackIndex = (currentTrackIndex + 1) % trackLibrary.length;
        }
        loadTrack(trackLibrary[currentTrackIndex]);
        if (!audio.paused) {
          setTimeout(() => audio.play(), 100);
        }
      }

      function playPreviousTrack() {
        // Add transition effect
        playerCard.style.transform = 'translateX(10px)';
        setTimeout(() => {
          playerCard.style.transform = '';
        }, 200);
        
        if (audio.currentTime > 5) {
          audio.currentTime = 0;
        } else {
          currentTrackIndex = currentTrackIndex === 0 ? trackLibrary.length - 1 : currentTrackIndex - 1;
          loadTrack(trackLibrary[currentTrackIndex]);
          if (!audio.paused) {
            setTimeout(() => audio.play(), 100);
          }
        }
      }

      // Enhanced event listeners with button effects
      btnPlay.addEventListener('click', (e) => {
        createButtonRipple(btnPlay, e);
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      btnNext.addEventListener('click', (e) => {
        createButtonRipple(btnNext, e);
        playNextTrack();
      });
      
      btnPrev.addEventListener('click', (e) => {
        createButtonRipple(btnPrev, e);
        playPreviousTrack();
      });

      // Enhanced waveform interaction
      waveContainer.addEventListener('click', (e) => {
        createWaveRipple(e.clientX);
      });

      waveContainer.addEventListener('mousemove', (e) => {
        const rect = waveContainer.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        const children = Array.from(waveContainer.children).filter(child => child.classList.contains('wave-bar'));
        
        children.forEach((bar, idx) => {
          const t = idx / children.length;
          const dist = Math.abs(t - ratio);
          const boost = Math.max(0, 1 - dist * 6);
          bar.style.transform = `scaleY(${1 + boost * 0.4}) scaleX(${1 + boost * 0.2})`;
          bar.style.filter = `brightness(${1 + boost * 0.7}) saturate(${1 + boost * 0.5})`;
        });
      });
      
      waveContainer.addEventListener('mouseleave', () => {
        const children = Array.from(waveContainer.children).filter(child => child.classList.contains('wave-bar'));
        children.forEach((bar) => {
          bar.style.transform = '';
          bar.style.filter = '';
        });
      });

      // Rest of the event listeners remain the same...
      // Track selector event listeners
      albumArtContainer.addEventListener('click', showTrackSelector);
      btnQueue.addEventListener('click', showTrackSelector);
      closeTracks.addEventListener('click', closeTrackSelector);

      // Close track selector on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeTrackSelector();
      });

      audio.addEventListener('play', () => {
        setPlayingUI(true);
        requestAnimationFrame(updateProgress);
      });

      audio.addEventListener('pause', () => {
        setPlayingUI(false);
        updateProgress();
      });

      audio.addEventListener('ended', () => {
        if (btnRepeat.getAttribute('aria-pressed') === 'true') {
          audio.currentTime = 0;
          audio.play();
        } else {
          playNextTrack();
        }
      });

      audio.addEventListener('loadedmetadata', () => {
        totalDurationEl.textContent = formatTime(audio.duration);
        miniTimeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        updateProgress();
      });

      // Enhanced seeking
      function seekTo(clientX) {
        const rect = seekArea.getBoundingClientRect();
        const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        const ratio = x / rect.width;
        audio.currentTime = ratio * (audio.duration || 0);
        updateProgress();
      }
      
      let seeking = false;
      seekArea.addEventListener('pointerdown', (e) => {
        seeking = true;
        seekArea.setPointerCapture(e.pointerId);
        seekTo(e.clientX);
      });
      seekArea.addEventListener('pointermove', (e) => {
        if (seeking) seekTo(e.clientX);
      });
      seekArea.addEventListener('pointerup', (e) => {
        seeking = false;
        seekArea.releasePointerCapture(e.pointerId);
      });

      // Enhanced like button with heart animation
      btnLike.addEventListener('click', (e) => {
        createButtonRipple(btnLike, e);
        const pressed = btnLike.getAttribute('aria-pressed') === 'true';
        btnLike.setAttribute('aria-pressed', String(!pressed));
        btnLike.classList.toggle('text-rose-400', !pressed);
        btnLike.classList.toggle('bg-rose-500/10', !pressed);
        btnLike.classList.toggle('ring-1', !pressed);
        btnLike.classList.toggle('ring-rose-500/20', !pressed);
      });

      // Enhanced toggle buttons
      btnShuffle.addEventListener('click', (e) => {
        createButtonRipple(btnShuffle, e);
        const pressed = btnShuffle.getAttribute('aria-pressed') === 'true';
        btnShuffle.setAttribute('aria-pressed', String(!pressed));
        btnShuffle.classList.toggle('bg-indigo-500/20', !pressed);
        btnShuffle.classList.toggle('text-indigo-300', !pressed);
        btnShuffle.classList.toggle('ring-1', !pressed);
        btnShuffle.classList.toggle('ring-indigo-500/30', !pressed);
      });

      btnRepeat.addEventListener('click', (e) => {
        createButtonRipple(btnRepeat, e);
        const pressed = btnRepeat.getAttribute('aria-pressed') === 'true';
        btnRepeat.setAttribute('aria-pressed', String(!pressed));
        btnRepeat.classList.toggle('bg-purple-500/20', !pressed);
        btnRepeat.classList.toggle('text-purple-300', !pressed);
        btnRepeat.classList.toggle('ring-1', !pressed);
        btnRepeat.classList.toggle('ring-purple-500/30', !pressed);
      });

      // Enhanced volume control
      let lastVolume = 1;
      btnMute.addEventListener('click', (e) => {
        createButtonRipple(btnMute, e);
        if (audio.muted || audio.volume === 0) {
          audio.muted = false;
          audio.volume = lastVolume || 1;
          btnMute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="volume-2" class="lucide lucide-volume-2 h-4 w-4 stroke-[1.5] group-hover/volume:animate-bounce transition-transform"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg><span class="hidden sm:inline">Vol</span>';
        } else {
          lastVolume = audio.volume;
          audio.muted = true;
          audio.volume = 0;
          btnMute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="volume-x" class="lucide lucide-volume-x h-4 w-4 stroke-[1.5] group-hover/volume:animate-bounce transition-transform"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg><span class="hidden sm:inline">Muted</span>';
        }
        lucide.createIcons();
      });

      // Initialize
      setTimeout(() => {
        initializeIcons();
        loadTrack(trackLibrary[currentTrackIndex]);
      }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed inset-0 -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO" width="100%"></iframe>
</div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse floating-orb" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse floating-orb" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
<div className="absolute top-3/4 left-1/2 w-64 h-64 bg-fuchsia-500/6 rounded-full blur-3xl animate-pulse floating-orb" style={{animationDuration: '10s', animationDelay: '4s'}}></div>

<div className="floating-particle absolute w-2 h-2 bg-indigo-400/30 rounded-full" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
<div className="floating-particle absolute w-1 h-1 bg-purple-400/40 rounded-full" style={{top: '60%', left: '80%', animationDelay: '2s'}}></div>
<div className="floating-particle absolute w-1.5 h-1.5 bg-fuchsia-400/35 rounded-full" style={{top: '30%', right: '20%', animationDelay: '4s'}}></div>
<div className="floating-particle absolute w-1 h-1 bg-cyan-400/40 rounded-full" style={{top: '80%', left: '30%', animationDelay: '6s'}}></div>
<div className="floating-particle absolute w-2 h-2 bg-pink-400/30 rounded-full" style={{top: '10%', right: '40%', animationDelay: '8s'}}></div>
</div>
<div className="w-full max-w-md mx-auto relative z-10">

<div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-xl rounded-3xl opacity-0 pointer-events-none transition-all duration-500 overflow-hidden transform scale-95" id="trackSelector">

<div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none"></div>
<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight glow-text">Choose Track</h2>
<button className="rounded-xl p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 hover:rotate-90" id="closeTracks">
<svg className="lucide lucide-x h-5 w-5 stroke-[1.5]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto space-y-3 pr-2" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent'}}>

</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl ring-1 ring-black/5 shadow-2xl shadow-black/25 hover:shadow-indigo-500/10 transition-all duration-500" id="playerCard">

<div aria-hidden="true" className="pointer-events-none absolute -inset-40 opacity-30 blur-3xl transition-all duration-1000 group-[.is-playing]:opacity-50 group-[.is-playing]:animate-pulse-glow" style={{background: 'radial-gradient(60% 60% at 30% 30%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.25) 35%, rgba(236,72,153,0.15) 70%, transparent 100%)'}}></div>

<div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none"></div>

<div className="absolute inset-0 rounded-3xl opacity-0 group-[.is-playing]:opacity-100 transition-opacity duration-1000 border-glow"></div>

<div className="relative z-20 p-6">
<div className="flex items-start gap-5">

<div className="relative shrink-0 group/art cursor-pointer" id="albumArtContainer">
<div className="h-32 w-32 overflow-hidden rounded-2xl ring-2 ring-white/20 shadow-2xl shadow-black/40 relative group-[.is-playing]:animate-slow-spin">
<img alt="Midnight Synthwave album art" className="h-full w-full object-cover transition-all duration-500 group-hover/art:scale-110 group-[.is-playing]:brightness-110" id="albumArt" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&amp;h=400&amp;fit=crop&amp;crop=faces&amp;auto=format" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

<div className="absolute inset-0 opacity-0 group-hover/art:opacity-100 group-[.is-playing]:opacity-60 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/art:opacity-100 transition-opacity duration-300 bg-black/30">
<div className="rounded-full bg-white/20 backdrop-blur-sm p-3 animate-pulse-slow">
<svg className="lucide lucide-music h-6 w-6 stroke-[1.5] text-white" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
</div>
</div>

<div className="absolute -bottom-2 -right-2 flex flex-col gap-1">
<div className="flex items-center gap-1.5 rounded-xl bg-black/40 backdrop-blur-md px-2.5 py-1.5 ring-1 ring-white/20 shadow-lg animate-float" style={{animationDelay: '0s'}}>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-fast"></div>
<span className="text-[10px] font-medium text-white/90">LIVE</span>
</div>
<div className="flex items-center gap-1 rounded-xl bg-black/40 backdrop-blur-md px-2.5 py-1.5 ring-1 ring-white/20 shadow-lg animate-float" style={{animationDelay: '1s'}}>
<svg className="lucide lucide-headphones h-3 w-3 text-indigo-300 stroke-[1.5] animate-wiggle" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="text-[10px] font-medium text-white/70">Spatial</span>
</div>
</div>

<div className="absolute inset-0 ring-2 ring-indigo-400/0 group-[.is-playing]:ring-indigo-400/30 transition-all duration-500 group-[.is-playing]:animate-pulse-rainbow bg-cover rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/199b7f0b-63c0-4f20-921a-05c62d6e5827_800w.jpg)] bg-center"></div>
</div>

<div className="min-w-0 flex-1">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase tracking-[0.1em] text-white/50 font-medium animate-fade-in">Now playing</span>
<div className="w-1 h-1 rounded-full bg-indigo-400 animate-bounce group-[.is-playing]:animate-ping-slow"></div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Like" className="rounded-xl p-2 text-white/60 hover:text-rose-400 hover:bg-white/10 hover:ring-1 hover:ring-rose-400/20 transition-all duration-200 group/like hover:scale-110" id="btnLike">
<svg className="lucide lucide-heart h-4 w-4 stroke-[1.5] group-hover/like:animate-heartbeat transition-transform" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-label="More" className="rounded-xl p-2 text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/10 transition-all duration-200 group/more hover:scale-110">
<svg className="lucide lucide-more-horizontal h-4 w-4 stroke-[1.5] group-hover/more:animate-wiggle transition-transform" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
<h1 className="text-[26px] leading-tight tracking-tight font-semibold text-white mb-1 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text animate-slide-up" id="trackTitle">Midnight Synthwave</h1>
<div className="flex items-center gap-2 text-[13px] text-white/70 mb-3 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-[10px] font-bold text-white animate-spin-slow" id="artistAvatar">AX</div>
<span className="font-medium" id="trackArtist">AURORA x Lumen</span>
</div>
<span className="w-1 h-1 rounded-full bg-white/30 animate-pulse"></span>
<span id="trackAlbum">Neon Dreams</span>
<span className="w-1 h-1 rounded-full bg-white/30 animate-pulse" style={{animationDelay: '0.5s'}}></span>
<span className="" id="trackYear">2025</span>
</div>

<div className="flex flex-wrap gap-1 sm:gap-1.5 items-center animate-slide-up" id="trackTags" style={{animationDelay: '0.2s'}}><span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium bg-indigo-500/20 text-indigo-300 rounded-md sm:rounded-lg ring-1 ring-indigo-500/30 hover:bg-indigo-500/30 hover:scale-105 transition-all duration-200 animate-tag-pop" style={{animationDelay: '0s'}}>Synthwave</span><span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium bg-purple-500/20 text-purple-300 rounded-md sm:rounded-lg ring-1 ring-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 animate-tag-pop" style={{animationDelay: '0.1s'}}>Chill</span><span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium bg-emerald-500/20 text-emerald-300 rounded-md sm:rounded-lg ring-1 ring-emerald-500/30 hover:bg-emerald-500/30 hover:scale-105 transition-all duration-200 animate-tag-pop" style={{animationDelay: '0.2s'}}>4.9★</span></div>
</div>
</div>
</div>

<div className="relative z-20 px-6 mb-4">
<div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-4 shadow-inner hover:bg-black/30 transition-all duration-300">
<div className="flex items-center justify-between mb-3 text-[11px] text-white/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-3.5 w-3.5 stroke-[1.5] group-[.is-playing]:animate-pulse" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span>Waveform</span>
</div>
<div className="flex items-center gap-1">
<span className="text-indigo-300 font-mono animate-flicker">192kHz</span>
<span>/</span>
<span className="text-emerald-300 font-mono animate-flicker" style={{animationDelay: '0.5s'}}>24bit</span>
</div>
</div>
<div className="relative h-16 w-full flex items-end justify-between cursor-pointer gap-px group/wave" id="waveContainer">

<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/60 to-indigo-300/80 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '12px', animationDelay: '0ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/65 to-indigo-300/85 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '16px', animationDelay: '40ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/70 to-purple-300/80 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '22px', animationDelay: '80ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/75 to-purple-300/85 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '28px', animationDelay: '120ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-purple-400/70 to-purple-300/90 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '35px', animationDelay: '160ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-purple-400/75 to-fuchsia-300/80 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '42px', animationDelay: '200ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-purple-400/80 to-fuchsia-300/85 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '48px', animationDelay: '240ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-fuchsia-400/75 to-fuchsia-300/90 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '54px', animationDelay: '280ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-fuchsia-400/80 to-pink-300/85 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '59px', animationDelay: '320ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-fuchsia-400/85 to-pink-300/90 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '62px', animationDelay: '360ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-pink-400/80 to-rose-300/90 group-[.is-playing]:animate-wave-dance shadow-lg shadow-pink-500/20 transition-all duration-200 hover:scale-110" style={{height: '64px', animationDelay: '400ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-pink-400/85 to-rose-300/95 group-[.is-playing]:animate-wave-dance shadow-lg shadow-pink-500/20 transition-all duration-200 hover:scale-110" style={{height: '63px', animationDelay: '440ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-rose-400/80 to-rose-300/90 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '60px', animationDelay: '480ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-rose-400/75 to-pink-300/85 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '56px', animationDelay: '520ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-pink-400/70 to-fuchsia-300/80 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '51px', animationDelay: '560ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-fuchsia-400/65 to-purple-300/75 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '44px', animationDelay: '600ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-purple-400/60 to-indigo-300/70 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '38px', animationDelay: '640ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/55 to-indigo-300/65 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '31px', animationDelay: '680ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/50 to-indigo-300/60 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '24px', animationDelay: '720ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/45 to-indigo-300/55 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '19px', animationDelay: '760ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/40 to-indigo-300/50 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '15px', animationDelay: '800ms'}}></div>
<div className="wave-bar w-2 rounded-full bg-gradient-to-t from-indigo-400/35 to-indigo-300/45 group-[.is-playing]:animate-wave-dance shadow-sm transition-all duration-200 hover:scale-110" style={{height: '11px', animationDelay: '840ms'}}></div>

<div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" id="waveRipple"></div>
</div>
</div>
</div>

<div className="relative z-20 px-6 mb-4">
<div className="flex items-center justify-between text-[11px] text-white/60 mb-3">
<div className="flex items-center gap-2 font-mono">
<span className="text-indigo-300 animate-digital-flicker" id="currentTime">0:00</span>
</div>
<div className="flex items-center gap-2 font-mono">
<span className="text-white/50" id="totalDuration">6:12</span>
</div>
</div>
<div className="group/seek relative h-2 rounded-full bg-white/10 hover:bg-white/15 transition-all duration-200 cursor-pointer ring-1 ring-inset ring-white/5 overflow-hidden" id="seekArea">
<div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 shadow-sm shadow-indigo-500/25 transition-all duration-200 group-[.is-playing]:animate-progress-glow" id="progressBar" style={{width: '0%'}}></div>
<div className="absolute -top-2 h-6 w-6 rounded-full bg-white shadow-xl ring-4 ring-indigo-500/20 opacity-0 group-[.is-playing]:opacity-100 group-hover/seek:opacity-100 transition-all duration-200 group-hover/seek:scale-110 animate-bounce-subtle" id="progressThumb" style={{left: 'calc(0% - 12px)'}}></div>

<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/0 via-purple-400/20 to-fuchsia-400/0 opacity-0 group-hover/seek:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
</div>
</div>

<div className="relative z-20 px-6 mb-4">
<div className="flex items-center justify-center">

<div className="flex items-center gap-4">
<button aria-label="Previous" className="group/prev rounded-full p-3 text-white/70 hover:text-white hover:bg-white/10 hover:ring-2 hover:ring-white/20 transition-all duration-200 hover:scale-105 hover:rotate-12" id="btnPrev">
<svg className="lucide lucide-skip-back h-5 w-5 stroke-[1.5] group-hover/prev:animate-wiggle transition-transform" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path><path d="M3 20V4"></path></svg>
</button>
<button aria-label="Play" className="group/play relative inline-flex items-center justify-center rounded-full h-16 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 hover:ring-4 ring-indigo-500/25 focus:outline-none transition-all duration-300 hover:scale-105 shadow-xl shadow-indigo-500/25 group-[.is-playing]:animate-pulse-button" id="btnPlay">
<svg className="lucide lucide-play h-7 w-7 stroke-[1.5] translate-x-[1px] group-hover/play:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<svg className="lucide lucide-pause hidden h-7 w-7 stroke-[1.5] group-hover/play:scale-110 transition-transform" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>

<div className="absolute inset-0 rounded-full ring-2 ring-indigo-400/0 group-[.is-playing]:ring-indigo-400/50 group-[.is-playing]:animate-ping-rainbow"></div>

<div className="absolute inset-0 rounded-full ring-4 ring-purple-400/0 group-[.is-playing]:ring-purple-400/30 group-[.is-playing]:animate-ping" style={{animationDelay: '0.5s'}}></div>
</button>
<button aria-label="Next" className="group/next rounded-full p-3 text-white/70 hover:text-white hover:bg-white/10 hover:ring-2 hover:ring-white/20 transition-all duration-200 hover:scale-105 hover:-rotate-12" id="btnNext">
<svg className="lucide lucide-skip-forward h-5 w-5 stroke-[1.5] group-hover/next:animate-wiggle transition-transform" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4v16"></path><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between mt-6">

<div className="flex items-center gap-1">
<button aria-label="Shuffle" aria-pressed="false" className="group/shuffle rounded-xl px-3 py-2 text-[12px] font-medium text-white/70 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 flex items-center gap-2 hover:scale-105" id="btnShuffle">
<svg className="lucide lucide-shuffle h-4 w-4 stroke-[1.5] group-hover/shuffle:animate-shake transition-transform" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
<span className="hidden sm:inline">Shuffle</span>
</button>
<button aria-label="Repeat" aria-pressed="false" className="group/repeat rounded-xl px-3 py-2 text-[12px] font-medium text-white/70 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 flex items-center gap-2 hover:scale-105" id="btnRepeat">
<svg className="lucide lucide-repeat-1 h-4 w-4 stroke-[1.5] group-hover/repeat:animate-spin transition-transform" data-lucide="repeat-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path><path d="M11 10h1v4"></path></svg>
<span className="hidden sm:inline">Repeat</span>
</button>
</div>

<div className="flex items-center gap-1">
<button aria-label="Mute" className="group/volume rounded-xl px-3 py-2 text-[12px] font-medium text-white/70 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 flex items-center gap-2 hover:scale-105" id="btnMute">
<svg className="lucide lucide-volume-2 h-4 w-4 stroke-[1.5] group-hover/volume:animate-bounce transition-transform" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<span className="hidden sm:inline">Vol</span>
</button>
</div>
</div>
</div>

<div className="relative z-20 px-6 mb-4">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent blur-sm animate-pulse-slow"></div>
</div>
</div>

<div className="relative z-20 px-6 pb-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">

<div className="flex items-center gap-1 rounded-xl bg-emerald-500/10 px-3 py-2 ring-1 ring-emerald-500/20 hover:bg-emerald-500/20 hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '0s'}}>
<svg className="lucide lucide-badge-check h-3.5 w-3.5 stroke-[1.5] text-emerald-400 animate-pulse" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[11px] font-medium text-emerald-300">Lossless</span>
</div>
<div className="flex items-center gap-1 rounded-xl bg-blue-500/10 px-3 py-2 ring-1 ring-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
<svg className="lucide lucide-headphones h-3.5 w-3.5 stroke-[1.5] text-blue-400 animate-wiggle" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="text-[11px] font-medium text-blue-300">Spatial</span>
</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Queue" className="group/queue rounded-xl p-2.5 text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 hover:scale-110" id="btnQueue">
<svg className="lucide lucide-list-music h-4.5 w-4.5 stroke-[1.5] group-hover/queue:animate-bounce transition-transform" data-lucide="list-music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V6"></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>
</button>
<button aria-label="Cast" className="group/cast rounded-xl p-2.5 text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-cast h-4.5 w-4.5 stroke-[1.5] group-hover/cast:animate-pulse transition-transform" data-lucide="cast" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><path d="M2 12a9 9 0 0 1 8 8"></path><path d="M2 16a5 5 0 0 1 4 4"></path><line x1="2" x2="2.01" y1="20" y2="20"></line></svg>
</button>
<button aria-label="Share" className="group/share rounded-xl p-2.5 text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-share-2 h-4.5 w-4.5 stroke-[1.5] group-hover/share:animate-spin transition-transform" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<button aria-label="Settings" className="group/settings rounded-xl p-2.5 text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-settings h-4.5 w-4.5 stroke-[1.5] group-hover/settings:animate-spin transition-transform" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-col items-center gap-3 text-[10px] text-white/50">
<div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
<span className="animate-number-count" id="trackPlays">🎵 32.1M plays</span>
<span className="animate-number-count" style={{animationDelay: '0.1s'}}>👥 Added by 12.3K users</span>
<span className="animate-fade-in" id="trackReleaseDate" style={{animationDelay: '0.2s'}}>Released Jan 15, 2025</span>
</div>
<div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.4s'}}>
<span className="px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors duration-200 animate-glow">320kbps</span>
<span className="font-mono animate-digital-flicker" id="miniTime">0:00 / 6:12</span>
</div>
</div>
</div>

<audio id="audio" preload="metadata" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
</div>
</div>





<style>
      /* Floating orbs animation */
      @keyframes floating-orb {
        0%, 100% { 
          transform: translateY(0px) scale(1);
        }
        50% { 
          transform: translateY(-20px) scale(1.05);
        }
      }
      
      .floating-orb {
        animation: floating-orb 8s ease-in-out infinite;
      }

      /* Floating particles */
      @keyframes floating-particle {
        0%, 100% { 
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: 0.3;
        }
        25% { 
          transform: translateY(-10px) translateX(5px) rotate(90deg);
          opacity: 0.6;
        }
        50% { 
          transform: translateY(-20px) translateX(-5px) rotate(180deg);
          opacity: 1;
        }
        75% { 
          transform: translateY(-10px) translateX(-10px) rotate(270deg);
          opacity: 0.6;
        }
      }
      
      .floating-particle {
        animation: floating-particle 15s ease-in-out infinite;
      }

      /* Enhanced shine effect */
      @keyframes animate-shine {
        0% { 
          transform: translateX(-100%) skewX(-12deg);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% { 
          transform: translateX(200%) skewX(-12deg);
          opacity: 0;
        }
      }

      /* Slow spin for album art when playing */
      @keyframes animate-slow-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .group.is-playing .animate-slow-spin {
        animation: animate-slow-spin 20s linear infinite;
      }

      /* Pulse glow effect */
      @keyframes animate-pulse-glow {
        0%, 100% { 
          opacity: 0.3;
          transform: scale(1);
        }
        50% { 
          opacity: 0.6;
          transform: scale(1.02);
        }
      }

      /* Rainbow pulse for play button and rings */
      @keyframes animate-pulse-rainbow {
        0%, 100% { 
          box-shadow: 0 0 0 0 rgba(99,102,241,0.4);
        }
        25% { 
          box-shadow: 0 0 0 4px rgba(168,85,247,0.3);
        }
        50% { 
          box-shadow: 0 0 0 8px rgba(236,72,153,0.2);
        }
        75% { 
          box-shadow: 0 0 0 4px rgba(245,101,101,0.3);
        }
      }
      
      .animate-pulse-rainbow {
        animation: animate-pulse-rainbow 2s infinite;
      }

      /* Ping rainbow effect */
      @keyframes animate-ping-rainbow {
        0% { 
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(99,102,241,0.7);
        }
        25% {
          box-shadow: 0 0 0 4px rgba(168,85,247,0.5);
        }
        50% {
          box-shadow: 0 0 0 8px rgba(236,72,153,0.3);
        }
        75% { 
          transform: scale(1.05);
          box-shadow: 0 0 0 12px rgba(245,101,101,0.1);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 16px rgba(99,102,241,0);
        }
      }
      
      .animate-ping-rainbow {
        animation: animate-ping-rainbow 1.5s infinite;
      }

      /* Animated border glow */
      .border-glow {
        background: linear-gradient(90deg, 
          transparent, 
          rgba(99,102,241,0.5), 
          rgba(168,85,247,0.5), 
          rgba(236,72,153,0.5), 
          transparent
        );
        background-size: 200% 100%;
        animation: border-flow 3s linear infinite;
      }
      
      @keyframes border-flow {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }

      /* Wave dance animation for waveform bars */
      @keyframes animate-wave-dance {
        0%, 100% { 
          transform: scaleY(1) scaleX(1);
          filter: brightness(1);
        }
        25% { 
          transform: scaleY(1.2) scaleX(1.1);
          filter: brightness(1.2);
        }
        50% { 
          transform: scaleY(1.4) scaleX(1.05);
          filter: brightness(1.4);
        }
        75% { 
          transform: scaleY(1.1) scaleX(1.15);
          filter: brightness(1.1);
        }
      }
      
      .animate-wave-dance {
        animation: animate-wave-dance 0.8s ease-in-out infinite;
      }

      /* Heartbeat animation for like button */
      @keyframes animate-heartbeat {
        0%, 100% { 
          transform: scale(1);
        }
        25% { 
          transform: scale(1.1);
        }
        50% { 
          transform: scale(1.2);
        }
        75% { 
          transform: scale(1.05);
        }
      }
      
      .animate-heartbeat {
        animation: animate-heartbeat 0.6s ease-in-out;
      }

      /* Wiggle animation */
      @keyframes animate-wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        75% { transform: rotate(-5deg); }
      }
      
      .animate-wiggle {
        animation: animate-wiggle 0.5s ease-in-out;
      }

      /* Shake animation */
      @keyframes animate-shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
        20%, 40%, 60%, 80% { transform: translateX(2px); }
      }
      
      .animate-shake {
        animation: animate-shake 0.6s ease-in-out;
      }

      /* Float animation for badges */
      @keyframes animate-float {
        0%, 100% { 
          transform: translateY(0px);
        }
        50% { 
          transform: translateY(-5px);
        }
      }
      
      .animate-float {
        animation: animate-float 3s ease-in-out infinite;
      }

      /* Fast pulse for live indicator */
      @keyframes animate-pulse-fast {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      
      .animate-pulse-fast {
        animation: animate-pulse-fast 1s ease-in-out infinite;
      }

      /* Slow pulse effects */
      .animate-pulse-slow {
        animation: pulse 4s ease-in-out infinite;
      }
      
      .animate-ping-slow {
        animation: ping 3s infinite;
      }

      /* Digital flicker for time displays */
      @keyframes animate-digital-flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
        55% { opacity: 1; }
        57% { opacity: 0.9; }
      }
      
      .animate-digital-flicker {
        animation: animate-digital-flicker 2s infinite;
      }

      /* Flicker animation */
      @keyframes animate-flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      .animate-flicker {
        animation: animate-flicker 3s ease-in-out infinite;
      }

      /* Progress bar glow */
      @keyframes animate-progress-glow {
        0%, 100% { 
          box-shadow: 0 0 5px rgba(99,102,241,0.5);
        }
        50% { 
          box-shadow: 0 0 15px rgba(168,85,247,0.7), 0 0 25px rgba(236,72,153,0.3);
        }
      }
      
      .animate-progress-glow {
        animation: animate-progress-glow 2s ease-in-out infinite;
      }

      /* Pulse button effect */
      @keyframes animate-pulse-button {
        0%, 100% { 
          transform: scale(1);
          box-shadow: 0 0 20px rgba(99,102,241,0.3);
        }
        50% { 
          transform: scale(1.02);
          box-shadow: 0 0 30px rgba(168,85,247,0.5);
        }
      }
      
      .animate-pulse-button {
        animation: animate-pulse-button 2s ease-in-out infinite;
      }

      /* Bounce subtle */
      @keyframes animate-bounce-subtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }
      
      .animate-bounce-subtle {
        animation: animate-bounce-subtle 2s ease-in-out infinite;
      }

      /* Slide animations */
      @keyframes animate-slide-up {
        0% { 
          opacity: 0;
          transform: translateY(20px);
        }
        100% { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: animate-slide-up 0.6s ease-out forwards;
      }

      @keyframes animate-slide-in {
        0% { 
          opacity: 0;
          transform: translateX(-20px);
        }
        100% { 
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-slide-in {
        animation: animate-slide-in 0.4s ease-out forwards;
      }

      @keyframes animate-fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      .animate-fade-in {
        animation: animate-fade-in 0.8s ease-out forwards;
      }

      /* Tag pop animation */
      @keyframes animate-tag-pop {
        0% { 
          opacity: 0;
          transform: scale(0.8) translateY(10px);
        }
        50% {
          transform: scale(1.05) translateY(0);
        }
        100% { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      .animate-tag-pop {
        animation: animate-tag-pop 0.5s ease-out forwards;
      }

      /* Glow text effect */
      .glow-text {
        text-shadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(99,102,241,0.2);
      }

      /* Number counting effect */
      @keyframes animate-number-count {
        0% { 
          opacity: 0;
          transform: translateY(20px);
        }
        100% { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-number-count {
        animation: animate-number-count 0.8s ease-out forwards;
      }

      /* Glow animation for quality badges */
      @keyframes animate-glow {
        0%, 100% { 
          box-shadow: inset 0 0 5px rgba(255,255,255,0.1);
        }
        50% { 
          box-shadow: inset 0 0 10px rgba(255,255,255,0.2), 0 0 10px rgba(255,255,255,0.1);
        }
      }
      
      .animate-glow {
        animation: animate-glow 3s ease-in-out infinite;
      }

      /* Custom scrollbar styles */
      .flex-1::-webkit-scrollbar {
        width: 6px;
      }
      
      .flex-1::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
      }
      
      .flex-1::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(168,85,247,0.5));
        border-radius: 3px;
      }
      
      .flex-1::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, rgba(99,102,241,0.7), rgba(168,85,247,0.7));
      }

      /* Enhanced hover effects */
      .group/track:hover {
        transform: translateY(-2px);
      }

      /* Responsive animations */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>

    </>
  );
}
