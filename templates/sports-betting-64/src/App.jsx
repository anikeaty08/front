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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- DATA & STATE ---
        const matchesData = [
            { id: 101, league: "Premier League", home: "Man City", away: "Liverpool", date: "20:00", odds: {1: 2.10, x: 3.50, 2: 3.20}, homeUrl: 'mancity.com', awayUrl: 'liverpoolfc.com' },
            { id: 102, league: "La Liga", home: "Real Madrid", away: "Barcelona", date: "22:30", odds: {1: 2.30, x: 3.40, 2: 2.90}, homeUrl: 'realmadrid.com', awayUrl: 'fcbarcelona.com' },
            { id: 103, league: "NBA", home: "LA Lakers", away: "GS Warriors", date: "03:00", odds: {1: 1.65, 2: 2.25}, homeUrl: 'nba.com/lakers', awayUrl: 'nba.com/warriors' }, // No Draw
            { id: 104, league: "Bundesliga", home: "Bayern Munich", away: "Dortmund", date: "Tomorrow", odds: {1: 1.60, x: 4.20, 2: 5.50}, homeUrl: 'fcbayern.com', awayUrl: 'bvb.de' },
            { id: 105, league: "Tennis ATP", home: "Alcaraz C.", away: "Sinner J.", date: "Sat 14:00", odds: {1: 1.85, 2: 1.95}, homeUrl: '', awayUrl: '' }, // No Draw
        ];

        let slip = [];
        let comboStake = 10;
        let activeTab = 'single';
        let currentSlide = 0;
        const totalSlides = 5; 
        let userBalance = 1240.50;
        const savedBookings = {}; 

        document.addEventListener('DOMContentLoaded', () => {
            renderMatches(matchesData);
            updateSlipUI();
            startSlider();
            createSliderDots();

            document.getElementById('stake-input').addEventListener('input', (e) => {
                comboStake = parseFloat(e.target.value) || 0;
                updateSlipUI();
            });

            const overlay = document.getElementById('overlay');
            const slipPanel = document.getElementById('betslip-panel');
            
            document.getElementById('mobile-slip-btn').addEventListener('click', () => {
                slipPanel.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
            });
            
            const closeActions = [document.getElementById('close-slip'), overlay];
            closeActions.forEach(el => el.addEventListener('click', () => {
                slipPanel.classList.add('translate-x-full');
                overlay.classList.add('hidden');
            }));
        });

        // --- NAVIGATION LOGIC ---
        function switchView(viewName) {
            const views = ['home-view', 'user-view', 'admin-view', 'match-detail-view'];
            views.forEach(v => document.getElementById(v).classList.add('hidden'));
            
            if(viewName === 'home') {
                document.getElementById('home-view').classList.remove('hidden');
                document.getElementById('main-sidebar').classList.remove('hidden');
            } else {
                document.getElementById(viewName + '-view').classList.remove('hidden');
                document.getElementById('main-sidebar').classList.add('hidden'); 
            }
        }

        function switchDashTab(tabName) {
            document.querySelectorAll('.dash-tab').forEach(t => {
                t.classList.remove('text-lime-400', 'border-b-2', 'border-lime-400');
                t.classList.add('text-gray-500');
            });
            document.getElementById('tab-'+tabName).classList.add('text-lime-400', 'border-b-2', 'border-lime-400');
            document.getElementById('tab-'+tabName).classList.remove('text-gray-500');

            document.querySelectorAll('.dash-content').forEach(c => c.classList.add('hidden'));
            document.getElementById('dash-'+tabName).classList.remove('hidden');
        }

        // --- SLIDER ---
        function createSliderDots() {
            const container = document.getElementById('slider-dots');
            for(let i=0; i<totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = `w-1.5 h-1.5 rounded-full transition-all slider-dot ${i===0 ? 'bg-lime-400' : 'bg-gray-600 hover:bg-white'}`;
                dot.onclick = () => setSlide(i);
                container.appendChild(dot);
            }
        }

        function startSlider() {
            setInterval(() => { setSlide((currentSlide + 1) % totalSlides); }, 5000);
        }

        function setSlide(index) {
            currentSlide = index;
            document.getElementById('banner-slider').style.transform = `translateX(-${index * 100}%)`;
            const dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, i) => {
                dot.className = `w-1.5 h-1.5 rounded-full transition-all slider-dot ${i === index ? 'bg-lime-400' : 'bg-gray-600 hover:bg-white'}`;
            });
        }

        // --- BETTING & MATCHES ---
        function renderMatches(data) {
            const container = document.getElementById('matches-container');
            container.innerHTML = data.map(m => {
                // Determine Market Type (3-way vs 2-way)
                const hasDraw = m.odds.hasOwnProperty('x');
                const gridClass = hasDraw ? 'grid-cols-3' : 'grid-cols-2';
                
                return `
                <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
                    <div class="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(${m.id})">
                        <div class="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
                            <div class="flex items-center gap-2">
                                <iconify-icon icon="lucide:trophy" width="10" class="text-lime-500"></iconify-icon>
                                <span class="text-[9px] text-gray-400 font-bold uppercase tracking-wider">${m.league}</span>
                            </div>
                            <span class="text-[9px] text-gray-500 font-medium">${m.date}</span>
                        </div>
                        <div class="p-3 flex flex-row items-center justify-between gap-4">
                            <div class="flex flex-col gap-1.5 flex-1">
                                <div class="flex items-center gap-2">
                                    <img src="https://logo.clearbit.com/${m.homeUrl}" onerror="this.src='https://ui-avatars.com/api/?name=${m.home}&background=random'" class="w-5 h-5 rounded-full bg-white p-0.5">
                                    <span class="text-xs font-bold text-white">${m.home}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <img src="https://logo.clearbit.com/${m.awayUrl}" onerror="this.src='https://ui-avatars.com/api/?name=${m.away}&background=random'" class="w-5 h-5 rounded-full bg-white p-0.5">
                                    <span class="text-xs font-bold text-white">${m.away}</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-center">
                                <span class="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 pt-0">
                        <div class="grid ${gridClass} gap-1.5">
                            ${generateOddBtn(m, '1', '1')}
                            ${hasDraw ? generateOddBtn(m, 'X', 'x') : ''}
                            ${generateOddBtn(m, '2', '2')}
                        </div>
                    </div>
                </div>
            `}).join('');
        }

        function generateOddBtn(match, label, key) {
            const odd = match.odds[key];
            const isSelected = slip.find(s => s.matchId === match.id && s.selection === key);
            return `
                <button onclick="toggleBet(${match.id}, '${key}', ${odd}, '${match.home} v ${match.away}', '${label}')" 
                    class="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden
                    ${isSelected ? 'bg-lime-500 border-lime-500' : 'bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900'}">
                    <span class="text-[9px] font-bold uppercase ${isSelected ? 'text-gray-900' : 'text-gray-500'}">${label}</span>
                    <span class="text-xs font-bold ${isSelected ? 'text-gray-950' : 'text-white'}">${odd.toFixed(2)}</span>
                </button>
            `;
        }

        function toggleBet(matchId, selection, odd, matchName, label) {
            const idx = slip.findIndex(s => s.matchId === matchId && s.selection === selection);
            if (idx > -1) {
                slip.splice(idx, 1);
            } else {
                const matchIdx = slip.findIndex(s => s.matchId === matchId);
                if(matchIdx > -1) slip.splice(matchIdx, 1);
                slip.push({ matchId, selection, odd, matchName, label, singleStake: 10 });
            }
            renderMatches(matchesData);
            updateSlipUI();
        }

        function updateSingleStake(index, val) {
            slip[index].singleStake = parseFloat(val) || 0;
            updateSlipUI();
        }

        function updateSlipUI() {
            const container = document.getElementById('slip-items-container');
            const empty = document.getElementById('slip-empty');
            const badge = document.getElementById('slip-count-badge');
            const mobileBadge = document.getElementById('mobile-badge');
            const comboInput = document.getElementById('combo-stake-container');
            
            badge.innerText = slip.length;
            mobileBadge.innerText = slip.length;
            
            if(slip.length === 0) {
                empty.classList.remove('hidden');
                container.innerHTML = '';
                mobileBadge.classList.add('hidden');
                document.getElementById('slip-total-odds').innerText = '0.00';
                document.getElementById('slip-bonus').innerText = '$0.00';
                document.getElementById('slip-potential').innerText = '$0.00';
                document.getElementById('display-total-stake').innerText = '$0.00';
                return;
            }

            empty.classList.add('hidden');
            mobileBadge.classList.remove('hidden');
            
            if (activeTab === 'single') {
                comboInput.classList.add('hidden');
                document.getElementById('stake-label').innerText = "Total Stake";
            } else {
                comboInput.classList.remove('hidden');
                document.getElementById('stake-label').innerText = "Combo Stake";
            }

            container.innerHTML = slip.map((bet, i) => `
                <div class="bg-gray-900 border border-gray-800 rounded p-2 relative hover:border-gray-600 transition-colors">
                    <div class="flex-1 pr-6 mb-2">
                        <span class="text-[10px] text-white font-bold block line-clamp-1">${bet.matchName}</span>
                        <div class="flex items-center justify-between mt-1">
                            <span class="text-[9px] text-gray-500">${bet.label}</span>
                            <span class="text-xs font-bold text-lime-400">${bet.odd.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    ${activeTab === 'single' ? `
                    <div class="flex items-center bg-gray-950 border border-gray-700 rounded px-2 py-1 mt-1">
                        <span class="text-[9px] text-gray-500 mr-2">Stake</span>
                        <input type="number" value="${bet.singleStake}" oninput="updateSingleStake(${i}, this.value)" class="w-full bg-transparent text-right font-bold text-white text-xs focus:outline-none">
                    </div>
                    <div class="flex justify-between items-center mt-1">
                         <span class="text-[9px] text-gray-600">Return:</span>
                         <span class="text-[9px] font-bold text-gray-300">$${(bet.singleStake * bet.odd).toFixed(2)}</span>
                    </div>
                    ` : ''}

                    <button onclick="toggleBet(${bet.matchId}, '${bet.selection}', ${bet.odd}, '', '')" class="absolute top-1 right-1 text-gray-600 hover:text-red-500 p-1">
                        <iconify-icon icon="lucide:x" width="12"></iconify-icon>
                    </button>
                </div>
            `).join('');

            let totalOdds = 0;
            let totalStake = 0;
            let potentialWin = 0;
            let bonus = 0;

            if (activeTab === 'single') {
                totalStake = slip.reduce((acc, s) => acc + s.singleStake, 0);
                totalOdds = slip.reduce((acc, s) => acc + s.odd, 0); 
                potentialWin = slip.reduce((acc, s) => acc + (s.singleStake * s.odd), 0);
            } else {
                totalStake = comboStake;
                totalOdds = slip.reduce((acc, s) => acc * s.odd, 1);
                bonus = (slip.length >= 3) ? (comboStake * totalOdds * 0.05) : 0;
                potentialWin = (comboStake * totalOdds) + bonus;
            }

            document.getElementById('slip-total-odds').innerText = totalOdds.toFixed(2);
            document.getElementById('slip-bonus').innerText = '$' + bonus.toFixed(2);
            document.getElementById('display-total-stake').innerText = '$' + totalStake.toLocaleString('en-US', {minimumFractionDigits: 2});
            document.getElementById('slip-potential').innerText = '$' + potentialWin.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }

        function switchTab(tab) {
            activeTab = tab;
            const singleBtn = document.getElementById('tab-single');
            const comboBtn = document.getElementById('tab-combo');
            
            if (tab === 'single') {
                singleBtn.className = 'flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-lime-400 border-b-2 border-lime-400 bg-gray-800/50 transition-all';
                comboBtn.className = 'flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-all';
            } else {
                singleBtn.className = 'flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-all';
                comboBtn.className = 'flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-lime-400 border-b-2 border-lime-400 bg-gray-800/50 transition-all';
            }
            updateSlipUI();
        }

        // --- DASHBOARD FUNCTIONS ---
        function fillDeposit(amount) {
            document.getElementById('deposit-input').value = amount;
        }

        function processDeposit() {
            const input = document.getElementById('deposit-input');
            const val = parseFloat(input.value);
            if(val > 0) {
                userBalance += val;
                // Add bonus logic based on request
                let bonus = 0;
                if(val >= 10) bonus = val; // 100%
                else if(val >= 5) bonus = val * 0.5; // 50%
                else if(val >= 1) bonus = val * 0.2; // 20%
                
                updateBalanceUI();
                alert(`Successfully Deposited $${val}. Bonus of $${bonus.toFixed(2)} applied to restricted balance.`);
                input.value = '';
            }
        }
        
        function updateBalanceUI() {
            const fmt = '$' + userBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            document.getElementById('header-balance').innerText = fmt;
            document.getElementById('dash-balance').innerText = fmt;
        }

        function placeBet() {
            if(slip.length === 0) return;
            const stake = activeTab === 'single' ? slip.reduce((a,b)=>a+b.singleStake,0) : comboStake;
            if(stake > userBalance) return alert("Insufficient funds.");
            
            userBalance -= stake;
            updateBalanceUI();
            alert("Bet Placed Successfully!");
            slip = [];
            renderMatches(matchesData);
            updateSlipUI();
        }

        function openBookingModal() {
            if(slip.length === 0) return alert("Select bets first");
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            let code = '';
            for (let i = 0; i < 6; i++) { code += chars.charAt(Math.floor(Math.random() * chars.length)); }
            savedBookings[code] = JSON.parse(JSON.stringify(slip));
            document.getElementById('generated-code').innerText = code;
            document.getElementById('booking-modal').classList.remove('hidden');
        }

        function loadBookingCode() {
            const input = document.getElementById('load-code-input');
            const code = input.value.trim().toUpperCase();
            if (!code) return alert("Please enter a booking code");
            if (savedBookings[code]) {
                slip = JSON.parse(JSON.stringify(savedBookings[code]));
                renderMatches(matchesData);
                updateSlipUI();
                alert(`Booking Code ${code} Loaded!`);
                input.value = '';
            } else {
                alert("Invalid Booking Code.");
            }
        }

        function closeBookingModal() { document.getElementById('booking-modal').classList.add('hidden'); }
        function copyCode() { 
            const code = document.getElementById('generated-code').innerText;
            navigator.clipboard.writeText(code);
            alert("Copied: " + code); 
        }
        function openMatchDetail(id) {
            const m = matchesData.find(x => x.id === id);
            if(!m) return;
            switchView('match-detail');
            document.getElementById('detail-home-name').innerText = m.home;
            document.getElementById('detail-away-name').innerText = m.away;
            document.getElementById('detail-home-logo').src = `https://logo.clearbit.com/${m.homeUrl}`;
            document.getElementById('detail-away-logo').src = `https://logo.clearbit.com/${m.awayUrl}`;
             document.getElementById('detail-markets').innerHTML = `
                <div class="bg-gray-900 border border-gray-800 rounded p-3 text-center text-xs text-gray-500">Full markets would be listed here...</div>
            `;
        }
        function closeMatchDetail() {
            switchView('home');
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
      

<header className="h-14 lg:h-16 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-4 lg:px-6 z-50 flex-shrink-0 relative">

<div className="flex items-center gap-3">
<button className="lg:hidden text-white hover:text-lime-400 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-xl lg:text-2xl font-bold tracking-tight text-white flex items-center gap-1" href="#" onclick="switchView('home')">
                EAZY<span className="text-lime-400">BET</span>
</a>
</div>

<nav className="hidden lg:flex items-center gap-1">
<a className="flex flex-col items-center justify-center px-4 py-1 group" href="#" onclick="switchView('home')">
<iconify-icon className="text-lime-400 mb-1" icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wide text-white">Home</span>
</a>
<a className="flex flex-col items-center justify-center px-4 py-1 group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-lime-400 transition-colors mb-1" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wide group-hover:text-white">Live</span>
</a>
<a className="flex flex-col items-center justify-center px-4 py-1 group" href="#" onclick="switchView('user')">
<iconify-icon className="text-gray-400 group-hover:text-lime-400 transition-colors mb-1" icon="lucide:layout-dashboard" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wide group-hover:text-white">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center px-4 py-1 group" href="#" onclick="switchView('admin')">
<iconify-icon className="text-gray-400 group-hover:text-red-400 transition-colors mb-1" icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wide group-hover:text-white">Admin</span>
</a>
</nav>

<div className="flex items-center gap-3">

<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Balance</span>
<span className="text-xs font-bold text-white tracking-tight" id="header-balance">$1,240.50</span>
</div>
<button className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white hover:bg-lime-500 hover:text-gray-950 hover:border-lime-500 transition-all" onclick="switchView('user')">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-4 py-1.5 text-[10px] font-bold text-gray-950 bg-lime-400 hover:bg-lime-500 uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(163,230,53,0.15)]">Deposit</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<aside className="hidden lg:flex flex-col w-[240px] bg-gray-950 border-r border-gray-800 h-full overflow-y-auto flex-shrink-0 pb-12" id="main-sidebar">

<div className="p-4 border-b border-gray-800 sticky top-0 bg-gray-950 z-20">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-lime-400 transition-colors" icon="lucide:search" strokeWidth="1.5" width="14"></iconify-icon>
<input className="w-full bg-gray-900 text-gray-300 text-xs py-2.5 pl-9 pr-3 rounded border border-gray-800 focus:border-lime-500/50 focus:outline-none transition-all placeholder:text-gray-600" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex-1 p-2 space-y-0.5">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 py-3">Top Leagues</div>
<a className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-900 text-gray-300 hover:text-white group transition-colors" href="#">
<div className="flex items-center gap-2.5"><iconify-icon className="text-lime-400 fill-lime-400/20" icon="lucide:star" strokeWidth="1.5" width="14"></iconify-icon><span className="text-xs font-medium">Premier League</span></div>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-900 text-gray-300 hover:text-white group transition-colors" href="#">
<div className="flex items-center gap-2.5"><iconify-icon className="text-gray-600 group-hover:text-lime-400 transition-colors" icon="lucide:star" strokeWidth="1.5" width="14"></iconify-icon><span className="text-xs font-medium">La Liga</span></div>
</a>
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 py-3 mt-4">All Sports</div>

<a className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-900 rounded text-gray-300 hover:text-white group transition-colors" href="#">
<iconify-icon className="text-gray-500 group-hover:text-lime-400" icon="lucide:trophy" width="14"></iconify-icon><span className="text-xs font-medium">Football</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-900 rounded text-gray-300 hover:text-white group transition-colors" href="#">
<iconify-icon className="text-gray-500 group-hover:text-orange-400" icon="lucide:dribbble" width="14"></iconify-icon><span className="text-xs font-medium">Basketball</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-900 rounded text-gray-300 hover:text-white group transition-colors" href="#">
<iconify-icon className="text-gray-500 group-hover:text-amber-700" icon="lucide:shield" width="14"></iconify-icon><span className="text-xs font-medium">American Football</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-900 rounded text-gray-300 hover:text-white group transition-colors" href="#">
<iconify-icon className="text-gray-500 group-hover:text-yellow-300" icon="lucide:circle-dot" width="14"></iconify-icon><span className="text-xs font-medium">Tennis</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-900 rounded text-gray-300 hover:text-white group transition-colors" href="#">
<iconify-icon className="text-gray-500 group-hover:text-red-500" icon="lucide:swords" width="14"></iconify-icon><span className="text-xs font-medium">MMA / UFC</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-gray-950 relative min-w-0 overflow-y-auto scrollbar-hide">

<div className="view-section fade-enter pb-32 lg:pb-0" id="home-view">

<div className="w-full h-56 md:h-72 relative bg-gray-900 overflow-hidden flex-shrink-0 group select-none">
<div className="flex h-full slider-track" id="banner-slider">

<div className="min-w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(132,204,22,0.15),transparent_50%)] z-10"></div>
<img className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
<span className="text-lime-400 font-bold uppercase tracking-widest text-[10px] mb-2 bg-lime-400/10 w-max px-2 py-0.5 rounded border border-lime-400/20">Official Launch</span>
<h2 className="md:text-6xl leading-none text-4xl font-bold text-white tracking-tighter mb-2">DEPOSIT<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">BONUS EVENT</span></h2>
<div className="flex flex-col gap-1 mb-4 text-xs font-medium text-gray-300">
<div className="flex items-center gap-2"><span className="text-lime-400 font-bold">DEPOSIT $1</span> <span>GET 20% FREE BONUS</span></div>
<div className="flex items-center gap-2"><span className="text-lime-400 font-bold">DEPOSIT $5</span> <span>GET 50% FREE BET</span></div>
<div className="flex items-center gap-2"><span className="text-lime-400 font-bold">DEPOSIT $10+</span> <span>GET 100% MATCH BONUS</span></div>
</div>
<p className="text-[9px] text-gray-500 mb-4">*Bonus funds cannot be withdrawn. Winnings only.</p>
<button className="bg-lime-500 text-gray-950 px-6 py-2.5 rounded text-[10px] font-bold uppercase tracking-wide w-max hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,204,22,0.4)]" onclick="switchView('user')">Claim Now</button>
</div>
</div>

<div className="min-w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/60 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
<span className="text-lime-400 font-bold uppercase tracking-widest text-[10px] mb-3">Exclusive Offer</span>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 leading-none">STAKE BACK<br/><span className="text-gray-500">INSURANCE</span></h2>
<button className="bg-white text-gray-950 px-6 py-2 rounded text-[10px] font-bold uppercase tracking-wide w-max hover:bg-lime-400 transition-colors">Bet Now</button>
</div>
</div>

<div className="min-w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/70 to-gray-950 z-10"></div>
<img className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
<span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-3">Champions League</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">BIG MATCH<br/>TONIGHT</h2>
</div>
</div>

<div className="min-w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-gray-900/70 to-gray-950 z-10"></div>
<img className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
<span className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-3">New Arrival</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">VIRTUAL<br/>CASINO</h2>
<button className="bg-purple-500 text-white px-6 py-2 rounded text-[10px] font-bold uppercase tracking-wide w-max hover:bg-purple-400 transition-colors">Play Now</button>
</div>
</div>

<div className="min-w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-gray-900/70 to-gray-950 z-10"></div>
<img className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
<span className="text-orange-400 font-bold uppercase tracking-widest text-[10px] mb-3">NBA FINALS</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">WATCH &amp;<br/>BET LIVE</h2>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2" id="slider-dots">

<button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-lime-400"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-lime-400"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button><button className="w-1.5 h-1.5 rounded-full transition-all slider-dot bg-gray-600 hover:bg-white"></button></div>
</div>

<div className="p-4 space-y-4" id="matches-container">
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
<div className="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(101)">
<div className="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500" icon="lucide:trophy" width="10"></iconify-icon>
<span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Premier League</span>
</div>
<span className="text-[9px] text-gray-500 font-medium">20:00</span>
</div>
<div className="p-3 flex flex-row items-center justify-between gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Man City&amp;background=random'" src="https://ui-avatars.com/api/?name=Man City&amp;background=random"/>
<span className="text-xs font-bold text-white">Man City</span>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Liverpool&amp;background=random'" src="https://ui-avatars.com/api/?name=Liverpool&amp;background=random"/>
<span className="text-xs font-bold text-white">Liverpool</span>
</div>
</div>
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="p-3 pt-0">
<div className="grid grid-cols-3 gap-1.5">
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(101, '1', 2.1, 'Man City v Liverpool', '1')">
<span className="text-[9px] font-bold uppercase text-gray-500">1</span>
<span className="text-xs font-bold text-white">2.10</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(101, 'x', 3.5, 'Man City v Liverpool', 'X')">
<span className="text-[9px] font-bold uppercase text-gray-500">X</span>
<span className="text-xs font-bold text-white">3.50</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(101, '2', 3.2, 'Man City v Liverpool', '2')">
<span className="text-[9px] font-bold uppercase text-gray-500">2</span>
<span className="text-xs font-bold text-white">3.20</span>
</button>
</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
<div className="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(102)">
<div className="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500" icon="lucide:trophy" width="10"></iconify-icon>
<span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">La Liga</span>
</div>
<span className="text-[9px] text-gray-500 font-medium">22:30</span>
</div>
<div className="p-3 flex flex-row items-center justify-between gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Real Madrid&amp;background=random'" src="https://ui-avatars.com/api/?name=Real Madrid&amp;background=random"/>
<span className="text-xs font-bold text-white">Real Madrid</span>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Barcelona&amp;background=random'" src="https://ui-avatars.com/api/?name=Barcelona&amp;background=random"/>
<span className="text-xs font-bold text-white">Barcelona</span>
</div>
</div>
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="p-3 pt-0">
<div className="grid grid-cols-3 gap-1.5">
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(102, '1', 2.3, 'Real Madrid v Barcelona', '1')">
<span className="text-[9px] font-bold uppercase text-gray-500">1</span>
<span className="text-xs font-bold text-white">2.30</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(102, 'x', 3.4, 'Real Madrid v Barcelona', 'X')">
<span className="text-[9px] font-bold uppercase text-gray-500">X</span>
<span className="text-xs font-bold text-white">3.40</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(102, '2', 2.9, 'Real Madrid v Barcelona', '2')">
<span className="text-[9px] font-bold uppercase text-gray-500">2</span>
<span className="text-xs font-bold text-white">2.90</span>
</button>
</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
<div className="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(103)">
<div className="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500" icon="lucide:trophy" width="10"></iconify-icon>
<span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">NBA</span>
</div>
<span className="text-[9px] text-gray-500 font-medium">03:00</span>
</div>
<div className="p-3 flex flex-row items-center justify-between gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=LA Lakers&amp;background=random'" src="https://ui-avatars.com/api/?name=LA Lakers&amp;background=random"/>
<span className="text-xs font-bold text-white">LA Lakers</span>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=GS Warriors&amp;background=random'" src="https://ui-avatars.com/api/?name=GS Warriors&amp;background=random"/>
<span className="text-xs font-bold text-white">GS Warriors</span>
</div>
</div>
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="p-3 pt-0">
<div className="grid grid-cols-2 gap-1.5">
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(103, '1', 1.65, 'LA Lakers v GS Warriors', '1')">
<span className="text-[9px] font-bold uppercase text-gray-500">1</span>
<span className="text-xs font-bold text-white">1.65</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(103, '2', 2.25, 'LA Lakers v GS Warriors', '2')">
<span className="text-[9px] font-bold uppercase text-gray-500">2</span>
<span className="text-xs font-bold text-white">2.25</span>
</button>
</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
<div className="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(104)">
<div className="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500" icon="lucide:trophy" width="10"></iconify-icon>
<span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Bundesliga</span>
</div>
<span className="text-[9px] text-gray-500 font-medium">Tomorrow</span>
</div>
<div className="p-3 flex flex-row items-center justify-between gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Bayern Munich&amp;background=random'" src="https://ui-avatars.com/api/?name=Bayern Munich&amp;background=random"/>
<span className="text-xs font-bold text-white">Bayern Munich</span>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Dortmund&amp;background=random'" src="https://ui-avatars.com/api/?name=Dortmund&amp;background=random"/>
<span className="text-xs font-bold text-white">Dortmund</span>
</div>
</div>
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="p-3 pt-0">
<div className="grid grid-cols-3 gap-1.5">
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(104, '1', 1.6, 'Bayern Munich v Dortmund', '1')">
<span className="text-[9px] font-bold uppercase text-gray-500">1</span>
<span className="text-xs font-bold text-white">1.60</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(104, 'x', 4.2, 'Bayern Munich v Dortmund', 'X')">
<span className="text-[9px] font-bold uppercase text-gray-500">X</span>
<span className="text-xs font-bold text-white">4.20</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(104, '2', 5.5, 'Bayern Munich v Dortmund', '2')">
<span className="text-[9px] font-bold uppercase text-gray-500">2</span>
<span className="text-xs font-bold text-white">5.50</span>
</button>
</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group shadow-sm">
<div className="cursor-pointer hover:bg-gray-800/30 transition-colors" onclick="openMatchDetail(105)">
<div className="px-3 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-950/30">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500" icon="lucide:trophy" width="10"></iconify-icon>
<span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Tennis ATP</span>
</div>
<span className="text-[9px] text-gray-500 font-medium">Sat 14:00</span>
</div>
<div className="p-3 flex flex-row items-center justify-between gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Alcaraz C.&amp;background=random'" src="https://ui-avatars.com/api/?name=Alcaraz C.&amp;background=random"/>
<span className="text-xs font-bold text-white">Alcaraz C.</span>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-white p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=Sinner J.&amp;background=random'" src="https://ui-avatars.com/api/?name=Sinner J.&amp;background=random"/>
<span className="text-xs font-bold text-white">Sinner J.</span>
</div>
</div>
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] text-lime-400 font-bold flex items-center gap-1 group-hover:text-lime-300 transition-colors">
                                    +12 Markets <iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="p-3 pt-0">
