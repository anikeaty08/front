import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const I18N = {
            en: {
                app_title: "EYS Protocol",
                online_status: "128k Live",
                hero_title: "MOVE FIRST.\nSCROLL LATER.",
                hero_sub: "Complete a challenge to unlock your social media. Build discipline before dopamine.",
                welcome_back: "Welcome Back",
                current_level: "Level 4",
                rank_beginner: "Vanguard",
                xp_progress: "XP Progress",
                todays_challenge: "Daily Protocol",
                lock_status: "Access Restrictions",
                start_button: "Initialize Protocol",
                how_it_works: "How it Works",
                access_granted: "Access Granted",
                available_protocols: "Protocol Library",
                protocol_cleared: "Protocol Cleared",
                rewards_gained: "Rewards Deposited"
            },
            fr: {
                app_title: "Protocole EYS",
                online_status: "128k En Ligne",
                hero_title: "BOUGEZ D'ABORD.\nSCROLLEZ APRÈS.",
                hero_sub: "Relevez un défi pour débloquer vos réseaux. La discipline avant la dopamine.",
                welcome_back: "Bon Retour",
                current_level: "Niveau 4",
                rank_beginner: "Avant-garde",
                xp_progress: "Progression XP",
                todays_challenge: "Protocole du Jour",
                lock_status: "Restrictions d'Accès",
                start_button: "Démarrer le Défi",
                how_it_works: "Comment ça Marche",
                access_granted: "Accès Débloqué",
                available_protocols: "Bibliothèque",
                protocol_cleared: "Protocole Terminé",
                rewards_gained: "Récompenses Déposées"
            }
        };

        let state = {
            xp: 320,
            streak: 3,
            unlockedUntil: null,
            lang: 'en'
        };

        let currentReps = 0;
        let stream = null;
        const TARGET = 25;

        function init() {
            loadState();
            updateUI();
            setInterval(checkLockStatus, 1000);
        }

        function toggleLanguage() {
            state.lang = state.lang === 'en' ? 'fr' : 'en';
            document.getElementById('lang-label').innerText = state.lang.toUpperCase();
            applyTranslations();
            saveState();
        }

        function applyTranslations() {
            const dict = I18N[state.lang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) el.innerText = dict[key];
            });
        }

        function loadState() {
            const saved = localStorage.getItem('eys_premium_state');
            if (saved) state = { ...state, ...JSON.parse(saved) };
            applyTranslations();
            document.getElementById('lang-label').innerText = state.lang.toUpperCase();
        }

        function saveState() {
            localStorage.setItem('eys_premium_state', JSON.stringify(state));
        }

        function switchView(viewName) {
            document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
            document.getElementById(`view-${viewName}`).classList.remove('hidden');
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.replace('text-blue-500', 'text-slate-500'));
            event.currentTarget.classList.replace('text-slate-500', 'text-blue-500');
            window.scrollTo(0, 0);
        }

        function updateUI() {
            document.getElementById('xp-val').innerText = state.xp;
            document.getElementById('xp-bar').style.width = `${(state.xp / 500) * 100}%`;
            document.getElementById('streak-val').innerText = state.streak;
        }

        function checkLockStatus() {
            const now = Date.now();
            const active = state.unlockedUntil && state.unlockedUntil > now;
            const badge = document.getElementById('unlock-badge');
            const msg = document.getElementById('lock-msg');
            const timer = document.getElementById('timer-display');
            
            document.querySelectorAll('.social-lock').forEach(el => {
                if (active) {
                    el.classList.remove('opacity-40', 'grayscale');
                    el.querySelector('iconify-icon:last-child').icon = "solar:lock-unlocked-bold";
                    el.querySelector('iconify-icon:last-child').classList.replace('text-slate-500', 'text-green-500');
                } else {
                    el.classList.add('opacity-40', 'grayscale');
                    el.querySelector('iconify-icon:last-child').icon = "solar:lock-password-bold";
                }
            });

            if (active) {
                badge.classList.remove('hidden');
                msg.classList.add('hidden');
                timer.classList.remove('hidden');
                const diff = state.unlockedUntil - now;
                const m = Math.floor(diff / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                timer.innerText = `${m}:${s.toString().padStart(2, '0')}`;
            } else {
                badge.classList.add('hidden');
                msg.classList.remove('hidden');
                timer.classList.add('hidden');
            }
        }

        async function startChallenge() {
            currentReps = 0;
            document.getElementById('rep-count').innerText = "0";
            updateRing(0);
            document.getElementById('challenge-screen').classList.remove('hidden');
            
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                document.getElementById('webcam').srcObject = stream;
            } catch (e) {
                document.getElementById('ai-status').innerText = "VIRTUAL MODE";
            }
        }

        function updateRing(pct) {
            const ring = document.getElementById('rep-progress-ring');
            const offset = 276 - (pct * 276);
            ring.style.strokeDashoffset = offset;
        }

        function simulateRep() {
            if (currentReps < TARGET) {
                currentReps++;
                document.getElementById('rep-count').innerText = currentReps;
                updateRing(currentReps / TARGET);
                
                const coach = document.getElementById('coach-bubble');
                if (currentReps === 5) coach.innerText = "Solid form, keep it up!";
                if (currentReps === 15) coach.innerText = "Feel the burn!";
                if (currentReps === 20) coach.innerText = "Almost at the finish line!";

                if (currentReps >= TARGET) {
                    state.xp += 50;
                    state.unlockedUntil = Date.now() + (30 * 60 * 1000);
                    saveState();
                    updateUI();
                    setTimeout(() => {
                        exitChallenge();
                        document.getElementById('reward-modal').classList.remove('hidden');
                    }, 500);
                }
            }
        }

        function closeReward() {
            document.getElementById('reward-modal').classList.add('hidden');
        }

        function exitChallenge() {
            if (stream) stream.getTracks().forEach(t => t.stop());
            document.getElementById('challenge-screen').classList.add('hidden');
        }

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
</div>

