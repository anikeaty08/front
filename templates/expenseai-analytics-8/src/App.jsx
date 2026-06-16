import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA ---
        const budgetLimit = 6000;
        let expensesData = [
            { id: 1, title: "AWS Infrastructure", category: "Software", amount: 850.50, date: new Date("2023-10-24T14:30:00") },
            { id: 2, title: "WeWork Office Rent", category: "Operations", amount: 1200.00, date: new Date("2023-10-24T09:00:00") },
            { id: 3, title: "Slack Enterprise", category: "Software", amount: 450.00, date: new Date("2023-10-22T11:15:00") },
            { id: 4, title: "Client Dinner", category: "Misc", amount: 185.40, date: new Date("2023-10-20T19:30:00") },
            { id: 5, title: "MacBook Pro M3", category: "Equipment", amount: 2499.00, date: new Date("2023-10-18T10:00:00") },
            { id: 6, title: "Figma Subscription", category: "Software", amount: 45.00, date: new Date("2023-10-15T15:45:00") },
            { id: 7, title: "Uber Business", category: "Travel", amount: 65.20, date: new Date("2023-10-12T08:20:00") },
            { id: 8, title: "Coffee Supplies", category: "Operations", amount: 80.00, date: new Date("2023-10-10T09:10:00") },
        ];

        const categoryMeta = {
            "Software": { color: "violet", icon: "solar:monitor-camera-linear" },
            "Operations": { color: "blue", icon: "solar:buildings-linear" },
            "Equipment": { color: "rose", icon: "solar:laptop-linear" },
            "Misc": { color: "orange", icon: "solar:bag-linear" },
            "Travel": { color: "emerald", icon: "solar:plane-linear" }
        };

        // --- CORE FUNCTIONS ---

        function formatCurrency(num) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
        }

        function formatTime(dateObj) {
            const now = new Date();
            const diffMs = now - dateObj;
            const diffMins = Math.floor(diffMs / 60000);
            const diffHrs = Math.floor(diffMins / 60);

            if (diffMins < 1) return 'Just now';
            if (diffMins < 60) return `${diffMins}m ago`;
            if (diffHrs < 24) return `${diffHrs}h ago`;
            return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }

        function updateSummaryCards() {
            const total = expensesData.reduce((sum, item) => sum + item.amount, 0);
            const remaining = budgetLimit - total;
            const percent = Math.min((total / budgetLimit) * 100, 100);

            document.getElementById('displayTotalSpent').innerText = formatCurrency(total);
            document.getElementById('displayRemaining').innerText = formatCurrency(remaining);
            document.getElementById('displayProgressBar').style.width = `${percent}%`;
            document.getElementById('displayPercent').innerText = `${Math.round(percent)}% utilized`;
        }

        function renderActivityFeed() {
            const container = document.getElementById('activityFeed');
            container.innerHTML = '';

            if (expensesData.length === 0) {
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full py-12 text-center opacity-60">
                        <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                            <iconify-icon icon="solar:bill-list-linear" class="text-2xl text-slate-400"></iconify-icon>
                        </div>
                        <p class="text-sm text-slate-300 font-medium">No spending activity yet</p>
                        <p class="text-xs text-slate-500 mt-1">Start by adding your first expense.</p>
                    </div>
                `;
                return;
            }

            // Sort by Date Descending
            const sortedData = [...expensesData].sort((a, b) => b.date - a.date);

            sortedData.forEach((item, index) => {
                const meta = categoryMeta[item.category] || { color: 'slate', icon: 'solar:bill-list-linear' };
                const isHighValue = item.amount > 500;
                
                // Animation delay staggered
                const delayClass = index < 5 ? `style="animation-delay: ${index * 0.05}s"` : '';
                const animationClass = index === 0 ? 'animate-slide-in' : 'animate-fade-in';

                const highValueIndicator = isHighValue 
                    ? `<span class="flex h-2 w-2 relative ml-2" title="High Value">
                         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                         <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                       </span>` 
                    : '';
                
                const highValueBorder = isHighValue ? 'high-value-glow border-rose-500/20' : 'border-white/5 hover:bg-white/5';

                const html = `
                    <div class="flex items-center justify-between p-3 rounded-xl border ${highValueBorder} transition-all group cursor-default bg-slate-900/40 ${animationClass}" ${delayClass}>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-${meta.color}-500/10 text-${meta.color}-400 border border-${meta.color}-500/20 shrink-0">
                                <iconify-icon icon="${meta.icon}" class="text-xl"></iconify-icon>
                            </div>
                            <div class="min-w-0">
                                <h4 class="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    ${item.title}
                                    ${highValueIndicator}
                                </h4>
                                <div class="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                                    <span>${item.category}</span>
                                    <span class="w-1 h-1 rounded-full bg-slate-700"></span>
                                    <span>${formatTime(item.date)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-sm font-semibold ${isHighValue ? 'text-rose-400' : 'text-slate-200'}">-${formatCurrency(item.amount)}</p>
                            <button class="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
        }

        // --- ACTION FUNCTIONS ---

        function addExpense() {
            const titleInput = document.getElementById('inputTitle');
            const amountInput = document.getElementById('inputAmount');
            const categoryInput = document.getElementById('inputCategory');

            const title = titleInput.value || "Untitled Expense";
            const amount = parseFloat(amountInput.value) || 0;
            const category = categoryInput.value;

            if (amount <= 0) return; // Simple validation

            const newExpense = {
                id: Date.now(),
                title: title,
                category: category,
                amount: amount,
                date: new Date() // Now
            };

            expensesData.push(newExpense);

            // Reset inputs
            titleInput.value = '';
            amountInput.value = '';

            // Close Modal
            document.getElementById('addModal').classList.add('hidden');

            // Refresh UI
            renderActivityFeed();
            updateSummaryCards();
            
            // If analytics is open, refresh it too (logic from previous step)
            if(!document.getElementById('analyticsOverlay').classList.contains('view-hidden')){
                 // re-run renderAnalytics if function exists
                 if(typeof renderAnalytics === 'function') renderAnalytics(); 
            }
        }

        // Analytics functions from previous step preserved for context (simplified for this view)
        function calculateAnalytics() {
            const totalSpent = expensesData.reduce((sum, item) => sum + item.amount, 0);
            const remaining = budgetLimit - totalSpent;
            // Group by Category
            const catGroups = {};
            expensesData.forEach(item => {
                if(!catGroups[item.category]) catGroups[item.category] = 0;
                catGroups[item.category] += item.amount;
            });
            const sortedCats = Object.entries(catGroups).sort((a, b) => b[1] - a[1]).map(([name, amount]) => ({ name, amount }));
            return { totalSpent, remaining, sortedCats };
        }

        function renderAnalytics() {
            const data = calculateAnalytics();
            // Basic updates for overlay
            document.getElementById('detailTotal').textContent = formatCurrency(data.totalSpent);
            document.getElementById('detailRemaining').textContent = formatCurrency(data.remaining);
            
            // ... (Full analytics logic would be here as per previous iteration) ...
            // Re-rendering transaction table in overlay
            const tbody = document.getElementById('transactionsTableBody');
            tbody.innerHTML = '';
            [...expensesData].sort((a, b) => b.date - a.date).slice(0, 5).forEach(tx => {
                 const color = categoryMeta[tx.category]?.color || 'slate';
                 tbody.innerHTML += `
                    <tr class="group hover:bg-white/5 transition-colors">
                        <td class="px-4 py-3"><div class="flex items-center gap-3"><span class="text-slate-200">${tx.title}</span></div></td>
                        <td class="px-4 py-3"><span class="px-2 py-1 rounded text-[10px] bg-${color}-500/10 text-${color}-300 border border-${color}-500/20">${tx.category}</span></td>
                        <td class="px-4 py-3 text-xs text-slate-400">${tx.date.toLocaleDateString()}</td>
                        <td class="px-4 py-3 text-right text-slate-200 font-medium">-${formatCurrency(tx.amount)}</td>
                    </tr>`;
            });
        }

        function openAnalytics() {
            renderAnalytics();
            const overlay = document.getElementById('analyticsOverlay');
            overlay.classList.remove('view-hidden');
            overlay.classList.add('view-visible');
        }

        function closeAnalytics() {
            const overlay = document.getElementById('analyticsOverlay');
            overlay.classList.remove('view-visible');
            overlay.classList.add('view-hidden');
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderActivityFeed();
            updateSummaryCards();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-20 lg:w-64 h-full border-r border-white/5 flex flex-col bg-slate-950/50 backdrop-blur-md relative z-20 transition-all duration-300">
<div className="h-20 flex items-center justify-center lg:justify-start lg:px-8 border-b border-white/5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-amber-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
<iconify-icon className="text-white text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<span className="hidden lg:block ml-3 font-medium text-slate-100 tracking-tight text-lg">ExpenseAI</span>
</div>
<nav className="flex-1 flex flex-col gap-2 pt-8 pr-3 pb-8 pl-3 gap-x-2 gap-y-2">
<a className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 text-slate-100 border border-white/5 shadow-sm transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyan-400 transition-colors" icon="solar:widget-5-linear"></iconify-icon>
<span className="hidden lg:block text-sm font-normal">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyan-400 transition-colors" icon="solar:chart-2-linear"></iconify-icon>
<span className="hidden lg:block text-sm font-normal">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyan-400 transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
<span className="hidden lg:block text-sm font-normal">Budget</span>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center justify-center lg:justify-start gap-3 p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
<span className="hidden lg:block text-sm">Settings</span>
</button>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-slate-950">

<header className="sticky z-10 glass-panel flex h-20 border-white/5 border-b-0 pr-8 pl-8 top-0 items-center justify-between">
<div className="">
<h1 className="text-xl font-medium text-slate-100 tracking-tight">Overview</h1>
<p className="text-xs text-slate-500 mt-0.5">Real-time C++ Analytics Engine</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    System Online
                </div>
<button className="group relative overflow-hidden bg-slate-100 hover:bg-white text-slate-950 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2" onclick="document.getElementById('addModal').classList.remove('hidden')">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
<span>Add Expense</span>
</button>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-6 pb-20">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="uppercase text-xs font-medium text-slate-500 tracking-wider">Total Spent</p>
<h3 className="text-2xl text-slate-100 font-medium mt-1 tracking-tight" id="displayTotalSpent">$5,375.10</h3>
</div>
<div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:card-send-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/10 flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> 12%
                        </span>
<span className="text-slate-500">vs last month</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer hover:border-green-500/30 transition-all duration-300" onclick="openAnalytics()">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-80"></div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-400">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider group-hover:text-green-400 transition-colors">Remaining Budget</p>
<h3 className="text-2xl text-slate-100 font-medium mt-1 tracking-tight" id="displayRemaining">$624.90</h3>
</div>
<div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:pie-chart-linear"></iconify-icon>
</div>
</div>
<div className="w-full bg-slate-800/50 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-gradient-to-r from-green-500 to-teal-400 h-1.5 rounded-full transition-all duration-700" id="displayProgressBar" style={{width: '89.585%'}}></div>
</div>
<p className="text-xs text-slate-500 mt-2 flex justify-between">
<span id="displayPercent">90% utilized</span>
<span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">View Analysis</span>
</p>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Top Category</p>
<h3 className="text-2xl text-slate-100 font-medium mt-1 tracking-tight">Software</h3>
</div>
<div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
<iconify-icon className="text-xl" icon="solar:laptop-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-slate-200 font-medium">$1,290.00</span>
<span className="text-slate-500">spent this month</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in delay-100">

<div className="lg:col-span-2 glass-card rounded-2xl p-0 min-h-[400px] flex flex-col relative overflow-hidden">
<div className="flex sticky bg-slate-950/20 z-10 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div>
<h2 className="text-slate-100 font-medium tracking-tight">Spending Activity</h2>
<p className="text-xs text-slate-500 mt-0.5">Recent transactions in real-time</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto max-h-[400px] p-2 space-y-1" id="activityFeed">
<div className="flex items-center justify-between p-3 rounded-xl border high-value-glow border-rose-500/20 transition-all group cursor-default bg-slate-900/40 animate-slide-in" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    AWS Infrastructure
                                    <span className="flex h-2 w-2 relative ml-2" title="High Value">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
</h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Software</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 24</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-rose-400">-$850.50</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border high-value-glow border-rose-500/20 transition-all group cursor-default bg-slate-900/40 animate-fade-in" style={{animationDelay: '0.05s'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    WeWork Office Rent
                                    <span className="flex h-2 w-2 relative ml-2" title="High Value">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
</h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Operations</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 24</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-rose-400">-$1,200.00</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-default bg-slate-900/40 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    Slack Enterprise
                                    
                                </h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Software</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 22</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-slate-200">-$450.00</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-default bg-slate-900/40 animate-fade-in" style={{animationDelay: '0.15000000000000002s'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:bag-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    Client Dinner
                                    
                                </h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Misc</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 20</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-slate-200">-$185.40</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border high-value-glow border-rose-500/20 transition-all group cursor-default bg-slate-900/40 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    MacBook Pro M3
                                    <span className="flex h-2 w-2 relative ml-2" title="High Value">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
</h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Equipment</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 18</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-rose-400">-$2,499.00</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-default bg-slate-900/40 animate-fade-in">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    Figma Subscription
                                    
                                </h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Software</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 15</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-slate-200">-$45.00</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-default bg-slate-900/40 animate-fade-in">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:plane-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    Uber Business
                                    
                                </h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Travel</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 12</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-slate-200">-$65.20</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-default bg-slate-900/40 animate-fade-in">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h4 className="text-sm font-medium text-slate-200 truncate pr-4 flex items-center">
                                    Coffee Supplies
                                    
                                </h4>
<div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
<span>Operations</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Oct 10</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-sm font-semibold text-slate-200">-$80.00</p>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-500 hover:text-indigo-400 mt-1 flex items-center justify-end gap-1 ml-auto">
                                Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6 flex flex-col">
<h2 className="text-slate-100 font-medium tracking-tight mb-6">By Category</h2>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 text-slate-300"><span>Software</span><span>45%</span></div>
<div className="h-1 bg-slate-800 rounded-full"><div className="h-full bg-amber-500 w-[45%] rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 text-slate-300"><span>Operations</span><span>28%</span></div>
<div className="h-1 bg-slate-800 rounded-full"><div className="h-full bg-slate-500 w-[28%] rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 text-slate-300"><span>Equipment</span><span>15%</span></div>
<div className="h-1 bg-slate-800 rounded-full"><div className="h-full bg-rose-500 w-[15%] rounded-full"></div></div>
</div>
</div>
<div className="mt-auto pt-8">
<div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-amber-500/10 border border-cyan-500/20">
<div className="flex gap-3 mb-2">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<span className="text-xs font-medium text-cyan-300">Smart Insight</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">Software spending is 12% higher than average. Consider reviewing inactive seats on Slack.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-40 bg-slate-950 view-transition view-hidden overflow-y-auto" id="analyticsOverlay">

<div className="sticky top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-6 h-20 flex items-center justify-between z-50">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-xl border border-white/5 hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all" onclick="closeAnalytics()">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div>
<h2 className="text-slate-100 font-semibold text-lg tracking-tight">Budget Analytics</h2>
<p className="text-xs text-slate-500">Deep dive analysis • October 2023</p>
</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-white/10 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear"></iconify-icon> Export
                </button>
</div>
</div>
<div className="max-w-6xl mx-auto p-6 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-card p-5 rounded-xl border-l-4 border-l-cyan-500">
<p className="text-xs text-slate-500 uppercase tracking-wide">Monthly Spend</p>
<p className="text-2xl text-slate-100 font-semibold mt-1 tracking-tight" id="detailTotal">$0.00</p>
</div>
<div className="glass-card p-5 rounded-xl border-l-4 border-l-green-500">
<p className="text-xs text-slate-500 uppercase tracking-wide">Remaining</p>
<p className="text-2xl text-slate-100 font-semibold mt-1 tracking-tight" id="detailRemaining">$0.00</p>
</div>
<div className="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
<p className="text-xs text-slate-500 uppercase tracking-wide">Daily Avg</p>
<p className="text-2xl text-slate-100 font-semibold mt-1 tracking-tight" id="detailDaily">$0.00</p>
</div>
<div className="glass-card p-5 rounded-xl border-l-4 border-l-rose-500">
<p className="text-xs text-slate-500 uppercase tracking-wide">Biggest Spend</p>
<p className="text-2xl text-slate-100 font-semibold mt-1 tracking-tight" id="detailMax">Software</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-card p-8 rounded-2xl">
<h3 className="text-slate-200 font-medium mb-6 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:chart-square-linear"></iconify-icon>
                        Budget Utilization
                    </h3>
<div className="space-y-8" id="budgetBarsContainer">

</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<h3 className="text-slate-200 font-medium mb-6">Category Breakdown</h3>
<div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center" id="categoryDonut">

<div className="w-full h-full rounded-full" id="donutChart" style={{background: 'conic-gradient(from 0deg, #6366f1 0% 45%, #10b981 45% 73%, #a855f7 73% 88%, #f43f5e 88% 100%)', maskImage: 'radial-gradient(transparent 60%, black 61%)', WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'}}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs text-slate-500">Total</span>
<span className="text-lg font-semibold text-slate-200" id="donutTotal">$4.2k</span>
</div>
</div>
<div className="space-y-3" id="categoryLegend">

</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6">
<h3 className="text-slate-200 font-medium mb-4">Top 5 Recent Expenses</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-400">
<thead className="text-xs uppercase bg-white/5 text-slate-200">
<tr>
<th className="px-4 py-3 rounded-l-lg font-medium">Description</th>
<th className="px-4 py-3 font-medium">Category</th>
<th className="px-4 py-3 font-medium">Date</th>
<th className="px-4 py-3 rounded-r-lg text-right font-medium">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="transactionsTableBody">

</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="addModal">
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onclick="document.getElementById('addModal').classList.add('hidden')"></div>
<div className="relative w-full max-w-md glass-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all">
<div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
<h3 className="text-slate-100 font-medium text-lg">New Transaction</h3>
<button className="text-slate-400 hover:text-white" onclick="document.getElementById('addModal').classList.add('hidden')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Title</label>
<input className="w-full input-field rounded-xl px-4 py-2.5 text-sm" id="inputTitle" placeholder="e.g. AWS Server Cost" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Amount</label>
<input className="w-full input-field rounded-xl px-4 py-2.5 text-sm" id="inputAmount" placeholder="0.00" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Category</label>
<select className="w-full input-field rounded-xl px-4 py-2.5 text-sm" id="inputCategory">
<option className="bg-slate-900" value="Software">Software</option>
<option className="bg-slate-900" value="Operations">Operations</option>
<option className="bg-slate-900" value="Equipment">Equipment</option>
<option className="bg-slate-900" value="Travel">Travel</option>
<option className="bg-slate-900" value="Misc">Misc</option>
</select>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2.5 rounded-xl transition-colors shadow-lg shadow-cyan-500/20" onclick="addExpense()" type="button">Add Transaction</button>
</div>
</div>
</div>
</div>


    </>
  );
}
