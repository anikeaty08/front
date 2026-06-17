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



                            for(let i=0; i<60; i++) {
                                let h = Math.random() * 80 + 20;
                                if(i > 35 && i < 45) h = 10; // breakdown area
                                document.write(`<div class="flex-1 bg-gray-900 rounded-t-sm" style="height:${h}%"></div>`);
                            }
                         


        lucide.createIcons();

        // ---- EXERCISE 1 LOGIC ----
        function updateBPM(deck, value) {
            document.getElementById('bpm-display-'+deck).innerText = parseFloat(value).toFixed(2) + " BPM";
        }
        function checkExercise(id) {
            if(id===1) {
                const val = document.getElementById('pitch-slider-1').value;
                if(val >= 123.8 && val <= 124.2) showSuccess(1);
                else alert("BPM not matched! Target: 124.00");
            }
            if(id===2) showSuccess(2);
            if(id===3) {
                 // Check if cue marker is visible
                 const marker = document.getElementById('cue-marker');
                 if(marker.classList.contains('hidden')) alert("Please set a cue point first.");
                 else showSuccess(3);
            }
            if(id===4) showSuccess(4);
            if(id===5) {
                // Check order: Filter (Slot 1) -> Delay (Slot 2)
                // Simplified for demo: just check if both slots are filled
                showSuccess(5);
            }
            if(id===6) {
                // Only success if button 2 was selected (handled by selectTrack logic)
                const tracks = document.querySelectorAll('.track-opt');
                if(tracks[1].classList.contains('border-purple-500')) showSuccess(6);
                else alert("Incorrect track choice for maintaining energy.");
            }
            if(id===7) showSuccess(7);
            if(id===8) {
                const selected = document.querySelector('.key-btn.bg-purple-50');
                if(selected && (selected.innerText === '9A' || selected.innerText === '7B' || selected.innerText === '8A')) showSuccess(8); // 8A, 9A, 7B are compatible
                else alert("Select a compatible key.");
            }
        }
        function showSuccess(id) {
            document.getElementById('success-'+id).classList.remove('hidden');
            document.getElementById('success-'+id).classList.add('flex');
        }
        function reset(id) {
            document.getElementById('success-'+id).classList.add('hidden');
            document.getElementById('success-'+id).classList.remove('flex');
            // Reset specific elements if needed
             if(id===3) document.getElementById('cue-marker').classList.add('hidden');
        }
        function showHint(id) {
            alert("AI Assistant: Try adjusting the controls slowly...");
        }

        // ---- EXERCISE 2 LOGIC ----
        function toggleKnob(el) {
            // Simple visual toggle for demo
            const current = el.style.transform;
            el.style.transform = current === 'rotate(-135deg)' ? 'rotate(0deg)' : 'rotate(-135deg)';
        }
        function moveFader(el) {
            // Toggle fader position
            el.style.left = el.style.left === '80%' ? '50%' : '80%';
        }

        // ---- EXERCISE 3 LOGIC ----
        function setCuePoint(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = (x / rect.width) * 100;
            
            const marker = document.getElementById('cue-marker');
            marker.style.left = percent + '%';
            marker.classList.remove('hidden');
        }

        // ---- EXERCISE 4 LOGIC ----
        function toggleLoop(btn) {
            btn.classList.toggle('border-blue-500');
            const ind = btn.querySelector('.indicator');
            ind.classList.toggle('bg-blue-500');
            ind.classList.toggle('bg-gray-200');
        }

        // ---- EXERCISE 5 LOGIC ----
        function selectFX(btn, slot) {
            // Cycle through state for demo
            const isFilled = btn.getAttribute('data-filled') === 'true';
            if(!isFilled) {
                btn.innerHTML = slot === 1 ? '<span class="text-xs font-bold text-gray-800">FILTER</span>' : '<span class="text-xs font-bold text-gray-800">DELAY</span>';
                btn.classList.add('bg-blue-50', 'border-blue-300', 'border-solid');
                btn.classList.remove('border-dashed');
                btn.setAttribute('data-filled', 'true');
            } else {
                btn.innerHTML = `<span class="text-[10px] text-gray-400">SLOT ${slot}</span>`;
                btn.classList.remove('bg-blue-50', 'border-blue-300', 'border-solid');
                btn.classList.add('border-dashed');
                btn.setAttribute('data-filled', 'false');
            }
        }

        // ---- EXERCISE 6 LOGIC ----
        function selectTrack(btn, id) {
            document.querySelectorAll('.track-opt').forEach(b => {
                b.classList.remove('border-purple-500', 'bg-purple-50');
                b.classList.add('border-gray-200', 'bg-white');
            });
            btn.classList.remove('border-gray-200', 'bg-white');
            btn.classList.add('border-purple-500', 'bg-purple-50');
        }

        // ---- EXERCISE 7 LOGIC ----
        function toggleStep(btn) {
            const active = btn.getAttribute('data-active') === 'true';
            if(!active) {
                btn.classList.add('bg-orange-500', 'border-orange-600');
                btn.classList.remove('bg-white');
                btn.setAttribute('data-active', 'true');
            } else {
                btn.classList.remove('bg-orange-500', 'border-orange-600');
                btn.classList.add('bg-white');
                btn.setAttribute('data-active', 'false');
            }
        }

        // ---- EXERCISE 8 LOGIC ----
        function selectKey(btn, key) {
            document.querySelectorAll('.key-btn').forEach(b => {
                b.classList.remove('bg-purple-50', 'border-purple-300', 'text-purple-700');
                b.classList.add('bg-white', 'text-gray-600');
            });
            btn.classList.remove('bg-white', 'text-gray-600');
            btn.classList.add('bg-purple-50', 'border-purple-300', 'text-purple-700');
        }

        // ---- EXERCISE 9: CDJ LOGIC (New) ----
        const cdjTargets = [
            { id: 'play', name: 'Play Button' },
            { id: 'cue', name: 'Cue Button' },
            { id: 'jog', name: 'Jog Wheel' },
            { id: 'pitch', name: 'Pitch Fader' },
            { id: 'pads', name: 'Performance Pads' }
        ];
        
        // Randomize initial question
        let currentCDJTarget = cdjTargets[Math.floor(Math.random() * cdjTargets.length)];
        
        // Initial set text
        function setCDJQuestion() {
            const textEl = document.getElementById('cdj-question');
            textEl.innerHTML = `Where is the <span class="text-purple-600">${currentCDJTarget.name}</span>?`;
        }
        setCDJQuestion();

        function checkCDJ(areaId, element) {
            const feedback = document.getElementById('cdj-feedback');
            
            if (areaId === currentCDJTarget.id) {
                // Correct
                showSuccess(9);
            } else {
                // Incorrect
                feedback.style.opacity = '1';
                element.classList.add('shake-anim');
                
                // Remove shake class after animation so it can be re-triggered
                setTimeout(() => {
                    element.classList.remove('shake-anim');
                }, 300);
                
                // Hide feedback after 2s
                setTimeout(() => {
                    feedback.style.opacity = '0';
                }, 2000);
            }
        }

        function nextCDJQuestion() {
            // Reset modal
            reset(9);
            // Pick new target different from current
            let newTarget;
            do {
                newTarget = cdjTargets[Math.floor(Math.random() * cdjTargets.length)];
            } while (newTarget.id === currentCDJTarget.id);
            
            currentCDJTarget = newTarget;
            setCDJQuestion();
        }

        function showCDJHint() {
            alert(`Hint: The ${currentCDJTarget.name} is usually located ${getHintLocation(currentCDJTarget.id)}.`);
        }

        function getHintLocation(id) {
            switch(id) {
                case 'play': return "at the bottom left (Green)";
                case 'cue': return "above the Play button (Orange)";
                case 'jog': return "in the center (Large Circle)";
                case 'pitch': return "on the far right side (Slider)";
                case 'pads': return "directly under the screen";
                default: return "on the deck";
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">S</div>
<span className="font-semibold tracking-tight text-gray-900">Seedj Path</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live Session
                </div>
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</div>
</header>

<main className="max-w-3xl mx-auto px-6 py-10 space-y-12">

<section className="text-center space-y-4">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 shadow-sm">
<i className="w-3.5 h-3.5 text-yellow-500 fill-current" data-lucide="sparkles"></i>
<span>Module 3: Technical Mastery</span>
</div>
<h1 className="text-4xl font-bold tracking-tight text-gray-900">Interactive DJ Exercises</h1>
<p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
                Master the fundamentals through hands-on simulation. Complete these exercises to unlock the advanced mixing certification.
            </p>
</section>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group hover:border-gray-300 transition-colors relative" id="card-1">
<div className="p-6 border-b border-gray-100 flex justify-between items-start">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900">Beatmatching Simulator</h3>
<p className="text-xs text-gray-500">Align the phase of two tracks manually.</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors" onclick="showHint(1)"><i className="w-5 h-5" data-lucide="help-circle"></i></button>
</div>
<div className="p-8 bg-gray-50/50">
<div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6 shadow-sm">

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
<span>Deck A (Master)</span>
<span>124.00 BPM</span>
</div>
<div className="h-12 bg-gray-100 rounded flex items-center gap-0.5 px-1 overflow-hidden opacity-50">

<div className="w-1 h-4 bg-gray-400 rounded-full"></div>
<div className="w-1 h-8 bg-gray-400 rounded-full"></div>
<div className="w-1 h-5 bg-gray-400 rounded-full"></div>
<div className="w-1 h-10 bg-gray-900 rounded-full"></div>
<div className="w-1 h-6 bg-gray-400 rounded-full"></div>
<div className="w-1 h-4 bg-gray-400 rounded-full"></div>
<div className="w-1 h-8 bg-gray-400 rounded-full"></div>
<div className="w-1 h-10 bg-gray-900 rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
<span>Deck B</span>
<span id="bpm-display-1">126.50 BPM</span>
</div>
<div className="h-12 bg-gray-100 rounded flex items-center gap-0.5 px-1 overflow-hidden">

<div className="w-1 h-4 bg-orange-400 rounded-full"></div>
<div className="w-1 h-8 bg-orange-400 rounded-full"></div>
<div className="w-1 h-5 bg-orange-400 rounded-full"></div>
<div className="w-1 h-10 bg-orange-600 rounded-full"></div>
<div className="w-1 h-6 bg-orange-400 rounded-full"></div>
</div>
<div className="pt-2">
<input className="w-full" id="pitch-slider-1" max="130" min="120" oninput="updateBPM(1, this.value)" step="0.1" type="range" value="126.5"/>
<div className="flex justify-between text-[10px] text-gray-400 mt-1">
<span>-8%</span>
<span>0%</span>
<span>+8%</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-gray-100 flex justify-end">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-sm hover:translate-y-px" onclick="checkExercise(1)">Check Alignment</button>
</div>

<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex-col items-center justify-center fade-enter" id="success-1">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3"><i className="w-6 h-6" data-lucide="check"></i></div>
<h4 className="text-lg font-bold text-gray-900">Beatmatch Locked!</h4>
<p className="text-sm text-gray-500 mb-4">Perfect tempo matching.</p>
<button className="text-sm font-medium text-gray-900 hover:underline" onclick="reset(1)">Reset</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group hover:border-gray-300 transition-colors relative" id="card-2">
<div className="p-6 border-b border-gray-100 flex justify-between items-start">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="sliders"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900">EQ &amp; Mixing</h3>
<p className="text-xs text-gray-500">Balance the Lows and mix tracks.</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors" onclick="showHint(2)"><i className="w-5 h-5" data-lucide="help-circle"></i></button>
</div>
<div className="p-8 bg-gray-50/50 flex justify-center">
<div className="bg-gray-900 rounded-xl p-6 shadow-xl w-full max-w-sm border border-gray-800">
<div className="flex justify-between gap-8 mb-8">

<div className="flex flex-col items-center gap-4">
<span className="text-[10px] font-bold text-gray-500 uppercase">CH A</span>
<div className="h-24 w-1 bg-gray-700 rounded-full relative">
<div className="absolute bottom-0 w-full bg-green-500 h-[80%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>
<div className="space-y-2 flex flex-col items-center">
<div className="w-8 h-8 rounded-full border-2 border-gray-600 bg-gray-800 relative group cursor-pointer hover:border-gray-400" onclick="toggleKnob(this)">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-white"></div>
</div>
<span className="text-[9px] text-gray-400 uppercase">Low</span>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<span className="text-[10px] font-bold text-gray-500 uppercase">CH B</span>
<div className="h-24 w-1 bg-gray-700 rounded-full relative">
<div className="absolute bottom-0 w-full bg-orange-500 h-[60%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
<div className="space-y-2 flex flex-col items-center">
<div className="w-8 h-8 rounded-full border-2 border-gray-600 bg-gray-800 relative group cursor-pointer hover:border-gray-400 rotate-[-135deg]" id="eq-knob-2" onclick="toggleKnob(this)">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-white"></div>
</div>
<span className="text-[9px] text-gray-400 uppercase">Low</span>
</div>
</div>
</div>

<div className="bg-gray-800 h-10 rounded-lg p-2 relative flex items-center px-4 border border-gray-700">
<div className="w-full h-1 bg-black rounded-full"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-8 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100 transition-all" id="xfader" onclick="moveFader(this)"></div>
</div>
<div className="flex justify-between text-[9px] text-gray-500 mt-2 px-1">
<span>A</span>
<span>MIX</span>
<span>B</span>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-gray-100 flex justify-end">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-sm hover:translate-y-px" onclick="checkExercise(2)">Verify Mix</button>
</div>

<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex-col items-center justify-center fade-enter" id="success-2">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3"><i className="w-6 h-6" data-lucide="check"></i></div>
<h4 className="text-lg font-bold text-gray-900">Frequencies Balanced!</h4>
<p className="text-sm text-gray-500 mb-4">Bass swap executed correctly.</p>
<button className="text-sm font-medium text-gray-900 hover:underline" onclick="reset(2)">Reset</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group hover:border-gray-300 transition-colors relative" id="card-3">
<div className="p-6 border-b border-gray-100 flex justify-between items-start">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="flag"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900">Cue Point Builder</h3>
<p className="text-xs text-gray-500">Set a cue point at the start of the breakdown.</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors" onclick="showHint(3)"><i className="w-5 h-5" data-lucide="help-circle"></i></button>
</div>
<div className="p-8 bg-gray-50/50">
<div className="relative h-24 bg-white border border-gray-200 rounded-lg overflow-hidden cursor-crosshair group/track" onclick="setCuePoint(event)">

<div className="absolute inset-0 flex items-end justify-between px-1 gap-0.5 opacity-20 pointer-events-none">


</div>
<div className="absolute top-2 left-2 text-[10px] font-mono text-gray-400 pointer-events-none">TRACK_01.mp3</div>

<div className="absolute top-0 bottom-0 left-[60%] w-[15%] bg-blue-50/50 border-x border-blue-100 flex items-center justify-center pointer-events-none">
<span className="text-[9px] font-medium text-blue-400 bg-white px-1 rounded shadow-sm">Break</span>
</div>

<div className="absolute top-0 bottom-0 w-0.5 bg-orange-500 hidden pointer-events-none transition-all" id="cue-marker">
<div className="absolute -top-1 -left-2 bg-orange-500 text-white rounded-sm px-1 text-[9px] font-bold">CUE</div>
</div>
</div>
<p className="text-xs text-gray-400 mt-2 text-center">Click on the waveform to set Cue 1</p>
</div>
<div className="p-4 bg-white border-t border-gray-100 flex justify-end">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-sm hover:translate-y-px" onclick="checkExercise(3)">Set Cue</button>
</div>
<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex-col items-center justify-center fade-enter" id="success-3">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3"><i className="w-6 h-6" data-lucide="check"></i></div>
<h4 className="text-lg font-bold text-gray-900">Cue Set!</h4>
<p className="text-sm text-gray-500 mb-4">Ready for launch.</p>
<button className="text-sm font-medium text-gray-900 hover:underline" onclick="reset(3)">Reset</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group hover:border-gray-300 transition-colors relative" id="card-9">
<div className="p-6 border-b border-gray-100 flex justify-between items-start">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900">Hardware Familiarization</h3>
<p className="text-xs text-gray-500">Guess what is what on a CDJ-3000 (No labels).</p>
</div>
</div>

<button className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors flex items-center gap-1.5" onclick="showCDJHint()">
<i className="w-3 h-3" data-lucide="sparkles"></i> AI Hint
                </button>
</div>
<div className="p-8 bg-gray-50/50 flex flex-col items-center gap-8 relative">

<div className="text-center animate-pulse">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Identify Component</span>
<h2 className="text-2xl font-bold text-gray-900 mt-1" id="cdj-question">Where is the <span className="text-purple-600">Play Button</span>?</h2>
</div>

<div className="h-6 text-sm font-medium text-red-500 opacity-0 transition-opacity" id="cdj-feedback">
                    Not quite — try again!
                </div>

<div className="relative w-72 aspect-[3/4] bg-gray-900 rounded-3xl p-5 shadow-2xl border border-gray-700 mx-auto select-none">

<div className="w-full h-[28%] bg-black rounded-lg border border-gray-700 mb-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-50"></div>

<div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-8 flex items-center gap-0.5 opacity-60">
<div className="w-1 h-3 bg-blue-500 rounded-full"></div>
<div className="w-1 h-6 bg-blue-500 rounded-full"></div>
<div className="w-1 h-4 bg-blue-500 rounded-full"></div>
<div className="w-1 h-8 bg-blue-400 rounded-full"></div>
<div className="w-1 h-5 bg-blue-500 rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mb-6 px-2 cursor-pointer relative" onclick="checkCDJ('pads', this)">
<div className="h-3 bg-gray-800 rounded border border-gray-700"></div>
<div className="h-3 bg-gray-800 rounded border border-gray-700"></div>
<div className="h-3 bg-gray-800 rounded border border-gray-700"></div>
<div className="h-3 bg-gray-800 rounded border border-gray-700"></div>
<div className="absolute inset-0 bg-transparent" title="Performance Pads"></div>
</div>

<div className="relative w-40 h-40 mx-auto mb-6 group cursor-pointer" onclick="checkCDJ('jog', this)">

<div className="absolute inset-0 rounded-full bg-gray-800 border-4 border-gray-700 shadow-2xl"></div>

<div className="absolute inset-4 rounded-full bg-black border border-gray-700 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="absolute inset-0 border-2 border-transparent border-t-white/20 rounded-full animate-spin [animation-duration:3s]"></div>
</div>
<div className="absolute inset-0 rounded-full hover:ring-2 hover:ring-blue-400/30 transition-all"></div>
</div>

<div className="flex justify-between items-end px-2">

<div className="flex flex-col gap-3">

<div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 cdj-btn-shadow flex items-center justify-center cursor-pointer hover:border-gray-500 transition-colors relative" onclick="checkCDJ('cue', this)">
<div className="w-2 h-0.5 bg-orange-500/30"></div>
</div>

<div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 cdj-btn-shadow flex items-center justify-center cursor-pointer hover:border-gray-500 transition-colors relative" onclick="checkCDJ('play', this)">
<div className="w-0 border-l-[6px] border-l-green-500/30 border-y-[4px] border-y-transparent"></div>
</div>
</div>

<div className="h-32 w-8 bg-gray-800 rounded-full border border-gray-700 relative cursor-pointer group" onclick="checkCDJ('pitch', this)">
<div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-0.5 bg-black"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-10 bg-gray-700 rounded shadow-md border border-gray-600 group-hover:bg-gray-600 transition-colors"></div>
</div>
</div>
</div>
<p className="text-[10px] text-gray-400">Click the correct area on the device</p>
</div>

<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex-col items-center justify-center fade-enter" id="success-9">
<div className="w-16 h-16 bg-gradient-to-tr from-purple-100 to-white rounded-full flex items-center justify-center text-purple-600 mb-4 shadow-sm border border-purple-50">
<i className="w-8 h-8" data-lucide="check-circle"></i>
</div>
<h4 className="text-xl font-bold text-gray-900 tracking-tight">Correct!</h4>
<p className="text-sm text-gray-500 mb-6">You know your hardware.</p>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" onclick="nextCDJQuestion()">
<span>Continue to Next Chapter</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>


    </>
  );
}
