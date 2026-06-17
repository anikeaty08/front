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



        lucide.createIcons();

        // Game State
        const state = {
            status: 'WAITING',
            multiplier: 1.00,
            startTime: 0,
            crashPoint: 0,
            history: [],
            bets: {
                1: { amount: 10, active: false, cashingOut: false },
                2: { amount: 20, active: false, cashingOut: false }
            }
        };

        // Canvas Setup
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        let animationFrame;

        function resizeCanvas() {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            // Redraw if stationary
            if(state.status !== 'FLYING') {
                if(state.status === 'CRASHED') drawGame(state.crashPoint);
                else drawGame(1.0);
            }
        }
        window.addEventListener('resize', resizeCanvas);
        // Initial resize
        setTimeout(resizeCanvas, 100);

        function startGame() {
            state.status = 'WAITING';
            state.multiplier = 1.00;
            state.crashPoint = generateCrashPoint();
            updateUIState();
            
            document.getElementById('game-message').style.opacity = '0';
            document.getElementById('loading-bar').classList.remove('hidden');
            
            // Draw clean grid
            drawGame(1.0);

            setTimeout(() => {
                document.getElementById('loading-bar').classList.add('hidden');
                state.status = 'FLYING';
                state.startTime = Date.now();
                updateUIState();
                requestAnimationFrame(gameLoop);
            }, 3000);
        }

        function gameLoop() {
            if (state.status !== 'FLYING') return;

            const now = Date.now();
            const elapsed = (now - state.startTime) / 1000;
            state.multiplier = Math.pow(Math.E, 0.06 * elapsed * 2.5); // Simulation speed

            if (state.multiplier >= state.crashPoint) {
                crash();
            } else {
                drawGame(state.multiplier);
                document.getElementById('game-status').innerText = state.multiplier.toFixed(2) + 'x';
                updatePlayerWins(state.multiplier);
                animationFrame = requestAnimationFrame(gameLoop);
            }
        }

        function crash() {
            state.status = 'CRASHED';
            cancelAnimationFrame(animationFrame);
            
            document.getElementById('game-status').innerText = state.crashPoint.toFixed(2) + 'x';
            document.getElementById('game-status').classList.add('text-rose-500');
            document.getElementById('game-status').classList.remove('text-white');
            document.getElementById('game-message').style.opacity = '1';
            document.getElementById('game-message').innerText = `FLEW AWAY @ ${state.crashPoint.toFixed(2)}x`;
            
            addToHistory(state.crashPoint);
            
            Object.keys(state.bets).forEach(id => {
                if(state.bets[id].active) {
                    state.bets[id].active = false;
                    state.bets[id].cashingOut = false;
                }
            });

            updateUIState();

            setTimeout(() => {
                document.getElementById('game-status').classList.remove('text-rose-500');
                document.getElementById('game-status').classList.add('text-white');
                // Reset bots for visual flair
                generateLiveBets(); 
                startGame();
            }, 4000);
        }

        function drawGame(currentMultiplier) {
            const w = canvas.width;
            const h = canvas.height;
            
            ctx.clearRect(0, 0, w, h);

            // Subtle Grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            const gridSize = 40;
            for(let i=0; i<w; i+=gridSize) { ctx.moveTo(i, 0); ctx.lineTo(i, h); }
            for(let i=0; i<h; i+=gridSize) { ctx.moveTo(0, i); ctx.lineTo(w, i); }
            ctx.stroke();

            // Math for curve
            const maxVisualX = 8; // how wide the curve gets before scrolling logic (simplified)
            const t = Math.min((currentMultiplier - 1) / (maxVisualX - 1), 1.0);
            
            // Adjust padding based on screen size
            const paddingX = w < 500 ? 20 : 50;
            const paddingY = h < 300 ? 20 : 50;

            const startX = paddingX;
            const startY = h - paddingY;
            
            // Logarithmic/Exponential curve visual approximation
            // Using a simple quadratic for smooth visual in demo
            const endX = startX + (w - paddingX * 2) * t;
            const controlX = startX + (endX - startX) * 0.5;
            // Height grows exponentially
            const heightFactor = Math.pow(t, 0.7); 
            const endY = startY - (h - paddingY * 2) * heightFactor;

            // Gradient Fill
            const gradient = ctx.createLinearGradient(0, endY, 0, h);
            gradient.addColorStop(0, 'rgba(225, 29, 72, 0.2)');
            gradient.addColorStop(1, 'rgba(225, 29, 72, 0)');

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(controlX, endY, endX, endY);
            ctx.lineTo(endX, h);
            ctx.lineTo(startX, h);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Stroke
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(controlX, endY, endX, endY);
            ctx.strokeStyle = '#e11d48';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Plane Icon
            if (state.status !== 'CRASHED') {
                ctx.save();
                ctx.translate(endX, endY);
                // Calculate tangent angle for rotation
                // Simplified rotation for demo
                const angle = -15 - (t * 30); 
                ctx.rotate(angle * Math.PI / 180);
                
                // Draw rocket/plane shape
                ctx.fillStyle = '#f43f5e'; // rose-500
                // Body
                ctx.beginPath();
                ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2);
                ctx.fill();
                // Tail
                ctx.fillStyle = '#be123c'; // rose-700
                ctx.beginPath();
                ctx.moveTo(-10, 0);
                ctx.lineTo(-18, -6);
                ctx.lineTo(-18, 6);
                ctx.fill();
                // Window
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(5, -1, 3, 0, Math.PI*2);
                ctx.fill();
                
                // Thruster particle
                if(state.status === 'FLYING') {
                   ctx.fillStyle = `rgba(255, 160, 0, ${Math.random()})`;
                   ctx.beginPath();
                   ctx.arc(-18, 0, 4 + Math.random()*3, 0, Math.PI*2);
                   ctx.fill();
                }

                ctx.restore();
            }
        }

        // Logic Helpers
        function generateCrashPoint() {
            if(Math.random() < 0.03) return 1.00; // 3% instant crash
            // Simple pareto distribution
            const r = 1 / (1 - Math.random());
            return Math.min(Math.floor(r * 100) / 100, 1000); // cap at 1000x for demo
        }

        function addToHistory(val) {
            state.history.unshift(val);
            if(state.history.length > 20) state.history.pop();
            renderHistory();
        }

        function renderHistory() {
            const containers = [document.getElementById('history-bar'), document.getElementById('mobile-history-bar')];
            containers.forEach(el => {
                if(!el) return;
                el.innerHTML = state.history.map(val => {
                    let colorClass = 'text-blue-400 border-blue-400/20 bg-blue-400/5';
                    if (val >= 2.0) colorClass = 'text-purple-400 border-purple-400/20 bg-purple-400/5';
                    if (val >= 10.0) colorClass = 'text-rose-400 border-rose-400/20 bg-rose-400/5';
                    
                    return `<div class="px-2 py-1 rounded md:rounded-md text-[10px] md:text-xs font-semibold border ${colorClass} shrink-0 select-none">${val.toFixed(2)}x</div>`;
                }).join('');
            });
        }

        function adjustBet(id, dir) {
            const input = document.getElementById(`bet-input-${id}`);
            let val = parseFloat(input.value) + dir;
            if(val < 1) val = 1;
            input.value = val.toFixed(2);
            state.bets[id].amount = val;
            updateButtonLabels(id);
        }

        function setBet(id, val) {
            const input = document.getElementById(`bet-input-${id}`);
            input.value = val.toFixed(2);
            state.bets[id].amount = val;
            updateButtonLabels(id);
        }

        function updateButtonLabels(id) {
            document.getElementById(`lbl-${id}-amount`).innerText = parseFloat(document.getElementById(`bet-input-${id}`).value).toFixed(2) + ' USD';
        }

        function toggleBet(id) {
            const btn = document.getElementById(`btn-${id}`);
            const betState = state.bets[id];

            if (state.status === 'FLYING' && betState.active) {
                // Cashout
                const win = betState.amount * state.multiplier;
                betState.active = false;
                betState.cashingOut = false;
                
                // Success styling
                btn.classList.remove('bg-amber-500', 'shadow-[0_3px_0_0_#b45309]');
                btn.classList.add('bg-[#28a909]', 'shadow-[0_3px_0_0_#1e7e07]');
                document.getElementById(`lbl-${id}-action`).innerText = "BET";
                
                // Simple toast
                const toast = document.createElement('div');
                toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50 animate-bounce text-sm font-bold';
                toast.innerText = `+${win.toFixed(2)} USD`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 2000);

            } else if (state.status === 'WAITING') {
                if (!betState.active) {
                    betState.active = true;
                    btn.classList.remove('bg-[#28a909]', 'shadow-[0_3px_0_0_#1e7e07]');
                    btn.classList.add('bg-rose-500', 'hover:bg-rose-600', 'shadow-[0_3px_0_0_#be123c]');
                    document.getElementById(`lbl-${id}-action`).innerText = "CANCEL";
                } else {
                    betState.active = false;
                    btn.classList.add('bg-[#28a909]', 'shadow-[0_3px_0_0_#1e7e07]');
                    btn.classList.remove('bg-rose-500', 'hover:bg-rose-600', 'shadow-[0_3px_0_0_#be123c]');
                    document.getElementById(`lbl-${id}-action`).innerText = "BET";
                }
            }
        }

        function updateUIState() {
            [1, 2].forEach(id => {
                const btn = document.getElementById(`btn-${id}`);
                const betState = state.bets[id];

                if (state.status === 'FLYING') {
                    if (betState.active) {
                        btn.classList.remove('bg-rose-500', 'shadow-[0_3px_0_0_#be123c]');
                        btn.classList.add('bg-amber-500', 'hover:bg-amber-400', 'shadow-[0_3px_0_0_#b45309]');
                        document.getElementById(`lbl-${id}-action`).innerText = "CASH OUT";
                        document.getElementById(`lbl-${id}-amount`).innerText = (betstate.bets[id].amount * state.multiplier).toFixed(2) + ' USD';
                    } else {
                        // Inactive during flight (already cashed out or didn't bet)
                        btn.className = "flex-1 rounded-lg bg-[#15202b] text-slate-500 border border-white/5 cursor-not-allowed flex flex-col items-center justify-center h-full opacity-50";
                        btn.style.boxShadow = 'none';
                        document.getElementById(`lbl-${id}-action`).innerText = "WAIT";
                        document.getElementById(`lbl-${id}-amount`).innerText = "";
                    }
                } 
                else if (state.status === 'CRASHED') {
                    // Crashed state
                    btn.className = "flex-1 rounded-lg bg-rose-950/20 border border-rose-500/20 text-rose-500 cursor-not-allowed flex flex-col items-center justify-center h-full";
                    btn.style.boxShadow = 'none';
                    document.getElementById(`lbl-${id}-action`).innerText = "CRASHED";
                    document.getElementById(`lbl-${id}-amount`).innerText = "";
                } 
                else {
                    // WAITING state - Reset to default interactive styles
                    btn.className = "flex-1 rounded-lg shadow-[0_3px_0_0_#1e7e07] active:shadow-none active:translate-y-[3px] transition-all flex flex-col items-center justify-center text-white border-t border-white/10 group select-none";
                    
                    if (betState.active) {
                        // User has placed a bet for next round
                        btn.classList.add('bg-rose-500', 'hover:bg-rose-600', 'shadow-[0_3px_0_0_#be123c]');
                        document.getElementById(`lbl-${id}-action`).innerText = "CANCEL";
                    } else {
                        // Ready to bet
                        btn.classList.add('bg-[#28a909]', 'hover:bg-[#2dbd0a]', 'shadow-[0_3px_0_0_#1e7e07]');
                        document.getElementById(`lbl-${id}-action`).innerText = "BET";
                    }
                    document.getElementById(`lbl-${id}-amount`).innerText = betState.amount.toFixed(2) + ' USD';
                }
            });
        }

        function updatePlayerWins(multiplier) {
            // Update cashout button numbers in real-time during flight
            [1, 2].forEach(id => {
                if (state.bets[id].active) {
                    const currentWin = state.bets[id].amount * multiplier;
                    document.getElementById(`lbl-${id}-amount`).innerText = currentWin.toFixed(2) + ' USD';
                }
            });
        }

        function generateLiveBets() {
            // Populate right sidebar with dummy data
            const container = document.getElementById('live-bets-container');
            if (!container) return;

            let html = '';
            // Generate random rows simulating other players
            for(let i = 0; i < 20; i++) {
                const isWin = Math.random() > 0.5;
                const betAmt = (Math.random() * 100 + 10).toFixed(2);
                let multDisplay = '-';
                let winDisplay = '-';
                let colorClass = 'text-slate-500';

                // Simulate some wins if we aren't in a fresh state
                if (Math.random() > 0.3) {
                    if (isWin) {
                        const m = (1 + Math.random() * 5);
                        multDisplay = m.toFixed(2) + 'x';
                        winDisplay = (parseFloat(betAmt) * m).toFixed(2);
                        colorClass = 'text-green-500';
                    }
                }

                html += `
                    <div class="flex justify-between px-4 py-1.5 text-[11px] border-b border-white/5 hover:bg-white/5 transition-colors">
                        <div class="flex items-center gap-2 w-24">
                            <div class="w-4 h-4 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-[8px] text-white/50">
                                ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                            </div>
                            <span class="text-slate-400 truncate">User${Math.floor(Math.random()*9000)+1000}</span>
                        </div>
                        <div class="flex gap-6 flex-1 justify-end">
                            <span class="text-slate-300 w-14 text-right">${betAmt}</span>
                            <span class="${colorClass} w-12 text-right">${multDisplay}</span>
                            <span class="${colorClass} w-16 text-right">${winDisplay}</span>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html;
        }

        // Initialize
        generateLiveBets();
        // Start the first game cycle
        startGame();

    
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
      

<header className="h-14 border-b border-white/5 flex items-center justify-between px-3 md:px-6 bg-[#0f1923] shrink-0 z-30">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-rose-500" data-lucide="rocket"></i>
<span className="text-rose-500 font-semibold text-xl tracking-tight italic">Spineasy</span>
</div>

<div className="hidden lg:flex gap-1 ml-4" id="history-bar">

</div>
</div>
<div className="flex items-center gap-3">
<div className="flex flex-col items-end mr-1">
<span className="text-green-500 font-semibold text-sm md:text-lg tracking-tight">10,420.50 USD</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider hidden sm:block">Demo Balance</span>
</div>
<button className="p-2 hover:bg-white/5 rounded-full text-slate-400">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="lg:hidden h-8 bg-[#15202b] border-b border-white/5 flex items-center px-2 overflow-x-auto gap-1 no-scrollbar shrink-0 z-20" id="mobile-history-bar">

</div>

<main className="flex-1 flex lg:flex-row overflow-hidden relative">

<div className="flex-1 flex flex-col h-full overflow-y-auto lg:overflow-hidden relative">


<div className="relative w-full h-[260px] sm:h-[350px] lg:h-auto lg:flex-1 bg-[#0f1923] border-b border-white/5 flex flex-col justify-center items-center shrink-0">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<canvas className="absolute inset-0 z-10" id="gameCanvas"></canvas>

<div className="relative z-20 flex flex-col items-center select-none pointer-events-none">
<div className="text-5xl md:text-7xl font-semibold text-white tracking-tight tabular-nums transition-all drop-shadow-2xl" id="game-status">1.00x</div>
<div className="text-rose-500 font-medium tracking-wide mt-2 opacity-0 transform translate-y-2 transition-all text-sm md:text-base" id="game-message">FLEW AWAY!</div>

<div className="w-24 md:w-32 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden hidden" id="loading-bar">
<div className="h-full bg-rose-500 w-1/2 animate-pulse"></div>
</div>
</div>

<div className="absolute top-3 inset-x-0 flex justify-center opacity-40 pointer-events-none">
<div className="flex items-center gap-1.5 border border-white/10 rounded-full px-2 py-0.5 bg-black/20 backdrop-blur-sm">
<i className="w-3 h-3 text-green-500" data-lucide="shield-check"></i>
<span className="text-[10px] font-medium text-slate-300">Provably Fair</span>
</div>
</div>
</div>


<div className="bg-[#121d27] p-3 grid grid-cols-1 md:grid-cols-2 gap-3 shrink-0 lg:h-[320px] lg:border-t border-white/5 pb-8 lg:pb-3">

<div className="bet-panel bg-[#1b2630] rounded-xl p-2.5 flex flex-col gap-2 relative border border-white/5 shadow-md">

<div className="flex justify-center">
<div className="bg-[#0f1923] rounded-full p-0.5 flex w-32 border border-white/5">
<button className="flex-1 py-1 text-[10px] rounded-full bg-[#2c3842] text-white font-medium text-center transition">Bet</button>
<button className="flex-1 py-1 text-[10px] rounded-full text-slate-500 hover:text-white font-medium text-center transition">Auto</button>
</div>
</div>
<div className="flex gap-2 h-full">

<div className="flex flex-col gap-2 flex-1">
<div className="flex items-center bg-[#0f1923] rounded-lg border border-slate-700/50 p-0.5 relative group focus-within:border-slate-500 transition-colors">
<span className="absolute right-3 top-1.5 text-[10px] text-slate-600 font-medium select-none pointer-events-none">USD</span>
<button className="w-8 h-8 flex items-center justify-center bg-[#1b2630] rounded hover:bg-slate-700 text-slate-400 active:scale-95 transition" onclick="adjustBet(1, -1)">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<input className="flex-1 bg-transparent text-center text-white font-semibold text-base focus:outline-none w-full" id="bet-input-1" readonly="" type="number" value="10.00"/>
<button className="w-8 h-8 flex items-center justify-center bg-[#1b2630] rounded hover:bg-slate-700 text-slate-400 active:scale-95 transition" onclick="adjustBet(1, 1)">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
<div className="grid grid-cols-4 gap-1">
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(1, 1)">1</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(1, 5)">5</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(1, 10)">10</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(1, 100)">100</button>
</div>
</div>

<div className="w-[42%] flex flex-col">
<button className="flex-1 rounded-lg bg-[#28a909] hover:bg-[#2dbd0a] shadow-[0_3px_0_0_#1e7e07] active:shadow-none active:translate-y-[3px] transition-all flex flex-col items-center justify-center text-white border-t border-white/10 group select-none" id="btn-1" onclick="toggleBet(1)">
<span className="text-base font-semibold uppercase tracking-wide group-active:scale-95 transition-transform" id="lbl-1-action">BET</span>
<div className="flex flex-col items-center leading-none mt-0.5 group-active:scale-95 transition-transform">
<span className="text-[10px] font-normal opacity-90" id="lbl-1-amount">10.00 USD</span>
</div>
</button>
</div>
</div>
</div>

<div className="bet-panel bg-[#1b2630] rounded-xl p-2.5 flex flex-col gap-2 relative border border-white/5 shadow-md">
<div className="flex justify-center">
<div className="bg-[#0f1923] rounded-full p-0.5 flex w-32 border border-white/5">
<button className="flex-1 py-1 text-[10px] rounded-full bg-[#2c3842] text-white font-medium text-center transition">Bet</button>
<button className="flex-1 py-1 text-[10px] rounded-full text-slate-500 hover:text-white font-medium text-center transition">Auto</button>
</div>
</div>
<div className="flex gap-2 h-full">
<div className="flex flex-col gap-2 flex-1">
<div className="flex items-center bg-[#0f1923] rounded-lg border border-slate-700/50 p-0.5 relative focus-within:border-slate-500 transition-colors">
<span className="absolute right-3 top-1.5 text-[10px] text-slate-600 font-medium select-none pointer-events-none">USD</span>
<button className="w-8 h-8 flex items-center justify-center bg-[#1b2630] rounded hover:bg-slate-700 text-slate-400 active:scale-95 transition" onclick="adjustBet(2, -1)">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<input className="flex-1 bg-transparent text-center text-white font-semibold text-base focus:outline-none w-full" id="bet-input-2" readonly="" type="number" value="20.00"/>
<button className="w-8 h-8 flex items-center justify-center bg-[#1b2630] rounded hover:bg-slate-700 text-slate-400 active:scale-95 transition" onclick="adjustBet(2, 1)">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
<div className="grid grid-cols-4 gap-1">
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(2, 1)">1</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(2, 5)">5</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(2, 10)">10</button>
<button className="bg-[#1b2630] border border-slate-700/50 rounded py-1.5 text-[10px] font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition active:bg-slate-600" onclick="setBet(2, 100)">100</button>
</div>
</div>
<div className="w-[42%] flex flex-col">
<button className="flex-1 rounded-lg bg-[#28a909] hover:bg-[#2dbd0a] shadow-[0_3px_0_0_#1e7e07] active:shadow-none active:translate-y-[3px] transition-all flex flex-col items-center justify-center text-white border-t border-white/10 group select-none" id="btn-2" onclick="toggleBet(2)">
<span className="text-base font-semibold uppercase tracking-wide group-active:scale-95 transition-transform" id="lbl-2-action">BET</span>
<div className="flex flex-col items-center leading-none mt-0.5 group-active:scale-95 transition-transform">
<span className="text-[10px] font-normal opacity-90" id="lbl-2-amount">20.00 USD</span>
</div>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex w-80 bg-[#121d27] border-l border-white/5 flex-col h-full shrink-0">
<div className="flex border-b border-white/5 bg-[#0f1923]">
<button className="flex-1 py-3 text-xs font-medium text-white border-b-2 border-rose-500 bg-white/5">All Bets</button>
<button className="flex-1 py-3 text-xs font-medium text-slate-500 hover:text-slate-300 transition">My Bets</button>
<button className="flex-1 py-3 text-xs font-medium text-slate-500 hover:text-slate-300 transition">Top</button>
</div>
<div className="flex justify-between px-4 py-2 text-[10px] text-slate-500 uppercase tracking-wide border-b border-white/5 font-medium">
<span>User</span>
<div className="flex gap-6">
<span>Bet</span>
<span>Mult.</span>
<span className="w-12 text-right">Win</span>
</div>
</div>
<div className="flex-1 overflow-y-auto relative custom-scrollbar" id="live-bets-container">

</div>
<div className="p-3 bg-[#0f1923] border-t border-white/5 shrink-0">
<div className="flex justify-between items-center text-slate-400 text-xs">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>4,281 Playing</span>
</div>
<span>Pool: <span className="text-white font-medium">943k USD</span></span>
</div>
</div>
</div>
</main>


    </>
  );
}
