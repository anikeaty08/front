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



      lucide.createIcons();
    


      const glow = document.getElementById('mouse-glow');
      document.addEventListener('mousemove', (e) => {
        glow.style.setProperty('--x', e.clientX + 'px');
        glow.style.setProperty('--y', e.clientY + 'px');
      });
    


      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);
      document.querySelectorAll('section, .glass-panel').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
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
      
<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen transition-opacity duration-300" id="mouse-glow"></div>

<div className="grain-overlay"></div>

<main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6 md:space-y-12">

<div className="w-full bg-slate/50 border border-white/5 rounded-full py-2 px-4 flex items-center justify-center gap-3 backdrop-blur-md glass-panel">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
</span>
<span className="text-sm font-medium text-gray-300">
          High-Stakes Funding Live:
          <span className="text-success">90% Profit Split</span>
          Available Now
        </span>
</div>

<nav className="flex items-center justify-between py-4 px-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-[#5D5DFF]" data-lucide="zap"></i>
</div>
<span className="text-lg font-medium tracking-tight">ERT Funded</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
<a className="hover:text-white transition-colors" href="#">Evaluation</a>
<a className="hover:text-white transition-colors" href="#">Scaling</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<button className="glass-panel px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
          Client Area
        </button>
</nav>

<section className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl group bg-obsidian shadow-black/80" style={{backgroundImage: 'radial-gradient(circle at 100% 0%, #1e1e2e 0%, #000000 60%), radial-gradient(circle at 0% 100%, #1e1e2e 0%, #000000 60%)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800"></div>
<div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-purple-400/20 to-transparent mix-blend-overlay"></div>
<div className="absolute -right-10 top-10 md:-right-12 md:top-20 w-[400px] h-[400px] md:w-[550px] md:h-[550px] pointer-events-none opacity-50 select-none z-0 mix-blend-screen" style={{perspective: '1000px'}}>
<div className="relative w-full h-full animate-[spin_40s_linear_infinite]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 border-2 border-white/30 rounded-full" style={{transform: 'rotateY(0deg)'}}></div>
<div className="absolute inset-0 border-2 border-white/30 rounded-full" style={{transform: 'rotateY(45deg)'}}></div>
<div className="absolute inset-0 border-2 border-white/30 rounded-full" style={{transform: 'rotateY(90deg)'}}></div>
<div className="absolute inset-0 border-2 border-white/30 rounded-full" style={{transform: 'rotateY(135deg)'}}></div>
<div className="absolute inset-[20%] border border-white/10 rounded-full bg-indigo-500/20 blur-2xl animate-pulse"></div>
</div>
</div>
<div className="absolute top-20 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
<div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-200 rounded-full blur-[1px] opacity-80"></div>
<div className="absolute bottom-40 left-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
<div className="relative z-10 px-6 py-16 md:px-16 md:py-24 lg:py-32 flex flex-col justify-center h-full max-w-4xl">
<div className="inline-flex items-center self-start gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-lg shadow-purple-900/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
</span>
<span className="text-sm font-medium tracking-wide text-purple-100 uppercase">
              Trade with Confidence
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-white mb-8 text-glow drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] relative z-10 z-20">
            Capitalize on Your Edge.
            <br/>
            Access up to
            <span className="text-royal">$200,000</span>
            in Institutional Funding.
          </h1>
<p className="text-xl md:text-2xl font-light text-purple-100/80 leading-relaxed max-w-2xl mb-12">
            Trade with our capital. Keep up to
            <span className="text-success font-semibold">90%</span>
            of the profit. Institutional grade conditions for serious traders.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="btn-glow relative px-8 py-4 text-white rounded-full text-lg font-bold tracking-tight flex items-center gap-2 w-fit">
              Get Funded
              <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 text-white hover:bg-white/10 rounded-full text-lg font-medium transition-all flex items-center gap-2 w-fit">
              View Challenges
            </button>
