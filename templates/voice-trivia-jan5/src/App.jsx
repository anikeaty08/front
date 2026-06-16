import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const dashboard = document.getElementById('dashboard-view');
        const lobby = document.getElementById('lobby-view');
        const game = document.getElementById('game-view');
        const permissionOverlay = document.getElementById('permission-overlay');
        const liveIndicator = document.getElementById('live-indicator');
        const micBtn = document.getElementById('mic-btn');
        const questionCard = document.getElementById('question-card');
        const cardGlow = document.getElementById('card-glow');
        const feedbackToast = document.getElementById('feedback-toast');
        const toastBg = document.getElementById('toast-bg');
        const toastIconBg = document.getElementById('toast-icon-bg');
        const toastIcon = document.getElementById('toast-icon');
        const toastMessage = document.getElementById('toast-message');
        const questionText = document.getElementById('question-text');
        const questionContainer = document.getElementById('question-container');
        const timerEl = document.getElementById('timer');
        const counterEl = document.getElementById('question-counter');
        const categoryEl = document.getElementById('game-category');
        const questionsRemainingEl = document.getElementById('questions-remaining');
        const gameProgressBar = document.getElementById('game-progress-bar');
        
        // Views
        const multiplayerView = document.getElementById('multiplayer-view');
        const soloStatsView = document.getElementById('solo-stats-view');
        const soloTotalScoreEl = document.getElementById('solo-total-score');
        const soloCorrectCountEl = document.getElementById('solo-correct-count');
        const soloWrongCountEl = document.getElementById('solo-wrong-count');
        
        let audioCtx;
        let isOnline = false;
        let isListening = true;
        let timerInterval;
        let currentQIndex = 0;
        let isTransitioning = false;
        
        // Game State
        const WINNING_SCORE = 2000;
        const POINTS_PER_Q = 250;
        const TOTAL_QUESTIONS = 10;
        let players = [
            { id: 0, name: 'You', score: 0 },
            { id: 1, name: 'Sarah', score: 0 },
            { id: 2, name: 'Mike', score: 0 },
            { id: 3, name: 'Alex', score: 0 }
        ];

        let soloStats = {
            correct: 0,
            wrong: 0,
            totalPoints: 0
        };

        // Sample Data
        const questions = [
            { t: "What is the primary gas found in the Earth's atmosphere?", c: "Science" },
            { t: "Which Renaissance artist painted the Mona Lisa?", c: "Art" },
            { t: "What is the capital city of Japan?", c: "Geography" },
            { t: "Who wrote 'Romeo and Juliet'?", c: "Literature" },
            { t: "What is the chemical symbol for Gold?", c: "Chemistry" },
            { t: "In what year did World War II end?", c: "History" },
            { t: "What is the largest mammal in the world?", c: "Biology" },
            { t: "How many continents are there on Earth?", c: "Geography" }
        ];

        function transitionToGame(mode) {
            isOnline = (mode === 'online');
            if (!audioCtx) {
                permissionOverlay.classList.remove('hidden');
                return;
            }
            launchFlow();
        }

        function startAudio() {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            permissionOverlay.classList.add('hidden');
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            launchFlow();
        }

        function launchFlow() {
            dashboard.classList.add('hidden-section');
            // Reset scores
            players.forEach(p => p.score = 0);
            
            // Reset Solo Stats
            soloStats = { correct: 0, wrong: 0, totalPoints: 0 };
            updateSoloStatsUI();

            updateScoreUI();
            
            if(isOnline) {
                lobby.classList.remove('hidden-section');
                setTimeout(() => {
                    lobby.classList.add('hidden-section');
                    startGame();
                }, 2000);
            } else {
                startGame();
            }
        }

        function startGame() {
            game.classList.remove('hidden-section');
            
            if(isOnline) {
                multiplayerView.classList.remove('hidden');
                soloStatsView.classList.add('hidden');
                liveIndicator.classList.remove('hidden');
                liveIndicator.classList.add('flex');
            } else {
                multiplayerView.classList.add('hidden');
                soloStatsView.classList.remove('hidden');
                liveIndicator.classList.add('hidden');
                liveIndicator.classList.remove('flex');
            }
            
            currentQIndex = 0;
            loadQuestion(0);
            setMicState(true);
        }

        function goToDashboard() {
            game.classList.add('hidden-section');
            lobby.classList.add('hidden-section');
            permissionOverlay.classList.add('hidden');
            dashboard.classList.remove('hidden-section');
            window.speechSynthesis.cancel();
            setMicState(false);
            clearInterval(timerInterval);
            if (window.simInterval) clearInterval(window.simInterval);
            hideToast(); // Ensure toast is hidden when leaving
        }

        // ==========================================
        // SCORING & RANKING
        // ==========================================
        function updateScoreUI(fastestPlayerId = -1) {
            // Multiplayer Logic
            const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
            players.forEach(p => {
                const rankIndex = sortedPlayers.findIndex(sp => sp.id === p.id);
                p.rank = rankIndex + 1;
            });
            const maxScore = Math.max(...players.map(p => p.score));

            players.forEach(p => {
                const scoreEl = document.getElementById(`score-${p.id}`);
                if(scoreEl) scoreEl.innerText = p.score.toLocaleString();
                
                const rankEl = document.getElementById(`rank-${p.id}`);
                const avatar = document.getElementById(`player-${p.id}`);
                
                if (rankEl && avatar) {
                    rankEl.className = "absolute -top-3 z-20 px-1.5 py-0.5 rounded text-[10px] font-bold border shadow-lg transition-all duration-300";
                    if (p.rank === 1) {
                        rankEl.classList.add('rank-1');
                        rankEl.innerText = "1st";
                        if(p.score > 0) avatar.style.borderColor = '#F59E0B'; 
                    } else if (p.rank === 2) {
                        rankEl.classList.add('rank-2');
                        rankEl.innerText = "2nd";
                        avatar.style.borderColor = ''; 
                    } else if (p.rank === 3) {
                        rankEl.classList.add('rank-3');
                        rankEl.innerText = "3rd";
                        avatar.style.borderColor = ''; 
                    } else {
                        rankEl.classList.add('rank-4');
                        rankEl.innerText = `${p.rank}th`;
                        avatar.style.borderColor = ''; 
                    }
                }

                const fastBadge = document.getElementById(`fastest-${p.id}`);
                if (fastBadge) {
                    if (p.id === fastestPlayerId) {
                        fastBadge.classList.remove('hidden');
                    } else {
                        fastBadge.classList.add('hidden');
                    }
                }
            });

            // Update Multiplayer Bar
            const highestPct = Math.min(100, (maxScore / WINNING_SCORE) * 100);
            gameProgressBar.style.width = `${highestPct}%`;
        }
        
        function updateSoloStatsUI() {
            soloTotalScoreEl.innerText = soloStats.totalPoints.toLocaleString();
            soloCorrectCountEl.innerText = soloStats.correct;
            soloWrongCountEl.innerText = soloStats.wrong;
        }

        function awardPoints(playerId, isFastest = false) {
            const points = POINTS_PER_Q;
            players[playerId].score += points;
            
            if (playerId === 0 && !isOnline) {
                soloStats.totalPoints += points;
                updateSoloStatsUI();
            } else {
                updateScoreUI(isFastest ? playerId : -1);
            }
            
            // Visual Float Animation for Multiplayer view (Player 0)
            if(isOnline && playerId === 0) {
                 const avatarContainer = document.getElementById(`p-container-${playerId}`);
                 if(avatarContainer) {
                    const floatEl = document.createElement('div');
                    floatEl.className = 'float-points';
                    floatEl.innerText = `+${points}`;
                    avatarContainer.appendChild(floatEl);
                    setTimeout(() => floatEl.remove(), 1500);
                 }
            } else if (!isOnline && playerId === 0) {
                // Float animation for score card
                const container = soloTotalScoreEl.parentElement;
                const floatEl = document.createElement('div');
                floatEl.className = 'float-points';
                floatEl.style.top = '10px';
                floatEl.innerText = `+${points}`;
                container.appendChild(floatEl);
                setTimeout(() => floatEl.remove(), 1500);
            }
        }

        // ==========================================
        // QUESTION LOGIC
        // ==========================================
        function loadQuestion(index) {
            isTransitioning = false;
            document.querySelectorAll('[id^="fastest-"]').forEach(el => el.classList.add('hidden'));

            const q = questions[index % questions.length];
            
            questionContainer.classList.remove('fade-out');
            questionContainer.classList.add('fade-in');
            
            questionText.innerText = q.t;
            categoryEl.innerText = q.c;
            counterEl.innerText = `Question ${index + 1}`;
            
            const left = TOTAL_QUESTIONS - index;
            questionsRemainingEl.innerText = `${left} Qs Left`;
            
            resetTimer();
            speakQuestion();
        }

        function nextQuestion() {
            if(isTransitioning) return;
            isTransitioning = true;
            
            questionContainer.classList.remove('fade-in');
            questionContainer.classList.add('fade-out');
            
            setTimeout(() => {
                currentQIndex++;
                if (currentQIndex < TOTAL_QUESTIONS) {
                    loadQuestion(currentQIndex);
                } else {
                    goToDashboard();
                }
            }, 300);
        }

        function skipQuestion() {
             if(isTransitioning) return;
             clearInterval(timerInterval);
             
             showToast('neutral', 'Skipped Question', 'lucide:skip-forward');
             // FIX: Ensure toast disappears if user quickly skips
             setTimeout(() => hideToast(), 2000);
             
             nextQuestion();
        }

        function speakQuestion() {
            if('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const text = questionText.innerText;
                const ut = new SpeechSynthesisUtterance(text);
                ut.rate = 1.1;
                window.speechSynthesis.speak(ut);
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            let sec = 30;
            timerEl.innerText = `00:${sec}`;
            timerEl.classList.remove('text-red-400');
            
            timerInterval = setInterval(() => {
                sec--;
                timerEl.innerText = `00:${sec.toString().padStart(2, '0')}`;
                if(sec < 6) timerEl.classList.add('text-red-400');
                if(sec <= 0) {
                    clearInterval(timerInterval);
                    handleAnswer(null, false); // Time out counts as wrong/miss
                }
            }, 1000);
        }

        // ==========================================
        // AUDIO & FEEDBACK
        // ==========================================
        function playTone(freq, type, duration, volume = 0.1) {
            if(!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.value = freq;
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            gain.gain.setValueAtTime(volume, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
            osc.stop(audioCtx.currentTime + duration);
        }

        function playSuccessSound() {
            playTone(800, 'sine', 0.1, 0.2);
            setTimeout(() => playTone(1200, 'sine', 0.3, 0.2), 100);
        }
        
        function playPingSound() {
            playTone(600, 'sine', 0.1, 0.1);
        }

        function playErrorSound() {
            playTone(150, 'sawtooth', 0.3, 0.15);
            setTimeout(() => playTone(100, 'sawtooth', 0.3, 0.15), 100);
        }

        function handleAnswer(playerId, isCorrect) {
            clearInterval(timerInterval);

            if (isCorrect) {
                awardPoints(playerId, true); 

                if (playerId === 0) {
                    if (!isOnline) {
                        soloStats.correct++;
                        updateSoloStatsUI();
                    }
                    playSuccessSound();
                    showToast('success', 'Correct! (+250)', 'lucide:check');
                    cardGlow.className = "absolute -inset-0.5 bg-emerald-500 rounded-3xl opacity-60 blur-xl transition duration-300";
                    questionCard.classList.add('pop-animation');
                } else {
                    playPingSound();
                    const winnerName = players[playerId].name;
                    showToast('neutral', `${winnerName} was faster!`, 'lucide:zap');
                    cardGlow.className = "absolute -inset-0.5 bg-neutral-500 rounded-3xl opacity-40 blur-xl transition duration-300";
                }
            } else {
                if (playerId === 0 || playerId === null) {
                    if (!isOnline && playerId === 0) {
                        soloStats.wrong++;
                        updateSoloStatsUI();
                    }
                    playErrorSound();
                    showToast('error', 'Wrong Answer', 'lucide:x');
                    cardGlow.className = "absolute -inset-0.5 bg-red-500 rounded-3xl opacity-60 blur-xl transition duration-300";
                    questionCard.classList.add('shake-animation');
                }
            }

            setTimeout(() => {
                hideToast();
                cardGlow.className = "absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-lg transition duration-500";
                questionCard.classList.remove('pop-animation', 'shake-animation');
                nextQuestion();
            }, 2500);
        }

        function showToast(type, msg, icon) {
            feedbackToast.classList.remove('opacity-0', 'translate-y-4', 'scale-90');
            toastMessage.textContent = msg;
            toastIcon.setAttribute('data-icon', icon);

            if(type === 'success') {
                toastBg.className = "glass px-6 py-3 rounded-full border border-emerald-500/30 flex items-center gap-3 shadow-2xl bg-emerald-900/20";
                toastIconBg.className = "h-7 w-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center";
            } else if (type === 'error') {
                toastBg.className = "glass px-6 py-3 rounded-full border border-red-500/30 flex items-center gap-3 shadow-2xl bg-red-900/20";
                toastIconBg.className = "h-7 w-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center";
            } else {
                toastBg.className = "glass px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 shadow-2xl";
                toastIconBg.className = "h-7 w-7 rounded-full bg-neutral-700 text-white flex items-center justify-center";
            }
        }

        function hideToast() {
            feedbackToast.classList.add('opacity-0', 'translate-y-4', 'scale-90');
        }

        // ==========================================
        // SIMULATION
        // ==========================================
        window.simInterval = setInterval(() => {
            if(isListening && !game.classList.contains('hidden-section') && !isTransitioning) {
                const timerVal = parseInt(timerEl.innerText.split(':')[1]);
                
                if (timerVal < 27 && timerVal > 5) {
                    const chance = Math.random();
                    if (chance > 0.85) { 
                        if (isOnline && Math.random() > 0.4) {
                            const opponentId = Math.floor(Math.random() * 3) + 1;
                            handleAnswer(opponentId, true);
                        } else {
                            handleAnswer(0, true);
                        }
                    }
                }
            }
        }, 2000);

        function setMicState(active) {
            isListening = active;
            const bars = document.querySelectorAll('.wave-bar');
            const txt = document.getElementById('mic-text');
            const ping = micBtn.querySelector('.animate-ping');
            
            if (active) {
                bars.forEach(b => b.classList.remove('paused'));
                micBtn.classList.remove('bg-neutral-800', 'text-neutral-400');
                micBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]');
                if(ping) ping.style.display = 'block';
                txt.textContent = "Listening...";
            } else {
                bars.forEach(b => b.classList.add('paused'));
                micBtn.classList.remove('bg-indigo-600', 'text-white', 'shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]');
                micBtn.classList.add('bg-neutral-800', 'text-neutral-400');
                if(ping) ping.style.display = 'none';
                txt.textContent = "Tap to Speak";
            }
        }
        
        micBtn.addEventListener('click', () => {
            setMicState(!isListening);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[100px]"></div>
</div>

<header className="relative z-30 w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-neutral-950/80 backdrop-blur-md flex-shrink-0">
<button className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity" onclick="goToDashboard()">
<div className="h-9 w-9 bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
<span className="iconify text-white" data-icon="lucide:waves" data-width="18"></span>
</div>
<div className="flex flex-col items-start">
<h1 className="text-sm font-medium text-white leading-none tracking-tight">ECHO</h1>
<span className="text-xs text-neutral-500 tracking-wider scale-90 origin-left">VOICE</span>
</div>
</button>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
<span className="iconify" data-icon="lucide:flame" data-width="14"></span>
<span className="text-xs font-bold tabular-nums">12</span>
</div>
<div className="hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/5" id="live-indicator">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Live</span>
</div>
<div className="flex items-center gap-2 border-l border-white/5 pl-4">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1px] cursor-pointer">
<div className="h-full w-full rounded-full bg-neutral-900 flex items-center justify-center">
<span className="text-xs font-semibold text-white">JD</span>
</div>
</div>
</div>
</div>
</header>

<main className="relative z-20 flex-1 w-full overflow-hidden flex flex-col">

<section className="view-section flex-1 w-full overflow-y-auto no-scrollbar" id="dashboard-view">
<div className="w-full max-w-7xl mx-auto p-6 pb-32">
<div className="flex flex-col gap-1.5 mb-8 pt-2">
<h2 className="text-2xl font-medium text-white tracking-tight">Dashboard</h2>
<p className="text-sm text-neutral-500">Welcome back, John.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="w-full group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col text-left transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 active:scale-[0.98] cursor-pointer" onclick="transitionToGame('local')" role="button">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col items-start h-full justify-between">
<div className="h-11 w-11 bg-neutral-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-colors border border-white/5">
<span className="iconify" data-icon="lucide:mic-2" data-strokeWidth="1.5" data-width="22"></span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Solo Practice</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[95%]">Continuous rapid-fire trivia. Hone your voice precision.</p>
</div>
</div>
</div>

<div className="w-full group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-purple-500/40 rounded-2xl p-6 flex flex-col text-left transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 active:scale-[0.98] cursor-pointer" onclick="transitionToGame('online')" role="button">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-6 right-6 flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border border-neutral-900" src="https://i.pravatar.cc/100?u=1"/>
<img alt="" className="w-7 h-7 rounded-full border border-neutral-900" src="https://i.pravatar.cc/100?u=2"/>
<div className="w-7 h-7 rounded-full border border-neutral-900 bg-neutral-800 text-[10px] flex items-center justify-center text-white font-medium">+1k</div>
</div>
<div className="relative z-10 flex flex-col items-start h-full justify-between">
<div className="h-11 w-11 bg-neutral-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors border border-white/5">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="22"></span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Live Match</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[95%]">4-Player lobbies. Compete for the daily leaderboard.</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-white tracking-tight">Words that need work</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View all</button>
</div>
<div className="space-y-1">

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
<span className="text-xs font-bold">42%</span>
</div>
<div>
<p className="text-sm font-medium text-white">Phenomenon</p>
<p className="text-xs text-neutral-500">Science • 12 Mispronunciations</p>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
<span className="iconify text-white" data-icon="lucide:play" data-width="14"></span>
</div>
</div>

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20">
<span className="text-xs font-bold">58%</span>
</div>
<div>
<p className="text-sm font-medium text-white">Worcestershire</p>
<p className="text-xs text-neutral-500">Geography • 8 Mispronunciations</p>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
<span className="iconify text-white" data-icon="lucide:play" data-width="14"></span>
</div>
</div>

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20">
<span className="text-xs font-bold">65%</span>
</div>
<div>
<p className="text-sm font-medium text-white">Colloquialism</p>
<p className="text-xs text-neutral-500">Literature • 5 Mispronunciations</p>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
<span className="iconify text-white" data-icon="lucide:play" data-width="14"></span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5">
<span className="iconify h-24 w-24" data-icon="lucide:flame"></span>
</div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-neutral-400 mb-1">Current Streak</h3>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-3xl font-semibold text-white tracking-tight">12 Days</span>
<span className="text-xs text-emerald-500 font-medium">+2 today</span>
</div>

<div className="flex justify-between items-center gap-1">
<div className="flex flex-col items-center gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]">M</div>
<div className="h-1 w-1 rounded-full bg-indigo-500"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]">T</div>
<div className="h-1 w-1 rounded-full bg-indigo-500"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]">W</div>
<div className="h-1 w-1 rounded-full bg-indigo-500"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-8 w-8 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center text-[10px] font-medium border border-white/5">T</div>
<div className="h-1 w-1 rounded-full bg-neutral-800"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-8 w-8 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center text-[10px] font-medium border border-white/5">F</div>
<div className="h-1 w-1 rounded-full bg-neutral-800"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4">

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-5 flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:trophy" data-width="20"></span>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium mb-0.5">Best Category</p>
<h4 className="text-lg font-medium text-white tracking-tight">Science</h4>
<div className="flex items-center gap-2 mt-1">
<div className="h-1.5 w-16 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[92%]"></div>
</div>
<span className="text-[10px] text-neutral-400">92%</span>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-5 flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium mb-0.5">Needs Work</p>
<h4 className="text-lg font-medium text-white tracking-tight">History</h4>
<div className="flex items-center gap-2 mt-1">
<div className="h-1.5 w-16 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[45%]"></div>
</div>
<span className="text-[10px] text-neutral-400">45%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden-section flex-1 w-full flex flex-col items-center justify-center p-6 overflow-y-auto" id="lobby-view">
<div className="w-full max-w-md relative">
<div className="glass relative z-10 rounded-2xl border border-white/10 p-8 flex flex-col items-center text-center shadow-2xl">
<div className="relative mb-8">
<div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 animate-ping"></div>
<div className="relative h-20 w-20 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:radar" data-strokeWidth="1.5" data-width="36"></span>
</div>
</div>
<h2 className="text-2xl font-medium text-white mb-2 tracking-tight">Finding Opponents</h2>
<p className="text-sm text-neutral-500 mb-8">Connecting to room...</p>
<button className="mt-4 text-xs text-neutral-500 hover:text-white transition-colors" onclick="goToDashboard()">Cancel Search</button>
</div>
</div>
</section>

<section className="hidden-section flex-1 w-full overflow-y-auto no-scrollbar" id="game-view">
<div className="w-full h-full max-w-7xl mx-auto flex flex-col px-4 md:px-8 pb-8 pt-4">

<div className="w-full flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 group" onclick="goToDashboard()">
<div className="h-10 w-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center cursor-pointer group-hover:bg-neutral-800 text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</div>
<span className="hidden md:inline text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">End Session</span>
</button>
<div>
<span className="block text-xs uppercase tracking-widest font-bold text-indigo-400 mb-0.5" id="game-category">Science</span>
<h2 className="text-base font-medium text-white" id="question-counter">Question 1</h2>
</div>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/10">
<span className="iconify text-indigo-500" data-icon="lucide:timer" data-width="16"></span>
<span className="text-sm font-mono font-medium text-white" id="timer">00:30</span>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row gap-6">

<div className="flex-1 flex flex-col h-full min-h-[400px]">
<div className="relative group flex-1">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-lg transition duration-300" id="card-glow"></div>
<div className="relative w-full h-full bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col justify-between transition-all duration-300" id="question-card">
<div className="flex justify-between items-start">
<div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-400 uppercase tracking-wider font-medium">
                                        250 Points
                                    </div>
<button className="h-10 w-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" onclick="speakQuestion()">
<span className="iconify" data-icon="lucide:volume-2" data-width="18"></span>
</button>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-8">
<div className="transition-all duration-300 transform w-full" id="question-container">
<h1 className="text-2xl md:text-5xl font-medium tracking-tight text-white text-center leading-tight" id="question-text">
                                            Loading...
                                        </h1>
</div>
</div>

<div className="flex flex-col items-center gap-8 w-full">

<div className="h-12 flex items-center gap-1.5">
<div className="wave-bar w-1.5 bg-indigo-500 rounded-full h-[40%]"></div>
<div className="wave-bar w-1.5 bg-indigo-400 rounded-full h-[70%]"></div>
<div className="wave-bar w-1.5 bg-white rounded-full h-[100%]"></div>
<div className="wave-bar w-1.5 bg-purple-400 rounded-full h-[60%]"></div>
<div className="wave-bar w-1.5 bg-purple-500 rounded-full h-[40%]"></div>
</div>
<div className="w-full flex gap-3 max-w-lg">
<button className="flex-[3] py-4 rounded-xl bg-indigo-600 text-white font-semibold text-base shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all" id="mic-btn">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
<span className="iconify" data-icon="lucide:mic" data-width="20" id="mic-icon"></span>
</div>
<span id="mic-text">Listening...</span>
</button>

<button className="flex-1 py-4 rounded-xl bg-neutral-800 border border-white/5 hover:bg-neutral-700 text-neutral-300 font-medium text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-all" onclick="skipQuestion()" title="Skip Question">
<span className="iconify" data-icon="lucide:skip-forward" data-width="20"></span>
<span className="hidden sm:inline">Skip</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[400px] flex-shrink-0 transition-all" id="right-column-container">

<div className="h-full bg-neutral-900/40 border border-white/5 rounded-3xl p-6 flex flex-col hidden" id="multiplayer-view">

<div className="flex flex-col gap-4 mb-8">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                            Room 402
                                        </h3>
<span className="text-xs text-neutral-500 mt-0.5">Race to 2,000 pts</span>
</div>
<div className="text-right">
<span className="text-xs font-mono text-neutral-400" id="questions-remaining">8 Qs Left</span>
</div>
</div>

<div className="relative w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 w-0 transition-all duration-700 ease-out" id="game-progress-bar"></div>
</div>
</div>
<hr className="border-white/5 mb-8"/>

<div className="flex flex-1 flex-col justify-center">
<div className="w-full flex flex-row justify-between items-end px-2 gap-2">

<div className="relative flex flex-col items-center group transition-all duration-300 w-1/4" id="p-container-0">
<div className="absolute -top-3 z-20 px-1.5 py-0.5 rounded text-[10px] font-bold border rank-4 shadow-lg transition-all duration-300" id="rank-0">4th</div>
<div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-800 border-2 border-indigo-500 flex items-center justify-center overflow-visible mb-3 transition-all duration-300 shadow-xl" id="player-0">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-neutral-900 rounded-full overflow-hidden"></div>
<span className="relative text-xs font-bold text-white z-10">You</span>
<div className="hidden absolute -bottom-2 right-0 bg-yellow-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-lg border border-yellow-300 z-30 fastest-badge" id="fastest-0">FASTEST</div>
</div>
<div className="flex flex-col items-center gap-0.5">
<div className="bg-neutral-800 border border-white/10 px-2 py-0.5 rounded-md">
<span className="text-xs font-mono font-medium text-white" id="score-0">0</span>
</div>
</div>
</div>

<div className="relative flex flex-col items-center group transition-all duration-300 w-1/4" id="p-container-1">
<div className="absolute -top-3 z-20 px-1.5 py-0.5 rounded text-[10px] font-bold border rank-4 shadow-lg transition-all duration-300" id="rank-1">4th</div>
<div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-visible mb-3 transition-all duration-300" id="player-1">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-full group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=sarah"/>
<div className="hidden absolute -bottom-2 right-0 bg-yellow-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-lg border border-yellow-300 z-30 fastest-badge" id="fastest-1">FASTEST</div>
</div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[10px] text-neutral-500 font-medium">Sarah</span>
<div className="bg-neutral-800 border border-white/10 px-2 py-0.5 rounded-md">
<span className="text-xs font-mono font-medium text-white" id="score-1">0</span>
</div>
</div>
</div>

<div className="relative flex flex-col items-center group transition-all duration-300 w-1/4" id="p-container-2">
<div className="absolute -top-3 z-20 px-1.5 py-0.5 rounded text-[10px] font-bold border rank-4 shadow-lg transition-all duration-300" id="rank-2">4th</div>
<div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-visible mb-3 transition-all duration-300" id="player-2">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-full group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=mike"/>
<div className="hidden absolute -bottom-2 right-0 bg-yellow-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-lg border border-yellow-300 z-30 fastest-badge" id="fastest-2">FASTEST</div>
</div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[10px] text-neutral-500 font-medium">Mike</span>
<div className="bg-neutral-800 border border-white/10 px-2 py-0.5 rounded-md">
<span className="text-xs font-mono font-medium text-white" id="score-2">0</span>
</div>
</div>
</div>

<div className="relative flex flex-col items-center group transition-all duration-300 w-1/4" id="p-container-3">
<div className="absolute -top-3 z-20 px-1.5 py-0.5 rounded text-[10px] font-bold border rank-4 shadow-lg transition-all duration-300" id="rank-3">4th</div>
<div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-visible mb-3 transition-all duration-300" id="player-3">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-full group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=alex"/>
<div className="hidden absolute -bottom-2 right-0 bg-yellow-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-lg border border-yellow-300 z-30 fastest-badge" id="fastest-3">FASTEST</div>
</div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[10px] text-neutral-500 font-medium">Alex</span>
<div className="bg-neutral-800 border border-white/10 px-2 py-0.5 rounded-md">
<span className="text-xs font-mono font-medium text-white" id="score-3">0</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/5 text-center">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">Speaking answers allowed</p>
</div>
</div>

<div className="h-full bg-neutral-900/40 border border-white/5 rounded-3xl p-6 flex flex-col hidden" id="solo-stats-view">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">Current Session</h3>

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 text-center mb-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
<p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider mb-1 relative z-10">Total Score</p>
<span className="text-4xl font-bold text-white tracking-tight relative z-10 tabular-nums" id="solo-total-score">0</span>
</div>

<div className="grid grid-cols-2 gap-3 mb-auto">
<div className="bg-emerald-900/5 border border-emerald-500/10 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
<span className="text-[10px] text-emerald-500/80 font-semibold uppercase">Correct</span>
<div className="flex items-center gap-1.5 text-emerald-400">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
<span className="text-lg font-bold tabular-nums" id="solo-correct-count">0</span>
</div>
</div>
<div className="bg-red-900/5 border border-red-500/10 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
<span className="text-[10px] text-red-500/80 font-semibold uppercase">Missed</span>
<div className="flex items-center gap-1.5 text-red-400">
<span className="iconify" data-icon="lucide:x" data-width="14"></span>
<span className="text-lg font-bold tabular-nums" id="solo-wrong-count">0</span>
</div>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-medium text-neutral-400 hover:text-white transition-all flex items-center justify-center gap-2 mt-4" onclick="goToDashboard()">
<span className="iconify" data-icon="lucide:log-out" data-width="14"></span>
                                End Session
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="hidden absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6" id="permission-overlay">
<div className="bg-neutral-900 border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl">
<div className="h-20 w-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="iconify text-white" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="36"></span>
</div>
<h2 className="text-2xl font-semibold text-white mb-3">Enable Audio</h2>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">We need microphone access for voice answers.</p>
<button className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors text-base" onclick="startAudio()">
                Start Game
            </button>
<button className="mt-5 text-xs text-neutral-500 hover:text-white" onclick="goToDashboard()">Cancel</button>
</div>
</div>

<div className="absolute top-[15%] left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 opacity-0 translate-y-4 w-max scale-90" id="feedback-toast">
<div className="glass px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 shadow-2xl" id="toast-bg">
<div className="h-7 w-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center" id="toast-icon-bg">
<span className="iconify" data-icon="lucide:check" data-width="16" id="toast-icon"></span>
</div>
<span className="text-sm font-bold text-white tracking-wide" id="toast-message">Correct Answer!</span>
</div>
</div>


    </>
  );
}
