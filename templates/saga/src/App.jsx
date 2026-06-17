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



        // --- Navigation Logic ---
        function navigateTo(screenId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(sec => {
                sec.classList.add('hidden');
                sec.classList.remove('flex');
            });
            const target = document.getElementById(`screen-${screenId}`);
            target.classList.remove('hidden');
            target.classList.add('flex', 'fade-enter');
            setTimeout(() => target.classList.remove('fade-enter'), 600);
        }

        // --- Radar Logic ---
        const radarArea = document.getElementById('radar-area');
        const blip = document.getElementById('radar-blip');
        const moodReadout = document.getElementById('mood-readout');
        let isDraggingRadar = false;

        function updateRadarPosition(clientX, clientY) {
            const rect = radarArea.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const radius = rect.width / 2;

            let x = clientX - centerX;
            let y = clientY - centerY;

            // Clamp inside circle
            const distance = Math.sqrt(x * x + y * y);
            if (distance > radius) {
                const angle = Math.atan2(y, x);
                x = Math.cos(angle) * radius;
                y = Math.sin(angle) * radius;
            }

            // Update blip visual
            // +50% is center, we add our offset in % relative to width
            const percentX = 50 + (x / rect.width) * 100;
            const percentY = 50 + (y / rect.height) * 100;

            blip.style.left = `${percentX}%`;
            blip.style.top = `${percentY}%`;

            // Update Text based on quadrant
            // Y negative is Top, X negative is Left
            if (y < 0 && x < 0) moodReadout.innerText = "Dark & Vivid";
            else if (y < 0 && x >= 0) moodReadout.innerText = "Bright & Vivid";
            else if (y >= 0 && x < 0) moodReadout.innerText = "Dark & Calm";
            else moodReadout.innerText = "Bright & Calm";
        }

        function handleRadarStart(e) {
            isDraggingRadar = true;
            handleRadarMove(e);
        }

        function handleRadarEnd() {
            isDraggingRadar = false;
        }

        function handleRadarMove(e) {
            if (!isDraggingRadar) return;
            e.preventDefault();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            updateRadarPosition(clientX, clientY);
        }

        radarArea.addEventListener('mousedown', handleRadarStart);
        radarArea.addEventListener('touchstart', handleRadarStart, { passive: false });
        window.addEventListener('mousemove', handleRadarMove);
        window.addEventListener('touchmove', handleRadarMove, { passive: false });
        window.addEventListener('mouseup', handleRadarEnd);
        window.addEventListener('touchend', handleRadarEnd);

        // --- Event Selection Logic ---
        function setEvent(btn, text) {
            document.getElementById('event-input').value = text;
            // Visual feedback on chips
            document.querySelectorAll('.event-chip').forEach(c => {
                c.classList.remove('bg-zinc-800', 'text-white', 'border-violet-500');
                c.classList.add('bg-zinc-900/50', 'text-zinc-400', 'border-zinc-800');
            });
            btn.classList.remove('bg-zinc-900/50', 'text-zinc-400', 'border-zinc-800');
            btn.classList.add('bg-zinc-800', 'text-white', 'border-violet-500/50');
        }

        function selectCard(element, type) {
            const container = element.parentElement;
            container.querySelectorAll(type === 'voice' ? '.voice-card' : '.pref-card').forEach(btn => {
                btn.classList.remove('border-violet-900/40', 'bg-zinc-900');
                btn.classList.add('border-zinc-800', 'bg-zinc-900/30');
                const icon = btn.querySelector('iconify-icon:not(.check-icon)');
                if(icon && type === 'voice') {
                    icon.parentElement.classList.remove('text-violet-200/70', 'text-white');
                    icon.parentElement.classList.add('text-zinc-500');
                } else if (icon && type === 'amb') {
                    icon.classList.remove('text-violet-200/70');
                    icon.classList.add('text-zinc-500');
                }
                const check = btn.querySelector('.check-icon');
                if(check) check.classList.add('opacity-0');
            });
            
            element.classList.remove('border-zinc-800', 'bg-zinc-900/30');
            element.classList.add('border-violet-900/40', 'bg-zinc-900');
            const icon = element.querySelector('iconify-icon:not(.check-icon)');
            if(icon && type === 'voice') {
                icon.parentElement.classList.remove('text-zinc-500');
                icon.parentElement.classList.add('text-white');
            } else if (icon && type === 'amb') {
                icon.classList.remove('text-zinc-500');
                icon.classList.add('text-violet-200/70');
            }
            const check = element.querySelector('.check-icon');
            if(check) check.classList.remove('opacity-0');
        }

        // --- Generation Logic ---
        function startGeneration() {
            navigateTo('loading');
            const inputVal = document.getElementById('event-input').value || "History";
            document.querySelector('#screen-playback h2').innerText = inputVal;

            const loadText = document.getElementById('loading-text');
            const steps = [
                "Fact checking dates...",
                "Analyzing historical context...",
                "Synthesizing narrative...",
                "Mixing ambient audio..."
            ];
            
            let step = 0;
            const interval = setInterval(() => {
                if (step < steps.length) {
                    loadText.innerText = steps[step];
                    step++;
                }
            }, 800);

            setTimeout(() => {
                clearInterval(interval);
                navigateTo('playback');
                isPlaying = true;
                const icon = document.getElementById('play-icon');
                icon.setAttribute('icon', 'lucide:pause');
            }, 3500);
        }

        let isPlaying = true;
        function togglePlay() {
            const icon = document.getElementById('play-icon');
            if (isPlaying) {
                icon.setAttribute('icon', 'lucide:play');
                isPlaying = false;
            } else {
                icon.setAttribute('icon', 'lucide:pause');
                isPlaying = true;
            }
        }
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>

