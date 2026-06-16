import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- Butterfly and Hearts/Roses Logic ---

      // Sound Effects
      const magicSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
      const popSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3');

      function toggleCard(el) {
          el.classList.toggle('card-open');
          if(el.classList.contains('card-open')) {
              // Play magic sound
              magicSound.volume = 0.5;
              magicSound.currentTime = 0;
              magicSound.play().catch(e => console.log('Audio autoplay blocked'));
              releaseButterflies();
          }
      }

      function releaseButterflies() {
          const container = document.getElementById('butterfly-container');
          // Clear previous if any, but let's just add new ones
          for(let i=0; i<15; i++) {
              createButterfly(container);
          }
      }

      function createButterfly(container) {
          const fly = document.createElement('div');
          // Added text-rose-500 for more prominent color
          fly.className = 'butterfly-element text-rose-500';

          // Random end position
          const tx = (Math.random() - 0.5) * 400 + 'px'; // -200 to 200px X
          const ty = -(Math.random() * 300 + 100) + 'px'; // -100 to -400px Y (Up)
          const r = (Math.random() - 0.5) * 90 + 'deg';
          const rEnd = (Math.random() - 0.5) * 45 + 'deg';
          const s = Math.random() * 0.5 + 0.8; // Scale (0.8 to 1.3) for bigger butterflies

          fly.style.setProperty('--tx', tx);
          fly.style.setProperty('--ty', ty);
          fly.style.setProperty('--r', r);
          fly.style.setProperty('--r-end', rEnd);
          fly.style.setProperty('--s', s);

          // Increased icon width to 48 for larger butterflies
          fly.innerHTML = `<div class="butterfly-wing"><iconify-icon icon="ph:butterfly-bold" width="48"></iconify-icon></div>`;

          container.appendChild(fly);

          // Cleanup after longer animation (6s)
          setTimeout(() => {
              fly.remove();
          }, 6000);
      }

      function spawnLove(e) {
          // Play pop sound
          popSound.volume = 0.4;
          popSound.currentTime = 0;
          popSound.play().catch(e => console.log('Audio autoplay blocked'));

          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          // Center of the element relative to viewport
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          for(let i=0; i<20; i++) {
              createParticle(centerX, centerY);
          }
      }

      function createParticle(x, y) {
          const particle = document.createElement('div');
          particle.className = 'particle';

          // Random type: Heart or Rose (Flower)
          const isHeart = Math.random() > 0.4;
          const icon = isHeart ? 'solar:heart-bold' : 'solar:flower-bold';
          const color = isHeart ? 'text-rose-500' : 'text-red-600';
          const size = Math.floor(Math.random() * 20 + 20); // Slightly larger particles too

          particle.innerHTML = `<iconify-icon icon="${icon}" class="${color}" width="${size}"></iconify-icon>`;

          // Position at click center
          const scrollX = window.scrollX;
          const scrollY = window.scrollY;

          particle.style.left = (x + scrollX) + 'px';
          particle.style.top = (y + scrollY) + 'px';

          // Random spread
          const angle = Math.random() * Math.PI * 2;
          const velocity = Math.random() * 150 + 50;
          const tx = Math.cos(angle) * velocity + 'px';
          const ty = Math.sin(angle) * velocity + 'px';
          const rot = (Math.random() - 0.5) * 360 + 'deg';

          particle.style.setProperty('--tx', tx);
          particle.style.setProperty('--ty', ty);
          particle.style.setProperty('--rot', rot);

          document.body.appendChild(particle);

          setTimeout(() => {
              particle.remove();
          }, 1500);
      }

      // --- Music Player & Other Logic (Preserved) ---
      const playlist = [
          { id: 'ffej15-Dgl0', title: 'Smile', artist: 'Uncle Kracker' },
          { id: 'sgK7IBQOdlE', title: 'God is a Weapon', artist: 'Falling In Reverse' },
          { id: 'I9fdTjBZBKk', title: 'Every Woman in the World', artist: 'Air Supply' },
          { id: 'uaIZpyA1K-c', title: 'I Lied', artist: 'Ex Habit' },
          { id: '0GB1i0Uhgv4', title: 'Perfect Two', artist: 'Auburn' },
          { id: 'j_S3G1CZgNU', title: 'Keeping Me Up All Night', artist: 'Chayce Beckham' },
          { id: 'D_4EME7EyY4', title: 'One Thing', artist: 'Finger Eleven' }
      ];

      let currentTrackIndex = 0;
      let player;
      let isPlaying = false;
      let progressInterval;
      let isDragging = false;

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function onYouTubeIframeAPIReady() {
          player = new YT.Player('yt-player-container', {
              height: '1',
              width: '1',
              videoId: playlist[currentTrackIndex].id,
              playerVars: { 'playsinline': 1, 'controls': 0, 'disablekb': 1 },
              events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
          });
      }

      function onPlayerReady(event) { }

      function onPlayerStateChange(event) {
          if (event.data === YT.PlayerState.ENDED) {
              playNext();
          }
      }

      function playTrack(index) {
          currentTrackIndex = index;
          const track = playlist[index];
          updatePlayerUI(track);

          if(player && player.loadVideoById) {
              player.loadVideoById(track.id);
              isPlaying = true;
              setPlayState(true);
          }
      }

      function togglePlay() {
          if(!player) return;
          if (isPlaying) {
              player.pauseVideo();
              isPlaying = false;
              setPlayState(false);
          } else {
              player.playVideo();
              isPlaying = true;
              setPlayState(true);
          }
      }

      function playNext() {
          let nextIndex = currentTrackIndex + 1;
          if (nextIndex >= playlist.length) nextIndex = 0;
          playTrack(nextIndex);
      }

      function playPrev() {
          let prevIndex = currentTrackIndex - 1;
          if (prevIndex < 0) prevIndex = playlist.length - 1;
          playTrack(prevIndex);
      }

      function updatePlayerUI(track) {
          const titleEl = document.getElementById('player-title');
          const artistEl = document.getElementById('player-artist');
          const artEl = document.getElementById('album-art');

          titleEl.classList.add('opacity-0-force');
          artistEl.classList.add('opacity-0-force');

          setTimeout(() => {
              titleEl.innerText = track.title;
              artistEl.innerText = track.artist;
              artEl.src = `https://i.ytimg.com/vi/${track.id}/maxresdefault.jpg`;
              titleEl.classList.remove('opacity-0-force');
              artistEl.classList.remove('opacity-0-force');
          }, 300);

          document.querySelectorAll('.playlist-btn').forEach((btn, idx) => {
              if(idx === currentTrackIndex) {
                  btn.classList.remove('bg-white/50', 'border-transparent');
                  btn.classList.add('active', 'ring-2', 'ring-rose-500', 'ring-offset-2', 'bg-white', 'shadow-sm', 'border-rose-100');
                  btn.querySelector('.playing-indicator').classList.remove('opacity-0');
                  btn.querySelector('.playing-indicator').classList.add('opacity-100');
              } else {
                  btn.classList.add('bg-white/50', 'border-transparent');
                  btn.classList.remove('active', 'ring-2', 'ring-rose-500', 'ring-offset-2', 'bg-white', 'shadow-sm', 'border-rose-100');
                  btn.querySelector('.playing-indicator').classList.add('opacity-0');
                  btn.querySelector('.playing-indicator').classList.remove('opacity-100');
              }
          });
      }

      function setPlayState(playing) {
          const vinyl = document.getElementById('vinyl-record');
          const playIcon = document.getElementById('play-icon');
          const visualizer = document.getElementById('visualizer');

          if(playing) {
              vinyl.classList.remove('paused-anim');
              playIcon.setAttribute('icon', 'solar:pause-bold');
              visualizer.classList.remove('opacity-0');
              startProgressLoop();
          } else {
              vinyl.classList.add('paused-anim');
              playIcon.setAttribute('icon', 'solar:play-bold');
              visualizer.classList.add('opacity-0');
              stopProgressLoop();
          }
      }

      function startProgressLoop() {
          clearInterval(progressInterval);
          progressInterval = setInterval(() => {
              if(player && player.getCurrentTime && !isDragging) {
                  const currentTime = player.getCurrentTime();
                  const duration = player.getDuration();
                  if(duration > 0) {
                      const pct = (currentTime / duration) * 100;
                      const slider = document.getElementById('progress-slider');
                      slider.value = pct;
                      updateSliderVisuals(slider);
                      document.getElementById('current-time').innerText = formatTime(currentTime);
                      document.getElementById('total-time').innerText = formatTime(duration);
                  }
              }
          }, 1000);
      }

      function stopProgressLoop() {
          clearInterval(progressInterval);
      }

      function handleSeek(value) {
          if(player && player.getDuration) {
              const duration = player.getDuration();
              const seekTo = duration * (value / 100);
              document.getElementById('current-time').innerText = formatTime(seekTo);
              updateSliderVisuals(document.getElementById('progress-slider'));
          }
      }

      function commitSeek(value) {
          if(player && player.getDuration) {
              const duration = player.getDuration();
              const seekTo = duration * (value / 100);
              player.seekTo(seekTo, true);
          }
          stopDragging();
      }

      function startDragging() { isDragging = true; }
      function stopDragging() { isDragging = false; }

      function updateSliderVisuals(slider) {
          const value = slider.value;
          slider.style.background = `linear-gradient(to right, #f43f5e ${value}%, #f1f5f9 ${value}%)`;
      }

      function formatTime(seconds) {
          if (!seconds) return "0:00";
          const m = Math.floor(seconds / 60);
          const s = Math.floor(seconds % 60);
          return `${m}:${s < 10 ? '0' : ''}${s}`;
      }

      // Celebration Logic for Win + Victoria
      function triggerCelebration() {
          const calcSection = document.getElementById('calculator');

          // 1. Fireworks
          const fireworksInterval = setInterval(() => {
              createFirework(calcSection, 'left');
              createFirework(calcSection, 'right');
          }, 300);

          // 2. Big Hearts
          const heartsInterval = setInterval(() => {
              createBigHeart(calcSection);
          }, 600);

          // Stop after 6 seconds
          setTimeout(() => {
              clearInterval(fireworksInterval);
              clearInterval(heartsInterval);
          }, 6000);

          // Play celebratory sound
          magicSound.volume = 0.6;
          magicSound.currentTime = 0;
          magicSound.play().catch(e => console.log('Audio autoplay blocked'));
      }

      function createFirework(container, side) {
          const burstX = side === 'left' ? Math.random() * 100 : container.offsetWidth - Math.random() * 100;
          const burstY = Math.random() * container.offsetHeight;

          const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fbbf24', '#ffffff'];

          for(let i=0; i<20; i++) {
              const spark = document.createElement('div');
              spark.className = 'firework-spark';
              spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
              spark.style.left = burstX + 'px';
              spark.style.top = burstY + 'px';

              // Random angle and distance
              const angle = Math.random() * Math.PI * 2;
              const distance = Math.random() * 100 + 50;
              const fx = Math.cos(angle) * distance + 'px';
              const fy = Math.sin(angle) * distance + 'px';

              spark.style.setProperty('--fx', fx);
              spark.style.setProperty('--fy', fy);

              container.appendChild(spark);
              setTimeout(() => spark.remove(), 1000);
          }
      }

      function createBigHeart(container) {
          const heart = document.createElement('div');
          heart.className = 'big-floating-heart text-rose-500 opacity-80';
          // Random horizontal position within container
          const startX = Math.random() * (container.offsetWidth - 50);

          heart.style.left = startX + 'px';
          heart.style.bottom = '-50px'; // Start below

          const size = Math.floor(Math.random() * 60 + 40); // 40px to 100px
          const rot = (Math.random() - 0.5) * 60 + 'deg';

          heart.innerHTML = `<iconify-icon icon="solar:heart-bold" width="${size}"></iconify-icon>`;
          heart.style.setProperty('--rot', rot);

          container.appendChild(heart);
          setTimeout(() => heart.remove(), 5000);
      }

      function calculateLove() {
          const name1Input = document.getElementById('calc-name-1');
          const name2Input = document.getElementById('calc-name-2');
          const resultDiv = document.getElementById('calc-result');
          const scoreDiv = document.getElementById('calc-score');
          const messageDiv = document.getElementById('calc-message');
          const barDiv = document.getElementById('calc-bar');

          if (!name1Input.value || !name2Input.value) return;

          resultDiv.classList.remove('hidden');
          scoreDiv.innerText = "0%";
          barDiv.style.width = "0%";
          messageDiv.innerText = "Consulting the stars...";

          const n1 = name1Input.value.toLowerCase().trim();
          const n2 = name2Input.value.toLowerCase().trim();

          setTimeout(() => {
              let score = 0;
              let message = "";
              const isPair = (nameA, nameB) => {
                  const a = nameA.toLowerCase();
                  const b = nameB.toLowerCase();
                  return (n1.includes(a) && n2.includes(b)) || (n1.includes(b) && n2.includes(a));
              };

              if (isPair('win', 'victoria') ||
                  isPair('tom', 'mary') ||
                  isPair('jim', 'harla') ||
                  isPair('james', 'maliha') ||
                  isPair('ben', 'reya') ||
                  isPair('sham', 'nicole') ||
                  isPair('jessica', 'erik') ||
                  isPair('laramie', 'michael') ||
                  isPair('travis', 'lindsay')) {

                  score = 100;
                  if(isPair('win', 'victoria')) {
                       message = "Congratulations! You've got your perfect match!! ❤️";
                       triggerCelebration(); // New Fireworks & Hearts
                  } else {
                       message = "It's a 100% Match! The stars have aligned! ✨";
                  }
              }
              else if (n1.includes('victoria') || n2.includes('victoria')) {
                  score = 0;
                  const sassyMessages = [
                      "Nope babe, not the right one for you!",
                      "Why you keep looking? Win is right there.",
                      "Error 404: Soulmate not found. (Hint: Try Win)",
                      "Hmm… interesting choice. But unfortunately, the universe says 'Try Win again.'",
                      "Cute. But no. This one doesn't pass the vibe check.",
                      "Oh sweetheart… that's not your match. You already know who is",
                      "The Universe only recognizes one correct answer. And you've already met him.",
                      "This match is lukewarm. You deserve fireworks.",
                      "I checked the multiverse. Not a single version approves this match.",
                      "Seriously? We all know the answer is Win."
                  ];
                  message = sassyMessages[Math.floor(Math.random() * sassyMessages.length)];
              }
              else {
                  score = Math.floor(Math.random() * 89);
                  if (score < 30) message = "A bit rocky, but love finds a way.";
                  else if (score < 60) message = "There is definitely a spark!";
                  else message = "Looking good together!";
              }

              scoreDiv.innerText = score + "%";
              barDiv.style.width = score + "%";
              messageDiv.innerText = message;
          }, 800);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
<div className="absolute top-[10%] left-[5%] text-rose-200 animate-float" style={{animationDelay: '0s'}}>
<iconify-icon icon="solar:heart-bold" width="64"></iconify-icon>
</div>
<div className="absolute top-[30%] right-[10%] text-rose-200 animate-float" style={{animationDelay: '2s'}}>
<iconify-icon icon="solar:heart-bold" width="48"></iconify-icon>
</div>
<div className="absolute bottom-[20%] left-[15%] text-rose-200 animate-float" style={{animationDelay: '4s'}}>
<iconify-icon icon="solar:heart-angle-bold" width="56"></iconify-icon>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-rose-100/50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold tracking-tighter shadow-lg shadow-rose-200">
          W+V
        </div>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-rose-600 transition-colors" href="#story">
          Our Story
        </a>
<a className="hover:text-rose-600 transition-colors" href="#details">
          The Dream
        </a>
<a className="hover:text-rose-600 transition-colors" href="#poem">
          For You
        </a>
</div>
<a className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-rose-100 shadow-sm hover:border-rose-300 transition-all" href="#music">
<iconify-icon className="text-rose-500 animate-pulse" icon="solar:music-note-bold" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-600 group-hover:text-rose-600 transition-colors">
          Playlist
        </span>
</a>
</nav>

<main className="flex-grow flex flex-col z-10 text-center w-full max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="animate-heartbeat mb-8">
<div className="inline-flex uppercase text-xs font-bold text-rose-600 tracking-wide bg-rose-100 border-rose-200 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-md gap-x-2 gap-y-2 items-center">
<iconify-icon className="" height="24" icon="solar:heart-bold" style={{color: 'rgb(225, 29, 72)'}} width="24"></iconify-icon>
<span className="scale-105">For My Victoria</span>
<iconify-icon className="" height="24" icon="solar:heart-bold" style={{color: 'rgb(225, 29, 72)'}} width="24"></iconify-icon>
</div>
</div>
<div className="relative">

<img alt="Pixel Heart" className="absolute -top-12 -right-8 md:-right-16 w-16 h-16 md:w-20 md:h-20 opacity-90 animate-float pointer-events-none transform rotate-12" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-gradient-animate text-6xl font-semibold tracking-tight font-serif-custom max-w-5xl mr-auto mb-2 ml-auto">
          HAPPY
          <br/>
          VALENTINE'S
          <br/>
          DAY !!
        </h1>
</div>
<p className="text-xl md:text-2xl text-slate-600 font-light mt-8 mb-12 max-w-2xl mx-auto leading-relaxed">
        From a single text to building a whole world together.
      </p>

<div className="relative w-full max-w-sm mx-auto aspect-[4/3] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)] border border-rose-100 overflow-hidden flex flex-col p-6 animate-float">

<img alt="heart" className="absolute top-4 right-4 w-8 h-8 opacity-50 pointer-events-none" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
<div className="flex-1 space-y-4">
<div className="flex flex-col items-start space-y-1">
<div className="text-sm font-medium text-slate-600 bg-slate-100 max-w-[85%] rounded-2xl pt-2.5 pr-4 pb-2.5 pl-4">
              Hey Victoria! 👋
            </div>
</div>
<div className="flex flex-col items-end space-y-1">
<div className="bg-rose-500 text-white px-4 py-2.5 rounded-2xl rounded-tr-none text-sm max-w-[85%] shadow-md shadow-rose-200 font-medium">
              Hi Win! Nice to meet you.
            </div>
<span className="text-[10px] text-rose-300 font-semibold pr-1 flex items-center gap-1">
              Read
              <iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</span>
</div>
<div className="flex justify-center py-6">
<span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold bg-slate-50 px-3 py-1 rounded-full">
              Where it all began
            </span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
</div>
</main>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="story">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 relative">
<h2 className="text-3xl font-serif-custom italic text-slate-900 mb-4 inline-flex items-center gap-3">
            Our Timeline
            <img alt="heart" className="w-8 h-8 -mt-2" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
</h2>
<div className="h-1 w-20 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
</div>
<div className="relative">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-rose-200/60 -ml-px md:ml-0"></div>

<div className="flex flex-col md:flex-row group mb-24 relative gap-x-8 gap-y-8 items-center">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                The Connection
              </h3>
<p className="text-slate-500 mt-2">
                June 15th. The digital spark that lit the fire.
              </p>
</div>
<div className="absolute left-6 md:left-1/2 w-10 h-10 -ml-5 rounded-full bg-white border-2 border-rose-100 flex items-center justify-center z-10 text-rose-300 group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-300 shadow-sm order-1">
<iconify-icon icon="solar:chat-round-line-bold" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3">

<img alt="Pixel Heart" className="w-12 h-12 opacity-80 hidden md:block" src="https://media.tenor.com/bCbp8m923aIAAAAi/pixel-heart.gif"/>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-24 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 flex justify-end">

<img alt="Pixel Heart" className="w-10 h-10 opacity-80 hidden md:block transform -scale-x-100" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
</div>
<div className="absolute left-6 md:left-1/2 w-10 h-10 -ml-5 rounded-full bg-white border-2 border-rose-100 flex items-center justify-center z-10 text-rose-300 group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-300 shadow-sm order-1">
<iconify-icon icon="solar:heart-bold" width="18"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                Getting to know each other
              </h3>
<p className="text-slate-500 mt-2">
                Bonding over cats (Burizer &amp; Ivy), deep talks, and shared
                laughter.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                The Forever
              </h3>
<p className="text-slate-500 mt-2">
                Building our dream life. Creating our sanctuary.
              </p>
</div>
<div className="absolute left-6 md:left-1/2 w-12 h-12 -ml-6 rounded-full bg-rose-500 border-4 border-rose-100 flex items-center justify-center z-10 text-white shadow-lg shadow-rose-200 order-1 animate-pulse">
<iconify-icon icon="solar:home-heart-bold" width="22"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3"></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-6xl mx-auto relative z-10" id="details">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative h-[400px] bg-slate-900 rounded-3xl overflow-hidden group shadow-2xl shadow-slate-900/20 border border-slate-800">

<img alt="Gothic Victorian House Sunset" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>

<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase shadow-lg">
                Future Project
              </div>
<iconify-icon className="text-rose-200 drop-shadow-lg" icon="solar:key-minimalistic-square-3-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<div className="space-y-4">
<div className="w-12 h-1 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
<div className="">
<h3 className="text-3xl md:text-4xl font-serif-custom text-white leading-tight mb-2 drop-shadow-md">
                  The Gothic Victorian
                </h3>
<p className="text-slate-200 text-sm md:text-base font-light max-w-md drop-shadow">
                  High ceilings, intricate spires, dark wood, and a garden for
                  the cats. A forever sanctuary designed for Victoria's
                  brilliant soul.
                </p>
</div>

<div className="flex gap-6 pt-4 border-t border-white/10">
<div className="flex flex-col">
<span className="text-[10px] text-rose-200/80 uppercase tracking-wider">
                    Style
                  </span>
<span className="text-sm text-white font-medium">
                    Victorian Gothic
                  </span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-rose-200/80 uppercase tracking-wider">
                    Residents
                  </span>
<span className="text-sm font-medium text-white">
                    Win, Victoria, mini us, Cats
                  </span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-rose-200/80 uppercase tracking-wider">
                    Status
                  </span>
<span className="text-sm text-rose-400 font-medium">
                    Manifesting
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 h-[400px] gap-x-6 gap-y-6">

<div className="flex-1 bg-white rounded-3xl p-8 border border-rose-100 shadow-lg shadow-rose-100/50 flex flex-col justify-center relative overflow-hidden">
<iconify-icon className="text-rose-50 absolute top-4 right-4" icon="solar:quote-up-square-bold" width="80"></iconify-icon>
<div className="relative z-10">
<p className="text-lg font-serif-custom italic text-slate-800 leading-relaxed">
                "I am just happy to linger in her light. She is the main
                character."
              </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-px bg-rose-400"></div>
<span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                  Win
                </span>
</div>
</div>
</div>

<div className="h-1/3 bg-rose-50 rounded-3xl p-6 border border-rose-100 flex items-center justify-between group hover:border-rose-300 transition-colors cursor-default relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-lg font-bold text-slate-900">
                Burizer &amp; Ivy
              </h4>
<p className="text-xs text-slate-500">The Supervisors</p>
</div>
<div className="flex -space-x-2 relative z-10">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-600 z-10">
<iconify-icon icon="solar:cat-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shadow-sm text-white">
<iconify-icon icon="solar:cat-linear" width="20"></iconify-icon>
</div>
</div>

<img alt="heart" className="absolute -bottom-2 -left-2 w-12 h-12 opacity-10 pointer-events-none" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-rose-100 pt-24 pr-6 pb-24 pl-6" id="poem">
<div className="max-w-2xl mx-auto text-center relative">

<iconify-icon className="absolute -top-12 left-0 text-rose-100 animate-pulse" icon="solar:heart-bold" width="60"></iconify-icon>
<iconify-icon className="absolute -bottom-12 right-0 text-rose-100 animate-pulse" icon="solar:heart-bold" width="80"></iconify-icon>

<img alt="heart" className="absolute top-0 right-0 w-16 h-16 opacity-80 animate-bounce" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
<div className="z-10 relative">
<iconify-icon className="text-rose-400 mb-6" height="42" icon="solar:list-heart-minimalistic-outline" style={{color: 'rgb(251, 113, 133)'}} width="42"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-serif-custom italic text-slate-900 mb-10">
            Win &amp; Victoria
          </h2>
<div className="font-serif-custom text-xl md:text-2xl text-slate-700 leading-loose space-y-10">
<p className="">
              Two names that echo, almost the same,
              <br/>
              Win and
              <span className="text-green-600">Victoria</span>
              , a mirrored flame.
              <br/>
<span className="text-rose-500">March</span>
              and
              <span className="text-green-600">May</span>
              , the fifteenth aligned,
              <br/>
              Two hearts marked by a secret design.
            </p>
<p className="">
              Your days apart, yet bound by thread,
              <br/>
              A rhythm of fate the stars have spread.
              <br/>
              Not chance, but a whisper the cosmos knew,
              <br/>
              That one day my steps would lead me to you.
            </p>
<p className="">
              Victoria — victory, radiant and true,
              <br/>
              And Win, who finds his triumph in you.
              <br/>
              Together, a story the calendar sings,
              <br/>
              Of love that awakens in simplest things.
            </p>
<p className="">
              So here’s my vow, both tender and bold:
              <br/>
              To cherish the warmth your green eyes hold.
              <br/>
              For names may rhyme and dates may align,
              <br/>
              But it’s you who makes the universe mine.
            </p>
</div>

<div className="mt-12 flex justify-center relative">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<img alt="Us" className="md:w-80 md:h-80 hover:rotate-0 transition-transform duration-500 w-64 h-64 object-cover border-white border-4 rounded-[1.5rem] relative shadow-2xl rotate-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/379346a8-764f-4541-ab73-c5148ba7d1af_800w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="mt-12 flex justify-center">
<div className="w-16 h-1 bg-rose-200 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="music">
<div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
<div className="flex flex-col items-center mb-10 relative z-10">
<span className="uppercase text-sm font-bold text-rose-500 tracking-widest mb-2">
          Our Playlist
        </span>
<h2 className="text-3xl font-serif-custom text-slate-900 italic flex items-center gap-3">
          Songs for Us
          <img alt="heart" className="w-8 h-8" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative gap-x-8 gap-y-8">

<div className="lg:col-span-2 flex flex-col overflow-hidden bg-white border-rose-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_20px_50px_-12px_rgba(244,63,94,0.25)] items-center justify-center transition-all">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute w-1 h-1 opacity-0 pointer-events-none -z-50" frameborder="0" height="1" id="yt-player-container" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ffej15-Dgl0?playsinline=1&amp;controls=0&amp;disablekb=1&amp;enablejsapi=1&amp;widgetid=1" title="Uncle Kracker - Smile [Official Video]" width="1"></iframe>

<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-50 to-transparent pointer-events-none"></div>

<div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 group">
<div className="absolute inset-0 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center animate-spin-slow paused-anim transition-transform duration-700" id="vinyl-record">

<div className="absolute inset-1 border border-slate-800 rounded-full"></div>
<div className="absolute inset-2 border border-slate-800 rounded-full"></div>
<div className="absolute inset-4 border border-slate-800 rounded-full opacity-50"></div>
<div className="absolute inset-8 border border-slate-800 rounded-full opacity-50"></div>

<div className="w-2/5 h-2/5 rounded-full overflow-hidden relative z-10 border-4 border-slate-800">
<img alt="Album Art" className="w-full h-full object-cover" id="album-art" src="https://i.ytimg.com/vi/ffej15-Dgl0/maxresdefault.jpg"/>
</div>

<div className="absolute w-4 h-4 bg-white rounded-full z-20"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
</div>

<div className="absolute -top-4 -right-4 flex gap-1 opacity-0 transition-opacity duration-300" id="visualizer">
<div className="w-1 bg-rose-400 rounded-full eq-bar"></div>
<div className="w-1 bg-rose-500 rounded-full eq-bar"></div>
<div className="w-1 bg-rose-400 rounded-full eq-bar"></div>
<div className="w-1 bg-rose-500 rounded-full eq-bar"></div>
</div>
</div>

<div className="text-center mb-6 z-10 w-full px-4">
<h3 className="text-2xl font-bold text-slate-900 mb-1 fade-text" id="player-title">
              Smile
            </h3>
<p className="text-slate-500 font-medium fade-text" id="player-artist">
              Uncle Kracker
            </p>
</div>

<div className="flex items-center gap-8 mb-6 z-10">
<button className="text-slate-400 hover:text-rose-500 transition-colors" onclick="playPrev()">
<iconify-icon icon="solar:skip-previous-bold" width="32"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full bg-rose-500 text-white shadow-xl shadow-rose-200 flex items-center justify-center hover:scale-105 transition-all active:scale-95" id="play-pause-btn" onclick="togglePlay()">
<iconify-icon className="ml-1" icon="solar:play-bold" id="play-icon" width="32"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-rose-500 transition-colors" onclick="playNext()">
<iconify-icon icon="solar:skip-next-bold" width="32"></iconify-icon>
</button>
</div>

<div className="w-full max-w-md flex items-center gap-3 text-xs text-slate-400 font-medium group/slider">
<span className="w-8 text-right tabular-nums" id="current-time">
              0:00
            </span>

<input className="flex-1 h-full w-full bg-slate-100 rounded-full cursor-pointer" id="progress-slider" max="100" min="0" onchange="commitSeek(this.value)" oninput="handleSeek(this.value)" onmousedown="startDragging()" onmouseup="stopDragging()" ontouchend="stopDragging()" ontouchstart="startDragging()" step="0.1" style={{background: 'linear-gradient(to right, #f43f5e 0%, #f1f5f9 0%)'}} type="range" value="0"/>
<span className="w-8 tabular-nums" id="total-time">0:00</span>
</div>
</div>

<div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar bg-white/60 h-fit max-h-[600px] border-white border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 shadow-lg backdrop-blur-md gap-x-4 gap-y-4">
<div className="flex justify-between items-center px-1 mb-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Playlist
            </h3>
<div className="flex items-center gap-1 text-[10px] text-rose-500 font-bold bg-rose-50 px-2 py-1 rounded-full border border-rose-100">
<iconify-icon icon="solar:infinity-bold"></iconify-icon>
              Auto-play
            </div>
</div>

<button className="playlist-btn active w-full flex items-center gap-3 p-3 rounded-2xl bg-white border border-rose-100 shadow-sm hover:shadow-md hover:border-rose-300 transition-all text-left group ring-2 ring-rose-500 ring-offset-2" id="track-0" onclick="playTrack(0)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/ffej15-Dgl0/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-slate-900 truncate">Smile</h4>
<p className="text-xs text-slate-500 truncate">Uncle Kracker</p>
</div>
<div className="text-rose-500 opacity-100 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-1" onclick="playTrack(1)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/sgK7IBQOdlE/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="truncate text-sm font-bold text-slate-900">
                God is a Weapon
              </h4>
<p className="truncate text-xs text-slate-500">Falling In Reverse</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-2" onclick="playTrack(2)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/I9fdTjBZBKk/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-slate-900 truncate">
                Every Woman in the World
              </h4>
<p className="truncate text-xs text-slate-500">Air Supply</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-3" onclick="playTrack(3)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/uaIZpyA1K-c/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="truncate text-sm font-bold text-slate-900">I Lied</h4>
<p className="truncate text-xs text-slate-500">Ex Habit</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-4" onclick="playTrack(4)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/0GB1i0Uhgv4/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-slate-900 truncate">
                Perfect Two
              </h4>
<p className="truncate text-xs text-slate-500">Auburn</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-5" onclick="playTrack(5)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/j_S3G1CZgNU/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="truncate text-sm font-bold text-slate-900">
                Keeping Me Up All Night
              </h4>
<p className="truncate text-xs text-slate-500">Chayce Beckham</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>

<button className="playlist-btn flex hover:bg-white hover:border-rose-200 hover:shadow-sm transition-all group text-left bg-white/50 w-full border-transparent border rounded-2xl pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="track-6" onclick="playTrack(6)">
<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.ytimg.com/vi/D_4EME7EyY4/maxresdefault.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-slate-900 truncate">
                One Thing
              </h4>
<p className="truncate text-xs text-slate-500">Finger Eleven</p>
</div>
<div className="text-rose-500 opacity-0 playing-indicator">
<iconify-icon className="animate-bounce" icon="solar:music-note-slider-bold" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 max-w-4xl mx-auto" id="gift">
<div className="bg-white rounded-3xl p-4 md:p-6 shadow-2xl shadow-rose-200/50 border border-rose-100 flex flex-col md:flex-row gap-6 relative overflow-visible">

<div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg text-rose-500 z-20 animate-bounce">
<iconify-icon icon="solar:gift-bold" width="32"></iconify-icon>
</div>

<div className="md:w-3/5 h-[400px] relative rounded-2xl overflow-hidden group">
<img alt="Rose Bouquet" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/50 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="uppercase text-xs font-bold tracking-widest bg-white/20 border-white/30 border rounded-md pt-1 pr-2 pb-1 pl-2 backdrop-blur-sm">
              Bloom
            </span>
</div>
</div>

<div className="md:w-2/5 flex flex-col gap-6">

<div className="h-48 relative rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Chocolates" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Heart shaped candy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center bg-white bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent), url(\'roses.png\')'}}>
<img alt="Container background" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fb17a27-1773-4f8b-aee7-66ca4963104c_800w.png"/>
</div>
</div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/30">
                Sweet
              </span>
