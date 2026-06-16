import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
500: '#10b981', // Emerald
600: '#059669',
900: '#064e3b',
950: '#022c22',
},
danger: {
500: '#ef4444',
}
},
boxShadow: {
'glow': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
}
}
}
}



        // --- State Management ---
        const GameState = { LOADING: 'LOADING', RUNNING: 'RUNNING', CRASHED: 'CRASHED' };
        let state = GameState.LOADING;
        
        // Settings & Variables
        let multiplier = 1.00;
        let crashPoint = 0;
        let startTime = 0;
        let animationId;
        
        // Dual Bets State
        // Array to store two separate bets
        let userBets = [
            { active: false, amount: 0, cashedOut: false, autoCashout: true, target: 2.00, elId: null },
            { active: false, amount: 0, cashedOut: false, autoCashout: false, target: 10.00, elId: null }
        ];

        let history = [1.20, 2.55, 1.10, 15.42, 3.80, 1.05]; // Init dummy history
        
        // DOM Elements
        const elements = {
            canvas: document.getElementById('crashCanvas'),
            ctx: document.getElementById('crashCanvas').getContext('2d'),
            multDisplay: document.getElementById('current-multiplier'),
            statusDisplay: document.getElementById('game-status'),
            overlayContainer: document.getElementById('overlay-container'),
            loadingView: document.getElementById('loading-view'),
            crashedView: document.getElementById('crashed-view'),
            countdown: document.getElementById('countdown'),
            loadingBar: document.getElementById('loading-bar'),
            crashValue: document.getElementById('crash-value'),
            betsList: document.getElementById('bets-list'),
            historyStrip: document.getElementById('history-strip'),
            balance: document.getElementById('user-balance'),
            pool: document.getElementById('total-pool'),
            playerCount: document.getElementById('player-count')
        };

        // --- Canvas & Visuals ---
        
        function resizeCanvas() {
            const parent = elements.canvas.parentElement;
            elements.canvas.width = parent.offsetWidth;
            elements.canvas.height = parent.offsetHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawGraph(currentMult) {
            const ctx = elements.ctx;
            const w = elements.canvas.width;
            const h = elements.canvas.height;
            
            ctx.clearRect(0, 0, w, h);
            
            const timeElapsed = (Date.now() - startTime) / 1000;
            
            ctx.save();
            
            // Speed logic visual
            let rocketX = Math.min(w * 0.8, (timeElapsed * (w/12))); // Slower traversal
            let rocketY = h - Math.min(h * 0.8, (multiplier - 1) * (h/4)); 
            
            if (multiplier > 5) {
                rocketX = w * 0.8 + (Math.random() - 0.5) * 2;
                rocketY = h * 0.2 + (Math.random() - 0.5) * 2;
            }

            // Draw Curve Path
            ctx.beginPath();
            ctx.moveTo(0, h);
            ctx.bezierCurveTo(w * 0.2, h, rocketX * 0.5, h, rocketX, rocketY);
            
            // Stroke
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#10b981';
            ctx.lineCap = 'round';
            ctx.stroke();
            
            // Fill
            ctx.lineTo(rocketX, h);
            ctx.lineTo(0, h);
            const grad = ctx.createLinearGradient(0, rocketY, 0, h);
            grad.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
            grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
            ctx.fillStyle = grad;
            ctx.fill();

            // Rocket / Dot
            ctx.beginPath();
            ctx.arc(rocketX, rocketY, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            
            // Glow
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#10b981';
            ctx.beginPath();
            ctx.arc(rocketX, rocketY, 12, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
            ctx.fill();
            
            ctx.shadowBlur = 0;
            ctx.restore();
        }

        // --- Game Logic ---

        function init() {
            renderHistory();
            startLoadingSequence();
        }

        function startLoadingSequence() {
            state = GameState.LOADING;
            elements.overlayContainer.style.opacity = '1';
            elements.overlayContainer.style.pointerEvents = 'auto';
            elements.loadingView.style.display = 'flex';
            elements.crashedView.style.display = 'none';
            elements.statusDisplay.style.opacity = '0';
            elements.multDisplay.classList.remove('text-danger-500');
            elements.multDisplay.classList.add('text-white');
            elements.multDisplay.innerText = '1.00x';
            
            generateDummyBets(); // Prep new players
            updateUI(0);
            updateUI(1);

            let timeLeft = 5.0;
            elements.loadingBar.style.width = '100%';
            elements.loadingBar.style.transition = 'none';
            requestAnimationFrame(() => {
                elements.loadingBar.style.transition = 'width 5s linear';
                elements.loadingBar.style.width = '0%';
            });

            const timer = setInterval(() => {
                timeLeft -= 0.1;
                elements.countdown.innerText = Math.abs(timeLeft).toFixed(1);
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    runGame();
                }
            }, 100);
        }

        function runGame() {
            state = GameState.RUNNING;
            startTime = Date.now();
            multiplier = 1.00;
            
            const r = Math.random();
            crashPoint = Math.max(1.00, (0.99 / (1 - r)));
            if(crashPoint > 100) crashPoint = 100; 
            
            elements.overlayContainer.style.opacity = '0';
            elements.overlayContainer.style.pointerEvents = 'none';
            elements.statusDisplay.style.opacity = '1';
            
            updateUI(0);
            updateUI(1);
            animate();
        }

        function animate() {
            if (state !== GameState.RUNNING) return;

            const now = Date.now();
            const timeElapsed = (now - startTime) / 1000;
            
            // --- UPDATED SPEED LOGIC ---
            // "First digit after the comma is a second (1s)"
            // Example: 1.1x = 1 second. 2.0x = 10 seconds.
            // Formula: 1.00 + (seconds / 10)
            multiplier = 1.00 + (timeElapsed * 0.1); 

            if (multiplier >= crashPoint) {
                multiplier = crashPoint;
                triggerCrash();
                return;
            }

            // Logic Check
            checkAutoCashouts();
            checkDummyCashouts();

            // Render
            drawGraph(multiplier);
            elements.multDisplay.innerText = multiplier.toFixed(2) + 'x';
            
            animationId = requestAnimationFrame(animate);
        }

        function triggerCrash() {
            state = GameState.CRASHED;
            cancelAnimationFrame(animationId);
            
            elements.multDisplay.classList.remove('text-white');
            elements.multDisplay.classList.add('text-danger-500');
            elements.crashValue.innerText = crashPoint.toFixed(2) + 'x';
            
            elements.overlayContainer.style.opacity = '1';
            elements.overlayContainer.style.pointerEvents = 'auto';
            elements.loadingView.style.display = 'none';
            elements.crashedView.style.display = 'flex';
            elements.statusDisplay.style.opacity = '0';

            // Handle losses
            userBets.forEach((bet, idx) => {
                if (bet.active && !bet.cashedOut) {
                    bet.active = false;
                }
            });

            addToHistory(crashPoint);
            updateUI(0);
            updateUI(1);
            
            setTimeout(startLoadingSequence, 3000);
        }

        // --- Betting System ---

        // Listeners for Toggles
        document.getElementById('toggle-0').addEventListener('change', (e) => toggleAutoCashout(0, e.target.checked));
        document.getElementById('toggle-1').addEventListener('change', (e) => toggleAutoCashout(1, e.target.checked));

        function toggleAutoCashout(index, checked) {
            userBets[index].autoCashout = checked;
            const container = document.getElementById(`cashout-container-${index}`);
            const input = document.getElementById(`cashout-input-${index}`);
            
            if(checked) {
                container.classList.remove('opacity-50');
                input.disabled = false;
            } else {
                container.classList.add('opacity-50');
                input.disabled = true;
            }
        }

        function handleBet(index) {
            const bet = userBets[index];
            const inputVal = parseFloat(document.getElementById(`bet-input-${index}`).value);
            const cashoutVal = parseFloat(document.getElementById(`cashout-input-${index}`).value);

            if (state === GameState.LOADING) {
                if (bet.active) {
                    // Cancel Bet
                    updateBalance(bet.amount);
                    bet.active = false;
                    bet.amount = 0;
                    removeBetFromList(index);
                } else {
                    // Place Bet
                    const currentBal = parseFloat(elements.balance.innerText.replace(/,/g, ''));
                    if (inputVal > 0 && inputVal <= currentBal) {
                        bet.active = true;
                        bet.amount = inputVal;
                        bet.cashedOut = false;
                        bet.target = cashoutVal;
                        updateBalance(-inputVal);
                        addSelfToBets(index, inputVal);
                    }
                }
            } else if (state === GameState.RUNNING) {
                if (bet.active && !bet.cashedOut) {
                    doCashout(index);
                }
            }
            updateUI(index);
        }

        function doCashout(index) {
            const bet = userBets[index];
            if(bet.active && !bet.cashedOut) {
                bet.cashedOut = true;
                const win = bet.amount * multiplier;
                updateBalance(win);
                updateBetRowWin(index, win - bet.amount);
                updateUI(index);
            }
        }

        function checkAutoCashouts() {
            userBets.forEach((bet, index) => {
                const isToggleChecked = document.getElementById(`toggle-${index}`).checked;
                if (bet.active && !bet.cashedOut && isToggleChecked) {
                    // Update target dynamically from input in case user changed it during loading
                    const domTarget = parseFloat(document.getElementById(`cashout-input-${index}`).value);
                    if (multiplier >= domTarget) {
                        doCashout(index);
                    }
                }
            });
        }

        function updateBalance(delta) {
            let current = parseFloat(elements.balance.innerText.replace(/,/g, ''));
            current += delta;
            elements.balance.innerText = current.toLocaleString('en-US', {minimumFractionDigits: 2});
        }

        function adjustBet(index, factor) {
            const input = document.getElementById(`bet-input-${index}`);
            let val = parseFloat(input.value) * factor;
            input.value = val.toFixed(2);
        }

        // --- UI Updates ---

        function updateUI(index) {
            const btn = document.getElementById(`btn-${index}`);
            const txt = document.getElementById(`btn-text-${index}`);
            const sub = document.getElementById(`btn-sub-${index}`);
            const bet = userBets[index];

            // Reset base classes
            btn.className = "mt-auto w-full h-14 rounded-lg flex flex-col items-center justify-center transition-all border relative overflow-hidden group shadow-sm";

            if (state === GameState.LOADING) {
                if (bet.active) {
                    btn.classList.add('bg-red-500', 'hover:bg-red-600', 'border-red-400', 'text-white');
                    txt.innerText = "CANCEL BET";
                    sub.innerText = "Waiting for round...";
                } else {
                    // Different base styles for card 0 (brand) and card 1 (dark) to keep visual interest, 
                    // or make them uniform. Let's make them uniform for consistency as requested "integrated card".
                    if(index === 0) {
                         btn.classList.add('bg-brand-600', 'hover:bg-brand-500', 'border-brand-400', 'text-white', 'shadow-glow');
                    } else {
                         btn.classList.add('bg-zinc-800', 'hover:bg-zinc-700', 'border-zinc-700', 'text-zinc-400', 'group-hover:text-white');
                    }
                    txt.innerText = "PLACE BET";
                    sub.innerText = "Next round starts soon";
                }
            } else if (state === GameState.RUNNING) {
                if (bet.active && !bet.cashedOut) {
                    btn.classList.add('bg-white', 'hover:bg-zinc-100', 'border-zinc-200', 'text-zinc-900', 'shadow-[0_0_20px_rgba(255,255,255,0.3)]');
                    txt.innerText = "CASHOUT";
                    const profit = (bet.amount * multiplier).toFixed(2);
                    sub.innerText = `$${profit}`;
                } else if (bet.cashedOut) {
                   btn.classList.add('bg-zinc-800', 'text-zinc-500', 'border-zinc-700', 'opacity-50', 'cursor-not-allowed');
                   txt.innerText = "CASHED OUT";
                   const win = (bet.amount * multiplier).toFixed(2); // Approximate display
                   sub.innerText = "Won this round";
                } else {
                    btn.classList.add('bg-zinc-800', 'text-zinc-500', 'border-zinc-700', 'cursor-not-allowed');
                    txt.innerText = "GAME RUNNING";
                    sub.innerText = "Wait for next round";
                }
            } else { // CRASHED
                btn.classList.add('bg-zinc-800', 'text-zinc-500', 'border-zinc-700', 'cursor-not-allowed');
                txt.innerText = "CRASHED";
                sub.innerText = "Preparing next round...";
            }
        }

        // --- Fake Data / Simulation ---
        
        let dummyBets = [];
        const dummyNames = ['Hidden', 'User123', 'Satoshi', 'Whale', 'LuckyGuy', 'Moon', 'Doge', 'Pepe', 'Alpha'];

        function generateDummyBets() {
            elements.betsList.innerHTML = '';
            dummyBets = [];
            let total = 0;
            const count = 8 + Math.floor(Math.random() * 15);
            elements.playerCount.innerText = `${count} Players`;

            for(let i=0; i<count; i++) {
                const amt = (Math.random() * 200 + 10).toFixed(2);
                const target = 1.05 + Math.random() * 10;
                total += parseFloat(amt);
                
                const name = dummyNames[Math.floor(Math.random() * dummyNames.length)];
                const el = document.createElement('div');
                el.className = "grid grid-cols-3 px-4 py-1.5 text-xs text-zinc-400 hover:bg-white/5 transition-colors border-b border-zinc-800/50";
                el.innerHTML = `
                    <div class="flex items-center gap-2">
                        <span class="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500">${name[0]}</span>
                        <span class="truncate max-w-[80px]">${name}</span>
                    </div>
                    <div class="text-right font-mono text-zinc-300">$${amt}</div>
                    <div class="text-right font-mono text-zinc-600 profit-cell">-</div>
                `;
                elements.betsList.appendChild(el);
                dummyBets.push({ el, amt, target, done: false });
            }
            elements.pool.innerText = "$" + total.toLocaleString('en-US', {minimumFractionDigits: 2});
        }

        function addSelfToBets(index, amt) {
            const el = document.createElement('div');
            el.id = `bet-row-self-${index}`;
            el.className = "grid grid-cols-3 px-4 py-1.5 text-xs text-white bg-zinc-800/50 border-l-2 border-brand-500 border-b border-zinc-800/50";
            el.innerHTML = `
                <div class="flex items-center gap-2">
                    <span class="iconify text-brand-500" data-icon="lucide:user" data-width="14"></span>
                    <span class="font-bold">You (${index+1})</span>
                </div>
                <div class="text-right font-mono font-bold">$${amt.toFixed(2)}</div>
                <div class="text-right font-mono text-zinc-500 profit-cell">-</div>
            `;
            elements.betsList.prepend(el);
        }

        function removeBetFromList(index) {
            const row = document.getElementById(`bet-row-self-${index}`);
            if(row) row.remove();
        }

        function updateBetRowWin(index, profit) {
            const row = document.getElementById(`bet-row-self-${index}`);
            if(row) {
                const profitEl = row.querySelector('.profit-cell');
                profitEl.innerText = `+$${profit.toFixed(2)}`;
                profitEl.className = "profit-cell text-right font-mono text-brand-500 font-bold";
                row.classList.add('bg-brand-500/10');
            }
        }

        function checkDummyCashouts() {
            dummyBets.forEach(b => {
                if(!b.done && multiplier >= b.target) {
                    b.done = true;
                    const profit = (b.amt * b.target).toFixed(2);
                    const cell = b.el.querySelector('.profit-cell');
                    cell.innerText = `+$${profit}`;
                    cell.className = "text-right font-mono text-brand-500 profit-cell";
                    b.el.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                }
            });
        }

        function renderHistory() {
            elements.historyStrip.innerHTML = '';
            history.forEach(pt => {
                const el = document.createElement('div');
                el.className = `flex-shrink-0 px-3 py-1 mx-1 rounded text-xs font-mono font-bold border ${getHistoryColor(pt)}`;
                el.innerText = pt.toFixed(2) + 'x';
                elements.historyStrip.appendChild(el);
            });
        }

        function addToHistory(pt) {
            history.unshift(pt);
            if(history.length > 20) history.pop();
            
            const el = document.createElement('div');
            el.className = `flex-shrink-0 px-3 py-1 mx-1 rounded text-xs font-mono font-bold border transform scale-0 transition-transform duration-300 ${getHistoryColor(pt)}`;
            el.innerText = pt.toFixed(2) + 'x';
            
            elements.historyStrip.prepend(el);
            setTimeout(() => el.classList.remove('scale-0'), 10);
        }

        function getHistoryColor(pt) {
            if(pt < 1.5) return 'bg-zinc-900 border-zinc-800 text-zinc-500';
            if(pt < 10) return 'bg-brand-500/10 border-brand-500/20 text-brand-500';
            return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)]';
        }

        // Initialize
        toggleAutoCashout(0, true);
        toggleAutoCashout(1, false);
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full z-50 flex items-center justify-between px-4 lg:px-6">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 rounded bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-brand-500/50 transition-colors shadow-inner">
<span className="iconify text-brand-500" data-icon="lucide:zap" data-width="16"></span>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-100">SpinEasy</span>
</a>
<nav className="hidden md:flex items-center gap-1">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Lobby</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-900 rounded-md border border-zinc-800 shadow-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    Crash
                </button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Slots</button>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex flex-col items-end mr-2">
