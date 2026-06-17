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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function selectDelivery(element) {
            // Reset all cards to default inactive state
            document.querySelectorAll('.delivery-card').forEach(el => {
                el.classList.remove('border-purple-500', 'bg-purple-50/40', 'ring-1', 'ring-purple-500');
                el.classList.add('border-gray-100/80', 'bg-white');
                
                // Reset icon backgrounds and colors
                const iconContainer = el.querySelector('.delivery-icon');
                iconContainer.classList.remove('text-purple-600', 'bg-purple-100/50', 'border-purple-200');
                iconContainer.classList.add('text-gray-400', 'bg-gray-50', 'border-gray-100/50');
                
                // Reset radio circles
                const radio = el.querySelector('.delivery-radio');
                radio.classList.remove('border-purple-500');
                radio.classList.add('border-gray-200');
                
                // Hide inner active dot
                const dot = el.querySelector('.delivery-dot');
                dot.classList.remove('opacity-100');
                dot.classList.add('opacity-0');
            });

            // Activate the clicked card
            element.classList.remove('border-gray-100/80', 'bg-white');
            element.classList.add('border-purple-500', 'bg-purple-50/40', 'ring-1', 'ring-purple-500');
            
            const iconContainer = element.querySelector('.delivery-icon');
            iconContainer.classList.remove('text-gray-400', 'bg-gray-50', 'border-gray-100/50');
            iconContainer.classList.add('text-purple-600', 'bg-purple-100/50', 'border-purple-200');
            
            const radio = element.querySelector('.delivery-radio');
            radio.classList.remove('border-gray-200');
            radio.classList.add('border-purple-500');
            
            const dot = element.querySelector('.delivery-dot');
            dot.classList.remove('opacity-0');
            dot.classList.add('opacity-100');
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
      

<div className="bg-[#F8F9FB] w-full max-w-[400px] h-[850px] rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative ring-8 ring-white">

<header className="pt-12 pb-4 px-6 flex items-center justify-between z-10 sticky top-0 bg-[#F8F9FB]/90 backdrop-blur-md">
<button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<h1 className="text-base font-medium text-gray-900 tracking-tight">My Express Basket</h1>
<div className="flex flex-col items-center justify-center w-10 h-10 bg-purple-50 rounded-full text-purple-600 border border-purple-100">
<iconify-icon className="mb-0.5" height="16" icon="solar:bag-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium leading-none">0:00</span>
</div>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-52 space-y-6">

<div className="space-y-4">

<div className="bg-white p-4 rounded-[28px] shadow-sm border border-gray-100/80 flex gap-4 relative">
<div className="relative shrink-0">
<img alt="Sony Headphones" className="w-24 h-24 rounded-2xl object-cover bg-gray-50" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 text-white text-xs font-medium rounded-full flex items-center justify-center border-2 border-white shadow-sm">S</div>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Sony WH-1000XM5</h3>
<p className="text-xs text-gray-400 mt-1">Premium Wireless</p>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1">
<span className="text-xs text-gray-400">Size:</span>
<span className="text-xs font-medium text-gray-900">Standard</span>
</div>
<div className="flex items-center gap-1">
<span className="text-xs text-gray-400">Price:</span>
<span className="text-sm font-medium text-gray-900">1500 FCFA</span>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex items-center gap-3 bg-gray-50/80 rounded-full px-3 py-1.5 border border-gray-100">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center">
<iconify-icon height="16" icon="solar:minus-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<span className="text-sm font-medium text-gray-900 w-3 text-center">1</span>
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center">
<iconify-icon height="16" icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
<iconify-icon height="16" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-[28px] shadow-sm border border-gray-100/80 flex gap-4 relative">
<div className="relative shrink-0">
<img alt="Leather Jacket" className="w-24 h-24 rounded-2xl object-cover bg-gray-50" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 text-white text-xs font-medium rounded-full flex items-center justify-center border-2 border-white shadow-sm">S</div>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Leather Women's Jacket</h3>
<p className="text-xs text-gray-400 mt-1">Premium Fashion</p>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1">
<span className="text-xs text-gray-400">Size:</span>
<span className="text-xs font-medium text-gray-900">Standard</span>
</div>
<div className="flex items-center gap-1">
<span className="text-xs text-gray-400">Price:</span>
<span className="text-sm font-medium text-gray-900">1500 FCFA</span>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex items-center gap-3 bg-gray-50/80 rounded-full px-3 py-1.5 border border-gray-100">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center">
<iconify-icon height="16" icon="solar:minus-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<span className="text-sm font-medium text-gray-900 w-3 text-center">1</span>
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center">
<iconify-icon height="16" icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
<iconify-icon height="16" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h2 className="text-xs font-medium text-gray-500 tracking-widest px-1 uppercase mb-3">Step 1: Delivery Method</h2>

<button className="delivery-card w-full text-left bg-purple-50/40 p-4 rounded-[20px] shadow-sm border border-purple-500 ring-1 ring-purple-500 flex items-start gap-4 cursor-pointer transition-all" onclick="selectDelivery(this)">
<div className="delivery-icon w-10 h-10 rounded-full bg-purple-100/50 flex items-center justify-center shrink-0 border border-purple-200 text-purple-600 transition-colors">
<iconify-icon height="22" icon="solar:shop-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex-1 pt-0.5">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Point Relais</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Pick it up yourself and save freight.</p>
</div>
<div className="delivery-radio w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
<div className="delivery-dot w-2.5 h-2.5 rounded-full bg-purple-500 opacity-100 transition-opacity"></div>
</div>
</button>

<button className="delivery-card w-full text-left bg-white p-4 rounded-[20px] shadow-sm border border-gray-100/80 flex items-start gap-4 cursor-pointer hover:border-gray-200 transition-all" onclick="selectDelivery(this)">
<div className="delivery-icon w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100/50 text-gray-400 transition-colors">
<iconify-icon height="22" icon="solar:home-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex-1 pt-0.5">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Home Delivery</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Delivered straight to your doorstep.</p>
</div>
<div className="delivery-radio w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
<div className="delivery-dot w-2.5 h-2.5 rounded-full bg-purple-500 opacity-0 transition-opacity"></div>
</div>
</button>

<button className="delivery-card w-full text-left bg-white p-4 rounded-[20px] shadow-sm border border-gray-100/80 flex items-start gap-4 cursor-pointer hover:border-gray-200 transition-all" onclick="selectDelivery(this)">
<div className="delivery-icon w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100/50 text-gray-400 transition-colors">
<iconify-icon height="22" icon="solar:routing-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex-1 pt-0.5">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Different City</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Shipping to a different city/region.</p>
</div>
<div className="delivery-radio w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
<div className="delivery-dot w-2.5 h-2.5 rounded-full bg-purple-500 opacity-0 transition-opacity"></div>
</div>
</button>
</div>

<div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100/80 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Total Items</span>
<span className="text-sm font-medium text-gray-900">12,000 FCFA</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500">Estimated freight</span>
<span className="text-xs px-2 py-1 bg-gray-50 text-gray-500 font-medium rounded border border-gray-100/80">Standard Rate</span>
</div>
<span className="text-sm font-medium text-gray-900">4,000 FCFA</span>
</div>
<div className="h-px w-full bg-gray-50"></div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-gray-900">Subtotal</span>
<span className="text-base font-semibold text-gray-900">16,000 FCFA</span>
</div>
</div>

<div className="bg-[#F9F7FF] border border-purple-100/60 p-5 rounded-[24px] relative">
<div className="flex items-start gap-3.5">
<div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-yellow-500 border border-yellow-100/50 mt-0.5">
<iconify-icon height="16" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 leading-relaxed pr-2">
<iconify-icon className="inline text-yellow-500 mr-0.5 align-text-bottom" height="14" icon="solar:lightbulb-bolt-bold" width="14"></iconify-icon>
                            You could save <span className="bg-purple-100/80 text-purple-700 font-medium px-1.5 py-0.5 rounded text-xs">1500 FCFA</span> on freight if you transform this basket into a Group!
                        </p>
<button className="mt-3.5 flex items-center gap-1.5 text-sm font-medium text-purple-600 bg-white border border-purple-100/50 px-3.5 py-2 rounded-xl shadow-sm hover:bg-purple-50 transition-colors">
                            Create Group Now
                            <iconify-icon height="14" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pointer-events-none">

<div className="px-6 w-full mb-6 pointer-events-auto">
<button className="w-full bg-gradient-to-r from-[#B060FF] to-[#FF7043] text-white p-1.5 rounded-[24px] shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all group">
<div className="flex items-center justify-between pl-5 pr-1.5 py-1">
<span className="text-sm font-medium">Validate my order</span>
<div className="bg-white/20 backdrop-blur-md border border-white/10 rounded-[18px] px-4 py-3 flex items-center gap-2">
<span className="text-sm font-medium tracking-wide">16,000 FCFA</span>
<iconify-icon className="opacity-90" height="16" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</button>
</div>

<nav className="w-full bg-white flex items-center justify-around py-3 rounded-b-[40px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] border-t border-gray-50 pointer-events-auto">

<button className="flex flex-col items-center justify-center w-14 h-14 relative text-[#B060FF]">
<div className="absolute inset-1.5 bg-purple-50 rounded-full"></div>
<iconify-icon className="relative z-10" height="24" icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="w-1 h-1 bg-[#B060FF] rounded-full absolute bottom-2"></div>
</button>

<button className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<button className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon height="24" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<button className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon height="24" icon="solar:user-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="w-full bg-white pb-2 flex justify-center rounded-b-[40px] pointer-events-auto">
<div className="w-1/3 h-1.5 bg-gray-900 rounded-full mt-1 mb-1"></div>
</div>
</div>
</div>


    </>
  );
}
