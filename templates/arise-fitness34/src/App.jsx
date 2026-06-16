import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
void: '#05070D',
navy: '#0B1220',
cyan: '#00E5FF',
neon: '#1DAEFF',
penalty: '#FF2E2E',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'boot-glitch': 'glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite',
},
keyframes: {
glitch: {
'0%': { transform: 'translate(0)' },
'20%': { transform: 'translate(-2px, 2px)' },
'40%': { transform: 'translate(-2px, -2px)' },
'60%': { transform: 'translate(2px, 2px)' },
'80%': { transform: 'translate(2px, -2px)' },
'100%': { transform: 'translate(0)' }
}
}
}
}
}



        // Utilities
        const get = (id) => document.getElementById(id);
        const screens = ['auth-screen', 'onboarding-screen', 'dashboard-screen', 'quest-screen', 'profile-screen'];
        
        let playerProfile = {
            weight: 70,
            height: 175,
            goal: 'fitness',
            protein: 90,
            calories: 2200
        };

        // System Boot Sequence
        window.addEventListener('load', () => {
            const bootLine = get('boot-text-line');
            const loader = get('boot-loader');
            const progress = get('boot-progress');
            const glitchContainer = get('glitch-container');
            const bootScreen = get('boot-screen');
            
            const seq = [
                { text: "SYSTEM BOOTING...", delay: 800 },
                { text: "DATA SYNCING...", delay: 1800 },
                { text: "PLAYER STATUS LOADING...", delay: 2800 },
                { text: "ARISE SYSTEM ONLINE", delay: 3800 }
            ];

            // Initial Glitch
            glitchContainer.style.opacity = '1';
            glitchContainer.classList.add('animate-boot-glitch');
            setTimeout(() => { glitchContainer.classList.remove('animate-boot-glitch'); }, 600);

            // Sequence loop
            let currentDelay = 0;
            seq.forEach((item, index) => {
                setTimeout(() => {
                    bootLine.innerText = item.text;
                    bootLine.classList.add('animate-pulse');
                    if(index === 2) {
                         loader.classList.remove('hidden');
                         setTimeout(() => progress.style.width = '100%', 50);
                    }
                }, item.delay);
                currentDelay = item.delay;
            });

            // Finish boot
            setTimeout(() => {
                bootScreen.style.opacity = '0';
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    const auth = get('auth-screen');
                    auth.style.display = 'flex';
                    setTimeout(() => auth.classList.add('active', 'fade-enter'), 10);
                }, 500);
            }, currentDelay + 800);
        });

        // Navigation
        function navigateTo(targetId) {
            screens.forEach(id => {
                const el = get(id);
                if (el.id !== targetId && el.style.display !== 'none') {
                    el.classList.remove('active', 'fade-enter');
                    setTimeout(() => {
                        if(!el.classList.contains('active')) el.style.display = 'none';
                    }, 400);
                }
            });

            const target = get(targetId);
            target.style.display = 'flex';
            setTimeout(() => target.classList.add('active', 'fade-enter'), 10);
            updateNavState(targetId);
        }

        function updateNavState(screenId) {
            const nav = get('navbar');
            if(screenId === 'auth-screen' || screenId === 'onboarding-screen') {
                nav.style.display = 'none';
                return;
            }
            nav.style.display = 'flex';
            
            const map = { 'dashboard-screen': 'nav-home', 'quest-screen': 'nav-quest', 'profile-screen': 'nav-profile' };
            ['nav-home', 'nav-quest', 'nav-profile'].forEach(id => {
                get(id).className = "flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group";
                get(id).querySelector('span').classList.add('opacity-70');
            });
            
            if(map[screenId]) {
                const active = get(map[screenId]);
                active.className = "flex flex-col items-center gap-1.5 text-cyan transition-colors group";
                active.querySelector('span').classList.remove('opacity-70');
            }
        }

        // Logic
        function updateDisp(id, val, unit) {
            get('disp-' + id).innerText = val + ' ' + unit;
        }

        function handleLogin() {
            navigateTo('onboarding-screen');
        }

        // Gemini AI Simulation (Protocol Generation)
        function completeOnboarding() {
            // Harvest data
            playerProfile.weight = parseInt(get('input-weight').value);
            playerProfile.height = parseInt(get('input-height').value);
            playerProfile.goal = get('input-goal').value;

            // Generate System Logic
            let proteinMultiplier = 1.2;
            let calorieBase = 2200;

            if(playerProfile.goal === 'muscle') {
                proteinMultiplier = 1.8;
                calorieBase = 2800;
            } else if (playerProfile.goal === 'fatloss') {
                proteinMultiplier = 2.0;
                calorieBase = 1800;
            }

            playerProfile.protein = Math.round(playerProfile.weight * proteinMultiplier);
            playerProfile.calories = calorieBase;

            showToast("GENERATING SYSTEM PROTOCOL...");
            
            // Update Dashboard UI
            setTimeout(() => {
                get('dash-protein-target').innerText = playerProfile.protein + 'g';
                get('dash-cal-target').innerText = playerProfile.calories;
                
                // Update Quest UI text
                const protocolTexts = document.querySelectorAll('.protocol-protein');
                protocolTexts.forEach(el => el.innerText = playerProfile.protein);
                
                navigateTo('dashboard-screen');
            }, 1500);
        }

        function checkProgress() {
            const checkboxes = document.querySelectorAll('#quest-screen input[type="checkbox"]');
            const checkedCount = Array.from(checkboxes).filter(c => c.checked).length;
            const btn = get('complete-btn');
            
            // Need 3 tasks checked to complete daily quest (logic simplification)
            if(checkedCount >= 3) {
                btn.disabled = false;
                btn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
                btn.classList.add('bg-gradient-to-r', 'from-neon', 'to-cyan', 'text-void', 'shadow-lg', 'shadow-cyan/20');
            } else {
                btn.disabled = true;
                btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
                btn.classList.remove('bg-gradient-to-r', 'from-neon', 'to-cyan', 'text-void', 'shadow-lg', 'shadow-cyan/20');
            }
        }

        function triggerLevelUp() {
            const modal = get('levelup-modal');
            const content = get('levelup-content');
            modal.style.pointerEvents = 'auto';
            modal.style.opacity = '1';
            content.style.transform = 'scale(1)';
        }

        function triggerPenalty() {
            const modal = get('penalty-modal');
            modal.style.pointerEvents = 'auto';
            modal.style.opacity = '1';
        }

        function closeModal(id) {
            const modal = get(id);
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            if(id === 'levelup-modal') {
                setTimeout(() => navigateTo('dashboard-screen'), 500);
            }
        }

        function saveProfile() {
            showToast("RECALIBRATING PROTOCOLS...");
            
            // Simple Logic to update profile from edit screen
            const newWeight = get('profile-weight').value;
            const newGoal = get('profile-goal').value;
            
            // Re-run simple AI
            let proteinMultiplier = 1.2;
            if(newGoal === 'muscle') proteinMultiplier = 1.8;
            if(newGoal === 'fatloss') proteinMultiplier = 2.0;
            
            const newProtein = Math.round(newWeight * proteinMultiplier);
            
            setTimeout(() => {
                get('dash-protein-target').innerText = newProtein + 'g';
                document.querySelectorAll('.protocol-protein').forEach(el => el.innerText = newProtein);
                
                showToast("PROFILE UPDATED");
                setTimeout(() => {
                    get('system-toast').style.transform = 'translate(-50%, -100px)';
                }, 1000);
            }, 1500);
        }

        function showToast(msg) {
            const toast = get('system-toast');
            get('toast-text').innerText = msg;
            toast.style.transform = 'translate(-50%, 0)';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-full relative flex flex-col bg-void shadow-2xl shadow-cyan/5 overflow-hidden">

<div className="absolute inset-0 z-[100] bg-void flex flex-col items-center justify-center p-8 select-none" id="boot-screen">
<div className="text-cyan font-mono text-xs tracking-widest space-y-2 text-center opacity-0 uppercase" id="glitch-container">
<p className="boot-text" id="boot-text-line">SYSTEM BOOTING...</p>
</div>
<div className="mt-8 w-32 h-0.5 bg-zinc-800 rounded-full overflow-hidden hidden" id="boot-loader">
<div className="h-full bg-cyan w-0 transition-all duration-[1500ms] ease-out" id="boot-progress"></div>
</div>
</div>

<div className="screen flex-col h-full p-6 justify-center relative z-40" id="auth-screen">
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none"></div>
<div className="mb-12 relative z-10">
<h1 className="text-3xl font-medium tracking-tight text-white mb-2 glow-text">ARISE</h1>
<p className="text-zinc-500 text-sm">System authentication required.</p>
</div>
<form className="space-y-4 relative z-10" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all placeholder-zinc-700" placeholder="player@system.arise" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider ml-1">Password</label>
<input className="w-full bg-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all placeholder-zinc-700" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-gradient-to-r from-neon to-cyan text-void font-semibold py-4 rounded-2xl mt-6 shadow-lg shadow-cyan/20 active:scale-[0.98] transition-transform" onclick="handleLogin()" type="button">
                    Initialize System
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-2 relative z-10">
<div className="h-px w-12 bg-white/10"></div>
<span className="text-xs text-zinc-600">OR</span>
<div className="h-px w-12 bg-white/10"></div>
</div>
<button className="w-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium py-3.5 rounded-2xl mt-6 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors relative z-10">
<iconify-icon icon="solar:google-linear" width="18"></iconify-icon>
                Sign in with Google
            </button>
</div>

<div className="screen flex-col h-full p-6 relative z-30" id="onboarding-screen">
<div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
<div className="mt-8 mb-8">
<h2 className="text-xl font-medium tracking-tight text-white">Player Calibration</h2>
<p className="text-xs text-zinc-500 mt-1">Data required for system protocol generation.</p>
</div>
<div className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Gender</label>
<select className="w-full bg-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan/50" id="input-gender">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Age</label>
<input className="w-full bg-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan/50 text-center" id="input-age" type="number" value="24"/>
</div>
</div>

<div className="space-y-5 bg-navy/50 p-4 rounded-2xl border border-white/5">
<div className="space-y-2">
<div className="flex justify-between text-xs px-1">
<span className="text-zinc-500">Height</span>
<span className="text-cyan" id="disp-height">175 cm</span>
</div>
<input className="w-full" id="input-height" max="220" min="140" oninput="updateDisp('height', this.value, 'cm')" type="range" value="175"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs px-1">
<span className="text-zinc-500">Weight</span>
<span className="text-cyan" id="disp-weight">70 kg</span>
</div>
<input className="w-full" id="input-weight" max="150" min="40" oninput="updateDisp('weight', this.value, 'kg')" type="range" value="70"/>
</div>
</div>

<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Primary Goal</label>
<select className="w-full bg-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan/50" id="input-goal">
<option value="fitness">General Fitness</option>
<option value="muscle">Muscle Gain</option>
<option value="fatloss">Fat Loss</option>
</select>
</div>

<div className="space-y-2 pt-2">
<label className="text-xs text-zinc-500 ml-1 uppercase tracking-wider">Activity Level</label>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer hidden" name="activity" type="radio" value="beginner"/>
<div className="glass-card p-4 rounded-2xl peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 peer-checked:bg-cyan peer-checked:text-void transition-colors">
<iconify-icon icon="solar:sofa-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Beginner</p>
<p className="text-xs text-zinc-500">Sedentary / New Player</p>
</div>
</div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="activity" type="radio" value="moderate"/>
<div className="glass-card p-4 rounded-2xl peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 peer-checked:bg-cyan peer-checked:text-void transition-colors">
<iconify-icon icon="solar:walking-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Moderate</p>
<p className="text-xs text-zinc-500">Training 1-3x / Week</p>
</div>
</div>
</div>
</label>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 glass z-20">
<button className="w-full bg-gradient-to-r from-neon to-cyan text-void font-semibold py-4 rounded-2xl shadow-lg shadow-cyan/20 active:scale-[0.98] transition-transform" onclick="completeOnboarding()" type="button">
                    Generate Protocol
                </button>
</div>
</div>

<div className="screen flex-col h-full bg-void relative z-10 pb-24" id="dashboard-screen">

<div className="pt-12 px-6 pb-6 bg-gradient-to-b from-navy to-void/0">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border border-cyan/30 p-0.5 relative cursor-pointer" onclick="navigateTo('profile-screen')">
<img className="w-full h-full rounded-full object-cover" src="https://ui-avatars.com/api/?name=Player+One&amp;background=0B1220&amp;color=fff&amp;fontSize=0.33"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan rounded-full border-2 border-void"></div>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="text-base font-medium text-white tracking-tight" id="dash-name">Player One</h2>
<span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-cyan/10 text-cyan border border-cyan/20 uppercase tracking-wide">E-Rank</span>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan w-[65%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>
</div>
<span className="text-[10px] text-zinc-400 font-mono">LVL 01</span>
</div>
</div>
</div>
<button className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors" onclick="triggerPenalty()">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-6 space-y-5 no-scrollbar">

<div className="grid grid-cols-2 gap-4">
<div className="glass-card p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:fire-linear" width="40"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Streak</span>
<div>
<span className="text-2xl font-semibold text-white tracking-tight">0</span>
<span className="text-xs text-zinc-400 ml-1">Days</span>
</div>
</div>
<div className="glass-card p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-blue-500" icon="solar:drop-linear" width="40"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Hydration</span>
<div>
<span className="text-2xl font-semibold text-white tracking-tight" id="dash-water">0.0</span>
<span className="text-xs text-zinc-400 ml-1">/ <span id="target-water">3.0</span>L</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-0.5 overflow-hidden relative group cursor-pointer" onclick="navigateTo('quest-screen')">
<div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-navy/90 p-5 relative rounded-[14px]">
<div className="flex justify-between items-center mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Daily Quest</h3>
<p className="text-xs text-zinc-400">Preparation for the Monarchs</p>
</div>
<div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)]">
<iconify-icon icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-full h-full bg-zinc-600"></div>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-300">Physical Protocol</span>
<span className="text-cyan">Incomplete</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full">
<div className="h-full bg-cyan w-[0%] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-[10px] text-penalty font-medium uppercase tracking-wide flex items-center gap-1">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> Penalty: Active
                            </span>
