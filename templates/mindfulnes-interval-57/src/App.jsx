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



        // State
        let state = {
            isRunning: false,
            interval: 0, // minutes
            soundType: 'beep', // 'beep' or 'custom'
            customSoundFile: null,
            customSoundUrl: null, // To store the playable URL
            timerId: null
        };

        // DOM Elements
        const toggle = document.getElementById('master-toggle');
        const toggleBg = document.getElementById('toggle-bg');
        const toggleDot = document.getElementById('toggle-dot');
        const toggleIcon = document.getElementById('toggle-icon');
        const statusCard = document.getElementById('status-card');
        const statusText = document.getElementById('status-text');
        const statusDot = document.getElementById('status-dot');
        const timerDisplay = document.getElementById('timer-display');
        const activeIndicator = document.getElementById('active-indicator');
        
        const intervalBtns = document.querySelectorAll('.interval-btn');
        const customIntervalContainer = document.getElementById('custom-interval-container');
        const customIntervalInput = document.getElementById('custom-interval-input');
        
        const soundBeepBtn = document.getElementById('sound-beep-btn');
        const soundFileBtn = document.getElementById('sound-file-btn');
        const soundHighlight = document.getElementById('sound-highlight');
        const soundUpload = document.getElementById('sound-upload');
        const soundFileLabel = document.getElementById('sound-file-label');

        const bgUploadTrigger = document.getElementById('bg-upload-trigger');
        const bgUpload = document.getElementById('bg-upload');
        const userBgImage = document.getElementById('user-bg-image');

        // --- Helper Functions ---

        function formatTime(minutes) {
            if (minutes < 1) return "Less than 1m";
            if (minutes === 60) return "1 Hour";
            return `${minutes} Minutes`;
        }

        function updateUIState() {
            if (state.isRunning) {
                // UI: Running
                toggleBg.classList.replace('bg-neutral-800', 'bg-indigo-600');
                toggleBg.classList.add('border-indigo-500');
                toggleBg.classList.remove('border-white/10');
                toggleDot.style.transform = 'translateX(100%)';
                toggleDot.classList.replace('bg-neutral-400', 'bg-white');
                toggleIcon.setAttribute('icon', 'solar:check-circle-linear');
                toggleIcon.classList.add('text-indigo-600');
                toggleIcon.classList.remove('text-neutral-900');
                
                statusText.innerText = "Reminder Running";
                statusText.classList.replace('text-neutral-400', 'text-indigo-300');
                statusDot.classList.replace('bg-neutral-500', 'bg-indigo-400');
                statusDot.classList.add('animate-pulse');
                
                statusCard.classList.add('active-glow');
                activeIndicator.classList.remove('hidden');

                timerDisplay.innerText = formatTime(state.interval);
                
                // Disable inputs while running
                intervalBtns.forEach(btn => btn.style.pointerEvents = 'none');
                customIntervalInput.disabled = true;
                soundBeepBtn.style.pointerEvents = 'none';
                soundFileBtn.style.pointerEvents = 'none';
                
            } else {
                // UI: Stopped
                toggleBg.classList.replace('bg-indigo-600', 'bg-neutral-800');
                toggleBg.classList.remove('border-indigo-500');
                toggleBg.classList.add('border-white/10');
                toggleDot.style.transform = 'translateX(0)';
                toggleDot.classList.replace('bg-white', 'bg-neutral-400');
                toggleIcon.setAttribute('icon', 'solar:close-circle-linear');
                toggleIcon.classList.remove('text-indigo-600');
                toggleIcon.classList.add('text-neutral-900');
                
                statusText.innerText = "Reminder Stopped";
                statusText.classList.replace('text-indigo-300', 'text-neutral-400');
                statusDot.classList.replace('bg-indigo-400', 'bg-neutral-500');
                statusDot.classList.remove('animate-pulse');
                
                statusCard.classList.remove('active-glow');
                activeIndicator.classList.add('hidden');
                
                timerDisplay.innerText = state.interval > 0 ? formatTime(state.interval) : "Ready";

                // Enable inputs
                intervalBtns.forEach(btn => btn.style.pointerEvents = 'auto');
                customIntervalInput.disabled = false;
                soundBeepBtn.style.pointerEvents = 'auto';
                soundFileBtn.style.pointerEvents = 'auto';
            }
        }

        function playSound() {
            // Visual feedback of sound playing
            statusCard.classList.add('ring-2', 'ring-indigo-400', 'ring-offset-2', 'ring-offset-black');
            setTimeout(() => {
                statusCard.classList.remove('ring-2', 'ring-indigo-400', 'ring-offset-2', 'ring-offset-black');
            }, 1000);

            if (state.soundType === 'beep') {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime);
                osc.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.5);
            } else if (state.soundType === 'custom' && state.customSoundUrl) {
                // Play custom loaded audio
                const audio = new Audio(state.customSoundUrl);
                audio.play().catch(e => console.log("Audio Play Error:", e));
            }
        }

        // --- Event Listeners ---

        // Interval Selection
        intervalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (state.isRunning) return;
                
                intervalBtns.forEach(b => b.classList.remove('active'));
                customIntervalContainer.classList.remove('active');
                customIntervalInput.value = '';

                btn.classList.add('active');
                state.interval = parseInt(btn.dataset.time);
                timerDisplay.innerText = formatTime(state.interval);
            });
        });

        // Custom Interval
        customIntervalInput.addEventListener('focus', () => {
            if (state.isRunning) return;
            intervalBtns.forEach(b => b.classList.remove('active'));
            customIntervalContainer.classList.add('active');
        });

        customIntervalInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            if (val > 0) {
                state.interval = val;
                timerDisplay.innerText = formatTime(state.interval);
            }
        });

        // Sound Selection - Beep
        soundBeepBtn.addEventListener('click', () => {
            if (state.isRunning) return;
            state.soundType = 'beep';
            soundHighlight.style.left = '4px';
            soundBeepBtn.classList.replace('text-neutral-400', 'text-white');
            soundFileBtn.classList.replace('text-white', 'text-neutral-400');
        });

        // Sound Selection - Custom / Upload
        soundFileBtn.addEventListener('click', () => {
            if (state.isRunning) return;
            
            // Logic: If user clicks this and NO file is selected, open picker.
            // If file IS selected, but user clicks again (maybe to replace?), open picker.
            // But if user was on 'Beep' and clicks this to switch back to existing file, just switch.
            
            if (state.soundType === 'custom' && state.customSoundFile) {
                // Already active, user clicked again -> allow replace
                soundUpload.click();
            } else if (!state.customSoundFile) {
                // No file yet -> upload
                soundUpload.click();
            } else {
                // Has file, but was on beep tab -> just switch
                selectSoundTab();
            }
        });

        function selectSoundTab() {
            state.soundType = 'custom';
            soundHighlight.style.left = 'calc(50%)'; 
            soundFileBtn.classList.replace('text-neutral-400', 'text-white');
            soundBeepBtn.classList.replace('text-white', 'text-neutral-400');
        }

        soundUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                state.customSoundFile = file;
                // Create a playable URL from the uploaded file
                state.customSoundUrl = URL.createObjectURL(file);
                
                // Update Label
                const maxLen = 15;
                let displayName = file.name;
                if (displayName.length > maxLen) {
                    displayName = displayName.substring(0, maxLen - 3) + '...';
                }
                soundFileLabel.innerText = displayName;
                
                selectSoundTab();
            }
            // Reset input so same file can be selected again if needed
            e.target.value = '';
        });

        // Master Toggle
        toggle.addEventListener('change', (e) => {
            if (state.interval === 0) {
                alert("Please select a time interval first.");
                e.target.checked = false;
                return;
            }

            state.isRunning = e.target.checked;
            updateUIState();

            if (state.isRunning) {
                // Start Logic
                state.timerId = setInterval(() => {
                    playSound();
                }, state.interval * 60 * 1000); 
            } else {
                // Stop Logic
                if (state.timerId) clearInterval(state.timerId);
            }
        });

        // Background Upload
        bgUploadTrigger.addEventListener('click', () => bgUpload.click());

        bgUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    userBgImage.src = e.target.result;
                    userBgImage.classList.remove('opacity-60');
                    userBgImage.classList.add('opacity-80');
                }
                reader.readAsDataURL(file);
            }
        });

        // Initialize with default 5 min
        document.querySelector('[data-time="5"]').click();

    
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
      

