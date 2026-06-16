import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



      const state={isLoggedIn:!1,isPro:!1,currentTab:"home"};function switchTab(e){state.currentTab=e,"ai"===e&&!state.isPro?(state.isLoggedIn?simulateUpgrade():alert("Please sign in first!")):(document.querySelectorAll(".nav-item").forEach(e=>{e.classList.remove("text-white","bg-white/5"),e.classList.add("text-slate-400")}),(activeNav=document.getElementById(`nav-${e}`))&&(activeNav.classList.add("text-white","bg-white/5"),activeNav.classList.remove("text-slate-400")),["home","learn","ai","news","money"].forEach(e=>{document.getElementById(`view-${e}`).classList.add("hidden")}),(activeView=document.getElementById(`view-${e}`)).classList.remove("hidden"),activeView.classList.add("animate-[fade-in_0.3s_ease-out]"))}function toggleAuth(){guestDiv=document.getElementById("auth-guest"),userDiv=document.getElementById("auth-user"),state.isLoggedIn||setTimeout(()=>{state.isLoggedIn=!0,guestDiv.classList.add("hidden"),userDiv.classList.remove("hidden")},500)}function toggleProMode(){toggle=document.getElementById("pro-toggle"),state.isPro=toggle.checked,lockOverlay=document.getElementById("smc-lock"),lockIcon=document.querySelector(".pro-lock-icon"),state.isPro?(lockOverlay.classList.add("opacity-0","pointer-events-none"),lockIcon.classList.replace("solar:lock-keyhole-linear","solar:lock-unlocked-linear"),lockIcon.classList.add("text-emerald-400")):(lockOverlay.classList.remove("opacity-0","pointer-events-none"),lockIcon.classList.replace("solar:lock-unlocked-linear","solar:lock-keyhole-linear"),lockIcon.classList.remove("text-emerald-400"))}function simulateUpgrade(){state.isLoggedIn?document.getElementById("payment-modal").classList.remove("hidden"):alert("Please log in with Google first.")}function closeModal(){document.getElementById("payment-modal").classList.add("hidden")}function processPayment(e){closeModal(),alert("Payment Successful via "+e.toUpperCase()),document.getElementById("pro-toggle").checked=!0,toggleProMode(),switchTab("ai"===state.currentTab?"ai":"learn")}function triggerAnalysis(){uploadZone=document.getElementById("upload-zone"),scanner=document.getElementById("scanner-ui"),result=document.getElementById("analysis-result"),document.getElementById("upload-content").classList.add("opacity-0"),scanner.classList.remove("hidden"),scanner.classList.add("flex"),setTimeout(()=>{scanner.classList.add("hidden"),scanner.classList.remove("flex"),uploadZone.classList.add("hidden"),result.classList.remove("hidden")},2500)}function resetAI(){document.getElementById("analysis-result").classList.add("hidden"),uploadZone=document.getElementById("upload-zone"),uploadZone.classList.remove("hidden"),document.getElementById("upload-content").classList.remove("opacity-0")}styleSheet=document.createElement("style"),styleSheet.innerText="\n            @keyframes scan {\n                0% { top: 0; }\n                50% { top: 100%; }\n                100% { top: 0; }\n            }\n            @keyframes fade-in-up {\n                from { opacity: 0; transform: translateY(10px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n        ",document.head.appendChild(styleSheet);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between bg-slate-950 z-20 hidden md:flex">
<div>
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="font-medium tracking-tight text-white text-lg">
            TRADER
            <span className="text-indigo-400">KID</span>
</h1>
</div>
<nav className="px-4 space-y-1 mt-4">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group active-nav" id="nav-home" onclick="switchTab('home')">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Dashboard
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group" id="nav-learn" onclick="switchTab('learn')">
<iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
            The Classroom
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group" id="nav-ai" onclick="switchTab('ai')">
<div className="relative">
<iconify-icon className="group-hover:text-rose-400 transition-colors" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
            AI Analyst
            <span className="ml-auto text-[10px] uppercase tracking-wider font-semibold text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">
              Pro
            </span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group" id="nav-news" onclick="switchTab('news')">
