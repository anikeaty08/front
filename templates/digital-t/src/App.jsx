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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Initialize Lucide icons
      lucide.createIcons();

      // App State
      let state = {
          count: 0,
          target: 0,
          sessionName: '',
          soundEnabled: true,
          vibrationEnabled: true,
          bgSoundEnabled: false,
          darkMode: false,
          language: 'en',
          history: []
      };

      // Translations
      const translations = {
          en: {
              counter: 'Counter',
              history: 'History',
              settings: 'Settings',
              sessionName: 'Session Name',
              target: 'Target',
              targetNotSet: 'Target: Not Set',
              reset: 'Reset',
              save: 'Save',
              clickSound: 'Click Sound',
              vibration: 'Vibration',
              bgSound: 'Background Sound',
              darkMode: 'Dark Mode',
              clearAll: 'Clear All',
              saved: 'Saved!',
              sessionHistory: 'Session History',
              enterSessionName: 'Please enter a session name',
              resetConfirm: 'Reset counter?',
              nothingToSave: 'Nothing to save',
              clearHistoryConfirm: 'Clear all history?',
              targetReached: 'Target reached!'
          },
          ar: {
              counter: 'العداد',
              history: 'السجل',
              settings: 'الإعدادات',
              sessionName: 'اسم الجلسة',
              target: 'الهدف',
              targetNotSet: 'الهدف: غير محدد',
              reset: 'إعادة',
              save: 'حفظ',
              clickSound: 'صوت النقر',
              vibration: 'الاهتزاز',
              bgSound: 'صوت الخلفية',
              darkMode: 'الوضع الداكن',
              clearAll: 'مسح الكل',
              saved: 'تم الحفظ!',
              sessionHistory: 'سجل الجلسات',
              enterSessionName: 'الرجاء إدخال اسم الجلسة',
              resetConfirm: 'إعادة تعيين العداد؟',
              nothingToSave: 'لا يوجد شيء لحفظه',
              clearHistoryConfirm: 'هل تريد مسح كل السجل؟',
              targetReached: 'تم الوصول إلى الهدف!'
          }
      };

      // Load state from localStorage
      function loadState() {
          const saved = localStorage.getItem('tasbeehState');
          if (saved) {
              state = { ...state, ...JSON.parse(saved) };
              updateUI();
          }

          // Apply dark mode
          if (state.darkMode) {
              document.documentElement.classList.add('dark');
              document.getElementById('darkModeToggle').checked = true;
              updateToggleUI('darkModeToggle');
          }

          // Apply settings
          document.getElementById('soundToggle').checked = state.soundEnabled;
          document.getElementById('vibrationToggle').checked = state.vibrationEnabled;
          document.getElementById('bgSoundToggle').checked = state.bgSoundEnabled;
          document.getElementById('languageSelect').value = state.language;

          updateToggleUI('soundToggle');
          updateToggleUI('vibrationToggle');
          updateToggleUI('bgSoundToggle');

          updateLanguage();
      }

      // Save state to localStorage
      function saveState() {
          localStorage.setItem('tasbeehState', JSON.stringify(state));
      }

      // Update UI
      function updateUI() {
          document.getElementById('countDisplay').textContent = state.count;
          document.getElementById('sessionName').value = state.sessionName;

          if (state.target > 0) {
              const progress = Math.min((state.count / state.target) * 100, 100);
              document.getElementById('progressBar').style.width = progress + '%';
              document.getElementById('targetDisplay').textContent = state.language === 'ar'
                  ? `الهدف: ${state.target}`
                  : `Target: ${state.target}`;
          } else {
              document.getElementById('progressBar').style.width = '0%';
              document.getElementById('targetDisplay').textContent = translations[state.language].targetNotSet;
          }
      }

      // Counter tap
      document.getElementById('counterButton').addEventListener('click', function() {
          // Check if target is reached
          if (state.target > 0 && state.count >= state.target) {
              alert(translations[state.language].targetReached);
              return;
          }

          state.count++;
          updateUI();
          saveState();

          // Sound feedback
          if (state.soundEnabled) {
              playClickSound();
          }

          // Vibration feedback
          if (state.vibrationEnabled && 'vibrate' in navigator) {
              navigator.vibrate(10);
          }

          // Check if target reached
          if (state.target > 0 && state.count === state.target) {
              showTargetReached();
          }
      });

      // Play click sound
      function playClickSound() {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.value = 800;
          oscillator.type = 'sine';

          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.1);
      }

      // Show target reached
      function showTargetReached() {
          if ('vibrate' in navigator) {
              navigator.vibrate([100, 50, 100, 50, 100]);
          }

          const display = document.getElementById('countDisplay');
          display.classList.add('ripple');
          setTimeout(() => display.classList.remove('ripple'), 600);
      }

      // Set target
      function setTarget(value) {
          state.target = value;
          updateUI();
          saveState();
      }

      // Session name input
      document.getElementById('sessionName').addEventListener('input', function(e) {
          state.sessionName = e.target.value;
          saveState();
      });

      // Reset counter
      function resetCounter() {
          if (confirm(translations[state.language].resetConfirm)) {
              state.count = 0;
              updateUI();
              saveState();
          }
      }

      // Save session
      function saveSession() {
          if (state.count === 0) {
              alert(translations[state.language].nothingToSave);
              return;
          }

          // Get session name from input
          const sessionNameInput = document.getElementById('sessionName').value.trim();

          // Check if session name is empty
          if (!sessionNameInput) {
              alert(translations[state.language].enterSessionName);
              document.getElementById('sessionName').focus();
              return;
          }

          const session = {
              name: sessionNameInput,
              count: state.count,
              target: state.target,
              date: new Date().toISOString(),
              timestamp: Date.now()
          };

          state.history.unshift(session);
          saveState();

          // Reset for new session
          state.count = 0;
          state.sessionName = '';
          document.getElementById('sessionName').value = '';
          updateUI();

          alert(translations[state.language].saved);
          loadHistory();
      }

      // Load history
      function loadHistory() {
          const historyList = document.getElementById('historyList');

          if (state.history.length === 0) {
              historyList.innerHTML = `
                  <div class="text-center py-12 text-gray-500 dark:text-gray-400">
                      <i data-lucide="inbox" class="mx-auto mb-3" style="width: 48px; height: 48px; stroke-width: 1.5;"></i>
                      <p>${state.language === 'ar' ? 'لا يوجد سجل بعد' : 'No history yet'}</p>
                  </div>
              `;
              lucide.createIcons();
              return;
          }

          historyList.innerHTML = state.history.map((session, index) => {
              const date = new Date(session.date);
              const dateStr = date.toLocaleDateString(state.language === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
              });

              return `
                  <div class="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                      <div class="flex items-start justify-between">
                          <div class="flex-1">
                              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${session.name}</h3>
                              <p class="text-sm text-gray-600 dark:text-gray-400">${dateStr}</p>
                          </div>
                          <div class="text-right">
                              <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${session.count}</div>
                              ${session.target > 0 ? `<div class="text-xs text-gray-500 dark:text-gray-500">${state.language === 'ar' ? 'من' : 'of'} ${session.target}</div>` : ''}
                          </div>
                      </div>
                  </div>
              `;
          }).join('');
      }

      // Clear history
      function clearHistory() {
          if (confirm(translations[state.language].clearHistoryConfirm)) {
              state.history = [];
              saveState();
              loadHistory();
          }
      }

      // Show screen
      function showScreen(screen) {
          document.getElementById('counterScreen').classList.add('hidden');
          document.getElementById('historyScreen').classList.add('hidden');
          document.getElementById('settingsScreen').classList.add('hidden');

          document.querySelectorAll('.nav-btn').forEach(btn => {
              btn.classList.remove('text-emerald-600', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-900/30');
              btn.classList.add('text-gray-600', 'dark:text-gray-400');
          });

          if (screen === 'counter') {
              document.getElementById('counterScreen').classList.remove('hidden');
              document.querySelectorAll('.nav-btn')[0].classList.add('text-emerald-600', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-900/30');
              document.querySelectorAll('.nav-btn')[0].classList.remove('text-gray-600', 'dark:text-gray-400');
          } else if (screen === 'history') {
              document.getElementById('historyScreen').classList.remove('hidden');
              document.querySelectorAll('.nav-btn')[1].classList.add('text-emerald-600', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-900/30');
              document.querySelectorAll('.nav-btn')[1].classList.remove('text-gray-600', 'dark:text-gray-400');
              loadHistory();
          } else if (screen === 'settings') {
              document.getElementById('settingsScreen').classList.remove('hidden');
              document.querySelectorAll('.nav-btn')[2].classList.add('text-emerald-600', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-900/30');
              document.querySelectorAll('.nav-btn')[2].classList.remove('text-gray-600', 'dark:text-gray-400');
          }

          lucide.createIcons();
      }

      // Toggle UI update
      function updateToggleUI(toggleId) {
          const toggle = document.getElementById(toggleId);
          const switchElem = toggle.nextElementSibling.querySelector('div');

          if (toggle.checked) {
              toggle.nextElementSibling.classList.add('bg-emerald-600');
              toggle.nextElementSibling.classList.remove('bg-gray-200', 'dark:bg-gray-700');
              switchElem.style.transform = 'translateX(24px)';
          } else {
              toggle.nextElementSibling.classList.remove('bg-emerald-600');
              toggle.nextElementSibling.classList.add('bg-gray-200', 'dark:bg-gray-700');
              switchElem.style.transform = 'translateX(0)';
          }
      }

      // Settings toggles
      document.getElementById('soundToggle').addEventListener('change', function(e) {
          state.soundEnabled = e.target.checked;
          updateToggleUI('soundToggle');
          saveState();
      });

      document.getElementById('vibrationToggle').addEventListener('change', function(e) {
          state.vibrationEnabled = e.target.checked;
          updateToggleUI('vibrationToggle');
          saveState();
      });

      document.getElementById('bgSoundToggle').addEventListener('change', function(e) {
          state.bgSoundEnabled = e.target.checked;
          updateToggleUI('bgSoundToggle');
          saveState();
      });

      document.getElementById('darkModeToggle').addEventListener('change', function(e) {
          state.darkMode = e.target.checked;
          updateToggleUI('darkModeToggle');

          if (state.darkMode) {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark');
          }

          saveState();
      });

      document.getElementById('languageSelect').addEventListener('change', function(e) {
          state.language = e.target.value;
          updateLanguage();
          saveState();
      });

      // Update language
      function updateLanguage() {
          const t = translations[state.language];

          document.getElementById('navCounter').textContent = t.counter;
          document.getElementById('navHistory').textContent = t.history;
          document.getElementById('navSettings').textContent = t.settings;
          document.getElementById('resetBtn').textContent = t.reset;
          document.getElementById('saveBtn').textContent = t.save;
          document.getElementById('soundLabel').textContent = t.clickSound;
          document.getElementById('vibrationLabel').textContent = t.vibration;
          document.getElementById('bgSoundLabel').textContent = t.bgSound;
          document.getElementById('darkModeLabel').textContent = t.darkMode;

          // Update placeholders
          document.getElementById('sessionName').placeholder = state.language === 'ar'
              ? 'مثال: سبحان الله'
              : 'e.g., SubhanAllah';

          // RTL support
          if (state.language === 'ar') {
              document.body.setAttribute('dir', 'rtl');
          } else {
              document.body.removeAttribute('dir');
          }

          updateUI();
          loadHistory();
      }

      // PWA Installation
      let deferredPrompt;

      window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          deferredPrompt = e;
          document.getElementById('installBtn').classList.remove('hidden');
      });

      document.getElementById('installBtn').addEventListener('click', async () => {
          if (deferredPrompt) {
              deferredPrompt.prompt();
              const { outcome } = await deferredPrompt.userChoice;
              deferredPrompt = null;
              document.getElementById('installBtn').classList.add('hidden');
          }
      });

      // Register Service Worker
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('sw.js').then(registration => {
              console.log('Service Worker registered:', registration);
          }).catch(error => {
              console.log('Service Worker registration failed:', error);
          });
      }

      // Initialize app
      loadState();
      lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div>

</div>
<div className="h-screen flex flex-col max-w-md mr-auto ml-auto relative" id="app">

<header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-emerald-100 dark:border-emerald-900/30 sticky top-0 z-50">
<div className="flex items-center px-6 py-4 relative flex-col items-start">
<h1 className="dark:text-white text-4xl font-normal tracking-wide font-bricolage text-center">Digital Counter</h1>
<h2 className="dark:text-emerald-400 text-sm font-normal text-lime-700">Farrukh's Vision for Mindful Dhikr</h2>
<button className="hidden bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors absolute right-6" id="installBtn">
            Install button&gt;
          </button>
</div>
</header>

<main className="flex-1 overflow-hidden">

<div className="fade-in h-full overflow-y-auto" id="counterScreen">
<div className="p-6 space-y-6">

<div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
<label className="dark:text-gray-400 block text-sm font-medium text-gray-600 mb-2">
                Zikr Name
              </label>
<input className="dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 bg-gray-50 w-full border-gray-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="sessionName" placeholder="e.g., SubhanAllah" type="text"/>
</div>

<div className="dark:bg-gray-900 dark:border-emerald-900/30 bg-white border-emerald-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<label className="dark:text-gray-400 block text-sm font-medium text-gray-600 mb-3">
                Target
              </label>
<div className="grid grid-cols-4 gap-2">
<button className="target-btn dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:text-gray-300 transition-colors dark:border-gray-700 text-sm font-medium text-gray-700 bg-gray-50 border-gray-200 border rounded-xl pt-3 pb-3" onclick="setTarget(33)">
                  33
                </button>
<button className="target-btn dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:text-gray-300 transition-colors dark:border-gray-700 text-sm font-medium text-gray-700 bg-gray-50 border-gray-200 border rounded-xl pt-3 pb-3" onclick="setTarget(100)">
                  41
                </button>
<button className="target-btn dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:text-gray-300 transition-colors dark:border-gray-700 text-sm font-medium text-gray-700 bg-gray-50 border-gray-200 border rounded-xl pt-3 pb-3" onclick="setTarget(500)">
                  100
                </button>
<button className="target-btn bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium text-sm transition-colors border border-gray-200 dark:border-gray-700" onclick="setTarget(1000)">
                  1000
                </button>
</div>
</div>

<div className="relative">
<div className="bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-400 via-zinc-800 to-slate-400 border-emerald-500/20 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg">
<div className="text-center space-y-4">
<div className="text-sm font-medium text-white/80 tracking-wide" id="targetDisplay">Target: 33</div>
<div className="counter-tap cursor-pointer select-none" id="counterButton">
<div className="text-8xl font-bold text-white tracking-tight" id="countDisplay">33</div>
</div>
<div className="h-2 bg-white/20 rounded-full overflow-hidden">
<div className="transition-all duration-300 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-yellow-400 via-pink-500 to-yellow-400 h-full rounded-full shadow-sm" id="progressBar" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 rounded-xl font-medium transition-colors border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2" onclick="resetCounter()">
<svg className="lucide lucide-rotate-ccw" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
<span className="" id="resetBtn">Reset</span>
</button>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2" onclick="saveSession()">
<svg className="lucide lucide-save" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
<span id="saveBtn">Save</span>
</button>
</div>
</div>
</div>

<div className="hidden fade-in h-full overflow-y-auto" id="historyScreen">
<div className="p-6 space-y-4">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Session History
              </h2>
<button className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium" onclick="clearHistory()">
                Clear All
              </button>
</div>
<div className="space-y-3" id="historyList">
<div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
<div className="flex items-start justify-between">
<div className="flex-1">
<h3 className="font-semibold text-gray-900 dark:text-white mb-1">aba</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Oct 27, 2025, 08:39 PM</p>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">43</div>
<div className="text-xs text-gray-500 dark:text-gray-500">of 33</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
<div className="flex items-start justify-between">
<div className="flex-1">
<h3 className="font-semibold text-gray-900 dark:text-white mb-1">Unnamed Session</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Oct 27, 2025, 08:03 PM</p>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">43</div>
<div className="text-xs text-gray-500 dark:text-gray-500">of 33</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
<div className="flex items-start justify-between">
<div className="flex-1">
<h3 className="font-semibold text-gray-900 dark:text-white mb-1">Unnamed Session</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Oct 27, 2025, 08:03 PM</p>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">51</div>
<div className="text-xs text-gray-500 dark:text-gray-500">of 33</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in h-full overflow-y-auto" id="settingsScreen">
<div className="p-6 space-y-4">
<h2 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
              Settings
            </h2>
<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900/30 divide-y divide-gray-100 dark:divide-gray-800">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-volume-2 text-gray-600 dark:text-gray-400" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<span className="text-gray-900 dark:text-white font-medium" id="soundLabel">Click Sound</span>
</div>
<label className="toggle-label">
<input checked="" id="soundToggle" type="checkbox"/>
<div className="toggle-switch w-12 h-6 rounded-full relative bg-emerald-600">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300" style={{transform: 'translateX(24px)'}}></div>
</div>
</label>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-smartphone text-gray-600 dark:text-gray-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-gray-900 dark:text-white font-medium" id="vibrationLabel">Vibration</span>
</div>
<label className="toggle-label">
<input checked="" id="vibrationToggle" type="checkbox"/>
<div className="toggle-switch w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300" style={{transform: 'translateX(0px)'}}></div>
</div>
</label>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-music text-gray-600 dark:text-gray-400" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-gray-900 dark:text-white font-medium" id="bgSoundLabel">Background Sound</span>
</div>
<label className="toggle-label">
<input id="bgSoundToggle" type="checkbox"/>
<div className="toggle-switch w-12 h-6 rounded-full relative bg-emerald-600">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300" style={{transform: 'translateX(24px)'}}></div>
</div>
</label>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-moon text-gray-600 dark:text-gray-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<span className="text-gray-900 dark:text-white font-medium" id="darkModeLabel">Dark Mode</span>
</div>
<label className="toggle-label">
<input id="darkModeToggle" type="checkbox"/>
<div className="toggle-switch w-12 h-6 rounded-full relative bg-emerald-600">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300" style={{transform: 'translateX(24px)'}}></div>
</div>
</label>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-globe text-gray-600 dark:text-gray-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-gray-900 dark:text-white font-medium">
                    Language
                  </span>
</div>
<select className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" id="languageSelect">
<option value="en">English</option>
<option value="ar">العربية</option>
</select>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
<div className="text-center text-sm text-gray-600 dark:text-gray-400">
<p className="font-medium text-gray-900 dark:text-white mb-1">
                  Digital Tasbeeh v1.0
                </p>
<p>Track your dhikr with ease</p>
<p>Farrukh's Vision for Mindful Dhikr</p>
</div>
</div>
</div>
</div>
</main>

<nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-emerald-100 dark:border-emerald-900/30">
<div className="grid grid-cols-3 gap-1 pt-2 pr-2 pb-2 pl-2">
<button className="nav-btn flex flex-col items-center gap-1 py-3 rounded-xl text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 transition-colors" onclick="showScreen('counter')">
<svg className="lucide lucide-hand" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '22px', height: '22px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
<span className="text-xs font-medium" id="navCounter">Counter</span>
</button>
<button className="nav-btn flex flex-col dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 rounded-xl pt-3 pb-3 gap-1 items-center" onclick="showScreen('history')">
<svg className="lucide lucide-history" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '22px', height: '22px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<span className="text-xs font-medium" id="navHistory">History</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onclick="showScreen('settings')">
<svg className="lucide lucide-settings" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '22px', height: '22px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-medium" id="navSettings">Settings</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