<main className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-8 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">

<section className="w-full flex flex-col items-center justify-between h-[90vh] py-2 transition-all duration-700" id="screen-creator">

<div className="text-center space-y-3 mt-4">
<h1 className="font-display text-4xl md:text-5xl text-zinc-100 font-light tracking-tight leading-tight">Dream Deep.<br/><span className="text-violet-200/50 italic">Wake Up Smarter.</span></h1>
</div>

<div className="w-full flex-1 flex flex-col items-center justify-center relative min-h-[300px]">
<div className="absolute top-2 left-0 right-0 text-center z-20 pointer-events-none space-y-1">
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Story Mood</span>
<div className="text-lg font-display text-zinc-200 tracking-tight transition-all" id="mood-readout">Deep Focus</div>
</div>

<div className="relative w-64 h-64 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] touch-none cursor-crosshair group mt-8" id="radar-area">

<div className="absolute inset-0 rounded-full border border-zinc-800/50 scale-75 pointer-events-none"></div>
<div className="absolute inset-0 rounded-full border border-zinc-800/30 scale-50 pointer-events-none"></div>
<div className="absolute inset-0 rounded-full border border-zinc-800/20 scale-25 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-zinc-800/50 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-zinc-800/50 pointer-events-none"></div>

<div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-transparent to-violet-500/30 origin-bottom-right animate-radar-sweep blur-md"></div>
</div>

<span className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none">Vivid</span>
<span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none">Calm</span>
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none -rotate-90">Dark</span>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none rotate-90">Bright</span>

<div className="absolute w-4 h-4 -ml-2 -mt-2 bg-zinc-100 rounded-full shadow-[0_0_15px_rgba(167,139,250,0.6)] z-30 transition-transform duration-75 ease-out flex items-center justify-center" id="radar-blip" style={{top: '50%', left: '50%'}}>
<div className="w-full h-full rounded-full animate-blip bg-violet-400 absolute opacity-50"></div>
</div>
</div>
<p className="mt-6 text-[10px] text-zinc-600 uppercase tracking-widest">Adjust coordinates</p>
</div>

<div className="w-full max-w-xs space-y-3 mb-4 z-20">
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="lucide:hourglass" width="12"></iconify-icon>
                        Select Historic Event
                    </label>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="event-chip shrink-0 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 hover:text-zinc-100 hover:border-violet-500/30 transition-all whitespace-nowrap" onclick="setEvent(this, 'The Moon Landing')">Moon Landing</button>