<div className="grid grid-cols-2 gap-1.5">
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(105, '1', 1.85, 'Alcaraz C. v Sinner J.', '1')">
<span className="text-[9px] font-bold uppercase text-gray-500">1</span>
<span className="text-xs font-bold text-white">1.85</span>
</button>
<button className="h-10 lg:h-12 w-full rounded flex flex-col items-center justify-center border transition-all duration-150 relative overflow-hidden bg-gray-950 border-gray-800 hover:border-gray-600 hover:bg-gray-900" onclick="toggleBet(105, '2', 1.95, 'Alcaraz C. v Sinner J.', '2')">
<span className="text-[9px] font-bold uppercase text-gray-500">2</span>
<span className="text-xs font-bold text-white">1.95</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 flex flex-col h-full bg-gray-950" id="user-view">
<div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold text-white tracking-tight">My Dashboard</h1>
<p className="text-xs text-gray-500 mt-1">Manage your funds and view activity.</p>
</div>
<div className="text-right">
<span className="text-[10px] uppercase text-gray-500 font-bold">Total Balance</span>
<div className="text-3xl font-bold text-white tracking-tight text-lime-400" id="dash-balance">$1,240.50</div>
</div>
</div>

<div className="border-b border-gray-800 flex gap-6">
<button className="dash-tab active pb-3 text-sm font-semibold text-lime-400 border-b-2 border-lime-400" id="tab-deposit" onclick="switchDashTab('deposit')">Deposit</button>
<button className="dash-tab pb-3 text-sm font-semibold text-gray-500 hover:text-white transition-colors" id="tab-withdraw" onclick="switchDashTab('withdraw')">Withdraw</button>
<button className="dash-tab pb-3 text-sm font-semibold text-gray-500 hover:text-white transition-colors" id="tab-history" onclick="switchDashTab('history')">Bet History</button>
</div>

