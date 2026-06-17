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



        // --- Configuration & Data ---
        const participants = [
            "DANISH", "AADIL", "IBRAHIM", "SHAKEEL", "SUJATH", 
            "ASMATH", "ASHOK", "MUSTAFA", "AATHIF", "VIJAY"
        ];

        // Shortened list for brevity in code block, but logic scales
        const rawNames = [
            {t:"CSK", n:"Ruturaj Gaikwad", r:"Batter"}, {t:"CSK", n:"MS Dhoni", r:"Batter"}, {t:"CSK", n:"Rachin Ravindra", r:"Allrounder"},
            {t:"MI", n:"Rohit Sharma", r:"Batter"}, {t:"MI", n:"Jasprit Bumrah", r:"Bowler"}, {t:"MI", n:"Hardik Pandya", r:"Allrounder"},
            {t:"RCB", n:"Virat Kohli", r:"Batter"}, {t:"RCB", n:"Glenn Maxwell", r:"Allrounder"}, {t:"RCB", n:"Mohd. Siraj", r:"Bowler"},
            {t:"KKR", n:"Shreyas Iyer", r:"Batter"}, {t:"KKR", n:"Rinku Singh", r:"Batter"}, {t:"KKR", n:"Andre Russell", r:"Allrounder"},
            {t:"GT", n:"Shubman Gill", r:"Batter"}, {t:"GT", n:"Rashid Khan", r:"Bowler"}, {t:"GT", n:"David Miller", r:"Batter"},
            {t:"LSG", n:"KL Rahul", r:"Batter"}, {t:"LSG", n:"Nicholas Pooran", r:"Batter"}, {t:"LSG", n:"Marcus Stoinis", r:"Allrounder"},
            {t:"RR", n:"Sanju Samson", r:"Batter"}, {t:"RR", n:"Yashasvi Jaiswal", r:"Batter"}, {t:"RR", n:"Trent Boult", r:"Bowler"},
            {t:"SRH", n:"Pat Cummins", r:"Bowler"}, {t:"SRH", n:"Travis Head", r:"Batter"}, {t:"SRH", n:"Heinrich Klaasen", r:"Batter"},
            {t:"DC", n:"Rishabh Pant", r:"Batter"}, {t:"DC", n:"David Warner", r:"Batter"}, {t:"DC", n:"Axar Patel", r:"Allrounder"},
            {t:"PBKS", n:"Shikhar Dhawan", r:"Batter"}, {t:"PBKS", n:"Arshdeep Singh", r:"Bowler"}, {t:"PBKS", n:"Liam Livingstone", r:"Allrounder"},
            // Add filler data to simulate large auction
            {t:"IND", n:"Ishan Kishan", r:"Batter"}, {t:"AUS", n:"Mitchell Starc", r:"Bowler"}, {t:"ENG", n:"Jos Buttler", r:"Batter"},
            {t:"NZ", n:"Daryll Mitchell", r:"Allrounder"}, {t:"SA", n:"Gerald Coetzee", r:"Bowler"}, {t:"WI", n:"Rovman Powell", r:"Batter"},
            {t:"AFG", n:"Naveen Ul Haq", r:"Bowler"}, {t:"IND", n:"Yuzvendra Chahal", r:"Bowler"}, {t:"IND", n:"Shardul Thakur", r:"Allrounder"}
        ];

        // Generate more robust dataset with Base Prices
        let auctionQueue = rawNames.map(p => {
            const baseOptions = [50];
            // Randomly assign base price, skewed towards higher for 'famous' names (simple hash logic or random)
            const bp = baseOptions[Math.floor(Math.random() * baseOptions.length)];
            return { ...p, basePrice: bp };
        });

        // Initialize Teams
        let teamData = participants.map(name => ({
            name: name,
            budget: 7000,
            slots: { bat: [], bowl: [], ar: [], sub: [] }
        }));

        let historyStack = [];
        let currentPlayer = null;
        let currentBid = 0;

        // Shuffle
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        auctionQueue = shuffle(auctionQueue);

        const els = {
            displayName: document.getElementById('current-player-name'),
            displayTeam: document.getElementById('current-player-team'),
            displayRole: document.getElementById('current-player-role'),
            displayBase: document.getElementById('current-base-price'),
            displayBid: document.getElementById('current-bid-display'),
            sellButtons: document.getElementById('sell-buttons-container'),
            unsoldList: document.getElementById('unsold-list'),
            recentSalesList: document.getElementById('recent-sales-list'),
            squadsContainer: document.getElementById('squads-container'),
            playerArea: document.getElementById('player-display-area')
        };

        function init() {
            renderSellButtons();
            renderSquads();
            lucide.createIcons();
            nextPlayer();
        }

        function switchTab(tab) {
            const auctionView = document.getElementById('view-auction');
            const squadsView = document.getElementById('view-squads');
            const btnAuction = document.getElementById('tab-auction');
            const btnSquads = document.getElementById('tab-squads');

            if (tab === 'auction') {
                auctionView.classList.remove('hidden');
                squadsView.classList.add('hidden');
                btnAuction.className = "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm bg-white text-slate-900 transition-all border border-slate-200";
                btnSquads.className = "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md text-slate-500 hover:text-slate-900 transition-all border border-transparent";
            } else {
                auctionView.classList.add('hidden');
                squadsView.classList.remove('hidden');
                btnSquads.className = "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm bg-white text-slate-900 transition-all border border-slate-200";
                btnAuction.className = "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md text-slate-500 hover:text-slate-900 transition-all border border-transparent";
                renderSquads();
            }
        }

        function renderSellButtons() {
            els.sellButtons.innerHTML = teamData.map((team, index) => `
                <button onclick="sellPlayer(${index})" class="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm">
                    ${team.name}
                </button>
            `).join('');
        }

        function updateBidUI() {
            // Animate number change slightly
            els.displayBid.style.transform = "scale(1.1)";
            setTimeout(() => els.displayBid.style.transform = "scale(1)", 100);
            els.displayBid.innerText = currentBid;
        }

        function nextPlayer() {
            if (auctionQueue.length === 0) {
                els.playerArea.innerHTML = `<h1 class="text-4xl font-bold text-slate-300">Auction Completed</h1>`;
                return;
            }
            currentPlayer = auctionQueue.pop();
            // Start bid at Base Price
            currentBid = currentPlayer.basePrice;
            
            updatePlayerCard();
        }

        function prevPlayer() {
            if (historyStack.length === 0) return alert("No history available.");
            
            const lastAction = historyStack.pop();
            
            if(lastAction.status === 'sold') {
                const team = teamData[lastAction.soldTo];
                team.budget += lastAction.price;
                // Remove from team slots
                ['bat','bowl','ar','sub'].forEach(key => {
                    const idx = team.slots[key].findIndex(p => p.n === lastAction.player.n);
                    if(idx > -1) team.slots[key].splice(idx, 1);
                });
                // Remove from log
                if(els.recentSalesList.firstElementChild) els.recentSalesList.firstElementChild.remove();
            } else {
                // Remove from unsold
                if(els.unsoldList.firstElementChild) els.unsoldList.firstElementChild.remove();
            }

            currentPlayer = lastAction.player;
            currentBid = lastAction.price || lastAction.player.basePrice;
            
            updatePlayerCard();
            renderSquads();
        }

        function updatePlayerCard() {
            if (!currentPlayer) return;
            
            els.playerArea.classList.remove('fade-in');
            void els.playerArea.offsetWidth; // Trigger reflow
            els.playerArea.classList.add('fade-in');

            els.displayName.innerText = currentPlayer.n;
            els.displayTeam.innerText = currentPlayer.t;
            els.displayRole.innerText = currentPlayer.r;
            els.displayBase.innerText = currentPlayer.basePrice + "L";
            
            updateBidUI();
        }

        function increaseBid(amount) {
            if (!currentPlayer) return;
            currentBid += amount;
            updateBidUI();
        }

        function markUnsold() {
            if (!currentPlayer) return;
            
            const div = document.createElement('div');
            div.className = "flex items-center justify-between p-2.5 bg-rose-50 rounded-lg border border-rose-100 text-[10px] animate-[fadeIn_0.3s_ease] mb-1";
            div.innerHTML = `<span class="font-bold text-slate-700 truncate w-24">${currentPlayer.n}</span> <span class="text-rose-500 font-bold uppercase tracking-wider">UNSOLD</span>`;
            els.unsoldList.prepend(div);

            historyStack.push({ player: currentPlayer, status: 'unsold' });
            currentPlayer = null;
            nextPlayer();
        }

        function sellPlayer(teamIndex) {
            if (!currentPlayer) return;
            
            const team = teamData[teamIndex];
            
            if (team.budget < currentBid) {
                alert(`Insufficient funds! ${team.name} has ₹${team.budget}L.`);
                return;
            }

            // Logic to determine role category
            let roleKey = 'bat';
            const rLower = currentPlayer.r.toLowerCase();
            if (rLower.includes('bowler')) roleKey = 'bowl';
            else if (rLower.includes('allrounder') || rLower.includes('all-rounder')) roleKey = 'ar';

            const limits = { bat: 4, bowl: 4, ar: 3 };
            let assigned = false;

            if (team.slots[roleKey].length < limits[roleKey]) {
                team.slots[roleKey].push({...currentPlayer, price: currentBid});
                assigned = true;
            } else if (team.slots.sub.length < 2) {
                team.slots.sub.push({...currentPlayer, price: currentBid});
                assigned = true;
            } else {
                alert(`Slots full for ${currentPlayer.r} (and Subs) in ${team.name}.`);
                return;
            }

            if (assigned) {
                team.budget -= currentBid;
                
                // Add to Feed
                const logItem = document.createElement('div');
                logItem.className = "flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-100 text-[10px] animate-[fadeIn_0.3s_ease] mb-1 shadow-sm";
                logItem.innerHTML = `
                    <div class="flex flex-col">
                        <span class="font-bold text-slate-800 truncate w-20">${currentPlayer.n}</span>
                        <span class="text-slate-400 text-[8px] uppercase font-bold tracking-wide">${currentPlayer.r}</span>
                    </div>
                    <div class="text-right">
                        <div class="font-bold text-indigo-600 text-[9px] uppercase tracking-wider">${team.name}</div>
                        <div class="text-slate-900 font-mono font-bold">₹${currentBid}L</div>
                    </div>
                `;
                els.recentSalesList.prepend(logItem);

                historyStack.push({ player: currentPlayer, status: 'sold', soldTo: teamIndex, price: currentBid });
                
                currentPlayer = null;
                renderSquads(); 
                nextPlayer();
            }
        }

        function renderSquads() {
            const pCell = (p, label, colorClass) => {
                 if (p) {
                     return `
                        <div class="relative p-1.5 h-12 flex flex-col justify-center border-b border-slate-100 last:border-0 bg-white hover:bg-slate-50 transition-colors">
                            <div class="text-[10px] font-bold text-slate-800 leading-tight truncate w-full" title="${p.n}">${p.n}</div>
                            <div class="text-[8px] text-slate-400 font-mono font-medium">₹${p.price}L</div>
                            <div class="absolute top-1 right-1 w-1 h-1 rounded-full ${colorClass}"></div>
                        </div>
                     `;
                 }
                 return `
                    <div class="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
                        <span class="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
                    </div>
                 `;
            };

            els.squadsContainer.innerHTML = teamData.map(team => {
                const budgetPercent = (team.budget / 7000) * 100;
                let barColor = 'bg-emerald-500';
                if(team.budget < 3000) barColor = 'bg-yellow-500';
                if(team.budget < 1000) barColor = 'bg-red-500';

                return `
                <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                    <div class="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">${team.name.substring(0,2)}</span>
                            <h3 class="font-bold text-xs text-slate-800 tracking-tight">${team.name}</h3>
                        </div>
                        <div class="text-right flex flex-col items-end">
                            <span class="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
                            <span class="font-mono text-xs font-bold text-slate-900">₹${team.budget}L</span>
                        </div>
                    </div>
                    <div class="w-full h-0.5 bg-slate-100">
                        <div class="h-full ${barColor} transition-all duration-500" style="width: ${budgetPercent}%"></div>
                    </div>
                    <div class="overflow-x-auto scroller">
                        <div class="flex min-w-max divide-x divide-slate-100">
                            <div class="flex flex-col w-28 shrink-0">
                                <div class="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
                                ${[0,1,2,3].map(i => pCell(team.slots.bat[i], 'BAT', 'bg-indigo-400')).join('')}
                            </div>
                            <div class="flex flex-col w-28 shrink-0">
                                <div class="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
                                ${[0,1,2,3].map(i => pCell(team.slots.bowl[i], 'BWL', 'bg-rose-400')).join('')}
                            </div>
                            <div class="flex flex-col w-28 shrink-0">
                                <div class="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
                                ${[0,1,2].map(i => pCell(team.slots.ar[i], 'AR', 'bg-purple-400')).join('')}
                            </div>
                            <div class="flex flex-col w-28 shrink-0 bg-slate-50/30">
                                <div class="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
                                ${[0,1].map(i => pCell(team.slots.sub[i], 'SUB', 'bg-slate-400')).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }

        window.addEventListener('load', init);
    
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
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-14 flex items-center justify-between px-6 shrink-0 z-30 sticky top-0">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center text-white shadow-lg shadow-slate-200">
<svg className="lucide lucide-gavel w-3.5 h-3.5" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
</div>
<h1 className="text-sm tracking-tight font-bold text-slate-900">IPL AUCTION <span className="text-slate-400 font-medium">2026</span></h1>
</div>
<div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
<button className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm bg-white text-slate-900 transition-all border border-transparent" id="tab-auction" onclick="switchTab('auction')">Arena</button>
<button className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md text-slate-500 hover:text-slate-900 transition-all border border-transparent" id="tab-squads" onclick="switchTab('squads')">Squads</button>
</div>
</header>

<main className="flex-1 overflow-hidden relative">

<div className="h-full flex flex-col lg:flex-row p-3 gap-3 overflow-y-auto" id="view-auction">

<div className="flex-1 flex flex-col gap-3 min-h-[500px]">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-60 z-0"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

<div className="flex flex-col fade-in text-center w-full h-full z-10 pb-20 items-center justify-center" id="player-display-area">

<h2 className="uppercase select-none text-lg font-extrabold tracking-[0.2em] bg-slate-50 mb-4" id="current-player-team">RR</h2>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-4 leading-none text-gradient px-4" id="current-player-name">Yashasvi Jaiswal</h1>

<div className="mb-10 flex items-center gap-3">
<span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold border border-slate-200 uppercase tracking-wide" id="current-player-role">Batter</span>
<span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-sm font-mono font-medium border border-slate-200 tracking-tight">
                                Base: <span className="text-slate-900 font-bold" id="current-base-price">50L</span>
</span>
</div>

<div className="flex flex-col items-center gap-1 mb-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 w-full max-w-xs transition-transform duration-200 hover:scale-105">
<span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Current Bid</span>
<div className="flex items-baseline gap-1">
<span className="text-2xl text-slate-300 font-light">₹</span>
<div className="text-6xl font-bold text-indigo-600 tracking-tighter tabular-nums leading-none" id="current-bid-display" style={{transform: 'scale(1)'}}>50</div>
<span className="text-xl text-slate-400 font-medium">L</span>
</div>
</div>
</div>

<div className="z-20 w-full max-w-4xl absolute bottom-0 px-6 pb-6 pt-10 bg-gradient-to-t from-white via-white to-transparent">

<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
<button className="col-span-1 h-14 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:border-slate-300 font-bold text-sm transition flex items-center justify-center gap-2 group shadow-sm" onclick="prevPlayer()">
<svg className="lucide lucide-undo-2 w-4 h-4 opacity-50 group-hover:opacity-100" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg> Back
                            </button>
<button className="col-span-1 h-14 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-xl hover:bg-indigo-100 font-bold text-sm transition flex flex-col items-center justify-center leading-tight" onclick="increaseBid(20)">
<span>+ 20 L</span>
<span className="text-[9px] opacity-60 font-medium uppercase tracking-wide">Increment</span>
</button>
<button className="col-span-1 h-14 bg-indigo-600 text-white border border-indigo-500 rounded-xl hover:bg-indigo-700 font-bold text-sm transition shadow-lg shadow-indigo-200 flex flex-col items-center justify-center leading-tight" onclick="increaseBid(50)">
<span>+ 50 L</span>
<span className="text-[9px] opacity-60 font-medium uppercase tracking-wide">Increment</span>
</button>
<button className="col-span-1 hover:bg-rose-50 transition text-sm font-bold text-rose-600 bg-white h-14 border-rose-100 border rounded-xl shadow-sm" onclick="markUnsold()">
                                UNSOLD
                            </button>
<button className="col-span-1 h-14 bg-slate-900 text-white rounded-xl hover:bg-slate-800 font-bold text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-slate-200" onclick="nextPlayer()">
                                NEXT <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
<div className="flex justify-between items-center mb-2 px-1">
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sell To Team</p>
</div>
<div className="grid grid-cols-5 gap-1.5" id="sell-buttons-container">
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(0)">
                    DANISH
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(1)">
                    AADIL
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(2)">
                    IBRAHIM
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(3)">
                    SHAKEEL
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(4)">
                    SUJATH
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(5)">
                    ASMATH
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(6)">
                    ASHOK
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(7)">
                    MUSTAFA
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(8)">
                    AATHIF
                </button>
<button className="px-1 py-3 text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition truncate shadow-sm" onclick="sellPlayer(9)">
                    VIJAY
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-72 flex flex-col gap-3 h-full shrink-0">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-1/3 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
<svg className="lucide lucide-archive-x w-3 h-3" data-lucide="archive-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="m9.5 17 5-5"></path><path d="m9.5 12 5 5"></path></svg> Unsold
                        </h3>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1 scroller bg-slate-50/30" id="unsold-list">
<p className="text-[10px] text-slate-400 text-center italic mt-4">No unsold players.</p>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-2/3 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
<svg className="lucide lucide-history w-3 h-3" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> Feed
                        </h3>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1 scroller bg-slate-50/30" id="recent-sales-list">

</div>
</div>
</div>
</div>

<div className="hidden h-full overflow-y-auto p-6 bg-slate-50/50" id="view-squads">
<div className="max-w-7xl mx-auto space-y-6 pb-20" id="squads-container">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">DA</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">DANISH</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">AA</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">AADIL</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">IB</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">IBRAHIM</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">SH</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">SHAKEEL</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">SU</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">SUJATH</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">AS</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">ASMATH</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">AS</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">ASHOK</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">MU</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">MUSTAFA</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">AA</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">AATHIF</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white text-[9px] font-bold shadow-sm">VI</span>
<h3 className="font-bold text-xs text-slate-800 tracking-tight">VIJAY</h3>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Budget</span>
<span className="font-mono text-xs font-bold text-slate-900">₹7000L</span>
</div>
</div>
<div className="w-full h-0.5 bg-slate-100">
<div className="h-full bg-emerald-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<div className="overflow-x-auto scroller">
<div className="flex min-w-max divide-x divide-slate-100">
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-indigo-50/60 text-[8px] font-bold text-indigo-400 uppercase tracking-widest text-center border-b border-indigo-100">Batters</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-rose-50/60 text-[8px] font-bold text-rose-400 uppercase tracking-widest text-center border-b border-rose-100">Bowlers</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0">
<div className="px-2 py-1 bg-purple-50/60 text-[8px] font-bold text-purple-400 uppercase tracking-widest text-center border-b border-purple-100">All Round</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
<div className="flex flex-col w-28 shrink-0 bg-slate-50/30">
<div className="px-2 py-1 bg-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-200">Subs</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
<div className="p-1.5 h-12 flex items-center justify-center border-b border-slate-100 last:border-0 bg-slate-50/50">
<span className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">Empty</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
