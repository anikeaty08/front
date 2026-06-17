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



        lucide.createIcons();

        const API_URL = 'https://api.dailyfee.ir/market_assets';
        
        const formatPrice = (price) => {
            if (!price && price !== 0) return '0';
            const num = parseFloat(price);
            if (num < 10 && num > -10) return num.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
            if (num < 1000 && num > -1000) return num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
            return Math.floor(num).toLocaleString('en-US');
        };

        const getFormattedDate = () => {
            const date = new Date();
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
            return `${date.toLocaleDateString('en-US', options)} at ${date.toLocaleTimeString('en-US', timeOptions)}`;
        };

        const getFlagUrl = (code) => {
            const codeMap = {
                'USD': 'us', 'EUR': 'eu', 'GBP': 'gb', 'CHF': 'ch', 'CAD': 'ca',
                'AUD': 'au', 'SEK': 'se', 'NOK': 'no', 'RUB': 'ru', 'CNY': 'cn',
                'JPY': 'jp', 'TRY': 'tr', 'AED': 'ae', 'IQD': 'iq'
            };
            const countryCode = codeMap[code?.toUpperCase()];
            if (countryCode) {
                return `<img src="https://flagcdn.com/w80/${countryCode}.png" class="w-full h-full object-cover" alt="${code}">`;
            }
            if (['BTC', 'ETH', 'USDT', 'XRP', 'DOGE', 'SHIB', 'TRX', 'DOT', 'LTC', 'BCH'].includes(code)) return `<i data-lucide="bitcoin" class="w-5 h-5 text-orange-500 stroke-[1.5]"></i>`;
            if (['XAU', 'GOLD', '18AYAR', 'SEKKE'].some(x => code?.toUpperCase().includes(x))) return `<i data-lucide="coins" class="w-5 h-5 text-yellow-500 stroke-[1.5]"></i>`;
            
            return `<span class="text-xs font-bold text-slate-400">${code?.substring(0,2)}</span>`;
        };

        async function fetchData() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                processData(data);
            } catch (error) {
                console.error('Fetch error:', error);
                document.getElementById('loading').innerHTML = `
                    <div class="text-center px-6">
                        <i data-lucide="wifi-off" class="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-[1.5]"></i>
                        <p class="text-slate-500">Unable to update rates.</p>
                        <button onclick="fetchData()" class="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium">Retry</button>
                    </div>
                `;
                lucide.createIcons();
            }
        }

        function processData(data) {
            const container = document.getElementById('market-container');
            const loading = document.getElementById('loading');
            
            if(loading) loading.remove();
            container.innerHTML = '';
            
            let categories = {};
            let items = [];

            // Normalize Data
            if (Array.isArray(data)) {
                items = data;
            } else if (typeof data === 'object') {
                Object.keys(data).forEach(key => {
                    if (Array.isArray(data[key])) {
                        data[key].forEach(i => items.push({...i, categoryKey: key}));
                    }
                });
            }

            // Categorize
            items.forEach(item => {
                const code = (item.Code || item.code || '').toUpperCase();
                const name = (item.Name || item.name || '').toUpperCase();
                let cat = 'Other';

                if (['USD', 'EUR', 'GBP', 'AED', 'TRY', 'CNY', 'JPY', 'CAD', 'AUD', 'CHF', 'AFN', 'IQD'].includes(code)) cat = 'Currencies';
                else if (name.includes('GOLD') || name.includes('SEKKE') || code.includes('XAU') || name.includes('COIN')) cat = 'Gold & Coins';
                else if (['BTC', 'ETH', 'USDT', 'DOGE', 'SHIB', 'TRX'].includes(code) || name.includes('BITCOIN')) cat = 'Cryptocurrencies';
                
                // Override if key suggests category
                if (item.categoryKey) {
                    if (item.categoryKey.includes('gold')) cat = 'Gold & Coins';
                    else if (item.categoryKey.includes('cryp')) cat = 'Cryptocurrencies';
                    else if (cat === 'Other') cat = 'Currencies';
                }

                if (!categories[cat]) categories[cat] = [];
                categories[cat].push(item);
            });

            const order = ['Currencies', 'Gold & Coins', 'Cryptocurrencies'];
            
            order.forEach(catName => {
                if (categories[catName] && categories[catName].length > 0) {
                    renderCategory(catName, categories[catName], container);
                }
            });
        }

        function renderCategory(title, items, container) {
            const template = document.getElementById('category-template');
            const clone = template.content.cloneNode(true);
            
            const titleEl = clone.querySelector('.category-title');
            const iconEl = clone.querySelector('.category-icon');
            const dateEl = clone.querySelector('.date-label');
            
            titleEl.textContent = title;
            dateEl.textContent = getFormattedDate();

            if (title === 'Currencies') iconEl.textContent = '💵';
            else if (title.includes('Gold')) iconEl.textContent = '💰';
            else if (title.includes('Crypto')) iconEl.textContent = '💎';

            const grid = clone.querySelector('.category-grid');
            items.slice(0, 8).forEach(item => {
                grid.appendChild(createCard(item));
            });

            container.appendChild(clone);
            lucide.createIcons();
        }

        function createCard(item) {
            const template = document.getElementById('card-template');
            const clone = template.content.cloneNode(true);

            // Extract Data
            const price = parseFloat(item.Price || item.price || item.current_price || 0);
            const change = parseFloat(item.change_value || item.Change || item.change || 0);
            
            const code = (item.Code || item.code || item.symbol || '').toUpperCase();
            const name = item.Name || item.name || code;

            // Elements
            const iconContainer = clone.querySelector('.asset-icon-container');
            const nameEl = clone.querySelector('.asset-name');
            const codeEl = clone.querySelector('.asset-code');
            const changeDisplayEl = clone.querySelector('.change-display');
            const currentPriceEl = clone.querySelector('.current-price');

            // Set basic info
            iconContainer.innerHTML = getFlagUrl(code);
            nameEl.textContent = name;
            codeEl.textContent = code;
            currentPriceEl.textContent = formatPrice(price);

            // Logic: Change Value Display & Main Price Color
            let formattedChange = formatPrice(change);
            
            // Reset colors
            currentPriceEl.classList.remove('text-emerald-500', 'text-rose-500', 'text-slate-700');

            if (change > 0) {
                // Positive Change: Green Price
                currentPriceEl.classList.add('text-emerald-500');
                changeDisplayEl.textContent = '+' + formattedChange;
            } else if (change < 0) {
                // Negative Change: Red Price
                currentPriceEl.classList.add('text-rose-500');
                changeDisplayEl.textContent = formattedChange; // Usually includes '-' from number formatting
            } else {
                // No Change: Default Color
                currentPriceEl.classList.add('text-slate-700');
                changeDisplayEl.textContent = formattedChange;
            }

            // Fallback for zero price (invalid data)
            if(price === 0) {
                 currentPriceEl.textContent = "-";
                 changeDisplayEl.textContent = "";
                 currentPriceEl.classList.remove('text-emerald-500', 'text-rose-500');
                 currentPriceEl.classList.add('text-slate-400');
            }

            return clone;
        }

        document.addEventListener('DOMContentLoaded', () => {
            fetchData();
            // Refresh every 60 seconds
            setInterval(fetchData, 60000);
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
      

<div className="max-w-md mx-auto min-h-screen flex flex-col relative pb-10">
<div className="h-4 w-full"></div>

<header className="px-6 py-4 flex justify-between items-center z-10">
<h1 className="text-[34px] font-semibold text-slate-800 tracking-tight">DailyFee</h1>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="settings"></i>
</button>
</header>

<main className="flex-1 px-5 flex flex-col gap-8 pt-2" id="market-container">

<div className="flex justify-center items-center h-40" id="loading">
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
</div>
</main>
</div>

<template id="category-template">
<div className="section mb-2 fade-in">
<div className="flex justify-between items-baseline mb-4 px-1">
<div className="flex items-center gap-2">
<span className="category-icon text-2xl"></span>
<h2 className="text-xl font-semibold text-slate-700 tracking-tight category-title"></h2>
</div>
<span className="text-xs font-medium text-slate-400 date-label"></span>
</div>
<div className="grid grid-cols-2 gap-4 category-grid">

</div>
</div>
</template>

<template id="card-template">
<div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/50 flex flex-col justify-between h-[150px] relative overflow-hidden transition-transform active:scale-95 duration-200">

<div className="flex justify-between items-start">
<div className="asset-icon-container w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-slate-50 flex items-center justify-center"></div>
<div className="text-right">
<div className="text-xs text-slate-400 font-medium mb-0.5 asset-name truncate max-w-[80px]"></div>
<div className="text-sm font-semibold text-slate-700 asset-code tracking-tight"></div>
</div>
</div>

<div className="flex flex-col items-start mt-auto">

<div className="text-sm text-slate-400 font-medium mb-0.5 tracking-tight change-display"></div>

<div className="text-[26px] font-semibold tracking-tighter leading-none current-price flex items-center gap-1"></div>
</div>
</div>
</template>


    </>
  );
}
