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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
border: '#27272a', // Zinc 800
primary: '#fafafa', // Zinc 50
secondary: '#a1a1aa', // Zinc 400
accent: '#3f3f46', // Zinc 700
},
animation: {
'fade-in': 'fadeIn 0.2s ease-out',
'slide-down': 'slideDown 0.15s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideDown: {
'0%': { opacity: '0', transform: 'translateY(-4px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- State Management ---
        const state = {
            currency: 'NGN',
            ratesData: [],
            selectedCardId: null,
            selectedSubId: null,
            amount: 0
        };

        // --- DOM Elements ---
        const els = {
            currencyTabs: document.querySelectorAll('.currency-tab'),
            cardTrigger: document.getElementById('card-trigger'),
            cardListWrapper: document.getElementById('card-list-wrapper'),
            cardList: document.getElementById('card-list'),
            cardSearch: document.getElementById('card-search'),
            cardSelectedText: document.getElementById('card-selected-text'),
            
            subTrigger: document.getElementById('sub-trigger'),
            subListWrapper: document.getElementById('sub-list-wrapper'),
            subList: document.getElementById('sub-list'),
            subSearch: document.getElementById('sub-search'),
            subSelectedText: document.getElementById('sub-selected-text'),
            
            amountInput: document.getElementById('amount-input'),
            
            displayRate: document.getElementById('display-rate'),
            displayTotal: document.getElementById('display-total'),
            totalCurrencyLabel: document.getElementById('total-currency-label')
        };

        // --- Logic ---

        async function init() {
            lucide.createIcons();
            setupEventListeners();
            selectCurrency('NGN');
            
            try {
                // Use a CORS proxy to bypass browser restriction
                const targetUrl = 'https://1minutepay.yuyu.ng/wp-content/uploads/one_minute_pay_test.giftcards.json';
                const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(targetUrl);
                
                const response = await fetch(proxyUrl);
                
                if (!response.ok) throw new Error('Network response was not ok');
                
                const json = await response.json();
                state.ratesData = normalizeData(json);
                renderCardList(state.ratesData);
                
            } catch (error) {
                console.error("Failed to load rates via proxy, using fallback", error);
                
                // Fallback Data
                const fallbackData = [
                    {
                        "id": 1, "title": "Apple iTunes",
                        "data": [{ "id": "it-1", "title": "USA (Physical)", "rate": 1100 }, { "id": "it-2", "title": "USA (E-Code)", "rate": 1050 }]
                    },
                    {
                        "id": 2, "title": "Steam Wallet",
                        "data": [{ "id": "st-1", "title": "USA", "rate": 1150 }, { "id": "st-2", "title": "UK", "rate": 1400 }]
                    },
                    {
                        "id": 3, "title": "Google Play",
                        "data": [{ "id": "gp-1", "title": "USA", "rate": 1120 }]
                    },
                    {
                        "id": 4, "title": "Amazon",
                        "data": [{ "id": "am-1", "title": "USA (Cash Receipt)", "rate": 1080 }]
                    }
                ];
                state.ratesData = normalizeData(fallbackData);
                renderCardList(state.ratesData);
            }
        }

        function normalizeData(json) {
            // Check for wrapped data structure
            let data = Array.isArray(json) ? json : (json.data || []);
            
            return data.map((item, index) => {
                const name = item.title || item.name || item.service_name || "Unknown Card";
                // Ensure ID is treated as a string to match dropdown logic later
                const id = String(item.id !== undefined ? item.id : index);
                
                // Defensive check for subtypes arrays
                const rawSubtypes = item.data || item.subtypes || item.products || [];
                
                const subtypes = rawSubtypes.map((sub, sIndex) => {
                    return {
                        id: String(sub.id || `${id}-${sIndex}`),
                        name: sub.title || sub.name || "Standard",
                        rate: parseFloat(sub.rate || sub.sell_rate || sub.price || 0)
                    };
                });

                return { id, name, subtypes };
            }).sort((a, b) => a.name.localeCompare(b.name));
        }

        function setupEventListeners() {
            // Currency Tabs
            els.currencyTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    selectCurrency(tab.dataset.currency);
                });
            });

            // Card Dropdown Logic
            setupDropdown(
                els.cardTrigger, 
                els.cardListWrapper, 
                els.cardSearch, 
                els.cardList, 
                () => state.ratesData, // Data source
                (item) => { // On Select
                    state.selectedCardId = item.id;
                    els.cardSelectedText.textContent = item.name;
                    els.cardSelectedText.classList.replace('text-secondary', 'text-white');
                    
                    // Reset Subtype
                    state.selectedSubId = null;
                    els.subSelectedText.textContent = "Select type...";
                    els.subSelectedText.classList.replace('text-white', 'text-secondary');
                    els.subTrigger.disabled = false;
                    
                    // Clear previous sub-list items
                    els.subList.innerHTML = '';
                    
                    calculate();
                }
            );

            // Subtype Dropdown Logic
            setupDropdown(
                els.subTrigger, 
                els.subListWrapper, 
                els.subSearch, 
                els.subList, 
                () => { // Data source
                    // Convert both to string to ensure matching works regardless of data type
                    const card = state.ratesData.find(c => String(c.id) === String(state.selectedCardId));
                    return card ? card.subtypes : [];
                }, 
                (item) => { // On Select
                    state.selectedSubId = item.id;
                    els.subSelectedText.textContent = item.name;
                    els.subSelectedText.classList.replace('text-secondary', 'text-white');
                    calculate();
                }
            );

            // Amount Input
            els.amountInput.addEventListener('input', (e) => {
                state.amount = parseFloat(e.target.value) || 0;
                calculate();
            });

            // Close dropdowns on outside click
            document.addEventListener('click', (e) => {
                if(!els.cardTrigger.contains(e.target) && !els.cardListWrapper.contains(e.target)) {
                    els.cardListWrapper.classList.add('hidden');
                }
                if(!els.subTrigger.contains(e.target) && !els.subListWrapper.contains(e.target)) {
                    els.subListWrapper.classList.add('hidden');
                }
            });
        }

        function setupDropdown(trigger, wrapper, searchInput, listEl, getDataSource, onSelect) {
            trigger.addEventListener('click', () => {
                if (trigger.disabled) return;
                
                // Hide other dropdown if open
                if (trigger === els.cardTrigger) els.subListWrapper.classList.add('hidden');
                if (trigger === els.subTrigger) els.cardListWrapper.classList.add('hidden');

                const isHidden = wrapper.classList.contains('hidden');
                
                if (isHidden) {
                    wrapper.classList.remove('hidden');
                    searchInput.value = '';
                    searchInput.focus();
                    // Load data fresh
                    filterList(listEl, getDataSource(), '', onSelect, wrapper);
                } else {
                    wrapper.classList.add('hidden');
                }
            });

            searchInput.addEventListener('input', (e) => {
                filterList(listEl, getDataSource(), e.target.value, onSelect, wrapper);
            });
        }

        function filterList(listElement, data, query, onSelect, wrapper) {
            listElement.innerHTML = '';
            
            if (!data || data.length === 0) {
                 listElement.innerHTML = `<li class="px-3 py-2 text-xs text-secondary text-center">No types available</li>`;
                 return;
            }

            const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

            if (filtered.length === 0) {
                listElement.innerHTML = `<li class="px-3 py-2 text-xs text-secondary text-center">No results found</li>`;
                return;
            }

            filtered.forEach(item => {
                const li = document.createElement('li');
                li.className = "flex items-center justify-between px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-md cursor-pointer transition-colors";
                
                // Item Name
                const nameSpan = document.createElement('span');
                nameSpan.textContent = item.name;
                li.appendChild(nameSpan);

                // Optional: Show rate if available
                if(item.rate !== undefined) {
                    const rateSpan = document.createElement('span');
                    rateSpan.className = "text-[10px] text-zinc-500 font-mono";
                    rateSpan.textContent = item.rate;
                    li.appendChild(rateSpan);
                }

                li.addEventListener('click', () => {
                    onSelect(item);
                    wrapper.classList.add('hidden');
                });
                listElement.appendChild(li);
            });
        }

        function renderCardList(data) {
             // Initial load is handled by the click event, but we can verify data exists here
             // console.log("Data loaded:", data.length);
        }

        function selectCurrency(currency) {
            state.currency = currency;
            els.totalCurrencyLabel.textContent = currency;
            
            els.currencyTabs.forEach(tab => {
                const isActive = tab.dataset.currency === currency;
                const bg = tab.querySelector('.active-bg');
                
                if (isActive) {
                    bg.classList.remove('hidden');
                    tab.classList.replace('text-secondary', 'text-white');
                } else {
                    bg.classList.add('hidden');
                    tab.classList.replace('text-white', 'text-secondary');
                }
            });
            
            calculate();
        }

        function calculate() {
            let rate = 0;
            let total = 0;

            if (state.selectedCardId && state.selectedSubId) {
                // Use robust string comparison
                const card = state.ratesData.find(c => String(c.id) === String(state.selectedCardId));
                const sub = card ? card.subtypes.find(s => String(s.id) === String(state.selectedSubId)) : null;
                
                if (sub) {
                    let baseRate = sub.rate;

                    // Simple conversion logic (mock)
                    if (state.currency === 'NGN') {
                        rate = baseRate;
                    } else {
                        if (state.currency === 'GHS') rate = baseRate * 0.012; 
                        if (state.currency === 'KES') rate = baseRate * 0.15; 
                        if (state.currency === 'USD') rate = baseRate / 1500; 
                    }
                }
            }

            total = rate * state.amount;

            els.displayRate.textContent = rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            els.displayTotal.textContent = total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        window.addEventListener('DOMContentLoaded', init);

    
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px]"></div>
<div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-violet-500/5 blur-[100px]"></div>
</div>

