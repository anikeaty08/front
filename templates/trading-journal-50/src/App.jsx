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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
925: '#121214',
950: '#09090b',
},
emerald: {
450: '#10b981',
950: '#022c22',
}
},
animation: {
'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
'slide-out-right': 'slideOutRight 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
'backdrop-in': 'backdropIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'toast-in': 'toastIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'toast-out': 'toastOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px) scale(0.99)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-6px)' },
},
scaleIn: {
'0%': { transform: 'scale(0.96)', opacity: '0' },
'100%': { transform: 'scale(1)', opacity: '1' },
},
slideInRight: {
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(0)' },
},
slideOutRight: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(100%)' },
},
backdropIn: {
'0%': { opacity: '0', backdropFilter: 'blur(0px)' },
'100%': { opacity: '1', backdropFilter: 'blur(8px)' },
},
toastIn: {
'0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
},
toastOut: {
'0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
'100%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
}
},
boxShadow: {
'glass-initial': '0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 0 rgba(255,255,255,0.03), 0 4px 20px -2px rgba(0,0,0,0.4)',
'modal-depth': '0 0 0 1px rgba(255,255,255,0.05), -20px 0 50px -10px rgba(0,0,0,0.7)',
'glow-subtle': '0 0 60px -15px rgba(16, 185, 129, 0.15)',
}
}
}
}



        // ============================================
        // APP INITIALIZATION & UTILITIES
        // ============================================
        
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const TRADES_KEY = 'tradepath_db_v1';
        const RULES_KEY = 'tradepath_rules_v1';
        
        let trades = [];
        let rules = [];
        let currentImages = []; 
        let currentContext = { page: 'dashboard', mode: 'real' };
        let undoStack = []; // For Undo functionality

        // Lightbox State
        let lightboxState = {
            images: [],
            currentIndex: 0,
            isOpen: false
        };

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const fmtMoney = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

        // ============================================
        // DATA PERSISTENCE
        // ============================================

        function loadData() {
            const storedTrades = localStorage.getItem(TRADES_KEY);
            if (storedTrades) {
                try { 
                    trades = JSON.parse(storedTrades); 
                    trades.forEach(t => {
                        if (t.image && !t.images) t.images = [t.image];
                        if (!t.images) t.images = [];
                        if (!t.type) t.type = 'real';
                    });
                } 
                catch (e) { console.error("Trades corrupted", e); trades = []; }
            }
            
            const storedRules = localStorage.getItem(RULES_KEY);
            if (storedRules) {
                try { rules = JSON.parse(storedRules); } 
                catch (e) { console.error("Rules corrupted", e); rules = []; }
            } else {
                rules = [
                    { id: 1700000000001, name: "Follow Trend", desc: "Only take trades in direction of higher timeframe trend." },
                    { id: 1700000000002, name: "Wait for Retest", desc: "Wait for price to come back to the key level." }
                ];
                saveRules();
            }

            renderApp();
            initDragDrop();
        }

        function saveTrades() {
            localStorage.setItem(TRADES_KEY, JSON.stringify(trades));
            renderDashboard();
            renderTradeLog();
            renderMonthlyStats(); 
            if(currentContext.page === 'backtest-perf') {
                renderBacktestPerformance();
            }
        }

        function saveRules() {
            localStorage.setItem(RULES_KEY, JSON.stringify(rules));
            renderRulesView();
        }

        // ============================================
        // CORE LOGIC: DATES & CONTEXT
        // ============================================

        function getDashboardDate() {
            // Real Mode: Always uses system date (Today)
            if (currentContext.mode === 'real') {
                return new Date();
            }
            
            // Backtest Mode: Driven by data
            const btTrades = trades.filter(t => t.type === 'backtest');
            
            // If no backtesting trades, default to Today
            if (btTrades.length === 0) {
                return new Date();
            }
            
            // Sort by date descending (newest first)
            btTrades.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Use the date of the most recent backtest trade
            // Adding T12:00:00 to prevent timezone rollback issues with pure date strings
            return new Date(btTrades[0].date + 'T12:00:00');
        }

        function switchContext(page, mode) {
            // Check if user is trying to access backtest-perf in real mode
            if (page === 'backtest-perf' && mode === 'real') {
                page = 'dashboard';
            }

            // If switching from Backtest to Real mode, and we are currently on backtest-perf page, force dashboard
            if (mode === 'real' && currentContext.page === 'backtest-perf') {
                page = 'dashboard';
            }

            currentContext.page = page;
            currentContext.mode = mode; // Explicitly set mode (real/backtest)
            
            updateSidebarUI();
            
            // IMPORTANT: Force complete re-render to ensure data view updates immediately
            renderApp(); 
            
            switchPage(page);
        }

        function updateSidebarUI() {
            // Reset active states
            const navIds = ['nav-dashboard', 'nav-tradelog', 'nav-rules', 'nav-backtest-perf'];
            navIds.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.remove('active');
            });
            
            const subNavIds = ['sub-dashboard-backtest', 'sub-tradelog-backtest'];
            subNavIds.forEach(id => document.getElementById(id).classList.remove('active'));

            // Set active state
            if (currentContext.page === 'dashboard') {
                document.getElementById('nav-dashboard').classList.add('active');
                if (currentContext.mode === 'backtest') {
                     document.getElementById('sub-dashboard-backtest').classList.add('active');
                }
            } else if (currentContext.page === 'tradelog') {
                document.getElementById('nav-tradelog').classList.add('active');
                if (currentContext.mode === 'backtest') {
                     document.getElementById('sub-tradelog-backtest').classList.add('active');
                }
            } else if (currentContext.page === 'rules') {
                document.getElementById('nav-rules').classList.add('active');
            } else if (currentContext.page === 'backtest-perf') {
                document.getElementById('nav-backtest-perf').classList.add('active');
            }

            // Update Header UI for Mode
            const modeBadge = document.getElementById('mode-badge');
            const perfNav = document.getElementById('nav-backtest-perf-container');

            if(currentContext.mode === 'backtest') {
                modeBadge.classList.remove('hidden');
                // Show Backtesting Performance Nav
                perfNav.classList.remove('hidden');
            } else {
                modeBadge.classList.add('hidden');
                // Hide Backtesting Performance Nav
                perfNav.classList.add('hidden');
            }
        }

        function getActiveTrades() {
            // Filter trades based on current context mode explicitly
            return trades.filter(t => t.type === currentContext.mode);
        }

        // ============================================
        // RENDERING LOGIC
        // ============================================

        function renderApp() {
            renderDashboard();
            renderTradeLog();
            renderRulesView();
            renderMonthlyStats();
            // Also update backtest stats if appropriate
            renderBacktestPerformance();
            lucide.createIcons();
            updateSidebarUI();
        }

        function renderDashboard() {
            const activeTrades = getActiveTrades();
            
            // Determine Context Date (Real vs Backtest logic)
            const dashboardDate = getDashboardDate();
            const currentYear = dashboardDate.getFullYear();
            const currentMonth = dashboardDate.getMonth(); // 0-indexed

            // Update Header Date Display
            document.getElementById('current-month-display').textContent = `${months[currentMonth]} ${currentYear}`;
            
            // Calendar Generation
            const calendarGrid = document.getElementById('calendar-grid-content');
            calendarGrid.innerHTML = '';
            
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            const paddingDays = firstDay === 0 ? 6 : firstDay - 1;

            // Empty Cells for Padding
            for(let i=0; i<paddingDays; i++) {
                const pad = document.createElement('div');
                pad.className = 'bg-zinc-900/10 min-h-[70px] md:min-h-[90px] p-2 border-t border-r border-white/5';
                calendarGrid.appendChild(pad);
            }

            // Days
            for(let day=1; day<=daysInMonth; day++) {
                const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                
                // Filter trades for this specific day within current mode
                const dayTrades = activeTrades.filter(t => t.date === dateStr);
                const dayPnL = dayTrades.reduce((acc, t) => {
                    const val = parseFloat(t.pnl);
                    return t.outcome === 'LOSS' ? acc - Math.abs(val) : acc + Math.abs(val);
                }, 0);

                const cell = document.createElement('div');
                cell.className = 'bg-zinc-900/10 min-h-[70px] md:min-h-[90px] p-2 relative hover:bg-white/5 transition-colors group/day cursor-pointer border-t border-r border-white/5 overflow-hidden';
                
                let pnlBadge = '';
                if(dayTrades.length > 0) {
                    if (dayPnL > 0) {
                        pnlBadge = `<div class="absolute inset-x-0.5 md:inset-x-1 bottom-0.5 md:bottom-1 top-6 md:top-7 bg-emerald-500/10 border border-emerald-500/20 rounded-md md:rounded-lg flex items-center justify-center shadow-[0_0_15px_-5px_rgba(16,185,129,0.2)] backdrop-blur-sm"><span class="text-[9px] md:text-xs font-bold text-emerald-400 glow-text-emerald w-full text-center overflow-hidden text-ellipsis px-0.5">+${fmtMoney(dayPnL)}</span></div>`;
                    }
                    else if (dayPnL < 0) {
                        pnlBadge = `<div class="absolute inset-x-0.5 md:inset-x-1 bottom-0.5 md:bottom-1 top-6 md:top-7 bg-red-500/10 border border-red-500/20 rounded-md md:rounded-lg flex items-center justify-center shadow-[0_0_15px_-5px_rgba(239,68,68,0.2)] backdrop-blur-sm"><span class="text-[9px] md:text-xs font-bold text-red-400 glow-text-red w-full text-center overflow-hidden text-ellipsis px-0.5">-${fmtMoney(Math.abs(dayPnL))}</span></div>`;
                    }
                    else {
                        pnlBadge = `<div class="absolute inset-x-0.5 md:inset-x-1 bottom-0.5 md:bottom-1 top-6 md:top-7 bg-zinc-800/40 border border-zinc-700/30 rounded-md md:rounded-lg flex items-center justify-center"><span class="text-[8px] md:text-[10px] font-medium text-zinc-500">BE</span></div>`;
                    }
                }
                cell.innerHTML = `<span class="text-xs text-zinc-600 block mb-1 font-medium group-hover/day:text-zinc-400 transition-colors">${day}</span>${pnlBadge}`;
                calendarGrid.appendChild(cell);
            }

            // Stats Calculation
            const wins = activeTrades.filter(t => t.outcome === 'WIN').length;
            const losses = activeTrades.filter(t => t.outcome === 'LOSS').length;
            const bes = activeTrades.filter(t => t.outcome === 'BE').length;
            const total = activeTrades.length;
            const winRate = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;
            const totalPnL = activeTrades.reduce((acc, t) => {
                const val = parseFloat(t.pnl);
                return t.outcome === 'LOSS' ? acc - Math.abs(val) : acc + Math.abs(val);
            }, 0);

            const grossProfit = activeTrades.filter(t=>t.outcome === 'WIN').reduce((acc, t) => acc + parseFloat(t.pnl), 0);
            const grossLoss = activeTrades.filter(t=>t.outcome === 'LOSS').reduce((acc, t) => acc + parseFloat(t.pnl), 0);
            const avgRR = total > 0 ? (activeTrades.reduce((acc, t) => acc + parseFloat(t.rr || 0), 0) / total).toFixed(1) : 0;

            document.getElementById('stat-winrate').innerText = `${winRate}%`;
            document.getElementById('stat-wins').innerText = wins;
            document.getElementById('stat-losses').innerText = losses;
            document.getElementById('stat-be').innerText = bes;
            const pnlEl = document.getElementById('stat-total-pnl');
            pnlEl.innerText = fmtMoney(totalPnL);
            pnlEl.className = `text-4xl font-semibold tracking-tighter ${totalPnL >= 0 ? 'text-emerald-400 glow-text-emerald' : 'text-red-400 glow-text-red'}`;
            document.getElementById('stat-gross-profit').innerText = fmtMoney(grossProfit);
            document.getElementById('stat-gross-loss').innerText = fmtMoney(grossLoss);
            document.getElementById('stat-avg-rr').innerText = avgRR;
            document.getElementById('stat-rr-val').innerText = avgRR;
            document.getElementById('rr-bar').style.height = `${Math.min(avgRR * 20, 100)}%`;

            const statusText = document.getElementById('status-text');
            const statusIcon = document.getElementById('status-icon');
            if(total === 0) {
                statusText.innerText = "No Data";
                statusIcon.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line>';
                statusText.className = "text-xl font-medium text-white glow-text-white";
                statusIcon.className = "w-8 h-8 text-zinc-500";
            } else if (totalPnL > 0) {
                statusText.innerText = "Profitable";
                statusText.className = "text-xl font-medium text-emerald-400 glow-text-emerald";
                statusIcon.innerHTML = '<path d="M12 20v-6"></path><path d="M6 20V10"></path><path d="M18 20V4"></path>';
                statusIcon.className = "w-8 h-8 text-emerald-400";
            } else {
                statusText.innerText = "Drawdown";
                statusText.className = "text-xl font-medium text-red-400 glow-text-red";
                statusIcon.innerHTML = '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>';
                statusIcon.className = "w-8 h-8 text-red-400";
            }

            // Recent Trades Render
            const recentContainer = document.getElementById('dashboard-recent-trades');
            recentContainer.innerHTML = '';
            
            const recentTrades = [...activeTrades].sort((a, b) => b.id - a.id).slice(0, 6);

            if (recentTrades.length === 0) {
                 recentContainer.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-zinc-500"><p class="text-sm">No recent trades</p></div>`;
            } else {
                recentTrades.forEach(t => {
                    const isWin = t.outcome === 'WIN';
                    const colorClass = isWin ? 'emerald' : (t.outcome === 'LOSS' ? 'red' : 'zinc');
                    const sign = t.outcome === 'LOSS' ? '-' : '+';
                    const pnlVal = t.outcome === 'BE' ? '$0.00' : `${sign}${fmtMoney(t.pnl)}`;
                    const el = document.createElement('div');
                    el.className = `p-3 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-${colorClass}-500/20 transition-all duration-300 cursor-pointer group/item backdrop-blur-sm`;
                    el.innerHTML = `
                        <div class="flex items-center justify-between mb-1.5">
                            <div class="px-2 py-0.5 rounded text-[9px] font-bold border border-${colorClass}-500/20 bg-${colorClass}-500/10 text-${colorClass}-400">${t.outcome}</div>
                            <span class="text-[10px] text-zinc-500">${t.date.slice(5)}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-medium text-white group-hover/item:text-${colorClass}-300 transition-colors glow-text-white">${t.market} ${t.position}</div>
                                <div class="text-[9px] text-zinc-500 uppercase tracking-wider">${t.session}</div>
                            </div>
                            <div class="text-${colorClass}-400 font-bold text-xs glow-text-${colorClass}">${pnlVal}</div>
                        </div>
                    `;
                    recentContainer.appendChild(el);
                });
            }
        }

        function renderMonthlyStats() {
            const activeTrades = getActiveTrades();
            const container = document.getElementById('monthly-stats-container');
            container.innerHTML = '';

            if (activeTrades.length === 0) {
                container.innerHTML = '<div class="text-center py-4 text-zinc-600 text-sm">No trade data available.</div>';
                return;
            }

            const stats = {};
            activeTrades.forEach(t => {
                const monthKey = t.date.substring(0, 7);
                if (!stats[monthKey]) {
                    stats[monthKey] = { wins: 0, total: 0, pnl: 0, rrSum: 0 };
                }
                stats[monthKey].total++;
                if (t.outcome === 'WIN') stats[monthKey].wins++;
                
                const val = parseFloat(t.pnl);
                if (t.outcome === 'LOSS') stats[monthKey].pnl -= Math.abs(val);
                else stats[monthKey].pnl += Math.abs(val);
                
                stats[monthKey].rrSum += parseFloat(t.rr || 0);
            });

            const sortedKeys = Object.keys(stats).sort().reverse();

            sortedKeys.forEach(key => {
                const data = stats[key];
                const winRate = ((data.wins / data.total) * 100).toFixed(0);
                const avgRR = (data.rrSum / data.total).toFixed(1);
                
                const [year, month] = key.split('-');
                const monthName = months[parseInt(month) - 1];
                
                const pnlClass = data.pnl >= 0 ? 'text-emerald-400' : 'text-red-400';
                const pnlSign = data.pnl >= 0 ? '+' : '';

                const row = document.createElement('div');
                row.className = 'glass-item p-4 rounded-xl flex items-center justify-between';
                row.innerHTML = `
                    <div class="w-1/4">
                        <div class="text-sm font-medium text-white">${monthName} <span class="text-zinc-500 text-xs">${year}</span></div>
                        <div class="text-xs text-zinc-500 mt-0.5">${data.total} Trades</div>
                    </div>
                    <div class="w-1/4 text-center">
                        <div class="text-xs text-zinc-500 mb-0.5">Win Rate</div>
                        <div class="text-sm font-semibold text-white">${winRate}%</div>
                    </div>
                    <div class="w-1/4 text-center">
                        <div class="text-xs text-zinc-500 mb-0.5">PnL</div>
                        <div class="text-sm font-semibold ${pnlClass}">${pnlSign}${fmtMoney(data.pnl)}</div>
                    </div>
                    <div class="w-1/4 text-right">
                        <div class="text-xs text-zinc-500 mb-0.5">Avg RR</div>
                        <div class="text-sm font-medium text-white">${avgRR}R</div>
                    </div>
                `;
                container.appendChild(row);
            });
        }

        // NEW: Render Backtesting Performance Page
        function renderBacktestPerformance() {
            // ONLY filter backtest trades regardless of current view mode (though we should be in backtest mode)
            const btTrades = trades.filter(t => t.type === 'backtest');
            const container = document.getElementById('backtest-stats-container');
            const emptyState = document.getElementById('backtest-empty-state');
            container.innerHTML = '';

            if (btTrades.length === 0) {
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
            } else {
                emptyState.classList.add('hidden');
                emptyState.classList.remove('flex');

                const stats = {};
                btTrades.forEach(t => {
                    const monthKey = t.date.substring(0, 7);
                    if (!stats[monthKey]) {
                        stats[monthKey] = { wins: 0, total: 0, pnl: 0, rrSum: 0 };
                    }
                    stats[monthKey].total++;
                    if (t.outcome === 'WIN') stats[monthKey].wins++;
                    
                    const val = parseFloat(t.pnl);
                    if (t.outcome === 'LOSS') stats[monthKey].pnl -= Math.abs(val);
                    else stats[monthKey].pnl += Math.abs(val);
                    
                    stats[monthKey].rrSum += parseFloat(t.rr || 0);
                });

                const sortedKeys = Object.keys(stats).sort().reverse();

                sortedKeys.forEach((key, index) => {
                    const data = stats[key];
                    const winRate = ((data.wins / data.total) * 100).toFixed(0);
                    const avgRR = (data.rrSum / data.total).toFixed(1);
                    
                    const [year, month] = key.split('-');
                    const monthName = months[parseInt(month) - 1];
                    
                    const pnlClass = data.pnl >= 0 ? 'text-emerald-400' : 'text-red-400';
                    const pnlSign = data.pnl >= 0 ? '+' : '';
                    const glowClass = data.pnl >= 0 ? 'glow-text-emerald' : 'glow-text-red';

                    const row = document.createElement('div');
                    // Styling: Larger card for the dedicated page
                    row.className = 'glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-white/10 transition-all duration-500 animate-scale-in';
                    row.style.animationDelay = `${index * 100}ms`;
                    
                    row.innerHTML = `
                        <div class="w-1/4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700 shadow-inner group-hover:bg-zinc-700 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                                </div>
                                <div>
                                    <div class="text-base font-medium text-white tracking-tight">${monthName} ${year}</div>
                                    <div class="text-xs text-zinc-500 mt-0.5 font-medium">${data.total} Trades Executed</div>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4 text-center border-l border-white/5">
                            <div class="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-semibold">Win Rate</div>
                            <div class="text-2xl font-bold text-white tracking-tight glow-text-white">${winRate}%</div>
                        </div>
                        <div class="w-1/4 text-center border-l border-white/5">
                            <div class="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-semibold">Net PnL</div>
                            <div class="text-2xl font-bold ${pnlClass} tracking-tight ${glowClass}">${pnlSign}${fmtMoney(data.pnl)}</div>
                        </div>
                        <div class="w-1/4 text-right border-l border-white/5 pl-4">
                            <div class="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-semibold">Avg R:R</div>
                            <div class="text-2xl font-bold text-white tracking-tight glow-text-white">${avgRR}R</div>
                        </div>
                    `;
                    container.appendChild(row);
                });
            }
        }

        function renderTradeLog() {
            const activeTrades = getActiveTrades();
            const grid = document.getElementById('trades-grid');
            const emptyState = document.getElementById('empty-state');
            grid.innerHTML = '';

            if (activeTrades.length === 0) {
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
            } else {
                emptyState.classList.add('hidden');
                emptyState.classList.remove('flex');
                const sortedTrades = [...activeTrades].sort((a, b) => new Date(b.date) - new Date(a.date));

                sortedTrades.forEach((t, index) => {
                    const isWin = t.outcome === 'WIN';
                    const isLoss = t.outcome === 'LOSS';
                    const colorClass = isWin ? 'emerald' : (isLoss ? 'red' : 'zinc');
                    const pnlFormatted = isLoss ? `-$${parseFloat(t.pnl).toFixed(2)}` : `+$${parseFloat(t.pnl).toFixed(2)}`;
                    const pnlDisplay = t.outcome === 'BE' ? 'Breakeven' : pnlFormatted;
                    
                    let rulesHtml = '';
                    if (t.rules && t.rules.length > 0) {
                        const ruleTags = t.rules.map(rId => {
                            const rule = rules.find(r => r.id == rId);
                            if(rule) return `<span class="px-2 py-0.5 rounded-md bg-zinc-800/40 border border-zinc-700/50 text-[9px] text-zinc-400">${rule.name}</span>`;
                            return '';
                        }).join('');
                        if(ruleTags) {
                            rulesHtml = `<div class="flex flex-wrap gap-2 mb-2 pt-2 border-t border-white/5">${ruleTags}</div>`;
                        }
                    }

                    // Image Handling
                    let imgHtml = '';
                    let imageCountBadge = '';
                    const hasImages = t.images && t.images.length > 0;
                    
                    if (hasImages) {
                        if (t.images.length > 1) {
                            imageCountBadge = `<div class="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-medium flex items-center gap-1 border border-white/10 z-10"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> +${t.images.length - 1}</div>`;
                        }
                        imgHtml = `
                        <div class="mb-2">
                            <div class="h-36 w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden relative group-hover:border-zinc-700 transition-colors shadow-lg cursor-pointer" onclick="openLightboxForTrade(${t.id})">
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Chart">
                                ${imageCountBadge}
                            </div>
                        </div>`;
                    } else {
                        imgHtml = `
                        <div class="mb-2">
                            <div class="h-10 w-full bg-zinc-900/30 rounded-xl border border-zinc-800/50 flex items-center justify-center overflow-hidden relative group-hover:border-zinc-700/50 transition-colors">
                                <span class="text-[10px] text-zinc-600 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> No Screenshot</span>
                            </div>
                        </div>`;
                    }

                    const card = document.createElement('div');
                    card.id = `trade-card-${t.id}`;
                    card.className = `glass-card rounded-3xl p-4 group hover:border-${colorClass}-500/30 transition-all duration-500 animate-scale-in relative w-full min-h-[220px] flex flex-col`;
                    card.style.animationDelay = `${index * 50}ms`;
                    
                    card.innerHTML = `
                        <div class="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300">
                            <button onclick="editTrade(${t.id})" class="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white border border-zinc-700 backdrop-blur-md transition-colors shadow-lg" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                            </button>
                            <button onclick="deleteTrade(${t.id})" class="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-red-900/50 text-zinc-400 hover:text-red-400 border border-zinc-700 hover:border-red-800 backdrop-blur-md transition-colors shadow-lg" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                            </button>
                        </div>

                        <div class="flex justify-between items-start mb-3">
                            <div class="flex items-center gap-3">
                                <div class="bg-gradient-to-br from-zinc-800 to-zinc-900 p-2 rounded-xl border border-zinc-700/50 shadow-inner group-hover:border-zinc-600 transition-colors">
                                    <span class="text-base font-bold text-white glow-text-white tracking-tight">${t.market}</span>
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-sm font-semibold text-white glow-text-white">${t.position}</span>
                                        <span class="px-1.5 py-0.5 rounded text-[9px] border border-${colorClass}-500/20 bg-${colorClass}-500/10 text-${colorClass}-400 font-bold">${t.outcome}</span>
                                    </div>
                                    <div class="text-[10px] text-zinc-500 mt-0.5 flex gap-2">
                                        <span>${t.date}</span>
                                        <span>•</span>
                                        <span>${t.session}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        ${imgHtml}

                        <div class="flex items-end justify-between mt-auto pt-2">
                            <div>
                                <div class="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Risk:Reward</div>
                                <div class="text-sm font-medium text-zinc-300 mt-0.5">${t.rr}R</div>
                            </div>
                            <div class="text-right">
                                <div class="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">PnL</div>
                                <div class="text-xl font-bold ${colorClass === 'emerald' ? 'text-emerald-400 glow-text-emerald' : (colorClass === 'red' ? 'text-red-400 glow-text-red' : 'text-zinc-300')} tracking-tight">${pnlDisplay}</div>
                            </div>
                        </div>
                        ${rulesHtml}
                    `;
                    grid.appendChild(card);
                });
            }
        }

        function renderRulesView() {
            const container = document.getElementById('rules-list-container');
            container.innerHTML = '';

            rules.forEach((r, index) => {
                const el = document.createElement('div');
                el.className = 'glass-card p-5 rounded-2xl flex items-start justify-between group hover:border-zinc-600 transition-all duration-300 animate-scale-in';
                el.style.animationDelay = `${index * 50}ms`;
                el.innerHTML = `
                    <div>
                        <h4 class="text-base font-medium text-white mb-1 glow-text-white">${r.name}</h4>
                        <p class="text-sm text-zinc-400 font-light leading-relaxed">${r.desc}</p>
                    </div>
                    <button onclick="deleteRule(${r.id})" class="p-2 text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                `;
                container.appendChild(el);
            });
        }

        function toggleModal(show) {
            const modal = document.getElementById('new-trade-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');
            
            if (show) {
                // Pre-fill Date based on mode context
                document.getElementById('trade-date').valueAsDate = getDashboardDate();

                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
                renderRulesSelection();
                
                // Clear form if it's a new entry (not edit)
                if(!document.getElementById('trade-id').value) {
                     resetForm();
                }

            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    resetForm();
                }, 500);
            }
        }

        function renderRulesSelection() {
            const container = document.getElementById('rules-selection-container');
            container.innerHTML = '';
            rules.forEach(r => {
                const label = document.createElement('label');
                label.className = 'cursor-pointer group select-none';
                label.innerHTML = `
                    <input type="checkbox" name="trade-rules" value="${r.id}" class="peer sr-only">
                    <div class="px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500/40 peer-checked:text-emerald-400 transition-all text-sm font-medium hover:border-zinc-700 flex items-center justify-between">
                        <span>${r.name}</span>
                        <div class="w-4 h-4 rounded-full border border-zinc-600 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 flex items-center justify-center transition-colors">
                            <svg class="w-2.5 h-2.5 text-black opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                `;
                container.appendChild(label);
            });
        }

        // Image Handling Logic with Drag & Drop
        const dropzoneLabel = document.querySelector('label[for="dropzone-file"]');
        const dropzoneInput = document.getElementById('dropzone-file');

        function initDragDrop() {
            // Prevent default drag behaviors
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropzoneLabel.addEventListener(eventName, preventDefaults, false);
                document.body.addEventListener(eventName, preventDefaults, false);
            });

            // Highlight drop area
            ['dragenter', 'dragover'].forEach(eventName => {
                dropzoneLabel.addEventListener(eventName, highlight, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropzoneLabel.addEventListener(eventName, unhighlight, false);
            });

            // Handle dropped files
            dropzoneLabel.addEventListener('drop', handleDrop, false);
            
            // Handle input change
            dropzoneInput.addEventListener('change', (e) => handleFiles(e.target.files), false);
        }

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        function highlight(e) {
            dropzoneLabel.classList.add('drag-active');
        }

        function unhighlight(e) {
            dropzoneLabel.classList.remove('drag-active');
        }

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        }

        function handleFiles(files) {
            if(!files || files.length === 0) return;
            
            Array.from(files).forEach(file => {
                // Validate image type
                if (!file.type.startsWith('image/')) return;
                
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function() {
                    currentImages.push(reader.result);
                    renderImagePreviews();
                }
            });
        }

        function renderImagePreviews() {
            const container = document.getElementById('image-preview-container');
            if (currentImages.length > 0) {
                container.classList.remove('hidden');
                container.innerHTML = '';
                currentImages.forEach((src, idx) => {
                    const div = document.createElement('div');
                    div.className = 'relative aspect-video rounded-lg overflow-hidden border border-zinc-700 group';
                    div.innerHTML = `
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover">
                        <button type="button" onclick="removeImage(${idx})" class="absolute top-1 right-1 bg-black/70 p-1 rounded-md text-white hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    `;
                    container.appendChild(div);
                });
            } else {
                container.classList.add('hidden');
            }
        }

        function removeImage(idx) {
            currentImages.splice(idx, 1);
            renderImagePreviews();
        }

        function resetForm() {
            document.getElementById('trade-id').value = '';
            document.getElementById('trade-date').valueAsDate = getDashboardDate();
            document.getElementById('trade-market').value = '';
            document.getElementById('trade-entry').value = '';
            document.getElementById('trade-stop').value = '';
            document.getElementById('trade-target').value = '';
            document.getElementById('trade-pnl').value = '';
            document.getElementById('trade-rr').value = '';
            document.getElementById('trade-notes').value = '';
            document.getElementById('modal-title-text').textContent = 'Add New Trade';
            document.getElementById('modal-submit-btn').textContent = 'Save Trade Entry';
            currentImages = [];
            renderImagePreviews();
            
            document.querySelectorAll('input[name="trade-rules"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="outcome"][value="WIN"]').forEach(el => el.checked = true);
            document.querySelectorAll('input[name="position"][value="Long"]').forEach(el => el.checked = true);
        }

        function submitTradeForm() {
            const id = document.getElementById('trade-id').value;
            const isEdit = !!id;
            
            const tradeData = {
                id: isEdit ? parseInt(id) : Date.now(),
                date: document.getElementById('trade-date').value || new Date().toISOString().split('T')[0],
                market: document.getElementById('trade-market').value || 'UNKNOWN',
                session: document.getElementById('trade-session').value,
                position: document.querySelector('input[name="position"]:checked').value,
                entry: document.getElementById('trade-entry').value,
                stop: document.getElementById('trade-stop').value,
                target: document.getElementById('trade-target').value,
                outcome: document.querySelector('input[name="outcome"]:checked').value,
                pnl: document.getElementById('trade-pnl').value || 0,
                rr: document.getElementById('trade-rr').value || 0,
                notes: document.getElementById('trade-notes').value,
                rules: Array.from(document.querySelectorAll('input[name="trade-rules"]:checked')).map(cb => cb.value),
                images: [...currentImages], // Copy current images
                type: currentContext.mode // 'real' or 'backtest'
            };

            if (isEdit) {
                const idx = trades.findIndex(t => t.id === parseInt(id));
                if (idx !== -1) trades[idx] = tradeData;
                showToast('Trade Updated', 'Your journal has been updated.');
            } else {
                trades.push(tradeData);
                showToast('Trade Added', 'New entry added to your journal.');
            }

            saveTrades();
            toggleModal(false);
        }

        function deleteTrade(id) {
            if(confirm('Are you sure you want to delete this trade?')) {
                const el = document.getElementById(`trade-card-${id}`);
                if(el) {
                    el.classList.add('collapsed-item');
                    setTimeout(() => {
                        trades = trades.filter(t => t.id !== id);
                        saveTrades();
                        showToast('Trade Deleted', 'Entry removed from journal.');
                    }, 400);
                }
            }
        }

        function editTrade(id) {
            const trade = trades.find(t => t.id === id);
            if (!trade) return;

            document.getElementById('trade-id').value = trade.id;
            document.getElementById('trade-date').value = trade.date;
            document.getElementById('trade-market').value = trade.market;
            document.getElementById('trade-session').value = trade.session;
            document.getElementById('trade-entry').value = trade.entry || '';
            document.getElementById('trade-stop').value = trade.stop || '';
            document.getElementById('trade-target').value = trade.target || '';
            document.getElementById('trade-pnl').value = trade.pnl;
            document.getElementById('trade-rr').value = trade.rr;
            document.getElementById('trade-notes').value = trade.notes || '';
            
            // Radio buttons
            document.querySelector(`input[name="position"][value="${trade.position}"]`).checked = true;
            document.querySelector(`input[name="outcome"][value="${trade.outcome}"]`).checked = true;

            // Load Images
            currentImages = trade.images || []; 
            if(trade.image && currentImages.length === 0) currentImages.push(trade.image); // Legacy support

            // UI Updates
            document.getElementById('modal-title-text').textContent = 'Edit Trade';
            document.getElementById('modal-submit-btn').textContent = 'Update Entry';

            toggleModal(true); // Open first to render checkboxes
            
            // Check rules
            if (trade.rules) {
                trade.rules.forEach(rId => {
                    const cb = document.querySelector(`input[name="trade-rules"][value="${rId}"]`);
                    if(cb) cb.checked = true;
                });
            }
            
            renderImagePreviews();
        }

        function saveRule() {
            const name = document.getElementById('new-rule-name').value;
            const desc = document.getElementById('new-rule-desc').value;
            if(!name) return;

            rules.push({ id: Date.now(), name, desc });
            document.getElementById('new-rule-name').value = '';
            document.getElementById('new-rule-desc').value = '';
            
            saveRules();
            showToast('Rule Saved', 'New trading rule added.');
        }

        function deleteRule(id) {
             rules = rules.filter(r => r.id !== id);
             saveRules();
        }

        function switchPage(pageId) {
            // Hide all pages
            ['dashboard-view', 'tradelog-view', 'rules-view', 'backtest-perf-view'].forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });
            
            // Show selected page
            const target = document.getElementById(`${pageId}-view`);
            if(target) {
                target.classList.remove('hidden');
                // Re-trigger animation
                target.classList.remove('animate-fade-in-up');
                void target.offsetWidth; 
                target.classList.add('animate-fade-in-up');
            }

            // Update Title
            const titles = {
                'dashboard': 'Dashboard',
                'tradelog': 'Trade Log',
                'rules': 'My Rules',
                'backtest-perf': 'Performance'
            };
            const descs = {
                'dashboard': 'Overview of your trading performance.',
                'tradelog': 'Detailed history of your executions.',
                'rules': 'Your defined trading system rules.',
                'backtest-perf': 'Backtesting analytics and results.'
            };
            document.getElementById('page-title').textContent = titles[pageId] || 'TradePath';
            document.getElementById('page-desc').textContent = descs[pageId] || '';

            // If switching to backtest-perf, ensure we render it
            if(pageId === 'backtest-perf') {
                renderBacktestPerformance();
            }
        }

        // ============================================
        // LIGHTBOX
        // ============================================
        
        function openLightboxForTrade(tradeId) {
            const trade = trades.find(t => t.id === tradeId);
            if(!trade || !trade.images || trade.images.length === 0) return;
            
            lightboxState.images = trade.images;
            lightboxState.currentIndex = 0;
            lightboxState.isOpen = true;
            
            updateLightboxUI();
            
            const modal = document.getElementById('lightbox-modal');
            modal.classList.remove('hidden');
            // Animate in
            requestAnimationFrame(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('lightbox-img').classList.remove('scale-95');
            });
        }

        function closeLightbox() {
            const modal = document.getElementById('lightbox-modal');
            modal.classList.add('opacity-0');
            document.getElementById('lightbox-img').classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                lightboxState.isOpen = false;
            }, 300);
        }

        function navigateLightbox(dir) {
            const newIndex = lightboxState.currentIndex + dir;
            if(newIndex >= 0 && newIndex < lightboxState.images.length) {
                lightboxState.currentIndex = newIndex;
                updateLightboxUI();
            }
        }

        function updateLightboxUI() {
            const img = document.getElementById('lightbox-img');
            img.src = lightboxState.images[lightboxState.currentIndex];
            
            const prevBtn = document.getElementById('lightbox-prev');
            const nextBtn = document.getElementById('lightbox-next');
            const counter = document.getElementById('lightbox-counter');
            
            if(lightboxState.images.length > 1) {
                counter.classList.remove('hidden');
                counter.textContent = `${lightboxState.currentIndex + 1} / ${lightboxState.images.length}`;
                
                if(lightboxState.currentIndex > 0) prevBtn.classList.remove('hidden');
                else prevBtn.classList.add('hidden');
                
                if(lightboxState.currentIndex < lightboxState.images.length - 1) nextBtn.classList.remove('hidden');
                else nextBtn.classList.add('hidden');
            } else {
                counter.classList.add('hidden');
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
            }
        }
        
        // Keyboard Nav for Lightbox
        document.addEventListener('keydown', (e) => {
            if(!lightboxState.isOpen) return;
            if(e.key === 'Escape') closeLightbox();
            if(e.key === 'ArrowLeft') navigateLightbox(-1);
            if(e.key === 'ArrowRight') navigateLightbox(1);
        });

        // ============================================
        // TOASTS
        // ============================================

        function showToast(title, msg) {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            el.className = 'glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-glow-subtle animate-toast-in border-l-2 border-emerald-500';
            el.innerHTML = `
                <div class="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                    <h5 class="text-sm font-medium text-white">${title}</h5>
                    <p class="text-xs text-zinc-400">${msg}</p>
                </div>
            `;
            container.appendChild(el);
            setTimeout(() => {
                el.classList.remove('animate-toast-in');
                el.classList.add('animate-toast-out');
                setTimeout(() => el.remove(), 400);
            }, 3000);
        }

        // Init
        document.addEventListener('DOMContentLoaded', loadData);

    
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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 pointer-events-none w-full max-w-sm px-4" id="toast-container"></div>