<header className="sticky top-0 z-50 w-full px-5 py-4 glass border-b border-white/5">
<div className="max-w-xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">E</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white tracking-tight" data-i18n="app_title">EYS Protocol</span>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 glow-pulse"></span>
<span className="text-[0.6rem] font-medium text-slate-500 uppercase tracking-widest" data-i18n="online_status">128k Live</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="glass h-8 px-3 rounded-lg text-[0.65rem] font-bold text-slate-400 hover:text-white transition-all active:scale-95" onclick="toggleLanguage()">
<span id="lang-label">EN</span>
</button>
<div className="flex items-center gap-1.5 glass h-8 px-3 rounded-full border-orange-500/20">
<span className="text-xs">🔥</span>
<span className="text-[0.7rem] font-semibold text-white" id="streak-val">3</span>
</div>
</div>
</div>
</header>
<main className="max-w-xl mx-auto px-5 pt-8 space-y-10">

<div className="view space-y-10 reveal" id="view-home">

<section className="text-center space-y-3 py-4">
<h1 className="text-4xl font-semibold text-white tracking-tighter italic leading-tight" data-i18n="hero_title">
                    MOVE FIRST.<br/>SCROLL LATER.
                </h1>
<p className="text-sm text-slate-400 max-w-[280px] mx-auto leading-relaxed" data-i18n="hero_sub">
                    Complete a challenge to unlock your social media. Build discipline before dopamine.
                </p>
</section>

