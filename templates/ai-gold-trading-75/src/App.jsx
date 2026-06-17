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



        // --- 1. Particle Ball Animation Logic ---
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        // Configuration
        const particleCount = 400;
        const sphereRadius = 140;
        const rotationSpeed = 0.003;
        
        function resize() {
            width = canvas.parentElement.offsetWidth;
            height = canvas.parentElement.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            // Recenter origin
            ctx.translate(width / 2, height / 2);
        }

        class Particle {
            constructor() {
                // Random point on sphere surface
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                
                this.x = sphereRadius * Math.sin(phi) * Math.cos(theta);
                this.y = sphereRadius * Math.sin(phi) * Math.sin(theta);
                this.z = sphereRadius * Math.cos(phi);
                
                // Slight variation in size and opacity
                this.size = Math.random() * 1.5 + 0.5;
                this.baseOpacity = Math.random() * 0.5 + 0.2;
            }

            rotate(angleX, angleY) {
                // Rotate around Y axis
                let cos = Math.cos(angleY);
                let sin = Math.sin(angleY);
                let x = this.x * cos - this.z * sin;
                let z = this.z * cos + this.x * sin;
                this.x = x;
                this.z = z;

                // Rotate around X axis
                cos = Math.cos(angleX);
                sin = Math.sin(angleX);
                let y = this.y * cos - this.z * sin;
                z = this.z * cos + this.y * sin;
                this.y = y;
                this.z = z;
            }

            draw() {
                // Perspective projection
                const scale = 300 / (300 + this.z); // Field of view
                const x2d = this.x * scale;
                const y2d = this.y * scale;
                
                // Fade out particles at the back
                const opacity = Math.max(0, this.baseOpacity + (this.z / sphereRadius) * 0.4);

                ctx.beginPath();
                ctx.arc(x2d, y2d, this.size * scale, 0, Math.PI * 2);
                
                // Color based on depth/position
                if (this.x > 50) ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`; // Cyan
                else if (this.x < -50) ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`; // Violet
                else ctx.fillStyle = `rgba(203, 213, 225, ${opacity})`; // White/Slate
                
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(-width/2, -height/2, width, height);
            
            // Sort particles by Z depth to draw back-to-front
            particles.sort((a, b) => b.z - a.z);

            particles.forEach(p => {
                p.rotate(rotationSpeed, rotationSpeed * 0.6);
                p.draw();
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        initParticles();
        animate();


        // --- 2. Signal Generation Logic ---
        const signalData = [
            { type: 'BUY', price: '2034.50', tp: '2042.00', sl: '2029.00', confidence: 89, time: '2m ago' },
            { type: 'SELL', price: '2045.10', tp: '2038.50', sl: '2048.00', confidence: 92, time: '15m ago' },
            { type: 'BUY', price: '2022.80', tp: '2030.00', sl: '2018.50', confidence: 76, time: '42m ago' },
            { type: 'SELL', price: '2051.00', tp: '2044.20', sl: '2055.00', confidence: 84, time: '1h ago' },
            { type: 'BUY', price: '2036.20', tp: '2041.50', sl: '2033.00', confidence: 65, time: '1h ago' },
            { type: 'SELL', price: '2048.90', tp: '2040.00', sl: '2052.00', confidence: 95, time: '2h ago' },
            { type: 'BUY', price: '2028.00', tp: '2035.00', sl: '2024.00', confidence: 81, time: '3h ago' },
            { type: 'BUY', price: '2031.40', tp: '2039.90', sl: '2027.00', confidence: 78, time: '3h ago' }
        ];

        const cardsContainer = document.getElementById('cardsContainer');

        signalData.forEach(signal => {
            const isBuy = signal.type === 'BUY';
            const colorClass = isBuy ? 'text-emerald-400' : 'text-rose-400';
            const bgClass = isBuy ? 'bg-emerald-400/10 border-emerald-400/20' : 'bg-rose-400/10 border-rose-400/20';
            const icon = isBuy ? 'lucide:trending-up' : 'lucide:trending-down';

            const card = document.createElement('div');
            card.className = 'glass-panel rounded-xl p-5 hover:border-white/20 transition-all duration-300 group cursor-default';
            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg ${bgClass} flex items-center justify-center ${colorClass}">
                            <iconify-icon icon="${icon}" width="20" stroke-width="2"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-sm text-slate-400 font-light">Signal</div>
                            <div class="text-white font-medium tracking-tight ${colorClass}">${signal.type}</div>
                        </div>
                    </div>
                    <div class="text-[10px] text-slate-500 font-mono border border-slate-800 rounded px-1.5 py-0.5">${signal.time}</div>
                </div>
                
                <div class="space-y-3 mb-4">
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-slate-500 font-light">Entry</span>
                        <span class="text-slate-200 font-mono">${signal.price}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-slate-500 font-light">Take Profit</span>
                        <span class="text-emerald-400 font-mono">${signal.tp}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-slate-500 font-light">Stop Loss</span>
                        <span class="text-rose-400 font-mono">${signal.sl}</span>
                    </div>
                </div>

                <div class="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span class="text-xs text-slate-500">AI Confidence</span>
                    <div class="flex items-center gap-2">
                        <div class="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-400" style="width: ${signal.confidence}%"></div>
                        </div>
                        <span class="text-xs text-cyan-400 font-medium">${signal.confidence}%</span>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

        function scrollToSignals() {
            const el = document.getElementById('signals');
            el.classList.remove('opacity-0', 'translate-y-10');
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      

<div className="blob bg-cyan-600 w-96 h-96 top-0 left-1/4 translate-x-[-50%]"></div>
<div className="blob bg-violet-600 w-[500px] h-[500px] bottom-0 right-0 translate-y-[20%]"></div>

<nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 select-none">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium text-xs tracking-tighter shadow-lg shadow-cyan-500/20">
                    AI
                </div>
<span className="text-white font-medium tracking-tight text-lg">XAU<span className="text-slate-500">.USD</span></span>
</div>

<a className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="/auth">
<span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Connect</span>
<iconify-icon className="text-slate-500 group-hover:text-cyan-400 transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 flex flex-col items-center relative z-10 px-4">

<div className="text-center max-w-3xl mx-auto mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-wide mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                LIVE ANALYSIS ACTIVE
            </div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-4">
                Predictive Gold Trading
            </h1>
<p className="text-slate-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Leveraging neural networks to identify high-probability setups on XAU/USD in real-time.
            </p>
</div>

<div className="relative w-full max-w-lg aspect-square flex items-center justify-center mb-10">

<canvas className="absolute inset-0 z-10 w-full h-full" id="particleCanvas"></canvas>

<div className="absolute inset-0 flex items-center justify-center z-0">
<div className="w-32 h-32 rounded-full border border-cyan-500/30 bg-cyan-900/5 backdrop-blur-sm pulse-ring"></div>
</div>

<div className="absolute top-1/4 left-0 glass px-3 py-2 rounded-lg transform -translate-x-4 animate-[pulse_4s_ease-in-out_infinite]">
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Vol</div>
<div className="text-xs text-white font-mono">24.5M</div>
</div>
<div className="absolute bottom-1/3 right-0 glass px-3 py-2 rounded-lg transform translate-x-4 animate-[pulse_5s_ease-in-out_infinite]">
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">RSI</div>
<div className="text-xs text-emerald-400 font-mono">68.2</div>
</div>
</div>

<div className="relative z-20 mb-20 group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
<button className="relative px-8 py-4 bg-slate-900 rounded-lg leading-none flex items-center gap-3 border border-slate-800 hover:bg-slate-800 transition-all duration-300" onclick="scrollToSignals()">
<span className="text-slate-200 font-medium tracking-tight">Generate Signals</span>
<iconify-icon className="text-cyan-400" icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="w-full max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700" id="signals">

<div className="flex items-center justify-between mb-6 px-2">
<h2 className="text-xl text-white font-medium tracking-tight">Latest Signals <span className="text-slate-500 font-light text-sm ml-2">XAU/USD</span></h2>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/5 rounded-md text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:grid" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/5 rounded-md text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:list" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 mb-20" id="cardsContainer">

</div>

<div className="px-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-slate-500" icon="lucide:history" width="20"></iconify-icon>
<h2 className="text-xl text-white font-medium tracking-tight">Last Trades</h2>
</div>
<div className="glass-panel rounded-xl overflow-hidden border border-white/5 w-full">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/5">
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider">Asset</th>
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider">Type</th>
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider">Entry Price</th>
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider">Exit Price</th>
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider text-right">Return</th>
<th className="py-3 px-5 text-[11px] font-medium text-slate-500 uppercase tracking-wider text-right">Closed</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors cursor-default">
<td className="py-3.5 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[10px]">G</div>
<span className="text-slate-200 font-medium">XAUUSD</span>
</div>
</td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">BUY</span>
</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,024.50</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,031.20</td>
<td className="py-3.5 px-5 text-right font-mono text-emerald-400">+670 pts</td>
<td className="py-3.5 px-5 text-right text-slate-500 text-xs">2h ago</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-default">
<td className="py-3.5 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[10px]">G</div>
<span className="text-slate-200 font-medium">XAUUSD</span>
</div>
</td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-400/10 text-rose-400 border border-rose-400/20">SELL</span>
</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,038.10</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,034.40</td>
<td className="py-3.5 px-5 text-right font-mono text-emerald-400">+370 pts</td>
<td className="py-3.5 px-5 text-right text-slate-500 text-xs">4h ago</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-default">
<td className="py-3.5 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[10px]">G</div>
<span className="text-slate-200 font-medium">XAUUSD</span>
</div>
</td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">BUY</span>
</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,018.00</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,015.50</td>
<td className="py-3.5 px-5 text-right font-mono text-rose-400">-250 pts</td>
<td className="py-3.5 px-5 text-right text-slate-500 text-xs">6h ago</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-default">
<td className="py-3.5 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[10px]">G</div>
<span className="text-slate-200 font-medium">XAUUSD</span>
</div>
</td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">BUY</span>
</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,012.20</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,020.80</td>
<td className="py-3.5 px-5 text-right font-mono text-emerald-400">+860 pts</td>
<td className="py-3.5 px-5 text-right text-slate-500 text-xs">10h ago</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-default">
<td className="py-3.5 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[10px]">G</div>
<span className="text-slate-200 font-medium">XAUUSD</span>
</div>
</td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-400/10 text-rose-400 border border-rose-400/20">SELL</span>
</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,028.90</td>
<td className="py-3.5 px-5 font-mono text-slate-400">2,026.10</td>
<td className="py-3.5 px-5 text-right font-mono text-emerald-400">+280 pts</td>
<td className="py-3.5 px-5 text-right text-slate-500 text-xs">12h ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-8 mt-auto glass">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-500 text-xs font-light">
                © 2024 XAU.AI Protocol. All rights reserved.
            </div>
<div className="flex gap-4 text-slate-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:github" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:disc" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</footer>


    </>
  );
}
