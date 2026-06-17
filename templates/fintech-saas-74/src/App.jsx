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



        // DOM Elements
        const volumeSlider = document.getElementById('volume-slider');
        const volumeDisplay = document.getElementById('volume-display');
        const volumeProgress = document.getElementById('volume-progress');
        
        const feeSlider = document.getElementById('fee-slider');
        const feeInput = document.getElementById('fee-input');
        const feeProgress = document.getElementById('fee-progress');
        
        const intlCheck = document.getElementById('intl-check');
        
        const savingsDisplay = document.getElementById('savings-display');
        const currentCostDisplay = document.getElementById('current-cost-display');
        const novaCostDisplay = document.getElementById('nova-cost-display');

        // Constants
        const NOVA_BASE_RATE = 0.018; // 1.8%
        const NOVA_FIXED_FEE = 0.10; // $0.10
        const INTL_SURCHARGE = 0.005; // +0.5%
        
        function formatCurrency(num) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
        }

        function calculate() {
            // Get Values
            let volume = parseFloat(volumeSlider.value);
            let userRate = parseFloat(feeSlider.value) / 100;
            let isIntl = intlCheck.checked;

            // Nova Logic
            let novaRate = NOVA_BASE_RATE;
            if (isIntl) novaRate += INTL_SURCHARGE;
            
            // Assuming average transaction size of $50 for estimation
            const avgTxSize = 50;
            const txCount = volume / avgTxSize;
            
            // Calculate Costs
            const currentCost = (volume * userRate) + (txCount * 0.30); // Assuming standard 30c fixed fee for competitor
            const novaCost = (volume * novaRate) + (txCount * NOVA_FIXED_FEE);
            
            const savings = currentCost - novaCost;

            // Update UI Displays
            volumeDisplay.innerText = formatCurrency(volume);
            currentCostDisplay.innerText = formatCurrency(currentCost * 12); // Annualized
            novaCostDisplay.innerText = formatCurrency(novaCost * 12); // Annualized
            
            // Animate Savings Number slightly
            savingsDisplay.innerText = formatCurrency(savings * 12); // Annual Savings

            // Update Progress Bars
            const volPercent = ((volume - volumeSlider.min) / (volumeSlider.max - volumeSlider.min)) * 100;
            volumeProgress.style.width = `${volPercent}%`;

            const feePercent = ((feeSlider.value - feeSlider.min) / (feeSlider.max - feeSlider.min)) * 100;
            feeProgress.style.width = `${feePercent}%`;
        }

        // Event Listeners
        volumeSlider.addEventListener('input', calculate);
        feeSlider.addEventListener('input', () => {
            feeInput.value = feeSlider.value;
            calculate();
        });
        feeInput.addEventListener('change', () => {
            // Clamp value
            let val = parseFloat(feeInput.value);
            if(val > 5) val = 5;
            if(val < 1) val = 1;
            feeInput.value = val;
            feeSlider.value = val;
            calculate();
        });
        intlCheck.addEventListener('change', calculate);

        // Initialize
        calculate();

        // Add smooth entering animation to elements
        document.addEventListener("DOMContentLoaded", () => {
             // Quick number animation on load
             let start = 0;
             const end = 17400; // Simulated savings
             const duration = 1000;
             const element = document.getElementById('savings-display');
             
             // Just trigger initial calc to set defaults
             calculate();
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
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium text-white tracking-tight">NOVA</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-white transition-colors font-medium" href="#">Product</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Get Started
                </button>
</div>
</div>
</nav>

<header className="z-10 pt-32 pr-6 pb-16 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 animate-fade-in border border-indigo-500/20">
<span className="text-indigo-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calculator" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg></span>
<span className="text-xs font-medium text-indigo-300 tracking-wide">Interactive Pricing</span>
</div>
<h1 className="md:text-6xl animate-fade-in text-4xl font-medium text-white tracking-tight mb-6" style={{animationDelay: '0.1s'}}>Calculate your <span className="text-gradient-indigo">growth potential</span>.</h1>
<p className="leading-relaxed animate-fade-in text-lg font-light text-neutral-400 max-w-xl mr-auto mb-10 ml-auto" style={{animationDelay: '0.2s'}}>
                See how much you can save by switching to Nova's unified financial infrastructure. Real-time estimates based on your volume.
            </p>
</div>
</header>

<main className="relative z-10 pb-24 px-4 md:px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-7 animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="glass-panel md:p-10 overflow-hidden rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="flex mb-10 items-start justify-between">
<div className="">
<h3 className="text-xl font-medium text-white mb-2" style={{}}>Configure Parameters</h3>
<p className="text-sm text-neutral-500">Adjust the sliders to match your current business metrics.</p>
</div>
<div className="bg-white/5 rounded-lg p-1 flex items-center border border-white/10">
<button className="px-3 py-1 rounded-md text-xs font-medium bg-white/10 text-white shadow-sm">USD</button>
<button className="hover:text-white transition-colors text-xs font-medium text-neutral-500 rounded-md pt-1 pr-3 pb-1 pl-3">EUR</button>
<button className="hover:text-white transition-colors text-xs font-medium text-neutral-500 rounded-md pt-1 pr-3 pb-1 pl-3">GBP</button>
</div>
</div>

<div className="mb-12 group">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:bar-chart-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Monthly Processing Volume
                                </label>
<div className="text-white font-mono bg-white/5 border border-white/10 px-3 py-1 rounded text-sm min-w-[120px] text-right" id="volume-display">$500,000</div>
</div>
<div className="relative h-6 flex items-center">
<div className="absolute w-full h-1 bg-white/10 rounded-full"></div>
<div className="absolute h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" id="volume-progress" style={{width: '49.4949%'}}></div>
<input className="relative z-10 w-full" id="volume-slider" max="1000000" min="10000" step="5000" type="range" value="500000"/>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
<span>$10k</span>
<span>$1M+</span>
</div>
</div>

<div className="mb-12">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:percent" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 5L5 19"></path><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></g></svg>
                                    Current Provider Fee
                                </label>
<div className="flex items-center gap-2">
<input className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-right text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors" id="fee-input" step="0.1" type="number" value="2.9"/>
<span className="text-neutral-500 text-sm">%</span>
</div>
</div>
<div className="relative h-6 flex items-center">
<div className="absolute w-full h-1 bg-white/10 rounded-full"></div>
<div className="absolute h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" id="fee-progress" style={{width: '47.5%'}}></div>
<input className="relative z-10 w-full" id="fee-slider" max="5.0" min="1.0" step="0.1" type="range" value="2.9"/>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
<span>1%</span>
<span>5%</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<span className="text-sm text-neutral-300">International Cards</span>
</div>
<input className="accent-indigo-500 w-4 h-4 rounded bg-white/10 border-white/20 cursor-pointer" id="intl-check" type="checkbox"/>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-neutral-300">Instant Payouts</span>
</div>
<input checked="" className="accent-indigo-500 w-4 h-4 rounded bg-white/10 border-white/20 cursor-pointer" type="checkbox"/>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-fade-in sticky top-24" style={{animationDelay: '0.4s'}}>
<div className="glass border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden h-full flex flex-col justify-between group">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-600/30 transition-colors duration-500"></div>
<div className="">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-green-500 uppercase tracking-wide">Estimated Annual Savings</span>
</div>
<div className="mb-8">
<div className="text-6xl font-medium tracking-tight text-white mb-2" id="savings-display">$90,000</div>
<p className="text-sm text-neutral-400">That's a <span className="text-white font-medium">32%</span> reduction in fees compared to your current provider.</p>
</div>

<div className="space-y-4 mb-8">
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-sm text-neutral-400">Current Cost / Year</span>
<span className="text-sm font-medium text-white" id="current-cost-display">$210,000</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-sm text-neutral-400">Nova Cost / Year</span>
<span className="text-sm font-medium text-indigo-400" id="nova-cost-display">$120,000</span>
</div>
<div className="flex justify-between items-center py-3">
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-400">Effective Rate</span>
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:info" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
</div>
<span className="text-sm font-medium text-white">1.8% + 10¢</span>
</div>
</div>
</div>
<div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 mb-6">
<div className="flex gap-3">
<div className="mt-0.5">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div>
<p className="text-sm text-indigo-100 font-medium mb-1">Reinvest your profit</p>
<p className="text-xs text-indigo-300/80 leading-relaxed">
                                            With these savings, you could hire 2 more engineers or increase your ad spend by 15%.
                                        </p>
</div>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                                Get Started
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-6xl border-white/5 border-t mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-white mb-2">More than just lower fees</h2>
<p className="text-neutral-400 text-sm">Everything you need to manage your revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-indigo-400 transition-colors iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-white font-medium mb-2">Unified Dashboard</h3>
<p className="text-xs text-neutral-400 leading-relaxed">View all your transactions, payouts, and chargebacks in a single, real-time interface.</p>
</div>
<div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-indigo-400 transition-colors iconify--lucide" data-icon="lucide:code-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Developer First API</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Integrate in minutes with our robust, typed SDKs. Webhooks, sandboxes, and logs included.</p>
</div>
<div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-indigo-400 transition-colors iconify--lucide" data-icon="lucide:shield-alert" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Fraud Protection</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Machine learning models that detect and block fraudulent transactions before they happen.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-black">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-white rounded-full"></div>
<span className="text-xs text-neutral-500 font-medium">© 2024 Nova Finance Inc.</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
