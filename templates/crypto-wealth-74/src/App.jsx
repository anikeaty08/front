import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function startTimer(duration, display) {
            let timer = duration, minutes, seconds, milliseconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                milliseconds = Math.floor(Math.random() * 99);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

                display.textContent = minutes + ":" + seconds + ":" + milliseconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            let tenMinutes = 60 * 10,
                display = document.querySelector('#timer');
            startTimer(tenMinutes, display);
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="stars"></div>
<div className="fixed inset-0 pointer-events-none z-0">
<div className="orb-glow top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-purple-600/20"></div>
<div className="orb-glow bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/20"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-cyan-500/10 bg-[#030014]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-cyan-500 rounded-sm blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative w-full h-full border border-cyan-500/30 bg-[#050a14] flex items-center justify-center">
<iconify-icon className="text-cyan-400 text-xl animate-spin-slow" icon="lucide:aperture" strokeWidth="1.5" style={{animationDuration: '10s'}}></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="font-sci font-bold text-xl tracking-wider text-white leading-none text-glow-cyan">AURA</span>
<span className="font-tech text-[10px] uppercase tracking-[0.3em] text-cyan-500">System v4.0</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-10 font-tech text-sm uppercase tracking-widest text-slate-400">
<a className="hover:text-cyan-400 hover:text-glow-cyan transition-all" href="#features">Technology</a>
<a className="hover:text-cyan-400 hover:text-glow-cyan transition-all" href="#returns">Yield Metrics</a>
<a className="hover:text-cyan-400 hover:text-glow-cyan transition-all" href="#security">Security Protocol</a>
<a className="hover:text-cyan-400 hover:text-glow-cyan transition-all" href="#reviews">Transmission Logs</a>
</div>

<div className="flex items-center gap-6">
<div className="hidden sm:flex flex-col items-end mr-2">
<span className="text-[10px] text-emerald-400 font-mono flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 box-shadow-[0_0_10px_#10b981]"></span>
</span>
                        NETWORKS ONLINE
                    </span>
<span className="font-tech text-xs text-cyan-500/70 tracking-wider">BTC // $64,230.15</span>
</div>
<a className="hidden sm:flex relative group overflow-hidden bg-transparent border border-cyan-500/30 px-6 py-2.5" href="#register">
<div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500 shadow-[0_0_10px_#00f3ff]"></div>
<span className="relative font-sci text-xs font-bold uppercase tracking-widest text-cyan-100 group-hover:text-white transition-colors">Connect Node</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 z-10 overflow-hidden">

<div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-900 via-black to-black opacity-40 blur-3xl animate-pulse"></div>
<div className="cyber-grid"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 relative">

<div className="inline-flex items-center gap-3 px-4 py-2 border-l-2 border-cyan-500 bg-cyan-950/20 backdrop-blur-sm mb-10 animate-float">
<iconify-icon className="text-cyan-400" icon="lucide:cpu" width="16"></iconify-icon>
<span className="font-tech text-cyan-100 text-sm uppercase tracking-widest">Quantum Algorithm Active</span>
</div>
<h1 className="font-sci text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white leading-[1.1] mb-8">
                        Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">€250</span><br/>
                        Extract <span className="gradient-gold text-glow-gold">€5,000</span> <span className="text-3xl align-top text-cyan-500">/DAY</span>
</h1>
<p className="font-tech text-xl text-slate-300 max-w-xl leading-relaxed mb-12 border-l border-white/10 pl-6">
                        Automated celestial arbitrage. The first decentralized protocol leveraging quantum-computing probability models to secure institutional yield for retail nodes.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 mb-12">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 relative flex items-center justify-center">
<div className="absolute inset-0 border border-cyan-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
<iconify-icon className="text-cyan-400 text-2xl relative z-10" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="font-sci text-sm font-bold text-white uppercase tracking-wider">CertiK Audit</div>
<div className="text-[10px] font-tech text-cyan-500 uppercase">Verified Secure</div>
</div>
</div>
<div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block"></div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 relative flex items-center justify-center">
<div className="absolute inset-0 border border-amber-500/30 rotate-45 group-hover:-rotate-90 transition-transform duration-700"></div>
<iconify-icon className="text-amber-400 text-2xl relative z-10" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="font-sci text-sm font-bold text-white uppercase tracking-wider">Instant Transfer</div>
<div className="text-[10px] font-tech text-amber-500 uppercase">Latency &lt; 20ms</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-dashed border-white/10 flex items-center gap-4">
<div className="flex gap-1 text-emerald-400 text-xs">
<iconify-icon className="fill-current glow" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current glow" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current glow" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current glow" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current glow" icon="lucide:star"></iconify-icon>
</div>
<span className="font-tech text-sm text-slate-400"><strong className="text-white">4.9/5 RATING</strong> // FROM 12,000+ NODES</span>
</div>
</div>

<div className="lg:col-span-5 relative" id="register">

<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-xl opacity-30"></div>
<div className="holo-card rounded-none p-8 z-10 clip-path-polygon">

<div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
<div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>

<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
<div>
<h3 className="font-sci text-xl font-bold text-white uppercase tracking-wider text-glow-cyan">Initialize Access</h3>
<p className="font-tech text-xs text-cyan-500 mt-1 uppercase tracking-widest">Secure Channel Encrypted</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="font-tech text-[10px] text-red-400 uppercase tracking-widest">Window Closing</span>
</div>
<div className="font-mono text-lg font-bold text-white" id="timer">09:59:00</div>
</div>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-tech text-[10px] text-cyan-300 uppercase tracking-widest ml-1">Identity // First</label>
<input className="w-full sci-input rounded-none px-4 py-3 text-sm placeholder-slate-600" placeholder="ENTER NAME" type="text"/>
</div>
<div className="space-y-1">
<label className="font-tech text-[10px] text-cyan-300 uppercase tracking-widest ml-1">Identity // Last</label>
<input className="w-full sci-input rounded-none px-4 py-3 text-sm placeholder-slate-600" placeholder="ENTER SURNAME" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="font-tech text-[10px] text-cyan-300 uppercase tracking-widest ml-1">Comms // Email</label>
<div className="relative group">
<iconify-icon className="absolute right-3 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" icon="lucide:mail" width="16"></iconify-icon>
<input className="w-full sci-input rounded-none pl-4 pr-10 py-3 text-sm placeholder-slate-600" placeholder="USER@DOMAIN.COM" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="font-tech text-[10px] text-cyan-300 uppercase tracking-widest ml-1">Comms // Uplink</label>
<div className="flex gap-2">
<div className="w-24 sci-input rounded-none flex items-center justify-center text-sm text-cyan-500 font-bold border-r-0">
                                        +44
                                    </div>
<input className="flex-1 sci-input rounded-none px-4 py-3 text-sm placeholder-slate-600" placeholder="7000 000000" type="tel"/>
</div>
</div>
<button className="group relative w-full mt-6 overflow-hidden bg-cyan-900/20 py-4 transition-all hover:bg-cyan-900/40 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]" type="button">
<div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400 group-hover:w-full transition-all duration-300 opacity-10"></div>
<div className="relative flex items-center justify-center gap-3">
<span className="font-sci font-bold text-sm tracking-[0.2em] text-cyan-100 group-hover:text-white transition-colors uppercase">Execute Protocol</span>
<iconify-icon className="text-cyan-400 group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right"></iconify-icon>
</div>
</button>
</form>
</div>

<div className="absolute -right-16 top-1/3 animate-float pointer-events-none hidden xl:block">
<div className="relative w-32 h-32 rounded-full border border-amber-500/30 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
<div className="absolute inset-0 rounded-full border border-amber-500/10 animate-ping"></div>
<iconify-icon className="text-amber-500 text-6xl drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" icon="lucide:bitcoin"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-8 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
<div className="max-w-7xl mx-auto px-6">
<p className="text-center font-tech text-[10px] uppercase tracking-[0.5em] text-cyan-500/60 mb-8">Synchronized Liquidity Pools</p>
<div className="flex justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="filter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" height="24" icon="logos:bitcoin"></iconify-icon>
<iconify-icon className="filter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" height="24" icon="logos:ethereum"></iconify-icon>
<iconify-icon className="text-yellow-500" height="24" icon="simple-icons:binance"></iconify-icon>
<iconify-icon className="text-blue-500" height="24" icon="simple-icons:coinbase"></iconify-icon>
<iconify-icon height="24" icon="logos:tether"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 relative" id="returns">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
<div className="holo-card p-1 relative border-l-4 border-l-cyan-500">
<div className="bg-[#050a14] p-6">
<div className="flex justify-between items-start mb-8 border-b border-dashed border-white/10 pb-4">
<div>
<div className="font-tech text-xs text-cyan-500 mb-1 uppercase tracking-wider">Asset Valuation</div>
<div className="font-sci text-3xl font-bold text-white tracking-widest">€42,593.21</div>
</div>
<div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 text-[10px] font-mono border border-emerald-500/30">
                                    ▲ 18.4% (24H)
                                </div>
</div>

<div className="h-48 flex items-end justify-between gap-1 mb-6 px-2">
<div className="w-full bg-cyan-900/30 h-[30%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-900/30 h-[45%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-900/30 h-[35%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-900/30 h-[60%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-900/30 h-[50%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-900/30 h-[75%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-1 bg-cyan-500"></div></div>
<div className="w-full bg-gradient-to-t from-cyan-500/20 to-cyan-400/20 h-[90%] relative shadow-[0_0_15px_rgba(0,243,255,0.2)] border-t border-cyan-400">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[9px] text-cyan-300">CURRENT_STATE</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="w-full py-3 bg-emerald-600/20 text-emerald-400 text-xs font-bold font-sci uppercase tracking-wider border border-emerald-500/50 hover:bg-emerald-600/40 transition-colors">Withdraw</button>
<button className="w-full py-3 bg-cyan-600/20 text-cyan-400 text-xs font-bold font-sci uppercase tracking-wider border border-cyan-500/50 hover:bg-cyan-600/40 transition-colors">Re-Invest</button>
</div>
</div>
</div>
</div>

<div>
<h2 className="font-sci text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Institutional Grade.<br/>
<span className="text-slate-600">Retail Interface.</span>
</h2>
<p className="font-tech text-lg text-slate-400 mb-10 leading-relaxed">
                        Legacy banking offers 0.5% APY. Our AI Arbitrage protocol scans 40 galactic exchanges simultaneously to identify price anomalies, executing milli-second trades to secure daily yield.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-5 p-5 border border-white/5 bg-white/5 hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
<div className="w-10 h-10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="relative">
<h4 className="font-sci text-white font-bold text-sm uppercase tracking-wider">Auto-Compounding</h4>
<p className="font-tech text-sm text-slate-500 mt-2">Profits are automatically re-injected into the algorithm curve to accelerate mass.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 border border-white/5 bg-white/5 hover:border-amber-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
<div className="w-10 h-10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all">
<iconify-icon icon="lucide:key" width="20"></iconify-icon>
</div>
<div className="relative">
<h4 className="font-sci text-white font-bold text-sm uppercase tracking-wider">Non-Custodial Core</h4>
<p className="font-tech text-sm text-slate-500 mt-2">Total asset sovereignty. Withdraw funds to your cold storage 24/7 without friction.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative" id="features">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,243,255,0.1),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="font-tech text-cyan-500 text-xs uppercase tracking-[0.3em] border border-cyan-500/30 px-3 py-1">Protocol Workflow</span>
<h2 className="font-sci text-3xl md:text-5xl font-bold text-white mt-6 mb-6">Three Steps to Wealth</h2>
<div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="holo-card p-10 hover:-translate-y-2 transition-transform duration-500 group">
<div className="font-sci text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-cyan-500/10 transition-colors">01</div>
<div className="w-16 h-16 border border-cyan-500/30 flex items-center justify-center mb-8 text-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] transition-all">
<iconify-icon icon="lucide:user-plus" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-sci text-lg font-bold text-white mb-4 uppercase tracking-wider">Register Access</h3>
<p className="font-tech text-sm text-slate-400 leading-relaxed">Secure your node on the whitelist. Input your encrypted details to verify blockchain eligibility.</p>
</div>

<div className="holo-card p-10 hover:-translate-y-2 transition-transform duration-500 group">
<div className="font-sci text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-cyan-500/10 transition-colors">02</div>
<div className="w-16 h-16 border border-cyan-500/30 flex items-center justify-center mb-8 text-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] transition-all">
<iconify-icon icon="lucide:coins" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-sci text-lg font-bold text-white mb-4 uppercase tracking-wider">Inject Capital</h3>
<p className="font-tech text-sm text-slate-400 leading-relaxed">Initialize with €250. This working capital is utilized by the AI to execute high-frequency trades.</p>
</div>

<div className="holo-card p-10 hover:-translate-y-2 transition-transform duration-500 group border-amber-500/30">
<div className="font-sci text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-amber-500/10 transition-colors">03</div>
<div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mb-8 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-sci text-lg font-bold text-white mb-4 uppercase tracking-wider">Collect Yield</h3>
<p className="font-tech text-sm text-slate-400 leading-relaxed">Observe the algorithm. Withdraw earnings daily or enable auto-compound for exponential gains.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="reviews">
<div className="cyber-grid top-0 bottom-auto h-[50%] transform rotate-180"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="font-sci text-3xl md:text-4xl font-bold text-white mb-16 text-center uppercase tracking-widest text-glow-cyan">Decrypted User Transmissions</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="holo-card p-8">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-sm border border-white/20 p-0.5">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div>
<div className="font-sci text-sm font-bold text-white uppercase tracking-wider">Marcus J.</div>
<div className="font-mono text-[10px] text-cyan-500">ID: 8829-UK</div>
</div>
</div>
<iconify-icon className="text-white/20 text-4xl" icon="lucide:quote"></iconify-icon>
</div>
<p className="font-tech text-sm text-slate-300 leading-relaxed mb-6">
                        "I've tried forex and stocks, but the <span className="text-cyan-400">Aura AI</span> core is superior. The interface is clean, dark mode is beautiful, and I generated €2,300 in cycle one."
                    </p>
<div className="w-full h-px bg-white/10 mb-4"></div>
<div className="flex justify-between items-center">
<div className="flex text-amber-500 text-xs gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<span className="font-mono text-xs text-emerald-400">NET: +€12,450</span>
</div>
</div>

<div className="holo-card p-8 translate-y-0 md:translate-y-8 border-l-2 border-l-purple-500">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-sm border border-white/20 p-0.5">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=47"/>
</div>
<div>
<div className="font-sci text-sm font-bold text-white uppercase tracking-wider">Sarah W.</div>
<div className="font-mono text-[10px] text-purple-500">ID: 9921-DE</div>
</div>
</div>
<iconify-icon className="text-white/20 text-4xl" icon="lucide:quote"></iconify-icon>
</div>
<p className="font-tech text-sm text-slate-300 leading-relaxed mb-6">
                        "Finally, a platform that feels like 2050. The mobile uplink is seamless. I deposited €250 as a test probe, and withdrawn my capital within 48 hours."
                    </p>
<div className="w-full h-px bg-white/10 mb-4"></div>
<div className="flex justify-between items-center">
<div className="flex text-amber-500 text-xs gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<span className="font-mono text-xs text-emerald-400">NET: +€4,120</span>
</div>
</div>

<div className="holo-card p-8">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-sm border border-white/20 p-0.5">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=12"/>
</div>
<div>
<div className="font-sci text-sm font-bold text-white uppercase tracking-wider">David C.</div>
<div className="font-mono text-[10px] text-cyan-500">ID: 3321-SG</div>
</div>
</div>
<iconify-icon className="text-white/20 text-4xl" icon="lucide:quote"></iconify-icon>
</div>
<p className="font-tech text-sm text-slate-300 leading-relaxed mb-6">
                        "Automated stop-loss saved me during the dip. The profit-taking bot maximized gains. Pure mathematical precision."
                    </p>
<div className="w-full h-px bg-white/10 mb-4"></div>
<div className="flex justify-between items-center">
<div className="flex text-amber-500 text-xs gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<span className="font-mono text-xs text-emerald-400">NET: +€8,900</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020005] border-t border-cyan-500/20 pt-20 pb-32 lg:pb-8 relative">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#00f3ff]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-cyan-500 text-xl" icon="lucide:aperture"></iconify-icon>
<span className="font-sci font-bold text-white text-lg tracking-wider">AURA</span>
</div>
<p className="font-tech text-xs text-slate-500 leading-relaxed uppercase tracking-wide">
                        Pioneering decentralized automated wealth generation through quantum-resistant algorithms.
                    </p>
</div>
<div>
<h4 className="font-sci text-white text-xs font-bold uppercase tracking-widest mb-6 text-cyan-500">Ecosystem</h4>
<ul className="space-y-3 font-tech text-xs text-slate-500 tracking-wider">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Yield Farming</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Governance DAO</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Tokenomics</a></li>
</ul>
</div>
<div>
<h4 className="font-sci text-white text-xs font-bold uppercase tracking-widest mb-6 text-cyan-500">Support</h4>
<ul className="space-y-3 font-tech text-xs text-slate-500 tracking-wider">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">API Keys</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">System Status</a></li>
</ul>
</div>
<div>
<h4 className="font-sci text-white text-xs font-bold uppercase tracking-widest mb-6 text-cyan-500">Protocol</h4>
<ul className="space-y-3 font-tech text-xs text-slate-500 tracking-wider">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Risk Disclosure</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<div className="bg-white/5 border border-white/5 p-4 mb-6">
<p className="font-tech text-[10px] text-slate-500 text-justify leading-relaxed tracking-wide">
<strong className="text-slate-400">WARNING:</strong> Cryptocurrency trading involves substantial risk. You should not invest more than you can afford to lose. The information provided on this terminal does not constitute investment advice. This interface serves as a marketing funnel for regulated third-party brokers.
                    </p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-slate-600">
<p>© 2024 Aura Wealth Protocol. All rights reserved.</p>
<div className="flex gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:lock" width="10"></iconify-icon> SSL ENCRYPTED</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:shield-check" width="10"></iconify-icon> GDPR COMPLIANT</span>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-[#020005]/90 backdrop-blur-xl border-t border-cyan-500/30 lg:hidden">
<a className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-sci font-bold uppercase tracking-widest py-3.5 shadow-[0_0_20px_rgba(0,243,255,0.4)]" href="#register">
            Initialize Access
        </a>
</div>



    </>
  );
}