</div>
</div>
</section>
<div className="w-full bg-black/80 border border-cyan-400/30 overflow-hidden py-3 shadow-[0_0_25px_rgba(34,211,238,0.1)] rounded-2xl mb-8 backdrop-blur-sm">
<div className="ticker-wrap glass-panel bg-black/40 border-0">
<div className="ticker-content font-mono text-cyan-400 text-sm tracking-widest font-semibold">
            SARAH B. | GERMANY $50,210 • KEVIN D. | USA $12,603 • PHIL V |
            AUSTRALIA $10,779 • AARON | UK $3,387 • LIAM | NZ $2,868 • OLIVER |
            CANADA $4,185 • DANIEL | GERMANY $5,238 • SARAH B. $50,210 • KEVIN
            D. $12,603 • PHIL V $10,779 • AARON $3,387 • LIAM $2,868
          </div>
</div>
</div>
<section className="relative w-full rounded-[2.5rem] bg-black border border-white/10 overflow-hidden py-16">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-80"></div>
<div className="blob top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full"></div>
<div className="blob bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full"></div>
<div className="relative z-10 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-panel p-8 flex flex-col items-center justify-center text-center group">
<div className="w-12 h-12 mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-indigo-400 fill-indigo-400/20" data-lucide="star"></i>
</div>
<p className="text-xs text-indigo-300 font-bold uppercase tracking-widest mb-1">
              Trustpilot Reviews
            </p>
<p className="text-5xl font-bold text-white tracking-tighter mb-1">
              500+
            </p>
<p className="text-sm text-slate-400">Five Star Ratings</p>
</div>
<div className="glass-panel p-8 flex flex-col items-center justify-center text-center group">
<div className="w-12 h-12 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-emerald-400" data-lucide="banknote"></i>
</div>
<p className="text-xs text-emerald-300 font-bold uppercase tracking-widest mb-1">
              Total Funding
            </p>
<p className="text-5xl font-bold text-white tracking-tighter mb-1">
              $10M+
            </p>
<p className="text-sm text-slate-400">Capital Allocated</p>
</div>
<div className="glass-panel p-8 flex flex-col items-center justify-center text-center group">
<div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-400" data-lucide="wallet"></i>
</div>
<p className="text-xs text-blue-300 font-bold uppercase tracking-widest mb-1">
              Payouts
            </p>
<p className="text-5xl font-bold text-white tracking-tighter mb-1">
              $700k+
            </p>
<p className="text-sm text-slate-400">Cash Collected</p>
</div>
</div>
</section>

<section className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#8B5CF6] shadow-2xl shadow-purple-900/30">
<div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600"></div>
<div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
<div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
<div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-7xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-16 relative">
            Unlock global opportunities
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="glass-panel p-10 rounded-[2rem] text-left relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors"></div>
<i className="w-12 h-12 text-white mb-8" data-lucide="monitor"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
                Next-Level Tools
              </h3>
<p className="text-lg text-white/70 font-light leading-relaxed">
                Access powerful platforms designed to enhance your trading
                experience with zero latency.
              </p>
</div>
<div className="glass-panel p-10 rounded-[2rem] text-left relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors"></div>
<i className="w-12 h-12 text-white mb-8" data-lucide="zap"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
                Instant Payouts
              </h3>
<p className="text-lg text-white/70 font-light leading-relaxed">
                Withdraw your profits with ease—our traders enjoy fast,
                automated, and hassle-free payments.
              </p>
</div>
<div className="glass-panel p-10 rounded-[2rem] text-left relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors"></div>
<i className="w-12 h-12 text-white mb-8" data-lucide="globe"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
                Global Access
              </h3>
<p className="text-lg text-white/70 font-light leading-relaxed">
                Trade from anywhere in the world with a community spanning
                across 140+ countries.
              </p>
</div>
</div>
</div>
</section>
<section className="relative w-full rounded-[2.5rem] bg-[#050505] border border-white/10 overflow-hidden px-8 py-24 text-center">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-16 relative z-10">
          Choose Your Capital
        </h2>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
<div className="glass-panel card-silver p-8 rounded-2xl flex flex-col justify-between h-[340px] hover:-translate-y-2 transition-transform duration-300 group">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                  Silver
                </span>
