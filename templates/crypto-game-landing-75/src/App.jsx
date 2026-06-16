import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // State
        let selectedSide = 'heads';
        let amount = 100;
        let isFlipping = false;
        let walletConnected = false;

        // Elements
        const coin = document.getElementById('game-coin');
        const wagerInput = document.getElementById('wager-input');
        const wagerDisplay = document.getElementById('wager-display');
        const btnHeads = document.getElementById('btn-heads');
        const btnTails = document.getElementById('btn-tails');
        const resultOverlay = document.getElementById('result-overlay');
        const connectBtn = document.getElementById('connect-btn');
        const flipBtn = document.getElementById('flip-btn');
        const historyList = document.getElementById('history-list');

        // Initial Setup: Generate some history
        const initialHistory = [
            { player: '0x32...8a9', side: 'heads', amount: 500, won: true, tx: '0x...' },
            { player: '0x8f...2b1', side: 'tails', amount: 100, won: false, tx: '0x...' },
            { player: '0xa1...c99', side: 'heads', amount: 250, won: true, tx: '0x...' },
        ];
        
        // Functions
        function init() {
            createSnowflakes();
            renderHistory();
            
            // Input Listener
            wagerInput.addEventListener('input', (e) => {
                amount = e.target.value;
                wagerDisplay.innerText = amount;
            });
        }

        function createSnowflakes() {
            const snowContainer = document.getElementById('snow-container');
            const particleCount = 40;
            
            for(let i=0; i<particleCount; i++) {
                const flake = document.createElement('div');
                flake.className = 'snowflake';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 4) + 's';
                flake.style.opacity = Math.random();
                flake.style.fontSize = (Math.random() * 10 + 10) + 'px';
                flake.innerText = Math.random() > 0.5 ? '❄' : '•';
                flake.style.animationDelay = Math.random() * 5 + 's';
                snowContainer.appendChild(flake);
            }
        }

        function setAmount(val) {
            amount = val;
            wagerInput.value = val;
            wagerDisplay.innerText = val;
        }

        function selectSide(side) {
            if(isFlipping) return;
            selectedSide = side;
            
            if(side === 'heads') {
                btnHeads.classList.add('border-[#4FC3F7]');
                btnHeads.classList.remove('border-transparent');
                btnTails.classList.add('border-transparent');
                btnTails.classList.remove('border-[#FF5252]');
            } else {
                btnTails.classList.add('border-[#FF5252]');
                btnTails.classList.remove('border-transparent');
                btnHeads.classList.add('border-transparent');
                btnHeads.classList.remove('border-[#4FC3F7]');
            }
        }

        // Simulate Wallet Connect
        connectBtn.addEventListener('click', () => {
            if(!walletConnected) {
                walletConnected = true;
                connectBtn.innerHTML = `<span class="iconify" data-icon="lucide:check" data-width="14"></span> 0x8a...4b2`;
                connectBtn.classList.replace('bg-white/10', 'bg-[#4FC3F7]/20');
                connectBtn.classList.replace('text-white', 'text-[#4FC3F7]');
                connectBtn.classList.add('border-[#4FC3F7]/50');
            }
        });

        function flipCoin() {
            if(!walletConnected) {
                alert("Please connect your wallet first (Click Top Right)");
                return;
            }
            if(isFlipping) return;
            
            isFlipping = true;
            flipBtn.disabled = true;
            flipBtn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="18"></span> FLIPPING...`;

            // Random outcome: 0 = heads, 1 = tails
            const outcome = Math.random() > 0.5 ? 'tails' : 'heads';
            const rotations = 5; // minimum full spins
            const degrees = rotations * 360 + (outcome === 'tails' ? 180 : 0);

            // Animate
            coin.style.transform = `rotateY(${degrees}deg)`;

            // Wait for end of animation
            setTimeout(() => {
                showResult(outcome);
            }, 3000);
        }

        function showResult(outcome) {
            const won = outcome === selectedSide;
            const payout = Math.floor(amount * 1.97);
            
            // Update overlay
            resultOverlay.classList.remove('pointer-events-none', 'opacity-0');
            
            const icon = document.getElementById('result-icon');
            const title = document.getElementById('result-title');
            const msg = document.getElementById('result-message');
            
            icon.classList.remove('scale-0');
            title.classList.remove('translate-y-4', 'opacity-0');
            msg.classList.remove('translate-y-4', 'opacity-0');
            document.querySelector('#result-overlay button').classList.remove('translate-y-4', 'opacity-0');

            if(won) {
                icon.innerText = "🎉";
                title.innerText = "Happy Win-ter!";
                title.className = "text-2xl font-bold mb-2 text-[#4FC3F7]";
                msg.innerText = `You won ${payout} PENGU!`;
                triggerConfetti();
            } else {
                icon.innerText = "❄️";
                title.innerText = "Frozen Luck";
                title.className = "text-2xl font-bold mb-2 text-slate-300";
                msg.innerText = `You lost ${amount} PENGU. Try again!`;
            }

            // Add to history
            addToHistory(outcome, amount, won);
        }

        function resetGame() {
            // Hide overlay
            resultOverlay.classList.add('opacity-0', 'pointer-events-none');
            
            // Reset Animation elements
            const elements = [document.getElementById('result-icon'), document.getElementById('result-title'), document.getElementById('result-message'), document.querySelector('#result-overlay button')];
            elements.forEach(el => el.classList.add('opacity-0')); // Keep them hidden for next fade in
            
            // Reset Coin visually (remove rotation reset transition to avoid spinning back)
            coin.style.transition = 'none';
            coin.style.transform = 'rotateY(0deg)';
            
            // Force reflow
            void coin.offsetWidth;
            
            // Restore transition for next flip
            coin.style.transition = 'transform 3s cubic-bezier(0.2, 0.8, 0.2, 1)';
            
            isFlipping = false;
            flipBtn.disabled = false;
            flipBtn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-2">FLIP PENGU COIN</span>`;
        }

        function addToHistory(side, amt, won) {
            const entry = { player: '0x8a...4b2', side: side, amount: amt, won: won };
            const row = createHistoryRow(entry);
            historyList.insertBefore(row, historyList.firstChild);
            if(historyList.children.length > 5) historyList.lastChild.remove();
        }

        function createHistoryRow(data) {
            const div = document.createElement('div');
            div.className = "flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 animate-pop";
            div.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center bg-[#0b1220] border border-white/10">
                        ${data.side === 'heads' ? '🐧' : '🎄'}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs font-medium text-slate-300">${data.player}</span>
                        <span class="text-[10px] text-slate-500">Just now</span>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-xs font-bold ${data.won ? 'text-[#4FC3F7]' : 'text-slate-500'}">
                        ${data.won ? '+' + Math.floor(data.amount * 0.97) : '-' + data.amount} PENGU
                    </div>
                    <div class="text-[10px] text-slate-600 flex items-center justify-end gap-1">
                        ${data.won ? 'WIN' : 'LOSS'}
                        <span class="iconify" data-icon="lucide:external-link" data-width="10"></span>
                    </div>
                </div>
            `;
            return div;
        }

        function renderHistory() {
            historyList.innerHTML = '';
            initialHistory.forEach(h => {
                historyList.appendChild(createHistoryRow(h));
            });
        }

        function triggerConfetti() {
            // Simple CSS/JS confetti burst simulation
            const colors = ['#4FC3F7', '#FFFFFF', '#FF5252'];
            for(let i=0; i<30; i++) {
                const conf = document.createElement('div');
                conf.style.position = 'fixed';
                conf.style.left = '50%';
                conf.style.top = '50%';
                conf.style.width = '8px';
                conf.style.height = '8px';
                conf.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
                conf.style.transition = 'all 1s ease-out';
                conf.style.zIndex = '100';
                conf.style.pointerEvents = 'none';
                document.body.appendChild(conf);

                // Explode
                setTimeout(() => {
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = 100 + Math.random() * 150;
                    conf.style.transform = `translate(${Math.cos(angle)*velocity}px, ${Math.sin(angle)*velocity}px) rotate(${Math.random()*360}deg)`;
                    conf.style.opacity = '0';
                }, 10);

                setTimeout(() => conf.remove(), 1000);
            }
        }

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0" id="snow-container"></div>

<nav className="w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md sticky top-0">
<div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4FC3F7] to-blue-600 flex items-center justify-center text-lg">🐧</div>
<span className="font-semibold text-lg tracking-tight">PENGU<span className="text-[#4FC3F7]">FLIP</span></span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
<span>Vol: 24.5M PENGU</span>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full transition-all border border-white/10 flex items-center gap-2" id="connect-btn">
<span className="iconify" data-icon="lucide:wallet" data-width="14"></span>
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 gap-8">

<div className="text-center mt-6">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5252]/10 border border-[#FF5252]/20 text-[#FF5252] text-xs font-medium mb-4">
<span className="iconify" data-icon="lucide:gift" data-width="12"></span>
<span>Christmas Edition Live</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Double your <span className="text-[#4FC3F7] glow-text">PENGU</span></h1>
<p className="text-slate-400 text-sm max-w-md mx-auto">The coziest, provably fair coin flip on the blockchain. 50/50 odds. Instant payouts.</p>
</div>

<div className="w-full max-w-md glass-panel rounded-3xl p-1 relative overflow-hidden group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#4FC3F7]/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="bg-[#0b1220]/80 rounded-[20px] p-6 border border-white/5 flex flex-col gap-6 relative">

<div className="h-48 flex items-center justify-center perspective-container">
<div className="coin-container">
<div className="coin" id="game-coin">

<div className="coin-face bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
<div className="text-6xl filter drop-shadow-lg relative">
                                    🐧
                                    
<div className="absolute -top-4 -right-2 text-2xl rotate-12">🎅</div>
</div>
<div className="absolute bottom-6 text-[#4FC3F7] text-xs font-bold tracking-widest opacity-50">HEADS</div>
</div>

<div className="coin-face tails bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
<div className="text-6xl filter drop-shadow-lg">🎄</div>
<div className="absolute bottom-6 text-[#FF5252] text-xs font-bold tracking-widest opacity-50">TAILS</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="grid grid-cols-2 gap-3">
<button className="relative overflow-hidden rounded-xl bg-white/5 border-2 border-[#4FC3F7] p-3 flex flex-col items-center gap-1 transition-all hover:bg-white/10 group active:scale-[0.98]" id="btn-heads" onclick="selectSide('heads')">
<span className="text-2xl">🐧</span>
<span className="text-xs font-medium text-slate-300">Heads</span>
<div className="absolute inset-0 bg-[#4FC3F7]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="relative overflow-hidden rounded-xl bg-white/5 border-2 border-transparent p-3 flex flex-col items-center gap-1 transition-all hover:bg-white/10 group active:scale-[0.98]" id="btn-tails" onclick="selectSide('tails')">
<span className="text-2xl">🎄</span>
<span className="text-xs font-medium text-slate-300">Tails</span>
<div className="absolute inset-0 bg-[#FF5252]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>

<div className="bg-[#020617] rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-end mb-4">
<span className="text-xs text-slate-400 font-medium">Wager Amount</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-white" id="wager-display">100</span>
<span className="text-xs font-bold text-[#4FC3F7]">PENGU</span>
</div>
</div>
<input className="w-full mb-4" id="wager-input" max="1000" min="10" step="10" type="range" value="100"/>
<div className="grid grid-cols-4 gap-2">
<button className="text-[10px] font-medium bg-white/5 hover:bg-white/10 text-slate-300 py-1.5 rounded-lg transition-colors" onclick="setAmount(10)">MIN</button>
<button className="text-[10px] font-medium bg-white/5 hover:bg-white/10 text-slate-300 py-1.5 rounded-lg transition-colors" onclick="setAmount(100)">100</button>
<button className="text-[10px] font-medium bg-white/5 hover:bg-white/10 text-slate-300 py-1.5 rounded-lg transition-colors" onclick="setAmount(500)">500</button>
<button className="text-[10px] font-medium bg-white/5 hover:bg-white/10 text-slate-300 py-1.5 rounded-lg transition-colors" onclick="setAmount(1000)">MAX</button>
</div>
</div>

<button className="w-full relative overflow-hidden bg-gradient-to-r from-[#4FC3F7] to-blue-500 hover:from-[#4FC3F7] hover:to-blue-400 text-[#020617] font-bold text-sm py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(79,195,247,0.5)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" id="flip-btn" onclick="flipCoin()">
<div className="absolute inset-0 shimmer opacity-30"></div>
<span className="relative z-10 flex items-center justify-center gap-2" id="flip-text">
                            FLIP PENGU COIN
                        </span>
</button>

<div className="flex justify-between text-[10px] text-slate-500 px-1">
<span>Win Multiplier: <span className="text-slate-300">1.97x</span></span>
<span>Fee: <span className="text-slate-300">3%</span></span>
</div>
</div>

<div className="absolute inset-0 z-20 bg-[#0b1220]/95 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 rounded-[20px]" id="result-overlay">
<div className="text-6xl mb-4 scale-0 transition-transform duration-300 delay-100" id="result-icon">🎉</div>
<h2 className="text-2xl font-bold mb-2 translate-y-4 opacity-0 transition-all duration-300 delay-150" id="result-title">You Won!</h2>
<p className="text-sm text-slate-400 mb-6 translate-y-4 opacity-0 transition-all duration-300 delay-200" id="result-message">197 PENGU added to wallet</p>
<button className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-6 py-2 rounded-full transition-all border border-white/10 translate-y-4 opacity-0 transition-all duration-300 delay-250" onclick="resetGame()">
                        Flip Again
                    </button>
</div>
</div>
</div>

<div className="w-full max-w-md">
<div className="flex items-center justify-between mb-3 px-2">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Flips</h3>
<button className="text-[10px] text-[#4FC3F7] hover:underline flex items-center gap-1">
<span className="iconify" data-icon="lucide:shield-check" data-width="12"></span>
                    Fairness Verified
                </button>
</div>
<div className="flex flex-col gap-2" id="history-list">

</div>
</div>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-4 bg-[#020617]">
<div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<span className="text-xl">🐧</span>
<span className="text-xs font-medium">Powered by Monad</span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Smart Contract</a>
<a className="hover:text-white transition-colors" href="#">Audit</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="text-[10px] text-slate-600">
                © 2024 PenguFlip. Christmas Edition.
            </div>
</div>
</footer>



    </>
  );
}