</div>
</div>

<div className="flex-grow bg-rose-50 rounded-2xl p-8 border border-rose-100 flex flex-col justify-center items-center text-center relative">
<iconify-icon className="text-rose-200 mb-4" icon="solar:heart-bold" width="40"></iconify-icon>
<p className="font-serif-custom italic text-2xl md:text-3xl text-rose-600 leading-tight">
              "For you,
              <br/>
              from Win,
              <br/>
              with Love"
            </p>
<div className="mt-6 w-12 h-1 bg-rose-300 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 max-w-lg mx-auto" id="calculator">
<div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(225,29,72,0.15)] border border-rose-100 relative overflow-visible">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 rounded-t-[2.5rem] overflow-hidden"></div>
<iconify-icon className="absolute -top-8 -right-8 text-rose-50 opacity-50" icon="solar:hearts-bold" width="120"></iconify-icon>
<div className="text-center mb-8 relative z-10">
<h2 className="text-2xl font-serif-custom italic text-slate-900 mb-2">
            Love Compatibility
          </h2>
<p className="text-sm text-slate-500">
            Calculate the odds of your forever
          </p>
</div>
<div className="space-y-4 relative z-10">
<div className="">
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-2">
              Name 1
            </label>
<input className="focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="calc-name-1" placeholder="e.g. Victoria Br.." type="text"/>
</div>
<div className="flex justify-center -my-2 relative z-20">
<div className="bg-white rounded-full p-1.5 border border-rose-100 shadow-sm text-rose-400">
<iconify-icon icon="solar:add-circle-bold" width="24"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-2">
              Name 2
            </label>
