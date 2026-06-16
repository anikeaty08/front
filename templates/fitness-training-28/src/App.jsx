import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navigation Logic
        const navBtns = document.querySelectorAll('.nav-btn');
        const views = document.querySelectorAll('.view-section');

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update buttons
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update views
                const targetId = btn.getAttribute('data-target');
                views.forEach(view => {
                    if (view.id === targetId) {
                        view.classList.remove('hidden');
                        view.classList.add('animate-fade-in');
                        // Reset animation to allow re-triggering
                        view.style.animation = 'none';
                        view.offsetHeight; /* trigger reflow */
                        view.style.animation = null; 
                    } else {
                        view.classList.add('hidden');
                        view.classList.remove('animate-fade-in');
                    }
                });
            });
        });

        // Tabata Timer Logic
        let timerInterval;
        let isRunning = false;
        let currentPhase = 'prepare'; // prepare, work, rest
        let currentRound = 1;
        let timeLeft = 10; // 10s prep
        
        const display = document.getElementById('timer-display');
        const statusDisplay = document.getElementById('timer-status');
        const roundDisplay = document.getElementById('timer-round');
        const btnStart = document.getElementById('btn-start');
        const btnReset = document.getElementById('btn-reset');
        const settingsDiv = document.getElementById('timer-settings');
        const progressCircle = document.getElementById('timer-progress');
        
        const circumference = 2 * Math.PI * 48; // r=48 from svg

        function updateDisplay() {
            display.textContent = timeLeft;
            roundDisplay.textContent = `Round ${currentRound}/${document.getElementById('input-rounds').value}`;
            
            // Update circle progress
            let totalPhaseTime;
            if(currentPhase === 'prepare') totalPhaseTime = 10;
            else if(currentPhase === 'work') totalPhaseTime = parseInt(document.getElementById('input-work').value);
            else totalPhaseTime = parseInt(document.getElementById('input-rest').value);
            
            const offset = circumference - (timeLeft / totalPhaseTime) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }

        function setPhase(phase) {
            currentPhase = phase;
            if (phase === 'prepare') {
                timeLeft = 10;
                statusDisplay.textContent = 'PREPARE';
                statusDisplay.className = 'text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2 z-10';
                display.className = 'text-6xl font-semibold tracking-tighter text-neutral-100 z-10 font-mono';
                progressCircle.style.stroke = '#a3a3a3';
            } else if (phase === 'work') {
                timeLeft = parseInt(document.getElementById('input-work').value);
                statusDisplay.textContent = 'WORK';
                statusDisplay.className = 'text-xs font-semibold tracking-widest text-lime-400 uppercase mb-2 z-10';
                display.className = 'text-7xl font-semibold tracking-tighter text-lime-400 z-10 font-mono';
                progressCircle.style.stroke = '#a3e635';
            } else if (phase === 'rest') {
                timeLeft = parseInt(document.getElementById('input-rest').value);
                statusDisplay.textContent = 'REST';
                statusDisplay.className = 'text-xs font-semibold tracking-widest text-yellow-400 uppercase mb-2 z-10';
                display.className = 'text-6xl font-semibold tracking-tighter text-yellow-400 z-10 font-mono';
                progressCircle.style.stroke = '#facc15';
            }
            updateDisplay();
        }

        function toggleTimer() {
            const totalRounds = parseInt(document.getElementById('input-rounds').value);
            
            if (isRunning) {
                clearInterval(timerInterval);
                btnStart.textContent = 'RESUME';
                btnStart.className = 'flex-[2] py-4 rounded-xl bg-yellow-400 text-neutral-950 font-semibold text-sm shadow-[0_0_20px_rgba(250,204,21,0.2)] active:scale-[0.98] transition-transform';
                isRunning = false;
            } else {
                settingsDiv.style.opacity = '0.5';
                settingsDiv.style.pointerEvents = 'none';
                btnStart.textContent = 'PAUSE';
                btnStart.className = 'flex-[2] py-4 rounded-xl bg-neutral-800 text-neutral-100 border border-neutral-700 font-semibold text-sm active:scale-[0.98] transition-transform';
                isRunning = true;
                
                timerInterval = setInterval(() => {
                    timeLeft--;
                    
                    if (timeLeft < 0) {
                        if (currentPhase === 'prepare') {
                            setPhase('work');
                        } else if (currentPhase === 'work') {
                            if (currentRound >= totalRounds) {
                                resetTimer();
                                statusDisplay.textContent = 'DONE';
                                return;
                            }
                            setPhase('rest');
                        } else if (currentPhase === 'rest') {
                            currentRound++;
                            setPhase('work');
                        }
                    } else {
                        updateDisplay();
                    }
                }, 1000);
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            currentRound = 1;
            settingsDiv.style.opacity = '1';
            settingsDiv.style.pointerEvents = 'auto';
            btnStart.textContent = 'START';
            btnStart.className = 'flex-[2] py-4 rounded-xl bg-lime-400 text-neutral-950 font-semibold text-sm shadow-[0_0_20px_rgba(163,230,53,0.2)] active:scale-[0.98] transition-transform';
            setPhase('prepare');
        }

        btnStart.addEventListener('click', toggleTimer);
        btnReset.addEventListener('click', resetTimer);

        // Init timer display
        resetTimer();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
<div className="px-5 py-4 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-neutral-100 flex items-center gap-0.5">
<span className="text-lime-400">X</span>FIT
            </div>
<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-400 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 pt-20 pb-28 px-5 overflow-y-auto overflow-x-hidden">

<section className="view-section block space-y-6 animate-fade-in" id="view-workouts">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Library</h1>
<button className="text-sm font-medium text-neutral-400 hover:text-lime-400 flex items-center gap-1">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon> Filters
                    </button>
</div>
<div className="flex overflow-x-auto gap-2 pb-2 -mx-5 px-5 no-scrollbar snap-x">
<button className="snap-start shrink-0 px-4 py-1.5 rounded-full border border-lime-400 bg-lime-400/10 text-lime-400 text-sm font-medium transition-all">All</button>
<button className="snap-start shrink-0 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-medium hover:border-neutral-700 transition-all">Full Body</button>
<button className="snap-start shrink-0 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-medium hover:border-neutral-700 transition-all">Chest</button>
<button className="snap-start shrink-0 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-medium hover:border-neutral-700 transition-all">Back</button>
<button className="snap-start shrink-0 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-medium hover:border-neutral-700 transition-all">Legs</button>
</div>
<div className="flex items-center gap-4 py-2 border-b border-neutral-900">
<label className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer">
<input checked="" className="toggle" type="checkbox"/>
<span>Bodyweight</span>
</label>
<label className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer">
<input checked="" className="toggle" type="checkbox"/>
<span>Weighted</span>
</label>
</div>
</div>

<div className="space-y-3">

<div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group active:scale-[0.98] transition-transform">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-lime-400">
<iconify-icon icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-100">Barbell Deadlift</h3>
<p className="text-xs text-neutral-500 mt-0.5">Strength • Back, Legs</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-950 text-xs font-medium text-lime-400 border border-neutral-800">5 x 5</span>
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group active:scale-[0.98] transition-transform">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-100">Muscle Ups</h3>
<p className="text-xs text-neutral-500 mt-0.5">Gymnastics • Full Body</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-950 text-xs font-medium text-yellow-400 border border-neutral-800">4 x max</span>
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group active:scale-[0.98] transition-transform">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:accessibility-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-100">Strict Handstand Pushup</h3>
<p className="text-xs text-neutral-500 mt-0.5">Bodyweight • Shoulders</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-950 text-xs font-medium text-neutral-300 border border-neutral-800">3 x 8</span>
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="view-section hidden space-y-6" id="view-log">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Training Log</h1>
<div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-medium text-neutral-100">New Entry</h2>
<input className="bg-transparent text-sm text-lime-400 outline-none w-[110px]" type="date" value="2023-10-27"/>
</div>
<div className="space-y-3">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-lime-400 transition-colors" placeholder="Exercise name..." type="text"/>
<div className="flex gap-3">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-lime-400 transition-colors" placeholder="Sets" type="number"/>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-lime-400 transition-colors" placeholder="Reps" type="number"/>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-lime-400 transition-colors" placeholder="Weight" type="text"/>
</div>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-lime-400 transition-colors resize-none" placeholder="Notes (optional)..." rows="2"></textarea>
<button className="w-full py-3 rounded-xl bg-lime-400 text-neutral-950 font-semibold text-sm active:scale-[0.98] transition-transform">Save Entry</button>
</div>
</div>
<div className="space-y-3">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider px-1">Recent History</h3>

<div className="p-4 rounded-2xl bg-transparent border border-neutral-800 flex flex-col gap-2">
<div className="flex justify-between items-start">
<div className="font-medium text-neutral-200 text-sm">Front Squat</div>
<div className="text-xs text-neutral-500">Yesterday</div>
</div>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-neutral-900 rounded-md text-lime-400 border border-neutral-800">5 sets</span>
<span className="px-2 py-1 bg-neutral-900 rounded-md text-lime-400 border border-neutral-800">3 reps</span>
<span className="px-2 py-1 bg-neutral-900 rounded-md text-yellow-400 border border-neutral-800">225 lbs</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Felt heavy, core stability was good.</p>
</div>
</div>
</section>

<section className="view-section hidden space-y-6" id="view-videos">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Media</h1>
<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lime-400 hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="relative group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-10 h-10 rounded-full bg-neutral-950/50 backdrop-blur border border-neutral-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-2 px-1">
<h4 className="text-sm font-medium text-neutral-200 truncate">Snatch Technique</h4>
<p className="text-xs text-neutral-500">YouTube</p>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-10 h-10 rounded-full bg-neutral-950/50 backdrop-blur border border-neutral-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-2 px-1">
<h4 className="text-sm font-medium text-neutral-200 truncate">Kipping Pullups</h4>
<p className="text-xs text-neutral-500">Upload</p>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="aspect-[4/5] bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-10 h-10 rounded-full bg-neutral-950/50 backdrop-blur border border-neutral-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-2 px-1">
<h4 className="text-sm font-medium text-neutral-200 truncate">Mobility Flow</h4>
<p className="text-xs text-neutral-500">Instagram</p>
</div>
</div>
</div>
</section>

<section className="view-section hidden flex-col h-full min-h-[60vh]" id="view-timer">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-100 mb-8">Tabata Timer</h1>
<div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto">

<div className="relative w-64 h-64 rounded-full border-4 border-neutral-900 flex flex-col items-center justify-center mb-8 bg-neutral-950 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="#262626" strokeWidth="2"></circle>
<circle className="transition-all duration-1000 ease-linear" cx="50" cy="50" fill="none" id="timer-progress" r="48" stroke="#a3e635" stroke-dasharray="301.59" stroke-dashoffset="0" strokeWidth="2"></circle>
</svg>
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2 z-10" id="timer-status">Prepare</span>
<span className="text-6xl font-semibold tracking-tighter text-lime-400 z-10 font-mono" id="timer-display">20</span>
<span className="text-sm text-neutral-400 mt-2 z-10" id="timer-round">Round 1/8</span>
</div>

<div className="grid grid-cols-3 gap-3 w-full mb-8" id="timer-settings">
<div className="bg-neutral-900 rounded-xl p-3 border border-neutral-800 text-center">
<label className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Work</label>
<input className="w-full bg-transparent text-center text-xl font-semibold text-neutral-100 outline-none" id="input-work" type="number" value="20"/>
</div>
<div className="bg-neutral-900 rounded-xl p-3 border border-neutral-800 text-center">
<label className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Rest</label>
<input className="w-full bg-transparent text-center text-xl font-semibold text-neutral-100 outline-none" id="input-rest" type="number" value="10"/>
</div>
<div className="bg-neutral-900 rounded-xl p-3 border border-neutral-800 text-center">
<label className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Rounds</label>
<input className="w-full bg-transparent text-center text-xl font-semibold text-neutral-100 outline-none" id="input-rounds" type="number" value="8"/>
</div>
</div>

<div className="flex gap-4 w-full">
<button className="flex-1 py-4 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-800 font-medium text-sm active:bg-neutral-800 transition-colors" id="btn-reset">Reset</button>
<button className="flex-[2] py-4 rounded-xl bg-lime-400 text-neutral-950 font-semibold text-sm shadow-[0_0_20px_rgba(163,230,53,0.2)] active:scale-[0.98] transition-transform" id="btn-start">START</button>
</div>
</div>
</section>

<section className="view-section hidden space-y-6" id="view-recipes">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Fuel</h1>
<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lime-400 hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-4">

<div className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden group">
<div className="h-32 bg-neutral-800 relative">

<div className="absolute inset-0 flex items-center justify-center text-neutral-700">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-2 right-2 px-2 py-1 bg-neutral-950/80 backdrop-blur rounded text-[10px] font-medium text-yellow-400 border border-neutral-700">450 kcal</div>
</div>
<div className="p-4">
<h3 className="font-medium text-neutral-100 mb-1">Steak &amp; Sweet Potato Hash</h3>
<p className="text-xs text-neutral-400 line-clamp-2 mb-3">High protein post-workout meal. Diced sweet potatoes, lean sirloin, and spinach.</p>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 20m</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> 2 servings</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden group">
<div className="h-32 bg-neutral-800 relative">
<div className="absolute inset-0 flex items-center justify-center text-neutral-700">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-2 right-2 px-2 py-1 bg-neutral-950/80 backdrop-blur rounded text-[10px] font-medium text-yellow-400 border border-neutral-700">320 kcal</div>
</div>
<div className="p-4">
<h3 className="font-medium text-neutral-100 mb-1">Overnight Oats Power Bowl</h3>
<p className="text-xs text-neutral-400 line-clamp-2 mb-3">Quick morning fuel. Oats, chia seeds, whey protein, and almond milk.</p>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 5m prep</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> 1 serving</span>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 inset-x-0 bg-neutral-950/90 backdrop-blur-lg border-t border-neutral-900 pb-safe pt-2 px-2 z-50">
<div className="flex items-center justify-between max-w-md mx-auto">
<button className="nav-btn active flex-1 flex flex-col items-center gap-1 py-2 text-neutral-500 transition-colors" data-target="view-workouts">
<iconify-icon icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Workouts</span>
</button>
<button className="nav-btn flex-1 flex flex-col items-center gap-1 py-2 text-neutral-500 transition-colors" data-target="view-log">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Log</span>
</button>
<button className="nav-btn flex-1 flex flex-col items-center gap-1 py-2 text-neutral-500 transition-colors" data-target="view-videos">
<iconify-icon icon="solar:video-frame-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Videos</span>
</button>
<button className="nav-btn flex-1 flex flex-col items-center gap-1 py-2 text-neutral-500 transition-colors" data-target="view-timer">
<iconify-icon icon="solar:stopwatch-play-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Timer</span>
</button>
<button className="nav-btn flex-1 flex flex-col items-center gap-1 py-2 text-neutral-500 transition-colors" data-target="view-recipes">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Recipes</span>
</button>
</div>

<div className="h-4 w-full"></div>
</nav>
<style>
        /* Active Nav State overrides */
        .nav-btn.active { color: #f5f5f5; /* neutral-100 */ }
        .nav-btn.active iconify-icon { color: #a3e635; /* lime-400 */ }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
        }
    </style>


    </>
  );
}
