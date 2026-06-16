import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const appContainer = document.getElementById('app-container');
        const setupView = document.getElementById('setup-view');
        const activeView = document.getElementById('active-view');
        const timeSlider = document.getElementById('time-slider');
        const timePreview = document.getElementById('time-preview');
        const timerDisplay = document.getElementById('timer-display');
        const endTimeText = document.getElementById('end-time-text');
        const progressRing = document.getElementById('progress-ring');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const pauseIcon = document.getElementById('pause-icon');
        const playIcon = document.getElementById('play-icon');

        // State
        let totalSeconds = 25 * 60;
        let remainingSeconds = totalSeconds;
        let interval = null;
        let isPaused = false;
        
        // Ring Setup
        const radius = progressRing.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = 0;

        // Init Animation
        setTimeout(() => {
            appContainer.classList.add('fade-enter-active');
        }, 100);

        // Slider Logic
        timeSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            updatePreview(val);
        });

        function updatePreview(minutes) {
            let displayHTML = '';
            if (minutes < 60) {
                displayHTML = `${minutes}<span class="text-3xl align-top text-stone-400 font-sans font-light ml-1">m</span>`;
            } else {
                const h = Math.floor(minutes / 60);
                const m = minutes % 60;
                if (m === 0) {
                    displayHTML = `${h}<span class="text-3xl align-top text-stone-400 font-sans font-light ml-1">h</span>`;
                } else {
                    displayHTML = `${h}<span class="text-3xl align-top text-stone-400 font-sans font-light mx-1">h</span>${m}<span class="text-3xl align-top text-stone-400 font-sans font-light ml-1">m</span>`;
                }
            }
            timePreview.innerHTML = displayHTML;
        }

        function setPreset(minutes) {
            timeSlider.value = minutes;
            updatePreview(minutes);
        }

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            progressRing.style.strokeDashoffset = offset;
        }

        function formatTime(sec) {
            const h = Math.floor(sec / 3600);
            const m = Math.floor((sec % 3600) / 60);
            const s = sec % 60;

            if (h > 0) {
                return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            }
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        function updateEndTime() {
            const now = new Date();
            const end = new Date(now.getTime() + remainingSeconds * 1000);
            endTimeText.textContent = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        function startTimer() {
            const minutes = parseInt(timeSlider.value);
            totalSeconds = minutes * 60;
            remainingSeconds = totalSeconds;
            isPaused = false;

            // UI Transition
            setupView.classList.add('fade-exit-active');
            setTimeout(() => {
                setupView.classList.add('hidden');
                setupView.classList.remove('fade-exit-active');
                activeView.classList.remove('hidden');
                activeView.classList.add('fade-enter');
                setTimeout(() => activeView.classList.add('fade-enter-active'), 10);
            }, 300);

            updateTimerDisplay();
            updateEndTime();
            
            clearInterval(interval);
            interval = setInterval(tick, 1000);
        }

        function tick() {
            if (!isPaused) {
                remainingSeconds--;
                updateTimerDisplay();
                if (remainingSeconds <= 0) {
                    clearInterval(interval);
                    // Timer finished logic could go here (sound, etc)
                }
            }
        }

        function updateTimerDisplay() {
            timerDisplay.textContent = formatTime(remainingSeconds);
            const percent = (remainingSeconds / totalSeconds) * 100;
            setProgress(100 - percent); // Invert for fill effect or normal for empty effect
            // Actually, usually countdowns remove the ring.
            // Let's make the ring shrink:
            progressRing.style.strokeDashoffset = circumference - (percent / 100) * circumference;
        }

        function togglePause() {
            isPaused = !isPaused;
            if (isPaused) {
                pauseIcon.classList.add('hidden');
                playIcon.classList.remove('hidden');
                timerDisplay.classList.add('opacity-50');
                endTimeText.textContent = "Paused";
            } else {
                pauseIcon.classList.remove('hidden');
                playIcon.classList.add('hidden');
                timerDisplay.classList.remove('opacity-50');
                updateEndTime();
            }
        }

        function resetTimer() {
            clearInterval(interval);
            
            // UI Transition Back
            activeView.classList.remove('fade-enter', 'fade-enter-active');
            activeView.classList.add('fade-exit-active');
            
            setTimeout(() => {
                activeView.classList.add('hidden');
                activeView.classList.remove('fade-exit-active');
                setupView.classList.remove('hidden');
                setupView.classList.add('fade-enter');
                setTimeout(() => setupView.classList.add('fade-enter-active'), 10);
            }, 300);

            // Reset State
            setProgress(0);
            pauseIcon.classList.remove('hidden');
            playIcon.classList.add('hidden');
            timerDisplay.classList.remove('opacity-50');
        }

        function addMinute() {
            remainingSeconds += 60;
            totalSeconds += 60;
            updateTimerDisplay();
            updateEndTime();
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        // Initialize display
        updatePreview(25);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-stone-200/50 dark:bg-stone-800/20 rounded-full blur-[120px] opacity-70"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-stone-300/40 dark:bg-stone-800/20 rounded-full blur-[120px] opacity-70"></div>
</div>

<main className="relative z-10 w-full max-w-md p-6 sm:p-8 mx-4 fade-enter" id="app-container">

<header className="flex justify-between items-center mb-12">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tighter uppercase text-stone-500 dark:text-stone-400">Chronos</span>
</div>
<button className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors" onclick="toggleTheme()">
<iconify-icon className="block dark:hidden" icon="solar:sun-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<div className="flex flex-col items-center justify-center w-full transition-opacity duration-300" id="setup-view">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-center mb-2 text-stone-900 dark:text-stone-50">Focus</h1>
<p className="text-xl md:text-2xl text-stone-500 dark:text-stone-400 font-normal mb-10 text-center serif italic">How long do you have?</p>

<div className="relative mb-12 group cursor-pointer">
<div className="text-7xl md:text-8xl font-medium serif text-stone-800 dark:text-stone-100 tracking-tight transition-all" id="time-preview">
                    25<span className="text-3xl align-top text-stone-400 font-sans font-light ml-1">m</span>
</div>
</div>

<div className="w-full px-4 mb-10">
<input className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer dark:bg-stone-800 text-stone-800 dark:text-stone-200 accent-stone-800" id="time-slider" max="300" min="1" type="range" value="25"/>
<div className="flex justify-between mt-3 text-xs text-stone-400 font-medium">
<span>1m</span>
<span>5h</span>
</div>
</div>

<div className="flex gap-3 mb-12 justify-center flex-wrap">
<button className="px-5 py-2 rounded-full border border-stone-200 dark:border-stone-800 hover:bg-white dark:hover:bg-stone-800 hover:shadow-md transition-all text-sm font-medium text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm" onclick="setPreset(15)">15m</button>
<button className="px-5 py-2 rounded-full border border-stone-200 dark:border-stone-800 hover:bg-white dark:hover:bg-stone-800 hover:shadow-md transition-all text-sm font-medium text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm" onclick="setPreset(25)">25m</button>
<button className="px-5 py-2 rounded-full border border-stone-200 dark:border-stone-800 hover:bg-white dark:hover:bg-stone-800 hover:shadow-md transition-all text-sm font-medium text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm" onclick="setPreset(60)">1h</button>
</div>

<button className="group relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300" onclick="startTimer()">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>

<div className="hidden flex-col items-center justify-center w-full relative" id="active-view">

<div className="relative w-64 h-64 md:w-80 md:h-80 mb-10 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">

<circle className="text-stone-200 dark:text-stone-800" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="3"></circle>

<circle className="text-stone-800 dark:text-stone-200 progress-ring__circle" cx="50" cy="50" fill="transparent" id="progress-ring" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<h2 className="text-6xl md:text-7xl font-medium serif text-stone-900 dark:text-stone-100 tracking-tight tabular-nums" id="timer-display">25:00</h2>
<span className="text-stone-400 dark:text-stone-500 text-sm mt-2 font-medium flex items-center gap-1" id="end-time-display">
<iconify-icon icon="solar:bell-linear" width="14"></iconify-icon>
<span id="end-time-text">--:--</span>
</span>
</div>
</div>

<div className="flex items-center gap-8">
<button className="p-4 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-all active:scale-95" onclick="resetTimer()">
<iconify-icon icon="solar:stop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<button className="w-20 h-20 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center" id="play-pause-btn" onclick="togglePause()">
<iconify-icon icon="solar:pause-linear" id="pause-icon" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="hidden ml-1" icon="solar:play-linear" id="play-icon" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<button className="p-4 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-all active:scale-95" onclick="addMinute()">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</main>


    </>
  );
}
