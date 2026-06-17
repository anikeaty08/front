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



        const startInput = document.getElementById('startLevel');
        const endInput = document.getElementById('endLevel');
        const startDisplay = document.getElementById('startLevelDisplay');
        const endDisplay = document.getElementById('endLevelDisplay');
        const priceDisplay = document.getElementById('totalPrice');
        const deliveryDisplay = document.getElementById('deliveryTime');
        const levelsGainedDisplay = document.getElementById('levelsGained');
        
        const startTrack = document.getElementById('startTrack');
        const endTrack = document.getElementById('endTrack');

        function updateUI() {
            let start = parseInt(startInput.value);
            let end = parseInt(endInput.value);

            // Constraint: End cannot be less than Start
            if (end <= start) {
                end = start + 1;
                if (end > 200) {
                    end = 200;
                    start = 199;
                }
                endInput.value = end;
                startInput.value = start;
            }

            // Update Text Displays
            startDisplay.textContent = start;
            endDisplay.textContent = end;
            levelsGainedDisplay.textContent = end - start;

            // Update Slider Visual Tracks
            const max = 200;
            const startPercent = (start / max) * 100;
            const endPercent = (end / max) * 100;
            
            startTrack.style.width = startPercent + '%';
            endTrack.style.width = endPercent + '%';

            // Calculate Price based on user tiers
            // 0-50: 10 levels = $1 ($0.10)
            // 50-100: 8 levels = $1 ($0.125)
            // 100-200: 5 levels = $1 ($0.20)
            
            let cost = 0;
            for (let i = start; i < end; i++) {
                // i is current level we are boosting FROM
                if (i < 50) {
                    cost += 0.10;
                } else if (i < 100) {
                    cost += 0.125;
                } else {
                    cost += 0.20;
                }
            }

            priceDisplay.textContent = cost.toFixed(2);

            // Update Delivery Time Logic
            // Level 1-100: 1 Day Max
            // Level 100-200: 3 Day Max
            // Logic: If the target level (end) is <= 100, it's 1 Day. If it crosses 100, it's 3 Days.
            if (end <= 100) {
                deliveryDisplay.textContent = "1 Day Max";
                deliveryDisplay.classList.add('text-green-400');
                deliveryDisplay.classList.remove('text-yellow-400');
            } else {
                deliveryDisplay.textContent = "3 Days Max";
                deliveryDisplay.classList.remove('text-green-400');
                deliveryDisplay.classList.add('text-yellow-400');
            }
        }

        // Event Listeners
        startInput.addEventListener('input', updateUI);
        endInput.addEventListener('input', updateUI);

        // Initial Call
        updateUI();
    
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-black flex items-center justify-center border border-white/10">
<span className="text-white font-bold text-xs">T99</span>
</div>
<span className="text-white font-medium tracking-tight">Sector T99</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#shop">Item Shop</a>
<a className="hover:text-white transition-colors" href="#forge">The Forge</a>
<a className="hover:text-white transition-colors" href="#delivery">Delivery Info</a>
</div>
<a className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-zinc-200 transition-colors" href="https://discord.gg/yourinvite" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
<span>Join Discord</span>
</a>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 md:pt-48">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                Active Service Status
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Your Gateway to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-200 to-white glow-text">Roblox Dominance</span>
</h1>
<p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
                Professional boosting for The Forge and secure item marketplace. 
                Fast delivery, vetted experts, and 24/7 Discord support.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)] flex items-center justify-center gap-2" href="#forge">
<span className="iconify" data-icon="lucide:flame" data-width="18"></span>
                    Start Boosting
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#shop">
                    Browse Items
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5" id="shop">
<div className="mb-12">
<h2 className="text-2xl text-white font-medium tracking-tight mb-2">Item Marketplace</h2>
<p className="text-sm text-zinc-500">Secure trades for top Roblox titles. View prices directly on Discord.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">

<div className="glass-panel p-5 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-zinc-700">
<span className="iconify text-zinc-300" data-icon="lucide:fish" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-1">Fisch</h3>
<p className="text-xs text-zinc-500 mb-6 line-clamp-2">Rare catches and equipment bundles available now.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="https://discord.gg/yourinvite" target="_blank">
                    View Pricing
                    <span className="iconify" data-icon="lucide:external-link" data-width="12"></span>
</a>
</div>

<div className="glass-panel p-5 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-zinc-700">
<span className="iconify text-zinc-300" data-icon="lucide:sword" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-1">Anime Last Stand</h3>
<p className="text-xs text-zinc-500 mb-6 line-clamp-2">Top tier units and evolution items.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="https://discord.gg/yourinvite" target="_blank">
                    View Pricing
                    <span className="iconify" data-icon="lucide:external-link" data-width="12"></span>
</a>
</div>

<div className="glass-panel p-5 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-zinc-700">
<span className="iconify text-zinc-300" data-icon="lucide:cat" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-1">Pet Sim 99</h3>
<p className="text-xs text-zinc-500 mb-6 line-clamp-2">Huge pets, diamonds, and exclusives.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="https://discord.gg/yourinvite" target="_blank">
                    View Pricing
                    <span className="iconify" data-icon="lucide:external-link" data-width="12"></span>
