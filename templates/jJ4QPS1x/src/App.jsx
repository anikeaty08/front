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
            document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
        setInterval(updateClock, 1000);
        updateClock();
        
        // Balance chart
        const ctx = document.getElementById('balanceChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    data: [15000, 17000, 16500, 19000, 18000, 19978],
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            }
        });
        // Add click events
        document.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('bg-[#252545]');
                setTimeout(() => item.classList.remove('bg-[#252545]'), 200);
                alert('Transaction details would show here');
            });
        });
        document.getElementById('viewDetails').addEventListener('click', () => {
            alert('Balance details would show here');
        });
        document.getElementById('addGoal').addEventListener('click', () => {
            alert('Add new financial goal');
        });
        document.getElementById('viewAll').addEventListener('click', () => {
            alert('View all transactions');
        });
        document.getElementById('addButton').addEventListener('click', () => {
            alert('Add new transaction');
        });
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const pageName = item.querySelector('span').textContent;
                if (pageName !== 'Finance') {
                    alert(`Navigate to ${pageName} page`);
                }
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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#181830] to-[#0a0a17] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#171731] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center p-2 text-xs mt-2">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Finance</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]">
<i className="fas fa-bell text-sm"></i>
</button>
</div>
</header>

<main className="px-4 pb-24 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-start">
<div>
<p className="text-sm text-white/80">Total Balance</p>
<h2 className="text-3xl font-bold">$19,978.89</h2>
</div>
<button className="px-3 py-1 bg-white/20 rounded-full text-xs" id="viewDetails">View Details</button>
</div>
<div className="h-24 mt-4">
<canvas id="balanceChart"></canvas>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex items-center mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
<i className="fas fa-arrow-down text-green-400"></i>
</div>
<p className="text-sm text-gray-400">Income</p>
</div>
<p className="text-xl font-bold">$3,450.80</p>
<div className="flex items-center mt-1 text-xs">
<i className="fas fa-arrow-up text-green-400 mr-1"></i>
<span className="text-green-400">+12.5%</span>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex items-center mb-2">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
<i className="fas fa-arrow-up text-red-400"></i>
</div>
<p className="text-sm text-gray-400">Expenses</p>
</div>
<p className="text-xl font-bold">$2,165.32</p>
<div className="flex items-center mt-1 text-xs">
<i className="fas fa-arrow-down text-red-400 mr-1"></i>
<span className="text-red-400">-8.3%</span>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Financial Goals</h3>
<button className="text-xs text-purple-400" id="addGoal">Add New</button>
</div>
<div className="space-y-4">

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-home text-blue-400"></i>
</div>
<div>
<p className="font-medium">New House</p>
<p className="text-xs text-gray-400">$200,000 goal</p>
</div>
</div>
<p className="text-sm font-bold">$45,500</p>
</div>
<div className="w-full bg-gray-700/30 h-2 rounded-full">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '22.75%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1">22.75% completed</p>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-plane text-purple-400"></i>
</div>
<div>
<p className="font-medium">Vacation</p>
<p className="text-xs text-gray-400">$5,000 goal</p>
</div>
</div>
<p className="text-sm font-bold">$3,750</p>
</div>
<div className="w-full bg-gray-700/30 h-2 rounded-full">
<div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1">75% completed</p>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recent Transactions</h3>
<button className="text-xs text-purple-400" id="viewAll">View All</button>
</div>
<div className="space-y-3" id="transactionsContainer">

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer">
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

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer">
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

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg cursor-pointer">
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
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-dollar-sign text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Finance</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20" id="addButton">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>
</div>

<style>
      .hide-scrollbar::-webkit-scrollbar { display:none;}
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}
    </style>

    </>
  );
}
