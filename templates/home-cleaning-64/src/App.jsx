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



        // Configuration
        const BASE_PRICE = 50;
        const PRICES = {
            bedroom: 30,
            bathroom: 20
        };
        
        // State
        let state = {
            bedroom: 1,
            bathroom: 1,
            frequencyDiscount: 0, // 0 to 1
            frequencyName: 'One Time',
            extras: [] // Array of {name, price}
        };

        // DOM Elements
        const bedCountEl = document.getElementById('bedroom-count');
        const bathCountEl = document.getElementById('bathroom-count');
        
        const summaryBedEl = document.getElementById('summary-bed');
        const priceBedEl = document.getElementById('price-bed');
        const summaryBathEl = document.getElementById('summary-bath');
        const priceBathEl = document.getElementById('price-bath');
        const extrasListEl = document.getElementById('extras-list');
        const discountRowEl = document.getElementById('discount-row');
        const discountLabelEl = document.getElementById('discount-label');
        const discountAmountEl = document.getElementById('discount-amount');
        const totalPriceEl = document.getElementById('total-price');

        // Functions
        function updateCount(type, change) {
            const current = state[type];
            if (current + change >= 1 && current + change <= 10) {
                state[type] = current + change;
                render();
            }
        }

        function setFrequency(type, discount) {
            state.frequencyDiscount = discount;
            
            // UI Update for buttons
            document.querySelectorAll('.freq-option').forEach(btn => {
                btn.classList.remove('selected', 'bg-slate-900', 'text-white', 'border-slate-900');
                btn.classList.add('bg-white', 'text-slate-600');
                
                // Reset internal badges
                const badge = btn.querySelector('.text-green-600');
                if(badge) {
                   badge.classList.remove('bg-white/20', 'text-white');
                   badge.classList.add('bg-green-50', 'text-green-600');
                }
            });

            // Find clicked button based on function call in HTML (simplified approach)
            // In a real app we'd bind via ID, but here we rely on the click target or matching attributes
            const targetBtn = event.currentTarget;
            targetBtn.classList.remove('bg-white', 'text-slate-600');
            targetBtn.classList.add('selected');
            
            // Style the badge inside selected
            const activeBadge = targetBtn.querySelector('.text-green-600');
            if(activeBadge) {
                activeBadge.classList.remove('bg-green-50', 'text-green-600');
                activeBadge.classList.add('bg-white/20', 'text-white');
            }

            render();
        }

        function toggleExtra(element, price, name) {
            const index = state.extras.findIndex(e => e.name === name);
            
            if (index === -1) {
                // Add
                state.extras.push({ name, price });
                element.classList.add('selected');
            } else {
                // Remove
                state.extras.splice(index, 1);
                element.classList.remove('selected');
            }
            render();
        }

        function render() {
            // Update Counters in DOM
            bedCountEl.innerText = state.bedroom;
            bathCountEl.innerText = state.bathroom;

            // Calculate Totals
            const bedTotal = state.bedroom * PRICES.bedroom;
            const bathTotal = state.bathroom * PRICES.bathroom;
            let extrasTotal = 0;
            state.extras.forEach(e => extrasTotal += e.price);

            const subtotal = BASE_PRICE + bedTotal + bathTotal + extrasTotal;
            const discountValue = subtotal * state.frequencyDiscount;
            const finalTotal = subtotal - discountValue;

            // Update Summary Text
            summaryBedEl.innerText = `${state.bedroom} Bedroom${state.bedroom > 1 ? 's' : ''}`;
            priceBedEl.innerText = `$${bedTotal.toFixed(2)}`;

            summaryBathEl.innerText = `${state.bathroom} Bathroom${state.bathroom > 1 ? 's' : ''}`;
            priceBathEl.innerText = `$${bathTotal.toFixed(2)}`;

            // Update Extras List
            if (state.extras.length > 0) {
                extrasListEl.classList.remove('hidden');
                extrasListEl.innerHTML = state.extras.map(e => `
                    <div class="flex justify-between text-slate-500">
                        <span>+ ${e.name}</span>
                        <span>$${e.price.toFixed(2)}</span>
                    </div>
                `).join('');
            } else {
                extrasListEl.classList.add('hidden');
                extrasListEl.innerHTML = '';
            }

            // Update Discount
            if (state.frequencyDiscount > 0) {
                discountRowEl.classList.remove('hidden');
                discountAmountEl.innerText = `-$${discountValue.toFixed(2)}`;
                // Convert discount to text label
                let label = 'Discount';
                if(state.frequencyDiscount === 0.20) label = 'Weekly (20%)';
                if(state.frequencyDiscount === 0.15) label = 'Bi-Weekly (15%)';
                if(state.frequencyDiscount === 0.10) label = 'Monthly (10%)';
                discountLabelEl.innerText = label;
            } else {
                discountRowEl.classList.add('hidden');
            }

            // Final Price
            totalPriceEl.innerText = `$${finalTotal.toFixed(2)}`;
        }

        // Initialize
        render();
    
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<svg aria-hidden="true" className="iconify text-slate-900 iconify--lucide" data-height="24" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">Maid2Clean</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all-300 shadow-lg shadow-slate-900/20" type="button">
                    Get Started
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li className=""><a aria-current="page" className="block md:bg-transparent md:p-0 hover:text-slate-600 transition-colors text-slate-900 rounded pt-2 pr-3 pb-2 pl-3" href="#">Services</a></li>
<li><a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#">How it works</a></li>
<li><a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#">Reviews</a></li>
<li><a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
</nav>