<span className="text-4xl font-bold text-white mt-2 tracking-tighter">
                  $10k
                </span>
</div>
<i className="w-6 h-6 text-slate-400" data-lucide="credit-card"></i>
</div>
<div className="space-y-4 mb-4">
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Daily Drawdown</span>
<span className="text-white font-mono">5%</span>
</div>
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Overall Drawdown</span>
<span className="text-white font-mono">10%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Profit Split</span>
<span className="text-success font-bold">80%</span>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-colors group-hover:border-slate-400">
              Select Plan
            </button>
</div>
<div className="glass-panel card-gold p-8 rounded-2xl flex flex-col justify-between h-[340px] hover:-translate-y-2 transition-transform duration-300 group shadow-2xl shadow-yellow-900/10">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs font-bold text-yellow-500 tracking-[0.2em] uppercase">
                  Gold
                </span>
<span className="text-4xl font-bold text-white mt-2 tracking-tighter">
                  $50k
                </span>
</div>
<i className="w-6 h-6 text-yellow-500" data-lucide="credit-card"></i>
</div>
<div className="space-y-4 mb-4">
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Daily Drawdown</span>
<span className="text-white font-mono">5%</span>
</div>
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Overall Drawdown</span>
<span className="text-white font-mono">10%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Profit Split</span>
<span className="text-success font-bold">85%</span>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold transition-colors">
              Select Plan
            </button>
</div>
<div className="glass-panel card-platinum p-8 rounded-2xl flex flex-col justify-between h-[340px] hover:-translate-y-2 transition-transform duration-300 group">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs font-bold text-success tracking-[0.2em] uppercase">
                  Platinum
                </span>
<span className="text-4xl font-bold text-white mt-2 tracking-tighter">
                  $100k
                </span>
</div>
<i className="w-6 h-6 text-success" data-lucide="credit-card"></i>
</div>
<div className="space-y-4 mb-4">
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Daily Drawdown</span>
<span className="text-white font-mono">5%</span>
</div>
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Overall Drawdown</span>
<span className="text-white font-mono">10%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Profit Split</span>
<span className="text-success font-bold">90%</span>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-success/10 hover:bg-success/20 border border-success/30 text-success text-sm font-semibold transition-colors">
              Select Plan
            </button>
</div>
<div className="glass-panel card-elite p-8 rounded-2xl flex flex-col justify-between h-[340px] hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-royal/10 to-transparent"></div>
<div className="flex justify-between items-start relative z-10">
<div className="flex flex-col">
<span className="text-xs font-bold text-royal tracking-[0.2em] uppercase">
                  Elite
                </span>
<span className="text-4xl font-bold text-white mt-2 tracking-tighter">
                  $200k
                </span>