<div className="flex items-center gap-1.5 text-zinc-100 font-mono text-sm tracking-tight">
<span className="text-brand-500 font-bold">$</span>
<span id="user-balance">2,450.00</span>
</div>
</div>
<button className="bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded transition-all shadow-sm">
                Wallet
            </button>
<button className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors relative">
<span className="iconify text-zinc-400" data-icon="lucide:user" data-width="16"></span>
</button>
</div>
</header>

<main className="flex-1 flex pt-14 h-screen">

<aside className="w-16 lg:w-60 border-r border-zinc-800 bg-zinc-950/50 flex-col hidden sm:flex">
<div className="p-3 space-y-1 overflow-y-auto flex-1">
<div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 hidden lg:block mb-1">Menu</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-900 text-white border border-zinc-800 shadow-sm group" href="#">
<span className="iconify text-brand-500 group-hover:scale-110 transition-transform" data-icon="lucide:rocket" data-width="18"></span>
<span className="hidden lg:inline text-sm font-medium">Crash</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors" href="#">
<span className="iconify" data-icon="lucide:dices" data-width="18"></span>
<span className="hidden lg:inline text-sm font-medium">Dice</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="18"></span>
<span className="hidden lg:inline text-sm font-medium">Plinko</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors" href="#">
<span className="iconify" data-icon="lucide:gamepad-2" data-width="18"></span>
<span className="hidden lg:inline text-sm font-medium">Slots</span>
</a>
<div className="mt-6 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 hidden lg:block mb-1">Social</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-colors" href="#">
<span className="iconify" data-icon="lucide:trophy" data-width="18"></span>
<span className="hidden lg:inline text-sm font-medium">Leaderboard</span>
</a>
</div>
<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="hidden lg:inline">System Operational</span>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full min-w-0 bg-zinc-950 relative">

