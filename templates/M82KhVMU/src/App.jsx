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



    // DOM Elements
    const timer = document.getElementById('timer');
    const status = document.getElementById('status');
    const progressRing = document.getElementById('progress-ring');
    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('resetBtn');
    const skipBtn = document.getElementById('skipBtn');
    const focusBtn = document.getElementById('focusBtn');
    const shortBreakBtn = document.getElementById('shortBreakBtn');
    const longBreakBtn = document.getElementById('longBreakBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const startIcon = document.getElementById('startIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    
    // Timer variables
    let timerInterval;
    let timeLeft;
    let totalTime;
    let isRunning = false;
    let currentMode = 'focus';
    let sessionsCompleted = 0;
    
    // Timer settings (in minutes)
    let settings = {
      focusTime: 25,
      shortBreakTime: 5,
      longBreakTime: 15,
      sessionsBeforeLongBreak: 4
    };
    
    // Initialize timer
    function initTimer(mode) {
      currentMode = mode;
      clearInterval(timerInterval);
      isRunning = false;
      
      // Update button states
      startIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      
      // Set time based on mode
      switch(mode) {
        case 'focus':
          totalTime = settings.focusTime * 60;
          status.textContent = 'FOCUS';
          progressRing.style.stroke = '#6366f1'; // indigo-500
          focusBtn.classList.add('bg-indigo-500');
          focusBtn.classList.remove('bg-zinc-800', 'hover:bg-zinc-700');
          shortBreakBtn.classList.remove('bg-indigo-500');
          shortBreakBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          longBreakBtn.classList.remove('bg-indigo-500');
          longBreakBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          break;
        case 'shortBreak':
          totalTime = settings.shortBreakTime * 60;
          status.textContent = 'SHORT BREAK';
          progressRing.style.stroke = '#10b981'; // emerald-500
          focusBtn.classList.remove('bg-indigo-500');
          focusBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          shortBreakBtn.classList.add('bg-indigo-500');
          shortBreakBtn.classList.remove('bg-zinc-800', 'hover:bg-zinc-700');
          longBreakBtn.classList.remove('bg-indigo-500');
          longBreakBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          break;
        case 'longBreak':
          totalTime = settings.longBreakTime * 60;
          status.textContent = 'LONG BREAK';
          progressRing.style.stroke = '#3b82f6'; // blue-500
          focusBtn.classList.remove('bg-indigo-500');
          focusBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          shortBreakBtn.classList.remove('bg-indigo-500');
          shortBreakBtn.classList.add('bg-zinc-800', 'hover:bg-zinc-700');
          longBreakBtn.classList.add('bg-indigo-500');
          longBreakBtn.classList.remove('bg-zinc-800', 'hover:bg-zinc-700');
          break;
      }
      
      timeLeft = totalTime;
      updateTimerDisplay();
      updateProgressRing();
    }
    
    // Update timer display
    function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update progress ring
    function updateProgressRing() {
      const circumference = 2 * Math.PI * 42;
      const offset = circumference - (timeLeft / totalTime) * circumference;
      progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
      progressRing.style.strokeDashoffset = offset;
    }
    
    // Start/pause timer
    function toggleTimer() {
      if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      } else {
        isRunning = true;
        startIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        
        timerInterval = setInterval(() => {
          timeLeft--;
          updateTimerDisplay();
          updateProgressRing();
          
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            playAlarm();
            
            if (currentMode === 'focus') {
              sessionsCompleted++;
              if (sessionsCompleted % settings.sessionsBeforeLongBreak === 0) {
                initTimer('longBreak');
              } else {
                initTimer('shortBreak');
              }
            } else {
              initTimer('focus');
            }
          }
        }, 1000);
      }
    }
    
    // Reset timer
    function resetTimer() {
      initTimer(currentMode);
    }
    
    // Skip to next timer
    function skipTimer() {
      if (currentMode === 'focus') {
        if (sessionsCompleted % settings.sessionsBeforeLongBreak === settings.sessionsBeforeLongBreak - 1) {
          initTimer('longBreak');
        } else {
          initTimer('shortBreak');
        }
      } else {
        initTimer('focus');
      }
    }
    
    // Play alarm sound
    function playAlarm() {
      // You could add a sound here
      console.log('Time is up!');
    }
    
    // Save settings
    function saveSettings() {
      settings.focusTime = parseInt(document.getElementById('focusTime').value) || 25;
      settings.shortBreakTime = parseInt(document.getElementById('shortBreakTime').value) || 5;
      settings.longBreakTime = parseInt(document.getElementById('longBreakTime').value) || 15;
      settings.sessionsBeforeLongBreak = parseInt(document.getElementById('sessionsCount').value) || 4;
      
      // Save to localStorage
      localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
      
      // Reset timer with new settings
      initTimer(currentMode);
      
      // Hide settings panel
      settingsPanel.classList.add('hidden');
    }
    
    // Load settings from localStorage
    function loadSettings() {
      const savedSettings = localStorage.getItem('pomodoroSettings');
      if (savedSettings) {
        settings = JSON.parse(savedSettings);
        
        // Update input fields
        document.getElementById('focusTime').value = settings.focusTime;
        document.getElementById('shortBreakTime').value = settings.shortBreakTime;
        document.getElementById('longBreakTime').value = settings.longBreakTime;
        document.getElementById('sessionsCount').value = settings.sessionsBeforeLongBreak;
      }
    }
    
    // Event listeners
    startBtn.addEventListener('click', toggleTimer);
    resetBtn.addEventListener('click', resetTimer);
    skipBtn.addEventListener('click', skipTimer);
    focusBtn.addEventListener('click', () => initTimer('focus'));
    shortBreakBtn.addEventListener('click', () => initTimer('shortBreak'));
    longBreakBtn.addEventListener('click', () => initTimer('longBreak'));
    settingsBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
    saveSettingsBtn.addEventListener('click', saveSettings);
    
    // Initialize
    loadSettings();
    initTimer('focus');
  
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
      
