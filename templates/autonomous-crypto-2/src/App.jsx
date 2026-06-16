import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const diagramGroups = {
        core: document.getElementById('diagram-core'),
        process: document.getElementById('diagram-process'),
        mindset: document.getElementById('diagram-mindset'),
        dynamics: document.getElementById('diagram-dynamics'),
        orbit: document.getElementById('diagram-orbit')
      };
      
      const captionEl = document.querySelector('#diagram-caption span:last-child');
      
      const resetDiagram = () => {
        Object.values(diagramGroups).forEach(g => { 
          if(g) {
            g.classList.remove('active'); 
            g.style.opacity = '0.2';
          }
        });
      };

      const activateState = (trigger) => {
        resetDiagram();
        if (trigger === 'process') {
          diagramGroups.process.classList.add('active');
          diagramGroups.process.style.opacity = '1';
          if(captionEl) captionEl.textContent = "Scanning Markets...";
        } else if (trigger === 'core') {
          diagramGroups.core.classList.add('active');
          diagramGroups.core.style.opacity = '1';
          diagramGroups.orbit.style.opacity = '0.5';
          if(captionEl) captionEl.textContent = "Calculating EV...";
        } else if (trigger === 'dynamics') {
          diagramGroups.dynamics.classList.add('active');
          diagramGroups.dynamics.style.opacity = '1';
          if(captionEl) captionEl.textContent = "Buying YES Shares";
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const trigger = entry.target.getAttribute('data-trigger');
            activateState(trigger);
          }
        });
      }, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1
      });

      document.querySelectorAll('.scroll-chapter').forEach(el => observer.observe(el));
      setTimeout(() => activateState('process'), 500);
    });
  


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>

<nav className="fixed flex pr-4 pl-4 top-6 right-0 left-0 justify-center z-50">
<div className="flex shadow-black/50 bg-[#0a0a0a]/80 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="inline-flex items-center justify-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm"></div>
<span className="font-oswald font-bold tracking-tight text-xl">POKS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Strategies</a>
<a className="hover:text-white transition-colors" href="#">Performance</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<a className="hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
          Launch Agent
        </a>
</div>
</nav>
<main className="relative z-10">

<div className="container border-x flex flex-col text-center max-w-7xl border-white/10 mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 uppercase tracking-wider animate-pulse aura-reveal is-visible">
    Live on Polymarket Mainnet
  </div>

<h1 className="md:text-8xl lg:text-9xl bg-clip-text leading-[0.9] aura-reveal is-visible text-5xl font-oswald uppercase text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-zinc-600 max-w-5xl mr-auto mb-6 ml-auto" style={{animationDelay: '100ms'}}>
    The 24/7 Agent
    <br/>
<span className="text-zinc-600">For Polymarket.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal aura-reveal is-visible" style={{animationDelay: '200ms'}}>
    Poks is the first fully autonomous AI agent for prediction markets. It executes your strategies, hedges risk, and arbs inefficiencies while you sleep.
  </p>

<div className="flex flex-col sm:flex-row aura-reveal is-visible gap-x-4 gap-y-4 items-center" style={{animationDelay: '300ms'}}>
<a className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
      Connect Wallet
      <iconify-icon height="16" icon="solar:wallet-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors" href="#">
<iconify-icon height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
      View Live PnL
    </a>
</div>

<div className="aura-reveal is-visible text-xs font-medium text-zinc-500 tracking-wide mt-12" style={{animationDelay: '400ms'}}>
    Analyzing Liquid Markets On
  </div>
<div className="flex gap-8 mt-6 opacity-30 grayscale aura-reveal" style={{animationDelay: '500ms'}}>

<span className="font-oswald text-lg">POLYMARKET</span>
<span className="font-oswald text-lg">KALSHI</span>
<span className="font-oswald text-lg">BETFAIR</span>
<span className="font-oswald text-lg">ETHEREUM</span>
</div>
</div>
<section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none">
</div>

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 relative z-10">
<div className="flex-1 aura-reveal">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs font-medium tracking-wide uppercase">
      The Human Limitation
    </div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
      Why Humans <span className="text-zinc-600">Get Liquors</span>