<main className="relative w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl shadow-black overflow-hidden ring-1 ring-white/5">

<div className="px-6 pt-8 pb-4">
<div className="flex items-center gap-3 mb-2">
<div className="size-8 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center shadow-lg shadow-white/10">
<span className="font-semibold text-zinc-900 text-lg tracking-tighter">1M</span>
</div>
<h1 className="text-lg font-medium tracking-tight text-white">Rate Calculator</h1>
</div>
<p className="text-sm text-secondary">Real-time exchange rates for gift cards.</p>
</div>
<div className="px-6 pb-8 space-y-6">

<div className="space-y-2">
<label className="text-xs font-medium text-secondary ml-1">Payout Currency</label>
<div className="grid grid-cols-4 gap-1 p-1 bg-surface/80 rounded-lg border border-border">
<button className="currency-tab relative flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all duration-200 text-secondary hover:text-white focus:outline-none" data-currency="NGN">
<span className="relative z-10">NGN</span>
<div className="active-bg absolute inset-0 bg-accent/40 rounded-md hidden"></div>
</button>
<button className="currency-tab relative flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all duration-200 text-secondary hover:text-white focus:outline-none" data-currency="GHS">
<span className="relative z-10">GHS</span>
<div className="active-bg absolute inset-0 bg-accent/40 rounded-md hidden"></div>
</button>
<button className="currency-tab relative flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all duration-200 text-secondary hover:text-white focus:outline-none" data-currency="KES">
<span className="relative z-10">KES</span>
<div className="active-bg absolute inset-0 bg-accent/40 rounded-md hidden"></div>
</button>
<button className="currency-tab relative flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all duration-200 text-secondary hover:text-white focus:outline-none" data-currency="USD">
<span className="relative z-10">USD</span>
<div className="active-bg absolute inset-0 bg-accent/40 rounded-md hidden"></div>
</button>
</div>
</div>