<section className="glass p-5 rounded-[2rem] relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -z-10"></div>
<div className="flex justify-between items-end mb-4">
<div>
<h2 className="text-[0.6rem] font-bold text-blue-500 uppercase tracking-[0.2em] mb-1" data-i18n="welcome_back">Welcome Back</h2>
<p className="text-xl font-semibold text-white tracking-tight italic">Agent Alpha</p>
</div>
<div className="text-right">
<p className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest" data-i18n="current_level">Level 4</p>
<p className="text-xs font-medium text-slate-300" data-i18n="rank_beginner">Vanguard</p>
</div>
</div>
<div className="space-y-2.5">
<div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-wider">
<span className="text-slate-500" data-i18n="xp_progress">XP Progress</span>
<span className="text-blue-400"><span id="xp-val">320</span> / 500</span>
</div>
<div className="h-2.5 w-full bg-slate-900/50 rounded-full overflow-hidden border border-white/5 p-0.5">
<div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(59,130,246,0.4)]" id="xp-bar" style={{width: '64%'}}></div>
</div>
</div>
</section>

<section className="grid grid-cols-3 gap-3">
<div className="glass p-4 rounded-2xl text-center">
<p className="text-[0.55rem] font-bold text-slate-500 uppercase tracking-widest mb-1">Total XP</p>
<p className="text-lg font-semibold text-white tracking-tighter">1,840</p>
</div>
<div className="glass p-4 rounded-2xl text-center">
<p className="text-[0.55rem] font-bold text-slate-500 uppercase tracking-widest mb-1">Cleared</p>
<p className="text-lg font-semibold text-white tracking-tighter">42</p>
</div>
<div className="glass p-4 rounded-2xl text-center">
<p className="text-[0.55rem] font-bold text-slate-500 uppercase tracking-widest mb-1">Best</p>
<p className="text-lg font-semibold text-white tracking-tighter">12d</p>
</div>
</section>

<section className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative glass p-7 rounded-[2.5rem] space-y-7">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="text-[0.6rem] font-bold text-blue-500 uppercase tracking-[0.2em]" data-i18n="todays_challenge">Daily Protocol</span>
<h3 className="text-2xl text-white font-semibold tracking-tighter italic">25 Deep Squats</h3>
</div>
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-3xl text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" icon="solar:fire-bold"></iconify-icon>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<p className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest" data-i18n="lock_status">Access Restrictions</p>
<span className="hidden px-2 py-0.5 rounded-md bg-green-500/10 text-green-500 text-[0.6rem] font-bold uppercase" data-i18n="access_granted" id="unlock-badge">Unlocked</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="glass p-4 rounded-2xl flex flex-col items-center gap-2 opacity-40 grayscale transition-all duration-500 social-lock">
<iconify-icon className="text-2xl" icon="solar:videocamera-add-linear"></iconify-icon>
<iconify-icon className="text-[0.65rem] text-slate-500" icon="solar:lock-password-bold"></iconify-icon>
</div>
<div className="glass p-4 rounded-2xl flex flex-col items-center gap-2 opacity-40 grayscale transition-all duration-500 social-lock">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-[0.65rem] text-slate-500" icon="solar:lock-password-bold"></iconify-icon>
</div>
<div className="glass p-4 rounded-2xl flex flex-col items-center gap-2 opacity-40 grayscale transition-all duration-500 social-lock">
<iconify-icon className="text-2xl" icon="solar:play-linear"></iconify-icon>
<iconify-icon className="text-[0.65rem] text-slate-500" icon="solar:lock-password-bold"></iconify-icon>
</div>
</div>
<p className="text-[0.65rem] text-center text-slate-500 font-medium italic" id="lock-msg">Complete protocol to unlock 30m scroll time.</p>
<div className="hidden text-center text-blue-400 text-sm font-bold tracking-[0.2em] font-mono" id="timer-display">30:00</div>
</div>
<button className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-xl shadow-blue-600/25 active:scale-[0.97] flex items-center justify-center gap-3 uppercase tracking-widest" onclick="startChallenge()">
<iconify-icon className="text-xl" icon="solar:play-circle-bold"></iconify-icon>
<span data-i18n="start_button">Initialize Protocol</span>
</button>
</div>
</section>