<div className="h-10 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 overflow-hidden relative z-20">
<div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="flex items-center gap-2 w-full overflow-hidden mask-linear-fade" id="history-strip">

</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">

<div className="flex-1 flex flex-col p-4 lg:p-6 gap-4 overflow-y-auto">

<div className="relative w-full aspect-[16/10] lg:aspect-[2/1] bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl group shrink-0">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<canvas className="absolute inset-0 w-full h-full z-10" id="crashCanvas"></canvas>

<div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none select-none">
<div className="text-7xl lg:text-8xl font-black font-mono text-white tracking-tighter drop-shadow-2xl transition-colors duration-100" id="current-multiplier">1.00x</div>
<div className="text-brand-500 font-medium tracking-[0.2em] uppercase text-xs mt-4 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20 backdrop-blur-sm opacity-0 transition-opacity" id="game-status">Running</div>
</div>

<div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none" id="overlay-container">

<div className="flex flex-col items-center hidden w-full max-w-xs" id="loading-view">
<div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-4">Next Round In</div>
<div className="text-5xl font-mono font-bold text-white mb-6" id="countdown">5.0</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-full transition-all duration-100 linear" id="loading-bar"></div>
</div>
</div>

<div className="flex flex-col items-center hidden" id="crashed-view">
<div className="text-danger-500 text-6xl font-black tracking-tighter uppercase mb-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Crashed</div>
<div className="text-zinc-400 font-mono text-xl">@ <span className="text-white font-bold" id="crash-value">0.00x</span></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full min-h-[220px]">

