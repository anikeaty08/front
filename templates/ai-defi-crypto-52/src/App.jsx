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



        // Init Icons
        lucide.createIcons();

        // Scroll Progress Logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height);
            document.getElementById("scrollProgress").style.transform = `scaleX(${scrolled})`;
            
            // Navbar Blur Effect
            const nav = document.querySelector('nav');
            if(window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.classList.remove('bg-transparent');
            } else {
                // Keep minimal bg
            }
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
      

<div className="fixed top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-slate-950 to-transparent pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 w-full z-[60] origin-left scale-x-0 transition-transform duration-100" id="scrollProgress"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="text-white w-4 h-4 stroke-[2]" data-lucide="sparkles"></i>
</div>
<span className="text-white font-medium text-lg tracking-tight">ChatGPT Token</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#tokenomics">Tokenomics</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Whitepaper</a>
<button className="relative group px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative text-sm font-medium text-white flex items-center gap-2">
                        Buy CGPT <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</div>

<button className="md:hidden text-slate-300"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
</nav>

<section className="relative pt-32 pb-20 min-h-screen flex items-center z-10" id="hero">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-violet-500/20 text-violet-300 text-xs font-medium tracking-wide">
<i className="w-3 h-3 fill-violet-400 text-violet-400" data-lucide="zap"></i>
                    AI-Native Protocol V1.0
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Talk to your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-white text-glow">Money.</span>
</h1>
<p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                    The first community-driven token designed for AI agents, conversational commerce, and the autonomous economy. Not affiliated with OpenAI.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-8 py-4 rounded-full bg-slate-50 text-slate-950 font-semibold hover:bg-white hover:scale-105 transition-all flex items-center gap-2">
<i className="w-5 h-5" data-lucide="wallet"></i>
                        Buy CGPT
                    </button>
<button className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                        View Tokenomics
                    </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/5">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Holders</p>
<p className="text-white text-xl font-medium flex items-center gap-2">
                            12,402 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">24h Vol</p>
<p className="text-white text-xl font-medium">$4.2M</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Chain</p>
<div className="flex items-center gap-1 text-white text-xl font-medium">
<i className="w-4 h-4 text-cyan-400" data-lucide="link"></i> Ethereum
                        </div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-cyan-400/20 rounded-[40px] blur-3xl -z-10"></div>
<div className="w-full max-w-md glass rounded-3xl p-6 relative border border-white/10 shadow-2xl shadow-violet-900/20">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
<i className="w-6 h-6 text-white" data-lucide="bot"></i>
</div>
<div>
<h3 className="text-white font-medium">ChatGPT Token</h3>
<p className="text-xs text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                                </p>
</div>
</div>
<i className="text-slate-500 w-5 h-5" data-lucide="more-horizontal"></i>
</div>

<div className="space-y-6">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex-shrink-0 flex items-center justify-center text-violet-400">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="space-y-2">
<div className="glass bg-white/5 rounded-2xl rounded-tl-none p-4 text-slate-300 text-sm leading-relaxed">
                                    Hello! I'm the interface for your money. You can ask me to swap tokens, tip creators, or analyze your portfolio.
                                </div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-300">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div className="glass bg-violet-600/20 border-violet-500/30 rounded-2xl rounded-tr-none p-4 text-white text-sm">
                                Send 500 CGPT to @AgentSmith for the API access.
                            </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex-shrink-0 flex items-center justify-center text-violet-400">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="glass bg-white/5 rounded-2xl rounded-tl-none p-4 space-y-3 w-full">
