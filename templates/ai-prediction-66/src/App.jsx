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



        document.addEventListener('DOMContentLoaded', () => {
            // Elements
            const timerEl = document.getElementById('countdown');
            const resultEl = document.getElementById('prediction-result');
            const gameIdEl = document.getElementById('game-id');
            const confidenceBar = document.getElementById('confidence-bar');
            
            // State
            let timeLeft = 14;
            let currentGameId = 88293041;
            
            // Random generator helper
            const getRandomResult = () => {
                const isBig = Math.random() > 0.5;
                const number = Math.floor(Math.random() * 9);
                return {
                    text: isBig ? 'BIG' : 'SMALL',
                    color: isBig ? 'text-cyan-400' : 'text-violet-400',
                    number: number
                };
            };

            // Timer Loop
            setInterval(() => {
                timeLeft--;
                
                // Format timer 00:XX
                const formattedTime = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
                timerEl.innerText = formattedTime;

                // When timer hits 0, simulate new round
                if (timeLeft < 0) {
                    timeLeft = 20; // Reset timer
                    currentGameId++;
                    gameIdEl.innerText = currentGameId;
                    
                    // Show "Calculating" state temporarily
                    resultEl.innerHTML = '<span class="text-slate-500 animate-pulse text-xl">CALCULATING...</span>';
                    confidenceBar.style.width = '0%';
                    
                    setTimeout(() => {
                        // Generate new result
                        const res = getRandomResult();
                        const confidence = Math.floor(Math.random() * (98 - 85) + 85); // 85-98%
                        
                        resultEl.innerHTML = `
                            <span class="${res.color}">${res.text}</span> 
                            <span class="text-slate-600">|</span>
                            <span>${res.number}</span>
                        `;
                        confidenceBar.style.width = `${confidence}%`;
                        
                        // Add to history (visual only for now)
                        // In a real app, we'd append to the history list
                    }, 1500);
                }
            }, 1000);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-glow opacity-60"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold tracking-tighter">
                    AI
                </div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">ASHURA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#live">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live Feed
                </a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</button>
<button className="bg-white text-slate-950 hover:bg-cyan-50 transition-colors px-4 py-2 rounded text-sm font-medium tracking-tight">
                    Get Access
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                V2.0 Algorithm Now Live
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
                ASHURA <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI</span>
<br/>
<span className="text-3xl md:text-5xl lg:text-6xl text-slate-500 block mt-2">Smart Prediction Engine</span>
</h1>

<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Unleash the power of machine learning for accurate <span className="text-white font-medium">BIG • SMALL • NUMBER</span> predictions. 
                Data-driven outcomes powered by next-gen neural networks.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
                    Start Prediction
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded glass-panel text-slate-200 font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:activity" data-width="18"></span>
                    View Live Results
                </button>
</div>

<div className="relative max-w-4xl mx-auto" id="live">
<div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur opacity-30"></div>
<div className="relative rounded-xl glass-card overflow-hidden border-t border-white/10">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/50">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-sm font-mono text-slate-400">LIVE SERVER: <span className="text-white">ASIA_V4</span></span>
</div>
<div className="flex items-center gap-4">
<div className="text-xs text-slate-500 font-mono">ID: <span id="game-id">88293041</span></div>
</div>
</div>

<div className="p-8 grid md:grid-cols-3 gap-8 items-center">

<div className="text-center md:text-left">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Next Draw</p>
<div className="text-4xl font-mono text-white tracking-tighter" id="countdown">00:14</div>
<p className="text-xs text-cyan-500 mt-2 flex items-center gap-1 justify-center md:justify-start">
<span className="iconify" data-icon="lucide:cpu" data-width="12"></span>
                                AI Analyzing...
                            </p>
</div>

<div className="bg-slate-900/50 rounded-lg border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
<p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Target Prediction</p>
<div className="text-3xl font-bold text-white mb-1 flex items-center gap-2" id="prediction-result">
<span className="text-cyan-400">BIG</span>
<span className="text-slate-600">|</span>
<span>8</span>
</div>
<div className="h-1 w-24 bg-slate-800 rounded-full mt-3 overflow-hidden">
<div className="h-full bg-cyan-500 w-[88%]" id="confidence-bar"></div>
</div>
<p className="text-[10px] text-slate-500 mt-2">Probability: <span className="text-cyan-400">88%</span></p>
</div>

<div className="space-y-3">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest text-center md:text-right">History</p>
<div className="flex gap-2 justify-center md:justify-end" id="history-pills">
<span className="w-8 h-8 rounded bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-green-400">B</span>
<span className="w-8 h-8 rounded bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-red-400">S</span>
<span className="w-8 h-8 rounded bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-green-400">B</span>
<span className="w-8 h-8 rounded bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-green-400">B</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">92%</div>
<div className="text-sm text-slate-500 font-medium">AI Accuracy</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">10k+</div>
<div className="text-sm text-slate-500 font-medium">Active Users</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">1M+</div>
<div className="text-sm text-slate-500 font-medium">Predictions</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-sm text-slate-500 font-medium">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Powered by Neural Intelligence</h2>
<p className="text-slate-400 max-w-2xl mx-auto">We don't guess. We analyze millions of data points to generate high-probability outcomes for every game round.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-xl relative group">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Pattern Recognition AI</h3>
<p className="text-slate-400 leading-relaxed text-sm">Our proprietary algorithm scans historic game data in real-time to identify repeating sequences and probability spikes invisible to the human eye.</p>
</div>

<div className="glass-card p-8 rounded-xl relative group">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Big / Small Precision</h3>
<p className="text-slate-400 leading-relaxed text-sm">Specialized engines focused purely on binary outcomes. We filter out noise to deliver high-confidence "Big" or "Small" signals instantly.</p>
</div>

<div className="glass-card p-8 rounded-xl relative group">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:binary" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Number Matrix Analysis</h3>
<p className="text-slate-400 leading-relaxed text-sm">Deep learning models that track number frequency and gap analysis, offering specific number predictions with calculated risk ratios.</p>
</div>

<div className="glass-card p-8 rounded-xl relative group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Latency-Free Sync</h3>
<p className="text-slate-400 leading-relaxed text-sm">Direct API connections ensure you receive prediction data milliseconds before the betting window closes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/30" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Workflow</h2>
<p className="text-slate-400">Four simple steps to start leveraging AI predictions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl font-semibold text-slate-300 mb-6 shadow-xl mx-auto md:mx-0">
                        1
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Select Game</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Choose your preferred platform and game type from the dashboard.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl font-semibold text-slate-300 mb-6 shadow-xl mx-auto md:mx-0">
                        2
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Set Mode</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Toggle between Safe, Balanced, or Aggressive AI prediction modes.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-violet-500/30 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] flex items-center justify-center text-3xl text-violet-400 mb-6 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:wand-2"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Get Result</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Receive the predicted outcome instantly with probability scoring.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl font-semibold text-slate-300 mb-6 shadow-xl mx-auto md:mx-0">
                        4
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Track Win</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Verify the result in real-time and track your history.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to beat the odds?</h2>
<p className="text-slate-400 mb-10 max-w-lg mx-auto">Join over 10,000 users utilizing ASHURA AI for their daily analysis.</p>
<button className="px-10 py-4 rounded bg-white text-slate-950 font-semibold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
                Get Started Now
            </button>

<div className="mt-16 pt-8 border-t border-white/5">
<p className="text-xs text-slate-600 leading-relaxed">
                    DISCLAIMER: ASHURA AI is a statistical analysis tool. It provides predictions based on historical data patterns. Results are not guaranteed. Users should engage responsibly and are solely responsible for their actions. This service is for entertainment and analytical purposes only.
                </p>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white text-xs font-bold">AI</div>
<span className="text-white font-semibold tracking-tight">ASHURA</span>
</div>
<p className="text-sm text-slate-500">Next generation AI prediction engine for modern markets.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Live Demo</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Community</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:send" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="text-center text-xs text-slate-700">
                © 2023 ASHURA AI Inc. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