<aside className="lg:w-64 flex flex-col glass-card z-20 animate-fade-in-up w-20 border-r-0 pt-6 pb-6 relative justify-between">
<div className="">

<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/80 to-emerald-800/80 flex items-center justify-center text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] ring-1 ring-white/10 group cursor-pointer hover:scale-105 transition-transform duration-500">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="hidden lg:block text-lg font-semibold tracking-tight text-white/90 glow-text-white">TradePath</span>
</div>

<nav className="space-y-4 px-3">

<div className="space-y-1">
<button className="nav-item w-full flex items-center gap-4 px-4 py-2.5 rounded-lg text-left group active" id="nav-dashboard" onclick="switchContext('dashboard', 'real')">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="hidden lg:block text-base font-medium">Dashboard</span>
</button>

<div className="hidden lg:block pl-12 pr-4 overflow-hidden transition-all duration-300" id="sub-dashboard">
<button className="sub-nav-item w-full text-left text-sm text-zinc-500 hover:text-white py-1 flex items-center gap-2 group/sub" id="sub-dashboard-backtest" onclick="switchContext('dashboard', 'backtest')">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/sub:bg-emerald-500 transition-colors"></span>
                            Backtesting
                        </button>
</div>
</div>

<div className="space-y-1">
<button className="nav-item flex group text-left w-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 gap-x-4 gap-y-4 items-center" id="nav-tradelog" onclick="switchContext('tradelog', 'real')">
<svg className="lucide lucide-notebook-pen w-[20px] h-[20px]" data-lucide="notebook-pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
<span className="hidden lg:block text-base font-medium">Trade Log</span>
</button>

