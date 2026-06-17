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



import { Web3Modal } from 'https://unpkg.com/@web3modal/ethers@5.0.5/dist/index.js';
window.Web3Modal = Web3Modal;



        lucide.createIcons();
    


    import { Web3Modal } from 'https://unpkg.com/@web3modal/ethers@5.0.5/dist/index.js';
  window.Web3Modal = Web3Modal;

  const projectId = '2145f647d83006b72cb38fba269ac23a'; // ← your real ID

  const web3Modal = new window.Web3Modal.default({
    projectId,
    walletConnectVersion: 2,
    themeMode: 'dark',
    themeVariables: {
      '--w3m-accent': '#fbbf24',
      '--w3m-background': '#030303',
      '--w3m-text-medium': '#e5e7eb'
    }
  });

  let provider = null;
  let userAddress = null;
  const connectBtn = document.getElementById('connect-wallet-btn');

  async function connect() {
    connectBtn.innerHTML = 'Connecting...';
    connectBtn.classList.add('connecting');

    try {
      provider = await web3Modal.open();                    // ← this shows the modal
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();
      userAddress = await signer.getAddress();

      const short = `${userAddress.slice(0,6)}...${userAddress.slice(-4)}`;
      connectBtn.innerHTML = short;
      connectBtn.classList.remove('connecting', 'bg-white', 'text-black', 'hover:bg-zinc-200');
      connectBtn.classList.add('bg-amber-500/20', 'text-amber-300', 'border', 'border-amber-500/50');

      // Listen to wallet events
      provider.on('accountsChanged', () => location.reload());
      provider.on('chainChanged', () => location.reload());
      provider.on('disconnect', disconnect);

      console.log('Connected:', userAddress);
    } catch (err) {
      console.log('User rejected or error:', err);
      connectBtn.innerHTML = 'Connect Wallet';
      connectBtn.classList.remove('connecting');
    }
  }

  function disconnect() {
    if (provider?.disconnect) provider.disconnect();
    web3Modal.clearCachedProvider();
    provider = null;
    userAddress = null;

    connectBtn.innerHTML = 'Connect Wallet';
    connectBtn.classList.remove('bg-amber-500/20', 'text-amber-300', 'border', 'border-amber-500/50', 'connecting');
    connectBtn.classList.add('bg-white', 'text-black', 'hover:bg-zinc-200');
  }

  // Auto-reconnect if user was connected before
  if (web3Modal.getCachedProvider()) {
    connect();
  }

  // Click handler (connect or disconnect)
  connectBtn.addEventListener('click', () => {
    if (userAddress) disconnect();
    else connect();
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-white tracking-tighter">SIAMWALLET</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Markets</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Exchange</a>
<a className="hover:text-white transition-colors text-zinc-400" href="#">Earn</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">PromptPay</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    TH / EN
                </button>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all border border-transparent" id="connect-wallet-btn">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Now supporting PromptPay transfers
                </div>
<h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                    The future of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Digital Baht.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                    Buy, sell, and store cryptocurrencies with zero fees for local transfers. The most secure wallet built for the Thai ecosystem.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
<span className="">Get Started</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-zinc-800 hover:bg-zinc-900 text-white font-medium transition-all flex items-center gap-2">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<span className="">App Store</span>
</button>
<button className="h-12 px-8 rounded-full border border-zinc-800 hover:bg-zinc-900 text-white font-medium transition-all flex items-center gap-2">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="">Google Play</span>
</button>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-white/5">
<div>
<p className="text-2xl font-medium text-white tracking-tight">0%</p>
<p className="text-xs text-zinc-500 mt-1">Transfer Fees</p>
</div>
<div className="w-px h-10 bg-zinc-800"></div>
<div className="">
<p className="text-2xl font-medium text-white tracking-tight">2M+</p>
<p className="text-xs text-zinc-500 mt-1">Thai Users</p>
</div>
<div className="w-px h-10 bg-zinc-800"></div>
<div className="">
<p className="text-2xl font-medium text-white tracking-tight">24/7</p>
<p className="text-xs text-zinc-500 mt-1">Support (TH/EN)</p>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl blur opacity-20"></div>

<div className="relative glass-panel rounded-2xl p-6 shadow-2xl">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
<svg className="lucide lucide-user w-4 h-4 text-zinc-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-xs text-zinc-500">Total Balance</p>
<p className="text-sm text-white font-medium">Somchai's Wallet</p>
</div>
</div>
<button className="p-2 hover:bg-white/5 rounded-full transition-colors">
<svg className="lucide lucide-bell w-5 h-5 text-zinc-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<div className="mb-8">
<h2 className="text-4xl font-medium text-white tracking-tight mb-1">฿ 1,240,500<span className="text-zinc-500">.00</span></h2>
<div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="">+4.5% today</span>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mb-8">
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-all text-amber-400">
<svg className="lucide lucide-arrow-down-left w-5 h-5" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<span className="text-xs text-zinc-400">Deposit</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-all text-white">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="text-xs text-zinc-400">Send</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-all text-white">
<svg className="lucide lucide-repeat w-5 h-5" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<span className="text-xs text-zinc-400">Swap</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-all text-white">
<svg className="lucide lucide-qr-code w-5 h-5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<span className="text-xs text-zinc-400">Scan</span>
</button>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
<svg className="lucide lucide-bitcoin w-5 h-5" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">Bitcoin</p>
<p className="text-xs text-zinc-500">BTC</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">฿ 2,104,200</p>
<p className="text-xs text-emerald-400">+2.4%</p>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
<svg className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">Ethereum</p>
<p className="text-xs text-zinc-500">ETH</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">฿ 82,450</p>
<p className="text-xs text-emerald-400">+1.8%</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-xl border border-white/10 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#003D7C] rounded flex items-center justify-center">
<span className="text-[10px] text-white font-bold leading-tight text-center">PromptPay</span>
</div>
<div className="">
<p className="text-xs font-medium text-white">Instant Withdrawal</p>
<p className="text-[10px] text-zinc-400">To Thai Bank Accounts</p>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-y overflow-hidden bg-black/20 border-white/5 pt-3 pb-3">
<style>
        @keyframes scroll-left-to-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
        .animate-scroll-ltr {
            animation: scroll-left-to-right 40s linear infinite;
            min-width: max-content;
        }
        .animate-scroll-ltr:hover {
            animation-play-state: paused;
        }
    </style>
<div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
<div className="flex gap-12 animate-scroll-ltr whitespace-nowrap px-6">

<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">BTC/THB</span>
<span className="text-xs font-medium text-white">฿ 2,105,420</span>
<span className="text-xs text-emerald-400">+1.2%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">ETH/THB</span>
<span className="text-xs font-medium text-white">฿ 82,450</span>
<span className="text-xs text-red-400">-0.5%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">USDT/THB</span>
<span className="text-xs font-medium text-white">฿ 34.52</span>
<span className="text-xs text-zinc-500">0.0%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">BNB/THB</span>
<span className="text-xs font-medium text-white">฿ 11,240</span>
<span className="text-xs text-emerald-400">+2.1%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">KUB/THB</span>
<span className="text-xs font-medium text-white">฿ 58.20</span>
<span className="text-xs text-emerald-400">+5.4%</span>
</div>

<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">BTC/THB</span>
<span className="text-xs font-medium text-white">฿ 2,105,420</span>
<span className="text-xs text-emerald-400">+1.2%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">ETH/THB</span>
<span className="text-xs font-medium text-white">฿ 82,450</span>
<span className="text-xs text-red-400">-0.5%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">USDT/THB</span>
<span className="text-xs font-medium text-white">฿ 34.52</span>
<span className="text-xs text-zinc-500">0.0%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">BNB/THB</span>
<span className="text-xs font-medium text-white">฿ 11,240</span>
<span className="text-xs text-emerald-400">+2.1%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400">KUB/THB</span>
<span className="text-xs font-medium text-white">฿ 58.20</span>
<span className="text-xs text-emerald-400">+5.4%</span>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Instant Swap</h2>
<p className="text-zinc-400 text-sm">Exchange your assets instantly with the best rates in Thailand.</p>
</div>
<div className="glass-panel rounded-2xl p-1 shadow-xl border border-white/10">
<div className="bg-black/40 rounded-xl p-6 space-y-6">

<div className="flex justify-between items-center">
<input className="bg-transparent text-3xl font-medium text-white focus:outline-none w-1/2 placeholder-zinc-700" type="text" value="10,000"/>
<button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-lg border border-zinc-700 transition-all">
<div className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
<span className="text-[10px] font-bold">฿</span>
</div>
<span className="text-sm font-medium text-white">THB</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="relative h-px bg-zinc-800 my-4">
<button className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center hover:border-amber-500/50 hover:text-amber-500 transition-all text-zinc-400">
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>

<div className="flex justify-between items-center">
<input className="bg-transparent text-3xl font-medium text-amber-400 focus:outline-none w-1/2" readonly="" type="text" value="0.0047"/>
<button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-lg border border-zinc-700 transition-all">
<div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
<svg className="lucide lucide-bitcoin w-3 h-3" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<span className="text-sm font-medium text-white">BTC</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="pt-4 border-t border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-500 font-medium">Slippage Tolerance</span>
<span className="text-xs text-amber-400 font-mono">0.5%</span>
</div>
<input className="w-full" max="5" min="0.1" step="0.1" type="range" value="0.5"/>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-zinc-600">0.1%</span>
<span className="text-[10px] text-zinc-600">5%</span>
</div>
</div>
<button className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all tracking-tight mt-2">
                    Review Swap
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-landmark w-6 h-6" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Thai Bank Integration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Connect seamlessly with KBank, SCB, and Bangkok Bank. Instant deposits via QR code.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">SEC Regulated</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Fully compliant with Thailand's Digital Asset regulations. Your funds are insured and secure.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-languages w-6 h-6" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Native Thai Support</h3>
<p className="text-sm text-zinc-400 leading-relaxed">24/7 customer support in Thai and English. We understand your local needs.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tight">SIAMWALLET</span>
<span className="text-xs text-zinc-600">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Fees</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</footer>


<style>
    #connect-wallet-btn.connecting {
        opacity: 0.6;
        pointer-events: none;
    }
</style>

    </>
  );
}
