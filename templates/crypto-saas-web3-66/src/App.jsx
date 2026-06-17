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
            const container = document.getElementById('carouselContainer');
            const leftBtn = document.getElementById('slideLeft');
            const rightBtn = document.getElementById('slideRight');

            if (container && leftBtn && rightBtn) {
                const scrollAmount = 500; // Adjust scroll distance

                leftBtn.addEventListener('click', () => {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });

                rightBtn.addEventListener('click', () => {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-zinc-800/20 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center text-black font-bold text-xs">N</div>
<span className="font-semibold text-white tracking-tight text-sm">NEXUS<span className="text-zinc-500">CHAIN</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#gallery">Showcase</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#analytics">Analytics</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Start Building</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
            v2.0 is now live on Mainnet
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Next-Gen Crypto SaaS for the <span className="text-zinc-500">Decentralized Era</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A powerful platform designed to help you build, automate, and scale your Web3 ecosystem with unmatched speed, security, and clarity.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Start Free Trial
            </button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                Explore Dashboard
            </button>
<button className="w-full sm:w-auto px-8 py-3.5 text-zinc-400 hover:text-white font-medium transition-colors">
                Join Waitlist →
            </button>
</div>
</header>

<section className="border-y bg-zinc-900/30 border-white/5 pt-10 pb-10 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-zinc-500 mb-8 font-medium">TRUSTED BY WEB3 STARTUPS, DAOS, AND INNOVATORS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold text-white"><svg className="iconify iconify--lucide" data-icon="lucide:hexagon" data-strokeWidth="1.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> POLYGONE</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><svg className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> FLASHWIRE</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><svg className="iconify iconify--lucide" data-icon="lucide:boxes" data-strokeWidth="1.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path></g></svg> BLOCKBASE</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><svg className="iconify iconify--lucide" data-icon="lucide:gem" data-strokeWidth="1.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg> ETHERGEM</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><svg className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg> STACKDAO</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/5 bg-zinc-950/50" id="gallery">

<div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<span className="text-yellow-500 text-xs font-bold tracking-wider uppercase mb-2 block">Interface Gallery</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Platform Overview</h2>
<p className="text-zinc-400 mt-4 max-w-xl">Explore the powerful modules built to streamline your Web3 operations from a single pane of glass.</p>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-all active:scale-95" id="slideLeft">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-all active:scale-95" id="slideRight">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-6 md:px-[max(24px,calc((100vw-80rem)/2))] pb-12" id="carouselContainer">

<div className="flex-none w-full md:w-[700px] snap-center">
<div className="glass-panel rounded-2xl p-1 border border-white/10 group hover:border-yellow-500/30 transition-all duration-500">
<div className="bg-zinc-950 rounded-xl overflow-hidden relative aspect-[16/10]">

<div className="absolute inset-0 bg-zinc-900/50 p-6 flex flex-col">
<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<div className="h-4 w-[1px] bg-zinc-800 mx-1"></div>
<span className="text-xs font-mono text-zinc-500">dashboard.nexus.eth</span>
</div>
<div className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">Live</div>
</div>
<div className="flex-1 grid grid-cols-3 gap-4">
<div className="col-span-2 bg-zinc-900/80 rounded-lg border border-white/5 p-4">
<div className="h-3 w-20 bg-zinc-800 rounded mb-4"></div>
<div className="flex items-end gap-1 h-20">
<div className="w-full bg-zinc-800/50 h-[40%] rounded-sm"></div>
<div className="w-full bg-zinc-800/50 h-[60%] rounded-sm"></div>
<div className="w-full bg-yellow-500/20 h-[80%] rounded-sm border-t border-yellow-500"></div>
<div className="w-full bg-zinc-800/50 h-[50%] rounded-sm"></div>
</div>
</div>
<div className="col-span-1 space-y-3">
<div className="bg-zinc-900/80 h-20 rounded-lg border border-white/5 p-3">
<div className="w-8 h-8 rounded bg-zinc-800 mb-2"></div>
<div className="h-2 w-12 bg-zinc-700 rounded"></div>
</div>
<div className="bg-zinc-900/80 h-20 rounded-lg border border-white/5 p-3">
<div className="w-8 h-8 rounded bg-zinc-800 mb-2"></div>
<div className="h-2 w-12 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 px-2">
<h3 className="text-white font-medium text-lg">Unified Command Center</h3>
<p className="text-sm text-zinc-500 mt-1">Real-time visibility into all your on-chain assets and contract states.</p>
</div>
</div>

<div className="flex-none w-full md:w-[700px] snap-center">
<div className="glass-panel rounded-2xl p-1 border border-white/10 group hover:border-yellow-500/30 transition-all duration-500">
<div className="bg-zinc-950 rounded-xl overflow-hidden relative aspect-[16/10]">
<div className="absolute inset-0 bg-zinc-900/50 p-6 font-mono text-xs">
<div className="flex items-center justify-between text-zinc-500 mb-4">
<span>contract V2Logic.sol</span>
<span className="text-green-500 flex items-center gap-1"><svg className="lucide lucide-check" fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg> Compiled</span>
</div>
<div className="space-y-1">
<div className="flex"><span className="text-zinc-600 w-6">1</span><span className="text-purple-400">function</span> <span className="text-blue-400">executeBatch</span>(<span className="text-orange-300">address</span>[] calldata targets) <span className="text-purple-400">external</span> {</div>
<div className="flex"><span className="text-zinc-600 w-6">2</span>  <span className="text-zinc-400">// Automatic gas estimation</span></div>
<div className="flex"><span className="text-zinc-600 w-6">3</span>  <span className="text-purple-400">uint256</span> totalGas = <span className="text-yellow-500">0</span>;</div>
<div className="flex"><span className="text-zinc-600 w-6">4</span>  <span className="text-purple-400">for</span> (<span className="text-purple-400">uint256</span> i = <span className="text-yellow-500">0</span>; i &lt; targets.length; i++) {</div>
<div className="flex"><span className="text-zinc-600 w-6">5</span>    _validateTarget(targets[i]);</div>
<div className="flex"><span className="text-zinc-600 w-6">6</span>  }</div>
<div className="flex"><span className="text-zinc-600 w-6">7</span>  <span className="text-zinc-400">/* Integrated security checks */</span></div>
<div className="flex"><span className="text-zinc-600 w-6">8</span>  emit <span className="text-yellow-300">BatchExecuted</span>(msg.sender, targets.length);</div>
<div className="flex"><span className="text-zinc-600 w-6">9</span>}</div>
</div>
<div className="absolute bottom-6 right-6 bg-zinc-800 text-white px-3 py-1.5 rounded flex items-center gap-2 shadow-lg border border-white/10">
<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                                Simulation Ready
                             </div>
</div>
</div>
</div>
<div className="mt-4 px-2">
<h3 className="text-white font-medium text-lg">Smart Contract IDE</h3>
<p className="text-sm text-zinc-500 mt-1">Built-in editor with auto-completion, security linting, and instant deployment.</p>
</div>
</div>

<div className="flex-none w-full md:w-[700px] snap-center">
<div className="glass-panel rounded-2xl p-1 border border-white/10 group hover:border-yellow-500/30 transition-all duration-500">
<div className="bg-zinc-950 rounded-xl overflow-hidden relative aspect-[16/10] flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 to-zinc-950"></div>

<div className="relative w-full h-full p-8">
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-lg border border-zinc-600 flex items-center justify-center z-10">
<svg className="lucide lucide-box" fill="none" height="20" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-900 rounded-full border border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center justify-center z-10">
<svg className="lucide lucide-workflow" fill="none" height="24" stroke="#eab308" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="absolute top-1/4 right-1/4 w-12 h-12 bg-zinc-800 rounded-lg border border-zinc-600 flex items-center justify-center z-10">
<svg className="lucide lucide-wallet" fill="none" height="20" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="animate-[dash_20s_linear_infinite]" d="M180 150 C 250 150, 300 150, 380 150" fill="none" stroke="#52525b" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M450 150 C 500 150, 550 100, 600 80" fill="none" stroke="#52525b" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="mt-4 px-2">
<h3 className="text-white font-medium text-lg">Visual Workflow Builder</h3>
<p className="text-sm text-zinc-500 mt-1">Drag and drop logic blocks to automate complex on-chain interactions.</p>
</div>
</div>

<div className="flex-none w-full md:w-[700px] snap-center">
<div className="glass-panel rounded-2xl p-1 border border-white/10 group hover:border-yellow-500/30 transition-all duration-500">
<div className="bg-zinc-950 rounded-xl overflow-hidden relative aspect-[16/10] flex flex-col">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<span className="text-sm font-medium text-white">Team Permissions</span>
<button className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded">Invite Member</button>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">JD</div>
<div>
<div className="text-sm text-white">John Doe</div>
<div className="text-xs text-zinc-500">Admin • Last active 2m ago</div>
</div>
</div>
<div className="text-xs text-green-500">Full Access</div>
</div>
<div className="h-[1px] bg-zinc-900 w-full"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">AS</div>
<div>
<div className="text-sm text-white">Alice Smith</div>
<div className="text-xs text-zinc-500">Auditor • Last active 1d ago</div>
</div>
</div>
<div className="text-xs text-yellow-500">Read Only</div>
</div>
<div className="h-[1px] bg-zinc-900 w-full"></div>
<div className="flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">RK</div>
<div>
<div className="text-sm text-white">Robot Keeper</div>
<div className="text-xs text-zinc-500">Service Account</div>
</div>
</div>
<div className="text-xs text-zinc-500">API Access</div>
</div>
</div>
</div>
</div>
<div className="mt-4 px-2">
<h3 className="text-white font-medium text-lg">Organization Management</h3>
<p className="text-sm text-zinc-500 mt-1">Granular role-based access control for secure team collaboration.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] -z-10 pointer-events-none">
<div className="absolute inset-0 bg-zinc-950/80"></div>
<div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-zinc-800/30 blur-[100px] rounded-[50%]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-white/5 blur-[80px] rounded-[100%] opacity-60"></div>
</div>
<div className="mb-24 text-center max-w-3xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Transform the Way You Manage <span className="text-yellow-500">Web3 Operations</span>
</h2>
<p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Traditional tools slow you down. Our platform brings clarity, automation, and scalability — without complexity.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative z-10">

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-8 text-yellow-500 group-hover:text-yellow-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Reduce Manual Work</h3>
<p className="text-sm text-zinc-400 leading-relaxed pr-2">
                    Automate repetitive on-chain tasks and save 20+ hours per week per developer.
                </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-8 text-yellow-500 group-hover:text-yellow-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Eliminate Operational Risks</h3>
<p className="text-sm text-zinc-400 leading-relaxed pr-2">
                    Built-in safeguards and simulation modes prevent costly smart contract errors.
                </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-8 text-yellow-500 group-hover:text-yellow-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Real-Time Decisions</h3>
<p className="text-sm text-zinc-400 leading-relaxed pr-2">
                    Access sub-second latency data to make informed decisions for your protocol.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5" id="features">
<div className="mb-12">
<span className="text-yellow-500 text-xs font-bold tracking-wider uppercase mb-2 block">Key Features</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to <br/>scale on-chain.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-1 glass-panel rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] transition-opacity opacity-50 group-hover:opacity-100"></div>
<div>
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white border border-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automated On-Chain Workflows</h3>
<p className="text-sm text-zinc-400">Trigger transactions, approvals, and contract validations automatically.</p>
</div>
<div className="mt-8 space-y-2">
<div className="flex items-center gap-3 p-2 bg-zinc-900/50 rounded border border-white/5">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-zinc-300 font-mono">Event: Token_Transfer</span>
</div>
<div className="flex items-center gap-3 p-2 bg-zinc-900/50 rounded border border-white/5 opacity-60">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="text-xs text-zinc-300 font-mono">Action: Notify_Webhook</span>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="flex flex-col h-full z-10 relative">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Real-Time Blockchain Analytics</h3>
<p className="text-sm text-zinc-400 max-w-md">Visualize live on-chain data with precision. Track token movements and gas costs.</p>
</div>

<div className="flex-1 w-full bg-zinc-900/80 border border-white/5 rounded-t-xl p-4 mt-auto shadow-2xl translate-y-4 transition-transform group-hover:translate-y-2">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono">LIVE_FEED :: ETH_MAINNET</div>
</div>
<div className="flex items-end gap-2 h-24 w-full px-2">
<div className="w-1/6 bg-zinc-800 h-[40%] rounded-sm animate-pulse"></div>
<div className="w-1/6 bg-zinc-800 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-yellow-500/80 h-[85%] rounded-sm neon-glow"></div>
<div className="w-1/6 bg-zinc-800 h-[55%] rounded-sm"></div>
<div className="w-1/6 bg-zinc-800 h-[70%] rounded-sm"></div>
<div className="w-1/6 bg-zinc-800 h-[45%] rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 space-y-4">
<h3 className="text-lg font-medium text-white">Secure Wallet Infrastructure</h3>
<p className="text-sm text-zinc-400">Enterprise-grade connection handling with multi-sig support and end-to-end encryption.</p>
<div className="flex gap-3 pt-2">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<span className="iconify text-[#F6851B]" data-icon="simple-icons:metamask" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<svg aria-hidden="true" className="iconify text-[#3B99FC] iconify--simple-icons" data-icon="simple-icons:walletconnect" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.913 7.519c3.915-3.831 10.26-3.831 14.174 0l.471.461a.483.483 0 0 1 0 .694l-1.611 1.577a.25.25 0 0 1-.354 0l-.649-.634c-2.73-2.673-7.157-2.673-9.887 0l-.694.68a.255.255 0 0 1-.355 0L4.397 8.719a.48.48 0 0 1 0-.693zm17.506 3.263l1.434 1.404a.483.483 0 0 1 0 .694l-6.466 6.331a.51.51 0 0 1-.709 0l-4.588-4.493a.126.126 0 0 0-.178 0l-4.589 4.493a.51.51 0 0 1-.709 0L.147 12.88a.483.483 0 0 1 0-.694l1.434-1.404a.51.51 0 0 1 .709 0l4.589 4.493c.05.048.129.048.178 0l4.589-4.493a.51.51 0 0 1 .709 0l4.589 4.493c.05.048.128.048.178 0l4.589-4.493a.507.507 0 0 1 .708 0" fill="currentColor"></path></svg>
</div>
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<svg aria-hidden="true" className="iconify text-[#0052FF] iconify--simple-icons" data-icon="simple-icons:coinbase" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.844 11.053c-.872 0-1.553.662-1.553 1.548s.664 1.542 1.553 1.542s1.564-.667 1.564-1.547c0-.875-.664-1.543-1.564-1.543m.006 2.452c-.497 0-.86-.386-.86-.904c0-.523.357-.909.854-.909c.502 0 .866.392.866.91c0 .517-.364.903-.86.903m1.749-1.778h.433v2.36h.693V11.11H6.599zm-5.052-.035c.364 0 .653.224.762.558h.734c-.133-.713-.722-1.197-1.49-1.197c-.872 0-1.553.662-1.553 1.548c0 .887.664 1.543 1.553 1.543c.75 0 1.351-.484 1.484-1.203h-.728a.78.78 0 0 1-.756.564c-.502 0-.855-.386-.855-.904c0-.523.347-.909.85-.909zm18.215.622l-.508-.075c-.242-.035-.415-.115-.415-.305c0-.207.225-.31.53-.31c.336 0 .55.143.595.379h.67c-.075-.599-.537-.95-1.247-.95c-.733 0-1.218.375-1.218.904c0 .506.317.8.958.892l.508.075c.249.034.387.132.387.316c0 .236-.242.334-.577.334c-.41 0-.641-.167-.676-.42h-.681c.064.581.52.99 1.35.99c.757 0 1.26-.346 1.26-.938c0-.53-.364-.806-.936-.892M7.378 9.885a.43.43 0 0 0-.444.437c0 .254.19.438.444.438a.43.43 0 0 0 .445-.438a.43.43 0 0 0-.445-.437m10.167 2.245c0-.645-.392-1.076-1.224-1.076c-.785 0-1.224.397-1.31 1.007h.687c.035-.236.22-.432.612-.432c.352 0 .525.155.525.345c0 .248-.317.311-.71.351c-.531.058-1.19.242-1.19.933c0 .535.4.88 1.034.88c.497 0 .809-.207.965-.535c.023.293.242.483.548.483h.404v-.616h-.34zm-.68.748c0 .397-.347.69-.769.69c-.26 0-.48-.11-.48-.34c0-.293.353-.373.676-.408c.312-.028.485-.097.572-.23zm-3.679-1.825c-.386 0-.71.162-.94.432V9.856h-.693v4.23h.68v-.391c.232.282.56.449.953.449c.832 0 1.461-.656 1.461-1.543s-.64-1.548-1.46-1.548zm-.103 2.452c-.497 0-.86-.386-.86-.904c0-.517.369-.909.865-.909c.503 0 .855.386.855.91c0 .517-.364.903-.86.903m-3.187-2.452c-.45 0-.745.184-.919.443v-.385H8.29v2.975h.693v-1.617c0-.455.289-.777.716-.777c.398 0 .647.282.647.69v1.704h.692v-1.755c0-.748-.386-1.278-1.142-1.278M24 12.503c0-.851-.624-1.45-1.46-1.45c-.89 0-1.542.668-1.542 1.548c0 .927.698 1.543 1.553 1.543c.722 0 1.287-.426 1.432-1.03h-.722c-.104.264-.358.414-.699.414c-.445 0-.78-.276-.854-.76H24v-.264zm-2.252-.23c.11-.414.422-.615.78-.615c.392 0 .693.224.762.615Z" fill="currentColor"></path></svg>
</div>
</div>
</div>
<div className="flex-1 bg-zinc-950/50 w-full p-4 rounded-xl border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-zinc-400">Security Layer</span>
<span className="text-xs text-green-500 flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Active</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-[92%]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 font-mono">
<span>ENCRYPTION</span>
<span>AES-256</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-2xl p-8">
<h3 className="text-lg font-medium text-white mb-4">Multi-Chain Ready</h3>
<p className="text-sm text-zinc-400 mb-6">Deploy across major networks without switching context.</p>
<div className="grid grid-cols-3 gap-3">
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">ETH</div>
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">SOL</div>
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">BSC</div>
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">MATIC</div>
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">AVAX</div>
<div className="text-xs text-zinc-500 border border-zinc-800 rounded p-2 text-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default">ARB</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-2xl p-8">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white border border-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dev-Ready Architecture</h3>
<p className="text-sm text-zinc-400 mb-4">Clean REST &amp; Web3 APIs with SDKs for React, Vue, and Node.</p>
<div className="font-mono text-[10px] text-yellow-500 bg-zinc-950 p-3 rounded border border-white/5 overflow-x-hidden whitespace-nowrap">
                    $ npm install @nexus/sdk
                    &gt; Installing packages...
                </div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-6 h-full">
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Web3-Native Interface</h3>
<p className="text-sm text-zinc-400">A futuristic interface crafted with fluid interactions — immersive for both developers and operators.</p>
</div>
<div className="w-full md:w-1/2 aspect-video bg-black/40 rounded-lg border border-white/10 flex items-center justify-center relative shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]">

<div className="absolute w-20 h-20 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[20px] opacity-40 animate-pulse"></div>
<div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<span className="relative z-10 text-xs font-mono text-white/70 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">UI_MODE: HOLOGRAPHIC</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Seamless Integration</h2>
<p className="text-zinc-400">Go from connection to automation in minutes.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative text-center pt-8">
<div className="w-8 h-8 mx-auto bg-zinc-900 border border-yellow-500 text-yellow-500 rounded-full flex items-center justify-center text-sm font-bold mb-4 relative z-10">1</div>
<h4 className="text-white font-medium mb-2">Connect Wallet</h4>
<p className="text-xs text-zinc-500">Secure login using MetaMask, Phantom or WalletConnect.</p>
</div>

<div className="relative text-center pt-8">
<div className="w-8 h-8 mx-auto bg-zinc-900 border border-zinc-700 text-zinc-400 rounded-full flex items-center justify-center text-sm font-bold mb-4 relative z-10">2</div>
<h4 className="text-white font-medium mb-2">Link Contracts</h4>
<p className="text-xs text-zinc-500">Import verified contracts or deploy from templates.</p>
</div>

<div className="relative text-center pt-8">
<div className="w-8 h-8 mx-auto bg-zinc-900 border border-zinc-700 text-zinc-400 rounded-full flex items-center justify-center text-sm font-bold mb-4 relative z-10">3</div>
<h4 className="text-white font-medium mb-2">Configure Logic</h4>
<p className="text-xs text-zinc-500">Set up event triggers, alerts, and automated flows.</p>
</div>

<div className="relative text-center pt-8">
<div className="w-8 h-8 mx-auto bg-zinc-900 border border-zinc-700 text-zinc-400 rounded-full flex items-center justify-center text-sm font-bold mb-4 relative z-10">4</div>
<h4 className="text-white font-medium mb-2">Monitor Live</h4>
<p className="text-xs text-zinc-500">Track performance on the unified dashboard.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-zinc-900/20 border-y border-white/5" id="analytics">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/3">
<div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-zinc-300 tracking-wider mb-4 uppercase">Data Intelligence</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Deep Insights for <br/>Protocol Health</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm">Token Circulation</h4>
<p className="text-xs text-zinc-400">Monitor whale movements and velocity.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm">User Patterns</h4>
<p className="text-xs text-zinc-400">Analyze retention and contract interaction depth.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm">Cost Efficiency</h4>
<p className="text-xs text-zinc-400">Optimize gas usage across transactions.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3 w-full">
<div className="glass-panel rounded-xl border border-zinc-700/50 p-6 shadow-2xl relative">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-4 text-sm font-medium text-zinc-400">
<span className="text-white border-b-2 border-yellow-500 pb-1">Overview</span>
<span>Transactions</span>
<span>Events</span>
</div>
<div className="flex gap-2">
<div className="bg-zinc-800 px-3 py-1 rounded text-xs text-zinc-300 flex items-center gap-2">
                                Last 24h <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-zinc-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Total Volume</div>
<div className="text-lg font-semibold text-white mt-1">$4.2M</div>
<div className="text-[10px] text-green-500">+12.5%</div>
</div>
<div className="bg-zinc-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Active Wallets</div>
<div className="text-lg font-semibold text-white mt-1">8,420</div>
<div className="text-[10px] text-green-500">+5.2%</div>
</div>
<div className="bg-zinc-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Avg Gas</div>
<div className="text-lg font-semibold text-white mt-1">18 Gwei</div>
<div className="text-[10px] text-red-500">-2.1%</div>
</div>
<div className="bg-zinc-900/50 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Success Rate</div>
<div className="text-lg font-semibold text-white mt-1">99.8%</div>
<div className="text-[10px] text-green-500">Stable</div>
</div>
</div>

<div className="h-48 w-full flex items-end justify-between gap-2 px-2">

<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[40%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[65%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[45%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[80%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[55%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[70%] rounded-t-sm"></div>
<div className="w-full bg-yellow-500 neon-glow h-[90%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[60%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[50%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[75%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[40%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800 hover:bg-yellow-500/80 transition-colors h-[55%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-12">Built for every builder</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="glass-panel p-6 rounded-xl border-t-2 border-t-purple-500">
<div className="text-purple-500 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:landmark" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h3 className="text-white font-medium mb-2">DeFi Projects</h3>
<p className="text-xs text-zinc-400">Track liquidity movements, automate staking flows, manage rewards.</p>
</div>
<div className="glass-panel p-6 rounded-xl border-t-2 border-t-pink-500">
<div className="text-pink-500 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg></div>
<h3 className="text-white font-medium mb-2">NFT Platforms</h3>
<p className="text-xs text-zinc-400">Monitor marketplace activity and manage drops with on-chain triggers.</p>
</div>
<div className="glass-panel p-6 rounded-xl border-t-2 border-t-blue-500">
<div className="text-blue-500 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:vote" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m9 12l2 2l4-4"></path><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5zm17 12H2"></path></g></svg></div>
<h3 className="text-white font-medium mb-2">DAOs</h3>
<p className="text-xs text-zinc-400">Automate voting, treasury operations, and governance flows.</p>
</div>
<div className="glass-panel p-6 rounded-xl border-t-2 border-t-cyan-500">
<div className="text-cyan-500 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg></div>
<h3 className="text-white font-medium mb-2">Layer-2 Builders</h3>
<p className="text-xs text-zinc-400">Integrate advanced analytics and simplify dev operations.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simple, transparent pricing</h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-zinc-400">Monthly</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-zinc-800 rounded-full border border-zinc-700 transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300"></div>
</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-xs text-yellow-500 ml-1">(-20%)</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="glass-panel rounded-2xl p-8">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-xs text-zinc-500 mt-2 mb-6">For individuals and early-stage builders.</p>
<div className="text-3xl font-semibold text-white mb-6">Free</div>
<button className="w-full py-2 rounded-lg border border-zinc-700 text-sm font-medium hover:bg-zinc-800 transition-colors mb-8">Start Building</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Basic analytics</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Single-chain support</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Limited automations</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Community support</li>
</ul>
</div>

<div className="glass-panel rounded-2xl p-8 border border-yellow-500/30 bg-zinc-900/60 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-xs text-zinc-500 mt-2 mb-6">For growing Web3 products and teams.</p>
<div className="text-3xl font-semibold text-white mb-6">$29<span className="text-sm text-zinc-500 font-normal">/month</span></div>
<button className="w-full py-2 rounded-lg bg-yellow-500 text-black text-sm font-semibold hover:bg-yellow-400 transition-colors mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Multi-chain support</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Advanced analytics</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Wallet integrations</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Workflow automation</li>
</ul>
</div>

<div className="glass-panel rounded-2xl p-8">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-xs text-zinc-500 mt-2 mb-6">For large protocols and organizations.</p>
<div className="text-3xl font-semibold text-white mb-6">Custom</div>
<button className="w-full py-2 rounded-lg border border-zinc-700 text-sm font-medium hover:bg-zinc-800 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited automations</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated server resources</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full API access</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 24/7 technical support</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg open:border-zinc-700 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
                    Is my data secure?
                    <svg aria-hidden="true" className="iconify transition-transform group-open:rotate-180 text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400">
                    Yes — encrypted end-to-end with enterprise-grade protections. We never store your private keys.
                </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg open:border-zinc-700 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
                    Can I use my own smart contracts?
                    <svg aria-hidden="true" className="iconify transition-transform group-open:rotate-180 text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400">
                    Absolutely. You can deploy, monitor, or integrate custom contracts easily through our dashboard or API.
                </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg open:border-zinc-700 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
                    Do I need coding skills?
                    <svg aria-hidden="true" className="iconify transition-transform group-open:rotate-180 text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400">
                    Not required for basic workflows. However, developers get expanded capabilities via our API and SDKs.
                </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg open:border-zinc-700 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
                    Do you offer custom integration for enterprises?
                    <svg aria-hidden="true" className="iconify transition-transform group-open:rotate-180 text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400">
                    Yes — including private nodes, specialized dashboards, and custom automations. Contact our sales team for details.
                </div>
</details>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Build Smarter. Scale Faster. Step Into the <span className="text-yellow-500">Future of Web3</span>.</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">Start your journey today and bring your blockchain ecosystem to life with next-level automation, analytics, and interoperability.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all">
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-zinc-800 transition-all">
                    Book a Demo
                </button>
<button className="w-full sm:w-auto px-8 py-4 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:text-white hover:border-zinc-500 transition-all">
                    Join Waitlist
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded-sm flex items-center justify-center text-yellow-500 text-[10px] font-bold">N</div>
<span className="text-sm font-medium text-white tracking-tight">NEXUS<span className="text-zinc-600">CHAIN</span></span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">API Status</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 NexusChain Inc. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