<div className="hidden lg:block pl-12 pr-4 overflow-hidden transition-all duration-300" id="sub-tradelog">
<button className="sub-nav-item hover:text-white flex gap-2 group/sub text-sm text-zinc-500 text-left w-full pt-1 pb-1 gap-x-2 gap-y-2 items-center" id="sub-tradelog-backtest" onclick="switchContext('tradelog', 'backtest')">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/sub:bg-emerald-500 transition-colors"></span>
                            Backtesting
                        </button>
</div>
</div>

<div className="space-y-1 hidden" id="nav-backtest-perf-container">
<button className="nav-item w-full flex items-center gap-4 px-4 py-2.5 rounded-lg text-left group" id="nav-backtest-perf" onclick="switchContext('backtest-perf', 'backtest')">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<span className="hidden lg:block text-base font-medium">Performance</span>
</button>
</div>

<div className="">
<button className="nav-item w-full flex items-center gap-4 px-4 py-2.5 rounded-lg text-left group" id="nav-rules" onclick="switchContext('rules', 'real')">
<svg className="lucide lucide-list-checks w-[20px] h-[20px]" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
<span className="hidden lg:block text-base font-medium">My Rules</span>
</button>
</div>
</nav>
</div>
<div className="px-3">
<button className="nav-item w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left group opacity-60 hover:opacity-100">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700 shadow-lg ring-2 ring-zinc-800">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pulkit"/>
</div>
<div className="hidden lg:block">
<p className="text-sm font-medium text-white glow-text-white">Trader</p>
<p className="text-xs text-zinc-500">Pro Plan</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 relative overflow-hidden flex flex-col">