<section className="space-y-5">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]" data-i18n="how_it_works">How it Works</h4>
<div className="grid grid-cols-1 gap-4">
<div className="flex gap-5 items-start p-4 glass rounded-2xl">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">1</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">Physical Verification</p>
<p className="text-xs text-slate-500 leading-relaxed">AI analyzes your form via camera to ensure authentic effort.</p>
</div>
</div>
<div className="flex gap-5 items-start p-4 glass rounded-2xl">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold shrink-0">2</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">Dopamine Reward</p>
<p className="text-xs text-slate-500 leading-relaxed">Earn 30 minutes of unrestricted social media access upon completion.</p>
</div>
</div>
</div>
</section>
</div>

<div className="view hidden space-y-6 reveal" id="view-challenges">
<h2 className="text-2xl text-white font-semibold tracking-tighter italic" data-i18n="available_protocols">Protocol Library</h2>
<div className="space-y-4">
<div className="glass p-5 rounded-3xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon className="text-2xl" icon="solar:walking-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Diamond Pushups</p>
<p className="text-[0.65rem] text-slate-500 uppercase font-bold tracking-widest">+80 XP • 15 Reps</p>
</div>
</div>
<iconify-icon className="text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="view hidden space-y-8 reveal" id="view-squads">
<div className="flex justify-between items-center">
<h2 className="text-2xl text-white font-semibold tracking-tighter italic">Active Squads</h2>
<button className="text-blue-500 text-xs font-bold uppercase tracking-widest">+ Create</button>
</div>
<div className="space-y-4">
<div className="glass p-5 rounded-[2rem] space-y-4 border-l-4 border-blue-500">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white">Morning Discipline</h3>
<p className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-widest">1,204 Operatives</p>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-400 flex items-center justify-center text-[0.6rem] font-bold text-white">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center text-[0.6rem] font-bold text-white">MK</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[0.6rem] font-bold text-white">+1k</div>
</div>
</div>
<div className="bg-slate-950/40 p-3 rounded-xl border border-white/5 italic text-xs text-slate-400">
                        "Just cleared 50 squats! Day 12 streak alive." — @lucas_flex
                    </div>
</div>
</div>
<section className="space-y-4">
<p className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.2em]">Top Agents</p>
<div className="glass rounded-3xl overflow-hidden divide-y divide-white/5">
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-blue-500 w-4">1</span>
<div className="w-8 h-8 rounded-lg bg-slate-800"></div>
<span className="text-sm font-medium text-white">Agent Alex</span>
</div>
<span className="text-xs font-bold text-slate-400 tracking-tighter">5,200 XP</span>
</div>
<div className="flex items-center justify-between p-4 bg-blue-500/5">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-slate-500 w-4">3</span>
<div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30"></div>
<span className="text-sm font-semibold text-white italic">You</span>
</div>
<span className="text-xs font-bold text-blue-400 tracking-tighter">1,840 XP</span>
</div>
</div>
</section>
</div>

<div className="view hidden space-y-8 reveal" id="view-shop">
<header>
<h2 className="text-2xl text-white font-semibold tracking-tighter italic">Protocol Store</h2>
<div className="flex items-center gap-2 mt-2">
<iconify-icon className="text-blue-500" icon="solar:stars-bold"></iconify-icon>
<span className="text-sm font-bold text-white">1,840 <span className="text-slate-500 font-medium">Credits</span></span>
</div>
</header>
<div className="grid grid-cols-2 gap-4">
<div className="glass p-5 rounded-3xl space-y-4 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:clock-circle-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white italic">Extra Time</p>
<p className="text-[0.6rem] text-slate-500 font-bold uppercase tracking-widest">+15m Unlock</p>
</div>
<button className="w-full py-2.5 rounded-xl bg-slate-800 text-[0.65rem] font-bold text-white uppercase tracking-widest">500 XP</button>
</div>
<div className="glass p-5 rounded-3xl space-y-4 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon className="text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white italic">Streak Shield</p>
<p className="text-[0.6rem] text-slate-500 font-bold uppercase tracking-widest">Prevent Reset</p>
</div>
<button className="w-full py-2.5 rounded-xl bg-slate-800 text-[0.65rem] font-bold text-white uppercase tracking-widest">1200 XP</button>
</div>
</div>
</div>

