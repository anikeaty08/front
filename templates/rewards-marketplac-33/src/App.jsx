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



        // Simple State Management
        const views = ['home', 'market', 'wallet', 'product', 'checkout'];
        const productPrice = 45000;

        function navTo(targetId) {
            // Hide all views
            views.forEach(id => {
                const el = document.getElementById(`view-${id}`);
                if (el) {
                    if (id === 'product' || id === 'checkout') {
                        // For overlays, we want them hidden differently in a real app, 
                        // but here we just toggle display
                         el.classList.add('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                }
            });

            // Show target
            document.getElementById(`view-${targetId}`).classList.remove('hidden');

            // Scroll to top
            document.getElementById('main-content').scrollTop = 0;

            // Update Nav Styles
            if(['home', 'market', 'wallet'].includes(targetId)) {
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('text-indigo-600');
                    btn.classList.add('text-slate-400');
                });
                const activeBtn = document.getElementById(`nav-${targetId}`);
                if(activeBtn) {
                    activeBtn.classList.remove('text-slate-400');
                    activeBtn.classList.add('text-indigo-600');
                }
            }
        }

        function openProduct() {
            navTo('product');
        }

        // Checkout Logic
        function updateCalculation(coinAmount) {
            const coins = parseInt(coinAmount);
            // Assuming 1 Coin = 1 Rupee for simplicity in this demo
            const coinValue = coins * 1; 
            const cashPayable = productPrice - coinValue;

            // Update UI
            document.getElementById('slider-val-display').innerText = `${coins.toLocaleString()} Coins`;
            document.getElementById('coin-price-deduction').innerText = `-₹${coinValue.toLocaleString()}`;
            document.getElementById('cash-payable').innerText = `₹${cashPayable.toLocaleString()}`;
            
            // Update button text
            const btn = document.querySelector('#view-checkout button.bg-slate-900');
            if(btn) btn.innerText = `Pay ₹${cashPayable.toLocaleString()} & Redeem`;
        }
        
        // Initialize
        updateCalculation(10000);
    
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
      

<div className="relative w-full max-w-[400px] h-[850px] bg-white sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200">

<header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100 px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter">
                    R
                </div>
<span className="font-semibold text-lg tracking-tight text-slate-800">Rewardify</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="iconify text-slate-500" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="22"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</div>
<div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
<span className="iconify text-slate-600" data-icon="lucide:user" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative" id="main-content">

<div className="p-5 pb-24 page-transition" id="view-home">

<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white mb-6 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify" data-icon="lucide:coins" data-width="120"></span>
</div>
<p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Reward Balance</p>
<h1 className="text-4xl font-semibold tracking-tight mb-4">12,450 <span className="text-lg text-slate-400 font-normal">pts</span></h1>
<div className="flex items-center gap-2 text-xs text-slate-300 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Expires in 30 days
                    </div>
</div>

<div className="grid grid-cols-4 gap-2 mb-8">
<button className="flex flex-col items-center gap-2 group" onclick="navTo('market')">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Shop</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:ticket" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Vouchers</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">Deals</span>
</button>
<button className="flex flex-col items-center gap-2 group" onclick="navTo('wallet')">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:history" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-slate-600">History</span>
</button>
</div>

<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Trending Rewards</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700" href="#">View all</a>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 hover:shadow-md transition-shadow cursor-pointer" onclick="openProduct()">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center relative">
<img alt="Watch" className="w-full h-full object-cover rounded-lg mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-semibold text-slate-700 border border-slate-200">
                                Best Value
                            </div>
</div>
<h3 className="text-sm font-medium text-slate-800 leading-tight mb-1">Apple Watch Series 9</h3>
<p className="text-xs text-slate-500 mb-2">Electronics</p>
<div className="flex items-center justify-between">
<div className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:coins" data-width="12"></span>
                                50% OFF
                            </div>
<span className="text-xs text-slate-400 line-through">₹45k</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 hover:shadow-md transition-shadow cursor-pointer">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center relative">
<img alt="Headphones" className="w-full h-full object-cover rounded-lg mix-blend-multiply" src="https://images.unsplash.com/photo-1512353087810-25dfcd100962?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-sm font-medium text-slate-800 leading-tight mb-1">Sony WH-1000XM5</h3>
<p className="text-xs text-slate-500 mb-2">Audio</p>
<div className="flex items-center justify-between">
<div className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:coins" data-width="12"></span>
                                30% OFF
                            </div>
<span className="text-xs text-slate-400 line-through">₹29k</span>
</div>
</div>
</div>
</div>

<div className="hidden p-5 pb-24 page-transition" id="view-wallet">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">My Wallet</h2>

<div className="bg-slate-900 rounded-xl p-5 text-white mb-6 shadow-md">
<p className="text-slate-400 text-xs mb-1">Combined Balance</p>
<div className="flex items-baseline gap-1">
<h1 className="text-3xl font-semibold tracking-tight">12,450</h1>
<span className="text-sm text-slate-400">Coins</span>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-slate-300">
<span>Worth approx ₹3,112</span>
<span className="text-emerald-400">+120 this month</span>
</div>
</div>

<h3 className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wide">Recent Activity</h3>
<div className="space-y-0 divide-y divide-slate-100 bg-white rounded-xl border border-slate-200">
<div className="p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:coffee" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Starbucks Voucher</p>
<p className="text-xs text-slate-400">12 Oct, 10:30 AM</p>
</div>
</div>
<span className="text-sm font-medium text-red-500">-500</span>
</div>
<div className="p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Earned via Shopping</p>
<p className="text-xs text-slate-400">10 Oct, 02:15 PM</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-600">+1,200</span>
</div>
<div className="p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:gift" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Amazon Gift Card</p>
<p className="text-xs text-slate-400">08 Oct, 09:00 AM</p>
</div>
</div>
<span className="text-sm font-medium text-red-500">-2,000</span>
</div>
</div>
</div>

<div className="hidden p-5 pb-24 page-transition" id="view-market">
<div className="sticky top-0 bg-[#f3f4f6] pb-4 z-10 pt-2">
<div className="relative mb-4">
<span className="absolute left-3 top-2.5 text-slate-400 iconify" data-icon="lucide:search" data-width="18"></span>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Search vouchers, products..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-full whitespace-nowrap">All</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full whitespace-nowrap">Vouchers</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full whitespace-nowrap">Electronics</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full whitespace-nowrap">Travel</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 group cursor-pointer" onclick="openProduct()">
<div className="h-24 bg-slate-50 rounded-lg mb-3 flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:gift" data-width="32"></span>
</div>
<h3 className="text-sm font-medium text-slate-800 mb-1">Amazon ₹500</h3>
<p className="text-[10px] text-slate-500 mb-2">Gift Card</p>
<div className="flex items-center gap-1.5 mb-2">
<span className="bg-indigo-50 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded font-medium">Coins + Cash</span>
</div>
<p className="text-xs font-semibold text-slate-900">₹500</p>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 group cursor-pointer" onclick="openProduct()">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center">
<img alt="Watch" className="w-full h-full object-cover rounded-lg mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-sm font-medium text-slate-800 mb-1">Apple Watch S9</h3>
<p className="text-[10px] text-slate-500 mb-2">Smart Wearable</p>
<div className="flex items-center gap-1.5 mb-2">
<span className="bg-indigo-50 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded font-medium">Max 50% Coins</span>
</div>
<div className="flex items-center justify-between">
<p className="text-xs font-semibold text-slate-900">₹45,000</p>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
</div>
</div>

</div>
</div>

<div className="hidden absolute top-0 left-0 w-full min-h-full bg-white z-30 pb-24 page-transition" id="view-product">

<div className="sticky top-0 bg-white/80 backdrop-blur z-20 px-5 py-4 flex items-center justify-between">
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50" onclick="navTo('home')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
<span className="iconify" data-icon="lucide:share-2" data-width="16"></span>
</button>
</div>
</div>

<div className="px-5 mb-6">
<div className="aspect-[4/3] bg-slate-50 rounded-2xl flex items-center justify-center p-6">
<img alt="Detail" className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>

<div className="px-6">
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-sm font-medium text-slate-500 mb-1">Apple Inc.</p>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Apple Watch Series 9</h1>
</div>
<div className="text-right">
<p className="text-lg font-semibold text-slate-900">₹45,000</p>
<p className="text-xs text-slate-400 line-through">₹49,900</p>
</div>
</div>

<div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 mb-6 mt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:coins" data-width="14"></span>
                                Coin Eligibility
                            </span>
<span className="text-xs font-medium text-slate-600">Up to 50%</span>
</div>
<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-indigo-500 rounded-full"></div>
</div>
<p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                            You can redeem up to <span className="font-semibold text-slate-800">22,500 Coins</span> for this product. The remaining balance must be paid via UPI or Cards.
                        </p>
</div>
<div className="mb-6">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Description</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Smarter, brighter, and mightier. The new Series 9 features the S9 chip, double tap gesture, and a brighter display. 
                        </p>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-5 pb-8 z-40 max-w-[400px] mx-auto sm:rounded-b-[2rem]">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 flex items-center justify-between px-6 active:scale-[0.98] transition-all" onclick="navTo('checkout')">
<span>Redeem Now</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>

<div className="hidden absolute top-0 left-0 w-full min-h-full bg-[#F8FAFC] z-40 page-transition" id="view-checkout">
<div className="sticky top-0 bg-white border-b border-slate-100 px-5 py-4 flex items-center gap-3 z-20">
<button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-600" onclick="navTo('product')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<span className="font-semibold text-slate-900">Checkout</span>
</div>
<div className="p-5 pb-32">

<div className="flex gap-4 mb-6">
<div className="w-16 h-16 bg-white rounded-lg border border-slate-200 p-2 flex items-center justify-center">
<img className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Apple Watch Series 9</h3>
<p className="text-xs text-slate-500 mb-1">Midnight, 41mm</p>
<p className="text-sm font-medium text-slate-900">₹45,000</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-6">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center"><span className="iconify" data-icon="lucide:coins" data-width="12"></span></span>
                                Apply Reward Coins
                            </span>
<span className="text-xs text-slate-500">Balance: 12,450</span>
</div>

<div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-6">
<p className="text-[11px] text-slate-500 text-center">
                                Max redeemable: <span className="font-semibold text-slate-800">22,500 coins</span> (50%)
                            </p>
</div>

<div className="relative h-12 mb-2">
<input className="absolute w-full h-2 bg-slate-100 rounded-full top-1/2 -translate-y-1/2 z-10 cursor-pointer accent-indigo-600" id="coin-slider" max="22500" min="0" oninput="updateCalculation(this.value)" step="100" type="range" value="10000"/>

</div>
<div className="flex justify-between items-center text-xs mt-2">
<span className="text-slate-400">0</span>
<span className="text-indigo-600 font-medium" id="slider-val-display">10,000 Coins</span>
<span className="text-slate-400">22.5k</span>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-5 border-b border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Payment Summary</h3>
<div className="flex justify-between items-center mb-3">
<span className="text-xs text-slate-500">Total Price</span>
<span className="text-xs font-medium text-slate-900">₹45,000</span>
</div>
<div className="flex justify-between items-center mb-3">
<span className="text-xs text-indigo-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:minus-circle" data-width="12"></span>
                                    Paid via Coins
                                </span>
<span className="text-xs font-semibold text-indigo-600" id="coin-price-deduction">-₹10,000</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Shipping</span>
<span className="text-xs font-medium text-emerald-600">Free</span>
</div>
</div>
<div className="p-5 bg-slate-50 flex justify-between items-center">
<span className="text-sm font-semibold text-slate-700">To Pay via Cash/UPI</span>
<span className="text-lg font-bold text-slate-900 tracking-tight" id="cash-payable">₹35,000</span>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-5 pb-8 z-40 max-w-[400px] mx-auto sm:rounded-b-[2rem]">
<div className="flex gap-3 mb-3">
<div className="flex-1 py-2 px-3 border border-slate-200 rounded-lg flex items-center justify-center gap-2 grayscale opacity-70">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
<span className="text-xs font-medium">Card</span>
</div>
<div className="flex-1 py-2 px-3 border border-indigo-200 bg-indigo-50 rounded-lg flex items-center justify-center gap-2 text-indigo-700">
<span className="iconify" data-icon="lucide:smartphone" data-width="16"></span>
<span className="text-xs font-semibold">UPI</span>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-all">
                        Pay ₹35,000 &amp; Redeem
                    </button>
</div>
</div>
</main>

<nav className="bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center w-full z-10 sticky bottom-0">
<button className="nav-btn flex flex-col items-center gap-1 text-indigo-600" id="nav-home" onclick="navTo('home')">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600" id="nav-market" onclick="navTo('market')">
<span className="iconify" data-icon="lucide:store" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Market</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600" id="nav-wallet" onclick="navTo('wallet')">
<span className="iconify" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Wallet</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