</a>
</div>

<div className="glass-panel p-5 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-zinc-700">
<span className="iconify text-zinc-300" data-icon="lucide:layout-grid" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-1">Build A Zoo</h3>
<p className="text-xs text-zinc-500 mb-6 line-clamp-2">Cash drops and rare blueprints.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="https://discord.gg/yourinvite" target="_blank">
                    View Pricing
                    <span className="iconify" data-icon="lucide:external-link" data-width="12"></span>
</a>
</div>

<div className="glass-panel p-5 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-zinc-700">
<span className="iconify text-zinc-300" data-icon="lucide:anchor" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-1">Fish It</h3>
<p className="text-xs text-zinc-500 mb-6 line-clamp-2">Automated farming and bait packs.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="https://discord.gg/yourinvite" target="_blank">
                    View Pricing
                    <span className="iconify" data-icon="lucide:external-link" data-width="12"></span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5" id="forge">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 text-red-500 mb-6">
<span className="iconify" data-icon="lucide:hammer" data-width="20"></span>
<span className="text-sm font-semibold tracking-wide uppercase">The Forge Boosting</span>
</div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">
                    Level up <br/> efficiently.
                </h2>
<p className="text-zinc-400 mb-10 leading-relaxed">
                    Custom boosting for "The Forge" on Roblox. Select your current level and desired goal. Our pricing adjusts dynamically based on difficulty tiers.
                </p>
<div className="space-y-4">
<div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-white text-sm font-medium">Starter (0-50)</span>
<span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">$0.10 / lvl</span>
</div>
<p className="text-xs text-zinc-500">10 Levels = $1.00</p>
</div>
<div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-white text-sm font-medium">Mid Game (50-100)</span>
<span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">$0.125 / lvl</span>
</div>
<p className="text-xs text-zinc-500">8 Levels = $1.00</p>
</div>
<div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-white text-sm font-medium">End Game (100-200)</span>
<span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">$0.20 / lvl</span>
</div>
<p className="text-xs text-zinc-500">5 Levels = $1.00</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-panel p-8 md:p-10 rounded-2xl relative shadow-2xl shadow-black/60 border border-zinc-800/60">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="space-y-12 mb-12">

<div className="relative group">
<div className="flex justify-between mb-4 items-end">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Start Level</label>
<div className="bg-black border border-zinc-800 px-4 py-1 rounded text-white font-mono text-lg w-20 text-center" id="startLevelDisplay">0</div>
</div>
<div className="relative h-6 flex items-center">
<div className="absolute w-full h-1 bg-zinc-800 rounded-full"></div>
<div className="absolute h-1 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-60" id="startTrack"></div>
<input className="absolute z-20 w-full focus:outline-none" id="startLevel" max="199" min="0" type="range" value="0"/>
</div>
</div>

<div className="relative group">
<div className="flex justify-between mb-4 items-end">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">End Level</label>
<div className="bg-black border border-zinc-800 px-4 py-1 rounded text-white font-mono text-lg w-20 text-center" id="endLevelDisplay">200</div>
</div>
<div className="relative h-6 flex items-center">
<div className="absolute w-full h-1 bg-zinc-800 rounded-full"></div>
<div className="absolute h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full" id="endTrack"></div>
<input className="absolute z-20 w-full focus:outline-none" id="endLevel" max="200" min="1" type="range" value="200"/>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-5 bg-black/40 rounded-xl border border-zinc-800 flex flex-col justify-center">
<div className="text-xs text-zinc-500 mb-1 flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
                                Delivery Time
                            </div>
<div className="text-lg font-medium text-white" id="deliveryTime">3 Days Max</div>
</div>
<div className="p-5 bg-black/40 rounded-xl border border-zinc-800 flex flex-col justify-center">
<div className="text-xs text-zinc-500 mb-1 flex items-center gap-2">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="12"></span>
                                Levels Added
                            </div>
<div className="text-lg font-medium text-white" id="levelsGained">200</div>
</div>
</div>

<div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
<div>
<div className="text-xs text-zinc-500 mb-1">Estimated Cost</div>
<div className="text-4xl font-semibold text-white tracking-tight flex items-baseline gap-1">
                                $<span id="totalPrice">31.25</span>
<span className="text-sm text-zinc-600 font-normal">USD</span>
</div>
</div>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5" href="https://discord.gg/yourinvite" target="_blank">
                            Order on Discord
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/5" id="delivery">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-[10px] text-white font-bold">T99</div>
<span className="text-white font-medium">Sector T99</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs">
                        Premium gaming services specializing in Roblox ecosystem. Secure trades and professional boosting since 2024.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Games</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>The Forge</li>
<li>Fisch</li>
<li>Pet Simulator 99</li>
<li>Anime Last Stand</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="https://discord.gg/yourinvite">Join Discord</a></li>
<li>Terms of Service</li>
<li>Privacy Policy</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2024 Sector T99 Services. All rights reserved.</p>
<div className="flex gap-4">
<span>Not affiliated with Roblox Corporation</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