<iconify-icon className="group-hover:text-sky-400 transition-colors" icon="solar:globe-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Live Feed
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group" id="nav-money" onclick="switchTab('money')">
<iconify-icon className="group-hover:text-yellow-400 transition-colors" icon="solar:dollar-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Money Online
          </button>
</nav>
</div>
<div className="p-4 border-t border-white/5">

<div className="block" id="auth-guest">
<button className="w-full bg-white text-slate-900 hover:bg-slate-200 transition py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2" onclick="toggleAuth()">
<iconify-icon icon="flat-color-icons:google" width="18"></iconify-icon>
            Sign in with Google
          </button>
</div>
<div className="hidden" id="auth-user">
<div className="flex items-center gap-3 mb-4">
<img alt="Profile" className="w-9 h-9 rounded-full border border-white/10" src="https://ui-avatars.com/api/?name=Kid+Trader&amp;background=random"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">
                Future Whale
              </p>
<p className="text-xs text-slate-500 truncate">Level 3: Apprentice</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
<span className="text-xs font-medium text-slate-300">Pro Mode</span>
<label className="checkbox-wrapper cursor-pointer relative inline-flex items-center">
<input className="sr-only peer" id="pro-toggle" onchange="toggleProMode()" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
</label>
</div>
</div>
<div className="px-4 py-3 border-t border-white/5">
<p className="text-[10px] text-slate-600 uppercase tracking-wider mb-1">
            Support
          </p>
<div className="flex items-center gap-2 text-slate-400 text-xs hover:text-indigo-400 transition cursor-pointer">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
            workinfofr@gmail.com
          </div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950">

<header className="md:hidden p-4 border-b border-white/5 flex items-center justify-between bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<span className="font-medium text-white">TRADERKID</span>
</div>
<button className="text-slate-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="h-10 border-b border-white/5 bg-slate-900/50 flex items-center overflow-hidden">
<div className="flex items-center px-4 border-r border-white/5 h-full z-10 bg-slate-900/80">
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            LIVE
          </span>
</div>
<div className="ticker-wrap w-full">
<div className="ticker text-xs font-mono flex items-center gap-8 text-slate-400">
<span>
              BTC/USD
              <span className="text-emerald-400">$64,230 (+1.2%)</span>
</span>
<span>
              ETH/USD
              <span className="text-rose-400">$3,450 (-0.5%)</span>
</span>
<span>
              SOL/USD
              <span className="text-emerald-400">$145 (+3.2%)</span>
</span>
<span>
              SPX
              <span className="text-emerald-400">5,200 (+0.1%)</span>
</span>
<span>
              GOLD
              <span className="text-slate-300">2,350 (0.0%)</span>
</span>
<span>
              EUR/USD
              <span className="text-rose-400">1.08 (-0.2%)</span>
</span>
<span>
              JPY/USD
              <span className="text-emerald-400">151 (+0.1%)</span>
</span>
<span>
              NQ100
              <span className="text-emerald-400">18,100 (+0.4%)</span>
</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth relative" id="content-area">

<div className="max-w-5xl mx-auto space-y-8 animate-fade-in" id="view-home">
<div className="space-y-8 animate-fade-in">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Dashboard
                </h2>
<p className="text-slate-400 text-sm">
                  Your command center for financial dominance.
                </p>
</div>
<div className="bg-slate-900/50 p-3 rounded-lg border border-white/5 flex items-center gap-3">
<div className="text-right">
<div className="text-xs text-slate-500">
                    Recommended Broker (India)
                  </div>
<div className="text-sm font-medium text-emerald-400">
                    Zerodha / Angel One
                  </div>
</div>
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-900/20 to-slate-900/20 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">
                    What Type of Trader Are You?
                  </h3>
<p className="text-sm text-slate-400 mt-1">
                    Discover your psychological edge: Scalper, Swing, or
                    Investor.
                  </p>