<span className="text-[10px] text-cyan font-mono">REWARD: +50XP</span>
</div>
</div>
</div>

<div className="glass-card p-5 rounded-2xl">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-white">Nutritional Stability (Mana)</span>
<iconify-icon className="text-green-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="flex gap-2 mb-2">
<div className="flex-1 bg-white/5 rounded-xl p-3 text-center border border-white/5">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wide">Protein</span>
<span className="block text-lg font-medium text-white" id="dash-protein-target">0g</span>
</div>
<div className="flex-1 bg-white/5 rounded-xl p-3 text-center border border-white/5">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wide">Calories</span>
<span className="block text-lg font-medium text-white" id="dash-cal-target">0</span>
</div>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed mt-3">
<span className="text-cyan">System Recommendation:</span> Eggs, Lentils (Daal), Yogurt (Dahi), Soybeans.
                    </p>
</div>
</div>
</div>

<div className="screen flex-col h-full bg-void relative z-20 pb-24" id="quest-screen">
<div className="p-6">
<div className="flex items-center gap-4 mb-8">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" onclick="navigateTo('dashboard-screen')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Active Protocol</h2>
<p className="text-xs text-zinc-500">System generated daily tasks</p>
</div>
</div>
<div className="space-y-4 overflow-y-auto pb-4 no-scrollbar h-[calc(100vh-200px)]">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-2 pl-1">Physical Quests</h3>