<header className="flex animate-fade-in-up bg-zinc-950/20 h-24 z-10 border-b border-white/5 pr-10 pl-10 backdrop-blur-md items-center justify-between flex-shrink-0">
<div className="">
<h1 className="text-2xl font-semibold text-white tracking-tight glow-text-white" id="page-title">Dashboard</h1>
<div className="flex items-center gap-2 mt-1">
<span className="hidden px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-wide" id="mode-badge">Backtesting Mode</span>
<p className="text-sm text-zinc-400 font-light" id="page-desc">Overview of your trading performance.</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="btn-hover hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-sm text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-800/60 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] transition-all group backdrop-blur-sm">
<svg className="lucide lucide-calendar w-4 h-4 group-hover:text-emerald-400 transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium" id="current-month-display">Jan 2026</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar pt-8 pr-4 pb-8 pl-4 md:pr-8 md:pl-8 relative">

<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>

<div className="w-full md:w-[95%] mx-auto space-y-6 pb-12" id="dashboard-view">

<div className="grid grid-cols-1 xl:grid-cols-4 gap-6 animate-fade-in-up stagger-1 min-h-[400px]">

<div className="premium-container flex flex-col overflow-hidden group xl:col-span-3 text-stone-950 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative min-h-[400px]">
<div className="absolute inset-0 noise-bg mix-blend-overlay z-0 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-white tracking-tight glow-text-white">Monthly Performance</h2>
</div>
<div className="grid grid-cols-7 gap-px bg-white/5 rounded-2xl border border-white/5 overflow-hidden flex-1 shadow-inner backdrop-blur-md">
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Mo</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Tu</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">We</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Th</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Fr</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Sa</div>
<div className="bg-zinc-900/40 p-2 text-center text-xs font-medium text-zinc-500 flex items-center justify-center">Su</div>
<div className="contents" id="calendar-grid-content">

