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



        // Game state
        let points = 0;
        let pointsPerClick = 1;
        let pointsPerSecond = 0;
        let clickMultiplier = 1;
        let autoMultiplier = 1;
        let timeWarpFactor = 1;
        let goldenClickChance = 0;
        
        // Upgrades
        const upgrades = {
            // Click power upgrades
            clicker: { count: 0, cost: 10, costMultiplier: 1.15, clickBonus: 1 },
            glove: { count: 0, cost: 100, costMultiplier: 1.2, clickBonus: 5 },
            hammer: { count: 0, cost: 1200, costMultiplier: 1.25, clickBonus: 15 },
            powerfist: { count: 0, cost: 12000, costMultiplier: 1.3, clickBonus: 50 },
            
            // Auto clickers
            auto: { count: 0, cost: 50, costMultiplier: 1.15, pps: 1 },
            robot: { count: 0, cost: 500, costMultiplier: 1.2, pps: 5 },
            factory: { count: 0, cost: 3000, costMultiplier: 1.25, pps: 25 },
            powerplant: { count: 0, cost: 15000, costMultiplier: 1.3, pps: 100 },
            
            // Multipliers
            multiplier1: { count: 0, cost: 5000, costMultiplier: 2, effect: () => { clickMultiplier *= 2; } },
            multiplier2: { count: 0, cost: 25000, costMultiplier: 2, effect: () => { clickMultiplier *= 3; } },
            autox2: { count: 0, cost: 7500, costMultiplier: 2, effect: () => { autoMultiplier *= 2; } },
            autox3: { count: 0, cost: 35000, costMultiplier: 2, effect: () => { autoMultiplier *= 3; } },
            
            // Special items
            goldenclick: { count: 0, cost: 50000, costMultiplier: 2, effect: () => { goldenClickChance += 0.05; } },
            timewarp: { count: 0, cost: 75000, costMultiplier: 2, effect: () => { timeWarpFactor *= 1.2; } },
            pointforge: { count: 0, cost: 100000, costMultiplier: 1.5, pps: 500 },
            quantumclicker: { count: 0, cost: 500000, costMultiplier: 3, effect: () => { 
                clickMultiplier *= 5; 
                autoMultiplier *= 5; 
            }}
        };
        
        // DOM elements
        const pointCount = document.getElementById('point-count');
        const clickButton = document.getElementById('click-button');
        const pointsPerClickElement = document.getElementById('points-per-click');
        const pointsPerSecondElement = document.getElementById('points-per-second');
        const clickMessages = document.getElementById('click-messages');
        
        // Update UI
        function updateUI() {
            pointCount.textContent = formatNumber(Math.floor(points));
            pointsPerClickElement.textContent = formatNumber(Math.floor(pointsPerClick * clickMultiplier));
            pointsPerSecondElement.textContent = formatNumber(Math.floor(pointsPerSecond * autoMultiplier));
            
            // Update costs and counts for each upgrade
            for (const [key, upgrade] of Object.entries(upgrades)) {
                const costElement = document.getElementById(`${key}-cost`);
                const countElement = document.getElementById(`${key}-count`);
                
                if (costElement && countElement) {
                    costElement.textContent = formatNumber(Math.floor(upgrade.cost));
                    countElement.textContent = upgrade.count;
                    
                    // Disable/enable upgrades based on point count
                    const upgradeElement = document.getElementById(`${key}-upgrade`);
                    if (points >= upgrade.cost) {
                        upgradeElement.classList.remove('opacity-50');
                    } else {
                        upgradeElement.classList.add('opacity-50');
                    }
                }
            }
        }
        
        // Format large numbers
        function formatNumber(num) {
            if (num < 1000) return num;
            if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
            if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
            return (num / 1000000000).toFixed(1) + 'B';
        }
        
        // Click button
        clickButton.addEventListener('click', () => {
            let pointsEarned = pointsPerClick * clickMultiplier;
            
            // Check for golden click
            if (goldenClickChance > 0 && Math.random() < goldenClickChance) {
                pointsEarned *= 10;
                showClickMessage("GOLDEN CLICK! x10", "text-yellow-300");
            }
            
            points += pointsEarned;
            updateUI();
            
            // Animation effect
            clickButton.classList.add('scale-95');
            setTimeout(() => {
                clickButton.classList.remove('scale-95');
            }, 100);
            
            // Show points earned
            showClickMessage("+" + formatNumber(Math.floor(pointsEarned)));
        });
        
        // Show floating messages
        function showClickMessage(message, colorClass = "text-white") {
            const messageElement = document.createElement('div');
            messageElement.className = `${colorClass} text-center text-lg font-bold animate-bounce`;
            messageElement.textContent = message;
            
            clickMessages.prepend(messageElement);
            
            // Remove old messages
            if (clickMessages.children.length > 3) {
                clickMessages.removeChild(clickMessages.lastChild);
            }
            
            // Remove after animation
            setTimeout(() => {
                if (messageElement.parentNode === clickMessages) {
                    clickMessages.removeChild(messageElement);
                }
            }, 2000);
        }
        
        // Buy upgrades
        for (const key of Object.keys(upgrades)) {
            const element = document.getElementById(`${key}-upgrade`);
            if (element) {
                element.addEventListener('click', () => buyUpgrade(key));
            }
        }
        
        function buyUpgrade(type) {
            const upgrade = upgrades[type];
            
            if (points >= upgrade.cost) {
                points -= upgrade.cost;
                upgrade.count++;
                upgrade.cost *= upgrade.costMultiplier;
                
                // Apply upgrade effects
                if (upgrade.clickBonus) {
                    pointsPerClick += upgrade.clickBonus;
                }
                
                if (upgrade.pps) {
                    pointsPerSecond += upgrade.pps;
                }
                
                if (upgrade.effect) {
                    upgrade.effect();
                }
                
                updateUI();
            }
        }
        
        // Passive income
        setInterval(() => {
            const increment = (pointsPerSecond * autoMultiplier * timeWarpFactor) / 10;
            points += increment;
            updateUI();
        }, 100);
        
        // Initial UI update
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
      
