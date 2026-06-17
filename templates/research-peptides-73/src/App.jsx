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



                    window.handleCategoryClick = function(el) {
                        const container = el.parentElement;
                        Array.from(container.children).forEach(child => {
                            const icon = child.firstElementChild;
                            const dot = child.lastElementChild.classList.contains('dot-indicator') ? child.lastElementChild : null;
                            if (child === el) {
                                child.className = "flex flex-col items-center gap-1 relative cursor-pointer transition-all duration-300 opacity-100 min-w-[60px]";
                                icon.className = "w-14 h-14 rounded-2xl bg-gradient-to-b from-[#046bd2] to-[#00618a] flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25 transform scale-105 transition-all";
                                if (!dot) {
                                    const newDot = document.createElement('div');
                                    newDot.className = "dot-indicator w-1 h-1 bg-blue-400 rounded-full absolute -bottom-2";
                                    child.appendChild(newDot);
                                }
                            } else {
                                child.className = "flex flex-col items-center gap-1 hover:opacity-100 transition opacity-50 cursor-pointer min-w-[60px]";
                                icon.className = "flex text-2xl text-white bg-white/5 w-14 h-14 border-white/5 border rounded-2xl items-center justify-center transition-all";
                                if (dot) dot.remove();
                            }
                        });
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
      

<div className="fixed pointer-events-none z-0 top-0 right-0 bottom-0 left-0">
<div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#046bd2]/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#00618a]/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl relative gap-x-12 gap-y-12 items-start">

<div className="overflow-hidden flex flex-col bg-[#1c1e26]/60 w-full h-[780px] max-w-[360px] border-white/10 border rounded-[3rem] mr-auto ml-auto relative shadow-2xl backdrop-blur-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#046bd2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

<div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/60 text-xs font-medium z-20 select-none">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-6 py-6 flex items-center justify-between z-20">
<button className="flex items-center gap-3 text-left group focus:outline-none transition-all">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#046bd2] to-[#00618a] p-[1px]">
<div className="w-full h-full rounded-full bg-[#1c1e26] flex items-center justify-center">
<span className="text-white font-medium text-lg">TR</span>
</div>
</div>
<div className="">
<h2 className="text-white text-base font-medium tracking-tight group-hover:text-blue-400 transition-colors">Lab Account</h2>
<p className="text-white/40 text-xs mt-0.5">ID: #8829-RUO</p>
</div>
</button>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-all">
<iconify-icon className="text-white/60 text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
</div>

<div className="px-4 z-20 space-y-1">
<h3 className="px-3 py-2 text-white/30 text-[10px] uppercase tracking-wider font-semibold select-none">Dashboard</h3>

<button className="w-full text-left relative overflow-hidden flex items-center justify-between p-3 rounded-2xl cursor-pointer active:scale-[0.98] transition-all shadow-lg shadow-blue-900/10 group">
<div className="absolute inset-0 bg-gradient-to-r from-[#046bd2]/80 to-[#00618a]/80 opacity-100"></div>
<div className="relative flex items-center gap-4 z-10">
<div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner">
<iconify-icon className="text-lg" icon="solar:bag-check-linear"></iconify-icon>
</div>
<span className="text-white text-base font-normal">My Orders</span>
</div>
<iconify-icon className="text-white/80 z-10 text-base group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full text-left group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-lg" icon="solar:file-check-linear"></iconify-icon>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">COA Certificates</span>
</div>
<iconify-icon className="text-white/30 text-base group-hover:text-white/50 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full text-left group flex hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Wishlist</span>
</div>
<span className="bg-white/10 text-white/70 text-[10px] font-medium px-2 py-0.5 rounded-full">4</span>
</button>
</div>
<div className="my-4 h-px bg-white/5 mx-6"></div>

<div className="z-20 px-4 space-y-1">
<h3 className="px-3 py-2 text-white/30 text-[10px] uppercase tracking-wider font-semibold select-none">Affiliate</h3>
<button className="w-full text-left group flex hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Join Program</span>
</div>
<iconify-icon className="text-white/30 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left group flex hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-lg" icon="solar:login-linear"></iconify-icon>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Affiliate Login</span>
</div>
<iconify-icon className="text-white/30 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-auto px-6 pb-8 z-20">
<div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-500/20 rounded-2xl p-4 relative overflow-hidden">
<div className="relative z-10">
<p className="text-blue-200 text-xs font-medium mb-1">US Orders $200+</p>
<h4 className="text-white text-lg font-medium tracking-tight">Free Shipping</h4>
<div className="w-full bg-blue-900/50 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-blue-400 h-full w-3/4 rounded-full"></div>
</div>
</div>
<iconify-icon className="absolute -bottom-2 -right-2 text-6xl text-white/5 rotate-12" icon="solar:box-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full pointer-events-none"></div>
</div>

<div className="overflow-hidden flex flex-col bg-[#1c1e26]/60 w-full h-[780px] max-w-[360px] border-white/10 border rounded-[3rem] mr-auto ml-auto relative shadow-2xl backdrop-blur-2xl">

<div className="flex justify-between items-center px-6 pt-5 pb-4 text-white/60 text-xs font-medium z-20">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-5 mb-4 z-20 flex justify-between items-center">
<img alt="Triantex" className="h-8 object-contain brightness-0 invert opacity-90" src="https://triantex.com/wp-content/uploads/2025/10/cropped-logo-1-259x87.webp"/>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 hover:bg-white/10 transition">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
</div>

<div className="overflow-x-auto no-scrollbar z-20 mb-6 px-5">

<div className="flex gap-4">

<div className="flex flex-col items-center gap-1 relative cursor-pointer opacity-100 min-w-[60px]" onclick="window.handleCategoryClick(this)">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#046bd2] to-[#00618a] flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25 transform scale-105">
<iconify-icon icon="solar:atom-linear"></iconify-icon>
</div>
<span className="text-[10px] text-white font-medium mt-1">GLP-1</span>
<div className="dot-indicator w-1 h-1 bg-blue-400 rounded-full absolute -bottom-2"></div>
</div>

<div className="flex flex-col items-center gap-1 hover:opacity-100 transition opacity-50 cursor-pointer min-w-[60px]" onclick="window.handleCategoryClick(this)">
<div className="flex text-2xl text-white bg-white/5 w-14 h-14 border-white/5 border rounded-2xl items-center justify-center">
<iconify-icon icon="solar:test-tube-linear"></iconify-icon>
</div>
<span className="text-[10px] text-white font-medium mt-1">Peptides</span>
</div>

<div className="flex flex-col items-center gap-1 hover:opacity-100 transition opacity-50 cursor-pointer min-w-[60px]" onclick="window.handleCategoryClick(this)">
<div className="flex text-2xl text-white bg-white/5 w-14 h-14 border-white/5 border rounded-2xl items-center justify-center">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-[10px] text-white font-medium mt-1">Bundles</span>
</div>

<div className="flex flex-col items-center gap-1 hover:opacity-100 transition opacity-50 cursor-pointer min-w-[60px]" onclick="window.handleCategoryClick(this)">
<div className="flex text-2xl text-white bg-white/5 w-14 h-14 border-white/5 border rounded-2xl items-center justify-center">
<iconify-icon icon="solar:bottle-linear"></iconify-icon>
</div>
<span className="text-[10px] text-white font-medium mt-1">Liquids</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24 z-10 px-5 space-y-5">

<div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden group border border-white/5">
<img alt="Semaglutide" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 object-top" src="https://triantex.com/wp-content/uploads/2025/10/Semaglutide-sample-2-503x1024.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/40 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5">
<div className="flex items-center gap-2 mb-2">
<span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded text-center uppercase tracking-wide backdrop-blur-sm">US Verified</span>
<span className="bg-white/10 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">99% Purity</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight leading-tight">Next Gen Research Peptides</h3>
<p className="text-white/60 text-xs mt-1 font-light">Formulated for precision &amp; scientific progress.</p>
</div>
</div>

<div className="flex justify-between items-end mt-2">
<h3 className="text-white text-lg font-medium">Best Sellers</h3>
<button className="text-blue-400 text-xs hover:text-blue-300">View All</button>
</div>

<div className="space-y-3">

<div className="flex p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
<div className="w-20 h-20 rounded-xl bg-white/5 overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://triantex.com/wp-content/uploads/2025/10/tirze-20-300x300.webp"/>
</div>
<div className="ml-4 flex flex-col justify-center flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white text-sm font-medium">GLP-T 20mg</h4>
<p className="text-white/40 text-[10px] mt-0.5">Tirzepatide • Vial</p>
</div>
<span className="text-white font-medium text-sm">$168.00</span>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">In Stock</span>
</div>
</div>
<div className="flex items-center justify-center w-8 text-white/20 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
<div className="w-20 h-20 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://triantex.com/wp-content/uploads/2025/10/sema-10-300x300.webp"/>
</div>
<div className="ml-4 flex flex-col justify-center flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white text-sm font-medium">GLP-S 10mg</h4>
<p className="text-white/40 text-[10px] mt-0.5">Semaglutide • Vial</p>
</div>
<span className="text-white font-medium text-sm">$148.00</span>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">In Stock</span>
</div>
</div>
<div className="flex items-center justify-center w-8 text-white/20 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
<div className="w-20 h-20 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://triantex.com/wp-content/uploads/2025/10/NAD-500-300x300.webp"/>
</div>
<div className="ml-4 flex flex-col justify-center flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white text-sm font-medium">NAD+ 500mg</h4>
<p className="text-white/40 text-[10px] mt-0.5">Peptide • Vial</p>
</div>
<div className="text-right">
<span className="text-white font-medium text-sm block">$79.99</span>
</div>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">In Stock</span>
</div>
</div>
<div className="flex items-center justify-center w-8 text-white/20 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="-translate-x-1/2 flex z-30 bg-[#181a22]/90 w-[85%] h-16 border-white/10 border rounded-full pr-2 pl-2 absolute bottom-8 left-1/2 shadow-2xl backdrop-blur-xl items-center justify-between" onclick="const t=event.target.closest('button');if(t){this.querySelectorAll('button').forEach(b=&gt;b.className='w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition');t.className='w-12 h-12 rounded-full bg-[#046bd2] flex items-center justify-center text-white shadow-lg shadow-blue-600/30'}">
<button className="w-12 h-12 rounded-full bg-[#046bd2] flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<iconify-icon className="text-xl" icon="solar:cart-large-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>

<div className="relative w-full max-w-[360px] mx-auto h-[780px] rounded-[3rem] border border-white/10 bg-[#1c1e26]/60 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/60 text-xs font-medium z-20">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between z-20">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-xl" icon="solar:share-linear"></iconify-icon>
</button>
</div>

<div className="relative z-10 -mt-8 flex justify-center">
<div className="w-64 h-64 relative">
<div className="absolute inset-0 bg-[#046bd2]/20 blur-[60px] rounded-full"></div>
<img alt="Product" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" src="https://triantex.com/wp-content/uploads/2025/10/tirze-20-300x300.webp"/>
</div>
</div>

<div className="flex-1 bg-white/5 backdrop-blur-xl border-t border-white/10 rounded-t-[2.5rem] mt-4 p-6 relative overflow-y-auto no-scrollbar">
<div className="flex justify-between items-start mb-2">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">GLP-T 20mg</h2>
<p className="text-blue-400 text-sm font-medium mt-1">Tirzepatide</p>
</div>
<div className="text-right">
<h3 className="text-xl font-semibold text-white">$168.00</h3>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-4 mb-6">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70 uppercase tracking-wider">99% Purity</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70 uppercase tracking-wider">Third-Party Tested</span>
<span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-[10px] text-blue-300 uppercase tracking-wider">Vial</span>
</div>

<div className="space-y-4">
<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-red-400 text-lg" icon="solar:shield-warning-linear"></iconify-icon>
<h4 className="text-red-400 text-xs font-bold uppercase">Research Use Only</h4>
</div>
<p className="text-white/60 text-xs leading-relaxed">
                            This product is strictly intended for laboratory research purposes. It is not for human or animal consumption, diagnostic, or therapeutic use.
                        </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-2">Description</h4>
<p className="text-white/50 text-sm leading-relaxed">
                            High-purity Tirzepatide formulated for precision and stability. Each batch undergoes rigorous independent third-party testing to ensure scientific integrity.
                        </p>
</div>

<div className="flex items-center justify-between mt-6 bg-white/5 rounded-2xl p-2 border border-white/5">
<span className="text-white/60 text-sm ml-3 font-medium">Quantity</span>
<div className="flex items-center bg-[#1c1e26] rounded-xl p-1">
<button className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition" onclick="const n = this.nextElementSibling; if(n.innerText &gt; 1) n.innerText = parseInt(n.innerText) - 1">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<span className="w-8 text-center text-white font-medium">1</span>
<button className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition" onclick="const n = this.previousElementSibling; n.innerText = parseInt(n.innerText) + 1">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="h-24"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#13161c] to-transparent z-20">
<button className="w-full bg-[#046bd2] hover:bg-[#0358ad] text-white text-base font-medium py-4 rounded-[1.2rem] shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group">
<span>Add to Cart</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:cart-large-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
</div>
</div>

    </>
  );
}