<label className="block cursor-pointer group">
<input className="peer hidden" onchange="checkProgress()" type="checkbox"/>
<div className="glass-card p-4 rounded-2xl border border-white/10 peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all flex items-center gap-4">
<div className="w-6 h-6 rounded-lg border border-zinc-600 peer-checked:border-cyan peer-checked:bg-cyan peer-checked:text-void flex items-center justify-center text-transparent transition-all">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Push-ups</p>
<p className="text-xs text-zinc-500">10 Reps • Upper Body</p>
</div>
<span className="text-xs font-mono text-cyan/70">+10XP</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="peer hidden" onchange="checkProgress()" type="checkbox"/>
<div className="glass-card p-4 rounded-2xl border border-white/10 peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all flex items-center gap-4">
<div className="w-6 h-6 rounded-lg border border-zinc-600 peer-checked:border-cyan peer-checked:bg-cyan peer-checked:text-void flex items-center justify-center text-transparent transition-all">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Squats</p>
<p className="text-xs text-zinc-500">15 Reps • Legs</p>
</div>
<span className="text-xs font-mono text-cyan/70">+10XP</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="peer hidden" onchange="checkProgress()" type="checkbox"/>
<div className="glass-card p-4 rounded-2xl border border-white/10 peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all flex items-center gap-4">
<div className="w-6 h-6 rounded-lg border border-zinc-600 peer-checked:border-cyan peer-checked:bg-cyan peer-checked:text-void flex items-center justify-center text-transparent transition-all">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Walking</p>
<p className="text-xs text-zinc-500">20 Minutes • Cardio</p>
</div>
<span className="text-xs font-mono text-cyan/70">+15XP</span>
</div>
</label>
<div className="h-px bg-white/5 my-4"></div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 pl-1">Nutritional Quests</h3>