</div>
</div>
</div>
</div>

<div className="xl:col-span-1 glass-card rounded-3xl p-6 flex flex-col group h-full">
<h2 className="text-xl font-medium text-white tracking-tight mb-6 glow-text-white">Recent Trades</h2>
<div className="space-y-3 flex-1 overflow-hidden" id="dashboard-recent-trades">

</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up stagger-2">

<div className="glass-card rounded-3xl p-6 relative overflow-hidden">
<h3 className="text-sm text-zinc-400 font-medium mb-4">Win Rate</h3>
<div className="relative z-10">
<div className="text-4xl font-semibold text-white tracking-tighter glow-text-white" id="stat-winrate">0.0%</div>
<div className="flex gap-4 mt-6">
<div className="text-center group"><div className="w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center text-sm font-medium text-emerald-100 mb-1 shadow-[0_0_15px_rgba(16,185,129,0.2)]" id="stat-wins">0</div><div className="text-[9px] text-zinc-500 uppercase font-semibold tracking-wider">Wins</div></div>
<div className="text-center group"><div className="w-10 h-10 rounded-full border border-red-500/50 bg-red-500/10 flex items-center justify-center text-sm font-medium text-red-100 mb-1 shadow-[0_0_15px_rgba(239,68,68,0.2)]" id="stat-losses">0</div><div className="text-[9px] text-zinc-500 uppercase font-semibold tracking-wider">Loss</div></div>
<div className="text-center group"><div className="w-10 h-10 rounded-full border border-zinc-600/50 bg-zinc-800/50 flex items-center justify-center text-sm font-medium text-zinc-300 mb-1" id="stat-be">0</div><div className="text-[9px] text-zinc-500 uppercase font-semibold tracking-wider">BE</div></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 relative overflow-hidden">
<h3 className="text-sm text-zinc-400 font-medium mb-4">Total PnL</h3>
<div className="flex items-end justify-between">
<div className="text-4xl font-semibold tracking-tighter text-emerald-400 glow-text-emerald" id="stat-total-pnl">$0.00</div>
</div>
<div className="mt-6 space-y-3 group">
<div className="flex justify-between text-xs mb-1 px-3 py-1.5 rounded-lg bg-zinc-900/40 border border-white/5"><span className="text-zinc-400">Gross Profit</span><span className="text-emerald-400 font-medium glow-text-emerald" id="stat-gross-profit">$0.00</span></div>
<div className="flex justify-between text-xs mb-1 px-3 py-1.5 rounded-lg bg-zinc-900/40 border border-white/5"><span className="text-zinc-400">Gross Loss</span><span className="text-red-400 font-medium glow-text-red" id="stat-gross-loss">$0.00</span></div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 relative">
<h3 className="text-sm text-zinc-400 font-medium mb-3">Avg R:R</h3>
<div className="flex items-center justify-center relative h-32 group">
<div className="w-full h-full flex items-end justify-center gap-6">
<div className="w-8 bg-zinc-800/60 border border-white/5 rounded-t-lg h-[40%] relative group-hover:bg-red-500/10 transition-colors duration-500"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">1</span></div>
<div className="w-8 bg-emerald-500 rounded-t-lg h-[40%] relative shadow-[0_0_30px_rgba(16,185,129,0.4)] border-t border-x border-emerald-400/50" id="rr-bar" style={{height: '0%'}}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-emerald-400 font-bold glow-text-emerald" id="stat-rr-val">0.0</span></div>
</div>
</div>
<div className="text-center mt-2"><span className="text-2xl font-semibold text-white tracking-tight glow-text-white" id="stat-avg-rr">0.0</span></div>
</div>

