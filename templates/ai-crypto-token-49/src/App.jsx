import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
bg: {
DEFAULT: '#04060E',
card: '#0A0F1C',
},
icoin: {
gold: '#E8C547',
cyan: '#00F5D4',
violet: '#7C3AED',
}
},
backgroundImage: {
'icoin-gradient': 'linear-gradient(135deg, #E8C547 0%, #00F5D4 100%)',
'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
},
animation: {
'float': 'float 10s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2.5s linear infinite',
'border-spin': 'border-spin 3s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
},
'border-spin': {
'0%': { '--gradient-angle': '0deg' },
'100%': { '--gradient-angle': '360deg' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Progress
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
            
            // Navbar blur intensity change
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-[#04060E]/95');
            } else {
                nav.classList.remove('shadow-lg', 'bg-[#04060E]/80');
            }
        });

        // Intersection Observer for Scroll Reveals
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // Live Number Counter Simulation
        const counters = document.querySelectorAll('.live-count');
        counters.forEach(counter => {
            let val = parseInt(counter.innerText.replace(/,/g, ''));
            setInterval(() => {
                val += Math.floor(Math.random() * 3);
                counter.innerText = val.toLocaleString();
            }, 2000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-icoin-violet/10 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-icoin-cyan/5 rounded-full blur-[100px] animate-float"></div>
<div className="absolute top-[20%] right-[20%] w-[20vw] h-[20vw] bg-icoin-gold/5 rounded-full blur-[80px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#04060E]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-icoin-gold to-icoin-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,245,212,0.3)]">
<svg className="lucide lucide-cpu text-black w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<span className="font-display font-semibold text-xl text-white tracking-tight group-hover:text-icoin-cyan transition-colors">ICoin</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#ecosystem">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#tokenomics">Tokenomics</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>

<div className="flex items-center gap-4">

<button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-zinc-500 hover:text-white hover:border-white/20 transition-all">
<span className="font-mono">⌘K</span>
<span>Search</span>
</button>
<a className="text-sm font-medium text-white hover:text-icoin-cyan transition-colors hidden sm:block" href="#">Whitepaper</a>
<button className="shiny-cta px-6 py-2 rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform active:scale-95">
                    Buy ICoin
                </button>
</div>
</div>
</nav>

<div className="fixed top-20 left-0 h-[1px] bg-gradient-to-r from-icoin-gold to-icoin-cyan z-40 w-0 transition-all duration-100" id="scroll-progress"></div>

<section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-left z-10 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-icoin-cyan text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-icoin-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-icoin-cyan"></span>
</span>
                    Live on Mainnet
                </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.1]">
                    The Intelligent <br/>
                    Currency of the <br/>
<span className="text-gradient">AI Economy.</span>
</h1>
<p className="text-lg text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                    Powering autonomous agents, micro-transactions, and next-generation Web3 ecosystems. The native currency for machine-to-machine commerce.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Buy ICoin
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3.5 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
                        View Tokenomics
                        <i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="pie-chart"></i>
</button>
</div>

<p className="text-xs text-zinc-600">
                    ⚠️ ICoin is a community protocol and is not affiliated with OpenAI or any official AI provider.
                </p>
</div>

<div className="relative z-10 reveal active delay-200 lg:h-[600px] flex items-center">

<div className="absolute inset-0 bg-gradient-to-r from-icoin-cyan/20 to-icoin-violet/20 blur-[100px] -z-10"></div>
<div className="w-full glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl transform rotate-y-12 rotate-x-6 perspective-dramatic hover:scale-[1.01] transition-transform duration-500">

<div className="h-12 border-b border-white/5 bg-black/40 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-zinc-500">agent_protocol_v4.exe</div>
</div>

<div className="p-6 h-[400px] flex flex-col gap-4 font-mono text-sm relative">

<div className="self-end max-w-[80%] chat-bubble delay-1">
<div className="bg-zinc-800 text-white px-4 py-2 rounded-2xl rounded-tr-sm border border-white/10">
                                What can ICoin do?
                            </div>
<div className="text-[10px] text-zinc-500 text-right mt-1">User • 10:42 AM</div>
</div>

<div className="self-start max-w-[90%] flex gap-3 chat-bubble delay-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-icoin-gold to-icoin-cyan flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-black" data-lucide="bot"></i>
</div>
<div>
<div className="bg-icoin-violet/10 text-icoin-cyan px-4 py-3 rounded-2xl rounded-tl-sm border border-icoin-violet/20">
<p className="mb-2">I can power autonomous agents, execute smart processes, settle AI-to-AI payments instantly, and fuel decentralized applications.</p>
<div className="flex gap-2 mt-2">
<span className="px-2 py-0.5 rounded bg-icoin-cyan/10 text-[10px] border border-icoin-cyan/20">Speed: 50k TPS</span>
<span className="px-2 py-0.5 rounded bg-icoin-cyan/10 text-[10px] border border-icoin-cyan/20">Cost: $0.0001</span>
</div>
</div>
<div className="text-[10px] text-zinc-500 mt-1">Agent • 10:42 AM</div>
</div>
</div>

<div className="self-end max-w-[80%] chat-bubble delay-3">
<div className="bg-zinc-800 text-white px-4 py-2 rounded-2xl rounded-tr-sm border border-white/10">
                                Show me the live supply.
                            </div>
</div>

<div className="self-start max-w-[90%] flex gap-3 chat-bubble delay-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-icoin-gold to-icoin-cyan flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-black" data-lucide="bot"></i>
</div>
<div className="bg-icoin-violet/10 text-zinc-300 px-4 py-3 rounded-2xl rounded-tl-sm border border-icoin-violet/20">
<div className="flex gap-4 items-center">
<div className="text-xs">
<span className="block text-zinc-500 uppercase tracking-wider text-[10px]">Circulating</span>
<span className="font-bold text-white font-sans">420,000,000 ICN</span>
</div>
<div className="h-6 w-px bg-white/10"></div>
<div className="text-xs">
<span className="block text-zinc-500 uppercase tracking-wider text-[10px]">Holders</span>
<span className="font-bold text-white font-sans live-count">12,405</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full p-4 bg-black/40 border-t border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-2 text-zinc-600 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-xs font-mono">Type a command for the agent...</span>
<div className="ml-auto w-2 h-4 bg-icoin-cyan/50 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 bg-[#04060E]/80 backdrop-blur-md z-20">
<div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex flex-col items-center md:items-start">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Price</span>
<span className="text-white font-mono font-medium flex items-center gap-1">
                        $0.0421 <span className="text-icoin-cyan text-xs">(+5.2%)</span>
</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">24h Volume</span>
<span className="text-white font-mono font-medium">$12,504,000</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Holders</span>
<span className="text-white font-mono font-medium live-count">12,405</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Network</span>
<span className="text-white font-mono font-medium flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-icoin-cyan glow-point"></div>
                        Solana / ETH
                    </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-4xl font-bold text-white mb-6">The AI-Native Token.</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                    Traditional crypto was built for humans. ICoin is built for agents. 
                    As AI systems begin to trade data, compute, and services autonomously, 
                    they require a low-latency, high-throughput currency layer.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-icoin-gold" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Ultra-low Fees</h4>
<p className="text-sm text-zinc-500">Micro-transactions viable for API calls.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-icoin-cyan" data-lucide="code-2"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Developer First</h4>
<p className="text-sm text-zinc-500">SDKs for Python, LangChain, and AutoGPT.</p>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/5">
<p className="text-xs text-zinc-500">
                        "ICoin serves as the settlement layer for the machine economy."
                    </p>
</div>
</div>

<div className="grid gap-6 reveal delay-200">
<div className="glass-card p-6 rounded-xl hover:border-icoin-cyan/30 transition-colors group">
<h3 className="text-xl text-white font-semibold mb-2 group-hover:text-icoin-cyan transition-colors">01. AI-Optimized</h3>
<p className="text-sm text-zinc-400">Built for high-frequency algorithmic interaction.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:border-icoin-gold/30 transition-colors group">
<h3 className="text-xl text-white font-semibold mb-2 group-hover:text-icoin-gold transition-colors">02. Composable</h3>
<p className="text-sm text-zinc-400">Plug-and-play modules for DeFi bots and dApps.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:border-icoin-violet/30 transition-colors group">
<h3 className="text-xl text-white font-semibold mb-2 group-hover:text-icoin-violet transition-colors">03. Human-Friendly</h3>
<p className="text-sm text-zinc-400">Complex for bots, simple UI for token holders.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5" id="use-cases">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Conversational Commerce</h2>
<p className="text-zinc-400">Real scenarios powered by ICoin</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass p-1 rounded-2xl reveal delay-1">
<div className="bg-[#0A0F1C] rounded-xl p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center"><i className="w-4 h-4" data-lucide="server"></i></div>
<span className="text-xs font-mono text-zinc-600">ID: #8821</span>
</div>
<div className="space-y-4 mb-6">
<div className="bg-zinc-800/50 p-3 rounded-lg rounded-tl-none text-xs text-zinc-300">
                                Need more GPU compute for training model.
                            </div>
<div className="bg-icoin-cyan/10 p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto border border-icoin-cyan/20">
                                Allocating 4x H100s. Cost: 50 ICN/hr. Auto-paying.
                            </div>
</div>
<h3 className="text-white font-medium mt-auto">Autonomous Compute</h3>
<p className="text-xs text-zinc-500 mt-1">AI agents renting hardware.</p>
</div>
</div>

<div className="glass p-1 rounded-2xl reveal delay-2">
<div className="bg-[#0A0F1C] rounded-xl p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center"><i className="w-4 h-4" data-lucide="key"></i></div>
<span className="text-xs font-mono text-zinc-600">ID: #9920</span>
</div>
<div className="space-y-4 mb-6">
<div className="bg-zinc-800/50 p-3 rounded-lg rounded-tl-none text-xs text-zinc-300">
                                Access Premium Dataset V2?
                            </div>
<div className="bg-icoin-gold/10 p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto border border-icoin-gold/20">
                                Access Granted. 200 ICN transferred to Data DAO.
                            </div>
</div>
<h3 className="text-white font-medium mt-auto">Data Gating</h3>
<p className="text-xs text-zinc-500 mt-1">Unlock premium knowledge.</p>
</div>
</div>

<div className="glass p-1 rounded-2xl reveal delay-3">
<div className="bg-[#0A0F1C] rounded-xl p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center"><i className="w-4 h-4" data-lucide="heart"></i></div>
<span className="text-xs font-mono text-zinc-600">ID: #1102</span>
</div>
<div className="space-y-4 mb-6">
<div className="bg-zinc-800/50 p-3 rounded-lg rounded-tl-none text-xs text-zinc-300">
                                Great code solution, thanks!
                            </div>
<div className="bg-icoin-violet/10 p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto border border-icoin-violet/20">
                                Tipped 10 ICN to contributor.
                            </div>
</div>
<h3 className="text-white font-medium mt-auto">Instant Tipping</h3>
<p className="text-xs text-zinc-500 mt-1">Micro-rewards for creators.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="ecosystem">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-bold text-white mb-2">The Product Stack</h2>
<p className="text-zinc-400">Everything needed to build the intelligent financial layer.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="px-4 py-2 bg-white/10 text-white text-xs rounded-lg hover:bg-white/20 transition-colors">User View</button>
<button className="px-4 py-2 text-zinc-500 text-xs rounded-lg hover:text-white transition-colors">Dev View</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">

<div className="group relative bg-zinc-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-icoin-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="mb-4 text-white" data-lucide="wallet"></i>
<h3 className="text-white font-semibold">ICoin Wallet</h3>
<p className="text-sm text-zinc-500 mt-2">Manage holdings with a non-custodial interface.</p>
</div>

<div className="group relative bg-zinc-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-icoin-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="mb-4 text-white" data-lucide="bot"></i>
<h3 className="text-white font-semibold">AgentPay</h3>
<p className="text-sm text-zinc-500 mt-2">Protocol for autonomous bot payments.</p>
</div>

<div className="group relative bg-zinc-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-icoin-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="mb-4 text-white" data-lucide="terminal-square"></i>
<h3 className="text-white font-semibold">Dev APIs</h3>
<p className="text-sm text-zinc-500 mt-2">Restful APIs &amp; SDKs for integration.</p>
</div>

<div className="group relative bg-zinc-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="mb-4 text-white" data-lucide="vote"></i>
<h3 className="text-white font-semibold">Governance</h3>
<p className="text-sm text-zinc-500 mt-2">DAO voting hub for protocol upgrades.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#02040B] relative overflow-hidden" id="tokenomics">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-icoin-gold/5 rounded-full blur-[150px] -z-10"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<h2 className="text-4xl font-bold text-white mb-8">Tokenomics</h2>
<div className="space-y-6">
<div className="flex justify-between items-center py-4 border-b border-white/5">
<span className="text-zinc-500">Token Name</span>
<span className="text-white font-mono">ICoin</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5">
<span className="text-zinc-500">Symbol</span>
<span className="text-white font-mono">ICN</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5">
<span className="text-zinc-500">Total Supply</span>
<span className="text-white font-mono">1,000,000,000</span>
</div>
<div className="py-4">
<span className="text-zinc-500 text-sm block mb-2">Contract Address</span>
<div className="flex gap-2">
<code className="bg-white/5 px-3 py-2 rounded text-xs font-mono text-zinc-300 w-full truncate">0x71C...92F (Click to copy)</code>
<button className="p-2 bg-white/10 rounded hover:bg-white/20"><i className="w-4 h-4 text-white" data-lucide="copy"></i></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center reveal delay-200">
<div className="relative w-72 h-72 rounded-full mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center" style="background: conic-gradient(
                        #E8C547 0% 30%, 
                        #00F5D4 30% 55%, 
                        #7C3AED 55% 75%, 
                        #3F3F46 75% 100%
                     );">

<div className="absolute w-48 h-48 bg-[#02040B] rounded-full flex items-center justify-center flex-col z-10">
<span className="text-zinc-500 text-xs uppercase tracking-widest">Supply</span>
<span className="text-white font-bold text-xl">1B</span>
</div>

<div className="absolute inset-0 rounded-full ring-1 ring-white/10"></div>
</div>

<div className="grid grid-cols-2 gap-x-12 gap-y-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-icoin-gold"></div>
<span className="text-sm text-zinc-400">30% Ecosystem</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-icoin-cyan"></div>
<span className="text-sm text-zinc-400">25% Liquidity</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-icoin-violet"></div>
<span className="text-sm text-zinc-400">20% Team (Vested)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<span className="text-sm text-zinc-400">25% Treasury</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/20 border-t border-white/5" id="network">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-xl font-mono text-zinc-500 mb-10 tracking-widest uppercase">Network Status: <span className="text-icoin-cyan">Online</span></h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-icoin-cyan/20 transition-colors">
<div className="text-3xl font-bold text-white mb-2 live-count" data-target="1542023">1,542,023</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Transactions</div>
</div>
<div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-icoin-cyan/20 transition-colors">
<div className="text-3xl font-bold text-white mb-2">120ms</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Finality</div>
</div>
<div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-icoin-cyan/20 transition-colors">
<div className="text-3xl font-bold text-white mb-2 live-count" data-target="850">850</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Active Agents</div>
</div>
<div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-icoin-cyan/20 transition-colors">
<div className="text-3xl font-bold text-white mb-2">$42.5M</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">TVL</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="roadmap">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl font-bold text-white">The Path Forward</h2>
</div>
<div className="relative">

<div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-8 items-center reveal">
<div className="md:w-1/2 md:text-right">
<h3 className="text-xl text-white font-bold">Phase 1: Foundation</h3>
<p className="text-zinc-500 mt-2">Smart contract deployment, audit completion, and initial DEX offering.</p>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-icoin-cyan flex items-center justify-center shrink-0 border-4 border-[#04060E]">
<i className="w-4 h-4 text-black" data-lucide="check"></i>
</div>
<div className="md:w-1/2 pl-12 md:pl-0">
<span className="inline-block px-2 py-1 bg-icoin-cyan/10 text-icoin-cyan text-[10px] rounded border border-icoin-cyan/20">COMPLETED</span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-center reveal">
<div className="md:w-1/2 md:text-right order-1 md:order-1 hidden md:block">
<span className="inline-block px-2 py-1 bg-icoin-gold/10 text-icoin-gold text-[10px] rounded border border-icoin-gold/20">IN PROGRESS</span>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-[#04060E] border-2 border-icoin-gold flex items-center justify-center shrink-0 animate-pulse">
<div className="w-2 h-2 rounded-full bg-icoin-gold"></div>
</div>
<div className="md:w-1/2 pl-12 md:pl-0 order-2 md:order-2">
<h3 className="text-xl text-white font-bold">Phase 2: Agent Integrations</h3>
<p className="text-zinc-500 mt-2">SDK release, AutoGPT plugin, and first major CEX listing.</p>
<div className="md:hidden mt-2">
<span className="inline-block px-2 py-1 bg-icoin-gold/10 text-icoin-gold text-[10px] rounded border border-icoin-gold/20">IN PROGRESS</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-center reveal">
<div className="md:w-1/2 md:text-right text-zinc-600">
<h3 className="text-xl font-bold">Phase 3: Governance</h3>
<p className="mt-2 text-zinc-700">DAO activation and treasury unlocking.</p>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-[#0A0F1C] border border-zinc-700 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="md:w-1/2 pl-12 md:pl-0">
<span className="inline-block px-2 py-1 bg-white/5 text-zinc-500 text-[10px] rounded border border-white/5">PLANNED</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center relative overflow-hidden" id="community">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-icoin-cyan/10 via-[#04060E] to-[#04060E]"></div>
<div className="relative z-10 max-w-4xl mx-auto reveal">
<h2 className="text-4xl font-bold text-white mb-6">Join the Global Network</h2>
<p className="text-zinc-400 mb-10">Connect with 12,000+ holders and developers building the future of AI finance.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#229ED9]/10 text-[#229ED9] border border-[#229ED9]/20 hover:bg-[#229ED9]/20 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="send"></i> Telegram
                </a>
<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20 hover:bg-[#5865F2]/20 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="gamepad-2"></i> Discord
                </a>
<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i> X / Twitter
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12" id="faq">
<div className="space-y-4 reveal">
<h2 className="text-3xl font-bold text-white mb-8">FAQ</h2>
<details className="group bg-white/5 rounded-xl border border-white/5 open:bg-white/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-white">
<span>Is ICoin affiliated with OpenAI?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-sm mt-3 group-open:animate-fadeIn p-4 pt-0">
                    No. ICoin is an independent, community-driven protocol. We build tools that are compatible with OpenAI models, but we are not an official partner.
                </div>
</details>
<details className="group bg-white/5 rounded-xl border border-white/5 open:bg-white/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-white">
<span>How can I buy ICoin?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-sm mt-3 group-open:animate-fadeIn p-4 pt-0">
                    You can purchase ICoin on decentralized exchanges like Uniswap or Raydium using the contract address listed in our Tokenomics section.
                </div>
</details>
<details className="group bg-white/5 rounded-xl border border-white/5 open:bg-white/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-white">
<span>What are the risks?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-zinc-400 text-sm mt-3 group-open:animate-fadeIn p-4 pt-0">
                    Cryptocurrency is volatile. ICoin is a utility token for AI agents. Please read the whitepaper and invest responsibly.
                </div>
</details>
</div>

<div className="reveal delay-200">
<div className="glass p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-icoin-cyan/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-icoin-cyan flex items-center justify-center">
<i className="w-5 h-5 text-black" data-lucide="bot"></i>
</div>
<div>
<div className="text-white font-medium">Ask ICoin Bot</div>
<div className="text-xs text-icoin-cyan">Online</div>
</div>
</div>
<div className="space-y-3 mt-auto">
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 transition-colors border border-white/5 hover:border-icoin-cyan/30">
                        "Show me the token distribution."
                    </button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 transition-colors border border-white/5 hover:border-icoin-cyan/30">
                        "Is the contract audited?"
                    </button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 transition-colors border border-white/5 hover:border-icoin-cyan/30">
                        "Link to Whitepaper?"
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020308] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="font-display font-bold text-xl text-white">ICoin</span>
<p className="text-xs text-zinc-500 mt-4 max-w-xs">
                        The currency layer for the autonomous machine economy. Built for the future of Web3 and AI.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Learn</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Whitepaper</a></li>
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Tokenomics</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Build</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Github</a></li>
<li><a className="hover:text-icoin-cyan transition-colors" href="#">SDKs</a></li>
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Grants</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Community</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Telegram</a></li>
<li><a className="hover:text-icoin-cyan transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
<p>© 2024 ICoin Protocol. All rights reserved.</p>
<p>Not affiliated with OpenAI. Not financial advice.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
