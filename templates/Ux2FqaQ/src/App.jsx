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
        
        // Credit card carousel
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
            
            // Update credit limit bar based on selected card
            const percentages = [43, 27]; // Percentages for each card
            document.getElementById('creditLimitBar').style.width = percentages[index] + '%';
        }
        
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                currentCardIndex = index;
                updateCardIndicators(index);
                card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            });
        });
        
        // Spending chart
        const ctx = document.getElementById('spendingChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Shopping', 'Dining', 'Travel', 'Other'],
                datasets: [{
                    data: [1245, 845.32, 650, 718],
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
        
        // Transaction items
        document.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('bg-[#252545]');
                setTimeout(() => {
                    item.classList.remove('bg-[#252545]');
                }, 200);
                
                // In a real app, this would show transaction details
                console.log('Transaction clicked');
            });
        });
        
        // Navigation and buttons
        document.getElementById('backButton').addEventListener('click', () => {
            console.log('Back button clicked');
        });
        
        document.getElementById('showAllTransactions').addEventListener('click', () => {
            console.log('Show all transactions clicked');
        });
        
        document.getElementById('addButton').addEventListener('click', () => {
            console.log('Add button clicked');
        });
        
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                console.log('Nav item clicked:', item.querySelector('span').textContent);
            });
        });
        
        // Card carousel scroll detection
        const carousel = document.getElementById('cardCarousel');
        carousel.addEventListener('scroll', () => {
            const scrollPosition = carousel.scrollLeft;
            const cardWidth = cards[0].offsetWidth + 16; // 16px for margin
            const newIndex = Math.round(scrollPosition / cardWidth);
            
            if (newIndex !== currentCardIndex) {
                currentCardIndex = newIndex;
                updateCardIndicators(newIndex);
            }
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
<button className="mr-4 h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]" id="backButton">
<i className="fas fa-arrow-left"></i>
</button>
<h1 className="text-2xl font-bold">Credit</h1>
</header>

<main className="px-4 pb-24">

<div className="relative mb-6">
<div className="flex space-x-4 overflow-x-auto py-2 snap-x snap-mandatory no-scrollbar" id="cardCarousel">

<div className="card-item snap-center min-w-[300px] h-48 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-5 flex flex-col justify-between shadow-lg" data-card="1">
<div className="flex justify-between items-start">
<div>
<p className="text-xs opacity-80">Current Balance</p>
<p className="text-2xl font-bold">$3,458.32</p>
</div>
<i className="fab fa-cc-visa text-2xl"></i>
</div>
<div>
<p className="text-lg tracking-widest">•••• •••• •••• 4832</p>
<div className="flex justify-between items-center mt-2">
<div>
<p className="text-xs opacity-80">VALID THRU</p>
<p>05/25</p>
</div>
<div>
<p className="text-xs opacity-80">CVV</p>
<p>•••</p>
</div>
</div>
</div>
</div>

<div className="card-item snap-center min-w-[300px] h-48 rounded-2xl bg-gradient-to-r from-pink-600 to-red-600 p-5 flex flex-col justify-between shadow-lg" data-card="2">
<div className="flex justify-between items-start">
<div>
<p className="text-xs opacity-80">Current Balance</p>
<p className="text-2xl font-bold">$2,145.67</p>
</div>
<i className="fab fa-cc-mastercard text-2xl"></i>
</div>
<div>
<p className="text-lg tracking-widest">•••• •••• •••• 7621</p>
<div className="flex justify-between items-center mt-2">
<div>
<p className="text-xs opacity-80">VALID THRU</p>
<p>09/26</p>
</div>
<div>
<p className="text-xs opacity-80">CVV</p>
<p>•••</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center space-x-2 mt-4">
<div className="card-indicator w-2 h-2 rounded-full bg-purple-500"></div>
<div className="card-indicator w-2 h-2 rounded-full bg-white/30"></div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-center mb-2">
<h3 className="font-bold">Credit Limit</h3>
<p className="text-sm text-gray-400">$8,000.00</p>
</div>
<div className="w-full bg-gray-700/30 h-3 rounded-full">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" id="creditLimitBar" style={{width: '43%'}}></div>
</div>
<div className="flex justify-between items-center mt-2">
<p className="text-sm text-gray-400">Used: $3,458.32</p>
<p className="text-sm text-gray-400">Available: $4,541.68</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-5 shadow-lg mb-6">
<h3 className="font-bold mb-4">Spending Analytics</h3>
<div className="grid grid-cols-2 gap-4">
<div className="h-40">
<canvas id="spendingChart"></canvas>
</div>
<div className="space-y-3" id="categoryList">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<span className="text-sm">Shopping</span>
</div>
<span className="text-sm font-bold">$1,245.00</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
<span className="text-sm">Dining</span>
</div>
<span className="text-sm font-bold">$845.32</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
<span className="text-sm">Travel</span>
</div>
<span className="text-sm font-bold">$650.00</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
<span className="text-sm">Other</span>
</div>
<span className="text-sm font-bold">$718.00</span>
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

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-shopping-bag text-blue-400"></i>
</div>
<div>
<p className="font-medium">Online Store</p>
<p className="text-xs text-gray-400">Today, 14:32</p>
</div>
</div>
<p className="font-bold text-red-400">-$128.50</p>
</div>
</div>

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-utensils text-purple-400"></i>
</div>
<div>
<p className="font-medium">Restaurant</p>
<p className="text-xs text-gray-400">Yesterday, 20:15</p>
</div>
</div>
<p className="font-bold text-red-400">-$85.20</p>
</div>
</div>

<div className="transaction-item bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-gas-pump text-pink-400"></i>
</div>
<div>
<p className="font-medium">Gas Station</p>
<p className="text-xs text-gray-400">3 days ago</p>
</div>
</div>
<p className="font-bold text-red-400">-$45.67</p>
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
<i className="fas fa-credit-card text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Credit</span>
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
