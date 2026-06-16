import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                        for(let i=0; i<9; i++) {
                            document.write(`
                            <div class="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
                                <div class="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="12" cy="12" r="10"/></svg>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
                                </div>
                            </div>
                            `)
                        }
                    


        // Init Icons
        lucide.createIcons();

        // State
        const state = {
            view: 'home',
            scansToday: 0,
            isPro: false,
            xp: 320,
            streak: 12
        };

        // DOM Elements
        const authView = document.getElementById('auth-view');
        const signupForm = document.getElementById('signup-form');
        const verifyState = document.getElementById('verify-state');
        const appShell = document.querySelector('nav'); 
        
        // --- Navigation ---
        function nav(viewName) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
            // Show selected view
            document.getElementById(`view-${viewName}`).classList.remove('hidden');
            
            // Update mobile nav styling
            document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
                btn.classList.remove('text-[#00C853]');
                btn.classList.add('text-zinc-400');
            });
            
            // Highlight current mobile nav
            const iconMap = {'home':0, 'scan':1, 'friends':2, 'achievements':3, 'profile':3}; // simple map
            // Only simple highlighting logic for demo
            
            lucide.createIcons();
        }

        // --- Auth System ---
        function toggleAuthMode() {
            // Simply demo toggle, in real app would swap forms
            alert("Switching between login/signup");
        }

        function handleSignup() {
            const ageCheck = document.getElementById('age-check');
            if(!ageCheck.checked) {
                alert("You must be 16+ to use Calippo.");
                return;
            }
            signupForm.classList.add('hidden');
            verifyState.classList.remove('hidden');
            verifyState.classList.add('fade-in');
        }

        function finishAuth() {
            authView.classList.add('hidden');
            // Show main layout elements
            document.querySelectorAll('nav').forEach(el => el.classList.remove('hidden')); // Logic adjustment for demo structure
        }

        // --- Scan Logic ---
        function triggerScan() {
            if(!state.isPro && state.scansToday >= 2) {
                toggleSubscription(); // Upsell
                return;
            }

            const laser = document.getElementById('scan-laser');
            laser.classList.remove('hidden');
            laser.style.animation = "scan 2s linear infinite";
            
            // Add CSS keyframe for scan in JS
            const styleSheet = document.createElement("style");
            styleSheet.innerText = `@keyframes scan { 0% {top:0} 50% {top:100%} 100% {top:0} }`;
            document.head.appendChild(styleSheet);

            setTimeout(() => {
                laser.classList.add('hidden');
                document.getElementById('scan-result').classList.remove('translate-y-full');
            }, 2500);
        }

        function saveMeal() {
            state.scansToday++;
            alert("Meal Saved! +10 XP");
            document.getElementById('scan-result').classList.add('translate-y-full');
            nav('home');
        }

        function discardScan() {
            document.getElementById('scan-result').classList.add('translate-y-full');
        }

        // --- Spin Wheel ---
        function openSpinWheel() {
            document.getElementById('spin-modal').classList.remove('hidden');
        }
        function closeSpinWheel() {
            document.getElementById('spin-modal').classList.add('hidden');
        }
        function spin() {
            const wheel = document.getElementById('wheel');
            const btn = document.getElementById('spin-btn');
            const resultText = document.getElementById('spin-result-text');
            
            btn.disabled = true;
            btn.innerText = "Spinning...";
            
            // Random rotation between 720 and 1440 degrees
            const deg = Math.floor(720 + Math.random() * 720);
            wheel.style.transform = `rotate(${deg}deg)`;
            
            setTimeout(() => {
                resultText.classList.remove('hidden');
                triggerConfetti();
                btn.innerText = "Come back tomorrow";
            }, 3000);
        }

        // --- Subscription ---
        function toggleSubscription() {
            const modal = document.getElementById('sub-modal');
            if(modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        // --- Utilities ---
        function triggerConfetti() {
            for(let i=0; i<30; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti-piece');
                conf.style.left = Math.random() * 100 + '%';
                conf.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
                conf.style.backgroundColor = ['#00C853', '#FFD600', '#2962FF', '#FF1744'][Math.floor(Math.random()*4)];
                document.body.appendChild(conf);
                setTimeout(() => conf.remove(), 3000);
            }
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="h-full relative flex flex-col md:flex-row max-w-7xl mx-auto bg-white md:shadow-xl md:my-0 lg:my-0 overflow-hidden" id="app">



<section className="flex flex-col fade-in bg-white z-50 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="auth-view">
<div className="w-full max-w-sm space-y-8">
<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00C853]/10 text-[#00C853] mb-4">
<svg className="lucide lucide-citrus w-8 h-8" data-lucide="citrus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"></path><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34"></path><path d="m14 10-5.5 5.5"></path><path d="M14 17.85V10H6.15"></path></svg>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Calippo</h1>
<p className="text-zinc-500 text-sm">Gamified AI Nutrition Tracking</p>
</div>

<div className="space-y-4" id="signup-form">
<div className="space-y-3">
<input className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#00C853]/50 transition-all placeholder:text-zinc-400" placeholder="Username" type="text"/>
<input className="focus:outline-none focus:ring-2 focus:ring-[#00C853]/50 transition-all placeholder:text-zinc-400 text-sm bg-zinc-50 w-full border-zinc-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="Email address" type="email"/>
<input className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#00C853]/50 transition-all placeholder:text-zinc-400" placeholder="Password" type="password"/>
</div>
<label className="flex items-center gap-3 p-3 border border-zinc-100 rounded-lg cursor-pointer hover:bg-zinc-50">
<input className="w-5 h-5 text-[#00C853] rounded border-zinc-300 focus:ring-[#00C853]" id="age-check" type="checkbox"/>
<span className="text-xs text-zinc-600">I confirm I am 16+ years old</span>
</label>
<button className="w-full py-3 bg-[#00C853] hover:bg-[#00BFA5] text-white font-medium rounded-xl shadow-lg shadow-[#00C853]/20 active:scale-95 transition-all text-sm" onclick="handleSignup()">
                        Create Account
                    </button>
<p className="text-center text-xs text-zinc-400">
                        Already have an account? <span className="text-[#00C853] cursor-pointer font-medium hover:underline" onclick="toggleAuthMode()">Log in</span>
</p>
</div>

<div className="hidden text-center space-y-6" id="verify-state">
<div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full mx-auto flex items-center justify-center">
<svg className="lucide lucide-mail w-8 h-8" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight">Check your email</h2>
<p className="text-sm text-zinc-500 mt-2">We sent a verification link. You must verify to access Calippo.</p>
</div>
<button className="w-full py-3 bg-zinc-900 text-white font-medium rounded-xl text-sm" onclick="finishAuth()">
                        I've Verified
                    </button>
</div>
</div>
</section>



<nav className="hidden md:flex w-64 flex-col border-r border-zinc-200 bg-zinc-50/50 p-4 justify-between">
<div className="space-y-6">
<div className="flex items-center gap-2 px-2">
<div className="w-8 h-8 bg-[#00C853] rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-citrus w-5 h-5" data-lucide="citrus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"></path><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34"></path><path d="m14 10-5.5 5.5"></path><path d="M14 17.85V10H6.15"></path></svg>
</div>
<span className="font-semibold tracking-tight text-lg">Calippo</span>
</div>
<div className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg bg-[#00C853]/10 text-[#00C853]" onclick="nav('home')">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Home
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-100" onclick="nav('scan')">
<svg className="lucide lucide-scan-line w-5 h-5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg> Scan Food
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-100" onclick="nav('friends')">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Friends
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-100" onclick="nav('achievements')">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg> Badges
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-100" onclick="nav('profile')">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                    </button>
</div>
</div>
<div className="p-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden">
<img alt="Avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-zinc-900 leading-none">Felix</p>
<p className="text-xs text-zinc-500 mt-1">Lvl 4 • Silver</p>
</div>
</div>
<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#00C853] h-full w-[65%]"></div>
</div>
<p className="text-[10px] text-zinc-400 mt-1 text-right">320/500 XP</p>
</div>
</nav>



<main className="flex-1 relative bg-white overflow-y-auto overflow-x-hidden h-full">

<header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-100 sticky top-0 bg-white/80 backdrop-blur z-20">
<div className="flex items-center gap-2">
<svg className="lucide lucide-citrus w-6 h-6 text-[#00C853]" data-lucide="citrus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"></path><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34"></path><path d="m14 10-5.5 5.5"></path><path d="M14 17.85V10H6.15"></path></svg>
<span className="font-semibold tracking-tight">Calippo</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full border border-orange-100">
<svg className="lucide lucide-flame w-3.5 h-3.5 text-orange-500 fill-orange-500" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-xs font-semibold text-orange-600">12</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200" onclick="nav('profile')">
<img alt="Avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<div className="page-view p-6 pb-24 md:pb-6 space-y-8 fade-in" id="view-home">

<div className="hidden md:flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight">Today's Overview</h2>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 cursor-pointer hover:bg-orange-100 transition-colors" title="Day Streak">
<svg className="lucide lucide-flame w-4 h-4 text-orange-500 fill-orange-500" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-sm font-semibold text-orange-600">12 Day Streak</span>
</div>
<button className="text-xs font-semibold bg-zinc-900 text-white px-3 py-1.5 rounded-full hover:bg-zinc-800" onclick="toggleSubscription()">
                            Upgrade PRO
                        </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Calories</p>
<div className="flex items-end gap-1">
<span className="text-2xl font-semibold tracking-tight text-[#00C853]">1,240</span>
<span className="text-xs text-zinc-400 mb-1">/ 2000</span>
</div>
<div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-[#00C853] h-full w-[62%]"></div>
</div>
</div>
<div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Protein</p>
<div className="flex items-end gap-1">
<span className="text-2xl font-semibold tracking-tight text-blue-600">85g</span>
<span className="text-xs text-zinc-400 mb-1">/ 140g</span>
</div>
<div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-blue-500 h-full w-[60%]"></div>
</div>
</div>
<div className="col-span-2 md:col-span-2 p-4 rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00A844] text-white relative overflow-hidden group cursor-pointer" onclick="nav('scan')">
<div className="relative z-10">
<p className="text-xs font-medium opacity-90 uppercase tracking-wider mb-1">AI Action</p>
<h3 className="text-xl font-semibold tracking-tight">Snap Lunch</h3>
<p className="text-xs opacity-80 mt-1 max-w-[150px]">Capture your meal to track macros instantly.</p>
</div>
<svg className="lucide lucide-camera absolute -bottom-4 -right-4 w-24 h-24 text-white opacity-20 group-hover:scale-110 transition-transform" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Daily Quests</h3>
<span className="text-xs text-zinc-400">Resets in 4h 12m</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 border border-zinc-200 rounded-xl hover:border-[#00C853] transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
<svg className="lucide lucide-utensils w-5 h-5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div>
<p className="text-sm font-semibold">Log 3 Meals</p>
<div className="w-32 bg-zinc-100 h-1.5 rounded-full mt-2">
<div className="bg-yellow-500 h-full w-[66%]"></div>
</div>
</div>
</div>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-400 text-xs font-medium rounded-lg" disabled="">2/3</button>
</div>
<div className="flex items-center justify-between p-4 border border-zinc-200 rounded-xl hover:border-[#00C853] transition-colors group cursor-pointer" onclick="alert('Claimed 20 XP!')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-droplet w-5 h-5" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold">Drink 2L Water</p>
<p className="text-xs text-[#00C853] mt-1 font-medium">Completed!</p>
</div>
</div>
<button className="px-3 py-1.5 bg-[#00C853] text-white text-xs font-medium rounded-lg animate-pulse">Claim XP</button>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900 rounded-2xl text-white relative overflow-hidden">
<div className="relative z-10 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold">Daily Spin Available</h3>
<p className="text-sm text-zinc-400 mt-1">Win badges, XP or Streak Freeze</p>
<button className="mt-4 px-4 py-2 bg-white text-zinc-900 text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors" onclick="openSpinWheel()">
                                Spin Now
                            </button>
</div>
<svg className="lucide lucide-gift w-12 h-12 text-[#00C853]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00C853] blur-[60px] opacity-20"></div>
</div>
</div>

<div className="page-view hidden h-full flex flex-col relative fade-in" id="view-scan">
<div className="absolute top-4 left-4 z-20">
<button className="p-2 bg-black/50 backdrop-blur rounded-full text-white" onclick="nav('home')">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
</div>

<div className="flex-1 bg-zinc-900 relative overflow-hidden flex flex-col items-center justify-center" id="camera-feed">
<img alt="Food" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative">
<div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#00C853] rounded-tl-xl -mt-1 -ml-1"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#00C853] rounded-tr-xl -mt-1 -mr-1"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#00C853] rounded-bl-xl -mb-1 -ml-1"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#00C853] rounded-br-xl -mb-1 -mr-1"></div>

<div className="hidden absolute left-0 right-0 h-0.5 bg-[#00C853] shadow-[0_0_15px_#00C853] top-0" id="scan-laser"></div>
</div>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-4 z-20 w-full px-8">
<div className="bg-black/60 px-4 py-2 rounded-full text-xs text-white backdrop-blur" id="scan-limit-msg">
                            Free Plan: 1/2 Scans used today
                        </div>
<button className="w-16 h-16 rounded-full border-4 border-white bg-white/20 flex items-center justify-center active:scale-90 transition-transform" onclick="triggerScan()">
<div className="w-12 h-12 bg-white rounded-full"></div>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl p-6 transform translate-y-full transition-transform duration-500 shadow-2xl z-30" id="scan-result">
<div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-6"></div>
<div className="text-center mb-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium mb-2">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> AI Confidence: 98%
                        </div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Grilled Salmon Bowl</h2>
</div>
<div className="grid grid-cols-3 gap-3 mb-8">
<div className="text-center p-3 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xl font-bold text-zinc-900">540</p>
<p className="text-[10px] uppercase text-zinc-500 font-medium">kcal</p>
</div>
<div className="text-center p-3 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xl font-bold text-[#00C853]">42g</p>
<p className="text-[10px] uppercase text-zinc-500 font-medium">Protein</p>
</div>
<div className="text-center p-3 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xl font-bold text-orange-500">18g</p>
<p className="text-[10px] uppercase text-zinc-500 font-medium">Fat</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-zinc-600 text-center mb-2">Save this to your daily log?</p>
<button className="w-full py-3.5 bg-[#00C853] text-white font-medium rounded-xl shadow-lg shadow-green-200 active:scale-95 transition-all" onclick="saveMeal()">
                            YES - Save Meal (+10 XP)
                        </button>
<button className="w-full py-3.5 bg-zinc-100 text-zinc-600 font-medium rounded-xl hover:bg-zinc-200 active:scale-95 transition-all" onclick="discardScan()">
                            NO - Retake
                        </button>
</div>
</div>
</div>

<div className="page-view hidden p-6 pb-24 md:pb-6 space-y-6 fade-in" id="view-friends">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Friends &amp; Rivals</h2>
<button className="text-[#00C853] text-sm font-medium hover:underline">Add Friend</button>
</div>

<div className="flex items-end justify-center gap-4 py-4 border-b border-zinc-100 pb-8">

<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full border-2 border-zinc-200 p-0.5">
<img className="rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="text-center">
<p className="text-xs font-bold">Sarah</p>
<p className="text-[10px] text-zinc-500">4,200 XP</p>
</div>
<div className="w-8 h-16 bg-zinc-200 rounded-t-lg flex items-center justify-center text-xs font-bold text-zinc-500">2</div>
</div>

<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-crown w-5 h-5 text-yellow-500 fill-yellow-500 animate-bounce" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<div className="w-20 h-20 rounded-full border-2 border-yellow-400 p-0.5 relative">
<img className="rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"/>
</div>
<div className="text-center">
<p className="text-sm font-bold text-zinc-900">Mike</p>
<p className="text-[10px] text-[#00C853]">5,100 XP</p>
</div>
<div className="w-10 h-24 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t-lg flex items-center justify-center text-lg font-bold text-yellow-800 shadow-lg">1</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full border-2 border-zinc-200 p-0.5">
<img className="rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"/>
</div>
<div className="text-center">
<p className="text-xs font-bold">Jess</p>
<p className="text-[10px] text-zinc-500">3,890 XP</p>
</div>
<div className="w-8 h-12 bg-zinc-100 rounded-t-lg flex items-center justify-center text-xs font-bold text-zinc-400">3</div>
</div>
</div>

<div className="space-y-2">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Your Ranking</p>
<div className="flex items-center gap-4 p-3 bg-white border border-zinc-200 rounded-xl shadow-sm">
<span className="font-bold text-zinc-400 w-6 text-center">4</span>
<div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden">
<img alt="Me" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">You</p>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span>Lvl 4</span>
<span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
<span>320 XP</span>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#00C853]">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="page-view hidden p-6 pb-24 md:pb-6 space-y-6 fade-in" id="view-achievements">
<div className="flex items-center gap-3">
<h2 className="text-2xl font-semibold tracking-tight">Achievements</h2>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md text-xs font-bold">8/32</span>
</div>
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-200 text-center hover:shadow-md transition-all cursor-pointer">
<div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
<svg className="lucide lucide-scan-line w-7 h-7" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">First Scan</p>
<p className="text-[10px] text-zinc-500 mt-1">Oct 24</p>
</div>
</div>

<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-200 text-center hover:shadow-md transition-all cursor-pointer">
<div className="w-14 h-14 bg-gradient-to-br from-[#00C853] to-[#00A844] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
<svg className="lucide lucide-flame w-7 h-7" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">3-Day Streak</p>
<p className="text-[10px] text-zinc-500 mt-1">Oct 27</p>
</div>
</div>

<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="lucide lucide-dumbbell w-7 h-7" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Protein Beast</p>
<p className="text-[10px] text-zinc-400 mt-1">Hit 150g Protein</p>
</div>
</div>


<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-center opacity-40">
<div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 leading-tight">Locked</p>
</div>
</div>
</div>
</div>

<div className="page-view hidden p-6 pb-24 md:pb-6 space-y-8 fade-in" id="view-profile">

<div className="flex flex-col items-center">
<div className="relative group">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-zinc-100">
<img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<button className="absolute bottom-0 right-0 p-2 bg-zinc-900 text-white rounded-full shadow-md hover:bg-[#00C853] transition-colors">
<svg className="lucide lucide-shirt w-4 h-4" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</button>
</div>
<h2 className="text-2xl font-bold mt-4">Felix</h2>
<p className="text-zinc-500 text-sm">Joined Oct 2023</p>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
<p className="text-2xl font-bold text-zinc-900">12</p>
<p className="text-xs text-zinc-500 uppercase font-medium">Day Streak</p>
</div>
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
<p className="text-2xl font-bold text-zinc-900">42</p>
<p className="text-xs text-zinc-500 uppercase font-medium">Meals Logged</p>
</div>
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
<p className="text-2xl font-bold text-zinc-900">8</p>
<p className="text-xs text-zinc-500 uppercase font-medium">Badges</p>
</div>
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
<p className="text-2xl font-bold text-zinc-900">Lvl 4</p>
<p className="text-xs text-zinc-500 uppercase font-medium">Silver League</p>
</div>
</div>

<div className="space-y-1 bg-white rounded-xl border border-zinc-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 text-left border-b border-zinc-100" onclick="toggleSubscription()">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-yellow-100 text-yellow-600 rounded-md"><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<span className="text-sm font-medium">Upgrade to Pro</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 text-left border-b border-zinc-100">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-zinc-100 text-zinc-600 rounded-md"><svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div>
<span className="text-sm font-medium">Notifications</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 text-left text-red-500" onclick="window.location.reload()">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-red-50 text-red-500 rounded-md"><svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg></div>
<span className="text-sm font-medium">Log Out</span>
</div>
</button>
</div>
</div>
</main>



<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 flex justify-around p-3 pb-6 z-40">
<button className="mobile-nav-btn flex flex-col items-center gap-1 text-[#00C853]" onclick="nav('home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="mobile-nav-btn flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600" onclick="nav('scan')">
<svg className="lucide lucide-scan-line w-6 h-6" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<span className="text-[10px] font-medium">Scan</span>
</button>
<button className="mobile-nav-btn flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600" onclick="nav('friends')">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">Friends</span>
</button>
<button className="mobile-nav-btn flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600" onclick="nav('achievements')">
<svg className="lucide lucide-trophy w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-[10px] font-medium">Badges</span>
</button>
</nav>




<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-6" id="spin-modal">
<div className="bg-white w-full max-w-sm rounded-3xl p-6 text-center relative overflow-hidden">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900" onclick="closeSpinWheel()"><svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
<h3 className="text-xl font-bold mb-6">Daily Spin</h3>
<div className="relative w-64 h-64 mx-auto mb-8">
<div className="w-full h-full rounded-full border-4 border-[#00C853] relative overflow-hidden spin-wheel" id="wheel" style={{background: 'conic-gradient(#00C853 0% 25%, #4ade80 25% 50%, #22c55e 50% 75%, #16a34a 75% 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-lg drop-shadow-md">?</span>
</div>
</div>
<div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-6 bg-zinc-900 rounded-b-lg z-10"></div>
</div>
<button className="w-full py-3 bg-zinc-900 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform" id="spin-btn" onclick="spin()">
                    SPIN NOW
                </button>
<div className="hidden mt-4 text-[#00C853] font-bold text-lg animate-bounce" id="spin-result-text">
                    +50 XP Won!
                </div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4" id="sub-modal">
<div className="bg-white w-full max-w-md rounded-3xl p-6 relative">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900" onclick="toggleSubscription()"><svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
<div className="text-center mb-6">
<span className="bg-[#00C853]/10 text-[#00C853] px-3 py-1 rounded-full text-xs font-bold tracking-wide">PRO PLAN</span>
<h2 className="text-2xl font-bold mt-2">Unlock Your Full Potential</h2>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
<svg className="lucide lucide-infinity w-5 h-5 text-[#00C853]" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="text-sm font-medium">Unlimited Food Scans</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
<svg className="lucide lucide-users w-5 h-5 text-[#00C853]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Unlimited Friends</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
<svg className="lucide lucide-zap w-5 h-5 text-[#00C853]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium">2x XP Multiplier</span>
</div>
<div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
<svg className="lucide lucide-ban w-5 h-5 text-[#00C853]" data-lucide="ban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.929 4.929 19.07 19.071"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium">No Ads</span>
</div>
</div>
<button className="w-full py-4 bg-[#00C853] hover:bg-[#00BFA5] text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all mb-3">
                    Go PRO for ₹99/mo
                </button>
<p className="text-center text-xs text-zinc-400">Cancel anytime. Secure payment.</p>
</div>
</div>
</div>





    </>
  );
}