<div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 flex flex-col gap-4 shadow-lg group focus-within:border-zinc-700 transition-colors relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>

<div className="flex gap-4">

<div className="flex-1">
<div className="flex justify-between items-center mb-1.5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Amount</label>
</div>
<div className="relative bg-zinc-950/50 border border-zinc-800 rounded-lg p-1 flex items-center focus-within:border-zinc-600 transition-colors">
<span className="pl-2 text-zinc-500 font-mono text-sm">$</span>
<input className="w-full bg-transparent text-white font-mono font-bold text-sm outline-none px-2 py-1 placeholder-zinc-700" id="bet-input-0" step="1.00" type="number" value="10.00"/>
<div className="flex gap-0.5 pr-1">
<button className="w-6 h-6 rounded hover:bg-zinc-800 text-[10px] font-mono text-zinc-500 transition-colors" onclick="adjustBet(0, 0.5)">½</button>
<button className="w-6 h-6 rounded hover:bg-zinc-800 text-[10px] font-mono text-zinc-500 transition-colors" onclick="adjustBet(0, 2)">2x</button>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-1.5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Auto Cashout</label>
<div className="relative inline-block w-7 h-3.5 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 border-zinc-600 appearance-none cursor-pointer transition-all duration-300 top-0 left-0" id="toggle-0" type="checkbox" />
<label className="toggle-label block overflow-hidden h-3.5 rounded-full bg-zinc-700 cursor-pointer transition-colors duration-300" htmlFor="toggle-0"></label>
</input></div>
</div>
<div className="relative bg-zinc-950/50 border border-zinc-800 rounded-lg p-1 flex items-center focus-within:border-zinc-600 transition-colors opacity-100" id="cashout-container-0">
<input className="w-full bg-transparent text-white font-mono font-bold text-sm outline-none px-2 py-1 placeholder-zinc-700" id="cashout-input-0" step="0.10" type="number" value="2.00"/>
<span className="pr-3 text-zinc-600 font-mono font-bold text-xs select-none">X</span>
</div>
</div>
</div>

