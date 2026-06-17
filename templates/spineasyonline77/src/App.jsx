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
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
zinc: { 850: '#1f1f22', 900: '#18181b', 950: '#09090b' },
emerald: { 450: '#10b981' }
},
letterSpacing: { tight: '-0.025em' }
}
}
}



        // Simulation State
        let gameState = 'WAITING'; // WAITING, FLYING, CRASHED
        let multiplier = 1.00;
        let flightTime = 0;
        let crashPoint = 0;
        let animationId;
        
        const graphLine = document.getElementById('graph-line');
        const plane = document.getElementById('plane');
        const multDisplay = document.getElementById('multiplier');
        const statusText = document.getElementById('status-text');

        // Bets simulation
        const betsContainer = document.getElementById('bets-container');
        const fakeUsers = ['Alex', 'Sarah', 'Mike99', 'CryptoKing', 'Whale01', 'MoonBoi', 'TraderX', 'Lucky7'];
        
        function initBets() {
            betsContainer.innerHTML = '';
            for(let i=0; i<15; i++) {
                addBetRow(fakeUsers[i % fakeUsers.length] + Math.floor(Math.random()*100), (Math.random()*50+10).toFixed(2));
            }
        }

        function addBetRow(name, amount) {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center px-2 py-1.5 hover:bg-zinc-800/50 rounded transition-colors text-xs group';
            div.innerHTML = `
                <div class="flex items-center gap-2 text-zinc-400 group-hover:text-zinc-300">
                    <div class="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] border border-zinc-700 font-bold">${name[0]}</div>
                    <span class="truncate w-20">${name}</span>
                </div>
                <div class="flex gap-6 text-zinc-300 font-medium">
                    <span class="w-12 text-right">${amount}</span>
                    <span class="w-10 text-right text-zinc-600">-</span>
                </div>
            `;
            betsContainer.prepend(div);
            if(betsContainer.children.length > 20) betsContainer.lastChild.remove();
        }

        function startGame() {
            gameState = 'FLYING';
            multiplier = 1.00;
            flightTime = 0;
            crashPoint = (Math.random() * 5 + 1.1).toFixed(2);
            if(Math.random() > 0.8) crashPoint = (Math.random() * 20 + 2).toFixed(2); // Occasional high flight
            
            // Visual Reset
            multDisplay.classList.remove('text-red-500');
            multDisplay.classList.add('text-white');
            statusText.style.opacity = '1';
            statusText.innerText = 'Takeoff';
            statusText.className = 'h-6 text-sm font-semibold text-emerald-500 tracking-wide uppercase transition-opacity';
            
            animate();
        }

        function animate() {
            if(gameState !== 'FLYING') return;

            flightTime += 0.016; // Approx 60fps
            multiplier += (0.001 * Math.exp(flightTime * 0.5)); // Exponential growth
            
            // Update Display
            multDisplay.innerText = multiplier.toFixed(2) + 'x';
            
            // Update Graph & Plane Position
            // Mapping time/mult to X/Y coordinates (simplified)
            const width = plane.parentElement.clientWidth || 800;
            const height = plane.parentElement.clientHeight || 400;
            
            const x = Math.min(flightTime * 50, width - 100);
            const y = Math.min((multiplier - 1) * 100, height - 100);
            
            // Invert Y for CSS transform (bottom-left origin)
            plane.style.transform = `translate(${x}px, -${y}px) rotate(-10deg)`;
            
            // Draw curve (simplified Bezier)
            const pathData = `M 0,${height} Q ${x/2},${height} ${x},${height - y}`;
            // Since SVG coords are top-left 0,0, we need to map properly or use CSS transform on SVG
            // For this snippet, let's keep it simple: The path is mostly visual fluff
            // Actually, let's just use CSS transform on the whole plane container for simplicity in this constrained view
            
            if(multiplier >= crashPoint) {
                crash();
            } else {
                animationId = requestAnimationFrame(animate);
            }
        }

        function crash() {
            gameState = 'CRASHED';
            cancelAnimationFrame(animationId);
            
            multDisplay.innerText = parseFloat(crashPoint).toFixed(2) + 'x';
            multDisplay.classList.remove('text-white');
            multDisplay.classList.add('text-red-500');
            
            statusText.innerText = 'Flew Away';
            statusText.className = 'h-6 text-sm font-semibold text-red-500 tracking-wide uppercase';

            setTimeout(() => {
                multDisplay.innerText = '1.00x';
                multDisplay.classList.remove('text-red-500');
                multDisplay.classList.add('text-white');
                statusText.style.opacity = '0';
                statusText.innerText = 'Loading...';
                statusText.className = 'h-6 text-sm font-semibold text-zinc-500 tracking-wide uppercase';
                
                // Reset Plane
                plane.style.transform = `translate(0px, 0px) rotate(0deg)`;
                
                setTimeout(startGame, 3000);
            }, 3000);
        }

        // Controls
        function adjustBet(id, val) {
            const el = document.getElementById(id + '-input');
            let current = parseFloat(el.value);
            current += val;
            if(current < 1) current = 1;
            el.value = current.toFixed(2);
        }
        function setBet(id, val) {
            document.getElementById(id + '-input').value = val.toFixed(2);
        }

        function toggleBet(num) {
            const btn = document.getElementById(`btn-bet${num}`);
            const span = btn.querySelector('span:first-child');
            
            if(btn.classList.contains('bg-emerald-500')) {
                // Place Bet
                btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950');
                btn.classList.add('bg-red-500', 'hover:bg-red-400', 'text-white');
                span.innerText = "Cancel";
            } else {
                // Cancel Bet
                btn.classList.add('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950');
                btn.classList.remove('bg-red-500', 'hover:bg-red-400', 'text-white');
                span.innerText = "Bet";
            }
        }

        // Start loop
        initBets();
        setTimeout(startGame, 1000);

    
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
      