<div className="space-y-2 relative z-30">
<label className="text-xs font-medium text-secondary ml-1">Gift Card</label>
<div className="relative group" id="card-dropdown-container">

<button className="w-full flex items-center justify-between bg-surface/50 border border-border hover:border-zinc-700 text-zinc-200 text-sm rounded-lg px-3 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600" id="card-trigger">
<span className="truncate text-secondary" id="card-selected-text">Select provider...</span>
<i className="size-4 text-zinc-500 transition-transform duration-200 group-focus-within:rotate-180" data-lucide="chevron-down"></i>
</button>

<div className="absolute hidden top-full left-0 right-0 mt-1.5 bg-zinc-900 border border-border rounded-lg shadow-xl overflow-hidden animate-slide-down" id="card-list-wrapper">
<div className="p-2 border-b border-border sticky top-0 bg-zinc-900">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-surface border border-transparent focus:border-zinc-700 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors" id="card-search" placeholder="Search cards..." type="text"/>
</div>
</div>
<ul className="max-h-56 overflow-y-auto custom-scrollbar p-1" id="card-list">

<li className="px-3 py-2 text-xs text-zinc-500 text-center">Loading cards...</li>
</ul>
</div>
</div>
</div>

<div className="space-y-2 relative z-20">
<label className="text-xs font-medium text-secondary ml-1">Sub Category</label>
<div className="relative group" id="sub-dropdown-container">