<button className="event-chip shrink-0 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 hover:text-zinc-100 hover:border-violet-500/30 transition-all whitespace-nowrap" onclick="setEvent(this, 'The Fall of Rome')">Fall of Rome</button>
<button className="event-chip shrink-0 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 hover:text-zinc-100 hover:border-violet-500/30 transition-all whitespace-nowrap" onclick="setEvent(this, 'Invention of Printing')">Printing Press</button>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-600 group-focus-within:text-violet-400/70 transition-colors" icon="lucide:search" width="14"></iconify-icon>
</div>
<input className="input-glass w-full py-3 pl-9 pr-3 rounded-lg text-sm text-zinc-200 placeholder-zinc-600 transition-all font-light tracking-wide" id="event-input" placeholder="Or type any event..." type="text"/>
</div>
</div>
<button className="group relative w-full h-12 bg-zinc-100 hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 active:scale-[0.98] shadow-lg shadow-violet-900/10 mt-2" onclick="startGeneration()">
<span className="text-black font-medium tracking-wide text-sm flex items-center gap-2">
                        Generate Story
                        <iconify-icon className="text-violet-600 opacity-80" icon="lucide:sparkles" width="16"></iconify-icon>
</span>
</button>
<div className="flex justify-center">
<button className="flex items-center space-x-2 text-[10px] text-zinc-600 hover:text-zinc-300 transition-colors uppercase tracking-widest font-medium py-2" onclick="navigateTo('preferences')">
<iconify-icon icon="lucide:settings-2" width="12"></iconify-icon>
<span>Configuration</span>
</button>
</div>
</div>
</section>

<section className="hidden w-full max-w-lg flex-col h-[85vh] justify-between transition-all duration-700" id="screen-preferences">
<header className="flex items-center justify-between mb-2 shrink-0">
<div>
<h2 className="font-display text-2xl text-zinc-200 font-light tracking-tight">Preferences</h2>
</div>
<button className="p-2 rounded-full hover:bg-zinc-900 text-zinc-500 hover:text-zinc-200 transition-colors" onclick="navigateTo('creator')">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pb-8 pr-1 pt-6">

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-600 uppercase tracking-widest">Narrator Voice</label>
<div className="space-y-2">
<button className="voice-card w-full group flex items-center justify-between p-3 rounded-lg border border-violet-900/40 bg-zinc-900 transition-all" onclick="selectCard(this, 'voice')">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-violet-200/70 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:mic" width="16"></iconify-icon>
</div>
<div className="text-left">
<span className="block text-sm text-zinc-100">The Historian</span>
<span className="block text-[10px] text-zinc-500">Wise, authoritative, calm</span>
</div>
</div>
<iconify-icon className="text-violet-500/80 check-icon" icon="lucide:check" width="16"></iconify-icon>
</button>
<button className="voice-card w-full group flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all" onclick="selectCard(this, 'voice')">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-violet-200/70 transition-colors">
<iconify-icon icon="lucide:mic-2" width="16"></iconify-icon>
</div>
<div className="text-left">
<span className="block text-sm text-zinc-300 group-hover:text-zinc-100">Soft Whisper</span>
<span className="block text-[10px] text-zinc-600">Gentle, calming, close</span>
</div>
</div>
<iconify-icon className="text-violet-500/80 opacity-0 transition-opacity check-icon" icon="lucide:check" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-600 uppercase tracking-widest">Background Ambience</label>
<div className="grid grid-cols-3 gap-3">
<button className="pref-card group relative p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-violet-900/40 transition-all duration-300 flex flex-col items-center justify-center gap-2 h-24" onclick="selectCard(this, 'amb')">
<iconify-icon className="text-zinc-500 group-hover:text-violet-200/70 transition-colors" icon="lucide:library" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Library</span>
</button>
<button className="pref-card group relative p-3 rounded-xl border border-violet-900/40 bg-zinc-900 transition-all duration-300 flex flex-col items-center justify-center gap-2 h-24" onclick="selectCard(this, 'amb')">
<iconify-icon className="text-violet-200/70 transition-colors" icon="lucide:flame" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Fireplace</span>
</button>
<button className="pref-card group relative p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-violet-900/40 transition-all duration-300 flex flex-col items-center justify-center gap-2 h-24" onclick="selectCard(this, 'amb')">
<iconify-icon className="text-zinc-500 group-hover:text-violet-200/70 transition-colors" icon="lucide:wind" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">White Noise</span>
</button>
</div>
</div>
</div>
<div className="pt-6 shrink-0 border-t border-zinc-900">
<button className="w-full h-12 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-lg flex items-center justify-center transition-all duration-300" onclick="navigateTo('creator')">
                    Apply Settings
                </button>