</div>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-lg shadow-indigo-500/20">
                Take Quiz
              </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel p-5 rounded-xl space-y-3 hover:border-indigo-500/30 transition group">
<div className="flex justify-between">
<h3 className="text-slate-200 font-medium">Scalping</h3>
<iconify-icon className="text-rose-400" icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<p className="text-xs text-slate-500">
                  High speed. Quick profits. For the adrenaline junkies.
                </p>
<div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
<div className="bg-rose-500 h-full w-[20%]"></div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl space-y-3 hover:border-indigo-500/30 transition group">
<div className="flex justify-between">
<h3 className="text-slate-200 font-medium">Intraday</h3>
<iconify-icon className="text-sky-400" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<p className="text-xs text-slate-500">
                  In and out within the session. No overnight risk.
                </p>
<div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
<div className="bg-sky-500 h-full w-[45%]"></div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl space-y-3 hover:border-indigo-500/30 transition group">
<div className="flex justify-between">
<h3 className="text-slate-200 font-medium">Options F&amp;O</h3>
<iconify-icon className="text-yellow-400" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<p className="text-xs text-slate-500">
                  High leverage. For advanced masters only.
                </p>
<div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
<div className="bg-yellow-500 h-full w-[10%]"></div>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl space-y-4">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-pink-400" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium">Guardian Angel Monitor</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-slate-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">
                    Win Rate
                  </div>
<div className="text-lg font-mono text-white">68%</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">
                    Risk Mgmt
                  </div>
<div className="text-lg font-mono text-emerald-400">Good</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">Avg RR</div>
<div className="text-lg font-mono text-white">1:2.5</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">Mood</div>
<div className="text-lg font-mono text-indigo-400">Focused</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden max-w-4xl mx-auto space-y-8" id="view-learn">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-medium tracking-tight text-white">
              The Classroom
            </h2>
<span className="text-xs text-slate-500 border border-slate-700 rounded-full px-3 py-1">
              Curriculum v1.4
            </span>
</div>

<div className="space-y-4">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider pl-1">
              Level 1: The Language
            </h3>

<div className="glass-panel rounded-xl overflow-hidden border border-slate-800">
<div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
<div className="flex-1 space-y-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<h4 className="text-xl font-medium text-white">
                      The Battle of Armies
                    </h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                    Imagine a trading chart is a battlefield.
                    <br/>
<br/>
                    The
                    <span className="text-emerald-400 font-medium">
                      Green Army (Buyers)
                    </span>
                    wants to push the price UP to the sky.
                    <br/>
                    The
                    <span className="text-rose-400 font-medium">
                      Red Army (Sellers)
                    </span>
                    wants to push the price DOWN to the ground.
                    <br/>
<br/>
                    A
                    <strong>Candlestick</strong>
                    is just a picture of who won the fight during that time.
                  </p>
<div className="pt-2">
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition">
                      Start Lesson
                    </button>
</div>
</div>

<div className="w-full md:w-64 h-64 bg-slate-900/50 rounded-lg border border-white/5 relative flex items-center justify-center p-4">
<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px opacity-10 pointer-events-none">
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
<div className="bg-slate-500"></div>
</div>

<div className="relative w-12 h-40 flex flex-col items-center justify-center group cursor-pointer">

<div className="w-0.5 h-full bg-slate-600 absolute transition-all duration-700 group-hover:bg-emerald-600"></div>

<div className="w-full h-24 bg-emerald-500/80 border border-emerald-400 z-10 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:h-32 group-hover:mb-4 flex items-center justify-center">
<span className="text-[10px] text-emerald-950 font-bold opacity-0 group-hover:opacity-100">
                        WIN!
                      </span>
</div>

<div className="absolute -bottom-8 whitespace-nowrap text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      The Bulls pushed it up here!
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider pl-1">
                Level 2: Smart Money (SMC)
              </h3>
<iconify-icon className="text-slate-600 pro-lock-icon" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div className="glass-panel rounded-xl p-6 border border-slate-800 relative overflow-hidden">

