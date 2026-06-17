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



        // Simple Countdown Timer Logic
        function startTimer(duration, display) {
            var timer = duration, hours, minutes, seconds;
            setInterval(function () {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = "Closes in " + hours + ":" + minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = 0;
                }
            }, 1000);
        }

        window.onload = function () {
            var seventyTwoHours = 72 * 60 * 60;
            var display = document.querySelector('#countdown');
            startTimer(seventyTwoHours, display);
        };
    
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
      

<div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#001f3f] via-[#000000] to-[#000000] opacity-80 z-[-2]"></div>

<div className="spline-bg">
<iframe frameborder="0" height="100%" src="https://my.spline.design/liquidring-PGc8zQXZyDUpVFvWNgohNZnv/" style={{border: 'none'}} width="100%"></iframe>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#00b7eb] rounded-full blur-[2px]"></div>
<span className="font-medium tracking-widest text-xs uppercase text-white/80">FirstBlock Capital</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-400">
<span>PRE-IPO ALLOCATION</span>
<span>SERIES LLC</span>
<span className="text-[#00b7eb]">SECURE ACCESS →</span>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-4 sm:px-6">

<div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">

<div className="flex flex-wrap justify-center gap-3 animate-[float_4s_ease-in-out_infinite]">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    ONLY 72 HOURS LEFT
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-medium tracking-wide">
<iconify-icon icon="lucide:alert-circle" width="12"></iconify-icon>
                    FINAL ALLOCATION
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00b7eb]/30 bg-[#00b7eb]/10 text-[#00b7eb] text-xs font-medium tracking-wide">
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon>
                    ACCREDITED ONLY
                </span>
</div>

<div className="pt-8 pb-4">

<svg className="mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" fill="none" height="80" viewbox="0 0 250 250" width="80" xmlns="http://www.w3.org/2000/svg">
<path d="M189.5 73.4C192.6 70.3 192.6 65.3 189.5 62.2C186.4 59.1 181.4 59.1 178.3 62.2L136.5 104L94.7 62.2C91.6 59.1 86.6 59.1 83.5 62.2C80.4 65.3 80.4 70.3 83.5 73.4L125.3 115.2L83.5 157C80.4 160.1 80.4 165.1 83.5 168.2C86.6 171.3 91.6 171.3 94.7 168.2L136.5 126.4L178.3 168.2C181.4 171.3 186.4 171.3 189.5 168.2C192.6 165.1 192.6 160.1 189.5 157L147.7 115.2L189.5 73.4Z" fill="white" stroke="white" strokeWidth="2"></path>
<circle cx="136.5" cy="40" fill="#00b7eb" r="5"></circle>
<circle cx="212" cy="115" fill="#00b7eb" r="5"></circle>
<circle cx="61" cy="115" fill="#00b7eb" r="5"></circle>
</svg>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] max-w-5xl text-glow">
                You’re About to Miss the Last <span className="text-[#00b7eb]">Pre-IPO Discount</span> on Ripple
            </h1>

<p className="text-xl md:text-3xl font-light text-gray-300 max-w-4xl leading-relaxed">
                Citadel &amp; Fortress paid <span className="text-white font-normal">$250/share</span>. 
                You pay <span className="text-[#00b7eb] font-normal">$150</span> <span className="text-gray-500 mx-2">→</span>
<span className="text-white border-b border-white/20 pb-0.5">72% below the value</span> of Ripple’s $90B+ XRP holdings alone.
            </p>

<div className="pt-10 w-full flex justify-center">
<a className="group relative inline-flex items-center justify-center gap-3 bg-[#00b7eb] hover:bg-[#00d4ff] text-black text-lg md:text-xl font-semibold py-6 px-12 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(0,183,235,0.4)]" href="#invest-form">
<span>Secure Your $150/Share Allocation Now</span>
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:zap" width="24"></iconify-icon>
<div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 animate-pulse"></div>
</a>
</div>
<p className="text-xs text-gray-500 tracking-wide uppercase mt-4">Capital at risk • Accredited Investors Only</p>
</div>

<div className="max-w-6xl mx-auto mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00b7eb]" icon="lucide:bar-chart-2" width="20"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">XRP/USD Correlation</h3>
</div>
<span className="text-xs text-[#00b7eb] animate-pulse flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#00b7eb]"></span> LIVE
                    </span>
</div>

<div className="w-full h-48 flex items-end justify-between gap-1 md:gap-2 opacity-80">

<div className="w-full bg-green-500/20 h-[40%] rounded-sm relative group-hover:h-[45%] transition-all duration-700">
<div className="absolute inset-x-[40%] -top-4 -bottom-4 bg-green-500 w-[20%] opacity-50"></div>
</div>
<div className="w-full bg-red-500/20 h-[35%] rounded-sm relative">
<div className="absolute inset-x-[40%] -top-2 -bottom-6 bg-red-500 w-[20%] opacity-50"></div>
</div>
<div className="w-full bg-green-500/20 h-[55%] rounded-sm relative group-hover:h-[60%] transition-all duration-1000">
<div className="absolute inset-x-[40%] -top-8 -bottom-2 bg-green-500 w-[20%] opacity-50"></div>
</div>
<div className="w-full bg-green-500/20 h-[65%] rounded-sm relative group-hover:h-[72%] transition-all duration-500 delay-100">
<div className="absolute inset-x-[40%] -top-5 -bottom-5 bg-green-500 w-[20%] opacity-50"></div>
</div>
<div className="w-full bg-green-500/30 h-[85%] rounded-sm relative shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-[pulse_3s_infinite]">
<div className="absolute inset-x-[40%] -top-6 -bottom-6 bg-green-500 w-[20%] opacity-80"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
<span>09:00</span>
<span>12:00</span>
<span>15:00</span>
<span>NOW</span>
</div>
<div className="absolute top-1/2 left-10 right-10 border-t border-dashed border-white/10 pointer-events-none"></div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" icon="lucide:trending-up" width="20"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Secondary Market Valuation</h3>
</div>
<div className="space-y-6">

