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
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#050505',
surface: '#0F0F0F',
surfaceHighlight: '#1A1A1A',
border: '#262626',
primary: '#E1E1E1',
secondary: '#A1A1A1',
accent: '#EDEDED',
accentDark: '#333333'
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- DATA & STATE ---
        const questions = [
            { q: "What is the time complexity of searching in a Hash Map in the worst case?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 1 },
            { q: "Which CSS property is used to change the stacking order of an element?", options: ["z-index", "order", "position", "display"], correct: 0 },
            { q: "In JavaScript, what is the output of '2' + 2?", options: ["4", "22", "NaN", "Error"], correct: 1 },
            { q: "What does the acronym API stand for?", options: ["Application Programming Interface", "Advanced Protocol Integration", "Automated Program Interaction", "Application Process Interface"], correct: 0 },
            { q: "Which of the following is NOT a NoSQL database?", options: ["MongoDB", "Cassandra", "PostgreSQL", "Redis"], correct: 2 },
            { q: "What is the primary function of the React 'useEffect' hook?", options: ["State management", "Routing", "Side effects", "Memoization"], correct: 2 },
            { q: "Which HTTP method is idempotent?", options: ["POST", "PUT", "PATCH", "CONNECT"], correct: 1 },
            { q: "In Python, which keyword is used to define a function?", options: ["func", "def", "function", "lambda"], correct: 1 },
            { q: "What is the purpose of Git's 'rebase' command?", options: ["Download code", "Merge branches linearly", "Create a backup", "Delete history"], correct: 1 },
            { q: "Which data structure follows LIFO?", options: ["Queue", "Tree", "Stack", "Graph"], correct: 2 },
            { q: "What does 'REM' unit refer to in CSS?", options: ["Root Element", "Relative Element", "Random Emulation", "Responsive Em"], correct: 0 },
            { q: "Which sorting algorithm is generally the fastest for large datasets?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"], correct: 3 },
            { q: "What does SQL stand for?", options: ["Structured Question Language", "Structured Query Language", "Simple Query Language", "System Query Language"], correct: 1 },
            { q: "In Networking, which layer does IP (Internet Protocol) belong to?", options: ["Application", "Transport", "Network", "Data Link"], correct: 2 },
            { q: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?", options: ["true", "false", "undefined", "NaN"], correct: 1 }
        ];

        // Mock Leaderboard Data
        const mockLeaderboard = [
            { name: "Syntax Snipers", score: 14, time: 245000 },
            { name: "Null Pointers", score: 13, time: 210000 },
            { name: "Div Overflow", score: 13, time: 260000 },
            { name: "Array Start 1", score: 11, time: 290000 },
        ];

        let currentState = {
            teamName: "",
            currentQuestionIndex: 0,
            answers: [], // Stores selected option index
            score: 0,
            startTime: null,
            endTime: null,
            timerInterval: null,
            elapsedTime: 0
        };

        // --- DOM ELEMENTS ---
        const views = {
            entry: document.getElementById('view-entry'),
            quiz: document.getElementById('view-quiz'),
            results: document.getElementById('view-results')
        };
        const elements = {
            navTeam: document.getElementById('nav-team-name'),
            navTimer: document.getElementById('nav-timer'),
            timerDisplay: document.getElementById('timer-display'),
            miniTimer: document.getElementById('mini-timer'),
            qCurrent: document.getElementById('q-current'),
            qTotal: document.getElementById('q-total'),
            qLeft: document.getElementById('questions-left'),
            qText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            nextBtn: document.getElementById('next-btn'),
            progressBar: document.getElementById('progress-bar'),
            resultTeam: document.getElementById('result-team-name'),
            finalScore: document.getElementById('final-score'),
            finalTime: document.getElementById('final-time'),
            leaderboardBody: document.getElementById('leaderboard-body')
        };

        // --- CORE FUNCTIONS ---

        function switchView(viewName) {
            Object.values(views).forEach(el => el.classList.add('hidden'));
            Object.values(views).forEach(el => el.classList.remove('flex'));
            
            const target = views[viewName];
            target.classList.remove('hidden');
            if(viewName !== 'quiz') target.classList.add('flex'); // Quiz is block/grid managed
            else target.classList.add('block');
        }

        function formatTime(ms) {
            const totalSeconds = Math.floor(ms / 1000);
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            const msPart = Math.floor((ms % 1000) / 10); // 2 digits
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${msPart.toString().padStart(2, '0')}`;
        }
        
        function formatTimeSimple(ms) {
            const totalSeconds = Math.floor(ms / 1000);
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        function startTimer() {
            currentState.startTime = Date.now();
            elements.navTimer.classList.remove('hidden');
            elements.navTimer.classList.add('flex');
            
            currentState.timerInterval = setInterval(() => {
                const now = Date.now();
                currentState.elapsedTime = now - currentState.startTime;
                const formatted = formatTime(currentState.elapsedTime);
                elements.timerDisplay.innerText = formatted;
                elements.miniTimer.innerText = formatTimeSimple(currentState.elapsedTime);
            }, 10);
        }

        function stopTimer() {
            clearInterval(currentState.timerInterval);
            currentState.endTime = Date.now();
        }

        function startQuiz() {
            const input = document.getElementById('team-input');
            if(!input.value.trim()) {
                input.classList.add('ring-2', 'ring-red-500/50');
                setTimeout(() => input.classList.remove('ring-2', 'ring-red-500/50'), 1000);
                return;
            }

            currentState.teamName = input.value.trim();
            elements.navTeam.innerText = currentState.teamName;
            elements.navTeam.classList.remove('hidden');

            // Setup Quiz
            switchView('quiz');
            startTimer();
            renderQuestion();

            // Prevent Refresh
            window.onbeforeunload = function() {
                return "Are you sure you want to leave? Your progress will be lost.";
            };
        }

        function renderQuestion() {
            const idx = currentState.currentQuestionIndex;
            const q = questions[idx];

            // Update Status
            elements.qCurrent.innerText = idx + 1;
            elements.qTotal.innerText = questions.length;
            elements.qLeft.innerText = questions.length - idx;
            elements.progressBar.style.width = `${((idx) / questions.length) * 100}%`;
            
            // Render Text
            elements.qText.innerHTML = q.q;
            
            // Render Options
            elements.optionsContainer.innerHTML = '';
            elements.nextBtn.disabled = true;

            q.options.forEach((opt, optIdx) => {
                const btn = document.createElement('button');
                btn.className = `group w-full text-left p-4 rounded-xl border border-border bg-background hover:bg-surfaceHighlight transition-all relative flex items-center gap-4`;
                btn.onclick = () => selectOption(optIdx, btn);
                
                // Custom Radio UI
                const radioCircle = `
                    <div class="w-5 h-5 rounded-full border border-neutral-600 flex items-center justify-center group-hover:border-neutral-400 transition-colors radio-ui">
                        <div class="w-2.5 h-2.5 rounded-full bg-white opacity-0 transform scale-50 transition-all radio-dot"></div>
                    </div>
                `;

                const label = `<span class="text-sm lg:text-base text-secondary group-hover:text-white transition-colors">${opt}</span>`;
                
                btn.innerHTML = radioCircle + label;
                elements.optionsContainer.appendChild(btn);
            });
        }

        function selectOption(optIdx, btnElement) {
            // Remove active style from all
            const allBtns = elements.optionsContainer.children;
            for(let btn of allBtns) {
                btn.classList.remove('bg-white/10', 'border-white/30', 'ring-1', 'ring-white/20');
                const dot = btn.querySelector('.radio-dot');
                const circle = btn.querySelector('.radio-ui');
                dot.classList.add('opacity-0', 'scale-50');
                circle.classList.remove('border-white', 'bg-white/20');
            }

            // Add active style to selected
            btnElement.classList.add('bg-white/10', 'border-white/30', 'ring-1', 'ring-white/20');
            const dot = btnElement.querySelector('.radio-dot');
            const circle = btnElement.querySelector('.radio-ui');
            dot.classList.remove('opacity-0', 'scale-50');
            circle.classList.add('border-white');

            // Save state
            currentState.answers[currentState.currentQuestionIndex] = optIdx;
            elements.nextBtn.disabled = false;
        }

        function nextQuestion() {
            // Check answer for scoring
            const idx = currentState.currentQuestionIndex;
            if (currentState.answers[idx] === questions[idx].correct) {
                currentState.score++;
            }

            if (currentState.currentQuestionIndex < questions.length - 1) {
                currentState.currentQuestionIndex++;
                renderQuestion();
            } else {
                finishQuiz();
            }
        }

        function finishQuiz() {
            stopTimer();
            window.onbeforeunload = null; // Allow navigation now
            
            elements.resultTeam.innerText = currentState.teamName;
            elements.finalScore.innerText = `${currentState.score} / ${questions.length}`;
            elements.finalTime.innerText = formatTimeSimple(currentState.elapsedTime);

            generateLeaderboard();
            switchView('results');
        }

        function generateLeaderboard() {
            // Add current team to mock data
            const currentEntry = {
                name: currentState.teamName,
                score: currentState.score,
                time: currentState.elapsedTime,
                isCurrent: true
            };
            
            const allData = [...mockLeaderboard, currentEntry];
            
            // Sort: High score first, then Low time
            allData.sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                return a.time - b.time;
            });

            // Render
            elements.leaderboardBody.innerHTML = '';
            allData.forEach((team, index) => {
                const tr = document.createElement('tr');
                const isCurrent = team.isCurrent ? 'bg-white/5' : 'hover:bg-white/5 transition-colors';
                tr.className = `${isCurrent} group border-b border-border/50 last:border-0`;
                
                tr.innerHTML = `
                    <td class="py-3 px-4 lg:px-6 text-secondary font-mono text-xs">#${index + 1}</td>
                    <td class="py-3 px-4 lg:px-6 text-white font-medium flex items-center gap-2">
                        ${team.name}
                        ${team.isCurrent ? '<span class="text-[10px] bg-white text-black px-1.5 rounded font-bold uppercase tracking-wider">You</span>' : ''}
                    </td>
                    <td class="py-3 px-4 lg:px-6 text-right text-secondary font-mono text-xs">${formatTimeSimple(team.time)}</td>
                    <td class="py-3 px-4 lg:px-6 text-right font-medium text-white">${team.score}</td>
                `;
                elements.leaderboardBody.appendChild(tr);
            });
        }

        // Initialize Keyboard Navigation (Enter for Next)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !elements.nextBtn.disabled && !views.quiz.classList.contains('hidden')) {
                nextQuestion();
            }
        });

    
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
      

<header className="h-16 border-b border-border bg-surface/50 backdrop-blur-md fixed w-full top-0 z-50 flex items-center justify-between px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center border border-white/5">
<span className="font-medium tracking-tighter text-sm">ER</span>
</div>
<span className="text-sm font-medium tracking-tight text-secondary">ELIMINATION ROUND</span>
</div>

<div className="hidden absolute left-1/2 transform -translate-x-1/2 items-center gap-2 bg-surfaceHighlight border border-border px-4 py-1.5 rounded-full shadow-lg" id="nav-timer">
<iconify-icon className="text-secondary" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="font-mono text-sm tracking-widest text-white font-medium" id="timer-display">00:00:00</span>
</div>

<div className="flex items-center gap-3">
<div className="hidden text-sm font-medium text-secondary" id="nav-team-name"></div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-secondary" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center pt-16 w-full relative" id="app-container">

<div className="w-full max-w-md px-4 animate-fade-in flex flex-col gap-6" id="view-entry">
<div className="text-center space-y-2">
<h1 className="text-3xl tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Participant Login</h1>
<p className="text-secondary text-sm">Enter your team credentials to begin the elimination round.</p>
</div>
<div className="bg-surface border border-border p-6 rounded-2xl shadow-2xl shadow-black/50 space-y-5 backdrop-blur-sm">
<div className="space-y-1.5">
<label className="text-xs font-medium text-secondary uppercase tracking-wider ml-1">Team Name</label>
<div className="relative group">
<input className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all placeholder-neutral-700" id="team-input" placeholder="e.g. Binary Bandits" type="text"/>
<div className="absolute right-3 top-3 text-neutral-600 group-focus-within:text-white transition-colors">
<iconify-icon icon="solar:keyboard-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="bg-surfaceHighlight/50 rounded-lg p-4 border border-border/50">
<div className="flex items-start gap-3">
<iconify-icon className="text-secondary mt-0.5" icon="solar:info-circle-linear" width="16"></iconify-icon>
<div className="space-y-1">
<p className="text-xs font-medium text-white">Round Rules</p>
<ul className="text-xs text-secondary space-y-1 list-disc list-inside">
<li>15 Multiple Choice Questions</li>
<li>Timer starts immediately</li>
<li>No tab switching allowed</li>
</ul>
</div>
</div>
</div>
<button className="w-full bg-white text-black hover:bg-neutral-200 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 group" onclick="startQuiz()">
                    Start Assessment
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="hidden w-full max-w-5xl px-6 lg:px-8 py-8 h-full flex-col justify-center" id="view-quiz">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">

<div className="lg:col-span-8 space-y-8 animate-slide-up">

<div className="w-full h-1 bg-surfaceHighlight rounded-full overflow-hidden">
<div className="h-full bg-white transition-all duration-500 ease-out w-[0%]" id="progress-bar"></div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3">
<span className="px-2 py-1 rounded bg-surface border border-border text-xs font-mono text-secondary">
                                Q<span id="q-current">1</span> / <span id="q-total">15</span>
</span>
<span className="text-xs text-neutral-600 font-medium tracking-wide uppercase">Logic &amp; Reasoning</span>
</div>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug text-white no-select" id="question-text">

</h2>

<div className="grid grid-cols-1 gap-3 pt-2" id="options-container">

</div>
</div>

<div className="flex items-center justify-between pt-6 border-t border-border/50">
<button className="text-secondary hover:text-white text-sm flex items-center gap-2 px-3 py-2 rounded transition-colors disabled:opacity-30" disabled="">

</button>
<button className="bg-white text-black hover:bg-neutral-200 px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="next-btn" onclick="nextQuestion()">
                            Next Question
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-4 pl-8 border-l border-border animate-fade-in delay-100">
<div className="sticky top-24 space-y-6">

<div className="bg-surface border border-border rounded-xl p-5 space-y-4">
<h3 className="text-sm font-medium text-white tracking-tight">Session Status</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-background rounded-lg p-3 border border-border/50">
<div className="text-xs text-secondary mb-1">Questions Left</div>
<div className="text-xl font-medium text-white" id="questions-left">15</div>
</div>
<div className="bg-background rounded-lg p-3 border border-border/50">
<div className="text-xs text-secondary mb-1">Time Elapsed</div>
<div className="font-mono text-xl font-medium text-white" id="mini-timer">00:00</div>
</div>
</div>
</div>

<div className="p-4 border border-dashed border-border rounded-xl">
<div className="flex gap-3">
<iconify-icon className="text-yellow-500/80 mt-0.5" icon="solar:lightbulb-minimalistic-linear" width="20"></iconify-icon>
<p className="text-xs text-secondary leading-relaxed">
                                    Accuracy is key, but speed is the tie-breaker. Select the best answer for each question. You cannot go back to previous questions.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-full max-w-4xl px-4 py-8 flex-col gap-8 animate-fade-in" id="view-results">

<div className="w-full bg-gradient-to-b from-surfaceHighlight to-surface border border-border rounded-2xl p-8 lg:p-10 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center shadow-xl shadow-white/10 mb-2">
<iconify-icon icon="solar:cup-star-linear" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">Round Completed</h2>
<p className="text-secondary text-sm">Great job, <span className="text-white font-medium" id="result-team-name">Team</span>. Here is your performance.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
<div className="bg-background border border-border p-4 rounded-xl flex flex-col items-center">
<span className="text-xs text-secondary uppercase tracking-wider mb-1">Final Score</span>
<span className="text-3xl font-semibold text-white tracking-tight" id="final-score">0</span>
</div>
<div className="bg-background border border-border p-4 rounded-xl flex flex-col items-center">
<span className="text-xs text-secondary uppercase tracking-wider mb-1">Time Taken</span>
<span className="text-3xl font-mono font-medium text-white tracking-tight" id="final-time">00:00</span>
</div>
<div className="bg-background border border-border p-4 rounded-xl flex flex-col items-center col-span-2 lg:col-span-1">
<span className="text-xs text-secondary uppercase tracking-wider mb-1">Status</span>
<span className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 mt-1">Submitted</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="text-lg font-medium text-white tracking-tight">Live Leaderboard</h3>
<div className="flex items-center gap-2 text-xs text-secondary">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Updates Real-time
                    </div>
</div>
<div className="bg-surface border border-border rounded-xl overflow-hidden">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-border bg-surfaceHighlight/50">
<th className="py-3 px-4 lg:px-6 font-medium text-secondary w-16">Rank</th>
<th className="py-3 px-4 lg:px-6 font-medium text-secondary">Team</th>
<th className="py-3 px-4 lg:px-6 font-medium text-secondary text-right">Time</th>
<th className="py-3 px-4 lg:px-6 font-medium text-secondary text-right">Score</th>
</tr>
</thead>
<tbody className="divide-y divide-border/50" id="leaderboard-body">

</tbody>
</table>
</div>
</div>
</div>
</main>



    </>
  );
}