<button className="w-full flex items-center justify-between bg-surface/50 border border-border hover:border-zinc-700 text-zinc-200 text-sm rounded-lg px-3 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="sub-trigger">
<span className="truncate text-secondary" id="sub-selected-text">Select type...</span>
<i className="size-4 text-zinc-500 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>

<div className="absolute hidden top-full left-0 right-0 mt-1.5 bg-zinc-900 border border-border rounded-lg shadow-xl overflow-hidden animate-slide-down" id="sub-list-wrapper">
<div className="p-2 border-b border-border sticky top-0 bg-zinc-900">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-surface border border-transparent focus:border-zinc-700 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors" id="sub-search" placeholder="Search types..." type="text"/>
</div>
</div>
<ul className="max-h-56 overflow-y-auto custom-scrollbar p-1" id="sub-list">

</ul>
</div>
</div>
</div>

<div className="space-y-2 z-10 relative">
<label className="text-xs font-medium text-secondary ml-1">Card Amount</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="size-3.5 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" data-lucide="dollar-sign"></i>
</div>
<input className="block w-full bg-surface/50 border border-border text-zinc-200 text-sm rounded-lg pl-9 pr-3 py-2.5 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors" id="amount-input" placeholder="0.00" type="number"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-2">

<div className="flex flex-col gap-1 p-3 rounded-lg border border-border bg-gradient-to-b from-surface/50 to-transparent">
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Current Rate</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-medium text-white tracking-tight" id="display-rate">0.00</span>
<span className="text-xs text-zinc-500" id="rate-currency-label">/ $</span>
</div>
</div>

<div className="flex flex-col gap-1 p-3 rounded-lg border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20">
<i className="size-8 text-indigo-500" data-lucide="wallet"></i>
</div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-400">Total Value</span>
<div className="flex items-baseline gap-1 z-10">
<span className="text-lg font-medium text-indigo-100 tracking-tight" id="display-total">0.00</span>
<span className="text-xs text-indigo-300" id="total-currency-label">NGN</span>
</div>
</div>
</div>
</div>

<div className="bg-surface/30 px-6 py-3 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-600">
<div className="flex items-center gap-1.5">
<div className="size-1.5 rounded-full bg-emerald-500/50 animate-pulse"></div>
<span>Live Rates</span>
</div>
<span>Encrypted Connection</span>
</div>
</main>


    </>
  );
}
