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



    function toggleMenu() {
      const menu = document.getElementById('sideMenu');
      const overlay = document.getElementById('menuOverlay');
      const btn = document.getElementById('menuBtn');
      const isOpen = !menu.classList.contains('-translate-x-full');

      if (!isOpen) {
        // Open
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        // Optional: Change icon color if menu background is white and header is black
        btn.classList.add('text-black');
        btn.classList.remove('text-white');
      } else {
        // Close
        menu.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        btn.classList.remove('text-black');
        btn.classList.add('text-white');
      }
    }

    function toggleAccount(id) {
      const details = document.getElementById(id + '-details');
      const icon = document.getElementById(id + '-icon');
      
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        details.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }

    function filterTransactions(accountId, type, event) {
      // Prevent bubbling up to the accordion toggle
      if(event) event.stopPropagation();

      const container = document.getElementById(accountId + '-list');
      const items = container.getElementsByClassName('trans-item');
      
      // Update Button Styles
      const buttons = document.getElementById(accountId + '-details').querySelectorAll('button');
      buttons.forEach(btn => {
        if (btn.innerText.toLowerCase() !== 'view all transactions') {
            btn.className = "px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors";
        }
      });
      
      const activeBtn = Array.from(buttons).find(b => {
        if (type === 'all') return b.innerText === 'All';
        if (type === 'debit') return b.innerText === 'Debits';
        if (type === 'credit') return b.innerText === 'Credits';
        return false;
      });
      
      if (activeBtn) {
        activeBtn.className = "px-4 py-1.5 rounded-full bg-[#DC006B] text-white text-xs font-medium transition-colors";
      }

      for (let item of items) {
        if (type === 'all') {
          item.classList.remove('hidden');
        } else if (type === 'debit') {
          if (item.classList.contains('type-debit')) item.classList.remove('hidden');
          else item.classList.add('hidden');
        } else if (type === 'credit') {
          if (item.classList.contains('type-credit')) item.classList.remove('hidden');
          else item.classList.add('hidden');
        }
      }
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
      

<div className="relative w-[375px] h-[812px] bg-white rounded-[54px] overflow-hidden shadow-2xl border-[8px] border-gray-900">

<div className="h-full bg-white flex flex-col relative">

<div className="absolute inset-0 bg-black/50 z-20 hidden transition-opacity opacity-0 duration-300" id="menuOverlay" onclick="toggleMenu()"></div>

<div className="absolute top-0 left-0 bottom-0 w-[280px] bg-white z-30 transform -translate-x-full transition-transform duration-300 ease-in-out shadow-xl pt-28 px-6" id="sideMenu">
<div className="space-y-6">
<a className="flex items-center space-x-4 text-gray-800 hover:text-[#DC006B] transition-colors" href="#">
<iconify-icon height="24" icon="solar:card-linear" width="24"></iconify-icon>
<span className="font-medium text-lg">My accounts</span>
</a>
<a className="flex items-center space-x-4 text-gray-800 hover:text-[#DC006B] transition-colors" href="#">
<iconify-icon height="24" icon="solar:bill-list-linear" width="24"></iconify-icon>
<span className="font-medium text-lg">Bill Payments</span>
</a>
<a className="flex items-center space-x-4 text-gray-800 hover:text-[#DC006B] transition-colors" href="#">
<iconify-icon height="24" icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
<span className="font-medium text-lg">Transfer funds</span>
</a>
</div>
</div>

<header className="bg-black h-24 pt-10 px-5 flex items-center justify-between z-40 relative shrink-0">

<button className="text-white p-1 focus:outline-none z-50 relative transition-transform duration-300" id="menuBtn" onclick="toggleMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>

<h1 className="text-[#DC006B] font-semibold text-xl tracking-tight absolute left-1/2 transform -translate-x-1/2">
          Financial
        </h1>

<div className="w-7"></div>
</header>

<div className="bg-gray-100 h-12 flex items-center justify-center border-b border-gray-200 shrink-0">
<span className="text-gray-500 font-medium text-sm">My accounts</span>
</div>

<div className="flex-1 overflow-y-auto bg-white p-4 space-y-4 no-scrollbar">

<div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<button className="w-full text-left focus:outline-none block" onclick="toggleAccount('acc1')">

<div className="bg-white px-5 pt-5 pb-2">
<div className="flex justify-between items-baseline w-full">
<span className="font-semibold text-gray-900 text-base tracking-tight">No Fee Checking</span>
<span className="text-gray-500 text-xs font-medium">3810-2938492</span>
</div>
</div>

<div className="h-[1px] bg-[#8B8570] mx-16 opacity-60"></div>

<div className="bg-gray-50 px-5 py-4 flex justify-between items-center mt-2">
<div className="font-semibold text-2xl text-gray-900 tracking-tight">$4,258.32</div>
<iconify-icon className="text-gray-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="acc1-icon" width="20"></iconify-icon>
</div>
</button>

<div className="hidden bg-gray-50 border-t border-gray-200" id="acc1-details">

<div className="flex space-x-2 p-3 overflow-x-auto border-b border-gray-200 bg-white">
<button className="px-4 py-1.5 rounded-full bg-[#DC006B] text-white text-xs font-medium transition-colors" onclick="filterTransactions('acc1', 'all', event)">All</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors" onclick="filterTransactions('acc1', 'debit', event)">Debits</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors" onclick="filterTransactions('acc1', 'credit', event)">Credits</button>
</div>

<div className="p-3 space-y-2 bg-gray-50" id="acc1-list">
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center trans-item type-debit">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:cart-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Grocery Store</div>
<div className="text-[10px] text-gray-500">Jun 14</div>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">-$84.50</span>
</div>
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center trans-item type-credit">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:wad-of-money-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Payroll Deposit</div>
<div className="text-[10px] text-gray-500">Jun 12</div>
</div>
</div>
<span className="text-sm font-semibold text-green-600">+$2,450.00</span>
</div>
</div>
<div className="p-3 text-center bg-gray-50">
<button className="text-[#DC006B] text-xs font-medium hover:text-pink-700">View all transactions</button>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<button className="w-full text-left focus:outline-none block" onclick="toggleAccount('acc2')">

<div className="bg-white px-5 pt-5 pb-2">
<div className="flex justify-between items-baseline w-full">
<span className="font-semibold text-gray-900 text-base tracking-tight">Line of Credit</span>
<span className="text-gray-500 text-xs font-medium">9384-1029384</span>
</div>
</div>

<div className="h-[1px] bg-[#8B8570] mx-16 opacity-60"></div>

<div className="bg-gray-50 px-5 py-4 flex justify-between items-center mt-2">
<div className="flex flex-col">
<span className="font-semibold text-2xl text-gray-900 tracking-tight">-$1,250.00</span>
<span className="text-[10px] text-gray-500 mt-1">Available: $8,750</span>
</div>
<iconify-icon className="text-gray-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="acc2-icon" width="20"></iconify-icon>
</div>
</button>

<div className="hidden bg-gray-50 border-t border-gray-200" id="acc2-details">
<div className="flex space-x-2 p-3 overflow-x-auto border-b border-gray-200 bg-white">
<button className="px-4 py-1.5 rounded-full bg-[#DC006B] text-white text-xs font-medium transition-colors" onclick="filterTransactions('acc2', 'all', event)">All</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors" onclick="filterTransactions('acc2', 'debit', event)">Debits</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors" onclick="filterTransactions('acc2', 'credit', event)">Credits</button>
</div>
<div className="p-3 space-y-2 bg-gray-50" id="acc2-list">
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center trans-item type-debit">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:bill-check-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Interest Charge</div>
<div className="text-[10px] text-gray-500">Jun 01</div>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">-$12.45</span>
</div>
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center trans-item type-credit">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:card-transfer-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Payment</div>
<div className="text-[10px] text-gray-500">May 28</div>
</div>
</div>
<span className="text-sm font-semibold text-green-600">+$500.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 text-center text-gray-300 pb-8">
<div className="flex items-center justify-center space-x-2 opacity-50">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">SECURE BANKING</span>
</div>
</div>
</div>

<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full z-40"></div>
</div>


    </>
  );
}
