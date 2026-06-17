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



        // Initialize Lucide icons
        lucide.createIcons();

        // Timer state
        let timerInterval = null;
        let timeRemaining = 25 * 60; // in seconds
        let totalDuration = 25 * 60;
        let isRunning = false;

        // Audio context for bell chime
        let audioContext = null;

        // Quotes database
        const quotes = [
            { text: "The mind is everything. What you think you become.", author: "Buddha" },
            { text: "Quiet the mind and the soul will speak.", author: "Ma Jaya Sati Bhagavati" },
            { text: "In the midst of movement and chaos, keep stillness inside of you.", author: "Deepak Chopra" },
            { text: "The present moment is the only time over which we have dominion.", author: "Thích Nhất Hạnh" },
            { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
            { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
            { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
            { text: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.", author: "Joyce Meyer" },
            { text: "One moment can change a day, one day can change a life.", author: "Buddha" },
            { text: "Peace comes from within. Do not seek it without.", author: "Buddha" }
        ];

        // Sessions storage
        let sessions = JSON.parse(localStorage.getItem('incenseSessions')) || [];

        function setDuration(minutes) {
            if (isRunning) return;
            
            totalDuration = minutes * 60;
            timeRemaining = totalDuration;
            updateTimerDisplay();
            
            // Update button styles
            document.querySelectorAll('.duration-btn').forEach(btn => {
                btn.classList.remove('bg-stone-100', 'text-stone-900', 'border-stone-300');
                btn.classList.add('text-stone-600', 'border-stone-200');
            });
            event.target.classList.add('bg-stone-100', 'text-stone-900', 'border-stone-300');
            event.target.classList.remove('text-stone-600', 'border-stone-200');
        }

        function startTimer() {
            isRunning = true;
            document.getElementById('start-btn').classList.add('hidden');
            document.getElementById('pause-btn').classList.remove('hidden');
            document.getElementById('reset-btn').classList.remove('hidden');
            document.getElementById('duration-selector').style.opacity = '0.5';
            document.getElementById('duration-selector').style.pointerEvents = 'none';
            document.getElementById('session-label').textContent = 'Focusing...';
            
            // Show smoke and glow
            document.getElementById('smoke-container').style.opacity = '1';
            document.getElementById('glow').style.opacity = '0.8';
            document.getElementById('glow').classList.add('glow');
            
            timerInterval = setInterval(() => {
                timeRemaining--;
                updateTimerDisplay();
                updateIncenseStick();
                
                if (timeRemaining <= 0) {
                    completeSession();
                }
            }, 1000);
        }

        function pauseTimer() {
            isRunning = false;
            clearInterval(timerInterval);
            document.getElementById('start-btn').classList.remove('hidden');
            document.getElementById('start-btn').innerHTML = '<i data-lucide="play" style="width: 16px; height: 16px; stroke-width: 1.5;"></i>Resume';
            document.getElementById('pause-btn').classList.add('hidden');
            document.getElementById('session-label').textContent = 'Paused';
            document.getElementById('smoke-container').style.opacity = '0';
            document.getElementById('glow').style.opacity = '0';
            lucide.createIcons();
        }

        function resetTimer() {
            isRunning = false;
            clearInterval(timerInterval);
            timeRemaining = totalDuration;
            updateTimerDisplay();
            updateIncenseStick();
            
            document.getElementById('start-btn').classList.remove('hidden');
            document.getElementById('start-btn').innerHTML = '<i data-lucide="play" style="width: 16px; height: 16px; stroke-width: 1.5;"></i>Start Session';
            document.getElementById('pause-btn').classList.add('hidden');
            document.getElementById('reset-btn').classList.add('hidden');
            document.getElementById('duration-selector').style.opacity = '1';
            document.getElementById('duration-selector').style.pointerEvents = 'auto';
            document.getElementById('session-label').textContent = 'Ready to focus';
            document.getElementById('smoke-container').style.opacity = '0';
            document.getElementById('glow').style.opacity = '0';
            lucide.createIcons();
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            document.getElementById('timer-display').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function updateIncenseStick() {
            const percentage = (timeRemaining / totalDuration) * 100;
            document.getElementById('incense-stick').style.height = percentage + '%';
        }

        function completeSession() {
            clearInterval(timerInterval);
            isRunning = false;
            
            // Hide smoke and glow
            document.getElementById('smoke-container').style.opacity = '0';
            document.getElementById('glow').style.opacity = '0';
            
            // Play bell chime
            playBellChime();
            
            // Save session
            const session = {
                date: new Date().toISOString(),
                duration: totalDuration / 60,
                timestamp: Date.now()
            };
            sessions.push(session);
            localStorage.setItem('incenseSessions', JSON.stringify(sessions));
            
            // Show completion modal
            document.getElementById('completion-modal').classList.remove('hidden');
            lucide.createIcons();
            
            // Reset timer
            setTimeout(() => {
                resetTimer();
            }, 500);
        }

        function playBellChime() {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            const now = audioContext.currentTime;
            
            // Create a bell-like sound using oscillators
            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.1, now + i * 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 2);
                
                oscillator.start(now + i * 0.1);
                oscillator.stop(now + i * 0.1 + 2);
            });
        }

        function closeModal() {
            document.getElementById('completion-modal').classList.add('hidden');
        }

        function showTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Show selected tab
            document.getElementById(tabName + '-tab').classList.remove('hidden');
            
            // Update button styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-stone-900');
                btn.classList.add('text-stone-600');
            });
            event.target.classList.add('text-stone-900');
            event.target.classList.remove('text-stone-600');
            
            // Refresh content if needed
            if (tabName === 'sessions') {
                renderSessions();
            } else if (tabName === 'quotes') {
                renderQuotes();
            }
        }

        function renderSessions() {
            const ashPiles = document.getElementById('ash-piles');
            
            if (sessions.length === 0) {
                ashPiles.innerHTML = '<div class="col-span-full text-center text-stone-400 text-sm py-12">No sessions yet. Complete your first focus session to see it here.</div>';
            } else {
                ashPiles.innerHTML = sessions.map((session, i) => {
                    const height = Math.min(session.duration / 60 * 40 + 20, 60);
                    return `
                        <div class="flex flex-col items-center gap-2 group">
                            <div class="relative">
                                <div class="w-8 bg-gradient-to-t from-stone-400 via-stone-300 to-stone-200 rounded-t-full transition-transform group-hover:scale-110" 
                                     style="height: ${height}px;"></div>
                                <div class="w-10 h-1 bg-stone-500 rounded-full -mt-0.5"></div>
                            </div>
                            <div class="text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                ${session.duration}m
                            </div>
                        </div>
                    `;
                }).join('');
            }
            
            // Update stats
            document.getElementById('total-sessions').textContent = sessions.length;
            const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);
            document.getElementById('total-minutes').textContent = totalMinutes;
            
            // Calculate streak
            const today = new Date().setHours(0, 0, 0, 0);
            let streak = 0;
            let currentDate = today;
            
            while (sessions.some(s => {
                const sessionDate = new Date(s.date).setHours(0, 0, 0, 0);
                return sessionDate === currentDate;
            })) {
                streak++;
                currentDate -= 86400000; // subtract one day
            }
            
            document.getElementById('streak-count').textContent = streak;
        }

        function renderQuotes() {
            const quotesList = document.getElementById('quotes-list');
            quotesList.innerHTML = quotes.map(quote => `
                <div class="bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-300 transition-colors">
                    <p class="quote-font text-base text-stone-700 italic mb-3">"${quote.text}"</p>
                    <p class="text-xs text-stone-500">— ${quote.author}</p>
                </div>
            `).join('');
        }

        // Set random daily quote
        function setDailyQuote() {
            const quote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('daily-quote').textContent = `"${quote.text}"`;
        }

        // Initialize
        setDailyQuote();
        updateTimerDisplay();
        updateIncenseStick();
    
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
      