<button className="mt-auto w-full h-14 rounded-lg bg-brand-600 hover:bg-brand-500 active:scale-[0.98] transition-all flex flex-col items-center justify-center shadow-glow border-t border-brand-400 relative overflow-hidden group" id="btn-0" onclick="handleBet(0)">
<span className="text-base font-bold text-white uppercase tracking-tight relative z-10" id="btn-text-0">Place Bet</span>
<span className="text-[10px] text-brand-100 font-mono relative z-10 opacity-80" id="btn-sub-0">Next round</span>
</button>
</div>

<div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 flex flex-col gap-4 shadow-lg group focus-within:border-zinc-700 transition-colors relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>

<div className="flex gap-4">

<div className="flex-1">
<div className="flex justify-between items-center mb-1.5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Amount</label>
</div>
<div className="relative bg-zinc-950/50 border border-zinc-800 rounded-lg p-1 flex items-center focus-within:border-zinc-600 transition-colors">
<span className="pl-2 text-zinc-500 font-mono text-sm">$</span>
<input className="w-full bg-transparent text-white font-mono font-bold text-sm outline-none px-2 py-1 placeholder-zinc-700" id="bet-input-1" step="1.00" type="number" value="5.00"/>
<div className="flex gap-0.5 pr-1">
<button className="w-6 h-6 rounded hover:bg-zinc-800 text-[10px] font-mono text-zinc-500 transition-colors" onclick="adjustBet(1, 0.5)">½</button>
<button className="w-6 h-6 rounded hover:bg-zinc-800 text-[10px] font-mono text-zinc-500 transition-colors" onclick="adjustBet(1, 2)">2x</button>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-1.5">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Auto Cashout</label>
<div className="relative inline-block w-7 h-3.5 align-middle select-none">
<input className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 border-zinc-600 appearance-none cursor-pointer transition-all duration-300 top-0 left-0" id="toggle-1" type="checkbox" />
<label className="toggle-label block overflow-hidden h-3.5 rounded-full bg-zinc-700 cursor-pointer transition-colors duration-300" htmlFor="toggle-1"></label>
</input></div>
</div>
<div className="relative bg-zinc-950/50 border border-zinc-800 rounded-lg p-1 flex items-center focus-within:border-zinc-600 transition-colors opacity-50" id="cashout-container-1">
<input className="w-full bg-transparent text-white font-mono font-bold text-sm outline-none px-2 py-1 placeholder-zinc-700" disabled="" id="cashout-input-1" step="0.10" type="number" value="10.00"/>
<span className="pr-3 text-zinc-600 font-mono font-bold text-xs select-none">X</span>
</div>
</div>
</div>