<div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
<h3 className="absolute top-6 left-6 text-sm text-zinc-400 font-medium">Status</h3>
<div className="relative w-24 h-24 flex items-center justify-center mt-4">
<div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full animate-pulse-slow"></div>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/50 flex items-center justify-center shadow-2xl animate-float">
<svg className="w-8 h-8 text-zinc-500" fill="none" height="24" id="status-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-6"></path><path d="M6 20V10"></path><path d="M18 20V4"></path></svg>
</div>
</div>
<div className="mt-4 text-center"><div className="text-xl font-medium text-emerald-400 glow-text-emerald" id="status-text">No Data</div></div>
</div>
</div>
</div>

<div className="hidden w-full md:w-[95%] mx-auto animate-fade-in-up pb-12" id="tradelog-view">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight glow-text-white">Trade Journal</h2>
<div className="flex gap-4">
<button className="btn-hover px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/30 glow-text-white" onclick="toggleModal(true)">
                            + New Trade
                        </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="trades-grid">

</div>
<div className="flex-col items-center justify-center py-20 opacity-50 hidden" id="empty-state">
<div className="w-16 h-16 rounded-full bg-zinc-900/50 flex items-center justify-center mb-5 border border-zinc-800 shadow-inner">
<svg className="lucide lucide-ghost w-8 h-8 text-zinc-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<p className="text-zinc-400 text-lg font-medium">No trades yet</p>
<p className="text-zinc-600 text-sm mt-1">Start your journey by adding a trade.</p>
</div>
</div>