<main className="pt-24 pb-16 px-4 md:px-0">
<div className="max-w-6xl mx-auto">

<div className="text-center mb-12 max-w-2xl mx-auto">
<h1 className="md:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-4">
    Spotless cleaning,<br/>transparent pricing.
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed">
                    Book your trusted cleaner in 60 seconds. No contracts, fully insured, and satisfaction guaranteed. Customize your clean below.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 space-y-8">

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-medium text-sm">1</span>
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Home Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block mb-2 text-sm font-medium text-slate-700">Postal Code</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full ps-10 p-2.5 transition-all outline-none" placeholder="10001" type="text"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-700">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full ps-10 p-2.5 transition-all outline-none" placeholder="you@example.com" type="email"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50/50">
<div>
<p className="font-medium text-slate-900">Bedrooms</p>
<p className="text-xs text-slate-500">Living areas included</p>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 transition-colors" onclick="updateCount('bedroom', -1)">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="w-4 text-center font-medium text-slate-900" id="bedroom-count">1</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 transition-colors" onclick="updateCount('bedroom', 1)">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50/50">
<div>
<p className="font-medium text-slate-900">Bathrooms</p>
<p className="text-xs text-slate-500">Half baths count as 1</p>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 transition-colors" onclick="updateCount('bathroom', -1)">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="w-4 text-center font-medium text-slate-900" id="bathroom-count">1</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-600 transition-colors" onclick="updateCount('bathroom', 1)">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-medium text-sm">2</span>
<h2 className="text-xl font-medium text-slate-900 tracking-tight">How Often?</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="freq-option selected group flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl transition-all-300 hover:border-slate-400" onclick="setFrequency('once', 0)">
<span className="text-sm font-medium mb-1">One Time</span>
<span className="text-xs opacity-70">Standard</span>
</button>
<button className="freq-option group flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl transition-all-300 hover:border-slate-400 bg-white text-slate-600" onclick="setFrequency('weekly', 0.20)">
<span className="text-sm font-medium mb-1">Weekly</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-20%</span>
</button>
<button className="freq-option group flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl transition-all-300 hover:border-slate-400 bg-white text-slate-600" onclick="setFrequency('biweekly', 0.15)">
<span className="text-sm font-medium mb-1">Bi-Weekly</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-15%</span>
</button>
<button className="freq-option group flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl transition-all-300 hover:border-slate-400 bg-white text-slate-600" onclick="setFrequency('monthly', 0.10)">
<span className="text-sm font-medium mb-1">Monthly</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-10%</span>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-medium text-sm">3</span>
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Select Extras</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 30, 'Deep Clean')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Deep Clean</h3>
<p className="text-xs text-slate-500 mt-1">+$30.00</p>
</div>
<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 25, 'Fridge')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:snowflake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></path><path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"></path><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Inside Fridge</h3>
<p className="text-xs text-slate-500 mt-1">+$25.00</p>
</div>
<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 25, 'Oven')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:flame" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Inside Oven</h3>
<p className="text-xs text-slate-500 mt-1">+$25.00</p>
</div>
<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 15, 'Windows')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:app-window" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4M2 8h20M6 4v4"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Interior Windows</h3>
<p className="text-xs text-slate-500 mt-1">+$15.00</p>
</div>
<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 40, 'Move In/Out')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Move In/Out</h3>
<p className="text-xs text-slate-500 mt-1">+$40.00</p>
</div>
<div className="service-card cursor-pointer relative p-4 border border-slate-200 rounded-xl bg-white transition-all-300 hover:shadow-md group" onclick="toggleExtra(this, 20, 'Cabinets')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white check-circle transition-colors">
<svg aria-hidden="true" className="iconify check-icon text-slate-900 opacity-0 transition-all duration-200 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mb-3 p-2 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:archive" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900 text-sm">Inside Cabinets</h3>
<p className="text-xs text-slate-500 mt-1">+$20.00</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-28 space-y-4">
<div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-6">Booking Summary</h3>