<header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-stone-900 font-semibold tracking-tight text-lg">香</div>
<h1 className="text-base font-medium tracking-tight">Incense Timer</h1>
</div>
<nav className="flex items-center gap-1">
<button className="tab-btn px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100 rounded-lg transition-colors" onclick="showTab('timer')">Timer</button>
<button className="tab-btn px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors" onclick="showTab('sessions')">Sessions</button>
<button className="tab-btn px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors" onclick="showTab('quotes')">Quotes</button>
</nav>
</div>
</header>

<main className="max-w-6xl mx-auto px-6 py-12">

<div className="tab-content" id="timer-tab">
<div className="max-w-2xl mx-auto">

<div className="mb-12 text-center">
<p className="quote-font text-lg text-stone-600 italic mb-2" id="daily-quote">"The mind is everything. What you think you become."</p>
<p className="text-xs text-stone-400 uppercase tracking-wide">Daily Reflection</p>
</div>

<div className="relative flex flex-col items-center mb-12">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-0 pointer-events-none transition-opacity duration-500" id="smoke-container">
<div className="smoke w-8 h-8 bg-gradient-to-t from-stone-300 to-transparent rounded-full"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none" id="glow">
<div className="w-3 h-3 bg-orange-400 rounded-full blur-sm"></div>
</div>