<div className="dash-content space-y-6" id="dash-deposit">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-gray-900 border border-gray-800 p-4 rounded-xl cursor-pointer hover:border-lime-500/50 transition-all group" onclick="fillDeposit(10)">
<div className="text-lg font-bold text-white mb-1">$10</div>
<div className="text-[10px] text-gray-500 group-hover:text-lime-400">Get 100% Bonus</div>
</div>
<div className="bg-gray-900 border border-gray-800 p-4 rounded-xl cursor-pointer hover:border-lime-500/50 transition-all group" onclick="fillDeposit(50)">
<div className="text-lg font-bold text-white mb-1">$50</div>
<div className="text-[10px] text-gray-500 group-hover:text-lime-400">Get 100% Bonus</div>
</div>
<div className="bg-gray-900 border border-gray-800 p-4 rounded-xl cursor-pointer hover:border-lime-500/50 transition-all group" onclick="fillDeposit(100)">
<div className="text-lg font-bold text-white mb-1">$100</div>
<div className="text-[10px] text-gray-500 group-hover:text-lime-400">Get 100% Bonus</div>
</div>
</div>
<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
<label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Custom Amount</label>
<div className="flex gap-4">
<input className="flex-1 bg-gray-950 border border-gray-800 rounded px-4 py-3 text-white font-bold focus:outline-none focus:border-lime-500" id="deposit-input" placeholder="0.00" type="number"/>
<button className="bg-lime-500 hover:bg-lime-400 text-gray-950 font-bold px-8 rounded uppercase tracking-wide text-xs transition-colors" onclick="processDeposit()">Deposit Funds</button>
</div>
<p className="text-[10px] text-gray-500 mt-3 flex items-center gap-1"><iconify-icon icon="lucide:info" width="12"></iconify-icon> Deposits are instant. Bonus applied automatically to bonus balance.</p>
</div>
</div>

