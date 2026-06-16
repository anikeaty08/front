import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Global variables
        let timerInterval;
        let isRunning = false;
        let timeLeft = 2700; // 45:00

        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Mobile Menu Logic ---
            const menuBtn = document.getElementById('menu-toggle-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');

            function toggleMenu(show) {
                if (show) {
                    sidebar.classList.remove('translate-x-full');
                    overlay.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                } else {
                    sidebar.classList.add('translate-x-full');
                    overlay.classList.add('opacity-0');
                    setTimeout(() => overlay.classList.add('hidden'), 300);
                }
            }

            menuBtn.addEventListener('click', () => toggleMenu(true));
            closeBtn.addEventListener('click', () => toggleMenu(false));
            overlay.addEventListener('click', () => toggleMenu(false));

            // --- Timer Logic ---
            const timerDisplay = document.getElementById('timer-display');
            const timerToggleBtn = document.getElementById('timer-toggle');
            const timerResetBtn = document.getElementById('timer-reset');
            const timerIcon = document.getElementById('timer-icon');
            const timerLabel = document.getElementById('timer-label');

            function formatTime(seconds) {
                const m = Math.floor(seconds / 60);
                const s = seconds % 60;
                return `${m}:${s < 10 ? '0' : ''}${s}`;
            }

            timerToggleBtn.addEventListener('click', () => {
                if (isRunning) {
                    // Pause
                    clearInterval(timerInterval);
                    isRunning = false;
                    timerLabel.innerText = "Resume";
                    timerIcon.setAttribute('icon', 'solar:play-linear');
                    timerToggleBtn.classList.remove('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                    timerToggleBtn.classList.add('bg-zinc-100', 'text-zinc-950', 'hover:bg-white');
                } else {
                    // Start
                    isRunning = true;
                    timerLabel.innerText = "Pause";
                    timerIcon.setAttribute('icon', 'solar:pause-linear');
                    timerToggleBtn.classList.remove('bg-zinc-100', 'text-zinc-950', 'hover:bg-white');
                    timerToggleBtn.classList.add('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                    
                    timerInterval = setInterval(() => {
                        if (timeLeft > 0) {
                            timeLeft--;
                            timerDisplay.innerText = formatTime(timeLeft);
                        } else {
                            clearInterval(timerInterval);
                            isRunning = false;
                        }
                    }, 1000);
                }
            });

            timerResetBtn.addEventListener('click', () => {
                clearInterval(timerInterval);
                isRunning = false;
                timeLeft = 2700;
                timerDisplay.innerText = formatTime(timeLeft);
                timerLabel.innerText = "Start";
                timerIcon.setAttribute('icon', 'solar:play-linear');
                timerToggleBtn.classList.remove('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                timerToggleBtn.classList.add('bg-zinc-100', 'text-zinc-950', 'hover:bg-white');
            });

            // --- Note Saving Logic ---
            const saveBtn = document.getElementById('save-btn');
            const saveStatus = document.getElementById('save-status');
            
            saveBtn.addEventListener('click', () => {
                const originalContent = saveStatus.innerHTML;
                saveStatus.innerHTML = `<span class="text-emerald-500 flex items-center gap-1 font-medium"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Saved successfully</span>`;
                
                // Simulate network delay
                saveBtn.disabled = true;
                saveBtn.classList.add('opacity-50', 'cursor-not-allowed');
                
                setTimeout(() => {
                    saveStatus.innerHTML = originalContent;
                    saveBtn.disabled = false;
                    saveBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }, 2000);
            });

            // --- Checkbox & Progress Bar Logic ---
            const checkboxes = document.querySelectorAll('.task-checkbox');
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            const checkCounter = document.getElementById('checklist-counter');
            
            function updateProgress() {
                const total = checkboxes.length;
                const checked = Array.from(checkboxes).filter(c => c.checked).length;
                
                // Update local counter
                checkCounter.innerText = `${checked}/${total} Completed`;
                
                // Update Global Progress (starts at 30%)
                const baseProgress = 30;
                const addedProgress = (checked / total) * 20; // Tasks add up to 20% more
                const totalProgress = Math.round(baseProgress + addedProgress);
                
                progressBar.style.width = `${totalProgress}%`;
                progressText.innerText = `${totalProgress}%`;
            }

            checkboxes.forEach(cb => {
                cb.addEventListener('change', updateProgress);
            });
        });

        // --- Tabs Logic (Exposed Globally for inline onclick) ---
        window.switchTab = function(tabName) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            
            // Show target
            document.getElementById(`content-${tabName}`).classList.remove('hidden');
            
            // Update buttons state
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-zinc-100', 'border-zinc-100');
                btn.classList.add('text-zinc-500', 'border-transparent');
            });
            
            // Highlight active button
            const activeBtn = document.getElementById(`tab-${tabName}`);
            activeBtn.classList.remove('text-zinc-500', 'border-transparent');
            activeBtn.classList.add('text-zinc-100', 'border-zinc-100');
        };

        // --- Quiz Selection Visual ---
        window.selectOption = function(btn) {
            // Reset siblings
            const parent = btn.parentElement;
            const options = parent.querySelectorAll('.quiz-option');
            
            options.forEach(opt => {
                opt.classList.remove('border-emerald-500', 'bg-emerald-900/10', 'text-emerald-100');
                opt.classList.add('border-zinc-800', 'text-zinc-300');
                // Reset circle
                const circle = opt.querySelector('div');
                circle.className = "w-4 h-4 rounded-full border border-zinc-600 group-hover:border-emerald-500";
                circle.innerHTML = "";
            });

            // Set active
            btn.classList.remove('border-zinc-800', 'text-zinc-300');
            btn.classList.add('border-emerald-500', 'bg-emerald-900/10', 'text-emerald-100');
            
            const activeCircle = btn.querySelector('div');
            activeCircle.className = "w-4 h-4 rounded-full border border-emerald-500 bg-emerald-500 flex items-center justify-center";
            activeCircle.innerHTML = '<div class="w-1.5 h-1.5 bg-zinc-950 rounded-full"></div>';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="lg:hidden h-14 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-50">
<span className="text-zinc-100 font-semibold tracking-tight">KM.OS</span>
<button className="p-2 text-zinc-400 hover:text-white transition-colors" id="menu-toggle-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="fixed inset-0 bg-black/80 z-40 hidden backdrop-blur-sm transition-opacity opacity-0 lg:hidden" id="mobile-overlay"></div>
<aside className="w-72 lg:w-64 fixed top-0 right-0 lg:left-0 h-screen bg-zinc-950 border-l lg:border-l-0 lg:border-r border-zinc-800/50 z-50 transition-transform duration-300 transform translate-x-full lg:translate-x-0 flex flex-col shadow-2xl lg:shadow-none" id="sidebar">
<div className="h-16 flex items-center justify-between px-6 border-b border-zinc-800/50">
<span className="text-zinc-100 font-semibold tracking-tight text-lg hidden lg:block">KM.OS</span>
<span className="text-zinc-100 font-semibold tracking-tight text-lg lg:hidden">Menu</span>
<button className="lg:hidden text-zinc-400 hover:text-white" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900 rounded-md border border-zinc-800 transition-all group" href="#">
<iconify-icon className="text-emerald-500" icon="solar:course-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Current Session
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 rounded-md transition-all" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Resources Library
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 rounded-md transition-all" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Collaborators
                <span className="ml-auto text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700">12</span>
</a>
<div className="pt-6 pb-2 px-3">
<p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2">My Lists</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Methodologies
                    </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Reading List
                    </a>
</div>
</div>
</nav>
<div className="p-4 border-t border-zinc-800/50">
<button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-zinc-100 text-xs font-medium border border-zinc-600 group-hover:border-zinc-500">
                    JS
                </div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium group-hover:text-white">Jane Student</span>
<span className="text-[10px] text-zinc-500 group-hover:text-zinc-400">Pro Plan</span>
</div>
<iconify-icon className="ml-auto text-zinc-500 group-hover:text-zinc-300" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 lg:ml-64 bg-zinc-950 min-h-screen relative w-full">

<header className="hidden lg:flex h-16 border-b border-zinc-800/50 items-center justify-between px-8 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-30">
<div className="flex items-center gap-4">
<div className="flex items-center text-xs text-zinc-500 gap-2">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Courses</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-200">Knowledge Management Fundamentals</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-300 font-medium">Live Session</span>
</div>
<div className="h-4 w-[1px] bg-zinc-800"></div>
<button className="text-zinc-400 hover:text-white transition-colors relative">
<div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></div>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8 pb-20">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold tracking-wider text-emerald-500 uppercase border border-emerald-900/50 bg-emerald-500/10 px-2 py-0.5 rounded">Module 1</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Fundamentals</span>
</div>
<h1 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-medium tracking-tight mb-2">The DIKW Pyramid</h1>
<p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                            Understanding the critical transition from raw Data to Information, Knowledge, and finally Wisdom in organizational structures.
                        </p>
</div>

<div className="space-y-2 bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-300">Course Progress</span>
<span className="text-zinc-500" id="progress-text">30%</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
<div className="h-full bg-emerald-500 w-[30%] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.3)]" id="progress-bar"></div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col justify-between items-center text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Session Timer</span>
</div>
<div className="my-2">
<div className="text-5xl lg:text-6xl font-extralight text-zinc-100 tracking-tighter tabular-nums font-mono" id="timer-display">45:00</div>
</div>
<div className="flex gap-3 w-full mt-4">
<button className="flex-1 bg-zinc-100 hover:bg-white active:bg-zinc-300 text-zinc-950 py-2.5 rounded text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-zinc-950/50" id="timer-toggle">
<iconify-icon icon="solar:play-linear" id="timer-icon" width="16"></iconify-icon>
<span id="timer-label">Start</span>
</button>
<button className="w-12 flex items-center justify-center border border-zinc-800 rounded hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer" id="timer-reset">
<iconify-icon icon="solar:restart-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 space-y-1">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-medium text-zinc-100">Timeline</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-300 underline">PDF</button>
</div>

<div className="group flex gap-4 p-3 rounded-lg hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/50 transition-all cursor-pointer">
<div className="flex flex-col items-center mt-1">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-0.5 h-full bg-zinc-800 mt-1"></div>
</div>
<div className="pb-2 opacity-60">
<span className="text-xs text-zinc-500 font-mono block mb-0.5">00:00 - 00:15</span>
<h4 className="text-sm font-medium text-zinc-300">Introduction</h4>
</div>
</div>
<div className="group flex gap-4 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 transition-all cursor-pointer relative overflow-hidden shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500"></div>
<div className="flex flex-col items-center mt-1 ml-1">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<div className="w-0.5 h-full bg-zinc-800 mt-1"></div>
</div>
<div className="pb-2 w-full">
<div className="flex justify-between items-start">
<span className="text-xs text-emerald-500 font-mono block mb-0.5 font-bold">00:15 - 01:00</span>
<iconify-icon className="text-emerald-500 animate-pulse" icon="solar:playback-speed-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-100">Module 1: The DIKW Pyramid</h4>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Deep dive into data transformation hierarchies.</p>
</div>
</div>
<div className="group flex gap-4 p-3 rounded-lg hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/50 transition-all cursor-pointer">
<div className="flex flex-col items-center mt-1">
<div className="w-2 h-2 rounded-full border border-zinc-600 bg-zinc-900"></div>
</div>
<div className="pb-2">
<span className="text-xs text-zinc-500 font-mono block mb-0.5">01:00 - 01:15</span>
<h4 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">Short Break</h4>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="flex gap-8 border-b border-zinc-800 px-1 overflow-x-auto no-scrollbar">
<button className="tab-btn pb-3 text-sm font-medium border-b-2 text-zinc-100 border-zinc-100 transition-all whitespace-nowrap cursor-pointer hover:text-white" id="tab-capture" onclick="switchTab('capture')">Quick Capture</button>
<button className="tab-btn pb-3 text-sm font-medium border-b-2 text-zinc-500 border-transparent transition-all whitespace-nowrap cursor-pointer hover:text-zinc-300" id="tab-quiz" onclick="switchTab('quiz')">Quiz (3)</button>
<button className="tab-btn pb-3 text-sm font-medium border-b-2 text-zinc-500 border-transparent transition-all whitespace-nowrap cursor-pointer hover:text-zinc-300" id="tab-resources" onclick="switchTab('resources')">Resources</button>
</div>

<div className="tab-content flex flex-col gap-4 animate-fade-in" id="content-capture">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg group focus-within:border-zinc-600 transition-colors shadow-sm">
<div className="px-4 py-2 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 rounded-t-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:document-add-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-500">untitled_note_01.md</span>
</div>
<div className="flex gap-2">
<button className="text-zinc-500 hover:text-zinc-300 p-1"><iconify-icon icon="solar:text-bold-linear"></iconify-icon></button>
<button className="text-zinc-500 hover:text-zinc-300 p-1"><iconify-icon icon="solar:text-italic-linear"></iconify-icon></button>
</div>
</div>
<textarea className="w-full h-64 bg-transparent text-sm text-zinc-300 p-4 focus:outline-none resize-none placeholder:text-zinc-700 font-mono leading-relaxed" id="note-input" placeholder="// Start typing your notes here..."></textarea>
<div className="px-3 py-2 border-t border-zinc-800 flex justify-between items-center bg-zinc-900/20 rounded-b-lg">
<span className="text-[10px] text-zinc-600 flex items-center gap-1 opacity-100 transition-opacity" id="save-status">
<iconify-icon icon="solar:cloud-check-linear"></iconify-icon> Ready to save
                                </span>
<button className="bg-zinc-100 text-zinc-950 text-xs px-4 py-1.5 rounded font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer shadow" id="save-btn">
<iconify-icon icon="solar:diskette-linear"></iconify-icon> Save Note
                                </button>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-dashed border-zinc-700 mt-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Action Items</h3>
<span className="text-xs text-zinc-500" id="checklist-counter">0/3 Completed</span>
</div>
<div className="space-y-3" id="checklist-container">

<label className="checkbox-wrapper flex items-start gap-3 cursor-pointer group select-none">
<div className="relative flex items-center mt-0.5">
<input className="peer sr-only task-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-transparent peer-focus:ring-2 peer-focus:ring-zinc-700 transition-all flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-zinc-950 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-sm text-zinc-300 peer-checked:text-zinc-500 peer-checked:line-through transition-colors">Define your primary data sources</span>
</label>

<label className="checkbox-wrapper flex items-start gap-3 cursor-pointer group select-none">
<div className="relative flex items-center mt-0.5">
<input className="peer sr-only task-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-transparent peer-focus:ring-2 peer-focus:ring-zinc-700 transition-all flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-zinc-950 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-sm text-zinc-300 peer-checked:text-zinc-500 peer-checked:line-through transition-colors">Map the tacit knowledge flow</span>
</label>

<label className="checkbox-wrapper flex items-start gap-3 cursor-pointer group select-none">
<div className="relative flex items-center mt-0.5">
<input className="peer sr-only task-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-transparent peer-focus:ring-2 peer-focus:ring-zinc-700 transition-all flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-zinc-950 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-sm text-zinc-300 peer-checked:text-zinc-500 peer-checked:line-through transition-colors">Review Glossary Terms</span>
</label>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-4 animate-fade-in" id="content-quiz">
<div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-mono text-emerald-500">Question 1 of 3</span>
<span className="text-xs text-zinc-500">Multiple Choice</span>
</div>
<h3 className="text-lg text-zinc-100 font-medium mb-6">Which of the following best describes 'Tacit Knowledge'?</h3>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-4 rounded border border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all text-sm text-zinc-300 group flex items-center justify-between cursor-pointer" onclick="selectOption(this)">
<span>Knowledge that is written down in manuals.</span>
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-emerald-500"></div>
</button>
<button className="quiz-option w-full text-left p-4 rounded border border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all text-sm text-zinc-300 group flex items-center justify-between cursor-pointer" onclick="selectOption(this)">
<span>Knowledge rooted in context, experience, and practice.</span>
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-emerald-500"></div>
</button>
<button className="quiz-option w-full text-left p-4 rounded border border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all text-sm text-zinc-300 group flex items-center justify-between cursor-pointer" onclick="selectOption(this)">
<span>Data stored in relational databases.</span>
<div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-emerald-500"></div>
</button>
</div>
<div className="mt-6 flex justify-end">
<button className="bg-zinc-100 text-zinc-950 text-sm px-5 py-2 rounded font-medium hover:bg-zinc-200 transition-colors">
                                    Next Question
                                </button>
</div>
</div>
</div>

<div className="tab-content hidden grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" id="content-resources">
<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:border-zinc-600 transition-all group cursor-pointer hover:bg-zinc-900/40">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-emerald-500" icon="solar:file-text-linear" width="24"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300" icon="solar:download-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-200 mb-1">DIKW_Framework_v2.pdf</h4>
<p className="text-xs text-zinc-500">2.4 MB • Updated yesterday</p>
</div>
<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:border-zinc-600 transition-all group cursor-pointer hover:bg-zinc-900/40">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-purple-400" icon="solar:figma-file-linear" width="24"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Knowledge Graph Template</h4>
<p className="text-xs text-zinc-500">Figma Community File</p>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