<input className="focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="calc-name-2" placeholder="e.g. Win Di.." type="text"/>
</div>
<button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 transition-all active:scale-95 flex justify-center items-center gap-2 mt-4 group" onclick="calculateLove()">
<span className="">Calculate Compatibility</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</button>
</div>

<div className="hidden mt-8 text-center animate-heartbeat" id="calc-result">
<div className="w-full h-px bg-slate-100 mb-6"></div>
<div className="text-6xl font-black text-rose-600 tracking-tighter mb-2" id="calc-score">
            0%
          </div>
<p className="text-lg font-serif-custom italic text-slate-800" id="calc-message">
            Measuring vibes...
          </p>
<div className="mt-4 flex justify-center">
<div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-0 transition-all duration-1000 ease-out" id="calc-bar"></div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative perspective-container" id="card-reveal">
<div className="max-w-md mx-auto relative h-[500px] w-full cursor-pointer group" id="card-element" onclick="toggleCard(this)">
<div className="text-center mb-8 absolute -top-16 left-0 right-0 transition-opacity duration-500 group-[.card-open]:opacity-0">
<span className="inline-flex items-center gap-2 uppercase animate-bounce text-xs font-bold text-rose-500 tracking-widest bg-white border-rose-100 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm">
<iconify-icon className="" icon="solar:hand-stars-bold"></iconify-icon>
            Tap to Open
          </span>