</div>
<i className="w-6 h-6 text-royal" data-lucide="crown"></i>
</div>
<div className="space-y-4 mb-4 relative z-10">
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Daily Drawdown</span>
<span className="text-white font-mono">5%</span>
</div>
<div className="flex justify-between text-sm border-b border-white/5 pb-3">
<span className="text-slate-400">Overall Drawdown</span>
<span className="text-white font-mono">10%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Profit Split</span>
<span className="text-success font-bold">90%</span>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-royal text-white text-sm font-bold transition-colors shadow-lg shadow-royal/20 relative z-10 hover:bg-[#4B4BCE]">
              Select Plan
            </button>
</div>
</div>
</section>
<section className="relative w-full rounded-[2.5rem] bg-black border border-white/10 overflow-hidden py-24 px-6 md:px-12">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              The ERT Advantage
            </h2>
<p className="text-slate-400 text-lg">
              Experience Seamless Trading Infrastructure
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-indigo-400 icon-glow" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Instant Access</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Gain instant access to your account and dive into trading
                without any delay. Automated setup.
              </p>
</div>
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-purple-400" data-lucide="headphones"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Our dedicated team is available around the clock via Live Chat
                and Discord to assist you.
              </p>
</div>
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-pink-400" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Diverse Assets</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Trade Forex, crypto, stocks, indices, and commodities with raw
                spreads and low commissions.
              </p>
</div>
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-orange-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">High Leverage</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Unlock up to 1:100 leverage power to maximize your market
                exposure and potential returns.
              </p>
</div>
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-teal-400" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                Custom Dashboard
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Stay on top of your progress with our bespoke metrics dashboard
                tailored for funded traders.
              </p>
</div>
<div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 text-blue-400" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Trading Network</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Join an exclusive trading community. Network, share ideas, and
                grow with other professionals.
              </p>
</div>
</div>
</div>
</section>



<section className="w-full space-y-8">
<div className="text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            ALL IN ONE PLACE
          </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
            Leverage diverse markets to unlock new opportunities and boost your
            investment potential.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="glass-panel p-6 rounded-3xl text-center hover:bg-white/5 transition-all group">
<div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-400" data-lucide="trending-up"></i>
</div>
<h3 className="text-white font-medium mb-2">STOCK TRADING</h3>
<p className="text-xs text-slate-400 leading-snug">
              Enter the stock market and take advantage of trading shares.
            </p>
</div>
<div className="glass-panel p-6 rounded-3xl text-center hover:bg-white/5 transition-all group">
<div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-emerald-400" data-lucide="refresh-ccw"></i>
</div>
<h3 className="text-white font-medium mb-2">CURRENCY</h3>
<p className="text-xs text-slate-400 leading-snug">
              Boost your Forex trading with enhanced market access.
            </p>
</div>
<div className="glass-panel p-6 rounded-3xl text-center hover:bg-white/5 transition-all group">
<div className="w-12 h-12 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-orange-400" data-lucide="bitcoin"></i>
</div>
<h3 className="text-white font-medium mb-2">CRYPTO</h3>
<p className="text-xs text-slate-400 leading-snug">
              Engage with the dynamic world of cryptocurrencies.
            </p>
</div>
<div className="glass-panel p-6 rounded-3xl text-center hover:bg-white/5 transition-all group">
<div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-indigo-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-white font-medium mb-2">EQUITY</h3>
<p className="text-xs text-slate-400 leading-snug">
              Trade on global equity indices and fluctuations.
            </p>
</div>
<div className="glass-panel p-6 rounded-3xl text-center hover:bg-white/5 transition-all group">
<div className="w-12 h-12 mx-auto rounded-full bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-yellow-400" data-lucide="layers"></i>
</div>
<h3 className="text-white font-medium mb-2">COMMODITY</h3>
<p className="text-xs text-slate-400 leading-snug">
              Delve into markets like metals and energy.
            </p>
</div>
</div>
</section>

<section className="relative w-full rounded-[2.5rem] bg-[#080808] border border-white/10 overflow-hidden py-24 px-8">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">
                Trader Portal
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Control at your fingertips
            </h2>
<p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-md">
              Our state-of-the-art dashboard gives you a complete overview of
              your trading performance, upcoming payouts, and account health.
            </p>
<div className="space-y-4">
<div className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 cursor-default transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="activity"></i>
</div>
<div>
<h4 className="text-white font-medium">Real-time Analytics</h4>
<p className="text-sm text-slate-500">
                    Track drawdown and profit targets live.
                  </p>
</div>
</div>
<div className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 cursor-default transition-colors">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="text-white font-medium">Instant Withdrawals</h4>
<p className="text-sm text-slate-500">
                    Request payouts with a single click.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square">
<div className="absolute inset-0 bg-indigo-500/30 blur-[100px] rounded-full"></div>
<div className="glass-panel absolute top-0 left-0 right-0 bottom-20 rounded-2xl border-white/20 p-6 flex flex-col gap-4 transform -rotate-6 translate-y-4 hover:rotate-0 transition-transform duration-700">
<div className="flex justify-between items-center mb-4">
<div className="h-3 w-24 bg-white/20 rounded-full"></div>
<div className="h-8 w-8 rounded-full bg-white/10"></div>
</div>
<div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>

<svg className="absolute bottom-0 left-0 w-full h-24" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,100 L10,80 L20,85 L30,60 L40,70 L50,40 L60,50 L70,20 L80,30 L90,10 L100,0 V100 Z" fill="url(#grad)" opacity="0.3"></path>
<path d="M0,100 L10,80 L20,85 L30,60 L40,70 L50,40 L60,50 L70,20 L80,30 L90,10 L100,0" fill="none" stroke="#818cf8" strokeWidth="2"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#818cf8', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#818cf8', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-white/5 rounded-xl"></div>
<div className="h-20 bg-white/5 rounded-xl"></div>
</div>
</div>

<div className="glass-panel absolute -bottom-4 -right-4 p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-2xl" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="check"></i>
</div>
<div>
<p className="text-xs text-slate-400">Payout Approved</p>
<p className="text-lg font-bold text-white">$4,250.00</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="w-full py-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-16 text-center">
          Live Payout Feed
        </h2>
<div className="w-full max-w-3xl mx-auto space-y-4">
<div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-success hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
<i className="w-5 h-5 text-success" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm text-white">
<span className="font-bold">Trader Alex T.</span>
                  just withdrew
                  <span className="text-success font-bold">$4,250</span>
</p>
<p className="text-xs text-slate-500">via Crypto • 2 mins ago</p>
</div>
</div>
<div className="px-3 py-1 bg-success/10 rounded-full text-[10px] font-bold text-success uppercase tracking-wider">
              Processed
            </div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-royal hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-royal/20 flex items-center justify-center">
<i className="w-5 h-5 text-royal" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm text-white">
<span className="font-bold">Marcus R.</span>
                  just withdrew
                  <span className="text-royal font-bold">$8,900</span>
</p>
<p className="text-xs text-slate-500">
                  via Bank Transfer • 12 mins ago
                </p>
</div>
</div>
<div className="px-3 py-1 bg-royal/10 rounded-full text-[10px] font-bold text-royal uppercase tracking-wider">
              Processed
            </div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-white/20 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm text-white">
<span className="font-bold">Sarah K.</span>
                  just withdrew
                  <span className="text-white font-bold">$2,150</span>
</p>
<p className="text-xs text-slate-500">via Crypto • 45 mins ago</p>
</div>
</div>
<div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Pending
            </div>
</div>
</div>
</section>
<section className="relative w-full rounded-[2.5rem] bg-black border border-white/10 overflow-hidden py-24 px-8 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            How it works
          </h2>
<p className="text-slate-400 text-lg">
            Start your funded journey in 4 simple steps.
          </p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-full hidden md:block"></div>
<div className="glass-panel p-8 rounded-3xl relative hover:-translate-y-2 transition-transform bg-black">
<div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-6 absolute -top-4 -right-4">
              01
            </div>
<div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(79,70,229,0.5)]">
<i className="w-6 h-6 text-white" data-lucide="mouse-pointer-2"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Choose Challenge
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Pick the account size and trading challenge that matches your
              goals.
            </p>
</div>
<div className="glass-panel p-8 rounded-3xl relative hover:-translate-y-2 transition-transform bg-black">
<div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-6 absolute -top-4 -right-4">
              02
            </div>
<div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(79,70,229,0.5)]">
<i className="w-6 h-6 text-white" data-lucide="bar-chart"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Pass Evaluation
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Prove your skills by hitting profit targets without violating
              drawdown rules.
            </p>