<div className="relative w-3 h-64 bg-stone-200 rounded-full overflow-hidden mb-4">

<div className="absolute bottom-0 w-full bg-stone-300 h-full"></div>

<div className="absolute top-0 w-full bg-gradient-to-b from-amber-800 via-amber-900 to-stone-800 transition-all" id="incense-stick" style={{height: '100%'}}></div>
</div>

<div className="w-24 h-1.5 bg-stone-800 rounded-full"></div>
<div className="w-32 h-8 bg-stone-900 rounded-b-full mt-1"></div>
</div>

<div className="text-center mb-8">
<div className="text-6xl font-light tracking-tight text-stone-900 mb-2" id="timer-display">25:00</div>
<div className="text-sm text-stone-500" id="session-label">Ready to focus</div>
</div>

<div className="flex items-center justify-center gap-3 mb-8" id="duration-selector">
<button className="duration-btn px-6 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg border border-stone-200 transition-all" onclick="setDuration(15)">15m</button>
<button className="duration-btn px-6 py-2 text-sm font-medium text-stone-900 bg-stone-100 rounded-lg border border-stone-300 transition-all" onclick="setDuration(25)">25m</button>
<button className="duration-btn px-6 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg border border-stone-200 transition-all" onclick="setDuration(45)">45m</button>
<button className="duration-btn px-6 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg border border-stone-200 transition-all" onclick="setDuration(60)">60m</button>
</div>

<div className="flex items-center justify-center gap-4">
<button className="px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2" id="start-btn" onclick="startTimer()">
<i data-lucide="play" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                        Start Session
                    </button>
<button className="hidden px-8 py-3 bg-white text-stone-900 text-sm font-medium rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors flex items-center gap-2" id="pause-btn" onclick="pauseTimer()">
<i data-lucide="pause" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                        Pause
                    </button>
<button className="hidden px-6 py-3 text-stone-600 text-sm font-medium rounded-lg hover:bg-stone-100 transition-colors" id="reset-btn" onclick="resetTimer()">
                        Reset
                    </button>
</div>
</div>
</div>

<div className="tab-content hidden" id="sessions-tab">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Past Sessions</h2>
<p className="text-sm text-stone-600">Your completed focus sessions visualized as ash piles</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-white rounded-xl border border-stone-200 p-6">
<div className="text-3xl font-semibold tracking-tight text-stone-900 mb-1" id="total-sessions">0</div>
<div className="text-sm text-stone-600">Total Sessions</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 p-6">
<div className="text-3xl font-semibold tracking-tight text-stone-900 mb-1" id="total-minutes">0</div>
<div className="text-sm text-stone-600">Minutes Focused</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 p-6">
<div className="text-3xl font-semibold tracking-tight text-stone-900 mb-1" id="streak-count">0</div>
<div className="text-sm text-stone-600">Day Streak</div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 p-8">
<div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-6 min-h-[200px]" id="ash-piles">

<div className="col-span-full text-center text-stone-400 text-sm py-12">
                        No sessions yet. Complete your first focus session to see it here.
                    </div>
</div>
</div>
</div>

<div className="tab-content hidden" id="quotes-tab">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Quote Archive</h2>
<p className="text-sm text-stone-600">Reflections for mindful work</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="quotes-list">

</div>
</div>
</main>

<div className="hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6" id="completion-modal">
<div className="bg-white rounded-2xl p-8 max-w-md w-full text-center fade-in">
<div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="text-stone-900" data-lucide="check" style={{width: '32px', height: '32px', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Session Complete</h3>
<p className="text-stone-600 mb-6">Your incense has burned completely. Time for a mindful break.</p>
<button className="px-6 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors w-full" onclick="closeModal()">
                Continue
            </button>
</div>
</div>


    </>
  );
}