<button className="mt-auto w-full h-14 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-all flex flex-col items-center justify-center border border-zinc-700 relative overflow-hidden group" id="btn-1" onclick="handleBet(1)">
<span className="text-base font-bold text-zinc-400 uppercase tracking-tight relative z-10 group-hover:text-white" id="btn-text-1">Place Bet</span>
<span className="text-[10px] text-zinc-600 font-mono relative z-10 opacity-80" id="btn-sub-1">Next round</span>
</button>
</div>
</div>
</div>

<div className="w-full lg:w-80 bg-zinc-900/30 border-l border-zinc-800 flex flex-col hidden lg:flex">
<div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/80">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
<span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Live Bets</span>
</div>
<span className="text-[10px] text-zinc-500 font-mono bg-zinc-800 px-1.5 py-0.5 rounded" id="player-count">0 Players</span>
</div>

<div className="grid grid-cols-3 px-4 py-2 bg-zinc-950/50 text-[10px] uppercase font-bold text-zinc-600 tracking-wider border-b border-zinc-800">
<div>User</div>
<div className="text-right">Bet</div>
<div className="text-right">Profit</div>
</div>

<div className="flex-1 overflow-y-auto p-1 space-y-0.5" id="bets-list">

</div>

<div className="p-3 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur">
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-500">Total Pool</span>
<span className="text-white font-mono" id="total-pool">$0.00</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