</div>
<div className="card-wrapper relative w-full h-full shadow-2xl rounded-2xl bg-white border border-rose-100">

<div id="butterfly-container"></div>

<div className="absolute inset-0 bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-center items-center text-center z-0 overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10 transform translate-x-0 transition-all duration-700 delay-300">
<iconify-icon className="text-rose-500 mb-6 drop-shadow-sm" icon="solar:heart-bold" width="48"></iconify-icon>
<h3 className="font-serif-custom italic text-2xl text-slate-900 mb-6">
                My Dearest Victoria,
              </h3>
<p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Every day with you feels like this holiday. Thank you for the
                life you bring to my days. You're my best friend, and my home.
                In a world of chaos, you are my calm.
              </p>
<p className="font-serif-custom text-xl text-rose-600 font-medium">
                I love you endlessly ❤️.
              </p>
<div className="mt-8 pt-6 border-t border-rose-100 w-full flex justify-center">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Forever Yours, Win
                </span>
</div>
</div>
</div>

<div className="card-cover absolute inset-0 rounded-2xl shadow-xl border border-rose-100 bg-rose-50">

<div className="backface-hidden flex flex-col border-[12px] text-white bg-gradient-to-br from-rose-500 to-rose-600 border-white rounded-2xl pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex flex-col w-full h-full border-white/30 border-2 rounded-lg relative items-center justify-center">
<iconify-icon className="mb-6 drop-shadow-md animate-heartbeat" icon="solar:letter-heart-bold" width="80"></iconify-icon>
<h2 className="font-serif-custom italic text-4xl mb-2">
                  For Victoria
                </h2>
