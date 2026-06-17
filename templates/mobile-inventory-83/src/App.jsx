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
colors: {
brand: {
50: '#fdf2f3',
100: '#fde6e8',
200: '#fbd0d5',
300: '#f7aab2',
400: '#f27a88',
500: '#e94b5f',
600: '#d52941',
700: '#B11226', /* Primary Deep Red */
800: '#931222',
900: '#7a1421',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        function switchScreen(screenId) {
            // Hide all screens
            const screens = ['screen-inventory', 'screen-add', 'screen-details', 'screen-analytics', 'screen-settings'];
            screens.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
                if(el) el.classList.remove('block');
            });

            // Show target screen
            const target = document.getElementById(screenId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                
                // Scroll to top
                document.getElementById('main-container').scrollTop = 0;
            }
        }

        function switchTab(screenId, btnElement) {
            switchScreen(screenId);
            
            // Reset nav styles
            document.querySelectorAll('.nav-item').forEach(btn => {
                btn.className = "nav-item flex flex-col items-center gap-1 w-12 text-gray-400 hover:text-gray-600 transition-colors";
                const icon = btn.querySelector('iconify-icon');
                const text = btn.querySelector('span');
                // Set icon to linear version generally
                let iconName = icon.getAttribute('icon');
                if(iconName.includes('-bold')) {
                    icon.setAttribute('icon', iconName.replace('-bold', '-linear'));
                }
                text.classList.remove('font-semibold');
                text.classList.add('font-medium');
            });

            // Set active style
            btnElement.className = "nav-item flex flex-col items-center gap-1 w-12 text-brand-700 animate-pulse-once";
            const activeIcon = btnElement.querySelector('iconify-icon');
            const activeText = btnElement.querySelector('span');
            
            // Change to bold icon for active state
            let activeIconName = activeIcon.getAttribute('icon');
            if(activeIconName.includes('-linear')) {
                activeIcon.setAttribute('icon', activeIconName.replace('-linear', '-bold'));
            }
            
            activeText.classList.remove('font-medium');
            activeText.classList.add('font-semibold');
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
      

<div className="relative w-full max-w-[400px] h-[850px] bg-gray-50 rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 flex flex-col">

<div className="absolute top-0 w-full px-6 pt-3 pb-2 flex justify-between items-center z-50 bg-gradient-to-b from-white/90 to-transparent">
<span className="text-xs font-semibold text-gray-900 tracking-tight">9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-900 text-xs" icon="solar:signal-stream-linear"></iconify-icon>
<iconify-icon className="text-gray-900 text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-gray-900 text-sm" icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 relative bg-gray-50" id="main-container">

<div className="animate-fade-in block" id="screen-inventory">

<div className="sticky top-0 bg-gray-50/95 backdrop-blur-sm z-30 px-6 pt-12 pb-4">
<div className="flex justify-between items-center mb-6">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-0.5">Warehouse A</p>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Inventory</h1>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50 transition active:scale-95 shadow-sm relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-brand-700 rounded-full"></span>
</button>
</div>

<div className="relative mb-4 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-brand-700 transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all shadow-sm placeholder-gray-400 text-gray-900 font-medium" placeholder="Search product, SKU..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<button className="p-1 rounded bg-gray-100 text-gray-500">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="px-4 py-1.5 bg-brand-700 text-white rounded-full text-xs font-medium shadow-md shadow-brand-700/20 whitespace-nowrap">All Items</button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-50 whitespace-nowrap transition-colors">Low Stock</button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-50 whitespace-nowrap transition-colors">Electronics</button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-50 whitespace-nowrap transition-colors">Furniture</button>
</div>
</div>

<div className="px-6 space-y-3 pb-8">

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-transform cursor-pointer flex items-center gap-4" onclick="switchScreen('screen-details')">
<div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:laptop-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-gray-900 truncate tracking-tight">MacBook Pro M2</h3>
<span className="bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-100">In Stock</span>
</div>
<p className="text-xs text-gray-500 mb-2 font-medium tracking-tight">SKU: MB-2023-SL</p>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Stock</p>
<p className="text-sm font-semibold text-gray-900">124 <span className="text-xs font-normal text-gray-400">units</span></p>
</div>
<p className="text-sm font-semibold text-brand-700">$1,299</p>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-transform cursor-pointer flex items-center gap-4 relative overflow-hidden" onclick="switchScreen('screen-details')">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"></div> 
<div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:headphones-round-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-gray-900 truncate tracking-tight">Sony WH-1000XM5</h3>
<span className="bg-orange-50 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-orange-100">Low Stock</span>
</div>
<p className="text-xs text-gray-500 mb-2 font-medium tracking-tight">SKU: SN-XM5-BLK</p>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Stock</p>
<p className="text-sm font-semibold text-gray-900">4 <span className="text-xs font-normal text-gray-400">units</span></p>
</div>
<p className="text-sm font-semibold text-brand-700">$348</p>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-transform cursor-pointer flex items-center gap-4" onclick="switchScreen('screen-details')">
<div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:keyboard-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-gray-900 truncate tracking-tight">Keychron Q1 Pro</h3>
<span className="bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-100">In Stock</span>
</div>
<p className="text-xs text-gray-500 mb-2 font-medium tracking-tight">SKU: KC-Q1-WHT</p>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Stock</p>
<p className="text-sm font-semibold text-gray-900">42 <span className="text-xs font-normal text-gray-400">units</span></p>
</div>
<p className="text-sm font-semibold text-brand-700">$199</p>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-transform cursor-pointer flex items-center gap-4 relative overflow-hidden opacity-80" onclick="switchScreen('screen-details')">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400"></div>
<div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:mouse-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-gray-900 truncate tracking-tight">Logitech MX Master</h3>
<span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-gray-200">Out of Stock</span>
</div>
<p className="text-xs text-gray-500 mb-2 font-medium tracking-tight">SKU: LG-MX3-GRY</p>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Stock</p>
<p className="text-sm font-semibold text-gray-900">0 <span className="text-xs font-normal text-gray-400">units</span></p>
</div>
<p className="text-sm font-semibold text-brand-700">$99</p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 right-6 z-40">
<button className="w-14 h-14 bg-brand-700 text-white rounded-full shadow-xl shadow-brand-700/40 flex items-center justify-center active:scale-90 transition-transform" onclick="switchScreen('screen-add')">
<iconify-icon icon="solar:add-linear" strokeWidth="2" width="32"></iconify-icon>
</button>
</div>
</div>

<div className="hidden animate-fade-in bg-white min-h-full" id="screen-add">

<div className="flex items-center gap-4 px-6 pt-12 pb-6 border-b border-gray-100">
<button className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-900" onclick="switchScreen('screen-inventory')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Add New Item</h2>
</div>
<div className="p-6 space-y-6">

<div className="w-full h-40 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:border-brand-300 hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:camera-add-linear" width="32"></iconify-icon>
<span className="text-xs font-medium">Upload Product Image</span>
</div>

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">Product Name</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all text-gray-900 font-medium" placeholder="e.g. Ergonomic Chair" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">SKU</label>
<div className="relative">
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all text-gray-900 font-medium" type="text" value="AUT-8821"/>
<button className="absolute right-3 top-3 text-brand-700">
<iconify-icon icon="solar:refresh-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">Category</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all text-gray-900 font-medium appearance-none">
<option>Select...</option>
<option>Electronics</option>
<option>Furniture</option>
<option>Office</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">Stock Quantity</label>
<div className="flex items-center gap-4 bg-gray-50 rounded-xl border border-gray-200 p-2">
<button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 active:scale-95 transition-transform">
<iconify-icon icon="solar:minus-linear" width="20"></iconify-icon>
</button>
<input className="flex-1 bg-transparent text-center font-semibold text-gray-900 text-lg focus:outline-none" type="number" value="1"/>
<button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-brand-700 active:scale-95 transition-transform">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">Cost Price</label>
<div className="relative">
<span className="absolute left-4 top-3 text-gray-400 text-sm font-medium">$</span>
<input className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all text-gray-900 font-medium" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide ml-1">Selling Price</label>
<div className="relative">
<span className="absolute left-4 top-3 text-gray-400 text-sm font-medium">$</span>
<input className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700 transition-all text-gray-900 font-medium" placeholder="0.00" type="number"/>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 pb-8 rounded-b-[2rem]">
<button className="w-full py-3.5 bg-brand-700 text-white rounded-xl font-semibold text-sm shadow-lg shadow-brand-700/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onclick="switchScreen('screen-inventory')">
<span>Add Item to Inventory</span>
</button>
</div>
</div>

<div className="hidden animate-fade-in bg-white min-h-full" id="screen-details">

<div className="flex items-center justify-between px-6 pt-12 pb-4">
<button className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-900" onclick="switchScreen('screen-inventory')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-gray-50 text-gray-600">
<iconify-icon icon="solar:history-linear" width="22"></iconify-icon>
</button>
<button className="p-2 rounded-full hover:bg-red-50 text-red-600">
<iconify-icon icon="solar:trash-bin-linear" width="22"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 flex flex-col items-center border-b border-gray-50 pb-6">
<div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
<iconify-icon className="text-gray-400" icon="solar:headphones-round-linear" width="48"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight text-center">Sony WH-1000XM5</h2>
<p className="text-sm text-gray-500 font-medium mt-1">Electronics • SKU: SN-XM5-BLK</p>
<span className="mt-3 bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-100">Low Stock Alert</span>
</div>

<div className="p-6 space-y-6">

<div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-semibold text-gray-700">Current Stock</span>
<span className="text-xs text-gray-400 font-medium">Last updated: 2h ago</span>
</div>
<div className="flex items-center justify-between gap-6">
<button className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:minus-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold text-gray-900 tracking-tight">4</span>
<span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Units</span>
</div>
<button className="w-12 h-12 bg-brand-700 rounded-xl shadow-lg shadow-brand-700/20 border border-transparent flex items-center justify-center text-white active:scale-90 transition-transform">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Cost Price</p>
<p className="text-lg font-semibold text-gray-900">$210.00</p>
</div>
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Selling Price</p>
<p className="text-lg font-semibold text-brand-700">$348.00</p>
</div>
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Supplier</p>
<p className="text-sm font-semibold text-gray-900 truncate">Sony Electronics Inc.</p>
</div>
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Location</p>
<p className="text-sm font-semibold text-gray-900">Aisle 4, Shelf B</p>
</div>
</div>
</div>
<div className="px-6 pb-20">
<button className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-sm shadow-lg active:scale-[0.98] transition-all">
                        Update Details
                    </button>
</div>
</div>

<div className="hidden animate-fade-in block pb-8" id="screen-analytics">

<div className="px-6 pt-12 pb-6 bg-white border-b border-gray-100">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Analytics</h1>
<p className="text-sm text-gray-500 font-medium mt-1">Overview for October 2023</p>
</div>
<div className="p-6 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-brand-50 rounded-lg text-brand-700">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+12%</span>
</div>
<p className="text-2xl font-bold text-gray-900 tracking-tight">1,248</p>
<p className="text-xs text-gray-500 font-medium">Total Products</p>
</div>
<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<iconify-icon icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-2xl font-bold text-gray-900 tracking-tight">18</p>
<p className="text-xs text-gray-500 font-medium">Low Stock Items</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-gray-900">Stock Levels</h3>
<button className="text-xs text-brand-700 font-semibold">View Report</button>
</div>
<div className="h-32 flex items-end justify-between gap-2 px-1">

<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-brand-100 rounded-t-md relative group h-20 transition-all hover:bg-brand-200">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">80%</div>
</div>
<span className="text-[10px] text-gray-400 font-medium">Mon</span>
</div>

<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-brand-200 rounded-t-md relative group h-12 transition-all hover:bg-brand-300"></div>
<span className="text-[10px] text-gray-400 font-medium">Tue</span>
</div>

<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-brand-700 rounded-t-md relative group h-24 transition-all shadow-md shadow-brand-700/20"></div>
<span className="text-[10px] text-gray-900 font-bold">Wed</span>
</div>

<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-brand-100 rounded-t-md relative group h-16 transition-all hover:bg-brand-200"></div>
<span className="text-[10px] text-gray-400 font-medium">Thu</span>
</div>

<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-brand-100 rounded-t-md relative group h-20 transition-all hover:bg-brand-200"></div>
<span className="text-[10px] text-gray-400 font-medium">Fri</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-4">Recent Movement</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs">
<iconify-icon icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-gray-900">Stock Added</p>
<p className="text-[10px] text-gray-500">MacBook Pro M2</p>
</div>
<span className="text-xs font-semibold text-green-600">+50</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-gray-900">Order Shipped</p>
<p className="text-[10px] text-gray-500">Sony WH-1000XM5</p>
</div>
<span className="text-xs font-semibold text-gray-900">-2</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in bg-white min-h-full" id="screen-settings">
<div className="px-6 pt-12 pb-6 border-b border-gray-100">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Settings</h1>
</div>
<div className="p-6">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900">Alex Morgan</h3>
<p className="text-xs text-gray-500">Warehouse Manager</p>
</div>
</div>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Account</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:bell-bing-linear" width="22"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Notifications</span>
</div>
<div className="w-8 h-4 bg-brand-700 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</button>
<button className="w-full flex items-center justify-between p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:settings-linear" width="22"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Preferences</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 pb-8 z-50 flex justify-between items-center glass-panel">
<button className="nav-item flex flex-col items-center gap-1 w-12 text-brand-700" onclick="switchTab('screen-inventory', this)">
<iconify-icon icon="solar:box-bold" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">Stock</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 w-12 text-gray-400 hover:text-gray-600 transition-colors" onclick="switchTab('screen-analytics', this)">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Stats</span>
</button>

<div className="w-12"></div>
<button className="nav-item flex flex-col items-center gap-1 w-12 text-gray-400 hover:text-gray-600 transition-colors" onclick="switchTab('screen-inventory', this)">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 w-12 text-gray-400 hover:text-gray-600 transition-colors" onclick="switchTab('screen-settings', this)">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>

<div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border-[1px] border-white/20 z-[100]"></div>
</div>


    </>
  );
}
