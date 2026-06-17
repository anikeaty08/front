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



    const playlist = [
      { title: "Runaway", artist: "Smalltown Boy, Shane D", duration: 225, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
      { title: "Midnight City", artist: "M83", duration: 240, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
      { title: "Starlight", artist: "Muse", duration: 210, cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300" }
    ];

    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const restartBtn = document.getElementById('restartBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const progressBar = document.getElementById('progressBar');
    const progressHandle = document.getElementById('progressHandle');
    const progressTouch = document.getElementById('progressTouch');
    const currentTime = document.getElementById('currentTime');
    const totalTime = document.getElementById('totalTime');
    const albumCover = document.getElementById('albumCover');
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const menuBtn = document.getElementById('menuBtn');

    let isPlaying = false;
    let currentTrack = 0;
    let updateTimer;
    let pulseInterval;
    let simulatedCurrentTime = 0;

    function initPlayer() {
      loadTrack(currentTrack);
    }

    function loadTrack(trackIndex) {
      clearInterval(updateTimer);
      resetValues();

      const track = playlist[trackIndex];
      songTitle.textContent = track.title;
      artistName.textContent = track.artist;
      albumCover.src = track.cover;
      
      const minutes = Math.floor(track.duration / 60);
      const seconds = track.duration % 60;
      totalTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      updateTimer = setInterval(seekUpdate, 1000);
    }

    function resetValues() {
      currentTime.textContent = "00:00";
      progressBar.style.width = "0%";
      simulatedCurrentTime = 0;
    }

    playBtn.addEventListener('click', () => {
      isPlaying ? pauseTrack() : playTrack();
    });

    function playTrack() {
      isPlaying = true;
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
      playIcon.classList.remove('ml-1');
      startPulseEffect();
      simulatePlayback();
    }

    function pauseTrack() {
      isPlaying = false;
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
      playIcon.classList.add('ml-1');
      stopPulseEffect();
      clearInterval(updateTimer);
    }

    restartBtn.addEventListener('click', () => {
      resetValues();
      if (isPlaying) {
        clearInterval(updateTimer);
        simulatePlayback();
      }
    });

    prevBtn.addEventListener('click', () => {
      currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrack);
      if (isPlaying) playTrack();
    });

    nextBtn.addEventListener('click', () => {
      currentTrack = (currentTrack + 1) % playlist.length;
      loadTrack(currentTrack);
      if (isPlaying) playTrack();
    });

    shuffleBtn.addEventListener('click', () => {
      let newTrack;
      do {
        newTrack = Math.floor(Math.random() * playlist.length);
      } while (newTrack === currentTrack && playlist.length > 1);
      
      currentTrack = newTrack;
      loadTrack(currentTrack);
      if (isPlaying) playTrack();
      
      shuffleBtn.classList.add('text-white');
      setTimeout(() => {
        shuffleBtn.classList.remove('text-white');
        shuffleBtn.classList.add('text-gray-300');
      }, 300);
    });

    progressTouch.addEventListener('click', (e) => {
      const percent = (e.offsetX / progressTouch.offsetWidth) * 100;
      progressBar.style.width = `${percent}%`;
      
      const trackDuration = playlist[currentTrack].duration;
      const seekTime = Math.floor((percent / 100) * trackDuration);
      updateCurrentTime(seekTime);
      
      if (isPlaying) {
        clearInterval(updateTimer);
        updateTimer = setInterval(seekUpdate, 1000);
      }
    });

    progressTouch.addEventListener('mouseenter', () => {
      progressHandle.classList.remove('opacity-0');
    });
    
    progressTouch.addEventListener('mouseleave', () => {
      progressHandle.classList.add('opacity-0');
    });

    function seekUpdate() {
      if (isPlaying) {
        simulatedCurrentTime++;
        const trackDuration = playlist[currentTrack].duration;
        
        if (simulatedCurrentTime >= trackDuration) {
          nextBtn.click();
          return;
        }
        
        const percent = (simulatedCurrentTime / trackDuration) * 100;
        progressBar.style.width = `${percent}%`;
        updateCurrentTime(simulatedCurrentTime);
      }
    }

    function updateCurrentTime(seconds) {
      simulatedCurrentTime = seconds;
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      currentTime.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function simulatePlayback() {
      clearInterval(updateTimer);
      updateTimer = setInterval(seekUpdate, 1000);
    }

    function startPulseEffect() {
      let scale = 1;
      let growing = false;
      
      clearInterval(pulseInterval);
      pulseInterval = setInterval(() => {
        if (growing) {
          scale += 0.003;
          if (scale >= 1.03) growing = false;
        } else {
          scale -= 0.003;
          if (scale <= 0.97) growing = true;
        }
        
        albumCover.style.transform = `scale(${scale})`;
      }, 50);
    }
    
    function stopPulseEffect() {
      clearInterval(pulseInterval);
      albumCover.style.transform = 'scale(1)';
    }

    menuBtn.addEventListener('click', () => {
      alert('Menu options would appear here!');
    });

    initPlayer();
  
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
      
<div className="w-80 rounded-3xl p-6 shadow-xl overflow-hidden relative animated-bg">
<div className="absolute inset-0 backdrop-blur-xl bg-black/65"></div>
<div className="relative z-10">

<div className="flex justify-end mb-4">
<button className="focus:outline-none hover:opacity-80 transition text-white" id="menuBtn">
<div className="w-6 h-0.5 bg-white mb-1.5"></div>
<div className="w-6 h-0.5 bg-white mb-1.5"></div>
<div className="w-6 h-0.5 bg-white"></div>
</button>
</div>

<div className="flex justify-center mb-6">
<div className="relative w-40 h-40 rounded-full p-3 bg-black/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]" id="albumContainer">
<img alt="Album Cover" className="w-full h-full object-cover rounded-full transition-all duration-300" id="albumCover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300"/>
</div>
</div>

<div className="text-center mb-4">
<h2 className="text-2xl font-medium mb-1 text-white" id="songTitle">Runaway</h2>
<p className="text-gray-300 text-sm" id="artistName">Smalltown Boy, Shane D</p>
</div>

<div className="flex items-center mb-6">
<span className="text-xs text-gray-300 w-10" id="currentTime">00:00</span>
<div className="mx-2 flex-1 relative">
<div className="h-1 bg-gray-700/50 rounded-full">
<div className="h-full bg-white rounded-full w-0 relative" id="progressBar">
<div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-white rounded-full opacity-0 transition-opacity" id="progressHandle"></div>
</div>
</div>
<div className="absolute inset-0 cursor-pointer -top-2 -bottom-2" id="progressTouch"></div>
</div>
<span className="text-xs text-gray-300 w-10 text-right" id="totalTime">03:45</span>
</div>

<div className="flex items-center justify-between">
<button className="text-gray-300 hover:text-white focus:outline-none w-8 h-8 flex items-center justify-center transition-transform hover:scale-110 active:scale-95" id="restartBtn">
<i className="fas fa-redo-alt"></i>
</button>
<button className="text-white hover:text-white focus:outline-none w-8 h-8 flex items-center justify-center transition-transform hover:scale-110 active:scale-95" id="prevBtn">
<i className="fas fa-step-backward text-xl"></i>
</button>
<button className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center focus:outline-none transition-transform hover:scale-105 active:scale-95 shadow-lg" id="playBtn">
<i className="fas fa-play text-lg ml-1" id="playIcon"></i>
</button>
<button className="text-white hover:text-white focus:outline-none w-8 h-8 flex items-center justify-center transition-transform hover:scale-110 active:scale-95" id="nextBtn">
<i className="fas fa-step-forward text-xl"></i>
</button>
<button className="text-gray-300 hover:text-white focus:outline-none w-8 h-8 flex items-center justify-center transition-transform hover:scale-110 active:scale-95" id="shuffleBtn">
<i className="fas fa-random"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