</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="leading-relaxed lg:text-left text-lg text-zinc-400 text-right">
      Markets operate 24/7. Humans need sleep, feel fear, and hesitate. Poks is a cold, calculating machine built for pure alpha.
    </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/[0.01] relative z-10 aura-reveal" style={{animationDelay: '200ms'}}>

<div className="group md:p-12 hover:bg-white/[0.02] transition-colors duration-300 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:text-purple-400 transition-colors text-purple-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center rounded-lg">
<iconify-icon height="24" icon="solar:heart-broken-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Emotional Bias</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">Panic selling and FOMO destroy portfolios. Poks executes strictly on probability.</p>
</div>

<div className="group md:p-12 hover:bg-white/[0.02] transition-colors duration-300 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:text-purple-400 transition-colors text-purple-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center rounded-lg">
<iconify-icon height="24" icon="solar:bed-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Sleep Constraints</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">News breaks when you sleep. Poks monitors feeds and executes trades 24/7.</p>
</div>

<div className="group relative p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300">
<div className="flex group-hover:text-purple-400 transition-colors text-purple-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 shadow-inner items-center justify-center rounded-lg">
<iconify-icon height="24" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Latency Gap</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-12">By the time you read the news, the price has moved. Poks reacts in milliseconds.</p>
</div>
</div>
</section>

<div className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-12">
<h2 className="text-4xl font-bold text-white tracking-tight">The Autopilot Advantage</h2>
<p className="text-zinc-400 mt-2">A unified interface for automated prediction market dominance.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-black/40 backdrop-blur-sm rounded-none overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="lg:col-span-7 flex flex-col flashlight-card aura-reveal h-[500px]" style={{-MouseX: '89px', -MouseY: '5.75px'}}>
<div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative group h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Real-time Sentiment</h3>
<p className="text-sm text-zinc-400">Scraping Twitter, News, and On-chain volume.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900">
<iconify-icon className="text-white" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>

<div className="relative flex-grow w-full border border-white/5 bg-[#050505] rounded-xl overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-40">
<svg height="100%" width="100%">
<path className="animate-pulse" d="M0,80 Q50,70 100,50 T200,40 T300,20" fill="none" stroke="#a855f7" strokeWidth="2"></path>
<path className="opacity-50" d="M0,85 Q50,75 100,60 T200,70 T300,90" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
<circle cx="300" cy="20" fill="#a855f7" r="4"></circle>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-4 rounded-lg w-48 shadow-2xl">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-400">Probability</span>
<span className="text-xs text-green-400 font-mono">+12%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[78%]"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] text-zinc-500">TRUMP 2024</span>
<span className="text-[10px] text-white font-bold">YES 62¢</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-zinc-900/20 flashlight-card aura-reveal" style={{animationDelay: '100ms'}}>
<div className="">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon height="24" icon="solar:command-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
          Natural Language Execution
        </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
          Tell Poks what to do in plain English. It parses the intent, finds the market ID, and executes via the Polymarket proxy.
        </p>

<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
<div className="text-zinc-500 text-xs font-mono">CMD+K</div>
<span className="text-sm text-white">"Bet $500 YES on Fed Rate Cut"</span>
</div>
<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
<div className="text-zinc-500 text-xs font-mono">Alert</div>
<span className="text-sm text-white">"Notify if Trump &lt; 45%"</span>
</div>
<div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
<div className="text-zinc-500 text-xs font-mono">Auto</div>
<span className="text-sm text-white">"Hedge ETH exposure on Polymarket"</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="relative border-b border-white/10">
<div className="container mx-auto max-w-7xl border-x border-white/10">
<div className="flex flex-col lg:flex-row">