<p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-100">
                  Open Me
                </p>

<div className="absolute -right-12 bottom-12 w-24 h-24 bg-rose-700 rounded-full opacity-20 blur-2xl"></div>
</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-6 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="relative w-full h-full bg-white p-2 shadow-sm border border-rose-100 rotate-2 transition-transform hover:rotate-0 duration-500">
<img alt="Portrait" className="w-full h-full object-cover filter contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67271edb-94c5-4c2f-9467-02832971b16e_800w.jpg?w=800&amp;q=80"/>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-rose-100/60 rotate-1 shadow-sm backdrop-blur-sm border-l border-r border-white/40"></div>
</div>
</div>
</div>

<div className="card-shadow absolute -bottom-12 left-4 right-4 h-8 bg-black/20 blur-xl rounded-[100%] transition-all duration-700 pointer-events-none z-[-1]"></div>
</div>
</div>

<div className="mt-20 flex flex-col items-center justify-center relative z-10">
<div className="relative group cursor-pointer" onclick="spawnLove(event)">
<div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="w-48 h-48 md:w-64 md:h-64 relative transition-transform duration-500 hover:scale-105 active:scale-95 heart-mask">
<img alt="Us" className="w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b70bf48-9429-447e-b5a9-77411db0b883_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent pointer-events-none"></div>
</div>

