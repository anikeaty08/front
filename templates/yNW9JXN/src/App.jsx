import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Sample data
        const data = {
            week: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                income: [520, 0, 1200, 0, 1500, 0, 230],
                expenses: [150, 220, 340, 180, 390, 680, 205],
                total: { income: 3450.80, expenses: 2165.32 }
            },
            month: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                income: [3200, 4100, 3800, 4500],
                expenses: [2400, 2800, 2600, 3100],
                total: { income: 15600, expenses: 10900 }
            },
            quarter: {
                labels: ['Jan', 'Feb', 'Mar'],
                income: [12500, 13200, 14800],
                expenses: [9800, 10200, 11500],
                total: { income: 40500, expenses: 31500 }
            },
            year: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                income: [40500, 42800, 45200, 47500],
                expenses: [31500, 33200, 34800, 36500],
                total: { income: 176000, expenses: 136000 }
            }
        };
        
        const transactions = [
            { id: 1, name: 'Grocery Store', amount: -84.23, date: 'Today, 14:32', icon: 'shopping-bag', color: 'blue', type: 'expense', category: 'Food & Dining' },
            { id: 2, name: 'Salary Deposit', amount: 2450.00, date: 'Today, 09:15', icon: 'building', color: 'green', type: 'income', category: 'Salary' },
            { id: 3, name: 'Electric Bill', amount: -145.80, date: 'Yesterday, 18:45', icon: 'bolt', color: 'purple', type: 'expense', category: 'Housing' },
            { id: 4, name: 'Freelance Work', amount: 780.50, date: 'Yesterday, 15:30', icon: 'laptop', color: 'pink', type: 'income', category: 'Freelance' },
            { id: 5, name: 'Gas Station', amount: -45.67, date: '2 days ago', icon: 'gas-pump', color: 'yellow', type: 'expense', category: 'Transportation' },
            { id: 6, name: 'Restaurant', amount: -125.40, date: '2 days ago', icon: 'utensils', color: 'blue', type: 'expense', category: 'Food & Dining' }
        ];
        
        // Category data
        const categories = {
            expenses: [
                { name: 'Food & Dining', amount: 845.20, color: 'blue' },
                { name: 'Housing', amount: 650.00, color: 'purple' },
                { name: 'Transportation', amount: 320.12, color: 'pink' },
                { name: 'Others', amount: 350.00, color: 'yellow' }
            ],
            income: [
                { name: 'Salary', amount: 2450.00, color: 'blue' },
                { name: 'Freelance', amount: 780.50, color: 'purple' },
                { name: 'Investments', amount: 220.30, color: 'pink' },
                { name: 'Others', amount: 0, color: 'yellow' }
            ]
        };
        
        // Update clock
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
        setInterval(updateClock, 1000);
        updateClock();
        
        // Initialize charts
        let cashflowChart, categoryChart;
        let currentPeriod = 'week';
        let currentCategoryType = 'expenses';
        
        function initCharts() {
            // Cashflow chart
            const ctx = document.getElementById('cashflowChart').getContext('2d');
            cashflowChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data[currentPeriod].labels,
                    datasets: [{
                        label: 'Income',
                        data: data[currentPeriod].income,
                        backgroundColor: '#3b82f6',
                        borderRadius: 5,
                        barPercentage: 0.6
                    }, {
                        label: 'Expenses',
                        data: data[currentPeriod].expenses,
                        backgroundColor: '#ec4899',
                        borderRadius: 5,
                        barPercentage: 0.6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { grid: { display: false } },
                        y: { 
                            grid: { color: 'rgba(255, 255, 255, 0.1)' },
                            ticks: { callback: value => '$' + value }
                        }
                    }
                }
            });
            
            // Category chart
            const catCtx = document.getElementById('categoryChart').getContext('2d');
            categoryChart = new Chart(catCtx, {
                type: 'doughnut',
                data: {
                    labels: categories[currentCategoryType].map(c => c.name),
                    datasets: [{
                        data: categories[currentCategoryType].map(c => c.amount),
                        backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#eab308'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
        
        // Update data based on period
        function updateData(period) {
            currentPeriod = period;
            document.getElementById('income-value').textContent = '$' + data[period].total.income.toLocaleString();
            document.getElementById('expenses-value').textContent = '$' + data[period].total.expenses.toLocaleString();
            
            cashflowChart.data.labels = data[period].labels;
            cashflowChart.data.datasets[0].data = data[period].income;
            cashflowChart.data.datasets[1].data = data[period].expenses;
            cashflowChart.update();
        }
        
        // Update category breakdown
        function updateCategoryBreakdown(type) {
            currentCategoryType = type;
            
            // Update chart
            categoryChart.data.labels = categories[type].map(c => c.name);
            categoryChart.data.datasets[0].data = categories[type].map(c => c.amount);
            categoryChart.update();
            
            // Update list
            const categoryList = document.getElementById('categoryList');
            categoryList.innerHTML = '';
            
            categories[type].forEach((category, index) => {
                const item = document.createElement('div');
                item.className = 'category-item flex justify-between items-center';
                item.innerHTML = `
                    <div class="flex items-center">
                        <div class="w-3 h-3 rounded-full bg-${category.color}-500 mr-2"></div>
                        <span class="text-sm">${category.name}</span>
                    </div>
                    <span class="text-sm font-bold">$${category.amount.toLocaleString()}</span>
                `;
                categoryList.appendChild(item);
            });
        }
        
        // Populate transactions
        function populateTransactions() {
            const container = document.getElementById('transactionsContainer');
            container.innerHTML = '';
            
            transactions.slice(0, 4).forEach(tx => {
                const item = document.createElement('div');
                item.className = 'transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer';
                item.dataset.id = tx.id;
                
                const amountClass = tx.amount > 0 ? 'text-green-400' : 'text-red-400';
                const amountText = tx.amount > 0 ? `+$${Math.abs(tx.amount).toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`;
                
                item.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-${tx.color}-500/20 flex items-center justify-center mr-3">
                                <i class="fas fa-${tx.icon} text-${tx.color}-400"></i>
                            </div>
                            <div>
                                <p class="font-medium">${tx.name}</p>
                                <p class="text-xs text-gray-400">${tx.date}</p>
                            </div>
                        </div>
                        <p class="font-bold ${amountClass}">${amountText}</p>
                    </div>
                `;
                
                item.addEventListener('click', () => {
                    alert(`Transaction details for ${tx.name}`);
                });
                
                container.appendChild(item);
            });
        }
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            initCharts();
            populateTransactions();
            
            // Period buttons
            document.querySelectorAll('.period-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.period-btn').forEach(b => {
                        b.classList.remove('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
                        b.classList.add('bg-[#1e1e3a]');
                    });
                    btn.classList.add('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
                    btn.classList.remove('bg-[#1e1e3a]');
                    
                    updateData(btn.dataset.period);
                });
            });
            
            // Category type selector
            document.getElementById('categoryType').addEventListener('change', (e) => {
                updateCategoryBreakdown(e.target.value);
            });
            
            // Show all transactions
            document.getElementById('showAllTransactions').addEventListener('click', () => {
                alert('Show all transactions screen');
            });
            
            // Add button
            document.getElementById('addButton').addEventListener('click', () => {
                alert('Add new transaction');
            });
            
            // Back button
            document.getElementById('backButton').addEventListener('click', () => {
                alert('Navigate back');
            });
            
            // Nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', () => {
                    alert('Navigate to ' + item.querySelector('span').textContent);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex justify-between items-center p-2 text-xs">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4 flex items-center">
<button className="mr-4 h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]" id="backButton">
<i className="fas fa-arrow-left"></i>
</button>
<h1 className="text-2xl font-bold">Cashflow</h1>
</header>

<main className="px-4 pb-24">

<div className="flex space-x-2 mb-6 overflow-x-auto py-2 no-scrollbar">
<button className="period-btn active px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm whitespace-nowrap" data-period="week">Week</button>
<button className="period-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-period="month">Month</button>
<button className="period-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-period="quarter">Quarter</button>
<button className="period-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-period="year">Year</button>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<p className="text-xs text-gray-400">INCOME</p>
<p className="text-2xl font-bold" id="income-value">$3,450.80</p>
<div className="flex items-center mt-1 text-xs">
<i className="fas fa-arrow-up text-green-400 mr-1"></i>
<span className="text-green-400">+12.5%</span>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<p className="text-xs text-gray-400">EXPENSES</p>
<p className="text-2xl font-bold" id="expenses-value">$2,165.32</p>
<div className="flex items-center mt-1 text-xs">
<i className="fas fa-arrow-down text-red-400 mr-1"></i>
<span className="text-red-400">-8.3%</span>
</div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Cashflow Overview</h3>
<div className="flex space-x-2">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
<span className="text-xs text-gray-400">Income</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-pink-500 mr-1"></div>
<span className="text-xs text-gray-400">Expenses</span>
</div>
</div>
</div>
<div className="h-60">
<canvas id="cashflowChart"></canvas>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Category Breakdown</h3>
<select className="bg-[#252545] text-sm rounded-lg px-2 py-1 border-none outline-none" id="categoryType">
<option value="expenses">Expenses</option>
<option value="income">Income</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-40">
<canvas id="categoryChart"></canvas>
</div>
<div className="space-y-3" id="categoryList">
<div className="category-item flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<span className="text-sm">Food &amp; Dining</span>
</div>
<span className="text-sm font-bold">$845.20</span>
</div>
<div className="category-item flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
<span className="text-sm">Housing</span>
</div>
<span className="text-sm font-bold">$650.00</span>
</div>
<div className="category-item flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
<span className="text-sm">Transportation</span>
</div>
<span className="text-sm font-bold">$320.12</span>
</div>
<div className="category-item flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
<span className="text-sm">Others</span>
</div>
<span className="text-sm font-bold">$350.00</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recent Transactions</h3>
<button className="text-xs text-purple-400" id="showAllTransactions">See All</button>
</div>
<div className="space-y-3" id="transactionsContainer">

</div>
</div>
</main>

<nav className="fixed bottom-0 w-full bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm">
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center active">
<i className="fas fa-dollar-sign text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Finance</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20" id="addButton">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center">
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="nav-item flex flex-col items-center">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>


    </>
  );
}