<div className="container mx-auto px-4 py-8">
<h1 className="text-4xl font-bold text-center mb-8">Power Clicker</h1>
<div className="flex flex-col md:flex-row gap-8">

<div className="w-full md:w-2/5 bg-slate-800 rounded-lg p-6 flex flex-col items-center">
<p className="text-2xl mb-2">Points: <span className="font-bold" id="point-count">0</span></p>
<p className="text-lg mb-2">Per Click: <span id="points-per-click">1</span></p>
<p className="text-lg mb-6">Points Per Second: <span id="points-per-second">0</span></p>
<button className="w-40 h-40 bg-blue-600 rounded-full hover:bg-blue-500 active:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all" id="click-button">
<span className="text-3xl font-bold">CLICK</span>
</button>
<div className="h-24 overflow-hidden mt-4 w-full" id="click-messages"></div>
</div>

<div className="w-full md:w-3/5 bg-slate-800 rounded-lg p-6 overflow-y-auto max-h-[80vh]">
<h2 className="text-2xl font-bold mb-4 text-center">Upgrade Shop</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="bg-slate-700/50 p-4 rounded-lg">
<h3 className="text-xl font-bold mb-3 text-blue-400">Click Power</h3>
<div className="space-y-3">
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="clicker-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Better Clicker</span>
<span className="text-yellow-300"><span id="clicker-cost">10</span> points</span>
</div>
<p className="text-sm text-slate-400">+1 point per click</p>
<p className="text-xs mt-1">Owned: <span id="clicker-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="glove-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Clicking Gloves</span>
<span className="text-yellow-300"><span id="glove-cost">100</span> points</span>
</div>
<p className="text-sm text-slate-400">+5 points per click</p>
<p className="text-xs mt-1">Owned: <span id="glove-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="hammer-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Click Hammer</span>
<span className="text-yellow-300"><span id="hammer-cost">1200</span> points</span>
</div>
<p className="text-sm text-slate-400">+15 points per click</p>
<p className="text-xs mt-1">Owned: <span id="hammer-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="powerfist-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Power Fist</span>
<span className="text-yellow-300"><span id="powerfist-cost">12000</span> points</span>
</div>
<p className="text-sm text-slate-400">+50 points per click</p>
<p className="text-xs mt-1">Owned: <span id="powerfist-count">0</span></p>
</div>
</div>
</div>