<div className="absolute -right-8 top-1/2 animate-bounce opacity-70 hidden md:block">
<iconify-icon className="text-rose-400" icon="solar:cursor-bold" width="24"></iconify-icon>
</div>
</div>
<p className="text-sm italic text-rose-500 font-serif-custom mt-4">
          Victoria ❤️ Win
        </p>
</div>
</section>

<footer className="py-12 border-t border-rose-100 bg-white">
<div className="flex flex-col max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="mb-6 relative">
<div className="flex shadow-rose-200 text-sm font-bold text-white tracking-tighter bg-gradient-to-tr from-rose-500 to-rose-600 w-12 h-12 rounded-full shadow-lg items-center justify-center animate-pulse">
<iconify-icon className="" icon="solar:heart-bold" width="20"></iconify-icon>
</div>

<img alt="heart" className="absolute -top-4 -right-4 w-8 h-8 pointer-events-none" src="https://media.tenor.com/On7kvXwcx_4AAAAi/heart-love.gif"/>
</div>
<p className="text-base font-medium text-slate-900 mb-2">
          Building a Gothic Victorian life together.
        </p>
<p className="text-sm text-slate-400">
          © 2025-2026 Win &amp; Victoria. Happy Valentine's Day.
        </p>
</div>
</footer>



    </>
  );
}