</div>
</section>

<section className="hidden w-full flex-col items-center justify-center text-center space-y-12 transition-all duration-1000 h-[85vh]" id="screen-loading">
<div className="relative flex items-center justify-center">
<div className="w-56 h-56 rounded-full bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 blur-3xl animate-pulse absolute"></div>
<div className="relative w-32 h-32">
<div className="absolute inset-0 rounded-full border border-zinc-800 border-t-violet-500 animate-[spin_3s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-zinc-800 border-b-fuchsia-500/50 animate-[spin_4s_linear_infinite_reverse]"></div>
</div>
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 z-10 flex items-center justify-center absolute shadow-2xl">
<iconify-icon className="text-violet-400 animate-pulse" icon="lucide:hourglass" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-2 h-16">
<h2 className="font-display text-2xl text-zinc-100 tracking-tight">Accessing Archives...</h2>
<div className="h-4 overflow-hidden relative">
<p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest absolute w-full transition-all duration-500" id="loading-text">Researching Era</p>
</div>
</div>
</section>

<section className="hidden w-full h-[90vh] max-w-lg flex flex-col justify-between py-6 transition-all duration-1000" id="screen-playback">
<div className="flex justify-between items-start">
<button className="p-2 -ml-2 text-zinc-600 hover:text-zinc-300 transition-colors" onclick="navigateTo('creator')">
<iconify-icon icon="lucide:chevron-down" width="24"></iconify-icon>
</button>
<div className="flex gap-2">
<button className="p-2 text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:moon" width="20"></iconify-icon>
</button>
<button className="p-2 -mr-2 text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="relative w-64 h-64 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] flex items-center justify-center animate-pulse group overflow-hidden" id="playback-orb">
<div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-indigo-900/20 opacity-80"></div>
<div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="relative z-10 text-center space-y-2">
<iconify-icon className="text-violet-200/50" icon="lucide:history" width="64"></iconify-icon>
</div>
</div>
<div className="mt-10 text-center space-y-2 z-10 px-6">
<h2 className="font-display text-3xl text-zinc-100 font-light tracking-tight leading-tight">The Moon Landing</h2>
<p className="text-zinc-500 text-xs font-medium tracking-wide">A Step for Mankind • 1969</p>
</div>
</div>
<div className="space-y-8 w-full z-10 px-4 mb-4">
<div className="space-y-3 group">
<input className="w-full h-[2px] bg-zinc-800 rounded-lg appearance-none cursor-pointer" type="range" value="0"/>
<div className="flex justify-between text-[10px] text-zinc-600 font-medium font-mono uppercase tracking-wider group-hover:text-zinc-500 transition-colors">
<span>00:00</span>
<span>24:00</span>
</div>
</div>
<div className="flex items-center justify-center gap-10">
<button className="text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:rotate-ccw" width="20"></iconify-icon>
</button>
<button className="w-16 h-16 bg-zinc-100 hover:bg-white text-black rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-violet-900/10" id="play-pause-btn" onclick="togglePlay()">
<iconify-icon className="ml-0.5" icon="lucide:pause" id="play-icon" width="24"></iconify-icon>
</button>
<button className="text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:rotate-cw" width="20"></iconify-icon>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
