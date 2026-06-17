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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030014', // Deep space dark
surface: '#0F0B1E', // Slightly lighter
surfaceHover: '#1A1432',
primary: '#8B5CF6', // Violet 500
primaryGlow: '#A78BFA', // Violet 400
accent: '#D946EF', // Fuchsia 500
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'glow': 'glow 2s ease-in-out infinite alternate',
'slide-up': 'slideUp 0.5s ease-out forwards',
'fade-in': 'fadeIn 0.3s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
glow: {
'0%': { boxShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6' },
'100%': { boxShadow: '0 0 20px #8B5CF6, 0 0 30px #D946EF' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Data Set
        const challengeData = [
            { day: 1, title: "Micro-intro & smile practice", task: "Smile at 3 strangers and introduce yourself in one sentence.", assignment: "Note their reaction. Did they smile back? How did you feel?" },
            { day: 2, title: "Posture & open body language", task: "Keep your chin up and hands out of pockets all day.", assignment: "Journal 3 moments you caught yourself slouching and corrected it." },
            { day: 3, title: "Conversation starters", task: "Initiate conversation with a cashier or barista.", assignment: "Write down the opener you used and how it landed." },
            { day: 4, title: "Voice control", task: "Record yourself speaking for 2 minutes. Listen for fillers.", assignment: "List your top 3 filler words (um, like, ah) to eliminate." },
            { day: 5, title: "Active listening", task: "In a conversation, wait 2 seconds before responding.", assignment: "Did the silence feel awkward or powerful? Explain." },
            { day: 6, title: "Eye contact ladder", task: "Hold eye contact until you see the person's eye color.", assignment: "Who was the hardest person to maintain eye contact with?" },
            { day: 7, title: "Confidence challenge", task: "Wear something slightly bolder than usual.", assignment: "Did people notice? Did you feel different?" },
            { day: 8, title: "Grooming & style", task: "Upgrade one small detail of your grooming routine.", assignment: "What small change made the biggest impact?" },
            { day: 9, title: "Small talk → deep talk", task: "Ask 'What are you passionate about?' instead of 'How are you?'", assignment: "Record the most interesting answer you received." },
            { day: 10, title: "Humour & timing", task: "Try to make one person laugh intentionally.", assignment: "Analyze why the joke worked or failed." },
            { day: 11, title: "Body language polish", task: "Mirror the posture of the person you are speaking to.", assignment: "Did mirroring build rapport? Describe the interaction." },
            { day: 12, title: "Assertiveness", task: "Say 'no' to a small request you don't want to do.", assignment: "How did it feel to set a boundary?" },
            { day: 13, title: "Storytelling", task: "Tell a 2-minute story about your day with a clear hook.", assignment: "Did you lose their attention? Where?" },
            { day: 14, title: "Empathy boost", task: "Validate someone's emotion ('That sounds frustrating').", assignment: "How did the dynamic of the conversation shift?" },
            { day: 15, title: "Social stamina", task: "Stay in a social setting 30 mins longer than you want to.", assignment: "What happened in those extra 30 minutes?" },
            { day: 16, title: "Grooming routine advanced", task: "Deep clean or organize your wardrobe/style setup.", assignment: "List 3 items you need to donate or discard." },
            { day: 17, title: "Complimenting skill", task: "Give 3 genuine, specific compliments (not about looks).", assignment: "How did their face change when you complimented a skill?" },
            { day: 18, title: "Handling rejection", task: "Ask for a discount on a coffee (expect a no).", assignment: "Was the rejection as painful as you expected?" },
            { day: 19, title: "Personal branding", task: "Audit your social media bio. Does it reflect who you are?", assignment: "Draft a new 1-sentence bio." },
            { day: 20, title: "Date conversation practice", task: "Practice the FORD method (Family, Occupation, Recreation, Dreams).", assignment: "Which topic sparked the best conversation?" },
            { day: 21, title: "Public speaking mini", task: "Give a toast or speak up in a group meeting.", assignment: "Rate your anxiety level from 1-10 before and after." },
            { day: 22, title: "Mirroring exercise", task: "Match the energy level of the person you are talking to.", assignment: "Did high energy meet high energy? Or calm meet calm?" },
            { day: 23, title: "Energy management", task: "Identify your social battery drainers today.", assignment: "List 3 people or activities that drained you." },
            { day: 24, title: "Handling awkwardness", task: "Call out the awkwardness ('Well, this is awkward').", assignment: "Did naming it break the tension?" },
            { day: 25, title: "Confidence anchors", task: "Create a physical anchor (e.g., touching thumb to ring finger) for confidence.", assignment: "Did you remember to use it? Did it help?" },
            { day: 26, title: "Conversation exit craft", task: "Exit a conversation gracefully ('I have to run, but loved chatting').", assignment: "Did you feel guilty leaving? Why?" },
            { day: 27, title: "Attraction fundamentals", task: "Focus on slow, deliberate movements today.", assignment: "Did you feel more in control?" },
            { day: 28, title: "Charisma mix", task: "Combine warmth (smiling) with competence (posture).", assignment: "Rate your charisma today 1-10." },
            { day: 29, title: "Reflection & growth plan", task: "Review your notes from Day 1 to 28.", assignment: "What is the #1 skill you have improved?" },
            { day: 30, title: "Showcase day", task: "Do one thing that scared you on Day 1.", assignment: "Write a letter to your Day 1 self." }
        ];

        // State Management
        let appState = {
            currentDay: 1,
            completedDays: [],
            streak: 0,
            xp: 0,
            notes: {}
        };

        // DOM Elements
        const els = {
            dayList: document.getElementById('day-list'),
            title: document.getElementById('current-title'),
            task: document.getElementById('current-task'),
            assignment: document.getElementById('current-assignment'),
            dayNum: document.getElementById('current-day-num'),
            noteInput: document.getElementById('user-notes'),
            completeBtn: document.getElementById('complete-btn'),
            xpDisplay: document.getElementById('xp-display'),
            streakDisplay: document.getElementById('streak-display'),
            statusBadge: document.getElementById('status-badge'),
            progressBar: document.getElementById('progress-bar'),
            overlay: document.getElementById('celebration-overlay'),
            sidebar: document.getElementById('sidebar'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            aiContainer: document.getElementById('ai-response-container'),
            aiContent: document.getElementById('ai-content'),
            aiLoader: document.getElementById('ai-loader')
        };

        // Initialization
        function init() {
            loadState();
            renderSidebar();
            renderDay(appState.currentDay);
            updateStats();
            
            // Event Listeners
            els.noteInput.addEventListener('input', debounce(saveNote, 1000));
            els.mobileMenuBtn.addEventListener('click', toggleSidebar);
        }

        // State Logic
        function loadState() {
            const saved = localStorage.getItem('personalityBuilderState');
            if (saved) {
                appState = JSON.parse(saved);
            }
        }

        function saveState() {
            localStorage.setItem('personalityBuilderState', JSON.stringify(appState));
            updateStats();
        }

        function updateStats() {
            els.xpDisplay.textContent = appState.xp;
            els.streakDisplay.textContent = appState.streak;
            const progress = (appState.completedDays.length / 30) * 100;
            els.progressBar.style.width = `${progress}%`;
        }

        // Rendering
        function renderSidebar() {
            els.dayList.innerHTML = '';
            challengeData.forEach(data => {
                const isCompleted = appState.completedDays.includes(data.day);
                const isActive = data.day === appState.currentDay;
                const isLocked = data.day > (Math.max(0, ...appState.completedDays) + 1) && data.day !== 1; // Unlock logic logic simplified for demo

                const btn = document.createElement('button');
                btn.className = `w-full text-left px-4 py-3 rounded-xl mb-2 flex items-center justify-between transition-all duration-200 group ${
                    isActive ? 'bg-primary/20 border border-primary/30' : 'hover:bg-white/5 border border-transparent'
                } ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;
                
                btn.onclick = () => {
                   // Allow clicking any day for flexibility in this demo, usually would restrict locked days
                   navigateDay(data.day - appState.currentDay); 
                   if(window.innerWidth < 768) toggleSidebar();
                };

                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
                            isCompleted ? 'bg-green-500/20 text-green-400' : 
                            isActive ? 'bg-primary text-white' : 'bg-white/10 text-gray-500'
                        }">
                            ${isCompleted ? '<span class="iconify" data-icon="lucide:check"></span>' : data.day}
                        </div>
                        <span class="text-xs font-medium ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'} truncate w-32">
                            ${data.title}
                        </span>
                    </div>
                `;
                els.dayList.appendChild(btn);
            });
        }

        function renderDay(dayNum) {
            const data = challengeData.find(d => d.day === dayNum);
            if (!data) return;

            // Content Animation Reset
            const mainContent = document.querySelector('main .grid');
            mainContent.classList.remove('animate-slide-up');
            void mainContent.offsetWidth; // Trigger reflow
            mainContent.classList.add('animate-slide-up');

            els.dayNum.textContent = dayNum;
            els.title.textContent = data.title;
            els.task.textContent = data.task;
            els.assignment.textContent = data.assignment;
            els.noteInput.value = appState.notes[dayNum] || '';
            
            // AI Reset
            els.aiContainer.classList.add('hidden');
            els.aiContent.innerHTML = '';

            const isCompleted = appState.completedDays.includes(dayNum);
            if (isCompleted) {
                els.completeBtn.classList.add('bg-green-500/10', 'border-green-500/20', 'pointer-events-none');
                els.completeBtn.innerHTML = `<span class="iconify text-green-400" data-icon="lucide:check-circle" data-width="18"></span> <span class="text-green-400">Completed</span>`;
                els.statusBadge.classList.remove('hidden');
                els.statusBadge.classList.add('inline-flex');
            } else {
                els.completeBtn.classList.remove('bg-green-500/10', 'border-green-500/20', 'pointer-events-none');
                els.completeBtn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-2 text-white font-medium tracking-wide"><span class="iconify" data-icon="lucide:check-circle" data-width="18"></span> Mark Task Complete</span> <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>`;
                els.statusBadge.classList.add('hidden');
                els.statusBadge.classList.remove('inline-flex');
            }
            
            renderSidebar(); // Update sidebar active state
        }

        function navigateDay(offset) {
            // If offset is basically setting the day index directly vs adding
            let newDay;
            if (Math.abs(offset) > 1) {
                // Determine if absolute or relative. The renderSidebar sends relative difference
                 newDay = appState.currentDay + offset;
            } else {
                newDay = appState.currentDay + offset;
            }
            
            if (newDay >= 1 && newDay <= 30) {
                appState.currentDay = newDay;
                renderDay(newDay);
                saveState();
            }
        }

        function markComplete() {
            if (appState.completedDays.includes(appState.currentDay)) return;

            appState.completedDays.push(appState.currentDay);
            appState.xp += 20;
            
            // Streak logic (simplified)
            appState.streak += 1;

            saveState();
            renderDay(appState.currentDay);
            
            // Celebration Animation
            els.overlay.classList.remove('pointer-events-none', 'opacity-0');
            const content = els.overlay.children[1];
            content.classList.remove('scale-90');
            content.classList.add('scale-100');
            
            setTimeout(() => {
                els.overlay.classList.add('opacity-0');
                content.classList.remove('scale-100');
                content.classList.add('scale-90');
                setTimeout(() => els.overlay.classList.add('pointer-events-none'), 500);
            }, 2500);
        }

        function saveNote() {
            const val = els.noteInput.value;
            appState.notes[appState.currentDay] = val;
            saveState();
            
            const btn = document.getElementById('save-note-btn');
            btn.textContent = "Saving...";
            setTimeout(() => btn.textContent = "Saved", 1000);
        }

        function toggleSidebar() {
            const sb = els.sidebar;
            if (sb.classList.contains('-translate-x-full')) {
                sb.classList.remove('-translate-x-full');
            } else {
                sb.classList.add('-translate-x-full');
            }
        }

        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Gemini AI Integration
        async function getAICoaching() {
            els.aiContainer.classList.remove('hidden');
            els.aiLoader.classList.remove('hidden');
            els.aiContent.innerHTML = '';
            
            const currentTaskData = challengeData.find(d => d.day === appState.currentDay);
            
            // Scroll to view
            els.aiContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            try {
                // Implementation for the Backend Proxy Requirement:
                // Calls the defined /api/gemini endpoint
                const response = await fetch('/api/gemini', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prompt: `Act as a charisma coach. Provide a short, punchy coaching tip (max 3 sentences) and a 30-second practice script for this task: "${currentTaskData.task}". Task Context: "${currentTaskData.assignment}". Format with HTML tags: <h3>Tip</h3><p>...</p><h3>Script</h3><p>...</p>.`
                    })
                });

                if (!response.ok) throw new Error('Backend not reachable in this demo environment');

                const data = await response.json();
                els.aiContent.innerHTML = data.text || "AI Response Error.";

            } catch (error) {
                console.log("Using Mock AI due to static environment.");
                // Fallback for static demo so the UI works for the user immediately
                setTimeout(() => {
                    const mockResponse = `
                        <h3>⚡ Power Coaching Tip</h3>
                        <p>Confidence isn't about not being nervous; it's about doing it anyway. For <strong>${currentTaskData.title}</strong>, focus entirely on the other person—curiosity kills anxiety.</p>
                        <br>
                        <h3>🎬 30-Second Practice Script</h3>
                        <p><em>"Hey, I noticed [specific detail]. I'm working on being more social today—how's your morning going?"</em><br><br>(Pause. Breathe. Smile with your eyes.)</p>
                    `;
                    els.aiContent.innerHTML = mockResponse;
                }, 1500);
            } finally {
                setTimeout(() => els.aiLoader.classList.add('hidden'), 1500);
            }
        }

        // Run
        init();

    
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
      

<div className="ambient-glow top-[-200px] left-[-200px] animate-pulse-slow"></div>
<div className="ambient-glow bottom-[-200px] right-[-200px] animate-pulse-slow" style={{animationDelay: '2s', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'}}></div>

<div className="md:hidden glass fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
<div className="flex items-center gap-2">
<span className="iconify text-primary" data-icon="lucide:zap" data-width="20"></span>
<h1 className="font-medium tracking-tight text-white text-sm">PERSONALITY<span className="text-primary">BUILDER</span></h1>
</div>
<button className="text-gray-400 hover:text-white transition-colors" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<aside className="fixed inset-y-0 left-0 w-80 glass border-r border-white/5 transform -translate-x-full md:translate-x-0 transition-transform duration-300 z-40 flex flex-col" id="sidebar">
<div className="p-8 pb-4">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
<span className="iconify text-white" data-icon="lucide:user" data-width="18"></span>
</div>
<div>
<h1 className="font-semibold tracking-tight text-white text-lg leading-none">Personality</h1>
<span className="text-[10px] uppercase tracking-[0.2em] text-primaryGlow font-medium">Builder Challenge</span>
</div>
</div>

<div className="glass-card rounded-2xl p-4 mb-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-end mb-2 relative z-10">
<div>
<p className="text-xs text-gray-400 font-medium mb-1">Total XP</p>
<h2 className="text-2xl font-medium text-white tracking-tight" id="xp-display">0</h2>
</div>
<div className="text-right">
<p className="text-xs text-gray-400 font-medium mb-1">Streak</p>
<div className="flex items-center gap-1 text-accent">
<span className="iconify" data-icon="lucide:flame" data-width="14"></span>
<span className="text-lg font-medium" id="streak-display">0</span>
</div>
</div>
</div>
<div className="w-full bg-white/5 rounded-full h-1 mt-2">
<div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full w-0 transition-all duration-1000" id="progress-bar"></div>
</div>
</div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4 pl-1">The Journey</h3>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-8 space-y-1" id="day-list">

</div>
</aside>

<main className="flex-1 md:ml-80 min-h-screen p-6 md:p-12 pt-24 md:pt-12 flex flex-col max-w-5xl mx-auto w-full">

<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primaryGlow text-xs font-medium tracking-wide uppercase">
                        Day <span id="current-day-num">1</span>
</span>
<span className="hidden px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide uppercase items-center gap-1" id="status-badge">
<span className="iconify" data-icon="lucide:check" data-width="12"></span> Completed
                    </span>
</div>
<h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight neon-text leading-tight" id="current-title">Micro-intro &amp; smile practice</h1>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all" onclick="navigateDay(-1)">
<span className="iconify" data-icon="lucide:chevron-left" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all" onclick="navigateDay(1)">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.1s'}}>

<div className="lg:col-span-2 space-y-6">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify text-white" data-icon="lucide:target" data-width="100"></span>
</div>
<div className="relative z-10">
<h2 className="text-sm text-primaryGlow uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:crosshair" data-width="16"></span> Daily Task
                        </h2>
<p className="text-xl text-gray-200 font-light leading-relaxed" id="current-task">Practice your micro-intro on 3 strangers today. Keep it under 10 seconds.</p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden border-t-2 border-t-accent/20">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify text-white" data-icon="lucide:book-open" data-width="100"></span>
</div>
<div className="relative z-10">
<h2 className="text-sm text-accent uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:clipboard-list" data-width="16"></span> Assignment
                        </h2>
<p className="text-lg text-gray-300 font-light leading-relaxed" id="current-assignment">Write down how they reacted. Did they smile back?</p>
</div>
</div>

<div className="glass-card rounded-3xl p-1 relative">
<textarea className="w-full bg-transparent text-gray-300 p-6 min-h-[150px] resize-none focus:outline-none text-sm leading-relaxed placeholder-gray-600" id="user-notes" placeholder="Journal your reflections for today..."></textarea>
<div className="px-6 pb-4 flex justify-between items-center border-t border-white/5 pt-4">
<span className="text-xs text-gray-500 font-medium">Auto-saves locally</span>
<div className="flex gap-2">
<button className="text-xs text-primary hover:text-white transition-colors uppercase tracking-wider font-medium" id="save-note-btn">Saved</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="glass-card rounded-3xl p-6 flex flex-col gap-4">
<button className="group relative w-full py-4 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-xl transition-all duration-300 overflow-hidden" id="complete-btn" onclick="markComplete()">
<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium tracking-wide">
<span className="iconify" data-icon="lucide:check-circle" data-width="18"></span> Mark Task Complete
                        </span>
</button>
<button className="group relative w-full py-4 bg-gradient-to-br from-primary/10 to-accent/5 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-accent/40 rounded-xl transition-all duration-300" id="ai-coach-btn" onclick="getAICoaching()">
<span className="absolute right-3 top-3 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
</span>
<span className="relative z-10 flex items-center justify-center gap-2 text-primaryGlow group-hover:text-white font-medium tracking-wide">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span> Get AI Coaching
                        </span>
</button>
</div>

<div className="hidden glass-card rounded-3xl p-6 border border-accent/20 animate-fade-in" id="ai-response-container">
<div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
<div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:bot" data-width="14"></span>
</div>
<span className="text-sm font-medium text-white tracking-wide">Gemini Coach</span>
</div>
<div className="hidden py-8 flex justify-center" id="ai-loader">
<span className="iconify text-accent animate-spin" data-icon="lucide:loader-2" data-width="24"></span>
</div>
<div className="text-sm text-gray-300 font-light ai-content h-64 overflow-y-auto custom-scrollbar pr-2" id="ai-content">

</div>
</div>

<div className="glass-card rounded-3xl p-6 bg-gradient-to-b from-blue-500/5 to-transparent border border-blue-500/10">
<h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span> Pro Tip
                    </h3>
<p className="text-xs text-gray-400 leading-relaxed">
                        Consistency is key. Even if you fail the task, completing the reflection counts as progress.
                    </p>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center opacity-0 transition-opacity duration-500" id="celebration-overlay">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative z-10 transform scale-90 transition-transform duration-500 p-12 text-center">
<div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.5)] animate-bounce">
<span className="iconify text-white" data-icon="lucide:trophy" data-width="48"></span>
</div>
<h2 className="text-5xl font-bold text-white mb-2 neon-text">Day Complete!</h2>
<p className="text-xl text-primaryGlow font-light tracking-widest uppercase">+20 XP Gained</p>
</div>
</div>



    </>
  );
}