<div className="space-y-3 mb-6 border-b border-slate-100 pb-6 text-sm text-slate-600">
<div className="flex justify-between">
<span id="summary-bed">1 Bedroom</span>
<span className="font-medium text-slate-900" id="price-bed">$30.00</span>
</div>
<div className="flex justify-between">
<span id="summary-bath">1 Bathroom</span>
<span className="font-medium text-slate-900" id="price-bath">$20.00</span>
</div>
<div className="flex justify-between">
<span>Base Service</span>
<span className="font-medium text-slate-900">$50.00</span>
</div>
<div className="space-y-3 pt-3 border-t border-dashed border-slate-200 hidden" id="extras-list"></div>
<div className="flex justify-between text-green-600 hidden pt-2" id="discount-row">
<span id="discount-label">Discount</span>
<span className="font-medium" id="discount-amount">-$0.00</span>
</div>
</div>

<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs text-slate-400 uppercase font-medium tracking-wider mb-1">Total Estimate</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight" id="total-price">$100.00</p>
</div>
<span className="text-xs text-slate-400 mb-1">USD</span>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl py-4 shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all-300 flex items-center justify-center gap-2">
<span>Complete Booking</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span>100% Satisfaction Guaranteed</span>
</div>
</div>

<div className="bg-slate-100/50 rounded-xl p-4 border border-slate-200 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
</div>
<div className="text-xs">
<p className="text-slate-900 font-medium">4.9/5 Rating</p>
<p className="text-slate-500">Based on 1,200+ reviews</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
<div className="flex flex-col items-start">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Fully Insured</h3>
<p className="text-sm text-slate-500 leading-relaxed">Every booking is covered by our comprehensive liability insurance policy.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Vetted Professionals</h3>
<p className="text-sm text-slate-500 leading-relaxed">Background checked, interviewed, and highly rated by customers like you.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4 text-green-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Secure Payment</h3>
<p className="text-sm text-slate-500 leading-relaxed">Cashless payment. You are only charged after the cleaning is complete.</p>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center space-x-2 mb-4 md:mb-0">
<svg aria-hidden="true" className="iconify text-slate-900 iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-lg font-semibold text-slate-900 tracking-tight">Maid2Clean</span>
</div>
<div className="flex space-x-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-400">
                © 2023 Maid2Clean Inc. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