<div className="fixed inset-0 z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"></div>
</div>

<main className="relative z-10 w-full max-w-[400px] h-[850px] animate-enter">
<div className="relative w-full h-full bg-black rounded-[44px] shadow-2xl border-[6px] border-neutral-900/50 overflow-hidden">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-[24px] z-50 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-green-500/20 animate-pulse hidden" id="active-indicator"></div>
</div>

<div className="absolute top-3 left-8 text-neutral-200 text-sm font-medium z-40 font-display">9:41</div>
<div className="absolute top-3 right-8 flex items-center gap-1.5 z-40 text-neutral-200">
<iconify-icon icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>

<div className="h-full overflow-y-auto no-scrollbar pt-16 pb-8 px-6 flex flex-col relative">

<div className="flex items-center justify-between mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div>
<h1 className="text-xl font-medium tracking-tight text-white font-display">Mindfulness</h1>
<p className="text-xs text-neutral-500 font-light tracking-wide">Background Interval Reminder</p>
</div>
<button className="w-10 h-10 rounded-full glass-button flex items-center justify-center group" id="bg-upload-trigger">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="solar:gallery-add-linear" width="20"></iconify-icon>
</button>
<input accept="image/*" className="hidden" id="bg-upload" type="file"/>
</div>

<div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden mb-6 group transition-all-300 border border-white/5 animate-slide-up" id="status-card" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
<img alt="Mindfulness" className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-500" id="user-bg-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>

