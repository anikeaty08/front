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



        function copyColor(hex, name) {
            // Copy to clipboard
            navigator.clipboard.writeText(hex).then(() => {
                showToast(hex, name);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }

        function showToast(hex, name) {
            const container = document.getElementById('toast-container');
            
            // Create toast element
            const toast = document.createElement('div');
            toast.className = 'bg-[#16181F] border border-[#2A2D35] text-[#E9EBF0] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 toast-enter pointer-events-auto min-w-[200px]';
            toast.innerHTML = `
                <div class="w-4 h-4 rounded-full" style="background-color: ${hex}"></div>
                <div class="flex flex-col">
                    <span class="text-xs font-medium">${name}</span>
                    <span class="text-[10px] text-[#A3A6B0] font-mono">Copied ${hex}</span>
                </div>
            `;

            container.appendChild(toast);

            // Animate In
            requestAnimationFrame(() => {
                toast.classList.add('toast-enter-active');
                toast.classList.remove('toast-enter');
            });

            // Remove after 3 seconds
            setTimeout(() => {
                toast.classList.add('toast-exit-active');
                toast.addEventListener('transitionend', () => {
                    toast.remove();
                });
            }, 3000);
        }
    
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
      

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>



<section className="relative w-full min-h-screen bg-[#0D0F12] text-[#E9EBF0] flex flex-col border-b border-[#2A2D35]">

<nav className="sticky top-0 z-40 w-full border-b border-[#2A2D35] bg-[#0D0F12]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 tracking-tight font-semibold text-lg text-[#FFD65A]">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFD65A] to-[#7366FF] flex items-center justify-center text-[#1C1E29]">
                        P
                    </div>
                    POLYSHARES
                </div>
<div className="hidden md:flex items-center gap-8 text-sm text-[#A3A6B0]">
<a className="hover:text-[#FFD65A] transition-colors" href="#">Markets</a>
<a className="hover:text-[#FFD65A] transition-colors" href="#">Exchange</a>
<a className="text-[#E9EBF0] font-medium border-b border-[#FFD65A]" href="#">Governance</a>
</div>
<div className="flex items-center gap-4">
<button className="text-[#A3A6B0] hover:text-[#E9EBF0]"><iconify-icon icon="lucide:search" width="20"></iconify-icon></button>
<button className="bg-[#FFD65A] hover:bg-[#FFB547] text-[#1C1E29] px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(255,214,90,0.15)]">
                        CONNECT
                    </button>
</div>
</div>
</nav>

<div className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col gap-8 justify-center">
<div className="space-y-4">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2D35] bg-[#1F212A] text-[#FFD65A] text-xs font-medium tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-[#A9FF4C] animate-pulse"></span>
                        SOLAR PULSE SYSTEM
                    </span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                        Balanced <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFD65A] to-[#7366FF]">Premium Yields.</span>
</h1>
<p className="text-[#A3A6B0] text-lg leading-relaxed max-w-md">
                        Experience the warmth of decentralized finance with a UI optimized for clarity, warmth, and balanced contrast.
                    </p>
</div>

<div className="flex flex-wrap items-center gap-4">

<button className="group relative px-6 py-3 rounded-lg bg-[#1C1E29] text-[#E9EBF0] font-medium text-sm overflow-hidden border border-[#2A2D35] hover:border-[#FFD65A] transition-all duration-300">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFD65A] to-[#7366FF] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                            Get Started 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>

<button className="px-6 py-3 rounded-lg bg-[#1F212A] text-[#A3A6B0] hover:text-[#E9EBF0] hover:bg-[#2A2D35] font-medium text-sm transition-all">
                        Documentation
                    </button>
</div>

<div className="flex gap-6 text-sm">
<a className="text-[#547AFF] hover:text-[#8AAFFF] flex items-center gap-1 transition-colors" href="#">
                        Learn More <iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
<a className="text-[#A3A6B0] hover:text-[#FF5D8F] flex items-center gap-1 transition-colors" href="#">
                        Report Issue <iconify-icon icon="lucide:alert-circle" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

<div className="bg-[#16181F] border border-[#2A2D35] rounded-xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#FFD65A]/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7366FF] to-[#FFD65A]"></div>
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-[#A3A6B0] text-xs uppercase tracking-wider font-semibold">Total Balance</p>
<h3 className="text-3xl font-medium text-[#E9EBF0] mt-1">$24,593.00</h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#1F212A] flex items-center justify-center text-[#FFD65A]">
<iconify-icon icon="lucide:wallet" width="20"></iconify-icon>
</div>
</div>

<div className="h-24 w-full mb-4 relative">
<svg className="w-full h-full stroke-[#A9FF4C] fill-none stroke-[1.5]" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 Q10,35 20,25 T40,20 T60,28 T80,10 T100,5"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-[#16181F] to-transparent opacity-80"></div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-[#1F212A] border border-[#2A2D35]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FFD65A]/20 flex items-center justify-center text-[#FFD65A]">
<iconify-icon icon="lucide:bitcoin" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[#E9EBF0] text-sm font-medium">Bitcoin</span>
<span className="text-[#A9FF4C] text-xs">+2.4%</span>
</div>
</div>
<span className="text-[#E9EBF0] text-sm font-medium">0.45 BTC</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-[#1F212A] border border-[#2A2D35]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FF5D8F]/20 flex items-center justify-center text-[#FF5D8F]">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[#E9EBF0] text-sm font-medium">Solana</span>
<span className="text-[#FF5D8F] text-xs">-1.2%</span>
</div>
</div>
<span className="text-[#E9EBF0] text-sm font-medium">145 SOL</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="bg-[#16181F] border border-[#2A2D35] rounded-xl p-5 space-y-4">
<label className="block">
<span className="text-[#A3A6B0] text-xs font-medium mb-1 block">Email Address</span>
<div className="relative">
<input className="w-full bg-[#1F212A] border border-[#2A2D35] rounded-md px-3 py-2 text-sm text-[#5D606B] cursor-not-allowed" disabled="" placeholder="user@polyshares.com" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-[#5D606B]" icon="lucide:lock" width="14"></iconify-icon>
</div>
</label>

<div className="flex items-center justify-between">
<span className="text-[#E9EBF0] text-sm">Enable Notifications</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1F212A] appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-5 text-[#FFD65A]" id="solar-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#2A2D35] cursor-pointer transition-colors duration-300 checked:bg-[#FFD65A]" htmlFor="solar-toggle"></label>
</input></div>
</div>

<div className="flex items-center gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#5D606B] bg-[#1F212A] checked:border-[#FFD65A] checked:bg-[#FFD65A] transition-all" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1C1E29] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-[#A3A6B0] text-xs">Agree to terms</span>
</div>
</div>

<div className="bg-[#FF5D8F]/10 border border-[#FF5D8F]/20 rounded-lg p-4 flex gap-3">
<iconify-icon className="text-[#FF5D8F]" icon="lucide:alert-triangle" width="20"></iconify-icon>
<div>
<h4 className="text-[#FF5D8F] text-sm font-medium">Session Expired</h4>
<p className="text-[#FF5D8F]/80 text-xs mt-1">Please refresh your authentication token.</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#0D0F12] border-t border-[#2A2D35] p-8">
<h3 className="text-[#A3A6B0] text-xs font-semibold uppercase tracking-widest mb-6">Option 1: Solar Pulse Palette</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

<button className="group text-left" onclick="copyColor('#FFD65A', 'Golden Solar')">
<div className="h-16 w-full rounded-md bg-[#FFD65A] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Golden Solar</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#FFD65A</p>
</button>
<button className="group text-left" onclick="copyColor('#FFB547', 'Solar Ember')">
<div className="h-16 w-full rounded-md bg-[#FFB547] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Solar Ember</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#FFB547</p>
</button>
<button className="group text-left" onclick="copyColor('#7366FF', 'Photon Violet')">
<div className="h-16 w-full rounded-md bg-[#7366FF] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Photon Violet</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#7366FF</p>
</button>

<button className="group text-left" onclick="copyColor('#1C1E29', 'Deep Space Blue')">
<div className="h-16 w-full rounded-md bg-[#1C1E29] border border-[#2A2D35] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Deep Space</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#1C1E29</p>
</button>

<button className="group text-left" onclick="copyColor('#A9FF4C', 'Neon Lime')">
<div className="h-16 w-full rounded-md bg-[#A9FF4C] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Neon Lime</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#A9FF4C</p>
</button>
<button className="group text-left" onclick="copyColor('#FF5D8F', 'Magenta Pulse')">
<div className="h-16 w-full rounded-md bg-[#FF5D8F] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Magenta Pulse</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#FF5D8F</p>
</button>
<button className="group text-left" onclick="copyColor('#547AFF', 'Photon Blue')">
<div className="h-16 w-full rounded-md bg-[#547AFF] mb-2 shadow-lg group-hover:scale-105 transition-transform"></div>
<p className="text-[#E9EBF0] text-xs font-medium">Photon Blue</p>
<p className="text-[#5D606B] text-[10px] uppercase font-mono">#547AFF</p>
</button>
</div>
</div>
</section>



<section className="relative w-full min-h-screen bg-[#0B0D11] text-[#F2F4F9] flex flex-col">

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, #161820 0%, #0B0D11 70%)', opacity: '0.5'}}></div>

<nav className="sticky top-0 z-40 w-full border-b border-[#2B2E38] bg-[#0B0D11]/90 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 tracking-tighter font-semibold text-lg text-[#F2F4F9]">
<div className="relative w-6 h-6">
<div className="absolute inset-0 border border-[#FFE55A] rotate-45"></div>
<div className="absolute inset-1 bg-[#5A73FF]"></div>
</div>
                    PHOTON<span className="text-[#FFE55A]">ALLOY</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-[#161820] p-1 rounded-md border border-[#2B2E38]">
<button className="px-4 py-1.5 text-xs font-medium bg-[#1E2029] text-[#F2F4F9] rounded-sm shadow-sm border border-[#2B2E38]">Dashboard</button>
<button className="px-4 py-1.5 text-xs font-medium text-[#B2B4BF] hover:text-[#F2F4F9] transition-colors">Trade</button>
<button className="px-4 py-1.5 text-xs font-medium text-[#B2B4BF] hover:text-[#F2F4F9] transition-colors">Pools</button>
</div>
<div className="flex items-center gap-4">
<div className="h-2 w-2 rounded-full bg-[#C8FF5C] animate-ping"></div>
<button className="bg-[#FFE55A] hover:bg-[#FFC94C] text-[#0B0D11] px-5 py-2 rounded-sm text-xs font-bold tracking-tight uppercase transition-all hover:shadow-[0_0_20px_rgba(255,229,90,0.3)]">
                        Launch App
                    </button>
</div>
</div>
</nav>

<div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col gap-8 justify-center">
<div className="space-y-4">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                        Sharper <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE55A] to-[#5A73FF]">Defi Protocols.</span>
</h1>
<p className="text-[#B2B4BF] text-lg leading-relaxed max-w-md font-light">
                        High-frequency execution environment. Engineered for clarity with neon accents and deep graphite surfaces.
                    </p>
</div>

<div className="flex max-w-sm w-full">
<div className="relative w-full">
<input className="w-full bg-[#161820] border border-[#2B2E38] text-[#F2F4F9] text-sm px-4 py-3 rounded-l-sm focus:outline-none focus:border-[#5A73FF] transition-colors placeholder-[#626570]" placeholder="Search Token Pair..." type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-[#626570] text-xs border border-[#2B2E38] px-1.5 py-0.5 rounded">/</span>
</div>
</div>
<button className="bg-[#10121A] border-y border-r border-[#2B2E38] px-4 hover:bg-[#1C2040] transition-colors rounded-r-sm group">
<iconify-icon className="text-[#5A73FF] group-hover:text-[#FFE55A] transition-colors" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="flex gap-8 border-l-2 border-[#FFE55A] pl-6 py-2">
<div>
<p className="text-[#626570] text-xs uppercase tracking-widest font-semibold mb-1">Latency</p>
<p className="text-[#F2F4F9] text-xl font-mono">12<span className="text-[#5A73FF]">ms</span></p>
</div>
<div>
<p className="text-[#626570] text-xs uppercase tracking-widest font-semibold mb-1">Volume</p>
<p className="text-[#F2F4F9] text-xl font-mono">$4.2<span className="text-[#FFE55A]">B</span></p>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

<div className="md:col-span-2 bg-[#161820] border border-[#2B2E38] rounded-sm p-1 shadow-lg relative">

<div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[#5A73FF] to-[#FFE55A]"></div>
<div className="p-5">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-3 items-center">
<div className="w-2 h-8 bg-[#FFE55A]"></div>
<div>
<h3 className="text-[#F2F4F9] font-medium">ETH / USDC</h3>
<p className="text-[#5A73FF] text-xs">Perpetual Contract</p>
</div>
</div>
<div className="flex gap-2">
<span className="text-[#C8FF5C] text-sm font-mono">+8.42%</span>
</div>
</div>

<div className="w-full h-48 relative border-t border-dashed border-[#2B2E38] pt-4">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 opacity-10 pointer-events-none">
<div className="border-r border-[#B2B4BF]"></div><div className="border-r border-[#B2B4BF]"></div><div className="border-r border-[#B2B4BF]"></div><div className="border-r border-[#B2B4BF]"></div><div className="border-r border-[#B2B4BF]"></div>
</div>

<svg className="w-full h-full stroke-[#7A5FFF] fill-none stroke-[2] drop-shadow-[0_0_8px_rgba(122,95,255,0.5)]" preserveaspectratio="none" viewbox="0 0 400 100">
<path d="M0,80 L40,75 L80,90 L120,60 L160,65 L200,40 L240,50 L280,20 L320,30 L360,10 L400,5"></path>
</svg>

<div className="absolute top-[5%] right-0 w-3 h-3 bg-[#FFE55A] rounded-full shadow-[0_0_10px_#FFE55A]"></div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="bg-[#1E2029] border border-[#2B2E38] p-4 rounded-sm hover:border-[#5A73FF] transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<span className="text-[#B2B4BF] text-xs group-hover:text-[#F2F4F9]">Buy Order</span>
<span className="bg-[#C8FF5C]/10 text-[#C8FF5C] text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wide">Filled</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-[#F2F4F9] font-mono">1.405 ETH</span>
<span className="text-[#B2B4BF] text-xs">$2,450.21</span>
</div>
</div>
<div className="bg-[#1E2029] border border-[#2B2E38] p-4 rounded-sm hover:border-[#FF527A] transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<span className="text-[#B2B4BF] text-xs group-hover:text-[#F2F4F9]">Stop Loss</span>
<span className="bg-[#FF527A]/10 text-[#FF527A] text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wide">Triggered</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-[#F2F4F9] font-mono">0.500 ETH</span>
<span className="text-[#B2B4BF] text-xs">$2,390.00</span>
</div>
</div>
</div>

<div className="bg-[#161820] border border-[#2B2E38] p-5 rounded-sm space-y-5">

<div>
<div className="flex justify-between text-xs text-[#B2B4BF] mb-2">
<span>Leverage</span>
<span className="text-[#FFE55A]">25x</span>
</div>
<div className="h-1.5 w-full bg-[#0B0D11] rounded-full relative">
<div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-[#5A73FF] to-[#FFE55A] rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F2F4F9] rounded-full shadow cursor-pointer hover:scale-125 transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-[#F2F4F9] text-xs">Post Only</span>
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="absolute block w-4 h-4 rounded-sm bg-[#FFE55A] appearance-none cursor-pointer transition-all duration-300 right-0" type="checkbox" />
<div className="block overflow-hidden h-4 rounded-sm bg-[#2B2E38] cursor-pointer"></div>
</input></div>
</div>
<button className="w-full py-2 bg-[#10121A] text-[#5A73FF] border border-[#5A73FF] hover:bg-[#5A73FF] hover:text-[#F2F4F9] rounded-sm text-xs uppercase tracking-wider font-bold transition-all">
                        Confirm Trade
                    </button>
</div>
</div>
</div>

<div className="w-full bg-[#0B0D11] border-t border-[#2B2E38] p-8">
<h3 className="text-[#B2B4BF] text-xs font-semibold uppercase tracking-widest mb-6">Option 2: Photon Alloy Palette</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

<button className="group text-left" onclick="copyColor('#FFE55A', 'Cyber Yellow')">
<div className="h-16 w-full rounded-sm bg-[#FFE55A] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Cyber Yellow</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#FFE55A</p>
</button>
<button className="group text-left" onclick="copyColor('#FFC94C', 'Amber Flux')">
<div className="h-16 w-full rounded-sm bg-[#FFC94C] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Amber Flux</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#FFC94C</p>
</button>
<button className="group text-left" onclick="copyColor('#5A73FF', 'Photon Indigo')">
<div className="h-16 w-full rounded-sm bg-[#5A73FF] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Photon Indigo</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#5A73FF</p>
</button>

<button className="group text-left" onclick="copyColor('#10121A', 'Void Blue')">
<div className="h-16 w-full rounded-sm bg-[#10121A] border border-[#2B2E38] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Void Blue</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#10121A</p>
</button>

<button className="group text-left" onclick="copyColor('#7A5FFF', 'Celestial Purple')">
<div className="h-16 w-full rounded-sm bg-[#7A5FFF] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Celestial Purple</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#7A5FFF</p>
</button>
<button className="group text-left" onclick="copyColor('#C8FF5C', 'Aurora Green')">
<div className="h-16 w-full rounded-sm bg-[#C8FF5C] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Aurora Green</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#C8FF5C</p>
</button>
<button className="group text-left" onclick="copyColor('#FF527A', 'Plasma Red')">
<div className="h-16 w-full rounded-sm bg-[#FF527A] mb-2 ring-1 ring-white/5 group-hover:-translate-y-1 transition-transform"></div>
<p className="text-[#F2F4F9] text-xs font-medium">Plasma Red</p>
<p className="text-[#626570] text-[10px] uppercase font-mono">#FF527A</p>
</button>
</div>
</div>
</section>



    </>
  );
}
