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
darkMode: 'media',
theme: {
extend: {
colors: {
gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827' }
}
}
}
}



        // DOM Elements
        const inputs = {
            numPortions: document.getElementById('numPortions'),
            pizzaSize: document.getElementById('pizzaSize'),
            hydration: document.getElementById('hydration'),
            salt: document.getElementById('salt'),
            pizzaDate: document.getElementById('pizzaDate'),
            pizzaTime: document.getElementById('pizzaTime')
        };

        const outputs = {
            totalFlour: document.getElementById('totalFlour'),
            totalWater: document.getElementById('totalWater'),
            totalSalt: document.getElementById('totalSalt'),
            totalYeast: document.getElementById('totalYeast'),
            totalHoney: document.getElementById('totalHoney'),
            poolishFlour: document.getElementById('poolishFlour'),
            poolishWater: document.getElementById('poolishWater'),
            poolishYeast: document.getElementById('poolishYeast'),
            poolishHoney: document.getElementById('poolishHoney'),
            finalFlour: document.getElementById('finalFlour'),
            finalWater: document.getElementById('finalWater'),
            finalSalt: document.getElementById('finalSalt'),
            poolishTime: document.getElementById('poolishTime'),
            finalTime: document.getElementById('finalTime'),
            hydrationWarning: document.getElementById('hydrationWarning')
        };

        // Logic from doughCalculator.js
        function calculateDough() {
            const numPortions = parseFloat(inputs.numPortions.value);
            const pizzaSize = parseFloat(inputs.pizzaSize.value);
            const hydration = parseFloat(inputs.hydration.value);
            const salt = parseFloat(inputs.salt.value);
            const pizzaDateStr = inputs.pizzaDate.value;
            const pizzaTimeStr = inputs.pizzaTime.value;

            // Validation
            validateHydration(hydration);

            if (isNaN(numPortions) || numPortions <= 0 ||
                isNaN(pizzaSize) || pizzaSize <= 0 ||
                isNaN(hydration) || hydration < 50 || hydration > 100 ||
                isNaN(salt) || salt < 0) {
                return;
            }

            // Formulas from source file
            const totalWeight = numPortions * pizzaSize;
            const totalFlour = totalWeight / (1 + hydration / 100);
            const totalWater = totalFlour * (hydration / 100);
            const totalSalt = totalFlour * (salt / 100);

            // Poolish (50% of total flour, 100% hydration)
            const poolishFlour = totalFlour / 2;
            const poolishWater = poolishFlour;
            const yeast = poolishFlour * 0.02; // As per file
            const honey = poolishFlour * 0.02; // As per file

            // Final Mix
            const finalFlour = totalFlour - poolishFlour;
            const finalWater = totalWater - poolishWater;
            // Salt is added entirely in final mix in the attached code logic context

            // Time Calculations
            const poolishRange = calculatePoolishTimeRange(pizzaDateStr, pizzaTimeStr);
            const finalRange = calculateFinalMixTimeRange(pizzaDateStr, pizzaTimeStr);

            // Update UI
            updateUI({
                totalFlour, totalWater, totalSalt, yeast, honey,
                poolishFlour, poolishWater, poolishRange,
                finalFlour, finalWater, finalRange
            });
        }

        function updateUI(data) {
            const fmt = (num) => Math.round(num) + 'g';
            
            // Total
            outputs.totalFlour.textContent = fmt(data.totalFlour);
            outputs.totalWater.textContent = fmt(data.totalWater);
            outputs.totalSalt.textContent = fmt(data.totalSalt);
            outputs.totalYeast.textContent = fmt(data.yeast);
            outputs.totalHoney.textContent = fmt(data.honey);

            // Poolish
            outputs.poolishFlour.textContent = fmt(data.poolishFlour);
            outputs.poolishWater.textContent = fmt(data.poolishWater);
            outputs.poolishYeast.textContent = fmt(data.yeast);
            outputs.poolishHoney.textContent = fmt(data.honey);
            outputs.poolishTime.textContent = data.poolishRange;

            // Final
            outputs.finalFlour.textContent = fmt(data.finalFlour);
            outputs.finalWater.textContent = fmt(data.finalWater);
            outputs.finalSalt.textContent = fmt(data.totalSalt);
            outputs.finalTime.textContent = data.finalRange;
        }

        function validateHydration(value) {
            const warningElement = outputs.hydrationWarning;
            if (value < 50) {
                warningElement.textContent = "Hydratace pod 50% není doporučena, těsto bude tuhé.";
                warningElement.className = "text-xs mt-1 h-4 text-red-500 font-medium";
            } else if (value > 75) {
                warningElement.textContent = "Hydratace nad 75% je pro pokročilé (lepivé těsto).";
                warningElement.className = "text-xs mt-1 h-4 text-orange-500 font-medium";
            } else {
                warningElement.textContent = "";
            }
        }

        // Time Logic from provided JS
        function calculatePoolishTimeRange(pizzaDate, pizzaTime) {
            if (!pizzaDate || !pizzaTime) return "Zadejte datum a čas";
            const pizzaDateTime = new Date(`${pizzaDate}T${pizzaTime}`);
            
            // Logic: Start - 25h to Start - 18h
            const startMinus25 = new Date(pizzaDateTime);
            startMinus25.setHours(pizzaDateTime.getHours() - 25);

            const startMinus18 = new Date(pizzaDateTime);
            startMinus18.setHours(pizzaDateTime.getHours() - 18);

            return formatTimeRange(startMinus25, startMinus18);
        }

        function calculateFinalMixTimeRange(pizzaDate, pizzaTime) {
            if (!pizzaDate || !pizzaTime) return "Zadejte datum a čas";
            const pizzaDateTime = new Date(`${pizzaDate}T${pizzaTime}`);

            // Logic: Start - 4h to Start - 2h
            const startMinus4 = new Date(pizzaDateTime);
            startMinus4.setHours(pizzaDateTime.getHours() - 4);

            const startMinus2 = new Date(pizzaDateTime);
            startMinus2.setHours(pizzaDateTime.getHours() - 2);

            return formatTimeRange(startMinus4, startMinus2);
        }

        function formatTimeRange(start, end) {
            const options = { weekday: 'short', hour: '2-digit', minute: '2-digit' };
            // Using 'cs-CZ' for Czech formatting based on user context
            const startTime = start.toLocaleString('cs-CZ', options);
            const endTime = end.toLocaleString('cs-CZ', options);
            return `${startTime} - ${endTime}`;
        }

        // Initialization
        document.addEventListener("DOMContentLoaded", () => {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            const hours = String(today.getHours()).padStart(2, '0');
            const minutes = String(today.getMinutes()).padStart(2, '0');

            inputs.pizzaDate.value = tomorrow.toISOString().split('T')[0];
            inputs.pizzaTime.value = `${hours}:${minutes}`;

            calculateDough();

            Object.values(inputs).forEach(input => {
                input.addEventListener("input", calculateDough);
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
      
<main className="w-full max-w-3xl mx-auto space-y-8">

<header className="text-center space-y-2">
<div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white border border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800 mb-4">
<iconify-icon className="text-orange-500" icon="solar:chef-hat-linear" width="32"></iconify-icon>
</div>
<h1 className="text-3xl tracking-tight font-medium text-gray-900 dark:text-white">Pizza Architect</h1>
<p className="text-lg text-gray-500 dark:text-gray-400 font-normal">Plánovač těsta metodou Poolish.</p>
</header>

<div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">

<div className="space-y-6">
<div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-zinc-800">
<h2 className="text-lg font-medium tracking-tight flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:tuning-2-linear"></iconify-icon>
                        Parametry těsta
                    </h2>
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded">Vstupy</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="numPortions">Počet pizz</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-8 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="numPortions" min="1" type="number" value="4"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="pizzaSize">Váha jedné</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-10 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="pizzaSize" min="50" type="number" value="250"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<span className="text-gray-400 text-sm">g</span>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="hydration">Hydratace</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-10 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="hydration" max="100" min="50" type="number" value="70"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<span className="text-gray-400 text-sm">%</span>
</div>
</div>
<p className="text-xs mt-1 h-4" id="hydrationWarning"></p>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="salt">Sůl</label>
<div className="relative">
<input className="w-full h-12 pl-4 pr-10 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="salt" step="0.1" type="number" value="2"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<span className="text-gray-400 text-sm">%</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="pizzaDate">Datum pečení</label>
<div className="relative">
<input className="w-full h-12 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="pizzaDate" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-600 dark:text-gray-300" htmlFor="pizzaTime">Čas pečení (jídla)</label>
<div className="relative">
<input className="w-full h-12 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all shadow-sm" id="pizzaTime" type="time"/>
</div>
</div>
</div>
</div>

<div className="space-y-6 pt-6 animate-fade-in border-t border-gray-100 dark:border-zinc-800" id="results">

<div className="rounded-xl bg-gray-50 dark:bg-zinc-800/50 p-6 border border-gray-100 dark:border-zinc-800">
<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:cart-large-linear"></iconify-icon>
                        Celkový nákupní seznam
                    </h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
<div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">Mouka</span>
<div className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white" id="totalFlour">0g</div>
</div>
<div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">Voda</span>
<div className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400" id="totalWater">0g</div>
</div>
<div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">Sůl</span>
<div className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white" id="totalSalt">0g</div>
</div>
<div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">Droždí</span>
<div className="text-xl sm:text-2xl font-medium text-orange-600 dark:text-orange-400" id="totalYeast">0g</div>
</div>
<div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">Med</span>
<div className="text-xl sm:text-2xl font-medium text-amber-500 dark:text-amber-400" id="totalHoney">0g</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-xl border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col">
<div className="bg-orange-50 dark:bg-orange-950/20 px-6 py-4 border-b border-orange-100 dark:border-orange-900/30">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-orange-900 dark:text-orange-200 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-100 text-xs font-bold">1</span>
                                        Příprava Poolishe
                                    </h4>
<p className="text-sm text-orange-700 dark:text-orange-400 mt-1">Preferment (zraje cca 18-25h).</p>
</div>
<iconify-icon className="text-orange-400 text-xl" icon="solar:jar-of-honey-linear"></iconify-icon>
</div>
</div>
<div className="p-6 bg-white dark:bg-zinc-900 flex-1 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:bag-5-linear"></iconify-icon> Mouka</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="poolishFlour">0g</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:water-drop-linear"></iconify-icon> Voda</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="poolishWater">0g</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:bacteria-linear"></iconify-icon> Droždí</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="poolishYeast">0g</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:jar-of-honey-linear"></iconify-icon> Med</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="poolishHoney">0g</span>
</div>
</div>
<div className="mt-6 p-4 rounded-lg bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
<h5 className="text-xs font-bold uppercase text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Čas začátku
                                </h5>
<p className="text-sm font-medium text-gray-900 dark:text-white" id="poolishTime">--</p>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col">
<div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-600 text-gray-700 dark:text-gray-200 text-xs font-bold">2</span>
                                        Finální těsto
                                    </h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Smíchat Poolish se zbytkem.</p>
</div>
<iconify-icon className="text-gray-400 text-xl" icon="solar:chef-hat-linear"></iconify-icon>
</div>
</div>
<div className="p-6 bg-white dark:bg-zinc-900 flex-1 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:bag-5-linear"></iconify-icon> Zbylá mouka</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="finalFlour">0g</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:water-drop-linear"></iconify-icon> Zbylá voda</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="finalWater">0g</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-zinc-800">
<span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><iconify-icon icon="solar:snowflake-linear"></iconify-icon> Sůl</span>
<span className="font-medium text-gray-900 dark:text-white text-lg" id="finalSalt">0g</span>
</div>
</div>
<div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700">
<h5 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Čas míchání
                                </h5>
<p className="text-sm font-medium text-gray-900 dark:text-white" id="finalTime">--</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