<div className="view hidden space-y-10 reveal" id="view-profile">
<header className="flex items-center gap-6">
<div className="relative">
<div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30 flex items-center justify-center text-4xl shadow-2xl shadow-blue-500/10">👤</div>
<div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl text-yellow-500" icon="solar:medal-ribbon-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h2 className="text-2xl text-white font-semibold tracking-tighter italic leading-none">Agent Alpha</h2>
<p className="text-xs text-slate-500 font-medium">Operative since Q1 2024</p>
<div className="flex gap-2 pt-2">
<span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[0.55rem] font-bold text-blue-500 uppercase tracking-widest">Pro Agent</span>
<span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[0.55rem] font-bold text-emerald-500 uppercase tracking-widest">Top 1%</span>
</div>
</div>
</header>
<section className="space-y-4">
<p className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.2em]">Achievements</p>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
<div className="min-w-[90px] aspect-square rounded-3xl glass flex flex-col items-center justify-center gap-2 group transition-all">
<iconify-icon className="text-2xl text-orange-500 drop-shadow-lg" icon="solar:fire-bold"></iconify-icon>
<span className="text-[0.55rem] font-bold uppercase text-center text-slate-400">7 Day<br/>Streak</span>
</div>
<div className="min-w-[90px] aspect-square rounded-3xl glass flex flex-col items-center justify-center gap-2 border-blue-500/30 bg-blue-500/5">
<iconify-icon className="text-2xl text-blue-400" icon="solar:crown-minimalistic-bold"></iconify-icon>
<span className="text-[0.55rem] font-bold uppercase text-center text-blue-400">Protocol<br/>Master</span>
</div>
<div className="min-w-[90px] aspect-square rounded-3xl glass flex flex-col items-center justify-center gap-2 opacity-30">
<iconify-icon className="text-2xl" icon="solar:stars-line-duotone"></iconify-icon>
<span className="text-[0.55rem] font-bold uppercase text-center">Level 10<br/>Vanguard</span>
</div>
</div>
</section>
<section className="glass p-6 rounded-[2.5rem] space-y-6">
<p className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.2em]">Activity Map</p>
<div className="contribution-grid">

<div className="contribution-day bg-slate-900/50"></div>
<div className="contribution-day bg-blue-900/40"></div>
<div className="contribution-day bg-blue-700/60"></div>
<div className="contribution-day bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="contribution-day bg-blue-400/80"></div>
<div className="contribution-day bg-slate-900/50"></div>
<div className="contribution-day bg-slate-900/50"></div>
<div className="contribution-day bg-blue-600"></div>
<div className="contribution-day bg-blue-300"></div>

</div>
<div className="flex justify-between items-center text-[0.6rem] font-bold text-slate-600 uppercase">
<span>Low Effort</span>
<span>Max Discipline</span>
</div>
</section>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5 px-6 pb-8 pt-4">
<div className="max-w-xl mx-auto flex items-center justify-between">
<button className="nav-btn flex flex-col items-center gap-1.5 text-blue-500 transition-all duration-300" onclick="switchView('home')">
<iconify-icon className="text-2xl" icon="solar:home-2-bold"></iconify-icon>
<span className="text-[0.5rem] font-bold uppercase tracking-widest">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-500 transition-all duration-300" onclick="switchView('challenges')">
<iconify-icon className="text-2xl" icon="solar:notebook-bold"></iconify-icon>
<span className="text-[0.5rem] font-bold uppercase tracking-widest">Tests</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-500 transition-all duration-300" onclick="switchView('squads')">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-bold"></iconify-icon>
<span className="text-[0.5rem] font-bold uppercase tracking-widest">Squads</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-500 transition-all duration-300" onclick="switchView('shop')">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-bold"></iconify-icon>
<span className="text-[0.5rem] font-bold uppercase tracking-widest">Shop</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 text-slate-500 transition-all duration-300" onclick="switchView('profile')">
<iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon>
<span className="text-[0.5rem] font-bold uppercase tracking-widest">Me</span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[100] bg-slate-950 hidden flex flex-col animate-reveal" id="challenge-screen">
<div className="relative flex-1 bg-black overflow-hidden">
<video autoplay="" className="video-flip w-full h-full object-cover opacity-60" id="webcam" muted="" playsinline=""></video>