<div className="absolute inset-0 flex flex-col justify-end p-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-neutral-500 transition-colors duration-300" id="status-dot"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-400 transition-colors duration-300" id="status-text">Stopped</span>
</div>
<h2 className="text-4xl font-light text-white font-display tracking-tight" id="timer-display">Ready</h2>
</div>
</div>

<div className="space-y-6">

<div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
<label className="block text-xs text-neutral-500 mb-3 ml-1 font-medium tracking-wide">INTERVAL DURATION</label>
<div className="grid grid-cols-3 gap-3" id="interval-grid">
<button className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 interval-btn" data-time="1">
<span className="text-lg font-medium font-display">1</span>
<span className="text-[10px] text-neutral-500 uppercase">Min</span>
</button>
<button className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 interval-btn" data-time="5">
<span className="text-lg font-medium font-display">5</span>
<span className="text-[10px] text-neutral-500 uppercase">Min</span>
</button>
<button className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 interval-btn" data-time="10">
<span className="text-lg font-medium font-display">10</span>
<span className="text-[10px] text-neutral-500 uppercase">Min</span>
</button>
<button className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 interval-btn" data-time="15">
<span className="text-lg font-medium font-display">15</span>
<span className="text-[10px] text-neutral-500 uppercase">Min</span>
</button>
<button className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 interval-btn" data-time="30">
<span className="text-lg font-medium font-display">30</span>
<span className="text-[10px] text-neutral-500 uppercase">Min</span>
</button>

<div className="glass-button rounded-2xl py-4 flex flex-col items-center justify-center gap-1 relative overflow-hidden" id="custom-interval-container">
<input className="custom-input text-lg font-medium font-display w-full h-full absolute inset-0 bg-transparent z-10 focus:placeholder-transparent" id="custom-interval-input" placeholder="--" type="number"/>
<span className="text-lg font-medium font-display opacity-0 pointer-events-none">00</span>
<span className="text-[10px] text-neutral-500 uppercase z-0 pointer-events-none mt-6">Custom</span>
</div>
</div>
</div>

<div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
<label className="block text-xs text-neutral-500 mb-3 ml-1 font-medium tracking-wide">SOUNDSCAPE</label>
<div className="glass-panel rounded-2xl p-1 flex items-center relative">

<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-neutral-800/80 rounded-xl transition-all duration-300 ease-out border border-white/10 shadow-lg" id="sound-highlight"></div>
<button className="flex-1 py-3 text-xs font-medium z-10 text-white flex items-center justify-center gap-2 transition-colors" id="sound-beep-btn">
<iconify-icon icon="solar:bell-bing-linear" width="16"></iconify-icon>
<span>Beep</span>
</button>
<button className="flex-1 py-3 text-xs font-medium z-10 text-neutral-400 flex items-center justify-center gap-2 transition-colors" id="sound-file-btn">
<iconify-icon icon="solar:music-note-linear" width="16"></iconify-icon>
<span id="sound-file-label">Upload MP3</span>
</button>

<input accept="audio/*, .mp3, .wav" className="hidden" id="sound-upload" type="file"/>
</div>
<p className="text-[10px] text-neutral-600 mt-2 ml-1 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                            Plays in background, even when locked.
                        </p>
</div>

<div className="animate-slide-up pt-4" style={{animationDelay: '0.5s'}}>
<div className="glass-panel rounded-[32px] p-2 flex items-center justify-between pr-3 group hover:border-white/15 transition-all duration-300">
<div className="flex items-center gap-4 pl-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:power-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Active Status</span>
<span className="text-xs text-neutral-500">Wake lock enabled</span>
</div>
</div>

<label className="flex items-center cursor-pointer relative" htmlFor="master-toggle">
<input className="sr-only" id="master-toggle" type="checkbox"/>
<div className="w-14 h-8 bg-neutral-800 rounded-full border border-white/10 transition-colors duration-300 ease-in-out" id="toggle-bg"></div>
<div className="dot absolute left-1 top-1 bg-neutral-400 w-6 h-6 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm flex items-center justify-center text-neutral-900" id="toggle-dot">
<iconify-icon icon="solar:close-circle-linear" id="toggle-icon" width="14"></iconify-icon>
</div>
</label>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-800 rounded-full z-50"></div>
</div>
</main>


    </>
  );
}