<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-500" id="smc-lock">
<div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 mb-3">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-1">Pro Traders Only</h4>
<p className="text-slate-400 text-sm mb-4">
                  Learn to track the "Big Banks" footprints.
                </p>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition shadow-[0_0_20px_rgba(79,70,229,0.3)]" onclick="simulateUpgrade()">
                  UNLOCK PREMIUM
                </button>
</div>
<div className="flex flex-col gap-4 blur-sm select-none opacity-50">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<h4 className="text-lg font-medium text-white">
                    Order Blocks (The Bank's Footprint)
                  </h4>
</div>
<p className="text-slate-400 text-sm">
                  Think of an Order Block as a place where a giant elephant (a
                  big bank) stepped. The ground is dented there. When price
                  comes back to that dent, it usually bounces!
                </p>
<div className="h-32 bg-slate-800/50 rounded border border-white/5 w-full"></div>
</div>
</div>
</div>
</div>

<div className="hidden max-w-3xl mx-auto h-full flex flex-col" id="view-ai">
<div className="max-w-4xl mx-auto h-full flex flex-col gap-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-4">
<div className="space-y-1">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                  AI Market Analyst
                </h2>
<p className="text-slate-400 text-sm">
                  I analyze Structure, SMC, Order Blocks, and Traps.
                </p>
</div>
<div className="flex gap-2">
<select className="bg-slate-900 border border-white/10 text-slate-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5" id="ai-market">
<option>Indian Stocks (NSE/BSE)</option>
<option>Forex (Major Pairs)</option>
<option>Crypto (Binance)</option>
<option>NIFTY/BANKNIFTY</option>
</select>
<select className="bg-slate-900 border border-white/10 text-slate-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5" id="ai-tf">
<option>5 Min (Scalping)</option>
<option>15 Min (Intraday)</option>
<option>1 Hour (Swing)</option>
<option>4 Hour (Macro)</option>
</select>
</div>
</div>
<div className="flex-1 border-2 border-dashed border-slate-700 hover:border-indigo-500/50 rounded-2xl bg-slate-900/30 transition-all flex flex-col items-center justify-center p-10 cursor-pointer group relative overflow-hidden" id="upload-zone" onclick="triggerAnalysis()">
<div className="relative z-10 flex flex-col items-center transition-all duration-300" id="upload-content">
<div className="w-16 h-16 rounded-full bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors mb-4 shadow-xl">
<iconify-icon icon="solar:upload-track-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-300 font-medium">
                  Upload Chart Screenshot
                </p>
<p className="text-xs text-slate-500 mt-2">
                  Analyzes Patterns, Candles &amp; Indicators
                </p>
</div>
<div className="absolute inset-0 bg-slate-950 hidden flex-col items-center justify-center z-20" id="scanner-ui">
<div className="relative w-64 h-40 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden mb-6">
<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_15px_#6366f1] animate-[scan_2s_ease-in-out_infinite]"></div>
<div className="p-4 text-xs font-mono text-emerald-500 space-y-1 opacity-75">
<div>&gt; DETECTING MARKET STRUCTURE...</div>
<div>&gt; FINDING ORDER BLOCKS...</div>
<div>&gt; CALCULATING FIBONACCI...</div>
<div>&gt; CHECKING RSI DIVERGENCE...</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in-up space-y-4" id="analysis-result">
<div className="glass-panel rounded-xl p-6 border-l-4 border-l-emerald-500">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-white font-semibold text-lg">
                      Trade Setup Identified
                    </h3>
<p className="text-sm text-slate-400 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                      High Probability Setup
                    </p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-emerald-400 tracking-tight">
                      LONG
                    </div>
<div className="text-xs text-slate-500 font-mono">
                      ACCURACY: 89.4%
                    </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                      ICT / SMC Concepts
                    </h4>
<div className="flex justify-between text-sm py-1 border-b border-white/5">
<span className="text-slate-400">Market Structure</span>
<span className="text-emerald-400 font-mono">
                        BOS (Break of Structure)
                      </span>
</div>
<div className="flex justify-between text-sm py-1 border-b border-white/5">
<span className="text-slate-400">Order Block</span>
<span className="text-white font-mono">Valid 15m OB</span>
</div>
<div className="flex justify-between text-sm py-1 border-b border-white/5">
<span className="text-slate-400">Fair Value Gap (FVG)</span>
<span className="text-yellow-400 font-mono">
                        Partially Filled
                      </span>
</div>
<div className="flex justify-between text-sm py-1 border-b border-white/5">
<span className="text-slate-400">Liquidity Sweep</span>
<span className="text-white font-mono">Yes (Asian Lows)</span>
</div>
</div>

<div className="space-y-2">
<h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                      Execution Plan
                    </h4>
<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-900 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">ENTRY ZONE</div>
<div className="text-sm text-white font-mono">
                          22,450 - 22,480
                        </div>
</div>
<div className="bg-slate-900 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">
                          STOP LOSS (SL)
                        </div>
<div className="text-sm text-rose-400 font-mono">
                          22,420
                        </div>
</div>
<div className="bg-slate-900 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">
                          TAKE PROFIT (TP1)
                        </div>
<div className="text-sm text-emerald-400 font-mono">
                          22,550
                        </div>
</div>
<div className="bg-slate-900 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">
                          TRAILING SL
                        </div>
<div className="text-sm text-sky-400 font-mono">
                          Every 20 pts
                        </div>
</div>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex gap-4">
<div className="min-w-[40px] h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-indigo-300 font-medium text-sm">
                      Guardian Angel Comment
                    </h4>
<p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      "Good setup, kid! The structure is clearly shifting
                      bullish. However, be careful—there is high-impact Red
                      Folder news in 30 minutes. I suggest waiting for the news
                      spike to settle before entering. Don't gamble!"
                    </p>
</div>
</div>
</div>
<button className="w-full py-3 text-sm text-slate-500 hover:text-white transition bg-slate-900/50 rounded-lg border border-white/5 hover:bg-slate-800" onclick="resetAI()">
                Analyze Another Chart
              </button>
</div>
</div>
</div>

<div className="hidden max-w-3xl mx-auto" id="view-news">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-6">
              Live Market Intel
              <span className="text-xs font-normal text-slate-500 ml-2">
                Sources: Bloomberg, MoneyControl, Investing.com
              </span>
</h2>
<div className="space-y-4">

<div className="p-5 rounded-xl bg-slate-900 border border-white/5 hover:border-emerald-500/30 transition cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                    INDIAN MARKET
                  </span>
<span className="text-[10px] text-slate-500">12 MIN AGO</span>
</div>
<h3 className="text-slate-200 text-base font-medium group-hover:text-emerald-400 transition-colors">
                  NIFTY 50 breaks all-time high resistance, targeting 23,000
                  levels
                </h3>
<p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  Banking stocks lead the rally as RBI keeps repo rates
                  unchanged. HDFC and ICICI showing strong institutional buying
                  volume.
                </p>
</div>

<div className="p-5 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-500/30 transition cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/20 font-mono">
                    FOREX
                  </span>
<span className="text-[10px] text-slate-500">45 MIN AGO</span>
</div>
<h3 className="text-slate-200 text-base font-medium group-hover:text-sky-400 transition-colors">
                  USD/JPY volatile ahead of FOMC meeting minutes
                </h3>
<p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  Traders bracing for impact. Support at 151.20 holding strong.
                  Recommendation: Stay out of lower timeframes.
                </p>
</div>

<div className="p-5 rounded-xl bg-slate-900 border border-white/5 hover:border-orange-500/30 transition cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 font-mono">
                    CRYPTO
                  </span>
<span className="text-[10px] text-slate-500">1 HR AGO</span>
</div>
<h3 className="text-slate-200 text-base font-medium group-hover:text-orange-400 transition-colors">
                  Bitcoin Halving Effect: Miners accumulation phase detected
                </h3>
<p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  On-chain data shows massive outflows from exchanges. Whales
                  are buying the dip aggressively.
                </p>
</div>
</div>
</div>
</div>
<div className="hidden max-w-5xl mx-auto space-y-8 animate-fade-in" id="view-money">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-white">
              Digital Goldmines
            </h2>
<p className="text-slate-400 mt-2">
              Trading is one way. Here are other proven ways to build wealth
              online.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
<iconify-icon icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Freelancing</h3>
<p className="text-sm text-slate-400 mt-2 mb-4">
                Sell skills like coding, writing, or design. Platforms: Upwork,
                Fiverr.
              </p>
<button className="text-xs text-indigo-400 font-medium hover:text-indigo-300">
                Learn More →
              </button>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4">
<iconify-icon icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Dropshipping</h3>
<p className="text-sm text-slate-400 mt-2 mb-4">
                Sell products without holding inventory. Shopify + Instagram
                Ads.
              </p>
<button className="text-xs text-pink-400 font-medium hover:text-pink-300">
                Learn More →
              </button>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Affiliate Marketing</h3>
<p className="text-sm text-slate-400 mt-2 mb-4">
                Promote other people's products and earn commissions.
              </p>
<button className="text-xs text-emerald-400 font-medium hover:text-emerald-300">
                Learn More →
              </button>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Backend Dev</h3>
<p className="text-sm text-slate-400 mt-2 mb-4">
                Architect robust systems &amp; APIs. Power the logic behind
                modern apps.
              </p>
<button className="text-xs text-sky-400 font-medium hover:text-sky-300">
                Learn More →
              </button>
</div>
</div>

<div className="glass-panel p-8 rounded-xl border border-emerald-500/20">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white">
                  Wealth Compounder (SIP)
                </h3>
<p className="text-sm text-slate-400">
                  Top 10 Indian Stocks for Long Term Growth (Conservative)
                </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">Reliance</div>
<div className="text-xs text-slate-500">Large Cap</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">HDFC Bank</div>
<div className="text-xs text-slate-500">Banking</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">TCS</div>
<div className="text-xs text-slate-500">IT Tech</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">Infosys</div>
<div className="text-xs text-slate-500">IT Tech</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">ICICI Bank</div>
<div className="text-xs text-slate-500">Banking</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">L&amp;T</div>
<div className="text-xs text-slate-500">Infra</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">HUL</div>
<div className="text-xs text-slate-500">FMCG</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">Asian Paints</div>
<div className="text-xs text-slate-500">Paints</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">Tata Motors</div>
<div className="text-xs text-slate-500">Auto</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-white/5 text-center">
<div className="font-medium text-white">Bajaj Fin</div>
<div className="text-xs text-slate-500">Finance</div>
</div>
</div>
</div>
</div>
</div>
</main>


<div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md hidden flex items-center justify-center p-4" id="payment-modal">
<div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 mx-auto mb-3">
<iconify-icon icon="solar:crown-star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white">Upgrade to Pro</h3>
<p className="text-sm text-slate-400 mt-1">
            Unlock AI Signals, Advanced SMC Lessons &amp; Alerts.
          </p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition border border-white/5 group" onclick="processPayment('upi')">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:smartphone-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-white font-medium">UPI / GPay / PhonePe</div>
<div className="text-xs text-slate-500">Instant Activation</div>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition border border-white/5 group" onclick="processPayment('card')">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:card-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-white font-medium">Credit / Debit Card</div>
<div className="text-xs text-slate-500">
                  Visa, Mastercard, RuPay
                </div>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition border border-white/5 group" onclick="processPayment('net')">
<div className="flex items-center gap-3">
<iconify-icon className="text-sky-400" icon="solar:global-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-white font-medium">Netbanking</div>
<div className="text-xs text-slate-500">All Indian Banks</div>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-center text-slate-600 mt-6">
          Secure Payment Gateway • No Refunds
        </p>
</div>
</div>

    </>
  );
}