<label className="block cursor-pointer group">
<input className="peer hidden" onchange="checkProgress()" type="checkbox"/>
<div className="glass-card p-4 rounded-2xl border border-white/10 peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all flex items-center gap-4">
<div className="w-6 h-6 rounded-lg border border-zinc-600 peer-checked:border-cyan peer-checked:bg-cyan peer-checked:text-void flex items-center justify-center text-transparent transition-all">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Protein Target</p>
<p className="text-xs text-zinc-500">Target Reached (<span className="protocol-protein">90</span>g)</p>
</div>
<span className="text-xs font-mono text-cyan/70">+25XP</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="peer hidden" onchange="checkProgress()" type="checkbox"/>
<div className="glass-card p-4 rounded-2xl border border-white/10 peer-checked:border-cyan/50 peer-checked:bg-cyan/5 transition-all flex items-center gap-4">
<div className="w-6 h-6 rounded-lg border border-zinc-600 peer-checked:border-cyan peer-checked:bg-cyan peer-checked:text-void flex items-center justify-center text-transparent transition-all">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Hydration</p>
<p className="text-xs text-zinc-500">Target Reached (3L)</p>
</div>
<span className="text-xs font-mono text-cyan/70">+10XP</span>
</div>
</label>
</div>
<div className="absolute bottom-6 left-6 right-6">
<button className="w-full bg-zinc-800 text-zinc-500 font-semibold py-4 rounded-2xl cursor-not-allowed transition-all shadow-none" disabled="" id="complete-btn" onclick="triggerLevelUp()" type="button">
                        Complete Daily Quest
                    </button>