</div>
<div className="glass-panel p-8 rounded-3xl relative hover:-translate-y-2 transition-transform bg-black">
<div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-6 absolute -top-4 -right-4">
              03
            </div>
<div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(79,70,229,0.5)]">
<i className="w-6 h-6 text-white" data-lucide="award"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Get Funded</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Receive your funded account credentials and trade with our company
              capital.
            </p>
</div>
<div className="glass-panel p-8 rounded-3xl relative hover:-translate-y-2 transition-transform border-indigo-500/50 bg-indigo-900/10">
<div className="text-6xl font-bold text-indigo-500/20 mb-6 absolute -top-4 -right-4">
              04
            </div>
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
<i className="w-6 h-6 text-indigo-600" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Earn &amp; Withdraw
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Keep up to 100% of your profits. Request payouts anytime you want.
            </p>
</div>
</div>
</section>



<section className="w-full max-w-4xl mx-auto space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8 text-center">
          Frequently asked questions
        </h2>
<div className="space-y-3">
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Why should I join ERT Funded?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Do you have any country restrictions?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              When am I eligible for a withdrawal?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              When does the challenge officially start?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              What are your payout methods?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Can I use copy trading?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Minimum age to be a funded trader?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              What is the minimum payout?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              How do I request a payout?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Any inactivity period for accounts?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
<div className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
<h3 className="text-white flex justify-between">
              Are the accounts swap-free?
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</h3>
</div>
</div>
</section>

