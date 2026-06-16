import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // DOM Elements
        const els = {
            prize: document.getElementById('prize'),
            winnersCount: document.getElementById('winnersCount'),
            namesList: document.getElementById('namesList'),
            nameCount: document.getElementById('nameCount'),
            removeWinners: document.getElementById('removeWinners'),
            allowDuplicates: document.getElementById('allowDuplicates'),
            seedInput: document.getElementById('seedInput'),
            
            drawBtn: document.getElementById('drawBtn'),
            resetBtn: document.getElementById('resetBtn'),
            clearBtn: document.getElementById('clearBtn'),
            cancelBtn: document.getElementById('cancelBtn'),
            copySeedBtn: document.getElementById('copySeedBtn'),
            copyWinnersBtn: document.getElementById('copyWinnersBtn'),
            errorMsg: document.getElementById('errorMsg'),
            
            emptyState: document.getElementById('emptyState'),
            drawingState: document.getElementById('drawingState'),
            resultsState: document.getElementById('resultsState'),
            
            drawingProgress: document.getElementById('drawingProgress'),
            tickerText: document.getElementById('tickerText'),
            
            resultsSubtitle: document.getElementById('resultsSubtitle'),
            winnersGrid: document.getElementById('winnersGrid'),
            auditTime: document.getElementById('auditTime'),
            auditSeed: document.getElementById('auditSeed'),
            
            inputsGroup: document.querySelectorAll('#controls-panel input, #controls-panel textarea, #controls-panel button')
        };

        // State
        const state = {
            isDrawing: false,
            abortController: null,
            audioCtx: null,
            rng: null,
            winners: [],
            finalSeed: ""
        };

        // Utility: Seeded RNG implementation (Mulberry32 + xmur3 hash)
        function xmur3(str) {
            for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
                h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
                h = h << 13 | h >>> 19;
            }
            return function() {
                h = Math.imul(h ^ (h >>> 16), 2246822507);
                h = Math.imul(h ^ (h >>> 13), 3266489909);
                return (h ^= h >>> 16) >>> 0;
            }
        }
        function mulberry32(a) {
            return function() {
              var t = a += 0x6D2B79F5;
              t = Math.imul(t ^ t >>> 15, t | 1);
              t ^= t + Math.imul(t ^ t >>> 7, t | 61);
              return ((t ^ t >>> 14) >>> 0) / 4294967296;
            }
        }

        // Utility: Audio Tick
        function playTick() {
            try {
                if (!state.audioCtx) {
                    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
                if (state.audioCtx.state === 'suspended') {
                    state.audioCtx.resume();
                }
                const osc = state.audioCtx.createOscillator();
                const gain = state.audioCtx.createGain();
                osc.connect(gain);
                gain.connect(state.audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, state.audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, state.audioCtx.currentTime + 0.03);
                gain.gain.setValueAtTime(0.05, state.audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, state.audioCtx.currentTime + 0.03);
                osc.start();
                osc.stop(state.audioCtx.currentTime + 0.03);
            } catch (e) { /* Ignore audio errors */ }
        }

        // Utility: Confetti (Canvas based)
        function fireConfetti() {
            const canvas = document.createElement('canvas');
            canvas.style.position = 'fixed';
            canvas.style.inset = '0';
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '9999';
            document.body.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const colors = ['#a855f7', '#d946ef', '#ec4899', '#e2e8f0', '#8b5cf6'];
            
            // Burst from center bottom
            const originX = canvas.width / 2;
            const originY = canvas.height;

            for(let i=0; i<120; i++) {
                particles.push({
                    x: originX,
                    y: originY - 50,
                    r: Math.random() * 4 + 2,
                    dx: (Math.random() - 0.5) * (canvas.width * 0.015),
                    dy: Math.random() * -15 - 10,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    tilt: Math.floor(Math.random() * 10) - 10,
                    tiltAngleInc: (Math.random() * 0.07) + 0.05,
                    tiltAngle: 0
                });
            }

            let animationId;
            let frameCount = 0;

            function render() {
                ctx.clearRect(0,0, canvas.width, canvas.height);
                let active = false;
                
                particles.forEach(p => {
                    p.tiltAngle += p.tiltAngleInc;
                    p.y += p.dy;
                    p.x += Math.sin(p.tiltAngle) * 2 + p.dx;
                    p.dy += 0.3; // gravity
                    
                    if(p.y < canvas.height + 20) active = true;
                    
                    ctx.beginPath();
                    ctx.lineWidth = p.r;
                    ctx.strokeStyle = p.color;
                    ctx.moveTo(p.x + p.tilt + p.r, p.y);
                    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
                    ctx.stroke();
                });

                if(active && frameCount < 300) {
                    frameCount++;
                    animationId = requestAnimationFrame(render);
                } else {
                    document.body.removeChild(canvas);
                }
            }
            render();
        }

        // Core App Logic
        function getCleanNames() {
            return els.namesList.value.split('\n')
                .map(n => n.trim())
                .filter(n => n.length > 0);
        }

        function updateNameCount() {
            const count = getCleanNames().length;
            els.nameCount.textContent = `${count} name${count !== 1 ? 's' : ''}`;
        }

        function showError(msg) {
            els.errorMsg.textContent = msg;
            els.errorMsg.classList.remove('hidden');
            setTimeout(() => els.errorMsg.classList.add('hidden'), 4000);
        }

        function setUILocked(locked) {
            state.isDrawing = locked;
            els.inputsGroup.forEach(el => {
                if (el !== els.cancelBtn) {
                    el.disabled = locked;
                    if(locked) el.classList.add('opacity-50', 'cursor-not-allowed');
                    else el.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
            if(locked) {
                els.drawBtn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="1.2em" height="1.2em"></iconify-icon> Drawing...`;
            } else {
                els.drawBtn.innerHTML = `<iconify-icon icon="solar:ticket-linear" width="1.2em" height="1.2em" stroke-width="1.5"></iconify-icon> Draw Winners`;
            }
        }

        function showState(view) {
            els.emptyState.classList.add('hidden');
            els.drawingState.classList.add('hidden');
            els.resultsState.classList.add('hidden');
            
            if(view === 'empty') els.emptyState.classList.remove('hidden');
            if(view === 'drawing') els.drawingState.classList.remove('hidden');
            if(view === 'results') {
                els.resultsState.classList.remove('hidden');
                els.resultsState.classList.add('animate-fade-in');
            }
        }

        // Ticker Animation Sequence
        async function runTickerForWinner(pool, winnerIndex, totalWinners, signal) {
            els.drawingProgress.textContent = `Picking Winner ${winnerIndex} of ${totalWinners}`;
            
            const minDuration = totalWinners === 1 ? 1500 : 900;
            const maxDuration = totalWinners === 1 ? 2000 : 1200;
            const duration = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration);
            
            const startTime = performance.now();
            let lastTick = 0;
            let currentDelay = 40;
            
            // Determine final winner secretly
            const winIndex = Math.floor(state.rng() * pool.length);
            const finalSelectedName = pool[winIndex];

            return new Promise((resolve, reject) => {
                const tick = (now) => {
                    if (signal.aborted) return reject(new Error('Aborted'));
                    
                    const elapsed = now - startTime;

                    if (elapsed > duration) {
                        els.tickerText.textContent = finalSelectedName;
                        els.tickerText.style.transform = 'scale(1.1)';
                        els.tickerText.style.color = '#a855f7';
                        setTimeout(() => {
                            els.tickerText.style.transform = 'scale(1)';
                            els.tickerText.style.color = 'white';
                        }, 200);
                        playTick();
                        resolve({ name: finalSelectedName, index: winIndex });
                        return;
                    }

                    if (now - lastTick > currentDelay) {
                        const randomDisplayIndex = Math.floor(Math.random() * pool.length);
                        els.tickerText.textContent = pool[randomDisplayIndex];
                        playTick();
                        lastTick = now;
                        
                        // Easing curve for slow down
                        const progress = elapsed / duration;
                        currentDelay = 40 + (Math.pow(progress, 3) * 300); 
                    }
                    requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        }

        // Main Draw Action
        async function startDraw() {
            if (state.isDrawing) return;
            
            const names = getCleanNames();
            const count = parseInt(els.winnersCount.value, 10);
            const allowDups = els.allowDuplicates.checked;
            const prize = els.prize.value.trim();

            if (isNaN(count) || count < 1 || count > 50) return showError("Please enter a valid number of winners (1-50).");
            if (names.length === 0) return showError("Please enter at least one name.");
            if (!allowDups && count > names.length) return showError(`Not enough unique names. You need at least ${count}.`);

            // Setup Seed
            state.finalSeed = els.seedInput.value.trim();
            if (!state.finalSeed) {
                state.finalSeed = Math.random().toString(36).substring(2, 10).toUpperCase();
                els.seedInput.value = state.finalSeed; // Display auto-generated seed
            }
            const seedFunc = xmur3(state.finalSeed);
            state.rng = mulberry32(seedFunc());

            // Prepare UI
            setUILocked(true);
            showState('drawing');
            state.abortController = new AbortController();
            const signal = state.abortController.signal;
            state.winners = [];
            els.winnersGrid.innerHTML = '';

            let availablePool = [...names];
            let drawnIndicesToRemove = []; // Keep track of original array lines to remove if needed

            try {
                for (let i = 0; i < count; i++) {
                    // Small pause between draws
                    if (i > 0) await new Promise(r => setTimeout(r, 400));
                    
                    const result = await runTickerForWinner(availablePool, i + 1, count, signal);
                    state.winners.push(result.name);
                    
                    // Logic to handle available pool
                    if (!allowDups) {
                        // Find index in ORIGINAL names list to facilitate textarea removal later
                        const originalIndex = names.indexOf(result.name);
                        if(originalIndex !== -1 && !drawnIndicesToRemove.includes(originalIndex)){
                            drawnIndicesToRemove.push(originalIndex);
                        }
                        
                        // Remove from current running pool
                        availablePool.splice(result.index, 1);
                    }
                }

                // Finalize Draw
                finishDraw(prize, drawnIndicesToRemove);

            } catch (err) {
                if (err.message === 'Aborted') {
                    resetUI(false); // Soft reset
                } else {
                    console.error(err);
                    showError("An error occurred during draw.");
                    resetUI(false);
                }
            }
        }

        function finishDraw(prize, indicesToRemove) {
            // Render Winners
            els.resultsSubtitle.innerHTML = prize ? `Winners of: <span class="text-zinc-200 font-medium">${prize}</span>` : 'Raffle Winners';
            
            state.winners.forEach((winner, idx) => {
                const card = document.createElement('div');
                card.className = 'bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4 animate-slide-up opacity-0 shadow-sm';
                card.style.animationDelay = `${idx * 0.1}s`;
                card.innerHTML = `
                    <div class="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-medium text-sm shrink-0">
                        #${idx + 1}
                    </div>
                    <div class="text-lg font-medium text-zinc-100 truncate flex-1" title="${winner}">
                        ${winner}
                    </div>
                `;
                els.winnersGrid.appendChild(card);
            });

            // Audit
            els.auditTime.textContent = `Drawn at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}`;
            els.auditSeed.textContent = state.finalSeed;

            // Remove winners from textarea if checked
            if (els.removeWinners.checked && !els.allowDuplicates.checked) {
                const lines = els.namesList.value.split('\n');
                const newLines = lines.filter(line => {
                    const trimmed = line.trim();
                    return trimmed === '' || !state.winners.includes(trimmed);
                });
                els.namesList.value = newLines.join('\n');
                updateNameCount();
            }

            // Show Results
            showState('results');
            fireConfetti();
            setUILocked(false);
        }

        function cancelDraw() {
            if (state.abortController) {
                state.abortController.abort();
            }
        }

        function resetUI(clearOutput = true) {
            setUILocked(false);
            if(clearOutput) {
                showState('empty');
                state.winners = [];
                els.winnersGrid.innerHTML = '';
            }
        }

        function copySeed() {
            navigator.clipboard.writeText(state.finalSeed).then(() => {
                const icon = els.copySeedBtn.querySelector('iconify-icon');
                const origIcon = icon.getAttribute('icon');
                icon.setAttribute('icon', 'solar:check-circle-linear');
                setTimeout(() => icon.setAttribute('icon', origIcon), 2000);
            });
        }

        function copyWinners() {
            const prize = els.prize.value.trim();
            let text = prize ? `🎉 Winners of ${prize} 🎉\n\n` : `🎉 Raffle Winners 🎉\n\n`;
            state.winners.forEach((w, i) => {
                text += `${i + 1}. ${w}\n`;
            });
            text += `\nSeed: ${state.finalSeed}\nTimestamp: ${new Date().toLocaleString()}`;
            
            navigator.clipboard.writeText(text).then(() => {
                const origHTML = els.copyWinnersBtn.innerHTML;
                els.copyWinnersBtn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="1.2em" height="1.2em" stroke-width="1.5"></iconify-icon> Copied!`;
                setTimeout(() => els.copyWinnersBtn.innerHTML = origHTML, 2000);
            });
        }

        // Event Listeners
        els.namesList.addEventListener('input', updateNameCount);
        els.drawBtn.addEventListener('click', startDraw);
        els.cancelBtn.addEventListener('click', cancelDraw);
        els.resetBtn.addEventListener('click', () => resetUI(true));
        els.clearBtn.addEventListener('click', () => {
            if(confirm('Are you sure you want to clear all names?')) {
                els.namesList.value = '';
                updateNameCount();
            }
        });
        els.copySeedBtn.addEventListener('click', copySeed);
        els.copyWinnersBtn.addEventListener('click', copyWinners);

        // Init
        updateNameCount();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
<div className="max-w-7xl mx-auto w-full p-4 md:px-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-xs font-medium tracking-tighter text-white">
                FMM
            </div>
<h1 className="text-base font-medium tracking-tight text-zinc-200">Raffle Picker</h1>
</div>
</header>

<main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

<section className="lg:col-span-4 flex flex-col gap-6" id="controls-panel">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-5 flex flex-col gap-5">

<div className="grid grid-cols-3 gap-4">
<div className="col-span-2 flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="prize">Prize Label</label>
<input className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full" id="prize" placeholder="e.g. Viltrox Tote Bags" type="text"/>
</div>
<div className="col-span-1 flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="winnersCount">Winners</label>
<input className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-sm text-zinc-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full text-center" id="winnersCount" max="50" min="1" type="number" value="4"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-end">
<label className="text-xs font-medium text-zinc-400" htmlFor="namesList">Names List</label>
<span className="text-xs text-zinc-500" id="nameCount">0 names</span>
</div>
<textarea className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full resize-none font-normal leading-relaxed" id="namesList" placeholder="Paste names here...
One name per line" rows="8"></textarea>
</div>

<div className="flex flex-col gap-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox" id="removeWinners" type="checkbox"/>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Remove winners after draw</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" id="allowDuplicates" type="checkbox"/>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Allow duplicate winners</span>
</label>
</div>

<div className="flex flex-col gap-1.5 pt-2 border-t border-zinc-800/50">
<label className="text-xs font-medium text-zinc-400" htmlFor="seedInput">Custom Seed (Optional)</label>
<input className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full font-mono" id="seedInput" placeholder="Leave blank to auto-generate" type="text"/>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-lg py-2.5 px-4 text-sm font-medium transition-all shadow-sm shadow-purple-900/20 flex items-center justify-center gap-2" id="drawBtn">
<iconify-icon height="1.2em" icon="solar:ticket-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
                    Draw Winners
                </button>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-transparent border border-zinc-800 hover:bg-zinc-900 text-zinc-300 rounded-lg py-2 px-4 text-xs font-medium transition-colors flex items-center justify-center gap-1.5" id="resetBtn">
<iconify-icon height="1.2em" icon="solar:refresh-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
                        Reset Draw
                    </button>
<button className="w-full bg-transparent border border-zinc-800 hover:bg-zinc-900 hover:text-red-400 text-zinc-300 rounded-lg py-2 px-4 text-xs font-medium transition-colors flex items-center justify-center gap-1.5" id="clearBtn">
<iconify-icon height="1.2em" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
                        Clear Names
                    </button>
</div>
<div className="hidden text-xs text-red-400 text-center bg-red-400/10 border border-red-400/20 rounded-lg p-2 mt-2" id="errorMsg"></div>
</div>
</section>

<section className="lg:col-span-8 flex flex-col h-full min-h-[500px] relative">

<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 animate-fade-in z-0" id="emptyState">
<iconify-icon className="mb-4 opacity-50" height="3em" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" width="3em"></iconify-icon>
<p className="text-sm">Ready to draw.</p>
<p className="text-xs mt-1 text-zinc-700">Enter names and configure settings to begin.</p>
</div>

<div className="absolute inset-0 hidden flex-col items-center justify-center bg-zinc-950 z-10" id="drawingState">
<div className="text-center w-full max-w-lg px-4 flex flex-col items-center">
<p className="text-sm font-medium text-purple-400 mb-6 uppercase tracking-widest animate-pulse" id="drawingProgress">Picking Winner 1 of 4</p>
<div className="w-full h-32 relative flex items-center justify-center ticker-mask border-y border-zinc-800/50 ticker-active bg-zinc-900/20">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis px-4 w-full text-center" id="tickerText">
                            Preparing...
                        </div>
</div>
<button className="mt-12 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 rounded-full py-2 px-6 text-xs font-medium transition-colors" id="cancelBtn">
                        Cancel Draw
                    </button>
</div>
</div>

<div className="absolute inset-0 hidden flex-col z-20 overflow-y-auto bg-zinc-950 pb-8" id="resultsState">
<div className="flex-1">
<div className="text-center pt-8 pb-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-3">Congratulations!</h2>
<p className="text-base text-zinc-400" id="resultsSubtitle">Winners of: <span className="text-zinc-200">The Prize</span></p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto w-full px-4" id="winnersGrid">

</div>
</div>
<div className="max-w-3xl mx-auto w-full px-4 mt-12 border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col gap-1 w-full md:w-auto text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 text-xs text-zinc-500">
<iconify-icon height="1.2em" icon="solar:history-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
<span id="auditTime">Drawn at ...</span>
</div>
<div className="flex items-center justify-center md:justify-start gap-2 text-xs text-zinc-500 group">
<iconify-icon height="1.2em" icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
<span>Seed: <span className="font-mono text-zinc-400" id="auditSeed">...</span></span>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 hover:text-purple-300 ml-1" id="copySeedBtn" title="Copy Seed">
<iconify-icon height="1.2em" icon="solar:copy-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</button>
</div>
</div>
<button className="w-full md:w-auto bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 rounded-lg py-2 px-4 text-xs font-medium transition-colors flex items-center justify-center gap-2" id="copyWinnersBtn">
<iconify-icon height="1.2em" icon="solar:copy-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
                        Copy Winners
                    </button>
</div>
</div>
</section>
</main>



    </>
  );
}
