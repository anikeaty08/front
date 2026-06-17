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



        // Update clock
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
        
        // Chart
        const ctx = document.getElementById('balanceHistoryChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Income',
                    data: [15000, 17000, 16500, 19000, 18000, 19978, 19200, 20500, 21000, 19500, 18800, 19978],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }, {
                    label: 'Expenses',
                    data: [12000, 13500, 14000, 14500, 15000, 16000, 15800, 16200, 16800, 15500, 15200, 16000],
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false } },
                    y: { 
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { callback: value => '$' + value.toLocaleString() }
                    }
                }
            }
        });
        
        // Account filtering
        const accountBtns = document.querySelectorAll('.account-btn');
        const accountCards = document.querySelectorAll('.account-card');
        const transactionItems = document.querySelectorAll('.transaction-item');
        
        accountBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update button styles
                accountBtns.forEach(b => b.classList.remove('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500'));
                accountBtns.forEach(b => b.classList.add('bg-[#1e1e3a]'));
                btn.classList.add('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
                btn.classList.remove('bg-[#1e1e3a]');
                
                const selectedAccount = btn.getAttribute('data-account');
                
                // Update visible accounts
                accountCards.forEach(card => {
                    if(selectedAccount === 'all' || card.getAttribute('data-account') === selectedAccount) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
                
                // Update visible transactions
                transactionItems.forEach(item => {
                    if(selectedAccount === 'all' || item.getAttribute('data-account') === selectedAccount) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
                
                // Update total balance display
                updateTotalBalance(selectedAccount);
            });
        });
        
        // Transaction filtering
        const transactionFilters = document.querySelectorAll('.transaction-filter');
        
        transactionFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update filter styles
                transactionFilters.forEach(f => f.classList.remove('active', 'bg-purple-500/20'));
                transactionFilters.forEach(f => f.classList.add('bg-[#1e1e3a]'));
                filter.classList.add('active', 'bg-purple-500/20');
                filter.classList.remove('bg-[#1e1e3a]');
                
                const selectedFilter = filter.getAttribute('data-filter');
                const selectedAccount = document.querySelector('.account-btn.active').getAttribute('data-account');
                
                // Update visible transactions
                transactionItems.forEach(item => {
                    const matchesType = selectedFilter === 'all' || item.getAttribute('data-type') === selectedFilter;
                    const matchesAccount = selectedAccount === 'all' || item.getAttribute('data-account') === selectedAccount;
                    
                    if(matchesType && matchesAccount) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        // Transaction details
        transactionItems.forEach(item => {
            item.addEventListener('click', () => {
                // Add pulse animation
                item.classList.add('animate-pulse');
                setTimeout(() => item.classList.remove('animate-pulse'), 300);
                
                // In a real app, this would show transaction details
                alert('Transaction details would show here');
            });
        });
        
        // Toggle accounts visibility
        let accountsExpanded = false;
        document.getElementById('toggleAccounts').addEventListener('click', () => {
            accountsExpanded = !accountsExpanded;
            document.getElementById('toggleAccounts').textContent = accountsExpanded ? 'Show Less' : 'See All';
        });
        
        // Add transaction button
        document.getElementById('addButton').addEventListener('click', () => {
            alert('Add new transaction form would appear here');
        });
        
        // Back button
        document.getElementById('backButton').addEventListener('click', () => {
            alert('Would navigate back to previous screen');
        });
        
        // Update total balance based on selected account
        function updateTotalBalance(account) {
            const balanceElement = document.getElementById('totalBalance');
            switch(account) {
                case 'checking':
                    balanceElement.textContent = '$12,489.53';
                    break;
                case 'savings':
                    balanceElement.textContent = '$5,789.45';
                    break;
                case 'investment':
                    balanceElement.textContent = '$1,699.91';
                    break;
                default:
                    balanceElement.textContent = '$19,978.89';
            }
        }
        
        // Nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.nav-item').forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('i').classList.add('text-gray-400');
                    i.querySelector('i').classList.remove('text-purple-500');
                    i.querySelector('span').classList.add('text-gray-400');
                    i.querySelector('span').classList.remove('text-purple-500');
                    const dot = i.querySelector('div');
                    if (dot) dot.remove();
                });
                
                item.classList.add('active');
                item.querySelector('i').classList.remove('text-gray-400');
                item.querySelector('i').classList.add('text-purple-500');
                item.querySelector('span').classList.remove('text-gray-400');
                item.querySelector('span').classList.add('text-purple-500');
                
                const dot = document.createElement('div');
                dot.className = 'w-1 h-1 bg-purple-500 rounded-full mt-1';
                item.appendChild(dot);
            });
        });
    
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
      