</div>
</div>
</div>

<div className="screen flex-col h-full bg-void relative z-20 pb-24 overflow-y-auto" id="profile-screen">
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" onclick="navigateTo('dashboard-screen')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<span className="text-xs font-mono text-zinc-500">ID: 902931</span>
<button className="text-cyan text-sm font-medium hover:text-white transition-colors" onclick="saveProfile()">Save</button>
</div>
<div className="flex flex-col items-center mb-8">
<div className="w-24 h-24 rounded-full border-2 border-cyan/50 p-1 relative mb-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
<img className="w-full h-full rounded-full object-cover" src="https://ui-avatars.com/api/?name=Player+One&amp;background=0B1220&amp;color=fff&amp;fontSize=0.33"/>
<div className="absolute bottom-0 right-0 bg-navy rounded-full p-2 border border-white/10 cursor-pointer hover:border-cyan/50 transition-colors">
<iconify-icon className="text-white w-4 h-4" icon="solar:camera-linear"></iconify-icon>
</div>
</div>
<h2 className="text-xl font-medium text-white tracking-tight">Player One</h2>
<p className="text-sm text-zinc-500">Level 01 • Shadow Monarch</p>
</div>
<div className="space-y-4">
<div className="glass-card p-0 rounded-2xl overflow-hidden">
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-400">Name</span>
<input className="bg-transparent text-right text-sm text-white focus:outline-none focus:text-cyan w-1/2" type="text" value="Player One"/>
</div>
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-400">Email</span>
<span className="text-sm text-zinc-500">player@system.arise</span>
</div>
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-400">Height (cm)</span>
<input className="bg-transparent text-right text-sm text-white focus:outline-none focus:text-cyan w-16" id="profile-height" type="number" value="175"/>
</div>
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-400">Weight (kg)</span>
<input className="bg-transparent text-right text-sm text-white focus:outline-none focus:text-cyan w-16" id="profile-weight" type="number" value="70"/>
</div>
<div className="px-5 py-4 flex justify-between items-center">
<span className="text-xs text-zinc-400">Goal</span>
<select className="bg-transparent text-right text-sm text-white focus:outline-none focus:text-cyan dir-rtl appearance-none cursor-pointer" id="profile-goal">
<option value="muscle">Muscle Gain</option>
<option value="fatloss">Fat Loss</option>
<option value="fitness">General Fitness</option>
</select>
</div>
</div>
<div className="glass-card p-5 rounded-2xl">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">System Progression</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-300">Experience (XP)</span>
<span className="text-cyan">150 / 500</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neon to-cyan w-[30%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-void/90 backdrop-blur-xl flex flex-col items-center justify-center text-center opacity-0 pointer-events-none transition-opacity duration-700" id="levelup-modal">
<div className="relative transform scale-90 transition-transform duration-700" id="levelup-content">
<div className="absolute inset-0 bg-cyan blur-[120px] opacity-20"></div>
<h2 className="text-6xl font-light text-white tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]">ARISE</h2>
<div className="flex items-center justify-center gap-4 text-4xl font-thin text-cyan font-mono mt-4">
<span className="opacity-50">01</span>
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="font-normal glow-text">02</span>
</div>
<p className="text-sm text-zinc-400 mt-8 tracking-widest uppercase">System Authority Increased</p>
<div className="mt-12 flex flex-col gap-2">
<span className="text-xs text-cyan animate-pulse">Touch to Dismiss</span>
</div>
</div>
<div className="absolute inset-0 z-10" onclick="closeModal('levelup-modal')"></div>
</div>

<div className="fixed inset-0 z-[60] bg-[#0a0202]/95 backdrop-blur-md flex flex-col items-center justify-center text-center opacity-0 pointer-events-none transition-opacity duration-500" id="penalty-modal">
<div className="absolute inset-0 bg-penalty blur-[150px] opacity-10"></div>
<div className="w-20 h-20 rounded-full border border-penalty text-penalty flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,46,46,0.3)] animate-pulse-slow">
<iconify-icon icon="solar:danger-triangle-linear" width="40"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-penalty tracking-tight mb-2 penalty-glow">PENALTY ZONE</h2>
<p className="text-zinc-400 text-sm max-w-xs mb-8">You have failed to complete the required daily tasks. The System has issued a penalty.</p>
<div className="bg-black/40 border border-penalty/30 p-5 rounded-2xl w-72 mb-8">
<p className="text-white text-sm font-medium">SURVIVAL PROTOCOL</p>
<p className="text-penalty text-xs mt-1">Run 10km OR Survive until timer expires.</p>
</div>
<button className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest px-6 py-3 border border-white/5 rounded-full hover:bg-white/5 transition-colors" onclick="closeModal('penalty-modal')">Accept Punishment</button>
</div>

<div className="fixed top-6 left-1/2 -translate-x-1/2 glass-card px-6 py-3.5 rounded-full flex items-center gap-3 z-[100] translate-y-[-100px] transition-transform duration-500 border border-cyan/20" id="system-toast">
<iconify-icon className="text-cyan animate-spin" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
<span className="text-xs text-white tracking-wide font-medium" id="toast-text">RECALIBRATING...</span>
</div>

<nav className="absolute bottom-0 w-full glass z-50 pb-8 pt-5 px-8 justify-between items-center hidden transition-all duration-500" id="navbar">
<button className="flex flex-col items-center gap-1.5 text-cyan transition-colors group" id="nav-home" onclick="navigateTo('dashboard-screen')">
<iconify-icon icon="solar:widget-2-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium opacity-100 group-hover:text-white">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group" id="nav-quest" onclick="navigateTo('quest-screen')">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium opacity-70 group-hover:opacity-100">Quest</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group" id="nav-profile" onclick="navigateTo('profile-screen')">
<iconify-icon icon="solar:user-circle-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium opacity-70 group-hover:opacity-100">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