<div className="w-full relative z-20 bg-[#020202] text-white border-b border-white/10 font-sans">
<style>
    .diagram-group { transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0.2; transform-origin: center; }
    .diagram-group.active { opacity: 1; filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.3)); }
    .diagram-group.active path, .diagram-group.active circle { stroke: #a855f7; stroke-width: 2px; }
    .diagram-group.active text { fill: #fff; font-weight: 600; }
    
    .core-pulse { animation: corePulse 3s infinite; }
    @keyframes corePulse {
      0%, 100% { fill-opacity: 0.2; stroke-opacity: 0.5; }
      50% { fill-opacity: 0.5; stroke-opacity: 1; }
    }
  </style>
<div className="flex flex-col lg:flex-row min-h-screen">

<div className="hidden lg:flex lg:w-1/2 lg:sticky lg:top-0 lg:h-screen items-center justify-center border-r border-white/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 to-[#020202] overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
<div className="relative w-[500px] h-[500px] z-10">
<svg className="w-full h-full" fill="none" id="master-diagram" viewbox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">

<g className="diagram-group" id="diagram-orbit" style={{opacity: '0.1'}}>
<circle className="opacity-50" cx="300" cy="300" r="260" stroke="#27272a" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle className="opacity-30" cx="300" cy="300" r="180" stroke="#27272a" strokeWidth="1"></circle>
</g>

<g className="diagram-group" id="diagram-process" style={{}}>
<circle className="" cx="300" cy="150" fill="#000" r="60" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label text-xs uppercase tracking-widest fill-zinc-500" text-anchor="middle" x="300" y="155">Data Feed</text>
<path className="text-zinc-800" d="M300 210 L300 240" stroke="currentColor" strokeWidth="1"></path>
</g>

<g className="diagram-group" id="diagram-mindset" style={{}}>
<circle cx="170" cy="380" fill="#000" r="60" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label text-xs uppercase tracking-widest fill-zinc-500" text-anchor="middle" x="170" y="385">Strategy</text>
<path className="text-zinc-800" d="M220 350 L250 330" stroke="currentColor" strokeWidth="1"></path>
</g>

<g className="diagram-group" id="diagram-dynamics" style={{}}>
<circle cx="430" cy="380" fill="#000" r="60" stroke="#3f3f46" strokeWidth="1.5"></circle>
<text className="diagram-label text-xs uppercase tracking-widest fill-zinc-500" text-anchor="middle" x="430" y="385">Order</text>
<path className="text-zinc-800" d="M380 350 L350 330" stroke="currentColor" strokeWidth="1"></path>
</g>

<g className="diagram-group" id="diagram-core" style={{}}>
<polygon className="core-pulse" fill="#a855f7" points="300,240 240,340 360,340" stroke="#a855f7" strokeWidth="0"></polygon>
<circle cx="300" cy="300" fill="white" r="4"></circle>
<circle className="opacity-50 animate-spin-slow" cx="300" cy="300" r="80" stroke="#a855f7" stroke-dasharray="2 2" strokeWidth="1"></circle>
</g>
</svg>

<div className="absolute bottom-12 left-0 w-full text-center transition-opacity duration-500" id="diagram-caption">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse">Poks Engine</span>
<span>Awaiting Input</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-[#020202] relative z-20">

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="process">
<div className="mb-8 text-purple-500">
<iconify-icon className="mb-6" height="48" icon="solar:satellite-antenna-linear" width="48"></iconify-icon>
<div className="font-mono text-xs text-purple-400 mb-2 uppercase tracking-widest">Phase 01</div>
<h2 className="text-4xl md:text-5xl font-oswald text-white uppercase tracking-tight mb-6">Market Surveillance</h2>
</div>
<p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
          Poks ingests data from every angle. It monitors Polymarket order books, Twitter sentiment, election polls, and global news feeds in real-time.
        </p>
</div>

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="core">
<div className="mb-8 text-purple-500">
<iconify-icon className="mb-6" height="48" icon="solar:cpu-bolt-linear" width="48"></iconify-icon>
<div className="font-mono text-xs text-purple-400 mb-2 uppercase tracking-widest">Phase 02</div>
<h2 className="text-3xl md:text-4xl font-oswald text-white uppercase tracking-tight mb-12">Probability Engine</h2>
</div>
<p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
          Using LLMs and statistical models, Poks calculates the true probability of an event vs the market price. It identifies +EV opportunities instantly.
        </p>
<div className="p-6 bg-zinc-900/50 border border-purple-500/20 rounded-xl">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span className="text-xs font-mono text-purple-300">ARBITRAGE DETECTED</span>
</div>
<p className="text-sm text-zinc-300 italic">"Polymarket implies 45%, Polls imply 52%. Variance detected. Executing Buy Order..."</p>
</div>
</div>

<div className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-white/5 scroll-chapter" data-trigger="dynamics">
<div className="mb-8 text-purple-500">
<iconify-icon className="mb-6" height="48" icon="solar:rocket-2-linear" width="48"></iconify-icon>
<div className="font-mono text-xs text-purple-400 mb-2 uppercase tracking-widest">Phase 03</div>
<h2 className="text-3xl md:text-4xl font-oswald text-white uppercase tracking-tight mb-12">Execution</h2>
</div>
<p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
          Poks places the trade directly via your connected wallet. It manages the position, takes profit at targets, or stops loss automatically.
        </p>
</div>
</div>
</div>

</div>
</div></div></section>

<section className="w-full bg-black text-white relative border-b border-white/10">

<div className="container border-x max-w-7xl border-white/10 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between py-24 gap-12">

<div className="flex-1 aura-reveal">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9]">
                Scale Your Alpha
              </h1>
</div>

<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
                Start with a manual assistant, upgrade to a fully autonomous hedge fund.
              </p>
</div>
</div>
</div>

<div className="container max-w-7xl mx-auto border-x border-t border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="flex flex-col p-8 md:p-12 h-full flashlight-card aura-reveal">
<div className="mb-16">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-purple-500" icon="solar:eye-linear" width="24"></iconify-icon>
<h2 className="text-3xl font-normal">Observer</h2>
</div>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  For traders who want enhanced intelligence but manual control.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Includes
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Real-time Odds
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Basic Sentiment Alert
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Portfolio Tracker
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        Free
                      </div>
<div className="text-sm text-zinc-500 mt-2">Forever.</div>
</div>
</div>
<div className="flex flex-col h-full justify-end">
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white text-sm hover:bg-zinc-800 transition-colors uppercase tracking-widest font-semibold">
                        Launch
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 md:p-12 h-full flashlight-card">
<div className="mb-16">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-500" icon="solar:crown-star-linear" width="24"></iconify-icon>
<h2 className="text-3xl font-normal">Market Maker</h2>
</div>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  Full autonomy. Let Poks run your strategy 24/7.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Everything in Observer +
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-purple-500 font-bold">✓</span>
                        Auto-Execution
                      </li>
<li className="flex items-start gap-3">
<span className="text-purple-500 font-bold">✓</span>
                        Risk Hedging
                      </li>
<li className="flex items-start gap-3">
<span className="text-purple-500 font-bold">✓</span>
                        Unlimited API Calls
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        0.5%
                      </div>
<div className="text-sm text-zinc-500 mt-2">of profits, billed monthly</div>
</div>
</div>
<div className="flex flex-col h-full justify-end">
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-white text-black border border-white text-sm hover:bg-zinc-200 transition-colors uppercase tracking-widest font-semibold">
                        Connect
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-black text-white border-t border-white/10 font-sans relative overflow-hidden">
<div className="max-w-7xl mx-auto border-x border-white/10 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-sm"></div>
<span className="font-oswald text-xl tracking-tight">POKS</span>
</div>
<div className="text-zinc-500 text-sm">
                © 2024 Poks Protocol. Decentralized Intelligence.
            </div>
</div>
</footer>



    </>
  );
}