<div className="hidden w-full md:w-[95%] mx-auto animate-fade-in-up pb-12" id="backtest-perf-view">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight glow-text-white">Backtesting Summary</h2>
<p className="text-zinc-500 text-sm hidden md:block">Monthly breakdown of your backtesting results.</p>
</div>
<div className="flex flex-col gap-4">

<div className="flex items-center px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<div className="w-1/4">Month</div>
<div className="w-1/4 text-center">Win Rate</div>
<div className="w-1/4 text-center">Net PnL</div>
<div className="w-1/4 text-right">Avg R:R</div>
</div>
<div className="space-y-3 min-h-[200px]" id="backtest-stats-container">

</div>
</div>
<div className="hidden flex-col items-center justify-center py-20 opacity-50" id="backtest-empty-state">
<p className="text-zinc-400 text-lg font-medium">No backtesting data available</p>
</div>
</div>

<div className="hidden animate-fade-in-up pb-12 w-full md:w-[95%] mx-auto" id="rules-view">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight glow-text-white">Trading Rules</h2>
<p className="text-zinc-500 text-sm hidden md:block">Define your strategy rules to track compliance.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

<div className="lg:col-span-1">
<div className="glass-card rounded-3xl p-6 sticky top-6">
<h3 className="text-lg font-medium text-white mb-5">Add New Rule</h3>
<div className="space-y-5">
<div>
<label className="text-xs text-zinc-400 block mb-2 font-medium">Rule Name</label>
<input className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm placeholder:text-zinc-700" id="new-rule-name" placeholder="e.g. Trend Following" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400 block mb-2 font-medium">Description (Optional)</label>
<textarea className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm resize-none placeholder:text-zinc-700" id="new-rule-desc" placeholder="Explain the rule..." rows="3"></textarea>
</div>
<button className="w-full btn-hover py-3 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700 border border-zinc-700 transition-all shadow-lg text-sm" onclick="saveRule()">Add Rule</button>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-8">
<div className="space-y-4 min-h-[100px]" id="rules-list-container">