<p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Transaction Preview</p>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-slate-400 text-sm">Amount</span>
<span className="text-white font-medium text-sm">500.00 CGPT</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-slate-400 text-sm">Gas Fee</span>
<span className="text-green-400 font-medium text-xs flex items-center gap-1"><i className="w-3 h-3" data-lucide="zap"></i> $0.002</span>
</div>
<button className="w-full py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-200 transition mt-2">Confirm Payment</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900/30 border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                        Built for AI agents, humans, <br/><span className="text-slate-500">and everything in between.</span>
</h2>
<div className="space-y-6 text-lg text-slate-400 font-light">
<p>ChatGPT Token is a utility asset reimagined for the era of autonomous intelligence. While traditional crypto focuses on human trading, CGPT is optimized for machine-to-machine (M2M) micro-transactions.</p>
<p>Whether you are gating an advanced LLM, tipping a content creator, or powering a swarm of autonomous agents, CGPT provides the high-velocity, low-latency settlement layer required.</p>
<div className="pt-6">
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-green-500/10 text-green-400"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-slate-300">Optimized for AI API workflows</span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-green-500/10 text-green-400"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-slate-300">Community-governed roadmap</span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-green-500/10 text-green-400"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-slate-300">Gasless delegation for bots</span>
</li>
</ul>
</div>
<div className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex gap-3">
<i className="text-yellow-500 w-5 h-5 flex-shrink-0" data-lucide="alert-triangle"></i>
<p className="text-xs text-yellow-200/80">Disclaimer: This is a fictional community token concept. It is not affiliated with, endorsed by, or connected to OpenAI.</p>
</div>
</div>
</div>
<div className="grid gap-6">

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI-Native</h3>
<p className="text-slate-400 leading-relaxed">Protocol architecture designed to handle high-frequency, low-value transactions generated by automated bots.</p>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="blocks"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Composable</h3>
<p className="text-slate-400 leading-relaxed">Drop-in SDKs for Python and JS make it effortless to integrate payment logic into your LangChain agents.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">What you can do with CGPT</h2>
<p className="text-lg text-slate-400">Real-world scenarios demonstrated as conversations.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass rounded-3xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">Agent Economy</span>
<i className="text-slate-500 w-5 h-5" data-lucide="bot"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm">
                            Generate 50 variations of this logo.
                        </div>
<div className="bg-violet-600/10 border border-violet-500/20 rounded-lg p-3 text-white text-sm">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-violet-400" data-lucide="lock"></i>
<span className="text-xs text-violet-300">Payment Required</span>
</div>
                            Task cost: 20 CGPT. Auto-deducting from wallet...
                        </div>
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm opacity-60">
                            Processing 50 images...
                        </div>
</div>
</div>

<div className="glass rounded-3xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">Access Control</span>
<i className="text-slate-500 w-5 h-5" data-lucide="key"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm">
                            Unlock GPT-5 Turbo model for this session.
                        </div>
<div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3 text-white text-sm">
<span className="text-cyan-400 font-medium block mb-1">Access Granted</span>
                            Staked 100 CGPT required for premium tier active.
                        </div>
</div>
</div>

<div className="glass rounded-3xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-pink-400 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">Social Tipping</span>
<i className="text-slate-500 w-5 h-5" data-lucide="heart"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm">
                            This code snippet saved my life! Thanks.
                        </div>
<div className="bg-pink-900/20 border border-pink-500/20 rounded-lg p-3 text-white text-sm flex justify-between items-center">
<span>Tip Sent</span>
<span className="font-bold text-pink-400">+50 CGPT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-y border-white/5" id="tokenomics">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative flex items-center justify-center">
<div className="absolute inset-0 bg-violet-500/10 blur-[100px] rounded-full"></div>

