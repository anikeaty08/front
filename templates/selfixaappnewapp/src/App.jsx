import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let selectedProblem = "";
        
        // Onboarding Logic
        function selectProblem(problem) {
            selectedProblem = problem;
            processProblem(problem);
        }

        function submitCustomProblem() {
            const input = document.getElementById('custom-problem');
            if(input.value.trim() !== "") {
                selectedProblem = input.value;
                processProblem(input.value);
            }
        }

        function processProblem(text) {
            document.getElementById('onboard-step-1').classList.add('hidden');
            document.getElementById('onboard-step-2').classList.remove('hidden');
            document.getElementById('onboard-step-2').classList.add('flex');
            
            const responseText = document.getElementById('ai-response-text');
            responseText.innerHTML = "";
            const msg = `Got it. We'll focus on <span class="text-purple-500 font-bold">${text}</span>. Let's break it down into daily actions and build your streak.`;
            
            setTimeout(() => {
                responseText.innerHTML = msg;
            }, 800);
        }

        function finishOnboarding() {
            document.getElementById('screen-onboarding').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('screen-onboarding').classList.add('hidden');
                document.getElementById('screen-auth').classList.remove('hidden');
                document.getElementById('screen-auth').classList.add('flex');
            }, 700);
        }

        function enterApp() {
            document.getElementById('screen-auth').classList.add('hidden');
            const main = document.getElementById('screen-main');
            main.classList.remove('hidden');
            void main.offsetWidth; 
            main.style.opacity = '1';
        }

        // Tab Switching Logic
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');

            const titles = { 'feed': 'Feed', 'ai': 'Workspace', 'profile': 'Profile', 'settings': 'Settings' };
            document.getElementById('header-title').innerText = titles[tabName];

            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-slate-900', 'dark:text-white');
                btn.classList.add('text-slate-400');
            });
            
            const activeBtn = document.querySelector(`button[onclick="switchTab('${tabName}')"]`);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-400');
                activeBtn.classList.add('text-slate-900', 'dark:text-white');
            }
        }

        // Task Toggle Logic
        function toggleTask(element) {
            const checkbox = element.querySelector('.checkbox-ui');
            const icon = checkbox.querySelector('iconify-icon');
            const text = element.querySelector('p');

            if (checkbox.classList.contains('bg-green-500')) {
                // Uncheck
                checkbox.classList.remove('bg-green-500', 'border-green-500');
                checkbox.classList.add('border-slate-300', 'dark:border-blue-500/30');
                icon.classList.add('opacity-0');
                text.classList.remove('line-through', 'text-slate-400');
                text.classList.add('text-slate-800', 'dark:text-slate-200');
            } else {
                // Check
                checkbox.classList.remove('border-slate-300', 'dark:border-blue-500/30');
                checkbox.classList.add('bg-green-500', 'border-green-500');
                icon.classList.remove('opacity-0');
                text.classList.add('line-through', 'text-slate-400');
                text.classList.remove('text-slate-800', 'dark:text-slate-200');
                
                // Visual scale feedback
                element.classList.add('scale-[0.98]');
                setTimeout(() => element.classList.remove('scale-[0.98]'), 150);
            }
        }

        // Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeToggle.checked = true;
            html.classList.add('dark');
        }

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-[#09090b] dark:to-[#09090b]"></div>

<div className="w-full max-w-md h-full relative flex flex-col shadow-2xl overflow-hidden z-10 glass-card rounded-none sm:rounded-3xl border-0 sm:border" id="app-container">

<div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-8 dark:bg-[#09090b]/95 bg-white/95 backdrop-blur-xl transition-opacity duration-700 hidden" id="screen-onboarding" style={{opacity: '0'}}>

<div className="mb-12 animate-enter text-3xl flex items-center gap-2 font-geist font-semibold tracking-tight">
<div className="w-10 h-10 dark:bg-white rounded-xl flex items-center justify-center dark:text-black bg-gray-900 text-white shadow-lg">
<span className="text-xl font-bold tracking-tight font-geist">S</span>
</div>
                Selfix
            </div>

<div className="w-full animate-enter hidden" id="onboard-step-1" style={{animationDelay: '0.1s'}}>
<h1 className="text-2xl text-center mb-8 leading-snug font-geist font-semibold tracking-tight">
                    What is the <span className="text-purple-500">ONE problem</span> you want to fix right now?
                </h1>
<div className="space-y-4 mb-8">
<button className="w-full py-4 px-6 rounded-2xl btn-glass text-left flex justify-between items-center group" onclick="selectProblem('Procrastination')">
<span className="font-semibold tracking-tight font-geist">Procrastination</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full py-4 px-6 rounded-2xl btn-glass text-left flex justify-between items-center group" onclick="selectProblem('Fitness')">
<span className="font-semibold tracking-tight font-geist">Physical Fitness</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full py-4 px-6 rounded-2xl btn-glass text-left flex justify-between items-center group" onclick="selectProblem('Anxiety')">
<span className="font-semibold tracking-tight font-geist">Anxiety &amp; Stress</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="relative group">
<input className="w-full btn-glass rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-gray-400 bg-transparent" id="custom-problem" placeholder="Or type your own..." type="text"/>
<button className="absolute right-2 top-2 bottom-2 dark:bg-white dark:text-black px-4 rounded-lg text-xs hover:opacity-90 transition-opacity font-semibold tracking-tight font-geist bg-gray-900 text-white shadow-md" onclick="submitCustomProblem()">
                        Fix It
                    </button>
</div>
</div>

<div className="w-full flex-col items-center flex hidden" id="onboard-step-2">
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-enter ring-4 ring-white/10">
<iconify-icon className="text-2xl text-white" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
<div className="glass-card p-8 rounded-3xl w-full mb-8 animate-enter relative overflow-hidden text-center">
<p className="text-lg dark:text-gray-200 leading-relaxed font-medium tracking-tight font-geist text-gray-800" id="ai-response-text">
                        Got it. We'll focus on <span className="text-purple-500 font-bold">Procrastination</span>. Let's break it down.
                    </p>
<span className="absolute bottom-6 right-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
</div>
<button className="w-full dark:bg-white dark:text-black py-4 rounded-2xl text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 animate-enter font-bold tracking-tight font-geist bg-gray-900 text-white flex items-center justify-center gap-2" onclick="finishOnboarding()" style={{animationDelay: '0.5s'}}>
                    Build My Plan
                    <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 z-40 flex-col justify-end p-8 dark:bg-[#09090b] flex hidden bg-white" id="screen-auth">
<div className="flex-1 flex flex-col justify-center items-center">
<div className="w-20 h-20 dark:bg-white rounded-2xl flex items-center justify-center dark:text-black mb-6 shadow-2xl bg-gray-900 text-white animate-enter">
<span className="text-4xl font-bold tracking-tight font-geist">S</span>
</div>
<h2 className="text-3xl mb-3 font-geist font-semibold tracking-tight animate-enter" style={{animationDelay: '0.1s'}}>Welcome to Selfix</h2>
<p className="text-gray-500 text-base mb-12 font-medium tracking-tight font-geist animate-enter" style={{animationDelay: '0.2s'}}>Master your discipline.</p>
<div className="w-full space-y-4 animate-enter" style={{animationDelay: '0.3s'}}>
<button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm transition-all active:scale-95 font-semibold tracking-tight font-geist bg-black text-white hover:bg-gray-800 shadow-lg" onclick="enterApp()">
<iconify-icon className="text-lg" icon="lucide:apple"></iconify-icon>
                        Continue with Apple
                    </button>
<button className="w-full flex items-center justify-center gap-3 btn-glass dark:text-white py-4 rounded-xl text-sm transition-all active:scale-95 font-semibold tracking-tight font-geist text-gray-800" onclick="enterApp()">
<iconify-icon className="text-lg" icon="lucide:mail"></iconify-icon>
                        Continue with Email
                    </button>
</div>
</div>
<button className="text-xs py-4 text-center font-medium tracking-tight font-geist text-gray-400 hover:text-gray-600 transition-colors animate-enter" onclick="enterApp()" style={{animationDelay: '0.4s'}}>Skip for Guest Mode</button>
</div>

<div className="flex-1 flex flex-col h-full opacity-0 transition-opacity duration-500" id="screen-main" style={{opacity: '1'}}>

<header className="h-16 flex items-center justify-between px-6 glass sticky top-0 z-20">
<div className="font-bold text-lg tracking-tight flex items-center gap-2 font-geist">
<span id="header-title">Feed</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 dark:bg-orange-500/10 px-3 py-1.5 rounded-full border dark:border-orange-500/20 bg-orange-100 border-orange-200 backdrop-blur-md">
<iconify-icon className="text-orange-500 text-sm" icon="lucide:flame"></iconify-icon>
<span className="text-xs dark:text-orange-400 font-bold tracking-tight font-geist text-orange-600">12</span>
</div>
<button className="w-9 h-9 rounded-full dark:bg-blue-800 overflow-hidden bg-gray-200 border border-white/20 shadow-sm">
<img alt="Profile" className="opacity-90 w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&amp;background=random&amp;color=fff"/>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24 relative" id="main-content">

<div className="p-4 space-y-6 tab-content" id="tab-feed">

<div className="glass-card rounded-2xl p-4 flex items-center gap-3 active:scale-[0.99] transition-transform cursor-pointer hover:bg-white/50 dark:hover:bg-white/5">
<div className="w-10 h-10 rounded-full dark:bg-blue-500/20 flex items-center justify-center bg-blue-100 text-blue-500">
<iconify-icon className="text-lg" icon="lucide:camera"></iconify-icon>
</div>
<div className="flex-1 text-sm font-medium tracking-tight font-geist text-gray-400">Post your proof...</div>
</div>

<div className="glass-card rounded-3xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm dark:text-white font-semibold tracking-tight font-geist text-gray-900">alex_runs</p>
<iconify-icon className="text-blue-500 text-xs" icon="lucide:badge-check"></iconify-icon>
</div>
<p className="text-[11px] font-medium tracking-tight font-geist text-gray-400">2h ago</p>
</div>
</div>
<button className="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:more-horizontal"></iconify-icon></button>
</div>
<div className="w-full h-64 dark:bg-gray-800 rounded-2xl mb-4 overflow-hidden relative group bg-gray-200">
<div className="absolute inset-0 flex items-center justify-center text-gray-400">
<iconify-icon className="text-4xl opacity-20" icon="lucide:image"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 glass px-3 py-1 rounded-full">
<span className="text-[10px] uppercase font-bold tracking-tight font-geist dark:text-white text-black">Fitness</span>
</div>
</div>
<p className="text-sm dark:text-gray-300 mb-4 leading-relaxed font-medium tracking-tight font-geist text-gray-700">
<span className="dark:text-white font-bold tracking-tight font-geist text-gray-900">Day 24.</span> Morning 5k done. Legs felt heavy but consistency is key. 🏃
                        </p>
<div className="flex items-center justify-between border-t dark:border-white/5 pt-3 border-gray-100/50">
<div className="flex gap-4">
<button className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors group">
<iconify-icon className="text-lg group-active:scale-125 transition-transform" icon="lucide:heart"></iconify-icon>
<span className="text-xs font-semibold tracking-tight font-geist">142</span>
</button>
<button className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors">
<iconify-icon className="text-lg" icon="lucide:message-circle"></iconify-icon>
<span className="text-xs font-semibold tracking-tight font-geist">8</span>
</button>
</div>
</div>
</div>
</div>

<div className="h-full flex flex-col tab-content hidden" id="tab-ai">

<div className="p-4 pb-2 flex-none">
<div className="flex gap-3 mb-2">
<div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
<iconify-icon className="text-lg text-white" icon="lucide:bot"></iconify-icon>
</div>
<div className="glass-card rounded-2xl rounded-tl-none p-4 max-w-[85%]">
<p className="text-sm dark:text-gray-200 font-medium tracking-tight font-geist text-gray-800 leading-relaxed">
                                    Day 12. You skipped reading yesterday. I've adjusted today's plan. Let's get that streak back on track.
                                </p>
</div>
</div>
</div>

<div className="px-4 py-4">
<div className="glass-card p-5 rounded-3xl">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-bold tracking-tight font-geist dark:text-white text-gray-900">Activity</h3>
<p className="text-xs text-gray-500 font-medium tracking-tight font-geist">Last 7 Days</p>
</div>
<div className="flex gap-1 bg-gray-100 dark:bg-white/5 p-1 rounded-lg">
<button className="p-1.5 rounded-md bg-white dark:bg-white/10 shadow-sm"><iconify-icon className="text-xs dark:text-white" icon="lucide:bar-chart-2"></iconify-icon></button>
<button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"><iconify-icon className="text-xs" icon="lucide:activity"></iconify-icon></button>
</div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 sm:gap-3 px-1">

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[80%] rounded-md shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>

<div className="tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur text-white text-[10px] rounded-lg shadow-xl font-medium whitespace-nowrap z-20 transition-all duration-200 pointer-events-none transform translate-y-2">
                                        Mon: 5/5 Tasks
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
</div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-emerald-500 transition-colors">M</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[100%] rounded-md shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur text-white text-[10px] rounded-lg shadow-xl font-medium whitespace-nowrap z-20 transition-all duration-200 pointer-events-none transform translate-y-2">
                                        Tue: 6/6 Tasks
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
</div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-emerald-500 transition-colors">T</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-amber-400/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-amber-400 h-[60%] rounded-md shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur text-white text-[10px] rounded-lg shadow-xl font-medium whitespace-nowrap z-20 transition-all duration-200 pointer-events-none transform translate-y-2">
                                        Wed: 3/5 Tasks
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
</div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-amber-400 transition-colors">W</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-rose-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-rose-500 h-[25%] rounded-md shadow-[0_0_10px_rgba(244,63,94,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur text-white text-[10px] rounded-lg shadow-xl font-medium whitespace-nowrap z-20 transition-all duration-200 pointer-events-none transform translate-y-2">
                                        Thu: 1/5 Tasks
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
</div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-rose-500 transition-colors">T</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[90%] rounded-md shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-emerald-500 transition-colors">F</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[100%] rounded-md shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400 group-hover:text-emerald-500 transition-colors">S</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-blue-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-blue-500 h-[40%] rounded-md shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse transition-all duration-500 group-hover:scale-y-105 origin-bottom relative z-10"></div>
<div className="tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur text-white text-[10px] rounded-lg shadow-xl font-medium whitespace-nowrap z-20 transition-all duration-200 pointer-events-none transform translate-y-2">
                                        Today: 2/5 Tasks
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
</div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-bold text-blue-500">S</div>
</div>
</div>
<div className="h-4"></div> 
</div>
</div>

<div className="px-6 py-2 mt-2">
<h3 className="text-xs uppercase font-bold tracking-tight font-geist text-gray-400">Today's Focus</h3>
</div>

<div className="px-4 space-y-3 flex-1 pb-4">

<div className="glass-card p-4 rounded-2xl flex items-center gap-4 transition-all active:scale-[0.98] cursor-pointer group hover:bg-white/50 dark:hover:bg-white/5 border border-transparent hover:border-purple-500/20" onclick="toggleTask(this)">
<div className="checkbox-ui w-6 h-6 rounded-full border-2 dark:border-blue-500/30 flex items-center justify-center transition-all group-hover:border-purple-500 border-gray-300 shadow-sm">
<iconify-icon className="text-xs opacity-0 transition-opacity text-white stroke-2" icon="lucide:check"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm dark:text-gray-200 font-semibold tracking-tight font-geist text-gray-800 transition-colors">Read 10 pages</p>
<p className="text-[11px] text-gray-500 font-medium tracking-tight font-geist">Self-improvement</p>
</div>
<button className="w-8 h-8 rounded-full btn-glass flex items-center justify-center text-gray-400 hover:text-white">
<iconify-icon className="text-xs" icon="lucide:camera"></iconify-icon>
</button>
</div>

<div className="glass-card p-4 rounded-2xl flex items-center gap-4 transition-all active:scale-[0.98] cursor-pointer group hover:bg-white/50 dark:hover:bg-white/5" onclick="toggleTask(this)">
<div className="checkbox-ui w-6 h-6 rounded-full border-2 dark:border-blue-500/30 flex items-center justify-center transition-all group-hover:border-purple-500 border-gray-300 shadow-sm">
<iconify-icon className="text-xs opacity-0 transition-opacity text-white stroke-2" icon="lucide:check"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm dark:text-gray-200 font-semibold tracking-tight font-geist text-gray-800 transition-colors">Deep Work (45m)</p>
<p className="text-[11px] text-gray-500 font-medium tracking-tight font-geist">Business</p>
</div>
<button className="w-8 h-8 rounded-full btn-glass flex items-center justify-center text-gray-400 hover:text-white">
<iconify-icon className="text-xs" icon="lucide:timer"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p-4 space-y-6 tab-content hidden" id="tab-profile">
<div className="text-center pt-2">
<div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-emerald-500 mb-3 relative">
<img className="w-full h-full rounded-full object-cover border-4 dark:border-[#09090b] border-gray-50" src="https://ui-avatars.com/api/?name=User&amp;background=000&amp;color=fff"/>
<div className="absolute bottom-1 right-1 bg-blue-500 w-6 h-6 rounded-full border-2 border-[#09090b] flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon>
</div>
</div>
<h2 className="text-xl dark:text-white font-bold tracking-tight font-geist text-gray-900">Alex Doe</h2>
<div className="flex justify-center gap-2 mt-2">
<span className="text-[10px] px-2.5 py-0.5 rounded-full dark:bg-white/10 dark:text-gray-300 font-bold tracking-tight font-geist bg-gray-200 text-gray-700 border dark:border-white/10 border-gray-300">Level 4</span>
</div>
</div>

<div className="glass-card p-5 rounded-3xl">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-bold tracking-tight font-geist dark:text-white text-gray-900">Streak History</h3>
</div>
<div className="flex items-center gap-2 text-emerald-500">
<iconify-icon className="text-sm" icon="lucide:trending-up"></iconify-icon>
<span className="text-xs font-bold tracking-tight font-geist">+12%</span>
</div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 sm:gap-3 px-1">

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[80%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">M</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[100%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">T</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-amber-400/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-amber-400 h-[60%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">W</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-rose-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-rose-500 h-[25%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">T</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[90%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">F</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-emerald-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-emerald-500 h-[100%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-medium text-gray-400">S</div>
</div>

<div className="relative group h-full w-full flex items-end cursor-pointer">
<div className="w-full bg-blue-500/20 h-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-x-1 -inset-y-1"></div>
<div className="w-full bg-blue-500 h-[40%] rounded-md transition-all duration-300 group-hover:scale-y-105 origin-bottom"></div>
<div className="absolute -bottom-6 w-full text-center text-[10px] font-bold text-blue-500">S</div>
</div>
</div>
<div className="h-4"></div>
</div>

<div>
<h3 className="text-sm dark:text-white mb-3 font-semibold tracking-tight font-geist text-gray-900">Badges</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<div className="flex-shrink-0 w-20 h-24 glass-card rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
<iconify-icon className="text-lg" icon="lucide:zap"></iconify-icon>
</div>
<span className="text-[10px] dark:text-gray-300 font-semibold tracking-tight font-geist text-gray-700">7 Days</span>
</div>
<div className="flex-shrink-0 w-20 h-24 glass-card rounded-2xl flex flex-col items-center justify-center gap-2 grayscale opacity-50">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
<iconify-icon className="text-lg" icon="lucide:shield"></iconify-icon>
</div>
<span className="text-[10px] dark:text-gray-300 font-semibold tracking-tight font-geist text-gray-700">Iron Will</span>
</div>
<div className="flex-shrink-0 w-20 h-24 glass-card rounded-2xl flex flex-col items-center justify-center gap-2 grayscale opacity-50">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon className="text-lg" icon="lucide:medal"></iconify-icon>
</div>
<span className="text-[10px] dark:text-gray-300 font-semibold tracking-tight font-geist text-gray-700">Master</span>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl btn-glass text-xs text-gray-500 hover:text-white transition-colors font-semibold tracking-tight font-geist">
                        Edit Profile
                    </button>
</div>

<div className="p-4 space-y-6 tab-content hidden" id="tab-settings">

<div className="glass-card p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full dark:bg-white/10 flex items-center justify-center text-gray-500 bg-gray-100">
<iconify-icon className="text-sm" icon="lucide:moon"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight font-geist">Dark Mode</span>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 bg-white border-gray-200" id="theme-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 bg-gray-200" htmlFor="theme-toggle"></label>
</div>
</div>

<div className="relative rounded-3xl p-6 overflow-hidden text-white group cursor-pointer shadow-lg">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h3 className="text-lg mb-1 font-bold tracking-tight font-geist">Selfix Pro</h3>
<p className="text-[11px] text-white/80 mb-5 font-medium tracking-tight font-geist">Unlimited AI, Private Circles, Analytics.</p>
<div className="flex items-end gap-1 mb-5">
<span className="text-3xl font-bold tracking-tight font-geist">$9.99</span>
<span className="text-xs mb-1 opacity-70 font-medium tracking-tight font-geist">/mo</span>
</div>
<button className="w-full py-3 rounded-xl bg-white/20 backdrop-blur-md text-sm border border-white/20 font-semibold tracking-tight font-geist hover:bg-white/30 transition-colors shadow-lg">
                                Upgrade Now
                            </button>
</div>
</div>

<div className="space-y-2">
<button className="w-full flex items-center justify-between p-4 rounded-xl btn-glass group">
<span className="text-sm font-semibold tracking-tight font-geist">Notifications</span>
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl btn-glass group">
<span className="text-sm font-semibold tracking-tight font-geist">Privacy</span>
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl btn-glass group hover:bg-red-500/20 hover:border-red-500/30">
<span className="text-sm text-pink-500 font-semibold tracking-tight font-geist">Log Out</span>
</button>
</div>
</div>
</main>

<nav className="glass pb-6 pt-2 px-6">
<div className="flex justify-between items-center">
<button className="nav-btn w-12 h-12 flex flex-col items-center justify-center gap-1 transition-all active:scale-90 dark:text-white text-gray-900 group" onclick="switchTab('feed')">
<iconify-icon className="text-2xl nav-icon group-hover:scale-110 transition-transform" icon="lucide:home" strokeWidth="1.5"></iconify-icon>
</button>
<button className="nav-btn w-12 h-12 flex flex-col items-center justify-center gap-1 dark:hover:text-gray-200 transition-all active:scale-90 hover:text-gray-600 text-gray-400 group" onclick="switchTab('ai')">
<iconify-icon className="text-2xl nav-icon group-hover:scale-110 transition-transform" icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon>
</button>
<div className="relative -top-6">
<button className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-900 to-black dark:from-white dark:to-gray-200 dark:text-black text-white flex items-center justify-center shadow-lg shadow-purple-500/20 active:scale-90 transition-transform hover:-translate-y-1 hover:shadow-xl">
<iconify-icon className="text-2xl" icon="lucide:plus" strokeWidth="2"></iconify-icon>
</button>
</div>
<button className="nav-btn w-12 h-12 flex flex-col items-center justify-center gap-1 dark:hover:text-gray-200 transition-all active:scale-90 hover:text-gray-600 text-gray-400 group" onclick="switchTab('profile')">
<iconify-icon className="text-2xl nav-icon group-hover:scale-110 transition-transform" icon="lucide:user" strokeWidth="1.5"></iconify-icon>
</button>
<button className="nav-btn w-12 h-12 flex flex-col items-center justify-center gap-1 dark:hover:text-gray-200 transition-all active:scale-90 hover:text-gray-600 text-gray-400 group" onclick="switchTab('settings')">
<iconify-icon className="text-2xl nav-icon group-hover:scale-110 transition-transform" icon="lucide:settings" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
</div>
</div>



    </>
  );
}
