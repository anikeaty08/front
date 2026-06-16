import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Game Config ---
        const NOTIFICATION_TYPES = [
            { app: 'Messages', icon: 'solar:chat-round-dots-linear', color: 'text-green-500', bg: 'bg-green-500/10', senders: ['Mom', 'Alex', 'Sarah', 'Boss', 'Unknown'], msgs: ['Call me asap!', 'Did you see this?', 'Can we talk?', 'Meeting in 5 min', 'sent an image'] },
            { app: 'Mail', icon: 'solar:letter-linear', color: 'text-blue-500', bg: 'bg-blue-500/10', senders: ['Newsletter', 'HR Dept', 'Support', 'LinkedIn', 'Jira'], msgs: ['Update on your ticket', 'Invitation to connect', 'Action Required', 'Weekly Digest', 'New task assigned'] },
            { app: 'Calendar', icon: 'solar:calendar-linear', color: 'text-red-500', bg: 'bg-red-500/10', senders: ['Calendar', 'Reminder'], msgs: ['Standup in 10m', 'Lunch with Team', 'Doctor Appointment', 'Submit Report', 'Focus Time ending'] },
            { app: 'Wallet', icon: 'solar:wallet-money-linear', color: 'text-orange-500', bg: 'bg-orange-500/10', senders: ['Bank', 'CryptoApp'], msgs: ['Payment Received', 'Transaction Alert', 'Subscription Renewed', 'Market is down', 'Confirm Purchase'] },
            { app: 'System', icon: 'solar:settings-linear', color: 'text-zinc-400', bg: 'bg-zinc-500/10', senders: ['System', 'Security'], msgs: ['Update Available', 'Storage Full', 'Backup Failed', 'New Device Detected', 'Battery Low'] },
            { app: 'Social', icon: 'solar:heart-linear', color: 'text-pink-500', bg: 'bg-pink-500/10', senders: ['Instagram', 'Twitter', 'TikTok'], msgs: ['liked your photo', 'mentioned you', 'started following you', 'went live', 'commented: "Wow"'] }
        ];

        let state = {
            active: false,
            score: 0,
            health: 100,
            speed: 2000,
            intervalId: null,
            difficultyInterval: null,
            notifications: []
        };

        // --- DOM Elements ---
        const list = document.getElementById('notification-list');
        const scoreEl = document.getElementById('score-display');
        const finalScoreEl = document.getElementById('final-score');
        const healthBar = document.getElementById('stress-bar');
        const startScreen = document.getElementById('start-screen');
        const gameOverScreen = document.getElementById('game-over-screen');
        const hud = document.getElementById('game-hud');
        const header = document.getElementById('lockscreen-header');
        const timeEl = document.getElementById('clock');
        const bigTimeEl = document.getElementById('big-clock');
        const dateEl = document.getElementById('date-display');
        const island = document.getElementById('dynamic-island');

        // --- Utilities ---
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            timeEl.innerText = timeStr;
            bigTimeEl.innerText = timeStr;
            dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        };
        setInterval(updateTime, 1000);
        updateTime();

        // --- Game Logic ---
        
        function startGame() {
            state = { active: true, score: 0, health: 100, speed: 2000, notifications: [], intervalId: null };
            
            // UI Transition
            startScreen.classList.add('hidden');
            gameOverScreen.classList.add('hidden');
            header.style.opacity = '0';
            header.style.height = '0';
            header.style.overflow = 'hidden';
            header.style.padding = '0';
            hud.classList.remove('opacity-0');
            island.style.width = '200px';
            
            list.innerHTML = '';
            updateHealth();

            // Game Loop
            state.intervalId = setTimeout(spawnLoop, state.speed);
            
            // Increase Difficulty
            state.difficultyInterval = setInterval(() => {
                if(state.speed > 600) state.speed -= 100;
            }, 5000);
        }

        function spawnLoop() {
            if (!state.active) return;
            spawnNotification();
            
            // Randomize timing slightly for realism
            const randomVar = Math.random() * 500;
            state.intervalId = setTimeout(spawnLoop, state.speed - randomVar);
        }

        function spawnNotification() {
            if (!state.active) return;

            // Generate content
            const type = NOTIFICATION_TYPES[Math.floor(Math.random() * NOTIFICATION_TYPES.length)];
            const sender = type.senders[Math.floor(Math.random() * type.senders.length)];
            const msg = type.msgs[Math.floor(Math.random() * type.msgs.length)];
            const id = Date.now() + Math.random();

            // Create Element
            const el = document.createElement('div');
            el.className = 'notification-enter group relative w-full p-3 bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-2xl select-none cursor-pointer hover:bg-zinc-800 transition-colors shadow-lg active:scale-[0.98] transform';
            el.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="shrink-0 w-10 h-10 rounded-xl ${type.bg} flex items-center justify-center ${type.color}">
                        <iconify-icon icon="${type.icon}" width="20" stroke-width="1.5"></iconify-icon>
                    </div>
                    <div class="flex-1 min-w-0 pt-0.5">
                        <div class="flex justify-between items-baseline mb-0.5">
                            <h4 class="text-sm font-semibold text-zinc-200 truncate pr-2">${sender}</h4>
                            <span class="text-[10px] text-zinc-500 font-medium">now</span>
                        </div>
                        <p class="text-xs text-zinc-400 leading-snug truncate">${msg}</p>
                    </div>
                </div>
                <div class="absolute -right-2 -top-2 w-5 h-5 bg-zinc-700 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                    <iconify-icon icon="solar:close-circle-bold" width="20"></iconify-icon>
                </div>
            `;

            // Click Handler (Clear Notification)
            el.addEventListener('click', (e) => {
                if(!state.active) return;
                // Ripple effect could go here
                el.classList.remove('notification-enter');
                el.classList.add('notification-exit');
                
                // Audio Context would go here for sound
                
                setTimeout(() => el.remove(), 300);
                
                // Update Score
                state.score += 100;
                scoreEl.innerText = state.score;
                
                // Heal slightly
                state.health = Math.min(100, state.health + 5);
                updateHealth();
            });

            // Add to DOM
            list.prepend(el); // Newest on top

            // Check Overflow (Lose Condition if list is too tall effectively)
            // But we use health decay based on count
            if (list.children.length > 6) {
                state.health -= 15;
                updateHealth();
            }

            // Natural decay just for existing
            state.health -= 2; 
            updateHealth();
        }

        function updateHealth() {
            healthBar.style.width = `${Math.max(0, state.health)}%`;
            
            // Color shift based on health
            if(state.health > 50) {
                healthBar.className = 'h-full w-full transition-all duration-300 ease-linear bg-gradient-to-r from-emerald-500 to-emerald-400';
            } else if (state.health > 20) {
                healthBar.className = 'h-full w-full transition-all duration-300 ease-linear bg-gradient-to-r from-yellow-500 to-orange-400';
            } else {
                healthBar.className = 'h-full w-full transition-all duration-300 ease-linear bg-gradient-to-r from-red-600 to-red-500 animate-pulse';
            }

            if (state.health <= 0) {
                gameOver();
            }
        }

        function gameOver() {
            state.active = false;
            clearTimeout(state.intervalId);
            clearInterval(state.difficultyInterval);
            
            finalScoreEl.innerText = state.score;
            gameOverScreen.classList.remove('hidden');
            hud.classList.add('opacity-0');
            island.style.width = '120px';
        }

        function resetGame() {
            startScreen.classList.remove('hidden');
            gameOverScreen.classList.add('hidden');
            
            // Reset visuals
            header.style.opacity = '1';
            header.style.height = 'auto';
            header.style.padding = '1rem 1.5rem';
            
            list.innerHTML = '';
            startGame();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-emerald-900/10 rounded-full blur-[100px]"></div>
</div>

<div className="relative w-full max-w-sm h-full sm:h-[90vh] sm:max-h-[850px] bg-black sm:rounded-[3rem] sm:border sm:border-zinc-800 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5">

<div className="h-14 flex items-center justify-between px-6 shrink-0 z-20">
<span className="text-sm font-medium tracking-wide text-zinc-400" id="clock">09:41</span>
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:signal-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full z-30 flex items-center justify-center transition-all duration-300 overflow-hidden group" id="dynamic-island">
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium tracking-tight text-emerald-500 uppercase">Focus Mode</span>
</div>
</div>

<div className="flex-1 relative flex flex-col z-10">

<div className="px-6 py-4 transition-opacity duration-500" id="lockscreen-header">
<div className="flex flex-col items-center pt-8 pb-4">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:lock-unlocked-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h1 className="text-5xl font-medium tracking-tighter text-white mb-2" id="big-clock">09:41</h1>
<p className="text-base text-zinc-400 font-normal" id="date-display">Tuesday, October 24</p>
</div>
</div>

<div className="px-6 mb-4 opacity-0 transition-opacity duration-500" id="game-hud">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Focus Level</span>
<span className="text-xs font-mono text-white" id="score-display">0</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-full transition-all duration-300 ease-linear" id="stress-bar"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 space-y-3 no-scrollbar relative mask-image-b" id="notification-list">

</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20 flex flex-col items-center gap-4">

<div className="w-full flex flex-col gap-3" id="start-screen">
<button className="group w-full h-12 bg-white text-black rounded-full font-medium text-sm tracking-tight hover:bg-zinc-200 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]" onclick="startGame()">
<span>Enable Focus Mode</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500">Clear notifications to stay focused.</p>
</div>

<div className="hidden w-full flex flex-col gap-3 backdrop-blur-md bg-zinc-900/80 p-6 rounded-3xl border border-white/10 text-center shadow-2xl" id="game-over-screen">
<div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 mx-auto flex items-center justify-center mb-1">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Focus Lost</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                        You were overwhelmed by digital distractions.<br/>
                        Final Score: <span className="text-white font-mono" id="final-score">0</span>
</p>
<button className="mt-2 w-full h-10 bg-white/10 text-white border border-white/10 rounded-full font-medium text-xs tracking-tight hover:bg-white hover:text-black transition-colors" onclick="resetGame()">
                        Try Again
                    </button>
</div>

<div className="w-32 h-1 bg-zinc-800 rounded-full mt-2"></div>
</div>
</div>
</div>


    </>
  );
}