<div className="flex justify-between items-center p-2 text-xs">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4 flex items-center">
<button className="mr-4 h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a] active:bg-[#2a2a4a] transition-colors" id="backButton">
<i className="fas fa-arrow-left"></i>
</button>
<h1 className="text-2xl font-bold">Balance</h1>
</header>

<main className="px-4 pb-24">

<div className="flex space-x-2 mb-4 overflow-x-auto py-2 no-scrollbar">
<button className="account-btn active px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm whitespace-nowrap" data-account="all">All Accounts</button>
<button className="account-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-account="checking">Checking</button>
<button className="account-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-account="savings">Savings</button>
<button className="account-btn px-4 py-2 rounded-full bg-[#1e1e3a] text-sm whitespace-nowrap" data-account="investment">Investment</button>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-6 shadow-lg mb-6">
<p className="text-sm text-gray-400">TOTAL BALANCE</p>
<div className="flex items-baseline mt-1">
<h2 className="text-3xl font-bold" id="totalBalance">$19,978.89</h2>
<span className="ml-2 text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">+2.4%</span>
</div>
<div className="h-40 mt-4">
<canvas id="balanceHistoryChart"></canvas>
</div>
<div className="flex justify-between mt-4 text-sm">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<span className="text-gray-400">Income</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
<span className="text-gray-400">Expenses</span>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-bold">My Accounts</h3>
<button className="text-xs text-purple-400" id="toggleAccounts">See All</button>
</div>

<div className="space-y-4" id="accountsContainer">

<div className="account-card bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-account="checking">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-university text-blue-400"></i>
</div>
<div>
<p className="font-medium">Checking Account</p>
<p className="text-xs text-gray-400">**** 4832</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$12,489.53</p>
<p className="text-xs text-green-400">+$231.45 today</p>
</div>
</div>
</div>

<div className="account-card bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-account="savings">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-piggy-bank text-purple-400"></i>
</div>
<div>
<p className="font-medium">Savings Account</p>
<p className="text-xs text-gray-400">**** 7621</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$5,789.45</p>
<p className="text-xs text-gray-400">+$12.05 today</p>
</div>
</div>
</div>

<div className="account-card bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-account="investment">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-chart-line text-pink-400"></i>
</div>
<div>
<p className="font-medium">Investment Account</p>
<p className="text-xs text-gray-400">**** 9214</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$1,699.91</p>
<p className="text-xs text-red-400">-$45.32 today</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-bold">Recent Transactions</h3>
<div className="flex space-x-2">
<button className="transaction-filter active px-2 py-1 rounded-md bg-purple-500/20 text-xs" data-filter="all">All</button>
<button className="transaction-filter px-2 py-1 rounded-md bg-[#1e1e3a] text-xs" data-filter="income">Income</button>
<button className="transaction-filter px-2 py-1 rounded-md bg-[#1e1e3a] text-xs" data-filter="expense">Expense</button>
</div>
</div>

<div className="space-y-4" id="transactionsContainer">

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer" data-account="checking" data-type="expense">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-shopping-bag text-blue-400"></i>
</div>
<div>
<p className="font-medium">Grocery Store</p>
<p className="text-xs text-gray-400">Today, 14:32</p>
</div>
</div>
<p className="font-bold text-red-400">-$84.23</p>
</div>
</div>

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer" data-account="checking" data-type="income">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<i className="fas fa-building text-green-400"></i>
</div>
<div>
<p className="font-medium">Salary Deposit</p>
<p className="text-xs text-gray-400">Today, 09:15</p>
</div>
</div>
<p className="font-bold text-green-400">+$2,450.00</p>
</div>
</div>

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer" data-account="savings" data-type="expense">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-bolt text-purple-400"></i>
</div>
<div>
<p className="font-medium">Electric Bill</p>
<p className="text-xs text-gray-400">Yesterday, 18:45</p>
</div>
</div>
<p className="font-bold text-red-400">-$145.80</p>
</div>
</div>

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer" data-account="investment" data-type="expense">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-money-bill-wave text-pink-400"></i>
</div>
<div>
<p className="font-medium">Stock Purchase</p>
<p className="text-xs text-gray-400">Yesterday, 10:22</p>
</div>
</div>
<p className="font-bold text-red-400">-$520.50</p>
</div>
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
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20 active:scale-95 transition-transform" id="addButton">
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
