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
      
        let paymentTotal = 0;
        let paymentBills = [];
        let removedBills = new Set();

        // Update clock
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', minute: '2-digit', hour12: false 
            });
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Drag and drop functionality
        function initializeBills() {
            const bills = document.querySelectorAll('.bill, .coin');
            
            bills.forEach(bill => {
                bill.addEventListener('dragstart', function(e) {
                    this.classList.add('dragging');
                    e.dataTransfer.setData('text/plain', JSON.stringify({
                        value: this.dataset.value,
                        billId: this.dataset.billId
                    }));
                    e.dataTransfer.effectAllowed = 'move';
                    
                    // Show payment zone if hidden
                    const paymentZone = document.getElementById('payment-zone');
                    if (paymentZone.classList.contains('hidden')) {
                        paymentZone.classList.remove('hidden');
                    }
                });

                bill.addEventListener('dragend', function(e) {
                    this.classList.remove('dragging');
                });
            });
        }

        // Initialize bills on load
        initializeBills();

        const paymentZone = document.getElementById('payment-zone');

        // Payment zone drop handling
        paymentZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.classList.add('drag-over');
        });

        paymentZone.addEventListener('dragleave', function(e) {
            if (!this.contains(e.relatedTarget)) {
                this.classList.remove('drag-over');
            }
        });

        paymentZone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            const value = parseFloat(data.value);
            const billId = data.billId;
            
            addToPayment(value, billId);
            removeBillFromWallet(billId);
        });

        function addToPayment(value, billId) {
            paymentTotal += value;
            paymentBills.push({ value: value, billId: billId });
            updatePaymentDisplay();
        }

        function removeBillFromWallet(billId) {
            const billElement = document.querySelector(`[data-bill-id="${billId}"]`);
            if (billElement) {
                billElement.style.transition = 'all 0.3s ease';
                billElement.style.transform = 'scale(0)';
                billElement.style.opacity = '0';
                setTimeout(() => {
                    billElement.style.display = 'none';
                    removedBills.add(billId);
                }, 300);
            }
        }

        function restoreBillToWallet(billId) {
            const billElement = document.querySelector(`[data-bill-id="${billId}"]`);
            if (billElement && removedBills.has(billId)) {
                billElement.style.display = 'block';
                setTimeout(() => {
                    billElement.style.transform = 'scale(1)';
                    billElement.style.opacity = '1';
                }, 10);
                removedBills.delete(billId);
            }
        }

        function removeFromPayment(billId) {
            const billIndex = paymentBills.findIndex(bill => bill.billId === billId);
            if (billIndex !== -1) {
                const removedBill = paymentBills.splice(billIndex, 1)[0];
                paymentTotal -= removedBill.value;
                restoreBillToWallet(billId);
                updatePaymentDisplay();
                
                // Hide payment zone if no bills left
                if (paymentBills.length === 0) {
                    paymentZone.classList.add('hidden');
                }
            }
        }

        function updatePaymentDisplay() {
            document.getElementById('payment-total').textContent = paymentTotal.toFixed(2);
            
            const paymentBillsDiv = document.getElementById('payment-bills');
            paymentBillsDiv.innerHTML = paymentBills.map((bill, index) => 
                `<div class="payment-bill bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium border border-green-200 relative" 
                      data-bill-id="${bill.billId}" 
                      title="Click to remove">
                    $${bill.value}
                    <div class="remove-btn">
                        <i class="fas fa-times"></i>
                    </div>
                </div>`
            ).join('');
            
            // Add click handlers to payment bills
            const paymentBillElements = paymentBillsDiv.querySelectorAll('.payment-bill');
            paymentBillElements.forEach(billElement => {
                billElement.addEventListener('click', function() {
                    const billId = this.dataset.billId;
                    removeFromPayment(billId);
                });
            });
        }

        // Clear payment
        document.getElementById('clear-payment').addEventListener('click', function() {
            // Restore all bills to wallet
            paymentBills.forEach(bill => {
                restoreBillToWallet(bill.billId);
            });
            
            paymentTotal = 0;
            paymentBills = [];
            updatePaymentDisplay();
            paymentZone.classList.add('hidden');
        });

        // Send payment
        document.getElementById('send-payment').addEventListener('click', function() {
            if (paymentTotal > 0) {
                alert(`💰 Payment of $${paymentTotal.toFixed(2)} sent successfully!\n\nBills used: ${paymentBills.length} denomination(s)`);
                
                // Update balance
                const currentBalance = parseFloat(document.getElementById('total-balance').textContent);
                document.getElementById('total-balance').textContent = (currentBalance - paymentTotal).toFixed(2);
                
                // Clear payment without restoring bills (they're spent)
                paymentTotal = 0;
                paymentBills = [];
                updatePaymentDisplay();
                paymentZone.classList.add('hidden');
            }
        });

        // Quick pay button
        document.getElementById('quick-pay').addEventListener('click', function() {
            if (paymentZone.classList.contains('hidden')) {
                paymentZone.classList.remove('hidden');
            } else {
                paymentZone.classList.add('hidden');
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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#ffffff] to-[#f0f2f5] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#e1e4e8] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
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
<div>
<h1 className="text-2xl font-bold">MUSD Wallet</h1>
<p className="text-sm text-gray-500">Balance: $<span id="total-balance">186.75</span></p>
</div>
<div className="text-right">
<div className="text-xs text-gray-500">BCH Gas</div>
<div className="text-sm font-semibold text-green-500">0.00234 BCH</div>
</div>
</div>
</header>

<div className="mx-4 mb-4 payment-zone rounded-2xl p-6 hidden" id="payment-zone">
<div className="flex justify-between items-center mb-3">
<h3 className="font-semibold text-green-600 flex items-center">
<i className="fas fa-hand-holding-usd mr-2"></i>
                        Drop Money Here
                    </h3>
<button className="text-red-500 text-sm hover:bg-red-50 px-2 py-1 rounded" id="clear-payment">
<i className="fas fa-times"></i> Clear All
                    </button>
</div>
<div className="text-3xl font-bold text-green-600 mb-3">$<span id="payment-total">0.00</span></div>
<div className="flex flex-wrap gap-2 mb-4 min-h-[40px]" id="payment-bills"></div>
<button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold shadow-lg" id="send-payment">
<i className="fas fa-paper-plane mr-2"></i>Send Payment
                </button>
</div>

<main className="px-4 pb-24 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
<p className="text-sm text-blue-700 flex items-center">
<i className="fas fa-info-circle mr-2"></i>
                        Drag and drop bills to make payments. Click bills in payment zone to remove them.
                    </p>
</div>

<div className="mb-6">
<h3 className="font-bold mb-4 flex justify-between items-center">
<span>Your Digital Cash</span>
<span className="text-sm text-gray-500">Drag to pay</span>
</h3>

<div className="space-y-3" id="bills-container">

<div className="bill rounded-lg p-4 shadow-lg" data-bill-id="bill-100" data-value="100" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">The United States of America</div>
<div className="denomination-large">$100</div>
<div className="bill-text mt-2">One Hundred Dollars</div>
<div className="serial-number mt-1">MU24789456A</div>
</div>
<div className="text-right">
<div className="w-12 h-12 border-2 border-green-800/30 rounded-full flex items-center justify-center mb-2">
<span className="text-lg font-bold">B</span>
</div>
<div className="president-name">Benjamin<br />Franklin</div>
</div>
<div className="bill-ornament">100</div>
</div>
</div>

<div className="bill rounded-lg p-4 shadow-lg" data-bill-id="bill-50" data-value="50" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">The United States of America</div>
<div className="denomination-large">$50</div>
<div className="bill-text mt-2">Fifty Dollars</div>
<div className="serial-number mt-1">MU24123789B</div>
</div>
<div className="text-right">
<div className="w-10 h-10 border-2 border-green-800/30 rounded-full flex items-center justify-center mb-2">
<span className="text-sm font-bold">U</span>
</div>
<div className="president-name">Ulysses<br />Grant</div>
</div>
<div className="bill-ornament">50</div>
</div>
</div>

<div className="bill rounded-lg p-3 shadow-lg" data-bill-id="bill-20" data-value="20" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">United States of America</div>
<div className="denomination-medium">$20</div>
<div className="bill-text mt-1">Twenty Dollars</div>
<div className="serial-number mt-1">MU24567890C</div>
</div>
<div className="text-right">
<div className="w-8 h-8 border border-green-800/30 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">A</span>
</div>
<div className="president-name text-xs">Jackson</div>
</div>
<div className="bill-ornament text-3xl">20</div>
</div>
</div>

<div className="bill rounded-lg p-3 shadow-lg" data-bill-id="bill-10" data-value="10" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">United States of America</div>
<div className="denomination-medium">$10</div>
<div className="bill-text mt-1">Ten Dollars</div>
<div className="serial-number mt-1">MU24345678D</div>
</div>
<div className="text-right">
<div className="w-8 h-8 border border-green-800/30 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">H</span>
</div>
<div className="president-name text-xs">Hamilton</div>
</div>
<div className="bill-ornament text-3xl">10</div>
</div>
</div>

<div className="bill rounded-lg p-3 shadow-lg" data-bill-id="bill-5" data-value="5" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">United States</div>
<div className="denomination-small">$5</div>
<div className="bill-text mt-1">Five Dollars</div>
<div className="serial-number mt-1">MU24987654E</div>
</div>
<div className="text-right">
<div className="w-6 h-6 border border-green-800/30 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">L</span>
</div>
<div className="president-name text-xs">Lincoln</div>
</div>
<div className="bill-ornament text-2xl">5</div>
</div>
</div>

<div className="bill rounded-lg p-3 shadow-lg" data-bill-id="bill-1" data-value="1" draggable="true">
<div className="flex justify-between items-start relative">
<div>
<div className="bill-text mb-1">United States</div>
<div className="denomination-small">$1</div>
<div className="bill-text mt-1">One Dollar</div>
<div className="serial-number mt-1">MU24456789F</div>
</div>
<div className="text-right">
<div className="w-6 h-6 border border-green-800/30 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">W</span>
</div>
<div className="president-name text-xs">Washington</div>
</div>
<div className="bill-ornament text-2xl">1</div>
</div>
</div>
</div>

<div className="mt-4">
<h4 className="font-semibold mb-2 text-sm text-gray-600">Coins</h4>
<div className="flex gap-3" id="coins-container">
<div className="coin w-14 h-14 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg text-xs" data-bill-id="coin-75" data-value="0.75" draggable="true">
<div>75¢</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="font-bold mb-4">Recent Transactions</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
<i className="fas fa-store text-green-500"></i>
</div>
<div>
<p className="font-medium">Coffee Shop</p>
<p className="text-xs text-gray-500">2 mins ago • Drag & Drop</p>
</div>
</div>
<p className="font-bold text-red-500">-$4.50</p>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/95 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: `20`}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-green-500"></i>
<span className="text-xs text-green-500 mt-1">Wallet</span>
<div className="w-1 h-1 bg-green-500 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-exchange-alt text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Exchange</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center shadow-lg shadow-green-500/20" id="quick-pay">
<i className="fas fa-bolt text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-history text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">History</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-cog text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Settings</span>
</div>
</div>
</nav>
</div>
</div>



    </>
  );
}