<div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
<div className="flex justify-between items-start">
<button className="pointer-events-auto w-12 h-12 rounded-2xl glass flex items-center justify-center transition-active active:scale-90" onclick="exitChallenge()">
<iconify-icon className="text-2xl text-white" icon="solar:close-circle-bold"></iconify-icon>
</button>
<div className="glass p-5 rounded-[2rem] flex flex-col items-center shadow-2xl">
<span className="text-[0.6rem] text-blue-400 font-bold uppercase tracking-[0.2em] mb-2 glow-pulse" id="ai-status">System Active</span>
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full">
<circle className="text-slate-800" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-blue-500 transition-all duration-500" cx="48" cy="48" fill="transparent" id="rep-progress-ring" r="44" stroke="currentColor" stroke-dasharray="276" stroke-dashoffset="276" strokeLinecap="round" strokeWidth="4" style={{transform: 'rotate(-90deg)', transformOrigin: 'center'}}></circle>
</svg>
<span className="text-4xl text-white font-semibold tracking-tighter italic" id="rep-count">0</span>
</div>
<span className="text-[0.6rem] text-slate-500 font-bold uppercase mt-2 tracking-widest">Target 25</span>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-20 h-20 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
<div className="coach-float p-4 rounded-3xl glass border-blue-500/40">
<iconify-icon className="text-4xl text-blue-500" icon="solar:mask-hannya-bold"></iconify-icon>
</div>
<div className="absolute -top-12 glass px-4 py-2 rounded-2xl min-w-[140px] text-center border-blue-500/30">
<p className="text-[0.65rem] text-white font-semibold italic" id="coach-bubble">Ready when you are.</p>
</div>
</div>
</div>
<div className="pb-8 text-center">
<p className="text-[0.6rem] text-slate-500 font-bold uppercase tracking-[0.4em]">Deep Squat Protocol</p>
</div>
</div>
</div>
<div className="p-8 pb-12 glass border-t border-white/10">
<button className="w-full py-6 rounded-3xl bg-white text-slate-950 font-bold uppercase tracking-widest text-[0.7rem] transition-all active:scale-95 shadow-2xl shadow-white/10" onclick="simulateRep()">
                Simulate Detection
            </button>
</div>
</div>

<div className="fixed inset-0 z-[110] bg-slate-950/90 backdrop-blur-2xl hidden flex items-center justify-center p-6" id="reward-modal">
<div className="glass p-8 rounded-[3rem] w-full max-w-sm space-y-8 text-center border-blue-500/30 shadow-2xl shadow-blue-500/20 reveal">
<div className="relative w-28 h-28 mx-auto">
<div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
<iconify-icon className="text-8xl text-blue-500 relative z-10 animate-bounce" icon="solar:box-minimalistic-bold"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-3xl font-semibold text-white tracking-tighter italic" data-i18n="protocol_cleared">Protocol Cleared</h3>
<p className="text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed" data-i18n="rewards_gained">Your social media access has been restored for 30 minutes.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="glass py-4 rounded-2xl bg-white/5">
<p className="text-[0.55rem] font-bold text-slate-500 uppercase mb-1">XP Earned</p>
<p className="text-xl font-bold text-blue-400">+50</p>
</div>
<div className="glass py-4 rounded-2xl bg-white/5">
<p className="text-[0.55rem] font-bold text-slate-500 uppercase mb-1">Time Grant</p>
<p className="text-xl font-bold text-green-400">30m</p>
</div>
</div>
<button className="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-bold uppercase text-[0.7rem] tracking-widest shadow-xl shadow-blue-600/20 transition-active active:scale-95" onclick="closeReward()">Return to Base</button>
</div>
</div>


    </>
  );
}