<div className="space-y-2">
<div className="flex justify-between text-sm text-gray-400">
<span>Hiive Market</span>
<span>$238 – $262</span>
</div>
<div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-600 w-[85%] rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-sm text-gray-400">
<span>Forge Global Avg</span>
<span>$245</span>
</div>
<div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-600 w-[82%] rounded-full"></div>
</div>
</div>

<div className="space-y-2 pt-2">
<div className="flex justify-between text-base font-semibold text-white">
<span className="text-[#00b7eb] flex items-center gap-2">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon> Your Allocation
                            </span>
<span className="text-3xl tracking-tight text-[#00b7eb] drop-shadow-[0_0_10px_rgba(0,183,235,0.5)]">$150</span>
</div>
<div className="h-3 w-full bg-gray-900 rounded-full overflow-hidden relative">
<div className="absolute inset-0 bg-[#00b7eb]/20 animate-pulse"></div>
<div className="h-full bg-[#00b7eb] w-[50%] rounded-full shadow-[0_0_15px_rgba(0,183,235,0.8)]"></div>
</div>
<p className="text-right text-xs text-green-400 font-medium pt-1">You save $95+ per share</p>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#00b7eb]/10 flex items-center justify-center text-[#00b7eb] mb-6 border border-[#00b7eb]/20">
<iconify-icon icon="lucide:percent" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">72% Implied Discount</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                    Buying at $150/share implies an XRP price of ~$0.61. With XRP trading significantly higher, you are acquiring equity at a massive discount to intrinsic asset value.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<iconify-icon icon="lucide:scaling" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Valuation Arbitrage</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                    Circle trades at ~25x sales. Ripple is offered here at ~4.6x sales. A simple mean reversion upon IPO implies a <span className="text-white">$650+/share</span> potential.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Direct Ownership SPV</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                    Structured via FirstBlock Capital Delaware Series LLC. You receive direct beneficial interest in common shares. Clean cap table, institutional grade.
                </p>
</div>
</div>

<div className="max-w-3xl mx-auto mt-32 relative" id="invest-form">
<div className="absolute -inset-10 bg-[#00b7eb]/5 blur-3xl rounded-full z-0 pointer-events-none"></div>
<div className="glass-panel rounded-3xl p-8 md:p-12 relative z-10 border-t border-white/20">
<div className="text-center mb-10">
<div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-red-400 font-mono text-sm tracking-widest" id="countdown">Closes in 71:59:59</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Secure Your Allocation</h2>
<p className="text-gray-400 text-sm">Fill out the form below to lock in the $150 price. No obligation to fund immediately.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Full Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00b7eb] focus:ring-1 focus:ring-[#00b7eb] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00b7eb] focus:ring-1 focus:ring-[#00b7eb] transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Phone</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00b7eb] focus:ring-1 focus:ring-[#00b7eb] transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Investment Amount</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#00b7eb] focus:ring-1 focus:ring-[#00b7eb] transition-all">
<option disabled="" selected="" value="">Select Allocation Size</option>
<option value="25k">$25,000 (Minimum)</option>
<option value="50k">$50,000</option>
<option value="100k">$100,000</option>
<option value="250k">$250,000+</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex items-start gap-3 py-2">
<div className="flex items-center h-5">
<input className="w-5 h-5 bg-black border border-gray-600 rounded focus:ring-[#00b7eb] focus:ring-offset-0 text-[#00b7eb] accent-[#00b7eb]" id="accredited" type="checkbox"/>
</div>
<label className="text-sm text-gray-400" htmlFor="accredited">
                            I certify that I am an <span className="text-white">accredited investor</span> pursuant to Reg D 506(c).
                        </label>
</div>
<button className="w-full bg-[#00b7eb] hover:bg-[#00d4ff] text-black font-semibold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(0,183,235,0.3)] hover:shadow-[0_0_30px_rgba(0,183,235,0.5)] transition-all transform hover:-translate-y-0.5 mt-4 flex items-center justify-center gap-2" type="button">
                        Lock In My $150/Share Price Now
                        <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-gray-600 mt-4">
<iconify-icon className="inline mb-0.5 mr-1" icon="lucide:lock"></iconify-icon>
                        256-bit Encrypted. Your data is secure.
                    </p>
</form>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-12 relative z-10 bg-black">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex justify-center items-center gap-2 mb-6 opacity-50">
<div className="w-4 h-4 bg-gray-600 rounded-full"></div>
<span className="font-medium tracking-widest text-xs uppercase text-gray-500">FirstBlock Capital</span>
</div>
<p className="text-xs text-gray-700 max-w-2xl mx-auto leading-relaxed">
                FirstBlock Capital LLC | Delaware Series LLC | Accredited investors only. 
                <br/><br/>
                This offering is speculative and involves a high degree of risk. Past performance is not indicative of future results. This page is not investment advice or a recommendation to buy or sell securities. Offers are made only via the Confidential Private Placement Memorandum.
            </p>
<p className="text-[10px] text-gray-800 mt-8">© 2024 FirstBlock Capital. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