<div className="relative w-80 h-80 rounded-full border-[20px] border-slate-800 flex items-center justify-center">
<div className="absolute inset-0 border-[20px] border-violet-500 rounded-full" style={{clipPath: 'polygon(50% 50%, 0 0, 50% 0)'}}></div> 
<div className="absolute inset-0 border-[20px] border-cyan-400 rounded-full rotate-45" style={{clipPath: 'polygon(50% 50%, 0 0, 100% 0)'}}></div> 
<div className="absolute inset-0 border-[20px] border-indigo-600 rounded-full rotate-[135deg]" style={{clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%)'}}></div>
<div className="text-center z-10">
<p className="text-slate-400 text-sm">Total Supply</p>
<p className="text-3xl font-bold text-white tracking-tight">1B</p>
<p className="text-violet-400 text-sm font-medium">CGPT</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-2">Transparent Tokenomics</h2>
<p className="text-lg text-slate-400 mb-10">Designed for long-term alignment between developers, users, and AI entities.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-violet-500"></span>
<span className="text-slate-200 font-medium">Ecosystem Rewards</span>
</div>
<span className="text-slate-400">40%</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-cyan-400"></span>
<span className="text-slate-200 font-medium">Liquidity Pool</span>
</div>
<span className="text-slate-400">30%</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-indigo-600/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-indigo-600"></span>
<span className="text-slate-200 font-medium">Treasury &amp; Dev</span>
</div>
<span className="text-slate-400">20%</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-slate-700"></span>
<span className="text-slate-200 font-medium">Team (Vested 4yrs)</span>
</div>
<span className="text-slate-400">10%</span>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
<i className="w-4 h-4" data-lucide="file-code"></i>
                        Contract: <span className="font-mono text-slate-400">0x...71a2</span> (Renounced)
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="network">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.3'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Network Pulse</h2>
<p className="text-slate-400">Live activity on the ChatGPT Protocol.</p>
</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-900/20 px-3 py-1 rounded-full border border-green-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Systems Operational
                </div>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Transactions (24h)</p>
<p className="text-2xl font-mono text-white">142,893</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Avg. Block Time</p>
<p className="text-2xl font-mono text-white">~2.1s</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Active Agents</p>
<p className="text-2xl font-mono text-white">4,201</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Total Staked</p>
<p className="text-2xl font-mono text-white">34.2%</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="roadmap">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">The Road to Autonomy</h2>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-violet-400 font-medium text-sm">Phase 1 (Completed)</span>
<h3 className="text-xl text-white font-medium">Foundation</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-violet-500 rounded-full ring-4 ring-violet-500/20"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-400 text-base">Token launch, DEX listing, and initial community treasury setup.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-cyan-400 font-medium text-sm">Phase 2 (Current)</span>
<h3 className="text-xl text-white font-medium">Agent Integrations</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-cyan-400/20 animate-pulse"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-400 text-base">Python SDK release, LangChain plugin, and first hackathon.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-slate-500 font-medium text-sm">Phase 3</span>
<h3 className="text-xl text-slate-300 font-medium">The OS for AI</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-slate-700 rounded-full"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-500 text-base">Native L2 chain development and decentralized compute marketplace.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>Is this affiliated with OpenAI?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                        No. ChatGPT Token is a community-driven project inspired by the AI revolution. We have no official affiliation with OpenAI, ChatGPT, or Sam Altman.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>How do I buy CGPT?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                        You can purchase CGPT on Uniswap or through our integrated dApp using ETH. Copy the official contract address from our Tokenomics section.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>What is the utility?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                        CGPT is used for paying transaction fees within our agent ecosystem, tipping creators, and governing the protocol's future parameters.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#01030b] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
<i className="text-slate-400 w-3 h-3" data-lucide="sparkles"></i>
</div>
<span className="text-white font-medium">ChatGPT Token</span>
</div>
<p className="text-slate-500 text-sm mb-6">
                        The currency of the autonomous web. <br/>Built by the community, for the bots.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="message-circle"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Protocol</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition" href="#">Tokenomics</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Roadmap</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Whitepaper</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Audit</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Developers</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition" href="#">Documentation</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Python SDK</a></li>
<li><a className="hover:text-violet-400 transition" href="#">API Reference</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Grants</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 ChatGPT Token Community. Not affiliated with OpenAI.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/40 flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="command"></i>
</button>
</div>


    </>
  );
}