<div className="dash-content hidden space-y-6" id="dash-withdraw">
<div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-lg">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-bold text-white">Withdrawal Request</h3>
<span className="text-xs text-gray-500">Available: <span className="text-white font-bold">$1,240.50</span></span>
</div>
<div className="space-y-4">
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Amount</label>
<input className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 text-white font-bold focus:outline-none focus:border-lime-500" placeholder="0.00" type="number"/>
</div>
<div>
<label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Bank / Method</label>
<select className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-500 appearance-none">
<option>Bank Transfer (Chase ****8829)</option>
<option>Crypto (USDT TRC20)</option>
</select>
</div>
<button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded uppercase tracking-wide text-xs transition-colors border border-gray-700">Request Withdrawal</button>
</div>
<p className="text-[10px] text-gray-500 mt-4 text-center">Withdrawals are processed within 24 hours. Bonus funds cannot be withdrawn.</p>
</div>
</div>

<div className="dash-content hidden" id="dash-history">
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-950/50 border-b border-gray-800 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
<th className="p-4">Ticket ID</th>
<th className="p-4">Date</th>
<th className="p-4">Type</th>
<th className="p-4">Odds</th>
<th className="p-4">Stake</th>
<th className="p-4 text-right">Return</th>
<th className="p-4 text-center">Status</th>
</tr>
</thead>
<tbody className="text-xs text-gray-300 divide-y divide-gray-800">
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="p-4 font-mono text-gray-500">#82910</td>
<td className="p-4">Oct 24, 14:30</td>
<td className="p-4">Single (Man City)</td>
<td className="p-4">2.10</td>
<td className="p-4">$50.00</td>
<td className="p-4 text-right font-bold text-lime-400">$105.00</td>
<td className="p-4 text-center"><span className="bg-lime-500/10 text-lime-400 px-2 py-0.5 rounded text-[10px] font-bold border border-lime-500/20">WON</span></td>
</tr>
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="p-4 font-mono text-gray-500">#82911</td>
<td className="p-4">Oct 25, 09:15</td>
<td className="p-4">Combo (3-fold)</td>
<td className="p-4">5.45</td>
<td className="p-4">$10.00</td>
<td className="p-4 text-right font-bold text-gray-500">$0.00</td>
<td className="p-4 text-center"><span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-[10px] font-bold border border-red-500/20">LOST</span></td>
</tr>
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="p-4 font-mono text-gray-500">#82912</td>
<td className="p-4">Today, 10:00</td>
<td className="p-4">Live (Tennis)</td>
<td className="p-4">1.85</td>
<td className="p-4">$25.00</td>
<td className="p-4 text-right font-bold text-gray-400">-</td>
<td className="p-4 text-center"><span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-500/20">RUNNING</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 flex flex-col h-full bg-gray-950" id="admin-view">
<div className="h-16 bg-gray-900 border-b border-gray-800 px-6 flex items-center justify-between sticky top-0 z-20">
<div className="flex items-center gap-2 text-red-400">
<iconify-icon icon="lucide:shield-alert" width="20"></iconify-icon>
<span className="font-bold uppercase tracking-wider text-xs">Admin Portal</span>
</div>
<div className="flex gap-4 text-[10px] font-bold text-gray-500 uppercase">
<button className="hover:text-white transition-colors">Dashboard</button>
<button className="hover:text-white transition-colors">Users</button>
<button className="hover:text-white transition-colors">Risk Management</button>
<button className="hover:text-white transition-colors">Settings</button>
</div>
</div>
<div className="p-6 lg:p-10 space-y-6 overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
<span className="text-[10px] text-gray-500 font-bold uppercase">Total Revenue</span>
<div className="text-2xl font-bold text-white mt-1">$842,390</div>
<span className="text-[10px] text-green-400 flex items-center gap-1 mt-1"><iconify-icon icon="lucide:trending-up" width="10"></iconify-icon> +12.5%</span>
</div>
<div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
<span className="text-[10px] text-gray-500 font-bold uppercase">Active Bets</span>
<div className="text-2xl font-bold text-white mt-1">1,204</div>
<span className="text-[10px] text-blue-400 mt-1">Live right now</span>
</div>
<div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
<span className="text-[10px] text-gray-500 font-bold uppercase">New Users</span>
<div className="text-2xl font-bold text-white mt-1">89</div>
<span className="text-[10px] text-gray-400 mt-1">Past 24 hours</span>
</div>
<div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
<span className="text-[10px] text-gray-500 font-bold uppercase">Risk Exposure</span>
<div className="text-2xl font-bold text-red-400 mt-1">$45,000</div>
<span className="text-[10px] text-red-500/70 mt-1">High Volatility</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
<h3 className="text-xs font-bold text-white uppercase mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:users" width="14"></iconify-icon> Recent Registrations
                            </h3>