</div>
</div>
</div>

<div className="pt-8 border-t border-white/5">
<h3 className="text-xl font-semibold text-white mb-6 tracking-tight glow-text-white">Monthly Performance Summary</h3>
<div className="space-y-3" id="monthly-stats-container">

</div>
</div>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="new-trade-modal" role="dialog">

<div className="absolute inset-0 bg-black/60 backdrop-blur-[6px] transition-opacity opacity-0 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" id="modal-backdrop"></div>

<div className="fixed inset-y-0 right-0 flex max-w-full pl-0 md:pl-10 pointer-events-none">

<div className="w-screen md:w-[75vw] lg:w-[50vw] transform transition-transform translate-x-full duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-auto shadow-glow-subtle shadow-modal-depth" id="modal-panel">
<div className="flex h-full flex-col overflow-y-scroll glass-panel no-scrollbar relative">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="px-8 py-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-xl z-20">
<div>
<h2 className="text-xl font-semibold text-white glow-text-white tracking-tight" id="modal-title-text">Add New Trade</h2>
<p className="text-xs text-zinc-500 mt-1">ESC to close, Enter to save.</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" onclick="toggleModal(false)">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 px-8 py-8 space-y-8 pb-32">
<input id="trade-id" type="hidden" value=""/>

<div className="space-y-2 group focus-within:opacity-100 transition-opacity">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">Date</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] transition-all text-sm" id="trade-date" type="date"/>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">Market</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] transition-all text-sm uppercase font-bold tracking-wider" id="trade-market" placeholder="e.g. NQ" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">Session</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-zinc-900 transition-all text-sm appearance-none cursor-pointer" id="trade-session">
<option value="NY">New York</option>
<option value="London">London</option>
<option value="Asia">Asia</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400">Position</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="position" type="radio" value="Long"/>
<div className="text-center py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500/50 peer-checked:text-emerald-400 peer-checked:shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)] transition-all text-sm font-medium hover:border-zinc-700 hover:bg-zinc-900">Long</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="position" type="radio" value="Short"/>
<div className="text-center py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 peer-checked:bg-red-500/10 peer-checked:border-red-500/50 peer-checked:text-red-400 peer-checked:shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)] transition-all text-sm font-medium hover:border-zinc-700 hover:bg-zinc-900">Short</div>
</label>
</div>
</div>

<div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="space-y-1 group">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide group-focus-within:text-emerald-400 transition-colors">Entry</label>
<input className="w-full bg-zinc-925 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm font-mono glow-text-white" id="trade-entry" step="0.01" type="number"/>
</div>
<div className="space-y-1 group">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide group-focus-within:text-emerald-400 transition-colors">Stop</label>
<input className="w-full bg-zinc-925 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm font-mono glow-text-white" id="trade-stop" step="0.01" type="number"/>
</div>
<div className="space-y-1 group">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide group-focus-within:text-emerald-400 transition-colors">Target</label>
<input className="w-full bg-zinc-925 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm font-mono glow-text-white" id="trade-target" step="0.01" type="number"/>
</div>
</div>

<div className="space-y-6 pt-4 border-t border-white/5">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400">Outcome</label>
<div className="grid grid-cols-3 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="outcome" type="radio" value="WIN"/>
<div className="text-center py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-500 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500/50 peer-checked:text-emerald-400 peer-checked:shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)] transition-all text-xs font-bold tracking-wider hover:border-zinc-700">WIN</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="outcome" type="radio" value="LOSS"/>
<div className="text-center py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-500 peer-checked:bg-red-500/10 peer-checked:border-red-500/50 peer-checked:text-red-400 peer-checked:shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)] transition-all text-xs font-bold tracking-wider hover:border-zinc-700">LOSS</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="outcome" type="radio" value="BE"/>
<div className="text-center py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-500 peer-checked:bg-zinc-800 peer-checked:border-zinc-500 peer-checked:text-white transition-all text-xs font-bold tracking-wider hover:border-zinc-700">BE</div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">PnL ($)</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] transition-all text-sm font-mono glow-text-white" id="trade-pnl" placeholder="0.00" step="0.01" type="number"/>
</div>
<div className="space-y-2 group">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">R:R</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] transition-all text-sm font-mono glow-text-white" id="trade-rr" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>
</div>

<div className="space-y-2 pt-4 border-t border-white/5">
<label className="text-sm font-medium text-zinc-400">Rules Followed</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="rules-selection-container">

</div>
</div>

<div className="space-y-2 pt-4 border-t border-white/5">
<label className="text-sm font-medium text-zinc-400">Screenshots</label>
<div className="flex flex-col w-full">
<div className="hidden grid grid-cols-2 gap-3 mb-3" id="image-preview-container">

</div>
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-800 border-dashed rounded-2xl cursor-pointer bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden" htmlFor="dropzone-file">
<div className="flex flex-col items-center justify-center pt-5 pb-6 pointer-events-none">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg aria-hidden="true" className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" fill="none" id="upload-icon" viewbox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
<path d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-xs text-zinc-500">Drag &amp; drop or click to upload</p>
</div>
<input accept="image/*" className="hidden" id="dropzone-file" multiple="" type="file"/>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 group-focus-within:text-emerald-400 transition-colors">Notes</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] transition-all text-sm resize-none" id="trade-notes" placeholder="Trade execution details..." rows="4"></textarea>
</div>
</div>
<div className="p-8 border-t border-white/5 bg-zinc-950/90 backdrop-blur-xl sticky bottom-0 z-20">
<button className="w-full btn-hover py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-base hover:from-emerald-500 hover:to-emerald-600 transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] border border-emerald-400/30 glow-text-white tracking-wide" id="modal-submit-btn" onclick="submitTradeForm()">
                            Save Trade Entry
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="lightbox-modal">

<div className="absolute inset-0 bg-black/95 backdrop-blur-xl pointer-events-auto" onclick="closeLightbox()"></div>

<div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-10 pointer-events-none">
<img className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg transform scale-95 transition-transform duration-300 pointer-events-auto select-none" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
</div>

<button className="absolute top-6 right-6 p-3 rounded-full bg-zinc-800/50 text-white/70 hover:text-white hover:bg-zinc-700 transition-all pointer-events-auto z-50 hover:scale-110" onclick="closeLightbox()">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800/50 text-white/70 hover:text-white hover:bg-zinc-700 transition-all pointer-events-auto z-50 hover:scale-110 hidden" id="lightbox-prev" onclick="navigateLightbox(-1)">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800/50 text-white/70 hover:text-white hover:bg-zinc-700 transition-all pointer-events-auto z-50 hover:scale-110 hidden" id="lightbox-next" onclick="navigateLightbox(1)">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto z-50">
<div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-zinc-400 text-xs font-medium border border-white/10 hidden" id="lightbox-counter">
                1 / 1
             </div>
</div>
</div>


    </>
  );
}