<header className="h-14 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white">
<iconify-icon icon="lucide:plane" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-semibold text-zinc-100 tracking-tight text-lg">Aviator</span>
</div>
<div className="h-4 w-px bg-zinc-800"></div>
<nav className="hidden md:flex items-center gap-1">
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 rounded transition-colors">How to play</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 rounded transition-colors">Provably Fair</button>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Balance</span>
<span className="text-sm font-semibold text-emerald-400 tracking-tight">$4,290.50</span>
</div>
<button className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 px-3 py-1.5 rounded text-xs font-semibold transition-colors">Deposit</button>
<button className="text-zinc-400 hover:text-white transition-colors"><iconify-icon icon="lucide:menu" width="20"></iconify-icon></button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-80 border-r border-zinc-800 bg-zinc-900/50 flex flex-col hidden lg:flex z-10">
<div className="flex border-b border-zinc-800 bg-zinc-900">
<button className="flex-1 py-3 text-xs font-medium text-zinc-100 border-b-2 border-emerald-500 bg-zinc-800/50">All Bets</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors">My Bets</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors">Top</button>
</div>
<div className="px-4 py-2 flex justify-between text-[10px] uppercase tracking-wider text-zinc-500 font-medium border-b border-zinc-800/50">
<span>User</span>
<div className="flex gap-6">
<span>Bet</span>
<span>Mult.</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1" id="bets-container">

</div>
<div className="p-3 border-t border-zinc-800 bg-zinc-900 flex justify-between items-center">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="font-medium">Online: 1,420</span>
</div>
<div className="text-[10px] text-zinc-500">v1.2.0</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-zinc-950">

<div className="h-10 border-b border-zinc-800 bg-zinc-900/30 flex items-center px-4 gap-2 overflow-hidden shrink-0">
<div className="text-zinc-600 shrink-0"><iconify-icon icon="lucide:history" width="14"></iconify-icon></div>
<div className="flex gap-2 overflow-x-auto no-scrollbar mask-linear-fade w-full" id="history-pills">

<div className="px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-semibold tracking-tight">1.22x</div>
<div className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-semibold tracking-tight">14.50x</div>
<div className="px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-semibold tracking-tight">1.05x</div>
<div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-tight">2.45x</div>
<div className="px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-semibold tracking-tight">1.10x</div>
<div className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-semibold tracking-tight">54.21x</div>
</div>
</div>