<div className="space-y-2">
<div className="flex justify-between items-center text-xs p-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-gray-300">john_doe_99</span>
</div>
<span className="text-green-400 text-[10px] border border-green-500/30 px-1.5 rounded">Verified</span>
</div>
<div className="flex justify-between items-center text-xs p-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-gray-300">soccer_fan_2</span>
</div>
<span className="text-yellow-400 text-[10px] border border-yellow-500/30 px-1.5 rounded">Pending</span>
</div>
<div className="flex justify-between items-center text-xs p-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-gray-300">bet_king_1</span>
</div>
<span className="text-red-400 text-[10px] border border-red-500/30 px-1.5 rounded">Suspended</span>
</div>
</div>
<button className="w-full mt-4 text-[10px] bg-gray-800 text-gray-300 py-2 rounded font-bold hover:bg-gray-700">View All Users</button>
</div>

<div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
<h3 className="text-xs font-bold text-white uppercase mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:settings-2" width="14"></iconify-icon> System Operations
                            </h3>
<div className="space-y-3">
<div className="flex justify-between items-center bg-gray-950 p-3 rounded border border-gray-800">
<span className="text-xs text-gray-300 font-medium">Suspend All Betting</span>
<button className="bg-red-500/20 text-red-500 border border-red-500/50 px-3 py-1 rounded text-[10px] font-bold hover:bg-red-500 hover:text-white transition-all">STOP</button>
</div>
<div className="flex justify-between items-center bg-gray-950 p-3 rounded border border-gray-800">
<span className="text-xs text-gray-300 font-medium">Trigger Payouts</span>
<button className="bg-lime-500/20 text-lime-500 border border-lime-500/50 px-3 py-1 rounded text-[10px] font-bold hover:bg-lime-500 hover:text-gray-900 transition-all">PROCESS</button>
</div>
<div className="flex justify-between items-center bg-gray-950 p-3 rounded border border-gray-800">
<span className="text-xs text-gray-300 font-medium">Maintenance Mode</span>
<div className="w-8 h-4 bg-gray-700 rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-gray-400 rounded-full absolute left-0"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 flex flex-col pb-32 lg:pb-0" id="match-detail-view">
<div className="h-64 relative bg-gray-900 flex-shrink-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50"></div>
<div className="absolute inset-0 flex flex-col p-4">
<button className="self-start text-white hover:text-lime-400 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide bg-gray-950/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10" onclick="closeMatchDetail()">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="14"></iconify-icon> Back
                        </button>
