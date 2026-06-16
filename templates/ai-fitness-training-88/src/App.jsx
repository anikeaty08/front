import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
750: '#262626',
850: '#1f1f1f',
925: '#0f0f0f',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'shimmer-fast': 'shimmer 1.5s infinite linear',
'glow-pulse': 'glow 3s ease-in-out infinite',
'aurora-move': 'auroraMove 6s infinite alternate',
'blob-float': 'blobFloat 10s infinite alternate',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'number-pop': 'numberPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
},
keyframes: {
fadeIn: {
'0%': { opacity: 0, transform: 'translateY(-5px)' },
'100%': { opacity: 1, transform: 'translateY(0)' }
},
numberPop: {
'0%': { transform: 'scale(0.8)', opacity: 0.5 },
'100%': { transform: 'scale(1)', opacity: 1 }
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
auroraMove: {
'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
'100%': { transform: 'translate(-10%, -10%) rotate(5deg) scale(1.1)' }
},
blobFloat: {
'0%': { transform: 'translate(0, 0) scale(1)' },
'100%': { transform: 'translate(20px, -20px) scale(1.1)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const libScreen = document.getElementById('screen-library');
        const setupScreen = document.getElementById('screen-setup');
        const timerScreen = document.getElementById('screen-timer');
        const setupTitle = document.getElementById('setup-title');
        
        const expandedIntervals = document.getElementById('expanded-intervals');
        const chevronIcon = document.getElementById('chevron-icon');
        const headerBadge = document.getElementById('header-set-count-container');

        // Scrubber DOM
        const scrubberOverlay = document.getElementById('scrubber-overlay');
        const scrubberWheel = document.getElementById('scrubber-wheel');
        const scItems = [
            document.getElementById('scrubber-item-1'),
            document.getElementById('scrubber-item-2'),
            document.getElementById('scrubber-item-3'),
            document.getElementById('scrubber-item-4'),
            document.getElementById('scrubber-item-5')
        ];

        let isExpanded = true;
        let isDetailExpanded = false;
        let currentSets = 3;

        // Global Scrubber State
        let activeScrubberElement = null;
        let currentScrubberValue = 0;
        let scrubberStartY = 0;
        let scrubberStartVal = 0;
        let isDraggingScrubber = false;

        const updateWheel = (val, offsetPixels) => {
            scItems[0].innerText = formatTime(Math.max(15, val - 30));
            scItems[1].innerText = formatTime(Math.max(15, val - 15));
            scItems[2].innerText = formatTime(Math.max(15, val));
            scItems[3].innerText = formatTime(val + 15);
            scItems[4].innerText = formatTime(val + 30);
            scrubberWheel.style.transform = `translateY(${offsetPixels}px)`;
        };

        document.querySelectorAll('.scrubbable').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                activeScrubberElement = el;
                currentScrubberValue = parseInt(el.getAttribute('data-value'));
                el.classList.add('dragging');
                scrubberOverlay.classList.remove('opacity-0', 'pointer-events-none');
                scrubberOverlay.classList.add('active');
                updateWheel(currentScrubberValue, 0);
            });
        });

        scrubberOverlay.addEventListener('mousedown', (e) => {
            isDraggingScrubber = true;
            scrubberStartY = e.clientY;
            scrubberStartVal = currentScrubberValue;
        });
        
        scrubberOverlay.addEventListener('touchstart', (e) => {
             isDraggingScrubber = true;
             scrubberStartY = e.touches[0].clientY;
             scrubberStartVal = currentScrubberValue;
        });

        const handleOverlayMove = (y) => {
            if (!isDraggingScrubber || !activeScrubberElement) return;
            const diff = scrubberStartY - y; 
            const TICK_SIZE = 40;
            const ticks = Math.floor(diff / TICK_SIZE);
            let newVal = scrubberStartVal + (ticks * 15);
            if (newVal < 15) newVal = 15; 
            const remainder = diff % TICK_SIZE;
            currentScrubberValue = newVal;
            activeScrubberElement.setAttribute('data-value', newVal);
            activeScrubberElement.innerText = formatTime(newVal);
            updateWheel(newVal, remainder);
        };

        const handleOverlayEnd = (e) => {
            if (!isDraggingScrubber) return;
            isDraggingScrubber = false;
            updateWheel(currentScrubberValue, 0);
        };

        window.addEventListener('mousemove', (e) => {
            if(isDraggingScrubber) {
                e.preventDefault();
                handleOverlayMove(e.clientY);
            }
        });
        
        window.addEventListener('touchmove', (e) => {
            if(isDraggingScrubber) {
                 e.preventDefault();
                 handleOverlayMove(e.touches[0].clientY);
            }
        }, { passive: false });

        window.addEventListener('mouseup', handleOverlayEnd);
        window.addEventListener('touchend', handleOverlayEnd);

        scrubberOverlay.addEventListener('click', (e) => {
            scrubberOverlay.classList.add('opacity-0', 'pointer-events-none');
            scrubberOverlay.classList.remove('active');
            if(activeScrubberElement) {
                activeScrubberElement.classList.remove('dragging');
                activeScrubberElement = null;
            }
        });

        document.getElementById('scrubber-modal').addEventListener('click', (e) => {
             e.stopPropagation();
        });

        function formatTime(seconds) {
            const m = Math.floor(seconds / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function handleSearch(input) {
            const defaultView = document.getElementById('default-library-view');
            const searchView = document.getElementById('search-results-view');
            if (input.value.length > 0) {
                defaultView.classList.add('hidden');
                defaultView.classList.remove('opacity-100');
                searchView.classList.remove('hidden');
                setTimeout(() => searchView.classList.remove('opacity-0'), 100);
            } else {
                searchView.classList.add('opacity-0');
                setTimeout(() => {
                    searchView.classList.add('hidden');
                    defaultView.classList.remove('hidden');
                    defaultView.classList.add('opacity-100');
                }, 200);
            }
        }

        function toggleIntervals() {
            isExpanded = !isExpanded;
            if(isExpanded) {
                expandedIntervals.classList.remove('hidden');
                chevronIcon.classList.add('rotate-180');
                // Hide badge when expanded
                headerBadge.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
            } else {
                expandedIntervals.classList.add('hidden');
                chevronIcon.classList.remove('rotate-180');
                // Show badge when collapsed
                headerBadge.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
            }
        }

        function toggleIntervalDetail() {
            isDetailExpanded = !isDetailExpanded;
            const list = document.getElementById('interval-detail-list');
            const globalDurations = document.getElementById('global-durations');
            const chevron = document.getElementById('detail-chevron');
            
            if(isDetailExpanded) {
                list.classList.remove('hidden');
                globalDurations.classList.add('hidden');
                chevron.classList.add('rotate-180');
            } else {
                list.classList.add('hidden');
                globalDurations.classList.remove('hidden');
                chevron.classList.remove('rotate-180');
            }
        }

        function updateSets(delta) {
            if (event) event.stopPropagation();
            currentSets += delta;
            if(currentSets < 1) currentSets = 1;
            if(currentSets > 12) currentSets = 12;
            const display = document.getElementById('set-count-display');
            const headerDisplay = document.getElementById('header-set-count');
            
            const newText = currentSets;
            display.innerText = newText;
            headerDisplay.innerText = newText + 'x';
            
            display.classList.remove('animate-number-pop');
            void display.offsetWidth; 
            display.classList.add('animate-number-pop');
            
            headerDisplay.classList.remove('animate-number-pop');
            void headerDisplay.offsetWidth; 
            headerDisplay.classList.add('animate-number-pop');
        }

        function toggleSection(sectionName) {
            const card = document.getElementById(sectionName + '-card');
            const restore = document.getElementById(sectionName + '-restore');
            if (card.classList.contains('hidden')) {
                card.classList.remove('hidden');
                card.classList.add('block');
                restore.classList.add('hidden');
            } else {
                card.classList.add('hidden');
                card.classList.remove('block');
                restore.classList.remove('hidden');
            }
        }

        function openSetup(title, type) {
            setupTitle.innerText = title;
            setupScreen.classList.add('open');
            libScreen.classList.add('scaled');
            const badgeContainer = document.getElementById('setup-badge-container');
            const badgeText = document.getElementById('setup-badge-text');
            if(type && type !== '') {
                badgeContainer.classList.remove('hidden');
                badgeText.innerText = type;
            } else {
                badgeContainer.classList.add('hidden');
            }
            if(title === 'Norwegian 4x4') {
                document.getElementById('norwegian-pacing').classList.remove('hidden');
            } else {
                document.getElementById('norwegian-pacing').classList.add('hidden');
            }
        }

        function closeSetup() {
            setupScreen.classList.remove('open');
            libScreen.classList.remove('scaled');
        }

        function startWorkout(btn) {
            const container = document.getElementById('app-container');
            const containerRect = container.getBoundingClientRect();
            if(btn) {
                const btnRect = btn.getBoundingClientRect();
                const x = (btnRect.left + btnRect.width / 2) - containerRect.left;
                const y = (btnRect.top + btnRect.height / 2) - containerRect.top;
                timerScreen.style.setProperty('--ripple-x', `${x}px`);
                timerScreen.style.setProperty('--ripple-y', `${y}px`);
            }
            timerScreen.classList.add('active');
            setTimeout(() => {
                document.getElementById('timer-ui-1').classList.remove('opacity-0');
                document.getElementById('timer-ui-2').classList.remove('opacity-0');
                document.getElementById('timer-ui-3').classList.remove('opacity-0');
            }, 300);
        }

        function stopWorkout() {
            timerScreen.classList.remove('active');
            document.getElementById('timer-ui-1').classList.add('opacity-0');
            document.getElementById('timer-ui-2').classList.add('opacity-0');
            document.getElementById('timer-ui-3').classList.add('opacity-0');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-[100dvh] md:h-[90vh] md:max-h-[900px] flex flex-col relative overflow-hidden bg-black shadow-2xl md:rounded-[32px] md:border md:border-white/10" id="app-container">



<div className="main-view absolute inset-0 z-10 flex flex-col" id="screen-library">
<div className="bg-mesh-container">
<div className="gradient-blob blob-1"></div>
<div className="gradient-blob blob-2"></div>
</div>
<div className="px-5 pt-5 pb-2 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-transparent z-20 backdrop-blur-sm">
<header className="flex items-center justify-between py-2 mb-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-neutral-900 rounded-xl flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-5 h-5 text-indigo-400 relative z-10" data-lucide="activity"></i>
</div>
<div>
<span className="block text-sm font-semibold tracking-tight text-white leading-none">CHRONOS</span>
<span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Flow State</span>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="user"></i>
</button>
</header>
<div className="relative group mb-2">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur-sm opacity-20"></div>
<i className="h-4 w-4 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" data-lucide="sparkles"></i>
</div>
</div>
<input className="w-full h-11 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-xl pl-10 pr-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500/50 focus:bg-neutral-900 transition-all shadow-sm focus:shadow-[0_0_15px_rgba(99,102,241,0.1)]" id="ai-search-input" oninput="handleSearch(this)" placeholder="Ask AI to build a workout..." type="text"/>
</div>
</div>
<div className="flex-grow overflow-y-auto px-5 pb-24 space-y-8 no-scrollbar relative z-10">
<div className="transition-opacity duration-300" id="default-library-view">
<div className="mt-2">
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">Ready to train?</h1>
<p className="text-neutral-500 text-sm">Select a protocol to begin configuration.</p>
</div>
<div className="space-y-4 mt-8">

<div className="group relative bg-neutral-900/60 border border-white/5 rounded-3xl p-6 cursor-pointer overflow-hidden active:scale-[0.98] transition-all duration-300 hover:border-indigo-500/30 hover:bg-neutral-900/80 backdrop-blur-sm" onclick="openSetup('Norwegian 4x4', 'VO2 Max')">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<div className="inline-flex items-center px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-medium text-indigo-300 uppercase tracking-wide mb-2">VO2 Max</div>
<h3 className="text-xl font-medium text-white tracking-tight">Norwegian 4x4</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="flex items-end gap-1 h-16 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-full bg-neutral-800 rounded-sm h-[20%]"></div>
<div className="w-full bg-indigo-500 rounded-sm h-[90%] shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-sm h-[40%]"></div>
<div className="w-full bg-indigo-500 rounded-sm h-[90%] shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-sm h-[40%]"></div>
<div className="w-full bg-indigo-500 rounded-sm h-[90%] shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-sm h-[40%]"></div>
<div className="w-full bg-indigo-500 rounded-sm h-[90%] shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-sm h-[20%]"></div>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
<span className="text-xs text-neutral-400 font-mono">40:00 TOTAL</span>
<span className="text-xs text-neutral-400">High Intensity</span>
</div>
</div>

<div className="group relative bg-neutral-900/60 border border-white/5 rounded-3xl p-6 cursor-pointer overflow-hidden active:scale-[0.98] transition-all duration-300 hover:border-emerald-500/30 hover:bg-neutral-900/80 backdrop-blur-sm" onclick="openSetup('Tabata Protocol', 'HIIT')">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<div className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-300 uppercase tracking-wide mb-2">Anaerobic</div>
<h3 className="text-xl font-medium text-white tracking-tight">Tabata Protocol</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="flex items-end gap-[2px] h-16 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex-1 bg-emerald-500 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-neutral-800 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-emerald-500 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-neutral-800 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-emerald-500 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-neutral-800 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-emerald-500 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-neutral-800 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-emerald-500 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-neutral-800 rounded-sm h-[20%]"></div>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
<span className="text-xs text-neutral-400 font-mono">04:00 TOTAL</span>
<span className="text-xs text-neutral-400">Sprint</span>
</div>
</div>
</div>
</div>
<div className="hidden opacity-0" id="search-results-view"></div>
</div>
</div>



<div className="sheet flex flex-col z-20" id="screen-setup">
<div className="sticky top-0 bg-[#09090b]/90 backdrop-blur-xl z-30 pt-6 px-6 pb-2">
<div className="w-10 h-1 bg-neutral-800 rounded-full mx-auto mb-8"></div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<h2 className="text-[32px] font-semibold text-white tracking-tighter leading-none" id="setup-title">Setup</h2>
<div className="hidden translate-y-[1px]" id="setup-badge-container">
<span className="inline-flex items-center px-2 py-1 rounded-[6px] bg-[#1c1c21] border border-[#27272e] text-[10px] font-bold text-[#818cf8] uppercase tracking-wide" id="setup-badge-text">VO2 MAX</span>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-[#1c1c21] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors" onclick="closeSetup()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
<div className="flex-grow overflow-y-auto px-6 py-2 pb-40">
<div className="mb-5 px-1">
<p className="text-[17px] font-medium text-neutral-400">Customize your intervals</p>
</div>

<div className="relative mt-4">

<div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500/20 via-indigo-500 to-indigo-500/20 rounded-full z-0"></div>
<div className="space-y-6 relative z-10 pl-5">

<div className="relative group" id="warmup-container">
<div className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-neutral-700 z-10"></div>
<div className="bg-neutral-900/20 border border-white/5 rounded-xl py-2.5 px-3 transition-all hover:border-white/10 group-hover:bg-neutral-900/40" id="warmup-card">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="sun"></i>
<span className="text-xs font-medium text-neutral-400">Warm Up</span>
</div>
<div className="flex items-center gap-3">
<div className="text-xs font-mono text-neutral-500">05:00</div>
<button className="w-6 h-6 flex items-center justify-center rounded-lg text-neutral-600 hover:text-red-400 hover:bg-red-500/10 transition-colors" onclick="toggleSection('warmup')">
<i className="w-3 h-3" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
<div className="hidden" id="warmup-restore">
<button className="w-full py-2.5 border border-dashed border-white/10 rounded-xl text-[10px] text-neutral-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2" onclick="toggleSection('warmup')">
<i className="w-3 h-3" data-lucide="plus"></i> Add Warm Up
                                </button>
</div>
</div>

<div className="relative group">

<div className="absolute -left-[23px] top-7 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] border border-indigo-300 z-10"></div>

<div className="bg-[#0f111a] border border-indigo-500/20 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl relative" id="main-set-wrapper">

<div className="w-full flex items-center justify-between p-4 cursor-pointer relative z-20 hover:bg-white/[0.02] transition-colors" onclick="toggleIntervals()">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-inner">
<i className="w-5 h-5" data-lucide="repeat"></i>
</div>
<div>
<span className="block text-base font-semibold text-white tracking-tight leading-snug">Main Set</span>
<span className="block text-xs font-medium text-indigo-300/70">Custom Intensity</span>
</div>
</div>
<div className="flex items-center gap-3">

<div className="opacity-0 -translate-y-2 pointer-events-none transition-all duration-300 ease-out origin-right transform" id="header-set-count-container">
<div className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-bold text-indigo-300 min-w-[32px] text-center" id="header-set-count">3x</div>
</div>
<i className="w-4 h-4 text-indigo-400/50 transition-transform duration-300 transform rotate-180" data-lucide="chevron-up" id="chevron-icon"></i>
</div>
</div>

<div className="block border-t border-indigo-500/10" id="expanded-intervals">

<div className="p-4 space-y-5 bg-[#0B0C15]/50">

<div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<span className="text-sm font-medium text-neutral-300">Total Sets</span>
<div className="flex items-center bg-[#1c1c21] rounded-lg border border-white/10 p-1 h-9 shadow-inner" onclick="event.stopPropagation()">
<button className="w-9 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors active:bg-white/10" onclick="updateSets(-1)">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<div className="w-px h-4 bg-white/5"></div>
<div className="w-10 text-center">
<span className="text-sm font-mono font-bold text-white leading-none" id="set-count-display">3</span>
</div>
<div className="w-px h-4 bg-white/5"></div>
<button className="w-9 h-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors active:bg-white/10" onclick="updateSets(1)">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="space-y-5 transition-all duration-300 px-1" id="global-durations">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
<span className="text-sm font-medium text-indigo-200">Work Duration</span>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-2 rounded bg-indigo-500/10 text-[10px] text-indigo-300 font-mono border border-indigo-500/20 hover:bg-indigo-500/20 transition-all">+1m</button>
<button className="h-8 px-2 rounded bg-indigo-500/10 text-[10px] text-indigo-300 font-mono border border-indigo-500/20 hover:bg-indigo-500/20 transition-all">+15s</button>
<div className="h-9 px-3 min-w-[64px] flex items-center justify-center rounded-lg bg-black border border-indigo-500/30 text-sm font-mono text-white shadow-[0_0_15px_rgba(99,102,241,0.1)] scrubbable cursor-ns-resize hover:border-indigo-500/50 transition-colors" data-value="240">04:00</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
<span className="text-sm font-medium text-neutral-400">Rest Duration</span>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-2 rounded bg-[#1c1c21] text-[10px] text-neutral-500 font-mono border border-white/5 hover:text-white hover:bg-white/5 transition-all">+1m</button>
<button className="h-8 px-2 rounded bg-[#1c1c21] text-[10px] text-neutral-500 font-mono border border-white/5 hover:text-white hover:bg-white/5 transition-all">+15s</button>
<div className="h-9 px-3 min-w-[64px] flex items-center justify-center rounded-lg bg-[#111] border border-white/10 text-sm font-mono text-neutral-500 scrubbable cursor-ns-resize hover:border-white/20 transition-colors" data-value="180">03:00</div>
</div>
</div>
</div>
</div>

<div className="bg-black/20 border-t border-indigo-500/10">
<div className="w-full">
<button className="w-full py-3 px-4 flex items-center justify-between text-xs font-medium text-indigo-400/60 hover:text-indigo-300 transition-colors group" onclick="toggleIntervalDetail()">
<span>Customize each interval</span>
<div className="flex items-center gap-2">
<span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Click to adjust</span>
<i className="w-3.5 h-3.5 transition-transform duration-300" data-lucide="chevron-down" id="detail-chevron"></i>
</div>
</button>

<div className="hidden px-4 pb-4 space-y-3" id="interval-detail-list">

<div className="p-4 bg-[#141417] rounded-xl border border-white/5 shadow-inner">
<div className="flex items-center gap-4 mb-3">
<span className="text-xs font-semibold text-white tracking-tight shrink-0">Set 1</span>
<div className="h-px bg-white/5 flex-grow"></div>
</div>
<div className="flex flex-col gap-2">
<div className="w-full bg-black/40 rounded-lg p-1.5 flex items-center justify-between border border-indigo-500/10 group hover:border-indigo-500/20 transition-colors">
<span className="text-[10px] font-bold text-indigo-400 ml-2">WORK</span>
<div className="flex items-center gap-1">
<button className="w-8 h-6 flex items-center justify-center rounded-md bg-white/5 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors text-sm">-</button>
<div className="w-14 text-center font-mono text-xs text-white cursor-ns-resize select-none scrubbable" data-value="240">04:00</div>
<button className="w-8 h-6 flex items-center justify-center rounded-md bg-white/5 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors text-sm">+</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group" id="cooldown-container">
<div className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-neutral-700 z-10"></div>
<div className="bg-neutral-900/20 border border-white/5 rounded-xl py-2.5 px-3 transition-all hover:border-white/10 group-hover:bg-neutral-900/40" id="cooldown-card">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="wind"></i>
<span className="text-xs font-medium text-neutral-400">Cool Down</span>
</div>
<div className="flex items-center gap-3">
<div className="text-xs font-mono text-neutral-500">05:00</div>
<button className="w-6 h-6 flex items-center justify-center rounded-lg text-neutral-600 hover:text-red-400 hover:bg-red-500/10 transition-colors" onclick="toggleSection('cooldown')">
<i className="w-3 h-3" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
<div className="hidden" id="cooldown-restore">
<button className="w-full py-2.5 border border-dashed border-white/10 rounded-xl text-[10px] text-neutral-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2" onclick="toggleSection('cooldown')">
<i className="w-3 h-3" data-lucide="plus"></i> Add Cool Down
                                </button>
</div>
</div>
</div>
</div>

<div className="hidden mt-8 mb-4 pl-4" id="norwegian-pacing">
<div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="flex items-start gap-3 relative z-10">
<div className="mt-0.5 min-w-[16px]">
<i className="w-4 h-4 text-indigo-300" data-lucide="zap"></i>
</div>
<div>
<span className="block text-xs font-semibold text-indigo-200 uppercase tracking-wide mb-1">Pacing Strategy</span>
<p className="text-xs leading-relaxed text-indigo-200/80">
                                    Maintain max effort in the 4 minutes. This isn't a 30s sprint—it's a 4-minute sustain. Don't start too fast.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black to-transparent z-40">
<button className="w-full bg-white text-black font-semibold h-14 rounded-full flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-all relative z-50 overflow-hidden" id="start-btn" onclick="startWorkout(this)">
<span className="relative z-10">Start Session</span>
<i className="w-4 h-4 fill-black relative z-10" data-lucide="play"></i>
</button>
</div>
</div>



<div className="ripple-screen flex flex-col bg-black" id="screen-timer">

<div className="flex items-center justify-between p-6 mt-4 opacity-0 transition-opacity duration-700 delay-300 relative z-20" id="timer-ui-1">
<button className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors" onclick="stopWorkout()">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</button>
<div className="flex flex-col items-center">
<span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">Interval 1/3</span>
</div>
<div className="w-10"></div>
</div>

<div className="flex-grow flex flex-col items-center justify-center relative -mt-10 opacity-0 transition-opacity duration-700 delay-200" id="timer-ui-2">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
<div className="w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
</div>
<div className="relative flex items-center justify-center w-72 h-72">
<div className="absolute inset-0 rounded-full border border-white/5 scale-110"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-125 opacity-50"></div>
<svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewbox="0 0 100 100">
<circle className="text-white" cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="10 10" strokeWidth="0.5"></circle>
</svg>
<div className="absolute w-48 h-48 rounded-full bg-indigo-500/20 blur-2xl animate-breathe"></div>
<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle cx="50%" cy="50%" fill="transparent" r="46%" stroke="#262626" strokeWidth="4"></circle>
<circle className="ring-progress shadow-[0_0_15px_rgba(99,102,241,0.5)]" cx="50%" cy="50%" fill="transparent" r="46%" stroke="#6366f1" stroke-dasharray="870" stroke-dashoffset="100" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center z-10">
<span className="text-7xl font-mono font-medium tracking-tighter text-white drop-shadow-2xl tabular-nums leading-none">09:58</span>
<div className="absolute top-[62%] flex items-center gap-2 opacity-80">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-sm font-medium text-indigo-400 tracking-tight">Work</span>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-0 p-1 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-2xl relative z-30">
<button className="w-16 h-10 rounded-xl text-sm font-mono font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center tracking-tight">-1m</button>
<div className="w-px h-4 bg-white/10"></div>
<button className="w-16 h-10 rounded-xl text-sm font-mono font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center tracking-tight">-15s</button>
<div className="w-px h-4 bg-white/10"></div>
<button className="w-16 h-10 rounded-xl text-sm font-mono font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center tracking-tight">+15s</button>
<div className="w-px h-4 bg-white/10"></div>
<button className="w-16 h-10 rounded-xl text-sm font-mono font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center tracking-tight">+1m</button>
</div>
</div>

<div className="p-8 pb-12 w-full opacity-0 transition-opacity duration-700 delay-500 relative z-20" id="timer-ui-3">
<div className="flex justify-between items-center mb-8 px-4">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Elapsed</span>
<span className="text-xl font-mono text-white">05:02</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Remaining</span>
<span className="text-xl font-mono text-white">35:58</span>
</div>
</div>
<div className="grid grid-cols-3 items-center gap-4">
<div className="flex justify-start">
<button className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white flex items-center justify-center active:scale-95 transition-all">
<i className="w-5 h-5" data-lucide="rotate-ccw"></i>
</button>
</div>
<div className="flex justify-center">
<button className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95 transition-all">
<i className="w-8 h-8 fill-black" data-lucide="pause"></i>
</button>
</div>
<div className="flex justify-end">
<button className="h-12 px-5 rounded-full bg-neutral-900 border border-white/5 text-white flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-neutral-800 hover:border-white/10 group">
<span className="text-xs font-semibold tracking-wide">Skip</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] opacity-0 pointer-events-none transition-opacity duration-200 group" id="scrubber-overlay">
<div className="relative w-48 h-56 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden cursor-ns-resize" id="scrubber-modal">

<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-white/5 border-y border-white/5 z-0 pointer-events-none"></div>

<div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#161616] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#161616] to-transparent z-10 pointer-events-none"></div>

<div className="relative z-0 flex flex-col items-center gap-0 transition-transform duration-75 ease-linear will-change-transform pointer-events-none" id="scrubber-wheel">
<div className="h-12 flex items-center justify-center text-xl font-mono text-neutral-600 font-medium opacity-50" id="scrubber-item-1">--:--</div>
<div className="h-12 flex items-center justify-center text-xl font-mono text-neutral-600 font-medium opacity-50" id="scrubber-item-2">--:--</div>
<div className="h-12 flex items-center justify-center text-3xl font-mono text-indigo-400 font-bold drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" id="scrubber-item-3">--:--</div>
<div className="h-12 flex items-center justify-center text-xl font-mono text-neutral-600 font-medium opacity-50" id="scrubber-item-4">--:--</div>
<div className="h-12 flex items-center justify-center text-xl font-mono text-neutral-600 font-medium opacity-50" id="scrubber-item-5">--:--</div>
</div>

<div className="absolute bottom-3 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold z-20 pointer-events-none">Adjust Duration</div>
</div>
<div className="absolute top-10 text-white/50 text-sm font-medium tracking-wide pointer-events-none">Tap anywhere to close</div>
</div>


    </>
  );
}