<div className="flex-1 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="relative z-20 flex flex-col items-center">
<div className="text-6xl md:text-7xl font-bold text-white tracking-tighter tabular-nums drop-shadow-2xl" id="multiplier">1.00x</div>
<div className="h-6 text-sm font-semibold text-emerald-500 tracking-wide uppercase opacity-0 transition-opacity" id="status-text">Flying</div>
</div>

<div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
<svg className="w-full h-full overflow-visible">
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ef4444" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,0" fill="url(#areaGradient)" id="graph-line" stroke="#ef4444" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute w-16 h-16 text-red-500 -ml-8 -mt-8 flex items-center justify-center plane-anim will-change-transform" id="plane">
<iconify-icon height="48" icon="lucide:plane" style={{transform: 'rotate(-10deg)', filter: 'drop-shadow(0 0 10px rgba(239,68,68,0.5))'}} width="48"></iconify-icon>
<div className="absolute right-full top-1/2 -translate-y-1/2 w-8 h-1 bg-red-500/50 blur-sm"></div>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-zinc-900 p-4 shrink-0">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-1 relative group hover:border-zinc-700 transition-colors">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 bg-zinc-900 p-0.5 rounded-full border border-zinc-800">
<button className="px-4 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-700 text-white">Bet</button>
<button className="px-4 py-0.5 rounded-full text-[10px] font-semibold text-zinc-500 hover:text-zinc-300">Auto</button>
</div>
<div className="flex gap-2 p-3 mt-1">
<div className="flex-1 flex flex-col gap-2">
<div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg px-2 h-10 shadow-inner">
<button className="text-zinc-500 hover:text-white transition-colors" onclick="adjustBet('bet1', -1)"><iconify-icon icon="lucide:minus" width="14"></iconify-icon></button>
<input className="bet-input w-full bg-transparent text-center text-white text-sm font-semibold focus:outline-none" id="bet1-input" type="number" value="10.00"/>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="adjustBet('bet1', 1)"><iconify-icon icon="lucide:plus" width="14"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded py-1 text-[10px] font-medium text-zinc-400" onclick="setBet('bet1', 5)">5</button>
<button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded py-1 text-[10px] font-medium text-zinc-400" onclick="setBet('bet1', 10)">10</button>
</div>
</div>
<button className="w-28 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg flex flex-col items-center justify-center gap-0.5 shadow-lg shadow-emerald-900/20 active:scale-95 transition-all" id="btn-bet1" onclick="toggleBet(1)">
<span className="text-xs font-bold uppercase">Bet</span>
<span className="text-xs opacity-75 hidden" id="bet1-wait">Wait...</span>
</button>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-1 relative group hover:border-zinc-700 transition-colors">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 bg-zinc-900 p-0.5 rounded-full border border-zinc-800">
<button className="px-4 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-700 text-white">Bet</button>
<button className="px-4 py-0.5 rounded-full text-[10px] font-semibold text-zinc-500 hover:text-zinc-300">Auto</button>
</div>
<div className="flex gap-2 p-3 mt-1">
<div className="flex-1 flex flex-col gap-2">
<div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg px-2 h-10 shadow-inner">
<button className="text-zinc-500 hover:text-white transition-colors" onclick="adjustBet('bet2', -1)"><iconify-icon icon="lucide:minus" width="14"></iconify-icon></button>
<input className="bet-input w-full bg-transparent text-center text-white text-sm font-semibold focus:outline-none" id="bet2-input" type="number" value="20.00"/>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="adjustBet('bet2', 1)"><iconify-icon icon="lucide:plus" width="14"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded py-1 text-[10px] font-medium text-zinc-400" onclick="setBet('bet2', 20)">20</button>
<button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded py-1 text-[10px] font-medium text-zinc-400" onclick="setBet('bet2', 50)">50</button>
</div>
</div>
<button className="w-28 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg flex flex-col items-center justify-center gap-0.5 shadow-lg shadow-emerald-900/20 active:scale-95 transition-all" id="btn-bet2" onclick="toggleBet(2)">
<span className="text-xs font-bold uppercase">Bet</span>
<span className="text-xs opacity-75 hidden" id="bet2-wait">Wait...</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