<div className="flex-1 flex flex-col items-center justify-center">
<div className="flex items-center gap-8 w-full justify-center">
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 bg-white rounded-full p-1.5 shadow-2xl" id="detail-home-logo" src=""/>
<h2 className="text-lg font-bold text-white tracking-tight" id="detail-home-name">Home</h2>
</div>
<span className="text-2xl font-bold text-white tracking-tighter">VS</span>
<div className="flex flex-col items-center gap-2">
<img className="w-16 h-16 bg-white rounded-full p-1.5 shadow-2xl" id="detail-away-logo" src=""/>
<h2 className="text-lg font-bold text-white tracking-tight" id="detail-away-name">Away</h2>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 space-y-4" id="detail-markets"></div>
</div>
</main>

<aside className="fixed inset-y-0 right-0 w-full sm:w-[320px] lg:w-[300px] lg:static bg-gray-950 border-l border-gray-800 transform translate-x-full lg:translate-x-0 transition-transform duration-300 z-50 flex flex-col h-full overflow-y-auto shadow-2xl lg:shadow-none" id="betslip-panel">

<div className="sticky top-0 bg-gray-950 z-20 border-b border-gray-800 flex items-center justify-between px-4 h-14 lg:h-16 flex-shrink-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:ticket" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<h3 className="font-bold text-white text-xs uppercase tracking-wide">Betslip</h3>
<span className="bg-gray-800 text-gray-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-gray-700" id="slip-count-badge">0</span>
</div>
<button className="lg:hidden text-gray-500 hover:text-white p-2" id="close-slip">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-col min-h-max">