<div className="max-w-md w-full bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">
<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h1 className="text-lg font-medium">Pomodoro Timer</h1>
<div className="flex space-x-2">
<button className="text-zinc-400 hover:text-zinc-200" id="settingsBtn">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="text-zinc-400 hover:text-zinc-200" id="historyBtn">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="p-6">

<div className="flex justify-center mb-6">
<div className="relative">
<svg className="w-48 h-48" viewbox="0 0 100 100">
<circle className="text-zinc-800" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-indigo-500 progress-ring__circle" cx="50" cy="50" fill="transparent" id="progress-ring" r="42" stroke="currentColor" stroke-dasharray="264" stroke-dashoffset="0" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="text-4xl font-light" id="timer">25:00</div>
<div className="text-xs text-zinc-400 mt-1" id="status">FOCUS</div>
</div>
</div>
</div>

<div className="flex justify-center space-x-4 mb-6">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full text-xs flex items-center justify-center transition" id="startBtn">
<svg className="w-4 h-4" fill="none" id="startIcon" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="w-4 h-4 hidden" fill="none" id="pauseIcon" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-6 rounded-full text-xs flex items-center justify-center transition" id="resetBtn">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-6 rounded-full text-xs flex items-center justify-center transition" id="skipBtn">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex justify-center space-x-2">
<button className="bg-indigo-500 text-white py-1 px-4 rounded-full text-xs" id="focusBtn">Focus</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-1 px-4 rounded-full text-xs" id="shortBreakBtn">Short Break</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-1 px-4 rounded-full text-xs" id="longBreakBtn">Long Break</button>
</div>
</div>

<div className="hidden p-4 border-t border-zinc-800" id="settingsPanel">
<h2 className="text-sm font-medium mb-3">Timer Settings</h2>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block mb-1 text-xs text-zinc-400">Focus Time (min)</label>
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="focusTime" max="60" min="1" type="number" value="25"/>
</div>
<div>
<label className="block mb-1 text-xs text-zinc-400">Short Break (min)</label>
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="shortBreakTime" max="30" min="1" type="number" value="5"/>
</div>
<div>
<label className="block mb-1 text-xs text-zinc-400">Long Break (min)</label>
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="longBreakTime" max="60" min="1" type="number" value="15"/>
</div>
<div>
<label className="block mb-1 text-xs text-zinc-400">Sessions Before Long Break</label>
<input className="w-full bg-zinc-800 py-1.5 px-3 rounded text-xs" id="sessionsCount" max="10" min="1" type="number" value="4"/>
</div>
</div>
<div className="mt-3 flex justify-end">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded text-xs" id="saveSettingsBtn">Save Settings</button>
</div>
</div>
</div>


    </>
  );
}