<section className="relative w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden py-24 px-8 md:px-12 text-center">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<span className="text-sm font-medium tracking-wide text-indigo-300 uppercase">
              No Capital? No Problem
            </span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
            Time To Scale Your Trading Career to New Heights
          </h2>
<p className="text-slate-400 text-xl mb-10">
            Join a community of traders with access to capital and keep more of
            your profits.
          </p>
<div className="max-w-md mx-auto bg-white/5 border border-white/10 p-2 rounded-full flex items-center">
<input className="bg-transparent border-none text-white px-6 py-2 w-full focus:outline-none placeholder:text-slate-500" placeholder="Enter Your Email Address" type="email"/>
<button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-500 transition-colors whitespace-nowrap">
              Sign Up
            </button>
</div>
<p className="text-slate-500 text-sm mt-4">
            Sign up and get free access for 30 days!
          </p>
</div>
</section>

<footer className="border-t border-white/5 pt-12 pb-8 space-y-12">
<div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500">
<div className="space-y-4">
<h4 className="text-white font-semibold">DISCLAIMER:</h4>
<p className="leading-relaxed">
              The website https://ertfunding.com is owned and operated by ERT
              Funding LLC, registered at Shams Business Centre, Sharjah Media
              City Free Zone, Al Messaned, Dubai, UAE. ERT Funding LLC (trading
              as ERT Funding) and its affiliates (collectively, the “Company”)
              provide content solely for informational purposes.
            </p>
<p className="leading-relaxed">
              The information presented on this website is not intended to be:
              a) Investment advice, b) An offer or solicitation to buy or sell
              any security, or c) A recommendation, endorsement, or sponsorship
              of any specific security, company, or fund. ERT Funding is not a
              broker and does not accept client deposits. All broker-related
              services are provided exclusively by TradeLocker. ERT Funding has
              no control over pricing, slippage, or any buying/selling
              activities.
            </p>
<p className="leading-relaxed">
              ERT Funding serves solely as an Introducing Broker for
              TradeLocker, offering clients access to demo accounts within a
              simulated trading environment. Hypothetical Performance Disclosure
              The accounts used for ERT Funding services are demo accounts,
              meaning they represent hypothetical performance and come with
              certain limitations. Hypothetical performance does not reflect
              actual trading, and there is no guarantee that any account will
              achieve profits or losses similar to those projected.
            </p>
<p className="leading-relaxed">
              Trading in financial markets involves significant risks, and we
              advise against risking more than you can afford to lose.
            </p>
</div>
<div className="space-y-6 md:pl-12">
<div>
<h4 className="text-white font-semibold mb-2">Contact Support</h4>
<p className="mb-4">
                Reach out to our dedicated support team for comprehensive
                assistance with your trading journey.
              </p>
<a className="text-indigo-400 hover:text-white transition-colors" href="mailto:support@ertfunded.com">
                support@ertfunded.com
              </a>
</div>
<div>
<h4 className="text-white font-semibold mb-2">Live Chat</h4>
<p className="mb-4">
                Connect instantly with our support specialists.
              </p>
<button className="bg-[#229ED9] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1e8dbf] transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="send"></i>
                Start Telegram Chat
              </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
<span>Copyright © 2025. All Rights Reserved</span>
<span>Website by DesignFlo</span>
</div>
</footer>
</main>




    </>
  );
}