<div className="px-3 py-2 border-b border-gray-800 bg-gray-900/30 sticky top-14 lg:top-16 z-20">
<div className="flex items-center gap-2">
<div className="relative flex-1 group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" icon="lucide:download" width="12"></iconify-icon>
<input className="w-full bg-gray-950 text-white text-[10px] font-medium py-1.5 pl-7 pr-2 rounded border border-gray-800 focus:border-lime-500/50 focus:outline-none uppercase placeholder:text-gray-600" id="load-code-input" placeholder="Enter Booking Code" type="text"/>
</div>
<button className="bg-gray-800 hover:bg-gray-700 text-white text-[10px] font-bold px-3 py-1.5 rounded border border-gray-700 transition-colors uppercase" onclick="loadBookingCode()">Load</button>
</div>
</div>

<div className="flex border-b border-gray-800 bg-gray-900 sticky top-[98px] lg:top-[106px] z-10">
<button className="flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-lime-400 border-b-2 border-lime-400 bg-gray-800/50 transition-all" id="tab-single" onclick="switchTab('single')">Single</button>
<button className="flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-all" id="tab-combo" onclick="switchTab('combo')">Combo</button>
</div>

<div className="p-3 relative flex flex-col bg-gray-950 min-h-[200px]" id="slip-scroll-area">
<div className="hidden mb-3 bg-gradient-to-r from-lime-500/10 to-transparent border border-lime-500/20 p-2 rounded flex items-start gap-2" id="bonus-banner">
<iconify-icon className="text-lime-400 mt-0.5 shrink-0" icon="lucide:zap" width="12"></iconify-icon>
<div className="text-[9px] leading-relaxed text-gray-300"><span className="text-white font-bold">5% Win Boost</span> active!</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-center p-6 opacity-40 py-12" id="slip-empty">
<iconify-icon className="text-gray-600 mb-3" icon="lucide:clipboard-list" strokeWidth="1" width="32"></iconify-icon>
<p className="text-xs font-semibold text-white">Betslip Empty</p>
<p className="text-[10px] text-gray-500 mt-1">Select odds to start betting.</p>
</div>
<div className="space-y-2 pb-2" id="slip-items-container"></div>
</div>

