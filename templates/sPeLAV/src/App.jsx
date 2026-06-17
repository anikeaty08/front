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
        
        // Card carousel
        const cards = document.querySelectorAll('.card-item');
        const indicators = document.querySelectorAll('.card-indicator');
        let currentCardIndex = 0;
        
        function updateCardIndicators(index) {
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('bg-purple-500');
                    indicator.classList.remove('bg-white/30');
                } else {
                    indicator.classList.remove('bg-purple-500');
                    indicator.classList.add('bg-white/30');
                }
            });
        }
        
        document.getElementById('cardCarousel').addEventListener('scroll', () => {
            const scrollPosition = document.getElementById('cardCarousel').scrollLeft;
            const cardWidth = cards[0].offsetWidth + 16; // 16px for margin
            const newIndex = Math.round(scrollPosition / cardWidth);
            
            if (newIndex !== currentCardIndex && newIndex < indicators.length) {
                currentCardIndex = newIndex;
                updateCardIndicators(newIndex);
            }
        });
        
        // Transaction filtering
        const transactionFilters = document.querySelectorAll('.transaction-filter');
        const transactionItems = document.querySelectorAll('.transaction-item');
        
        transactionFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update filter styles
                transactionFilters.forEach(f => {
                    f.classList.remove('active', 'bg-purple-500/20');
                    f.classList.add('bg-[#1e1e3a]');
                });
                filter.classList.add('active', 'bg-purple-500/20');
                filter.classList.remove('bg-[#1e1e3a]');
                
                // Filter transactions
                const filterType = filter.getAttribute('data-filter');
                transactionItems.forEach(item => {
                    if (filterType === 'all' || item.getAttribute('data-type') === filterType) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        // Add click events
        document.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('bg-[#252545]');
                setTimeout(() => item.classList.remove('bg-[#252545]'), 200);
                alert('Transaction details would show here');
            });
        });
        
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.querySelector('span').textContent;
                alert(`${action} feature would open here`);
            });
        });
        
        document.getElementById('sendBtn').addEventListener('click', () => alert('Send money'));
        document.getElementById('receiveBtn').addEventListener('click', () => alert('Receive money'));
        document.getElementById('exchangeBtn').addEventListener('click', () => alert('Exchange currency'));
        document.getElementById('moreBtn').addEventListener('click', () => alert('More options'));
        document.getElementById('viewAllCards').addEventListener('click', () => alert('View all cards'));
        document.getElementById('addButton').addEventListener('click', () => alert('Add new transaction'));
    
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

<header className="px-6 py-4">
<h1 className="text-2xl font-bold">Wallet</h1>
</header>

<main className="px-4 pb-24">

<div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 shadow-lg mb-6">
<p className="text-sm text-white/80">Total Balance</p>
<h2 className="text-3xl font-bold">$19,978.89</h2>
<div className="flex justify-between mt-6">
<button className="flex flex-col items-center" id="sendBtn">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
<i className="fas fa-arrow-up text-white"></i>
</div>
<span className="text-xs">Send</span>
</button>
<button className="flex flex-col items-center" id="receiveBtn">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
<i className="fas fa-arrow-down text-white"></i>
</div>
<span className="text-xs">Receive</span>
</button>
<button className="flex flex-col items-center" id="exchangeBtn">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
<i className="fas fa-exchange-alt text-white"></i>
</div>
<span className="text-xs">Exchange</span>
</button>
<button className="flex flex-col items-center" id="moreBtn">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
<i className="fas fa-ellipsis-h text-white"></i>
</div>
<span className="text-xs">More</span>
</button>
</div>
</div>

<div className="grid grid-cols-4 gap-3 mb-6">
<button className="action-btn flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#1e1e3a] flex items-center justify-center mb-1">
<i className="fas fa-qrcode text-blue-400"></i>
</div>
<span className="text-xs text-center">Scan</span>
</button>
<button className="action-btn flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#1e1e3a] flex items-center justify-center mb-1">
<i className="fas fa-credit-card text-purple-400"></i>
</div>
<span className="text-xs text-center">Pay</span>
</button>
<button className="action-btn flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#1e1e3a] flex items-center justify-center mb-1">
<i className="fas fa-file-invoice text-pink-400"></i>
</div>
<span className="text-xs text-center">Bills</span>
</button>
<button className="action-btn flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#1e1e3a] flex items-center justify-center mb-1">
<i className="fas fa-gift text-yellow-400"></i>
</div>
<span className="text-xs text-center">Rewards</span>
</button>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">My Cards</h3>
<button className="text-xs text-purple-400" id="viewAllCards">View All</button>
</div>
<div className="relative">
<div className="flex space-x-4 overflow-x-auto py-2 snap-x snap-mandatory no-scrollbar" id="cardCarousel">

<div className="card-item snap-center min-w-[280px] h-40 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex flex-col justify-between shadow-lg">
<div className="flex justify-between">
<p className="text-sm">Balance</p>
<i className="fab fa-cc-visa text-xl"></i>
</div>
<div>
<p className="text-xl font-bold mb-2">$12,489.53</p>
<p className="text-sm tracking-widest">•••• •••• •••• 4832</p>
</div>
</div>

<div className="card-item snap-center min-w-[280px] h-40 rounded-2xl bg-gradient-to-r from-pink-600 to-red-600 p-4 flex flex-col justify-between shadow-lg">
<div className="flex justify-between">
<p className="text-sm">Balance</p>
<i className="fab fa-cc-mastercard text-xl"></i>
</div>
<div>
<p className="text-xl font-bold mb-2">$5,789.45</p>
<p className="text-sm tracking-widest">•••• •••• •••• 7621</p>
</div>
</div>

<div className="card-item snap-center min-w-[280px] h-40 rounded-2xl border-2 border-dashed border-gray-600 p-4 flex flex-col items-center justify-center">
<div className="w-12 h-12 rounded-full bg-[#1e1e3a] flex items-center justify-center mb-2">
<i className="fas fa-plus text-purple-400"></i>
</div>
<p className="text-gray-400">Add New Card</p>
</div>
</div>

<div className="flex justify-center space-x-2 mt-4">
<div className="card-indicator w-2 h-2 rounded-full bg-purple-500"></div>
<div className="card-indicator w-2 h-2 rounded-full bg-white/30"></div>
<div className="card-indicator w-2 h-2 rounded-full bg-white/30"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recent Transactions</h3>
<div className="flex space-x-2">
<button className="transaction-filter active px-2 py-1 rounded-md bg-purple-500/20 text-xs" data-filter="all">All</button>
<button className="transaction-filter px-2 py-1 rounded-md bg-[#1e1e3a] text-xs" data-filter="income">Income</button>
<button className="transaction-filter px-2 py-1 rounded-md bg-[#1e1e3a] text-xs" data-filter="expense">Expense</button>
</div>
</div>
<div className="space-y-3" id="transactionsContainer">

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-type="expense">
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

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-type="income">
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

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg" data-type="expense">
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

<nav className="fixed bottom-0 w-full bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm">
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="nav-item flex flex-col items-center active">
<i className="fas fa-wallet text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Wallet</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
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
