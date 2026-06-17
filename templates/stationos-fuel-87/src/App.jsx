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



        const categoriesView = document.getElementById('categories-view');
        const subcategoryView = document.getElementById('subcategory-view');
        const backBtn = document.getElementById('back-btn');
        const logoContainer = document.getElementById('logo-container');
        const pageTitle = document.getElementById('page-title');
        const pageSubtitle = document.getElementById('page-subtitle');

        const subcategoryData = {
            fuel: [
                { title: 'Pump 01', icon: 'lucide:fuel', status: 'Available', color: 'indigo' },
                { title: 'Pump 02', icon: 'lucide:fuel', status: 'In Use', color: 'zinc' },
                { title: 'Pump 03', icon: 'lucide:fuel', status: 'Available', color: 'indigo' },
                { title: 'Pump 04', icon: 'lucide:fuel', status: 'Available', color: 'indigo' }
            ],
            food: [
                { title: 'Meat Pie', icon: 'lucide:soup', status: '$4.50', color: 'orange' },
                { title: 'Sausage Roll', icon: 'lucide:soup', status: '$3.50', color: 'orange' },
                { title: 'Hot Dog', icon: 'lucide:soup', status: '$5.00', color: 'orange' },
                { title: 'Chips', icon: 'lucide:soup', status: '$2.50', color: 'orange' }
            ],
            bakery: [
                { title: 'Glazed Donut', icon: 'lucide:donut', status: '$2.00', color: 'pink' },
                { title: 'Croissant', icon: 'lucide:croissant', status: '$3.50', color: 'pink' },
                { title: 'Muffin', icon: 'lucide:cup-soda', status: '$3.00', color: 'pink' },
                { title: 'Cookie', icon: 'lucide:circle', status: '$1.50', color: 'pink' }
            ],
            drinks: [
                { title: 'Coffee', icon: 'lucide:coffee', status: 'Hot', color: 'cyan' },
                { title: 'Soda', icon: 'lucide:cup-soda', status: 'Cold', color: 'cyan' },
                { title: 'Water', icon: 'lucide:droplets', status: 'Cold', color: 'cyan' },
                { title: 'Energy', icon: 'lucide:zap', status: 'Can', color: 'cyan' }
            ]
        };

        function openCategory(type) {
            // 1. Fade out current view
            categoriesView.classList.remove('fade-enter-active');
            categoriesView.style.opacity = '0';
            
            setTimeout(() => {
                categoriesView.classList.add('hidden-view');
                
                // 2. Build Subcategory Content
                subcategoryView.innerHTML = '';
                const items = subcategoryData[type];
                
                items.forEach(item => {
                    const isAvailable = item.status === 'Available' || item.color !== 'zinc';
                    const activeClass = isAvailable ? `border-zinc-800 hover:border-${item.color}-500/50 hover:bg-zinc-900` : 'border-zinc-800 opacity-60';
                    const iconColor = isAvailable ? `group-hover:text-${item.color}-400` : 'text-zinc-500';
                    const glow = isAvailable ? `group-hover:border-${item.color}-500/30` : 'border-zinc-800';

                    subcategoryView.innerHTML += `
                    <button class="group relative aspect-square w-full rounded-3xl bg-zinc-900/50 border ${activeClass} transition-all duration-300 flex flex-col justify-between p-6 text-left overflow-hidden">
                        <div class="relative z-10 flex justify-between w-full">
                            <div class="w-10 h-10 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${glow} ${iconColor} transition-colors">
                                <span class="iconify" data-icon="${item.icon}" data-width="20" data-stroke-width="1.5"></span>
                            </div>
                            <div class="flex items-center">
                                <span class="text-[10px] font-medium ${isAvailable ? 'text-zinc-400' : 'text-zinc-600'} uppercase tracking-wide">${item.status}</span>
                            </div>
                        </div>
                        <div class="relative z-10">
                            <span class="block text-xl font-medium tracking-tight text-white group-hover:text-zinc-100 transition-colors">${item.title}</span>
                        </div>
                    </button>
                    `;
                });

                // 3. Show Subcategory View
                subcategoryView.classList.remove('hidden-view');
                // Force reflow
                void subcategoryView.offsetWidth;
                subcategoryView.classList.add('fade-enter-active');

                // 4. Update Header
                pageTitle.innerText = type === 'fuel' ? 'Select Pump' : type.charAt(0).toUpperCase() + type.slice(1);
                pageSubtitle.innerText = type === 'fuel' ? 'Choose your pump number' : `Select items from ${type}`;
                
                // 5. Toggle Back Button
                logoContainer.classList.add('hidden-view');
                backBtn.classList.remove('hidden-view');

            }, 200);
        }

        function goBack() {
            // 1. Hide Subcategory
            subcategoryView.classList.remove('fade-enter-active');
            
            setTimeout(() => {
                subcategoryView.classList.add('hidden-view');
                
                // 2. Show Categories
                categoriesView.classList.remove('hidden-view');
                // Force reflow
                void categoriesView.offsetWidth;
                categoriesView.classList.add('fade-enter-active');
                categoriesView.style.opacity = '1';

                // 3. Reset Header
                pageTitle.innerText = 'Select Category';
                pageSubtitle.innerText = 'Tap to add items to your basket';

                // 4. Toggle Back Button
                backBtn.classList.add('hidden-view');
                logoContainer.classList.remove('hidden-view');
            }, 200);
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
      

<header className="flex justify-between items-center px-6 py-4 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-xl z-20">
<div className="flex items-center gap-3">

<button className="hidden-view w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center border border-zinc-800 transition-colors" id="back-btn" onclick="goBack()">
<span className="iconify text-zinc-400" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="16"></span>
</button>

<div className="flex items-center gap-3" id="logo-container">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
<span className="iconify text-zinc-100" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
</div>
<span className="text-sm font-semibold tracking-tight uppercase text-zinc-400">Station<span className="text-white">OS</span></span>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-500">
<span className="text-xs font-medium tracking-wide">PUMP 04</span>
<div className="h-4 w-px bg-zinc-800"></div>
<span className="iconify" data-icon="lucide:wifi" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-sm font-medium text-zinc-300">12:42</span>
</div>
</header>

<main className="flex-grow flex flex-col relative z-10 overflow-hidden">

<div className="px-6 pt-8 pb-4">
<h1 className="text-3xl font-medium tracking-tight text-white mb-1" id="page-title">Select Category</h1>
<p className="text-zinc-500 text-sm" id="page-subtitle">Tap to add items to your basket</p>
</div>

<div className="flex-grow overflow-y-auto no-scrollbar content-start px-6 pb-6 relative">

<div className="grid grid-cols-2 gap-4 fade-enter-active" id="categories-view">

<button className="group relative aspect-[4/5] w-full rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between p-6 text-left overflow-hidden" onclick="openCategory('fuel')">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between w-full">
<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:fuel" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-indigo-400" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14"></span>
</div>
</div>
<div className="relative z-10">
<span className="block text-xl font-medium tracking-tight text-white group-hover:text-indigo-100 transition-colors">Fuel</span>
<span className="text-xs text-zinc-500 mt-1 block">Unleaded, Diesel, Premium</span>
</div>
</button>

<button className="group relative aspect-[4/5] w-full rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between p-6 text-left overflow-hidden" onclick="openCategory('food')">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between w-full">
<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
<span className="iconify" data-icon="lucide:soup" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
<div className="relative z-10">
<span className="block text-xl font-medium tracking-tight text-white group-hover:text-orange-100 transition-colors">Hot Food</span>
<span className="text-xs text-zinc-500 mt-1 block">Pies, Sausage Rolls, Hot Dogs</span>
</div>
</button>

<button className="group relative aspect-[4/5] w-full rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between p-6 text-left overflow-hidden" onclick="openCategory('bakery')">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between w-full">
<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-pink-500/30 group-hover:text-pink-400 transition-colors">
<span className="iconify" data-icon="lucide:croissant" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="px-2 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
<span className="text-[10px] font-medium text-pink-400 uppercase tracking-wider">Fresh</span>
</div>
</div>
<div className="relative z-10">
<span className="block text-xl font-medium tracking-tight text-white group-hover:text-pink-100 transition-colors">Bakery</span>
<span className="text-xs text-zinc-500 mt-1 block">Donuts, Croissants, Muffins</span>
</div>
</button>

<button className="group relative aspect-[4/5] w-full rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between p-6 text-left overflow-hidden" onclick="openCategory('drinks')">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between w-full">
<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
<span className="iconify" data-icon="lucide:cup-soda" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
<div className="relative z-10">
<span className="block text-xl font-medium tracking-tight text-white group-hover:text-cyan-100 transition-colors">Drinks</span>
<span className="text-xs text-zinc-500 mt-1 block">Coffee, Soda, Energy, Water</span>
</div>
</button>
</div>

<div className="hidden-view grid grid-cols-2 gap-4" id="subcategory-view">

</div>
</div>
</main>

<footer className="bg-zinc-900/80 backdrop-blur-2xl border-t border-zinc-800 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-30">

<div className="w-full flex justify-center pt-3 pb-1">
<div className="w-12 h-1 rounded-full bg-zinc-800"></div>
</div>
<div className="px-6 py-4">

<div className="space-y-4 mb-6">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:fuel" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Regular Unleaded</p>
<p className="text-xs text-zinc-500">42.5 Liters @ 1.45</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">$61.62</p>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-pink-400">
<span className="iconify" data-icon="lucide:donut" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Glazed Ring</p>
<p className="text-xs text-zinc-500">Bakery Item</p>
</div>
</div>

<div className="flex items-center gap-3 bg-zinc-950 rounded-full border border-zinc-800 px-1 py-1">
<button className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 transition-colors">
<span className="iconify" data-icon="lucide:minus" data-strokeWidth="1.5" data-width="12"></span>
</button>
<span className="text-xs font-medium text-white w-2 text-center">2</span>
<button className="w-6 h-6 rounded-full bg-zinc-100 hover:bg-white flex items-center justify-center text-black transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="12"></span>
</button>
</div>
</div>
</div>

<div className="border-t border-zinc-800 pt-4 mb-4">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Amount</p>
<p className="text-3xl font-medium tracking-tight text-white">$65.12</p>
</div>
<div className="flex flex-col items-end">
<p className="text-xs text-zinc-500 mb-1">Items</p>
<p className="text-sm font-medium text-zinc-300">3</p>
</div>
</div>

<button className="w-full group relative overflow-hidden rounded-2xl bg-white text-black py-4 px-6 font-medium text-lg tracking-tight transition-transform active:scale-[0.99]">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Pay Securely
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="20"></span>
</span>

<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent skew-x-12"></div>
</button>
</div>
<div className="flex justify-center gap-6 mt-4">
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
<span className="iconify" data-icon="lucide:circle-help" data-width="14"></span>
                    Help
                 </button>
<button className="text-xs text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-1">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
                    Cancel Order
                 </button>
</div>
</div>
</footer>



    </>
  );
}