<div className="bg-gray-950 border-t border-gray-800 p-3 space-y-3 pb-safe mt-auto">
<div className="bg-gray-900/50 rounded p-2 border border-gray-800/50 space-y-1">
<div className="flex justify-between text-[10px] font-medium text-gray-500"><span>Total Odds</span><span className="text-white" id="slip-total-odds">0.00</span></div>
<div className="flex justify-between text-[10px] font-medium text-gray-500"><span id="stake-label">Stake (Combo)</span><span className="text-white" id="display-total-stake">$0.00</span></div>
<div className="flex justify-between text-[10px] font-medium text-gray-500"><span>Win Boost</span><span className="text-lime-400" id="slip-bonus">$0.00</span></div>
<div className="flex justify-between items-center pt-1 mt-1 border-t border-gray-800/50">
<span className="text-[10px] text-gray-400 font-bold uppercase">Potential Win</span>
<span className="text-xs font-bold text-lime-400 tracking-tight" id="slip-potential">$0.00</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center bg-gray-900 border border-gray-800 rounded px-2 py-0.5 group focus-within:border-lime-500/50 transition-colors" id="combo-stake-container">
<span className="text-[10px] font-bold text-gray-500 mr-2 uppercase">Combo Stake</span>
<input className="w-full bg-transparent text-right font-bold text-white focus:outline-none py-1.5 h-full text-xs" id="stake-input" type="number" value="10"/>
</div>
<button className="w-full py-2.5 bg-lime-500 hover:bg-lime-400 text-gray-950 text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-lime-500/20 transition-all active:scale-[0.98]" onclick="placeBet()">Place Bet</button>
<button className="w-full py-2.5 text-[10px] font-bold text-white bg-indigo-900/50 border border-indigo-500/30 rounded hover:bg-indigo-900 hover:border-indigo-500/50 transition-colors uppercase tracking-wide" onclick="openBookingModal()">Book a Bet</button>
</div>
<div className="h-20 lg:h-0"></div>
</div>
</div>
</aside>
</div>

<div className="lg:hidden fixed flex min-h-[80px] bg-gray-950/95 w-full z-40 border-gray-800 border-t pt-3 pr-6 pb-safe pl-6 bottom-0 left-0 backdrop-blur-md justify-between">
<button className="flex flex-col items-center gap-1.5 text-lime-400" onclick="switchView('home')">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-bold tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium tracking-wide">Live</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-500 relative hover:text-white" id="mobile-slip-btn">
<div className="absolute -top-1.5 right-1 w-3.5 h-3.5 bg-lime-500 rounded-full text-[8px] font-bold text-gray-950 flex items-center justify-center hidden" id="mobile-badge">0</div>
<iconify-icon icon="lucide:clipboard-list" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium tracking-wide">Betslip</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white" onclick="switchView('user')">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium tracking-wide">Me</span>
</button>
</div>

<div className="fixed inset-0 bg-black/80 z-[60] hidden flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" id="booking-modal">
<div className="bg-white rounded-lg w-full max-w-sm overflow-hidden shadow-2xl">
<div className="bg-indigo-900 p-4 flex justify-between items-center">
<h3 className="text-white font-bold text-xs">Booking Code</h3>
<button className="text-white/70 hover:text-white" onclick="closeBookingModal()"><iconify-icon icon="lucide:x" width="18"></iconify-icon></button>
</div>
<div className="p-6 text-center">
<p className="text-gray-800 font-bold text-sm mb-4">Code Generated</p>
<div className="flex items-center justify-center gap-2 mb-6">
<span className="text-3xl font-bold text-gray-900 tracking-tight" id="generated-code">B82825</span>
<button className="bg-indigo-900 text-white text-[10px] font-bold px-3 py-1.5 rounded" onclick="copyCode()">Copy</button>
</div>
<p className="text-[10px] text-gray-500 mb-4">Share this code with friends. They can load it to get these exact odds.</p>
<button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 rounded text-xs transition-colors" onclick="closeBookingModal()">Close</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 z-40 hidden lg:hidden backdrop-blur-sm transition-opacity" id="overlay"></div>


    </>
  );
}