<div className="bg-slate-700/50 p-4 rounded-lg">
<h3 className="text-xl font-bold mb-3 text-green-400">Auto Clickers</h3>
<div className="space-y-3">
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="auto-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Auto Clicker</span>
<span className="text-yellow-300"><span id="auto-cost">50</span> points</span>
</div>
<p className="text-sm text-slate-400">+1 point per second</p>
<p className="text-xs mt-1">Owned: <span id="auto-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="robot-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Click Robot</span>
<span className="text-yellow-300"><span id="robot-cost">500</span> points</span>
</div>
<p className="text-sm text-slate-400">+5 points per second</p>
<p className="text-xs mt-1">Owned: <span id="robot-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="factory-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Click Factory</span>
<span className="text-yellow-300"><span id="factory-cost">3000</span> points</span>
</div>
<p className="text-sm text-slate-400">+25 points per second</p>
<p className="text-xs mt-1">Owned: <span id="factory-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="powerplant-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Click Power Plant</span>
<span className="text-yellow-300"><span id="powerplant-cost">15000</span> points</span>
</div>
<p className="text-sm text-slate-400">+100 points per second</p>
<p className="text-xs mt-1">Owned: <span id="powerplant-count">0</span></p>
</div>
</div>
</div>

<div className="bg-slate-700/50 p-4 rounded-lg">
<h3 className="text-xl font-bold mb-3 text-purple-400">Multipliers</h3>
<div className="space-y-3">
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="multiplier1-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">2x Multiplier</span>
<span className="text-yellow-300"><span id="multiplier1-cost">5000</span> points</span>
</div>
<p className="text-sm text-slate-400">Doubles your clicking power</p>
<p className="text-xs mt-1">Owned: <span id="multiplier1-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="multiplier2-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">3x Multiplier</span>
<span className="text-yellow-300"><span id="multiplier2-cost">25000</span> points</span>
</div>
<p className="text-sm text-slate-400">Triples your clicking power</p>
<p className="text-xs mt-1">Owned: <span id="multiplier2-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="autox2-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Auto Booster</span>
<span className="text-yellow-300"><span id="autox2-cost">7500</span> points</span>
</div>
<p className="text-sm text-slate-400">Doubles passive income</p>
<p className="text-xs mt-1">Owned: <span id="autox2-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="autox3-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Auto Amplifier</span>
<span className="text-yellow-300"><span id="autox3-cost">35000</span> points</span>
</div>
<p className="text-sm text-slate-400">Triples passive income</p>
<p className="text-xs mt-1">Owned: <span id="autox3-count">0</span></p>
</div>
</div>
</div>

<div className="bg-slate-700/50 p-4 rounded-lg">
<h3 className="text-xl font-bold mb-3 text-yellow-400">Special Items</h3>
<div className="space-y-3">
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="goldenclick-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Golden Clicker</span>
<span className="text-yellow-300"><span id="goldenclick-cost">50000</span> points</span>
</div>
<p className="text-sm text-slate-400">5% chance of 10x points per click</p>
<p className="text-xs mt-1">Owned: <span id="goldenclick-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="timewarp-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Time Warper</span>
<span className="text-yellow-300"><span id="timewarp-cost">75000</span> points</span>
</div>
<p className="text-sm text-slate-400">Auto clicks run 20% faster</p>
<p className="text-xs mt-1">Owned: <span id="timewarp-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="pointforge-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Point Forge</span>
<span className="text-yellow-300"><span id="pointforge-cost">100000</span> points</span>
</div>
<p className="text-sm text-slate-400">+500 points per second</p>
<p className="text-xs mt-1">Owned: <span id="pointforge-count">0</span></p>
</div>
<div className="bg-slate-700 rounded p-3 cursor-pointer hover:bg-slate-600 transition-colors" id="quantumclicker-upgrade">
<div className="flex justify-between items-center">
<span className="font-bold">Quantum Clicker</span>
<span className="text-yellow-300"><span id="quantumclicker-cost">500000</span> points</span>
</div>
<p className="text-sm text-slate-400">5x all points from all sources</p>
<p className="text-xs mt-1">Owned: <span id="quantumclicker-count">0</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
