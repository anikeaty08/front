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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
solana: {
start: '#9945FF',
end: '#14F195',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // DOM Elements
        const solInput = document.getElementById('sol-input');
        const rubInput = document.getElementById('rub-input');
        const displayPriceEl = document.getElementById('display-price');
        const updateIndicator = document.getElementById('price-updated');
        const changeEl = document.getElementById('price-change');
        const usdEquivEl = document.getElementById('sol-usd-equiv');

        // State
        let currentPriceRub = 0;
        let currentPriceUsd = 0;
        let priceChange24h = 0;

        // Fetch Data from CoinGecko
        async function fetchPrice() {
            try {
                // Showing loading state slightly if first load
                if(currentPriceRub === 0) displayPriceEl.classList.add('animate-pulse');

                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=rub,usd&include_24hr_change=true');
                const data = await response.json();
                
                const solData = data.solana;
                currentPriceRub = solData.rub;
                currentPriceUsd = solData.usd;
                priceChange24h = solData.rub_24h_change;

                updateUI();
                recalculate('sol'); // Refresh calculation if input exists
                
                // Remove loading animation
                displayPriceEl.classList.remove('animate-pulse');
                
                // Flash update indicator
                updateIndicator.style.opacity = '1';
                setTimeout(() => { updateIndicator.style.opacity = '0'; }, 2000);

            } catch (error) {
                console.error('Error fetching price:', error);
                if(currentPriceRub === 0) displayPriceEl.innerText = "Error";
            }
        }

        // Update UI Text
        function updateUI() {
            // Format price with spaces for thousands
            const formattedPrice = currentPriceRub.toLocaleString('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
            displayPriceEl.innerText = formattedPrice;

            // Update 24h change color/icon
            const isPositive = priceChange24h >= 0;
            changeEl.innerText = `${isPositive ? '+' : ''}${priceChange24h.toFixed(2)}%`;
            changeEl.className = `text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`;
        }

        // Calculation Logic
        function recalculate(source) {
            if (currentPriceRub === 0) return;

            if (source === 'sol') {
                const solVal = parseFloat(solInput.value);
                if (!isNaN(solVal)) {
                    const rubVal = solVal * currentPriceRub;
                    rubInput.value = rubVal.toFixed(2);
                    
                    const usdVal = solVal * currentPriceUsd;
                    usdEquivEl.innerText = `≈ $${usdVal.toLocaleString('en-US', {maximumFractionDigits: 2})} USD`;
                } else {
                    rubInput.value = '';
                    usdEquivEl.innerText = '≈ $0.00 USD';
                }
            } else {
                const rubVal = parseFloat(rubInput.value);
                if (!isNaN(rubVal)) {
                    const solVal = rubVal / currentPriceRub;
                    solInput.value = solVal.toFixed(6); // crypto usually needs more decimals
                    
                    const usdVal = solVal * currentPriceUsd;
                    usdEquivEl.innerText = `≈ $${usdVal.toLocaleString('en-US', {maximumFractionDigits: 2})} USD`;
                } else {
                    solInput.value = '';
                    usdEquivEl.innerText = '≈ $0.00 USD';
                }
            }
        }

        // Utility
        function resetInputs() {
            solInput.value = '';
            rubInput.value = '';
            usdEquivEl.innerText = '≈ $0.00 USD';
            solInput.focus();
        }

        // Event Listeners
        solInput.addEventListener('input', () => recalculate('sol'));
        rubInput.addEventListener('input', () => recalculate('rub'));

        // Init
        fetchPrice();
        // Refresh every 30 seconds
        setInterval(fetchPrice, 30000);

    
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
      

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<main className="w-full max-w-sm px-6 py-8 relative z-10 flex flex-col gap-6">

<header className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg shadow-purple-900/10">
<iconify-icon className="text-white text-sm" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">Solana Exchange</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-400 font-medium" id="live-indicator">Live</span>
</div>
</header>

<div className="text-center py-6">
<p className="text-xs text-zinc-500 font-medium mb-2 uppercase tracking-widest">Current Market Price</p>
<h1 className="text-4xl font-light tracking-tight text-white flex items-center justify-center gap-2">
<span className="text-zinc-600">₽</span>
<span id="display-price">Loading...</span>
</h1>
<p className="text-xs text-emerald-400/80 mt-2 font-medium flex items-center justify-center gap-1 opacity-0 transition-opacity duration-500" id="price-updated">
<iconify-icon icon="lucide:refresh-ccw" width="10"></iconify-icon> Updated just now
            </p>
</div>

<div className="glass-panel border border-zinc-800 rounded-3xl p-1 shadow-2xl shadow-black/50">

<div className="bg-zinc-900/40 rounded-t-[20px] rounded-b-lg p-5 border border-transparent hover:border-zinc-800/50 transition-colors group relative">
<label className="text-xs text-zinc-500 font-medium mb-1 block">You send</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent text-3xl font-light text-zinc-100 placeholder-zinc-700 outline-none" id="sol-input" inputmode="decimal" placeholder="0" type="number"/>
<div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 shrink-0">
<iconify-icon className="text-purple-400" icon="lucide:coins"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">SOL</span>
</div>
</div>
<div className="text-xs text-zinc-600 mt-2 h-4" id="sol-usd-equiv">≈ $0.00 USD</div>
</div>

<div className="relative h-2 z-20">
<div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center cursor-pointer hover:border-zinc-600 transition-colors shadow-lg" onclick="resetInputs()">
<iconify-icon className="text-zinc-400" icon="lucide:arrow-down" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-zinc-900/40 rounded-t-lg rounded-b-[20px] p-5 border border-transparent hover:border-zinc-800/50 transition-colors group">
<label className="text-xs text-zinc-500 font-medium mb-1 block">You receive (estimated)</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent text-3xl font-light text-zinc-100 placeholder-zinc-700 outline-none" id="rub-input" inputmode="decimal" placeholder="0" type="number"/>
<div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50 shrink-0">
<span className="text-base font-serif text-emerald-400">₽</span>
<span className="text-sm font-medium text-zinc-200">RUB</span>
</div>
</div>
<div className="text-xs text-zinc-600 mt-2 h-4">Russian Ruble</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-2">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-4 flex flex-col gap-1">
<div className="flex items-center gap-2 text-zinc-500 mb-1">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon>
<span className="text-xs">24h Change</span>
</div>
<span className="text-sm font-medium text-zinc-200" id="price-change">--%</span>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-4 flex flex-col gap-1">
<div className="flex items-center gap-2 text-zinc-500 mb-1">
<iconify-icon icon="lucide:bar-chart-2" width="14"></iconify-icon>
<span className="text-xs">Volume</span>
</div>
<span className="text-sm font-medium text-zinc-200">High</span>
</div>
</div>
<footer className="mt-8 text-center">
<p className="text-[10px] text-zinc-600">
                Data provided by CoinGecko API. Rates are for reference only.
            </p>
</footer>
</main>


    </>
  );
}
